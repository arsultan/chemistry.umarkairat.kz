"use client";

import React from "react";
import { Language } from "@/types/chemistry";
import { soundEffects } from "@/lib/soundEffects";
import { 
  QrCode, 
  X, 
  ExternalLink, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  Globe 
} from "lucide-react";

interface JuryQRModalProps {
  language: Language;
  onClose: () => void;
}

export const JuryQRModal: React.FC<JuryQRModalProps> = ({
  language,
  onClose
}) => {
  const t = {
    title: {
      ru: "Онлайн-доступ для жюри и экспертов",
      kk: "Қазылар алқасы мен сарапшыларға арналған онлайн қолжетімділік",
      en: "Live Online Access for Jury and Experts"
    },
    subtitle: {
      ru: "Отсканируйте QR-код камерой смартфона, чтобы открыть интерактивную лабораторию прямо сейчас",
      kk: "Интерактивті зертхананы тікелей телефоныңызда ашу үшін QR-кодты сканерлеңіз",
      en: "Scan the QR code with your smartphone camera to open the live laboratory right now"
    },
    scannedFeatures: {
      ru: "Доступны все функции: 118 элементов, синтез 51 молекулы, таблица растворимости и квесты",
      kk: "Барлық мүмкіндіктер қолжетімді: 118 элемент, 51 молекула синтезі, ерігіштік кестесі және квесттер",
      en: "All features unlocked: 118 elements, 51 molecule syntheses, solubility chart, and quests"
    },
    author: {
      ru: "Автор: Кайрат Умар • NGS School (Алматы)",
      kk: "Авторы: Қайрат Омар • NGS School (Алматы)",
      en: "Author: Kairat Umar • NGS School (Almaty)"
    },
    close: {
      ru: "Закрыть",
      kk: "Жабу",
      en: "Close"
    },
    openInBrowser: {
      ru: "Открыть в браузере",
      kk: "Браузерде ашу",
      en: "Open in Browser"
    }
  };

  const siteUrl = "https://chemistry.umarkairat.kz";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(siteUrl)}&bgcolor=ffffff&color=0f172a&margin=10`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 dark:bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.1] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-center overflow-hidden">
        {/* Decorative ambient blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={() => {
            soundEffects.playAtomAdd();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-white/[0.08] transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Badge */}
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Jury Mobile Live Access</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
            {t.title[language]}
          </h3>

          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
            {t.subtitle[language]}
          </p>
        </div>

        {/* QR Code Container */}
        <div className="relative z-10 flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/80 dark:border-white/[0.08] shadow-inner">
          <div className="p-3 bg-white rounded-xl shadow-md border border-slate-200/60">
            <img 
              src={qrCodeUrl}
              alt="Chemistry Explorer QR Code"
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain rounded-lg"
            />
          </div>

          <div className="flex items-center gap-2 mt-3 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
            <Globe className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>chemistry.umarkairat.kz</span>
          </div>
        </div>

        {/* Author Details & Features */}
        <div className="space-y-3 relative z-10">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>{t.scannedFeatures[language]}</span>
          </div>

          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {t.author[language]}
          </p>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3 relative z-10">
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all active:scale-95 shadow-sm"
          >
            <span>{t.openInBrowser[language]}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => {
              soundEffects.playAtomAdd();
              onClose();
            }}
            className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all cursor-pointer"
          >
            {t.close[language]}
          </button>
        </div>
      </div>
    </div>
  );
};
