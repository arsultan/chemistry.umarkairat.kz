import { QuestData } from "@/types/chemistry";

export const QUESTS_DATA: QuestData[] = [
  {
    id: "quest-water-of-life",
    title: {
      en: "Water of Life",
      ru: "Живая вода",
      kk: "Тіршілік нәрі — Су"
    },
    description: {
      en: "Combine 2 Hydrogen atoms with 1 Oxygen atom to synthesize Water (H₂O).",
      ru: "Соедините 2 атома водорода и 1 атом кислорода, чтобы синтезировать воду (H₂O).",
      kk: "Суды (H₂O) синтездеу үшін 2 сутегі мен 1 оттегі атомын біріктіріңіз."
    },
    requiredMolecules: ["water"],
    rewardPoints: 100,
    badge: "💧"
  },
  {
    id: "quest-kitchen-salt",
    title: {
      en: "Kitchen Chemistry",
      ru: "Кухонная химия",
      kk: "Асүй химиясы"
    },
    description: {
      en: "Synthesize everyday table salt (NaCl) and baking soda (NaHCO₃).",
      ru: "Синтезируйте поваренную соль (NaCl) и пищевую соду (NaHCO₃).",
      kk: "Ас тұзын (NaCl) және ас содасын (NaHCO₃) синтездеңіз."
    },
    requiredMolecules: ["table-salt", "baking-soda"],
    rewardPoints: 150,
    badge: "🧂"
  },
  {
    id: "quest-atmosphere",
    title: {
      en: "Breath of Earth",
      ru: "Дыхание планеты",
      kk: "Жер тынысы"
    },
    description: {
      en: "Produce the major gases of Earth atmosphere: Nitrogen (N₂), Oxygen (O₂), and Carbon Dioxide (CO₂).",
      ru: "Получите главные газы атмосферы: Азот (N₂), Кислород (O₂) и Углекислый газ (CO₂).",
      kk: "Атмосфераның негізгі газдарын алыңыз: Азот (N₂), Оттегі (O₂) және Көмірқышқыл газы (CO₂)."
    },
    requiredMolecules: ["nitrogen-gas", "oxygen-gas", "carbon-dioxide"],
    rewardPoints: 200,
    badge: "🌍"
  },
  {
    id: "quest-fuel-and-fire",
    title: {
      en: "Energy & Fire",
      ru: "Энергия и пламя",
      kk: "Энергия мен от"
    },
    description: {
      en: "Synthesize methane (CH₄), propane (C₃H₈), and acetylene (C₂H₂).",
      ru: "Синтезируйте метан (CH₄), пропан (C₃H₈) и ацетилен (C₂H₂).",
      kk: "Метан (CH₄), пропан (C₃H₈) және ацетиленді (C₂H₂) синтездеңіз."
    },
    requiredMolecules: ["methane", "propane", "acetylene"],
    rewardPoints: 250,
    badge: "🔥"
  },
  {
    id: "quest-acids-and-bases",
    title: {
      en: "Acid & Alkali Master",
      ru: "Повелитель кислот и щелочей",
      kk: "Қышқылдар мен сілтілер шебері"
    },
    description: {
      en: "Discover stomach acid (HCl), sulfuric acid (H₂SO₄), and caustic soda (NaOH).",
      ru: "Откройте соляную кислоту (HCl), серную кислоту (H₂SO₄) и едкий натр (NaOH).",
      kk: "Тұз қышқылын (HCl), күкірт қышқылын (H₂SO₄) және каустик натрды (NaOH) ашыңыз."
    },
    requiredMolecules: ["hydrochloric-acid", "sulfuric-acid", "lye"],
    rewardPoints: 300,
    badge: "⚗️"
  },
  {
    id: "quest-minerals",
    title: {
      en: "Earth Treasures",
      ru: "Сокровища недр",
      kk: "Жер қойнауының қазынасы"
    },
    description: {
      en: "Discover quartz sand (SiO₂), limestone chalk (CaCO₃), and blue copper sulfate (CuSO₄).",
      ru: "Откройте кварцевый песок (SiO₂), мел (CaCO₃) и медный купорос (CuSO₄).",
      kk: "Кварц құмын (SiO₂), борды (CaCO₃) және мыс купоросын (CuSO₄) ашыңыз."
    },
    requiredMolecules: ["quartz-sand", "limestone", "copper-sulfate"],
    rewardPoints: 300,
    badge: "💎"
  },
  {
    id: "quest-sweet-life",
    title: {
      en: "Sweet Carbohydrates",
      ru: "Сладкие углеводы",
      kk: "Тәтті көмірсулар"
    },
    description: {
      en: "Synthesize biological fuel glucose (C₆H₁₂O₆) and table sugar sucrose (C₁₂H₂₂O₁₁).",
      ru: "Синтезируйте биологическое топливо глюкозу (C₆H₁₂O₆) и сахар сахарозу (C₁₂H₂₂O₁₁).",
      kk: "Глюкозаны (C₆H₁₂O₆) және кәдімгі қантты (C₁₂H₂₂O₁₁) синтездеңіз."
    },
    requiredMolecules: ["glucose", "sugar-sucrose"],
    rewardPoints: 350,
    badge: "🍬"
  },
  {
    id: "quest-gemstones",
    title: {
      en: "The Jeweler",
      ru: "Ювелир",
      kk: "Зергер"
    },
    description: {
      en: "Discover pure gold (Au), diamond (C), and ruby/sapphire corundum (Al₂O₃).",
      ru: "Откройте самородное золото (Au), алмаз (C) и корунд (Al₂O₃).",
      kk: "Таза алтынды (Au), алмасты (C) және жақұт корундты (Al₂O₃) ашыңыз."
    },
    requiredMolecules: ["gold-leaf", "pure-diamond", "aluminum-oxide"],
    rewardPoints: 400,
    badge: "👑"
  }
];
