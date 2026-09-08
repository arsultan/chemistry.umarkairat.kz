"use client";

import React, { useState } from "react";
import { Language } from "@/types/chemistry";
import { getTranslation } from "@/data/i18n";
import { soundEffects } from "@/lib/soundEffects";
import { 
  FlaskConical, 
  TableProperties, 
  BookOpen, 
  Trophy, 
  Layers, 
  Grid3X3, 
  SlidersHorizontal,
  Sun,
  Moon,
  Sparkles
} from "lucide-react";
import { QuickControlModal } from "./QuickControlModal";

interface HeaderProps {
  currentTab: 'table' | 'lab' | 'solubility' | 'classification' | 'journal' | 'quests';
  setCurrentTab: (tab: 'table' | 'lab' | 'solubility' | 'classification' | 'journal' | 'quests') => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
  presentationMode: boolean;
  setPresentationMode: (val: boolean) => void;
  onResetProgress: () => void;
  discoveredCount: number;
  totalMolecules: number;
  onOpenWelcome?: () => void;
  onOpenIntro?: () => void;
  onOpenAi?: () => void;
  onOpenQR?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  language,
  setLanguage,
  soundEnabled,
  setSoundEnabled,
  theme,
  setTheme,
  presentationMode,
  setPresentationMode,
  onResetProgress,
  discoveredCount,
  totalMolecules,
  onOpenWelcome,
  onOpenIntro,
  onOpenAi,
  onOpenQR
}) => {
  const [showQuickHub, setShowQuickHub] = useState(false);
  const t = (k: string) => getTranslation(language, k);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundEffects.enabled = next;
    if (next) soundEffects.playAtomAdd();
  };

  const toggleTheme = () => {
    soundEffects.playAtomAdd();
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  const handleTabChange = (tab: 'table' | 'lab' | 'solubility' | 'classification' | 'journal' | 'quests') => {
    soundEffects.playAtomAdd();
    setCurrentTab(tab);
  };

  const tabs = [
    {
      id: 'lab' as const,
      label: t("navLab"),
      icon: FlaskConical,
      color: "text-[#7c6ff6]",
      activeBg: "border-[#7c6ff6]/30 text-[#7c6ff6]"
    },
    {
      id: 'table' as const,
      label: t("navTable"),
      icon: TableProperties,
      color: "text-cyan-500",
      activeBg: "border-cyan-500/30 text-cyan-600 dark:text-cyan-400"
    },
    {
      id: 'solubility' as const,
      label: t("navSolubility"),
      icon: Grid3X3,
      color: "text-emerald-500",
      activeBg: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
    },
    {
      id: 'classification' as const,
      label: t("navClassification"),
      icon: Layers,
      color: "text-purple-500",
      activeBg: "border-purple-500/30 text-purple-600 dark:text-purple-400"
    },
    {
      id: 'journal' as const,
      label: t("navJournal"),
      icon: BookOpen,
      color: "text-emerald-500",
      activeBg: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400",
      badge: `${discoveredCount}/${totalMolecules}`
    },
    {
      id: 'quests' as const,
      label: t("navQuests"),
      icon: Trophy,
      color: "text-amber-500",
      activeBg: "border-amber-500/30 text-amber-600 dark:text-amber-400"
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/90 dark:bg-[#0b0c16]/90 border-b border-slate-200/80 dark:border-white/[0.08] transition-colors">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex flex-col gap-2">
          
          {/* Upper Tier: Brand + Language + CHEMISTRY LAB AI + Single Unified Control Widget */}
          <div className="flex items-center justify-between">
            {/* Left: Brand Identity with NGS Crest & Author Badge */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* NGS Crest Badge */}
              {onOpenWelcome ? (
                <button
                  onClick={onOpenWelcome}
                  className="relative flex items-center justify-center w-10 h-12 sm:w-11 sm:h-13 p-1 rounded-xl bg-slate-100/90 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-white/[0.09] hover:border-[#7c6ff6]/40 shadow-sm transition-all group shrink-0 cursor-pointer"
                  title="New Generation School (NGS)"
                >
                  <img
                    src="/ngs-logo.png"
                    alt="NGS School"
                    className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
                  />
                </button>
              ) : (
                <div className="relative flex items-center justify-center w-10 h-12 sm:w-11 sm:h-13 p-1 rounded-xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.09] shrink-0">
                  <img src="/ngs-logo.png" alt="NGS School" className="w-full h-full object-contain" />
                </div>
              )}

              <div className="h-7 w-[1px] bg-slate-200 dark:bg-white/[0.08] hidden sm:block" />

              <div 
                onClick={() => handleTabChange('lab')} 
                className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#7c6ff6]/10 dark:bg-indigo-500/10 border border-[#7c6ff6]/20 text-[#7c6ff6] dark:text-indigo-400 shrink-0 cursor-pointer hover:scale-105 transition-transform"
              >
                <FlaskConical className="w-4.5 h-4.5" />
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span 
                    onClick={() => handleTabChange('lab')}
                    className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white font-mono flex items-center gap-1 cursor-pointer"
                  >
                    CHEMISTRY<span className="text-[#7c6ff6] dark:text-indigo-400 font-semibold">LAB</span>
                  </span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]">
                    v2.0
                  </span>
                  {onOpenWelcome && (
                    <button
                      onClick={onOpenWelcome}
                      className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/[0.09] hover:border-[#7c6ff6]/40 text-[11px] font-mono text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
                      title="New Generation School (NGS)"
                    >
                      <Sparkles className="w-3 h-3 text-[#7c6ff6] dark:text-indigo-400" />
                      <span>{t("authorBadge")}</span>
                    </button>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block mt-0.5">
                  {t("appSubtitle")}
                </p>
              </div>
            </div>

            {/* Right: Controls Toolbar */}
            <div className="flex items-center gap-2">
              
              {/* Language Switcher */}
              <div className="flex bg-slate-100 dark:bg-slate-900/90 p-0.5 rounded-xl border border-slate-200/80 dark:border-white/[0.07] font-mono text-xs shadow-sm">
                {(['en', 'ru', 'kk'] as Language[]).map(l => (
                  <button
                    key={l}
                    onClick={() => setLanguage(l)}
                    className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg uppercase text-[11px] transition-all cursor-pointer ${
                      language === l
                        ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-sm border border-slate-200 dark:border-white/[0.12]'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              {/* Direct Theme Switcher (Sun/Moon) */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-100 dark:bg-slate-900/90 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                title={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-500 hover:-rotate-12 transition-transform" />
                )}
              </button>

              {/* CHEMISTRY LAB AI Button */}
              {onOpenAi && (
                <button
                  onClick={onOpenAi}
                  title="CHEMISTRY LAB AI"
                  className="group relative flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-[#14162e] hover:bg-[#f5f3ff] dark:hover:bg-[#1d2042] border border-slate-200 dark:border-[#7c6ff6]/30 hover:border-[#7c6ff6] text-slate-900 dark:text-white transition-all cursor-pointer shadow-sm hover:shadow-[0_0_18px_rgba(124,111,246,0.3)] text-xs font-bold font-mono hover:scale-105 active:scale-95"
                >
                  <div className="relative w-5 h-5 rounded-full overflow-hidden border border-[#a59bfb]/90 shrink-0 shadow-sm">
                    <img
                      src="/images/ai_avatar.jpg"
                      alt="AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-1 font-sans">
                    <span className="font-extrabold tracking-tight text-slate-900 dark:text-white text-xs">
                      CHEMISTRY
                    </span>
                    <span className="font-extrabold tracking-tight text-[#7c6ff6] dark:text-[#a59bfb] text-xs">
                      LAB
                    </span>
                    <span className="px-1 py-0.2 text-[9px] font-black rounded bg-[#7c6ff6]/15 text-[#7c6ff6] dark:text-[#c4b5fd] border border-[#7c6ff6]/30">
                      AI
                    </span>
                  </div>
                </button>
              )}

              {/* Single Consolidated Control Hub Widget (⚙️ / 🎛) */}
              <button
                onClick={() => {
                  soundEffects.playAtomAdd();
                  setShowQuickHub(true);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 transition-all cursor-pointer shadow-sm text-xs font-mono font-medium hover:scale-105 active:scale-95"
                title="Опции и инструменты"
                aria-label="Quick Hub"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7c6ff6]" />
                <span className="hidden sm:inline font-bold text-xs">
                  {language === 'kk' ? 'Басқару' : language === 'en' ? 'Hub' : 'Опции'}
                </span>
              </button>
            </div>
          </div>

          {/* Lower Tier: Centered Luxury Segmented Navigation Dock */}
          <div className="w-full flex justify-center pt-0.5">
            <nav className="w-full sm:w-auto flex items-center justify-between sm:justify-center gap-1 p-1 bg-slate-100/95 dark:bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-white/[0.08] shadow-inner dark:shadow-none overflow-x-auto no-scrollbar">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = currentTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer select-none ${
                      isActive
                        ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm border border-slate-200/90 dark:border-white/[0.14] font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? tab.color : 'text-slate-500 dark:text-slate-400'}`} />
                    <span>{tab.label}</span>
                    {tab.badge && (
                      <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold border ${
                        isActive 
                          ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' 
                          : 'bg-slate-200/70 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-300/60 dark:border-white/[0.06]'
                      }`}>
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Single Consolidated Quick Control Modal */}
      <QuickControlModal
        isOpen={showQuickHub}
        onClose={() => setShowQuickHub(false)}
        language={language}
        theme={theme}
        onToggleTheme={toggleTheme}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onOpenIntro={onOpenIntro}
        onOpenWelcome={onOpenWelcome}
        onOpenQR={onOpenQR}
        presentationMode={presentationMode}
        onTogglePresentation={() => setPresentationMode(!presentationMode)}
        onResetProgress={onResetProgress}
      />
    </>
  );
};
