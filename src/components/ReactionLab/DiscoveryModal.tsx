"use client";

import React, { useEffect } from "react";
import { MoleculeData, Language } from "@/types/chemistry";
import { getTranslation } from "@/data/i18n";
import { soundEffects } from "@/lib/soundEffects";
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
  Share2 
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
      // Trigger festive confetti burst
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00d2ff', '#edb1ff', '#10b981', '#f59e0b']
      });
    }
  }, [molecule]);

  if (!molecule) return null;
  const t = (k: string) => getTranslation(language, k);

  const getHazardBadge = () => {
    switch (molecule.hazard) {
      case "vital":
        return {
          icon: <Heart className="w-3.5 h-3.5 text-cyan-400" />,
          text: t("hazard_vital"),
          bg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
        };
      case "safe":
        return {
          icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
          text: t("hazard_safe"),
          bg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
        };
      case "caution":
        return {
          icon: <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />,
          text: t("hazard_caution"),
          bg: "bg-amber-500/10 border-amber-500/30 text-amber-400"
        };
      case "danger":
        return {
          icon: <Flame className="w-3.5 h-3.5 text-rose-400" />,
          text: t("hazard_danger"),
          bg: "bg-rose-500/10 border-rose-500/30 text-rose-400"
        };
    }
  };

  const hazardInfo = getHazardBadge();

  // Render 2D schematic diagram of molecule
  const renderStructureDiagram = () => {
    if (molecule.id === "water") {
      // H2O: Bent 104.5 deg angle
      return (
        <svg viewBox="0 0 200 160" className="w-48 h-36 mx-auto">
          {/* Bonds */}
          <line x1="100" y1="60" x2="60" y2="120" stroke="#00d2ff" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
          <line x1="100" y1="60" x2="140" y2="120" stroke="#00d2ff" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
          {/* Angle indicator */}
          <path d="M 85 85 A 30 30 0 0 0 115 85" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x="100" y="98" fill="#a5e7ff" fontSize="9" textAnchor="middle" fontFamily="monospace">104.5°</text>
          {/* Oxygen Atom */}
          <circle cx="100" cy="60" r="24" fill="#0284c7" stroke="#38bdf8" strokeWidth="2.5" />
          <text x="100" y="66" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="monospace">O</text>
          {/* Hydrogen 1 */}
          <circle cx="60" cy="120" r="16" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
          <text x="60" y="125" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
          {/* Hydrogen 2 */}
          <circle cx="140" cy="120" r="16" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
          <text x="140" y="125" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
        </svg>
      );
    }

    if (molecule.id === "table-salt") {
      // NaCl ionic pair
      return (
        <svg viewBox="0 0 200 140" className="w-48 h-36 mx-auto">
          <line x1="70" y1="70" x2="130" y2="70" stroke="#fbbf24" strokeWidth="3" strokeDasharray="4,4" className="animate-pulse" />
          {/* Na+ */}
          <circle cx="70" cy="70" r="22" fill="#ef4444" stroke="#fca5a5" strokeWidth="2.5" />
          <text x="70" y="75" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Na⁺</text>
          {/* Cl- */}
          <circle cx="130" cy="70" r="28" fill="#10b981" stroke="#6ee7b7" strokeWidth="2.5" />
          <text x="130" y="76" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Cl⁻</text>
        </svg>
      );
    }

    if (molecule.id === "carbon-dioxide") {
      // CO2: O = C = O
      return (
        <svg viewBox="0 0 220 140" className="w-48 h-36 mx-auto">
          {/* Double bond 1 */}
          <line x1="55" y1="66" x2="110" y2="66" stroke="#00d2ff" strokeWidth="3" />
          <line x1="55" y1="74" x2="110" y2="74" stroke="#00d2ff" strokeWidth="3" />
          {/* Double bond 2 */}
          <line x1="110" y1="66" x2="165" y2="66" stroke="#00d2ff" strokeWidth="3" />
          <line x1="110" y1="74" x2="165" y2="74" stroke="#00d2ff" strokeWidth="3" />
          {/* Oxygen 1 */}
          <circle cx="50" cy="70" r="20" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <text x="50" y="76" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">O</text>
          {/* Carbon */}
          <circle cx="110" cy="70" r="22" fill="#334155" stroke="#94a3b8" strokeWidth="2.5" />
          <text x="110" y="76" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C</text>
          {/* Oxygen 2 */}
          <circle cx="170" cy="70" r="20" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <text x="170" y="76" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">O</text>
        </svg>
      );
    }

    if (molecule.id === "methane") {
      // CH4: C center with 4 H
      return (
        <svg viewBox="0 0 200 160" className="w-48 h-36 mx-auto">
          <line x1="100" y1="80" x2="100" y2="30" stroke="#f97316" strokeWidth="3" />
          <line x1="100" y1="80" x2="50" y2="110" stroke="#f97316" strokeWidth="3" />
          <line x1="100" y1="80" x2="150" y2="110" stroke="#f97316" strokeWidth="3" />
          <line x1="100" y1="80" x2="100" y2="135" stroke="#f97316" strokeWidth="3" strokeDasharray="3,3" />
          {/* Central C */}
          <circle cx="100" cy="80" r="22" fill="#334155" stroke="#f97316" strokeWidth="2.5" />
          <text x="100" y="86" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C</text>
          {/* 4 Hydrogens */}
          <circle cx="100" cy="30" r="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="100" y="34" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
          <circle cx="50" cy="110" r="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="50" y="114" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
          <circle cx="150" cy="110" r="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="150" y="114" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
          <circle cx="100" cy="135" r="12" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="100" y="139" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">H</text>
        </svg>
      );
    }

    // Generic Molecular Cluster
    const atomKeys = Object.keys(molecule.atoms);
    return (
      <div className="flex items-center justify-center gap-3 py-4 flex-wrap">
        {atomKeys.map(sym => {
          const count = molecule.atoms[sym];
          return (
            <div key={sym} className="flex items-center gap-1.5 p-2 rounded-xl bg-[#181c22] border border-white/10 font-mono">
              <span className="w-8 h-8 rounded-full bg-[#00d2ff]/20 text-[#00d2ff] border border-[#00d2ff]/40 flex items-center justify-center font-bold text-sm">
                {sym}
              </span>
              <span className="text-xs text-slate-300">× {count}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#10141a] border rounded-3xl overflow-hidden shadow-2xl transition-all"
        style={{ 
          borderColor: `${molecule.glowColor}60`, 
          boxShadow: `0 0 50px ${molecule.glowColor}30` 
        }}
      >
        {/* Glow backdrop header */}
        <div 
          className="p-6 text-center relative border-b border-white/10"
          style={{ background: `linear-gradient(180deg, ${molecule.glowColor}20 0%, transparent 100%)` }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-[#00d2ff] bg-[#00d2ff]/15 border border-[#00d2ff]/40 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("discoveryTitle")}</span>
          </div>

          <div 
            className="text-5xl font-black font-mono tracking-tight text-white my-1"
            style={{ textShadow: `0 0 25px ${molecule.glowColor}` }}
          >
            {molecule.formula}
          </div>

          <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
            {molecule.name[language]}
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            {molecule.scientificName[language]}
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto">
          {/* Structure Diagram & Hazard Badge */}
          <div className="p-4 rounded-2xl bg-[#181c22] border border-white/5 relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Molecular Geometry ({molecule.structureType || "lattice"})
              </span>
              <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${hazardInfo.bg}`}>
                {hazardInfo.icon}
                <span>{hazardInfo.text}</span>
              </div>
            </div>
            {renderStructureDiagram()}
          </div>

          {/* Description */}
          <div className="p-4 rounded-2xl bg-[#181c22] border border-white/10 space-y-1">
            <div className="text-xs font-semibold text-[#00d2ff] uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Scientific Explanation</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {molecule.description[language]}
            </p>
          </div>

          {/* Everyday & Real World Utility */}
          <div className="p-4 rounded-2xl bg-[#181c22] border border-white/10 space-y-1">
            <div className="text-xs font-semibold text-[#34d399] uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t("everydayUse")}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {molecule.realWorldUse[language]}
            </p>
          </div>

          {/* Fun Fact */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#edb1ff]/10 to-transparent border border-[#edb1ff]/30 space-y-1">
            <div className="text-xs font-semibold text-[#edb1ff] uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("funFact")}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed italic">
              &ldquo;{molecule.funFact[language]}&rdquo;
            </p>
          </div>
        </div>

        {/* Modal Bottom Buttons */}
        <div className="p-5 bg-[#0b0f14] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onGoToJournal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-mono"
          >
            <span>View in Journal</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-[#00d2ff] to-[#47d6ff] hover:brightness-110 shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all font-mono active:scale-95"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{t("keepExperimenting")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
