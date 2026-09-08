"use client";

import React, { useEffect } from "react";
import { MoleculeData, Language } from "@/types/chemistry";
import { getTranslation } from "@/data/i18n";
import { soundEffects } from "@/lib/soundEffects";
import { ELEMENTS_BY_SYMBOL } from "@/data/elements";
import confetti from "canvas-confetti";
import { 
  Sparkles, 
  X, 
  CheckCircle2, 
  ShieldAlert, 
  ShieldCheck, 
  Heart, 
  Flame, 
  Layers,
  Atom,
  BookOpen
} from "lucide-react";

interface DiscoveryModalProps {
  molecule: MoleculeData | null;
  onClose: () => void;
  language: Language;
  onGoToJournal: () => void;
}

export const DiscoveryModal: React.FC<DiscoveryModalProps> = ({
  molecule,
  onClose,
  language,
  onGoToJournal
}) => {
  useEffect(() => {
    if (molecule) {
      soundEffects.playDiscovery();
      // Subtle festive confetti burst
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#06b6d4', '#10b981', '#f59e0b']
      });
    }
  }, [molecule]);

  if (!molecule) return null;
  const t = (k: string) => getTranslation(language, k);

  const getHazardBadge = () => {
    switch (molecule.hazard) {
      case "vital":
        return {
          icon: <Heart className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />,
          text: t("hazard_vital"),
          bg: "bg-cyan-500/10 border-cyan-500/25 text-cyan-700 dark:text-cyan-300"
        };
      case "safe":
        return {
          icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />,
          text: t("hazard_safe"),
          bg: "bg-emerald-500/10 border-emerald-500/25 text-emerald-700 dark:text-emerald-300"
        };
      case "caution":
        return {
          icon: <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />,
          text: t("hazard_caution"),
          bg: "bg-amber-500/10 border-amber-500/25 text-amber-700 dark:text-amber-300"
        };
      case "danger":
        return {
          icon: <Flame className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />,
          text: t("hazard_danger"),
          bg: "bg-rose-500/10 border-rose-500/25 text-rose-700 dark:text-rose-300"
        };
    }
  };

  const hazardInfo = getHazardBadge();

  // Localized Labels
  const labels = {
    geometryTitle: {
      ru: "Пространственное строение молекулы",
      kk: "Молекуланың кеңістіктік құрылымы",
      en: "Molecular Geometry & Bonds"
    },
    structureNames: {
      linear: { ru: "Линейная", kk: "Сызықтық", en: "Linear" },
      bent: { ru: "Угловая (104.5°)", kk: "Бұрыштық (104.5°)", en: "Bent (104.5°)" },
      tetrahedral: { ru: "Тетраэдрическая", kk: "Тетраэдрлік", en: "Tetrahedral" },
      trigonal: { ru: "Тригонально-пирамидальная", kk: "Тригональді пирамидалық", en: "Trigonal Pyramidal" },
      lattice: { ru: "Ионная кристаллическая решётка", kk: "Иондық кристалдық тор", en: "Ionic Lattice" },
      planar: { ru: "Плоская тригональная", kk: "Жазық тригональді", en: "Planar Trigonal" },
      ring: { ru: "Циклическая кольцевая", kk: "Сақиналы циклдік", en: "Ring Structure" }
    } as Record<string, Record<Language, string>>,
    scientificExplanation: {
      ru: "Научное описание и свойства",
      kk: "Ғылыми сипаттамасы мен қасиеттері",
      en: "Scientific Explanation"
    },
    viewInJournal: {
      ru: "Открыть в Журнале открытий 📖",
      kk: "Жаңалықтар журналынан қарау 📖",
      en: "View in Journal 📖"
    },
    keepExperimenting: {
      ru: "Продолжить опыты ⚡",
      kk: "Тәжірибені жалғастыру ⚡",
      en: "Keep Experimenting ⚡"
    }
  };

  const structureTypeName = labels.structureNames[molecule.structureType || 'linear']?.[language] || molecule.structureType || "Линейная";

  // Comprehensive 2D/3D Chemical Bonding Diagram Renderer
  const renderStructureDiagram = () => {
    // 1. HCl (Hydrochloric acid)
    if (molecule.id === "hydrochloric-acid" || molecule.formula === "HCl") {
      return (
        <svg viewBox="0 0 240 130" className="w-56 h-28 mx-auto animate-fadeIn">
          {/* Covalent Polar Single Bond */}
          <line x1="75" y1="65" x2="165" y2="65" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" />
          {/* Delta+ / Delta- labels */}
          <text x="75" y="32" fill="#06b6d4" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">δ⁺</text>
          <text x="165" y="32" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">δ⁻</text>
          {/* H atom */}
          <circle cx="75" cy="65" r="18" fill="#1e293b" stroke="#06b6d4" strokeWidth="2.5" />
          <text x="75" y="70" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
          {/* Cl atom */}
          <circle cx="165" cy="65" r="24" fill="#1e293b" stroke="#10b981" strokeWidth="2.5" />
          <text x="165" y="71" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Cl</text>
          {/* Cl electron lone pairs */}
          <circle cx="196" cy="65" r="2" fill="#10b981" />
          <circle cx="196" cy="58" r="2" fill="#10b981" />
          <circle cx="165" cy="34" r="2" fill="#10b981" />
          <circle cx="172" cy="34" r="2" fill="#10b981" />
          <circle cx="165" cy="96" r="2" fill="#10b981" />
          <circle cx="172" cy="96" r="2" fill="#10b981" />
          <text x="120" y="108" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">Ковалентная полярная связь (H—Cl)</text>
        </svg>
      );
    }

    // 2. H2O (Water)
    if (molecule.id === "water" || molecule.formula === "H₂O") {
      return (
        <svg viewBox="0 0 240 140" className="w-56 h-32 mx-auto animate-fadeIn">
          {/* Bonds */}
          <line x1="120" y1="45" x2="70" y2="105" stroke="#6366f1" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="120" y1="45" x2="170" y2="105" stroke="#6366f1" strokeWidth="3.5" strokeLinecap="round" />
          {/* Angle indicator */}
          <path d="M 100 75 A 25 25 0 0 0 140 75" fill="none" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x="120" y="90" fill="#6366f1" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">104.5°</text>
          {/* Oxygen Atom */}
          <circle cx="120" cy="45" r="22" fill="#1e293b" stroke="#ef4444" strokeWidth="3" />
          <text x="120" y="51" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">O</text>
          {/* Oxygen Lone Pairs */}
          <circle cx="105" cy="22" r="2" fill="#ef4444" />
          <circle cx="111" cy="18" r="2" fill="#ef4444" />
          <circle cx="135" cy="22" r="2" fill="#ef4444" />
          <circle cx="129" cy="18" r="2" fill="#ef4444" />
          {/* Hydrogen 1 */}
          <circle cx="70" cy="105" r="16" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
          <text x="70" y="110" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
          {/* Hydrogen 2 */}
          <circle cx="170" cy="105" r="16" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
          <text x="170" y="110" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
        </svg>
      );
    }

    // 3. NaCl (Table Salt)
    if (molecule.id === "table-salt" || molecule.formula === "NaCl") {
      return (
        <svg viewBox="0 0 240 130" className="w-56 h-28 mx-auto animate-fadeIn">
          {/* Ionic field transfer arrow */}
          <line x1="80" y1="65" x2="160" y2="65" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4,4" />
          <text x="120" y="55" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">e⁻ ➔</text>
          {/* Na+ */}
          <circle cx="80" cy="65" r="20" fill="#1e293b" stroke="#f59e0b" strokeWidth="2.5" />
          <text x="80" y="70" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Na⁺</text>
          {/* Cl- */}
          <circle cx="160" cy="65" r="26" fill="#1e293b" stroke="#10b981" strokeWidth="2.5" />
          <text x="160" y="71" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Cl⁻</text>
          <text x="120" y="110" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">Ионная кристаллическая связь</text>
        </svg>
      );
    }

    // 4. CO2 (Carbon Dioxide)
    if (molecule.id === "carbon-dioxide" || molecule.formula === "CO₂") {
      return (
        <svg viewBox="0 0 240 130" className="w-56 h-28 mx-auto animate-fadeIn">
          {/* Double bond 1 */}
          <line x1="65" y1="61" x2="115" y2="61" stroke="#6366f1" strokeWidth="2.5" />
          <line x1="65" y1="69" x2="115" y2="69" stroke="#6366f1" strokeWidth="2.5" />
          {/* Double bond 2 */}
          <line x1="125" y1="61" x2="175" y2="61" stroke="#6366f1" strokeWidth="2.5" />
          <line x1="125" y1="69" x2="175" y2="69" stroke="#6366f1" strokeWidth="2.5" />
          {/* Oxygen 1 */}
          <circle cx="55" cy="65" r="18" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
          <text x="55" y="70" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">O</text>
          {/* Carbon */}
          <circle cx="120" cy="65" r="20" fill="#1e293b" stroke="#94a3b8" strokeWidth="2.5" />
          <text x="120" y="70" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C</text>
          {/* Oxygen 2 */}
          <circle cx="185" cy="65" r="18" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
          <text x="185" y="70" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">O</text>
          <text x="120" y="110" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">O = C = O (180° Линейная)</text>
        </svg>
      );
    }

    // 5. CH4 (Methane)
    if (molecule.id === "methane" || molecule.formula === "CH₄") {
      return (
        <svg viewBox="0 0 240 140" className="w-56 h-32 mx-auto animate-fadeIn">
          <line x1="120" y1="70" x2="120" y2="25" stroke="#f59e0b" strokeWidth="2.5" />
          <line x1="120" y1="70" x2="70" y2="95" stroke="#f59e0b" strokeWidth="2.5" />
          <line x1="120" y1="70" x2="170" y2="95" stroke="#f59e0b" strokeWidth="2.5" />
          <line x1="120" y1="70" x2="120" y2="120" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,3" />
          {/* Central C */}
          <circle cx="120" cy="70" r="20" fill="#1e293b" stroke="#f59e0b" strokeWidth="2.5" />
          <text x="120" y="75" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C</text>
          {/* 4 Hydrogens */}
          <circle cx="120" cy="25" r="13" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
          <text x="120" y="29" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
          <circle cx="70" cy="95" r="13" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
          <text x="70" y="99" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
          <circle cx="170" cy="95" r="13" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
          <text x="170" y="99" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
          <circle cx="120" cy="120" r="11" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="120" y="123" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
        </svg>
      );
    }

    // 6. NH3 (Ammonia)
    if (molecule.id === "ammonia" || molecule.formula === "NH₃") {
      return (
        <svg viewBox="0 0 240 140" className="w-56 h-32 mx-auto animate-fadeIn">
          {/* Nitrogen Lone Pair */}
          <ellipse cx="120" cy="22" rx="6" ry="4" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2,2" />
          <circle cx="118" cy="22" r="1.5" fill="#3b82f6" />
          <circle cx="122" cy="22" r="1.5" fill="#3b82f6" />
          {/* Bonds */}
          <line x1="120" y1="50" x2="65" y2="105" stroke="#3b82f6" strokeWidth="2.5" />
          <line x1="120" y1="50" x2="120" y2="115" stroke="#3b82f6" strokeWidth="2.5" />
          <line x1="120" y1="50" x2="175" y2="105" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="3,3" />
          {/* Central N */}
          <circle cx="120" cy="50" r="20" fill="#1e293b" stroke="#3b82f6" strokeWidth="2.5" />
          <text x="120" y="55" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">N</text>
          {/* 3 Hydrogens */}
          <circle cx="65" cy="105" r="14" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
          <text x="65" y="109" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
          <circle cx="120" cy="115" r="14" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
          <text x="120" y="119" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
          <circle cx="175" cy="105" r="14" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
          <text x="175" y="109" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
        </svg>
      );
    }

    // 7. H2SO4 (Sulfuric Acid)
    if (molecule.id === "sulfuric-acid" || molecule.formula === "H₂SO₄") {
      return (
        <svg viewBox="0 0 240 140" className="w-56 h-32 mx-auto animate-fadeIn">
          {/* S=O top & bottom double bonds */}
          <line x1="117" y1="65" x2="117" y2="28" stroke="#f59e0b" strokeWidth="2" />
          <line x1="123" y1="65" x2="123" y2="28" stroke="#f59e0b" strokeWidth="2" />
          <line x1="117" y1="75" x2="117" y2="112" stroke="#f59e0b" strokeWidth="2" />
          <line x1="123" y1="75" x2="123" y2="112" stroke="#f59e0b" strokeWidth="2" />
          {/* S-OH left & right bonds */}
          <line x1="110" y1="70" x2="65" y2="70" stroke="#f59e0b" strokeWidth="2.5" />
          <line x1="130" y1="70" x2="175" y2="70" stroke="#f59e0b" strokeWidth="2.5" />
          {/* Central S */}
          <circle cx="120" cy="70" r="18" fill="#1e293b" stroke="#eab308" strokeWidth="2.5" />
          <text x="120" y="75" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">S</text>
          {/* Oxygen top & bottom */}
          <circle cx="120" cy="22" r="13" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
          <text x="120" y="26" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">O</text>
          <circle cx="120" cy="118" r="13" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
          <text x="120" y="122" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">O</text>
          {/* Left OH group */}
          <circle cx="65" cy="70" r="13" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
          <text x="65" y="74" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">OH</text>
          {/* Right OH group */}
          <circle cx="175" cy="70" r="13" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
          <text x="175" y="74" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">OH</text>
        </svg>
      );
    }

    // 8. O2 (Oxygen Gas) / N2 / H2 Diatomic
    if (molecule.formula === "O₂" || molecule.formula === "N₂" || molecule.formula === "H₂") {
      const isO2 = molecule.formula === "O₂";
      const isN2 = molecule.formula === "N₂";
      const sym = isO2 ? "O" : isN2 ? "N" : "H";
      const color = isO2 ? "#ef4444" : isN2 ? "#3b82f6" : "#06b6d4";

      return (
        <svg viewBox="0 0 240 130" className="w-56 h-28 mx-auto animate-fadeIn">
          {/* Multi-bonds */}
          {isN2 ? (
            <>
              <line x1="85" y1="60" x2="155" y2="60" stroke="#3b82f6" strokeWidth="2" />
              <line x1="85" y1="65" x2="155" y2="65" stroke="#3b82f6" strokeWidth="2" />
              <line x1="85" y1="70" x2="155" y2="70" stroke="#3b82f6" strokeWidth="2" />
            </>
          ) : isO2 ? (
            <>
              <line x1="85" y1="61" x2="155" y2="61" stroke="#ef4444" strokeWidth="2.5" />
              <line x1="85" y1="69" x2="155" y2="69" stroke="#ef4444" strokeWidth="2.5" />
            </>
          ) : (
            <line x1="85" y1="65" x2="155" y2="65" stroke="#06b6d4" strokeWidth="3" />
          )}
          {/* Atom 1 */}
          <circle cx="80" cy="65" r="22" fill="#1e293b" stroke={color} strokeWidth="2.5" />
          <text x="80" y="71" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">{sym}</text>
          {/* Atom 2 */}
          <circle cx="160" cy="65" r="22" fill="#1e293b" stroke={color} strokeWidth="2.5" />
          <text x="160" y="71" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">{sym}</text>
          <text x="120" y="110" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">
            {isN2 ? "Тройная ковалентная связь (N≡N)" : isO2 ? "Двойная ковалентная связь (O=O)" : "Одинарная ковалентная связь (H-H)"}
          </text>
        </svg>
      );
    }

    // Dynamic Generic Molecular Cluster with Bond Arcs
    const atomKeys = Object.keys(molecule.atoms);
    return (
      <div className="py-3 flex flex-col items-center justify-center space-y-3">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {atomKeys.map(sym => {
            const count = molecule.atoms[sym];
            const el = ELEMENTS_BY_SYMBOL.get(sym);
            const color = el?.color || "#6366f1";

            return (
              <div 
                key={sym} 
                className="flex items-center gap-2 p-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.1] shadow-sm"
              >
                <div 
                  className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white font-mono text-sm shadow-md"
                  style={{ backgroundColor: color }}
                >
                  {sym}
                </div>
                <div className="text-left font-mono">
                  <span className="text-[10px] text-slate-400 block font-normal">{el?.name[language] || sym}</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">× {count} {count === 1 ? 'атом' : 'атома'}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20">
          <Atom className="w-3.5 h-3.5" />
          <span>Стехиометрический кластер: {molecule.formula}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.1] rounded-3xl overflow-hidden shadow-2xl transition-all font-sans"
      >
        {/* Header */}
        <div 
          className="p-6 text-center relative border-b border-slate-200/80 dark:border-white/[0.07] bg-slate-50/80 dark:bg-slate-900/90"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-white/[0.08] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("discoveryTitle")}</span>
          </div>

          <div 
            className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-slate-900 dark:text-white my-1"
          >
            {molecule.formula}
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            {molecule.name[language]}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
            {molecule.scientificName[language]}
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          {/* Structure Diagram & Hazard Badge */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/[0.06] relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                {labels.geometryTitle[language]} ({structureTypeName})
              </span>
              <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-medium ${hazardInfo.bg}`}>
                {hazardInfo.icon}
                <span>{hazardInfo.text}</span>
              </div>
            </div>
            {renderStructureDiagram()}
          </div>

          {/* Description */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/[0.06] space-y-1">
            <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>{labels.scientificExplanation[language]}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {molecule.description[language]}
            </p>
          </div>

          {/* Everyday & Real World Utility */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/[0.06] space-y-1">
            <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t("everydayUse")}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {molecule.realWorldUse[language]}
            </p>
          </div>

          {/* Fun Fact */}
          <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-500/[0.04] border border-indigo-200 dark:border-indigo-500/20 space-y-1">
            <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("funFact")}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
              &ldquo;{molecule.funFact[language]}&rdquo;
            </p>
          </div>
        </div>

        {/* Modal Bottom Buttons */}
        <div className="p-4 bg-slate-50/90 dark:bg-slate-950/80 border-t border-slate-200/80 dark:border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onGoToJournal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.08] transition-all font-mono cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{labels.viewInJournal[language]}</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all font-mono active:scale-95 cursor-pointer shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{labels.keepExperimenting[language]}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
