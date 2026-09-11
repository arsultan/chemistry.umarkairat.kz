import { LocalizedString } from "@/types/chemistry";

export type PHMediumCategory = 'strong_acid' | 'weak_acid' | 'neutral' | 'weak_base' | 'strong_base';

export interface PHSolution {
  id: string;
  name: LocalizedString;
  formula: string;
  formulaAscii: string;
  ph: number;
  category: PHMediumCategory;
  naturalColor: string;
  textColor: string;
  icon: string;
  chemicalEquation: string;
  hIonConcentration: string;
  ohIonConcentration: string;
  description: LocalizedString;
  funFact: LocalizedString;
  hazard: 'safe' | 'caution' | 'danger';
}

export interface IndicatorType {
  id: 'universal' | 'litmus' | 'phenolphthalein' | 'methyl_orange' | 'red_cabbage';
  name: LocalizedString;
  dryStripColor: string;
  description: LocalizedString;
  getColor: (ph: number) => { color: string; label: LocalizedString; textDark?: boolean };
}

export const UNIVERSAL_PH_SCALE = [
  { ph: 0, color: "#e11d48", label: { ru: "Ярко-красный", kk: "Ашық қызыл", en: "Bright Red" }, medium: { ru: "Сильнокислая", kk: "Күшті қышқылдық", en: "Strongly Acidic" } },
  { ph: 1, color: "#ef4444", label: { ru: "Красный", kk: "Қызыл", en: "Red" }, medium: { ru: "Сильнокислая", kk: "Күшті қышқылдық", en: "Strongly Acidic" } },
  { ph: 2, color: "#f97316", label: { ru: "Красно-оранжевый", kk: "Қызыл-қызғылт сары", en: "Red-Orange" }, medium: { ru: "Сильнокислая", kk: "Күшті қышқылдық", en: "Strongly Acidic" } },
  { ph: 3, color: "#fb923c", label: { ru: "Оранжевый", kk: "Қызғылт сары", en: "Orange" }, medium: { ru: "Слабокислая", kk: "Әлсіз қышқылдық", en: "Weakly Acidic" } },
  { ph: 4, color: "#f59e0b", label: { ru: "Желто-оранжевый", kk: "Сары-қызғылт сары", en: "Yellow-Orange" }, medium: { ru: "Слабокислая", kk: "Әлсіз қышқылдық", en: "Weakly Acidic" } },
  { ph: 5, color: "#eab308", label: { ru: "Желтый", kk: "Сары", en: "Yellow" }, medium: { ru: "Слабокислая", kk: "Әлсіз қышқылдық", en: "Weakly Acidic" } },
  { ph: 6, color: "#84cc16", label: { ru: "Светло-зеленый", kk: "Ашық жасыл", en: "Yellow-Green" }, medium: { ru: "Слабокислая", kk: "Әлсіз қышқылдық", en: "Weakly Acidic" } },
  { ph: 7, color: "#22c55e", label: { ru: "Изумрудно-зеленый", kk: "Жасыл (Бейтарап)", en: "Emerald Green" }, medium: { ru: "Нейтральная", kk: "Бейтарап", en: "Neutral" } },
  { ph: 8, color: "#14b8a6", label: { ru: "Зеленовато-синий", kk: "Жасыл-көгілдір", en: "Greenish-Cyan" }, medium: { ru: "Слабощелочная", kk: "Әлсіз сілтілік", en: "Weakly Alkaline" } },
  { ph: 9, color: "#06b6d4", label: { ru: "Бирюзово-голубой", kk: "Көгілдір", en: "Teal Blue" }, medium: { ru: "Слабощелочная", kk: "Әлсіз сілтілік", en: "Weakly Alkaline" } },
  { ph: 10, color: "#3b82f6", label: { ru: "Синий", kk: "Көк", en: "Blue" }, medium: { ru: "Слабощелочная", kk: "Әлсіз сілтілік", en: "Weakly Alkaline" } },
  { ph: 11, color: "#6366f1", label: { ru: "Темно-синий", kk: "Қою көк", en: "Deep Blue" }, medium: { ru: "Слабощелочная", kk: "Әлсіз сілтілік", en: "Weakly Alkaline" } },
  { ph: 12, color: "#8b5cf6", label: { ru: "Фиолетовый", kk: "Күлгін", en: "Violet" }, medium: { ru: "Сильнощелочная", kk: "Күшті сілтілік", en: "Strongly Alkaline" } },
  { ph: 13, color: "#7c3aed", label: { ru: "Глубокий фиолетовый", kk: "Қою күлгін", en: "Deep Violet" }, medium: { ru: "Сильнощелочная", kk: "Күшті сілтілік", en: "Strongly Alkaline" } },
  { ph: 14, color: "#4c1d95", label: { ru: "Темно-пурпурный", kk: "Қара күлгін", en: "Dark Purple" }, medium: { ru: "Сильнощелочная", kk: "Күшті сілтілік", en: "Strongly Alkaline" } }
];

