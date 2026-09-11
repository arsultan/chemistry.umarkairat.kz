"use client";

import React, { useState, useRef } from "react";
import { Language } from "@/types/chemistry";
import { soundEffects } from "@/lib/soundEffects";
import { Molecule3D, PRESET_3D_MOLECULES, getMolecule3DData } from "@/data/molecule3dData";
import { MoleculeViewer3D, MoleculeViewer3DRef, RenderMode } from "./MoleculeViewer3D";
import { 
  X, 
  Box, 
  RotateCw, 
  Camera, 
  FlaskConical, 
  Sparkles, 
  Ruler, 
  Atom, 
  Globe, 
  Layers 
} from "lucide-react";

interface Molecule3DModalProps {
  moleculeId: string | null;
  onClose: () => void;
  language: Language;
  onLoadToLab?: (atoms: Record<string, number>) => void;
  onGoToLab?: () => void;
  theme?: "dark" | "light";
}

export const Molecule3DModal: React.FC<Molecule3DModalProps> = ({
  moleculeId,
  onClose,
  language,
  onLoadToLab,
  onGoToLab,
  theme = "dark"
}) => {
  const viewerRef = useRef<MoleculeViewer3DRef>(null);
  const [mode, setMode] = useState<RenderMode>("ball-and-stick");
  const [autoRotate, setAutoRotate] = useState(true);
  const [temperature, setTemperature] = useState(298);

  if (!moleculeId) return null;

  const molecule: Molecule3D = getMolecule3DData(moleculeId) || PRESET_3D_MOLECULES[0];

  const handleLoadToLab = () => {
    soundEffects.playDiscovery();
    if (onLoadToLab) {
      const atomCounts: Record<string, number> = {};
      molecule.atoms.forEach(a => {
        atomCounts[a.element] = (atomCounts[a.element] || 0) + 1;
      });
      onLoadToLab(atomCounts);
    }
    if (onGoToLab) {
      onGoToLab();
      onClose();
    }
  };

  const handleSnapshot = () => {
    soundEffects.playDiscovery();
    const dataUrl = viewerRef.current?.takeSnapshot();
    if (!dataUrl) return;
    const link = document.createElement("a");
    link.download = `${molecule.formulaAscii}_3D.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="relative max-w-4xl w-full h-[85vh] max-h-[780px] bg-slate-950 rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col font-sans text-white"
      >
        {/* Top Header */}
        <div className="p-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7c6ff6]/20 border border-[#7c6ff6]/40 flex items-center justify-center text-[#a59bfb] shrink-0">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black font-mono text-white">
                  {molecule.formula}
                </span>
                <span className="text-xs font-bold text-slate-300 font-sans">
                  {molecule.name[language]}
                </span>
                {molecule.hybridization && (
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-mono font-bold">
                    {molecule.hybridization}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                {molecule.geometryName[language]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSnapshot}
              className="p-2 rounded-xl text-slate-400 hover:text-emerald-400 hover:bg-white/10 transition cursor-pointer"
              title="PNG snapshot"
            >
              <Camera className="w-4 h-4" />
            </button>
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`p-2 rounded-xl transition cursor-pointer ${autoRotate ? 'text-[#a59bfb]' : 'text-slate-400'}`}
              title="Toggle auto-rotate"
            >
              <RotateCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D Canvas */}
        <div className="flex-1 relative w-full h-full">
          <MoleculeViewer3D
            ref={viewerRef}
            molecule={molecule}
            mode={mode}
            autoRotate={autoRotate}
            temperature={temperature}
            theme={theme}
          />

          {/* Mode switch overlay */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1 p-1 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/15">
            {[
              { id: "ball-and-stick", label: "Шар-стержень", icon: Atom },
              { id: "space-filling", label: "Объем (vdW)", icon: Globe },
              { id: "wireframe", label: "Скелет", icon: Layers },
              { id: "electron-cloud", label: "Орбитали", icon: Sparkles }
            ].map(m => {
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    soundEffects.playAtomAdd();
                    setMode(m.id as RenderMode);
                  }}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium transition cursor-pointer ${
                    mode === m.id ? "bg-[#7c6ff6] text-white font-bold" : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span className="hidden sm:inline">{m.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Details Footer */}
        <div className="p-4 bg-slate-900/95 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 text-xs">
          <div className="space-y-0.5 max-w-lg">
            <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-2">
              {molecule.description[language]}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onLoadToLab && (
              <button
                onClick={handleLoadToLab}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7c6ff6] hover:bg-[#6b5ce7] text-white font-mono font-bold text-xs shadow-md transition cursor-pointer"
              >
                <FlaskConical className="w-3.5 h-3.5" />
                <span>{language === "kk" ? "Реакторға салу" : language === "en" ? "Load to Reactor" : "В Реактор"}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
