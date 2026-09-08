"use client";

import React from "react";
import { ElementData, Language } from "@/types/chemistry";
import { soundEffects } from "@/lib/soundEffects";
import { Plus } from "lucide-react";

interface ElementTileProps {
  element: ElementData;
  language: Language;
  onSelect: (el: ElementData) => void;
  onQuickAdd: (sym: string, e: React.MouseEvent) => void;
  isDimmed?: boolean;
  isSelected?: boolean;
  labCount?: number;
}

export const ElementTile: React.FC<ElementTileProps> = ({
  element,
  language,
  onSelect,
  onQuickAdd,
  isDimmed = false,
  isSelected = false,
  labCount = 0
}) => {
  const handleClick = () => {
    soundEffects.playAtomAdd();
    onSelect(element);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playAtomAdd();
    onQuickAdd(element.symbol, e);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative group cursor-pointer select-none rounded-xl p-1 sm:p-1.5 transition-all duration-200 flex flex-col justify-between aspect-square border shadow-sm dark:shadow-none ${
        isDimmed 
          ? "opacity-20 grayscale hover:opacity-100 hover:grayscale-0 bg-slate-100/50 dark:bg-slate-950/40 border-slate-200 dark:border-white/[0.04]" 
          : "opacity-100 bg-white hover:bg-slate-50 dark:bg-slate-900/90 dark:hover:bg-slate-800/90 border-slate-200/90 dark:border-white/[0.07] hover:border-slate-400 dark:hover:border-white/[0.2]"
      } ${
        isSelected
          ? "ring-1.5 ring-indigo-500 bg-indigo-50 dark:bg-slate-800 scale-105 z-20 shadow-md border-indigo-500/50"
          : "hover:scale-105 hover:z-20 hover:shadow-md"
      }`}
      title={`${element.number}. ${element.name[language]} (${element.symbol}) - ${element.atomicMass}`}
    >
      {/* Top category color bar */}
      <span 
        className="absolute top-1 left-1.5 right-1.5 h-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: element.color }}
      />

      {/* Top row: Number and Lab Badge */}
      <div className="flex items-center justify-between w-full leading-none mt-0.5">
        <span className="text-[9px] font-mono text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-400 font-medium">
          {element.number}
        </span>
        {labCount > 0 && (
          <span 
            className="text-[8px] font-mono font-bold px-1 rounded-full text-white bg-indigo-600 shadow-sm"
            title={`${labCount} in chamber`}
          >
            {labCount}
          </span>
        )}
      </div>

      {/* Center: Symbol */}
      <div className="text-center my-auto">
        <span 
          className="text-xs sm:text-sm font-bold tracking-tight block font-mono text-slate-900 dark:text-white"
        >
          {element.symbol}
        </span>
        <span className="text-[8px] text-slate-600 dark:text-slate-400 truncate block max-w-full leading-tight font-normal">
          {element.name[language]}
        </span>
      </div>

      {/* Bottom: Atomic mass or Hover Quick-Add */}
      <div className="text-[8px] font-mono text-slate-400 dark:text-slate-500 text-center truncate leading-none">
        <span className="group-hover:hidden">{element.atomicMass}</span>
        <button
          onClick={handleQuickAdd}
          className="hidden group-hover:flex items-center justify-center w-full py-0.5 rounded bg-indigo-600 text-white font-medium text-[8px] hover:bg-indigo-500 shadow-sm transition-colors cursor-pointer"
          title={`Add ${element.symbol} to Lab`}
        >
          <Plus className="w-2.5 h-2.5" />
        </button>
      </div>
    </div>
  );
};
