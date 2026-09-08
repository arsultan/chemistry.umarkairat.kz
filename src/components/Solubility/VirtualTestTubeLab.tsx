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
  FlaskConical, 
  Eye, 
  Zap, 
  Check, 
  Info,
  Layers,
  ThermometerSnowflake,
  TestTube as TestTubeIcon,
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
  const [isAcidAdded, setIsAcidAdded] = useState(false);
  const [showIonMicroView, setShowIonMicroView] = useState(false);
  const [fluidHeight, setFluidHeight] = useState(72);
  const [animKey, setAnimKey] = useState(0);

  // Trigger full reaction animation sequence
  const startReactionSequence = () => {
    setAnimKey(prev => prev + 1);
    setPhase('pouring');
    setIsHeating(false);
    setIsAcidAdded(false);
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

  // Shake / Vortex Tube
  const handleShake = () => {
    if (isShaking) return;
    setIsShaking(true);
    soundEffects.playPour();

    setTimeout(() => {
      setIsShaking(false);
      if (currentMixCell?.status === 'insoluble') {
        soundEffects.playCrystals();
      }
    }, 1500);
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
    }
  };

  // Add HCl Acid Test
  const handleAddAcid = () => {
    setIsAcidAdded(true);
    soundEffects.playFizz();
  };

  // Chemical characteristics
  const isPrecipitate = currentMixCell?.status === 'insoluble';
  const isGas = currentMixCell?.status === 'gas' || (isAcidAdded && (currentAnionInfo.id === 'CO3' || currentAnionInfo.id === 'SO3'));
  const isGoldenRain = currentCationInfo.id === 'Pb' && currentAnionInfo.id === 'I';
  const isSoluble = currentMixCell?.status === 'soluble';
  const isSlightlySoluble = currentMixCell?.status === 'slightly-soluble';

  // Base solution color
  const getSolutionColor = () => {
    if (currentCationInfo.id === 'Cu') return 'rgba(59, 130, 246, 0.45)'; // Vivid Blue
    if (currentCationInfo.id === 'Fe3') return 'rgba(217, 119, 6, 0.38)'; // Amber Yellow
    if (currentCationInfo.id === 'Fe2') return 'rgba(16, 185, 129, 0.28)'; // Pale Green
    if (currentCationInfo.id === 'Ni') return 'rgba(34, 197, 94, 0.4)'; // Emerald Green
    if (isPrecipitate && !isShaking && phase === 'settled') return 'rgba(226, 232, 240, 0.2)';
    if (isPrecipitate && isShaking) return (currentMixCell?.precipitateColorHex || '#cbd5e1') + '66';
    if (isGas) return 'rgba(56, 189, 248, 0.25)';
    return 'rgba(147, 197, 253, 0.2)'; // Clear water
  };

  const precipitateColor = currentMixCell?.precipitateColorHex || '#e2e8f0';

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/[0.08] p-5 sm:p-7 shadow-sm relative overflow-hidden transition-all">
      {/* Background Ambient Glow */}
      <div 
        className="absolute -top-10 -right-10 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: isPrecipitate ? precipitateColor : isGas ? '#06b6d4' : '#6366f1' }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Realistic Interactive 3D Test Tube Rig */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[380px] py-4 bg-slate-50/50 dark:bg-slate-950/40 rounded-2xl border border-slate-200/60 dark:border-white/[0.04] p-4">
          
          {/* Top Pipettes / Droppers Apparatus */}
          <div className="relative w-56 h-18 flex justify-between items-start mb-1 px-4">
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

          {/* Test Tube Glass Container with Realistic Fluid Dynamics */}
          <div className="relative flex flex-col items-center">
            {/* Upper Glass Vapor / Smoke when Gas or Heated */}
            {(isGas || isHeating) && (
              <div className="absolute -top-12 w-20 h-12 flex justify-center pointer-events-none overflow-hidden z-30">
                <span className="w-3 h-8 bg-slate-300/50 dark:bg-white/40 rounded-full blur-sm animate-pulse-soft -translate-y-2" />
                <span className="w-2 h-6 bg-cyan-300/40 dark:bg-cyan-200/30 rounded-full blur-xs animate-bounce -translate-y-1 ml-2" />
              </div>
            )}

            {/* Main Test Tube Body */}
            <div 
              className={`relative w-24 sm:w-26 h-64 rounded-b-[42px] border-4 border-slate-300/90 dark:border-slate-600/90 bg-white/10 dark:bg-slate-800/10 backdrop-blur-md overflow-hidden flex flex-col justify-end shadow-2xl transition-transform ${
                isShaking ? 'animate-[spin_0.15s_ease-in-out_infinite_alternate]' : ''
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
                className="w-full relative flex flex-col justify-end transition-all duration-700 ease-out z-10"
                style={{ 
                  height: `${fluidHeight}%`,
                  backgroundColor: getSolutionColor()
                }}
              >
                {/* Meniscus Curve / Surface Ripple */}
                <div className="absolute top-0 left-0 right-0 h-3 -translate-y-1/2 bg-white/50 dark:bg-white/30 rounded-full blur-[1px]" />
                
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

                {/* Gaseous Effervescence Bubbles */}
                {isGas && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((b, i) => (
                      <span 
                        key={i}
                        className="absolute rounded-full bg-cyan-300/90 dark:bg-cyan-200 border border-white/70 animate-bounce"
                        style={{
                          width: `${4 + (i % 4) * 2}px`,
                          height: `${4 + (i % 4) * 2}px`,
                          bottom: `${8 + (i * 11) % 82}%`,
                          left: `${12 + (i * 17) % 72}%`,
                          animationDuration: `${0.7 + (i % 3) * 0.3}s`
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Falling Precipitate Crystals during reaction / settling */}
                {isPrecipitate && (phase === 'reacting' || isShaking) && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((p, i) => (
                      <span 
                        key={i}
                        className="absolute rounded-xs animate-pulse"
                        style={{
                          width: `${3 + (i % 3) * 2}px`,
                          height: `${3 + (i % 3) * 2}px`,
                          backgroundColor: precipitateColor,
                          bottom: `${15 + (i * 13) % 70}%`,
                          left: `${10 + (i * 14) % 78}%`,
                          boxShadow: isGoldenRain ? '0 0 8px #f59e0b' : '0 0 2px rgba(0,0,0,0.2)'
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Golden Rain Shimmering Glitter Stars (for PbI2) */}
                {isGoldenRain && isPrecipitate && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <Sparkles className="w-4 h-4 text-amber-300 absolute top-4 left-4 animate-spin" />
                    <Sparkles className="w-3 h-3 text-amber-200 absolute top-12 right-4 animate-ping" />
                    <Sparkles className="w-4 h-4 text-yellow-300 absolute top-20 left-8 animate-pulse" />
                  </div>
                )}

                {/* Bottom Dense Sediment / Precipitate Layer */}
                {isPrecipitate && !isHeating && (
                  <div 
                    className="w-full rounded-b-[38px] shadow-inner transition-all duration-1000 relative z-10"
                    style={{ 
                      height: isShaking ? '12px' : '40px',
                      backgroundColor: precipitateColor,
                      boxShadow: 'inset 0 4px 14px rgba(0,0,0,0.3)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/20 rounded-b-[38px]" />
                    {isGoldenRain && (
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

            {/* Heating Bunsen Burner Flame */}
            {isHeating && (
              <div className="relative -mt-2 flex flex-col items-center z-40 animate-fadeIn">
                <div className="w-7 h-11 bg-gradient-to-t from-orange-500 via-amber-400 to-cyan-300 rounded-full blur-[2px] animate-pulse scale-110 shadow-lg shadow-orange-500/50" />
                <div className="w-12 h-3.5 bg-slate-700 rounded-t-md border-t border-slate-500" />
              </div>
            )}

            {/* Test Tube Heavy Base Stand */}
            <div className="w-36 h-4 bg-slate-300 dark:bg-slate-700/80 rounded-full shadow-md mt-2 border border-slate-400/40 dark:border-white/[0.08]" />
          </div>

          {/* Interactive Action Control Badges on Test Tube */}
          <div className="flex items-center gap-2 mt-4 flex-wrap justify-center">
            {/* Shake Tube */}
            <button
              onClick={handleShake}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium border transition-all cursor-pointer shadow-sm ${
                isShaking 
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-indigo-500/20'
                  : 'bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/[0.08]'
              }`}
              title="Встряхнуть пробирку и взмутить осадок"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${isShaking ? 'animate-spin' : ''}`} />
              <span>Встряхнуть</span>
            </button>

            {/* Heat Burner */}
            <button
              onClick={handleToggleHeat}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium border transition-all cursor-pointer shadow-sm ${
                isHeating 
                  ? 'bg-amber-500 text-white border-amber-500 shadow-amber-500/30'
                  : 'bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/[0.08]'
              }`}
              title="Нагреть на спиртовке"
            >
              <Flame className={`w-3.5 h-3.5 ${isHeating ? 'text-white' : 'text-amber-500'}`} />
              <span>{isHeating ? 'Остудить' : 'Нагреть'}</span>
            </button>

            {/* Ion Micro View */}
            <button
              onClick={() => setShowIonMicroView(!showIonMicroView)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium border transition-all cursor-pointer shadow-sm ${
                showIonMicroView
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/[0.08]'
              }`}
              title="Показать / скрыть ионы в растворе"
            >
              <Eye className="w-3.5 h-3.5 text-purple-500" />
              <span>Ионы</span>
            </button>
          </div>
        </div>

        {/* Right Column: Chemical Reaction Details & Equations */}
        <div className="lg:col-span-7 space-y-4 text-left">
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
                {currentMixCell?.shortCode === 'Р' ? '🟢 Раствор (Диссоциация на ионы)' :
                 currentMixCell?.shortCode === 'Н' ? '🔴 Выпадение осадка (↓)' :
                 currentMixCell?.shortCode === 'М' ? '🟡 Малорастворимое вещество' : '🔵 Выделение газа / Разложение (↑)'}
              </span>
            </span>

            {currentMixCell?.isImportantQualitativeReaction && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Качественная реакция (Дарын)</span>
              </span>
            )}
          </div>

          {/* Large Chemical Formula */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
              <span>{currentMixCell?.formula || `${currentCationInfo.symbol} + ${currentAnionInfo.symbol}`}</span>
              {currentMixCell?.status === 'insoluble' && <span className="text-rose-500 text-2xl font-normal">↓</span>}
              {currentMixCell?.status === 'gas' && <span className="text-cyan-500 text-2xl font-normal">↑</span>}
            </div>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Исходные соли: <strong className="text-slate-800 dark:text-slate-200">{currentCationInfo.sampleSalt}</strong> + <strong className="text-slate-800 dark:text-slate-200">{currentAnionInfo.sampleSalt}</strong>
            </p>
          </div>

          {/* Visual Color or Precipitate Characteristic Box */}
          {currentMixCell?.colorNote && (
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.06] flex items-center gap-3 shadow-inner dark:shadow-none">
              {currentMixCell.precipitateColorHex && (
                <div 
                  className="w-7 h-7 rounded-xl shadow-md border border-black/10 shrink-0"
                  style={{ backgroundColor: currentMixCell.precipitateColorHex }}
                />
              )}
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                  Визуальный признак реакции:
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {currentMixCell.colorNote[language]}
                </span>
              </div>
            </div>
          )}

          {/* Reaction Equations Box */}
          <div className="space-y-2.5 p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-950/50 border border-slate-200/80 dark:border-white/[0.06] text-xs font-mono">
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">
                Молекулярное уравнение:
              </span>
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                {currentMixCell?.molecularEquation || `${currentCationInfo.sampleSalt} + ${currentAnionInfo.sampleSalt} → ${currentMixCell?.formula || '...'}`}
              </span>
            </div>

            <div className="pt-2 border-t border-slate-200/60 dark:border-white/[0.06]">
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">
                Сокращенное ионное уравнение (РИО):
              </span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 text-sm">
                {currentMixCell?.netIonicEquation || `${currentCationInfo.symbol} + ${currentAnionInfo.symbol} → ${currentMixCell?.formula || '...'}`}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2 flex-wrap">
            <button
              onClick={startReactionSequence}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all cursor-pointer shadow-md shadow-indigo-500/20"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Повторить опыт ⚡</span>
            </button>

            {currentMixCell?.atoms && onSynthesizeInLab && (
              <button
                onClick={() => onSynthesizeInLab(currentMixCell)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all cursor-pointer shadow-md shadow-emerald-500/20"
              >
                <Beaker className="w-4 h-4" />
                <span>Синтезировать в лаборатории</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
