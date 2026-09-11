"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  X, 
  Send, 
  User, 
  Settings, 
  Key, 
  Check, 
  Copy, 
  Zap, 
  FlaskConical, 
  ChevronRight, 
  Trash2,
  Atom
} from "lucide-react";
import { Language } from "@/types/chemistry";
import { AiMessage, AiActionPayload, ChemistryContext } from "@/data/aiKnowledgeBase";
import { soundEffects } from "@/lib/soundEffects";

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  currentTab: "table" | "lab" | "solubility" | "classification" | "education" | "molecule3d" | "journal" | "quests";
  chamberAtoms: Record<string, number>;
  discoveredCount: number;
  totalMolecules: number;
  onExecuteAction: (action: AiActionPayload) => void;
}

export const AiAssistantDrawer: React.FC<AiAssistantDrawerProps> = ({
  isOpen,
  onClose,
  language,
  currentTab,
  chamberAtoms,
  discoveredCount,
  totalMolecules,
  onExecuteAction
}) => {
  const [messages, setMessages] = useState<AiMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [selectedModel, setSelectedModel] = useState("gemini-3.5-flash");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [executedActionId, setExecutedActionId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const savedKey = localStorage.getItem("chemistry_gemini_api_key");
      if (savedKey) setApiKey(savedKey);

      const savedModel = localStorage.getItem("chemistry_gemini_model");
      if (savedModel) setSelectedModel(savedModel);

      const savedHistory = localStorage.getItem("chemistry_ai_messages");
      if (savedHistory) {
        const parsed = JSON.parse(savedHistory);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      try {
        localStorage.setItem("chemistry_ai_messages", JSON.stringify(messages.slice(-25)));
      } catch {
        // ignore
      }
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 150);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSaveSettings = () => {
    localStorage.setItem("chemistry_gemini_api_key", apiKey.trim());
    localStorage.setItem("chemistry_gemini_model", selectedModel);
    setShowSettings(false);
    soundEffects.playAtomAdd();
  };

  const handleClearHistory = () => {
    setMessages([]);
    localStorage.removeItem("chemistry_ai_messages");
    soundEffects.playAtomAdd();
  };

  const handleSend = async (queryText?: string) => {
    const text = queryText || inputValue.trim();
    if (!text || isLoading) return;

    soundEffects.playAtomAdd();

    const userMsg: AiMessage = {
      id: `usr_${Date.now()}`,
      role: "user",
      content: text,
      timestamp: Date.now()
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const context: ChemistryContext = {
        currentTab,
        chamberAtoms,
        discoveredCount,
        totalMolecules,
        language
      };

      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          context,
          apiKey: apiKey.trim() || undefined,
          model: selectedModel
        })
      });

      if (!res.ok) {
        throw new Error("HTTP error " + res.status);
      }

      const data = await res.json();
      
      const assistantMsg: AiMessage = {
        id: `ai_${Date.now()}`,
        role: "assistant",
        content: data.content || "Ответ сформирован.",
        timestamp: Date.now(),
        actions: data.actions || []
      };

      setMessages(prev => [...prev, assistantMsg]);
      soundEffects.playDiscovery();
    } catch (err) {
      console.error("Failed to fetch AI response:", err);
      const fallbackMsg: AiMessage = {
        id: `ai_${Date.now()}`,
        role: "assistant",
        content: language === "kk" 
          ? "Кешіріңіз, жауапты алу кезінде қате орын алды. Қайта көріңіз немесе басқа сұрақ қойыңыз."
          : language === "en"
          ? "Sorry, an error occurred while generating the response. Please try again."
          : "Извините, произошла ошибка при получении ответа. Пожалуйста, попробуйте снова.",
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActionClick = (action: AiActionPayload, actionKey: string) => {
    soundEffects.playDiscovery();
    setExecutedActionId(actionKey);
    onExecuteAction(action);
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    soundEffects.playAtomAdd();
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getPromptChips = () => {
    const tabPrompts: Record<string, Record<Language, string[]>> = {
      lab: {
        ru: [
          "⚛️ Темы по химии за 10 класс (Органика)",
          "🧪 Как синтезировать серную кислоту H₂SO₄?",
          "🔥 Реакция горения метана CH₄",
          "💧 Почему вода H₂O уникальна по свойствам?"
        ],
        kk: [
          "⚛️ 10-сынып химия бағдарламасының тақырыптары",
          "🧪 Күкірт қышқылын (H₂SO₄) қалай алуға болады?",
          "🔥 Метанның (CH₄) жану реакциясы",
          "💧 Су молекуласының құрылымы"
        ],
        en: [
          "⚛️ 10th grade Chemistry Curriculum (Organic)",
          "🧪 How to synthesize sulfuric acid H₂SO₄?",
          "🔥 Combustion reaction of methane CH₄",
          "💧 Why is water H₂O unique?"
        ]
      },
      table: {
        ru: [
          "⚛️ Почему углерод C — основа всей жизни?",
          "📊 Как меняется радиус атома в периоде?",
          "✨ Объясни инертность благородных газов",
          "🧲 Почему железо Fe ферромагнитно?"
        ],
        kk: [
          "⚛️ Көміртек неге тіршіліктің негізі болып табылады?",
          "📊 Период бойынша атом радиусы қалай өзгереді?",
          "✨ Асыл газдар неге химиялық инертті?",
          "🧲 Темір (Fe) неліктен магнитті?"
        ],
        en: [
          "⚛️ Why is Carbon the foundation of organic life?",
          "📊 How does atomic radius vary across a period?",
          "✨ Explain noble gas stability",
          "🧲 Why is iron Fe ferromagnetic?"
        ]
      },
      solubility: {
        ru: [
          "🌧️ Качественная реакция на Ba²⁺ и SO₄²⁻",
          "🧪 Как определить катион железа Fe³⁺?",
          "⚖️ Что такое произведение растворимости (ПР)?",
          "💡 Почему осадок AgCl темнеет на свету?"
        ],
        kk: [
          "🌧️ Ba²⁺ және SO₄²⁻ иондарына сапалық реакция",
          "🧪 Fe³⁺ темір катионын қалай анықтауға болады?",
          "⚖️ Ерігіштік көбейтіндісі (ПР) деген не?",
          "💡 AgCl тұнбасы неге қараяды?"
        ],
        en: [
          "🌧️ Landmark test for Ba²⁺ and SO₄²⁻",
          "🧪 How to test for Fe³⁺ iron cation?",
          "⚖️ What is solubility product Ksp?",
          "💡 Why does AgCl darken under light?"
        ]
      },
      classification: {
        ru: [
          "⚗️ Чем амфотерные оксиды отличаются от основных?",
          "🧬 Приведи примеры кислотных ангидридов",
          "🧪 Разница между средними и кислыми солями"
        ],
        kk: [
          "⚗️ Амфотерлі оксидтердің негіздік оксидтерден айырмашылығы",
          "🧬 Қышқылдық ангидридтерге мысалдар",
          "🧪 Орта және қышқыл тұздардың айырмашылығы"
        ],
        en: [
          "⚗️ Difference between amphoteric and basic oxides",
          "🧬 Examples of acid anhydrides",
          "🧪 Acid salts vs normal salts in chemistry"
        ]
      },
      quests: {
        ru: [
          "🏆 Подскажи стратегию для выполнения квестов",
          "💡 Дай намёк на следующую молекулу"
        ],
        kk: [
          "🏆 Квесттерді орындаудың ең тиімді тәсілі",
          "💡 Келесі молекулаға ғылыми тұспал"
        ],
        en: [
          "🏆 Best strategy for completing chemistry quests",
          "💡 Hint for the next secret molecule"
        ]
      },
      journal: {
        ru: [
          "📖 Какие молекулы самые важные в науке?",
          "💎 Как устроена кристаллическая решётка алмаза?"
        ],
        kk: [
          "📖 Ғылым үшін ең маңызды молекулалар қандай?",
          "💎 Алмаздың кристалдық торы қалай құрылған?"
        ],
        en: [
          "📖 Which molecules are most vital for science?",
          "💎 Describe the crystal lattice structure of diamond"
        ]
      }
    };

    const tabConfig = tabPrompts[currentTab] || tabPrompts.lab;
    return tabConfig[language] || tabConfig.ru;
  };

  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, lIdx) => {
      if (line.startsWith("### ")) {
        return (
          <h4 key={lIdx} className="text-sm font-bold text-[#7c6ff6] dark:text-[#a59bfb] mt-2.5 mb-1 font-mono tracking-wide flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#7c6ff6] dark:text-[#c4b5fd] shrink-0" />
            {line.replace("### ", "")}
          </h4>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h3 key={lIdx} className="text-base font-bold text-slate-900 dark:text-white mt-3 mb-1.5 font-mono">
            {line.replace("## ", "")}
          </h3>
        );
      }
      if (line.startsWith("• ") || line.startsWith("- ") || line.startsWith("* ")) {
        return (
          <li key={lIdx} className="text-xs text-slate-700 dark:text-slate-300 ml-3.5 list-disc leading-relaxed my-0.5">
            {parseInlineStyles(line.slice(2))}
          </li>
        );
      }
      if (/^\d+\.\s/.test(line)) {
        return (
          <li key={lIdx} className="text-xs text-slate-700 dark:text-slate-300 ml-3.5 list-decimal leading-relaxed my-0.5">
            {parseInlineStyles(line.replace(/^\d+\.\s/, ""))}
          </li>
        );
      }
      if (line.trim() === "") {
        return <div key={lIdx} className="h-1.5" />;
      }
      return (
        <p key={lIdx} className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed my-1">
          {parseInlineStyles(line)}
        </p>
      );
    });
  };

  const parseInlineStyles = (content: string): React.ReactNode => {
    const parts = content.split(/(\*\*.*?\*\*|`.*?`|\$.*?\$)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-semibold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={i} className="px-1.5 py-0.5 rounded bg-[#f5f3ff] dark:bg-[#1f2244] text-[#6d5df6] dark:text-[#c4b5fd] font-mono text-[11px] border border-[#7c6ff6]/30">
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith("$") && part.endsWith("$")) {
        return (
          <span key={i} className="font-mono text-amber-700 dark:text-amber-300 font-medium px-1 bg-amber-50 dark:bg-amber-950/30 rounded border border-amber-200 dark:border-amber-500/20">
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
  };

  const tabLabels = {
    lab: { ru: "Квантовый Реактор", kk: "Кванттық Реактор", en: "Reaction Lab" },
    table: { ru: "Таблица Менделеева", kk: "Менделеев Кестесі", en: "Periodic Table" },
    solubility: { ru: "Пробирка и Осадки", kk: "Пробирка және Тұнбалар", en: "Solubility Lab" },
    classification: { ru: "Классификация", kk: "Классификация", en: "Classification" },
    education: { ru: "Наука в РК & NGS", kk: "Ғылым РК & NGS", en: "Science in RK & NGS" },
    molecule3d: { ru: "3D Молекулы", kk: "3D Молекулалар", en: "3D Studio" },
    journal: { ru: "Журнал Открытий", kk: "Ашылулар Журналы", en: "Discovery Journal" },
    quests: { ru: "Научные Квесты", kk: "Ғылыми Квесттер", en: "Quests" }
  };

  const chamberSummary = Object.entries(chamberAtoms)
    .filter(([_, count]) => count > 0)
    .map(([sym, count]) => `${count}${sym}`)
    .join(" + ") || (language === 'kk' ? 'Бос' : language === 'en' ? 'Empty' : 'Пусто');

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 z-40 bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-sm sm:hidden transition-opacity"
      />

      {/* Main Drawer: Soft Violet & White Luxury Theme */}
      <aside className="fixed inset-y-0 right-0 z-50 w-full sm:w-[460px] md:w-[490px] bg-white dark:bg-[#0e0f1c] text-slate-900 dark:text-white border-l border-slate-200 dark:border-[#7c6ff6]/25 shadow-2xl flex flex-col font-sans transition-transform duration-300 ease-out animate-in slide-in-from-right">
        
        {/* Top Header */}
        <div className="relative p-4 border-b border-slate-200 dark:border-[#7c6ff6]/20 bg-slate-50/90 dark:bg-[#121326]/90 flex items-center justify-between shrink-0">
          {/* Soft violet glowing line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7c6ff6] via-[#a59bfb] to-[#6366f1]" />

          <div className="flex items-center gap-3">
            {/* Mascot Avatar */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#a59bfb] shadow-[0_0_12px_rgba(124,111,246,0.35)] shrink-0">
              <img
                src="/images/ai_avatar.jpg"
                alt="CHEMISTRY LAB AI Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Styled CHEMISTRY LAB AI Header */}
            <div>
              <div className="flex items-center gap-1.5 font-sans">
                <span className="text-base font-black tracking-tight text-slate-900 dark:text-white">
                  CHEMISTRY
                </span>
                <span className="text-base font-black tracking-tight text-[#7c6ff6] dark:text-[#a59bfb]">
                  LAB
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-black uppercase rounded bg-[#7c6ff6]/15 text-[#7c6ff6] dark:text-[#c4b5fd] border border-[#7c6ff6]/30">
                  AI
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-[#c4b5fd]/80 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c6ff6] animate-pulse" />
                {language === 'kk' ? 'Химиялық интеллектуалды кеңесші' : language === 'en' ? 'Smart Chemical Copilot' : 'Интеллектуальный научный наставник'}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer ${showSettings ? 'bg-[#7c6ff6]/20 text-[#7c6ff6] dark:text-[#c4b5fd]' : ''}`}
              title="Settings & API Key"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={handleClearHistory}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors cursor-pointer"
              title="Clear Chat History"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Close Panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Context Telemetry Bar */}
        <div className="px-4 py-2 bg-[#f5f3ff]/80 dark:bg-[#131428] border-b border-slate-200 dark:border-[#7c6ff6]/15 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-[#c4b5fd]/90 shrink-0">
          <div className="flex items-center gap-2 truncate">
            <span className="text-[#6d5df6] dark:text-[#a59bfb] font-semibold flex items-center gap-1">
              <FlaskConical className="w-3.5 h-3.5" />
              {tabLabels[currentTab]?.[language] || currentTab}:
            </span>
            <span className="text-slate-800 dark:text-slate-200 truncate">
              {currentTab === 'lab' ? chamberSummary : `${discoveredCount}/${totalMolecules} ${language === 'kk' ? 'ашылды' : language === 'en' ? 'discovered' : 'открыто'}`}
            </span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-white dark:bg-[#1c1f3d] border border-slate-200 dark:border-[#7c6ff6]/30 text-[#6d5df6] dark:text-[#c4b5fd] font-bold">
            {language.toUpperCase()}
          </span>
        </div>

        {/* Settings Sub-Panel */}
        {showSettings && (
          <div className="p-4 bg-slate-100 dark:bg-[#151730] border-b border-slate-200 dark:border-[#7c6ff6]/30 shrink-0 space-y-3 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 font-mono">
                <Key className="w-3.5 h-3.5 text-[#7c6ff6]" />
                {language === 'kk' ? 'AI Model & API баптаулары' : language === 'en' ? 'AI Model & API Settings' : 'Настройки AI & API'}
              </h4>
              <span className="text-[10px] font-bold text-[#7c6ff6] dark:text-[#a59bfb]">
                🟢 Live AI Connected
              </span>
            </div>

            <div>
              <label className="block text-[10px] text-slate-600 dark:text-slate-400 mb-1 font-mono">
                Google AI Studio API Key:
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AQ... или AIzaSy..."
                className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-[#0b0c17] border border-slate-300 dark:border-[#7c6ff6]/40 focus:border-[#7c6ff6] text-xs font-mono text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none transition"
              />
              <p className="text-[9px] text-slate-500 dark:text-slate-400 mt-1">
                Ключ подключен в системе; здесь можно ввести персональный ключ.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-1">
                <label className="block text-[10px] text-slate-600 dark:text-slate-400 mb-1 font-mono">Модель:</label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full px-2 py-1.5 rounded-lg bg-white dark:bg-[#0b0c17] border border-slate-300 dark:border-[#7c6ff6]/40 text-xs font-mono text-slate-900 dark:text-slate-100 outline-none cursor-pointer"
                >
                  <option value="gemini-3.5-flash">Gemini 3.5 Flash (Рекомендуется)</option>
                  <option value="gemini-flash-latest">Gemini Flash Latest</option>
                  <option value="gemini-3.6-flash">Gemini 3.6 Flash</option>
                  <option value="gemini-3.1-flash-lite">Gemini 3.1 Flash Lite</option>
                  <option value="gemini-3.7-flash">Gemini 3.7 Flash</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleSaveSettings}
                  className="px-4 py-1.5 rounded-lg bg-[#7c6ff6] hover:bg-[#6b5ce7] text-white text-xs font-bold font-mono transition cursor-pointer shadow-sm"
                >
                  {language === 'kk' ? 'Сақтау' : language === 'en' ? 'Save' : 'Сохранить'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
          {/* Welcome Screen if Empty */}
          {messages.length === 0 && (
            <div className="py-6 px-4 rounded-2xl bg-gradient-to-b from-[#f5f3ff]/90 via-white to-white dark:from-[#161835] dark:via-[#0e0f1c] dark:to-[#0e0f1c] border border-[#7c6ff6]/20 text-center space-y-4 shadow-sm">
              <div className="relative inline-block w-16 h-16 rounded-full overflow-hidden border-2 border-[#a59bfb] shadow-[0_0_20px_rgba(124,111,246,0.3)] mx-auto">
                <img
                  src="/images/ai_avatar.jpg"
                  alt="CHEMISTRY LAB AI"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center gap-1.5 font-sans">
                  <span className="text-base font-black tracking-tight text-slate-900 dark:text-white">
                    CHEMISTRY
                  </span>
                  <span className="text-base font-black tracking-tight text-[#7c6ff6] dark:text-[#a59bfb]">
                    LAB
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] font-black uppercase rounded bg-[#7c6ff6]/15 text-[#7c6ff6] dark:text-[#c4b5fd] border border-[#7c6ff6]/30">
                    AI
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm mx-auto">
                  {language === 'kk'
                    ? '10-сынып органикалық химиясы, реакция теңдеулері, формулалар және 118 элемент бойынша сұрақ қойыңыз.'
                    : language === 'en'
                    ? 'Ask about 10th grade organic chemistry, reaction equations, stoichiometry calculations, or 118 periodic elements.'
                    : 'Задайте любой вопрос по темам 10 класса (органика), расчетам задач, механизмам реакций или 118 элементам Менделеева.'}
                </p>
              </div>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 gap-2 text-left pt-2">
                <div className="p-2.5 rounded-xl bg-white dark:bg-[#15172e] border border-slate-200 dark:border-[#7c6ff6]/20 shadow-sm space-y-1">
                  <div className="text-[11px] font-bold text-[#6d5df6] dark:text-[#c4b5fd] font-mono flex items-center gap-1.5">
                    <FlaskConical className="w-3.5 h-3.5 text-[#7c6ff6]" />
                    {language === 'kk' ? 'Синтез және реакция' : language === 'en' ? 'Synthesis & Lab' : 'Синтез веществ'}
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    {language === 'kk' ? 'Реакторға бірден жүктеу' : language === 'en' ? '1-click load chamber' : 'Загрузка в реактор в 1 клик'}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-white dark:bg-[#15172e] border border-slate-200 dark:border-[#7c6ff6]/20 shadow-sm space-y-1">
                  <div className="text-[11px] font-bold text-[#6d5df6] dark:text-[#c4b5fd] font-mono flex items-center gap-1.5">
                    <Atom className="w-3.5 h-3.5 text-[#7c6ff6]" />
                    {language === 'kk' ? '10-сынып Органика' : language === 'en' ? '10th Grade Organic' : '10 класс Органика'}
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    {language === 'kk' ? 'Бутлеров, алкандар, спирттер' : language === 'en' ? 'Butlerov, alkanes, alcohols' : 'Бутлеров, алканы, спирты'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Conversation History */}
          {messages.map((msg, index) => {
            const isUser = msg.role === "user";
            return (
              <div
                key={msg.id || index}
                className={`flex gap-2.5 ${isUser ? "justify-end" : "justify-start"} animate-in fade-in`}
              >
                {/* AI Mascot Avatar */}
                {!isUser && (
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#a59bfb] shrink-0 shadow-sm mt-0.5">
                    <img
                      src="/images/ai_avatar.jpg"
                      alt="AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className={`space-y-2 max-w-[85%] sm:max-w-[80%]`}>
                  {/* Message Bubble */}
                  <div
                    className={`relative p-3.5 rounded-2xl text-xs leading-relaxed ${
                      isUser
                        ? "bg-gradient-to-r from-[#7c6ff6] to-[#6366f1] text-white rounded-tr-none shadow-md"
                        : "bg-slate-50 dark:bg-[#15172e] text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-[#7c6ff6]/20 rounded-tl-none shadow-sm backdrop-blur-md"
                    }`}
                  >
                    {isUser ? (
                      <p className="whitespace-pre-wrap font-sans">{msg.content}</p>
                    ) : (
                      <div className="space-y-1">{renderFormattedText(msg.content)}</div>
                    )}

                    {/* Copy Button */}
                    {!isUser && (
                      <div className="flex items-center justify-end gap-1.5 mt-2 pt-2 border-t border-slate-200 dark:border-[#7c6ff6]/10">
                        <button
                          onClick={() => handleCopy(msg.content, index)}
                          className="p-1 rounded text-slate-400 hover:text-[#7c6ff6] dark:hover:text-[#c4b5fd] transition cursor-pointer"
                          title="Copy text"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-3 h-3 text-[#7c6ff6]" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Interactive Action Buttons */}
                  {!isUser && msg.actions && msg.actions.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      {msg.actions.map((act, aIdx) => {
                        const actionKey = `${msg.id}_act_${aIdx}`;
                        const isExecuted = executedActionId === actionKey;

                        return (
                          <button
                            key={aIdx}
                            onClick={() => handleActionClick(act, actionKey)}
                            className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-300 shadow-sm cursor-pointer ${
                              isExecuted
                                ? "bg-[#ede9fe] dark:bg-[#252852] text-[#6d5df6] dark:text-[#c4b5fd] border border-[#7c6ff6]"
                                : "bg-[#f5f3ff] dark:bg-[#1a1c38] hover:bg-[#ede9fe] dark:hover:bg-[#252a55] text-[#5b51d8] dark:text-[#c4b5fd] border border-[#7c6ff6]/30 hover:border-[#7c6ff6] hover:scale-[1.01] active:scale-[0.99]"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <Zap className={`w-3.5 h-3.5 ${isExecuted ? 'text-[#7c6ff6]' : 'text-amber-500 animate-pulse'}`} />
                              {act.label}
                            </span>
                            {isExecuted ? (
                              <Check className="w-4 h-4 text-[#7c6ff6]" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-[#7c6ff6] dark:text-[#a59bfb]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* User Avatar */}
                {isUser && (
                  <div className="w-7 h-7 rounded-lg bg-[#ede9fe] dark:bg-slate-800 border border-[#7c6ff6]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4 text-[#6d5df6] dark:text-[#c4b5fd]" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-2.5 justify-start animate-in fade-in">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#a59bfb] shrink-0 shadow-sm">
                <img
                  src="/images/ai_avatar.jpg"
                  alt="AI Thinking"
                  className="w-full h-full object-cover animate-pulse"
                />
              </div>
              <div className="p-3.5 rounded-2xl rounded-tl-none bg-slate-50 dark:bg-[#15172e] border border-slate-200 dark:border-[#7c6ff6]/20 text-xs text-[#6d5df6] dark:text-[#c4b5fd] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7c6ff6] animate-ping" />
                <span className="font-mono text-[11px] font-semibold">
                  {language === 'kk' ? 'Жауап дайындалуда...' : language === 'en' ? 'Synthesizing response...' : 'Анализирую химические данные и законы...'}
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompt Chips */}
        <div className="px-4 py-2.5 bg-slate-50/90 dark:bg-[#0c0d18] border-t border-slate-200 dark:border-[#7c6ff6]/15 shrink-0 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 w-max">
            {getPromptChips().map((chip, cIdx) => (
              <button
                key={cIdx}
                onClick={() => handleSend(chip)}
                disabled={isLoading}
                className="px-2.5 py-1.5 rounded-full bg-white dark:bg-[#15172e] hover:bg-[#f5f3ff] dark:hover:bg-[#1f2244] text-slate-700 dark:text-[#d8b4fe] hover:text-[#5b51d8] dark:hover:text-white border border-slate-200 dark:border-[#7c6ff6]/25 hover:border-[#7c6ff6] text-[11px] font-mono transition-all duration-200 whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 disabled:opacity-50 shadow-sm"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-slate-200 dark:border-[#7c6ff6]/20 bg-white dark:bg-[#0e0f1c] shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="relative flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                language === 'kk' 
                  ? 'Химиялық сұрақ, реакция, 10-сынып тақырыбы...' 
                  : language === 'en'
                  ? 'Ask chemical formula, reaction, 10th grade topic...'
                  : 'Задайте вопрос по химии, реакции или теме 10 класса...'
              }
              disabled={isLoading}
              className="w-full pl-4 pr-12 py-3 rounded-xl bg-slate-50 dark:bg-[#080912] border border-slate-300 dark:border-[#7c6ff6]/30 focus:border-[#7c6ff6] dark:focus:border-[#a59bfb] text-xs font-sans text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none shadow-inner transition duration-200"
            />

            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="absolute right-1.5 p-2 rounded-lg bg-[#7c6ff6] hover:bg-[#6b5ce7] text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_0_12px_rgba(124,111,246,0.35)] cursor-pointer hover:scale-105 active:scale-95"
              title="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-[#c4b5fd]/70 mt-2 font-mono px-1">
            <span>
              {language === 'kk' ? 'Жіберу үшін Enter басыңыз' : language === 'en' ? 'Press Enter to send' : 'Нажмите Enter для отправки'}
            </span>
            <div className="flex items-center gap-1 font-sans">
              <span className="font-bold text-slate-700 dark:text-slate-300">CHEMISTRY</span>
              <span className="font-bold text-[#7c6ff6] dark:text-[#a59bfb]">LAB</span>
              <span className="text-[#6d5df6] dark:text-[#c4b5fd] font-extrabold">AI</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
