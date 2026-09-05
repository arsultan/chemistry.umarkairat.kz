"use client";

import React from "react";
import { ElementData, Language } from "@/types/chemistry";
import { getTranslation } from "@/data/i18n";
import { soundEffects } from "@/lib/soundEffects";
import { X, Plus, Sparkles, Orbit, Layers, Flame, BookOpen } from "lucide-react";

interface ElementModalProps {
  element: ElementData | null;
  onClose: () => void;
  onAddToLab: (symbol: string) => void;
  language: Language;
  inLabCount?: number;
}

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

  // Approximate shells count for visual Bohr model (2, 8, 18, 32...)
  const getShellElectrons = (num: number): number[] => {
    const capacities = [2, 8, 18, 32, 32, 18, 8];
    const shells: number[] = [];
    let rem = num;
    for (const cap of capacities) {
      if (rem <= 0) break;
      const count = Math.min(rem, cap);
      shells.push(count);
      rem -= count;
    }
    return shells;
  };

  const shells = getShellElectrons(element.number);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#10141a] border rounded-2xl overflow-hidden shadow-2xl transition-all"
        style={{ borderColor: `${element.color}55`, boxShadow: `0 0 40px ${element.color}25` }}
      >
        {/* Top Header Bar */}
        <div 
          className="p-5 flex items-start justify-between border-b border-white/10"
          style={{ background: `linear-gradient(135deg, ${element.color}15 0%, rgba(16,20,26,0.8) 100%)` }}
        >
          <div className="flex items-center gap-4">
            {/* Symbol Box */}
            <div 
              className="w-16 h-16 rounded-xl flex flex-col items-center justify-center font-mono border shadow-lg relative overflow-hidden"
              style={{ 
                backgroundColor: `${element.color}20`, 
                borderColor: element.color,
                boxShadow: `0 0 20px ${element.color}40` 
              }}
            >
              <span className="text-[10px] font-mono text-slate-300 absolute top-1 left-1.5 font-bold">
                {element.number}
              </span>
              <span className="text-2xl font-black text-white" style={{ textShadow: `0 0 10px ${element.color}` }}>
                {element.symbol}
              </span>
              <span className="text-[9px] text-slate-300 font-mono absolute bottom-1">
                {element.atomicMass}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {element.name[language]}
                </h2>
                <span 
                  className="text-xs px-2.5 py-0.5 rounded-full font-medium border uppercase tracking-wider"
                  style={{ 
                    backgroundColor: `${element.color}20`, 
                    borderColor: `${element.color}60`,
                    color: element.color 
                  }}
                >
                  {t(element.category)}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-1">
                {element.electronConfig} • {t(element.phase)}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Visual Bohr Model & Core Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* 2D Animated Atom Canvas / SVG representation */}
            <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#181c22] border border-white/5 relative min-h-[220px]">
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Concentric electron rings */}
                {shells.map((electronsInShell, ringIdx) => {
                  const size = 60 + ringIdx * 24;
                  return (
                    <div
                      key={ringIdx}
                      className="absolute rounded-full border border-dashed border-white/15 animate-orbital"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        animationDuration: `${10 + ringIdx * 4}s`,
                        animationDirection: ringIdx % 2 === 0 ? 'normal' : 'reverse'
                      }}
                    >
                      {/* Orbiting electrons */}
                      {Array.from({ length: Math.min(electronsInShell, 8) }).map((_, eIdx) => {
                        const angle = (360 / Math.min(electronsInShell, 8)) * eIdx;
                        return (
                          <div
                            key={eIdx}
                            className="absolute w-2 h-2 rounded-full shadow-[0_0_6px_#00d2ff]"
                            style={{
                              backgroundColor: element.color,
                              top: '50%',
                              left: '50%',
                              transform: `rotate(${angle}deg) translate(${size / 2}px) rotate(-${angle}deg)`
                            }}
                          />
                        );
                      })}
                    </div>
                  );
                })}

                {/* Central Nucleus */}
                <div 
                  className="w-12 h-12 rounded-full flex flex-col items-center justify-center border text-center shadow-lg relative z-10"
                  style={{ 
                    backgroundColor: `${element.color}30`, 
                    borderColor: element.color,
                    boxShadow: `0 0 15px ${element.color}60`
                  }}
                >
                  <span className="text-xs font-bold text-white font-mono">{element.symbol}</span>
                  <span className="text-[9px] text-slate-300 font-mono">{element.number}p+</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 font-mono mt-3 flex items-center gap-2">
                <Orbit className="w-3.5 h-3.5 text-[#00d2ff]" />
                <span>{shells.length} {shells.length === 1 ? "Shell" : "Shells"}: [{shells.join(", ")}]</span>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#181c22] border border-white/5">
                <div className="text-slate-400 text-[10px] uppercase">{t("atomicNumber")}</div>
                <div className="text-lg font-bold text-white mt-0.5">{element.number}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#181c22] border border-white/5">
                <div className="text-slate-400 text-[10px] uppercase">{t("atomicMass")}</div>
                <div className="text-lg font-bold text-white mt-0.5">{element.atomicMass}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#181c22] border border-white/5">
                <div className="text-slate-400 text-[10px] uppercase">{t("period")} / {t("group")}</div>
                <div className="text-base font-bold text-white mt-0.5">{element.period} / {element.group}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#181c22] border border-white/5">
                <div className="text-slate-400 text-[10px] uppercase">{t("phase")}</div>
                <div className="text-base font-bold text-white mt-0.5 capitalize">{t(element.phase)}</div>
              </div>
            </div>
          </div>

          {/* Everyday Uses */}
          <div className="p-4 rounded-xl bg-[#181c22] border border-white/10 space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#00d2ff]">
              <Layers className="w-4 h-4" />
              <span>{t("everydayUse")}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {element.everydayUse[language]}
            </p>
          </div>

          {/* Fun Fact */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#edb1ff]/10 to-transparent border border-[#edb1ff]/30 space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#edb1ff]">
              <Sparkles className="w-4 h-4" />
              <span>{t("funFact")}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed italic">
              &ldquo;{element.funFact[language]}&rdquo;
            </p>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 bg-[#0b0f14] border-t border-white/10 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono">
            {inLabCount > 0 ? (
              <span className="text-[#00d2ff]">
                ✓ {inLabCount} in reaction beaker
              </span>
            ) : (
              <span>Ready for atomic reactions</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              {t("close")}
            </button>
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-[#00d2ff] to-[#47d6ff] hover:brightness-110 shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all active:scale-95"
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
