"use client";

import React, { useState, useRef, useMemo } from "react";
import { Language } from "@/types/chemistry";
import { soundEffects } from "@/lib/soundEffects";
import { 
  Molecule3D, 
  Atom3D, 
  PRESET_3D_MOLECULES, 
  ELEMENT_CPK 
} from "@/data/molecule3dData";
import { MoleculeViewer3D, MoleculeViewer3DRef, RenderMode } from "./MoleculeViewer3D";
import { 
  Box, 
  Sparkles, 
  RotateCw, 
  Camera, 
  FlaskConical, 
  Search, 
  Info, 
  Maximize2, 
  Flame, 
  Eye, 
  Ruler, 
  Check, 
  Layers, 
  Compass, 
  X,
  Share2,
  Atom,
  RefreshCw,
  Globe
} from "lucide-react";

interface Molecule3DStudioProps {
  language: Language;
  onLoadToLab?: (atoms: Record<string, number>) => void;
  onGoToLab?: () => void;
  initialMoleculeId?: string;
  theme?: "dark" | "light";
}

export const Molecule3DStudio: React.FC<Molecule3DStudioProps> = ({
  language,
  onLoadToLab,
  onGoToLab,
  initialMoleculeId,
  theme = "dark"
}) => {
  const viewerRef = useRef<MoleculeViewer3DRef>(null);

  // Active state
  const [selectedMoleculeId, setSelectedMoleculeId] = useState<string>(initialMoleculeId || "water");
  const [mode, setMode] = useState<RenderMode>("ball-and-stick");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [temperature, setTemperature] = useState<number>(298); // Room temp 298K
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "organic" | "inorganic" | "vital" | "crystal">("all");

  // Inspection & measurement states
  const [hoveredAtom, setHoveredAtom] = useState<Atom3D | null>(null);
  const [clickedAtoms, setClickedAtoms] = useState<Atom3D[]>([]);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);
  const [showDossier, setShowDossier] = useState(true);

  // Active molecule
  const activeMolecule = useMemo(() => {
    return PRESET_3D_MOLECULES.find(m => m.id === selectedMoleculeId) || PRESET_3D_MOLECULES[0];
  }, [selectedMoleculeId]);

  // Filtered molecules
  const filteredMolecules = useMemo(() => {
    return PRESET_3D_MOLECULES.filter(m => {
      const matchCat = selectedCategory === "all" || m.category === selectedCategory;
      const matchSearch = 
        m.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.formulaAscii.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  // Handle atom selection for measurement
  const handleSelectAtom = (atom: Atom3D) => {
    soundEffects.playAtomAdd();
    setClickedAtoms(prev => {
      // If atom already clicked, unselect it
      if (prev.some(a => a.id === atom.id)) {
        return prev.filter(a => a.id !== atom.id);
      }
      // Keep at most 3 atoms for angle measurement
      if (prev.length >= 3) {
        return [atom];
      }
      return [...prev, atom];
    });
  };

  // Calculate distance or angle
  const measurementResult = useMemo(() => {
    if (clickedAtoms.length === 2) {
      const [a1, a2] = clickedAtoms;
      const dx = a1.x - a2.x;
      const dy = a1.y - a2.y;
      const dz = a1.z - a2.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz).toFixed(3);
      return {
        type: "distance" as const,
        label: `${a1.element}(#${a1.id + 1}) — ${a2.element}(#${a2.id + 1})`,
        value: `${dist} Å`
      };
    } else if (clickedAtoms.length === 3) {
      const [a1, a2, a3] = clickedAtoms; // a2 is vertex
      const v1 = { x: a1.x - a2.x, y: a1.y - a2.y, z: a1.z - a2.z };
      const v2 = { x: a3.x - a2.x, y: a3.y - a2.y, z: a3.z - a2.z };

      const dot = v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
      const mag1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y + v1.z * v1.z);
      const mag2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y + v2.z * v2.z);

      if (mag1 * mag2 === 0) return null;
      const cosAngle = Math.max(-1, Math.min(1, dot / (mag1 * mag2)));
      const deg = ((Math.acos(cosAngle) * 180) / Math.PI).toFixed(1);
      return {
        type: "angle" as const,
        label: `∠ ${a1.element} — ${a2.element} — ${a3.element}`,
        value: `${deg}°`
      };
    }
    return null;
  }, [clickedAtoms]);

  // Snapshot PNG export
  const handleExportSnapshot = () => {
    soundEffects.playDiscovery();
    const dataUrl = viewerRef.current?.takeSnapshot();
    if (!dataUrl) return;

    const link = document.createElement("a");
    link.download = `${activeMolecule.formulaAscii}_3D_Structure.png`;
    link.href = dataUrl;
    link.click();

    setCopiedNotification(
      language === "kk" ? "Снимок PNG форматында сақталды!" :
      language === "en" ? "Snapshot saved as PNG!" :
      "Снимок сохранен в PNG!"
    );
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  // Load into lab
  const handleLoadToReactionLab = () => {
    soundEffects.playDiscovery();
    if (onLoadToLab) {
      const atomCounts: Record<string, number> = {};
      activeMolecule.atoms.forEach(a => {
        atomCounts[a.element] = (atomCounts[a.element] || 0) + 1;
      });
      onLoadToLab(atomCounts);
    }
    if (onGoToLab) {
      onGoToLab();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 space-y-4 animate-fadeIn font-sans">
      
      {/* 1. Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-[#12142a] border border-slate-200/80 dark:border-white/[0.1] text-white shadow-xl">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6366f1] via-[#7c6ff6] to-[#a59bfb] flex items-center justify-center text-white shadow-[0_0_20px_rgba(124,111,246,0.4)] shrink-0">
            <Box className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-black tracking-tight text-white font-sans">
                {language === "kk" ? "3D Молекулалар Студиясы" : language === "en" ? "3D Molecular Studio" : "3D Студия Молекул"}
              </h1>
              <span className="px-2 py-0.5 rounded-md bg-[#7c6ff6]/20 border border-[#7c6ff6]/40 text-[#c4b5fd] text-[10px] font-mono font-bold uppercase">
                WebGL PBR
              </span>
            </div>
            <p className="text-xs text-slate-300 font-sans mt-0.5">
              {language === "kk"
                ? "Молекулалық кеңістіктік құрылымдарды, байланыс бұрыштарын және термиялық тербелістерді интерактивті зерттеу."
                : language === "en"
                ? "Explore spatial geometries, bond lengths, valence angles, and thermal quantum vibrations in real-time 3D."
                : "Интерактивное исследование пространственной геометрии, валентных углов и тепловых колебаний в реальном 3D."}
            </p>
          </div>
        </div>

        {/* Global Quick Action */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          {onGoToLab && (
            <button
              onClick={handleLoadToReactionLab}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#7c6ff6] hover:from-[#5457e5] hover:to-[#6d5df6] text-white font-mono font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition cursor-pointer"
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>{language === "kk" ? "Реакторға жүктеу" : language === "en" ? "Load to Reactor" : "Загрузить в Реактор"}</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. Main Studio Grid: Left Sidebar + Center 3D Stage + Right Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left Column: Molecule Selector Drawer (3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-3 rounded-3xl bg-white dark:bg-[#0e1022] border border-slate-200/80 dark:border-white/[0.09] p-3.5 shadow-sm">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={language === "kk" ? "Іздеу (H2O, бензол...)" : language === "en" ? "Search molecule..." : "Поиск (H2O, бензол...)"}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-[#151833] border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:border-[#7c6ff6]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1">
            {[
              { id: "all", label: { ru: "Все", kk: "Барлығы", en: "All" } },
              { id: "organic", label: { ru: "Органика", kk: "Органика", en: "Organic" } },
              { id: "vital", label: { ru: "Жизненные", kk: "Өмірлік", en: "Vital" } },
              { id: "inorganic", label: { ru: "Неорганика", kk: "Бейорганика", en: "Inorganic" } },
              { id: "crystal", label: { ru: "Решетки", kk: "Торлар", en: "Lattices" } }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  soundEffects.playAtomAdd();
                  setSelectedCategory(cat.id as any);
                }}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium transition cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-[#7c6ff6] text-white shadow-sm"
                    : "bg-slate-100 dark:bg-[#161935] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>

          {/* Molecule List */}
          <div className="space-y-1.5 overflow-y-auto max-h-[380px] lg:max-h-[580px] pr-1 no-scrollbar">
            {filteredMolecules.map(mol => {
              const isCurrent = mol.id === selectedMoleculeId;
              return (
                <button
                  key={mol.id}
                  onClick={() => {
                    soundEffects.playAtomAdd();
                    setSelectedMoleculeId(mol.id);
                    setClickedAtoms([]);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-2xl text-left transition-all cursor-pointer ${
                    isCurrent
                      ? "bg-[#7c6ff6]/15 dark:bg-[#7c6ff6]/20 border border-[#7c6ff6] shadow-sm"
                      : "bg-slate-50/70 dark:bg-[#13152d]/80 hover:bg-slate-100 dark:hover:bg-[#181b3b] border border-transparent"
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 dark:text-white font-sans">
                        {mol.name[language]}
                      </span>
                      {mol.hybridization && (
                        <span className="px-1.5 py-0.2 rounded bg-indigo-500/10 text-indigo-500 dark:text-indigo-300 text-[9px] font-mono font-bold">
                          {mol.hybridization}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      {mol.formula} • {mol.atoms.length} {language === "kk" ? "атом" : language === "en" ? "atoms" : "атомов"}
                    </div>
                  </div>

                  <span 
                    className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: mol.glowColor }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Column: 3D WebGL Canvas Stage (6 or 9 cols depending on side panel) */}
        <div className={`${showDossier ? "lg:col-span-6" : "lg:col-span-9"} flex flex-col rounded-3xl bg-slate-950 overflow-hidden border border-slate-200/80 dark:border-white/[0.1] shadow-2xl relative min-h-[520px] lg:min-h-[640px]`}>
          
          {/* Top Stage Bar: Mode Toggles + Actions */}
          <div className="absolute top-3 left-3 right-3 z-10 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
            
            {/* Mode Switcher */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/15 pointer-events-auto shadow-lg">
              {[
                { id: "ball-and-stick", label: { ru: "Шар-стержень", kk: "Шар-өзек", en: "Ball & Stick" }, icon: Atom },
                { id: "space-filling", label: { ru: "Объем (vdW)", kk: "Көлем (vdW)", en: "Space-fill" }, icon: Globe },
                { id: "wireframe", label: { ru: "Скелет", kk: "Қаңқа", en: "Wireframe" }, icon: Layers },
                { id: "electron-cloud", label: { ru: "Орбитали", kk: "Орбитальдар", en: "Orbitals" }, icon: Sparkles }
              ].map(m => {
                const Icon = m.icon;
                const active = mode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      soundEffects.playAtomAdd();
                      setMode(m.id as RenderMode);
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-mono font-medium transition cursor-pointer ${
                      active
                        ? "bg-[#7c6ff6] text-white shadow-md font-bold"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                    title={m.label[language]}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{m.label[language]}</span>
                  </button>
                );
              })}
            </div>

            {/* Stage Quick Controls */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/15 pointer-events-auto shadow-lg">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-2 rounded-xl transition cursor-pointer ${
                  autoRotate ? "bg-[#7c6ff6]/30 text-[#c4b5fd]" : "text-slate-400 hover:text-white"
                }`}
                title={language === "kk" ? "Айналуды қосу/өшіру" : language === "en" ? "Toggle Auto-rotate" : "Вкл/выкл автовращение"}
              >
                <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? "animate-spin" : ""}`} />
              </button>

              <button
                onClick={() => viewerRef.current?.resetCamera()}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                title={language === "kk" ? "Камераны бастапқы күйге келтіру" : language === "en" ? "Reset Camera" : "Сброс камеры"}
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleExportSnapshot}
                className="p-2 rounded-xl text-slate-400 hover:text-emerald-400 hover:bg-white/10 transition cursor-pointer"
                title={language === "kk" ? "PNG суретін сақтау" : language === "en" ? "Take PNG Snapshot" : "Сделать снимок PNG"}
              >
                <Camera className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setShowDossier(!showDossier)}
                className={`p-2 rounded-xl transition cursor-pointer ${
                  showDossier ? "bg-white/15 text-white" : "text-slate-400 hover:text-white"
                }`}
                title={language === "kk" ? "Ақпараттық панельді ашу" : language === "en" ? "Toggle Dossier" : "Инфо-панель"}
              >
                <Info className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3D WebGL Canvas */}
          <div className="flex-1 w-full h-full relative">
            <MoleculeViewer3D
              ref={viewerRef}
              molecule={activeMolecule}
              mode={mode}
              autoRotate={autoRotate}
              temperature={temperature}
              onHoverAtom={setHoveredAtom}
              onSelectAtom={handleSelectAtom}
              selectedAtomIds={clickedAtoms.map(a => a.id)}
              theme={theme}
            />

            {/* Notification Toast */}
            {copiedNotification && (
              <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-mono font-bold shadow-xl flex items-center gap-1.5 animate-fadeIn">
                <Check className="w-3.5 h-3.5" />
                <span>{copiedNotification}</span>
              </div>
            )}
          </div>

          {/* Bottom Stage Overlay: Temperature Slider + Atom Inspector & Measurement */}
          <div className="p-3 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent border-t border-white/10 space-y-2 z-10">
            
            {/* Top Row: Temperature Slider */}
            <div className="flex items-center justify-between gap-4 px-2 py-1 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Flame className={`w-4 h-4 ${temperature > 400 ? 'text-amber-500 animate-pulse' : 'text-cyan-400'}`} />
                <span className="text-[11px] font-bold text-white">
                  {language === "kk" ? "Температура тербелісі" : language === "en" ? "Thermal Vibration" : "Тепловые колебания"}:
                </span>
                <span className="text-amber-400 font-bold">{temperature} K</span>
                <span className="text-slate-500 text-[10px]">({(temperature - 273.15).toFixed(0)} °C)</span>
              </div>

              <div className="flex items-center gap-2 flex-1 max-w-xs">
                <span className="text-[10px] text-cyan-400 font-bold">0K</span>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={temperature}
                  onChange={e => setTemperature(Number(e.target.value))}
                  className="w-full accent-[#7c6ff6] cursor-pointer"
                />
                <span className="text-[10px] text-red-400 font-bold">1000K</span>
              </div>
            </div>

            {/* Bottom Row: Dynamic Inspector & Measurement Display */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              {/* Measurement result */}
              {measurementResult ? (
                <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-[#7c6ff6]/20 border border-[#7c6ff6]/40 text-[#c4b5fd]">
                  <Ruler className="w-3.5 h-3.5 text-[#a59bfb]" />
                  <span className="font-bold">{measurementResult.label}:</span>
                  <span className="text-white font-black text-sm">{measurementResult.value}</span>
                  <button
                    onClick={() => setClickedAtoms([])}
                    className="p-1 text-slate-400 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <Ruler className="w-3.5 h-3.5 text-slate-500" />
                  <span>
                    {language === "kk"
                      ? "Қашықтықты өлшеу үшін 2 атомды, бұрыш үшін 3 атомды басыңыз"
                      : language === "en"
                      ? "Click 2 atoms for distance, 3 atoms for valence angle"
                      : "Кликните 2 атома для измерения длины связи, 3 — для валентного угла"}
                  </span>
                </div>
              )}

              {/* Hovered Atom telemetry */}
              {hoveredAtom && (
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-white text-[11px]">
                  <Atom className="w-3.5 h-3.5 text-[#a59bfb]" />
                  <span className="font-bold">{hoveredAtom.element} ({hoveredAtom.label || hoveredAtom.element})</span>
                  {hoveredAtom.oxidationState && (
                    <span className="text-amber-300 font-bold">[{hoveredAtom.oxidationState}]</span>
                  )}
                  <span className="text-slate-400">({hoveredAtom.x.toFixed(1)}, {hoveredAtom.y.toFixed(1)}, {hoveredAtom.z.toFixed(1)})</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Chemical Dossier & Geometry Info (3 cols) */}
        {showDossier && (
          <div className="lg:col-span-3 flex flex-col gap-3 rounded-3xl bg-white dark:bg-[#0e1022] border border-slate-200/80 dark:border-white/[0.09] p-4 shadow-sm animate-fadeIn">
            
            {/* Header info */}
            <div className="space-y-1 pb-3 border-b border-slate-200 dark:border-white/[0.08]">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-mono text-slate-900 dark:text-white">
                  {activeMolecule.formula}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#7c6ff6]/15 text-[#7c6ff6] dark:text-[#c4b5fd] text-[10px] font-mono font-bold uppercase">
                  {activeMolecule.category}
                </span>
              </div>
              <h2 className="text-sm font-extrabold text-slate-800 dark:text-slate-200">
                {activeMolecule.name[language]}
              </h2>
            </div>

            {/* Geometry stats cards */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-[#14162e] border border-slate-200/70 dark:border-white/[0.06]">
                <div className="text-slate-500 dark:text-slate-400">{language === "kk" ? "Гибридизация" : language === "en" ? "Hybridization" : "Гибридизация"}</div>
                <div className="font-black text-slate-900 dark:text-white mt-0.5">{activeMolecule.hybridization || "—"}</div>
              </div>

              <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-[#14162e] border border-slate-200/70 dark:border-white/[0.06]">
                <div className="text-slate-500 dark:text-slate-400">{language === "kk" ? "Байланыс бұрышы" : language === "en" ? "Bond Angle" : "Угол связи"}</div>
                <div className="font-black text-slate-900 dark:text-white mt-0.5">{activeMolecule.bondAngle || "—"}</div>
              </div>

              <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-[#14162e] border border-slate-200/70 dark:border-white/[0.06] col-span-2">
                <div className="text-slate-500 dark:text-slate-400">{language === "kk" ? "Дипольді момент" : language === "en" ? "Dipole Moment" : "Дипольный момент"}</div>
                <div className="font-black text-indigo-600 dark:text-[#a59bfb] mt-0.5">{activeMolecule.dipoleMoment || "0.00 D"}</div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1 pt-1">
              <h4 className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase font-mono flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#7c6ff6]" />
                <span>{language === "kk" ? "Геометрия және қасиеті" : language === "en" ? "Geometry & Properties" : "Геометрия и свойства"}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {activeMolecule.description[language]}
              </p>
            </div>

            {/* Scientific Fun Fact */}
            <div className="p-3 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 text-amber-900 dark:text-amber-200 text-xs leading-relaxed space-y-1 mt-auto">
              <div className="font-bold font-mono text-[10px] uppercase flex items-center gap-1 text-amber-800 dark:text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{language === "kk" ? "Ғылыми факт" : language === "en" ? "Scientific Fact" : "Научный факт"}</span>
              </div>
              <p className="text-[11px] opacity-95">
                {activeMolecule.funFact[language]}
              </p>
            </div>

            {/* Load to lab CTA button */}
            {onLoadToLab && (
              <button
                onClick={handleLoadToReactionLab}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-gradient-to-r from-[#6366f1] via-[#7c6ff6] to-[#a59bfb] text-white font-mono font-bold text-xs shadow-md hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
              >
                <FlaskConical className="w-4 h-4" />
                <span>{language === "kk" ? "Реакторға осы затты салу 🧪" : language === "en" ? "Synthesize in Lab 🧪" : "Загрузить формулу в Реактор 🧪"}</span>
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
