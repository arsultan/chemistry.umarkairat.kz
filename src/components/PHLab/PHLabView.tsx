"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  PH_SOLUTIONS, 
  INDICATOR_TYPES, 
  UNIVERSAL_PH_SCALE, 
  PHSolution, 
  getMediumDetails 
} from "@/data/phSolutions";
import { Language } from "@/types/chemistry";
import { soundEffects } from "@/lib/soundEffects";
import { 
  FlaskConical, 
  Sparkles, 
  Droplet, 
  RotateCcw, 
  Sliders, 
  Info, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Eye,
  ChevronRight
} from "lucide-react";

interface PHLabViewProps {
  language: Language;
  onGoToLab?: () => void;
}

export const PHLabView: React.FC<PHLabViewProps> = ({ language, onGoToLab }) => {
  // State
  const [selectedSolution, setSelectedSolution] = useState<PHSolution>(PH_SOLUTIONS[2]); // Default: Lemon Juice (pH 2.2)
  const [customPh, setCustomPh] = useState<number>(7.0);
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [selectedIndicator, setSelectedIndicator] = useState<'universal' | 'litmus' | 'phenolphthalein' | 'methyl_orange' | 'red_cabbage'>('universal');
  const [filterCategory, setFilterCategory] = useState<'all' | 'acid' | 'neutral' | 'base'>('all');
  const [indicatorInBeaker, setIndicatorInBeaker] = useState<boolean>(false);

  // Paper Strip Physical Simulation
  // 'dry': above beaker, unsoaked
  // 'dipping': animating into beaker
  // 'submerged': fully inside liquid
  // 'pulling': animating upward
  // 'wet': above beaker, lower portion soaked and stained
  const [paperState, setPaperState] = useState<'dry' | 'dipping' | 'submerged' | 'pulling' | 'wet'>('dry');
  const [submergeProgress, setSubmergeProgress] = useState<number>(0); // 0% (top) to 100% (deep inside)
  const [stainedPh, setStainedPh] = useState<number | null>(null);
  const [stainedIndicator, setStainedIndicator] = useState<string>('universal');
  const [isHoveringBeaker, setIsHoveringBeaker] = useState(false);

  // Mystery Quiz Mode
  const [quizMode, setQuizMode] = useState(false);
  const [quizMysteryPh, setQuizMysteryPh] = useState<number>(2.5);
  const [quizAnswerFeedback, setQuizAnswerFeedback] = useState<'correct' | 'wrong' | null>(null);

  const activePh = isCustomMode ? customPh : (quizMode ? quizMysteryPh : selectedSolution.ph);
  const activeIndicatorDef = INDICATOR_TYPES.find(i => i.id === selectedIndicator) || INDICATOR_TYPES[0];
  const mediumDetails = getMediumDetails(activePh, language);

  // Liquid and strip colors
  const liveIndicatorColor = activeIndicatorDef.getColor(activePh);
  const displayStainedColor = stainedPh !== null
    ? (INDICATOR_TYPES.find(i => i.id === stainedIndicator) || activeIndicatorDef).getColor(stainedPh).color
    : activeIndicatorDef.dryStripColor;

  // Liquid color in the beaker
  const beakerLiquidColor = indicatorInBeaker
    ? liveIndicatorColor.color
    : (isCustomMode 
        ? (customPh < 6.8 ? "rgba(249, 115, 22, 0.25)" : customPh > 7.2 ? "rgba(99, 102, 241, 0.25)" : "rgba(34, 197, 94, 0.2)")
        : selectedSolution.naturalColor);

  // Filter solutions
  const filteredSolutions = PH_SOLUTIONS.filter(sol => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'acid') return sol.category === 'strong_acid' || sol.category === 'weak_acid';
    if (filterCategory === 'neutral') return sol.category === 'neutral';
    if (filterCategory === 'base') return sol.category === 'weak_base' || sol.category === 'strong_base';
    return true;
  });

  // Dip strip animation
  const handleDipStrip = () => {
    if (paperState === 'dipping' || paperState === 'pulling') return;

    if (paperState === 'dry' || paperState === 'wet') {
      soundEffects.playLiquidDip();
      setPaperState('dipping');
      setSubmergeProgress(0);

      // Animate smoothly downwards
      let step = 0;
      const interval = setInterval(() => {
        step += 8;
        if (step >= 85) {
          clearInterval(interval);
          setSubmergeProgress(85);
          setPaperState('submerged');
          setStainedPh(activePh);
          setStainedIndicator(selectedIndicator);
          soundEffects.playBubble();
        } else {
          setSubmergeProgress(step);
        }
      }, 25);
    } else if (paperState === 'submerged') {
      handlePullStrip();
    }
  };

  const handlePullStrip = () => {
    if (paperState !== 'submerged') return;

    soundEffects.playLiquidPull();
    setPaperState('pulling');

    let current = submergeProgress;
    const interval = setInterval(() => {
      current -= 8;
      if (current <= 0) {
        clearInterval(interval);
        setSubmergeProgress(0);
        setPaperState('wet');
      } else {
        setSubmergeProgress(current);
      }
    }, 25);
  };

  const handleResetStrip = () => {
    soundEffects.playAtomAdd();
    setPaperState('dry');
    setSubmergeProgress(0);
    setStainedPh(null);
  };

  const handleSelectSolution = (sol: PHSolution) => {
    soundEffects.playAtomAdd();
    setSelectedSolution(sol);
    setIsCustomMode(false);
    setQuizMode(false);
    setQuizAnswerFeedback(null);
  };

  const handleToggleIndicatorInBeaker = () => {
    soundEffects.playBubble();
    setIndicatorInBeaker(!indicatorInBeaker);
  };

  const startMysteryQuiz = () => {
    soundEffects.playExperiment();
    setQuizMode(true);
    setIsCustomMode(false);
    setQuizAnswerFeedback(null);
    handleResetStrip();
    // Pick random pH from 1 to 13
    const randoms = [1.5, 2.8, 4.0, 5.5, 7.0, 8.4, 10.0, 12.0, 13.5];
    const picked = randoms[Math.floor(Math.random() * randoms.length)];
    setQuizMysteryPh(picked);
  };

  const handleAnswerQuiz = (guess: 'acid' | 'neutral' | 'base') => {
    const isAcid = quizMysteryPh < 6.8;
    const isNeutral = quizMysteryPh >= 6.8 && quizMysteryPh <= 7.2;
    const isBase = quizMysteryPh > 7.2;

    const correct = (guess === 'acid' && isAcid) || (guess === 'neutral' && isNeutral) || (guess === 'base' && isBase);
    if (correct) {
      soundEffects.playDiscovery();
      setQuizAnswerFeedback('correct');
    } else {
      soundEffects.playAtomRemove();
      setQuizAnswerFeedback('wrong');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 space-y-6">
      
      {/* Top Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-500/10 via-emerald-500/10 to-indigo-500/10 dark:from-rose-950/30 dark:via-emerald-950/30 dark:to-indigo-950/30 border border-slate-200/80 dark:border-white/[0.1] p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#7c6ff6]/15 text-[#7c6ff6] dark:text-[#a59bfb] border border-[#7c6ff6]/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {language === 'kk' ? 'Интерактивті pH & Лакмус Зертханасы' : language === 'en' ? 'Interactive pH & Indicator Lab' : 'Интерактивная Лаборатория pH & Лакмуса'}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                pH 0.0 – 14.0
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              {language === 'kk' ? 'Қышқылдық және Сілтілік Ортаны Зерттеу' : language === 'en' ? 'Acidic & Alkaline Medium Exploration' : 'Кислая и Щелочная Среда: Исследование pH'}
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {language === 'kk' 
                ? 'Индикаторлық қағазды ерітіндіге батырып, химиялық ортаға байланысты түсінің қалай өзгеретінін көріңіз. Түрлі тұрмыстық және ғылыми сұйықтықтардың сутектік көрсеткішін (pH) анықтаңыз!'
                : language === 'en'
                ? 'Dip the indicator paper into test solutions and watch it dynamically shift color based on hydronium ion concentration. Explore acidity, neutrality, and alkalinity across everyday liquids!'
                : 'Погружайте индикаторную полоску в мензурку и наблюдайте моментальное изменение цвета при контакте с раствором. Исследуйте кислую, нейтральную и щелочную среду реальных веществ!'}
            </p>
          </div>

          {/* Quick Stats / Quiz Launcher */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={startMysteryQuiz}
              className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold flex items-center gap-2 transition shadow-sm cursor-pointer ${
                quizMode 
                  ? 'bg-amber-500 text-white shadow-amber-500/25 ring-2 ring-amber-400' 
                  : 'bg-white dark:bg-[#161828] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.12] hover:border-amber-400 hover:text-amber-500'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-amber-500" />
              {language === 'kk' ? 'Жұмбақ Ерітінді Квесті' : language === 'en' ? 'Mystery Solution Quiz' : 'Квест: Угадай раствор'}
            </button>

            {onGoToLab && (
              <button
                onClick={onGoToLab}
                className="px-4 py-2.5 rounded-2xl text-xs font-mono font-bold bg-[#7c6ff6] hover:bg-[#6b5ce7] text-white flex items-center gap-2 transition shadow-sm cursor-pointer"
              >
                <FlaskConical className="w-4 h-4" />
                {language === 'kk' ? 'Реакторға өту' : language === 'en' ? 'Go to Reactor' : 'В Реактор'}
              </button>
            )}
          </div>
        </div>

        {/* Indicator Type Selector Strip */}
        <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-white/[0.08] flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 mr-2 flex items-center gap-1.5">
            <Droplet className="w-3.5 h-3.5 text-[#7c6ff6]" />
            {language === 'kk' ? 'Индикатор түрі:' : language === 'en' ? 'Indicator Type:' : 'Тип индикатора:'}
          </span>
          {INDICATOR_TYPES.map(ind => (
            <button
              key={ind.id}
              onClick={() => {
                soundEffects.playAtomAdd();
                setSelectedIndicator(ind.id);
                if (paperState === 'wet' || paperState === 'submerged') {
                  setStainedIndicator(ind.id);
                }
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
                selectedIndicator === ind.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold shadow-md'
                  : 'bg-white/80 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.08]'
              }`}
            >
              <span 
                className="w-2.5 h-2.5 rounded-full border border-black/20 shrink-0" 
                style={{ backgroundColor: ind.getColor(activePh).color }}
              />
              <span>{ind.name[language]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage: Lab Bench & Beaker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left / Center (7 Cols): Glass Beaker + Indicator Paper Dip Animation */}
        <div className="lg:col-span-7 bg-white dark:bg-[#0f111f] rounded-3xl border border-slate-200/80 dark:border-white/[0.08] p-6 flex flex-col items-center justify-between min-h-[580px] shadow-sm relative overflow-hidden">
          
          {/* Top Stage Bar: Telemetry & Controls */}
          <div className="w-full flex items-center justify-between gap-2 z-10">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-xl text-xs font-mono font-bold border flex items-center gap-1.5 ${mediumDetails.badgeColor}`}>
                <span>{mediumDetails.icon}</span>
                <span>{mediumDetails.title}</span>
              </span>
              <span className="px-2.5 py-1 rounded-xl text-xs font-mono bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] font-bold">
                pH {activePh.toFixed(1)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleIndicatorInBeaker}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
                  indicatorInBeaker 
                    ? 'bg-purple-600 text-white font-bold shadow-sm' 
                    : 'bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/[0.1]'
                }`}
                title="Окрасить сам раствор индикатором"
              >
                <Droplet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {indicatorInBeaker 
                    ? (language === 'kk' ? 'Индикатор қосылды' : language === 'en' ? 'Drops Added' : 'Индикатор добавлен')
                    : (language === 'kk' ? 'Сұйық индикатор қосу' : language === 'en' ? 'Add Liquid Drops' : 'Добавить капли индикатора')}
                </span>
              </button>

              <button
                onClick={handleResetStrip}
                className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition cursor-pointer"
                title="Сбросить / Новая сухая полоска"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Central Chemical Beaker & Paper Stage */}
          <div className="relative w-full flex-1 flex flex-col items-center justify-center my-4 select-none">
            
            {/* Laboratory Stand Rod (SVG) */}
            <div className="absolute top-0 bottom-12 left-1/2 -translate-x-[115px] sm:-translate-x-[140px] w-3 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-500 dark:from-slate-700 dark:via-slate-600 dark:to-slate-800 rounded-t-full shadow-inner opacity-70" />
            
            {/* Horizontal Tweezers / Clamp Arm */}
            <div 
              className="absolute left-1/2 -translate-x-[115px] sm:-translate-x-[140px] w-28 sm:w-36 h-2.5 bg-gradient-to-b from-slate-400 to-slate-600 dark:from-slate-600 dark:to-slate-800 rounded-r shadow-md transition-all duration-300 ease-out z-20 flex items-center justify-end"
              style={{
                top: `${40 + (submergeProgress * 1.5)}px`
              }}
            >
              {/* Metallic clamp grip holding the paper */}
              <div className="w-4 h-6 bg-slate-700 dark:bg-slate-400 rounded-sm border border-slate-500 shadow-md relative -mr-2 flex flex-col justify-around py-0.5 items-center">
                <div className="w-2.5 h-0.5 bg-slate-400 dark:bg-slate-800 rounded-full" />
                <div className="w-2.5 h-0.5 bg-slate-400 dark:bg-slate-800 rounded-full" />
              </div>
            </div>

            {/* Litmus / Universal Indicator Paper Strip */}
            <div 
              className="relative w-11 sm:w-13 h-52 sm:h-56 z-20 cursor-pointer group transition-transform duration-300 ease-out flex flex-col"
              style={{
                transform: `translateY(${submergeProgress * 1.5}px)`
              }}
              onClick={handleDipStrip}
              title={paperState === 'submerged' ? 'Нажмите, чтобы вынуть полоску' : 'Нажмите, чтобы погрузить в раствор'}
            >
              {/* Upper Dry Handle Zone (Held by tweezers) */}
              <div 
                className="w-full h-24 rounded-t-md border-x-2 border-t-2 border-slate-300 dark:border-slate-600 shadow-md relative flex flex-col items-center justify-start pt-2 overflow-hidden transition-colors"
                style={{ backgroundColor: activeIndicatorDef.dryStripColor }}
              >
                {/* Paper texture lines */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />
                <span className="text-[9px] font-mono font-black tracking-tighter text-slate-600/70 select-none uppercase">
                  {selectedIndicator === 'litmus' ? 'LITMUS' : selectedIndicator === 'phenolphthalein' ? 'PH-PHT' : 'pH TEST'}
                </span>
                <div className="w-6 h-0.5 bg-slate-400/40 rounded-full mt-1" />
                <div className="w-4 h-0.5 bg-slate-400/40 rounded-full mt-0.5" />
              </div>

              {/* Lower Test Zone (Absorbs liquid and changes color) */}
              <div 
                className="w-full flex-1 rounded-b-md border-x-2 border-b-2 border-slate-300/80 dark:border-slate-600 shadow-lg relative flex flex-col justify-end items-center pb-2 transition-all duration-700 ease-out overflow-hidden"
                style={{ 
                  backgroundColor: paperState === 'submerged' || paperState === 'pulling' || paperState === 'wet'
                    ? displayStainedColor 
                    : activeIndicatorDef.dryStripColor 
                }}
              >
                {/* Capillary Wet sheen & texture */}
                {(paperState === 'wet' || paperState === 'submerged') && (
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-black/10 pointer-events-none animate-pulse" />
                )}

                {/* Hanging Water Droplet at the bottom tip when pulled out */}
                {paperState === 'wet' && (
                  <div className="absolute -bottom-2 w-2.5 h-3 bg-gradient-to-b from-white/60 to-white/20 rounded-full border border-white/40 shadow-sm animate-bounce" />
                )}

                {/* Submerged indicator marker label */}
                <span className="text-[8px] font-mono font-bold text-black/60 dark:text-white/80 tracking-widest uppercase">
                  {paperState === 'submerged' || paperState === 'wet' 
                    ? `pH ${(stainedPh ?? activePh).toFixed(1)}` 
                    : 'DRY'}
                </span>
              </div>
            </div>

            {/* Glass Beaker with Liquid */}
            <div 
              className="relative w-56 sm:w-64 h-64 sm:h-72 mt-[-60px] z-10 flex flex-col items-center justify-end group/beaker"
              onMouseEnter={() => setIsHoveringBeaker(true)}
              onMouseLeave={() => setIsHoveringBeaker(false)}
            >
              {/* Beaker Lip and Spout (SVG Top) */}
              <div className="absolute top-0 w-full h-6 border-t-4 border-x-4 border-slate-300 dark:border-slate-500 rounded-t-2xl pointer-events-none opacity-80" />

              {/* Glass Walls (Outer Beaker Container) */}
              <div className="relative w-full h-full border-4 border-slate-300 dark:border-slate-600 rounded-b-3xl bg-gradient-to-b from-white/20 via-transparent to-white/5 dark:from-white/[0.05] dark:to-transparent backdrop-blur-[2px] shadow-2xl flex flex-col justify-end p-2 overflow-hidden">
                
                {/* Volumetric Graduation Ticks (50ml, 100ml, 150ml, 200ml) */}
                <div className="absolute left-3 top-10 bottom-8 flex flex-col justify-between text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 pointer-events-none select-none">
                  <div className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-slate-400 dark:bg-slate-500" /> 200 ml</div>
                  <div className="flex items-center gap-1.5"><span className="w-2.5 h-0.5 bg-slate-400/80 dark:bg-slate-500/80" /> 150 ml</div>
                  <div className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-slate-400 dark:bg-slate-500" /> 100 ml</div>
                  <div className="flex items-center gap-1.5"><span className="w-2.5 h-0.5 bg-slate-400/80 dark:bg-slate-500/80" /> 50 ml</div>
                </div>

                {/* Glass Light Reflection Sheen (Gloss diagonal) */}
                <div className="absolute top-0 right-4 w-6 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-12deg] pointer-events-none" />

                {/* Liquid Body inside Beaker */}
                <div 
                  className="relative w-full h-[62%] rounded-b-2xl transition-all duration-700 ease-out overflow-hidden shadow-inner"
                  style={{
                    backgroundColor: beakerLiquidColor,
                    boxShadow: `inset 0 0 25px ${beakerLiquidColor}`
                  }}
                >
                  {/* Curved Meniscus on Liquid Surface */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-white/30 dark:bg-white/20 rounded-b-[50%] border-t border-white/50 backdrop-blur-sm" />

                  {/* Surface Ripple waves when paper enters */}
                  {paperState === 'submerged' && (
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-2 bg-white/50 rounded-full animate-ping opacity-70" />
                  )}

                  {/* Micro Bubbles Rising (H+ / OH- activity) */}
                  <div className="absolute bottom-2 left-1/4 w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDuration: '2.1s' }} />
                  <div className="absolute bottom-4 right-1/3 w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDuration: '1.7s' }} />
                  <div className="absolute bottom-1 right-1/4 w-1 h-1 bg-white/70 rounded-full animate-bounce" style={{ animationDuration: '2.5s' }} />

                  {/* Central Solution Name & Chemical Formula Watermark */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center pointer-events-none select-none">
                    <span className="text-sm sm:text-base font-black tracking-tight text-slate-900/80 dark:text-white/90 drop-shadow-sm">
                      {quizMode ? 'Загадочный раствор ?' : selectedSolution.name[language]}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-800/70 dark:text-slate-200/80 mt-0.5">
                      {quizMode ? 'Формула скрыта' : selectedSolution.formula}
                    </span>
                  </div>
                </div>
              </div>

              {/* Beaker Glass Base / Shadow */}
              <div className="w-48 sm:w-56 h-3 bg-slate-900/10 dark:bg-black/40 rounded-full blur-[3px] -mt-1 pointer-events-none" />
            </div>

            {/* Action Call-to-Action Bar below the Beaker */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 z-20">
              <button
                onClick={handleDipStrip}
                className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-mono font-black tracking-wide flex items-center gap-2.5 transition-all duration-200 cursor-pointer shadow-lg active:scale-95 ${
                  paperState === 'submerged'
                    ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/25'
                    : 'bg-[#7c6ff6] hover:bg-[#6b5ce7] text-white shadow-[#7c6ff6]/30 hover:shadow-[#7c6ff6]/40'
                }`}
              >
                {paperState === 'submerged' ? (
                  <>
                    <ArrowUp className="w-4 h-4 animate-bounce" />
                    <span>{language === 'kk' ? 'Полосканы суырып алу' : language === 'en' ? 'Pull Test Strip Out' : 'Вынуть полоску из раствора'}</span>
                  </>
                ) : (
                  <>
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                    <span>{language === 'kk' ? 'Полосканы ерітіндіге батыру' : language === 'en' ? 'Dip Strip into Solution' : 'Погрузить полоску в раствор'}</span>
                  </>
                )}
              </button>

              {paperState === 'wet' && (
                <button
                  onClick={handleResetStrip}
                  className="px-4 py-3 rounded-2xl text-xs font-mono font-bold bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.15] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/[0.1] transition cursor-pointer flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{language === 'kk' ? 'Таза қағаз' : language === 'en' ? 'Fresh Strip' : 'Новая сухая полоска'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Standard Reference Comparator Strip (0 to 14) */}
          <div className="w-full pt-4 border-t border-slate-200/80 dark:border-white/[0.08] z-10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#7c6ff6]" />
                {language === 'kk' ? 'Эталондық pH түстік шкаласы (0 – 14):' : language === 'en' ? 'Standard pH Color Scale (0 – 14):' : 'Эталонная шкала сравнения pH (0 – 14):'}
              </span>
              <span className="text-[11px] font-mono text-[#7c6ff6] dark:text-[#a59bfb] font-bold">
                {activeIndicatorDef.name[language]}
              </span>
            </div>

            {/* Gradient Spectrum Swatches */}
            <div 
              className="gap-1 sm:gap-1.5"
              style={{ display: "grid", gridTemplateColumns: "repeat(15, minmax(0, 1fr))" }}
            >
              {UNIVERSAL_PH_SCALE.map((item) => {
                const isMatching = Math.round(activePh) === item.ph;
                const isStainedMatch = stainedPh !== null && Math.round(stainedPh) === item.ph;
                const activeHighlight = paperState === 'wet' ? isStainedMatch : isMatching;

                return (
                  <div
                    key={item.ph}
                    className={`group relative flex flex-col items-center transition-transform cursor-pointer ${
                      activeHighlight ? 'scale-110 -translate-y-1 z-20' : 'hover:scale-105'
                    }`}
                    onClick={() => {
                      soundEffects.playAtomAdd();
                      setCustomPh(item.ph);
                      setIsCustomMode(true);
                      setQuizMode(false);
                    }}
                  >
                    <div 
                      className={`w-full h-8 sm:h-9 rounded-lg shadow-sm border flex items-center justify-center transition-all ${
                        activeHighlight 
                          ? 'ring-2 ring-slate-900 dark:ring-white border-white' 
                          : 'border-black/10'
                      }`}
                      style={{ backgroundColor: item.color }}
                    >
                      <span className={`text-[10px] font-mono font-black ${item.ph >= 4 && item.ph <= 6 ? 'text-slate-900' : 'text-white'}`}>
                        {item.ph}
                      </span>
                    </div>

                    {/* Matching Arrow Indicator */}
                    {activeHighlight && (
                      <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-slate-900 dark:border-b-white mt-1" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Scale Range Labels */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-2">
              <span className="text-red-500 font-bold">0–3: {language === 'kk' ? 'Күшті қышқыл' : language === 'en' ? 'Strong Acid' : 'Сильная кислота'}</span>
              <span className="text-amber-500 font-bold">4–6: {language === 'kk' ? 'Әлсіз қышқыл' : language === 'en' ? 'Weak Acid' : 'Слабая кислота'}</span>
              <span className="text-emerald-500 font-bold">7: {language === 'kk' ? 'Бейтарап' : language === 'en' ? 'Neutral' : 'Нейтрально'}</span>
              <span className="text-blue-500 font-bold">8–11: {language === 'kk' ? 'Әлсіз сілті' : language === 'en' ? 'Weak Alkali' : 'Слабая щёлочь'}</span>
              <span className="text-purple-500 font-bold">12–14: {language === 'kk' ? 'Күшті сілті' : language === 'en' ? 'Strong Alkali' : 'Сильная щёлочь'}</span>
            </div>
          </div>
        </div>

        {/* Right (5 Cols): Chemical Telemetry & Solution Library */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Analytical Telemetry Dashboard Card */}
          <div className="bg-white dark:bg-[#0f111f] rounded-3xl border border-slate-200/80 dark:border-white/[0.08] p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#7c6ff6]" />
                {language === 'kk' ? 'Химиялық телеметрия' : language === 'en' ? 'Chemical Telemetry' : 'Химическая телеметрия'}
              </h3>

              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  T = 25 °C (298 K)
                </span>
              </div>
            </div>

            {/* Big Digital pH Display */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-black/30 border border-slate-200/60 dark:border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                  {language === 'kk' ? 'Сутектік көрсеткіш' : language === 'en' ? 'Hydrogen Potential' : 'Водородный показатель'}
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-4xl font-black font-mono tracking-tight text-slate-900 dark:text-white">
                    {activePh.toFixed(2)}
                  </span>
                  <span className="text-sm font-mono font-bold text-[#7c6ff6] dark:text-[#a59bfb]">
                    pH
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                  pOH = 14 - pH
                </span>
                <div className="text-lg font-mono font-bold text-slate-700 dark:text-slate-300 mt-1">
                  {(14 - activePh).toFixed(2)} pOH
                </div>
              </div>
            </div>

            {/* Ion Concentrations Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-red-50/70 dark:bg-red-950/20 border border-red-200/60 dark:border-red-500/20">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-red-600 dark:text-red-400 mb-1">
                  <span>[H⁺] Ионы</span>
                  <span className="text-[9px]">mol/L</span>
                </div>
                <div className="text-xs font-mono font-black text-slate-900 dark:text-white truncate">
                  10^-{activePh.toFixed(1)}
                </div>
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  {Math.pow(10, -activePh).toExponential(2)} M
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-500/20">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 mb-1">
                  <span>[OH⁻] Ионы</span>
                  <span className="text-[9px]">mol/L</span>
                </div>
                <div className="text-xs font-mono font-black text-slate-900 dark:text-white truncate">
                  10^-{(14 - activePh).toFixed(1)}
                </div>
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  {Math.pow(10, -(14 - activePh)).toExponential(2)} M
                </div>
              </div>
            </div>

            {/* Dissociation Reaction Equation */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06] space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                {language === 'kk' ? 'Диссоциация / Гидролиз теңдеуі:' : language === 'en' ? 'Dissociation / Hydrolysis Equation:' : 'Уравнение диссоциации / гидролиза:'}
              </span>
              <p className="text-xs font-mono font-bold text-[#7c6ff6] dark:text-[#c4b5fd]">
                {quizMode ? '??? ⇌ H⁺ + OH⁻' : selectedSolution.chemicalEquation}
              </p>
            </div>

            {/* Educational scientific explanation */}
            <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              <strong className="text-slate-900 dark:text-white font-semibold">
                {language === 'kk' ? 'Ғылыми сипаттама: ' : language === 'en' ? 'Scientific Explanation: ' : 'Научное обоснование: '}
              </strong>
              {quizMode 
                ? (language === 'kk' ? 'Индикатор қағазын батырып, алынған түсті эталондық шкаламен салыстыру арқылы ортаны табыңыз!' : language === 'en' ? 'Dip the strip into the mystery solution and match its color against the standard scale!' : 'Опустите полоску в раствор и определите среду по цвету индикатора!') 
                : selectedSolution.description[language]}
            </div>

            {/* Interesting Fun Fact */}
            {!quizMode && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                <span className="text-base shrink-0">💡</span>
                <p className="leading-relaxed">
                  {selectedSolution.funFact[language]}
                </p>
              </div>
            )}

            {/* Custom pH Slider Controls */}
            <div className="pt-2 border-t border-slate-200/60 dark:border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-600 dark:text-slate-400 font-semibold">
                  {language === 'kk' ? 'Қолмен pH реттеу (Слайдер):' : language === 'en' ? 'Custom pH Slider:' : 'Произвольный pH (Слайдер):'}
                </span>
                <span className="font-bold text-[#7c6ff6] dark:text-[#a59bfb]">
                  {customPh.toFixed(1)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="14"
                step="0.1"
                value={customPh}
                onChange={(e) => {
                  setCustomPh(parseFloat(e.target.value));
                  setIsCustomMode(true);
                  setQuizMode(false);
                }}
                className="w-full accent-[#7c6ff6] cursor-pointer"
              />
            </div>
          </div>

          {/* Mystery Quiz Challenge Panel (if active) */}
          {quizMode && (
            <div className="p-5 rounded-3xl bg-amber-500/10 border border-amber-500/30 space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold font-mono text-amber-600 dark:text-amber-400 flex items-center gap-1.5 uppercase">
                  <HelpCircle className="w-4 h-4" />
                  {language === 'kk' ? 'Сұрақ: Бұл қандай орта?' : language === 'en' ? 'Challenge: What is this Medium?' : 'Вопрос: Какая это среда?'}
                </h4>
                <button
                  onClick={() => setQuizMode(false)}
                  className="text-xs font-mono text-slate-500 hover:text-slate-800 dark:hover:text-white"
                >
                  ✕ {language === 'kk' ? 'Шығу' : language === 'en' ? 'Exit' : 'Выход'}
                </button>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300">
                {language === 'kk'
                  ? 'Сынама қағазының түсіне қарап, осы ерітіндінің ортасын таңдаңыз:'
                  : language === 'en'
                  ? 'Based on the indicator test strip color, identify the solution medium:'
                  : 'Посмотрите на цвет индикаторной полоски и выберите среду раствора:'}
              </p>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleAnswerQuiz('acid')}
                  className="py-2.5 px-2 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-600 dark:text-red-400 font-mono text-xs font-bold border border-red-500/30 transition cursor-pointer"
                >
                  🔴 {language === 'kk' ? 'Қышқылдық' : language === 'en' ? 'Acidic' : 'Кислая'}
                </button>
                <button
                  onClick={() => handleAnswerQuiz('neutral')}
                  className="py-2.5 px-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold border border-emerald-500/30 transition cursor-pointer"
                >
                  🟢 {language === 'kk' ? 'Бейтарап' : language === 'en' ? 'Neutral' : 'Нейтральная'}
                </button>
                <button
                  onClick={() => handleAnswerQuiz('base')}
                  className="py-2.5 px-2 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 text-purple-600 dark:text-purple-400 font-mono text-xs font-bold border border-purple-500/30 transition cursor-pointer"
                >
                  🟣 {language === 'kk' ? 'Сілтілік' : language === 'en' ? 'Alkaline' : 'Щелочная'}
                </button>
              </div>

              {quizAnswerFeedback === 'correct' && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{language === 'kk' ? 'Керемет! Дұрыс жауап! (+50 XP)' : language === 'en' ? 'Brilliant! Correct answer! (+50 XP)' : 'Великолепно! Абсолютно верный ответ! (+50 XP)'}</span>
                </div>
              )}
              {quizAnswerFeedback === 'wrong' && (
                <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-700 dark:text-rose-300 text-xs font-mono font-bold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{language === 'kk' ? 'Қате. Шкаланы мұқият салыстырып көріңіз!' : language === 'en' ? 'Incorrect. Compare closely with the scale!' : 'Неверно. Сверьте цвет с эталонной шкалой!'}</span>
                </div>
              )}
            </div>
          )}

          {/* Solutions Rack / Library Card */}
          <div className="bg-white dark:bg-[#0f111f] rounded-3xl border border-slate-200/80 dark:border-white/[0.08] p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-[#7c6ff6]" />
                {language === 'kk' ? 'Зертханалық Ерітінділер' : language === 'en' ? 'Solution Library' : 'Коллекция растворов'}
              </h3>

              {/* Filter pills */}
              <div className="flex items-center gap-1">
                {(['all', 'acid', 'neutral', 'base'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition cursor-pointer ${
                      filterCategory === cat
                        ? 'bg-[#7c6ff6] text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/[0.1]'
                    }`}
                  >
                    {cat === 'all' && (language === 'kk' ? 'Барлығы' : language === 'en' ? 'All' : 'Все')}
                    {cat === 'acid' && (language === 'kk' ? 'Қышқыл' : language === 'en' ? 'Acid' : 'Кислые')}
                    {cat === 'neutral' && (language === 'kk' ? 'Бейтарап' : language === 'en' ? 'Neutral' : 'Нейтрал')}
                    {cat === 'base' && (language === 'kk' ? 'Сілті' : language === 'en' ? 'Base' : 'Щёлочи')}
                  </button>
                ))}
              </div>
            </div>

            {/* Solution Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[360px] overflow-y-auto no-scrollbar pr-1">
              {filteredSolutions.map((sol) => {
                const isSelected = !isCustomMode && !quizMode && selectedSolution.id === sol.id;
                return (
                  <div
                    key={sol.id}
                    onClick={() => handleSelectSolution(sol)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? 'bg-[#7c6ff6]/15 border-[#7c6ff6] ring-1 ring-[#7c6ff6]/50 shadow-md'
                        : 'bg-slate-50 dark:bg-white/[0.03] border-slate-200/70 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/[0.15] hover:bg-slate-100/70 dark:hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-white dark:bg-[#161828] border border-slate-200 dark:border-white/[0.08] shadow-sm shrink-0">
                      {sol.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {sol.name[language]}
                        </span>
                        <span 
                          className="text-[10px] font-mono font-black px-1.5 py-0.5 rounded shrink-0"
                          style={{
                            backgroundColor: sol.category.includes('acid') ? 'rgba(239, 68, 68, 0.15)' : sol.category === 'neutral' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(124, 111, 246, 0.15)',
                            color: sol.category.includes('acid') ? '#ef4444' : sol.category === 'neutral' ? '#22c55e' : '#7c6ff6'
                          }}
                        >
                          pH {sol.ph}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block truncate">
                        {sol.formula}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
