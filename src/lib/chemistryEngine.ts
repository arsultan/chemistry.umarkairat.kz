import { MoleculeData, ReactionResult, MoleculeCategory, HazardLevel } from "@/types/chemistry";
import { MOLECULES_DATA, MOLECULES_BY_ID } from "@/data/molecules";
import { ELEMENTS_BY_SYMBOL } from "@/data/elements";

const SUB_MAP: Record<string, string> = {
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄",
  "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉"
};

export function toSubscript(num: number): string {
  if (num <= 1) return "";
  return String(num).split("").map(ch => SUB_MAP[ch] || ch).join("");
}

// Order atoms according to Hill system or standard chemical formula convention
export function formatFormula(atoms: Record<string, number>): string {
  const keys = Object.keys(atoms).filter(k => (atoms[k] || 0) > 0);
  if (keys.length === 0) return "";

  const hasCarbon = keys.includes("C");
  const sorted = [...keys].sort((a, b) => {
    if (hasCarbon) {
      if (a === "C") return -1;
      if (b === "C") return 1;
      if (a === "H") return -1;
      if (b === "H") return 1;
    }
    const elA = ELEMENTS_BY_SYMBOL.get(a);
    const elB = ELEMENTS_BY_SYMBOL.get(b);
    if (elA && elB) {
      if (elA.category === 'noble-gas') return 1;
      if (elB.category === 'noble-gas') return -1;
      const isMetalA = ['alkali-metal', 'alkaline-earth', 'transition-metal', 'post-transition', 'lanthanide', 'actinide'].includes(elA.category);
      const isMetalB = ['alkali-metal', 'alkaline-earth', 'transition-metal', 'post-transition', 'lanthanide', 'actinide'].includes(elB.category);
      if (isMetalA && !isMetalB) return -1;
      if (!isMetalA && isMetalB) return 1;
    }
    return a.localeCompare(b);
  });

  return sorted.map(sym => `${sym}${toSubscript(atoms[sym])}`).join("");
}

export function formatFormulaAscii(atoms: Record<string, number>): string {
  const keys = Object.keys(atoms).filter(k => (atoms[k] || 0) > 0);
  if (keys.length === 0) return "";

  const hasCarbon = keys.includes("C");
  const sorted = [...keys].sort((a, b) => {
    if (hasCarbon) {
      if (a === "C") return -1;
      if (b === "C") return 1;
      if (a === "H") return -1;
      if (b === "H") return 1;
    }
    const elA = ELEMENTS_BY_SYMBOL.get(a);
    const elB = ELEMENTS_BY_SYMBOL.get(b);
    if (elA && elB) {
      if (elA.category === 'noble-gas') return 1;
      if (elB.category === 'noble-gas') return -1;
      const isMetalA = ['alkali-metal', 'alkaline-earth', 'transition-metal', 'post-transition', 'lanthanide', 'actinide'].includes(elA.category);
      const isMetalB = ['alkali-metal', 'alkaline-earth', 'transition-metal', 'post-transition', 'lanthanide', 'actinide'].includes(elB.category);
      if (isMetalA && !isMetalB) return -1;
      if (!isMetalA && isMetalB) return 1;
    }
    return a.localeCompare(b);
  });

  return sorted.map(sym => `${sym}${atoms[sym] > 1 ? atoms[sym] : ""}`).join("");
}

export function matchMolecule(atoms: Record<string, number>): MoleculeData | undefined {
  const cleanAtoms: Record<string, number> = {};
  for (const [k, v] of Object.entries(atoms)) {
    if (v > 0) cleanAtoms[k] = v;
  }
  const keys = Object.keys(cleanAtoms);
  if (keys.length === 0) return undefined;

  for (const mol of MOLECULES_DATA) {
    const molKeys = Object.keys(mol.atoms);
    if (molKeys.length !== keys.length) continue;
    let match = true;
    for (const k of molKeys) {
      if (mol.atoms[k] !== cleanAtoms[k]) {
        match = false;
        break;
      }
    }
    if (match) return mol;
  }
  return undefined;
}

// Russian Genitive case dictionary for cation names
const RUS_GENITIVE: Record<string, string> = {
  H: "водорода", He: "гелия", Li: "лития", Be: "бериллия", B: "бора", C: "углерода",
  N: "азота", O: "кислорода", F: "фтора", Ne: "неона", Na: "натрия", Mg: "магния",
  Al: "алюминия", Si: "кремния", P: "фосфора", S: "серы", Cl: "хлора", Ar: "аргона",
  K: "калия", Ca: "кальция", Sc: "скандия", Ti: "титана", V: "ванадия", Cr: "хрома",
  Mn: "марганца", Fe: "железа", Co: "кобальта", Ni: "никеля", Cu: "меди", Zn: "цинка",
  Ga: "галлия", Ge: "германия", As: "мышьяка", Se: "селена", Br: "брома", Kr: "криптона",
  Rb: "рубидия", Sr: "стронция", Y: "иттрия", Zr: "циркония", Nb: "ниобия", Mo: "молибдена",
  Tc: "технеция", Ru: "рутения", Rh: "родия", Pd: "палладия", Ag: "серебра", Cd: "кадмия",
  In: "индия", Sn: "олова", Sb: "сурьмы", Te: "теллура", I: "иода", Xe: "ксенона",
  Cs: "цезия", Ba: "бария", La: "лантана", Ce: "церия", Pr: "празеодима", Nd: "неодима",
  Sm: "самария", Eu: "европия", Gd: "гадолиния", Tb: "тербия", Dy: "диспрозия", Ho: "гольмия",
  Er: "эрбия", Tm: "тулия", Yb: "иттербия", Lu: "лютеция", Hf: "гафния", Ta: "тантала",
  W: "вольфрама", Re: "рения", Os: "осмия", Ir: "иридия", Pt: "платины", Au: "золота",
  Hg: "ртути", Tl: "таллия", Pb: "свинца", Bi: "висмута", Th: "тория", U: "урана", Pu: "плутония"
};

