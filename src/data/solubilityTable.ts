import { LocalizedString } from "@/types/chemistry";

export type SolubilityType = 'soluble' | 'slightly-soluble' | 'insoluble' | 'decomposes' | 'gas';

export interface CationInfo {
  id: string;
  symbol: string; // e.g. "H⁺", "Na⁺", "Ca²⁺"
  symbolAscii: string;
  name: LocalizedString;
  charge: number;
  valency: number;
  elementSymbol: string;
  sampleSalt: string; // e.g. "AgNO₃", "BaCl₂"
}

export interface AnionInfo {
  id: string;
  symbol: string; // e.g. "OH⁻", "Cl⁻", "SO₄²⁻"
  symbolAscii: string;
  name: LocalizedString;
  acidFormula: string;
  charge: number;
  valency: number;
  sampleSalt: string; // e.g. "NaCl", "Na₂SO₄"
}

export interface SolubilityCell {
  cationId: string;
  anionId: string;
  formula: string;
  formulaAscii: string;
  status: SolubilityType;
  shortCode: 'Р' | 'М' | 'Н' | '—' | 'Г';
  colorNote?: LocalizedString;
  precipitateColorHex?: string;
  description?: LocalizedString;
  molecularEquation?: string;
  netIonicEquation?: string;
  atoms?: Record<string, number>;
  isImportantQualitativeReaction?: boolean;
}

export interface QualitativeReaction {
  id: string;
  title: LocalizedString;
  cationId: string;
  anionId: string;
  productFormula: string;
  precipitateColorHex: string;
  colorNote: LocalizedString;
  molecularEquation: string;
  netIonicEquation: string;
  observation: LocalizedString;
  application: LocalizedString;
}

export const CATIONS_LIST: CationInfo[] = [
  { id: "H", symbol: "H⁺", symbolAscii: "H+", name: { ru: "Водород", kk: "Сутек", en: "Hydrogen" }, charge: 1, valency: 1, elementSymbol: "H", sampleSalt: "HCl" },
  { id: "NH4", symbol: "NH₄⁺", symbolAscii: "NH4+", name: { ru: "Аммоний", kk: "Аммоний", en: "Ammonium" }, charge: 1, valency: 1, elementSymbol: "N", sampleSalt: "NH₄Cl" },
  { id: "K", symbol: "K⁺", symbolAscii: "K+", name: { ru: "Калий", kk: "Калий", en: "Potassium" }, charge: 1, valency: 1, elementSymbol: "K", sampleSalt: "KCl" },
  { id: "Na", symbol: "Na⁺", symbolAscii: "Na+", name: { ru: "Натрий", kk: "Натрий", en: "Sodium" }, charge: 1, valency: 1, elementSymbol: "Na", sampleSalt: "NaCl" },
  { id: "Li", symbol: "Li⁺", symbolAscii: "Li+", name: { ru: "Литий", kk: "Литий", en: "Lithium" }, charge: 1, valency: 1, elementSymbol: "Li", sampleSalt: "LiCl" },
  { id: "Ag", symbol: "Ag⁺", symbolAscii: "Ag+", name: { ru: "Серебро", kk: "Күміс", en: "Silver" }, charge: 1, valency: 1, elementSymbol: "Ag", sampleSalt: "AgNO₃" },
  { id: "Mg", symbol: "Mg²⁺", symbolAscii: "Mg2+", name: { ru: "Магний", kk: "Магний", en: "Magnesium" }, charge: 2, valency: 2, elementSymbol: "Mg", sampleSalt: "MgCl₂" },
  { id: "Ca", symbol: "Ca²⁺", symbolAscii: "Ca2+", name: { ru: "Кальций", kk: "Кальций", en: "Calcium" }, charge: 2, valency: 2, elementSymbol: "Ca", sampleSalt: "CaCl₂" },
  { id: "Ba", symbol: "Ba²⁺", symbolAscii: "Ba2+", name: { ru: "Барий", kk: "Барий", en: "Barium" }, charge: 2, valency: 2, elementSymbol: "Ba", sampleSalt: "BaCl₂" },
  { id: "Zn", symbol: "Zn²⁺", symbolAscii: "Zn2+", name: { ru: "Цинк", kk: "Мырыш", en: "Zinc" }, charge: 2, valency: 2, elementSymbol: "Zn", sampleSalt: "ZnSO₄" },
  { id: "Cu", symbol: "Cu²⁺", symbolAscii: "Cu2+", name: { ru: "Медь (II)", kk: "Мыс (II)", en: "Copper(II)" }, charge: 2, valency: 2, elementSymbol: "Cu", sampleSalt: "CuSO₄" },
  { id: "Fe2", symbol: "Fe²⁺", symbolAscii: "Fe2+", name: { ru: "Железо (II)", kk: "Темір (II)", en: "Iron(II)" }, charge: 2, valency: 2, elementSymbol: "Fe", sampleSalt: "FeSO₄" },
  { id: "Fe3", symbol: "Fe³⁺", symbolAscii: "Fe3+", name: { ru: "Железо (III)", kk: "Темір (III)", en: "Iron(III)" }, charge: 3, valency: 3, elementSymbol: "Fe", sampleSalt: "FeCl₃" },
  { id: "Al", symbol: "Al³⁺", symbolAscii: "Al3+", name: { ru: "Алюминий", kk: "Алюминий", en: "Aluminum" }, charge: 3, valency: 3, elementSymbol: "Al", sampleSalt: "AlCl₃" },
  { id: "Pb", symbol: "Pb²⁺", symbolAscii: "Pb2+", name: { ru: "Свинец (II)", kk: "Қорғасын (II)", en: "Lead(II)" }, charge: 2, valency: 2, elementSymbol: "Pb", sampleSalt: "Pb(NO₃)₂" },
];

export const ANIONS_LIST: AnionInfo[] = [
  { id: "OH", symbol: "OH⁻", symbolAscii: "OH-", name: { ru: "Гидроксид", kk: "Гидроксид", en: "Hydroxide" }, acidFormula: "H₂O", charge: 1, valency: 1, sampleSalt: "NaOH" },
  { id: "F", symbol: "F⁻", symbolAscii: "F-", name: { ru: "Фторид", kk: "Фторид", en: "Fluoride" }, acidFormula: "HF", charge: 1, valency: 1, sampleSalt: "KF" },
  { id: "Cl", symbol: "Cl⁻", symbolAscii: "Cl-", name: { ru: "Хлорид", kk: "Хлорид", en: "Chloride" }, acidFormula: "HCl", charge: 1, valency: 1, sampleSalt: "NaCl" },
  { id: "Br", symbol: "Br⁻", symbolAscii: "Br-", name: { ru: "Бромид", kk: "Бромид", en: "Bromide" }, acidFormula: "HBr", charge: 1, valency: 1, sampleSalt: "NaBr" },
  { id: "I", symbol: "I⁻", symbolAscii: "I-", name: { ru: "Иодид", kk: "Иодид", en: "Iodide" }, acidFormula: "HI", charge: 1, valency: 1, sampleSalt: "KI" },
  { id: "S", symbol: "S²⁻", symbolAscii: "S2-", name: { ru: "Сульфид", kk: "Сульфид", en: "Sulfide" }, acidFormula: "H₂S", charge: 2, valency: 2, sampleSalt: "Na₂S" },
  { id: "SO3", symbol: "SO₃²⁻", symbolAscii: "SO32-", name: { ru: "Сульфит", kk: "Сульфит", en: "Sulfite" }, acidFormula: "H₂SO₃", charge: 2, valency: 2, sampleSalt: "Na₂SO₃" },
  { id: "SO4", symbol: "SO₄²⁻", symbolAscii: "SO42-", name: { ru: "Сульфат", kk: "Сульфат", en: "Sulfate" }, acidFormula: "H₂SO₄", charge: 2, valency: 2, sampleSalt: "Na₂SO₄" },
  { id: "NO2", symbol: "NO₂⁻", symbolAscii: "NO2-", name: { ru: "Нитрит", kk: "Нитрит", en: "Nitrite" }, acidFormula: "HNO₂", charge: 1, valency: 1, sampleSalt: "NaNO₂" },
  { id: "NO3", symbol: "NO₃⁻", symbolAscii: "NO3-", name: { ru: "Нитрат", kk: "Нитрат", en: "Nitrate" }, acidFormula: "HNO₃", charge: 1, valency: 1, sampleSalt: "NaNO₃" },
  { id: "PO4", symbol: "PO₄³⁻", symbolAscii: "PO43-", name: { ru: "Ортофосфат", kk: "Ортофосфат", en: "Phosphate" }, acidFormula: "H₃PO₄", charge: 3, valency: 3, sampleSalt: "Na₃PO₄" },
  { id: "CO3", symbol: "CO₃²⁻", symbolAscii: "CO32-", name: { ru: "Карбонат", kk: "Карбонат", en: "Carbonate" }, acidFormula: "H₂CO₃", charge: 2, valency: 2, sampleSalt: "Na₂CO₃" },
  { id: "SiO3", symbol: "SiO₃²⁻", symbolAscii: "SiO32-", name: { ru: "Силикат", kk: "Силикат", en: "Silicate" }, acidFormula: "H₂SiO₃", charge: 2, valency: 2, sampleSalt: "Na₂SiO₃" },
  { id: "CH3COO", symbol: "CH₃COO⁻", symbolAscii: "CH3COO-", name: { ru: "Ацетат", kk: "Ацетат", en: "Acetate" }, acidFormula: "CH₃COOH", charge: 1, valency: 1, sampleSalt: "CH₃COONa" }
];