export const INDICATOR_TYPES: IndicatorType[] = [
  {
    id: 'universal',
    name: {
      ru: "Универсальная индикаторная бумага",
      kk: "Универсалды индикатор қағазы",
      en: "Universal Indicator Paper"
    },
    dryStripColor: "#fef08a",
    description: {
      ru: "Смесь индикаторов. Показывает непрерывный спектр от красного (pH 0) через зеленый (pH 7) до темно-фиолетового (pH 14).",
      kk: "Индикаторлар қоспасы. Қышқылда қызылдан (pH 0), бейтарапта жасылға (pH 7) және сілтіде қою күлгінге (pH 14) дейін өзгереді.",
      en: "A mixture of indicators providing a smooth full spectrum transition from red (pH 0) through green (pH 7) to deep violet (pH 14)."
    },
    getColor: (ph: number) => {
      const rounded = Math.min(14, Math.max(0, Math.round(ph)));
      const item = UNIVERSAL_PH_SCALE[rounded] || UNIVERSAL_PH_SCALE[7];
      return {
        color: item.color,
        label: item.label,
        textDark: rounded >= 4 && rounded <= 6
      };
    }
  },
  {
    id: 'litmus',
    name: {
      ru: "Лакмусовая бумага",
      kk: "Лакмус қағазы",
      en: "Litmus Paper"
    },
    dryStripColor: "#fed7aa",
    description: {
      ru: "Классический краситель из лишайников. В кислой среде (pH < 4.5) резко окрашивается в ярко-красный, в нейтральной — лиловый, в щелочной (pH > 8.3) — в королевский синий.",
      kk: "Қынадан алынатын табиғи индикатор. Қышқылда ашық қызыл, бейтарапта күлгін, сілтіде қанық көк түске енеді.",
      en: "Classic natural dye from lichens. Turns bright red in acids (pH < 4.5), purple in neutral, and royal blue in alkaline solutions (pH > 8.3)."
    },
    getColor: (ph: number) => {
      if (ph <= 4.5) {
        return {
          color: "#dc2626",
          label: { ru: "Красный (Кислая среда)", kk: "Қызыл (Қышқыл)", en: "Red (Acid)" }
        };
      }
      if (ph < 8.3) {
        return {
          color: "#a855f7",
          label: { ru: "Лиловый (Нейтральная)", kk: "Күлгін (Бейтарап)", en: "Purple (Neutral)" }
        };
      }
      return {
        color: "#2563eb",
        label: { ru: "Королевский синий (Щёлочь)", kk: "Көк (Сілті)", en: "Royal Blue (Alkali)" }
      };
    }
  },
  {
    id: 'phenolphthalein',
    name: {
      ru: "Фенолфталеин",
      kk: "Фенолфталеин",
      en: "Phenolphthalein"
    },
    dryStripColor: "#f8fafc",
    description: {
      ru: "«Фенолфталеиновый в щелочах — малиновый!». В кислых и нейтральных средах (pH < 8.2) бесцветен, в щелочных (pH 8.2–12) вспыхивает сочным малиновым цветом.",
      kk: "«Фенолфталеин сілтіде — таңқурай түсті!». Қышқыл мен бейтарапта түссіз, ал сілтіде ашық таңқурай түске боялады.",
      en: "Colorless in acidic and neutral media (pH < 8.2), but turns intensely magenta/raspberry pink in alkaline solutions (pH 8.2–12)."
    },
    getColor: (ph: number) => {
      if (ph < 8.2) {
        return {
          color: "#f1f5f9",
          label: { ru: "Бесцветный (pH < 8.2)", kk: "Түссіз (pH < 8.2)", en: "Colorless (pH < 8.2)" },
          textDark: true
        };
      }
      if (ph <= 12) {
        return {
          color: "#e11d48",
          label: { ru: "Ярко-малиновый (Щёлочь!)", kk: "Таңқурай қызыл (Сілті!)", en: "Vibrant Magenta (Alkali!)" }
        };
      }
      return {
        color: "#fb7185",
        label: { ru: "Светло-розовый", kk: "Ашық қызғылт", en: "Pale Pink" }
      };
    }
  },
  {
    id: 'methyl_orange',
    name: {
      ru: "Метилоранж (Метиловый оранжевый)",
      kk: "Метилоранж (Метил қызғылт сары)",
      en: "Methyl Orange"
    },
    dryStripColor: "#fed7aa",
    description: {
      ru: "Индикатор для титрования. В кислой среде (pH < 3.1) окрашивается в розово-красный, а в нейтральной и щелочной (pH > 4.4) переходит в желтый.",
      kk: "Тифрлеуге арналған индикатор. Қышқылда (pH < 3.1) қызғылт-қызылға боялады, бейтарап және сілтіде (pH > 4.4) сарыға айналады.",
      en: "Key indicator for titrations. Turns crimson-pink in strong acid (pH < 3.1), shifting to golden yellow in neutral and alkaline solutions (pH > 4.4)."
    },
    getColor: (ph: number) => {
      if (ph <= 3.1) {
        return {
          color: "#e11d48",
          label: { ru: "Розово-красный (pH < 3.1)", kk: "Қызғылт-қызыл", en: "Crimson-Red" }
        };
      }
      if (ph <= 4.4) {
        return {
          color: "#f97316",
          label: { ru: "Оранжевый переходный", kk: "Қызғылт сары", en: "Orange" }
        };
      }
      return {
        color: "#eab308",
        label: { ru: "Желтый (pH > 4.4)", kk: "Сары (pH > 4.4)", en: "Yellow" },
        textDark: true
      };
    }
  },
  {
    id: 'red_cabbage',
    name: {
      ru: "Сок краснокочанной капусты",
      kk: "Қызыл орамжапырақ шырыны",
      en: "Red Cabbage Extract"
    },
    dryStripColor: "#ede9fe",
    description: {
      ru: "Природный индикатор на основе антоцианов. От красного в сильной кислоте (pH 1-2), фиолетового в нейтральной (pH 7), до изумрудно-зеленого и желтого в сильной щелочи.",
      kk: "Антоциандарға бай табиғи индикатор. Қышқылда қызыл, бейтарапта күлгін, күшті сілтіде жасыл және сары түске өзгереді.",
      en: "Fascinating natural anthocyanin indicator. Shifts from red in acid through purple at pH 7 to emerald green and yellow in alkali."
    },
    getColor: (ph: number) => {
      if (ph <= 2) return { color: "#e11d48", label: { ru: "Красный", kk: "Қызыл", en: "Red" } };
      if (ph <= 4) return { color: "#ec4899", label: { ru: "Розово-фиолетовый", kk: "Қызғылт күлгін", en: "Pink-Violet" } };
      if (ph <= 6) return { color: "#a855f7", label: { ru: "Сиреневый", kk: "Сирень", en: "Violet" } };
      if (ph <= 7.5) return { color: "#6366f1", label: { ru: "Сине-фиолетовый", kk: "Көк-күлгін", en: "Blue-Purple" } };
      if (ph <= 9) return { color: "#06b6d4", label: { ru: "Сине-зеленый", kk: "Көк-жасыл", en: "Blue-Green" } };
      if (ph <= 12) return { color: "#22c55e", label: { ru: "Изумрудно-зеленый", kk: "Жасыл", en: "Green" } };
      return { color: "#eab308", label: { ru: "Желтый (Сильная щёлочь)", kk: "Сары", en: "Yellow" }, textDark: true };
    }
  }
];

