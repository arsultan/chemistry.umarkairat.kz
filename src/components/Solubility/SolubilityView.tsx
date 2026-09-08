"use client";

import React, { useState, useMemo } from "react";
import { Language } from "@/types/chemistry";
import { 
  CATIONS_LIST, 
  ANIONS_LIST, 
  SOLUBILITY_MATRIX, 
  QUALITATIVE_REACTIONS_LIST,
  SolubilityCell, 
  SolubilityType,
  QualitativeReaction,
  CationInfo,
  AnionInfo
} from "@/data/solubilityTable";
import { VirtualTestTubeLab } from "./VirtualTestTubeLab";
import { soundEffects } from "@/lib/soundEffects";
import { 
  Grid3X3, 
  Search, 
  Sparkles, 
  Info, 
  Beaker, 
  ArrowRight, 
  Check, 
  Filter, 
  AlertCircle, 
  X, 
  Zap,
  HelpCircle,
  FlaskConical,
  Flame,
  Droplets,
  Layers,
  ChevronRight,
  RotateCcw,
  BookOpen
} from "lucide-react";

interface SolubilityViewProps {
  language: Language;
  onLoadToLab: (atoms: Record<string, number>) => void;
  onGoToLab: () => void;
}

export const SolubilityView: React.FC<SolubilityViewProps> = ({
  language,
  onLoadToLab,
  onGoToLab
}) => {
  // Navigation sub-tab
  const [subTab, setSubTab] = useState<'matrix' | 'mixer' | 'qualitative'>('matrix');

  // Matrix Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedCell, setSelectedCell] = useState<SolubilityCell | null>(null);
  const [hoveredCation, setHoveredCation] = useState<string | null>(null);
  const [hoveredAnion, setHoveredAnion] = useState<string | null>(null);

  // Virtual Mixer State
  const [mixerCationId, setMixerCationId] = useState<string>('Ba');
  const [mixerAnionId, setMixerAnionId] = useState<string>('SO4');
  const [isMixing, setIsMixing] = useState(false);
  const [mixKey, setMixKey] = useState(0);

  // Translations
  const t = {
    title: { ru: "Таблица растворимости", kk: "Ерігіштік кестесі", en: "Solubility Table" },
    subtitle: { 
      ru: "Интерактивная таблица растворимости кислот, солей и оснований в воде при 20-25°C", 
      kk: "Тұздардың, қышқылдардың және негіздердің судағы ерігіштік кестесі (20-25°C)", 
      en: "Interactive solubility table of salts, acids, and bases in water at 20-25°C" 
    },
    tabMatrix: { ru: "Таблица (Матрица)", kk: "Кесте (Матрица)", en: "Solubility Matrix" },
    tabMixer: { ru: "Виртуальная пробирка", kk: "Виртуалды сынауық", en: "Virtual Test Tube" },
    tabQualitative: { ru: "Качественные реакции", kk: "Сапалық реакциялар", en: "Qualitative Tests" },
    searchPlaceholder: { 
      ru: "Поиск по иону (Ba, SO4, Ag, Cl) или формуле (AgCl, BaSO4, Fe(OH)3)...", 
      kk: "Ион (Ba, SO4, Ag, Cl) немесе формула (AgCl, BaSO4) бойынша іздеу...", 
      en: "Search by ion (Ba, SO4, Ag, Cl) or formula..." 
    },
    all: { ru: "Все вещества", kk: "Барлық заттар", en: "All Substances" },
    filterP: { ru: "Растворимо (Р)", kk: "Ериді (Е)", en: "Soluble (S)" },
    filterN: { ru: "Осадки (Н)", kk: "Тұнба (Ем)", en: "Precipitates (I)" },
    filterM: { ru: "Малорастворимо (М)", kk: "Аз ериді (А)", en: "Slightly Soluble" },
    filterQualitative: { ru: "Качественные реакции", kk: "Сапалық реакциялар", en: "Qualitative Tests" },
    legendTitle: { ru: "Условные обозначения:", kk: "Шартты белгілер:", en: "Legend:" },
    legendP: { ru: "Р — растворимо (> 1 г на 100 г H₂O)", kk: "Е — суда жақсы ериді (> 1 г)", en: "S — Soluble (> 1 g per 100 g H₂O)" },
    legendM: { ru: "М — малорастворимо (0.1–1 г на 100 г H₂O)", kk: "А — аз ериді (0.1–1 г)", en: "M — Slightly soluble (0.1–1 g)" },
    legendN: { ru: "Н — нерастворимо / осадок (< 0.1 г на 100 г H₂O)", kk: "Ем — ерімейді / тұнба түзеді", en: "I — Insoluble / Precipitate (< 0.1 g)" },
    legendDash: { ru: "— — разлагается водой или не существует", kk: "— — сумен ыдырайды немесе түзілмейді", en: "— — Decomposes in water / Nonexistent" },
    legendGas: { ru: "Г — улетучивается в виде газа", kk: "Г — газ түрінде ұшып кетеді", en: "G — Escapes as gas" },
    synthesizeInLab: { ru: "Синтезировать в лаборатории", kk: "Зертханада синтездеу", en: "Synthesize in Lab" },
    openInMixer: { ru: "Смешать в пробирке", kk: "Сынауықта араластыру", en: "Mix in Test Tube" },
    close: { ru: "Закрыть", kk: "Жабу", en: "Close" },
    mixSolutions: { ru: "Смешать растворы", kk: "Ерітінділерді араластыру", en: "Mix Solutions" },
    resetMixer: { ru: "Очистить пробирку", kk: "Сынауықты тазалау", en: "Clear Test Tube" },
    selectCation: { ru: "Выберите катион (Раствор 1)", kk: "Катионды таңдаңыз (1-ерітінді)", en: "Select Cation (Solution 1)" },
    selectAnion: { ru: "Выберите анион (Раствор 2)", kk: "Анионды таңдаңыз (2-ерітінді)", en: "Select Anion (Solution 2)" },
    molecularEq: { ru: "Молекулярное уравнение:", kk: "Молекулалық теңдеу:", en: "Molecular Equation:" },
    netIonicEq: { ru: "Сокращенное ионное уравнение:", kk: "Қысқартылған иондық теңдеу:", en: "Net Ionic Equation:" },
    observation: { ru: "Визуальный признак реакции:", kk: "Реакцияның сыртқы белгісі:", en: "Visual Observation:" },
    application: { ru: "Практическое применение:", kk: "Қолданылуы:", en: "Practical Application:" },
    experimentSuccess: { ru: "Реакция завершена!", kk: "Реакция аяқталды!", en: "Reaction Complete!" }
  };

  // Matrix stats
  const stats = useMemo(() => {
    let total = 0;
    let pCount = 0;
    let nCount = 0;
    let mCount = 0;
    let qualCount = 0;

    CATIONS_LIST.forEach(c => {
      ANIONS_LIST.forEach(a => {
        const cell = SOLUBILITY_MATRIX[c.id]?.[a.id];
        if (cell) {
          total++;
          if (cell.shortCode === 'Р') pCount++;
          if (cell.shortCode === 'Н') nCount++;
          if (cell.shortCode === 'М') mCount++;
          if (cell.isImportantQualitativeReaction) qualCount++;
        }
      });
    });

    return { total, pCount, nCount, mCount, qualCount };
  }, []);

  const handleCellClick = (cell: SolubilityCell) => {
    soundEffects.playAtomAdd();
    setSelectedCell(cell);
  };

  const handleSynthesize = (cell: SolubilityCell) => {
    if (cell.atoms) {
      soundEffects.playDiscovery();
      onLoadToLab(cell.atoms);
      onGoToLab();
    }
  };

  const handleOpenInMixerFromCell = (cell: SolubilityCell) => {
    setMixerCationId(cell.cationId);
    setMixerAnionId(cell.anionId);
    setSelectedCell(null);
    setSubTab('mixer');
    triggerMix();
  };

  const handleOpenInMixerFromQualitative = (item: QualitativeReaction) => {
    setMixerCationId(item.cationId);
    setMixerAnionId(item.anionId);
    setSubTab('mixer');
    triggerMix();
  };

  const triggerMix = () => {
    setIsMixing(true);
    soundEffects.playAtomAdd();
    setTimeout(() => {
      soundEffects.playDiscovery();
      setIsMixing(false);
      setMixKey(prev => prev + 1);
    }, 400);
  };

  // Computed Mixer Result
  const currentMixCell = useMemo(() => {
    return SOLUBILITY_MATRIX[mixerCationId]?.[mixerAnionId] || null;
  }, [mixerCationId, mixerAnionId]);

  const currentCationInfo = useMemo(() => {
    return CATIONS_LIST.find(c => c.id === mixerCationId) || CATIONS_LIST[0];
  }, [mixerCationId]);

  const currentAnionInfo = useMemo(() => {
    return ANIONS_LIST.find(a => a.id === mixerAnionId) || ANIONS_LIST[0];
  }, [mixerAnionId]);

  // Badge Style Helper
  const getBadgeStyle = (status: SolubilityType, shortCode: string, isHighlighted: boolean) => {
    switch (shortCode) {
      case 'Р':
        return isHighlighted
          ? 'bg-emerald-500 text-white font-bold ring-2 ring-emerald-400 shadow-md scale-105'
          : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-500/20';
      case 'Н':
        return isHighlighted
          ? 'bg-rose-500 text-white font-bold ring-2 ring-rose-400 shadow-md scale-105'
          : 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200/80 dark:border-rose-500/20';
      case 'М':
        return isHighlighted
          ? 'bg-amber-500 text-white font-bold ring-2 ring-amber-400 shadow-md scale-105'
          : 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/80 dark:border-amber-500/20';
      case 'Г':
        return isHighlighted
          ? 'bg-cyan-500 text-white font-bold ring-2 ring-cyan-400 shadow-md scale-105'
          : 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-400 border border-cyan-200/80 dark:border-cyan-500/20';
      default:
        return 'bg-slate-100 text-slate-400 dark:bg-slate-800/60 dark:text-slate-500 border border-slate-200/60 dark:border-white/[0.04]';
    }
  };

  // Find matching cells
  const isCellMatchingFilter = (cell: SolubilityCell) => {
    if (!cell) return false;

    if (statusFilter === 'P' && cell.shortCode !== 'Р') return false;
    if (statusFilter === 'N' && cell.shortCode !== 'Н') return false;
    if (statusFilter === 'M' && cell.shortCode !== 'М') return false;
    if (statusFilter === 'qualitative' && !cell.isImportantQualitativeReaction) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchFormula = cell.formula.toLowerCase().includes(q) || cell.formulaAscii.toLowerCase().includes(q);
      const matchCation = cell.cationId.toLowerCase().includes(q);
      const matchAnion = cell.anionId.toLowerCase().includes(q);
      const matchColor = cell.colorNote && cell.colorNote[language].toLowerCase().includes(q);
      const matchDesc = cell.description && cell.description[language].toLowerCase().includes(q);
      return matchFormula || matchCation || matchAnion || matchColor || matchDesc;
    }

    return true;
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-4 animate-fadeIn font-sans">
      {/* Top Banner & Mode Selector */}
      <div className="relative rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/[0.08] p-5 sm:p-7 shadow-sm overflow-hidden transition-colors">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>Aqueous Solubility & Analytical Chemistry</span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.title[language]}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {t.subtitle[language]}
            </p>
          </div>

          {/* Sub-tab Switcher Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-white/[0.08] self-start md:self-center shrink-0">
            <button
              onClick={() => {
                soundEffects.playAtomAdd();
                setSubTab('matrix');
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium font-mono transition-all cursor-pointer ${
                subTab === 'matrix'
                  ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span>{t.tabMatrix[language]}</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playAtomAdd();
                setSubTab('mixer');
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium font-mono transition-all cursor-pointer ${
                subTab === 'mixer'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>{t.tabMixer[language]}</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playAtomAdd();
                setSubTab('qualitative');
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium font-mono transition-all cursor-pointer ${
                subTab === 'qualitative'
                  ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.tabQualitative[language]}</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Banner (Only on Matrix Tab) */}
        {subTab === 'matrix' && (
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mt-6 pt-5 border-t border-slate-200/80 dark:border-white/[0.08]">
            <div 
              onClick={() => setStatusFilter('all')}
              className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/[0.06] flex items-center gap-3 cursor-pointer hover:border-emerald-500/40 transition-all ${statusFilter === 'all' ? 'ring-2 ring-emerald-500/40' : ''}`}
            >
              <div className="w-8 h-8 rounded-xl bg-slate-200/80 dark:bg-slate-800 flex items-center justify-center font-mono font-bold text-slate-700 dark:text-slate-300 text-xs">
                Σ
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-medium">Всего</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">{stats.total}</span>
              </div>
            </div>

            <div 
              onClick={() => setStatusFilter('P')}
              className={`p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-3 cursor-pointer hover:bg-emerald-500/10 transition-all ${statusFilter === 'P' ? 'ring-2 ring-emerald-500' : ''}`}
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                Р
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 block uppercase font-medium">Растворимо</span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono">{stats.pCount}</span>
              </div>
            </div>

            <div 
              onClick={() => setStatusFilter('N')}
              className={`p-3 rounded-2xl bg-rose-500/5 border border-rose-500/20 flex items-center gap-3 cursor-pointer hover:bg-rose-500/10 transition-all ${statusFilter === 'N' ? 'ring-2 ring-rose-500' : ''}`}
            >
              <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center font-mono font-bold text-xs">
                Н
              </div>
              <div>
                <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400 block uppercase font-medium">Осадки</span>
                <span className="text-sm font-bold text-rose-600 dark:text-rose-400 font-mono">{stats.nCount}</span>
              </div>
            </div>

            <div 
              onClick={() => setStatusFilter('M')}
              className={`p-3 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-center gap-3 cursor-pointer hover:bg-amber-500/10 transition-all ${statusFilter === 'M' ? 'ring-2 ring-amber-500' : ''}`}
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-mono font-bold text-xs">
                М
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 block uppercase font-medium">Малорастворимо</span>
                <span className="text-sm font-bold text-amber-600 dark:text-amber-400 font-mono">{stats.mCount}</span>
              </div>
            </div>

            <div 
              onClick={() => setStatusFilter('qualitative')}
              className={`p-3 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 flex items-center gap-3 cursor-pointer hover:bg-indigo-500/10 transition-all ${statusFilter === 'qualitative' ? 'ring-2 ring-indigo-500' : ''}`}
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-mono font-bold text-xs">
                ⭐
              </div>
              <div>
                <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 block uppercase font-medium">Качественные</span>
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 font-mono">{stats.qualCount}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SUBTAB 1: MATRIX GRID VIEW */}
      {subTab === 'matrix' && (
        <div className="space-y-4">
          {/* Filter and Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder[language]}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
              />
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              {[
                { id: 'all', label: t.all[language] },
                { id: 'P', label: t.filterP[language] },
                { id: 'N', label: t.filterN[language] },
                { id: 'M', label: t.filterM[language] },
                { id: 'qualitative', label: t.filterQualitative[language] }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => {
                    soundEffects.playAtomAdd();
                    setStatusFilter(f.id);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition-all cursor-pointer ${
                    statusFilter === f.id
                      ? 'bg-emerald-600 text-white font-bold shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Table Container */}
          <div className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/[0.08] p-4 sm:p-6 shadow-sm overflow-hidden">
            {/* Table scroll container */}
            <div className="overflow-x-auto pb-2">
              <table className="w-full border-collapse font-mono text-xs select-none">
                <thead>
                  {/* Anions Header Row */}
                  <tr>
                    <th className="sticky left-0 z-20 bg-slate-100 dark:bg-slate-800/95 p-2.5 text-left text-[11px] font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] rounded-tl-xl min-w-[130px] backdrop-blur-md">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold">Анионы →</span>
                        <span className="text-slate-500 text-[10px]">Катионы ↓</span>
                      </div>
                    </th>
                    {ANIONS_LIST.map(anion => {
                      const isHovered = hoveredAnion === anion.id;
                      return (
                        <th 
                          key={anion.id}
                          onMouseEnter={() => setHoveredAnion(anion.id)}
                          onMouseLeave={() => setHoveredAnion(null)}
                          className={`p-2 text-center border border-slate-200 dark:border-white/[0.08] transition-colors min-w-[58px] cursor-pointer ${
                            isHovered 
                              ? 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-500/40 z-10' 
                              : 'bg-slate-50/80 dark:bg-slate-950/40 text-slate-800 dark:text-slate-200'
                          }`}
                          title={`${anion.name[language]} (${anion.acidFormula})`}
                        >
                          <span className="text-xs font-bold block">{anion.symbol}</span>
                          <span className="text-[9px] text-slate-400 block truncate max-w-[50px] mx-auto font-normal">
                            {anion.name[language]}
                          </span>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {CATIONS_LIST.map(cation => {
                    const isRowHovered = hoveredCation === cation.id;
                    return (
                      <tr key={cation.id}>
                        {/* Cation Header Cell (Sticky on left) */}
                        <th 
                          onMouseEnter={() => setHoveredCation(cation.id)}
                          onMouseLeave={() => setHoveredCation(null)}
                          className={`sticky left-0 z-10 p-2 border border-slate-200 dark:border-white/[0.08] text-left transition-colors cursor-pointer backdrop-blur-md ${
                            isRowHovered 
                              ? 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-500/40 z-10' 
                              : 'bg-slate-50/95 dark:bg-slate-950/80 text-slate-800 dark:text-slate-200'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold font-mono">{cation.symbol}</span>
                            <span className="text-[10px] text-slate-400 font-normal truncate max-w-[65px]">
                              {cation.name[language]}
                            </span>
                          </div>
                        </th>

                        {/* Data Cells */}
                        {ANIONS_LIST.map(anion => {
                          const cell = SOLUBILITY_MATRIX[cation.id]?.[anion.id];
                          if (!cell) {
                            return (
                              <td key={anion.id} className="p-1 border border-slate-200/60 dark:border-white/[0.04] text-center text-slate-300">
                                —
                              </td>
                            );
                          }

                          const isMatching = isCellMatchingFilter(cell);
                          const isSelected = selectedCell?.formula === cell.formula;
                          const isCrossHovered = hoveredCation === cation.id || hoveredAnion === anion.id;

                          return (
                            <td 
                              key={anion.id}
                              onClick={() => handleCellClick(cell)}
                              onMouseEnter={() => {
                                setHoveredCation(cation.id);
                                setHoveredAnion(anion.id);
                              }}
                              onMouseLeave={() => {
                                setHoveredCation(null);
                                setHoveredAnion(null);
                              }}
                              className={`p-1 border border-slate-200/60 dark:border-white/[0.05] text-center transition-all cursor-pointer select-none ${
                                isCrossHovered ? 'bg-indigo-500/10 dark:bg-indigo-500/10' : ''
                              } ${!isMatching ? 'opacity-20' : 'hover:scale-105'}`}
                            >
                              <div 
                                className={`relative w-full py-1.5 rounded-lg flex items-center justify-center font-bold text-xs transition-all ${
                                  getBadgeStyle(cell.status, cell.shortCode, isSelected)
                                }`}
                                title={`${cell.formula} — ${cell.shortCode === 'Р' ? 'Растворимо' : cell.shortCode === 'Н' ? 'Нерастворимо (осадок)' : cell.shortCode === 'М' ? 'Малорастворимо' : 'Разлагается/Газ'}`}
                              >
                                <span>{cell.shortCode}</span>
                                {/* Color precipitate dot */}
                                {cell.precipitateColorHex && cell.shortCode === 'Н' && (
                                  <span 
                                    className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full ring-1 ring-black/20"
                                    style={{ backgroundColor: cell.precipitateColorHex }}
                                  />
                                )}
                                {cell.isImportantQualitativeReaction && (
                                  <span className="absolute bottom-0.5 right-0.5 text-[8px] leading-none">
                                    ⭐
                                  </span>
                                )}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {t.legendTitle[language]}
              </span>
              <div className="flex items-center gap-4 flex-wrap text-slate-600 dark:text-slate-400 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-center text-[10px]">Р</span>
                  <span>{t.legendP[language]}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 font-bold flex items-center justify-center text-[10px]">М</span>
                  <span>{t.legendM[language]}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 font-bold flex items-center justify-center text-[10px]">Н</span>
                  <span>{t.legendN[language]}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold flex items-center justify-center text-[10px]">—</span>
                  <span>{t.legendDash[language]}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 font-bold flex items-center justify-center text-[10px]">Г</span>
                  <span>{t.legendGas[language]}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: VIRTUAL TEST TUBE MIXER */}
      {subTab === 'mixer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Panel: Reactant Selectors & Quick Experiments */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Experience Presets */}
            <div className="p-4 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/[0.08] shadow-sm space-y-2.5">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Быстрые зрелищные опыты:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: "✨ Золотой дождь (PbI₂)", c: "Pb", a: "I" },
                  { label: "💧 Голубой гель (Cu(OH)₂)", c: "Cu", a: "OH" },
                  { label: "⚪ Хлорид серебра (AgCl)", c: "Ag", a: "Cl" },
                  { label: "🟤 Ржавчина (Fe(OH)₃)", c: "Fe3", a: "OH" },
                  { label: "⚪ Сульфат бария (BaSO₄)", c: "Ba", a: "SO4" },
                  { label: "💨 Газ CO₂ (H⁺ + CO₃²⁻)", c: "H", a: "CO3" },
                  { label: "🟡 Осадок AgI", c: "Ag", a: "I" },
                  { label: "⚫ Чёрный осадок CuS", c: "Cu", a: "S" }
                ].map(exp => (
                  <button
                    key={exp.label}
                    onClick={() => {
                      soundEffects.playAtomAdd();
                      setMixerCationId(exp.c);
                      setMixerAnionId(exp.a);
                    }}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-mono transition-all cursor-pointer border ${
                      mixerCationId === exp.c && mixerAnionId === exp.a
                        ? 'bg-amber-500 text-white font-bold border-amber-400 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200/70 dark:border-white/[0.06]'
                    }`}
                  >
                    {exp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cation Solution Box */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/[0.08] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                  <Droplets className="w-4 h-4" />
                  <span>Раствор катиона (Металл)</span>
                </span>
                <span className="text-xs font-mono text-slate-400">{currentCationInfo.sampleSalt}</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                {CATIONS_LIST.map(cation => {
                  const isSelected = mixerCationId === cation.id;
                  return (
                    <button
                      key={cation.id}
                      onClick={() => {
                        soundEffects.playAtomAdd();
                        setMixerCationId(cation.id);
                      }}
                      className={`p-2 rounded-xl text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white font-bold shadow-sm ring-2 ring-indigo-400'
                          : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/[0.04]'
                      }`}
                    >
                      <span className="text-xs font-bold font-mono block">{cation.symbol}</span>
                      <span className="text-[9px] text-slate-400 block truncate font-normal">
                        {cation.name[language]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Anion Solution Box */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/[0.08] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <Droplets className="w-4 h-4" />
                  <span>Раствор аниона (Кислотный остаток)</span>
                </span>
                <span className="text-xs font-mono text-slate-400">{currentAnionInfo.sampleSalt}</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                {ANIONS_LIST.map(anion => {
                  const isSelected = mixerAnionId === anion.id;
                  return (
                    <button
                      key={anion.id}
                      onClick={() => {
                        soundEffects.playAtomAdd();
                        setMixerAnionId(anion.id);
                      }}
                      className={`p-2 rounded-xl text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-600 text-white font-bold shadow-sm ring-2 ring-emerald-400'
                          : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/[0.04]'
                      }`}
                    >
                      <span className="text-xs font-bold font-mono block">{anion.symbol}</span>
                      <span className="text-[9px] text-slate-400 block truncate font-normal">
                        {anion.name[language]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel: Animated Realistic Interactive Test Tube Lab */}
          <div className="lg:col-span-7">
            <VirtualTestTubeLab
              language={language}
              currentMixCell={currentMixCell}
              currentCationInfo={currentCationInfo}
              currentAnionInfo={currentAnionInfo}
              onSynthesizeInLab={handleSynthesize}
            />
          </div>
        </div>
      )}

      {/* SUBTAB 3: QUALITATIVE REACTIONS GALLERY */}
      {subTab === 'qualitative' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {QUALITATIVE_REACTIONS_LIST.map(item => (
              <div 
                key={item.id}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/[0.08] shadow-sm hover:border-amber-500/40 hover:shadow-md transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Качественный тест</span>
                    </span>
                    <span 
                      className="w-5 h-5 rounded-full border border-black/10 shadow-xs shrink-0"
                      style={{ backgroundColor: item.precipitateColorHex }}
                    />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title[language]}
                  </h3>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-white/[0.04] space-y-1.5 font-mono text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Ионы:</span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">
                        {item.cationId}⁺ + {item.anionId}⁻ → {item.productFormula}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Уравнение:</span>
                      <span className="text-[11px] text-slate-700 dark:text-slate-300 block truncate">
                        {item.netIonicEquation}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.observation[language]}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between gap-2">
                  <span className="text-[10px] text-slate-400 truncate max-w-[150px]">
                    {item.application[language]}
                  </span>

                  <button
                    onClick={() => handleOpenInMixerFromQualitative(item)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 border border-amber-200/80 dark:border-amber-500/20 transition-all cursor-pointer"
                  >
                    <span>Смешать</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Cell Modal / Detailed Drawer */}
      {selectedCell && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.1] rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5">
            {/* Close button */}
            <button
              onClick={() => setSelectedCell(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-white/[0.08] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header with Formula */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span 
                  className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                    selectedCell.shortCode === 'Р' ? 'bg-emerald-500/15 text-emerald-600 border border-emerald-500/30' :
                    selectedCell.shortCode === 'Н' ? 'bg-rose-500/15 text-rose-600 border border-rose-500/30' :
                    selectedCell.shortCode === 'М' ? 'bg-amber-500/15 text-amber-600 border border-amber-500/30' :
                    'bg-cyan-500/15 text-cyan-600 border border-cyan-500/30'
                  }`}
                >
                  {selectedCell.shortCode === 'Р' ? 'Растворимое вещество' :
                   selectedCell.shortCode === 'Н' ? 'Нерастворимый осадок' :
                   selectedCell.shortCode === 'М' ? 'Малорастворимое' : 'Разлагается / Газ'}
                </span>
                {selectedCell.isImportantQualitativeReaction && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-600 border border-amber-500/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Качественная реакция</span>
                  </span>
                )}
              </div>

              <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white pt-1">
                {selectedCell.formula}
              </div>
            </div>

            {/* Precipitate preview if exists */}
            {selectedCell.colorNote && (
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.07] flex items-center gap-3">
                {selectedCell.precipitateColorHex && (
                  <div 
                    className="w-8 h-8 rounded-xl shadow-inner border border-black/10 shrink-0"
                    style={{ backgroundColor: selectedCell.precipitateColorHex }}
                  />
                )}
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block">
                    Внешний вид и осадок:
                  </span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {selectedCell.colorNote[language]}
                  </span>
                </div>
              </div>
            )}

            {/* Description / Reactions */}
            {selectedCell.description && (
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedCell.description[language]}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => handleOpenInMixerFromCell(selectedCell)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold font-mono text-indigo-700 dark:text-indigo-300 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-500/30 transition-all cursor-pointer"
              >
                <FlaskConical className="w-4 h-4" />
                <span>{t.openInMixer[language]}</span>
              </button>

              {selectedCell.atoms && (
                <button
                  onClick={() => handleSynthesize(selectedCell)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold font-mono text-white bg-emerald-600 hover:bg-emerald-500 transition-all active:scale-95 cursor-pointer shadow-sm"
                >
                  <Beaker className="w-4 h-4" />
                  <span>{t.synthesizeInLab[language]}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
