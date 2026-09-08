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
  Mouse,
  Smartphone
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
      ru: "Интерактивный научный проект • NGS",
      kk: "Интерактивті ғылыми жоба • NGS",
      en: "Interactive Science Project • NGS"
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
    features: {
      ru: "118 элементов • 51 молекула • Таблица растворимости • ИИ",
      kk: "118 элемент • 51 молекула • Ерігіштік кестесі • ИИ",
      en: "118 Elements • 51 Molecules • Solubility Table • AI"
    },
    author: {
      ru: "Автор: Кайрат Умар",
      kk: "Авторы: Қайрат Омар",
      en: "By: Kairat Umar"
    },
    swipeTextMobile: {
      ru: "Нажмите в любом месте для входа",
      kk: "Кіру үшін экранды басыңыз",
      en: "Tap anywhere to enter"
    },
    swipeTextDesktop: {
      ru: "Скролльте или нажмите, чтобы войти",
      kk: "Кіру үшін төмен сырғытыңыз немесе басыңыз",
      en: "Scroll down or click to enter"
    },
    enterBtn: {
      ru: "Войти в лабораторию",
      kk: "Зертханаға кіру",
      en: "Enter Laboratory"
    },
    skip: {
      ru: "Пропустить",
      kk: "Өткізу",
      en: "Skip"
    }
  };

  const handleDismiss = () => {
    if (isExiting) return;
    soundEffects.playDiscovery();
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 550);
  };

  // Handle Wheel Scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 20) {
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

  // Touch Handlers for Mobile Swipe & Tap
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchEndY - touchStartY;

    // Detect swipe or tap
    if (Math.abs(deltaY) > 30) {
      handleDismiss();
    }
    setTouchStartY(null);
  };

  return (
    <div 
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`fixed inset-0 z-[100] w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh] bg-black overflow-hidden select-none transition-all duration-700 ease-in-out flex flex-col justify-between ${
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
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Cinematic Responsive Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none backdrop-blur-[0.5px]" />

      {/* Top Header Bar with Safe-Area Inset */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-6 pt-3 sm:pt-5 pb-2 flex items-center justify-between gap-2">
        {/* NGS Logo & Branding */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-white/10 backdrop-blur-md p-1 border border-white/20 shadow-md shrink-0">
            <Image
              src="/ngs-logo.png"
              alt="NGS School Logo"
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-white font-extrabold text-xs sm:text-base tracking-tight font-sans truncate">
                {t.title[language]}
              </span>
              <span className="px-1.5 py-0.2 rounded-full text-[9px] sm:text-[10px] font-mono font-bold bg-[#7c6ff6]/30 text-[#c4b5fd] border border-[#7c6ff6]/40 shrink-0">
                v2.0
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-300/90 truncate block">
              {t.author[language]}
            </span>
          </div>
        </div>

        {/* Right Controls: Language & Skip */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Language Selector */}
          <div className="flex items-center p-0.5 bg-black/50 backdrop-blur-md rounded-xl border border-white/15">
            {(['ru', 'kk', 'en'] as Language[]).map(lang => (
              <button
                key={lang}
                onClick={(e) => {
                  e.stopPropagation();
                  soundEffects.playAtomAdd();
                  setLanguage(lang);
                }}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  language === lang
                    ? 'bg-white/25 text-white shadow-xs'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Skip Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDismiss();
            }}
            className="flex items-center gap-1 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] sm:text-xs font-mono font-semibold border border-white/20 backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-md"
            title="Skip Intro"
          >
            <span className="hidden xs:inline sm:inline">{t.skip[language]}</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Center Spacer / Ambient Tap Target */}
      <div 
        onClick={handleDismiss} 
        className="relative z-10 flex-1 w-full flex items-center justify-center cursor-pointer"
      >
        <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white/80 text-xs font-mono shadow-xl animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-[#a59bfb]" />
          <span>{t.badge[language]}</span>
        </div>
      </div>

      {/* Bottom Hero & Actions with Safe Area Padding */}
      <div className="relative z-20 w-full max-w-2xl mx-auto px-4 sm:px-6 pb-6 sm:pb-10 text-center flex flex-col items-center gap-3 sm:gap-4">
        
        {/* Mobile Badge */}
        <div className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#c4b5fd] text-[10px] font-mono font-semibold shadow-lg">
          <Sparkles className="w-3 h-3 text-[#a59bfb]" />
          <span>{t.badge[language]}</span>
        </div>

        {/* Welcome Title & Subtitle */}
        <div className="space-y-1 max-w-lg">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] leading-tight font-sans">
            {t.subtitle[language]}
          </h1>
          <p className="text-[11px] sm:text-sm text-slate-200/90 font-mono drop-shadow line-clamp-1 sm:line-clamp-none">
            {t.features[language]}
          </p>
        </div>

        {/* Main Action Button */}
        <div className="w-full max-w-xs sm:max-w-sm pt-1">
          <button
            onClick={handleDismiss}
            className="group relative w-full flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-[#6366f1] via-[#7c6ff6] to-[#a59bfb] text-white font-mono font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(124,111,246,0.5)] hover:shadow-[0_0_35px_rgba(124,111,246,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-white/25 overflow-hidden"
          >
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <Play className="w-4 h-4 fill-white" />
            <span>{t.enterBtn[language]}</span>
            <ArrowDown className="w-4 h-4 animate-bounce hidden sm:inline" />
          </button>
        </div>

        {/* Swipe / Tap Hint Text */}
        <div 
          onClick={handleDismiss}
          className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-mono text-slate-300/80 hover:text-white transition-colors cursor-pointer pt-0.5"
        >
          {/* Mobile indicator */}
          <span className="sm:hidden flex items-center gap-1 text-[#c4b5fd] animate-pulse">
            <Smartphone className="w-3 h-3" />
            {t.swipeTextMobile[language]}
          </span>
          {/* Desktop indicator */}
          <span className="hidden sm:flex items-center gap-1">
            <Mouse className="w-3.5 h-3.5" />
            {t.swipeTextDesktop[language]}
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </span>
        </div>
      </div>
    </div>
  );
};