export const PH_SOLUTIONS: PHSolution[] = [
  {
    id: "battery_acid",
    name: {
      ru: "Аккумуляторный электролит (H₂SO₄)",
      kk: "Аккумулятор электролиті (H₂SO₄)",
      en: "Battery Acid (H₂SO₄)"
    },
    formula: "H₂SO₄ (35% р-р)",
    formulaAscii: "H2SO4",
    ph: 0.5,
    category: "strong_acid",
    naturalColor: "rgba(239, 68, 68, 0.25)",
    textColor: "#ef4444",
    icon: "⚡",
    chemicalEquation: "H₂SO₄ → 2H⁺ + SO₄²⁻",
    hIonConcentration: "3.16 × 10⁻¹ моль/л",
    ohIonConcentration: "3.16 × 10⁻¹⁴ моль/л",
    description: {
      ru: "Концентрированный раствор серной кислоты. Крайне едкая жидкость, мгновенно обугливающая органические вещества.",
      kk: "Күкірт қышқылының ерітіндісі. Органикалық заттарды көмірге айналдыратын аса күйдіргіш сұйықтық.",
      en: "Concentrated sulfuric acid solution used in lead-acid batteries. Highly corrosive strong mineral acid."
    },
    funFact: {
      ru: "Серная кислота жадно забирает воду из сахара, превращая его в черную дымящуюся колонну чистого углерода!",
      kk: "Күкірт қышқылы қанттан суды сорып алып, оны қара көміртек бағанасына айналдырады!",
      en: "Sulfuric acid eagerly strips water from sucrose, creating a foaming black tower of carbon!"
    },
    hazard: "danger"
  },
  {
    id: "stomach_acid",
    name: {
      ru: "Желудочный сок (HCl)",
      kk: "Асқазан сөлі (HCl)",
      en: "Gastric Stomach Acid (HCl)"
    },
    formula: "HCl (0.5% р-р)",
    formulaAscii: "HCl",
    ph: 1.5,
    category: "strong_acid",
    naturalColor: "rgba(249, 115, 22, 0.2)",
    textColor: "#f97316",
    icon: "🧬",
    chemicalEquation: "HCl → H⁺ + Cl⁻",
    hIonConcentration: "3.16 × 10⁻² моль/л",
    ohIonConcentration: "3.16 × 10⁻¹³ моль/л",
    description: {
      ru: "Вырабатывается обкладочными клетками желудка для активации ферментов пепсина и стерилизации пищи.",
      kk: "Асқазанның париетальды жасушалары түзетін тұз қышқылы. Тағамды қорыту мен залалсыздандыруға арналған.",
      en: "Hydrochloric acid secreted by gastric cells to activate digestive enzymes and destroy ingested pathogens."
    },
    funFact: {
      ru: "Стенки желудка защищены непрерывно обновляемым слоем щелочной слизи, иначе кислота переварила бы сам желудок!",
      kk: "Асқазан өзін сілтілі шырыш қабатымен қорғайды, әйтпесе қышқыл асқазанның өзін ерітіп жіберер еді!",
      en: "The stomach is shielded by a thick alkaline mucus layer constantly renewed to prevent auto-digestion!"
    },
    hazard: "caution"
  },
  {
    id: "lemon_juice",
    name: {
      ru: "Свежий лимонный сок",
      kk: "Жаңа сығылған лимон шырыны",
      en: "Fresh Lemon Juice"
    },
    formula: "C₆H₈O₇ (Лимонная к-та)",
    formulaAscii: "C6H8O7",
    ph: 2.2,
    category: "weak_acid",
    naturalColor: "rgba(250, 204, 21, 0.3)",
    textColor: "#facc15",
    icon: "🍋",
    chemicalEquation: "C₆H₈O₇ ⇌ C₆H₇O₇⁻ + H⁺",
    hIonConcentration: "6.31 × 10⁻³ моль/л",
    ohIonConcentration: "1.58 × 10⁻¹² моль/л",
    description: {
      ru: "Содержит 5–8% лимонной кислоты и аскорбиновую кислоту. Классический пример естественной пищевой органической кислоты.",
      kk: "Құрамында 5–8% лимон қышқылы мен C дәрумені бар табиғи органикалық қышқыл.",
      en: "Contains 5–8% citric acid and ascorbic acid. The classic natural organic acid of citrus fruits."
    },
    funFact: {
      ru: "Раньше лимонный сок использовали как секретные невидимые чернила: при слабом нагреве над свечой кислота обугливается и проявляется!",
      kk: "Лимон шырынын ертеде құпия сия ретінде қолданған: қағазды жылытқанда қышқыл күйіп, жазу көрінеді!",
      en: "Historically used as spy invisible ink: heating gently causes citric acid to caramelize and appear brown!"
    },
    hazard: "safe"
  },
  {
    id: "vinegar",
    name: {
      ru: "Столовый уксус (CH₃COOH)",
      kk: "Асханалық сірке суы (CH₃COOH)",
      en: "White Vinegar (CH₃COOH)"
    },
    formula: "CH₃COOH (6% р-р)",
    formulaAscii: "CH3COOH",
    ph: 2.9,
    category: "weak_acid",
    naturalColor: "rgba(251, 146, 60, 0.2)",
    textColor: "#fb923c",
    icon: "🍏",
    chemicalEquation: "CH₃COOH ⇌ CH₃COO⁻ + H⁺",
    hIonConcentration: "1.26 × 10⁻³ моль/л",
    ohIonConcentration: "7.94 × 10⁻¹² моль/л",
    description: {
      ru: "Водный раствор уксусной кислоты, продукт уксуснокислого брожения. Активно используется в кулинарии и для удаления накипи.",
      kk: "Сірке қышқылының сулы ерітіндісі. Тағам дайындауда және қақты кетіруде жиі қолданылады.",
      en: "Dilute aqueous solution of acetic acid. Used in culinary preservation and descaling calcium deposits."
    },
    funFact: {
      ru: "Уксус за 24 часа полностью растворяет скорлупу сырого яйца (карбонат кальция CaCO₃), оставляя полупрозрачное прыгучее резиновое яйцо!",
      kk: "Сірке суы шикі жұмыртқа қабығын (CaCO₃) бір тәулікте ерітіп, секіргіш резеңке жұмыртқа жасайды!",
      en: "Vinegar completely dissolves eggshell (calcium carbonate), leaving an intact translucent bouncy egg!"
    },
    hazard: "safe"
  },
  {
    id: "black_coffee",
    name: {
      ru: "Черный кофе",
      kk: "Қара кофе",
      en: "Black Coffee"
    },
    formula: "Хлорогеновые к-ты",
    formulaAscii: "Coffee",
    ph: 5.0,
    category: "weak_acid",
    naturalColor: "rgba(120, 53, 15, 0.4)",
    textColor: "#b45309",
    icon: "☕",
    chemicalEquation: "R-COOH ⇌ R-COO⁻ + H⁺",
    hIonConcentration: "1.00 × 10⁻⁵ моль/л",
    ohIonConcentration: "1.00 × 10⁻⁹ моль/л",
    description: {
      ru: "Слабокислый напиток благодаря хлорогеновым и хинным кислотам, экстрагируемым при заваривании обжаренных зерен.",
      kk: "Қуырылған кофе дәндерінен бөлінетін хлороген қышқылдары бар әлсіз қышқылды сусын.",
      en: "Mildly acidic beverage infused with chlorogenic and quinic organic acids from roasted coffee beans."
    },
    funFact: {
      ru: "Добавление молока (pH 6.6) связывает горькие дубильные танины белком казеином, снижая раздражающее действие на желудок.",
      kk: "Сүт қосу кофедегі ащы таниндерді казеин ақуызымен байланыстырып, асқазанға әсерін жұмсартады.",
      en: "Adding milk binds bitter polyphenolic tannins to casein proteins, reducing gastric irritation."
    },
    hazard: "safe"
  },
  {
    id: "fresh_milk",
    name: {
      ru: "Свежее молоко",
      kk: "Жаңа сауылған сүт",
      en: "Fresh Milk"
    },
    formula: "Казеин + Молочная к-та",
    formulaAscii: "Milk",
    ph: 6.6,
    category: "weak_acid",
    naturalColor: "rgba(255, 255, 255, 0.6)",
    textColor: "#84cc16",
    icon: "🥛",
    chemicalEquation: "C₃H₆O₃ ⇌ C₃H₅O₃⁻ + H⁺",
    hIonConcentration: "2.51 × 10⁻⁷ моль/л",
    ohIonConcentration: "3.98 × 10⁻⁸ моль/л",
    description: {
      ru: "Коллоидная система белков и жиров. Из-за наличия фосфатов и молочной кислоты имеет слабокислую реакцию, близкую к нейтральной.",
      kk: "Ақуыздар мен майлардың коллоидтық эмульсиясы. Фосфаттардың арқасында әлсіз қышқылдық орта береді.",
      en: "Colloidal emulsion of fats and proteins. Natural phosphates and caseins give it a slightly acidic pH close to neutral."
    },
    funFact: {
      ru: "Белый цвет молока объясняется тем, что мицеллы казеина и капельки жира рассеивают все длины волн видимого света!",
      kk: "Сүттің ақ түсі ондағы казеин мен май тамшыларының жарықты жан-жаққа шашыратуынан туындайды!",
      en: "Milk appears white because microscopic casein micelles and fat globules scatter all wavelengths of light!"
    },
    hazard: "safe"
  },
  {
    id: "pure_water",
    name: {
      ru: "Дистиллированная вода (H₂O)",
      kk: "Дистилденген таза су (H₂O)",
      en: "Pure Distilled Water (H₂O)"
    },
    formula: "H₂O (100% чистая)",
    formulaAscii: "H2O",
    ph: 7.0,
    category: "neutral",
    naturalColor: "rgba(34, 197, 94, 0.18)",
    textColor: "#22c55e",
    icon: "💧",
    chemicalEquation: "2H₂O ⇌ H₃O⁺ + OH⁻ (Kw = 10⁻¹⁴)",
    hIonConcentration: "1.00 × 10⁻⁷ моль/л",
    ohIonConcentration: "1.00 × 10⁻⁷ моль/л",
    description: {
      ru: "Эталон химической нейтральности при 25°C. Концентрации ионов H⁺ и OH⁻ абсолютно одинаковы: ровно 10⁻⁷ моль/л.",
      kk: "25°C кезіндегі бейтарап орта эталоны. [H⁺] және [OH⁻] иондары бірдей: дәл 10⁻⁷ моль/л.",
      en: "The gold benchmark for chemical neutrality at 25°C. [H⁺] and [OH⁻] ions exist in exact 1:1 balance."
    },
    funFact: {
      ru: "Если оставить чистую воду открытой, она за пару часов растворит углекислый газ из воздуха и её pH упадет до 5.6!",
      kk: "Таза суды ашық қалдырса, ол ауадағы көмірқышқыл газын сіңіріп, pH 5.6-ға дейін төмендейді!",
      en: "Pure water left exposed to air dissolves atmospheric CO₂ into carbonic acid, shifting naturally to pH ~5.6!"
    },
    hazard: "safe"
  },
  {
    id: "human_blood",
    name: {
      ru: "Кровь человека (Плазма)",
      kk: "Адам қаны (Плазма)",
      en: "Human Blood Plasma"
    },
    formula: "HCO₃⁻ / H₂CO₃ (Буфер)",
    formulaAscii: "Blood",
    ph: 7.4,
    category: "neutral",
    naturalColor: "rgba(225, 29, 72, 0.35)",
    textColor: "#14b8a6",
    icon: "🩸",
    chemicalEquation: "CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻",
    hIonConcentration: "3.98 × 10⁻⁸ моль/л",
    ohIonConcentration: "2.51 × 10⁻⁷ моль/л",
    description: {
      ru: "Слабощелочная жизненная среда с чрезвычайно строгим физиологическим контролем (норма 7.35–7.45).",
      kk: "Қалыпты деңгейі 7.35–7.45 болатын ағзаның ең маңызды сұйықтығы. Бикарбонатты буфер арқылы сақталады.",
      en: "Strictly regulated vital fluid held inside 7.35–7.45 by bicarbonate and phosphate buffer systems."
    },
    funFact: {
      ru: "Сдвиг pH крови всего на 0.3 единицы (ниже 7.0 или выше 7.8) смертелен! Почки и легкие непрерывно регулируют этот баланс.",
      kk: "Қан pH-ы 0.3-ке ауытқыса, өмірге қауіп төнеді! Бүйрек пен өкпе бұл тепе-теңдікті үнемі қадағалайды.",
      en: "A blood pH deviation of just 0.3 units is fatal! Kidneys and lungs work continuously to maintain homeostasis."
    },
    hazard: "safe"
  },
  {
    id: "sea_water",
    name: {
      ru: "Морская вода",
      kk: "Теңіз суы",
      en: "Sea Water"
    },
    formula: "NaCl + Карбонаты",
    formulaAscii: "SeaWater",
    ph: 8.2,
    category: "weak_base",
    naturalColor: "rgba(6, 182, 212, 0.25)",
    textColor: "#06b6d4",
    icon: "🌊",
    chemicalEquation: "CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻",
    hIonConcentration: "6.31 × 10⁻⁹ моль/л",
    ohIonConcentration: "1.58 × 10⁻⁶ моль/л",
    description: {
      ru: "Слабощелочная среда океана, богатая растворенными солями и карбонатами, необходимыми для панцирей моллюсков.",
      kk: "Мұхиттың минералдар мен карбонаттарға бай суы. Теңіз жануарларының қабыршағын қалыптастыруға қажет.",
      en: "Naturally buffered marine environment essential for coral reefs and shell-building marine organisms."
    },
    funFact: {
      ru: "Из-за растворения антропогенного CO₂ кислотность океанов медленно растет, что угрожает разрушением коралловых рифов.",
      kk: "Ауадағы көмірқышқыл газының артуы мұхиттарды қышқылдандырып, маржан рифтеріне қауіп төндіруде.",
      en: "Ocean acidification from excess dissolved CO₂ threatens the structural integrity of calcium carbonate coral reefs!"
    },
    hazard: "safe"
  },
  {
    id: "baking_soda",
    name: {
      ru: "Раствор пищевой соды (NaHCO₃)",
      kk: "Ас содасы ерітіндісі (NaHCO₃)",
      en: "Baking Soda Solution (NaHCO₃)"
    },
    formula: "NaHCO₃ (Гидрокарбонат)",
    formulaAscii: "NaHCO3",
    ph: 8.4,
    category: "weak_base",
    naturalColor: "rgba(59, 130, 246, 0.2)",
    textColor: "#3b82f6",
    icon: "🧂",
    chemicalEquation: "HCO₃⁻ + H₂O ⇌ H₂CO₃ + OH⁻",
    hIonConcentration: "3.98 × 10⁻⁹ моль/л",
    ohIonConcentration: "2.51 × 10⁻⁶ моль/л",
    description: {
      ru: "Кислый карбонат натрия. В воде гидролизуется по аниону с выделением гидроксид-ионов OH⁻, создавая мягкую щелочную среду.",
      kk: "Натрий гидрокарбонаты. Суда гидролизденіп OH⁻ түзеді, сондықтан жұмсақ сілтілік орта береді.",
      en: "Sodium bicarbonate undergoes mild anion hydrolysis yielding excess OH⁻, acting as an effective gentle antacid."
    },
    funFact: {
      ru: "Реакция соды с уксусом (бурное выделение пены CO₂) — самый популярный домашний опыт создания химического «вулкана»!",
      kk: "Сода мен сірке суының әрекеттесуі — балаларға арналған үйдегі ең танымал «жанартау» тәжірибесі!",
      en: "The effervescent reaction between baking soda and vinegar is the universal favorite DIY chemical volcano experiment!"
    },
    hazard: "safe"
  },
  {
    id: "soap_solution",
    name: {
      ru: "Мыльный раствор",
      kk: "Сабын ерітіндісі",
      en: "Hand Soap Solution"
    },
    formula: "C₁₇H₃₅COONa (Стеарат)",
    formulaAscii: "Soap",
    ph: 9.5,
    category: "weak_base",
    naturalColor: "rgba(99, 102, 241, 0.25)",
    textColor: "#6366f1",
    icon: "🧼",
    chemicalEquation: "R-COO⁻ + H₂O ⇌ R-COOH + OH⁻",
    hIonConcentration: "3.16 × 10⁻¹⁰ моль/л",
    ohIonConcentration: "3.16 × 10⁻⁵ моль/л",
    description: {
      ru: "Натриевая соль стеариновой кислоты. В результате гидролиза раствор приобретает выраженную мылкую щелочную среду.",
      kk: "Стеарин қышқылының натрий тұзы. Гидролиз арқылы ерітіндіге сабынды сілтілік қасиет береді.",
      en: "Sodium salt of long-chain fatty acids. Creates an alkaline slippery lather that emulsifies nonpolar oils."
    },
    funFact: {
      ru: "Щелочность мыла растворяет липидные мембраны бактерий и вирусов, делая мытье рук самым эффективным антисептиком!",
      kk: "Сабынның сілтілігі вирустардың майлы қабыршағын ерітіп, қол жуғанда микробтарды лезде жояды!",
      en: "Soap's alkaline amphiphilic action breaks down viral lipid envelopes within 20 seconds of hand washing!"
    },
    hazard: "safe"
  },
  {
    id: "ammonia_solution",
    name: {
      ru: "Нашатырный спирт (NH₃·H₂O)",
      kk: "Мүсәтір спирті (Аммиак суы)",
      en: "Household Ammonia (NH₃·H₂O)"
    },
    formula: "NH₃·H₂O (10% р-р)",
    formulaAscii: "NH3",
    ph: 11.5,
    category: "strong_base",
    naturalColor: "rgba(139, 92, 246, 0.25)",
    textColor: "#8b5cf6",
    icon: "🧴",
    chemicalEquation: "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻",
    hIonConcentration: "3.16 × 10⁻¹² моль/л",
    ohIonConcentration: "3.16 × 10⁻³ моль/л",
    description: {
      ru: "Водный раствор аммиака с резким запахом. Растворяет жиры и налеты, используется в медицине и очистке стекол.",
      kk: "Өткір иісі бар аммиактың сулы ерітіндісі. Майларды жақсы ерітеді, медицинада және тазалықта қолданылады.",
      en: "Aqueous ammonia solution with a pungent smell. Readily cuts grease in window cleaning formulations."
    },
    funFact: {
      ru: "Пары аммиака возбуждают дыхательный центр мозга через тройничный нерв, приводя человека в чувство при обмороке!",
      kk: "Аммиак иісі мидың тыныс алу орталығын оятып, талып қалған адамның есін жиғызуға көмектеседі!",
      en: "Ammonia vapors trigger an involuntary inhalation reflex by stimulating the trigeminal nerve during fainting spells!"
    },
    hazard: "caution"
  },
  {
    id: "bleach",
    name: {
      ru: "Бытовой отбеливатель («Белизна»)",
      kk: "Тұрмыстық ағартқыш («Белизна»)",
      en: "Household Bleach (NaClO)"
    },
    formula: "NaClO (Гипохлорит Na)",
    formulaAscii: "NaClO",
    ph: 12.5,
    category: "strong_base",
    naturalColor: "rgba(124, 58, 237, 0.28)",
    textColor: "#7c3aed",
    icon: "🧹",
    chemicalEquation: "ClO⁻ + H₂O ⇌ HClO + OH⁻",
    hIonConcentration: "3.16 × 10⁻¹³ моль/л",
    ohIonConcentration: "3.16 × 10⁻² моль/л",
    description: {
      ru: "Мощный щелочной дезинфектант и окислитель. Разрушает органические хромофоры (пятна) и уничтожает патогены.",
      kk: "Күшті сілтілік залалсыздандырғыш зат. Органикалық бояғыштарды және бактерияларды жояды.",
      en: "Powerful alkaline disinfectant and oxidizer that destroys organic chromophores and sterilizes surfaces."
    },
    funFact: {
      ru: "Никогда не смешивайте отбеливатель с кислотами (уксусом)! Выделяется смертельный токсичный газ хлор Cl₂!",
      kk: "Ағартқышты сірке суымен немесе қышқылмен ешқашан араластырмаңыз: өте улы хлор газы бөлінеді!",
      en: "NEVER mix bleach with acids: doing so instantly generates deadly toxic chlorine gas (Cl₂)!"
    },
    hazard: "danger"
  },
  {
    id: "drain_cleaner",
    name: {
      ru: "Едкий натр / «Крот» (NaOH)",
      kk: "Күйдіргіш натр / «Крот» (NaOH)",
      en: "Caustic Lye / Drain Cleaner (NaOH)"
    },
    formula: "NaOH (1.0 M р-р)",
    formulaAscii: "NaOH",
    ph: 14.0,
    category: "strong_base",
    naturalColor: "rgba(76, 29, 149, 0.35)",
    textColor: "#4c1d95",
    icon: "⚠️",
    chemicalEquation: "NaOH → Na⁺ + OH⁻",
    hIonConcentration: "1.00 × 10⁻¹⁴ моль/л",
    ohIonConcentration: "1.00 × 10⁰ моль/л (1.0 M)",
    description: {
      ru: "Концентрированный гидроксид натрия. Сильнейшая щелочь, мгновенно растворяющая жир, волосы и органику.",
      kk: "Натрий гидроксидінің концентрлі ерітіндісі. Құбырдағы май мен шашты ерітетін ең күшті сілті.",
      en: "Concentrated sodium hydroxide (caustic soda). Extremely strong base that vigorously hydrolyzes fats and organic plugs."
    },
    funFact: {
      ru: "При растворении гранул чистого NaOH в воде выделяется столько тепла, что стеклянный стакан может лопнуть от кипения!",
      kk: "Қатты NaOH суда ерігенде көп жылу бөлінетіні соншалық, су қайнап, стақан шытынап кетуі мүмкін!",
      en: "Dissolving pure NaOH pellets is so exothermic that the solution can spontaneously boil and crack standard glassware!"
    },
    hazard: "danger"
  }
];

