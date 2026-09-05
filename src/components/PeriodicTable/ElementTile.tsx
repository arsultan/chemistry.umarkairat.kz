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
      className={`relative group cursor-pointer select-none rounded-lg p-1 transition-all duration-200 flex flex-col justify-between aspect-square border ${
        isDimmed ? "opacity-25 grayscale hover:opacity-100 hover:grayscale-0" : "opacity-100"
      } ${
        isSelected
          ? "ring-2 ring-[#00d2ff] scale-105 z-20 shadow-[0_0_18px_rgba(0,210,255,0.6)]"
          : "hover:scale-110 hover:z-20 hover:shadow-lg"
      }`}
      style={{
        backgroundColor: `${element.color}15`,
        borderColor: `${element.color}45`,
        boxShadow: isSelected ? `0 0 16px ${element.color}80` : `0 0 6px ${element.color}20`
      }}
      title={`${element.number}. ${element.name[language]} (${element.symbol}) - ${element.atomicMass}`}
    >
      {/* Top row: Number and Lab Badge */}
      <div className="flex items-center justify-between w-full leading-none">
        <span className="text-[9px] font-mono text-slate-400 font-semibold">
          {element.number}
        </span>
        {labCount > 0 && (
          <span 
            className="text-[9px] font-mono font-bold px-1 rounded-full text-black bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]"
            title={`${labCount} in chamber`}
          >
            {labCount}
          </span>
        )}
      </div>

      {/* Center: Symbol */}
      <div className="text-center my-auto">
        <span 
          className="text-sm sm:text-base font-black tracking-tight block font-mono"
          style={{ color: "#ffffff", textShadow: `0 0 8px ${element.color}` }}
        >
          {element.symbol}
        </span>
        <span className="text-[8px] sm:text-[9px] text-slate-300 truncate block max-w-full leading-tight font-medium">
          {element.name[language]}
        </span>
      </div>

      {/* Bottom: Atomic mass or Hover Quick-Add */}
      <div className="text-[8px] font-mono text-slate-400 text-center truncate leading-none">
        <span className="group-hover:hidden">{element.atomicMass}</span>
        <button
          onClick={handleQuickAdd}
          className="hidden group-hover:flex items-center justify-center w-full py-0.5 rounded bg-[#00d2ff] text-black font-bold text-[9px] hover:brightness-110 shadow-sm"
          title={`Add ${element.symbol} to Lab`}
        >
          <Plus className="w-2.5 h-2.5" />
        </button>
      </div>
    </div>
  );
};
