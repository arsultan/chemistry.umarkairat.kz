export interface Atom3D {
  id: number;
  element: string;
  x: number;
  y: number;
  z: number;
  label?: string;
  oxidationState?: string;
}

export interface Bond3D {
  from: number;
  to: number;
  order: 1 | 2 | 3 | "aromatic";
}

export interface Molecule3D {
  id: string;
  name: { ru: string; kk: string; en: string };
  formula: string;
  formulaAscii: string;
  category: "organic" | "inorganic" | "vital" | "crystal";
  structureType: string;
  hybridization?: string;
  geometryName: { ru: string; kk: string; en: string };
  bondAngle?: string;
  dipoleMoment?: string;
  description: { ru: string; kk: string; en: string };
  funFact: { ru: string; kk: string; en: string };
  atoms: Atom3D[];
  bonds: Bond3D[];
  glowColor: string;
}

// Standard CPK Element Color Map & Physical Radii
export const ELEMENT_CPK: Record<string, { color: string; hex: number; radius: number; vdwRadius: number; mass: number; name: { ru: string; kk: string; en: string } }> = {
  H: { color: "#FFFFFF", hex: 0xFFFFFF, radius: 0.32, vdwRadius: 1.20, mass: 1.008, name: { ru: "Водород", kk: "Сутек", en: "Hydrogen" } },
  C: { color: "#334155", hex: 0x334155, radius: 0.55, vdwRadius: 1.70, mass: 12.011, name: { ru: "Углерод", kk: "Көміртек", en: "Carbon" } },
  N: { color: "#3B82F6", hex: 0x3B82F6, radius: 0.52, vdwRadius: 1.55, mass: 14.007, name: { ru: "Азот", kk: "Азот", en: "Nitrogen" } },
  O: { color: "#EF4444", hex: 0xEF4444, radius: 0.48, vdwRadius: 1.52, mass: 15.999, name: { ru: "Кислород", kk: "Оттек", en: "Oxygen" } },
  F: { color: "#10B981", hex: 0x10B981, radius: 0.45, vdwRadius: 1.47, mass: 18.998, name: { ru: "Фтор", kk: "Фтор", en: "Fluorine" } },
  Na: { color: "#8B5CF6", hex: 0x8B5CF6, radius: 0.70, vdwRadius: 2.27, mass: 22.990, name: { ru: "Натрий", kk: "Натрий", en: "Sodium" } },
  Mg: { color: "#059669", hex: 0x059669, radius: 0.65, vdwRadius: 1.73, mass: 24.305, name: { ru: "Магний", kk: "Магний", en: "Magnesium" } },
  Al: { color: "#94A3B8", hex: 0x94A3B8, radius: 0.62, vdwRadius: 1.84, mass: 26.982, name: { ru: "Алюминий", kk: "Алюминий", en: "Aluminum" } },
  Si: { color: "#CBD5E1", hex: 0xCBD5E1, radius: 0.65, vdwRadius: 2.10, mass: 28.085, name: { ru: "Кремний", kk: "Кремний", en: "Silicon" } },
  P: { color: "#F97316", hex: 0xF97316, radius: 0.58, vdwRadius: 1.80, mass: 30.974, name: { ru: "Фосфор", kk: "Фосфор", en: "Phosphorus" } },
  S: { color: "#EAB308", hex: 0xEAB308, radius: 0.60, vdwRadius: 1.80, mass: 32.060, name: { ru: "Сера", kk: "Күкірт", en: "Sulfur" } },
  Cl: { color: "#22C55E", hex: 0x22C55E, radius: 0.55, vdwRadius: 1.75, mass: 35.450, name: { ru: "Хлор", kk: "Хлор", en: "Chlorine" } },
  K: { color: "#7C3AED", hex: 0x7C3AED, radius: 0.78, vdwRadius: 2.75, mass: 39.098, name: { ru: "Калий", kk: "Калий", en: "Potassium" } },
  Ca: { color: "#64748B", hex: 0x64748B, radius: 0.72, vdwRadius: 2.31, mass: 40.078, name: { ru: "Кальций", kk: "Кальций", en: "Calcium" } },
  Fe: { color: "#EA580C", hex: 0xEA580C, radius: 0.65, vdwRadius: 2.05, mass: 55.845, name: { ru: "Железо", kk: "Темір", en: "Iron" } },
  Cu: { color: "#D97706", hex: 0xD97706, radius: 0.62, vdwRadius: 1.40, mass: 63.546, name: { ru: "Медь", kk: "Мыс", en: "Copper" } },
  Zn: { color: "#7DD3FC", hex: 0x7DD3FC, radius: 0.60, vdwRadius: 1.39, mass: 65.380, name: { ru: "Цинк", kk: "Мырыш", en: "Zinc" } },
  Br: { color: "#991B1B", hex: 0x991B1B, radius: 0.58, vdwRadius: 1.85, mass: 79.904, name: { ru: "Бром", kk: "Бром", en: "Bromine" } },
  Ag: { color: "#E2E8F0", hex: 0xE2E8F0, radius: 0.70, vdwRadius: 1.72, mass: 107.868, name: { ru: "Серебро", kk: "Күміс", en: "Silver" } },
  I: { color: "#581C87", hex: 0x581C87, radius: 0.68, vdwRadius: 1.98, mass: 126.904, name: { ru: "Йод", kk: "Йод", en: "Iodine" } },
  Ba: { color: "#065F46", hex: 0x065F46, radius: 0.85, vdwRadius: 2.68, mass: 137.327, name: { ru: "Барий", kk: "Барий", en: "Barium" } },
  Au: { color: "#FBBF24", hex: 0xFBBF24, radius: 0.72, vdwRadius: 1.66, mass: 196.967, name: { ru: "Золото", kk: "Алтын", en: "Gold" } }
};

