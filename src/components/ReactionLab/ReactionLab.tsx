"use client";

import React, { useState, useMemo } from "react";
import { Language, ReactionResult, MoleculeData, ElementData } from "@/types/chemistry";
import { ELEMENTS_BY_SYMBOL } from "@/data/elements";
import { MOLECULES_DATA } from "@/data/molecules";
import { AtomOrb } from "./AtomOrb";
import { DiscoveryModal } from "./DiscoveryModal";
import { ElementModal } from "../PeriodicTable/ElementModal";
import { formatFormula, analyzeReaction } from "@/lib/chemistryEngine";
import { soundEffects } from "@/lib/soundEffects";
import { getTranslation } from "@/data/i18n";
import { 
  Zap, 
  Trash2, 
  Sparkles, 
  HelpCircle, 
  Info, 
  Beaker, 
  TableProperties, 
  Plus, 
  Flame, 
  RotateCcw,
  Layers,
  Atom,
  ChevronRight,
  Filter,
  CheckCircle2,
  Gauge,
  Thermometer,
  Activity,
  Dna,
  Shuffle
} from "lucide-react";

interface ReactionLabProps {
  language: Language;
  chamberAtoms: Record<string, number>;
  onUpdateChamber: (atoms: Record<string, number>) => void;
  onClearChamber: () => void;
  onDiscoverMolecule: (molecule: MoleculeData) => void;
  onGoToJournal: () => void;
  onGoToTable: () => void;
  onInspectElement?: (num: number) => void;
}

const POPULAR_ELEMENTS = [
  "H", "C", "N", "O", "Na", "Cl", "Fe", "Ca", "Cu", "Au", "Ag", "S", "P", "Al", "Si", "K", "Mg", "F", "Br", "I", "Zn", "Ba"
];