// Binary anion names in RU, KK, EN
const BINARY_ANIONS: Record<string, { ru: string; kk: string; en: string }> = {
  O: { ru: "Оксид", kk: "оксиді", en: "oxide" },
  S: { ru: "Сульфид", kk: "сульфиді", en: "sulfide" },
  F: { ru: "Фторид", kk: "фториді", en: "fluoride" },
  Cl: { ru: "Хлорид", kk: "хлориді", en: "chloride" },
  Br: { ru: "Бромид", kk: "бромиді", en: "bromide" },
  I: { ru: "Иодид", kk: "йодиді", en: "iodide" },
  N: { ru: "Нитрид", kk: "нитриді", en: "nitride" },
  P: { ru: "Фосфид", kk: "фосфиді", en: "phosphide" },
  C: { ru: "Карбид", kk: "карбиді", en: "carbide" },
  Si: { ru: "Силицид", kk: "силициді", en: "silicide" },
  H: { ru: "Гидрид", kk: "гидриді", en: "hydride" },
  Se: { ru: "Селенид", kk: "селениді", en: "selenide" },
  Te: { ru: "Теллурид", kk: "теллуриді", en: "telluride" }
};

// Known oxidation states / valencies
const VALENCE_MAP: Record<string, number[]> = {
  H: [1, -1], Li: [1], Na: [1], K: [1], Rb: [1], Cs: [1], Fr: [1],
  Be: [2], Mg: [2], Ca: [2], Sr: [2], Ba: [2], Ra: [2],
  B: [3], Al: [3], Ga: [3], In: [3], Tl: [1, 3],
  C: [2, 4, -4], Si: [4, -4], Ge: [2, 4], Sn: [2, 4], Pb: [2, 4],
  N: [1, 2, 3, 4, 5, -3], P: [3, 5, -3], As: [3, 5, -3], Sb: [3, 5], Bi: [3, 5],
  O: [2, -2], S: [2, 4, 6, -2], Se: [4, 6, -2], Te: [4, 6, -2],
  F: [1, -1], Cl: [1, 3, 5, 7, -1], Br: [1, 3, 5, -1], I: [1, 3, 5, 7, -1],
  Sc: [3], Ti: [2, 3, 4], V: [2, 3, 4, 5], Cr: [2, 3, 6], Mn: [2, 3, 4, 6, 7],
  Fe: [2, 3], Co: [2, 3], Ni: [2, 3], Cu: [1, 2], Zn: [2],
  Y: [3], Zr: [4], Nb: [3, 5], Mo: [4, 6], Ru: [3, 4], Rh: [3], Pd: [2, 4], Ag: [1], Cd: [2],
  W: [4, 6], Pt: [2, 4], Au: [1, 3], Hg: [1, 2], U: [3, 4, 6]
};

// Approximate Electronegativity (Pauling scale)
const EN_SCALE: Record<string, number> = {
  F: 3.98, O: 3.44, Cl: 3.16, N: 3.04, Br: 2.80, I: 2.66, S: 2.58, Se: 2.55, C: 2.55,
  P: 2.19, H: 2.20, B: 2.04, Si: 1.90, As: 2.18, Te: 2.10, Sb: 2.05,
  Ti: 1.54, Al: 1.61, Fe: 1.83, Cu: 1.90, Zn: 1.65, Ag: 1.93, Au: 2.54, Pb: 2.33, Sn: 1.96,
  Cr: 1.66, Mn: 1.55, W: 2.36, U: 1.38, Mg: 1.31, Ca: 1.00, Sr: 0.95, Ba: 0.89,
  Li: 0.98, Na: 0.93, K: 0.82, Rb: 0.82, Cs: 0.79
};

const ROMAN_NUMERALS: Record<number, string> = {
  1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII"
};

// Alkanes root names
const ALKANE_NAMES: Record<number, { en: string; ru: string; kk: string }> = {
  1: { en: "Methane", ru: "Метан", kk: "Метан" },
  2: { en: "Ethane", ru: "Этан", kk: "Этан" },
  3: { en: "Propane", ru: "Пропан", kk: "Пропан" },
  4: { en: "Butane", ru: "Бутан", kk: "Бутан" },
  5: { en: "Pentane", ru: "Пентан", kk: "Пентан" },
  6: { en: "Hexane", ru: "Гексан", kk: "Гексан" },
  7: { en: "Heptane", ru: "Гептан", kk: "Гептан" },
  8: { en: "Octane", ru: "Октан", kk: "Октан" },
  9: { en: "Nonane", ru: "Нонан", kk: "Нонан" },
  10: { en: "Decane", ru: "Декан", kk: "Декан" },
  12: { en: "Dodecane", ru: "Додекан", kk: "Додекан" }
};

const ALKENE_NAMES: Record<number, { en: string; ru: string; kk: string }> = {
  2: { en: "Ethylene", ru: "Этилен (этен)", kk: "Этилен" },
  3: { en: "Propylene", ru: "Пропилен (пропен)", kk: "Пропилен" },
  4: { en: "Butene", ru: "Бутен", kk: "Бутен" },
  5: { en: "Pentene", ru: "Пентен", kk: "Пентен" },
  6: { en: "Hexene", ru: "Гексен", kk: "Гексен" }
};

const ALKYNE_NAMES: Record<number, { en: string; ru: string; kk: string }> = {
  2: { en: "Acetylene", ru: "Ацетилен (этин)", kk: "Ацетилен" },
  3: { en: "Propyne", ru: "Пропин", kk: "Пропин" },
  4: { en: "Butyne", ru: "Бутин", kk: "Бутин" }
};

const ALCOHOL_NAMES: Record<number, { en: string; ru: string; kk: string }> = {
  1: { en: "Methanol", ru: "Метанол", kk: "Метанол" },
  2: { en: "Ethanol", ru: "Этанол", kk: "Этанол" },
  3: { en: "Propanol", ru: "Пропанол", kk: "Пропанол" },
  4: { en: "Butanol", ru: "Бутанол", kk: "Бутанол" }
};

const CARBOXYLIC_ACID_NAMES: Record<number, { en: string; ru: string; kk: string }> = {
  1: { en: "Formic acid", ru: "Муравьиная кислота", kk: "Құмырсқа қышқылы" },
  2: { en: "Acetic acid", ru: "Уксусная кислота", kk: "Сірке қышқылы" },
  3: { en: "Propionic acid", ru: "Пропионовая кислота", kk: "Пропион қышқылы" },
  4: { en: "Butyric acid", ru: "Масляная кислота", kk: "Май қышқылы" }
};

