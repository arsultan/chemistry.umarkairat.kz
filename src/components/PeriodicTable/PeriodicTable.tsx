"use client";

import React, { useState } from "react";
import { ElementData, ElementCategory, StateOfMatter, Language } from "@/types/chemistry";
import { ELEMENTS_DATA, ELEMENTS_BY_NUMBER } from "@/data/elements";
import { ElementTile } from "./ElementTile";
import { ElementModal } from "./ElementModal";
import { IslandOfStabilityModal } from "./IslandOfStabilityModal";
import { getTranslation } from "@/data/i18n";
import { 
  Search, 
  X, 
  Sparkles, 
  Rocket, 
  Compass, 
  Layers, 
  Atom, 
  Flame, 
  Zap, 
  Check 
} from "lucide-react";
import { soundEffects } from "@/lib/soundEffects";

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
  
  // New: 8th Period and Island of Stability state
  const [showPeriod8, setShowPeriod8] = useState(true);
  const [centuryFilter, setCenturyFilter] = useState(false);
  const [showIslandModal, setShowIslandModal] = useState(false);

  const handleSelectElement = (el: ElementData) => {
    setSelectedElement(el);
    onElementInspected(el.number);
  };

  // Filter logic
  const isMatch = (el: ElementData): boolean => {
    if (centuryFilter && el.number < 113) return false;
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

  const renderGridCell = (period: number, group: number) => {
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
    if (period === 8 && showPeriod8) {
      if (group === 1) return ELEMENTS_BY_NUMBER.get(119);
      if (group === 2) return ELEMENTS_BY_NUMBER.get(120);
      if (group === 3) return "superactinide-placeholder";
      return null;
    }
    return null;
  };

  const lanthanides = ELEMENTS_DATA.filter(e => e.number >= 57 && e.number <= 71);
  const actinides = ELEMENTS_DATA.filter(e => e.number >= 89 && e.number <= 103);
  const superactinides = ELEMENTS_DATA.filter(e => e.number >= 121 && e.number <= 126);

  const periodsToRender = showPeriod8 ? [1, 2, 3, 4, 5, 6, 7, 8] : [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="space-y-5 max-w-7xl mx-auto px-2 sm:px-4 py-3">
      {/* Search & Filter Controls Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] space-y-3 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mode Switcher & Nuclear Buttons */}
          <div className="flex items-center gap-2 flex-wrap w-full md:w-auto justify-end">
            {/* Period 8 Toggle */}
            <button
              onClick={() => {
                soundEffects.playAtomAdd();
                setShowPeriod8(!showPeriod8);
              }}
              className={`px-3 py-1.5 rounded-xl font-medium text-xs transition-all flex items-center gap-1.5 cursor-pointer border shadow-sm ${
                showPeriod8 
                  ? "bg-purple-600 text-white border-purple-500" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-white/10 hover:border-purple-400"
              }`}
              title="Переключить между классической таблицей Менделеева (1-118) и расширенной (8-й период: 119-126)"
            >
              <Rocket className="w-3.5 h-3.5 text-purple-300" />
              <span>{showPeriod8 ? t("extendedSeaborg") : t("standardIupac")}</span>
            </button>

            {/* Island of Stability Map Button */}
            <button
              onClick={() => {
                soundEffects.playAtomAdd();
                setShowIslandModal(true);
              }}
              className="px-3 py-1.5 rounded-xl font-medium text-xs transition-all flex items-center gap-1.5 cursor-pointer bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 hover:from-indigo-500/20 hover:to-pink-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 shadow-sm"
              title="Интерактивная карта нуклидов и Остров стабильности Сиборга-Оганесяна"
            >
              <Compass className="w-3.5 h-3.5 text-indigo-500" />
              <span className="hidden sm:inline">{t("islandOfStability")}</span>
              <span className="sm:hidden">Остров Z=126</span>
            </button>

            {/* Total Elements Count Banner */}
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.06] text-xs font-mono text-slate-600 dark:text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <strong className="text-slate-900 dark:text-white">
                {showPeriod8 ? 126 : 118}
              </strong>{" "}
              {t("elementsCount")}
            </span>
          </div>
        </div>

        {/* Categories Chips & XXI Century Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {/* Quick Highlight: 21st Century & Future */}
          <button
            onClick={() => {
              soundEffects.playAtomAdd();
              setCenturyFilter(!centuryFilter);
              if (!centuryFilter) setShowPeriod8(true);
            }}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-1.5 border cursor-pointer ${
              centuryFilter
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-500 shadow-sm font-semibold"
                : "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/20 hover:bg-purple-100"
            }`}
          >
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span>{t("latestElements")}</span>
          </button>

          <div className="w-px h-5 bg-slate-300 dark:bg-white/10 mx-1 shrink-0" />

          <button
            onClick={() => {
              setActiveCategory("all");
              setCenturyFilter(false);
            }}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === "all" && !centuryFilter
                ? "bg-slate-900 dark:bg-slate-800 text-white font-semibold shadow-sm border border-slate-900 dark:border-white/[0.12]"
                : "bg-slate-100 dark:bg-slate-950/40 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200/80 dark:border-white/[0.06]"
            }`}
          >
            {t("filterCategory")}
          </button>
          {CATEGORIES.map(cat => {
            const isSelected = activeCategory === cat && !centuryFilter;
            return (
              <button
                key={cat}
                onClick={() => {
                  setCenturyFilter(false);
                  setActiveCategory(isSelected ? "all" : cat);
                }}
                className={`px-2.5 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-1.5 border cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 dark:bg-slate-800 text-white border-slate-900 dark:border-white/[0.15] shadow-sm"
                    : "bg-slate-100 dark:bg-slate-950/40 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-white/[0.06] hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                <span 
                  className="w-1.5 h-1.5 rounded-full" 
                  style={{ backgroundColor: ELEMENTS_DATA.find(e => e.category === cat)?.color }} 
                />
                <span>{t(cat)}</span>
              </button>
            );
          })}
        </div>

        {/* Phase of Matter Filter */}
        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200/80 dark:border-white/[0.06]">
          <span className="font-mono text-[11px] uppercase tracking-wider mr-1">{t("phase")}:</span>
          {(["all", "gas", "liquid", "solid", "synthetic"] as (StateOfMatter | "all")[]).map(ph => (
            <button
              key={ph}
              onClick={() => setActivePhase(ph)}
              className={`px-2.5 py-0.5 rounded-md transition-colors capitalize cursor-pointer ${
                activePhase === ph
                  ? "bg-slate-900 dark:bg-slate-800 text-white font-medium shadow-sm"
                  : "bg-slate-100 dark:bg-slate-950/40 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              {ph === "all" ? t("filterState") : t(ph)}
            </button>
          ))}
        </div>
      </div>

      {/* 18-Column Periodic Table Grid */}
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[960px] space-y-1">
          {/* Main Periods (1-7 or 1-8) */}
          {periodsToRender.map(period => (
            <div key={period} className="grid grid-cols-18 gap-1">
              {Array.from({ length: 18 }).map((_, colIdx) => {
                const group = colIdx + 1;
                const cell = renderGridCell(period, group);

                if (cell === null) {
                  return <div key={`empty-${period}-${colIdx}`} className="aspect-square" />;
                }

                if (cell === "lanthanide-placeholder") {
                  return (
                    <div
                      key={`ph-lanthanide-${period}-${colIdx}`}
                      className="aspect-square rounded-xl border border-dashed border-pink-500/40 bg-pink-500/[0.06] flex flex-col items-center justify-center p-1 text-center select-none"
                    >
                      <span className="text-[9px] font-mono text-pink-600 dark:text-pink-400 font-semibold">57-71</span>
                      <span className="text-[8px] text-slate-500 truncate leading-tight">La-Lu</span>
                    </div>
                  );
                }

                if (cell === "actinide-placeholder") {
                  return (
                    <div
                      key={`ph-actinide-${period}-${colIdx}`}
                      className="aspect-square rounded-xl border border-dashed border-rose-500/40 bg-rose-500/[0.06] flex flex-col items-center justify-center p-1 text-center select-none"
                    >
                      <span className="text-[9px] font-mono text-rose-600 dark:text-rose-400 font-semibold">89-103</span>
                      <span className="text-[8px] text-slate-500 truncate leading-tight">Ac-Lr</span>
                    </div>
                  );
                }

                if (cell === "superactinide-placeholder") {
                  return (
                    <div
                      key={`ph-superactinide-${period}-${colIdx}`}
                      onClick={() => setShowIslandModal(true)}
                      className="aspect-square rounded-xl border border-dashed border-purple-500/50 bg-purple-500/[0.08] hover:bg-purple-500/[0.15] flex flex-col items-center justify-center p-1 text-center select-none cursor-pointer transition-colors shadow-sm"
                      title="Суперактиноиды 121-157 (g-блок). Нажмите, чтобы открыть карту Острова Стабильности"
                    >
                      <span className="text-[9px] font-mono text-purple-600 dark:text-purple-400 font-bold">121-157</span>
                      <span className="text-[8px] text-purple-500 truncate leading-tight">Ubu-... (5g)</span>
                    </div>
                  );
                }

                // Element tile
                const el = cell as ElementData;
                const matched = isMatch(el);

                return (
                  <ElementTile
                    key={`element-${el.number}`}
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
          <div className="h-3" />

          {/* Lanthanides Row (57-71) */}
          <div className="flex items-center gap-2">
            <div className="w-24 text-right text-[10px] font-mono text-pink-600 dark:text-pink-400/90 font-semibold uppercase shrink-0">
              {t("lanthanide")}
            </div>
            <div className="grid grid-cols-15 gap-1 flex-1">
              {lanthanides.map(el => (
                <ElementTile
                  key={`lanthanide-${el.number}`}
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
            <div className="w-24 text-right text-[10px] font-mono text-rose-600 dark:text-rose-400/90 font-semibold uppercase shrink-0">
              {t("actinide")}
            </div>
            <div className="grid grid-cols-15 gap-1 flex-1">
              {actinides.map(el => (
                <ElementTile
                  key={`actinide-${el.number}`}
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

          {/* Period 8 Superactinides & Island of Stability Row (121-126) */}
          {showPeriod8 && (
            <div className="flex items-center gap-2 pt-1">
              <div className="w-24 text-right text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold uppercase shrink-0">
                8-й ПЕРИОД / 5g
              </div>
              <div className="grid grid-cols-15 gap-1 flex-1">
                {superactinides.map(el => (
                  <ElementTile
                    key={`superactinide-${el.number}`}
                    element={el}
                    language={language}
                    onSelect={handleSelectElement}
                    onQuickAdd={onAddToLab}
                    isDimmed={!isMatch(el)}
                    isSelected={selectedElement?.number === el.number}
                    labCount={chamberAtoms[el.symbol] || 0}
                  />
                ))}

                {/* Placeholders for 123-125, 127-135 */}
                <div 
                  onClick={() => setShowIslandModal(true)}
                  className="col-span-11 p-2 rounded-xl border border-dashed border-purple-500/30 bg-purple-500/[0.03] hover:bg-purple-500/[0.08] flex items-center justify-between px-4 text-xs font-mono text-purple-600 dark:text-purple-400 cursor-pointer transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5" />
                    <strong>123–157: Зона гипотетических суперактиноидов (g-блок)</strong>
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Открыть карту Острова Стабильности →
                  </span>
                </div>
              </div>
            </div>
          )}
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

      {/* Island of Stability & Nuclear Map Modal */}
      <IslandOfStabilityModal
        isOpen={showIslandModal}
        onClose={() => setShowIslandModal(false)}
        language={language}
      />
    </div>
  );
};
