"use client";

import React, { useState, useMemo } from "react";
import { ElementData, ElementCategory, StateOfMatter, Language } from "@/types/chemistry";
import { ELEMENTS_DATA, ELEMENTS_BY_NUMBER } from "@/data/elements";
import { ElementTile } from "./ElementTile";
import { ElementModal } from "./ElementModal";
import { getTranslation } from "@/data/i18n";
import { Search, Filter, X, Sparkles } from "lucide-react";

interface PeriodicTableProps {
  language: Language;
  onAddToLab: (symbol: string) => void;
  chamberAtoms: Record<string, number>;
  onElementInspected: (num: number) => void;
}

const CATEGORIES: ElementCategory[] = [
  'nonmetal',
  'noble-gas',
  'alkali-metal',
  'alkaline-earth',
  'metalloid',
  'halogen',
  'post-transition',
  'transition-metal',
  'lanthanide',
  'actinide'
];

export const PeriodicTable: React.FC<PeriodicTableProps> = ({
  language,
  onAddToLab,
  chamberAtoms,
  onElementInspected
}) => {
  const t = (k: string) => getTranslation(language, k);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ElementCategory | "all">("all");
  const [activePhase, setActivePhase] = useState<StateOfMatter | "all">("all");
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);

  const handleSelectElement = (el: ElementData) => {
    setSelectedElement(el);
    onElementInspected(el.number);
  };

  // Filter logic
  const isMatch = (el: ElementData): boolean => {
    if (activeCategory !== "all" && el.category !== activeCategory) return false;
    if (activePhase !== "all" && el.phase !== activePhase) return false;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      const numMatch = String(el.number) === q;
      const symMatch = el.symbol.toLowerCase().includes(q);
      const nameMatch = el.name[language].toLowerCase().includes(q) ||
                        el.name.en.toLowerCase().includes(q) ||
                        el.name.ru.toLowerCase().includes(q) ||
                        el.name.kk.toLowerCase().includes(q);
      return numMatch || symMatch || nameMatch;
    }
    return true;
  };

  // Standard 18-column Table Layout mapping:
  // Period 1: H (col 1), He (col 18)
  // Period 2: Li (1), Be (2), B (13) to Ne (18)
  // Period 3: Na (1), Mg (2), Al (13) to Ar (18)
  // Period 4: K (1) to Kr (18)
  // Period 5: Rb (1) to Xe (18)
  // Period 6: Cs (1), Ba (2), [57-71 placeholder], Hf (4) to Rn (18)
  // Period 7: Fr (1), Ra (2), [89-103 placeholder], Rf (4) to Og (18)
  // Lanthanides: 57 to 71
  // Actinides: 89 to 103

  const renderGridCell = (period: number, group: number) => {
    // Check specific positions
    if (period === 1) {
      if (group === 1) return ELEMENTS_BY_NUMBER.get(1);
      if (group === 18) return ELEMENTS_BY_NUMBER.get(2);
      return null;
    }
    if (period === 2) {
      if (group === 1) return ELEMENTS_BY_NUMBER.get(3);
      if (group === 2) return ELEMENTS_BY_NUMBER.get(4);
      if (group >= 13 && group <= 18) return ELEMENTS_BY_NUMBER.get(5 + (group - 13));
      return null;
    }
    if (period === 3) {
      if (group === 1) return ELEMENTS_BY_NUMBER.get(11);
      if (group === 2) return ELEMENTS_BY_NUMBER.get(12);
      if (group >= 13 && group <= 18) return ELEMENTS_BY_NUMBER.get(13 + (group - 13));
      return null;
    }
    if (period === 4) {
      return ELEMENTS_BY_NUMBER.get(19 + (group - 1));
    }
    if (period === 5) {
      return ELEMENTS_BY_NUMBER.get(37 + (group - 1));
    }
    if (period === 6) {
      if (group === 1) return ELEMENTS_BY_NUMBER.get(55);
      if (group === 2) return ELEMENTS_BY_NUMBER.get(56);
      if (group === 3) return "lanthanide-placeholder";
      if (group >= 4 && group <= 18) return ELEMENTS_BY_NUMBER.get(72 + (group - 4));
      return null;
    }
    if (period === 7) {
      if (group === 1) return ELEMENTS_BY_NUMBER.get(87);
      if (group === 2) return ELEMENTS_BY_NUMBER.get(88);
      if (group === 3) return "actinide-placeholder";
      if (group >= 4 && group <= 18) return ELEMENTS_BY_NUMBER.get(104 + (group - 4));
      return null;
    }
    return null;
  };

  const lanthanides = ELEMENTS_DATA.filter(e => e.number >= 57 && e.number <= 71);
  const actinides = ELEMENTS_DATA.filter(e => e.number >= 89 && e.number <= 103);

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-2 sm:px-4 py-4">
      {/* Search & Filter Controls Bar */}
      <div className="p-4 rounded-2xl bg-[#10141a] border border-white/10 space-y-3 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-[#181c22] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Stats Banner */}
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181c22] border border-white/5">
              <Sparkles className="w-3.5 h-3.5 text-[#00d2ff]" />
              <strong className="text-white">118</strong> {t("elementsCount")}
            </span>
            {activeCategory !== "all" && (
              <button
                onClick={() => setActiveCategory("all")}
                className="text-xs text-[#00d2ff] hover:underline flex items-center gap-1"
              >
                Reset filter <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
              activeCategory === "all"
                ? "bg-white text-black font-bold shadow-md"
                : "bg-[#181c22] text-slate-400 hover:text-white border border-white/5"
            }`}
          >
            {t("filterCategory")}
          </button>
          {CATEGORIES.map(cat => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(isSelected ? "all" : cat)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                  isSelected
                    ? "bg-[#00d2ff]/20 text-[#00d2ff] border-[#00d2ff] shadow-[0_0_10px_rgba(0,210,255,0.3)]"
                    : "bg-[#181c22] text-slate-300 border-white/5 hover:border-white/20"
                }`}
              >
                <span 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: ELEMENTS_DATA.find(e => e.category === cat)?.color }} 
                />
                <span>{t(cat)}</span>
              </button>
            );
          })}
        </div>

        {/* Phase of Matter Filter */}
        <div className="flex items-center gap-2 text-xs text-slate-400 pt-1 border-t border-white/5">
          <span className="font-mono text-[11px] uppercase tracking-wider">{t("phase")}:</span>
          {(["all", "gas", "liquid", "solid", "synthetic"] as (StateOfMatter | "all")[]).map(ph => (
            <button
              key={ph}
              onClick={() => setActivePhase(ph)}
              className={`px-2.5 py-1 rounded-md transition-colors capitalize ${
                activePhase === ph
                  ? "bg-[#00d2ff] text-black font-bold"
                  : "bg-[#181c22] text-slate-400 hover:text-white"
              }`}
            >
              {ph === "all" ? t("filterState") : t(ph)}
            </button>
          ))}
        </div>
      </div>

      {/* 18-Column Periodic Table Grid (Horizontal scrollable on mobile) */}
      <div className="overflow-x-auto pb-6">
        <div className="min-w-[960px] space-y-1.5">
          {/* Main 7 Periods */}
          {[1, 2, 3, 4, 5, 6, 7].map(period => (
            <div key={period} className="grid grid-cols-18 gap-1.5">
              {Array.from({ length: 18 }).map((_, colIdx) => {
                const group = colIdx + 1;
                const cell = renderGridCell(period, group);

                if (cell === null) {
                  return <div key={colIdx} className="aspect-square" />;
                }

                if (cell === "lanthanide-placeholder") {
                  return (
                    <div
                      key={colIdx}
                      className="aspect-square rounded-lg border border-dashed border-[#ec4899]/40 bg-[#ec4899]/10 flex flex-col items-center justify-center p-1 text-center select-none"
                    >
                      <span className="text-[10px] font-mono text-[#ec4899] font-bold">57-71</span>
                      <span className="text-[8px] text-slate-400 truncate leading-tight">La-Lu</span>
                    </div>
                  );
                }

                if (cell === "actinide-placeholder") {
                  return (
                    <div
                      key={colIdx}
                      className="aspect-square rounded-lg border border-dashed border-[#f43f5e]/40 bg-[#f43f5e]/10 flex flex-col items-center justify-center p-1 text-center select-none"
                    >
                      <span className="text-[10px] font-mono text-[#f43f5e] font-bold">89-103</span>
                      <span className="text-[8px] text-slate-400 truncate leading-tight">Ac-Lr</span>
                    </div>
                  );
                }

                // Element tile
                const el = cell as ElementData;
                const matched = isMatch(el);

                return (
                  <ElementTile
                    key={el.number}
                    element={el}
                    language={language}
                    onSelect={handleSelectElement}
                    onQuickAdd={onAddToLab}
                    isDimmed={!matched}
                    isSelected={selectedElement?.number === el.number}
                    labCount={chamberAtoms[el.symbol] || 0}
                  />
                );
              })}
            </div>
          ))}

          {/* Spacer */}
          <div className="h-4" />

          {/* Lanthanides Row (57-71) */}
          <div className="flex items-center gap-2">
            <div className="w-16 text-right text-[10px] font-mono text-[#ec4899] font-bold shrink-0">
              LANTHANIDES
            </div>
            <div className="grid grid-cols-15 gap-1.5 flex-1">
              {lanthanides.map(el => (
                <ElementTile
                  key={el.number}
                  element={el}
                  language={language}
                  onSelect={handleSelectElement}
                  onQuickAdd={onAddToLab}
                  isDimmed={!isMatch(el)}
                  isSelected={selectedElement?.number === el.number}
                  labCount={chamberAtoms[el.symbol] || 0}
                />
              ))}
            </div>
          </div>

          {/* Actinides Row (89-103) */}
          <div className="flex items-center gap-2">
            <div className="w-16 text-right text-[10px] font-mono text-[#f43f5e] font-bold shrink-0">
              ACTINIDES
            </div>
            <div className="grid grid-cols-15 gap-1.5 flex-1">
              {actinides.map(el => (
                <ElementTile
                  key={el.number}
                  element={el}
                  language={language}
                  onSelect={handleSelectElement}
                  onQuickAdd={onAddToLab}
                  isDimmed={!isMatch(el)}
                  isSelected={selectedElement?.number === el.number}
                  labCount={chamberAtoms[el.symbol] || 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Element Modal */}
      {selectedElement && (
        <ElementModal
          element={selectedElement}
          onClose={() => setSelectedElement(null)}
          onAddToLab={onAddToLab}
          language={language}
          inLabCount={chamberAtoms[selectedElement.symbol] || 0}
        />
      )}
    </div>
  );
};
