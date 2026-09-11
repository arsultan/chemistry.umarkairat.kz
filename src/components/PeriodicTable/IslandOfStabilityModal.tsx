"use client";

import React, { useState } from "react";
import { Language } from "@/types/chemistry";
import { getTranslation } from "@/data/i18n";
import { soundEffects } from "@/lib/soundEffects";
import { 
  X, 
  Sparkles, 
  Compass, 
  Atom, 
  Zap, 
  Layers, 
  ShieldAlert, 
  Activity,
  Flame,
  Info
} from "lucide-react";

interface IslandOfStabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

interface NuclidePoint {
  id: string;
  name: string;
  z: number;
  n: number;
  halfLife: string;
  status: "synthesized" | "under_synthesis" | "theoretical_peak" | "stable_peninsula";
  desc: { ru: string; en: string; kk: string };
  reaction?: string;
}

const NUCLIDE_HOTSPOTS: NuclidePoint[] = [
  {
    id: "pb208",
    name: "²⁰⁸Pb (Свинец-208)",
    z: 82,
    n: 126,
    halfLife: "Стабилен (дважды магический)",
    status: "stable_peninsula",
    desc: {
      ru: "Вершина «Полуострова стабильности». Дважды магическое ядро (Z=82, N=126). Абсолютно стабилен.",
      en: "Peak of the 'Peninsula of Stability'. Doubly magic nucleus (Z=82, N=126). Completely stable.",
      kk: "«Тұрақтылық түбегінің» шыңы. Екі есе сиқырлы ядро (Z=82, N=126). Толық тұрақты."
    }
  },
  {
    id: "fl289",
    name: "²⁸⁹Fl (Флеровий-289)",
    z: 114,
    n: 175,
    halfLife: "~2 секунды",
    status: "synthesized",
    reaction: "²⁴⁴Pu + ⁴⁸Ca → ²⁸⁹Fl + 3n",
    desc: {
      ru: "Первый подтвержденный шаг к Острову стабильности. Время жизни 2 секунды — гигантское для сверхтяжелого ядра!",
      en: "First confirmed step onto the Island of Stability. 2 seconds half-life is enormous for superheavies!",
      kk: "Тұрақтылық аралына жасалған алғашқы қадам. 2 секундтық өмір сүру уақыты — аса ауыр ядро үшін өте ұзақ!"
    }
  },
  {
    id: "og294",
    name: "²⁹⁴Og (Оганесон-294)",
    z: 118,
    n: 176,
    halfLife: "~0.7 миллисекунды",
    status: "synthesized",
    reaction: "²⁴⁹Cf + ⁴⁸Ca → ²⁹⁴Og + 3n",
    desc: {
      ru: "Самый тяжелый синтезированный нуклид в истории человечества. Граница 7-го периода.",
      en: "Heaviest synthesized nuclide in human history. Marks the boundary of Period 7.",
      kk: "Адамзат тарихында синтезделген ең ауыр нуклид. 7-периодтың шекарасы."
    }
  },
  {
    id: "uue299",
    name: "²⁹⁹Uue (Унунэнний-299)",
    z: 119,
    n: 180,
    halfLife: "Синтезируется сейчас",
    status: "under_synthesis",
    reaction: "²⁴⁹Bk + ⁵⁰Ti → ²⁹⁹Uue",
    desc: {
      ru: "Элемент №119 — первый элемент 8-го периода! Прямо сейчас синтезируется в ОИЯИ (Дубна) и RIKEN (Япония).",
      en: "Element #119 — opens Period 8! Currently being forged at JINR (Dubna) and RIKEN (Japan).",
      kk: "№119 элемент — 8-периодты ашады! Қазіргі уақытта ОИЯИ (Дубна) мен RIKEN (Жапония) зертханаларында синтезделуде."
    }
  },
  {
    id: "ubn304",
    name: "³⁰⁴Ubn (Унбинилий-304)",
    z: 120,
    n: 184,
    halfLife: "Предсказано: до секунд",
    status: "under_synthesis",
    reaction: "²⁴⁹Cf + ⁵⁴Cr → ³⁰⁴Ubn",
    desc: {
      ru: "Сферическое магическое число нейтронов N=184! Берег Острова стабильности. Синтез ведется в Германии и Дубне.",
      en: "Magic neutron number N=184! Coast of the Island of Stability. Under active synthesis in GSI and Dubna.",
      kk: "Сиқырлы нейтрон саны N=184! Тұрақтылық аралының жағасы. Германия мен Дубнада синтезделу үстінде."
    }
  },
  {
    id: "ubh310",
    name: "³¹⁰Ubh (Унбигексий-310)",
    z: 126,
    n: 184,
    halfLife: "Предсказано: от лет до 1 000 000 лет!",
    status: "theoretical_peak",
    reaction: "²⁴⁴Pu + ⁶⁴Ni → ³¹⁰Ubh (Теория)",
    desc: {
      ru: "Дважды магический центр «Острова Стабильности» (Z=126, N=184). Ядра могут существовать геологические эпохи!",
      en: "Doubly magic peak of the Island of Stability (Z=126, N=184). Nuclei could survive for geological eras!",
      kk: "Тұрақтылық аралының екі есе сиқырлы орталығы (Z=126, N=184). Ядролар геологиялық дәуірлер бойы сақталуы мүмкін!"
    }
  }
];

