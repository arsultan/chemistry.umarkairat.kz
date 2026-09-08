"use client";

import React from "react";
import { ElementData, Language } from "@/types/chemistry";
import { getTranslation } from "@/data/i18n";
import { soundEffects } from "@/lib/soundEffects";
import { X, Plus, Sparkles, Orbit, Layers, Atom, Zap } from "lucide-react";

interface ElementModalProps {
  element: ElementData | null;
  onClose: () => void;
  onAddToLab: (symbol: string) => void;
  language: Language;
  inLabCount?: number;
}

const SHELL_NAMES = ["K", "L", "M", "N", "O", "P", "Q"];

export const getElementShells = (atomicNumber: number): number[] => {
  const EXACT_SHELLS: Record<number, number[]> = {
    1: [1], // H
    2: [2], // He
    3: [2, 1], // Li
    4: [2, 2], // Be
    5: [2, 3], // B
    6: [2, 4], // C
    7: [2, 5], // N
    8: [2, 6], // O
    9: [2, 7], // F
    10: [2, 8], // Ne
    11: [2, 8, 1], // Na
    12: [2, 8, 2], // Mg
    13: [2, 8, 3], // Al
    14: [2, 8, 4], // Si
    15: [2, 8, 5], // P
    16: [2, 8, 6], // S
    17: [2, 8, 7], // Cl
    18: [2, 8, 8], // Ar
    19: [2, 8, 8, 1], // K
    20: [2, 8, 8, 2], // Ca
    21: [2, 8, 9, 2], // Sc
    22: [2, 8, 10, 2], // Ti
    23: [2, 8, 11, 2], // V
    24: [2, 8, 13, 1], // Cr
    25: [2, 8, 13, 2], // Mn
    26: [2, 8, 14, 2], // Fe
    27: [2, 8, 15, 2], // Co
    28: [2, 8, 16, 2], // Ni
    29: [2, 8, 18, 1], // Cu
    30: [2, 8, 18, 2], // Zn
    31: [2, 8, 18, 3], // Ga
    32: [2, 8, 18, 4], // Ge
    33: [2, 8, 18, 5], // As
    34: [2, 8, 18, 6], // Se
    35: [2, 8, 18, 7], // Br
    36: [2, 8, 18, 8], // Kr
    47: [2, 8, 18, 18, 1], // Ag
    79: [2, 8, 18, 32, 18, 1], // Au
    80: [2, 8, 18, 32, 18, 2], // Hg
    92: [2, 8, 18, 32, 21, 9, 2], // U
  };

  if (EXACT_SHELLS[atomicNumber]) {
    return EXACT_SHELLS[atomicNumber];
  }

  const capacities = [2, 8, 18, 32, 32, 18, 8];
  const shells: number[] = [];
  let remaining = atomicNumber;
  for (const cap of capacities) {
    if (remaining <= 0) break;
    const count = Math.min(remaining, cap);
    shells.push(count);
    remaining -= count;
  }
  return shells;
};

