"use client";

import React, { useState } from "react";
import { ElementData, Language } from "@/types/chemistry";
import { getTranslation } from "@/data/i18n";
import { soundEffects } from "@/lib/soundEffects";
import { 
  X, 
  Plus, 
  Sparkles, 
  Orbit, 
  Layers, 
  Atom, 
  Zap, 
  Eye, 
  Radio, 
  ShieldCheck, 
  Activity,
  Flame,
  Info
} from "lucide-react";

interface ElementModalProps {
  element: ElementData | null;
  onClose: () => void;
  onAddToLab: (symbol: string) => void;
  language: Language;
  inLabCount?: number;
}

const SHELL_NAMES = ["K", "L", "M", "N", "O", "P", "Q", "R"];

// Harmonized Shell Colors (Each quantum shell has its distinct aesthetic color!)
export const SHELL_PALETTE = [
  { name: "K", color: "#38bdf8", shadow: "#38bdf880", bg: "bg-sky-500", border: "border-sky-400", label: "Слой K (n=1)" },
  { name: "L", color: "#10b981", shadow: "#10b98180", bg: "bg-emerald-500", border: "border-emerald-400", label: "Слой L (n=2)" },
  { name: "M", color: "#a855f7", shadow: "#a855f780", bg: "bg-purple-500", border: "border-purple-400", label: "Слой M (n=3)" },
  { name: "N", color: "#f59e0b", shadow: "#f59e0b80", bg: "bg-amber-500", border: "border-amber-400", label: "Слой N (n=4)" },
  { name: "O", color: "#f43f5e", shadow: "#f43f5e80", bg: "bg-rose-500", border: "border-rose-400", label: "Слой O (n=5)" },
  { name: "P", color: "#06b6d4", shadow: "#06b6d480", bg: "bg-cyan-500", border: "border-cyan-400", label: "Слой P (n=6)" },
  { name: "Q", color: "#6366f1", shadow: "#6366f180", bg: "bg-indigo-500", border: "border-indigo-400", label: "Слой Q (n=7)" },
  { name: "R", color: "#ec4899", shadow: "#ec489980", bg: "bg-pink-500", border: "border-pink-400", label: "Слой R (n=8)" },
];

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
    118: [2, 8, 18, 32, 32, 18, 8], // Og
    119: [2, 8, 18, 32, 32, 18, 8, 1], // Uue
    120: [2, 8, 18, 32, 32, 18, 8, 2], // Ubn
  };

  if (EXACT_SHELLS[atomicNumber]) {
    return EXACT_SHELLS[atomicNumber];
  }

  const capacities = [2, 8, 18, 32, 32, 18, 8, 2];
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

// Accurate Periodic Valencies
export const getElementValencies = (element: ElementData): string => {
  const KNOWN: Record<number, string> = {
    1: "I",
    2: "0",
    3: "I",
    4: "II",
    5: "III",
    6: "II, IV",
    7: "I, II, III, IV, V",
    8: "II",
    9: "I",
    10: "0",
    11: "I",
    12: "II",
    13: "III",
    14: "IV",
    15: "III, V", // P
    16: "II, IV, VI", // S
    17: "I, III, V, VII", // Cl
    18: "0",
    19: "I",
    20: "II",
    21: "III",
    22: "II, III, IV",
    23: "II, III, IV, V",
    24: "II, III, VI",
    25: "II, III, IV, VI, VII",
    26: "II, III", // Fe
    27: "II, III",
    28: "II, III",
    29: "I, II", // Cu
    30: "II",
    31: "III",
    32: "II, IV",
    33: "III, V",
    34: "II, IV, VI",
    35: "I, III, V, VII",
    36: "0, II",
    47: "I",
    50: "II, IV",
    53: "I, III, V, VII",
    56: "II",
    79: "I, III",
    80: "I, II",
    82: "II, IV",
    83: "III, V",
    92: "III, IV, V, VI",
    118: "0, II, IV",
    119: "I",
    120: "II"
  };

  if (KNOWN[element.number]) return KNOWN[element.number];
  if (element.group === 1) return "I";
  if (element.group === 2) return "II";
  if (element.group === 13) return "III";
  if (element.group === 14) return "II, IV";
  if (element.group === 15) return "III, V";
  if (element.group === 16) return "II, IV, VI";
  if (element.group === 17) return "I, III, V, VII";
  if (element.group === 18) return "0";
  return "II, III";
};

