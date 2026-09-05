"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { PeriodicTable } from "@/components/PeriodicTable/PeriodicTable";
import { ReactionLab } from "@/components/ReactionLab/ReactionLab";
import { DiscoveryJournal } from "@/components/Journal/DiscoveryJournal";
import { QuestsView } from "@/components/Quests/QuestsView";
import { Language, MoleculeData } from "@/types/chemistry";
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
  resetAllData
} from "@/lib/storage";
import { soundEffects } from "@/lib/soundEffects";
import { Sparkles, Trophy, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [currentTab, setCurrentTab] = useState<'table' | 'lab' | 'journal' | 'quests'>('lab');
  const [language, setLanguageState] = useState<Language>('ru');
  const [soundEnabled, setSoundEnabledState] = useState(true);
  const [presentationMode, setPresentationMode] = useState(false);

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
    const savedDisc = loadSavedDiscoveries();
    const savedInsp = loadInspectedElements();
    const savedQuests = loadCompletedQuests();
    const savedAch = loadUnlockedAchievements();
    const savedExp = loadExperimentCount();

    setLanguageState(savedLang);
    setSoundEnabledState(savedSound);
    soundEffects.enabled = savedSound;
    setDiscoveredIds(savedDisc);
    setInspectedElements(savedInsp);
    setCompletedQuests(savedQuests);
    setUnlockedAchievements(savedAch);
    setExperimentCountState(savedExp);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    saveLanguage(lang);
  };

  const setSoundEnabled = (val: boolean) => {
    setSoundEnabledState(val);
    saveSoundSetting(val);
    soundEffects.enabled = val;
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
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
      <div className="min-h-screen bg-[#0b0f14] flex items-center justify-center font-mono text-cyan-400">
        Loading Chemistry Explorer...
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${presentationMode ? "p-2 bg-[#070a0e]" : ""}`}>
      {/* Header */}
      {!presentationMode && (
        <Header
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          language={language}
          setLanguage={setLanguage}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          presentationMode={presentationMode}
          setPresentationMode={setPresentationMode}
          onResetProgress={handleResetProgress}
          discoveredCount={discoveredIds.length}
          totalMolecules={MOLECULES_DATA.length}
        />
      )}

      {/* Presentation Exit Floating Button */}
      {presentationMode && (
        <div className="sticky top-2 z-50 flex items-center justify-between px-4 py-2 rounded-2xl bg-[#10141a]/90 border border-cyan-500/40 backdrop-blur-md mb-4">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-bold text-white uppercase tracking-wider">Classroom Presentation Mode</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentTab('lab')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${currentTab === 'lab' ? 'bg-cyan-400 text-black' : 'text-slate-300'}`}
            >
              Reaction Lab
            </button>
            <button
              onClick={() => setCurrentTab('table')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${currentTab === 'table' ? 'bg-cyan-400 text-black' : 'text-slate-300'}`}
            >
              Periodic Table
            </button>
            <button
              onClick={() => setCurrentTab('journal')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${currentTab === 'journal' ? 'bg-cyan-400 text-black' : 'text-slate-300'}`}
            >
              Journal ({discoveredIds.length}/{MOLECULES_DATA.length})
            </button>
            <button
              onClick={() => setPresentationMode(false)}
              className="ml-4 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white border border-white/20"
            >
              Exit ✕
            </button>
          </div>
        </div>
      )}

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#10141a] border border-[#00d2ff] shadow-[0_0_25px_rgba(0,210,255,0.4)] text-white text-xs font-mono animate-bounce">
          <Sparkles className="w-4 h-4 text-[#00d2ff]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Tab Views */}
      <main className="flex-1 py-4">
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

      {/* Footer */}
      {!presentationMode && (
        <footer className="mt-auto py-6 border-t border-white/10 bg-[#070a0e] text-center text-xs font-mono text-slate-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              <span className="text-[#00d2ff] font-bold">Chemistry Explorer</span> • Sibling Project of{" "}
              <a href="https://umarkairat.kz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white underline">
                umarkairat.kz
              </a>
            </div>
            <div>
              Designed for School Chemistry Education &amp; Science Presentations
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
