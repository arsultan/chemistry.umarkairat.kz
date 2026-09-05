import { Language } from "@/types/chemistry";

const STORAGE_KEYS = {
  DISCOVERIES: "chem_explorer_discoveries",
  INSPECTED_ELEMENTS: "chem_explorer_inspected",
  QUESTS: "chem_explorer_quests",
  ACHIEVEMENTS: "chem_explorer_achievements",
  EXPERIMENTS: "chem_explorer_experiments",
  LANGUAGE: "chem_explorer_lang",
  SOUND: "chem_explorer_sound",
  CHAMBER: "chem_explorer_chamber"
};

export function loadSavedDiscoveries(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.DISCOVERIES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveDiscoveries(ids: string[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEYS.DISCOVERIES, JSON.stringify(ids));
  } catch {}
}

export function loadInspectedElements(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.INSPECTED_ELEMENTS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveInspectedElements(nums: number[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEYS.INSPECTED_ELEMENTS, JSON.stringify(nums));
  } catch {}
}

export function loadCompletedQuests(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.QUESTS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCompletedQuests(ids: string[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEYS.QUESTS, JSON.stringify(ids));
  } catch {}
}

export function loadUnlockedAchievements(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveUnlockedAchievements(ids: string[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(ids));
  } catch {}
}

export function loadExperimentCount(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EXPERIMENTS);
    return raw ? parseInt(raw, 10) : 0;
  } catch {
    return 0;
  }
}

export function saveExperimentCount(count: number): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEYS.EXPERIMENTS, String(count));
  } catch {}
}

export function loadLanguage(): Language {
  if (typeof window === "undefined") return "ru";
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language;
    if (saved && ["en", "ru", "kk"].includes(saved)) return saved;
  } catch {}
  return "ru";
}

export function saveLanguage(lang: Language): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  } catch {}
}

export function loadSoundSetting(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.SOUND);
    return saved !== "false";
  } catch {
    return true;
  }
}

export function saveSoundSetting(enabled: boolean): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEYS.SOUND, String(enabled));
  } catch {}
}

export function resetAllData(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEYS.DISCOVERIES);
    localStorage.removeItem(STORAGE_KEYS.INSPECTED_ELEMENTS);
    localStorage.removeItem(STORAGE_KEYS.QUESTS);
    localStorage.removeItem(STORAGE_KEYS.ACHIEVEMENTS);
    localStorage.removeItem(STORAGE_KEYS.EXPERIMENTS);
  } catch {}
}
