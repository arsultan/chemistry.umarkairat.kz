import { LocalizedString } from "@/types/chemistry";

export type InorganicMainClass = 
  | 'simple-metal'
  | 'simple-nonmetal'
  | 'simple-noble-gas'
  | 'oxide-basic'
  | 'oxide-acidic'
  | 'oxide-amphoteric'
  | 'oxide-neutral'
  | 'oxide-peroxide'
  | 'base-alkali'
  | 'base-insoluble'
  | 'base-amphoteric'
  | 'acid-oxygenless'
  | 'acid-oxygen'
  | 'salt-normal'
  | 'salt-acid'
  | 'salt-basic'
  | 'salt-complex'
  | 'binary-other';

export interface InorganicCompoundItem {
  id: string;
  formula: string;
  formulaAscii: string;
  atoms: Record<string, number>;
  name: LocalizedString;
  scientificName: LocalizedString;
  mainClass: InorganicMainClass;
  subCategory: LocalizedString;
  generalFormula?: string;
  oxidationStates: string; // e.g. "Na⁺¹ O⁻²"
  solubility: 'soluble' | 'insoluble' | 'slightly-soluble' | 'gas' | 'decomposes';
  description: LocalizedString;
  chemicalProperties: LocalizedString;
  typicalReactions: {
    equation: string;
    description: LocalizedString;
  }[];
  practicalUse: LocalizedString;
  color: string;
  isSynthesizableInLab?: boolean;
}

export interface InorganicClassCategory {
  id: string;
  title: LocalizedString;
  generalFormula: string;
  definition: LocalizedString;
  iconName: string;
  badgeColor: string;
  accentColor: string;
  subClasses: {
    id: InorganicMainClass;
    title: LocalizedString;
    description: LocalizedString;
    criteria: LocalizedString;
    color: string;
    examples: string[];
  }[];
}

export interface GeneticChain {
  id: string;
  title: LocalizedString;
  type: 'metal' | 'nonmetal';
  description: LocalizedString;
  steps: {
    stepNumber: number;
    substanceName: LocalizedString;
    formula: string;
    compoundClass: LocalizedString;
    reactionEquation: string;
    reactionType: LocalizedString;
    conditions?: string;
  }[];
}

export interface ClassificationQuizQuestion {
  id: string;
  substanceFormula: string;
  substanceName: LocalizedString;
  correctClass: InorganicMainClass;
  options: {
    classId: InorganicMainClass;
    title: LocalizedString;
  }[];
  explanation: LocalizedString;
  hint: LocalizedString;
}