// Accurate Common Oxidation States
export const getOxidationStates = (num: number): number[] => {
  const OX: Record<number, number[]> = {
    1: [-1, 1],
    2: [0],
    3: [1],
    4: [2],
    5: [3],
    6: [-4, -2, 2, 4],
    7: [-3, -2, -1, 1, 2, 3, 4, 5],
    8: [-2, -1, 2],
    9: [-1],
    10: [0],
    11: [1],
    12: [2],
    13: [3],
    14: [-4, 2, 4],
    15: [-3, 1, 3, 5], // P
    16: [-2, 2, 4, 6], // S
    17: [-1, 1, 3, 5, 7], // Cl
    18: [0],
    19: [1],
    20: [2],
    24: [2, 3, 6],
    25: [2, 3, 4, 6, 7],
    26: [2, 3, 6],
    29: [1, 2],
    30: [2],
    35: [-1, 1, 3, 5],
    47: [1],
    53: [-1, 1, 3, 5, 7],
    79: [1, 3],
    80: [1, 2],
    82: [2, 4]
  };
  return OX[num] || [2];
};

// Pauling Electronegativity Map
export const getElectronegativity = (num: number): number | null => {
  const EN: Record<number, number> = {
    1: 2.20, 2: 0, 3: 0.98, 4: 1.57, 5: 2.04, 6: 2.55, 7: 3.04, 8: 3.44, 9: 3.98, 10: 0,
    11: 0.93, 12: 1.31, 13: 1.61, 14: 1.90, 15: 2.19, 16: 2.58, 17: 3.16, 18: 0,
    19: 0.82, 20: 1.00, 21: 1.36, 22: 1.54, 23: 1.63, 24: 1.66, 25: 1.55, 26: 1.83,
    27: 1.88, 28: 1.91, 29: 1.90, 30: 1.65, 31: 1.81, 32: 2.01, 33: 2.18, 34: 2.55,
    35: 2.96, 36: 3.00, 47: 1.93, 53: 2.66, 79: 2.54, 80: 2.00, 82: 2.33, 92: 1.38
  };
  return EN[num] !== undefined ? EN[num] : null;
};

// Group Family Name
export const getGroupFamily = (group: number, language: Language): string => {
  if (group === 1) return language === "ru" ? "Щелочные металлы" : language === "kk" ? "Сілтілік металдар" : "Alkali Metals";
  if (group === 2) return language === "ru" ? "Щелочноземельные" : language === "kk" ? "Сілтілік-жер металдары" : "Alkaline Earth";
  if (group === 15) return language === "ru" ? "Пниктогены (гр. Азота)" : language === "kk" ? "Пниктогендер" : "Pnictogens (N Group)";
  if (group === 16) return language === "ru" ? "Халькогены (гр. Кислорода)" : language === "kk" ? "Халькогендер" : "Chalcogens (O Group)";
  if (group === 17) return language === "ru" ? "Галогены" : language === "kk" ? "Галогендер" : "Halogens";
  if (group === 18) return language === "ru" ? "Благородные газы" : language === "kk" ? "Асыл газдар" : "Noble Gases";
  if (group >= 3 && group <= 12) return language === "ru" ? "Переходный металл" : language === "kk" ? "Ауыспалы металл" : "Transition Metal";
  return language === "ru" ? "Главная подгруппа" : "Main Group";
};