export const PRESET_3D_MOLECULES: Molecule3D[] = [
  // 1. Water
  {
    id: "water",
    name: { ru: "Вода", kk: "Су", en: "Water" },
    formula: "H₂O",
    formulaAscii: "H2O",
    category: "vital",
    structureType: "bent",
    hybridization: "sp³",
    geometryName: { ru: "Угловая геометрия (104.5°)", kk: "Бұрыштық геометрия (104.5°)", en: "Bent Geometry (104.5°)" },
    bondAngle: "104.5°",
    dipoleMoment: "1.85 D (Высокополярная)",
    description: {
      ru: "Универсальный растворитель и основа жизни. За счёт двух неподелённых электронных пар кислорода валентный угол сжимается со стандартного тетраэдрического до 104.5°, создавая сильный дипольный момент.",
      kk: "Әмбебап еріткіш және тіршілік негізі. Оттегінің екі бөлінбеген электрондық жұбы байланыс бұрышын 104.5°-қа дейін қысып, күшті дипольді тудырады.",
      en: "The universal solvent. Due to two lone electron pairs on oxygen, the bond angle compresses from the ideal tetrahedral angle to 104.5°, generating a strong dipole moment."
    },
    funFact: {
      ru: "Лед плавает на поверхности воды потому, что при замерзании водородные связи выстраивают открытую гексагональную кристаллическую решетку с меньшей плотностью!",
      kk: "Мұз су бетінде қалқиды, себебі сутектік байланыстар тығыздығы төмен ашық гексагональды кристалдық тор құрайды!",
      en: "Ice floats because hydrogen bonds lock into an open hexagonal lattice with lower density than liquid water!"
    },
    glowColor: "#00d2ff",
    atoms: [
      { id: 0, element: "O", x: 0, y: 0.15, z: 0, label: "O", oxidationState: "-2" },
      { id: 1, element: "H", x: -0.78, y: -0.45, z: 0, label: "H", oxidationState: "+1" },
      { id: 2, element: "H", x: 0.78, y: -0.45, z: 0, label: "H", oxidationState: "+1" }
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 }
    ]
  },

  // 2. Methane
  {
    id: "methane",
    name: { ru: "Метан", kk: "Метан", en: "Methane" },
    formula: "CH₄",
    formulaAscii: "CH4",
    category: "organic",
    structureType: "tetrahedral",
    hybridization: "sp³",
    geometryName: { ru: "Правильный тетраэдр (109.5°)", kk: "Дұрыс тетраэдр (109.5°)", en: "Ideal Tetrahedral (109.5°)" },
    bondAngle: "109.47°",
    dipoleMoment: "0.00 D (Неполярная)",
    description: {
      ru: "Простейший предельный углеводород (алкан). Центральный атом углерода находится в состоянии sp³-гибридизации, образуя четыре абсолютно симметричные σ-связи C-H, направленные к вершинам тетраэдра.",
      kk: "Қарапайым қаныққан көмірсутек (алкан). Орталық көміртек атомы sp³-гибридтелген күйде болып, тетраэдр төбелеріне бағытталған 4 симметриялы σ-байланыс құрайды.",
      en: "The simplest saturated alkane. The carbon atom is sp³-hybridized, forming four fully symmetric C-H σ-bonds directed toward tetrahedral vertices."
    },
    funFact: {
      ru: "Метан является главным компонентом природного газа (до 98%) и мощным парниковым газом — в 28 раз сильнее CO₂!",
      kk: "Метан табиғи газдың негізгі бөлігін құрайды (98%-ға дейін) және CO₂-ге қарағанда 28 есе күшті парниктік газ!",
      en: "Methane accounts for up to 98% of natural gas and is a greenhouse gas 28 times more potent than carbon dioxide!"
    },
    glowColor: "#10b981",
    atoms: [
      { id: 0, element: "C", x: 0, y: 0, z: 0, label: "C", oxidationState: "-4" },
      { id: 1, element: "H", x: 0.65, y: 0.65, z: 0.65, label: "H", oxidationState: "+1" },
      { id: 2, element: "H", x: -0.65, y: -0.65, z: 0.65, label: "H", oxidationState: "+1" },
      { id: 3, element: "H", x: -0.65, y: 0.65, z: -0.65, label: "H", oxidationState: "+1" },
      { id: 4, element: "H", x: 0.65, y: -0.65, z: -0.65, label: "H", oxidationState: "+1" }
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 1 },
      { from: 0, to: 4, order: 1 }
    ]
  },

  // 3. Carbon Dioxide
  {
    id: "carbon-dioxide",
    name: { ru: "Углекислый газ", kk: "Көмірқышқыл газы", en: "Carbon Dioxide" },
    formula: "CO₂",
    formulaAscii: "CO2",
    category: "inorganic",
    structureType: "linear",
    hybridization: "sp",
    geometryName: { ru: "Линейная геометрия (180°)", kk: "Сызықтық геометрия (180°)", en: "Linear Geometry (180°)" },
    bondAngle: "180.0°",
    dipoleMoment: "0.00 D (Центросимметричная)",
    description: {
      ru: "Линейная центросимметричная молекула. Углерод в sp-гибридизации образует две σ-связи и две ортогональные π-связи с атомами кислорода. Диполи противоположно направлены и взаимно компенсируются.",
      kk: "Сызықтық орталық-симметриялы молекула. Көміртек sp-гибридтелген күйде екі σ- және екі π-байланыс құрайды.",
      en: "Linear centrosymmetric molecule. The sp-hybridized central carbon forms two double bonds (σ and π). The opposite bond dipoles cancel out completely."
    },
    funFact: {
      ru: "Твердый CO₂ называется «сухим льдом», потому что при нормальном давлении он сублимирует прямо в газ при -78.5 °C, минуя жидкую фазу!",
      kk: "Қатты CO₂ «құрғақ мұз» деп аталады, себебі қалыпты қысымда ол сұйық күйге өтпей, -78.5 °C-та бірден газға сублимацияланады!",
      en: "Solid CO₂ is known as dry ice because it sublimes straight into gas at -78.5 °C without entering liquid state!"
    },
    glowColor: "#94a3b8",
    atoms: [
      { id: 0, element: "C", x: 0, y: 0, z: 0, label: "C", oxidationState: "+4" },
      { id: 1, element: "O", x: -1.25, y: 0, z: 0, label: "O", oxidationState: "-2" },
      { id: 2, element: "O", x: 1.25, y: 0, z: 0, label: "O", oxidationState: "-2" }
    ],
    bonds: [
      { from: 0, to: 1, order: 2 },
      { from: 0, to: 2, order: 2 }
    ]
  },

  // 4. Benzene
  {
    id: "benzene",
    name: { ru: "Бензол", kk: "Бензол", en: "Benzene" },
    formula: "C₆H₆",
    formulaAscii: "C6H6",
    category: "organic",
    structureType: "cyclic",
    hybridization: "sp²",
    geometryName: { ru: "Плоское ароматическое кольцо (120°)", kk: "Жазық ароматты сақина (120°)", en: "Planar Aromatic Ring (120°)" },
    bondAngle: "120.0°",
    dipoleMoment: "0.00 D",
    description: {
      ru: "Классическое ароматическое соединение с сопряжённой шестиэлектронной делокализованной π-системой. Все атомы углерода sp²-гибридизованы и лежат в одной плоскости с одинаковой длиной связи 1.40 Å.",
      kk: "Алты электронды тұтас π-жүйесі бар классикалық ароматты қосылыс. Барлық көміртек атомдары sp²-гибридтелген және бір жазықтықта жатыр.",
      en: "The hallmark aromatic hydrocarbon featuring a continuous delocalized six π-electron ring. All carbon centers are planar sp²-hybridized with equal 1.40 Å bond lengths."
    },
    funFact: {
      ru: "Фридрих Кекуле открыл циклическую структуру бензола после сна, в котором змея укусила себя за хвост (символ уробороса)!",
      kk: "Фридрих Кекуле бензолдың сақиналы құрылымын түсінде өз құйрығын тістеген жыланды көргеннен кейін ашты!",
      en: "Friedrich Kekulé realized the cyclic structure after dreaming of an Ouroboros snake biting its own tail!"
    },
    glowColor: "#a855f7",
    atoms: [
      // 6 carbons in hexagon
      { id: 0, element: "C", x: 0, y: 1.4, z: 0, label: "C" },
      { id: 1, element: "C", x: 1.212, y: 0.7, z: 0, label: "C" },
      { id: 2, element: "C", x: 1.212, y: -0.7, z: 0, label: "C" },
      { id: 3, element: "C", x: 0, y: -1.4, z: 0, label: "C" },
      { id: 4, element: "C", x: -1.212, y: -0.7, z: 0, label: "C" },
      { id: 5, element: "C", x: -1.212, y: 0.7, z: 0, label: "C" },
      // 6 hydrogens
      { id: 6, element: "H", x: 0, y: 2.45, z: 0, label: "H" },
      { id: 7, element: "H", x: 2.12, y: 1.22, z: 0, label: "H" },
      { id: 8, element: "H", x: 2.12, y: -1.22, z: 0, label: "H" },
      { id: 9, element: "H", x: 0, y: -2.45, z: 0, label: "H" },
      { id: 10, element: "H", x: -2.12, y: -1.22, z: 0, label: "H" },
      { id: 11, element: "H", x: -2.12, y: 1.22, z: 0, label: "H" }
    ],
    bonds: [
      { from: 0, to: 1, order: "aromatic" },
      { from: 1, to: 2, order: "aromatic" },
      { from: 2, to: 3, order: "aromatic" },
      { from: 3, to: 4, order: "aromatic" },
      { from: 4, to: 5, order: "aromatic" },
      { from: 5, to: 0, order: "aromatic" },
      { from: 0, to: 6, order: 1 },
      { from: 1, to: 7, order: 1 },
      { from: 2, to: 8, order: 1 },
      { from: 3, to: 9, order: 1 },
      { from: 4, to: 10, order: 1 },
      { from: 5, to: 11, order: 1 }
    ]
  },

  // 5. Ethanol
  {
    id: "ethanol",
    name: { ru: "Этанол (Этиловый спирт)", kk: "Этанол (Этил спирті)", en: "Ethanol" },
    formula: "C₂H₅OH",
    formulaAscii: "C2H5OH",
    category: "organic",
    structureType: "tetrahedral",
    hybridization: "sp³",
    geometryName: { ru: "Зигзагообразная цепь с гидроксилом", kk: "Гидроксилі бар ирек тізбек", en: "Chained Tetrahedral with Hydroxyl" },
    bondAngle: "109.5° (C-C-O), 108.5° (C-O-H)",
    dipoleMoment: "1.69 D",
    description: {
      ru: "Одноатомный предельный спирт. Содержит гидроксильную группу -OH, способную образовывать межмолекулярные водородные связи, что обусловливает хорошую растворимость в воде и высокую температуру кипения (78.4 °C).",
      kk: "Біратомды қаныққан спирт. Су молекулаларымен сутектік байланыс түзе алатын -OH гидроксил тобы бар, сондықтан суда шексіз ериді.",
      en: "A monohydric alcohol containing a functional -OH group that forms robust intermolecular hydrogen bonds, producing full miscibility with water and a high boiling point."
    },
    funFact: {
      ru: "Этанол является одним из древнейших биохимических веществ, освоенных человечеством через процесс дрожжевого брожения!",
      kk: "Этанол — адамзат ашыту үдерісі арқылы алған ең көне биохимиялық заттардың бірі!",
      en: "Ethanol is one of the earliest synthesized biochemicals in human history via microbial fermentation!"
    },
    glowColor: "#f59e0b",
    atoms: [
      { id: 0, element: "C", x: -0.7, y: -0.2, z: 0, label: "C1" },
      { id: 1, element: "C", x: 0.6, y: 0.5, z: 0, label: "C2" },
      { id: 2, element: "O", x: 1.7, y: -0.35, z: 0, label: "O" },
      { id: 3, element: "H", x: 2.5, y: 0.1, z: 0, label: "H(O)" },
      { id: 4, element: "H", x: -0.7, y: -0.85, z: 0.9, label: "H" },
      { id: 5, element: "H", x: -0.7, y: -0.85, z: -0.9, label: "H" },
      { id: 6, element: "H", x: -1.55, y: 0.45, z: 0, label: "H" },
      { id: 7, element: "H", x: 0.6, y: 1.15, z: 0.9, label: "H" },
      { id: 8, element: "H", x: 0.6, y: 1.15, z: -0.9, label: "H" }
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 1, to: 2, order: 1 },
      { from: 2, to: 3, order: 1 },
      { from: 0, to: 4, order: 1 },
      { from: 0, to: 5, order: 1 },
      { from: 0, to: 6, order: 1 },
      { from: 1, to: 7, order: 1 },
      { from: 1, to: 8, order: 1 }
    ]
  },

  // 6. Ammonia
  {
    id: "ammonia",
    name: { ru: "Аммиак", kk: "Аммиак", en: "Ammonia" },
    formula: "NH₃",
    formulaAscii: "NH3",
    category: "inorganic",
    structureType: "trigonal-pyramidal",
    hybridization: "sp³",
    geometryName: { ru: "Тригональная пирамида (107.8°)", kk: "Тригональды пирамида (107.8°)", en: "Trigonal Pyramidal (107.8°)" },
    bondAngle: "107.8°",
    dipoleMoment: "1.47 D",
    description: {
      ru: "Молекула в форме тригональной пирамиды. Неподелённая пара азота отталкивает три связи N-H, уменьшая валентный угол с 109.5° до 107.8°. Обладает выраженными основными свойствами (донор протона).",
      kk: "Тригональды пирамида пішінді молекула. Азоттың бос электрон жұбы байланыстарды итеріп, бұрышты 107.8°-қа дейін тарылтады.",
      en: "Trigonal pyramidal geometry. The lone electron pair on nitrogen compresses the N-H bond angles to 107.8°, conferring strong Lewis basicity."
    },
    funFact: {
      ru: "Промышленный синтез аммиака (процесс Габера-Боша) обеспечивает удобрениями сельское хозяйство, которое кормит почти половину населения планеты!",
      kk: "Аммиакты өндірістік синтездеу (Габер-Бош әдісі) бүкіл әлем халқының жартысын азық-түлікпен қамтамасыз ететін тыңайтқыштардың негізі болып табылады!",
      en: "The Haber-Bosch ammonia process produces fertilizers responsible for sustaining nearly half of the world's population!"
    },
    glowColor: "#38bdf8",
    atoms: [
      { id: 0, element: "N", x: 0, y: 0.25, z: 0, label: "N", oxidationState: "-3" },
      { id: 1, element: "H", x: 0, y: -0.25, z: 0.94, label: "H", oxidationState: "+1" },
      { id: 2, element: "H", x: 0.81, y: -0.25, z: -0.47, label: "H", oxidationState: "+1" },
      { id: 3, element: "H", x: -0.81, y: -0.25, z: -0.47, label: "H", oxidationState: "+1" }
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 1 }
    ]
  },

  // 7. Sulfuric Acid
  {
    id: "sulfuric-acid",
    name: { ru: "Серная кислота", kk: "Күкірт қышқылы", en: "Sulfuric Acid" },
    formula: "H₂SO₄",
    formulaAscii: "H2SO4",
    category: "inorganic",
    structureType: "tetrahedral",
    hybridization: "sp³",
    geometryName: { ru: "Искаженный тетраэдр вокруг серы", kk: "Күкірт айналасындағы тетраэдр", en: "Distorted Tetrahedral Center" },
    bondAngle: "109.5°",
    dipoleMoment: "2.72 D",
    description: {
      ru: "«Хлеб химической промышленности». Центральный атом серы (+6) связан с двумя оксо-группами =O и двумя гидроксильными группами -OH, обеспечивая сильнейшие кислотные и водоотнимающие свойства.",
      kk: "«Химиялық өнеркәсіптің наны». Күкірт (+6) екі =O тобымен және екі -OH тобымен байланысып, ең күшті қышқылдық қасиет көрсетеді.",
      en: "Referred to as the bedrock of chemical industry. The sulfur center (+6) coordinates two oxo ligands and two hydroxyl groups, creating immense acidity."
    },
    funFact: {
      ru: "Объем производства серной кислоты в стране считается одним из главных макроэкономических индикаторов развития тяжелой промышленности!",
      kk: "Елдегі күкірт қышқылын өндіру көлемі ауыр өнеркәсіптің даму деңгейін көрсететін маңызды макроэкономикалық көрсеткіш болып саналады!",
      en: "National sulfuric acid production metrics historically serve as key indicators of a country's industrial capacity!"
    },
    glowColor: "#facc15",
    atoms: [
      { id: 0, element: "S", x: 0, y: 0, z: 0, label: "S", oxidationState: "+6" },
      { id: 1, element: "O", x: 0, y: 1.45, z: 0, label: "=O", oxidationState: "-2" },
      { id: 2, element: "O", x: 1.35, y: -0.5, z: 0, label: "=O", oxidationState: "-2" },
      { id: 3, element: "O", x: -0.7, y: -0.6, z: 1.0, label: "-O-", oxidationState: "-2" },
      { id: 4, element: "O", x: -0.7, y: -0.6, z: -1.0, label: "-O-", oxidationState: "-2" },
      { id: 5, element: "H", x: -1.6, y: -0.4, z: 1.2, label: "H", oxidationState: "+1" },
      { id: 6, element: "H", x: -1.6, y: -0.4, z: -1.2, label: "H", oxidationState: "+1" }
    ],
    bonds: [
      { from: 0, to: 1, order: 2 },
      { from: 0, to: 2, order: 2 },
      { from: 0, to: 3, order: 1 },
      { from: 0, to: 4, order: 1 },
      { from: 3, to: 5, order: 1 },
      { from: 4, to: 6, order: 1 }
    ]
  },

  // 8. Caffeine
  {
    id: "caffeine",
    name: { ru: "Кофеин", kk: "Кофеин", en: "Caffeine" },
    formula: "C₈H₁₀N₄O₂",
    formulaAscii: "C8H10N4O2",
    category: "organic",
    structureType: "cyclic",
    hybridization: "sp² / sp³",
    geometryName: { ru: "Конденсированная пуриновая система", kk: "Конденсирленген пуриндік жүйе", en: "Fused Purine Bicyclic System" },
    bondAngle: "120° / 108°",
    dipoleMoment: "3.64 D",
    description: {
      ru: "Природный алкалоид пуринового ряда. Состоит из конденсированных пиримидинового и имидазольного колец с метильными заместителями. Блокирует аденозиновые рецепторы нервной системы.",
      kk: "Пуриндік қатардағы табиғи алкалоид. Жүйке жүйесінің аденозиндік рецепторларын блоктайтын метилденген бициклді жүйеден тұрады.",
      en: "A natural purine alkaloid composed of fused pyrimidinedione and imidazole rings with three methyl branches, functioning as an adenosine receptor antagonist."
    },
    funFact: {
      ru: "Кофеин является самым популярным психоактивным веществом в мире: ежедневно более 80% взрослого населения Земли употребляет его в чае и кофе!",
      kk: "Кофеин — әлемдегі ең танымал психоактивті зат: жер бетіндегі ересек адамдардың 80%-дан астамы оны күн сайын шай мен кофеден қабылдайды!",
      en: "Caffeine is the most widely consumed central nervous system stimulant globally, consumed daily by over 80% of adults!"
    },
    glowColor: "#ec4899",
    atoms: [
      { id: 0, element: "N", x: -1.2, y: 0.9, z: 0, label: "N1" },
      { id: 1, element: "C", x: 0, y: 1.5, z: 0, label: "C2" },
      { id: 2, element: "O", x: 0.1, y: 2.7, z: 0, label: "O2" },
      { id: 3, element: "N", x: 1.1, y: 0.7, z: 0, label: "N3" },
      { id: 4, element: "C", x: 1.0, y: -0.7, z: 0, label: "C4" },
      { id: 5, element: "C", x: -0.2, y: -1.3, z: 0, label: "C5" },
      { id: 6, element: "C", x: -1.4, y: -0.5, z: 0, label: "C6" },
      { id: 7, element: "O", x: -2.5, y: -0.9, z: 0, label: "O6" },
      { id: 8, element: "N", x: 2.1, y: -1.5, z: 0, label: "N7" },
      { id: 9, element: "C", x: 1.6, y: -2.6, z: 0, label: "C8" },
      { id: 10, element: "N", x: 0.3, y: -2.5, z: 0, label: "N9" },
      { id: 11, element: "C", x: -2.3, y: 1.7, z: 0, label: "CH3" },
      { id: 12, element: "C", x: 2.4, y: 1.4, z: 0, label: "CH3" },
      { id: 13, element: "C", x: 3.5, y: -1.1, z: 0, label: "CH3" },
      { id: 14, element: "H", x: 2.2, y: -3.5, z: 0, label: "H8" }
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 1, to: 2, order: 2 },
      { from: 1, to: 3, order: 1 },
      { from: 3, to: 4, order: 1 },
      { from: 4, to: 5, order: 2 },
      { from: 5, to: 6, order: 1 },
      { from: 6, to: 7, order: 2 },
      { from: 6, to: 0, order: 1 },
      { from: 4, to: 8, order: 1 },
      { from: 8, to: 9, order: 1 },
      { from: 9, to: 10, order: 2 },
      { from: 10, to: 5, order: 1 },
      { from: 0, to: 11, order: 1 },
      { from: 3, to: 12, order: 1 },
      { from: 8, to: 13, order: 1 },
      { from: 9, to: 14, order: 1 }
    ]
  },

  // 9. Diamond Crystal Lattice Unit
  {
    id: "diamond",
    name: { ru: "Алмаз (Фрагмент кристаллической решётки)", kk: "Алмаз (Кристалдық тор фрагменті)", en: "Diamond Lattice Unit" },
    formula: "C₅ (sp³)",
    formulaAscii: "C(diamond)",
    category: "crystal",
    structureType: "tetrahedral",
    hybridization: "sp³",
    geometryName: { ru: "Алмазная каркасная ковалентная решетка", kk: "Алмаздың ковалентті каркастық торы", en: "Tetrahedral Diamond Covalent Lattice" },
    bondAngle: "109.47°",
    dipoleMoment: "0.00 D",
    description: {
      ru: "Аллотропная модификация углерода высшей твердости (10 по шкале Мооса). Каждый атом углерода ковалентно связан с четырьмя соседями прочными sp³-связями длиной 1.54 Å, формируя бесконечный трехмерный каркас.",
      kk: "Көміртек атомдарының ең жоғары қаттылыққа ие аллотропиялық түрі (Моос шкаласы бойынша 10). Әрбір көміртек 4 көршісімен берік sp³ ковалентті байланыс түзеді.",
      en: "Allotrope of carbon exhibiting maximum Mohs hardness (10). Each carbon atom bonds to four neighboring carbons via rigid sp³ bonds (1.54 Å length), weaving an unyielding 3D matrix."
    },
    funFact: {
      ru: "Алмаз обладает высочайшей теплопроводностью среди всех твердых тел (в 5 раз выше меди), оставаясь при этом совершенным диэлектриком!",
      kk: "Алмаз барлық қатты денелер арасында ең жоғары жылу өткізгіштікке ие (мысқа қарағанда 5 есе жоғары), сонымен қатар тамаша диэлектрик болып табылады!",
      en: "Diamond conducts heat 5 times better than copper while maintaining superb electrical insulation properties!"
    },
    glowColor: "#38bdf8",
    atoms: [
      { id: 0, element: "C", x: 0, y: 0, z: 0, label: "C (Center)" },
      { id: 1, element: "C", x: 0.9, y: 0.9, z: 0.9, label: "C1" },
      { id: 2, element: "C", x: -0.9, y: -0.9, z: 0.9, label: "C2" },
      { id: 3, element: "C", x: -0.9, y: 0.9, z: -0.9, label: "C3" },
      { id: 4, element: "C", x: 0.9, y: -0.9, z: -0.9, label: "C4" }
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 1 },
      { from: 0, to: 4, order: 1 }
    ]
  },

  // 10. Table Salt (NaCl Unit)
  {
    id: "table-salt",
    name: { ru: "Поваренная соль (Ионная решетка NaCl)", kk: "Ас тұзы (NaCl иондық торы)", en: "Table Salt (NaCl Lattice)" },
    formula: "NaCl",
    formulaAscii: "NaCl",
    category: "crystal",
    structureType: "linear",
    geometryName: { ru: "Кубическая гранецентрированная ионная решетка", kk: "Кубты иондық тор", en: "Face-Centered Cubic Ionic Lattice" },
    bondAngle: "90° / 180°",
    dipoleMoment: "9.0 D (Ионная связь)",
    description: {
      ru: "Типичное ионное кристаллическое вещество. Катион натрия Na⁺ окружен шестью анионами хлора Cl⁻, и наоборот (координационное число 6:6), удерживаемыми электростатическими силами Кулона.",
      kk: "Классикалық иондық кристалдық зат. Әрбір Na⁺ катионы 6 Cl⁻ анионымен қоршалған (координациялық саны 6:6), олар Кулонның электрстатикалық күштерімен ұсталып тұрады.",
      en: "Prototypical ionic solid. Each Na⁺ cation is octahedrally coordinated by six Cl⁻ anions and vice versa (6:6 coordination), locked by strong Coulombic electrostatic attractions."
    },
    funFact: {
      ru: "Элементарные натрий (взрывается в воде) и хлор (удушающий ядовитый газ) смертельно опасны, но при соединении образуют жизненно важную для крови поваренную соль!",
      kk: "Таза натрий (суда жарылады) және хлор (улы газ) қауіпті, бірақ қосылғанда қан үшін өмірлік маңызы бар ас тұзын түзеді!",
      en: "Violently explosive sodium metal and lethal chlorine gas react together to form harmless, life-essential table salt!"
    },
    glowColor: "#22c55e",
    atoms: [
      { id: 0, element: "Na", x: 0, y: 0, z: 0, label: "Na⁺", oxidationState: "+1" },
      { id: 1, element: "Cl", x: 1.5, y: 0, z: 0, label: "Cl⁻", oxidationState: "-1" },
      { id: 2, element: "Cl", x: -1.5, y: 0, z: 0, label: "Cl⁻", oxidationState: "-1" },
      { id: 3, element: "Cl", x: 0, y: 1.5, z: 0, label: "Cl⁻", oxidationState: "-1" },
      { id: 4, element: "Cl", x: 0, y: -1.5, z: 0, label: "Cl⁻", oxidationState: "-1" }
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 1 },
      { from: 0, to: 4, order: 1 }
    ]
  }
];

export function getMolecule3DData(id: string): Molecule3D | null {
  const found = PRESET_3D_MOLECULES.find(m => m.id === id);
  if (found) return found;
  return null;
}
