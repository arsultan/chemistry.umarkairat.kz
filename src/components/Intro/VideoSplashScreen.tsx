"use client";

import React, { useState, useEffect, useRef } from "react";
import { Language } from "@/types/chemistry";
import { soundEffects } from "@/lib/soundEffects";
import { 
  ChevronDown, 
  Sparkles, 
  Play, 
  X, 
  ArrowDown, 
  Mouse
} from "lucide-react";
import Image from "next/image";

interface VideoSplashScreenProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onEnter: () => void;
}

export const VideoSplashScreen: React.FC<VideoSplashScreenProps> = ({
  language,
  setLanguage,
  onEnter
}) => {
  const [isExiting, setIsExiting] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const t = {
    badge: {
      ru: "Интерактивный научный проект",
      kk: "Интерактивті ғылыми жоба",
      en: "Interactive Science Project"
    },
    title: {
      ru: "Chemistry Explorer",
      kk: "Chemistry Explorer",
      en: "Chemistry Explorer"
    },
    subtitle: {
      ru: "Добро пожаловать в виртуальную лабораторию химии!",
      kk: "Виртуалды химия зертханасына қош келдіңіз!",
      en: "Welcome to the Interactive Chemistry Laboratory!"
    },
    author: {
      ru: "Автор проекта: Кайрат Умар",
      kk: "Жоба авторы: Қайрат Омар",
      en: "Project by: Kairat Umar"
    },
    swipeText: {
      ru: "Свайпните вниз или нажмите, чтобы войти",
      kk: "Кіру үшін төмен сырғытыңыз немесе басыңыз",
      en: "Swipe down or click to enter"
    },
    enterBtn: {
      ru: "Войти в лабораторию",
      kk: "Зертханаға кіру",
      en: "Enter Laboratory"
    },
    skip: {
      ru: "Пропустить",
      kk: "Өткізіп жіберу",
      en: "Skip"
    }
  };

  const handleDismiss = () => {
    if (isExiting) return;
    soundEffects.playDiscovery();
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  // Handle Wheel Scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 20 || e.deltaY < -20) {
        handleDismiss();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['Space', 'Enter', 'ArrowDown', 'Escape'].includes(e.code)) {
        handleDismiss();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExiting]);

  // Touch Handlers for Mobile Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchEndY - touchStartY;

    // Detect swipe down or swipe up (> 40px)
    if (Math.abs(deltaY) > 40) {
      handleDismiss();
    }
    setTouchStartY(null);
  };

  return (
    <div 
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`fixed inset-0 z-[100] w-full h-full bg-black overflow-hidden select-none transition-all duration-700 ease-in-out ${
        isExiting ? '-translate-y-full opacity-0 pointer-events-none scale-105' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/intro.mp4"
        poster="/welcome_intro.jpg"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/60 pointer-events-none" />

      {/* Top Header Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
        {/* NGS Logo & Branding */}
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md p-1 border border-white/20 shadow-lg shrink-0">
            <Image
              src="/ngs-logo.png"
              alt="NGS School Logo"
              fill
              className="object-contain"
              sizes="44px"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-extrabold text-sm sm:text-base tracking-wide font-mono">
                {t.title[language]}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                v2.0
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-300 block">
              {t.author[language]}
            </span>
          </div>
        </div>

        {/* Right Controls: Language & Skip */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector */}
          <div className="flex items-center p-0.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/15">
            {(['ru', 'kk', 'en'] as Language[]).map(lang => (
              <button
                key={lang}
                onClick={() => {
                  soundEffects.playAtomAdd();
                  setLanguage(lang);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  language === lang
                    ? 'bg-white/20 text-white shadow-xs'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Skip Button */}
          <button
            onClick={handleDismiss}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-semibold border border-white/20 backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
          >
            <span>{t.skip[language]}</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Center / Bottom Hero Actions */}
      <div className="absolute inset-x-0 bottom-0 z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 text-center flex flex-col items-center gap-5">
        {/* Project Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-emerald-400 text-xs font-mono font-semibold shadow-xl animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.badge[language]}</span>
        </div>

        {/* Welcome Heading */}
        <div className="space-y-1.5 max-w-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
            {t.subtitle[language]}
          </h2>
          <p className="text-xs sm:text-sm text-slate-200/90 font-mono drop-shadow">
            118 элементов • 51 молекула • Таблица растворимости • Классификация веществ
          </p>
        </div>

        {/* Main Swipe Down Action & Enter Button */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <button
            onClick={handleDismiss}
            className="group relative flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 text-white font-mono font-bold text-sm sm:text-base shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>{t.enterBtn[language]}</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          {/* Swipe Indicator Text */}
          <div 
            onClick={handleDismiss}
            className="flex items-center gap-2 text-xs font-mono text-slate-300/80 hover:text-white transition-colors cursor-pointer pt-1 animate-pulse"
          >
            <Mouse className="w-3.5 h-3.5" />
            <span>{t.swipeText[language]}</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};