export const INORGANIC_CATEGORIES: InorganicClassCategory[] = [
  {
    id: "simple",
    title: {
      ru: "Простые вещества",
      kk: "Жай заттар",
      en: "Simple Substances (Elements)"
    },
    generalFormula: "Э или Эₙ",
    definition: {
      ru: "Вещества, образованные атомами одного и того же химического элемента. Подразделяются на металлы, неметаллы и благородные газы.",
      kk: "Бір ғана химиялық элемент атомдарынан түзілген заттар. Металдарға, бейметалдарға және асыл газдарға бөлінеді.",
      en: "Substances composed of atoms of only one chemical element. Divided into metals, nonmetals, and noble gases."
    },
    iconName: "Sparkles",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    accentColor: "#3b82f6",
    subClasses: [
      {
        id: "simple-metal",
        title: { ru: "Металлы", kk: "Металдар", en: "Metals" },
        description: {
          ru: "Обладают металлическим блеском, высокой электро- и теплопроводностью, пластичностью и ковкостью. В реакциях всегда восстановители (отдают электроны).",
          kk: "Металдық жылтыры, жоғары электр және жылу өткізгіштігі, созылғыштығы бар. Реакцияларда әрқашан тотықсыздандырғыш.",
          en: "Possess metallic luster, high electrical and thermal conductivity, and malleability. Always act as reducing agents."
        },
        criteria: { ru: "Степени окисления: 0 (в соединениях +1..+4)", kk: "Тотығу дәрежесі: 0 (+1..+4)", en: "Oxidation state: 0 (positive in compounds)" },
        color: "#3b82f6",
        examples: ["Na", "Fe", "Ca", "Cu", "Al", "Au", "Mg", "K", "Zn", "Ag"]
      },
      {
        id: "simple-nonmetal",
        title: { ru: "Неметаллы", kk: "Бейметалдар", en: "Nonmetals" },
        description: {
          ru: "Высокая электроотрицательность, разнообразие агрегатных состояний при н.у. (газы, жидкости, твердые тела). Проявляют окислительные и восстановительные свойства.",
          kk: "Жоғары электртерістік, қалыпты жағдайда әртүрлі агрегаттық күйде болады. Тотықтырғыш та, тотықсыздандырғыш та қасиет көрсетеді.",
          en: "High electronegativity, diverse physical states at room temperature. Can act as both oxidizers and reducers."
        },
        criteria: { ru: "Образуют простые молекулы или атомные решетки", kk: "Қарапайым молекулалар немесе атомдық тор түзеді", en: "Form discrete molecules or covalent lattices" },
        color: "#10b981",
        examples: ["H₂", "O₂", "N₂", "Cl₂", "C", "S", "P", "Si", "Br₂", "I₂"]
      },
      {
        id: "simple-noble-gas",
        title: { ru: "Благородные газы", kk: "Асыл газдар", en: "Noble Gases" },
        description: {
          ru: "Одноатомные газы с полностью завершенной устойчивой внешней электронной оболочкой (ns²np⁶). Крайне инертны.",
          kk: "Сыртқы электрондық қабаты толық толған бір атомды газдар. Химиялық тұрғыдан өте енжар.",
          en: "Monatomic gases with a fully filled, stable outer electron octet (ns²np⁶). Chemically inert."
        },
        criteria: { ru: "VIII-A группа (18 группа)", kk: "VIII-A тобы (18 топ)", en: "Group 18 elements" },
        color: "#a855f7",
        examples: ["He", "Ne", "Ar", "Kr", "Xe", "Rn"]
      }
    ]
  },
  {
    id: "oxides",
    title: {
      ru: "Оксиды",
      kk: "Оксидтер",
      en: "Oxides"
    },
    generalFormula: "ЭₓOᵧ (где O имеет ст. ок. -2)",
    definition: {
      ru: "Сложные бинарные соединения элементов с кислородом в степени окисления -2. Делятся на солеобразующие (основные, кислотные, амфотерные) и несолеобразующие.",
      kk: "Оттегінің тотығу дәрежесі -2 болатын кез келген элементтің оттегімен түзген күрделі бинарлы қосылыстары.",
      en: "Binary chemical compounds containing oxygen with oxidation state -2 bonded to another element."
    },
    iconName: "Flame",
    badgeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    accentColor: "#f43f5e",
    subClasses: [
      {
        id: "oxide-basic",
        title: { ru: "Основные оксиды", kk: "Негіздік оксидтер", en: "Basic Oxides" },
        description: {
          ru: "Оксиды металлов в низких степенях окисления (+1, +2). Реагируют с кислотами и кислотными оксидами с образованием солей. Оксиды щелочных и щелочноземельных металлов реагируют с водой, образуя щёлочи.",
          kk: "Төменгі тотығу дәрежесіндегі (+1, +2) металдардың оксидтері. Қышқылдармен әрекеттесіп тұз және су түзеді.",
          en: "Oxides of metals with low oxidation states (+1, +2). React with acids to form salts and water. React with water to form alkalis."
        },
        criteria: { ru: "Металл (+1, +2) + O⁻²", kk: "Металл (+1, +2) + O⁻²", en: "Metal (+1, +2) + O⁻²" },
        color: "#3b82f6",
        examples: ["Na₂O", "CaO", "CuO", "FeO", "BaO", "K₂O", "MgO", "Li₂O"]
      },
      {
        id: "oxide-acidic",
        title: { ru: "Кислотные оксиды (Ангидриды)", kk: "Қышқылдық оксидтер (Ангидридтер)", en: "Acidic Oxides (Acid Anhydrides)" },
        description: {
          ru: "Оксиды неметаллов и металлов в высоких степенях окисления (+5..+7). Реагируют с основаниями и основными оксидами с образованием солей. При гидратации дают кислоты.",
          kk: "Бейметалдар мен жоғары тотығу дәрежесіндегі (+5..+7) металдардың оксидтері. Негіздермен әрекеттесіп тұз түзеді.",
          en: "Oxides of nonmetals and metals in high oxidation states (+5..+7). React with bases to form salts, and with water to form oxoacids."
        },
        criteria: { ru: "Неметалл или Металл (+5..+7) + O⁻²", kk: "Бейметалл немесе Металл (+5..+7) + O⁻²", en: "Nonmetal or High-valent Metal + O⁻²" },
        color: "#ef4444",
        examples: ["CO₂", "SO₂", "SO₃", "P₂O₅", "N₂O₅", "SiO₂", "CrO₃", "Mn₂O₇"]
      },
      {
        id: "oxide-amphoteric",
        title: { ru: "Амфотерные оксиды", kk: "Амфотерлі оксидтер", en: "Amphoteric Oxides" },
        description: {
          ru: "Проявляют двойственные свойства: реагируют как с кислотами (как основные оксиды), так и со щелочами (как кислотные оксиды).",
          kk: "Екідайлы қасиет көрсетеді: қышқылдармен де, күшті сілтілермен де әрекеттесіп тұз түзеді.",
          en: "Oxides that show dual chemical behavior: reacting with both acids and strong bases to produce salts."
        },
        criteria: { ru: "Металлы в ст. ок. +3, +4 или ZnO, BeO, PbO", kk: "Металдар (+3, +4) немесе ZnO, BeO, PbO", en: "Metals in +3, +4 or Zn, Be, Pb" },
        color: "#f59e0b",
        examples: ["Al₂O₃", "ZnO", "Fe₂O₃", "BeO", "Cr₂O₃", "PbO"]
      },
      {
        id: "oxide-neutral",
        title: { ru: "Несолеобразующие (Индифферентные)", kk: "Тұз түзбейтін оксидтер", en: "Neutral / Non-salt Forming Oxides" },
        description: {
          ru: "Оксиды неметаллов в низких степенях окисления (+1, +2), которые не образуют солей при взаимодействии с кислотами и щелочами.",
          kk: "Төменгі тотығу дәрежесіндегі бейметалдар оксидтері. Қышқылдармен және сілтілермен тұз түзу реакциясына түспейді.",
          en: "Oxides that do not react with acids or bases to form salts under ordinary conditions."
        },
        criteria: { ru: "CO, NO, N₂O, SiO", kk: "CO, NO, N₂O, SiO", en: "CO, NO, N₂O, SiO" },
        color: "#64748b",
        examples: ["CO", "NO", "N₂O", "SiO"]
      },
      {
        id: "oxide-peroxide",
        title: { ru: "Пероксиды", kk: "Пероксидтер", en: "Peroxides" },
        description: {
          ru: "Бинарные соединения с кислородным мостиком (-O-O-), где степень окисления кислорода равна -1.",
          kk: "Құрамында оттектік көпіршесі (-O-O-) бар және оттегінің тотығу дәрежесі -1 болатын қосылыстар.",
          en: "Compounds containing a single oxygen-oxygen covalent bond (-O-O-), with oxygen in the -1 oxidation state."
        },
        criteria: { ru: "Пероксид-ион [O₂]²⁻, O⁻¹", kk: "[O₂]²⁻, O⁻¹ пероксид-ионы", en: "Peroxide group [O₂]²⁻" },
        color: "#06b6d4",
        examples: ["H₂O₂", "Na₂O₂", "BaO₂"]
      }
    ]
  },
  {
    id: "bases",
    title: {
      ru: "Основания (Гидроксиды)",
      kk: "Негіздер (Гидроксидтер)",
      en: "Bases & Hydroxides"
    },
    generalFormula: "M(OH)ₙ (где n — валентность металла)",
    definition: {
      ru: "Сложные вещества, состоящие из катионов металлов (или иона аммония NH₄⁺) и одной или нескольких гидроксогрупп OH⁻. Диссоциируют с образованием гидроксид-ионов.",
      kk: "Металл атомдарынан (немесе NH₄⁺ аммоний ионынан) және бір немесе бірнеше OH⁻ гидроксид тобынан тұратын күрделі заттар.",
      en: "Chemical compounds composed of a metal cation (or ammonium NH₄⁺) and one or more hydroxide ions (OH⁻)."
    },
    iconName: "Droplets",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    accentColor: "#6366f1",
    subClasses: [
      {
        id: "base-alkali",
        title: { ru: "Щёлочи (Растворимые основания)", kk: "Сілтілер (Еритін негіздер)", en: "Alkalis (Soluble Bases)" },
        description: {
          ru: "Хорошо растворимые в воде сильные основания. Диссоциируют на 100%, создают сильнощелочную среду (pH > 11), окрашивают фенолфталеин в малиновый цвет, а лакмус — в синий.",
          kk: "Суда жақсы еритін күшті негіздер. Фенолфталеинді таңқурай (малина) түске, лакмусты көк түске бояйды.",
          en: "Water-soluble strong bases. Fully dissociate into metal and OH⁻ ions. Turn phenolphthalein vivid magenta and litmus blue."
        },
        criteria: { ru: "Гидроксиды металлов I-A и II-A (начиная с Ca)", kk: "I-A және II-A топ (Ca-дан бастап) металл гидроксидтері", en: "Group 1 & heavy Group 2 hydroxides" },
        color: "#6366f1",
        examples: ["NaOH", "KOH", "Ca(OH)₂", "Ba(OH)₂", "LiOH", "CsOH"]
      },
      {
        id: "base-insoluble",
        title: { ru: "Нерастворимые основания", kk: "Ерімейтін негіздер", en: "Insoluble Bases" },
        description: {
          ru: "Основания большинства тяжелых металлов. Выпадают в виде характерных цветных осадков. Разлагаются при нагревании на оксид металла и воду.",
          kk: "Ауыр металдардың суда ерімейтін гидроксидтері. Қыздырған кезде негіздік оксид пен суға ыдырайды.",
          en: "Hydroxides of heavy metals. Form distinct colorful precipitates and decompose thermally into oxide and water."
        },
        criteria: { ru: "Осадки в таблице растворимости", kk: "Ерігіштік кестесіндегі ерімейтін тұнбалар", en: "Insoluble precipitates on heating: M(OH)₂ → MO + H₂O" },
        color: "#0284c7",
        examples: ["Cu(OH)₂", "Fe(OH)₂", "Fe(OH)₃", "Mg(OH)₂", "Ni(OH)₂"]
      },
      {
        id: "base-amphoteric",
        title: { ru: "Амфотерные гидроксиды", kk: "Амфотерлі гидроксидтер", en: "Amphoteric Hydroxides" },
        description: {
          ru: "Гидроксиды, проявляющие кислотно-основную двойственность: растворяются как в кислотах, так и в избытке концентрированных щелочей с образованием гидроксокомплексов.",
          kk: "Қышқылдармен де, сілтілердің артық мөлшерімен де әрекеттесіп еритін екідайлы гидроксидтер.",
          en: "Hydroxides that react with both acids and excess strong bases, dissolving to form soluble complex ions."
        },
        criteria: { ru: "Al(OH)₃, Zn(OH)₂, Be(OH)₂, Cr(OH)₃", kk: "Al(OH)₃, Zn(OH)₂, Be(OH)₂, Cr(OH)₃", en: "Al(OH)₃, Zn(OH)₂, Be(OH)₂, Cr(OH)₃" },
        color: "#d97706",
        examples: ["Al(OH)₃", "Zn(OH)₂", "Be(OH)₂", "Cr(OH)₃", "Pb(OH)₂"]
      }
    ]
  },
  {
    id: "acids",
    title: {
      ru: "Кислоты",
      kk: "Қышқылдар",
      en: "Acids"
    },
    generalFormula: "HₙAc (где Ac — кислотный остаток валентностью n)",
    definition: {
      ru: "Сложные вещества, состоящие из одного или нескольких атомов водорода, способных замещаться металлом, и кислотного остатка. Водные растворы имеют кислый вкус, окрашивают лакмус и метилоранж в красный цвет (pH < 7).",
      kk: "Құрамында металл атомдарымен орын алмаса алатын сутегі атомдарынан және қышқыл қалдығынан тұратын күрделі заттар.",
      en: "Substances that release hydrogen ions (H⁺ / hydronium H₃O⁺) in aqueous solutions. Turn blue litmus red."
    },
    iconName: "Zap",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    accentColor: "#f59e0b",
    subClasses: [
      {
        id: "acid-oxygenless",
        title: { ru: "Бескислородные кислоты", kk: "Оттексіз қышқылдар", en: "Oxygen-free (Binary) Acids" },
        description: {
          ru: "Кислоты, в состав кислотного остатка которых не входит кислород. Представляют собой водные растворы водородных соединений неметаллов.",
          kk: "Құрамында оттегі атомы болмайтын қышқылдар. Бейметалдардың ұшқыш сутекті қосылыстарының сулы ерітінділері.",
          en: "Acids that do not contain oxygen atoms in their molecular formula."
        },
        criteria: { ru: "Hₙ + Неметалл (без O)", kk: "Hₙ + Бейметалл (O-сіз)", en: "Hydrogen + nonmetal (no oxygen)" },
        color: "#f59e0b",
        examples: ["HCl", "H₂S", "HF", "HBr", "HI", "HCN"]
      },
      {
        id: "acid-oxygen",
        title: { ru: "Кислородсодержащие кислоты (Оксокислоты)", kk: "Оттекті қышқылдар (Оксоқышқылдар)", en: "Oxoacids (Oxygen-containing Acids)" },
        description: {
          ru: "Кислоты, содержащие в кислотном остатке атомы кислорода. Образуются при гидратации кислотных оксидов (серная, азотная, фосфорная).",
          kk: "Құрамында оттегі атомдары бар қышқылдар. Қышқылдық оксидтерді сумен әрекеттестіру арқылы алынады.",
          en: "Acids containing oxygen atoms bonded to a central element and hydrogen."
        },
        criteria: { ru: "HₙЭOₘ (наличие кислорода)", kk: "HₙЭOₘ (құрамында O бар)", en: "HₙXOₘ structure" },
        color: "#dc2626",
        examples: ["H₂SO₄", "HNO₃", "H₂CO₃", "H₃PO₄", "H₂SO₃", "HNO₂", "H₂SiO₃"]
      }
    ]
  },
  {
    id: "salts",
    title: {
      ru: "Соли",
      kk: "Тұздар",
      en: "Salts"
    },
    generalFormula: "MₓAcᵧ (металл + кислотный остаток)",
    definition: {
      ru: "Сложные ионные соединения, состоящие из катионов металлов (или NH₄⁺) и анионов кислотных остатков. Образуются в реакциях нейтрализации между кислотами и основаниями.",
      kk: "Металл катиондарынан (немесе NH₄⁺) және қышқыл қалдықтарының аниондарынан тұратын иондық кристалдық күрделі қосылыстар.",
      en: "Ionic compounds composed of related numbers of cations (usually metal or NH₄⁺) and anions of acid residues."
    },
    iconName: "Layers",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    accentColor: "#10b981",
    subClasses: [
      {
        id: "salt-normal",
        title: { ru: "Средние (Нормальные) соли", kk: "Орта (Қалыпты) тұздар", en: "Normal (Neutral) Salts" },
        description: {
          ru: "Продукт полного замещения всех атомов водорода в молекуле кислоты на катионы металла. Самый распространенный класс солей.",
          kk: "Қышқыл молекуласындағы сутегі атомдарының толықтай металл атомдарымен орын басу өнімі.",
          en: "Formed by complete replacement of all ionizable hydrogen atoms in an acid by metal cations."
        },
        criteria: { ru: "Только катион металла + кислотный остаток", kk: "Тек металл катионы + қышқыл қалдығы", en: "Pure metal cation + acid residue" },
        color: "#10b981",
        examples: ["NaCl", "CaCO₃", "K₂SO₄", "FeSO₄", "CuCl₂", "KNO₃", "Al₂(SO₄)₃", "AgNO₃"]
      },
      {
        id: "salt-acid",
        title: { ru: "Кислые соли (Гидросоли)", kk: "Қышқыл тұздар (Гидротұздар)", en: "Acid Salts (Hydrogen Salts)" },
        description: {
          ru: "Продукт неполного замещения атомов водорода многоосновной кислоты на металл. Содержат незамещенные ионы H⁺ в анионе.",
          kk: "Көпнегізді қышқылдардағы сутегі атомдарының металмен толық емес орын басу өнімі. Құрамында H⁺ сутегі болады.",
          en: "Formed by incomplete replacement of ionizable hydrogen atoms in polybasic acids by metal cations."
        },
        criteria: { ru: "Содержат ион H⁺ (например HCO₃⁻, HSO₄⁻)", kk: "Құрамында H⁺ ионы бар (HCO₃⁻, HSO₄⁻)", en: "Contain hydrogen in anion: M(HAc)" },
        color: "#14b8a6",
        examples: ["NaHCO₃", "KHSO₄", "Ca(HCO₃)₂", "NaH₂PO₄", "Na₂HPO₄"]
      },
      {
        id: "salt-basic",
        title: { ru: "Основные соли (Гидроксосоли)", kk: "Негіздік тұздар (Гидроксотұздар)", en: "Basic Salts (Hydroxysalts)" },
        description: {
          ru: "Продукт неполного замещения гидроксогрупп OH⁻ многокислотного основания на кислотные остатки. Содержат OH⁻ в структуре соли.",
          kk: "Көпқышқылды негіздердегі OH⁻ топтарының қышқыл қалдығымен толық емес орын басу өнімі.",
          en: "Formed by incomplete neutralization of polyhydroxy bases by acids. Contain OH⁻ groups in the compound structure."
        },
        criteria: { ru: "Содержат группу OH⁻ в молекуле соли", kk: "Тұз молекуласында OH⁻ гидроксотобы бар", en: "Contain OH⁻ groups: (MOH)Ac" },
        color: "#84cc16",
        examples: ["Cu₂(OH)₂CO₃", "Mg(OH)Cl", "Al(OH)SO₄", "Fe(OH)₂Cl"]
      },
      {
        id: "salt-complex",
        title: { ru: "Двойные и Комплексные соли", kk: "Қосарлы және Комплексті тұздар", en: "Double & Complex Salts" },
        description: {
          ru: "Соли, содержащие координационные комплексные ионы (в квадратных скобках) или два различных катиона металла.",
          kk: "Құрамында комплексті иондары (шаршы жақшада) немесе екі түрлі металл катиондары бар күрделі тұздар.",
          en: "Salts containing coordination spheres with complex ions or two different metal cations."
        },
        criteria: { ru: "Квадратные скобки [ ] или два катиона", kk: "Шаршы жақша [ ] немесе екі түрлі катион", en: "Coordination brackets [ ] or double cations" },
        color: "#8b5cf6",
        examples: ["KAl(SO₄)₂", "K₄[Fe(CN)₆]", "Na[Al(OH)₄]", "[Cu(NH₃)₄]SO₄"]
      }
    ]
  },
  {
    id: "binary",
    title: {
      ru: "Другие бинарные соединения",
      kk: "Басқа бинарлы қосылыстар",
      en: "Other Binary Compounds"
    },
    generalFormula: "Э₁ₓЭ₂ᵧ (без кислорода)",
    definition: {
      ru: "Бескислородные бинарные соединения металлов и неметаллов: гидриды, карбиды, нитриды, фосфиды, силициды и сульфиды.",
      kk: "Металдар мен бейметалдардың оттексіз бинарлы қосылыстары: гидридтер, карбидтер, нитридтер, фосфидтер және силицидтер.",
      en: "Oxygen-free binary compounds composed of two elements: hydrides, carbides, nitrides, phosphides, and silicides."
    },
    iconName: "Boxes",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    accentColor: "#a855f7",
    subClasses: [
      {
        id: "binary-other",
        title: { ru: "Гидриды, Карбиды, Нитриды", kk: "Гидридтер, Карбидтер, Нитридтер", en: "Hydrides, Carbides & Nitrides" },
        description: {
          ru: "Гидриды металлов (ст. ок. H = -1), карбиды (с углеродом), нитриды (с азотом N⁻³). Бурно реагируют с водой с выделением газов.",
          kk: "Металл гидридтері (H = -1), карбидтер, нитридтер. Сумен белсенді әрекеттесіп тиісті газдарды бөледі.",
          en: "Metal hydrides, carbides, and nitrides. Hydrolyze vigorously with water releasing respective gases."
        },
        criteria: { ru: "Бинарные соединения с H⁻¹, C⁻⁴, N⁻³", kk: "H⁻¹, C⁻⁴, N⁻³ бар бинарлы заттар", en: "Binary compounds with H⁻, C, N, P" },
        color: "#a855f7",
        examples: ["NaH", "CaH₂", "CaC₂", "Al₄C₃", "Li₃N", "Mg₂Si", "Ca₃P₂"]
      }
    ]
  }
];

