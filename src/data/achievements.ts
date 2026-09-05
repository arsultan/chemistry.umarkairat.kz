import { AchievementData } from "@/types/chemistry";

export const ACHIEVEMENTS_DATA: AchievementData[] = [
  {
    id: "first-bond",
    title: {
      en: "First Chemical Bond",
      ru: "Первая химическая связь",
      kk: "Алғашқы химиялық байланыс"
    },
    description: {
      en: "Synthesize your very first molecule in the lab.",
      ru: "Синтезируйте свою самую первую молекулу в лаборатории.",
      kk: "Зертханада алғашқы молекулаңызды синтездеңіз."
    },
    icon: "🔬",
    condition: { type: "discoveries_count", value: 1 }
  },
  {
    id: "water-maker",
    title: {
      en: "Life Generator",
      ru: "Источник жизни",
      kk: "Өмір бастауы"
    },
    description: {
      en: "Discover Water (H₂O) by combining 2 Hydrogen and 1 Oxygen atoms.",
      ru: "Откройте воду (H₂O), соединив 2 атома водорода и 1 атом кислорода.",
      kk: "2 сутегі мен 1 оттегіні біріктіріп, суды (H₂O) ашыңыз."
    },
    icon: "💧",
    condition: { type: "specific_molecule", value: "water" }
  },
  {
    id: "explorer-5",
    title: {
      en: "Junior Chemist",
      ru: "Юный химик",
      kk: "Жас химик"
    },
    description: {
      en: "Discover 5 different chemical substances.",
      ru: "Откройте 5 различных веществ.",
      kk: "5 түрлі затты ашыңыз."
    },
    icon: "🧪",
    condition: { type: "discoveries_count", value: 5 }
  },
  {
    id: "explorer-15",
    title: {
      en: "Laboratory Pioneer",
      ru: "Исследователь лаборатории",
      kk: "Зертхана ізашары"
    },
    description: {
      en: "Discover 15 different substances in your journal.",
      ru: "Откройте 15 веществ в своем журнале открытий.",
      kk: "Журналыңызға 15 затты тіркеңіз."
    },
    icon: "⭐",
    condition: { type: "discoveries_count", value: 15 }
  },
  {
    id: "explorer-30",
    title: {
      en: "Alchemist Master",
      ru: "Магистр алхимии",
      kk: "Алхимия шебері"
    },
    description: {
      en: "Discover 30 substances in the chemical universe.",
      ru: "Откройте 30 веществ в химической вселенной.",
      kk: "Химиялық ғаламда 30 затты ашыңыз."
    },
    icon: "🔮",
    condition: { type: "discoveries_count", value: 30 }
  },
  {
    id: "table-grandmaster",
    title: {
      en: "Periodic Scholar",
      ru: "Знаток таблицы",
      kk: "Кесте білгірі"
    },
    description: {
      en: "Inspect details of at least 20 different chemical elements.",
      ru: "Изучите карточки не менее 20 различных элементов.",
      kk: "Кемінде 20 түрлі элементтің карточкасын зерттеңіз."
    },
    icon: "📜",
    condition: { type: "element_inspected", value: 20 }
  },
  {
    id: "curious-experimenter",
    title: {
      en: "Mad Scientist",
      ru: "Смелый экспериментатор",
      kk: "Батыл тәжірибеші"
    },
    description: {
      en: "Try 5 experimental atomic combinations.",
      ru: "Проведите 5 смелых экспериментальных реакций.",
      kk: "5 эксперименттік атомдық реакция жүргізіңіз."
    },
    icon: "⚡",
    condition: { type: "experimental_reactions", value: 5 }
  },
  {
    id: "kazakhstan-rich",
    title: {
      en: "Kazakhstan Subsoil Treasure",
      ru: "Богатства Казахстана",
      kk: "Қазақстан қазынасы"
    },
    description: {
      en: "Inspect Uranium (U) or Copper (Cu) from the Periodic Table.",
      ru: "Изучите свойства Урана (U) или Меди (Cu) в таблице.",
      kk: "Кестеден Уран (U) немесе Мыс (Cu) элементін зерттеңіз."
    },
    icon: "🇰🇿",
    condition: { type: "element_inspected", value: 92 }
  }
];
