"use client";

import React from "react";
import { Language } from "@/types/chemistry";
import { getTranslation } from "@/data/i18n";
import { soundEffects } from "@/lib/soundEffects";
import { 
  FlaskConical, 
  TableProperties, 
  BookOpen, 
  Trophy, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw,
  Sparkles
} from "lucide-react";

interface HeaderProps {
  currentTab: 'table' | 'lab' | 'journal' | 'quests';
  setCurrentTab: (tab: 'table' | 'lab' | 'journal' | 'quests') => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  presentationMode: boolean;
  setPresentationMode: (val: boolean) => void;
  onResetProgress: () => void;
  discoveredCount: number;
  totalMolecules: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  language,
  setLanguage,
  soundEnabled,
  setSoundEnabled,
  presentationMode,
  setPresentationMode,
  onResetProgress,
  discoveredCount,
  totalMolecules
}) => {
  const t = (k: string) => getTranslation(language, k);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundEffects.enabled = next;
    if (next) soundEffects.playAtomAdd();
  };

  const handleTabChange = (tab: 'table' | 'lab' | 'journal' | 'quests') => {
    soundEffects.playAtomAdd();
    setCurrentTab(tab);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0b0f14]/90 backdrop-blur-md border-b border-white/10 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Brand & Logo */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d2ff]/20 to-[#edb1ff]/20 border border-[#00d2ff]/40 shadow-[0_0_15px_rgba(0,210,255,0.25)]">
              <FlaskConical className="w-5 h-5 text-[#00d2ff] animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#edb1ff] shadow-[0_0_8px_#edb1ff]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-white font-mono flex items-center gap-1.5">
                  CHEMISTRY<span className="text-[#00d2ff]">EXPLORER</span>
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#1c2026] text-[#a5e7ff] border border-[#00d2ff]/30">
                  Lab v2.0
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                {t("appSubtitle")}
              </p>
            </div>
          </div>

          {/* Mobile Sound & Lang controls */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg bg-[#181c22] border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Sound"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#00d2ff]" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>
            <div className="flex bg-[#181c22] rounded-lg p-0.5 border border-white/10 text-xs font-mono">
              {(['en', 'ru', 'kk'] as Language[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`px-2 py-1 rounded uppercase transition-colors ${language === l ? 'bg-[#00d2ff] text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 bg-[#10141a]/90 p-1 rounded-xl border border-white/10 overflow-x-auto">
          <button
            onClick={() => handleTabChange('table')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
              currentTab === 'table'
                ? 'bg-gradient-to-r from-[#00d2ff]/20 to-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/40 shadow-[0_0_12px_rgba(0,210,255,0.2)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <TableProperties className="w-4 h-4" />
            <span>{t("navTable")}</span>
          </button>

          <button
            onClick={() => handleTabChange('lab')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
              currentTab === 'lab'
                ? 'bg-gradient-to-r from-[#edb1ff]/20 to-[#edb1ff]/10 text-[#edb1ff] border border-[#edb1ff]/40 shadow-[0_0_12px_rgba(237,177,255,0.2)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FlaskConical className="w-4 h-4" />
            <span>{t("navLab")}</span>
          </button>

          <button
            onClick={() => handleTabChange('journal')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap relative ${
              currentTab === 'journal'
                ? 'bg-gradient-to-r from-[#10b981]/20 to-[#10b981]/10 text-[#34d399] border border-[#10b981]/40 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{t("navJournal")}</span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40">
              {discoveredCount}/{totalMolecules}
            </span>
          </button>

          <button
            onClick={() => handleTabChange('quests')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
              currentTab === 'quests'
                ? 'bg-gradient-to-r from-[#f59e0b]/20 to-[#f59e0b]/10 text-[#fbbf24] border border-[#f59e0b]/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>{t("navQuests")}</span>
          </button>
        </nav>

        {/* Right Tools: Language, Sound, Presentation, Reset */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Language Switcher */}
          <div className="flex bg-[#10141a] p-1 rounded-xl border border-white/10 font-mono text-xs">
            {(['en', 'ru', 'kk'] as Language[]).map(l => (
              <button
                key={l}
                onClick={() => setLanguage(l)}
                className={`px-2.5 py-1 rounded-lg uppercase transition-all ${
                  language === l
                    ? 'bg-[#00d2ff] text-[#0b0f14] font-bold shadow-[0_0_10px_rgba(0,210,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? t("soundOn") : t("soundOff")}
            className={`p-2 rounded-xl border transition-all ${
              soundEnabled
                ? 'bg-[#00d2ff]/10 border-[#00d2ff]/40 text-[#00d2ff] shadow-[0_0_10px_rgba(0,210,255,0.15)]'
                : 'bg-[#181c22] border-white/10 text-slate-500'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Presentation Mode Toggle */}
          <button
            onClick={() => setPresentationMode(!presentationMode)}
            title={t("presentationMode")}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
              presentationMode
                ? 'bg-[#edb1ff]/20 border-[#edb1ff] text-[#edb1ff] shadow-[0_0_15px_rgba(237,177,255,0.3)]'
                : 'bg-[#181c22] border-white/10 text-slate-300 hover:text-white hover:border-white/20'
            }`}
          >
            <Maximize className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">{t("presentationMode")}</span>
          </button>

          {/* Reset progress */}
          <button
            onClick={onResetProgress}
            title={t("resetProgress")}
            className="p-2 rounded-xl bg-[#181c22] border border-white/10 text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
