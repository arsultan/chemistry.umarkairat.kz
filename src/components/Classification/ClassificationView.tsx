"use client";

import React, { useState, useMemo } from "react";
import { Language } from "@/types/chemistry";
import { 
  INORGANIC_CATEGORIES, 
  INORGANIC_COMPOUNDS_DB, 
  GENETIC_CHAINS_DATA, 
  CLASSIFICATION_QUIZ_QUESTIONS, 
  InorganicMainClass,
  InorganicCompoundItem 
} from "@/data/inorganicClassification";
import { soundEffects } from "@/lib/soundEffects";
import { 
  Layers, 
  Search, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Flame, 
  Droplets, 
  Zap, 
  Boxes, 
  Beaker, 
  GitBranch, 
  GraduationCap, 
  BookOpen, 
  Info
} from "lucide-react";

interface ClassificationViewProps {
  language: Language;
  onLoadToLab: (atoms: Record<string, number>) => void;
  onGoToLab: () => void;
}

export const ClassificationView: React.FC<ClassificationViewProps> = ({
  language,
  onLoadToLab,
  onGoToLab
}) => {
  const [activeSection, setActiveSection] = useState<'tree' | 'catalog' | 'genetic' | 'matrix' | 'quiz'>('tree');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>('all');

  // Genetic chain active step
  const [activeChainId, setActiveChainId] = useState<string>('chain-calcium');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<InorganicMainClass | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Translation helpers
  const t = {
    title: { ru: "Классификация неорганических веществ", kk: "Бейорганикалық заттардың жіктелуі", en: "Classification of Inorganic Compounds" },
    subtitle: { ru: "Интерактивная систематика: простые вещества, оксиды, основания, кислоты, соли и генетическая связь", kk: "Интерактивті жүйелеу: жай заттар, оксидтер, негіздер, қышқылдар, тұздар және генетикалық байланыс", en: "Interactive systematic taxonomy: simple elements, oxides, bases, acids, salts, and genetic links" },
    tabTree: { ru: "🌳 Схема классификации", kk: "🌳 Жіктелу сызбасы", en: "🌳 Taxonomy Tree" },
    tabCatalog: { ru: "🔬 Каталог веществ", kk: "🔬 Заттар каталогы", en: "🔬 Substances Catalog" },
    tabGenetic: { ru: "⛓️ Генетическая связь", kk: "⛓️ Генетикалық байланыс", en: "⛓️ Genetic Series" },
    tabMatrix: { ru: "⚡ Взаимодействие классов", kk: "⚡ Кластар әрекеттесуі", en: "⚡ Reactivity Matrix" },
    tabQuiz: { ru: "🎯 Тренажёр-квиз", kk: "🎯 Жаттығу-викторина", en: "🎯 Practice Quiz" },
    searchPlaceholder: { ru: "Поиск по формуле (NaOH, H2SO4, CaO...), названию или свойствам...", kk: "Формула (NaOH, H2SO4, CaO...), атауы бойынша іздеу...", en: "Search by formula, name, or properties..." },
    allFilter: { ru: "Все классы", kk: "Барлық кластар", en: "All Classes" },
    synthesizeBtn: { ru: "Синтезировать в лаборатории", kk: "Зертханада синтездеу", en: "Synthesize in Lab" },
    oxidation: { ru: "Степени окисления", kk: "Тотығу дәрежелері", en: "Oxidation States" },
    sol_soluble: { ru: "Растворимо (Р)", kk: "Ериді (Е)", en: "Soluble" },
    sol_insoluble: { ru: "Нерастворимо / Осадок (Н)", kk: "Ерімейді / Тұнба (Ем)", en: "Insoluble (Precipitate)" },
    sol_gas: { ru: "Газ (↑)", kk: "Газ (↑)", en: "Gas (↑)" },
    typicalReactions: { ru: "Характерные химические реакции:", kk: "Сипатты химиялық реакциялар:", en: "Typical Chemical Reactions:" },
    subClasses: { ru: "Подклассы и группы:", kk: "Ішкі кластары мен топтары:", en: "Subclasses & Groups:" }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case "Sparkles": return <Sparkles className="w-5 h-5" />;
      case "Flame": return <Flame className="w-5 h-5" />;
      case "Droplets": return <Droplets className="w-5 h-5" />;
      case "Zap": return <Zap className="w-5 h-5" />;
      case "Layers": return <Layers className="w-5 h-5" />;
      default: return <Boxes className="w-5 h-5" />;
    }
  };

  // Filter compounds
  const filteredCompounds = useMemo(() => {
    return INORGANIC_COMPOUNDS_DB.filter(c => {
      const matchQuery = 
        c.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.formulaAscii.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.scientificName[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.subCategory[language].toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchClass = selectedClassFilter === 'all' || c.mainClass.startsWith(selectedClassFilter);
      return matchQuery && matchClass;
    });
  }, [searchQuery, selectedClassFilter, language]);

  const handleSynthesize = (item: InorganicCompoundItem) => {
    soundEffects.playDiscovery();
    onLoadToLab(item.atoms);
    onGoToLab();
  };

  const activeChain = useMemo(() => {
    return GENETIC_CHAINS_DATA.find(c => c.id === activeChainId) || GENETIC_CHAINS_DATA[0];
  }, [activeChainId]);

  // Quiz handlers
  const currentQ = CLASSIFICATION_QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectQuizOption = (classId: InorganicMainClass) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(classId);
  };

  const handleSubmitQuizAnswer = () => {
    if (!selectedAnswer || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer === currentQ.correctClass) {
      soundEffects.playDiscovery();
      setQuizScore(prev => prev + 1);
    } else {
      soundEffects.playExperiment();
    }
  };

  const handleNextQuizQuestion = () => {
    soundEffects.playAtomAdd();
    setIsAnswerSubmitted(false);
    setSelectedAnswer(null);
    setShowHint(false);
    if (currentQuestionIndex + 1 < CLASSIFICATION_QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-4 animate-fadeIn">
      {/* Top Header Banner */}
      <div className="relative rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/[0.08] p-5 sm:p-7 shadow-sm overflow-hidden transition-colors">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>Inorganic Chemistry Systematics</span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.title[language]}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {t.subtitle[language]}
            </p>
          </div>

          <button
            onClick={onGoToLab}
            className="self-start md:self-center flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold font-mono text-white bg-indigo-600 hover:bg-indigo-500 transition-all active:scale-95 cursor-pointer shadow-sm shrink-0"
          >
            <Beaker className="w-4 h-4" />
            <span>{language === 'ru' ? 'Перейти в Лабораторию' : language === 'kk' ? 'Зертханаға өту' : 'Open Reaction Lab'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-1.5 mt-6 pt-5 border-t border-slate-200/80 dark:border-white/[0.08] overflow-x-auto pb-1">
          {[
            { id: 'tree', label: t.tabTree[language], icon: Layers },
            { id: 'catalog', label: t.tabCatalog[language], icon: BookOpen },
            { id: 'genetic', label: t.tabGenetic[language], icon: GitBranch },
            { id: 'matrix', label: t.tabMatrix[language], icon: Zap },
            { id: 'quiz', label: t.tabQuiz[language], icon: GraduationCap }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                soundEffects.playAtomAdd();
                setActiveSection(tab.id as any);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeSection === tab.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/70 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/[0.06]'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: TAXONOMY TREE */}
      {activeSection === 'tree' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {INORGANIC_CATEGORIES.map(category => (
              <div 
                key={category.id}
                className="flex flex-col rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] p-5 shadow-sm hover:border-indigo-500/40 transition-all group"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-white/[0.06]">
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 block mb-0.5">
                      {category.generalFormula}
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {category.title[language]}
                    </h2>
                  </div>
                  <div className={`p-2.5 rounded-xl ${category.badgeColor} border`}>
                    {getIcon(category.iconName)}
                  </div>
                </div>

                {/* Definition */}
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  {category.definition[language]}
                </p>

                {/* Subclasses */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.06] space-y-3 flex-1">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    {t.subClasses[language]}
                  </span>
                  
                  <div className="space-y-2">
                    {category.subClasses.map(sub => (
                      <div 
                        key={sub.id} 
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/60 dark:border-white/[0.05] space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: sub.color }} />
                            {sub.title[language]}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                            {sub.criteria[language]}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                          {sub.description[language]}
                        </p>
                        <div className="flex items-center gap-1.5 flex-wrap pt-1">
                          {sub.examples.map(ex => (
                            <span 
                              key={ex} 
                              className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/[0.08]"
                            >
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: SUBSTANCES CATALOG */}
      {activeSection === 'catalog' && (
        <div className="space-y-5">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder[language]}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              {[
                { id: 'all', label: t.allFilter[language] },
                { id: 'oxide', label: language === 'ru' ? 'Оксиды' : language === 'kk' ? 'Оксидтер' : 'Oxides' },
                { id: 'base', label: language === 'ru' ? 'Основания' : language === 'kk' ? 'Негіздер' : 'Bases' },
                { id: 'acid', label: language === 'ru' ? 'Кислоты' : language === 'kk' ? 'Қышқылдар' : 'Acids' },
                { id: 'salt', label: language === 'ru' ? 'Соли' : language === 'kk' ? 'Тұздар' : 'Salts' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => {
                    soundEffects.playAtomAdd();
                    setSelectedClassFilter(f.id);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition-all cursor-pointer ${
                    selectedClassFilter === f.id
                      ? 'bg-indigo-600 text-white font-bold shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Compounds Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCompounds.map(item => (
              <div 
                key={item.id}
                className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] p-5 shadow-sm hover:border-indigo-500/30 flex flex-col justify-between space-y-4 transition-all"
              >
                <div className="space-y-3">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span 
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold"
                      style={{ 
                        backgroundColor: `${item.color}15`, 
                        color: item.color,
                        border: `1px solid ${item.color}35`
                      }}
                    >
                      {item.subCategory[language]}
                    </span>

                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      {item.solubility === 'soluble' ? t.sol_soluble[language] : item.solubility === 'insoluble' ? t.sol_insoluble[language] : t.sol_gas[language]}
                    </span>
                  </div>

                  {/* Formula and Name */}
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">
                        {item.formula}
                      </span>
                      {item.generalFormula && (
                        <span className="text-xs font-mono text-slate-400">
                          ({item.generalFormula})
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                      {item.name[language]}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                      {item.scientificName[language]}
                    </p>
                  </div>

                  {/* Oxidation States */}
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-white/[0.05] text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
                    <span>{t.oxidation[language]}:</span>
                    <strong className="text-indigo-600 dark:text-indigo-400">{item.oxidationStates}</strong>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description[language]}
                  </p>

                  {/* Reactions */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      {t.typicalReactions[language]}
                    </span>
                    {item.typicalReactions.map((r, i) => (
                      <div key={i} className="p-2 rounded-lg bg-slate-50/80 dark:bg-slate-950/40 border border-slate-200/60 dark:border-white/[0.04] space-y-0.5">
                        <code className="text-xs font-bold font-mono text-indigo-700 dark:text-indigo-300 block">
                          {r.equation}
                        </code>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                          {r.description[language]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action: Load to Lab */}
                {item.isSynthesizableInLab && (
                  <button
                    onClick={() => handleSynthesize(item)}
                    className="w-full flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold font-mono text-white bg-indigo-600 hover:bg-indigo-500 transition-all active:scale-95 cursor-pointer shadow-sm"
                  >
                    <Beaker className="w-3.5 h-3.5" />
                    <span>{t.synthesizeBtn[language]}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: GENETIC CHAINS */}
      {activeSection === 'genetic' && (
        <div className="space-y-6">
          {/* Chain Selector */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] overflow-x-auto shadow-sm">
            {GENETIC_CHAINS_DATA.map(chain => (
              <button
                key={chain.id}
                onClick={() => {
                  soundEffects.playAtomAdd();
                  setActiveChainId(chain.id);
                  setActiveStepIndex(0);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeChainId === chain.id
                    ? 'bg-indigo-600 text-white shadow-sm font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <GitBranch className="w-4 h-4" />
                <span>{chain.title[language]}</span>
              </button>
            ))}
          </div>

          {/* Active Chain Details */}
          <div className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {activeChain.type === 'metal' ? 'Линия металлов / Металдар қатары' : 'Линия неметаллов / Бейметалдар қатары'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {activeChain.title[language]}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {activeChain.description[language]}
              </p>
            </div>

            {/* Horizontal Stepwise Progression */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-2">
              {activeChain.steps.map((step, idx) => (
                <div 
                  key={step.stepNumber}
                  onClick={() => {
                    soundEffects.playAtomAdd();
                    setActiveStepIndex(idx);
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    activeStepIndex === idx
                      ? 'bg-indigo-50/90 dark:bg-indigo-950/40 border-indigo-500 shadow-sm ring-1 ring-indigo-500'
                      : 'bg-slate-50 dark:bg-slate-950/50 border-slate-200/80 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/[0.15]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                      {step.stepNumber}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      Стадия {step.stepNumber}
                    </span>
                  </div>

                  <div>
                    <span className="text-xl font-bold font-mono text-slate-900 dark:text-white block">
                      {step.formula}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block leading-tight mt-0.5">
                      {step.substanceName[language]}
                    </span>
                    <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 block mt-1">
                      {step.compoundClass[language]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Step Detail Card */}
            {activeChain.steps[activeStepIndex] && (
              <div className="p-5 sm:p-6 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-500/30 space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-indigo-600 text-white">
                    Шаг {activeChain.steps[activeStepIndex].stepNumber}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {activeChain.steps[activeStepIndex].reactionType[language]}
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-500/20">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Уравнение химической реакции:
                  </span>
                  <code className="text-base sm:text-lg font-bold font-mono text-indigo-600 dark:text-indigo-400">
                    {activeChain.steps[activeStepIndex].reactionEquation}
                  </code>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SECTION 4: REACTIVITY MATRIX */}
      {activeSection === 'matrix' && (
        <div className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {t.tabMatrix[language]}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Сводная таблица химических свойств: с чем реагируют оксиды, кислоты, основания и соли для синтеза целевых соединений.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse font-mono">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/[0.1] text-slate-400">
                  <th className="py-3 px-4 font-semibold">Класс 1</th>
                  <th className="py-3 px-4 font-semibold">Класс 2</th>
                  <th className="py-3 px-4 font-semibold">Продукты реакции</th>
                  <th className="py-3 px-4 font-semibold">Пример уравнения</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/[0.06] text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-bold text-indigo-600 dark:text-indigo-400">Основный оксид</td>
                  <td className="py-3 px-4 text-amber-600 dark:text-amber-400">Кислота</td>
                  <td className="py-3 px-4">Соль + Вода</td>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">CuO + 2HCl → CuCl₂ + H₂O</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-bold text-rose-600 dark:text-rose-400">Кислотный оксид</td>
                  <td className="py-3 px-4 text-indigo-600 dark:text-indigo-400">Щёлочь (Основание)</td>
                  <td className="py-3 px-4">Соль + Вода</td>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">CO₂ + 2NaOH → Na₂CO₃ + H₂O</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-bold text-amber-600 dark:text-amber-400">Кислота</td>
                  <td className="py-3 px-4 text-indigo-600 dark:text-indigo-400">Основание (Щёлочь)</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">Нейтрализация: Соль + Вода</td>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">HCl + NaOH → NaCl + H₂O</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-bold text-amber-600 dark:text-amber-400">Кислота</td>
                  <td className="py-3 px-4 text-blue-600 dark:text-blue-400">Металл (до H₂)</td>
                  <td className="py-3 px-4">Соль + H₂↑ (газ)</td>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Zn + 2HCl → ZnCl₂ + H₂↑</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-bold text-emerald-600 dark:text-emerald-400">Соль 1</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400">Соль 2 (Растворимые)</td>
                  <td className="py-3 px-4">Соль 3 + Соль 4↓ (Осадок)</td>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">AgNO₃ + NaCl → AgCl↓ + NaNO₃</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-bold text-indigo-600 dark:text-indigo-400">Основный оксид</td>
                  <td className="py-3 px-4 text-rose-600 dark:text-rose-400">Кислотный оксид</td>
                  <td className="py-3 px-4">Соль</td>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">CaO + CO₂ → CaCO₃</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SECTION 5: PRACTICE QUIZ */}
      {activeSection === 'quiz' && (
        <div className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm space-y-6 max-w-2xl mx-auto">
          {/* Quiz Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-white/[0.08]">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
              <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Вопрос {currentQuestionIndex + 1} из {CLASSIFICATION_QUIZ_QUESTIONS.length}</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono text-xs font-bold">
              Правильно: {quizScore}
            </div>
          </div>

          {/* Question Substance Card */}
          <div className="text-center py-6 space-y-2 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/[0.06]">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Определите класс неорганического вещества:
            </span>
            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-slate-900 dark:text-white tracking-tight">
              {currentQ.substanceFormula}
            </div>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {currentQ.substanceName[language]}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options.map(opt => {
              const isSelected = selectedAnswer === opt.classId;
              const isCorrect = isAnswerSubmitted && opt.classId === currentQ.correctClass;
              const isWrong = isAnswerSubmitted && isSelected && opt.classId !== currentQ.correctClass;

              return (
                <button
                  key={opt.classId}
                  onClick={() => handleSelectQuizOption(opt.classId)}
                  disabled={isAnswerSubmitted}
                  className={`p-4 rounded-xl border text-left font-mono text-xs transition-all flex items-center justify-between cursor-pointer ${
                    isCorrect
                      ? 'bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold ring-1 ring-emerald-500'
                      : isWrong
                        ? 'bg-rose-500/15 border-rose-500 text-rose-700 dark:text-rose-300 font-bold'
                        : isSelected
                          ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-600 text-indigo-700 dark:text-indigo-300 font-bold'
                          : 'bg-white dark:bg-slate-800/70 border-slate-200/80 dark:border-white/[0.07] text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/[0.15]'
                  }`}
                >
                  <span>{opt.title[language]}</span>
                  {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                  {isWrong && <XCircle className="w-4 h-4 text-rose-500 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswerSubmitted && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.08] space-y-1.5 animate-fadeIn">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 dark:text-white">
                <Info className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Химическое объяснение:</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentQ.explanation[language]}
              </p>
            </div>
          )}

          {/* Quiz Action Buttons */}
          <div className="flex items-center justify-between gap-3 pt-2">
            {!isAnswerSubmitted ? (
              <>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>{showHint ? currentQ.hint[language] : 'Показать подсказку'}</span>
                </button>

                <button
                  onClick={handleSubmitQuizAnswer}
                  disabled={!selectedAnswer}
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold font-mono text-white transition-all ${
                    selectedAnswer
                      ? 'bg-indigo-600 hover:bg-indigo-500 active:scale-95 cursor-pointer shadow-sm'
                      : 'bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Проверить ответ
                </button>
              </>
            ) : (
              <button
                onClick={handleNextQuizQuestion}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold font-mono text-white bg-indigo-600 hover:bg-indigo-500 transition-all active:scale-95 cursor-pointer shadow-sm"
              >
                <span>Следующий вопрос</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
