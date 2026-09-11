"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { PeriodicTable } from "@/components/PeriodicTable/PeriodicTable";
import { ReactionLab } from "@/components/ReactionLab/ReactionLab";
import { DiscoveryJournal } from "@/components/Journal/DiscoveryJournal";
import { QuestsView } from "@/components/Quests/QuestsView";
import { ClassificationView } from "@/components/Classification/ClassificationView";
import { SolubilityView } from "@/components/Solubility/SolubilityView";
import { EducationKzView } from "@/components/Education/EducationKzView";
import { PHLabView } from "@/components/PHLab/PHLabView";
import { VideoSplashScreen } from "@/components/Intro/VideoSplashScreen";
import { WelcomeModal } from "@/components/WelcomeModal";
import { JuryQRModal } from "@/components/JuryQRModal";
import { AiAssistantDrawer } from "@/components/AiAssistant/AiAssistantDrawer";
import { AiTriggerButton } from "@/components/AiAssistant/AiTriggerButton";
import { AiActionPayload } from "@/data/aiKnowledgeBase";
import { Language, MoleculeData, NavigationTab } from "@/types/chemistry";
import { MOLECULES_DATA } from "@/data/molecules";
import { QUESTS_DATA } from "@/data/quests";
import { ACHIEVEMENTS_DATA } from "@/data/achievements";
import { 
  loadSavedDiscoveries, 
  saveDiscoveries,
  loadInspectedElements,
  saveInspectedElements,
  loadCompletedQuests,
  saveCompletedQuests,
  loadUnlockedAchievements,
  saveUnlockedAchievements,
  loadExperimentCount,
  saveExperimentCount,
  loadLanguage,
  saveLanguage,
  loadSoundSetting,
  saveSoundSetting,
  loadTheme,
  saveTheme,
  loadWelcomeSeen,
  saveWelcomeSeen,
  resetAllData
} from "@/lib/storage";
import { soundEffects } from "@/lib/soundEffects";
import { Sparkles, X } from "lucide-react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [currentTab, setCurrentTab] = useState<NavigationTab>('lab');
  const [language, setLanguageState] = useState<Language>('ru');
  const [soundEnabled, setSoundEnabledState] = useState(true);
  const [theme, setThemeState] = useState<'dark' | 'light'>('dark');
  const [presentationMode, setPresentationMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showQRModal, setShowQRModal] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);

  // Core Chemistry Explorer Data
  const [discoveredIds, setDiscoveredIds] = useState<string[]>([]);
  const [inspectedElements, setInspectedElements] = useState<number[]>([]);
  const [completedQuests, setCompletedQuests] = useState<string[]>([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [experimentCount, setExperimentCountState] = useState(0);

  // Reaction Chamber atoms state
  const [chamberAtoms, setChamberAtoms] = useState<Record<string, number>>({ H: 2, O: 1 });

  // Notification toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    const savedLang = loadLanguage();
    const savedSound = loadSoundSetting();
    const savedTheme = loadTheme();
    const savedDisc = loadSavedDiscoveries();
    const savedInsp = loadInspectedElements();
    const savedQuests = loadCompletedQuests();
    const savedAch = loadUnlockedAchievements();
    const savedExp = loadExperimentCount();
    const welcomeSeen = loadWelcomeSeen();

    setLanguageState(savedLang);
    setSoundEnabledState(savedSound);
    soundEffects.enabled = savedSound;
    setThemeState(savedTheme);
    setDiscoveredIds(savedDisc);
    setInspectedElements(savedInsp);
    setCompletedQuests(savedQuests);
    setUnlockedAchievements(savedAch);
    setExperimentCountState(savedExp);

    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }

    if (!welcomeSeen) {
      setShowWelcome(true);
    }
  }, []);

  const handleAiAction = (action: AiActionPayload) => {
    soundEffects.playAtomAdd();
    if (action.type === "load_molecule") {
      if (action.atoms) {
        setChamberAtoms(action.atoms);
      }
      setCurrentTab("lab");
      showToast(`🧪 Загружено в Реактор: ${action.formula || action.label}`);
    } else if (action.type === "open_element") {
      setCurrentTab("table");
      if (action.elementNumber) {
        handleElementInspected(action.elementNumber);
      }
      showToast(`⚛️ Открыт элемент в Таблице`);
    } else if (action.type === "test_tube") {
      setCurrentTab("solubility");
      showToast(`🌧️ Открыта Виртуальная Пробирка`);
    } else if (action.type === "switch_tab" && action.tab) {
      setCurrentTab(action.tab);
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    saveLanguage(lang);
  };

  const setSoundEnabled = (val: boolean) => {
    setSoundEnabledState(val);
    saveSoundSetting(val);
    soundEffects.enabled = val;
  };

  const setTheme = (t: 'light' | 'dark') => {
    setThemeState(t);
    saveTheme(t);
    if (t === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Check achievements against current stats
  const checkAchievements = (newDiscs: string[], newInspected: number[], expCount: number) => {
    const nextUnlocked = [...unlockedAchievements];
    let newlyAwarded = false;

    ACHIEVEMENTS_DATA.forEach(ach => {
      if (!nextUnlocked.includes(ach.id)) {
        if (ach.condition.type === "discoveries_count" && newDiscs.length >= (ach.condition.value as number)) {
          nextUnlocked.push(ach.id);
          newlyAwarded = true;
          showToast(`🏆 Achievement Unlocked: ${ach.title[language]}!`);
        } else if (ach.condition.type === "specific_molecule" && newDiscs.includes(ach.condition.value as string)) {
          nextUnlocked.push(ach.id);
          newlyAwarded = true;
          showToast(`🏆 Achievement Unlocked: ${ach.title[language]}!`);
        } else if (ach.condition.type === "element_inspected" && (typeof ach.condition.value === 'number' && ach.condition.value <= 118 ? newInspected.includes(ach.condition.value) : newInspected.length >= (ach.condition.value as number))) {
          nextUnlocked.push(ach.id);
          newlyAwarded = true;
          showToast(`🏆 Achievement Unlocked: ${ach.title[language]}!`);
        } else if (ach.condition.type === "experimental_reactions" && expCount >= (ach.condition.value as number)) {
          nextUnlocked.push(ach.id);
          newlyAwarded = true;
          showToast(`🏆 Achievement Unlocked: ${ach.title[language]}!`);
        }
      }
    });

    if (newlyAwarded) {
      setUnlockedAchievements(nextUnlocked);
      saveUnlockedAchievements(nextUnlocked);
    }
  };

  // Check quests against current discoveries
  const checkQuests = (newDiscs: string[]) => {
    const nextCompleted = [...completedQuests];
    const discSet = new Set(newDiscs);
    let newlyCompleted = false;

    QUESTS_DATA.forEach(quest => {
      if (!nextCompleted.includes(quest.id)) {
        const allMet = quest.requiredMolecules.every(id => discSet.has(id));
        if (allMet) {
          nextCompleted.push(quest.id);
          newlyCompleted = true;
          showToast(`⭐ Quest Complete: ${quest.title[language]} (+${quest.rewardPoints} XP)!`);
        }
      }
    });

    if (newlyCompleted) {
      setCompletedQuests(nextCompleted);
      saveCompletedQuests(nextCompleted);
    }
  };

  const handleDiscoverMolecule = (molecule: MoleculeData) => {
    if (!discoveredIds.includes(molecule.id)) {
      const next = [...discoveredIds, molecule.id];
      setDiscoveredIds(next);
      saveDiscoveries(next);
      checkQuests(next);
      checkAchievements(next, inspectedElements, experimentCount);
    }
  };

  const handleElementInspected = (num: number) => {
    if (!inspectedElements.includes(num)) {
      const next = [...inspectedElements, num];
      setInspectedElements(next);
      saveInspectedElements(next);
      checkAchievements(discoveredIds, next, experimentCount);
    }
  };

  const handleAddToLab = (symbol: string) => {
    const current = chamberAtoms[symbol] || 0;
    setChamberAtoms({ ...chamberAtoms, [symbol]: current + 1 });
  };

  const handleCloseWelcome = (dontShowAgain: boolean) => {
    setShowWelcome(false);
    if (dontShowAgain) {
      saveWelcomeSeen(true);
    }
  };

  const handleStartExploring = (dontShowAgain: boolean) => {
    setShowWelcome(false);
    if (dontShowAgain) {
      saveWelcomeSeen(true);
    }
    setCurrentTab('lab');
  };

  const handleOpenWelcome = () => {
    soundEffects.playAtomAdd();
    setShowWelcome(true);
  };

  const handleResetProgress = () => {
    if (typeof window !== "undefined") {
      const ok = window.confirm("Reset all discovered substances, quests, and achievements?");
      if (ok) {
        resetAllData();
        setDiscoveredIds([]);
        setInspectedElements([]);
        setCompletedQuests([]);
        setUnlockedAchievements([]);
        setChamberAtoms({ H: 2, O: 1 });
        showToast("Progress has been reset.");
      }
    }
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] flex items-center justify-center font-mono text-indigo-600 dark:text-indigo-400">
        Loading Chemistry Explorer...
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#090d16] text-slate-900 dark:text-[#f1f5f9] transition-colors duration-200 ${presentationMode ? "p-2" : ""}`}>
      {/* Video Splash Screen Hero */}
      {showIntro && (
        <VideoSplashScreen
          language={language}
          setLanguage={setLanguage}
          onEnter={() => setShowIntro(false)}
        />
      )}

      {/* Header */}
      {!presentationMode && (
        <Header
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          language={language}
          setLanguage={setLanguage}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          theme={theme}
          setTheme={setTheme}
          presentationMode={presentationMode}
          setPresentationMode={setPresentationMode}
          onResetProgress={handleResetProgress}
          discoveredCount={discoveredIds.length}
          totalMolecules={MOLECULES_DATA.length}
          onOpenWelcome={handleOpenWelcome}
          onOpenIntro={() => setShowIntro(true)}
        />
      )}

      {/* Presentation Exit Floating Button */}
      {presentationMode && (
        <div className="sticky top-2 z-50 flex items-center justify-between px-4 py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/[0.1] backdrop-blur-md mb-3 shadow-lg">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Classroom Presentation Mode</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentTab('lab')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium cursor-pointer ${currentTab === 'lab' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Reaction Lab
            </button>
            <button
              onClick={() => setCurrentTab('table')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium cursor-pointer ${currentTab === 'table' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Periodic Table
            </button>
            <button
              onClick={() => setCurrentTab('ph')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium cursor-pointer ${currentTab === 'ph' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              pH Lab
            </button>
            <button
              onClick={() => setCurrentTab('solubility')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium cursor-pointer ${currentTab === 'solubility' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Solubility
            </button>
            <button
              onClick={() => setCurrentTab('classification')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium cursor-pointer ${currentTab === 'classification' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Classification
            </button>
            <button
              onClick={() => setCurrentTab('journal')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium cursor-pointer ${currentTab === 'journal' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Journal ({discoveredIds.length}/{MOLECULES_DATA.length})
            </button>
            <button
              onClick={() => setPresentationMode(false)}
              className="ml-3 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.15] text-xs font-mono text-slate-700 dark:text-white border border-slate-200 dark:border-white/[0.1] cursor-pointer"
            >
              Exit ✕
            </button>
          </div>
        </div>
      )}

      {/* Jury QR Modal */}
      {showQRModal && (
        <JuryQRModal
          language={language}
          onClose={() => setShowQRModal(false)}
        />
      )}

      {/* AI Chemistry Copilot Drawer */}
      <AiAssistantDrawer
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
        language={language}
        currentTab={currentTab}
        chamberAtoms={chamberAtoms}
        discoveredCount={discoveredIds.length}
        totalMolecules={MOLECULES_DATA.length}
        onExecuteAction={handleAiAction}
      />

      {/* Floating AI Chemistry Copilot Button */}
      <AiTriggerButton
        isOpen={isAiOpen}
        onToggle={() => setIsAiOpen(true)}
        language={language}
      />

      {/* Welcome & Academic Research Passport Modal */}
      {showWelcome && (
        <WelcomeModal
          language={language}
          onClose={handleCloseWelcome}
          onStartExploring={handleStartExploring}
        />
      )}

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-white/[0.12] shadow-2xl text-slate-900 dark:text-white text-xs font-mono animate-fadeIn">
          <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Tab Views */}
      <main className="flex-1 py-3">
        {currentTab === 'table' && (
          <PeriodicTable
            language={language}
            onAddToLab={handleAddToLab}
            chamberAtoms={chamberAtoms}
            onElementInspected={handleElementInspected}
          />
        )}

        {currentTab === 'lab' && (
          <ReactionLab
            language={language}
            chamberAtoms={chamberAtoms}
            onUpdateChamber={setChamberAtoms}
            onClearChamber={() => setChamberAtoms({})}
            onDiscoverMolecule={handleDiscoverMolecule}
            onGoToJournal={() => setCurrentTab('journal')}
            onGoToTable={() => setCurrentTab('table')}
            onInspectElement={handleElementInspected}
          />
        )}

        {currentTab === 'ph' && (
          <PHLabView
            language={language}
            onGoToLab={() => setCurrentTab('lab')}
          />
        )}

        {currentTab === 'solubility' && (
          <SolubilityView
            language={language}
            onLoadToLab={(atoms) => setChamberAtoms(atoms)}
            onGoToLab={() => setCurrentTab('lab')}
          />
        )}

        {currentTab === 'classification' && (
          <ClassificationView
            language={language}
            onLoadToLab={(atoms) => setChamberAtoms(atoms)}
            onGoToLab={() => setCurrentTab('lab')}
          />
        )}

        {currentTab === 'education' && (
          <EducationKzView
            language={language}
            onGoToLab={() => setCurrentTab('lab')}
          />
        )}

        {currentTab === 'journal' && (
          <DiscoveryJournal
            discoveredIds={discoveredIds}
            language={language}
            onGoToLab={() => setCurrentTab('lab')}
          />
        )}

        {currentTab === 'quests' && (
          <QuestsView
            language={language}
            discoveredIds={discoveredIds}
            completedQuests={completedQuests}
            unlockedAchievements={unlockedAchievements}
            onGoToLab={() => setCurrentTab('lab')}
          />
        )}
      </main>

      {/* Clean Minimalist Footer */}
      {!presentationMode && (
        <footer className="mt-auto py-3.5 border-t border-slate-200/80 dark:border-white/[0.07] bg-white/70 dark:bg-[#090a14]/70 backdrop-blur-sm text-center text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]">
            <div className="flex items-center gap-2">
              <span className="text-slate-900 dark:text-white font-bold">Chemistry Explorer</span>
              <span>•</span>
              <span>Автор: <strong className="text-slate-800 dark:text-slate-200 hover:text-[#7c6ff6] transition-colors cursor-pointer" onClick={handleOpenWelcome}>Кайрат Умар</strong></span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
              <a href="https://umarkairat.kz" target="_blank" rel="noopener noreferrer" className="hover:text-[#7c6ff6] transition-colors underline">
                umarkairat.kz
              </a>
              <span>•</span>
              <span>РНПЦ «Дарын» • Intel ISEF</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