export const QUALITATIVE_REACTIONS_LIST: QualitativeReaction[] = [
  {
    id: "ag_cl",
    title: { ru: "Качественная реакция на хлориды (Cl⁻)", kk: "Хлорид иондарына сапалық реакция", en: "Qualitative Test for Chlorides (Cl⁻)" },
    cationId: "Ag",
    anionId: "Cl",
    productFormula: "AgCl",
    precipitateColorHex: "#ffffff",
    colorNote: { ru: "Белый творожистый осадок, не растворимый в HNO₃", kk: "Ақ ірімшік тәрізді тұнба", en: "White curdy precipitate" },
    molecularEquation: "AgNO₃ + NaCl → AgCl↓ + NaNO₃",
    netIonicEquation: "Ag⁺ + Cl⁻ → AgCl↓",
    observation: { ru: "Мгновенное выпадение белого творожистого осадка, темнеющего на свету", kk: "Жарықта қараятын ақ ірімшік тәрізді тұнба түзіледі", en: "Instant formation of white curdy precipitate that darkens in light" },
    application: { ru: "Обнаружение хлорид-ионов в питьевой воде, медицине и криминалистике", kk: "Ауыз су мен медицинадағы хлоридтерді анықтау", en: "Water purification testing and forensics" }
  },
  {
    id: "ag_br",
    title: { ru: "Качественная реакция на бромиды (Br⁻)", kk: "Бромид иондарына сапалық реакция", en: "Qualitative Test for Bromides (Br⁻)" },
    cationId: "Ag",
    anionId: "Br",
    productFormula: "AgBr",
    precipitateColorHex: "#fef08a",
    colorNote: { ru: "Светло-жёлтый (кремовый) творожистый осадок", kk: "Ашық-сары (кілегей түсті) тұнба", en: "Pale yellow / cream precipitate" },
    molecularEquation: "AgNO₃ + NaBr → AgBr↓ + NaNO₃",
    netIonicEquation: "Ag⁺ + Br⁻ → AgBr↓",
    observation: { ru: "Образование нежно-кремового осадка бромида серебра", kk: "Крем түсті ашық-сары тұнба түзіледі", en: "Formation of pale-yellow light-sensitive precipitate" },
    application: { ru: "Классическая плёночная фотография и кинематограф", kk: "Фотопленка мен кинематография өндірісі", en: "Analog photographic film emulsions" }
  },
  {
    id: "ag_i",
    title: { ru: "Качественная реакция на иодиды (I⁻)", kk: "Иодид иондарына сапалық реакция", en: "Qualitative Test for Iodides (I⁻)" },
    cationId: "Ag",
    anionId: "I",
    productFormula: "AgI",
    precipitateColorHex: "#eab308",
    colorNote: { ru: "Насыщенно-жёлтый осадок, нерастворимый в растворе аммиака", kk: "Аммиакта ерімейтін қанық сары тұнба", en: "Vibrant yellow precipitate" },
    molecularEquation: "AgNO₃ + KI → AgI↓ + KNO₃",
    netIonicEquation: "Ag⁺ + I⁻ → AgI↓",
    observation: { ru: "Яркий жёлтый осадок с кристаллической решёткой, схожей со льдом", kk: "Қанық сары түсті тұнба пайда болады", en: "Bright yellow precipitate with ice-like lattice structure" },
    application: { ru: "Засеивание дождевых облаков для вызова осадков в метеорологии", kk: "Бұлттарды жасанды жауын-шашынға айналдыру", en: "Cloud seeding for artificial weather modification" }
  },
  {
    id: "ba_so4",
    title: { ru: "Качественная реакция на сульфаты (SO₄²⁻)", kk: "Сульфат иондарына сапалық реакция", en: "Qualitative Test for Sulfates (SO₄²⁻)" },
    cationId: "Ba",
    anionId: "SO4",
    productFormula: "BaSO₄",
    precipitateColorHex: "#ffffff",
    colorNote: { ru: "Белый мелкокристаллический осадок, нерастворимый в кислотах", kk: "Қышқылдарда ерімейтін ақ кристалды тұнба", en: "Dense white crystalline precipitate insoluble in acids" },
    molecularEquation: "BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl",
    netIonicEquation: "Ba²⁺ + SO₄²⁻ → BaSO₄↓",
    observation: { ru: "Тяжелый молочно-белый осадок («баритовая каша»), устойчивый к действию кислот", kk: "Қышқылдар әсеріне төзімді ауыр ақ тұнба", en: "Heavy milky white precipitate unaffected by HCl or HNO₃" },
    application: { ru: "Рентгеноконтрастное вещество в гастроэнтерологии и белый пигмент", kk: "Рентген диагностикасында қолданылатын контраст", en: "Medical X-ray contrast agent & white pigment" }
  },
  {
    id: "pb_i2",
    title: { ru: "Опыт «Золотой дождь» (PbI₂)", kk: "«Алтын жаңбыр» тәжірибесі (PbI₂)", en: "'Golden Rain' Reaction (PbI₂)" },
    cationId: "Pb",
    anionId: "I",
    productFormula: "PbI₂",
    precipitateColorHex: "#facc15",
    colorNote: { ru: "Золотисто-жёлтые мерцающие чешуйки", kk: "Жылтыраған алтын түстес кристалдар", en: "Shimmering golden crystal flakes" },
    molecularEquation: "Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃",
    netIonicEquation: "Pb²⁺ + 2I⁻ → PbI₂↓",
    observation: { ru: "При охлаждении горячего прозрачного раствора выпадают потрясающие мерцающие золотые чешуйки", kk: "Салқындағанда алтын қабыршақтар жауып, әдемі көрініс береді", en: "Spectacular golden crystalline shower forms upon cooling" },
    application: { ru: "Классический демонстрационный эксперимент в химии", kk: "Химиядағы ең танымал көрнекі тәжірибе", en: "Iconic visual demonstration in chemistry education" }
  },
  {
    id: "cu_oh2",
    title: { ru: "Качественная реакция на катионы меди (Cu²⁺)", kk: "Мыс (II) катионына сапалық реакция", en: "Qualitative Test for Copper(II) (Cu²⁺)" },
    cationId: "Cu",
    anionId: "OH",
    productFormula: "Cu(OH)₂",
    precipitateColorHex: "#38bdf8",
    colorNote: { ru: "Ярко-голубой студенистый осадок, чернеющий при нагревании", kk: "Қыздырғанда қараятын ашық-көк сірнелі тұнба", en: "Vibrant cyan-blue gelatinous precipitate" },
    molecularEquation: "CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄",
    netIonicEquation: "Cu²⁺ + 2OH⁻ → Cu(OH)₂↓",
    observation: { ru: "Лазурно-голубой осадок. При нагревании разлагается на черный оксид меди: Cu(OH)₂ → CuO↓ + H₂O", kk: "Қыздырғанда қара оксидке ыдырайды", en: "Cyan gel forms, decomposing to black CuO on heating" },
    application: { ru: "Качественная реакция на многоатомные спирты (глюкозу) в биохимии", kk: "Глюкоза мен спирттерді сапалық анықтау", en: "Biochemical testing for glucose and polyols" }
  },
  {
    id: "fe3_oh",
    title: { ru: "Качественная реакция на железо (III) (Fe³⁺)", kk: "Темір (III) ионына сапалық реакция", en: "Qualitative Test for Iron(III) (Fe³⁺)" },
    cationId: "Fe3",
    anionId: "OH",
    productFormula: "Fe(OH)₃",
    precipitateColorHex: "#b45309",
    colorNote: { ru: "Красно-бурый осадок цвета ржавчины", kk: "Тат түстес қызыл-қоңыр тұнба", en: "Rust-red / brown amorphous precipitate" },
    molecularEquation: "FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl",
    netIonicEquation: "Fe³⁺ + 3OH⁻ → Fe(OH)₃↓",
    observation: { ru: "Выпадение хлопьевидного красно-коричневого осадка гидроксида железа", kk: "Қызыл-қоңыр ірі ұлпалы тұнба пайда болады", en: "Precipitation of voluminous red-brown ferric hydroxide flakes" },
    application: { ru: "Водоочистка (коагуляция взвесей) и анализ минеральных руд", kk: "Суды тазарту және кен құрамын талдау", en: "Water treatment and metallurgical quality testing" }
  },
  {
    id: "fe2_oh",
    title: { ru: "Качественная реакция на железо (II) (Fe²⁺)", kk: "Темір (II) ионына сапалық реакция", en: "Qualitative Test for Iron(II) (Fe²⁺)" },
    cationId: "Fe2",
    anionId: "OH",
    productFormula: "Fe(OH)₂",
    precipitateColorHex: "#4ade80",
    colorNote: { ru: "Серо-зелёный осадок, быстро буреющий на воздухе", kk: "Сұр-жасыл тұнба, ауада тез қоңырланады", en: "Dirty green precipitate oxidizing to brown" },
    molecularEquation: "FeSO₄ + 2NaOH → Fe(OH)₂↓ + Na₂SO₄",
    netIonicEquation: "Fe²⁺ + 2OH⁻ → Fe(OH)₂↓",
    observation: { ru: "Выпадает светло-зеленый осадок, окисляющийся на воздухе: 4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃↓", kk: "Ауадағы оттекпен тотығып, түсі қоңырға ауысады", en: "Pale green precipitate rapidly oxidizing to brown" },
    application: { ru: "Определение степени окисления железа в экологии и гидрохимии", kk: "Экологияда судың ластануын анықтау", en: "Environmental water testing and geochemistry" }
  },
  {
    id: "al_oh3",
    title: { ru: "Амфотерный гидроксид алюминия (Al³⁺)", kk: "Алюминийдің амфотерлі гидроксиді (Al³⁺)", en: "Amphoteric Aluminum Hydroxide (Al³⁺)" },
    cationId: "Al",
    anionId: "OH",
    productFormula: "Al(OH)₃",
    precipitateColorHex: "#f1f5f9",
    colorNote: { ru: "Белый студенистый осадок, растворимый в избытке щелочи и кислотах", kk: "Қышқыл мен сілтінің артық мөлшерінде ериді", en: "White gelatinous amphoteric precipitate" },
    molecularEquation: "AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl; Al(OH)₃ + NaOH → Na[Al(OH)₄]",
    netIonicEquation: "Al³⁺ + 3OH⁻ → Al(OH)₃↓; Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻",
    observation: { ru: "Осадок полностью растворяется в избытке щелочи с образованием прозрачного тетрагидроксоалюмината", kk: "Сілтінің артық мөлшерінде еріп, мөлдір кешенді тұз түзеді", en: "Gel dissolves in excess base forming clear soluble aluminate" },
    application: { ru: "Промышленное получение алюминия высокой чистоты (способ Байера)", kk: "Алюминий өндірісіндегі Байер әдісі", en: "Industrial Bayer bauxite refining process" }
  },
  {
    id: "co3_h",
    title: { ru: "Качественная реакция на карбонаты (CO₃²⁻)", kk: "Карбонат иондарына сапалық реакция", en: "Qualitative Test for Carbonates (CO₃²⁻)" },
    cationId: "H",
    anionId: "CO3",
    productFormula: "CO₂↑ + H₂O",
    precipitateColorHex: "#38bdf8",
    colorNote: { ru: "Бурное выделение углекислого газа («вскипание»)", kk: "Көмірқышқыл газының қарқынды бөлінуі", en: "Vigorous effervescence of carbon dioxide gas" },
    molecularEquation: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑",
    netIonicEquation: "CO₃²⁻ + 2H⁺ → H₂O + CO₂↑",
    observation: { ru: "Шипение и бурное выделение газа CO₂, вызывающего помутнение известковой воды", kk: "Әк суын лайландыратын CO₂ газы бөлінеді", en: "Vigorous bubbling, gas turns limewater milky by forming CaCO₃↓" },
    application: { ru: "Диагностика карбонатных пород (мрамор, известняк) в геологии", kk: "Геологияда әктас пен мәрмәрді анықтау", en: "Carbonate mineral identification in geology" }
  },
  {
    id: "pb_s",
    title: { ru: "Качественная реакция на сульфиды (S²⁻)", kk: "Сульфид иондарына сапалық реакция", en: "Qualitative Test for Sulfides (S²⁻)" },
    cationId: "Pb",
    anionId: "S",
    productFormula: "PbS",
    precipitateColorHex: "#0f172a",
    colorNote: { ru: "Чёрный блестящий нерастворимый осадок", kk: "Қара жылтыр тұнба", en: "Dense black precipitate" },
    molecularEquation: "Pb(CH₃COO)₂ + Na₂S → PbS↓ + 2CH₃COONa",
    netIonicEquation: "Pb²⁺ + S²⁻ → PbS↓",
    observation: { ru: "Мгновенное выпадение черного осадка или потемнение индикаторной свинцовой бумаги", kk: "Свинцовый қағаз лезде қараяды", en: "Instant pitch-black coloration upon trace contact with sulfide" },
    application: { ru: "Датчики утечки токсичного сероводорода на производстве", kk: "Улы H₂S газының ағуын анықтау датчиктері", en: "Hazardous gas safety detection" }
  },
  {
    id: "nh4_oh",
    title: { ru: "Качественная реакция на катион аммония (NH₄⁺)", kk: "Аммоний катионына сапалық реакция", en: "Qualitative Test for Ammonium (NH₄⁺)" },
    cationId: "NH4",
    anionId: "OH",
    productFormula: "NH₃↑ + H₂O",
    precipitateColorHex: "#06b6d4",
    colorNote: { ru: "Выделение газа с резким запахом аммиака", kk: "Өткір иісті аммиак газы бөлінеді", en: "Evolution of pungent ammonia gas" },
    molecularEquation: "NH₄Cl + NaOH → NaCl + H₂O + NH₃↑",
    netIonicEquation: "NH₄⁺ + OH⁻ → NH₃↑ + H₂O",
    observation: { ru: "Выделяющийся газ окрашивает влажную фенолфталеиновую бумагу в малиновый цвет", kk: "Бөлінген аммиак фенолфталеинді таңқурай түске бояйды", en: "Gas turns moist red litmus blue and phenolphthalein magenta" },
    application: { ru: "Анализ азотных удобрений в агрономии и контроль чистоты солей", kk: "Азотты тыңайтқыштар сапасын талдау", en: "Agricultural fertilizer quality verification" }
  }
];

