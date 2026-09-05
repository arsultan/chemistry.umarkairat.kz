import { MoleculeData, ReactionResult } from "@/types/chemistry";
import { MOLECULES_DATA } from "@/data/molecules";
import { ELEMENTS_BY_SYMBOL } from "@/data/elements";

const SUB_MAP: Record<string, string> = {
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄",
  "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉"
};

export function toSubscript(num: number): string {
  if (num <= 1) return "";
  return String(num).split("").map(ch => SUB_MAP[ch] || ch).join("");
}

// Order atoms according to Hill system (C first, then H, then others alphabetical)
// Or for salts: electropositive cation first, then electronegative anion
export function formatFormula(atoms: Record<string, number>): string {
  const keys = Object.keys(atoms).filter(k => (atoms[k] || 0) > 0);
  if (keys.length === 0) return "";

  // Sort keys:
  // If carbon is present: C, H, then alphabetical
  const hasCarbon = keys.includes("C");
  const sorted = [...keys].sort((a, b) => {
    if (hasCarbon) {
      if (a === "C") return -1;
      if (b === "C") return 1;
      if (a === "H") return -1;
      if (b === "H") return 1;
    }
    // Compare electronegativity / atomic number approximate:
    // Elements like metals (Na, Ca, Fe, Al, Cu) usually precede nonmetals (Cl, O, S, F)
    const elA = ELEMENTS_BY_SYMBOL.get(a);
    const elB = ELEMENTS_BY_SYMBOL.get(b);
    if (elA && elB) {
      // Noble gases
      if (elA.category === 'noble-gas') return 1;
      if (elB.category === 'noble-gas') return -1;
      // Metals first
      const isMetalA = ['alkali-metal', 'alkaline-earth', 'transition-metal', 'post-transition'].includes(elA.category);
      const isMetalB = ['alkali-metal', 'alkaline-earth', 'transition-metal', 'post-transition'].includes(elB.category);
      if (isMetalA && !isMetalB) return -1;
      if (!isMetalA && isMetalB) return 1;
    }
    return a.localeCompare(b);
  });

  return sorted.map(sym => `${sym}${toSubscript(atoms[sym])}`).join("");
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
  const matched = matchMolecule(cleanAtoms);

  if (matched) {
    return {
      isMatch: true,
      molecule: matched,
      formula,
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

  // Speculative & scientifically encouraging fallback
  const symbols = Object.keys(cleanAtoms);
  const hasNobleGas = symbols.some(s => ELEMENTS_BY_SYMBOL.get(s)?.category === 'noble-gas');
  const allMetals = symbols.every(s => ['alkali-metal', 'alkaline-earth', 'transition-metal', 'post-transition'].includes(ELEMENTS_BY_SYMBOL.get(s)?.category || ''));
  const allNonmetals = symbols.every(s => ['nonmetal', 'halogen'].includes(ELEMENTS_BY_SYMBOL.get(s)?.category || ''));

  let enExplanation = "These elements form an intriguing atomic mixture! Under standard room temperature they don't form a common textbook molecule, but scientists synthesize exotic compounds in extreme plasma or deep-space conditions.";
  let ruExplanation = "Любопытная комбинация атомов! В обычных условиях они не образуют распространенную стабильную молекулу, но в экстремальных условиях плазмы или космоса физики получают подобные экзотические комплексы.";
  let kkExplanation = "Бұл атомдар өте қызықты қоспа түзеді! Қалыпты бөлме жағдайында олар тұрақты танымал молекула түзбейді, бірақ ғарыштық немесе плазмалық төтенше жағдайларда осындай экзотикалық кешендер кездеседі.";

  if (hasNobleGas) {
    enExplanation = "One or more noble gases (He, Ne, Ar, Kr, Xe, Rn) are in your mixture. Noble gases have complete valence shells and almost never form bonds under normal conditions!";
    ruExplanation = "В вашей смеси есть благородный газ (He, Ne, Ar, Kr, Xe, Rn). У них полностью заполнена внешняя электронная оболочка, поэтому они крайне неохотно вступают в химические связи!";
    kkExplanation = "Қоспаңызда асыл газ бар (He, Ne, Ar, Kr, Xe, Rn). Олардың сыртқы электрон қабаты толық болғандықтан, қалыпты жағдайда байланысқа түспейді!";
  } else if (allMetals && symbols.length > 1) {
    enExplanation = `Combining different metals (${symbols.join(' + ')}) produces an Alloy rather than a single molecule! Alloys create super-strong metals like Bronze and Steel.`;
    ruExplanation = `Соединение разных металлов (${symbols.join(' + ')}) образует Металлический Сплав! Именно так металлурги создают сверхпрочную сталь и бронзу.`;
    kkExplanation = `Әртүрлі металдарды (${symbols.join(' + ')}) қосу металдық қорытпа түзеді! Металлургтер осылай болат пен қола сияқты мықты қорытпалар жасайды.`;
  }

  return {
    isMatch: false,
    formula,
    atoms: cleanAtoms,
    totalAtoms,
    canBond: false,
    explanation: { en: enExplanation, ru: ruExplanation, kk: kkExplanation },
    bondTypeDescription: {
      en: "Experimental mixture: adjust atomic ratios or try adding Hydrogen / Oxygen!",
      ru: "Экспериментальная смесь: измените пропорции или добавьте Водород / Кислород!",
      kk: "Эксперименттік қоспа: пропорцияны өзгертіңіз немесе Сутегі / Оттегі қосып көріңіз!"
    }
  };
}
