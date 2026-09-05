"use client";

import React, { useState } from "react";
import { MoleculeData, MoleculeCategory, Language } from "@/types/chemistry";
import { MOLECULES_DATA, MOLECULES_BY_ID } from "@/data/molecules";
import { DiscoveryModal } from "../ReactionLab/DiscoveryModal";
import { getTranslation } from "@/data/i18n";
import { soundEffects } from "@/lib/soundEffects";
import { 
  BookOpen, 
  Award, 
  Download, 
  Sparkles, 
  Lock, 
  Search, 
  CheckCircle2, 
  FileCheck,
  Layers,
  Printer
} from "lucide-react";

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
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-4">
      {/* Journal Header & Progress Stats */}
      <div className="p-6 rounded-3xl bg-[#10141a] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-[#10b981] bg-[#10b981]/15 border border-[#10b981]/40 shadow-sm mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t("journalTitle")}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {rank[language]}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {t("journalSubtitle")}
            </p>
          </div>

          {/* Progress Bar & Certificate Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="p-4 rounded-2xl bg-[#181c22] border border-white/10 space-y-2 min-w-[240px]">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{t("discoveredCount")}:</span>
                <span className="font-bold text-white">
                  <span className="text-[#10b981] text-base">{discoveredCount}</span> / {totalCount}
                </span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-[#10b981] to-[#00d2ff] transition-all duration-700 shadow-[0_0_10px_#10b981]"
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
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold font-mono text-[#00d2ff] bg-[#00d2ff]/10 hover:bg-[#00d2ff]/20 border border-[#00d2ff]/40 shadow-[0_0_15px_rgba(0,210,255,0.2)] transition-all whitespace-nowrap active:scale-95"
            >
              <Award className="w-4 h-4" />
              <span>{t("exportReport")}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Chips & Search Bar */}
      <div className="p-4 rounded-2xl bg-[#10141a] border border-white/10 space-y-3 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 text-xs">
            {CATEGORIES.map(cat => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all border ${
                    isSelected
                      ? "bg-[#10b981]/20 text-[#34d399] border-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                      : "bg-[#181c22] text-slate-400 hover:text-white border-white/5 hover:border-white/20"
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
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#181c22] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#10b981] font-mono"
            />
          </div>
        </div>
      </div>

      {/* Molecules Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                className="group cursor-pointer rounded-2xl bg-[#10141a] border p-4 space-y-3 transition-all hover:scale-[1.02] hover:shadow-xl relative overflow-hidden"
                style={{
                  borderColor: `${mol.glowColor}50`,
                  boxShadow: `0 0 15px ${mol.glowColor}20`
                }}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-[#181c22] text-[#00d2ff] border border-white/5">
                    {t(mol.category)}
                  </span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: mol.glowColor, boxShadow: `0 0 8px ${mol.glowColor}` }} />
                </div>

                {/* Formula & Name */}
                <div>
                  <div 
                    className="text-3xl font-black font-mono tracking-tight text-white"
                    style={{ textShadow: `0 0 12px ${mol.glowColor}80` }}
                  >
                    {mol.formula}
                  </div>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#00d2ff] transition-colors">
                    {mol.name[language]}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono truncate">
                    {mol.scientificName[language]}
                  </p>
                </div>

                {/* Short snippet */}
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {mol.description[language]}
                </p>

                {/* Card footer */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="capitalize">{mol.state}</span>
                  <span className="text-[#00d2ff] group-hover:underline flex items-center gap-1">
                    Details →
                  </span>
                </div>
              </div>
            );
          }

          // Undiscovered locked silhouette card
          return (
            <div
              key={mol.id}
              className="rounded-2xl bg-[#10141a]/40 border border-white/5 border-dashed p-4 space-y-3 opacity-60 hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  {t(mol.category)}
                </span>
                <Lock className="w-3.5 h-3.5 text-slate-500" />
              </div>

              <div>
                <div className="text-2xl font-black font-mono tracking-wider text-slate-600">
                  ???
                </div>
                <h3 className="text-sm font-semibold text-slate-400 mt-1">
                  Undiscovered Substance
                </h3>
              </div>

              <div className="text-xs text-slate-500 font-mono space-y-1">
                <span className="block text-[11px]">Recipe Hint:</span>
                <span className="text-slate-400">
                  {Object.keys(mol.atoms).map(sym => `${mol.atoms[sym]}×${sym}`).join(" + ")}
                </span>
              </div>

              <button
                onClick={onGoToLab}
                className="w-full py-1.5 rounded-lg bg-[#181c22] hover:bg-[#181c22]/80 text-xs font-mono text-slate-400 hover:text-white border border-white/5 transition-colors"
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

      {/* Official Lab Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn print:p-0 print:bg-white">
          <div className="relative w-full max-w-2xl bg-[#10141a] border border-[#00d2ff]/40 rounded-3xl p-8 shadow-2xl text-center space-y-6 print:text-black print:bg-white print:border-none">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors print:hidden"
            >
              ✕
            </button>

            {/* Certificate Header */}
            <div className="space-y-2 border-b border-white/10 pb-6 print:border-black">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#00d2ff]/20 border border-[#00d2ff] flex items-center justify-center text-[#00d2ff] shadow-[0_0_20px_#00d2ff] print:shadow-none">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white print:text-black">
                CERTIFICATE OF CHEMICAL DISCOVERY
              </h2>
              <p className="text-xs text-slate-400 font-mono tracking-widest uppercase print:text-slate-700">
                School Science Project • chemistry.umarkairat.kz
              </p>
            </div>

            {/* Certificate Body */}
            <div className="space-y-4 py-2">
              <p className="text-sm text-slate-300 leading-relaxed print:text-slate-800">
                This document certifies the successful synthesis and investigation of
              </p>
              <div className="text-4xl font-black font-mono text-[#00d2ff] tracking-tight print:text-blue-600">
                {discoveredCount} CHEMICAL SUBSTANCES
              </div>
              <p className="text-base font-bold text-white print:text-black">
                Attained Rank: <span className="text-[#edb1ff] print:text-purple-700">{rank[language]}</span>
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-mono pt-2">
                <span>Completed: {percent}% of Molecular Registry</span> • <span>All 118 Elements Explored</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-3 print:hidden">
              <button
                onClick={handlePrintCertificate}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-black bg-[#00d2ff] hover:brightness-110 shadow-lg font-mono transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Print Certificate</span>
              </button>
              <button
                onClick={() => setShowCertificate(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-white/5 border border-white/10 font-mono"
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