export const IslandOfStabilityModal: React.FC<IslandOfStabilityModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [selectedPoint, setSelectedPoint] = useState<NuclidePoint>(NUCLIDE_HOTSPOTS[4]); // default to Ubn-304
  const [activeTab, setActiveTab] = useState<"map" | "factory" | "limit">("map");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl transition-all max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="p-5 flex items-center justify-between border-b border-slate-200/80 dark:border-white/[0.08] bg-slate-50/90 dark:bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
              <Compass className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  {language === "ru" && "Остров Стабильности & Предел Таблицы"}
                  {language === "en" && "Island of Stability & Limits of Matter"}
                  {language === "kk" && "Тұрақтылық Аралы & Кесте Шегі"}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
                  Z = 114–126
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === "ru" && "Теория Сиборга-Оганесяна, 8-й период и Фабрика сверхтяжелых элементов"}
                {language === "en" && "Seaborg-Oganessian Model, Period 8 and Superheavy Synthesis Factory"}
                {language === "kk" && "Сиборг-Оганесян теориясы, 8-период және аса ауыр элементтер фабрикасы"}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundEffects.playAtomAdd();
              onClose();
            }}
            className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subnav Tabs */}
        <div className="flex items-center gap-2 px-5 pt-3 pb-2 border-b border-slate-200/80 dark:border-white/[0.06] bg-slate-100/60 dark:bg-slate-950/40 shrink-0 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveTab("map")}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === "map"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{language === "ru" ? "Карта нуклидов (Z vs N)" : language === "kk" ? "Нуклидтер картасы (Z vs N)" : "Nuclide Map (Z vs N)"}</span>
          </button>

          <button
            onClick={() => setActiveTab("factory")}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === "factory"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800"
            }`}
          >
            <Atom className="w-3.5 h-3.5" />
            <span>{language === "ru" ? "Фабрика синтеза (Циклотрон ДЦ-280)" : language === "kk" ? "Синтез фабрикасы (ДЦ-280)" : "Synthesis Factory (DC-280)"}</span>
          </button>

          <button
            onClick={() => setActiveTab("limit")}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === "limit"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{language === "ru" ? "Предел таблицы (Z=137 и Z=173)" : language === "kk" ? "Кесте шегі (Z=137 & Z=173)" : "Limits of Periodic Table"}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {activeTab === "map" && (
            <div className="space-y-5">
              {/* Interactive Nuclear Landscape Diagram */}
              <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white border border-indigo-500/20 shadow-xl relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                      {language === "ru" ? "Топографическая карта ядерной стабильности" : "Topographical Nuclear Stability Landscape"}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold">
                      {language === "ru" ? "Остров стабильности в океане радиоактивности" : "Island of Stability in the Ocean of Decay"}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" /> {language === "ru" ? "Стабильно" : "Stable"}
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block ml-2" /> {language === "ru" ? "Синтез" : "Synthesis"}
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block ml-2" /> {language === "ru" ? "Остров" : "Island"}
                  </div>
                </div>

                {/* SVG Visual Scheme */}
                <div className="relative w-full h-56 sm:h-64 bg-slate-950/80 rounded-xl border border-white/10 p-3 flex flex-col justify-between select-none">
                  {/* Grid Lines & Axis */}
                  <div className="absolute inset-x-8 bottom-8 top-4 border-b border-l border-white/20">
                    {/* Horizontal Magic Lines Z=82, Z=114, Z=126 */}
                    <div className="absolute inset-x-0 bottom-[15%] border-t border-dashed border-emerald-500/40 flex items-center justify-end pr-2">
                      <span className="text-[9px] font-mono text-emerald-400">Z=82 (Pb)</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-[60%] border-t border-dashed border-indigo-500/40 flex items-center justify-end pr-2">
                      <span className="text-[9px] font-mono text-indigo-400">Z=114 (Fl)</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-[85%] border-t border-dashed border-purple-500/40 flex items-center justify-end pr-2">
                      <span className="text-[9px] font-mono text-purple-400">Z=126 (Ubh)</span>
                    </div>

                    {/* Vertical Magic Line N=126, N=184 */}
                    <div className="absolute inset-y-0 left-[25%] border-r border-dashed border-emerald-500/40 flex flex-col justify-end pb-1 pl-1">
                      <span className="text-[9px] font-mono text-emerald-400">N=126</span>
                    </div>
                    <div className="absolute inset-y-0 left-[80%] border-r border-dashed border-purple-500/40 flex flex-col justify-end pb-1 pl-1">
                      <span className="text-[9px] font-mono text-purple-400 font-bold">N=184</span>
                    </div>

                    {/* Peninsula of Stability Glow */}
                    <div className="absolute bottom-[10%] left-[18%] w-16 h-12 rounded-full bg-emerald-500/20 blur-sm pointer-events-none" />

                    {/* Island of Stability Glow */}
                    <div className="absolute bottom-[55%] left-[70%] w-24 h-20 rounded-full bg-purple-500/25 blur-md pointer-events-none animate-pulse" />
                    <div className="absolute bottom-[68%] left-[73%] text-[10px] font-bold text-purple-300 font-mono tracking-wider pointer-events-none">
                      🏝️ ISLAND OF STABILITY
                    </div>

                    {/* Ocean of Spontaneous Fission label */}
                    <div className="absolute bottom-[35%] left-[45%] text-[9px] text-sky-400/50 font-mono italic pointer-events-none">
                      🌊 Море спонтанного деления
                    </div>

                    {/* Interactive Hotspots */}
                    {NUCLIDE_HOTSPOTS.map((pt, idx) => {
                      const xPercent = 18 + ((pt.n - 120) / (188 - 120)) * 68;
                      const yPercent = 12 + ((pt.z - 80) / (130 - 80)) * 74;
                      const isSelected = selectedPoint.id === pt.id;

                      let dotColor = "bg-indigo-400";
                      if (pt.status === "stable_peninsula") dotColor = "bg-emerald-400";
                      if (pt.status === "synthesized") dotColor = "bg-cyan-400";
                      if (pt.status === "under_synthesis") dotColor = "bg-amber-400";
                      if (pt.status === "theoretical_peak") dotColor = "bg-fuchsia-400 shadow-[0_0_12px_#d946ef]";

                      return (
                        <button
                          key={pt.id}
                          onClick={() => {
                            soundEffects.playAtomAdd();
                            setSelectedPoint(pt);
                          }}
                          style={{
                            left: `${xPercent}%`,
                            bottom: `${yPercent}%`
                          }}
                          className={`absolute -translate-x-1/2 translate-y-1/2 flex items-center justify-center transition-all cursor-pointer group z-10 ${
                            isSelected ? "scale-150 z-20 ring-2 ring-white" : "hover:scale-125"
                          }`}
                        >
                          <span className={`w-3.5 h-3.5 rounded-full ${dotColor} border border-black/40 flex items-center justify-center text-[7px] font-bold text-black`}>
                            {idx + 1}
                          </span>
                          <span className="absolute top-full mt-1 hidden group-hover:block bg-black/90 text-[9px] text-white px-1.5 py-0.5 rounded whitespace-nowrap z-30 font-mono">
                            {pt.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Y Axis Label */}
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[9px] font-mono text-slate-400 -rotate-90">
                    Протоны (Z) ↑
                  </div>

                  {/* X Axis Label */}
                  <div className="text-right text-[9px] font-mono text-slate-400 pr-8">
                    Нейтроны (N) →
                  </div>
                </div>
              </div>

              {/* Selected Hotspot Detail Card */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg font-bold font-mono text-slate-900 dark:text-white">
                      {selectedPoint.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
                      Z={selectedPoint.z}, N={selectedPoint.n}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      T½: <strong className="text-slate-900 dark:text-white">{selectedPoint.halfLife}</strong>
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                    {selectedPoint.desc[language] || selectedPoint.desc.ru}
                  </p>
                  {selectedPoint.reaction && (
                    <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-1 rounded-lg border border-indigo-500/20 inline-block mt-1">
                      Ядерная реакция: <strong>{selectedPoint.reaction}</strong>
                    </div>
                  )}
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <span className="text-xs text-slate-400">
                    Нажимайте на точки 1–6 на карте для деталей
                  </span>
                </div>
              </div>

              {/* 3 Core Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] space-y-2">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                    <Atom className="w-4 h-4" />
                    <h5 className="text-xs font-bold uppercase tracking-wider font-mono">
                      {language === "ru" ? "Магические числа" : "Magic Numbers"}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {language === "ru" 
                      ? "Ядра с числом протонов или нейтронов 2, 8, 20, 28, 50, 82, 114, 126 и N=184 имеют полностью заполненные сферические оболочки и обладают сверхстабильностью."
                      : "Nuclei with 2, 8, 20, 28, 50, 82, 114, 126 protons and N=184 neutrons have completely closed shells."}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] space-y-2">
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                    <Sparkles className="w-4 h-4" />
                    <h5 className="text-xs font-bold uppercase tracking-wider font-mono">
                      {language === "ru" ? "8-й Период Таблицы" : "Period 8 Frontier"}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {language === "ru"
                      ? "Элементы 119 (Uue) и 120 (Ubn) открывают новый период таблицы Менделеева. Их синтез ведет мировая наука в ОИЯИ (Дубна) и RIKEN (Япония)."
                      : "Elements 119 and 120 open the 8th period. They are being actively synthesized at Dubna and RIKEN."}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <Layers className="w-4 h-4" />
                    <h5 className="text-xs font-bold uppercase tracking-wider font-mono">
                      {language === "ru" ? "Суперактиноиды (5g)" : "Superactinides (5g)"}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {language === "ru"
                      ? "Начиная с элемента 121 (Ubu), квантовая механика предсказывает заполнение g-орбиталей (l=4), вмещающих 18 электронов с небывалыми химическими свойствами!"
                      : "From element 121 onwards, quantum physics predicts populating 5g orbitals accommodating 18 electrons."}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "factory" && (
            <div className="space-y-5">
              <div className="p-6 rounded-2xl bg-slate-900 text-white border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold">
                      {language === "ru" ? "Фабрика сверхтяжелых элементов (ОИЯИ Дубна)" : "Superheavy Element Factory (FLNR Dubna)"}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {language === "ru" ? "Циклотрон ДЦ-280 — самый мощный в мире генератор пучков тяжелых ионов" : "DC-280 Cyclotron — world's highest intensity heavy-ion beam accelerator"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 space-y-2">
                    <span className="text-xs font-bold font-mono text-cyan-400">
                      1. Магический «снаряд»: Кальций-48 (⁴⁸Ca)
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {language === "ru"
                        ? "Кальций-48 — уникальный природный изотоп с 20 протонами и 28 нейтронами (дважды магический!). Он имеет колоссальный избыток нейтронов, необходимый для попадания на Остров стабильности. Стоимость 1 грамма чистого ⁴⁸Ca превышает 200 000 $!"
                        : "Calcium-48 is doubly magic (20p, 28n). It has an extreme neutron excess critical to reaching the Island of Stability. 1 gram costs over $200,000!"}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 space-y-2">
                    <span className="text-xs font-bold font-mono text-purple-400">
                      2. Актиноидные мишени (Берклий-249, Калифорний-249)
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {language === "ru"
                        ? "Мишени изготавливаются в высокопоточных ядерных реакторах (Ок-Ридж, США и НИИАР, Димитровград). Чтобы получить несколько миллиграммов Берклия-249, плутоний облучают нейтронами почти целый год!"
                        : "Targets are synthesized in high-flux nuclear reactors. Producing milligrams of Berkelium-249 takes almost a full year of continuous neutron irradiation!"}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 leading-relaxed">
                  <strong>Вероятность слияния ядер:</strong> Среди 10 000 000 000 000 000 000 (10¹⁹) столкновений ионов в ускорителе лишь <strong>одно единственное</strong> ядро преодолевает кулоновское отталкивание и сливается в атом Оганесона или Унунэнния!
                </div>
              </div>
            </div>
          )}

          {activeTab === "limit" && (
            <div className="space-y-5">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {language === "ru" ? "Где заканчивается Таблица Менделеева?" : "Where does the Periodic Table end?"}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {language === "ru" ? "Релятивистские квантовые пределы Фейнмана и Дирака" : "Relativistic Quantum Limits of Feynman and Dirac"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.08] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono text-slate-900 dark:text-white">
                        Предел Фейнмана: Z = 137
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400">
                        Фейнманий (Fy)
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {language === "ru"
                        ? "Скорость электрона на 1s-орбитали: v = Z · α · c. При Z = 137 скорость электрона достигает скорости света c! Нерелятивистская квантовая механика не может описать атомы тяжелее 137."
                        : "Electron 1s velocity: v = Z · α · c. At Z=137, electron speed equals light speed c! Non-relativistic QM breaks down."}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.08] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono text-slate-900 dark:text-white">
                        Предел Дирака: Z ≈ 172–173
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400">
                        Унсепттрий (Ust)
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {language === "ru"
                        ? "С учетом конечного радиуса ядра уравнение Дирака сдвигает предел до Z ≈ 173. При этом энергия 1s-уровня падает ниже границы отрицательного континуума (-2mc²), и атом начинает спонтанно рождать электрон-позитронные пары прямо из физического вакуума!"
                        : "With finite nuclear radius, Dirac equation shifts the limit to Z ≈ 173, where 1s orbital dives into the Dirac sea, sparking spontaneous electron-positron pair creation from vacuum!"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200/80 dark:border-white/[0.08] bg-slate-50/90 dark:bg-slate-950/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 shrink-0">
          <span>
            {language === "ru" && "Лаборатория ядерных реакций им. Г.Н. Флёрова (ОИЯИ, Дубна) & RIKEN (Япония)"}
            {language === "en" && "Flerov Laboratory of Nuclear Reactions (JINR, Dubna) & RIKEN (Japan)"}
            {language === "kk" && "Г.Н. Флеров атындағы Ядролық реакциялар зертханасы (ОИЯИ, Дубна) & RIKEN"}
          </span>
          <button
            onClick={() => {
              soundEffects.playAtomAdd();
              onClose();
            }}
            className="px-4 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-medium hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {getTranslation(language, "close")}
          </button>
        </div>
      </div>
    </div>
  );
};
