"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { Language } from "@/types/chemistry";
import { soundEffects } from "@/lib/soundEffects";

interface AiTriggerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  language: Language;
}

export const AiTriggerButton: React.FC<AiTriggerButtonProps> = ({
  isOpen,
  onToggle,
  language
}) => {
  if (isOpen) return null;

  const handleClick = () => {
    soundEffects.playAtomAdd();
    onToggle();
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <button
        onClick={handleClick}
        className="group relative flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-full bg-white dark:bg-[#0f101d] text-slate-900 dark:text-white border border-[#7c6ff6]/40 hover:border-[#7c6ff6] shadow-[0_4px_25px_rgba(124,111,246,0.22)] hover:shadow-[0_8px_35px_rgba(124,111,246,0.4)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
        title="Open CHEMISTRY LAB AI"
      >
        {/* Soft violet ambient gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7c6ff6]/15 via-[#a59bfb]/15 to-[#6366f1]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Subtle glowing ring */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7c6ff6] via-[#a59bfb] to-[#6366f1] opacity-20 blur-sm group-hover:opacity-50 transition duration-500" />

        {/* Mascot Avatar Thumbnail */}
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-[#a59bfb]/90 shadow-[0_0_10px_rgba(124,111,246,0.35)] shrink-0">
          <img
            src="/images/ai_avatar.jpg"
            alt="CHEMISTRY LAB AI Avatar"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Styled Logo: CHEMISTRY LAB AI */}
        <div className="relative flex flex-col text-left pr-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs sm:text-sm font-black tracking-tight font-sans text-slate-900 dark:text-white">
              CHEMISTRY
            </span>
            <span className="text-xs sm:text-sm font-black tracking-tight font-sans text-[#7c6ff6] dark:text-[#a59bfb]">
              LAB
            </span>
            <span className="px-1.5 py-0.5 text-[10px] font-extrabold uppercase rounded bg-[#7c6ff6]/15 text-[#7c6ff6] dark:text-[#c4b5fd] border border-[#7c6ff6]/30">
              AI
            </span>
          </div>
          <span className="text-[10px] text-slate-500 dark:text-[#c4b5fd]/80 font-mono">
            {language === 'kk' ? 'Химиялық кеңесші' : language === 'en' ? 'Smart Copilot' : 'ИИ-наставник по химии'}
          </span>
        </div>
      </button>
    </div>
  );
};