export const SOLUBILITY_MATRIX: Record<string, Record<string, SolubilityCell>> = {
  "H": {
    "OH": { cationId: "H", anionId: "OH", formula: "H₂O", formulaAscii: "H2O", status: "soluble", shortCode: "Р", description: { ru: "Вода — универсальный растворитель", kk: "Су — әмбебап еріткіш", en: "Water universal solvent" }, atoms: { H: 2, O: 1 } },
    "F": { cationId: "H", anionId: "F", formula: "HF", formulaAscii: "HF", status: "soluble", shortCode: "Р", description: { ru: "Плавиковая кислота", kk: "Балқытқыш қышқыл", en: "Hydrofluoric acid" }, atoms: { H: 1, F: 1 } },
    "Cl": { cationId: "H", anionId: "Cl", formula: "HCl", formulaAscii: "HCl", status: "soluble", shortCode: "Р", description: { ru: "Соляная кислота (сильная)", kk: "Тұз қышқылы", en: "Hydrochloric acid" }, atoms: { H: 1, Cl: 1 } },
    "Br": { cationId: "H", anionId: "Br", formula: "HBr", formulaAscii: "HBr", status: "soluble", shortCode: "Р", description: { ru: "Бромоводородная кислота", kk: "Бромсутек қышқылы", en: "Hydrobromic acid" }, atoms: { H: 1, Br: 1 } },
    "I": { cationId: "H", anionId: "I", formula: "HI", formulaAscii: "HI", status: "soluble", shortCode: "Р", description: { ru: "Иодоводородная кислота", kk: "Иодсутек қышқылы", en: "Hydroiodic acid" }, atoms: { H: 1, I: 1 } },
    "S": { cationId: "H", anionId: "S", formula: "H₂S", formulaAscii: "H2S", status: "gas", shortCode: "Г", description: { ru: "Сероводород (газ с запахом тухлых яиц)", kk: "Күкіртсутек газы", en: "Hydrogen sulfide gas" }, atoms: { H: 2, S: 1 } },
    "SO3": { cationId: "H", anionId: "SO3", formula: "H₂SO₃", formulaAscii: "H2SO3", status: "decomposes", shortCode: "—", description: { ru: "Сернистая кислота (неустойчива, SO₂↑ + H₂O)", kk: "Күкіртті қышқыл", en: "Sulfurous acid" }, atoms: { H: 2, S: 1, O: 3 } },
    "SO4": { cationId: "H", anionId: "SO4", formula: "H₂SO₄", formulaAscii: "H2SO4", status: "soluble", shortCode: "Р", description: { ru: "Серная кислота (сильнейшая двухосновная)", kk: "Күкірт қышқылы", en: "Sulfuric acid" }, atoms: { H: 2, S: 1, O: 4 } },
    "NO2": { cationId: "H", anionId: "NO2", formula: "HNO₂", formulaAscii: "HNO2", status: "soluble", shortCode: "Р", description: { ru: "Азотистая кислота (слабая)", kk: "Азотты қышқыл", en: "Nitrous acid" }, atoms: { H: 1, N: 1, O: 2 } },
    "NO3": { cationId: "H", anionId: "NO3", formula: "HNO₃", formulaAscii: "HNO3", status: "soluble", shortCode: "Р", description: { ru: "Азотная кислота (сильный окислитель)", kk: "Азот қышқылы", en: "Nitric acid" }, atoms: { H: 1, N: 1, O: 3 } },
    "PO4": { cationId: "H", anionId: "PO4", formula: "H₃PO₄", formulaAscii: "H3PO4", status: "soluble", shortCode: "Р", description: { ru: "Ортофосфорная кислота", kk: "Ортофосфор қышқылы", en: "Phosphoric acid" }, atoms: { H: 3, P: 1, O: 4 } },
    "CO3": { cationId: "H", anionId: "CO3", formula: "H₂CO₃", formulaAscii: "H2CO3", status: "gas", shortCode: "Г", description: { ru: "Угольная кислота (разлагается на CO₂↑ + H₂O)", kk: "Көмір қышқылы", en: "Carbonic acid" }, atoms: { H: 2, C: 1, O: 3 }, isImportantQualitativeReaction: true, molecularEquation: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑", netIonicEquation: "CO₃²⁻ + 2H⁺ → H₂O + CO₂↑" },
    "SiO3": { cationId: "H", anionId: "SiO3", formula: "H₂SiO₃", formulaAscii: "H2SiO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Студенистый белый осадок", kk: "Сірне тәрізді ақ тұнба", en: "Gelatinous white precipitate" }, precipitateColorHex: "#f8fafc", description: { ru: "Кремниевая кислота (единственная нерастворимая)", kk: "Кремний қышқылы", en: "Silicic acid" } },
    "CH3COO": { cationId: "H", anionId: "CH3COO", formula: "CH₃COOH", formulaAscii: "CH3COOH", status: "soluble", shortCode: "Р", description: { ru: "Уксусная кислота", kk: "Сірке қышқылы", en: "Acetic acid" }, atoms: { C: 2, H: 4, O: 2 } }
  },
  "NH4": {
    "OH": { cationId: "NH4", anionId: "OH", formula: "NH₄OH", formulaAscii: "NH4OH", status: "gas", shortCode: "Г", description: { ru: "Гидрат аммиака (разлагается на NH₃↑ + H₂O)", kk: "Аммиак гидраты", en: "Ammonium hydroxide" }, isImportantQualitativeReaction: true, molecularEquation: "NH₄Cl + NaOH → NaCl + H₂O + NH₃↑", netIonicEquation: "NH₄⁺ + OH⁻ → NH₃↑ + H₂O" },
    "F": { cationId: "NH4", anionId: "F", formula: "NH₄F", formulaAscii: "NH4F", status: "soluble", shortCode: "Р" },
    "Cl": { cationId: "NH4", anionId: "Cl", formula: "NH₄Cl", formulaAscii: "NH4Cl", status: "soluble", shortCode: "Р", description: { ru: "Нашатырь (хлорид аммония)", kk: "Мүсәтір", en: "Sal ammoniac" } },
    "Br": { cationId: "NH4", anionId: "Br", formula: "NH₄Br", formulaAscii: "NH4Br", status: "soluble", shortCode: "Р" },
    "I": { cationId: "NH4", anionId: "I", formula: "NH₄I", formulaAscii: "NH4I", status: "soluble", shortCode: "Р" },
    "S": { cationId: "NH4", anionId: "S", formula: "(NH₄)₂S", formulaAscii: "(NH4)2S", status: "soluble", shortCode: "Р" },
    "SO3": { cationId: "NH4", anionId: "SO3", formula: "(NH₄)₂SO₃", formulaAscii: "(NH4)2SO3", status: "soluble", shortCode: "Р" },
    "SO4": { cationId: "NH4", anionId: "SO4", formula: "(NH₄)₂SO₄", formulaAscii: "(NH4)2SO4", status: "soluble", shortCode: "Р", description: { ru: "Сульфат аммония (удобрение)", kk: "Аммоний сульфаты", en: "Ammonium sulfate" } },
    "NO2": { cationId: "NH4", anionId: "NO2", formula: "NH₄NO₂", formulaAscii: "NH4NO2", status: "soluble", shortCode: "Р" },
    "NO3": { cationId: "NH4", anionId: "NO3", formula: "NH₄NO₃", formulaAscii: "NH4NO3", status: "soluble", shortCode: "Р", description: { ru: "Аммиачная селитра", kk: "Аммиак селитрасы", en: "Ammonium nitrate" } },
    "PO4": { cationId: "NH4", anionId: "PO4", formula: "(NH₄)₃PO₄", formulaAscii: "(NH4)3PO4", status: "soluble", shortCode: "Р" },
    "CO3": { cationId: "NH4", anionId: "CO3", formula: "(NH₄)₂CO₃", formulaAscii: "(NH4)2CO3", status: "soluble", shortCode: "Р" },
    "SiO3": { cationId: "NH4", anionId: "SiO3", formula: "(NH₄)₂SiO₃", formulaAscii: "(NH4)2SiO3", status: "soluble", shortCode: "Р" },
    "CH3COO": { cationId: "NH4", anionId: "CH3COO", formula: "CH₃COONH₄", formulaAscii: "CH3COONH4", status: "soluble", shortCode: "Р" }
  },
  "K": {
    "OH": { cationId: "K", anionId: "OH", formula: "KOH", formulaAscii: "KOH", status: "soluble", shortCode: "Р", description: { ru: "Едкое кали (сильная щёлочь)", kk: "Күйдіргіш калий", en: "Potassium hydroxide" } },
    "F": { cationId: "K", anionId: "F", formula: "KF", formulaAscii: "KF", status: "soluble", shortCode: "Р" },
    "Cl": { cationId: "K", anionId: "Cl", formula: "KCl", formulaAscii: "KCl", status: "soluble", shortCode: "Р", description: { ru: "Хлорид калия (сильвинит)", kk: "Калий хлориді", en: "Potassium chloride" } },
    "Br": { cationId: "K", anionId: "Br", formula: "KBr", formulaAscii: "KBr", status: "soluble", shortCode: "Р" },
    "I": { cationId: "K", anionId: "I", formula: "KI", formulaAscii: "KI", status: "soluble", shortCode: "Р" },
    "S": { cationId: "K", anionId: "S", formula: "K₂S", formulaAscii: "K2S", status: "soluble", shortCode: "Р" },
    "SO3": { cationId: "K", anionId: "SO3", formula: "K₂SO₃", formulaAscii: "K2SO3", status: "soluble", shortCode: "Р" },
    "SO4": { cationId: "K", anionId: "SO4", formula: "K₂SO₄", formulaAscii: "K2SO4", status: "soluble", shortCode: "Р" },
    "NO2": { cationId: "K", anionId: "NO2", formula: "KNO₂", formulaAscii: "KNO2", status: "soluble", shortCode: "Р" },
    "NO3": { cationId: "K", anionId: "NO3", formula: "KNO₃", formulaAscii: "KNO3", status: "soluble", shortCode: "Р", description: { ru: "Калийная селитра", kk: "Калий селитрасы", en: "Potassium nitrate" } },
    "PO4": { cationId: "K", anionId: "PO4", formula: "K₃PO₄", formulaAscii: "K3PO4", status: "soluble", shortCode: "Р" },
    "CO3": { cationId: "K", anionId: "CO3", formula: "K₂CO₃", formulaAscii: "K2CO3", status: "soluble", shortCode: "Р", description: { ru: "Поташ (карбонат калия)", kk: "Поташ", en: "Potash" } },
    "SiO3": { cationId: "K", anionId: "SiO3", formula: "K₂SiO₃", formulaAscii: "K2SiO3", status: "soluble", shortCode: "Р", description: { ru: "Жидкое калиевое стекло", kk: "Сұйық калий шынысы", en: "Potassium water glass" } },
    "CH3COO": { cationId: "K", anionId: "CH3COO", formula: "CH₃COOK", formulaAscii: "CH3COOK", status: "soluble", shortCode: "Р" }
  },
  "Na": {
    "OH": { cationId: "Na", anionId: "OH", formula: "NaOH", formulaAscii: "NaOH", status: "soluble", shortCode: "Р", description: { ru: "Едкий натр (каустик)", kk: "Күйдіргіш натрий", en: "Sodium hydroxide" }, atoms: { Na: 1, O: 1, H: 1 } },
    "F": { cationId: "Na", anionId: "F", formula: "NaF", formulaAscii: "NaF", status: "soluble", shortCode: "Р" },
    "Cl": { cationId: "Na", anionId: "Cl", formula: "NaCl", formulaAscii: "NaCl", status: "soluble", shortCode: "Р", description: { ru: "Поваренная соль", kk: "Ас тұзы", en: "Table salt" }, atoms: { Na: 1, Cl: 1 } },
    "Br": { cationId: "Na", anionId: "Br", formula: "NaBr", formulaAscii: "NaBr", status: "soluble", shortCode: "Р" },
    "I": { cationId: "Na", anionId: "I", formula: "NaI", formulaAscii: "NaI", status: "soluble", shortCode: "Р" },
    "S": { cationId: "Na", anionId: "S", formula: "Na₂S", formulaAscii: "Na2S", status: "soluble", shortCode: "Р" },
    "SO3": { cationId: "Na", anionId: "SO3", formula: "Na₂SO₃", formulaAscii: "Na2SO3", status: "soluble", shortCode: "Р" },
    "SO4": { cationId: "Na", anionId: "SO4", formula: "Na₂SO₄", formulaAscii: "Na2SO4", status: "soluble", shortCode: "Р", description: { ru: "Глауберова соль", kk: "Глаубер тұзы", en: "Glauber's salt" } },
    "NO2": { cationId: "Na", anionId: "NO2", formula: "NaNO₂", formulaAscii: "NaNO2", status: "soluble", shortCode: "Р" },
    "NO3": { cationId: "Na", anionId: "NO3", formula: "NaNO₃", formulaAscii: "NaNO3", status: "soluble", shortCode: "Р", description: { ru: "Чилийская селитра", kk: "Чили селитрасы", en: "Chile saltpeter" } },
    "PO4": { cationId: "Na", anionId: "PO4", formula: "Na₃PO₄", formulaAscii: "Na3PO4", status: "soluble", shortCode: "Р" },
    "CO3": { cationId: "Na", anionId: "CO3", formula: "Na₂CO₃", formulaAscii: "Na2CO3", status: "soluble", shortCode: "Р", description: { ru: "Кальцинированная сода", kk: "Кальцийленген сода", en: "Washing soda" } },
    "SiO3": { cationId: "Na", anionId: "SiO3", formula: "Na₂SiO₃", formulaAscii: "Na2SiO3", status: "soluble", shortCode: "Р", description: { ru: "Жидкое стекло / силикатный клей", kk: "Силикат желімі", en: "Sodium water glass" } },
    "CH3COO": { cationId: "Na", anionId: "CH3COO", formula: "CH₃COONa", formulaAscii: "CH3COONa", status: "soluble", shortCode: "Р", description: { ru: "Ацетат натрия", kk: "Натрий ацетаты", en: "Sodium acetate" } }
  },
  "Li": {
    "OH": { cationId: "Li", anionId: "OH", formula: "LiOH", formulaAscii: "LiOH", status: "soluble", shortCode: "Р" },
    "F": { cationId: "Li", anionId: "F", formula: "LiF", formulaAscii: "LiF", status: "slightly-soluble", shortCode: "М" },
    "Cl": { cationId: "Li", anionId: "Cl", formula: "LiCl", formulaAscii: "LiCl", status: "soluble", shortCode: "Р" },
    "Br": { cationId: "Li", anionId: "Br", formula: "LiBr", formulaAscii: "LiBr", status: "soluble", shortCode: "Р" },
    "I": { cationId: "Li", anionId: "I", formula: "LiI", formulaAscii: "LiI", status: "soluble", shortCode: "Р" },
    "S": { cationId: "Li", anionId: "S", formula: "Li₂S", formulaAscii: "Li2S", status: "soluble", shortCode: "Р" },
    "SO3": { cationId: "Li", anionId: "SO3", formula: "Li₂SO₃", formulaAscii: "Li2SO3", status: "soluble", shortCode: "Р" },
    "SO4": { cationId: "Li", anionId: "SO4", formula: "Li₂SO₄", formulaAscii: "Li2SO4", status: "soluble", shortCode: "Р" },
    "NO2": { cationId: "Li", anionId: "NO2", formula: "LiNO₂", formulaAscii: "LiNO2", status: "soluble", shortCode: "Р" },
    "NO3": { cationId: "Li", anionId: "NO3", formula: "LiNO₃", formulaAscii: "LiNO3", status: "soluble", shortCode: "Р" },
    "PO4": { cationId: "Li", anionId: "PO4", formula: "Li₃PO₄", formulaAscii: "Li3PO4", status: "slightly-soluble", shortCode: "М" },
    "CO3": { cationId: "Li", anionId: "CO3", formula: "Li₂CO₃", formulaAscii: "Li2CO3", status: "slightly-soluble", shortCode: "М" },
    "SiO3": { cationId: "Li", anionId: "SiO3", formula: "Li₂SiO₃", formulaAscii: "Li2SiO3", status: "slightly-soluble", shortCode: "М" },
    "CH3COO": { cationId: "Li", anionId: "CH3COO", formula: "CH₃COOLi", formulaAscii: "CH3COOLi", status: "soluble", shortCode: "Р" }
  },
  "Ag": {
    "OH": { cationId: "Ag", anionId: "OH", formula: "AgOH", formulaAscii: "AgOH", status: "decomposes", shortCode: "—", colorNote: { ru: "Разлагается на Ag₂O↓ (бурый)", kk: "Ag₂O қоңыр тұнбаға ыдырайды", en: "Decomposes to brown Ag₂O" }, description: { ru: "2AgOH → Ag₂O↓ (бурый) + H₂O", kk: "2AgOH → Ag₂O + H₂O", en: "Instantly hydrolyzes to brown Ag₂O" } },
    "F": { cationId: "Ag", anionId: "F", formula: "AgF", formulaAscii: "AgF", status: "soluble", shortCode: "Р" },
    "Cl": { cationId: "Ag", anionId: "Cl", formula: "AgCl", formulaAscii: "AgCl", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый творожистый осадок", kk: "Ақ ірімшік тәрізді тұнба", en: "White curdy precipitate" }, precipitateColorHex: "#ffffff", isImportantQualitativeReaction: true, description: { ru: "Качественная реакция на хлориды: Ag⁺ + Cl⁻ → AgCl↓", kk: "Хлоридтерге сапалық реакция", en: "Analytical test for Cl⁻" }, molecularEquation: "AgNO₃ + NaCl → AgCl↓ + NaNO₃", netIonicEquation: "Ag⁺ + Cl⁻ → AgCl↓" },
    "Br": { cationId: "Ag", anionId: "Br", formula: "AgBr", formulaAscii: "AgBr", status: "insoluble", shortCode: "Н", colorNote: { ru: "Светло-жёлтый осадок", kk: "Ашық-сары тұнба", en: "Pale yellow precipitate" }, precipitateColorHex: "#fef08a", isImportantQualitativeReaction: true, description: { ru: "Качественная реакция на бромиды: Ag⁺ + Br⁻ → AgBr↓", kk: "Бромидтерге сапалық реакция", en: "Analytical test for Br⁻" }, molecularEquation: "AgNO₃ + NaBr → AgBr↓ + NaNO₃", netIonicEquation: "Ag⁺ + Br⁻ → AgBr↓" },
    "I": { cationId: "Ag", anionId: "I", formula: "AgI", formulaAscii: "AgI", status: "insoluble", shortCode: "Н", colorNote: { ru: "Насыщенно-жёлтый осадок", kk: "Қанық сары тұнба", en: "Vibrant yellow precipitate" }, precipitateColorHex: "#eab308", isImportantQualitativeReaction: true, description: { ru: "Качественная реакция на иодиды: Ag⁺ + I⁻ → AgI↓", kk: "Иодидтерге сапалық реакция", en: "Analytical test for I⁻" }, molecularEquation: "AgNO₃ + KI → AgI↓ + KNO₃", netIonicEquation: "Ag⁺ + I⁻ → AgI↓" },
    "S": { cationId: "Ag", anionId: "S", formula: "Ag₂S", formulaAscii: "Ag2S", status: "insoluble", shortCode: "Н", colorNote: { ru: "Чёрный осадок (потемнение серебра)", kk: "Қара тұнба (күмістің қарайып кетуі)", en: "Black precipitate" }, precipitateColorHex: "#1e293b" },
    "SO3": { cationId: "Ag", anionId: "SO3", formula: "Ag₂SO₃", formulaAscii: "Ag2SO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок", kk: "Ақ тұнба", en: "White precipitate" }, precipitateColorHex: "#f8fafc" },
    "SO4": { cationId: "Ag", anionId: "SO4", formula: "Ag₂SO₄", formulaAscii: "Ag2SO4", status: "slightly-soluble", shortCode: "М", colorNote: { ru: "Белый осадок", kk: "Ақ тұнба", en: "White precipitate" } },
    "NO2": { cationId: "Ag", anionId: "NO2", formula: "AgNO₂", formulaAscii: "AgNO2", status: "slightly-soluble", shortCode: "М" },
    "NO3": { cationId: "Ag", anionId: "NO3", formula: "AgNO₃", formulaAscii: "AgNO3", status: "soluble", shortCode: "Р", description: { ru: "Ляпис (нитрат серебра) — главный реактив", kk: "Күміс нитраты — басты реактив", en: "Silver nitrate analytical reagent" } },
    "PO4": { cationId: "Ag", anionId: "PO4", formula: "Ag₃PO₄", formulaAscii: "Ag3PO4", status: "insoluble", shortCode: "Н", colorNote: { ru: "Ярко-жёлтый осадок", kk: "Ашық сары тұнба", en: "Bright yellow precipitate" }, precipitateColorHex: "#facc15", isImportantQualitativeReaction: true, description: { ru: "Качественная реакция на фосфаты", kk: "Фосфаттарға сапалық реакция", en: "Phosphate qualitative test" } },
    "CO3": { cationId: "Ag", anionId: "CO3", formula: "Ag₂CO₃", formulaAscii: "Ag2CO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Желтоватый осадок", kk: "Сарғыш тұнба", en: "Yellowish precipitate" }, precipitateColorHex: "#fef9c3" },
    "SiO3": { cationId: "Ag", anionId: "SiO3", formula: "Ag₂SiO₃", formulaAscii: "Ag2SiO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Жёлтый осадок", kk: "Сары тұнба", en: "Yellow precipitate" }, precipitateColorHex: "#fde047" },
    "CH3COO": { cationId: "Ag", anionId: "CH3COO", formula: "CH₃COOAg", formulaAscii: "CH3COOAg", status: "soluble", shortCode: "Р" }
  },
  "Mg": {
    "OH": { cationId: "Mg", anionId: "OH", formula: "Mg(OH)₂", formulaAscii: "Mg(OH)2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый студенистый осадок", kk: "Ақ тұнба", en: "White precipitate" }, precipitateColorHex: "#f8fafc" },
    "F": { cationId: "Mg", anionId: "F", formula: "MgF₂", formulaAscii: "MgF2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок", kk: "Ақ тұнба", en: "White precipitate" } },
    "Cl": { cationId: "Mg", anionId: "Cl", formula: "MgCl₂", formulaAscii: "MgCl2", status: "soluble", shortCode: "Р", description: { ru: "Хлорид магния (бишофит)", kk: "Магний хлориді", en: "Magnesium chloride" } },
    "Br": { cationId: "Mg", anionId: "Br", formula: "MgBr₂", formulaAscii: "MgBr2", status: "soluble", shortCode: "Р" },
    "I": { cationId: "Mg", anionId: "I", formula: "MgI₂", formulaAscii: "MgI2", status: "soluble", shortCode: "Р" },
    "S": { cationId: "Mg", anionId: "S", formula: "MgS", formulaAscii: "MgS", status: "decomposes", shortCode: "—" },
    "SO3": { cationId: "Mg", anionId: "SO3", formula: "MgSO₃", formulaAscii: "MgSO3", status: "slightly-soluble", shortCode: "М" },
    "SO4": { cationId: "Mg", anionId: "SO4", formula: "MgSO₄", formulaAscii: "MgSO4", status: "soluble", shortCode: "Р", description: { ru: "Английская соль (эпсомит)", kk: "Ағылшын тұзы", en: "Epsom salt" } },
    "NO2": { cationId: "Mg", anionId: "NO2", formula: "Mg(NO₂)₂", formulaAscii: "Mg(NO2)2", status: "soluble", shortCode: "Р" },
    "NO3": { cationId: "Mg", anionId: "NO3", formula: "Mg(NO₃)₂", formulaAscii: "Mg(NO3)2", status: "soluble", shortCode: "Р" },
    "PO4": { cationId: "Mg", anionId: "PO4", formula: "Mg₃(PO₄)₂", formulaAscii: "Mg3(PO4)2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок", kk: "Ақ тұнба", en: "White precipitate" }, precipitateColorHex: "#f8fafc" },
    "CO3": { cationId: "Mg", anionId: "CO3", formula: "MgCO₃", formulaAscii: "MgCO3", status: "slightly-soluble", shortCode: "М", colorNote: { ru: "Магнезит", kk: "Магнезит", en: "Magnesite" } },
    "SiO3": { cationId: "Mg", anionId: "SiO3", formula: "MgSiO₃", formulaAscii: "MgSiO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый тальк", kk: "Тальк", en: "Talc" }, precipitateColorHex: "#f8fafc" },
    "CH3COO": { cationId: "Mg", anionId: "CH3COO", formula: "Mg(CH₃COO)₂", formulaAscii: "Mg(CH3COO)2", status: "soluble", shortCode: "Р" }
  },
  "Ca": {
    "OH": { cationId: "Ca", anionId: "OH", formula: "Ca(OH)₂", formulaAscii: "Ca(OH)2", status: "slightly-soluble", shortCode: "М", colorNote: { ru: "Известковая вода (раствор) / Известковое молоко", kk: "Әк суы / Әк сүті", en: "Limewater solution / Slaked lime" }, description: { ru: "Гашёная известь", kk: "Сөндірілген әк", en: "Calcium hydroxide" } },
    "F": { cationId: "Ca", anionId: "F", formula: "CaF₂", formulaAscii: "CaF2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый минерал флюорит", kk: "Флюорит минералы", en: "Fluorite mineral" }, precipitateColorHex: "#f8fafc" },
    "Cl": { cationId: "Ca", anionId: "Cl", formula: "CaCl₂", formulaAscii: "CaCl2", status: "soluble", shortCode: "Р", description: { ru: "Хлорид кальция (осушитель)", kk: "Кальций хлориді", en: "Calcium chloride" } },
    "Br": { cationId: "Ca", anionId: "Br", formula: "CaBr₂", formulaAscii: "CaBr2", status: "soluble", shortCode: "Р" },
    "I": { cationId: "Ca", anionId: "I", formula: "CaI₂", formulaAscii: "CaI2", status: "soluble", shortCode: "Р" },
    "S": { cationId: "Ca", anionId: "S", formula: "CaS", formulaAscii: "CaS", status: "decomposes", shortCode: "—" },
    "SO3": { cationId: "Ca", anionId: "SO3", formula: "CaSO₃", formulaAscii: "CaSO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок", kk: "Ақ тұнба", en: "White precipitate" }, precipitateColorHex: "#f8fafc" },
    "SO4": { cationId: "Ca", anionId: "SO4", formula: "CaSO₄", formulaAscii: "CaSO4", status: "slightly-soluble", shortCode: "М", colorNote: { ru: "Гипс / Алебастр (CaSO₄·2H₂O)", kk: "Гипс", en: "Gypsum mineral" } },
    "NO2": { cationId: "Ca", anionId: "NO2", formula: "Ca(NO₂)₂", formulaAscii: "Ca(NO2)2", status: "soluble", shortCode: "Р" },
    "NO3": { cationId: "Ca", anionId: "NO3", formula: "Ca(NO₃)₂", formulaAscii: "Ca(NO3)2", status: "soluble", shortCode: "Р", description: { ru: "Кальциевая селитра", kk: "Кальций селитрасы", en: "Norwegian saltpeter" } },
    "PO4": { cationId: "Ca", anionId: "PO4", formula: "Ca₃(PO₄)₂", formulaAscii: "Ca3(PO4)2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Основа костей и фосфоритов", kk: "Сүйек пен фосфориттер негізі", en: "Apatite bone mineral" }, precipitateColorHex: "#f8fafc" },
    "CO3": { cationId: "Ca", anionId: "CO3", formula: "CaCO₃", formulaAscii: "CaCO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок (мел, мрамор, известняк)", kk: "Бор, әктас, мәрмәр", en: "Chalk, limestone, marble" }, precipitateColorHex: "#ffffff", isImportantQualitativeReaction: true, description: { ru: "Помутнение известковой воды: Ca(OH)₂ + CO₂ → CaCO₃↓", kk: "Әк суының лайлануы", en: "Limewater carbon dioxide test" }, molecularEquation: "Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O", netIonicEquation: "Ca²⁺ + 2OH⁻ + CO₂ → CaCO₃↓ + H₂O" },
    "SiO3": { cationId: "Ca", anionId: "SiO3", formula: "CaSiO₃", formulaAscii: "CaSiO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Минерал волластонит", kk: "Волластонит", en: "Wollastonite" }, precipitateColorHex: "#f8fafc" },
    "CH3COO": { cationId: "Ca", anionId: "CH3COO", formula: "Ca(CH₃COO)₂", formulaAscii: "Ca(CH3COO)2", status: "soluble", shortCode: "Р" }
  },
  "Ba": {
    "OH": { cationId: "Ba", anionId: "OH", formula: "Ba(OH)₂", formulaAscii: "Ba(OH)2", status: "soluble", shortCode: "Р", description: { ru: "Баритовая вода (сильная щёлочь)", kk: "Барий гидроксиді (сілті)", en: "Baryta water strong alkali" } },
    "F": { cationId: "Ba", anionId: "F", formula: "BaF₂", formulaAscii: "BaF2", status: "slightly-soluble", shortCode: "М" },
    "Cl": { cationId: "Ba", anionId: "Cl", formula: "BaCl₂", formulaAscii: "BaCl2", status: "soluble", shortCode: "Р", description: { ru: "Хлорид бария (аналитический реактив на сульфаты)", kk: "Барий хлориді", en: "Barium chloride reagent" } },
    "Br": { cationId: "Ba", anionId: "Br", formula: "BaBr₂", formulaAscii: "BaBr2", status: "soluble", shortCode: "Р" },
    "I": { cationId: "Ba", anionId: "I", formula: "BaI₂", formulaAscii: "BaI2", status: "soluble", shortCode: "Р" },
    "S": { cationId: "Ba", anionId: "S", formula: "BaS", formulaAscii: "BaS", status: "soluble", shortCode: "Р" },
    "SO3": { cationId: "Ba", anionId: "SO3", formula: "BaSO₃", formulaAscii: "BaSO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок (растворим в кислотах)", kk: "Ақ тұнба", en: "White precipitate" }, precipitateColorHex: "#f8fafc" },
    "SO4": { cationId: "Ba", anionId: "SO4", formula: "BaSO₄", formulaAscii: "BaSO4", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый мелкокристаллический осадок (не растворим в кислотах)", kk: "Қышқылдарда ерімейтін ақ тұнба", en: "Heavy white acid-insoluble precipitate" }, precipitateColorHex: "#ffffff", isImportantQualitativeReaction: true, description: { ru: "Главная качественная реакция на сульфаты: Ba²⁺ + SO₄²⁻ → BaSO₄↓", kk: "Сульфаттарға сапалық реакция", en: "Definitive sulfate qualitative test" }, molecularEquation: "BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl", netIonicEquation: "Ba²⁺ + SO₄²⁻ → BaSO₄↓" },
    "NO2": { cationId: "Ba", anionId: "NO2", formula: "Ba(NO₂)₂", formulaAscii: "Ba(NO2)2", status: "soluble", shortCode: "Р" },
    "NO3": { cationId: "Ba", anionId: "NO3", formula: "Ba(NO₃)₂", formulaAscii: "Ba(NO3)2", status: "soluble", shortCode: "Р" },
    "PO4": { cationId: "Ba", anionId: "PO4", formula: "Ba₃(PO₄)₂", formulaAscii: "Ba3(PO4)2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок", kk: "Ақ тұнба", en: "White precipitate" }, precipitateColorHex: "#f8fafc" },
    "CO3": { cationId: "Ba", anionId: "CO3", formula: "BaCO₃", formulaAscii: "BaCO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок минерала витерита", kk: "Витерит ақ тұнбасы", en: "Witherite white precipitate" }, precipitateColorHex: "#f8fafc" },
    "SiO3": { cationId: "Ba", anionId: "SiO3", formula: "BaSiO₃", formulaAscii: "BaSiO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок", kk: "Ақ тұнба", en: "White precipitate" }, precipitateColorHex: "#f8fafc" },
    "CH3COO": { cationId: "Ba", anionId: "CH3COO", formula: "Ba(CH₃COO)₂", formulaAscii: "Ba(CH3COO)2", status: "soluble", shortCode: "Р" }
  },
  "Zn": {
    "OH": { cationId: "Zn", anionId: "OH", formula: "Zn(OH)₂", formulaAscii: "Zn(OH)2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый амфотерный студенистый осадок", kk: "Ақ амфотерлі тұнба", en: "White amphoteric gelatinous precipitate" }, precipitateColorHex: "#f8fafc", isImportantQualitativeReaction: true, description: { ru: "Растворим в кислотах и избытке щелочи: Zn(OH)₂ + 2NaOH → Na₂[Zn(OH)₄]", kk: "Сілті артық болғанда ериді", en: "Dissolves in excess NaOH" } },
    "F": { cationId: "Zn", anionId: "F", formula: "ZnF₂", formulaAscii: "ZnF2", status: "slightly-soluble", shortCode: "М" },
    "Cl": { cationId: "Zn", anionId: "Cl", formula: "ZnCl₂", formulaAscii: "ZnCl2", status: "soluble", shortCode: "Р" },
    "Br": { cationId: "Zn", anionId: "Br", formula: "ZnBr₂", formulaAscii: "ZnBr2", status: "soluble", shortCode: "Р" },
    "I": { cationId: "Zn", anionId: "I", formula: "ZnI₂", formulaAscii: "ZnI2", status: "soluble", shortCode: "Р" },
    "S": { cationId: "Zn", anionId: "S", formula: "ZnS", formulaAscii: "ZnS", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок (сфалерит / цинковая обманка)", kk: "Ақ тұнба (сфалерит)", en: "White precipitate (sphalerite)" }, precipitateColorHex: "#f8fafc", isImportantQualitativeReaction: true },
    "SO3": { cationId: "Zn", anionId: "SO3", formula: "ZnSO₃", formulaAscii: "ZnSO3", status: "slightly-soluble", shortCode: "М" },
    "SO4": { cationId: "Zn", anionId: "SO4", formula: "ZnSO₄", formulaAscii: "ZnSO4", status: "soluble", shortCode: "Р", description: { ru: "Цинковый купорос", kk: "Мырыш купоросы", en: "White vitriol" } },
    "NO2": { cationId: "Zn", anionId: "NO2", formula: "Zn(NO₂)₂", formulaAscii: "Zn(NO2)2", status: "soluble", shortCode: "Р" },
    "NO3": { cationId: "Zn", anionId: "NO3", formula: "Zn(NO₃)₂", formulaAscii: "Zn(NO3)2", status: "soluble", shortCode: "Р" },
    "PO4": { cationId: "Zn", anionId: "PO4", formula: "Zn₃(PO₄)₂", formulaAscii: "Zn3(PO4)2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок", kk: "Ақ тұнба", en: "White precipitate" }, precipitateColorHex: "#f8fafc" },
    "CO3": { cationId: "Zn", anionId: "CO3", formula: "ZnCO₃", formulaAscii: "ZnCO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Смитсонит", kk: "Смитсонит", en: "Smithsonite" }, precipitateColorHex: "#f8fafc" },
    "SiO3": { cationId: "Zn", anionId: "SiO3", formula: "ZnSiO₃", formulaAscii: "ZnSiO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Виллемит", kk: "Виллемит", en: "Willemite" }, precipitateColorHex: "#f8fafc" },
    "CH3COO": { cationId: "Zn", anionId: "CH3COO", formula: "Zn(CH₃COO)₂", formulaAscii: "Zn(CH3COO)2", status: "soluble", shortCode: "Р" }
  },
  "Cu": {
    "OH": { cationId: "Cu", anionId: "OH", formula: "Cu(OH)₂", formulaAscii: "Cu(OH)2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Ярко-голубой студенистый осадок", kk: "Ашық-көк сірнелі тұнба", en: "Vibrant blue gelatinous precipitate" }, precipitateColorHex: "#38bdf8", isImportantQualitativeReaction: true, description: { ru: "При нагревании чернеет: Cu(OH)₂ → CuO + H₂O", kk: "Қыздырғанда қара түске ауысады", en: "Decomposes to black CuO on heating" }, molecularEquation: "CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄", netIonicEquation: "Cu²⁺ + 2OH⁻ → Cu(OH)₂↓" },
    "F": { cationId: "Cu", anionId: "F", formula: "CuF₂", formulaAscii: "CuF2", status: "soluble", shortCode: "Р" },
    "Cl": { cationId: "Cu", anionId: "Cl", formula: "CuCl₂", formulaAscii: "CuCl2", status: "soluble", shortCode: "Р", description: { ru: "Хлорид меди (зеленовато-голубой раствор)", kk: "Мыс хлориді", en: "Copper(II) chloride" } },
    "Br": { cationId: "Cu", anionId: "Br", formula: "CuBr₂", formulaAscii: "CuBr2", status: "soluble", shortCode: "Р" },
    "I": { cationId: "Cu", anionId: "I", formula: "CuI₂", formulaAscii: "CuI2", status: "decomposes", shortCode: "—", description: { ru: "Разлагается на CuI↓ и I₂", kk: "CuI және I₂-ге ыдырайды", en: "Redox decomposition to CuI + I₂" } },
    "S": { cationId: "Cu", anionId: "S", formula: "CuS", formulaAscii: "CuS", status: "insoluble", shortCode: "Н", colorNote: { ru: "Чёрный осадок (коваллин)", kk: "Қара тұнба", en: "Black covellite precipitate" }, precipitateColorHex: "#0f172a", isImportantQualitativeReaction: true },
    "SO3": { cationId: "Cu", anionId: "SO3", formula: "CuSO₃", formulaAscii: "CuSO3", status: "decomposes", shortCode: "—" },
    "SO4": { cationId: "Cu", anionId: "SO4", formula: "CuSO₄", formulaAscii: "CuSO4", status: "soluble", shortCode: "Р", description: { ru: "Медный купорос (CuSO₄·5H₂O ярко-синий кристалл)", kk: "Мыс купоросы", en: "Copper(II) sulfate blue vitriol" } },
    "NO2": { cationId: "Cu", anionId: "NO2", formula: "Cu(NO₂)₂", formulaAscii: "Cu(NO2)2", status: "soluble", shortCode: "Р" },
    "NO3": { cationId: "Cu", anionId: "NO3", formula: "Cu(NO₃)₂", formulaAscii: "Cu(NO3)2", status: "soluble", shortCode: "Р" },
    "PO4": { cationId: "Cu", anionId: "PO4", formula: "Cu₃(PO₄)₂", formulaAscii: "Cu3(PO4)2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Голубой осадок", kk: "Көк тұнба", en: "Cyan-blue precipitate" }, precipitateColorHex: "#06b6d4" },
    "CO3": { cationId: "Cu", anionId: "CO3", formula: "CuCO₃", formulaAscii: "CuCO3", status: "decomposes", shortCode: "—", description: { ru: "В воде образует основной малахит Cu₂(OH)₂CO₃↓ (зелёный)", kk: "Жасыл малахит түзіледі", en: "Hydrolyzes to green malachite" } },
    "SiO3": { cationId: "Cu", anionId: "SiO3", formula: "CuSiO₃", formulaAscii: "CuSiO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Голубоватый осадок", kk: "Көгілдір тұнба", en: "Bluish precipitate" }, precipitateColorHex: "#7dd3fc" },
    "CH3COO": { cationId: "Cu", anionId: "CH3COO", formula: "Cu(CH₃COO)₂", formulaAscii: "Cu(CH3COO)2", status: "soluble", shortCode: "Р", description: { ru: "Ярь-медянка (зелёные кристаллы)", kk: "Мыс ацетаты", en: "Verdigris acetate" } }
  },
  "Fe2": {
    "OH": { cationId: "Fe2", anionId: "OH", formula: "Fe(OH)₂", formulaAscii: "Fe(OH)2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Серо-зелёный осадок (буреет на воздухе до Fe(OH)₃)", kk: "Сұр-жасыл тұнба (ауада қоңырланады)", en: "Dirty green precipitate (oxidizes to brown)" }, precipitateColorHex: "#4ade80", isImportantQualitativeReaction: true, molecularEquation: "FeSO₄ + 2NaOH → Fe(OH)₂↓ + Na₂SO₄", netIonicEquation: "Fe²⁺ + 2OH⁻ → Fe(OH)₂↓" },
    "F": { cationId: "Fe2", anionId: "F", formula: "FeF₂", formulaAscii: "FeF2", status: "slightly-soluble", shortCode: "М" },
    "Cl": { cationId: "Fe2", anionId: "Cl", formula: "FeCl₂", formulaAscii: "FeCl2", status: "soluble", shortCode: "Р", description: { ru: "Хлорид железа (II)", kk: "Темір (II) хлориді", en: "Iron(II) chloride" } },
    "Br": { cationId: "Fe2", anionId: "Br", formula: "FeBr₂", formulaAscii: "FeBr2", status: "soluble", shortCode: "Р" },
    "I": { cationId: "Fe2", anionId: "I", formula: "FeI₂", formulaAscii: "FeI2", status: "soluble", shortCode: "Р" },
    "S": { cationId: "Fe2", anionId: "S", formula: "FeS", formulaAscii: "FeS", status: "insoluble", shortCode: "Н", colorNote: { ru: "Чёрный осадок (пирротин)", kk: "Қара тұнба", en: "Black precipitate" }, precipitateColorHex: "#1e293b" },
    "SO3": { cationId: "Fe2", anionId: "SO3", formula: "FeSO₃", formulaAscii: "FeSO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Сероватый осадок", kk: "Сұрғылт тұнба", en: "Grayish precipitate" } },
    "SO4": { cationId: "Fe2", anionId: "SO4", formula: "FeSO₄", formulaAscii: "FeSO4", status: "soluble", shortCode: "Р", description: { ru: "Железный купорос (FeSO₄·7H₂O светло-зеленый)", kk: "Темір купоросы", en: "Green vitriol" } },
    "NO2": { cationId: "Fe2", anionId: "NO2", formula: "Fe(NO₂)₂", formulaAscii: "Fe(NO2)2", status: "soluble", shortCode: "Р" },
    "NO3": { cationId: "Fe2", anionId: "NO3", formula: "Fe(NO₃)₂", formulaAscii: "Fe(NO3)2", status: "soluble", shortCode: "Р" },
    "PO4": { cationId: "Fe2", anionId: "PO4", formula: "Fe₃(PO₄)₂", formulaAscii: "Fe3(PO4)2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Бело-голубоватый осадок", kk: "Ақ-көгілдір тұнба", en: "Vivianite precipitate" }, precipitateColorHex: "#cbd5e1" },
    "CO3": { cationId: "Fe2", anionId: "CO3", formula: "FeCO₃", formulaAscii: "FeCO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый с зеленоватым оттенком (сидерит)", kk: "Сидерит тұнбасы", en: "Siderite mineral" }, precipitateColorHex: "#e2e8f0" },
    "SiO3": { cationId: "Fe2", anionId: "SiO3", formula: "FeSiO₃", formulaAscii: "FeSiO3", status: "insoluble", shortCode: "Н" },
    "CH3COO": { cationId: "Fe2", anionId: "CH3COO", formula: "Fe(CH₃COO)₂", formulaAscii: "Fe(CH3COO)2", status: "soluble", shortCode: "Р" }
  },
  "Fe3": {
    "OH": { cationId: "Fe3", anionId: "OH", formula: "Fe(OH)₃", formulaAscii: "Fe(OH)3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Красно-бурый осадок", kk: "Қызыл-қоңыр тұнба", en: "Rust-red / brown precipitate" }, precipitateColorHex: "#b45309", isImportantQualitativeReaction: true, description: { ru: "Качественная реакция на ионы железа (III): Fe³⁺ + 3OH⁻ → Fe(OH)₃↓", kk: "Темір (III) ионына сапалық реакция", en: "Iron(III) hydroxide test" }, molecularEquation: "FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl", netIonicEquation: "Fe³⁺ + 3OH⁻ → Fe(OH)₃↓" },
    "F": { cationId: "Fe3", anionId: "F", formula: "FeF₃", formulaAscii: "FeF3", status: "slightly-soluble", shortCode: "М" },
    "Cl": { cationId: "Fe3", anionId: "Cl", formula: "FeCl₃", formulaAscii: "FeCl3", status: "soluble", shortCode: "Р", description: { ru: "Хлорид железа (III) коричневый раствор", kk: "Темір (III) хлориді", en: "Iron(III) chloride" } },
    "Br": { cationId: "Fe3", anionId: "Br", formula: "FeBr₃", formulaAscii: "FeBr3", status: "soluble", shortCode: "Р" },
    "I": { cationId: "Fe3", anionId: "I", formula: "FeI₃", formulaAscii: "FeI3", status: "decomposes", shortCode: "—", description: { ru: "Окислительно-восстановительный распад на FeI₂ + I₂", kk: "FeI₂ + I₂ ыдырайды", en: "Redox reaction to Fe²⁺ and I₂" } },
    "S": { cationId: "Fe3", anionId: "S", formula: "Fe₂S₃", formulaAscii: "Fe2S3", status: "decomposes", shortCode: "—" },
    "SO3": { cationId: "Fe3", anionId: "SO3", formula: "Fe₂(SO₃)₃", formulaAscii: "Fe2(SO3)3", status: "decomposes", shortCode: "—" },
    "SO4": { cationId: "Fe3", anionId: "SO4", formula: "Fe₂(SO₄)₃", formulaAscii: "Fe2(SO4)3", status: "soluble", shortCode: "Р" },
    "NO2": { cationId: "Fe3", anionId: "NO2", formula: "Fe(NO₂)₃", formulaAscii: "Fe(NO2)3", status: "decomposes", shortCode: "—" },
    "NO3": { cationId: "Fe3", anionId: "NO3", formula: "Fe(NO₃)₃", formulaAscii: "Fe(NO3)3", status: "soluble", shortCode: "Р" },
    "PO4": { cationId: "Fe3", anionId: "PO4", formula: "FePO₄", formulaAscii: "FePO4", status: "insoluble", shortCode: "Н", colorNote: { ru: "Желтовато-белый осадок", kk: "Сарғыш-ақ тұнба", en: "Yellowish-white precipitate" }, precipitateColorHex: "#fef08a" },
    "CO3": { cationId: "Fe3", anionId: "CO3", formula: "Fe₂(CO₃)₃", formulaAscii: "Fe2(CO3)3", status: "decomposes", shortCode: "—", description: { ru: "Полный гидролиз в воде до Fe(OH)₃↓ и CO₂↑", kk: "Толық гидролиз: Fe(OH)₃ + CO₂", en: "Complete water hydrolysis to Fe(OH)₃ + CO₂" } },
    "SiO3": { cationId: "Fe3", anionId: "SiO3", formula: "Fe₂(SiO₃)₃", formulaAscii: "Fe2(SiO3)3", status: "decomposes", shortCode: "—" },
    "CH3COO": { cationId: "Fe3", anionId: "CH3COO", formula: "Fe(CH₃COO)₃", formulaAscii: "Fe(CH3COO)3", status: "soluble", shortCode: "Р", description: { ru: "Кроваво-красный раствор ацетата железа", kk: "Қызыл ерітінді", en: "Blood-red solution" } }
  },
  "Al": {
    "OH": { cationId: "Al", anionId: "OH", formula: "Al(OH)₃", formulaAscii: "Al(OH)3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый студенистый амфотерный осадок", kk: "Ақ сірнелі амфотерлі тұнба", en: "White gelatinous amphoteric precipitate" }, precipitateColorHex: "#f1f5f9", isImportantQualitativeReaction: true, description: { ru: "Растворяется и в кислотах, и в избытке щелочей: Al(OH)₃ + NaOH → Na[Al(OH)₄]", kk: "Қышқылдарда да, сілтілерде де ериді", en: "Dissolves in both acids and excess base" }, molecularEquation: "AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl", netIonicEquation: "Al³⁺ + 3OH⁻ → Al(OH)₃↓" },
    "F": { cationId: "Al", anionId: "F", formula: "AlF₃", formulaAscii: "AlF3", status: "slightly-soluble", shortCode: "М" },
    "Cl": { cationId: "Al", anionId: "Cl", formula: "AlCl₃", formulaAscii: "AlCl3", status: "soluble", shortCode: "Р", description: { ru: "Хлорид алюминия (катализатор Фриделя-Крафтса)", kk: "Алюминий хлориді", en: "Friedel-Crafts catalyst" } },
    "Br": { cationId: "Al", anionId: "Br", formula: "AlBr₃", formulaAscii: "AlBr3", status: "soluble", shortCode: "Р" },
    "I": { cationId: "Al", anionId: "I", formula: "AlI₃", formulaAscii: "AlI3", status: "soluble", shortCode: "Р" },
    "S": { cationId: "Al", anionId: "S", formula: "Al₂S₃", formulaAscii: "Al2S3", status: "decomposes", shortCode: "—", description: { ru: "Полный гидролиз водой: Al₂S₃ + 6H₂O → 2Al(OH)₃↓ + 3H₂S↑", kk: "Сумен толық ыдырайды", en: "Violently hydrolyzes releasing H₂S" } },
    "SO3": { cationId: "Al", anionId: "SO3", formula: "Al₂(SO₃)₃", formulaAscii: "Al2(SO3)3", status: "decomposes", shortCode: "—" },
    "SO4": { cationId: "Al", anionId: "SO4", formula: "Al₂(SO₄)₃", formulaAscii: "Al2(SO4)3", status: "soluble", shortCode: "Р", description: { ru: "Сульфат алюминия (коагулянт для очистки воды)", kk: "Алюминий сульфаты", en: "Water treatment coagulant" } },
    "NO2": { cationId: "Al", anionId: "NO2", formula: "Al(NO₂)₃", formulaAscii: "Al(NO2)3", status: "decomposes", shortCode: "—" },
    "NO3": { cationId: "Al", anionId: "NO3", formula: "Al(NO₃)₃", formulaAscii: "Al(NO3)3", status: "soluble", shortCode: "Р" },
    "PO4": { cationId: "Al", anionId: "PO4", formula: "AlPO₄", formulaAscii: "AlPO4", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок", kk: "Ақ тұнба", en: "White precipitate" }, precipitateColorHex: "#f8fafc" },
    "CO3": { cationId: "Al", anionId: "CO3", formula: "Al₂(CO₃)₃", formulaAscii: "Al2(CO3)3", status: "decomposes", shortCode: "—", description: { ru: "Гидролизуется: 2Al³⁺ + 3CO₃²⁻ + 3H₂O → 2Al(OH)₃↓ + 3CO₂↑", kk: "Сумен толық гидролизденеді", en: "Complete hydrolysis to Al(OH)₃ + CO₂" } },
    "SiO3": { cationId: "Al", anionId: "SiO3", formula: "Al₂(SiO₃)₃", formulaAscii: "Al2(SiO3)3", status: "decomposes", shortCode: "—" },
    "CH3COO": { cationId: "Al", anionId: "CH3COO", formula: "Al(CH₃COO)₃", formulaAscii: "Al(CH3COO)3", status: "soluble", shortCode: "Р", description: { ru: "Жидкость Бурова (антисептик в медицине)", kk: "Буров сұйықтығы", en: "Burov antiseptic solution" } }
  },
  "Pb": {
    "OH": { cationId: "Pb", anionId: "OH", formula: "Pb(OH)₂", formulaAscii: "Pb(OH)2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый амфотерный осадок", kk: "Ақ амфотерлі тұнба", en: "White amphoteric precipitate" }, precipitateColorHex: "#f8fafc" },
    "F": { cationId: "Pb", anionId: "F", formula: "PbF₂", formulaAscii: "PbF2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок", kk: "Ақ тұнба", en: "White precipitate" } },
    "Cl": { cationId: "Pb", anionId: "Cl", formula: "PbCl₂", formulaAscii: "PbCl2", status: "slightly-soluble", shortCode: "М", colorNote: { ru: "Белый игольчатый осадок (растворим в кипятке)", kk: "Ақ ине тәрізді тұнба (ыстық суда ериді)", en: "White needles (soluble in hot water)" } },
    "Br": { cationId: "Pb", anionId: "Br", formula: "PbBr₂", formulaAscii: "PbBr2", status: "slightly-soluble", shortCode: "М" },
    "I": { cationId: "Pb", anionId: "I", formula: "PbI₂", formulaAscii: "PbI2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Золотисто-жёлтые мерцающие чешуйки («Золотой дождь»)", kk: "Алтын түстес сары жылтыр қабыршақтар («Алтын жаңбыр»)", en: "Golden shimmering crystals ('Golden Rain')" }, precipitateColorHex: "#facc15", isImportantQualitativeReaction: true, description: { ru: "Эффектная качественная реакция «Золотой дождь»: Pb²⁺ + 2I⁻ → PbI₂↓", kk: "«Алтын жаңбыр» тәжірибесі", en: "Famous 'Golden Rain' analytical test" }, molecularEquation: "Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃", netIonicEquation: "Pb²⁺ + 2I⁻ → PbI₂↓" },
    "S": { cationId: "Pb", anionId: "S", formula: "PbS", formulaAscii: "PbS", status: "insoluble", shortCode: "Н", colorNote: { ru: "Чёрный блестящий осадок (свинцовый блеск / галенит)", kk: "Қара жылтыр тұнба (галенит)", en: "Black galena precipitate" }, precipitateColorHex: "#020617", isImportantQualitativeReaction: true, molecularEquation: "Pb(CH₃COO)₂ + Na₂S → PbS↓ + 2CH₃COONa", netIonicEquation: "Pb²⁺ + S²⁻ → PbS↓" },
    "SO3": { cationId: "Pb", anionId: "SO3", formula: "PbSO₃", formulaAscii: "PbSO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок", kk: "Ақ тұнба", en: "White precipitate" } },
    "SO4": { cationId: "Pb", anionId: "SO4", formula: "PbSO₄", formulaAscii: "PbSO4", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый тяжёлый осадок минерала англезита", kk: "Ақ ауыр тұнба", en: "Anglesite white heavy precipitate" }, precipitateColorHex: "#ffffff" },
    "NO2": { cationId: "Pb", anionId: "NO2", formula: "Pb(NO₂)₂", formulaAscii: "Pb(NO2)2", status: "soluble", shortCode: "Р" },
    "NO3": { cationId: "Pb", anionId: "NO3", formula: "Pb(NO₃)₂", formulaAscii: "Pb(NO3)2", status: "soluble", shortCode: "Р" },
    "PO4": { cationId: "Pb", anionId: "PO4", formula: "Pb₃(PO₄)₂", formulaAscii: "Pb3(PO4)2", status: "insoluble", shortCode: "Н", colorNote: { ru: "Белый осадок", kk: "Ақ тұнба", en: "White precipitate" } },
    "CO3": { cationId: "Pb", anionId: "CO3", formula: "PbCO₃", formulaAscii: "PbCO3", status: "insoluble", shortCode: "Н", colorNote: { ru: "Свинцовые белила (церуссит)", kk: "Церуссит ақ тұнбасы", en: "Cerussite lead white" }, precipitateColorHex: "#ffffff" },
    "SiO3": { cationId: "Pb", anionId: "SiO3", formula: "PbSiO₃", formulaAscii: "PbSiO3", status: "insoluble", shortCode: "Н" },
    "CH3COO": { cationId: "Pb", anionId: "CH3COO", formula: "Pb(CH₃COO)₂", formulaAscii: "Pb(CH3COO)2", status: "soluble", shortCode: "Р", description: { ru: "Свинцовый сахар (сладкий на вкус, но ядовит)", kk: "Қорғасын қанты (улы)", en: "Sugar of lead (toxic)" } }
  }
};
