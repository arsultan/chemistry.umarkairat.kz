"use client";

import React from "react";
import { 
  X, 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Film, 
  GraduationCap, 
  QrCode, 
  Maximize, 
  RotateCcw, 
  SlidersHorizontal,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { Language } from "@/types/chemistry";
import { soundEffects } from "@/lib/soundEffects";

interface QuickControlModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  theme: "light" | "dark";
  onToggleTheme: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenIntro?: () => void;
  onOpenWelcome?: () => void;
  onOpenQR?: () => void;
  presentationMode: boolean;
  onTogglePresentation: () => void;
  onResetProgress: () => void;
}

export const QuickControlModal: React.FC<QuickControlModalProps> = ({
  isOpen,
  onClose,
  language,
  theme,
  onToggleTheme,
  soundEnabled,
  onToggleSound,
  onOpenIntro,
  onOpenWelcome,
  onOpenQR,
  presentationMode,
  onTogglePresentation,
  onResetProgress
}) => {
  if (!isOpen) return null;

  const t = {
    ru: {
      title: "Панель управления и опции",
      subtitle: "Все системные инструменты и модули в одном месте",
      theme: "Тема оформления",
      themeDark: "Тёмная тема",
      themeLight: "Светлая тема",
      sound: "Звуковые эффекты",
      soundOn: "Звук включен",
      soundOff: "Без звука",
      intro: "Видео-интро",
      introDesc: "Анимированная заставка",
      passport: "Паспорт исследования",
      passportDesc: "Научный паспорт проекта",
      qr: "QR для жюри",
      qrDesc: "Мобильная ссылка для комиссии",
      presentation: "Режим презентации",
      presentationDesc: "Развернуть на весь экран",
      reset: "Сбросить прогресс",
      resetDesc: "Очистить сохранения",
      resetConfirm: "Вы уверены, что хотите сбросить весь прогресс?",
      close: "Закрыть"
    },
    kk: {
      title: "Басқару панелі және құралдар",
      subtitle: "Барлық жүйелік модульдер бір жерде",
      theme: "Безендіру тақырыбы",
      themeDark: "Күңгірт тақырып",
      themeLight: "Жарық тақырып",
      sound: "Дыбыстық эффектілер",
      soundOn: "Дыбыс қосулы",
      soundOff: "Дыбыссыз",
      intro: "Бейне-интро",
      introDesc: "Анимациялық заставка",
      passport: "Зерттеу төлқұжаты",
      passportDesc: "Ғылыми жоба төлқұжаты",
      qr: "Қазылар алқасына QR",
      qrDesc: "Комиссияға арналған сілтеме",
      presentation: "Презентация режимі",
      presentationDesc: "Толық экранға шығару",
      reset: "Прогресті қайтару",
      resetDesc: "Сақталғанды өшіру",
      resetConfirm: "Барлық прогресті өшіргіңіз келетініне сенімдісіз бе?",
      close: "Жабу"
    },
    en: {
      title: "Quick Control Hub",
      subtitle: "System controls and auxiliary modules in one place",
      theme: "Interface Theme",
      themeDark: "Dark Mode",
      themeLight: "Light Mode",
      sound: "Audio FX",
      soundOn: "Sound Active",
      soundOff: "Muted",
      intro: "Video Intro",
      introDesc: "Replay animated splash",
      passport: "Research Passport",
      passportDesc: "Official academic sheet",
      qr: "Jury QR Code",
      qrDesc: "Instant mobile link for judges",
      presentation: "Presentation Mode",
      presentationDesc: "Enter fullscreen layout",
      reset: "Reset Progress",
      resetDesc: "Clear local save data",
      resetConfirm: "Are you sure you want to reset all progress?",
      close: "Close"
    }
  }[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-[#0f101d] text-slate-900 dark:text-white border border-slate-200 dark:border-[#7c6ff6]/25 shadow-2xl overflow-hidden font-sans"
      >
        {/* Top Gradient Header */}
        <div className="relative p-5 border-b border-slate-200 dark:border-[#7c6ff6]/20 bg-slate-50/80 dark:bg-[#14162b]/80 flex items-center justify-between">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7c6ff6] via-[#a59bfb] to-[#6366f1]" />
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#7c6ff6]/15 text-[#7c6ff6] dark:text-[#c4b5fd] flex items-center justify-center border border-[#7c6ff6]/30">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                {t.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition cursor-pointer"
            title={t.close}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 2-Column Grid of Unified Tools */}
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[70vh] overflow-y-auto no-scrollbar">
          
          {/* Theme Toggle */}
          <button
            onClick={() => {
              soundEffects.playAtomAdd();
              onToggleTheme();
            }}
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#171933] hover:bg-[#f5f3ff] dark:hover:bg-[#1f2244] border border-slate-200 dark:border-[#7c6ff6]/20 hover:border-[#7c6ff6]/50 transition text-left cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 dark:bg-amber-400/15 text-amber-500 dark:text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/20">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                {t.theme}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                {theme === "dark" ? t.themeDark : t.themeLight}
              </div>
            </div>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleSound();
            }}
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#171933] hover:bg-[#f5f3ff] dark:hover:bg-[#1f2244] border border-slate-200 dark:border-[#7c6ff6]/20 hover:border-[#7c6ff6]/50 transition text-left cursor-pointer group"
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
              soundEnabled 
                ? "bg-[#7c6ff6]/15 text-[#7c6ff6] dark:text-[#c4b5fd] border-[#7c6ff6]/30" 
                : "bg-slate-200 dark:bg-slate-800 text-slate-400 border-slate-300 dark:border-slate-700"
            }`}>
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                {t.sound}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                {soundEnabled ? t.soundOn : t.soundOff}
              </div>
            </div>
          </button>

          {/* Presentation Mode */}
          <button
            onClick={() => {
              soundEffects.playAtomAdd();
              onTogglePresentation();
              onClose();
            }}
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#171933] hover:bg-[#f5f3ff] dark:hover:bg-[#1f2244] border border-slate-200 dark:border-[#7c6ff6]/20 hover:border-[#7c6ff6]/50 transition text-left cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/20">
              <Maximize className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                {t.presentation}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                {t.presentationDesc}
              </div>
            </div>
          </button>

          {/* Video Intro */}
          {onOpenIntro && (
            <button
              onClick={() => {
                soundEffects.playAtomAdd();
                onOpenIntro();
                onClose();
              }}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#171933] hover:bg-[#f5f3ff] dark:hover:bg-[#1f2244] border border-slate-200 dark:border-[#7c6ff6]/20 hover:border-[#7c6ff6]/50 transition text-left cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/20">
                <Film className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {t.intro}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  {t.introDesc}
                </div>
              </div>
            </button>
          )}

          {/* Academic Research Passport */}
          {onOpenWelcome && (
            <button
              onClick={() => {
                soundEffects.playAtomAdd();
                onOpenWelcome();
                onClose();
              }}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#171933] hover:bg-[#f5f3ff] dark:hover:bg-[#1f2244] border border-slate-200 dark:border-[#7c6ff6]/20 hover:border-[#7c6ff6]/50 transition text-left cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {t.passport}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  {t.passportDesc}
                </div>
              </div>
            </button>
          )}

          {/* Jury QR Code */}
          {onOpenQR && (
            <button
              onClick={() => {
                soundEffects.playAtomAdd();
                onOpenQR();
                onClose();
              }}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#171933] hover:bg-[#f5f3ff] dark:hover:bg-[#1f2244] border border-slate-200 dark:border-[#7c6ff6]/20 hover:border-[#7c6ff6]/50 transition text-left cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <QrCode className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {t.qr}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  {t.qrDesc}
                </div>
              </div>
            </button>
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-200 dark:border-[#7c6ff6]/15 bg-slate-50/50 dark:bg-[#0e0f1c] flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Chemistry Explorer Platform</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#7c6ff6] hover:bg-[#6b5ce7] text-white text-xs font-bold font-mono transition cursor-pointer"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