export const ReactionLab: React.FC<ReactionLabProps> = ({
  language,
  chamberAtoms,
  onUpdateChamber,
  onClearChamber,
  onDiscoverMolecule,
  onGoToJournal,
  onGoToTable,
  onInspectElement
}) => {
  const t = (k: string) => getTranslation(language, k);

  const [activeDiscovery, setActiveDiscovery] = useState<MoleculeData | null>(null);
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  const [experimentalResult, setExperimentalResult] = useState<ReactionResult | null>(null);
  const [isReacting, setIsReacting] = useState(false);
  const [reactionStage, setReactionStage] = useState<'idle' | 'accelerating' | 'fusing' | 'done'>('idle');
  const [isThermalHeating, setIsThermalHeating] = useState(false);
  const [recipeCategory, setRecipeCategory] = useState<string>('all');
  const [elementCategoryFilter, setElementCategoryFilter] = useState<string>('all');

  // Active symbols and counts
  const activeSymbols = Object.keys(chamberAtoms).filter(s => (chamberAtoms[s] || 0) > 0);
  const totalAtomCount = activeSymbols.reduce((sum, s) => sum + (chamberAtoms[s] || 0), 0);
  const liveFormula = formatFormula(chamberAtoms);

  // Calculate live molecular mass
  const liveMolarMass = useMemo(() => {
    let mass = 0;
    activeSymbols.forEach(sym => {
      const el = ELEMENTS_BY_SYMBOL.get(sym);
      const count = chamberAtoms[sym] || 0;
      if (el) {
        mass += parseFloat(el.atomicMass || "1.0") * count;
      }
    });
    return mass.toFixed(3);
  }, [chamberAtoms, activeSymbols]);

  // Live Valence Balance Status
  const valenceStatus = useMemo(() => {
    if (totalAtomCount === 0) return null;
    const res = analyzeReaction(chamberAtoms);
    return res;
  }, [chamberAtoms, totalAtomCount]);

  const handleAddAtom = (symbol: string) => {
    soundEffects.playAtomAdd();
    const current = chamberAtoms[symbol] || 0;
    onUpdateChamber({ ...chamberAtoms, [symbol]: current + 1 });
    setExperimentalResult(null);
  };

  const handleInspectElement = (el: ElementData) => {
    soundEffects.playAtomAdd();
    setSelectedElement(el);
    if (onInspectElement) {
      onInspectElement(el.number);
    }
  };

  const handleDecrementAtom = (symbol: string) => {
    const current = chamberAtoms[symbol] || 0;
    if (current <= 1) {
      handleRemoveAtom(symbol);
    } else {
      onUpdateChamber({ ...chamberAtoms, [symbol]: current - 1 });
      setExperimentalResult(null);
    }
  };

  const handleRemoveAtom = (symbol: string) => {
    const next = { ...chamberAtoms };
    delete next[symbol];
    onUpdateChamber(next);
    setExperimentalResult(null);
  };

  const handleClear = () => {
    soundEffects.playClear();
    onClearChamber();
    setExperimentalResult(null);
    setIsThermalHeating(false);
  };

  const loadPreset = (atoms: Record<string, number>) => {
    soundEffects.playAtomAdd();
    onUpdateChamber(atoms);
    setExperimentalResult(null);
  };

  const handleRandomPreset = () => {
    const randomMol = MOLECULES_DATA[Math.floor(Math.random() * MOLECULES_DATA.length)];
    if (randomMol) {
      loadPreset(randomMol.atoms);
    }
  };

  // Analyze & React Handler with Full High-Tech Animation Sequence
  const handleAnalyze = () => {
    if (totalAtomCount === 0 || isReacting) return;

    soundEffects.playReaction();
    setIsReacting(true);
    setReactionStage('accelerating');

    // Stage 1: Magnetic Acceleration
    setTimeout(() => {
      setReactionStage('fusing');
      soundEffects.playFizz();

      // Stage 2: Quantum Fusion Burst
      setTimeout(() => {
        setIsReacting(false);
        setReactionStage('done');

        const res = analyzeReaction(chamberAtoms);
        if (res.isMatch && res.molecule) {
          soundEffects.playDiscovery();
          onDiscoverMolecule(res.molecule);
          setActiveDiscovery(res.molecule);
          setExperimentalResult(null);
        } else {
          soundEffects.playExperiment();
          setExperimentalResult(res);
        }

        setTimeout(() => setReactionStage('idle'), 400);
      }, 700);
    }, 600);
  };

  // Filtered recipes
  const filteredRecipes = useMemo(() => {
    if (recipeCategory === 'all') return MOLECULES_DATA.slice(0, 16);
    return MOLECULES_DATA.filter(m => m.category === recipeCategory);
  }, [recipeCategory]);

  // Filtered elements for dock
  const filteredElements = useMemo(() => {
    const baseList = POPULAR_ELEMENTS.map(s => ELEMENTS_BY_SYMBOL.get(s)).filter(Boolean) as ElementData[];
    if (elementCategoryFilter === 'all') return baseList;
    if (elementCategoryFilter === 'nonmetal') {
      return baseList.filter(e => ['nonmetal', 'noble-gas'].includes(e.category));
    }
    if (elementCategoryFilter === 'metal') {
      return baseList.filter(e => ['alkali-metal', 'alkaline-earth', 'transition-metal', 'post-transition'].includes(e.category));
    }
    if (elementCategoryFilter === 'halogen') {
      return baseList.filter(e => e.category === 'halogen');
    }
    return baseList;
  }, [elementCategoryFilter]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-3 animate-fadeIn font-sans">
      
      {/* TOP REACTOR TELEMETRY & DIAGNOSTICS HUD */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/[0.08] shadow-sm relative overflow-hidden transition-all">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20">
              <Atom className="w-3.5 h-3.5 animate-spin" />
              <span>Quantum Molecular Synthesizer • Реактор синтеза</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t("reactionLabTitle")}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl">
              {t("reactionLabSubtitle")}
            </p>
          </div>

          {/* Telemetry Sensors Bar */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* Live Molar Mass Sensor */}
            <div className="px-3.5 py-2 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/[0.08] shadow-inner font-mono text-left">
              <span className="text-[10px] text-slate-400 block uppercase font-medium">Молярная масса:</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1">
                <span>{totalAtomCount > 0 ? liveMolarMass : "0.000"}</span>
                <span className="text-[10px] font-normal text-slate-400">г/моль</span>
              </span>
            </div>

            {/* Reactor Temperature Dial */}
            <div 
              onClick={() => {
                soundEffects.playAtomAdd();
                setIsThermalHeating(!isThermalHeating);
              }}
              className={`px-3.5 py-2 rounded-2xl border font-mono text-left cursor-pointer transition-all ${
                isThermalHeating
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-600 dark:text-amber-400 shadow-amber-500/20 shadow-md'
                  : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:bg-slate-100'
              }`}
              title="Переключить термический нагрев"
            >
              <span className="text-[10px] text-slate-400 block uppercase font-medium flex items-center gap-1">
                <Thermometer className="w-3 h-3 text-amber-500" />
                <span>Температура:</span>
              </span>
              <span className="text-xs sm:text-sm font-bold flex items-center gap-1">
                <span>{isThermalHeating ? "1200 K (927°C)" : "298 K (25°C)"}</span>
              </span>
            </div>

            {/* Valence Stability Tag */}
            <div className="px-3.5 py-2 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/[0.08] font-mono text-left">
              <span className="text-[10px] text-slate-400 block uppercase font-medium">Валентный статус:</span>
              <span className="text-xs font-bold flex items-center gap-1.5">
                {totalAtomCount === 0 ? (
                  <span className="text-slate-400">Камера свободна</span>
                ) : valenceStatus?.isMatch ? (
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Стабильно (100%)</span>
                  </span>
                ) : (
                  <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Эксперимент</span>
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN QUANTUM HOLOGRAPHIC REACTION CHAMBER */}
      <div className="relative rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/[0.08] p-5 sm:p-7 shadow-sm overflow-hidden">
        
        {/* Chamber Header: Title, Formula Badge, Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/[0.07] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm">
              <Beaker className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-white">
                  Магнитная камера удержания
                </span>
                <span className="text-[10px] font-mono px-2 py-0.2 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  Атомов: {totalAtomCount}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Помещайте атомы и жмите «Синтезировать», чтобы открыть реальное вещество
              </p>
            </div>
          </div>

          {/* Current Live Formula Display & Controls */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200/90 dark:border-white/[0.1] shadow-inner">
              <span className="text-xs text-slate-400 font-mono uppercase">Формула:</span>
              <span className="text-lg sm:text-xl font-extrabold font-mono text-indigo-600 dark:text-indigo-400 min-w-[3rem] text-center tracking-wide">
                {liveFormula || "—"}
              </span>
            </div>

            {activeSymbols.length > 0 && (
              <button
                onClick={handleClear}
                title={t("clearButton")}
                className="p-2.5 rounded-2xl bg-slate-100 hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-950/40 text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 border border-slate-200 dark:border-white/[0.08] hover:border-rose-300 dark:hover:border-rose-500/30 transition-all cursor-pointer shadow-sm"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Containment Area with Laser Optics and Magnetic Ring */}
        <div className={`relative my-6 min-h-[280px] sm:min-h-[320px] rounded-3xl border flex flex-col items-center justify-center p-6 sm:p-8 transition-all duration-500 overflow-hidden ${
          isReacting 
            ? "border-indigo-500 bg-indigo-950/20 shadow-2xl shadow-indigo-500/30" 
            : activeSymbols.length > 0
              ? "border-indigo-500/30 dark:border-white/[0.14] bg-slate-50/60 dark:bg-slate-950/50 shadow-inner"
              : "border-dashed border-slate-200 dark:border-white/[0.08] bg-slate-50/30 dark:bg-slate-950/20"
        }`}>
          
          {/* Holographic Plasma Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.07] dark:opacity-[0.12] pointer-events-none" />

          {/* Rotating Magnetic Confinement Rings */}
          <div className="absolute w-72 h-72 rounded-full border border-indigo-500/20 dark:border-indigo-400/20 animate-orbital pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full border border-dashed border-cyan-500/15 pointer-events-none" />

          {/* Corner Optical Laser Beams */}
          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-indigo-500/40 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-indigo-500/40 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-indigo-500/40 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-indigo-500/40 rounded-br-xl pointer-events-none" />

          {/* Thermal Heating Plasma Glow */}
          {isThermalHeating && (
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-amber-500/5 to-transparent pointer-events-none animate-pulse" />
          )}

          {/* Content: Empty state or Floating Active Atoms */}
          {activeSymbols.length === 0 ? (
            <div className="text-center py-8 max-w-md space-y-3 select-none relative z-10">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-md">
                <Atom className="w-8 h-8 animate-spin" style={{ animationDuration: '10s' }} />
              </div>
              <div className="space-y-1">
                <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                  {t("chamberEmpty")}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Кликните на элементы в доке внизу или выберите готовый рецепт из книги
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2">
                <button
                  onClick={() => loadPreset({ H: 2, O: 1 })}
                  className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/50 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-xs font-mono font-medium transition-all cursor-pointer"
                >
                  💧 Вода (2H + O)
                </button>
                <button
                  onClick={() => loadPreset({ Na: 1, Cl: 1 })}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium transition-all cursor-pointer"
                >
                  🧂 Соль (Na + Cl)
                </button>
              </div>
            </div>
          ) : (
            <div className={`flex items-center justify-center gap-6 flex-wrap py-4 relative z-10 transition-transform duration-500 ${
              reactionStage === 'accelerating' ? 'scale-75' : reactionStage === 'fusing' ? 'scale-125' : ''
            }`}>
              {activeSymbols.map(sym => {
                const el = ELEMENTS_BY_SYMBOL.get(sym);
                if (!el) return null;
                return (
                  <AtomOrb
                    key={sym}
                    element={el}
                    count={chamberAtoms[sym] || 1}
                    onIncrement={() => handleAddAtom(sym)}
                    onDecrement={() => handleDecrementAtom(sym)}
                    onRemove={() => handleRemoveAtom(sym)}
                    onInspect={handleInspectElement}
                  />
                );
              })}
            </div>
          )}

          {/* Fusion / Acceleration Energy Burst Overlay */}
          {isReacting && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md z-30 animate-fadeIn">
              <div className="relative flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin" />
                <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 blur-md animate-ping" />
                <Zap className="w-8 h-8 text-white absolute animate-pulse fill-current" />
              </div>
              <span className="text-sm font-mono font-bold text-white uppercase tracking-widest mt-4">
                {reactionStage === 'accelerating' ? 'Сближение атомных ядер...' : 'Квантовый синтез связей!'}
              </span>
            </div>
          )}
        </div>

        {/* Reaction Controls & Big Synthesize CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-200/80 dark:border-white/[0.07]">
          {/* Quick Helper Tools */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleRandomPreset}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium transition-all cursor-pointer shadow-sm"
              title="Загрузить случайное соединение"
            >
              <Shuffle className="w-3.5 h-3.5 text-indigo-500" />
              <span>Случайный опыт</span>
            </button>

            <button
              onClick={() => setIsThermalHeating(!isThermalHeating)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium border transition-all cursor-pointer shadow-sm ${
                isThermalHeating
                  ? 'bg-amber-500 text-white border-amber-500 shadow-amber-500/30'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/[0.08]'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>{isThermalHeating ? "Термонагрев: ВКЛ" : "Термонагрев"}</span>
            </button>
          </div>

          {/* Main Giant Glowing Synthesize Button */}
          <button
            onClick={handleAnalyze}
            disabled={totalAtomCount === 0 || isReacting}
            className={`w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider font-mono transition-all shadow-lg select-none ${
              totalAtomCount === 0
                ? "bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-white/[0.04] cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-95 cursor-pointer"
            }`}
          >
            <Zap className="w-4.5 h-4.5 fill-current" />
            <span>{t("analyzeButton")}</span>
          </button>
        </div>

        {/* Speculative / Non-Punitive Educational Explanation */}
        {experimentalResult && !experimentalResult.isMatch && (
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-amber-500/[0.08] border border-amber-500/25 space-y-2 animate-fadeIn">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-bold text-xs sm:text-sm">
              <HelpCircle className="w-4.5 h-4.5" />
              <span>{t("experimentalTitle")} ({experimentalResult.formula})</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {experimentalResult.explanation[language]}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-amber-600 dark:text-amber-400 font-mono pt-1">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>{experimentalResult.bondTypeDescription[language]}</span>
            </div>
          </div>
        )}
      </div>

      {/* CATEGORIZED 1-CLICK RECIPE BOOK DOCK */}
      <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wider">
              Книга химических формул и рецептов (51 вещество)
            </h3>
          </div>

          {/* Recipe Category Filter Buttons */}
          <div className="flex items-center gap-1 flex-wrap font-mono text-xs">
            {[
              { id: 'all', label: 'Все' },
              { id: 'essential', label: '💧 Жизненные' },
              { id: 'acid-base', label: '🧪 Кислоты/Щелочи' },
              { id: 'fuel', label: '⛽ Органика' },
              { id: 'mineral', label: '⛏️ Минералы' },
              { id: 'gas', label: '💨 Газы' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setRecipeCategory(cat.id)}
                className={`px-2.5 py-1 rounded-xl text-[11px] transition-all cursor-pointer border ${
                  recipeCategory === cat.id
                    ? 'bg-indigo-600 text-white font-bold border-indigo-600 shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200/70 dark:border-white/[0.06]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Chips Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {filteredRecipes.map(mol => {
            const isCurrentlyLoaded = liveFormula === mol.formula;

            return (
              <button
                key={mol.id}
                onClick={() => loadPreset(mol.atoms)}
                className={`p-2.5 rounded-2xl border text-left transition-all hover:scale-102 active:scale-95 cursor-pointer shadow-xs ${
                  isCurrentlyLoaded
                    ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500/50 shadow-sm ring-2 ring-indigo-400'
                    : 'bg-slate-50/80 hover:bg-slate-100 dark:bg-slate-950/40 dark:hover:bg-slate-800/80 border-slate-200/70 dark:border-white/[0.06]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                    {mol.formula}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">
                    {Object.values(mol.atoms).reduce((a: number, b: number) => a + b, 0)} ат.
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate block font-medium mt-0.5">
                  {mol.name[language]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ELEMENT PICKER DOCK WITH CATEGORIES */}
      <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-500" />
            <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wider">
              Быстрый выбор химических элементов
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Category Filter */}
            <div className="flex items-center gap-1 font-mono text-xs">
              {[
                { id: 'all', label: 'Все' },
                { id: 'nonmetal', label: 'Неметаллы' },
                { id: 'metal', label: 'Металлы' },
                { id: 'halogen', label: 'Галогены' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setElementCategoryFilter(f.id)}
                  className={`px-2.5 py-1 rounded-xl text-[11px] transition-all cursor-pointer border ${
                    elementCategoryFilter === f.id
                      ? 'bg-indigo-600 text-white font-bold border-indigo-600 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200/70 dark:border-white/[0.06]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <button
              onClick={onGoToTable}
              className="hidden md:flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 hover:underline cursor-pointer"
            >
              <TableProperties className="w-3.5 h-3.5" />
              <span>Таблица Менделеева →</span>
            </button>
          </div>
        </div>

        {/* Elements Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-2">
          {filteredElements.map(el => {
            const currentCount = chamberAtoms[el.symbol] || 0;

            return (
              <div
                key={el.symbol}
                onClick={() => handleInspectElement(el)}
                className="relative group p-2 rounded-2xl border border-slate-200/80 dark:border-white/[0.07] bg-slate-50/80 hover:bg-slate-100 dark:bg-slate-950/60 dark:hover:bg-slate-800/90 flex flex-col items-center justify-between aspect-square transition-all hover:scale-105 active:scale-95 cursor-pointer select-none shadow-xs"
                title={`${el.name[language]} (${el.symbol}) — Нажмите для строения атома (модель Бора)`}
              >
                {/* Top Category Accent Line */}
                <span 
                  className="absolute top-1.5 left-2 right-2 h-1 rounded-full opacity-80 group-hover:opacity-100 shadow-xs" 
                  style={{ backgroundColor: el.color }}
                />

                {/* Top Row: Number & Count */}
                <div className="flex items-center justify-between w-full leading-none mt-1 px-1">
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                    {el.number}
                  </span>
                  {currentCount > 0 && (
                    <span className="w-4 h-4 rounded-full bg-indigo-600 text-white font-mono font-bold text-[9px] flex items-center justify-center shadow-sm">
                      {currentCount}
                    </span>
                  )}
                </div>

                {/* Center Symbol */}
                <div className="text-center my-auto">
                  <span className="text-base font-extrabold font-mono text-slate-900 dark:text-white block">
                    {el.symbol}
                  </span>
                  <span className="text-[9px] text-slate-500 dark:text-slate-400 truncate block max-w-full font-medium">
                    {el.name[language]}
                  </span>
                </div>

                {/* Bottom: Quick Add (+) on Hover */}
                <div className="w-full text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddAtom(el.symbol);
                    }}
                    className="flex items-center justify-center w-full py-1 rounded-lg bg-indigo-600/10 hover:bg-indigo-600 text-indigo-600 hover:text-white dark:text-indigo-400 dark:hover:text-white font-medium text-[9px] font-mono transition-colors cursor-pointer"
                    title={`Добавить +1 ${el.symbol} в реактор`}
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Element Bohr Model Modal */}
      {selectedElement && (
        <ElementModal
          element={selectedElement}
          onClose={() => setSelectedElement(null)}
          onAddToLab={handleAddAtom}
          language={language}
          inLabCount={chamberAtoms[selectedElement.symbol] || 0}
        />
      )}

      {/* Discovery Modal Celebratory Popup */}
      <DiscoveryModal
        molecule={activeDiscovery}
        onClose={() => setActiveDiscovery(null)}
        language={language}
        onGoToJournal={() => {
          setActiveDiscovery(null);
          onGoToJournal();
        }}
      />
    </div>
  );
};