// Quantum orbital capacities generator
const ORBITAL_SEQUENCE = [
  { name: "1s", cap: 2, n: 1 },
  { name: "2s", cap: 2, n: 2 },
  { name: "2p", cap: 6, n: 2 },
  { name: "3s", cap: 2, n: 3 },
  { name: "3p", cap: 6, n: 3 },
  { name: "4s", cap: 2, n: 4 },
  { name: "3d", cap: 10, n: 3 },
  { name: "4p", cap: 6, n: 4 },
  { name: "5s", cap: 2, n: 5 },
  { name: "4d", cap: 10, n: 4 },
  { name: "5p", cap: 6, n: 5 },
  { name: "6s", cap: 2, n: 6 },
  { name: "4f", cap: 14, n: 4 },
  { name: "5d", cap: 10, n: 5 },
  { name: "6p", cap: 6, n: 6 },
  { name: "7s", cap: 2, n: 7 },
  { name: "5f", cap: 14, n: 5 },
  { name: "6d", cap: 10, n: 6 },
  { name: "7p", cap: 6, n: 7 },
  { name: "8s", cap: 2, n: 8 },
  { name: "5g", cap: 18, n: 5 }
];

export const getQuantumBoxes = (num: number) => {
  let remaining = num;
  const list = [];
  for (const orb of ORBITAL_SEQUENCE) {
    if (remaining <= 0) break;
    const count = Math.min(remaining, orb.cap);
    list.push({ ...orb, count });
    remaining -= count;
  }
  return list;
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

  const [viewMode, setViewMode] = useState<"3d" | "bohr" | "quantum">("3d");
  const [activeHoverShell, setActiveHoverShell] = useState<number | null>(null);

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
  const formattedValency = getElementValencies(element);
  const oxidationStates = getOxidationStates(element.number);
  const electronegativity = getElectronegativity(element.number);
  const groupFamily = getGroupFamily(element.group, language);
  const quantumBoxes = getQuantumBoxes(element.number);

  // Helper: get color for an electron on shell ringIdx
  const getElectronColor = (ringIdx: number, isValence: boolean) => {
    // If it's the outermost valence shell, it matches the purple valence indicator on the card!
    if (isValence) {
      return {
        bg: "#a855f7", // Vibrant Purple
        glow: "#a855f7",
        border: "#ffffff"
      };
    }
    // Specific quantum shell color palette:
    const palette = SHELL_PALETTE[ringIdx % SHELL_PALETTE.length];
    return {
      bg: palette.color,
      glow: palette.shadow,
      border: "#ffffff"
    };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl transition-all max-h-[94vh] flex flex-col"
      >
        {/* Top Header Bar */}
        <div 
          className="p-4 sm:p-5 flex items-start justify-between border-b border-slate-200/80 dark:border-white/[0.08] bg-slate-50/90 dark:bg-slate-950/70"
        >
          <div className="flex items-center gap-3.5 sm:gap-4">
            {/* Symbol Box with element's authentic CPK color */}
            <div 
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex flex-col items-center justify-center font-mono border-2 bg-slate-900 text-white shadow-xl relative overflow-hidden shrink-0"
              style={{
                borderColor: `${element.color}80`,
                boxShadow: `0 0 25px ${element.color}40`
              }}
            >
              <div 
                className="absolute top-1 left-2 right-2 h-1 rounded-full" 
                style={{ backgroundColor: element.color }} 
              />
              <span className="text-[10px] font-mono text-slate-400 font-medium">
                {element.number}
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white" style={{ textShadow: `0 0 12px ${element.color}` }}>
                {element.symbol}
              </span>
              <span className="text-[9px] text-slate-400 font-mono">
                {element.atomicMass}
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {element.name[language]}
                </h2>
                <span 
                  className="text-xs px-2.5 py-0.5 rounded-full font-bold border uppercase tracking-wider font-mono shadow-sm"
                  style={{ 
                    backgroundColor: `${element.color}15`, 
                    borderColor: `${element.color}50`,
                    color: element.color 
                  }}
                >
                  {t(element.category)}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-medium">
                  {groupFamily}
                </span>
                {element.isFutureElement && (
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full font-bold bg-purple-500/15 text-purple-600 dark:text-purple-300 border border-purple-500/30 flex items-center gap-1 font-mono">
                    🔮 {element.number === 126 ? t("islandBadge") : t("futureBadge")}
                  </span>
                )}
                {element.number >= 113 && element.number <= 118 && (
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full font-bold bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1 font-mono">
                    ✨ {t("centuryBadge")}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-mono flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{element.electronConfig}</span>
                <span>•</span>
                <span className="capitalize">{t(element.phase)}</span>
                <span>•</span>
                <span>{language === 'ru' ? `Валентность: ${formattedValency}` : `Valency: ${formattedValency}`}</span>
                {electronegativity !== null && (
                  <>
                    <span>•</span>
                    <span className="text-slate-500 dark:text-slate-400">ЭО: <strong>{electronegativity}</strong></span>
                  </>
                )}
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
        <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1">
          {/* Main Visual Atom Showcase & Subatomic Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            {/* Left Column: Interactive Atom Visualizer */}
            <div className="lg:col-span-7 flex flex-col p-4 sm:p-5 rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white border border-indigo-500/30 relative min-h-[340px] overflow-hidden shadow-2xl">
              
              {/* Top View Mode Switcher */}
              <div className="flex items-center justify-between z-20 pb-2 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 font-bold flex items-center gap-1.5">
                  <Atom className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Визуализация атома</span>
                </span>

                <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-xl border border-white/10 text-[10px] font-mono">
                  <button
                    onClick={() => {
                      soundEffects.playAtomAdd();
                      setViewMode("3d");
                    }}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                      viewMode === "3d"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    🪐 3D Квантовый
                  </button>

                  <button
                    onClick={() => {
                      soundEffects.playAtomAdd();
                      setViewMode("bohr");
                    }}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                      viewMode === "bohr"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    🎯 Оболочки Бора
                  </button>

                  <button
                    onClick={() => {
                      soundEffects.playAtomAdd();
                      setViewMode("quantum");
                    }}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                      viewMode === "quantum"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    📶 Квантовые ячейки
                  </button>
                </div>
              </div>

              {/* View Mode 1: 3D-like Tilted Planetary Model */}
              {viewMode === "3d" && (
                <div className="relative flex-1 flex items-center justify-center min-h-[250px] my-2 select-none">
                  {/* Subtle Background Nebula Aura */}
                  <div 
                    className="absolute w-56 h-56 rounded-full blur-3xl opacity-25 pointer-events-none"
                    style={{ backgroundColor: element.color }}
                  />

                  {/* 3D Tilted Orbits */}
                  {shells.map((count, ringIdx) => {
                    const size = 80 + ringIdx * 32;
                    const isValence = ringIdx === shells.length - 1;
                    const tiltAngle = (ringIdx * 35) % 180;
                    const isHovered = activeHoverShell === ringIdx;
                    const shellInfo = SHELL_PALETTE[ringIdx % SHELL_PALETTE.length];
                    const ringColor = isValence ? "#a855f7" : shellInfo.color;

                    return (
                      <div
                        key={`orbit-3d-${ringIdx}`}
                        className="absolute rounded-full pointer-events-none flex items-center justify-center animate-orbital"
                        style={{
                          width: `${size}px`,
                          height: `${size * 0.55}px`,
                          transform: `rotate(${tiltAngle}deg)`,
                          border: isValence 
                            ? `2px dashed #a855f7` 
                            : isHovered
                              ? `2.5px solid ${shellInfo.color}`
                              : `1.5px solid ${shellInfo.color}40`,
                          boxShadow: isValence 
                            ? `0 0 18px rgba(168, 85, 247, 0.4)` 
                            : isHovered
                              ? `0 0 15px ${shellInfo.color}60`
                              : `none`,
                          animationDuration: `${7 + ringIdx * 3}s`,
                          animationDirection: ringIdx % 2 === 0 ? "normal" : "reverse"
                        }}
                      >
                        {/* Orbiting glowing electron spheres with shell-specific coloring! */}
                        {Array.from({ length: Math.min(count, 12) }).map((_, eIdx) => {
                          const angle = (360 / Math.min(count, 12)) * eIdx;
                          const elColor = getElectronColor(ringIdx, isValence);

                          return (
                            <div
                              key={`el-3d-${ringIdx}-${eIdx}`}
                              className="absolute flex items-center justify-center"
                              style={{
                                top: "50%",
                                left: "50%",
                                transform: `rotate(${angle}deg) translate(${size / 2}px) rotate(-${angle}deg)`
                              }}
                            >
                              <div 
                                className="w-3.5 h-3.5 rounded-full shadow-lg transition-transform hover:scale-150 cursor-pointer"
                                style={{
                                  backgroundColor: elColor.bg,
                                  boxShadow: `0 0 12px ${elColor.glow}, inset 0 0 3px #ffffff`,
                                  border: `1.5px solid ${elColor.border}`
                                }}
                                title={`${isValence ? "Валентный " : ""}Электрон e⁻ (${SHELL_NAMES[ringIdx]}-оболочка)`}
                              />
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}

                  {/* Central Nucleus with Red Protons and Green Neutrons Clustered! */}
                  <div 
                    className="relative z-10 w-18 h-18 rounded-full flex flex-col items-center justify-center text-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer group p-1"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, #1e1b4b 0%, #0f172a 80%)`,
                      boxShadow: `0 0 35px ${element.color}60, inset 0 0 15px rgba(255,255,255,0.2)`,
                      border: `2px solid ${element.color}90`
                    }}
                    title={`Ядро атома: ${protons} протонов (+, красные), ${neutrons} нейтронов (0, зеленые). Заряд ядра: +${protons}`}
                  >
                    {/* Tiny Protons and Neutrons clustered around the symbol! */}
                    <div className="flex items-center gap-1 leading-none mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_6px_#f43f5e]" title="Протон p⁺" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" title="Нейтрон n⁰" />
                    </div>

                    <span className="text-base font-black text-white font-mono leading-none drop-shadow">
                      {element.symbol}
                    </span>

                    <span className="text-[8px] text-cyan-300 font-mono font-bold leading-none mt-0.5">
                      +{protons}p
                    </span>
                  </div>
                </div>
              )}

              {/* View Mode 2: Classical Concentric Bohr Model with Color-Coded Shells */}
              {viewMode === "bohr" && (
                <div className="relative flex-1 flex items-center justify-center min-h-[250px] my-2 select-none">
                  {shells.map((count, ringIdx) => {
                    const size = 65 + ringIdx * 28;
                    const isValence = ringIdx === shells.length - 1;
                    const isHovered = activeHoverShell === ringIdx;
                    const shellInfo = SHELL_PALETTE[ringIdx % SHELL_PALETTE.length];
                    const ringColor = isValence ? "#a855f7" : shellInfo.color;

                    return (
                      <div
                        key={`orbit-bohr-${ringIdx}`}
                        className="absolute rounded-full flex items-center justify-center pointer-events-none animate-orbital"
                        style={{
                          width: `${size}px`,
                          height: `${size}px`,
                          border: isValence 
                            ? `2px dashed #a855f7` 
                            : isHovered
                              ? `2px solid ${shellInfo.color}`
                              : `1.5px solid ${shellInfo.color}40`,
                          boxShadow: isValence 
                            ? `0 0 15px rgba(168, 85, 247, 0.35)` 
                            : "none",
                          animationDuration: `${10 + ringIdx * 4}s`,
                          animationDirection: ringIdx % 2 === 0 ? "normal" : "reverse"
                        }}
                      >
                        {Array.from({ length: Math.min(count, 16) }).map((_, eIdx) => {
                          const angle = (360 / Math.min(count, 16)) * eIdx;
                          const elColor = getElectronColor(ringIdx, isValence);

                          return (
                            <div
                              key={`el-bohr-${ringIdx}-${eIdx}`}
                              className="absolute flex items-center justify-center"
                              style={{
                                top: "50%",
                                left: "50%",
                                transform: `rotate(${angle}deg) translate(${size / 2}px) rotate(-${angle}deg)`
                              }}
                            >
                              <div 
                                className="w-3.5 h-3.5 rounded-full shadow-md"
                                style={{
                                  backgroundColor: elColor.bg,
                                  boxShadow: `0 0 10px ${elColor.glow}`,
                                  border: `1.5px solid ${elColor.border}`
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}

                  {/* Nucleus */}
                  <div 
                    className="relative z-10 w-16 h-16 rounded-full flex flex-col items-center justify-center border-2 border-white/50 text-center shadow-xl cursor-pointer p-1"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, #1e1b4b 0%, #0f172a 85%)`,
                      boxShadow: `0 0 25px ${element.color}60`
                    }}
                  >
                    <div className="flex items-center gap-1 leading-none mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_6px_#f43f5e]" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
                    </div>
                    <span className="text-sm font-black text-white font-mono leading-none">
                      {element.symbol}
                    </span>
                    <span className="text-[8px] text-cyan-300 font-mono font-bold leading-none mt-0.5">
                      +{protons}p
                    </span>
                  </div>
                </div>
              )}

              {/* View Mode 3: Quantum Cells (s, p, d orbital boxes with Hund's rule spins) */}
              {viewMode === "quantum" && (
                <div className="flex-1 flex flex-col justify-center py-3 space-y-3 z-10 overflow-x-auto">
                  <div className="text-[11px] font-mono text-indigo-300">
                    Электронно-графическая формула по правилу Хунда и принципу Паули:
                  </div>

                  <div className="flex flex-wrap gap-2.5 items-center">
                    {quantumBoxes.map((orb, i) => {
                      const boxCount = orb.cap / 2; // 1 for s, 3 for p, 5 for d, 7 for f
                      return (
                        <div key={i} className="p-2 rounded-xl bg-black/50 border border-white/10 flex flex-col items-center gap-1">
                          <span className="text-[10px] font-mono font-bold text-slate-300">
                            {orb.name}<sup>{orb.count}</sup>
                          </span>

                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: boxCount }).map((_, bIdx) => {
                              const hasSpinUp = orb.count > bIdx;
                              const hasSpinDown = orb.count > boxCount + bIdx;

                              return (
                                <div 
                                  key={bIdx}
                                  className="w-5 h-6 rounded border border-indigo-400/40 bg-indigo-950/30 flex items-center justify-center text-[10px] font-bold text-white font-mono"
                                >
                                  {hasSpinUp && hasSpinDown && <span className="text-cyan-300">⇅</span>}
                                  {hasSpinUp && !hasSpinDown && <span className="text-amber-300">↑</span>}
                                  {!hasSpinUp && <span className="text-slate-600">·</span>}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-[10px] font-mono text-slate-400 bg-black/40 p-2 rounded-xl border border-white/5">
                    <strong>Внешний слой ({valenceElectrons} e⁻):</strong> {element.electronConfig}
                  </div>
                </div>
              )}

              {/* Bottom Shells Bar: Color-coded to match each orbit's circles! */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-1.5 flex-wrap z-10 text-[11px] font-mono">
                <span className="text-slate-400 uppercase text-[10px] font-bold flex items-center gap-1">
                  <span>Оболочки:</span>
                </span>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {shells.map((count, idx) => {
                    const isValence = idx === shells.length - 1;
                    const isHovered = activeHoverShell === idx;
                    const shellInfo = SHELL_PALETTE[idx % SHELL_PALETTE.length];
                    const activeColor = isValence ? "#a855f7" : shellInfo.color;

                    return (
                      <button
                        key={idx}
                        onMouseEnter={() => setActiveHoverShell(idx)}
                        onMouseLeave={() => setActiveHoverShell(null)}
                        className={`px-2 py-0.5 rounded-lg border text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          isValence
                            ? "bg-purple-600/30 border-purple-400 text-purple-200 shadow-sm"
                            : isHovered
                              ? "bg-white/20 border-white text-white"
                              : "bg-slate-900 border-white/10 text-slate-300 hover:border-white/30"
                        }`}
                        title={`${SHELL_NAMES[idx]}-оболочка: ${count} электронов`}
                      >
                        {/* Circular matching indicator dot */}
                        <span 
                          className="w-2 h-2 rounded-full shadow-sm shrink-0" 
                          style={{ backgroundColor: activeColor, boxShadow: `0 0 6px ${activeColor}` }} 
                        />
                        <span>{SHELL_NAMES[idx]}: {count}e⁻</span>
                        {isValence && <span className="text-[8px] text-purple-300 uppercase font-extrabold">(вал)</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: High-Tech Subatomic & Physical Cards with Color-Coded Circles! */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Atom className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>{language === 'ru' ? 'Состав ядра и электроны' : 'Nuclear & Atomic Structure'}</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/10 font-bold">
                  Z = {protons}
                </span>
              </div>

              {/* 6 Core Cards Grid with perfectly matched circular dots! */}
              <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                
                {/* 1. Protons (Red Circle) */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-500/10 via-slate-50 dark:via-slate-950/60 to-transparent border border-rose-500/30 dark:border-rose-500/20 flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase">Протоны (p⁺)</div>
                    <div className="text-xl font-black text-slate-900 dark:text-white mt-0.5">{protons}</div>
                    <div className="text-[9px] text-slate-500 dark:text-slate-400 mt-0.5">Заряд: +{protons}</div>
                  </div>
                  <span 
                    className="w-5 h-5 rounded-full bg-rose-500 shadow-[0_0_12px_#f43f5e] flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                    title="Протоны заряжены положительно (+1)"
                  >
                    +
                  </span>
                </div>

                {/* 2. Neutrons (Emerald/Green Circle) */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-slate-50 dark:via-slate-950/60 to-transparent border border-emerald-500/30 dark:border-emerald-500/20 flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">Нейтроны (n⁰)</div>
                    <div className="text-xl font-black text-slate-900 dark:text-white mt-0.5">{neutrons}</div>
                    <div className="text-[9px] text-slate-500 dark:text-slate-400 mt-0.5">A − Z = {neutrons}</div>
                  </div>
                  <span 
                    className="w-5 h-5 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                    title="Нейтроны нейтральны (0)"
                  >
                    0
                  </span>
                </div>

                {/* 3. Total Electrons (Cyan/Sky Blue Circle) */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-sky-500/10 via-slate-50 dark:via-slate-950/60 to-transparent border border-sky-500/30 dark:border-sky-500/20 flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase">Электроны (e⁻)</div>
                    <div className="text-xl font-black text-slate-900 dark:text-white mt-0.5">{totalElectrons}</div>
                    <div className="text-[9px] text-slate-500 dark:text-slate-400 mt-0.5">Заряд: −{totalElectrons}</div>
                  </div>
                  <span 
                    className="w-5 h-5 rounded-full bg-sky-500 shadow-[0_0_12px_#0ea5e9] flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                    title="Все электроны атома"
                  >
                    −
                  </span>
                </div>

                {/* 4. Valence Electrons (Purple Circle matching the outer orbit dots!) */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/15 via-slate-50 dark:via-slate-950/60 to-transparent border border-purple-500/30 dark:border-purple-500/20 flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase">Валентные (e⁻)</div>
                    <div className="text-xl font-black text-purple-600 dark:text-purple-400 mt-0.5">{valenceElectrons}</div>
                    <div className="text-[9px] text-slate-500 dark:text-slate-400 mt-0.5">Внешнее кольцо</div>
                  </div>
                  <span 
                    className="w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_12px_#a855f7] flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                    title="Валентные электроны внешнего уровня (фиолетовые на орбите)"
                  >
                    ⚡
                  </span>
                </div>

                {/* 5. Period & Group (Indigo Circle) */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-slate-50 dark:via-slate-950/60 to-transparent border border-indigo-500/30 dark:border-indigo-500/20 flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase">Период / Группа</div>
                    <div className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                      {element.period} / {element.group}
                    </div>
                    <div className="text-[9px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {groupFamily}
                    </div>
                  </div>
                  <span 
                    className="w-5 h-5 rounded-full bg-indigo-500 shadow-[0_0_12px_#6366f1] flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                    title="Положение в таблице"
                  >
                    #
                  </span>
                </div>

                {/* 6. Atomic Mass (Amber Circle) */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-50 dark:via-slate-950/60 to-transparent border border-amber-500/30 dark:border-amber-500/20 flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase">Атомная масса</div>
                    <div className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                      {element.atomicMass}
                    </div>
                    <div className="text-[9px] text-slate-500 dark:text-slate-400 mt-0.5">
                      г/моль (а.е.м.)
                    </div>
                  </div>
                  <span 
                    className="w-5 h-5 rounded-full bg-amber-500 shadow-[0_0_12px_#f59e0b] flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                    title="Масса атома"
                  >
                    u
                  </span>
                </div>
              </div>

              {/* Oxidation States Strip with color-coded pills */}
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-white/[0.07] space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>Степени окисления:</span>
                  <span className="text-[10px] text-slate-500">Валентность: {formattedValency}</span>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {oxidationStates.map((ox, idx) => {
                    const isPositive = ox > 0;
                    const isNegative = ox < 0;

                    let badgeStyle = "bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300";
                    let dotColor = "#94a3b8";
                    if (isNegative) {
                      badgeStyle = "bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30";
                      dotColor = "#f43f5e";
                    }
                    if (isPositive) {
                      badgeStyle = "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 font-bold";
                      dotColor = "#6366f1";
                    }

                    return (
                      <span 
                        key={idx}
                        className={`px-2.5 py-0.5 rounded-lg text-xs font-mono flex items-center gap-1 ${badgeStyle}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dotColor }} />
                        <span>{ox > 0 ? `+${ox}` : ox}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Nuclear Synthesis & Superheavy Properties Card (if available) */}
          {(element.nuclearReaction || element.discoveryLab || element.halfLife) && (
            <div className="p-5 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-500/30 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Atom className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>{t("nuclearReaction")} & Ядерные свойства</span>
                </div>
                {element.discoveryYear && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    {element.discoveryYear}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {element.nuclearReaction && (
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10">
                    <span className="text-[10px] text-slate-400 block font-mono">Ядерная реакция синтеза:</span>
                    <span className="font-mono font-bold text-cyan-300 text-xs sm:text-sm mt-0.5 block">
                      {element.nuclearReaction}
                    </span>
                  </div>
                )}

                {element.halfLife && (
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10">
                    <span className="text-[10px] text-slate-400 block font-mono">{t("halfLife")}:</span>
                    <span className="font-mono font-bold text-emerald-300 text-xs sm:text-sm mt-0.5 block">
                      {element.halfLife}
                    </span>
                  </div>
                )}

                {element.discoveryLab && (
                  <div className="sm:col-span-2 p-3 rounded-2xl bg-white/[0.05] border border-white/10">
                    <span className="text-[10px] text-slate-400 block font-mono">{t("discoveryLab")}:</span>
                    <span className="font-medium text-slate-200 text-xs mt-0.5 block">
                      {element.discoveryLab[language] || element.discoveryLab.ru}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Everyday & Real-world Uses */}
          <div className="p-4 sm:p-5 rounded-3xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-white/[0.07] space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase font-mono">
              <Layers className="w-4 h-4" />
              <span>{t("everydayUse")}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {element.everydayUse[language]}
            </p>
          </div>

          {/* Fun Fact / Scientific Did-You-Know */}
          <div className="p-4 sm:p-5 rounded-3xl bg-indigo-50/60 dark:bg-indigo-500/[0.05] border border-indigo-200 dark:border-indigo-500/20 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase font-mono">
              <Sparkles className="w-4 h-4" />
              <span>{t("funFact")}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
              &ldquo;{element.funFact[language]}&rdquo;
            </p>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 bg-slate-50/90 dark:bg-slate-950/90 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
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
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all active:scale-95 cursor-pointer shadow-lg shadow-indigo-500/25"
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