export const ElementModal: React.FC<ElementModalProps> = ({
  element,
  onClose,
  onAddToLab,
  language,
  inLabCount = 0
}) => {
  if (!element) return null;
  const t = (k: string) => getTranslation(language, k);

  const handleAdd = () => {
    soundEffects.playAtomAdd();
    onAddToLab(element.symbol);
  };

  const shells = getElementShells(element.number);
  const totalElectrons = element.number;
  const protons = element.number;
  const atomicWeightNum = parseFloat(element.atomicMass) || element.number;
  const neutrons = Math.max(0, Math.round(atomicWeightNum - protons));
  const valenceElectrons = shells[shells.length - 1] || 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl transition-all max-h-[92vh] flex flex-col"
      >
        {/* Top Header Bar */}
        <div 
          className="p-5 flex items-start justify-between border-b border-slate-200/80 dark:border-white/[0.08] bg-slate-50/90 dark:bg-slate-950/60"
        >
          <div className="flex items-center gap-3.5 sm:gap-4">
            {/* Symbol Box */}
            <div 
              className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center font-mono border border-slate-200 dark:border-white/[0.15] bg-slate-900 text-white shadow-md relative overflow-hidden shrink-0"
              style={{
                boxShadow: `0 0 20px ${element.color}30`
              }}
            >
              <div 
                className="absolute top-1 left-2 right-2 h-0.5 rounded-full" 
                style={{ backgroundColor: element.color }} 
              />
              <span className="text-[10px] font-mono text-slate-400 font-medium">
                {element.number}
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white" style={{ textShadow: `0 0 10px ${element.color}` }}>
                {element.symbol}
              </span>
              <span className="text-[9px] text-slate-400 font-mono">
                {element.atomicMass}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {element.name[language]}
                </h2>
                <span 
                  className="text-xs px-2.5 py-0.5 rounded-full font-medium border uppercase tracking-wider font-mono"
                  style={{ 
                    backgroundColor: `${element.color}15`, 
                    borderColor: `${element.color}50`,
                    color: element.color 
                  }}
                >
                  {t(element.category)}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5 flex items-center gap-2 flex-wrap">
                <span>{element.electronConfig}</span>
                <span>•</span>
                <span className="capitalize">{t(element.phase)}</span>
                <span>•</span>
                <span>{language === 'ru' ? `Валентность: ${element.valency?.join(', ') || valenceElectrons}` : `Valency: ${element.valency?.join(', ') || valenceElectrons}`}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-white/[0.08] transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1">
          {/* Main Visual Bohr Atomic Model & Subatomic Particle Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Animated Bohr Orbital Canvas */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950 border border-slate-800 dark:border-white/[0.08] relative min-h-[280px] overflow-hidden shadow-inner">
              {/* Radial grid lines for orbital scale */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-64 h-64 rounded-full border border-dashed border-indigo-500/40" />
                <div className="absolute w-44 h-44 rounded-full border border-indigo-500/20" />
              </div>

              {/* Bohr Model Viewport */}
              <div className="relative w-60 h-60 flex items-center justify-center my-2">
                {/* Orbital Rings with revolving electron particles */}
                {shells.map((electronsInShell, ringIdx) => {
                  const size = 70 + ringIdx * 26;
                  const shellName = SHELL_NAMES[ringIdx] || `n${ringIdx + 1}`;
                  const isOuterValence = ringIdx === shells.length - 1;

                  return (
                    <div
                      key={`shell-${ringIdx}`}
                      className="absolute rounded-full flex items-center justify-center pointer-events-none animate-orbital"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        border: isOuterValence 
                          ? `1.5px dashed ${element.color}90` 
                          : '1px solid rgba(255, 255, 255, 0.12)',
                        boxShadow: isOuterValence ? `0 0 15px ${element.color}20` : 'none',
                        animationDuration: `${10 + ringIdx * 4}s`,
                        animationDirection: ringIdx % 2 === 0 ? 'normal' : 'reverse'
                      }}
                    >
                      {/* Orbiting electrons */}
                      {Array.from({ length: Math.min(electronsInShell, 16) }).map((_, eIdx) => {
                        const angle = (360 / Math.min(electronsInShell, 16)) * eIdx;
                        return (
                          <div
                            key={`electron-${ringIdx}-${eIdx}`}
                            className="absolute flex items-center justify-center"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `rotate(${angle}deg) translate(${size / 2}px) rotate(-${angle}deg)`
                            }}
                          >
                            <div 
                              className="w-3 h-3 rounded-full shadow-md animate-pulse"
                              style={{
                                backgroundColor: isOuterValence ? element.color : '#38bdf8',
                                boxShadow: `0 0 8px ${isOuterValence ? element.color : '#38bdf8'}`,
                                border: '1px solid #ffffff'
                              }}
                              title={`Electron e⁻ (${shellName}-shell)`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}

                {/* Central Atomic Nucleus */}
                <div 
                  className="relative z-10 w-14 h-14 rounded-full flex flex-col items-center justify-center border-2 border-white/20 text-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${element.color} 0%, #0f172a 80%)`,
                    boxShadow: `0 0 25px ${element.color}60`
                  }}
                  title={`Ядро атома: ${protons} протонов, ${neutrons} нейтронов`}
                >
                  <span className="text-sm font-black text-white font-mono leading-none">
                    {element.symbol}
                  </span>
                  <span className="text-[8px] text-white/90 font-mono font-bold leading-none mt-0.5">
                    {protons}p⁺
                  </span>
                </div>
              </div>

              {/* Shells breakdown badge below orbit */}
              <div className="flex items-center gap-1.5 flex-wrap justify-center mt-3 z-10 text-[11px] font-mono">
                <span className="text-slate-400 font-semibold uppercase mr-1">
                  {language === 'ru' ? 'Оболочки:' : 'Shells:'}
                </span>
                {shells.map((count, idx) => (
                  <span 
                    key={idx}
                    className={`px-2 py-0.5 rounded-md border text-[10px] font-bold ${
                      idx === shells.length - 1 
                        ? 'bg-indigo-600/30 border-indigo-500/50 text-indigo-300' 
                        : 'bg-slate-900 border-white/[0.08] text-slate-300'
                    }`}
                  >
                    {SHELL_NAMES[idx] || `n${idx + 1}`}: {count}e⁻
                  </span>
                ))}
              </div>
            </div>

            {/* Subatomic Particle & Chemical Characteristics */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Atom className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>{language === 'ru' ? 'Строение атома и состав ядра' : 'Atomic & Nuclear Structure'}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {/* Protons */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.07] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Протоны (p⁺)</div>
                    <div className="text-lg font-black text-slate-900 dark:text-white mt-0.5">{protons}</div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_8px_#f43f5e]" />
                </div>

                {/* Neutrons */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.07] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Нейтроны (n⁰)</div>
                    <div className="text-lg font-black text-slate-900 dark:text-white mt-0.5">{neutrons}</div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                </div>

                {/* Total Electrons */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.07] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Электроны (e⁻)</div>
                    <div className="text-lg font-black text-slate-900 dark:text-white mt-0.5">{totalElectrons}</div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                </div>

                {/* Valence Electrons */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.07] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Валентные (e⁻)</div>
                    <div className="text-lg font-black text-indigo-600 dark:text-indigo-400 mt-0.5">{valenceElectrons}</div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
                </div>
              </div>

              {/* Table Position metrics */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/[0.06]">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">{t("period")} / {t("group")}</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{element.period} / {element.group}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/[0.06]">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">{t("atomicMass")}</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{element.atomicMass} а.е.м.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Everyday & Real-world Uses */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-white/[0.07] space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>{t("everydayUse")}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {element.everydayUse[language]}
            </p>
          </div>

          {/* Fun Fact / Scientific Did-You-Know */}
          <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-500/[0.05] border border-indigo-200 dark:border-indigo-500/20 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("funFact")}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
              &ldquo;{element.funFact[language]}&rdquo;
            </p>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 bg-slate-50/90 dark:bg-slate-950/90 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-600 dark:text-slate-400 font-mono text-center sm:text-left">
            {inLabCount > 0 ? (
              <span className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> {inLabCount} шт. в реакторе открытий
              </span>
            ) : (
              <span>Готов к проведению химических реакций</span>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-200/70 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/[0.08] transition-all cursor-pointer"
            >
              {t("close")}
            </button>
            <button
              onClick={handleAdd}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all active:scale-95 cursor-pointer shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>{t("addToLab")}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