// Generate procedurally balanced molecules for ANY valid combination
export function synthesizeCompound(atoms: Record<string, number>): MoleculeData | undefined {
  const cleanAtoms: Record<string, number> = {};
  let totalAtoms = 0;
  for (const [k, v] of Object.entries(atoms)) {
    if (v > 0) {
      cleanAtoms[k] = v;
      totalAtoms += v;
    }
  }
  const symbols = Object.keys(cleanAtoms);
  if (symbols.length === 0) return undefined;

  // 1. Single element diatomics / allotropes
  if (symbols.length === 1) {
    const sym = symbols[0];
    const count = cleanAtoms[sym];
    const el = ELEMENTS_BY_SYMBOL.get(sym);
    if (!el) return undefined;

    if (count === 2 && ["H", "N", "O", "F", "Cl", "Br", "I"].includes(sym)) {
      const id = `synth_diatomic_${sym.toLowerCase()}2`;
      const mol: MoleculeData = {
        id,
        formula: `${sym}₂`,
        formulaAscii: `${sym}2`,
        name: {
          en: `Diatomic ${el.name.en}`,
          ru: `Молекулярный ${el.name.ru.toLowerCase()}`,
          kk: `Молекулалық ${el.name.kk.toLowerCase()}`
        },
        scientificName: { en: `${el.name.en} gas`, ru: `${el.name.ru}`, kk: `${el.name.kk}` },
        category: "gas",
        hazard: ["F", "Cl"].includes(sym) ? "danger" : ["Br", "I"].includes(sym) ? "caution" : "safe",
        state: ["Br"].includes(sym) ? "liquid" : ["I"].includes(sym) ? "solid" : "gas",
        description: {
          en: `Stable homonuclear diatomic molecule of ${el.name.en} held together by covalent bonding.`,
          ru: `Стабильная гомоядерная двухатомная молекула ${RUS_GENITIVE[sym] || el.name.ru}, образованная ковалентной связью.`,
          kk: `Ковалентті байланыспен біріккен ${el.name.kk} тұрақты екі атомды молекуласы.`
        },
        funFact: {
          en: `In standard temperature and pressure, ${el.name.en} forms a stable diatomic molecule.`,
          ru: `При стандартных условиях ${el.name.ru} существует именно в форме устойчивой двухатомной молекулы.`,
          kk: `Стандартты жағдайда ${el.name.kk} осы екі атомды тұрақты түрде болады.`
        },
        realWorldUse: el.everydayUse,
        atoms: cleanAtoms,
        structureType: "linear",
        glowColor: el.color
      };
      registerMolecule(mol);
      return mol;
    }

    if (sym === "O" && count === 3) {
      const mol: MoleculeData = {
        id: "synth_ozone_o3",
        formula: "O₃",
        formulaAscii: "O3",
        name: { en: "Ozone", ru: "Озон", kk: "Озон" },
        scientificName: { en: "Trioxygen", ru: "Трехатомный кислород", kk: "Үшатомды оттек" },
        category: "gas",
        hazard: "caution",
        state: "gas",
        description: {
          en: "Allotrope of oxygen consisting of three oxygen atoms. Shields the Earth from harmful solar UV radiation.",
          ru: "Аллотропная модификация кислорода из трёх атомов. Защищает биосферу Земли от ультрафиолета.",
          kk: "Үш атомнан тұратын оттектің аллотропиялық түрі. Жерді ультракүлгін сәулелерден қорғайды."
        },
        funFact: {
          en: "Ozone has a sharp, pungent scent often noticed after lightning storms.",
          ru: "Озон обладает характерным свежим резким запахом, ощущаемым после грозы.",
          kk: "Найзағайдан кейін сезілетін ерекше балғын иіс озонның әсерінен пайда болады."
        },
        realWorldUse: {
          en: "UV atmospheric shield, water purification and sterilization.",
          ru: "Озоновый экран атмосферы, дезинфекция и очистка воды.",
          kk: "Атмосфералық озон қабаты, суды залалсыздандыру."
        },
        atoms: { O: 3 },
        structureType: "bent",
        glowColor: "#38bdf8"
      };
      registerMolecule(mol);
      return mol;
    }
  }

  // 2. Organic Hydrocarbons & Oxygen derivatives
  if (symbols.includes("C") && symbols.includes("H")) {
    const c = cleanAtoms["C"] || 0;
    const h = cleanAtoms["H"] || 0;
    const o = cleanAtoms["O"] || 0;

    // Pure Hydrocarbons
    if (symbols.length === 2 && c > 0 && h > 0) {
      if (h === 2 * c + 2) {
        // Alkane
        const nameObj = ALKANE_NAMES[c] || {
          en: `Alkane C${c}H${h}`,
          ru: `Алкан C${c}H${h}`,
          kk: `Алкан C${c}H${h}`
        };
        const mol: MoleculeData = {
          id: `synth_alkane_c${c}h${h}`,
          formula: `C${toSubscript(c)}H${toSubscript(h)}`,
          formulaAscii: `C${c}H${h}`,
          name: nameObj,
          scientificName: {
            en: `Saturated hydrocarbon (C${c})`,
            ru: `Предельный углеводород (C${c})`,
            kk: `Қаныққан көмірсутек (C${c})`
          },
          category: c <= 4 ? "gas" : "fuel",
          hazard: c <= 4 ? "danger" : "caution",
          state: c <= 4 ? "gas" : c <= 16 ? "liquid" : "solid",
          description: {
            en: `Saturated acyclic alkane hydrocarbon containing ${c} carbon and ${h} hydrogen atoms with single C-C bonds.`,
            ru: `Предельный углеводород алканового ряда из ${c} атомов углерода и ${h} водорода с одинарными C-C связями.`,
            kk: `Құрамында ${c} көміртек және ${h} сутек атомы бар алкандар тобына жататын қаныққан көмірсутек.`
          },
          funFact: {
            en: `Alkanes follow the universal formula CnH2n+2 and form the backbone of petroleum and natural fuels.`,
            ru: `Алканы подчиняются формуле CnH2n+2 и составляют основу природного газа и нефти.`,
            kk: `Алкандар CnH2n+2 жалпы формуласына бағынады және мұнай мен табиғи газдың негізін құрайды.`
          },
          realWorldUse: {
            en: "Heating, transportation fuels, polymer manufacturing",
            ru: "Топливо, отопление, сырье для нефтехимии и полимеров",
            kk: "Отын, жылыту, мұнай-химия өнеркәсібінің шикізаты"
          },
          atoms: cleanAtoms,
          structureType: "tetrahedral",
          glowColor: "#f59e0b"
        };
        registerMolecule(mol);
        return mol;
      }

      if (h === 2 * c && c >= 2) {
        // Alkene
        const nameObj = ALKENE_NAMES[c] || {
          en: `Alkene C${c}H${h}`,
          ru: `Алкен C${c}H${h}`,
          kk: `Алкен C${c}H${h}`
        };
        const mol: MoleculeData = {
          id: `synth_alkene_c${c}h${h}`,
          formula: `C${toSubscript(c)}H${toSubscript(h)}`,
          formulaAscii: `C${c}H${h}`,
          name: nameObj,
          scientificName: {
            en: `Unsaturated alkene (C${c})`,
            ru: `Непредельный алкен (C${c})`,
            kk: `Қанықпаған алкен (C${c})`
          },
          category: "organic",
          hazard: "caution",
          state: c <= 4 ? "gas" : "liquid",
          description: {
            en: `Unsaturated hydrocarbon containing a reactive carbon-carbon double bond (C=C).`,
            ru: `Непредельный углеводород с химически активной двойной связью C=C.`,
            kk: `Құрамында белсенді қос байланыс C=C бар қанықпаған көмірсутек.`
          },
          funFact: {
            en: `Alkenes readily undergo addition reactions and polymerization to make modern plastics.`,
            ru: `Алкены легко вступают в реакции присоединения и образуют ценнейшие полимеры.`,
            kk: `Алкендер полимерлену реакциясына оңай түсіп, пластиктер жасауға қолданылады.`
          },
          realWorldUse: {
            en: "Polymer production (polyethylene/polypropylene), organic synthesis",
            ru: "Производство полимеров (полиэтилен, полипропилен), химический синтез",
            kk: "Полимерлер өндірісі, химиялық синтез"
          },
          atoms: cleanAtoms,
          structureType: "planar",
          glowColor: "#10b981"
        };
        registerMolecule(mol);
        return mol;
      }

      if (h === 2 * c - 2 && c >= 2) {
        // Alkyne
        const nameObj = ALKYNE_NAMES[c] || {
          en: `Alkyne C${c}H${h}`,
          ru: `Алкин C${c}H${h}`,
          kk: `Алкин C${c}H${h}`
        };
        const mol: MoleculeData = {
          id: `synth_alkyne_c${c}h${h}`,
          formula: `C${toSubscript(c)}H${toSubscript(h)}`,
          formulaAscii: `C${c}H${h}`,
          name: nameObj,
          scientificName: {
            en: `Alkyne with triple bond (C${c})`,
            ru: `Алкин с тройной связью (C${c})`,
            kk: `Үштік байланысы бар алкин (C${c})`
          },
          category: "organic",
          hazard: "danger",
          state: c <= 4 ? "gas" : "liquid",
          description: {
            en: `Unsaturated hydrocarbon containing an energy-dense carbon-carbon triple bond (C≡C).`,
            ru: `Высокоэнергетический непредельный углеводород с тройной связью C≡C.`,
            kk: `Құрамында жоғары энергиялы үштік байланыс C≡C бар қанықпаған көмірсутек.`
          },
          funFact: {
            en: `The carbon-carbon triple bond releases intense heat during combustion, reaching over 3000°C.`,
            ru: `Тройная связь выделяет колоссальную энергию при горении, создавая пламя свыше 3000°C.`,
            kk: `Үштік байланыс жанған кезде 3000°C-тан асатын аса ыстық жалын түзеді.`
          },
          realWorldUse: {
            en: "High-temperature oxy-acetylene welding, synthetic organic precursors",
            ru: "Высокотемпературная сварка металлов, промышленный синтез",
            kk: "Металдарды жоғары температурада пісіру, өндірістік синтез"
          },
          atoms: cleanAtoms,
          structureType: "linear",
          glowColor: "#ef4444"
        };
        registerMolecule(mol);
        return mol;
      }
    }

    // Alcohols (CnH2n+2O)
    if (symbols.length === 3 && o === 1 && h === 2 * c + 2) {
      const nameObj = ALCOHOL_NAMES[c] || {
        en: `Alcohol C${c}H${h}O`,
        ru: `Спирт C${c}H${h}O`,
        kk: `Спирт C${c}H${h}O`
      };
      const mol: MoleculeData = {
        id: `synth_alcohol_c${c}h${h}o`,
        formula: `C${toSubscript(c)}H${toSubscript(2 * c + 1)}OH`,
        formulaAscii: `C${c}H${2 * c + 1}OH`,
        name: nameObj,
        scientificName: {
          en: `Saturated alcohol (${c} carbons)`,
          ru: `Одноатомный предельный спирт (${c}C)`,
          kk: `Біратомды қаныққан спирт (${c}C)`
        },
        category: "organic",
        hazard: "caution",
        state: "liquid",
        description: {
          en: `Organic alcohol with an active hydroxyl (-OH) functional group bonded to an alkyl chain.`,
          ru: `Органический спирт с активной гидроксильной группой (-OH), связанной с углеводородным радикалом.`,
          kk: `Көмірсутек радикалына байланысқан белсенді гидроксил тобы (-OH) бар органикалық спирт.`
        },
        funFact: {
          en: `Hydroxyl groups form hydrogen bonds with water molecules, making lower alcohols fully soluble.`,
          ru: `Гидроксильная группа образует прочные водородные связи с водой, обеспечивая растворимость.`,
          kk: `Гидроксил тобы сумен сутектік байланыс түзіп, суда жақсы еруін қамтамасыз етеді.`
        },
        realWorldUse: {
          en: "Antiseptic disinfectants, chemical solvent, bio-fuels",
          ru: "Антисептики, растворители в химической промышленности, биотопливо",
          kk: "Антисептиктер, химиялық еріткіштер, биootын"
        },
        atoms: cleanAtoms,
        structureType: "tetrahedral",
        glowColor: "#06b6d4"
      };
      registerMolecule(mol);
      return mol;
    }

    // Carboxylic acids (CnH2nO2)
    if (symbols.length === 3 && o === 2 && h === 2 * c) {
      const nameObj = CARBOXYLIC_ACID_NAMES[c] || {
        en: `Carboxylic acid C${c}H${h}O2`,
        ru: `Карбоновая кислота C${c}H${h}O2`,
        kk: `Карбон қышқылы C${c}H${h}O2`
      };
      const mol: MoleculeData = {
        id: `synth_acid_c${c}h${h}o2`,
        formula: `C${toSubscript(c)}H${toSubscript(h)}O₂`,
        formulaAscii: `C${c}H${h}O2`,
        name: nameObj,
        scientificName: {
          en: `Carboxylic acid (${c}C)`,
          ru: `Предельная карбоновая кислота (${c}C)`,
          kk: `Карбон қышқылы (${c}C)`
        },
        category: "acid-base",
        hazard: "caution",
        state: "liquid",
        description: {
          en: `Organic acid characterized by a carboxyl group (-COOH), producing acidic protons in aqueous solution.`,
          ru: `Органическая кислота с функциональной карбоксильной группой (-COOH).`,
          kk: `Құрамында карбоксил тобы (-COOH) бар органикалық қышқыл.`
        },
        funFact: {
          en: `Carboxylic acids are ubiquitous in metabolism, fruits (citric/malic), and fermentation.`,
          ru: `Карбоновые кислоты широко распространены в природе, фруктах и процессах метаболизма.`,
          kk: `Карбон қышқылдары табиғатта, жемістерде және ағзаның зат алмасуында кең таралған.`
        },
        realWorldUse: {
          en: "Food preservation, vinegar production, pharmaceutical synthesis",
          ru: "Консервация продуктов, производство уксуса, фармацевтика",
          kk: "Тағам консервациясы, сірке өндірісі, фармацевтика"
        },
        atoms: cleanAtoms,
        structureType: "planar",
        glowColor: "#ec4899"
      };
      registerMolecule(mol);
      return mol;
    }
  }

  // 3. Hydroxides: Metal + (OH)n
  if (symbols.length === 3 && symbols.includes("O") && symbols.includes("H")) {
    const oCount = cleanAtoms["O"];
    const hCount = cleanAtoms["H"];
    const metalSym = symbols.find(s => s !== "O" && s !== "H");
    
    if (metalSym && oCount === hCount) {
      const metalEl = ELEMENTS_BY_SYMBOL.get(metalSym);
      const valencies = VALENCE_MAP[metalSym] || [1, 2, 3];
      const mCount = cleanAtoms[metalSym];

      const ratio = oCount / mCount;
      if (Number.isInteger(ratio) && valencies.includes(ratio)) {
        const val = ratio;
        const valSuffix = valencies.length > 1 && val > 1 ? `(${ROMAN_NUMERALS[val] || val})` : "";
        const formattedFormula = mCount > 1 
          ? `${metalSym}${toSubscript(mCount)}(OH)${toSubscript(oCount)}`
          : val === 1 ? `${metalSym}OH` : `${metalSym}(OH)${toSubscript(val)}`;
        const formattedAscii = mCount > 1
          ? `${metalSym}${mCount}(OH)${oCount}`
          : val === 1 ? `${metalSym}OH` : `${metalSym}(OH)${val}`;

        const mol: MoleculeData = {
          id: `synth_hydroxide_${metalSym.toLowerCase()}_${val}`,
          formula: formattedFormula,
          formulaAscii: formattedAscii,
          name: {
            en: `${metalEl?.name.en || metalSym} hydroxide${valSuffix ? ` ${valSuffix}` : ""}`,
            ru: `Гидроксид ${RUS_GENITIVE[metalSym] || metalEl?.name.ru || metalSym}${valSuffix ? ` ${valSuffix}` : ""}`,
            kk: `${metalEl?.name.kk || metalSym} гидроксиді${valSuffix ? ` ${valSuffix}` : ""}`
          },
          scientificName: {
            en: `Inorganic base of ${metalSym}`,
            ru: `Основание / щелочь ${RUS_GENITIVE[metalSym] || metalSym}`,
            kk: `${metalEl?.name.kk || metalSym} негізі / сілтісі`
          },
          category: "acid-base",
          hazard: val === 1 && ["Na", "K", "Li", "Cs"].includes(metalSym) ? "danger" : "caution",
          state: "solid",
          description: {
            en: `Basic hydroxide containing metal cations and coordinated hydroxide (OH⁻) ions.`,
            ru: `Неорганическое основание, состоящее из катионов металла и гидроксид-анионов (OH⁻).`,
            kk: `Металл катиондары мен гидроксид (OH⁻) аниондарынан тұратын бейорганикалық негіз.`
          },
          funFact: {
            en: `Soluble metal hydroxides form alkaline solutions with a high pH, neutralizing acids to form salts and water.`,
            ru: `Растворимые гидроксиды металлов образуют щёлочи с высоким pH и нейтрализуют кислоты.`,
            kk: `Еритін металл гидроксидтері жоғары pH сілтілі орта түзіп, қышқылдарды бейтараптандырады.`
          },
          realWorldUse: {
            en: "Acid neutralization, chemical synthesis, water treatment, battery electrolytes",
            ru: "Нейтрализация кислот, химический синтез, очистка воды, электролиты",
            kk: "Қышқылдарды бейтараптандыру, химиялық синтез, су тазарту, электролиттер"
          },
          atoms: cleanAtoms,
          structureType: "lattice",
          glowColor: metalEl?.color || "#6366f1"
        };
        registerMolecule(mol);
        return mol;
      }
    }
  }

  // 4. Nitrates: Metal + NO3 (O = 3*N)
  if (symbols.length === 3 && symbols.includes("N") && symbols.includes("O")) {
    const nCount = cleanAtoms["N"];
    const oCount = cleanAtoms["O"];
    const metalSym = symbols.find(s => s !== "N" && s !== "O");

    if (metalSym && oCount === 3 * nCount) {
      const metalEl = ELEMENTS_BY_SYMBOL.get(metalSym);
      const mCount = cleanAtoms[metalSym];
      const ratio = nCount / mCount;
      const valencies = VALENCE_MAP[metalSym] || [1, 2, 3];

      if (Number.isInteger(ratio) && valencies.includes(ratio)) {
        const val = ratio;
        const valSuffix = valencies.length > 1 && val > 1 ? `(${ROMAN_NUMERALS[val] || val})` : "";
        const formattedFormula = val === 1 ? `${metalSym}NO₃` : `${metalSym}(NO₃)${toSubscript(val)}`;
        const formattedAscii = val === 1 ? `${metalSym}NO3` : `${metalSym}(NO3)${val}`;

        const mol: MoleculeData = {
          id: `synth_nitrate_${metalSym.toLowerCase()}_${val}`,
          formula: formattedFormula,
          formulaAscii: formattedAscii,
          name: {
            en: `${metalEl?.name.en || metalSym} nitrate${valSuffix ? ` ${valSuffix}` : ""}`,
            ru: `Нитрат ${RUS_GENITIVE[metalSym] || metalEl?.name.ru || metalSym}${valSuffix ? ` ${valSuffix}` : ""}`,
            kk: `${metalEl?.name.kk || metalSym} нитраты${valSuffix ? ` ${valSuffix}` : ""}`
          },
          scientificName: {
            en: `Nitrate salt of ${metalSym}`,
            ru: `Селитра / нитратная соль ${RUS_GENITIVE[metalSym] || metalSym}`,
            kk: `${metalEl?.name.kk || metalSym} нитрат тұзы`
          },
          category: "mineral",
          hazard: "caution",
          state: "solid",
          description: {
            en: `Highly soluble inorganic nitrate salt composed of metal cations and planar nitrate (NO₃⁻) anions.`,
            ru: `Растворимая неорганическая соль, образованная катионом металла и нитрат-ионами NO₃⁻.`,
            kk: `Металл катиондары мен жазық нитрат (NO₃⁻) аниондарынан тұратын суда жақсы еритін тұз.`
          },
          funFact: {
            en: `Nitrate salts are powerful oxidizing agents historically valued for agriculture and pyrotechnics.`,
            ru: `Нитраты служат ценнейшими азотными удобрениями и сильными окислителями.`,
            kk: `Нитраттар ауыл шаруашылығындағы бағалы азот тыңайтқыштары және күшті тотықтырғыштар.`
          },
          realWorldUse: {
            en: "Agricultural mineral fertilizers, laboratory reagents, pyrotechnic colors",
            ru: "Минеральные азотные удобрения, аналитические реактивы, пиротехника",
            kk: "Азот тыңайтқыштары, зертханалық реактивтер, пиротехника"
          },
          atoms: cleanAtoms,
          structureType: "lattice",
          glowColor: metalEl?.color || "#3b82f6"
        };
        registerMolecule(mol);
        return mol;
      }
    }
  }

  // 5. Sulfates: Metal + SO4 (O = 4*S)
  if (symbols.length === 3 && symbols.includes("S") && symbols.includes("O")) {
    const sCount = cleanAtoms["S"];
    const oCount = cleanAtoms["O"];
    const metalSym = symbols.find(s => s !== "S" && s !== "O");

    if (metalSym && oCount === 4 * sCount) {
      const metalEl = ELEMENTS_BY_SYMBOL.get(metalSym);
      const mCount = cleanAtoms[metalSym];
      const valencies = VALENCE_MAP[metalSym] || [1, 2, 3];

      const matchedVal = valencies.find(v => mCount * v === sCount * 2);
      if (matchedVal) {
        const valSuffix = valencies.length > 1 && matchedVal > 1 ? `(${ROMAN_NUMERALS[matchedVal] || matchedVal})` : "";
        let formattedFormula = "";
        let formattedAscii = "";
        if (matchedVal === 2 && mCount === 1 && sCount === 1) {
          formattedFormula = `${metalSym}SO₄`;
          formattedAscii = `${metalSym}SO4`;
        } else if (matchedVal === 1 && mCount === 2 && sCount === 1) {
          formattedFormula = `${metalSym}₂SO₄`;
          formattedAscii = `${metalSym}2SO4`;
        } else if (matchedVal === 3 && mCount === 2 && sCount === 3) {
          formattedFormula = `${metalSym}₂(SO₄)₃`;
          formattedAscii = `${metalSym}2(SO4)3`;
        } else {
          formattedFormula = `${metalSym}${toSubscript(mCount)}(SO₄)${toSubscript(sCount)}`;
          formattedAscii = `${metalSym}${mCount}(SO4)${sCount}`;
        }

        const mol: MoleculeData = {
          id: `synth_sulfate_${metalSym.toLowerCase()}_${matchedVal}`,
          formula: formattedFormula,
          formulaAscii: formattedAscii,
          name: {
            en: `${metalEl?.name.en || metalSym} sulfate${valSuffix ? ` ${valSuffix}` : ""}`,
            ru: `Сульфат ${RUS_GENITIVE[metalSym] || metalEl?.name.ru || metalSym}${valSuffix ? ` ${valSuffix}` : ""}`,
            kk: `${metalEl?.name.kk || metalSym} сульфаты${valSuffix ? ` ${valSuffix}` : ""}`
          },
          scientificName: {
            en: `Sulfate salt of ${metalSym}`,
            ru: `Сульфатная соль ${RUS_GENITIVE[metalSym] || metalSym}`,
            kk: `${metalEl?.name.kk || metalSym} сульфат тұзы`
          },
          category: "mineral",
          hazard: "safe",
          state: "solid",
          description: {
            en: `Crystalline inorganic sulfate salt composed of metal cations and tetrahedral sulfate (SO₄²⁻) anions.`,
            ru: `Кристаллическая соль серной кислоты, состоящая из катионов металла и сульфат-анионов SO₄²⁻.`,
            kk: `Металл катиондары мен тетраэдрлік сульфат (SO₄²⁻) аниондарынан тұратын кристалды тұз.`
          },
          funFact: {
            en: `Sulfate minerals frequently form stunning geological crystals like gypsum, barite, and chalcanthite.`,
            ru: `Сульфаты образуют великолепные природные минералы — гипс, барит и купоросы.`,
            kk: `Сульфаттар табиғатта ғажайып кристалды минералдар — гипс, барит түзеді.`
          },
          realWorldUse: {
            en: "Industrial chemistry, construction materials, metallurgy, soil amendment",
            ru: "Строительные материалы, химическая промышленность, минеральные удобрения",
            kk: "Құрылыс материалдары, химия өнеркәсібі, тыңайтқыштар"
          },
          atoms: cleanAtoms,
          structureType: "lattice",
          glowColor: metalEl?.color || "#eab308"
        };
        registerMolecule(mol);
        return mol;
      }
    }
  }

  // 6. Carbonates: Metal + CO3 (O = 3*C)
  if (symbols.length === 3 && symbols.includes("C") && symbols.includes("O")) {
    const cCount = cleanAtoms["C"];
    const oCount = cleanAtoms["O"];
    const metalSym = symbols.find(s => s !== "C" && s !== "O");

    if (metalSym && oCount === 3 * cCount) {
      const metalEl = ELEMENTS_BY_SYMBOL.get(metalSym);
      const mCount = cleanAtoms[metalSym];
      const valencies = VALENCE_MAP[metalSym] || [1, 2, 3];

      const matchedVal = valencies.find(v => mCount * v === cCount * 2);
      if (matchedVal) {
        let formattedFormula = "";
        let formattedAscii = "";
        if (matchedVal === 2 && mCount === 1 && cCount === 1) {
          formattedFormula = `${metalSym}CO₃`;
          formattedAscii = `${metalSym}CO3`;
        } else if (matchedVal === 1 && mCount === 2 && cCount === 1) {
          formattedFormula = `${metalSym}₂CO₃`;
          formattedAscii = `${metalSym}2CO3`;
        } else {
          formattedFormula = `${metalSym}${toSubscript(mCount)}(CO₃)${toSubscript(cCount)}`;
          formattedAscii = `${metalSym}${mCount}(CO3)${cCount}`;
        }

        const mol: MoleculeData = {
          id: `synth_carbonate_${metalSym.toLowerCase()}_${matchedVal}`,
          formula: formattedFormula,
          formulaAscii: formattedAscii,
          name: {
            en: `${metalEl?.name.en || metalSym} carbonate`,
            ru: `Карбонат ${RUS_GENITIVE[metalSym] || metalEl?.name.ru || metalSym}`,
            kk: `${metalEl?.name.kk || metalSym} карбонаты`
          },
          scientificName: {
            en: `Carbonate salt of ${metalSym}`,
            ru: `Карбонатная соль ${RUS_GENITIVE[metalSym] || metalSym}`,
            kk: `${metalEl?.name.kk || metalSym} карбонат тұзы`
          },
          category: "mineral",
          hazard: "safe",
          state: "solid",
          description: {
            en: `Inorganic carbonate salt containing metal cations and planar carbonate (CO₃²⁻) anions.`,
            ru: `Неорганическая соль угольной кислоты, состоящая из катионов металла и карбонат-анионов CO₃²⁻.`,
            kk: `Металл катиондары мен карбонат (CO₃²⁻) аниондарынан тұратын бейорганикалық тұз.`
          },
          funFact: {
            en: `Carbonates react effervescently with acids, rapidly liberating bubbles of carbon dioxide gas!`,
            ru: `Карбонаты бурно реагируют с кислотами с шипением и мгновенным выделением углекислого газа!`,
            kk: `Карбонаттар қышқылмен әрекеттескенде көмірқышқыл газы көпіршіктеніп жылдам бөлінеді!`
          },
          realWorldUse: {
            en: "Limestone construction, cement, glass manufacturing, antacid tablets",
            ru: "Производство стекла, цемента, строительные материалы, антациды",
            kk: "Шыны өндірісі, цемент, құрылыс материалдары"
          },
          atoms: cleanAtoms,
          structureType: "lattice",
          glowColor: metalEl?.color || "#94a3b8"
        };
        registerMolecule(mol);
        return mol;
      }
    }
  }

  // 7. General Binary Compounds: A_m B_n
  if (symbols.length === 2) {
    const [s1, s2] = symbols;
    const el1 = ELEMENTS_BY_SYMBOL.get(s1);
    const el2 = ELEMENTS_BY_SYMBOL.get(s2);

    if (el1 && el2) {
      const en1 = EN_SCALE[s1] || 1.8;
      const en2 = EN_SCALE[s2] || 1.8;

      let catSym = s1;
      let catCount = cleanAtoms[s1];
      let catEl = el1;

      let aniSym = s2;
      let aniCount = cleanAtoms[s2];
      let aniEl = el2;

      if (en1 > en2) {
        catSym = s2;
        catCount = cleanAtoms[s2];
        catEl = el2;
        aniSym = s1;
        aniCount = cleanAtoms[s1];
        aniEl = el1;
      }

      const catValencies = VALENCE_MAP[catSym] || [1, 2, 3];
      const aniValencies = VALENCE_MAP[aniSym] || [1, 2];

      let validCatVal: number | null = null;
      let validAniVal: number | null = null;

      for (const cv of catValencies) {
        for (const av of aniValencies) {
          if (catCount * Math.abs(cv) === aniCount * Math.abs(av)) {
            validCatVal = Math.abs(cv);
            validAniVal = Math.abs(av);
            break;
          }
        }
        if (validCatVal) break;
      }

      if (validCatVal && validAniVal) {
        const anionInfo = BINARY_ANIONS[aniSym] || {
          ru: `${aniEl.name.ru}ид`,
          kk: `${aniEl.name.kk}иді`,
          en: `${aniEl.name.en.toLowerCase()}ide`
        };

        const roman = catValencies.length > 1 && validCatVal > 1 ? `(${ROMAN_NUMERALS[validCatVal] || validCatVal})` : "";
        const formula = `${catSym}${toSubscript(catCount)}${aniSym}${toSubscript(aniCount)}`;
        const formulaAscii = `${catSym}${catCount > 1 ? catCount : ""}${aniSym}${aniCount > 1 ? aniCount : ""}`;

        const nameEn = `${catEl.name.en} ${anionInfo.en}${roman ? ` ${roman}` : ""}`;
        const nameRu = `${anionInfo.ru} ${RUS_GENITIVE[catSym] || catEl.name.ru}${roman ? ` ${roman}` : ""}`;
        const nameKk = `${catEl.name.kk} ${anionInfo.kk}${roman ? ` ${roman}` : ""}`;

        const isGas = ["F", "Cl", "O"].includes(aniSym) && ["H", "C", "N", "O"].includes(catSym) && totalAtoms <= 3;
        const state = isGas ? "gas" : "solid";
        const catIsMetal = ['alkali-metal', 'alkaline-earth', 'transition-metal', 'post-transition'].includes(catEl.category);

        const mol: MoleculeData = {
          id: `synth_binary_${catSym.toLowerCase()}${catCount}_${aniSym.toLowerCase()}${aniCount}`,
          formula,
          formulaAscii,
          name: { en: nameEn, ru: nameRu, kk: nameKk },
          scientificName: {
            en: `Binary compound of ${catSym} and ${aniSym}`,
            ru: `Бинарное соединение ${RUS_GENITIVE[catSym] || catSym} и ${RUS_GENITIVE[aniSym] || aniSym}`,
            kk: `${catEl.name.kk} мен ${aniEl.name.kk} бинарлы қосылысы`
          },
          category: aniSym === "O" ? (catIsMetal ? "mineral" : "gas") : catIsMetal ? "mineral" : "essential",
          hazard: ["F", "Cl", "Br", "I", "S"].includes(aniSym) && ["Pb", "Hg", "Cd", "As"].includes(catSym) ? "danger" : "safe",
          state,
          description: {
            en: `Stoichiometric binary compound formed between ${catEl.name.en} (+${validCatVal}) and ${aniEl.name.en} (-${validAniVal}).`,
            ru: `Стехиометрическое бинарное соединение, образованное ${RUS_GENITIVE[catSym] || catSym} (+${validCatVal}) и ${RUS_GENITIVE[aniSym] || aniSym} (-${validAniVal}).`,
            kk: `${catEl.name.kk} (+${validCatVal}) мен ${aniEl.name.kk} (-${validAniVal}) арасындағы стехиометриялық бинарлы қосылыс.`
          },
          funFact: {
            en: `Maintains rigorous electronic neutrality through a ${catCount}:${aniCount} atomic lattice ratio.`,
            ru: `Обладает строгой электронейтральностью кристаллической решетки в соотношении ${catCount}:${aniCount}.`,
            kk: `Кристалл торындағы ${catCount}:${aniCount} атомдық қатынас арқылы қатаң электробейтараптықты сақтайды.`
          },
          realWorldUse: {
            en: `Precursor in chemical synthesis, material science, metallurgy, and semiconductor engineering.`,
            ru: `Применяется в материаловедении, химическом синтезе, металлургии и полупроводниках.`,
            kk: `Материалтануда, химиялық синтезде, металлургия мен жартылай өткізгіштерде қолданылады.`
          },
          atoms: cleanAtoms,
          structureType: catIsMetal ? "lattice" : totalAtoms <= 3 ? "linear" : "tetrahedral",
          glowColor: catEl.color || "#6366f1"
        };
        registerMolecule(mol);
        return mol;
      }
    }
  }

  return undefined;
}

