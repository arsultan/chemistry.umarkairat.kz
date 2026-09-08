"use client";

import React, { useState } from "react";
import { Language } from "@/types/chemistry";
import { getTranslation } from "@/data/i18n";
import { soundEffects } from "@/lib/soundEffects";
import { 
  FlaskConical, 
  TableProperties, 
  Trophy, 
  Sparkles, 
  X, 
  Atom, 
  ArrowRight, 
  Globe,
  Award,
  BookOpen,
  QrCode,
  CheckCircle2,
  Cpu,
  Layers,
  GraduationCap,
  FileText,
  School,
  User,
  Lightbulb,
  ExternalLink
} from "lucide-react";

interface WelcomeModalProps {
  language: Language;
  onClose: (dontShowAgain: boolean) => void;
  onStartExploring: (dontShowAgain: boolean) => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({
  language,
  onClose,
  onStartExploring
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'passport' | 'guide' | 'qr'>('passport');
  const [dontShow, setDontShow] = useState(false);

  const t = (k: string) => getTranslation(language, k);

  const handleClose = () => {
    soundEffects.playAtomAdd();
    onClose(dontShow);
  };

  const handleStart = () => {
    soundEffects.playDiscovery();
    onStartExploring(dontShow);
  };

  const siteUrl = "https://chemistry.umarkairat.kz";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(siteUrl)}&bgcolor=ffffff&color=0f172a&margin=10`;

  const content = {
    tabPassport: { ru: "Паспорт исследования (Дарын)", kk: "Ғылыми паспорт (Дарын)", en: "Research Passport (ISEF)" },
    tabGuide: { ru: "Модули и руководство", kk: "Модульдер мен нұсқаулық", en: "Modules & Guide" },
    tabQR: { ru: "QR для жюри", kk: "Жюриге арналған QR", en: "Jury Mobile QR" },
    
    // Passport Fields
    schoolLabel: { ru: "Школа:", kk: "Мектеп:", en: "School:" },
    schoolValue: { ru: "New Generation School (NGS), г. Алматы", kk: "New Generation School (NGS), Алматы қ.", en: "New Generation School (NGS), Almaty" },
    authorLabel: { ru: "Автор проекта:", kk: "Жоба авторы:", en: "Project Author:" },
    authorValue: { ru: "Кайрат Умар (ученик NGS)", kk: "Қайрат Омар (NGS оқушысы)", en: "Kairat Umar (NGS student)" },
    sectionLabel: { ru: "Секция:", kk: "Бағыты:", en: "Section:" },
    sectionValue: { ru: "Химия / Информатика и цифровые технологии", kk: "Химия / Информатика және сандық технологиялар", en: "Chemistry / Computer Science" },
    yearLabel: { ru: "Год выполнения:", kk: "Орындалған жылы:", en: "Year:" },
    yearValue: { ru: "2026", kk: "2026", en: "2026" },

    relevanceTitle: { ru: "Актуальность исследования", kk: "Зерттеудің өзектілігі", en: "Relevance of Research" },
    relevanceText: { 
      ru: "Цифровизация школьного химического образования в Республике Казахстан. Проект решает проблему безопасности и доступности химического эксперимента (согласно пункту 8 Правил МОН РК № 99, запрещающему работу с токсичными и опасными веществами), позволяя школьникам моделировать любые сложные химические реакции онлайн.",
      kk: "Қазақстан Республикасындағы мектептік химиялық білім беруді цифрландыру. Жоба мектептердегі қымбат және улы реагенттер тапшылығы мен қауіпсіздік мәселесін шешеді (ҚР Оқу-ағарту министрлігінің № 99 бұйрығына сәйкес), оқушыларға кез келген күрделі реакцияларды қауіпсіз модельдеуге мүмкіндік береді.",
      en: "Digital transformation of chemistry education in Kazakhstan. Solves laboratory safety constraints by providing an accessible, interactive digital simulation of high-hazard and micro-scale chemical reactions."
    },

    aimTitle: { ru: "Цель исследования", kk: "Зерттеу мақсаты", en: "Research Aim" },
    aimText: {
      ru: "Разработка полнофункционального интерактивного веб-комплекса Chemistry Explorer для наглядного моделирования периодического закона Менделеева, синтеза молекул, симуляции реакций ионного обмена и классификации неорганических соединений.",
      kk: "Менделеевтің периодтық заңын, молекулалар синтезін, ион алмасу реакцияларын және бейорганикалық қосылыстардың жіктелуін көрнекі түрде модельдеуге арналған толықфункционалды интерактивті Chemistry Explorer веб-кешенін әзірлеу.",
      en: "Development of a comprehensive web platform for simulating the Periodic Law, 3D atomic structures, chemical synthesis of 51 substances, and aqueous solubility dynamics."
    },

    hypothesisTitle: { ru: "Гипотеза исследования", kk: "Зерттеу гипотезасы", en: "Research Hypothesis" },
    hypothesisText: {
      ru: "Внедрение интерактивной поатомной сборки веществ и визуальной таблицы растворимости повышает глубину понимания химических реакций учащимися на 40% по сравнению с традиционными печатными пособиями.",
      kk: "Интерактивті атомдық құрастыру мен көрнекі ерігіштік кестесін оқу процесіне енгізу оқушылардың химиялық реакцияларды түсіну сапасын дәстүрлі оқулықтармен салыстырғанда 40%-ға арттырады.",
      en: "Integrating atom-by-atom interactive synthesis and visual precipitate matrix increases student comprehension of inorganic reactions by 40% compared to static textbooks."
    },

    noveltyTitle: { ru: "Научная новизна и самостоятельность", kk: "Ғылыми жаңалығы", en: "Scientific Novelty" },
    noveltyText: {
      ru: "Создан оригинальный физико-химический движок валидации валентностей, автоматический расчёт молекулярных и сокращённых ионных уравнений реакций, генетические цепочки превращений металлов и неметаллов, а также трёхъязычный интерфейс (RU/KK/EN).",
      kk: "Валенттілікті автоматты тексеретін түпнұсқа физика-химиялық алгоритм, толық және қысқартылған иондық теңдеулерді лезде есептеу, металдар мен бейметалдардың генетикалық тізбектері және мемлекеттік тілдегі толық номенклатура жасалды.",
      en: "Proprietary valence validation engine, instant ionic and molecular equation solver, interactive genetic reaction chains, and full trilingual IUPAC nomenclature."
    },

    resultsTitle: { ru: "Результаты и апробация", kk: "Нәтижелер мен сынақ", en: "Results & Validation" },
    resultsText: {
      ru: "118 интерактивных элементов таблицы Менделеева с электронными орбиталями • 51 уникальная молекула в лаборатории синтеза • Матрица растворимости 15×14 с виртуальной пробиркой • 12 качественных аналитических реакций • Система квестов и достижений.",
      kk: "118 периодтық кесте элементі (Бор моделі) • Зертханадағы 51 ерекше молекула • 15×14 ерігіштік матрицасы және виртуалды сынауық • 12 сапалық аналитикалық реакция • Интерактивті квесттер жүйесі.",
      en: "118 interactive periodic table elements with Bohr models, 51 synthesizeable compounds, 15x14 solubility matrix with virtual test tube simulator, and 12 qualitative analytical tests."
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 dark:bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.1] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden space-y-6 max-h-[92vh] overflow-y-auto transition-colors font-sans"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 border border-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] dark:text-slate-400 dark:hover:text-white dark:border-white/[0.08] transition-colors z-20 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Header with School Logo & Title */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-4 border-b border-slate-200/80 dark:border-white/[0.08] relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800/80 p-2 border border-slate-200 dark:border-white/[0.1] flex items-center justify-center shadow-md shrink-0">
            <img 
              src="/ngs-logo.png" 
              alt="NGS" 
              className="w-10 h-10 object-contain" 
            />
          </div>

          <div className="text-center sm:text-left space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
              <Award className="w-3.5 h-3.5" />
              <span>Республиканский конкурс научных проектов «Дарын» / Intel ISEF</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Chemistry Explorer • Научно-исследовательский проект
            </h2>

            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Автор: <strong className="text-slate-900 dark:text-white">Кайрат Умар</strong> • New Generation School (NGS), г. Алматы
            </p>
          </div>
        </div>

        {/* Modal Subtabs Navigation */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-white/[0.08] overflow-x-auto">
          <button
            onClick={() => {
              soundEffects.playAtomAdd();
              setActiveSubTab('passport');
            }}
            className={`flex-1 flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium font-mono whitespace-nowrap transition-all cursor-pointer ${
              activeSubTab === 'passport'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{content.tabPassport[language]}</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playAtomAdd();
              setActiveSubTab('guide');
            }}
            className={`flex-1 flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium font-mono whitespace-nowrap transition-all cursor-pointer ${
              activeSubTab === 'guide'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{content.tabGuide[language]}</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playAtomAdd();
              setActiveSubTab('qr');
            }}
            className={`flex-1 flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium font-mono whitespace-nowrap transition-all cursor-pointer ${
              activeSubTab === 'qr'
                ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>{content.tabQR[language]}</span>
          </button>
        </div>

        {/* TAB 1: ACADEMIC RESEARCH PASSPORT */}
        {activeSubTab === 'passport' && (
          <div className="space-y-4 text-xs font-sans animate-fadeIn">
            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/[0.06] font-mono text-xs">
              <div>
                <span className="text-slate-400 text-[11px] block">{content.schoolLabel[language]}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{content.schoolValue[language]}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[11px] block">{content.authorLabel[language]}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{content.authorValue[language]}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[11px] block">{content.sectionLabel[language]}</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{content.sectionValue[language]}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[11px] block">{content.yearLabel[language]}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{content.yearValue[language]}</span>
              </div>
            </div>

            {/* Abstract Sections Accordion/Cards */}
            <div className="space-y-3">
              {/* 1. Relevance */}
              <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/80 dark:border-white/[0.06] space-y-1">
                <div className="flex items-center gap-2 font-mono font-bold text-slate-900 dark:text-white text-xs">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>{content.relevanceTitle[language]}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                  {content.relevanceText[language]}
                </p>
              </div>

              {/* 2. Aim & Hypothesis */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
                  <div className="flex items-center gap-2 font-mono font-bold text-emerald-700 dark:text-emerald-400 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{content.aimTitle[language]}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                    {content.aimText[language]}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 space-y-1">
                  <div className="flex items-center gap-2 font-mono font-bold text-indigo-700 dark:text-indigo-400 text-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{content.hypothesisTitle[language]}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                    {content.hypothesisText[language]}
                  </p>
                </div>
              </div>

              {/* 3. Novelty */}
              <div className="p-3.5 rounded-2xl bg-purple-500/5 border border-purple-500/20 space-y-1">
                <div className="flex items-center gap-2 font-mono font-bold text-purple-700 dark:text-purple-400 text-xs">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{content.noveltyTitle[language]}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                  {content.noveltyText[language]}
                </p>
              </div>

              {/* 4. Results */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/[0.06] space-y-1">
                <div className="flex items-center gap-2 font-mono font-bold text-slate-900 dark:text-white text-xs">
                  <Layers className="w-3.5 h-3.5 text-teal-500" />
                  <span>{content.resultsTitle[language]}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px] sm:text-xs font-mono">
                  {content.resultsText[language]}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PLATFORM MODULES GUIDE */}
        {activeSubTab === 'guide' && (
          <div className="space-y-3 font-sans animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 font-mono font-bold text-indigo-600 dark:text-indigo-400 text-xs">
                  <Atom className="w-4 h-4" />
                  <span>1. Периодическая таблица (118)</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Полная таблица Менделеева с интерактивной 3D-моделью Бора, спектральными линиями, распределением электронов по уровням и отправкой в реактор.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                  <FlaskConical className="w-4 h-4" />
                  <span>2. Лаборатория реакций (51)</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Поатомная сборка молекул в вакуумной камере с автоматическим расчётом валентностей, термодинамических параметров и уравнений реакций.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 font-mono font-bold text-amber-600 dark:text-amber-400 text-xs">
                  <TableProperties className="w-4 h-4" />
                  <span>3. Таблица растворимости</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Матрица растворимости 15×14 с виртуальной пробиркой, анимацией осадков (цвет, осадок, газы) и 12 главными качественными реакциями.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 font-mono font-bold text-purple-600 dark:text-purple-400 text-xs">
                  <Layers className="w-4 h-4" />
                  <span>4. Классификация и цепочки</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Иерархическое древо неорганических веществ, генетические цепочки превращений металлов и неметаллов, матрица реакций и тест.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: JURY QR CODE */}
        {activeSubTab === 'qr' && (
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-white/[0.06] space-y-4 text-center animate-fadeIn">
            <div className="p-3 bg-white rounded-2xl shadow-md border border-slate-200/80">
              <img 
                src={qrCodeUrl}
                alt="Jury QR Code"
                className="w-44 h-44 sm:w-52 sm:h-52 object-contain rounded-lg"
              />
            </div>

            <div className="space-y-1 max-w-sm">
              <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-900 dark:text-white">
                <Globe className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>https://chemistry.umarkairat.kz</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                Отсканируйте камерой смартфона для живого тестирования лаборатории членами комиссии
              </p>
            </div>
          </div>
        )}

        {/* Footer Actions & Don't Show Again Checkbox */}
        <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <label className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 select-none cursor-pointer">
            <input
              type="checkbox"
              checked={dontShow}
              onChange={e => setDontShow(e.target.checked)}
              className="rounded border-slate-300 dark:border-slate-700 text-indigo-600 focus:ring-indigo-500"
            />
            <span>{t("dontShowAgain")}</span>
          </label>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleStart}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:opacity-95 transition-all active:scale-95 shadow-lg cursor-pointer"
            >
              <span>{t("startExploring")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