export const INORGANIC_COMPOUNDS_DB: InorganicCompoundItem[] = [
  // Oxides - Basic
  {
    id: "na2o",
    formula: "Na₂O",
    formulaAscii: "Na2O",
    atoms: { Na: 2, O: 1 },
    name: { ru: "Оксид натрия", kk: "Натрий оксиді", en: "Sodium Oxide" },
    scientificName: { ru: "Оксид натрия (I)", kk: "Натрий (I) оксиді", en: "Sodium(I) Oxide" },
    mainClass: "oxide-basic",
    subCategory: { ru: "Основный оксид", kk: "Негіздік оксид", en: "Basic Oxide" },
    generalFormula: "M₂O",
    oxidationStates: "Na⁺¹ O⁻²",
    solubility: "soluble",
    description: {
      ru: "Типичный основной оксид щелочного металла. Бурно реагирует с водой с образованием едкого натра (NaOH) и выделением тепла.",
      kk: "Сілтілік металдың типтік негіздік оксиді. Сумен күшті әрекеттесіп күйдіргіш натрий (NaOH) түзеді.",
      en: "Typical alkali metal basic oxide. Reacts violently with water to produce caustic soda (NaOH)."
    },
    chemicalProperties: {
      ru: "Реагирует с водой, кислотами и кислотными оксидами.",
      kk: "Сумен, қышқылдармен және қышқылдық оксидтермен әрекеттеседі.",
      en: "Reacts vigorously with water, acids, and acid anhydrides."
    },
    typicalReactions: [
      { equation: "Na₂O + H₂O → 2NaOH", description: { ru: "Реакция с водой (образование щёлочи)", kk: "Сумен әрекеттесу (сілті түзілуі)", en: "Reaction with water forming alkali" } },
      { equation: "Na₂O + 2HCl → 2NaCl + H₂O", description: { ru: "Реакция с соляной кислотой", kk: "Тұз қышқылымен әрекеттесу", en: "Neutralization with hydrochloric acid" } }
    ],
    practicalUse: {
      ru: "Производство стекла, керамики и химический синтез.",
      kk: "Шыны, керамика өндірісі және химиялық синтез.",
      en: "Glass manufacturing, ceramics, and chemical synthesis."
    },
    color: "#3b82f6",
    isSynthesizableInLab: true
  },
  {
    id: "cao",
    formula: "CaO",
    formulaAscii: "CaO",
    atoms: { Ca: 1, O: 1 },
    name: { ru: "Негашёная известь", kk: "Сөндірілмеген әк", en: "Quicklime (Calcium Oxide)" },
    scientificName: { ru: "Оксид кальция", kk: "Кальций оксиді", en: "Calcium Oxide" },
    mainClass: "oxide-basic",
    subCategory: { ru: "Основный оксид", kk: "Негіздік оксид", en: "Basic Oxide" },
    generalFormula: "MO",
    oxidationStates: "Ca⁺² O⁻²",
    solubility: "soluble",
    description: {
      ru: "Белое кристаллическое тугоплавкое вещество. При гашении водой выделяет колоссальное количество теплоты, превращаясь в гашёную известь Ca(OH)₂.",
      kk: "Ақ түсті қиын балқитын зат. Сумен сөндіргенде өте көп жылу бөліп, сөндірілген әкке Ca(OH)₂ айналады.",
      en: "White caustic crystalline solid. Reacts exothermically with water to form slaked lime Ca(OH)₂."
    },
    chemicalProperties: {
      ru: "Бурно соединяется с водой, нейтрализует кислоты.",
      kk: "Сумен белсенді қосылады, қышқылдарды бейтараптайды.",
      en: "Hydrates vigorously, neutralizes acidic pollutants."
    },
    typicalReactions: [
      { equation: "CaO + H₂O → Ca(OH)₂ + 65 кДж", description: { ru: "Гашение извести водой", kk: "Әкті сумен сөндіру", en: "Lime slaking with water" } },
      { equation: "CaO + CO₂ → CaCO₃", description: { ru: "Поглощение углекислого газа", kk: "Көмірқышқыл газын сіңіру", en: "Absorption of carbon dioxide" } }
    ],
    practicalUse: {
      ru: "Строительные растворы, металлургия (флюс), очистка дымовых газов.",
      kk: "Құрылыс ерітінділері, металлургия (флюс), газдарды тазарту.",
      en: "Mortar and plaster, steelmaking flux, flue gas desulfurization."
    },
    color: "#3b82f6",
    isSynthesizableInLab: true
  },
  {
    id: "fe2o3",
    formula: "Fe₂O₃",
    formulaAscii: "Fe2O3",
    atoms: { Fe: 2, O: 3 },
    name: { ru: "Оксид железа (III) / Ржавчина", kk: "Темір (III) оксиді / Тот", en: "Iron(III) Oxide / Rust" },
    scientificName: { ru: "Оксид железа (III)", kk: "Темір (III) оксиді", en: "Iron(III) Oxide" },
    mainClass: "oxide-amphoteric",
    subCategory: { ru: "Амфотерный оксид", kk: "Амфотерлі оксид", en: "Amphoteric Oxide" },
    generalFormula: "M₂O₃",
    oxidationStates: "Fe⁺³ O⁻²",
    solubility: "insoluble",
    description: {
      ru: "Красно-коричневый минерал (гематит). Основной компонент ржавчины и важнейшая железная руда для выплавки чугуна и стали.",
      kk: "Қызыл-қоңыр түсті минерал (гематит). Тоттың негізгі құраушысы және шойын мен болат қорытудағы басты темір кені.",
      en: "Reddish-brown mineral (hematite). Primary constituent of rust and key iron ore for blast furnaces."
    },
    chemicalProperties: {
      ru: "Не растворяется в воде. Реагирует с кислотами и спекается со щелочами.",
      kk: "Суда ерімейді. Қышқылдармен әрекеттеседі, сілтілермен балқытылады.",
      en: "Insoluble in water. Dissolves in strong acids and fuses with alkalis."
    },
    typicalReactions: [
      { equation: "Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O", description: { ru: "Растворение в кислоте", kk: "Қышқылда еруі", en: "Dissolution in hydrochloric acid" } },
      { equation: "Fe₂O₃ + 3CO → 2Fe + 3CO₂", description: { ru: "Восстановление железа в доменной печи", kk: "Домна пешінде темірді тотықсыздандыру", en: "Blast furnace iron reduction" } }
    ],
    practicalUse: {
      ru: "Выплавка железа, полировальный порошок, пигмент красок (охра).",
      kk: "Темір қорыту, бояу пигменттері (жоса), жылтыратқыш ұнтақ.",
      en: "Iron smelting, magnetic tapes, pigment, jeweler's rouge polishing."
    },
    color: "#f59e0b",
    isSynthesizableInLab: true
  },

  // Oxides - Acidic
  {
    id: "co2",
    formula: "CO₂",
    formulaAscii: "CO2",
    atoms: { C: 1, O: 2 },
    name: { ru: "Углекислый газ", kk: "Көмірқышқыл газы", en: "Carbon Dioxide" },
    scientificName: { ru: "Оксид углерода (IV)", kk: "Көміртек (IV) оксиді", en: "Carbon(IV) Oxide" },
    mainClass: "oxide-acidic",
    subCategory: { ru: "Кислотный оксид", kk: "Қышқылдық оксид", en: "Acidic Oxide" },
    generalFormula: "ЭO₂",
    oxidationStates: "C⁺⁴ O⁻²",
    solubility: "gas",
    description: {
      ru: "Бесцветный газ без запаха. Продукт дыхания и горения. Вызывает помутнение известковой воды за счёт выпадения карбоната кальция.",
      kk: "Түссіз, иіссіз газ. Тыныс алу мен жану өнімі. Әк суын лайландырып, кальций карбонаты тұнбасын түзеді.",
      en: "Colorless greenhouse gas. Acid anhydride of carbonic acid. Turns limewater milky due to CaCO₃ precipitate."
    },
    chemicalProperties: {
      ru: "Растворяется в воде с образованием слабой угольной кислоты, реагирует со щелочами.",
      kk: "Суда еріп әлсіз көмір қышқылын түзеді, сілтілермен тұз түзеді.",
      en: "Hydrates into weak carbonic acid, reacts with alkalis to form carbonates."
    },
    typicalReactions: [
      { equation: "CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O", description: { ru: "Качественная реакция (помутнение известковой воды)", kk: "Сапалық реакция (әк суының лайлануы)", en: "Limewater test for carbon dioxide" } },
      { equation: "CO₂ + H₂O ⇌ H₂CO₃", description: { ru: "Образование угольной кислоты", kk: "Көмір қышқылының түзілуі", en: "Formation of carbonic acid" } }
    ],
    practicalUse: {
      ru: "Газирование напитков, огнетушители, сухой лёд для заморозки, фотосинтез.",
      kk: "Сусындарды газдандыру, өрт сөндіргіштер, құрғақ мұз, фотосинтез.",
      en: "Carbonated beverages, fire extinguishers, dry ice coolant, photosynthesis."
    },
    color: "#ef4444",
    isSynthesizableInLab: true
  },
  {
    id: "so3",
    formula: "SO₃",
    formulaAscii: "SO3",
    atoms: { S: 1, O: 3 },
    name: { ru: "Серный ангидрид", kk: "Күкірт (VI) оксиді", en: "Sulfur Trioxide" },
    scientificName: { ru: "Оксид серы (VI)", kk: "Күкірт (VI) оксиді", en: "Sulfur(VI) Oxide" },
    mainClass: "oxide-acidic",
    subCategory: { ru: "Кислотный оксид", kk: "Қышқылдық оксид", en: "Acidic Oxide" },
    generalFormula: "ЭO₃",
    oxidationStates: "S⁺⁶ O⁻²",
    solubility: "soluble",
    description: {
      ru: "Высший оксид серы, ангидрид серной кислоты. Бурно реагирует с водой со взрывом и образованием тумана серной кислоты.",
      kk: "Күкірттің жоғары оксиді, күкірт қышқылының ангидриді. Сумен өте белсенді қосылып, күкірт қышқылын түзеді.",
      en: "Higher oxide of sulfur and anhydride of sulfuric acid. Reacts vigorously with water to form H₂SO₄."
    },
    chemicalProperties: {
      ru: "Сильнейший кислотный оксид и водоотнимающее средство.",
      kk: "Өте күшті қышқылдық оксид және су тартқыш зат.",
      en: "Powerful acidic anhydride and dehydrating agent."
    },
    typicalReactions: [
      { equation: "SO₃ + H₂O → H₂SO₄", description: { ru: "Синтез серной кислоты", kk: "Күкірт қышқылының синтезі", en: "Sulfuric acid industrial synthesis" } },
      { equation: "SO₃ + 2NaOH → Na₂SO₄ + H₂O", description: { ru: "Реакция со щёлочью", kk: "Сілтімен әрекеттесу", en: "Neutralization with sodium hydroxide" } }
    ],
    practicalUse: {
      ru: "Производство серной кислоты и олеума, сульфирование органических веществ.",
      kk: "Күкірт қышқылы мен олеум өндірісі.",
      en: "Sulfuric acid production, oleum, sulfonation in detergents."
    },
    color: "#ef4444",
    isSynthesizableInLab: true
  },

  // Hydroxides / Bases
  {
    id: "naoh",
    formula: "NaOH",
    formulaAscii: "NaOH",
    atoms: { Na: 1, O: 1, H: 1 },
    name: { ru: "Едкий натр (Каустическая сода)", kk: "Күйдіргіш натрий (Каустик)", en: "Caustic Soda (Sodium Hydroxide)" },
    scientificName: { ru: "Гидроксид натрия", kk: "Натрий гидроксиді", en: "Sodium Hydroxide" },
    mainClass: "base-alkali",
    subCategory: { ru: "Щёлочь (Растворимое основание)", kk: "Сілті (Еритін негіз)", en: "Strong Alkali" },
    generalFormula: "M(OH)",
    oxidationStates: "Na⁺¹ O⁻² H⁺¹",
    solubility: "soluble",
    description: {
      ru: "Белое гигроскопичное вещество, сильнейшая щёлочь. Разъедает кожу, ткань и бумагу. В водном растворе диссоциирует на 100%, окрашивает фенолфталеин в малиновый цвет.",
      kk: "Ақ түсті гигроскопиялық зат, ең күшті сілтілердің бірі. Теріні, матаны күйдіреді. Фенолфталеинді таңқурай түске бояйды.",
      en: "White deliquescent solid, archetype strong alkali. Fully dissociates to Na⁺ and OH⁻. Turns phenolphthalein vibrant magenta."
    },
    chemicalProperties: {
      ru: "Нейтрализует кислоты, растворяет амфотерные металлы и оксиды, омыляет жиры.",
      kk: "Қышқылдарды бейтараптайды, амфотерлі металдарды ерітеді, майларды сабындайды.",
      en: "Reacts with acids (neutralization), amphoteric metals/oxides, and saponifies fats."
    },
    typicalReactions: [
      { equation: "NaOH + HCl → NaCl + H₂O", description: { ru: "Классическая нейтрализация", kk: "Классикалық бейтараптану", en: "Classic neutralization reaction" } },
      { equation: "2NaOH + CO₂ → Na₂CO₃ + H₂O", description: { ru: "Поглощение углекислого газа", kk: "Көмірқышқыл газын байланыстыру", en: "Carbon dioxide scrub" } }
    ],
    practicalUse: {
      ru: "Производство мыла и моющих средств, бумаги, очистка нефтепродуктов.",
      kk: "Сабын, қағаз өндірісі, мұнай өнімдерін тазарту.",
      en: "Soap making (saponification), paper pulping, drain cleaner, chemical reagent."
    },
    color: "#6366f1",
    isSynthesizableInLab: true
  },
  {
    id: "cu_oh_2",
    formula: "Cu(OH)₂",
    formulaAscii: "Cu(OH)2",
    atoms: { Cu: 1, O: 2, H: 2 },
    name: { ru: "Гидроксид меди (II)", kk: "Мыс (II) гидроксиді", en: "Copper(II) Hydroxide" },
    scientificName: { ru: "Гидроксид меди (II)", kk: "Мыс (II) гидроксиді", en: "Copper(II) Hydroxide" },
    mainClass: "base-insoluble",
    subCategory: { ru: "Нерастворимое основание", kk: "Ерімейтін негіз", en: "Insoluble Base" },
    generalFormula: "M(OH)₂",
    oxidationStates: "Cu⁺² O⁻² H⁺¹",
    solubility: "insoluble",
    description: {
      ru: "Ярко-голубой студенистый осадок. При лёгком нагревании необратимо чернеет, разлагаясь на чёрный оксид меди (CuO) и воду.",
      kk: "Ашық-көк түсті тұнба. Аздап қыздырғанда қара түсті мыс оксидіне (CuO) және суға ыдырайды.",
      en: "Vibrant light-blue gelatinous precipitate. Decomposes thermally into black CuO upon gentle warming."
    },
    chemicalProperties: {
      ru: "Растворяется в кислотах, термически неустойчив.",
      kk: "Қышқылдарда ериді, қыздырғанда оңай ыдырайды.",
      en: "Dissolves in acids, decomposes upon heating, dissolves in ammonia."
    },
    typicalReactions: [
      { equation: "Cu(OH)₂ xrightarrow{t} CuO + H₂O", description: { ru: "Термическое разложение (почернение)", kk: "Термиялық ыдырау (қараюы)", en: "Thermal decomposition to black oxide" } },
      { equation: "Cu(OH)₂ + H₂SO₄ → CuSO₄ + 2H₂O", description: { ru: "Растворение в серной кислоте", kk: "Күкірт қышқылында еруі", en: "Dissolution in sulfuric acid" } }
    ],
    practicalUse: {
      ru: "Фунгицид (бордоская жидкость против болезней растений), пигмент, качественный реактив на глюкозу.",
      kk: "Өсімдік ауруларына қарсы фунгицид (бордо сұйықтығы), глюкозаны анықтау реактиві.",
      en: "Bordeaux fungicide for agriculture, blue pigment, qualitative test for polyols & glucose."
    },
    color: "#0284c7",
    isSynthesizableInLab: true
  },

  // Acids
  {
    id: "hcl",
    formula: "HCl",
    formulaAscii: "HCl",
    atoms: { H: 1, Cl: 1 },
    name: { ru: "Соляная (хлороводородная) кислота", kk: "Тұз қышқылы (Хлорсутек)", en: "Hydrochloric Acid" },
    scientificName: { ru: "Хлороводородная кислота", kk: "Хлорсутек қышқылы", en: "Hydrochloric Acid" },
    mainClass: "acid-oxygenless",
    subCategory: { ru: "Бескислородная сильная кислота", kk: "Оттексіз күшті қышқыл", en: "Oxygen-free Strong Acid" },
    generalFormula: "HAc",
    oxidationStates: "H⁺¹ Cl⁻¹",
    solubility: "soluble",
    description: {
      ru: "Раствор газа хлороводорода в воде. Сильная одноосновная кислота. Содержится в желудочном соке человека (0.5%), помогая переваривать пищу.",
      kk: "Хлорсутек газының судағы ерітіндісі. Күшті бірнегізді қышқыл. Адамның асқазан сөлінде болады (0.5%), асты қорытуға қатысады.",
      en: "Aqueous solution of hydrogen chloride gas. Strong monoprotic acid, naturally present in gastric acid (0.5%)."
    },
    chemicalProperties: {
      ru: "Реагирует с металлами до водорода (выделяя H₂), с оксидами металлов, основаниями и солями слабых кислот.",
      kk: "Сутегіге дейінгі металдармен әрекеттесіп H₂ бөледі, негіздермен, оксидтермен әрекеттеседі.",
      en: "Attacks base metals releasing H₂ gas, dissolves oxides and carbonates."
    },
    typicalReactions: [
      { equation: "Zn + 2HCl → ZnCl₂ + H₂↑", description: { ru: "Вытеснение водорода металлом", kk: "Металмен сутекті ығыстыру", en: "Hydrogen gas generation with zinc" } },
      { equation: "HCl + AgNO₃ → AgCl↓ + HNO₃", description: { ru: "Качественная реакция (белый творожистый осадок)", kk: "Сапалық реакция (ақ ірімшік тәрізді тұнба)", en: "Silver chloride precipitation test" } }
    ],
    practicalUse: {
      ru: "Травление металлов, гидрометаллургия, пищевая промышленность (E507), синтез хлоридов.",
      kk: "Металдарды өңдеу, тағам өнеркәсібі, хлоридтер синтезі.",
      en: "Steel pickling, industrial acid cleaning, chemical synthesis, pH regulator."
    },
    color: "#f59e0b",
    isSynthesizableInLab: true
  },
  {
    id: "h2so4",
    formula: "H₂SO₄",
    formulaAscii: "H2SO4",
    atoms: { H: 2, S: 1, O: 4 },
    name: { ru: "Серная кислота", kk: "Күкірт қышқылы", en: "Sulfuric Acid" },
    scientificName: { ru: "Тетраоксосульфат (VI) водорода", kk: "Күкірт (VI) қышқылы", en: "Sulfuric(VI) Acid" },
    mainClass: "acid-oxygen",
    subCategory: { ru: "Кислородсодержащая сильная двухосновная", kk: "Оттекті күшті екінегізді қышқыл", en: "Strong Dibasic Oxoacid" },
    generalFormula: "H₂Ac",
    oxidationStates: "H⁺¹ S⁺⁶ O⁻²",
    solubility: "soluble",
    description: {
      ru: "«Хлеб химической промышленности». Тяжёлая маслянистая жидкость, сильнейший окислитель и водоотнимающее вещество. Обугливает сахар и древесину.",
      kk: "«Химия өнеркәсібінің наны». Ауыр майлы сұйықтық, күшті тотықтырғыш және су тартқыш. Қантты көмірге айналдырады.",
      en: "The cornerstone of chemical industry. Heavy oily liquid with immense dehydrating and oxidizing power."
    },
    chemicalProperties: {
      ru: "Двухосновная кислота, образует средние (сульфаты) и кислые (гидросульфаты) соли.",
      kk: "Екінегізді қышқыл, орта (сульфаттар) және қышқыл (гидросульфаттар) тұздар түзеді.",
      en: "Forms normal sulfates and bisulfates. Concentrated acid oxidizes copper and silver."
    },
    typicalReactions: [
      { equation: "H₂SO₄ + BaCl₂ → BaSO₄↓ + 2HCl", description: { ru: "Качественная реакция (белый нерастворимый осадок)", kk: "Сапалық реакция (ақ ерімейтін тұнба)", en: "Barium sulfate precipitation test" } },
      { equation: "Cu + 2H₂SO₄(конц.) → CuSO₄ + SO₂↑ + 2H₂O", description: { ru: "Окисление меди концентрированной кислотой", kk: "Мысты концентрлі қышқылмен тотықтыру", en: "Reaction of concentrated acid with copper" } }
    ],
    practicalUse: {
      ru: "Производство минеральных удобрений, автомобильные аккумуляторы, очистка нефтепродуктов.",
      kk: "Минералды тыңайтқыштар, автокөлік аккумуляторлары, металлургия.",
      en: "Phosphate fertilizer production, lead-acid car batteries, chemical refining."
    },
    color: "#dc2626",
    isSynthesizableInLab: true
  },

  // Salts
  {
    id: "nacl",
    formula: "NaCl",
    formulaAscii: "NaCl",
    atoms: { Na: 1, Cl: 1 },
    name: { ru: "Поваренная соль (Хлорид натрия)", kk: "Ас тұзы (Натрий хлориді)", en: "Table Salt (Sodium Chloride)" },
    scientificName: { ru: "Хлорид натрия", kk: "Натрий хлориді", en: "Sodium Chloride" },
    mainClass: "salt-normal",
    subCategory: { ru: "Средняя (нормальная) соль", kk: "Орта (қалыпты) тұз", en: "Normal Salt" },
    generalFormula: "MAc",
    oxidationStates: "Na⁺¹ Cl⁻¹",
    solubility: "soluble",
    description: {
      ru: "Бесцветные кристаллы с кубической ионной решёткой. Жизненно необходима для человека для поддержания осмотического давления крови и выработки соляной кислоты.",
      kk: "Текше тәрізді иондық торы бар мөлдір кристалдар. Ағзадағы осмостық қысымды ұстап тұру үшін өте маңызды.",
      en: "Classic ionic crystal lattice of Na⁺ and Cl⁻ ions. Essential nutrient for nerve impulses and fluid balance."
    },
    chemicalProperties: {
      ru: "Нейтральная среда водного раствора (pH = 7). Реагирует с солями серебра.",
      kk: "Сулы ерітіндісі бейтарап (pH = 7). Күміс тұздарымен әрекеттеседі.",
      en: "Neutral pH in aqueous solution. Precipitates AgCl with silver nitrate."
    },
    typicalReactions: [
      { equation: "NaCl + AgNO₃ → AgCl↓ + NaNO₃", description: { ru: "Качественная реакция на хлорид-ион", kk: "Хлорид ионына сапалық реакция", en: "Silver test for chloride anions" } },
      { equation: "2NaCl + 2H₂O xrightarrow{электролиз} 2NaOH + Cl₂↑ + H₂↑", description: { ru: "Электролиз раствора поваренной соли", kk: "Ас тұзы ерітіндісінің электролизі", en: "Chloralkali membrane electrolysis" } }
    ],
    practicalUse: {
      ru: "Пищевая приправа и консервант, противогололёдный реагент, сырьё для получения соды, хлора и NaOH.",
      kk: "Тағамға қоспа, консервант, мұзға қарсы сеппе, хлор мен сілті алу шикізаты.",
      en: "Food seasoning, meat preservation, highway de-icing, chlor-alkali chemical feedstock."
    },
    color: "#10b981",
    isSynthesizableInLab: true
  },
  {
    id: "caco3",
    formula: "CaCO₃",
    formulaAscii: "CaCO3",
    atoms: { Ca: 1, C: 1, O: 3 },
    name: { ru: "Карбонат кальция (Мел, Известняк, Мрамор)", kk: "Кальций карбонаты (Бор, Әктас, Мәрмәр)", en: "Calcium Carbonate (Chalk, Limestone, Marble)" },
    scientificName: { ru: "Карбонат кальция", kk: "Кальций карбонаты", en: "Calcium Carbonate" },
    mainClass: "salt-normal",
    subCategory: { ru: "Средняя нерастворимая соль", kk: "Орта ерімейтін тұз", en: "Insoluble Normal Salt" },
    generalFormula: "MAc",
    oxidationStates: "Ca⁺² C⁺⁴ O⁻²",
    solubility: "insoluble",
    description: {
      ru: "Белое кристаллическое вещество, основа мела, известняка, мрамора, раковин моллюсков и яичной скорлупы. Бурно шипит при действии кислот с выделением CO₂.",
      kk: "Ақ түсті кристалды зат, бор, әктас, мәрмәр және жұмыртқа қабығының негізі. Қышқыл тигенде CO₂ бөліп қатты бұрқылдайды.",
      en: "Ubiquitous mineral found in limestone, marble, chalk, seashells, and eggshells. Effervesces with acids."
    },
    chemicalProperties: {
      ru: "Разлагается при сильном прокаливании (1000°C), растворяется в кислотах.",
      kk: "Қатты қыздырғанда (1000°C) ыдырайды, қышқылдарда бұрқылдап ериді.",
      en: "Decomposes at 1000°C into CaO and CO₂; vigorously dissolves in dilute acids."
    },
    typicalReactions: [
      { equation: "CaCO₃ + 2HCl → CaCl₂ + CO₂↑ + H₂O", description: { ru: "Бурное растворение в кислоте («вскипание»)", kk: "Қышқылда бұрқылдап еруі", en: "Effervescence with hydrochloric acid" } },
      { equation: "CaCO₃ xrightarrow{1000°C} CaO + CO₂↑", description: { ru: "Обжиг известняка (получение негашёной извести)", kk: "Әктасты күйдіру (сөндірілмеген әк алу)", en: "Thermal calcination to quicklime" } }
    ],
    practicalUse: {
      ru: "Строительный камень, производство цемента, школьный мел, бумажная промышленность.",
      kk: "Құрылыс материалы, цемент өндірісі, мектеп боры, қағаз толтырғыш.",
      en: "Cement and concrete, architectural marble, blackboard chalk, paper filler."
    },
    color: "#10b981",
    isSynthesizableInLab: true
  },
  {
    id: "nahco3",
    formula: "NaHCO₃",
    formulaAscii: "NaHCO3",
    atoms: { Na: 1, H: 1, C: 1, O: 3 },
    name: { ru: "Пищевая сода (Гидрокарбонат натрия)", kk: "Ас содасы (Натрий гидрокарбонаты)", en: "Baking Soda (Sodium Bicarbonate)" },
    scientificName: { ru: "Гидрокарбонат натрия", kk: "Натрий гидрокарбонаты", en: "Sodium Hydrogen Carbonate" },
    mainClass: "salt-acid",
    subCategory: { ru: "Кислая соль (Гидросоль)", kk: "Қышқыл тұз (Гидротұз)", en: "Acid Salt (Bicarbonate)" },
    generalFormula: "M(HAc)",
    oxidationStates: "Na⁺¹ H⁺¹ C⁺⁴ O⁻²",
    solubility: "soluble",
    description: {
      ru: "Белый порошок со солоноватым вкусом. Классический пример кислой соли (содержит ион H⁺). При нагревании выше 60°C разлагается с выделением углекислого газа, разрыхляя тесто.",
      kk: "Ақ түсті ұнтақ, қышқыл тұздың классикалық үлгісі. 60°C-тан жоғары қыздырғанда CO₂ бөліп ыдырайды, қамырды қопсытады.",
      en: "White crystalline powder. Prototypical acid salt containing the bicarbonate anion (HCO₃⁻). Releases CO₂ gas when heated or acidified."
    },
    chemicalProperties: {
      ru: "Слабощелочная среда раствора за счет гидролиза. Реагирует с кислотами с обильным вспениванием.",
      kk: "Гидролиз есебінен әлсіз сілтілік орта көрсетеді. Қышқылдармен көпіріп әрекеттеседі.",
      en: "Mildly alkaline aqueous solution. Reacts with acids to produce instant fizzing CO₂ foam."
    },
    typicalReactions: [
      { equation: "NaHCO₃ + CH₃COOH → CH₃COONa + CO₂↑ + H₂O", description: { ru: "Гашение соды уксусом в кулинарии", kk: "Соданы сірке суымен сөндіру", en: "Culinary leavening with vinegar" } },
      { equation: "2NaHCO₃ xrightarrow{t} Na₂CO₃ + CO₂↑ + H₂O", description: { ru: "Термическое разложение", kk: "Термиялық ыдырауы", en: "Thermal decomposition above 60°C" } }
    ],
    practicalUse: {
      ru: "Выпечка (разрыхлитель), медицина (антацид при изжоге), порошковые огнетушители.",
      kk: "Аспаздық (қамыр қопсытқыш), медицина, өрт сөндіргіштер.",
      en: "Baking leavening agent, antacid for heartburn, dry chemical fire extinguishers."
    },
    color: "#14b8a6",
    isSynthesizableInLab: true
  },
  {
    id: "malachite",
    formula: "Cu₂(OH)₂CO₃",
    formulaAscii: "Cu2(OH)2CO3",
    atoms: { Cu: 2, O: 5, H: 2, C: 1 },
    name: { ru: "Малахит (Гидроксокарбонат меди)", kk: "Малахит (Мыс гидроксокарбонаты)", en: "Malachite (Basic Copper Carbonate)" },
    scientificName: { ru: "Дигидроксокарбонат меди (II)", kk: "Мыс (II) дигидроксокарбонаты", en: "Copper(II) Carbonate Hydroxide" },
    mainClass: "salt-basic",
    subCategory: { ru: "Основная соль (Гидроксосоль)", kk: "Негіздік тұз (Гидроксотұз)", en: "Basic Salt" },
    generalFormula: "(MOH)₂Ac",
    oxidationStates: "Cu⁺² OH⁻¹ CO₃²⁻",
    solubility: "insoluble",
    description: {
      ru: "Красивый изумрудно-зелёный минерал. Образуется на медных памятниках и крышах при длительном контакте с влажным воздухом (зелёная патина).",
      kk: "Әдемі изумруд-жасыл минерал. Мыс ескерткіштер мен шатырларда ауа мен ылғал әсерінен түзілетін жасыл патина.",
      en: "Striking emerald-green gemstone mineral. Forms naturally as green patina on outdoor copper statues and dome roofs."
    },
    chemicalProperties: {
      ru: "Растворяется в кислотах с шипением, разлагается при нагревании.",
      kk: "Қышқылдарда көпіріп ериді, қыздырғанда CuO, CO₂ және суға ыдырайды.",
      en: "Effervesces in acids, thermally decomposes to CuO, CO₂, and H₂O."
    },
    typicalReactions: [
      { equation: "Cu₂(OH)₂CO₃ + 4HCl → 2CuCl₂ + CO₂↑ + 3H₂O", description: { ru: "Растворение в кислоте", kk: "Қышқылда еруі", en: "Acid dissolution" } },
      { equation: "Cu₂(OH)₂CO₃ xrightarrow{t} 2CuO + CO₂↑ + H₂O", description: { ru: "Термическое разложение минерала", kk: "Минералдың термиялық ыдырауы", en: "Thermal decomposition into black tenorite" } }
    ],
    practicalUse: {
      ru: "Ювелирные изделия, художественная резьба по камню, сырьё для выплавки меди, зелёный пигмент.",
      kk: "Зергерлік бұйымдар, тас қашау өнері, мыс кені.",
      en: "Ornamental stone carvings, jewelry, historical green paint pigment."
    },
    color: "#84cc16",
    isSynthesizableInLab: false
  }
];

