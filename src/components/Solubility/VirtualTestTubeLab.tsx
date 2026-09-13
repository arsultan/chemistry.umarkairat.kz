"use client";

import React, { useState, useEffect } from "react";
import { Language } from "@/types/chemistry";
import { 
  SolubilityCell, 
  CationInfo, 
  AnionInfo, 
  CATIONS_LIST, 
  ANIONS_LIST 
} from "@/data/solubilityTable";
import { soundEffects } from "@/lib/soundEffects";
import { 
  Sparkles, 
  RotateCcw, 
  Flame, 
  Droplets, 
  Beaker, 
  Eye, 
  Thermometer,
  Layers,
  ThermometerSnowflake,
  Wind
} from "lucide-react";

interface VirtualTestTubeLabProps {
  language: Language;
  currentMixCell: SolubilityCell | null;
  currentCationInfo: CationInfo;
  currentAnionInfo: AnionInfo;
  onSynthesizeInLab?: (cell: SolubilityCell) => void;
  onMixTrigger?: () => void;
}

export const VirtualTestTubeLab: React.FC<VirtualTestTubeLabProps> = ({
  language,
  currentMixCell,
  currentCationInfo,
  currentAnionInfo,
  onSynthesizeInLab,
  onMixTrigger
}) => {
  // Reaction & Animation Phases: 'idle' | 'pouring' | 'reacting' | 'settled'
  const [phase, setPhase] = useState<'idle' | 'pouring' | 'reacting' | 'settled'>('settled');
  const [isShaking, setIsShaking] = useState(false);
  const [isHeating, setIsHeating] = useState(false);
  const [temperature, setTemperature] = useState(20);
  const [suspensionFactor, setSuspensionFactor] = useState(0); // 0 = settled, 1 = fully dispersed suspension
  const [isDecomposedCuO, setIsDecomposedCuO] = useState(false); // Cu(OH)2 -> CuO (black)
  const [isPbI2Dissolved, setIsPbI2Dissolved] = useState(false); // PbI2 dissolves in hot water
  const [isGoldenRainActive, setIsGoldenRainActive] = useState(false); // PbI2 crystallizes on cooling
  const [isFe2Oxidized, setIsFe2Oxidized] = useState(false); // Fe(OH)2 -> Fe(OH)3 (rust)
  const [showIonMicroView, setShowIonMicroView] = useState(false);
  const [fluidHeight, setFluidHeight] = useState(72);
  const [animKey, setAnimKey] = useState(0);

  // Chemical characteristics
  const isPrecipitate = currentMixCell?.status === 'insoluble';
  const isGas = currentMixCell?.status === 'gas';
  const isGoldenRain = currentCationInfo.id === 'Pb' && currentAnionInfo.id === 'I';
  const isCopperHydroxide = currentCationInfo.id === 'Cu' && currentAnionInfo.id === 'OH';
  const isIron2Hydroxide = currentCationInfo.id === 'Fe2' && currentAnionInfo.id === 'OH';
  const isSoluble = currentMixCell?.status === 'soluble';
  const isSlightlySoluble = currentMixCell?.status === 'slightly-soluble';

  // Trigger full reaction animation sequence
  const startReactionSequence = () => {
    setAnimKey(prev => prev + 1);
    setPhase('pouring');
    setIsHeating(false);
    setTemperature(20);
    setSuspensionFactor(0);
    setIsDecomposedCuO(false);
    setIsPbI2Dissolved(false);
    setIsGoldenRainActive(false);
    setIsFe2Oxidized(false);
    setFluidHeight(20);
    soundEffects.playPour();

    // Droplets falling into test tube (0.9s)
    setTimeout(() => {
      setFluidHeight(72);
      setPhase('reacting');
      
      if (currentMixCell?.status === 'gas') {
        soundEffects.playFizz();
      } else if (currentMixCell?.status === 'insoluble') {
        soundEffects.playCrystals();
      } else {
        soundEffects.playDiscovery();
      }

      // Settled phase (2.0s)
      setTimeout(() => {
        setPhase('settled');
      }, 1100);
    }, 900);
  };

  useEffect(() => {
    startReactionSequence();
  }, [currentMixCell?.formula, currentCationInfo.id, currentAnionInfo.id]);

  // Temperature simulation interval
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHeating) {
      interval = setInterval(() => {
        setTemperature(prev => {
          if (prev >= 100) return 100;
          const next = prev + 3;

          // Check chemical thresholds
          if (next >= 65 && isCopperHydroxide && !isDecomposedCuO) {
            setIsDecomposedCuO(true);
            soundEffects.playReaction();
          }
          if (next >= 65 && isGoldenRain) {
            setIsPbI2Dissolved(true);
            setIsGoldenRainActive(false);
          }
          if (next >= 50 && isIron2Hydroxide && !isFe2Oxidized) {
            setIsFe2Oxidized(true);
            soundEffects.playReaction();
          }
          return next;
        });
      }, 150);
    } else {
      interval = setInterval(() => {
        setTemperature(prev => {
          if (prev <= 20) return 20;
          const next = prev - 2;

          // If PbI2 was hot & dissolved, cooling below 65°C triggers the Golden Rain crystallization!
          if (next <= 65 && isGoldenRain && isPbI2Dissolved) {
            setIsGoldenRainActive(true);
            soundEffects.playCrystals();
          }
          return next;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isHeating, isCopperHydroxide, isGoldenRain, isIron2Hydroxide, isDecomposedCuO, isPbI2Dissolved, isFe2Oxidized]);

  // Sedimentation Decay loop (Stokes law settling after shaking stops)
  useEffect(() => {
    if (isShaking) {
      setSuspensionFactor(1);
    } else if (suspensionFactor > 0) {
      const timer = setInterval(() => {
        setSuspensionFactor(prev => {
          if (prev <= 0.05) return 0;
          return prev - 0.06;
        });
      }, 120);
      return () => clearInterval(timer);
    }
  }, [isShaking, suspensionFactor]);

  // Shake / Vortex Tube
  const handleShake = () => {
    if (isShaking) return;
    setIsShaking(true);
    setSuspensionFactor(1);
    soundEffects.playPour();
    soundEffects.playFizz();

    // Shaking aerates solution: Fe(OH)2 oxidizes to Fe(OH)3 with dissolved O2
    if (isIron2Hydroxide) {
      setIsFe2Oxidized(true);
    }

    setTimeout(() => {
      setIsShaking(false);
      if (isPrecipitate) {
        soundEffects.playCrystals();
      }
    }, 2000);
  };

  // Heat with Bunsen Burner
  const handleToggleHeat = () => {
    const next = !isHeating;
    setIsHeating(next);
    if (next) {
      soundEffects.playReaction();
      soundEffects.playFizz();
    } else {
      soundEffects.playAtomAdd();
      // If cooling PbI2, play crystals sound anticipation
      if (isGoldenRain && isPbI2Dissolved) {
        soundEffects.playCrystals();
      }
    }
  };

  // Base solution color
  const getSolutionColor = () => {
    // 1. Decomposed Cu(OH)2 into CuO
    if (isDecomposedCuO) {
      return suspensionFactor > 0.1 ? 'rgba(30, 41, 59, 0.85)' : 'rgba(51, 65, 85, 0.35)';
    }

    // 2. Oxidized Fe(OH)2 into Fe(OH)3 rust
    if (isFe2Oxidized) {
      return suspensionFactor > 0.1 ? 'rgba(180, 83, 9, 0.8)' : 'rgba(217, 119, 6, 0.35)';
    }

    // 3. PbI2 dissolved at hot temperature
    if (isGoldenRain && isPbI2Dissolved && temperature >= 65) {
      return 'rgba(253, 224, 71, 0.28)'; // Transparent shimmering golden broth
    }

    // 4. Suspended precipitate during or after shaking
    if (isPrecipitate && suspensionFactor > 0.05) {
      const baseHex = currentMixCell?.precipitateColorHex || '#cbd5e1';
      const alphaHex = Math.round(Math.min(240, Math.max(70, suspensionFactor * 220))).toString(16).padStart(2, '0');
      return baseHex + alphaHex;
    }

    // 5. Cation based dissolved colors
    if (currentCationInfo.id === 'Cu') return 'rgba(59, 130, 246, 0.45)'; // Vivid Blue
    if (currentCationInfo.id === 'Fe3') return 'rgba(217, 119, 6, 0.38)'; // Amber Yellow
    if (currentCationInfo.id === 'Fe2') return 'rgba(16, 185, 129, 0.28)'; // Pale Green
    if (currentCationInfo.id === 'Ni') return 'rgba(34, 197, 94, 0.4)'; // Emerald Green
    if (isPrecipitate && phase === 'settled') return 'rgba(226, 232, 240, 0.2)';
    if (isGas) return 'rgba(56, 189, 248, 0.25)';
    return 'rgba(147, 197, 253, 0.2)'; // Clear water
  };

  // Current active precipitate color
  const getPrecipitateColor = () => {
    if (isDecomposedCuO) return '#0f172a'; // Black CuO
    if (isFe2Oxidized) return '#9a3412'; // Rust-brown Fe(OH)3
    return currentMixCell?.precipitateColorHex || '#e2e8f0';
  };

  const precipitateColor = getPrecipitateColor();

  // Bottom precipitate layer height based on state
  const getPrecipitateHeight = () => {
    if (!isPrecipitate) return 0;
    // When PbI2 is fully dissolved in hot liquid, sediment disappears!
    if (isGoldenRain && isPbI2Dissolved && temperature >= 65) return 0;
    // While shaking or suspended, sediment is lifted up:
    const baseHeight = 40;
    const reduced = baseHeight * (1 - suspensionFactor);
    return Math.max(4, Math.round(reduced));
  };

  // Dynamic Physical-Chemical Process Message
  const getDynamicProcessNote = () => {
    if (isShaking) {
      if (isGas) {
        return {
          icon: "🌪️",
          ru: "Встряхивание вызывает бурную кавитацию и дегазацию: растворенный газ мгновенно вспенивается и устремляется вверх!",
          kk: "Шайқау газдың бөлінуін күрт жеделдетеді: еріген газ лезде көпіршіктеніп жоғары ұмтылады!",
          en: "Vigorous shaking causes cavitation and instant degassing: dissolved gas violently foams to the surface!"
        };
      }
      if (isPrecipitate) {
        return {
          icon: "🌪️",
          ru: "Встряхивание поднимает плотный осадок со дна во взвесь (суспензию). При прекращении начнется медленная седиментация.",
          kk: "Шайқау тығыз тұнбаны түбінен көтеріп суспензияға айналдырады. Тоқтаған соң қайта баяу шөгеді.",
          en: "Shaking lifts bottom sediment into a turbid suspension. Gravitational sedimentation will follow when halted."
        };
      }
      return {
        icon: "🌪️",
        ru: "Интенсивное перемешивание разрушает пограничный диффузионный слой и ускоряет гидратацию ионов в объеме.",
        kk: "Қарқынды араластыру диффузиялық қабатты бұзып, иондардың еруін және гидратациясын жеделдетеді.",
        en: "Intensive mixing disrupts the diffusion boundary layer and accelerates ion hydration throughout the volume."
      };
    }

    if (isHeating || temperature > 25) {
      // 1. Cu(OH)2 decomposition
      if (isCopperHydroxide && isDecomposedCuO) {
        return {
          icon: "🔥",
          ru: `Термическое разложение (${temperature}°C): Cu(OH)₂ ⟶ CuO↓ (черный) + H₂O. Неустойчивый голубой гидроксид меди(II) необратимо перешел в черный оксид!`,
          kk: `Термиялық ыдырау (${temperature}°C): Cu(OH)₂ ⟶ CuO↓ (қара) + H₂O. Тұрақсыз көк мыс(II) гидроксиді қара оксидке айналды!`,
          en: `Thermal decomposition (${temperature}°C): Cu(OH)₂ ⟶ CuO↓ (black) + H₂O. Blue copper(II) hydroxide irreversibly converted into black oxide!`
        };
      }

      // 2. PbI2 Golden Rain dissolved at high temperature
      if (isGoldenRain && isPbI2Dissolved && temperature >= 65) {
        return {
          icon: "🔥",
          ru: `Горячий раствор (${temperature}°C): Растворимость PbI₂ возросла в 30 раз! Желтый осадок полностью растворился. Нажмите «Остудить» для запуска «Золотого дождя»!`,
          kk: `Ыстық ерітінді (${temperature}°C): PbI₂ ерігіштігі 30 есе артты! Тұнба толық еріді. «Остудить» батырмасын басып «Алтын жаңбырды» көріңіз!`,
          en: `Hot solution (${temperature}°C): PbI₂ solubility jumped 30-fold! Precipitate completely dissolved. Click 'Cool down' to trigger 'Golden Rain' crystallization!`
        };
      }

      // 3. PbI2 Golden Rain cooling crystallization
      if (isGoldenRain && isGoldenRainActive) {
        return {
          icon: "✨",
          ru: `Эффект «Золотой дождь» (${temperature}°C): При остывании горячего раствора выпадают мерцающие золотистые кристаллические пластинки PbI₂!`,
          kk: `«Алтын жаңбыр» құбылысы (${temperature}°C): Ерітінді суығанда PbI₂ жарқыраған алтын қабыршақтары түрінде кристалға айналуда!`,
          en: `'Golden Rain' effect (${temperature}°C): Solution cooling triggers precipitation of shimmering golden hexagonal platelets of PbI₂!`
        };
      }

      // 4. Fe(OH)2 oxidation
      if (isIron2Hydroxide && isFe2Oxidized) {
        return {
          icon: "💨",
          ru: `Окисление (${temperature}°C): Серо-зеленый Fe(OH)₂ окислился растворенным кислородом в красно-бурый гидроксид железа(III) Fe(OH)₃ (ржавчина)!`,
          kk: `Тотығу (${temperature}°C): Сұр-жасыл Fe(OH)₂ оттекпен тотығып, қызыл-қоңыр темір(III) гидроксидіне Fe(OH)₃ (татқа) айналды!`,
          en: `Oxidation (${temperature}°C): Pale green Fe(OH)₂ oxidized into rust-brown iron(III) hydroxide Fe(OH)₃!`
        };
      }

      // 5. Gases
      if (isGas) {
        return {
          icon: "♨️",
          ru: `Термическая дегазация (${temperature}°C): Растворимость газов в кипятке стремится к нулю — бурное выделение пара и пузырьков газа!`,
          kk: `Термиялық дегазация (${temperature}°C): Қайнаған суда газдардың ерігіштігі жоғалады — қарқынды бу мен газ бөлінуі!`,
          en: `Thermal degassing (${temperature}°C): Gas solubility drops near zero at high temperature — violent gas and steam release!`
        };
      }

      // 6. Normal precipitate
      if (isPrecipitate) {
        return {
          icon: "♨️",
          ru: `Нагревание (${temperature}°C): Термостойкий осадок устойчив к кипячению (произведение растворимости ПР стабильно).`,
          kk: `Қыздыру (${temperature}°C): Термотұрақты тұнба қайнауға төзімді (ерігіштік көбейтіндісі өзгермейді).`,
          en: `Heating (${temperature}°C): Thermally stable precipitate resists dissolution (Ksp remains invariant).`
        };
      }

      // 7. Soluble
      return {
        icon: "♨️",
        ru: `Нагревание (${temperature}°C): Скорость теплового броуновского движения ионов и конвекция жидкости увеличились в 3–4 раза (правило Вант-Гоффа)!`,
        kk: `Қыздыру (${temperature}°C): Иондардың броундық қозғалысы мен жылулық конвекциясы 3–4 есе артты (Вант-Гофф ережесі)!`,
        en: `Heating (${temperature}°C): Thermal Brownian motion and ion hydration kinetics increased substantially (van 't Hoff rule)!`
      };
    }

    if (suspensionFactor > 0.05) {
      return {
        icon: "⏳",
        ru: "Гравитационная седиментация: Взвешенные частицы медленно оседают на дно по закону Стокса, восстанавливая слой осадка.",
        kk: "Гравитациялық шөгу: Сұйықтағы ұсақ бөлшектер Сток заңы бойынша баяу түбіне шөгуде.",
        en: "Gravitational sedimentation: Suspended particles are slowly settling according to Stokes' law."
      };
    }

    return null;
  };

  const dynamicNote = getDynamicProcessNote();

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/[0.08] p-5 sm:p-7 shadow-sm relative overflow-hidden transition-all">
      {/* Background Ambient Glow */}
      <div 
        className="absolute -top-10 -right-10 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
        style={{ 
          backgroundColor: isDecomposedCuO ? '#1e293b' : isPrecipitate ? precipitateColor : isGas ? '#06b6d4' : '#6366f1' 
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Realistic Interactive 3D Test Tube Rig */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[400px] py-4 bg-slate-50/50 dark:bg-slate-950/40 rounded-2xl border border-slate-200/60 dark:border-white/[0.04] p-4">
          
          {/* Top Pipettes / Droppers Apparatus */}
          <div className="relative w-56 h-16 flex justify-between items-start mb-1 px-4">
            {/* Dropper 1: Cation */}
            <div className={`flex flex-col items-center transition-all duration-500 ${phase === 'pouring' ? 'translate-y-2 -rotate-12 scale-105' : 'opacity-80'}`}>
              <div className="w-5 h-4 rounded-t-full bg-slate-700 dark:bg-slate-300 shadow-xs" />
              <div className="w-3.5 h-10 border border-slate-400/80 bg-blue-400/30 backdrop-blur-xs rounded-b-xs relative overflow-hidden">
                <div className="absolute bottom-0 w-full h-3/4 bg-indigo-500/70" />
              </div>
              <div className="w-1.5 h-3 bg-slate-400/60 rounded-b-full" />
              <span className="text-[9px] font-mono font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">{currentCationInfo.symbol}</span>
              
              {/* Animated Falling Droplet 1 */}
              {phase === 'pouring' && (
                <div className="absolute top-16 left-8 animate-bounce">
                  <span className="w-2.5 h-3.5 bg-indigo-500 rounded-full block shadow-md animate-pulse" />
                </div>
              )}
            </div>

            {/* Dropper 2: Anion */}
            <div className={`flex flex-col items-center transition-all duration-500 ${phase === 'pouring' ? 'translate-y-2 rotate-12 scale-105' : 'opacity-80'}`}>
              <div className="w-5 h-4 rounded-t-full bg-slate-700 dark:bg-slate-300 shadow-xs" />
              <div className="w-3.5 h-10 border border-slate-400/80 bg-emerald-400/30 backdrop-blur-xs rounded-b-xs relative overflow-hidden">
                <div className="absolute bottom-0 w-full h-3/4 bg-emerald-500/70" />
              </div>
              <div className="w-1.5 h-3 bg-slate-400/60 rounded-b-full" />
              <span className="text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">{currentAnionInfo.symbol}</span>

              {/* Animated Falling Droplet 2 */}
              {phase === 'pouring' && (
                <div className="absolute top-16 right-8 animate-bounce" style={{ animationDelay: '0.15s' }}>
                  <span className="w-2.5 h-3.5 bg-emerald-500 rounded-full block shadow-md animate-pulse" />
                </div>
              )}
            </div>
          </div>

          {/* Center Stage: Test Tube + Precision Vertical Thermometer */}
          <div className="relative flex items-center justify-center gap-3">
            
            {/* Precision Laboratory Thermometer on the Left */}
            <div className="flex flex-col items-center justify-end h-64 w-8 relative group select-none">
              {/* Thermometer Stem */}
              <div className="w-3 h-52 rounded-t-full bg-slate-200/80 dark:bg-slate-800/80 border-2 border-slate-400/60 relative overflow-hidden flex flex-col justify-end p-0.5 shadow-inner">
                {/* Mercury / Alcohol Column */}
                <div 
                  className="w-full rounded-full transition-all duration-300 shadow-sm"
                  style={{
                    height: `${Math.min(100, Math.max(8, ((temperature - 10) / 95) * 100))}%`,
                    backgroundColor: temperature >= 85 ? '#ef4444' : temperature >= 50 ? '#f59e0b' : '#38bdf8'
                  }}
                />
              </div>
              {/* Bulb at bottom */}
              <div 
                className="w-6 h-6 rounded-full -mt-1 border-2 border-slate-400/80 shadow-md transition-colors duration-300"
                style={{
                  backgroundColor: temperature >= 85 ? '#ef4444' : temperature >= 50 ? '#f59e0b' : '#38bdf8'
                }}
              />
              {/* Digital Temperature readout */}
              <span className={`text-[10px] font-mono font-black mt-1 transition-colors ${
                temperature >= 85 ? 'text-rose-500 animate-pulse' : temperature >= 50 ? 'text-amber-500' : 'text-slate-500 dark:text-slate-400'
              }`}>
                {temperature}°C
              </span>
            </div>

            {/* Test Tube Glass Container with Realistic Fluid Dynamics */}
            <div className="relative flex flex-col items-center">
              {/* Upper Glass Vapor / Steam when Heated or Boiling */}
              {(isHeating || temperature > 55 || isGas) && (
                <div className="absolute -top-14 w-24 h-14 flex justify-center pointer-events-none overflow-hidden z-30">
                  <span className={`w-3.5 h-10 bg-slate-200/60 dark:bg-white/50 rounded-full blur-xs animate-pulse -translate-y-2 ${temperature >= 80 ? 'opacity-90 scale-125' : 'opacity-40'}`} />
                  <span className={`w-2.5 h-8 bg-cyan-200/50 rounded-full blur-xs animate-bounce -translate-y-1 ml-2 ${temperature >= 90 ? 'opacity-90 scale-110' : 'opacity-30'}`} />
                  <span className="w-3 h-9 bg-white/40 rounded-full blur-sm animate-pulse -translate-y-3 mr-2" />
                </div>
              )}

              {/* Main Test Tube Body */}
              <div 
                className={`relative w-24 sm:w-28 h-64 rounded-b-[42px] border-4 border-slate-300/90 dark:border-slate-600/90 bg-white/10 dark:bg-slate-800/10 backdrop-blur-md overflow-hidden flex flex-col justify-end shadow-2xl transition-transform ${
                  isShaking ? 'animate-[spin_0.14s_ease-in-out_infinite_alternate] scale-105 rotate-2' : ''
                }`}
              >
                {/* Glass Rim Reflection & Volumetric Graduations */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/20 dark:from-white/15 dark:via-transparent dark:to-white/10 pointer-events-none z-30" />
                
                {/* Milliliter Tick Marks */}
                <div className="absolute top-6 right-2 w-3 h-0.5 bg-slate-400/50 z-20" />
                <span className="absolute top-5 right-6 text-[8px] font-mono text-slate-400/70 z-20">25ml</span>
                
                <div className="absolute top-16 right-2 w-2 h-0.5 bg-slate-400/40 z-20" />
                <span className="absolute top-15 right-5 text-[8px] font-mono text-slate-400/60 z-20">20ml</span>

                <div className="absolute top-26 right-2 w-3 h-0.5 bg-slate-400/50 z-20" />
                <span className="absolute top-25 right-6 text-[8px] font-mono text-slate-400/70 z-20">15ml</span>

                <div className="absolute top-36 right-2 w-2 h-0.5 bg-slate-400/40 z-20" />
                <span className="absolute top-35 right-5 text-[8px] font-mono text-slate-400/60 z-20">10ml</span>

                <div className="absolute top-46 right-2 w-3 h-0.5 bg-slate-400/50 z-20" />
                <span className="absolute top-45 right-6 text-[8px] font-mono text-slate-400/70 z-20">5ml</span>

                {/* Dynamic Liquid Column */}
                <div 
                  className="w-full relative flex flex-col justify-end transition-all duration-500 ease-out z-10"
                  style={{ 
                    height: `${isShaking ? fluidHeight + 4 : fluidHeight}%`,
                    backgroundColor: getSolutionColor()
                  }}
                >
                  {/* Meniscus Curve / Surface Ripple / Vortex Funnel */}
                  <div className={`absolute top-0 left-0 right-0 h-3 -translate-y-1/2 bg-white/50 dark:bg-white/30 rounded-full blur-[1px] transition-transform ${
                    isShaking ? 'scale-y-150 animate-pulse' : ''
                  }`} />

                  {/* Boiling Convective Current Swirls when Heated */}
                  {temperature >= 60 && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                      <div className="w-full h-full animate-pulse bg-gradient-to-t from-transparent via-white/20 to-transparent" />
                    </div>
                  )}
                  
                  {/* Micro-view of colliding ions */}
                  {showIonMicroView && (
                    <div className="absolute inset-0 z-20 flex flex-wrap items-center justify-center p-2 gap-1 pointer-events-none overflow-hidden bg-black/20 backdrop-blur-xs">
                      <span className="px-1 py-0.5 rounded text-[8px] font-bold font-mono bg-indigo-600 text-white animate-bounce">
                        {currentCationInfo.symbol}
                      </span>
                      <span className="px-1 py-0.5 rounded text-[8px] font-bold font-mono bg-emerald-600 text-white animate-pulse">
                        {currentAnionInfo.symbol}
                      </span>
                      <span className="px-1 py-0.5 rounded text-[8px] font-bold font-mono bg-indigo-600 text-white animate-pulse">
                        {currentCationInfo.symbol}
                      </span>
                      <span className="px-1 py-0.5 rounded text-[8px] font-bold font-mono bg-emerald-600 text-white animate-bounce">
                        {currentAnionInfo.symbol}
                      </span>
                    </div>
                  )}

                  {/* Gas & Boiling Bubbles: Increases dramatically with heat & shaking! */}
                  {(isGas || temperature >= 80) && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((b, i) => (
                        <span 
                          key={i}
                          className="absolute rounded-full bg-cyan-200/90 dark:bg-cyan-100 border border-white/80 animate-bounce"
                          style={{
                            width: `${(temperature >= 90 ? 5 : 3) + (i % 4) * 2}px`,
                            height: `${(temperature >= 90 ? 5 : 3) + (i % 4) * 2}px`,
                            bottom: `${6 + (i * 9) % 84}%`,
                            left: `${10 + (i * 19) % 76}%`,
                            animationDuration: `${(isShaking || temperature >= 85 ? 0.35 : 0.8) + (i % 3) * 0.2}s`
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Suspended Precipitate Particles during or after Shaking */}
                  {isPrecipitate && (suspensionFactor > 0.05 || isShaking) && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((p, i) => (
                        <span 
                          key={i}
                          className={`absolute rounded-xs ${isShaking ? 'animate-spin' : 'animate-pulse'}`}
                          style={{
                            width: `${3 + (i % 3) * 2}px`,
                            height: `${3 + (i % 3) * 2}px`,
                            backgroundColor: precipitateColor,
                            bottom: `${10 + (i * 13) % 75}%`,
                            left: `${8 + (i * 16) % 80}%`,
                            opacity: Math.max(0.3, suspensionFactor),
                            boxShadow: isGoldenRain ? '0 0 8px #f59e0b' : '0 0 2px rgba(0,0,0,0.2)'
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Golden Rain Shimmering Glitter Stars (for PbI2 during cooling) */}
                  {isGoldenRain && isGoldenRainActive && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
                      <Sparkles className="w-4 h-4 text-amber-300 absolute top-3 left-4 animate-spin" />
                      <Sparkles className="w-3.5 h-3.5 text-yellow-200 absolute top-10 right-4 animate-ping" />
                      <Sparkles className="w-4 h-4 text-amber-400 absolute top-18 left-7 animate-pulse" />
                      <Sparkles className="w-3.5 h-3.5 text-yellow-300 absolute top-28 right-6 animate-bounce" />
                      <Sparkles className="w-4 h-4 text-yellow-100 absolute top-38 left-5 animate-pulse" />
                    </div>
                  )}

                  {/* Bottom Dense Sediment / Precipitate Layer */}
                  {isPrecipitate && (
                    <div 
                      className="w-full rounded-b-[38px] shadow-inner transition-all duration-700 relative z-10 overflow-hidden"
                      style={{ 
                        height: `${getPrecipitateHeight()}px`,
                        backgroundColor: precipitateColor,
                        boxShadow: 'inset 0 4px 14px rgba(0,0,0,0.35)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/20 rounded-b-[38px]" />
                      {isGoldenRain && !isPbI2Dissolved && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-yellow-950/80 animate-pulse" />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Slightly Soluble Opalescent Suspension */}
                  {isSlightlySoluble && (
                    <div className="w-full h-8 rounded-b-[38px] bg-amber-400/40 backdrop-blur-xs border-t border-amber-300/30" />
                  )}
                </div>
              </div>

              {/* Realistic Heating Bunsen Burner Flame */}
              {isHeating && (
                <div className="relative -mt-2 flex flex-col items-center z-40 animate-fadeIn">
                  {/* Outer Flicker Flame */}
                  <div className="w-8 h-12 bg-gradient-to-t from-rose-500 via-amber-400 to-cyan-300 rounded-full blur-[2px] animate-pulse scale-110 shadow-lg shadow-orange-500/60" />
                  {/* Inner Blue Cone */}
                  <div className="w-4 h-7 bg-gradient-to-t from-blue-600 to-cyan-200 rounded-full blur-[1px] absolute bottom-3 animate-ping opacity-80" />
                  {/* Burner Brass Metal Tip */}
                  <div className="w-12 h-3.5 bg-slate-700 rounded-t-md border-t border-slate-500" />
                </div>
              )}

              {/* Test Tube Heavy Base Stand */}
              <div className="w-36 h-4 bg-slate-300 dark:bg-slate-700/80 rounded-full shadow-md mt-2 border border-slate-400/40 dark:border-white/[0.08]" />
            </div>
          </div>

          {/* Interactive Action Control Badges on Test Tube */}
          <div className="flex items-center gap-2 mt-5 flex-wrap justify-center">
            {/* Shake Tube */}
            <button
              onClick={handleShake}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer shadow-sm active:scale-95 ${
                isShaking 
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-indigo-500/30 ring-2 ring-indigo-400/40'
                  : 'bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/[0.08]'
              }`}
              title="Встряхнуть пробирку (подъем осадка во взвесь, дегазация)"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${isShaking ? 'animate-spin' : ''}`} />
              <span>{language === 'kk' ? 'Шайқау' : language === 'en' ? 'Shake' : 'Встряхнуть'}</span>
            </button>

            {/* Heat Burner */}
            <button
              onClick={handleToggleHeat}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer shadow-sm active:scale-95 ${
                isHeating 
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white border-rose-500 shadow-rose-500/30 ring-2 ring-rose-400/40'
                  : 'bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/[0.08]'
              }`}
              title="Нагреть пробирку на спиртовке"
            >
              {isHeating ? (
                <>
                  <ThermometerSnowflake className="w-3.5 h-3.5 text-white animate-spin" />
                  <span>{language === 'kk' ? 'Суыту (Остудить)' : language === 'en' ? 'Cool down' : 'Остудить'}</span>
                </>
              ) : (
                <>
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>{language === 'kk' ? 'Қыздыру (Нагреть)' : language === 'en' ? 'Heat' : 'Нагреть'}</span>
                </>
              )}
            </button>

            {/* Ion Micro View */}
            <button
              onClick={() => setShowIonMicroView(!showIonMicroView)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium border transition-all cursor-pointer shadow-sm active:scale-95 ${
                showIonMicroView
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/[0.08]'
              }`}
              title="Показать / скрыть ионы в растворе"
            >
              <Eye className="w-3.5 h-3.5 text-purple-500" />
              <span>{language === 'kk' ? 'Иондар' : language === 'en' ? 'Ions' : 'Ионы'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Chemical Reaction Details, Real-Time Process Banner & Equations */}
        <div className="lg:col-span-7 space-y-3.5 text-left">
          {/* Reaction Status Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span 
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm ${
                currentMixCell?.shortCode === 'Р' ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30' :
                currentMixCell?.shortCode === 'Н' ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30' :
                currentMixCell?.shortCode === 'М' ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30' :
                'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${
                currentMixCell?.shortCode === 'Р' ? 'bg-emerald-500' :
                currentMixCell?.shortCode === 'Н' ? 'bg-rose-500' :
                currentMixCell?.shortCode === 'М' ? 'bg-amber-500' : 'bg-cyan-500'
              }`} />
              <span>
                {currentMixCell?.shortCode === 'Р' ? (language === 'kk' ? '🟢 Ерітінді (Диссоциация)' : language === 'en' ? '🟢 Soluble Solution' : '🟢 Раствор (Диссоциация на ионы)') :
                 currentMixCell?.shortCode === 'Н' ? (language === 'kk' ? '🔴 Тұнба түзілуі (↓)' : language === 'en' ? '🔴 Insoluble Precipitate (↓)' : '🔴 Выпадение осадка (↓)') :
                 currentMixCell?.shortCode === 'М' ? (language === 'kk' ? '🟡 Аз еритін зат' : language === 'en' ? '🟡 Slightly Soluble' : '🟡 Малорастворимое вещество') : 
                 (language === 'kk' ? '🔵 Газ бөлінуі / Ыдырау (↑)' : language === 'en' ? '🔵 Gas Evolution (↑)' : '🔵 Выделение газа / Разложение (↑)')}
              </span>
            </span>

            {currentMixCell?.isImportantQualitativeReaction && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'kk' ? 'Сапалық реакция (Дарын)' : language === 'en' ? 'Qualitative test' : 'Качественная реакция (Дарын)'}</span>
              </span>
            )}
          </div>

          {/* Large Chemical Formula */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
              <span>{isDecomposedCuO ? 'CuO' : currentMixCell?.formula || `${currentCationInfo.symbol} + ${currentAnionInfo.symbol}`}</span>
              {isDecomposedCuO && <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 text-white font-mono uppercase font-bold border border-slate-700">Оксид</span>}
              {currentMixCell?.status === 'insoluble' && !isDecomposedCuO && <span className="text-rose-500 text-2xl font-normal">↓</span>}
              {currentMixCell?.status === 'gas' && <span className="text-cyan-500 text-2xl font-normal">↑</span>}
            </div>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {language === 'kk' ? 'Бастапқы тұздар: ' : language === 'en' ? 'Initial salts: ' : 'Исходные соли: '} 
              <strong className="text-slate-800 dark:text-slate-200">{currentCationInfo.sampleSalt}</strong> + <strong className="text-slate-800 dark:text-slate-200">{currentAnionInfo.sampleSalt}</strong>
            </p>
          </div>

          {/* DYNAMIC LIVE PHYSICAL-CHEMICAL PROCESS BANNER */}
          {dynamicNote && (
            <div className="p-3.5 rounded-2xl bg-slate-900/95 text-white border border-slate-700/80 shadow-md flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
              <span className="text-lg leading-none mt-0.5">{dynamicNote.icon}</span>
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  {language === 'kk' ? 'Физика-химиялық процесс:' : language === 'en' ? 'Physical-Chemical Process:' : 'Физико-химический процесс:'}
                </span>
                <p className="text-xs font-medium leading-relaxed text-slate-100">
                  {dynamicNote[language]}
                </p>
              </div>
            </div>
          )}

          {/* Visual Color or Precipitate Characteristic Box */}
          {currentMixCell?.colorNote && (
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.06] flex items-center gap-3 shadow-inner dark:shadow-none">
              <div 
                className="w-7 h-7 rounded-xl shadow-md border border-black/10 shrink-0 transition-colors duration-500"
                style={{ backgroundColor: precipitateColor }}
              />
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                  {language === 'kk' ? 'Реакцияның сыртқы белгісі:' : language === 'en' ? 'Visual observation:' : 'Визуальный признак реакции:'}
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {isDecomposedCuO 
                    ? (language === 'kk' ? 'Қара түсті мыс(II) оксиді тұнбасы (CuO↓)' : language === 'en' ? 'Black precipitate of copper(II) oxide (CuO↓)' : 'Черный порошок оксида меди(II) (CuO↓)')
                    : isFe2Oxidized 
                    ? (language === 'kk' ? 'Қызыл-қоңыр тат түстес Fe(OH)₃ тұнбасы' : language === 'en' ? 'Reddish-brown rust precipitate of Fe(OH)₃' : 'Красно-бурый осадок ржавчины Fe(OH)₃')
                    : currentMixCell.colorNote[language]}
                </span>
              </div>
            </div>
          )}

          {/* Reaction Equations Box */}
          <div className="space-y-2 p-3.5 rounded-2xl bg-slate-50/90 dark:bg-slate-950/50 border border-slate-200/80 dark:border-white/[0.06] text-xs font-mono">
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">
                {language === 'kk' ? 'Молекулалық теңдеу:' : language === 'en' ? 'Molecular equation:' : 'Молекулярное уравнение:'}
              </span>
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                {isDecomposedCuO 
                  ? "Cu(OH)₂ ⟶ CuO↓ + H₂O" 
                  : currentMixCell?.molecularEquation || `${currentCationInfo.sampleSalt} + ${currentAnionInfo.sampleSalt} → ${currentMixCell?.formula || '...'}`}
              </span>
            </div>

            <div className="pt-2 border-t border-slate-200/60 dark:border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">
                {language === 'kk' ? 'Қысқартылған иондық теңдеу:' : language === 'en' ? 'Net ionic equation:' : 'Сокращенное ионное уравнение (РИО):'}
              </span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 text-sm">
                {isDecomposedCuO 
                  ? "Cu²⁺ + 2OH⁻ ⟶ CuO↓ + H₂O (при t°)" 
                  : currentMixCell?.netIonicEquation || `${currentCationInfo.symbol} + ${currentAnionInfo.symbol} → ${currentMixCell?.formula || '...'}`}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-1 flex-wrap">
            <button
              onClick={startReactionSequence}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all cursor-pointer shadow-md shadow-indigo-500/20"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{language === 'kk' ? 'Тәжірибені қайталау ⚡' : language === 'en' ? 'Repeat Experiment ⚡' : 'Повторить опыт ⚡'}</span>
            </button>

            {currentMixCell?.atoms && onSynthesizeInLab && (
              <button
                onClick={() => onSynthesizeInLab(currentMixCell)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all cursor-pointer shadow-md shadow-emerald-500/20"
              >
                <Beaker className="w-4 h-4" />
                <span>{language === 'kk' ? 'Зертханада синтездеу' : language === 'en' ? 'Synthesize in Lab' : 'Синтезировать в лаборатории'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