// Register dynamic molecule into MOLECULES_DATA and MOLECULES_BY_ID
function registerMolecule(mol: MoleculeData) {
  if (!MOLECULES_BY_ID.has(mol.id)) {
    MOLECULES_BY_ID.set(mol.id, mol);
    MOLECULES_DATA.push(mol);
  }
}

export function analyzeReaction(atoms: Record<string, number>): ReactionResult {
  const cleanAtoms: Record<string, number> = {};
  let totalAtoms = 0;
  for (const [k, v] of Object.entries(atoms)) {
    if (v > 0) {
      cleanAtoms[k] = v;
      totalAtoms += v;
    }
  }

  const formula = formatFormula(cleanAtoms);
  
  // 1. Direct match with pre-curated molecule dataset
  const matched = matchMolecule(cleanAtoms);
  if (matched) {
    return {
      isMatch: true,
      molecule: matched,
      formula: matched.formula,
      atoms: cleanAtoms,
      totalAtoms,
      canBond: true,
      explanation: matched.description,
      bondTypeDescription: {
        en: `Stable molecule synthesized with ${totalAtoms} atoms.`,
        ru: `Синтезирована стабильная молекула из ${totalAtoms} атомов.`,
        kk: `${totalAtoms} атомнан тұратын тұрақты молекула синтезделді.`
      }
    };
  }

  // 2. Intelligent Universal Chemical Synthesizer fallback
  const synthesized = synthesizeCompound(cleanAtoms);
  if (synthesized) {
    return {
      isMatch: true,
      molecule: synthesized,
      formula: synthesized.formula,
      atoms: cleanAtoms,
      totalAtoms,
      canBond: true,
      explanation: synthesized.description,
      bondTypeDescription: {
        en: `Successfully synthesized ${synthesized.name.en} (${synthesized.formula})!`,
        ru: `Успешно синтезировано соединение: ${synthesized.name.ru} (${synthesized.formula})!`,
        kk: `${synthesized.name.kk} (${synthesized.formula}) сәтті синтезделді!`
      }
    };
  }

  // 3. Speculative & educational fallback for non-stoichiometric mixtures
  const symbols = Object.keys(cleanAtoms);
  const hasNobleGas = symbols.some(s => ELEMENTS_BY_SYMBOL.get(s)?.category === 'noble-gas');
  const allMetals = symbols.every(s => ['alkali-metal', 'alkaline-earth', 'transition-metal', 'post-transition', 'lanthanide', 'actinide'].includes(ELEMENTS_BY_SYMBOL.get(s)?.category || ''));

  let enExplanation = "These elements form an intriguing atomic mixture! Under standard room conditions they do not form a stable stoichiometric molecule, but in plasma or extreme astrophysics such complexes exist.";
  let ruExplanation = "Любопытная комбинация атомов! В обычных условиях они не образуют стехиометрически устойчивую молекулу, но при экстремальных температурах или в плазме астрофизики наблюдают подобные комплексы.";
  let kkExplanation = "Бұл атомдар қызықты қоспа түзеді! Қалыпты бөлме жағдайында олар тұрақты стехиометриялық молекула түзбейді, бірақ плазмалық немесе ғарыштық экстремалды жағдайларда осындай кешендер кездеседі.";

  if (hasNobleGas) {
    enExplanation = "One or more noble gases (He, Ne, Ar, Kr, Xe, Rn) are in your mixture. Noble gases have complete valence electron shells and resist chemical bonding!";
    ruExplanation = "В вашей смеси присутствует благородный газ (He, Ne, Ar, Kr, Xe, Rn). У них полностью заполнена внешняя электронная оболочка, поэтому они крайне инертны!";
    kkExplanation = "Қоспаңызда асыл газ бар (He, Ne, Ar, Kr, Xe, Rn). Олардың сыртқы электрон қабаты толық болғандықтан, қалыпты жағдайда байланысқа түспейді!";
  } else if (allMetals && symbols.length > 1) {
    enExplanation = `Combining different metals (${symbols.join(' + ')}) produces an Alloy rather than a single molecule! Alloys form resilient crystal lattices like Bronze, Brass, and Steel.`;
    ruExplanation = `Смешивание металлов (${symbols.join(' + ')}) образует Металлический Сплав! Именно так металлурги создают сверхпрочную сталь, бронзу и латунь.`;
    kkExplanation = `Әртүрлі металдарды (${symbols.join(' + ')}) қосу металдық қорытпа түзеді! Металлургтер осылай болат, қола және жез сияқты мықты қорытпалар жасайды.`;
  }

  return {
    isMatch: false,
    formula,
    atoms: cleanAtoms,
    totalAtoms,
    canBond: false,
    explanation: { en: enExplanation, ru: ruExplanation, kk: kkExplanation },
    bondTypeDescription: {
      en: "Experimental mixture: adjust atomic ratios or try adding Hydrogen / Oxygen to satisfy valence!",
      ru: "Экспериментальная смесь: измените пропорции или добавьте Водород / Кислород для замыкания валентностей!",
      kk: "Эксперименттік қоспа: пропорцияны өзгертіңіз немесе валенттілікті толтыру үшін Сутегі / Оттегі қосыңыз!"
    }
  };
}