export const GENETIC_CHAINS_DATA: GeneticChain[] = [
  {
    id: "chain-calcium",
    title: {
      ru: "Генетический ряд кальция (Линия металлов)",
      kk: "Кальцийдің генетикалық қатары (Металдар желісі)",
      en: "Calcium Genetic Series (Metal Pathway)"
    },
    type: "metal",
    description: {
      ru: "Классическая цепочка превращений активного металла через оксид и основание в среднюю и кислую соль.",
      kk: "Белсенді металдың оксид және негіз арқылы орта және қышқыл тұзға айналуының классикалық тізбегі.",
      en: "Sequential transformation of an active metal via oxide and base into normal and acid salts."
    },
    steps: [
      {
        stepNumber: 1,
        substanceName: { ru: "Кальций (Металл)", kk: "Кальций (Металл)", en: "Calcium (Metal)" },
        formula: "Ca",
        compoundClass: { ru: "Простое вещество (Металл)", kk: "Жай зат (Металл)", en: "Simple Metal" },
        reactionEquation: "2Ca + O₂ → 2CaO",
        reactionType: { ru: "Горение металла в кислороде (Соединение)", kk: "Металдың оттекте жануы (Қосылу)", en: "Oxidation in oxygen (Combination)" }
      },
      {
        stepNumber: 2,
        substanceName: { ru: "Оксид кальция (Негашёная известь)", kk: "Кальций оксиді (Сөндірілмеген әк)", en: "Calcium Oxide (Quicklime)" },
        formula: "CaO",
        compoundClass: { ru: "Основный оксид", kk: "Негіздік оксид", en: "Basic Oxide" },
        reactionEquation: "CaO + H₂O → Ca(OH)₂ + 65 кДж",
        reactionType: { ru: "Гидратация / Гашение извести", kk: "Әкті сумен сөндіру", en: "Hydration slaking" }
      },
      {
        stepNumber: 3,
        substanceName: { ru: "Гидроксид кальция (Гашёная известь)", kk: "Кальций гидроксиді (Сөндірілген әк)", en: "Calcium Hydroxide (Slaked Lime)" },
        formula: "Ca(OH)₂",
        compoundClass: { ru: "Основание (Щёлочь)", kk: "Негіз (Сілті)", en: "Base (Alkali)" },
        reactionEquation: "Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O",
        reactionType: { ru: "Связывание кислотного оксида", kk: "Қышқылдық оксидпен әрекеттесу", en: "Carbonation precipitation" }
      },
      {
        stepNumber: 4,
        substanceName: { ru: "Карбонат кальция (Известняк/Мел)", kk: "Кальций карбонаты (Әктас/Бор)", en: "Calcium Carbonate" },
        formula: "CaCO₃",
        compoundClass: { ru: "Средняя соль", kk: "Орта тұз", en: "Normal Salt" },
        reactionEquation: "CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂",
        reactionType: { ru: "Растворение в избытке CO₂ (образование кислой соли)", kk: "Артық CO₂-де еру (қышқыл тұз түзілуі)", en: "Excess carbonation to acid salt" }
      },
      {
        stepNumber: 5,
        substanceName: { ru: "Гидрокарбонат кальция (Временная жесткость)", kk: "Кальций гидрокарбонаты", en: "Calcium Bicarbonate" },
        formula: "Ca(HCO₃)₂",
        compoundClass: { ru: "Кислая соль", kk: "Қышқыл тұз", en: "Acid Salt" },
        reactionEquation: "Ca(HCO₃)₂ xrightarrow{t} CaCO₃↓ + CO₂↑ + H₂O",
        reactionType: { ru: "Осаждение накипи при кипячении", kk: "Қайнатқанда қақтың тұнуы", en: "Boiling scale deposition" }
      }
    ]
  },
  {
    id: "chain-sulfur",
    title: {
      ru: "Генетический ряд серы (Линия неметаллов)",
      kk: "Күкірттің генетикалық қатары (Бейметалдар желісі)",
      en: "Sulfur Genetic Series (Nonmetal Pathway)"
    },
    type: "nonmetal",
    description: {
      ru: "Цепочка превращений типичного неметалла в кислотный оксид, серную кислоту и сульфатную соль.",
      kk: "Типтік бейметалдың қышқылдық оксидке, күкірт қышқылына және сульфат тұзына айналу тізбегі.",
      en: "Sequential oxidation and hydration of nonmetal sulfur into oxoacid and sulfate salts."
    },
    steps: [
      {
        stepNumber: 1,
        substanceName: { ru: "Сера (Неметалл)", kk: "Күкірт (Бейметалл)", en: "Sulfur (Nonmetal)" },
        formula: "S",
        compoundClass: { ru: "Простое вещество (Неметалл)", kk: "Жай зат (Бейметалл)", en: "Simple Nonmetal" },
        reactionEquation: "S + O₂ → SO₂",
        reactionType: { ru: "Горение серы синим пламенем", kk: "Күкірттің көк жалынмен жануы", en: "Combustion in air" }
      },
      {
        stepNumber: 2,
        substanceName: { ru: "Диоксид серы (Сернистый газ)", kk: "Күкірт (IV) оксиді", en: "Sulfur Dioxide" },
        formula: "SO₂",
        compoundClass: { ru: "Кислотный оксид", kk: "Қышқылдық оксид", en: "Acidic Oxide" },
        reactionEquation: "2SO₂ + O₂ xrightarrow{V₂O₅} 2SO₃",
        reactionType: { ru: "Каталитическое окисление", kk: "Каталитикалық тотығу", en: "Catalytic oxidation" }
      },
      {
        stepNumber: 3,
        substanceName: { ru: "Триоксид серы (Серный ангидрид)", kk: "Күкірт (VI) оксиді", en: "Sulfur Trioxide" },
        formula: "SO₃",
        compoundClass: { ru: "Кислотный оксид (Ангидрид)", kk: "Қышқылдық ангидрид", en: "Acid Anhydride" },
        reactionEquation: "SO₃ + H₂O → H₂SO₄",
        reactionType: { ru: "Гидратация ангидрида", kk: "Ангидридтің гидратациясы", en: "Hydration to acid" }
      },
      {
        stepNumber: 4,
        substanceName: { ru: "Серная кислота", kk: "Күкірт қышқылы", en: "Sulfuric Acid" },
        formula: "H₂SO₄",
        compoundClass: { ru: "Кислородсодержащая кислота", kk: "Оттекті қышқыл", en: "Oxoacid" },
        reactionEquation: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O",
        reactionType: { ru: "Нейтрализация щёлочью", kk: "Сілтімен бейтараптану", en: "Neutralization with alkali" }
      },
      {
        stepNumber: 5,
        substanceName: { ru: "Сульфат натрия (Глауберова соль)", kk: "Натрий сульфаты", en: "Sodium Sulfate" },
        formula: "Na₂SO₄",
        compoundClass: { ru: "Средняя соль", kk: "Орта тұз", en: "Normal Salt" },
        reactionEquation: "Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl",
        reactionType: { ru: "Качественная реакция (осадок сульфата бария)", kk: "Барий сульфатының ақ тұнбасы", en: "Analytical barium test" }
      }
    ]
  }
];

