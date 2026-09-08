"use client";

import React from "react";
import { ElementData } from "@/types/chemistry";
import { soundEffects } from "@/lib/soundEffects";
import { Plus, Minus, X, Info } from "lucide-react";

interface AtomOrbProps {
  element: ElementData;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
  onInspect?: (element: ElementData) => void;
}

export const AtomOrb: React.FC<AtomOrbProps> = ({
  element,
  count,
  onIncrement,
  onDecrement,
  onRemove,
  onInspect
}) => {
  const handleInspect = () => {
    soundEffects.playAtomAdd();
    if (onInspect) {
      onInspect(element);
    }
  };

  return (
    <div className="relative group flex flex-col items-center select-none animate-fadeIn">
      {/* Remove button badge */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          soundEffects.playAtomRemove();
          onRemove();
        }}
        className="absolute -top-2 -right-2 z-20 w-5 h-5 rounded-full bg-slate-200 hover:bg-rose-600 dark:bg-slate-800 dark:hover:bg-rose-600 text-slate-700 hover:text-white dark:text-slate-300 dark:hover:text-white border border-slate-300 dark:border-white/[0.1] flex items-center justify-center text-xs shadow-sm transition-all scale-0 group-hover:scale-100 cursor-pointer"
        title={`Remove all ${element.symbol}`}
      >
        <X className="w-3 h-3" />
      </button>

      {/* Info inspect badge on top-left */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleInspect();
        }}
        className="absolute -top-2 -left-2 z-20 w-5 h-5 rounded-full bg-slate-200 hover:bg-indigo-600 dark:bg-slate-800 dark:hover:bg-indigo-600 text-slate-700 hover:text-white dark:text-slate-300 dark:hover:text-white border border-slate-300 dark:border-white/[0.1] flex items-center justify-center text-xs shadow-sm transition-all scale-0 group-hover:scale-100 cursor-pointer"
        title={`Строение атома ${element.symbol} (Модель Бора)`}
      >
        <Info className="w-3 h-3" />
      </button>

      {/* Refined Satin Atom Sphere */}
      <div 
        onClick={handleInspect}
        className="relative w-20 h-20 rounded-2xl flex flex-col items-center justify-center border transition-all hover:scale-105 group-hover:border-slate-400 dark:group-hover:border-white/[0.3] cursor-pointer shadow-md"
        style={{
          background: `linear-gradient(145deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)`,
          borderColor: `${element.color}60`,
          boxShadow: `0 4px 20px -2px rgba(0, 0, 0, 0.3), 0 0 15px ${element.color}25, inset 0 1px 0 rgba(255, 255, 255, 0.15)`
        }}
        title={`Нажмите, чтобы открыть строение атома ${element.name.ru} (${element.symbol})`}
      >
        {/* Accent color bar */}
        <div 
          className="absolute top-2 w-4 h-1 rounded-full opacity-80"
          style={{ backgroundColor: element.color }}
        />

        <span className="text-[10px] font-mono text-slate-400 font-medium mt-1">
          {element.number}
        </span>
        <span 
          className="text-2xl font-black font-mono text-white tracking-tight"
        >
          {element.symbol}
        </span>

        {/* Subtle inspect hint on hover */}
        <span className="text-[8px] font-mono text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity -mt-0.5">
          модель Бора
        </span>
      </div>

      {/* Count Controls (+ / -) */}
      <div className="flex items-center gap-1 mt-2.5 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/[0.08] rounded-lg p-0.5 shadow-sm">
        <button
          onClick={(e) => {
            e.stopPropagation();
            soundEffects.playAtomRemove();
            onDecrement();
          }}
          className="w-6 h-6 rounded flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
          title="Уменьшить количество"
        >
          <Minus className="w-3 h-3" />
        </button>

        <span className="w-6 text-center font-mono font-semibold text-xs text-slate-900 dark:text-white">
          {count}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            soundEffects.playAtomAdd();
            onIncrement();
          }}
          className="w-6 h-6 rounded flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:text-white hover:bg-indigo-600 transition-colors cursor-pointer"
          title="Увеличить количество"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