export function getMediumDetails(ph: number, lang: 'ru' | 'kk' | 'en') {
  if (ph <= 2.5) {
    return {
      title: { ru: "Сильнокислая среда", kk: "Күшті қышқылдық орта", en: "Strongly Acidic Medium" }[lang],
      badgeColor: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30",
      icon: "🔴",
      hIonBadge: "[H⁺] ≫ [OH⁻]",
      summary: {
        ru: "Высокая концентрация свободных протонов H⁺. Раствор обладает едким кислым вкусом, активно реагирует с металлами.",
        kk: "Еркін H⁺ протондарының жоғары концентрациясы. Металдармен қарқынды әрекеттесіп, сутек бөледі.",
        en: "High concentration of hydronium ions [H⁺]. Readily reacts with metals liberating hydrogen gas."
      }[lang]
    };
  }
  if (ph < 6.8) {
    return {
      title: { ru: "Слабокислая среда", kk: "Әлсіз қышқылдық орта", en: "Weakly Acidic Medium" }[lang],
      badgeColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
      icon: "🟠",
      hIonBadge: "[H⁺] > [OH⁻]",
      summary: {
        ru: "Умеренная кислотность. Типична для соков, чая, кофе и кисломолочных продуктов.",
        kk: "Орташа қышқылдық. Жеміс шырындары, шай, кофе және сүт өнімдеріне тән.",
        en: "Moderate acidity. Typical for fruit juices, black coffee, and dairy products."
      }[lang]
    };
  }
  if (ph <= 7.2) {
    return {
      title: { ru: "Нейтральная среда", kk: "Бейтарап орта", en: "Neutral Medium" }[lang],
      badgeColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      icon: "🟢",
      hIonBadge: "[H⁺] = [OH⁻] = 10⁻⁷ M",
      summary: {
        ru: "Идеальное термодинамическое равновесие при 25°C. Ионы H⁺ и OH⁻ находятся в равных количествах.",
        kk: "25°C кезіндегі мінсіз тепе-теңдік. H⁺ және OH⁻ иондары өзара тең мөлшерде болады.",
        en: "Dynamic equilibrium at 25°C. Hydronium and hydroxide ions exist in exact 1:1 parity."
      }[lang]
    };
  }
  if (ph <= 11.0) {
    return {
      title: { ru: "Слабощелочная среда", kk: "Әлсіз сілтілік орта", en: "Weakly Alkaline Medium" }[lang],
      badgeColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
      icon: "🔵",
      hIonBadge: "[OH⁻] > [H⁺]",
      summary: {
        ru: "Преобладание гидроксид-ионов OH⁻. Растворы мылкие на ощупь, характерны для мыла и морской воды.",
        kk: "OH⁻ гидроксид иондары басым. Ерітінді қолға сабындай сезіледі, сабын мен теңіз суына тән.",
        en: "Hydroxide ions dominate. Feels slippery to the touch; characteristic of soaps and baking soda."
      }[lang]
    };
  }
  return {
    title: { ru: "Сильнощелочная среда", kk: "Күшті сілтілік орта", en: "Strongly Alkaline Medium" }[lang],
    badgeColor: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30",
    icon: "🟣",
    hIonBadge: "[OH⁻] ≫ [H⁺]",
    summary: {
      ru: "Огромная концентрация ионов OH⁻. Едкие растворы, омыляющие кожу и разрушающие белки и жиры.",
      kk: "OH⁻ иондарының аса жоғары концентрациясы. Күйдіргіш орта, ақуыздар мен майларды жылдам ерітеді.",
      en: "Extremely high concentration of hydroxide ions OH⁻. Highly caustic, rapidly hydrolyzes lipids and proteins."
    }[lang]
  };
}
