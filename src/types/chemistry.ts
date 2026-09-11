export type Language = 'en' | 'ru' | 'kk';

export type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth'
  | 'transition-metal'
  | 'post-transition'
  | 'metalloid'
  | 'nonmetal'
  | 'halogen'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide';

export type StateOfMatter = 'gas' | 'liquid' | 'solid' | 'synthetic';

export interface LocalizedString {
  en: string;
  ru: string;
  kk: string;
}

export interface ElementData {
  number: number;
  symbol: string;
  name: LocalizedString;
  atomicMass: string;
  category: ElementCategory;
  period: number;
  group: number;
  phase: StateOfMatter;
  valency: number[];
  electronConfig: string;
  summary: LocalizedString;
  funFact: LocalizedString;
  everydayUse: LocalizedString;
  color: string;
}

export type MoleculeCategory =
  | 'essential'
  | 'household'
  | 'acid-base'
  | 'gas'
  | 'mineral'
  | 'organic'
  | 'fuel';

export type HazardLevel = 'safe' | 'vital' | 'caution' | 'danger';

export interface MoleculeData {
  id: string;
  formula: string; // H₂O
  formulaAscii: string; // H2O
  atoms: Record<string, number>; // { H: 2, O: 1 }
  name: LocalizedString;
  scientificName: LocalizedString;
  category: MoleculeCategory;
  hazard: HazardLevel;
  state: 'gas' | 'liquid' | 'solid';
  description: LocalizedString;
  realWorldUse: LocalizedString;
  funFact: LocalizedString;
  glowColor: string;
  structureType?: 'linear' | 'bent' | 'tetrahedral' | 'planar' | 'lattice' | 'complex';
}

export interface QuestData {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  requiredMolecules: string[];
  rewardPoints: number;
  badge: string;
}

export interface AchievementData {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  condition: {
    type: 'discoveries_count' | 'element_inspected' | 'specific_molecule' | 'experimental_reactions';
    value: number | string;
  };
}

export interface ReactionResult {
  isMatch: boolean;
  molecule?: MoleculeData;
  formula: string;
  atoms: Record<string, number>;
  totalAtoms: number;
  explanation: LocalizedString;
  canBond: boolean;
  bondTypeDescription: LocalizedString;
}

export type NavigationTab = 'table' | 'lab' | 'solubility' | 'classification' | 'education' | 'ph' | 'journal' | 'quests';
