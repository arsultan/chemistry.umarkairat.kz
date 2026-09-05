"use client";

import React, { useState } from "react";
import { Language, ReactionResult, MoleculeData } from "@/types/chemistry";
import { ELEMENTS_BY_SYMBOL, ELEMENTS_DATA } from "@/data/elements";
import { AtomOrb } from "./AtomOrb";
import { DiscoveryModal } from "./DiscoveryModal";
import { formatFormula, analyzeReaction } from "@/lib/chemistryEngine";
import { soundEffects } from "@/lib/soundEffects";
import { getTranslation } from "@/data/i18n";
import { 
  Zap, 
  Trash2, 
  Sparkles, 
  Flame, 
  HelpCircle, 
  Plus, 
  CheckCircle2, 
  Info,
  Beaker,
  TableProperties
} from "lucide-react";

interface ReactionLabProps {
  language: Language;
  chamberAtoms: Record<string, number>;
  onUpdateChamber: (atoms: Record<string, number>) => void;
  onClearChamber: () => void;
  onDiscoverMolecule: (molecule: MoleculeData) => void;
  onGoToJournal: () => void;
  onGoToTable: () => void;
}

const COMMON_DOCK_SYMBOLS = ["H", "C", "N", "O", "Na", "Cl", "Fe", "Ca", "Cu", "Au", "Ag", "S", "P", "Al", "Si", "K", "Mg", "F"];

