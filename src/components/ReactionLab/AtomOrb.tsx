"use client";

import React from "react";
import { ElementData } from "@/types/chemistry";
import { soundEffects } from "@/lib/soundEffects";
import { Plus, Minus, X } from "lucide-react";

interface AtomOrbProps {
  element: ElementData;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

export const AtomOrb: React.FC<AtomOrbProps> = ({
  element,
  count,
  onIncrement,
  onDecrement,
  onRemove
}) => {
  return (
    <div className="relative group flex flex-col items-center select-none animate-fadeIn">
      {/* Remove button badge */}
      <button
        onClick={() => {
          soundEffects.playAtomRemove();
          onRemove();
        }}
        className="absolute -top-2 -right-2 z-20 w-5 h-5 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center text-xs shadow-md transition-all scale-0 group-hover:scale-100"
        title={`Remove all ${element.symbol}`}
      >
        <X className="w-3 h-3" />
      </button>

      {/* Glowing Orbital Atom Sphere */}
      <div 
        className="relative w-20 h-20 rounded-full flex flex-col items-center justify-center border-2 shadow-2xl transition-transform hover:scale-105"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${element.color} 0%, rgba(16, 20, 26, 0.95) 75%)`,
          borderColor: element.color,
          boxShadow: `0 0 25px ${element.color}50, inset 0 0 15px ${element.color}40`
        }}
      >
        {/* Pulsing orbital ring */}
        <div 
          className="absolute -inset-1.5 rounded-full border border-dashed border-white/20 animate-spin"
          style={{ animationDuration: '14s' }}
        />

        <span className="text-[10px] font-mono text-slate-300 font-bold -mt-1">
          #{element.number}
        </span>
        <span 
          className="text-2xl font-black font-mono text-white tracking-wider"
          style={{ textShadow: `0 0 12px ${element.color}` }}
        >
          {element.symbol}
        </span>
      </div>

      {/* Count Controls (+ / -) */}
      <div className="flex items-center gap-1 mt-2.5 bg-[#181c22] border border-white/10 rounded-lg p-0.5 shadow-lg">
        <button
          onClick={() => {
            soundEffects.playAtomRemove();
            onDecrement();
          }}
          className="w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          title="Decrease count"
        >
          <Minus className="w-3 h-3" />
        </button>

        <span className="w-6 text-center font-mono font-bold text-sm text-white">
          {count}
        </span>

        <button
          onClick={() => {
            soundEffects.playAtomAdd();
            onIncrement();
          }}
          className="w-6 h-6 rounded flex items-center justify-center text-[#00d2ff] hover:text-white hover:bg-[#00d2ff]/20 transition-colors"
          title="Increase count"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