export const CLASSIFICATION_QUIZ_QUESTIONS: ClassificationQuizQuestion[] = [
  {
    id: "q1",
    substanceFormula: "Al₂O₃",
    substanceName: { ru: "Оксид алюминия", kk: "Алюминий оксиді", en: "Aluminum Oxide" },
    correctClass: "oxide-amphoteric",
    options: [
      { classId: "oxide-basic", title: { ru: "Основный оксид", kk: "Негіздік оксид", en: "Basic Oxide" } },
      { classId: "oxide-amphoteric", title: { ru: "Амфотерный оксид", kk: "Амфотерлі оксид", en: "Amphoteric Oxide" } },
      { classId: "oxide-acidic", title: { ru: "Кислотный оксид", kk: "Қышқылдық оксид", en: "Acidic Oxide" } },
      { classId: "oxide-neutral", title: { ru: "Несолеобразующий оксид", kk: "Тұз түзбейтін оксид", en: "Neutral Oxide" } }
    ],
    explanation: {
      ru: "Al₂O₃ — амфотерный оксид, так как он реагирует и с кислотами (образуя соли алюминия Al³⁺), и со щелочами (образуя алюминаты [Al(OH)₄]⁻).",
      kk: "Al₂O₃ — екідайлы (амфотерлі) оксид, өйткені ол қышқылдармен де, сілтілермен де тұз түзіп әрекеттеседі.",
      en: "Al₂O₃ is an amphoteric oxide because it reacts with both acids (forming Al³⁺ salts) and bases (forming aluminates)."
    },
    hint: {
      ru: "Алюминий стоит на границе металлов и проявляет двойственные свойства.",
      kk: "Алюминий екідайлы қасиет көрсететін элемент.",
      en: "Aluminum exhibits dual acid-base chemical properties."
    }
  },
  {
    id: "q2",
    substanceFormula: "NaHCO₃",
    substanceName: { ru: "Пищевая сода (Гидрокарбонат натрия)", kk: "Ас содасы (Натрий гидрокарбонаты)", en: "Baking Soda" },
    correctClass: "salt-acid",
    options: [
      { classId: "salt-normal", title: { ru: "Средняя соль", kk: "Орта тұз", en: "Normal Salt" } },
      { classId: "salt-acid", title: { ru: "Кислая соль (Гидросоль)", kk: "Қышқыл тұз (Гидротұз)", en: "Acid Salt" } },
      { classId: "salt-basic", title: { ru: "Основная соль", kk: "Негіздік тұз", en: "Basic Salt" } },
      { classId: "base-alkali", title: { ru: "Щёлочь", kk: "Сілті", en: "Alkali" } }
    ],
    explanation: {
      ru: "NaHCO₃ — кислая соль (гидросоль), так как в анионе присутствует незамещённый атом водорода H⁺ от угольной кислоты H₂CO₃.",
      kk: "NaHCO₃ — қышқыл тұз (гидротұз), себебі құрамында көмір қышқылының алмаспаған H⁺ сутегі атомы бар.",
      en: "NaHCO₃ is an acid salt (bicarbonate) because it contains an unreplaced ionizable H⁺ atom in the anion."
    },
    hint: {
      ru: "Обратите внимание на атом водорода 'H' посередине формулы соли.",
      kk: "Формуланың ортасындағы 'H' сутек атомына назар аударыңыз.",
      en: "Notice the 'H' atom in the middle of the salt formula."
    }
  },
  {
    id: "q3",
    substanceFormula: "Cu(OH)₂",
    substanceName: { ru: "Гидроксид меди (II)", kk: "Мыс (II) гидроксиді", en: "Copper(II) Hydroxide" },
    correctClass: "base-insoluble",
    options: [
      { classId: "base-alkali", title: { ru: "Щёлочь (растворимое)", kk: "Сілті (еритін)", en: "Alkali (Soluble)" } },
      { classId: "base-insoluble", title: { ru: "Нерастворимое основание", kk: "Ерімейтін негіз", en: "Insoluble Base" } },
      { classId: "oxide-basic", title: { ru: "Основный оксид", kk: "Негіздік оксид", en: "Basic Oxide" } },
      { classId: "salt-basic", title: { ru: "Основная соль", kk: "Негіздік тұз", en: "Basic Salt" } }
    ],
    explanation: {
      ru: "Cu(OH)₂ — нерастворимое в воде основание. Выпадает в виде ярко-голубого студенистого осадка и разлагается при слабом нагревании.",
      kk: "Cu(OH)₂ — суда ерімейтін негіз. Ашық көк түсті тұнба түрінде түзіледі және қыздырғанда оңай ыдырайды.",
      en: "Cu(OH)₂ is an insoluble base that forms a bright blue precipitate and decomposes upon heating."
    },
    hint: {
      ru: "Медь не является щелочным металлом; её гидроксид выпадает в виде голубого осадка.",
      kk: "Мыс сілтілік металл емес, оның гидроксиді көк тұнба.",
      en: "Copper is a transition metal whose hydroxide is water-insoluble."
    }
  },
  {
    id: "q4",
    substanceFormula: "CO",
    substanceName: { ru: "Угарный газ", kk: "Иісті газ", en: "Carbon Monoxide" },
    correctClass: "oxide-neutral",
    options: [
      { classId: "oxide-acidic", title: { ru: "Кислотный оксид", kk: "Қышқылдық оксид", en: "Acidic Oxide" } },
      { classId: "oxide-neutral", title: { ru: "Несолеобразующий оксид", kk: "Тұз түзбейтін оксид", en: "Neutral Oxide" } },
      { classId: "oxide-basic", title: { ru: "Основный оксид", kk: "Негіздік оксид", en: "Basic Oxide" } },
      { classId: "simple-nonmetal", title: { ru: "Простое вещество", kk: "Жай зат", en: "Simple Substance" } }
    ],
    explanation: {
      ru: "CO (угарный газ) — несолеобразующий (индифферентный) оксид. Он не образует солей при взаимодействии с кислотами и щелочами.",
      kk: "CO (иісті газ) — тұз түзбейтін (индифферентті) оксид. Ол қышқылдармен және сілтілермен тұз түзу реакциясына түспейді.",
      en: "CO (carbon monoxide) is a neutral (non-salt-forming) oxide. It does not react with acids or bases to produce salts."
    },
    hint: {
      ru: "Оксид углерода в степени окисления +2 не имеет соответствующей ему кислоты.",
      kk: "Бұл тотығу дәрежесіндегі (+2) көміртекке сәйкес келетін қышқыл жоқ.",
      en: "Carbon in +2 oxidation state lacks a corresponding oxoacid."
    }
  },
  {
    id: "q5",
    substanceFormula: "H₂SO₄",
    substanceName: { ru: "Серная кислота", kk: "Күкірт қышқылы", en: "Sulfuric Acid" },
    correctClass: "acid-oxygen",
    options: [
      { classId: "acid-oxygenless", title: { ru: "Бескислородная кислота", kk: "Оттексіз қышқыл", en: "Oxygen-free Acid" } },
      { classId: "acid-oxygen", title: { ru: "Кислородсодержащая кислота", kk: "Оттекті қышқыл", en: "Oxoacid" } },
      { classId: "salt-acid", title: { ru: "Кислая соль", kk: "Қышқыл тұз", en: "Acid Salt" } },
      { classId: "oxide-acidic", title: { ru: "Кислотный оксид", kk: "Қышқылдық оксид", en: "Acidic Oxide" } }
    ],
    explanation: {
      ru: "H₂SO₄ — сильная двухосновная кислородсодержащая кислота, содержащая 4 атома кислорода в кислотном остатке SO₄²⁻.",
      kk: "H₂SO₄ — құрамында оттегі атомдары бар күшті екінегізді қышқыл.",
      en: "H₂SO₄ is a strong dibasic oxoacid containing four oxygen atoms bound in the sulfate group."
    },
    hint: {
      ru: "Внимательно посмотрите на химический символ 'O' в формуле.",
      kk: "Формуладағы 'O' оттек символына қараңыз.",
      en: "Look at the oxygen symbol 'O' in the formula."
    }
  }
];