export const ReactionLab: React.FC<ReactionLabProps> = ({
  language,
  chamberAtoms,
  onUpdateChamber,
  onClearChamber,
  onDiscoverMolecule,
  onGoToJournal,
  onGoToTable
}) => {
  const t = (k: string) => getTranslation(language, k);

  const [activeDiscovery, setActiveDiscovery] = useState<MoleculeData | null>(null);
  const [experimentalResult, setExperimentalResult] = useState<ReactionResult | null>(null);
  const [isReacting, setIsReacting] = useState(false);

  // Active atoms list
  const activeSymbols = Object.keys(chamberAtoms).filter(s => (chamberAtoms[s] || 0) > 0);
  const totalAtomCount = activeSymbols.reduce((sum, s) => sum + (chamberAtoms[s] || 0), 0);
  const liveFormula = formatFormula(chamberAtoms);

  const handleAddAtom = (symbol: string) => {
    soundEffects.playAtomAdd();
    const current = chamberAtoms[symbol] || 0;
    onUpdateChamber({ ...chamberAtoms, [symbol]: current + 1 });
    setExperimentalResult(null);
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
  };

  // Preset loaders for fast demonstration
  const loadPreset = (atoms: Record<string, number>) => {
    soundEffects.playAtomAdd();
    onUpdateChamber(atoms);
    setExperimentalResult(null);
  };

  // Analyze & React Handler
  const handleAnalyze = () => {
    if (totalAtomCount === 0) return;

    soundEffects.playReaction();
    setIsReacting(true);

    setTimeout(() => {
      setIsReacting(false);
      const res = analyzeReaction(chamberAtoms);
      if (res.isMatch && res.molecule) {
        onDiscoverMolecule(res.molecule);
        setActiveDiscovery(res.molecule);
        setExperimentalResult(null);
      } else {
        soundEffects.playExperiment();
        setExperimentalResult(res);
      }
    }, 600);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-4">
      {/* Flagship Demonstration Banner: H + H + O -> H2O */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#00d2ff]/15 via-[#181c22] to-[#edb1ff]/15 border border-[#00d2ff]/30 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-xl bg-[#00d2ff]/20 border border-[#00d2ff]/40 flex items-center justify-center text-[#00d2ff] shadow-[0_0_15px_rgba(0,210,255,0.3)] shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00d2ff]">
                Flagship Experiment
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00d2ff]/20 text-white font-mono">
                Classroom Demo
              </span>
            </div>
            <div className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 font-mono mt-0.5">
              <span>H + H + O</span>
              <span className="text-[#00d2ff]">→</span>
              <span className="text-[#00d2ff] underline underline-offset-4">H₂O</span>
              <span className="text-slate-400 text-xs font-normal">({language === 'ru' ? 'Синтез чистой воды' : language === 'kk' ? 'Таза су синтезі' : 'Pure Water Discovery'})</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => loadPreset({ H: 2, O: 1 })}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-[#00d2ff] to-[#47d6ff] hover:brightness-110 shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all whitespace-nowrap active:scale-95"
        >
          <Beaker className="w-4 h-4" />
          <span>Load H₂O Recipe</span>
        </button>
      </div>

      {/* Main Reaction Workbench Chamber */}
      <div className="relative rounded-3xl bg-[#10141a] border border-white/10 p-6 shadow-2xl overflow-hidden">
        {/* Glow ambient background rings */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00d2ff]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#edb1ff]/5 blur-3xl pointer-events-none" />

        {/* Chamber Top Info Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Beaker className="w-5 h-5 text-[#00d2ff]" />
              <span>{t("reactionLabTitle")}</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {t("reactionLabSubtitle")}
            </p>
          </div>

          {/* Current Live Formula Pill */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#181c22] border border-white/10 shadow-inner">
              <span className="text-xs text-slate-400 font-mono uppercase">{t("currentFormula")}:</span>
              <span className="text-lg font-black font-mono text-[#00d2ff] tracking-wider min-w-[3rem] text-center">
                {liveFormula || "—"}
              </span>
            </div>

            {activeSymbols.length > 0 && (
              <button
                onClick={handleClear}
                title={t("clearButton")}
                className="p-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Reaction Beaker / Magnetic Confinement Area */}
        <div className={`relative my-6 min-h-[260px] rounded-2xl border-2 border-dashed flex items-center justify-center p-6 transition-all duration-500 ${
          isReacting 
            ? "border-[#00d2ff] bg-[#00d2ff]/10 shadow-[0_0_50px_rgba(0,210,255,0.4)]" 
            : activeSymbols.length > 0
              ? "border-[#00d2ff]/40 bg-[#141820]/60 shadow-inner"
              : "border-white/10 bg-[#141820]/30"
        }`}>
          {activeSymbols.length === 0 ? (
            <div className="text-center py-8 max-w-md space-y-2 select-none">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#181c22] border border-white/10 flex items-center justify-center text-slate-500">
                <Beaker className="w-8 h-8 stroke-1" />
              </div>
              <p className="text-sm font-medium text-slate-400">
                {t("chamberEmpty")}
              </p>
              <p className="text-xs text-slate-500 font-mono">
                Tip: Click any element from the quick dock below, or pick a Quick Experiment!
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-6 flex-wrap py-4">
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
                  />
                );
              })}
            </div>
          )}

          {/* Reaction Energy animation indicator */}
          {isReacting && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-2xl">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full border-4 border-[#00d2ff] border-t-transparent animate-spin shadow-[0_0_20px_#00d2ff]" />
                <span className="text-xs font-mono font-bold text-[#00d2ff] uppercase tracking-widest animate-pulse">
                  Analyzing Chemical Bonds...
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Action Bar: Analyze Button & Quick Presets */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
          {/* Preset Buttons */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-400 font-mono text-[11px] uppercase mr-1">
              {t("quickPresets")}:
            </span>
            <button
              onClick={() => loadPreset({ H: 2, O: 1 })}
              className="px-3 py-1.5 rounded-lg bg-[#181c22] hover:bg-[#00d2ff]/20 text-slate-300 hover:text-[#00d2ff] border border-white/10 hover:border-[#00d2ff]/40 transition-all font-mono"
            >
              💧 {t("presetWater")}
            </button>
            <button
              onClick={() => loadPreset({ Na: 1, Cl: 1 })}
              className="px-3 py-1.5 rounded-lg bg-[#181c22] hover:bg-[#fbbf24]/20 text-slate-300 hover:text-[#fbbf24] border border-white/10 hover:border-[#fbbf24]/40 transition-all font-mono"
            >
              🧂 {t("presetSalt")}
            </button>
            <button
              onClick={() => loadPreset({ C: 1, H: 4 })}
              className="px-3 py-1.5 rounded-lg bg-[#181c22] hover:bg-[#f97316]/20 text-slate-300 hover:text-[#f97316] border border-white/10 hover:border-[#f97316]/40 transition-all font-mono"
            >
              🔥 {t("presetMethane")}
            </button>
            <button
              onClick={() => loadPreset({ C: 1, O: 2 })}
              className="px-3 py-1.5 rounded-lg bg-[#181c22] hover:bg-[#38bdf8]/20 text-slate-300 hover:text-[#38bdf8] border border-white/10 hover:border-[#38bdf8]/40 transition-all font-mono"
            >
              💨 {t("presetCO2")}
            </button>
            <button
              onClick={() => loadPreset({ Fe: 2, O: 3 })}
              className="px-3 py-1.5 rounded-lg bg-[#181c22] hover:bg-[#ef4444]/20 text-slate-300 hover:text-[#ef4444] border border-white/10 hover:border-[#ef4444]/40 transition-all font-mono"
            >
              ⛏️ {t("presetRust")}
            </button>
          </div>

          {/* Main Glowing Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={totalAtomCount === 0 || isReacting}
            className={`flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold uppercase tracking-wider font-mono transition-all duration-300 ${
              totalAtomCount === 0
                ? "bg-[#181c22] text-slate-500 border border-white/5 cursor-not-allowed"
                : "bg-gradient-to-r from-[#00d2ff] via-[#47d6ff] to-[#edb1ff] text-black shadow-[0_0_25px_rgba(0,210,255,0.4)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(0,210,255,0.6)] active:scale-95 cursor-pointer"
            }`}
          >
            <Zap className="w-5 h-5 fill-black" />
            <span>{t("analyzeButton")}</span>
          </button>
        </div>

        {/* Speculative / Non-Punitive Experimental Explanation Banner */}
        {experimentalResult && !experimentalResult.isMatch && (
          <div className="mt-6 p-4 rounded-2xl bg-[#181c22] border border-amber-500/30 space-y-2 animate-fadeIn shadow-lg">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
              <HelpCircle className="w-4 h-4" />
              <span>{t("experimentalTitle")} ({experimentalResult.formula})</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {experimentalResult.explanation[language]}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#00d2ff] font-mono pt-1">
              <Info className="w-3.5 h-3.5" />
              <span>{experimentalResult.bondTypeDescription[language]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Element Pick Dock */}
      <div className="p-5 rounded-2xl bg-[#10141a] border border-white/10 space-y-3 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Quick Pick Elements Dock
            </span>
            <span className="text-[10px] text-slate-500 font-mono">
              (Click to add directly into chamber)
            </span>
          </div>

          <button
            onClick={onGoToTable}
            className="flex items-center gap-1.5 text-xs font-mono text-[#00d2ff] hover:underline"
          >
            <TableProperties className="w-3.5 h-3.5" />
            <span>View All 118 Elements</span>
          </button>
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-18 gap-2">
          {COMMON_DOCK_SYMBOLS.map(sym => {
            const el = ELEMENTS_BY_SYMBOL.get(sym);
            if (!el) return null;
            const currentCount = chamberAtoms[sym] || 0;

            return (
              <button
                key={sym}
                onClick={() => handleAddAtom(sym)}
                className="relative group p-2 rounded-xl border flex flex-col items-center justify-center aspect-square transition-all hover:scale-110 active:scale-95"
                style={{
                  backgroundColor: `${el.color}15`,
                  borderColor: `${el.color}45`,
                  boxShadow: currentCount > 0 ? `0 0 10px ${el.color}40` : "none"
                }}
                title={`${el.name[language]} (${sym})`}
              >
                {currentCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#00d2ff] text-black font-mono font-bold text-[9px] flex items-center justify-center">
                    {currentCount}
                  </span>
                )}
                <span className="text-[9px] font-mono text-slate-400 font-bold leading-none">
                  {el.number}
                </span>
                <span className="text-base font-black font-mono text-white mt-0.5">
                  {el.symbol}
                </span>
                <span className="text-[8px] text-slate-300 truncate max-w-full font-medium">
                  {el.name[language]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

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
