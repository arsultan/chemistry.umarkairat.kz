"use client";

import React, { useState } from "react";
import { MoleculeData, MoleculeCategory, Language } from "@/types/chemistry";
import { MOLECULES_DATA } from "@/data/molecules";
import { DiscoveryModal } from "../ReactionLab/DiscoveryModal";
import { getTranslation } from "@/data/i18n";
import { soundEffects } from "@/lib/soundEffects";
import { 
  BookOpen, 
  Award, 
  Lock, 
  Search, 
  CheckCircle2, 
  Printer,
  Box
} from "lucide-react";
import { Molecule3DModal } from "../Molecule3D/Molecule3DModal";

interface DiscoveryJournalProps {
  discoveredIds: string[];
  language: Language;
  onGoToLab: () => void;
}

const CATEGORIES: (MoleculeCategory | "all")[] = [
  "all",
  "essential",
  "household",
  "gas",
  "mineral",
  "acid-base",
  "fuel"
];

export const DiscoveryJournal: React.FC<DiscoveryJournalProps> = ({
  discoveredIds,
  language,
  onGoToLab
}) => {
  const t = (k: string) => getTranslation(language, k);

  const [activeCategory, setActiveCategory] = useState<MoleculeCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [inspectedMolecule, setInspectedMolecule] = useState<MoleculeData | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [modal3dMoleculeId, setModal3dMoleculeId] = useState<string | null>(null);

  const discoveredSet = new Set(discoveredIds);
  const totalCount = MOLECULES_DATA.length;
  const discoveredCount = discoveredIds.length;
  const percent = Math.round((discoveredCount / totalCount) * 100);

  const getRankTitle = () => {
    if (discoveredCount >= 30) return { en: "Grandmaster Chemist", ru: "Гроссмейстер химии", kk: "Химия гроссмейстері" };
    if (discoveredCount >= 20) return { en: "Master Alchemist", ru: "Магистр алхимии", kk: "Алхимия шебері" };
    if (discoveredCount >= 10) return { en: "Senior Researcher", ru: "Старший исследователь", kk: "Аға ғылыми қызметкер" };
    if (discoveredCount >= 5) return { en: "Junior Chemist", ru: "Юный химик", kk: "Жас химик" };
    return { en: "Laboratory Apprentice", ru: "Ученик лаборатории", kk: "Зертхана шәкірті" };
  };

  const rank = getRankTitle();

  const filteredMolecules = MOLECULES_DATA.filter(mol => {
    if (activeCategory !== "all" && mol.category !== activeCategory) return false;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      const matchFormula = mol.formula.toLowerCase().includes(q) || mol.formulaAscii.toLowerCase().includes(q);
      const matchName = mol.name[language].toLowerCase().includes(q) ||
                        mol.name.en.toLowerCase().includes(q) ||
                        mol.name.ru.toLowerCase().includes(q) ||
                        mol.name.kk.toLowerCase().includes(q);
      return matchFormula || matchName;
    }
    return true;
  });

  const handlePrintCertificate = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-3">
      {/* Journal Header & Progress Stats */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t("journalTitle")}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {rank[language]}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {t("journalSubtitle")}
            </p>
          </div>

          {/* Progress Bar & Certificate Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.07] space-y-2 min-w-[220px]">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 dark:text-slate-400">{t("discoveredCount")}:</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">{discoveredCount}</span> / {totalCount}
                </span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                  style={{ width: `${Math.max(percent, 4)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>{percent}% Completed</span>
                <span>{totalCount - discoveredCount} Remaining</span>
              </div>
            </div>

            <button
              onClick={() => setShowCertificate(true)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs font-semibold font-mono text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-white/[0.1] transition-all whitespace-nowrap active:scale-95 cursor-pointer shadow-sm"
            >
              <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>{t("exportReport")}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Chips & Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] space-y-3 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 text-xs">
            {CATEGORIES.map(cat => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all border cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 dark:bg-slate-800 text-white border-slate-900 dark:border-white/[0.15] shadow-sm"
                      : "bg-slate-100 dark:bg-slate-950/40 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200/80 dark:border-white/[0.06]"
                  }`}
                >
                  {cat === "all" ? t("filterAll") : t(`filter${cat.charAt(0).toUpperCase() + cat.slice(1)}`)}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search substance..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 font-mono"
            />
          </div>
        </div>
      </div>

      {/* Molecules Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {filteredMolecules.map(mol => {
          const isDiscovered = discoveredSet.has(mol.id);

          if (isDiscovered) {
            return (
              <div
                key={mol.id}
                onClick={() => {
                  soundEffects.playAtomAdd();
                  setInspectedMolecule(mol);
                }}
                className="group cursor-pointer rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/[0.08] hover:border-slate-400 dark:hover:border-white/[0.18] p-4 space-y-2.5 transition-all hover:translate-y-[-1px] hover:shadow-md relative overflow-hidden"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950/60 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]">
                    {t(mol.category)}
                  </span>
                  <span className="w-2 h-2 rounded-full opacity-80" style={{ backgroundColor: mol.glowColor }} />
                </div>

                {/* Formula & Name */}
                <div>
                  <div 
                    className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-slate-900 dark:text-white"
                  >
                    {mol.formula}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {mol.name[language]}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono truncate">
                    {mol.scientificName[language]}
                  </p>
                </div>

                {/* Short snippet */}
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                  {mol.description[language]}
                </p>

                {/* Card footer */}
                <div className="pt-2 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="capitalize">{mol.state}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        soundEffects.playAtomAdd();
                        setModal3dMoleculeId(mol.id);
                      }}
                      className="px-2 py-0.5 rounded-md bg-[#7c6ff6]/15 hover:bg-[#7c6ff6]/25 text-[#7c6ff6] dark:text-[#c4b5fd] font-bold flex items-center gap-1 transition cursor-pointer"
                      title="3D Structure"
                    >
                      <Box className="w-3 h-3" />
                      <span>3D</span>
                    </button>
                    <span className="text-indigo-600 dark:text-indigo-400 group-hover:underline flex items-center gap-1 font-medium">
                      Details →
                    </span>
                  </div>
                </div>
              </div>
            );
          }

          // Undiscovered locked silhouette card
          return (
            <div
              key={mol.id}
              className="rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-dashed border-slate-200 dark:border-white/[0.07] p-4 space-y-2.5 opacity-70 hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase">
                  {t(mol.category)}
                </span>
                <Lock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              </div>

              <div>
                <div className="text-2xl font-black font-mono tracking-wider text-slate-400 dark:text-slate-600">
                  ???
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                  Undiscovered Substance
                </h3>
              </div>

              <div className="text-xs text-slate-500 font-mono space-y-0.5">
                <span className="block text-[10px] text-slate-400 dark:text-slate-600 uppercase">Recipe Hint:</span>
                <span className="text-slate-600 dark:text-slate-400">
                  {Object.keys(mol.atoms).map(sym => `${mol.atoms[sym]}×${sym}`).join(" + ")}
                </span>
              </div>

              <button
                onClick={onGoToLab}
                className="w-full py-1.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/[0.06] transition-colors cursor-pointer shadow-sm"
              >
                Synthesize in Lab →
              </button>
            </div>
          );
        })}
      </div>

      {/* Discovery Inspector Modal */}
      {inspectedMolecule && (
        <DiscoveryModal
          molecule={inspectedMolecule}
          onClose={() => setInspectedMolecule(null)}
          language={language}
          onGoToJournal={() => setInspectedMolecule(null)}
        />
      )}

      {/* 3D Structure Modal */}
      {modal3dMoleculeId && (
        <Molecule3DModal
          moleculeId={modal3dMoleculeId}
          onClose={() => setModal3dMoleculeId(null)}
          language={language}
          onGoToLab={onGoToLab}
        />
      )}

      {/* Official Lab Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn print:p-0 print:bg-white">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.12] rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-5 print:text-black print:bg-white print:border-none">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-white/[0.08] transition-colors print:hidden cursor-pointer"
            >
              ✕
            </button>

            {/* Certificate Header */}
            <div className="space-y-2 border-b border-slate-200 dark:border-white/[0.08] pb-5 print:border-black">
              <div className="flex items-center justify-center mb-2">
                <img 
                  src="/ngs-logo.png" 
                  alt="NGS School" 
                  className="w-13 h-15 object-contain print:drop-shadow-none" 
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-mono tracking-tight text-slate-900 dark:text-white print:text-black">
                CERTIFICATE OF CHEMICAL DISCOVERY
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono tracking-widest uppercase print:text-slate-700">
                New Generation School (NGS) • chemistry.umarkairat.kz
              </p>
            </div>

            {/* Certificate Body */}
            <div className="space-y-3 py-1">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed print:text-slate-800">
                This document certifies the successful synthesis and investigation of
              </p>
              <div className="text-3xl sm:text-4xl font-black font-mono text-indigo-600 dark:text-indigo-400 tracking-tight print:text-blue-600">
                {discoveredCount} CHEMICAL SUBSTANCES
              </div>
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white print:text-black">
                Attained Rank: <span className="text-emerald-600 dark:text-emerald-400 print:text-purple-700">{rank[language]}</span>
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono pt-1">
                <span>Completed: {percent}% of Molecular Registry</span> • <span>All 118 Elements Explored</span>
              </div>
            </div>

            {/* Author Signature & Seal Block */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-left text-xs font-mono print:border-black print:text-black">
              <div className="flex items-center gap-3">
                <img 
                  src="/ngs-logo.png" 
                  alt="NGS" 
                  className="w-8 h-9 object-contain" 
                />
                <div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase block print:text-slate-600 font-medium">
                    {t("authorTitle")}
                  </span>
                  <span className="text-slate-900 dark:text-white font-bold text-sm print:text-black block">
                    Кайрат Умар
                  </span>
                  <span className="text-[10px] text-indigo-600 dark:text-indigo-400 print:text-blue-700 block">
                    chemistry.umarkairat.kz
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase block print:text-slate-600 font-medium">
                  Institution
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-xs print:text-green-700">
                  <CheckCircle2 className="w-3.5 h-3.5" /> NGS Verified Lab
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block print:text-slate-600">
                  Almaty, Kazakhstan
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-center gap-3 print:hidden">
              <button
                onClick={handlePrintCertificate}
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm font-mono transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Certificate</span>
              </button>
              <button
                onClick={() => setShowCertificate(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] font-mono cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
