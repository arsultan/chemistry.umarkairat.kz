import { LocalizedString } from "@/types/chemistry";

export type QuizCategory = 
  | 'periodic_table' 
  | 'reactions_equations' 
  | 'organic_chemistry' 
  | 'acids_bases_ph' 
  | 'qualitative_tests' 
  | 'kz_science';

export type QuizDifficulty = 'easy' | 'medium' | 'hard';

export interface QuizQuestion {
  id: string;
  category: QuizCategory;
  difficulty: QuizDifficulty;
  question: LocalizedString;
  options: {
    id: string;
    text: LocalizedString;
  }[];
  correctOptionId: string;
  explanation: LocalizedString;
  hint: LocalizedString;
  xpReward: number;
}

export const QUIZ_CATEGORIES: { id: QuizCategory; name: LocalizedString; icon: string; color: string }[] = [
  {
    id: 'periodic_table',
    name: { ru: "Таблица Менделеева", kk: "Менделеев кестесі", en: "Periodic Table" },
    icon: "⚛️",
    color: "from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400"
  },
  {
    id: 'reactions_equations',
    name: { ru: "Реакции и Уравнения", kk: "Реакциялар мен Теңдеулер", en: "Reactions & Equations" },
    icon: "⚗️",
    color: "from-purple-500/20 to-indigo-500/20 text-purple-600 dark:text-purple-400"
  },
  {
    id: 'organic_chemistry',
    name: { ru: "Органическая химия", kk: "Органикалық химия", en: "Organic Chemistry" },
    icon: "🧬",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400"
  },
  {
    id: 'acids_bases_ph',
    name: { ru: "Кислоты, Щёлочи и pH", kk: "Қышқылдар, Сілтілер және pH", en: "Acids, Bases & pH" },
    icon: "🧪",
    color: "from-rose-500/20 to-amber-500/20 text-rose-600 dark:text-rose-400"
  },
  {
    id: 'qualitative_tests',
    name: { ru: "Осадки и Качественный анализ", kk: "Тұнбалар және Сапалық талдау", en: "Precipitates & Qualitative Tests" },
    icon: "🌧️",
    color: "from-blue-500/20 to-indigo-500/20 text-blue-600 dark:text-blue-400"
  },
  {
    id: 'kz_science',
    name: { ru: "Наука РК и История", kk: "Қазақстан ғылымы мен Тарих", en: "Kazakhstan Science & History" },
    icon: "🇰🇿",
    color: "from-amber-500/20 to-yellow-500/20 text-amber-600 dark:text-amber-400"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // --- 1. PERIODIC TABLE ---
  {
    id: "pt-1",
    category: "periodic_table",
    difficulty: "easy",
    question: {
      ru: "Какой химический элемент является самым распространенным во Вселенной (~75% всей массы)?",
      kk: "Әлемдегі ең көп таралған химиялық элемент қандай (барлық массаның ~75%)?",
      en: "Which chemical element is the most abundant in the universe (~75% of baryonic mass)?"
    },
    options: [
      { id: "a", text: { ru: "Кислород (O)", kk: "Оттегі (O)", en: "Oxygen (O)" } },
      { id: "b", text: { ru: "Водород (H)", kk: "Сутегі (H)", en: "Hydrogen (H)" } },
      { id: "c", text: { ru: "Гелий (He)", kk: "Гелий (He)", en: "Helium (He)" } },
      { id: "d", text: { ru: "Углерод (C)", kk: "Көміртек (C)", en: "Carbon (C)" } }
    ],
    correctOptionId: "b",
    explanation: {
      ru: "Водород (H, Z=1) — простейший и самый распространенный элемент Вселенной, составляющий основную массу звезд, включая Солнце.",
      kk: "Сутегі (H, Z=1) — Әлемдегі ең қарапайым және ең көп таралған элемент, жұлдыздар мен Күннің негізгі құрамдас бөлігі.",
      en: "Hydrogen (H, Z=1) is the lightest and most abundant cosmic element, fueling stellar nucleosynthesis."
    },
    hint: {
      ru: "Его атом состоит всего из одного протона и одного электрона.",
      kk: "Оның атомы небәрі бір протон мен бір электроннан тұрады.",
      en: "Its atom consists of only one proton and one electron."
    },
    xpReward: 30
  },
  {
    id: "pt-2",
    category: "periodic_table",
    difficulty: "medium",
    question: {
      ru: "Какой из перечисленных элементов обладает наивысшей электроотрицательностью по Полингу (3.98)?",
      kk: "Полинг шкаласы бойынша қай элементтің электртерістілігі ең жоғары (3.98)?",
      en: "Which element has the highest Pauling electronegativity (3.98)?"
    },
    options: [
      { id: "a", text: { ru: "Кислород (O)", kk: "Оттегі (O)", en: "Oxygen (O)" } },
      { id: "b", text: { ru: "Хлор (Cl)", kk: "Хлор (Cl)", en: "Chlorine (Cl)" } },
      { id: "c", text: { ru: "Фтор (F)", kk: "Фтор (F)", en: "Fluorine (F)" } },
      { id: "d", text: { ru: "Азот (N)", kk: "Азот (N)", en: "Nitrogen (N)" } }
    ],
    correctOptionId: "c",
    explanation: {
      ru: "Фтор (F) — самый химически активный неметалл и чемпион по электроотрицательности, жадно притягивающий валентные электроны.",
      kk: "Фтор (F) — электртерістілігі ең жоғары химиялық элемент, байланыстырушы электрон жұбын өзіне ең күшті тартады.",
      en: "Fluorine (F) sits at the top-right of the reactive periodic table, exerting the strongest pull on shared electron pairs."
    },
    hint: {
      ru: "Находится в правом верхнем углу группы галогенов.",
      kk: "Галогендер тобының ең жоғарғы жағында орналасқан.",
      en: "Located at the very top of Group 17 (Halogens)."
    },
    xpReward: 40
  },
  {
    id: "pt-3",
    category: "periodic_table",
    difficulty: "hard",
    question: {
      ru: "Какой металл является единственным жидким простым веществом при стандартной температуре (25°C)?",
      kk: "Қалыпты температурада (25°C) сұйық күйде болатын жалғыз металл қандай?",
      en: "Which metal is the only elemental liquid at standard room temperature (25°C)?"
    },
    options: [
      { id: "a", text: { ru: "Галлий (Ga)", kk: "Галлий (Ga)", en: "Gallium (Ga)" } },
      { id: "b", text: { ru: "Ртуть (Hg)", kk: "Сынап (Hg)", en: "Mercury (Hg)" } },
      { id: "c", text: { ru: "Цезий (Cs)", kk: "Цезий (Cs)", en: "Cesium (Cs)" } },
      { id: "d", text: { ru: "Франций (Fr)", kk: "Франций (Fr)", en: "Francium (Fr)" } }
    ],
    correctOptionId: "b",
    explanation: {
      ru: "Ртуть (Hg, гидраргирум, Z=80) плавится при -38.8°C из-за релятивистского сжатия 6s-орбиталей, экранирующих металлическую связь.",
      kk: "Сынап (Hg, Z=80) 25°C-та сұйық. Оның балқу температурасы -38.8°C құрайды.",
      en: "Mercury (Hg, Z=80) melts at -38.8°C due to relativistic contraction of its 6s valence electrons weakening metallic bonding."
    },
    hint: {
      ru: "Раньше этот металл заливали в медицинские градусники.",
      kk: "Бұрын бұл металды медициналық термометрлерге құятын.",
      en: "Historically used in traditional glass fever thermometers."
    },
    xpReward: 50
  },

  // --- 2. REACTIONS & EQUATIONS ---
  {
    id: "rx-1",
    category: "reactions_equations",
    difficulty: "easy",
    question: {
      ru: "Какой коэффициент должен стоять перед O₂ в уравнении горения метана: CH₄ + ? O₂ → CO₂ + 2H₂O?",
      kk: "Метанның жану теңдеуіндегі O₂ алдындағы коэффициент қандай: CH₄ + ? O₂ → CO₂ + 2H₂O?",
      en: "What stoichiometric coefficient balances O₂ in: CH₄ + ? O₂ → CO₂ + 2H₂O?"
    },
    options: [
      { id: "a", text: { ru: "1", kk: "1", en: "1" } },
      { id: "b", text: { ru: "2", kk: "2", en: "2" } },
      { id: "c", text: { ru: "3", kk: "3", en: "3" } },
      { id: "d", text: { ru: "4", kk: "4", en: "4" } }
    ],
    correctOptionId: "b",
    explanation: {
      ru: "Справа 2 атома кислорода в CO₂ и 2 атома в 2H₂O (всего 4 атома O). Значит слева необходимо 2O₂.",
      kk: "Оң жақта CO₂-де 2 және 2H₂O-да 2 оттегі бар (барлығы 4 атом). Демек, сол жаққа 2O₂ қажет.",
      en: "Products have 2 oxygen atoms in CO₂ and 2 in 2H₂O (total 4 O atoms), requiring 2 O₂ molecules."
    },
    hint: {
      ru: "Посчитайте сумму атомов кислорода в продуктах справа.",
      kk: "Оң жақтағы өнімдердегі оттегі атомдарының қосындысын санаңыз.",
      en: "Count the total oxygen atoms in the products on the right."
    },
    xpReward: 30
  },
  {
    id: "rx-2",
    category: "reactions_equations",
    difficulty: "medium",
    question: {
      ru: "Какой газ выделяется при взаимодействии активных металлов (Zn, Mg, Fe) с разбавленной соляной кислотой (HCl)?",
      kk: "Белсенді металдар (Zn, Mg, Fe) сұйылтылған тұз қышқылымен (HCl) әрекеттескенде қандай газ бөлінеді?",
      en: "Which gas is released when active metals (Zn, Mg, Fe) react with dilute hydrochloric acid (HCl)?"
    },
    options: [
      { id: "a", text: { ru: "Кислород (O₂)", kk: "Оттегі (O₂)", en: "Oxygen (O₂)" } },
      { id: "b", text: { ru: "Хлор (Cl₂)", kk: "Хлор (Cl₂)", en: "Chlorine (Cl₂)" } },
      { id: "c", text: { ru: "Водород (H₂)", kk: "Сутегі (H₂)", en: "Hydrogen (H₂)" } },
      { id: "d", text: { ru: "Углекислый газ (CO₂)", kk: "Көмірқышқыл газы (CO₂)", en: "Carbon dioxide (CO₂)" } }
    ],
    correctOptionId: "c",
    explanation: {
      ru: "Металлы, стоящие левее водорода в ряду активности, вытесняют водород из кислот: Zn + 2HCl → ZnCl₂ + H₂↑.",
      kk: "Белсенділік қатарында сутектен сол жақта тұрған металдар қышқылдан сутекті ығыстырады: Zn + 2HCl → ZnCl₂ + H₂↑.",
      en: "Metals with negative standard reduction potentials displace H⁺ from non-oxidizing acids: Zn + 2HCl → ZnCl₂ + H₂↑."
    },
    hint: {
      ru: "Этот легкий газ вспыхивает с характерным хлопком при поднесении горящей лучинки.",
      kk: "Бұл жеңіл газ жанып тұрған шырпыны жақындатқанда дыбыспен тұтанады.",
      en: "This lightest gas gives a signature 'pop' test sound when ignited."
    },
    xpReward: 40
  },
  {
    id: "rx-3",
    category: "reactions_equations",
    difficulty: "hard",
    question: {
      ru: "В реакции 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂ + 8H₂O, какая степень окисления у марганца в продукте MnCl₂?",
      kk: "2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂ + 8H₂O реакциясында MnCl₂ өніміндегі марганецтің тотығу дәрежесі қандай?",
      en: "In the redox reaction above, what is the oxidation state of Manganese in the product MnCl₂?"
    },
    options: [
      { id: "a", text: { ru: "+7", kk: "+7", en: "+7" } },
      { id: "b", text: { ru: "+4", kk: "+4", en: "+4" } },
      { id: "c", text: { ru: "+2", kk: "+2", en: "+2" } },
      { id: "d", text: { ru: "0", kk: "0", en: "0" } }
    ],
    correctOptionId: "c",
    explanation: {
      ru: "В кислой среде перманганат-ион Mn⁺⁷ принимает 5 электронов и восстанавливается до катиона Mn²⁺ (степень окисления +2).",
      kk: "Қышқылдық ортада Mn⁺⁷ ионы 5 электрон қосып алып, тотықсызданып Mn²⁺ (тотығу дәрежесі +2) түзеді.",
      en: "In acidic conditions, permanganate Mn(VII) is reduced by gaining 5 electrons to form pale pink Mn(II) (+2 state)."
    },
    hint: {
      ru: "Хлор в хлоридах имеет степень окисления -1, а их два.",
      kk: "Хлоридтегі хлордың тотығу дәрежесі -1, ал хлор атомы екеу.",
      en: "Chlorine in binary halides has a -1 charge, and there are two of them."
    },
    xpReward: 50
  },

  // --- 3. ORGANIC CHEMISTRY ---
  {
    id: "org-1",
    category: "organic_chemistry",
    difficulty: "easy",
    question: {
      ru: "Какова валентность атома углерода во всех органических соединениях согласно теории А.М. Бутлерова?",
      kk: "А.М. Бутлеровтың теориясы бойынша барлық органикалық қосылыстардағы көміртектің валенттілігі қандай?",
      en: "What is the fixed valency of Carbon in all stable organic compounds?"
    },
    options: [
      { id: "a", text: { ru: "II (Два)", kk: "II (Екі)", en: "II (Two)" } },
      { id: "b", text: { ru: "IV (Четыре)", kk: "IV (Төрт)", en: "IV (Four)" } },
      { id: "c", text: { ru: "VI (Шесть)", kk: "VI (Алты)", en: "VI (Six)" } },
      { id: "d", text: { ru: "III (Три)", kk: "III (Үш)", en: "III (Three)" } }
    ],
    correctOptionId: "b",
    explanation: {
      ru: "Фундаментальный постулат органической химии: в органических молекулах углерод всегда строго четырехвалентен (образует 4 ковалентные связи).",
      kk: "Органикалық химияның басты қағидасы: көміртек атомы органикалық заттарда әрқашан төрт валентті (4 байланыс түзеді).",
      en: "The foundation of structural organic chemistry: Carbon is strictly tetravalent (forming 4 covalent bonds)."
    },
    hint: {
      ru: "В молекуле метана CH₄ углерод соединен с четырьмя атомами водорода.",
      kk: "Метан CH₄ молекуласында көміртек 4 сутекпен байланысқан.",
      en: "In methane CH₄, carbon bonds to 4 hydrogens."
    },
    xpReward: 30
  },
  {
    id: "org-2",
    category: "organic_chemistry",
    difficulty: "medium",
    question: {
      ru: "Какая функциональная группа определяет принадлежность органического вещества к классу карбоновых кислот?",
      kk: "Қай функционалды топ органикалық заттың карбон қышқылдары класына жататынын анықтайды?",
      en: "Which functional group defines organic carboxylic acids?"
    },
    options: [
      { id: "a", text: { ru: "-OH (Гидроксильная)", kk: "-OH (Гидроксил)", en: "-OH (Hydroxyl)" } },
      { id: "b", text: { ru: "-COOH (Карбоксильная)", kk: "-COOH (Карбоксил)", en: "-COOH (Carboxyl)" } },
      { id: "c", text: { ru: "-NH₂ (Аминогруппа)", kk: "-NH₂ (Амин)", en: "-NH₂ (Amino)" } },
      { id: "d", text: { ru: "-CHO (Альдегидная)", kk: "-CHO (Альдегид)", en: "-CHO (Aldehyde)" } }
    ],
    correctOptionId: "b",
    explanation: {
      ru: "Карбоксильная группа -COOH состоит из карбонила C=O и гидроксила -OH, обуславливая кислотные свойства (уксусная кислота CH₃COOH, муравьиная HCOOH).",
      kk: "-COOH карбоксил тобы карбонил және гидроксил топтарынан құралып, қышқылдық қасиет береді.",
      en: "The carboxyl group -COOH combines a carbonyl and hydroxyl group, donating protons in solution."
    },
    hint: {
      ru: "Она присутствует в уксусной кислоте CH₃COOH.",
      kk: "Ол сірке қышқылының CH₃COOH формуласында бар.",
      en: "Found in acetic acid (vinegar, CH₃COOH)."
    },
    xpReward: 40
  },
  {
    id: "org-3",
    category: "organic_chemistry",
    difficulty: "hard",
    question: {
      ru: "Какое вещество образуется при тримеризации ацетилена (C₂H₂) над активированным углем при нагревании (реакция Зелинского)?",
      kk: "Ацетиленді (C₂H₂) қыздырылған белсендірілген көмір үстінен өткізіп тримерлегенде қандай зат түзіледі (Зелинский реакциясы)?",
      en: "Which aromatic compound is formed by catalytic trimerization of acetylene (3 C₂H₂ → ?)?"
    },
    options: [
      { id: "a", text: { ru: "Бензол (C₆H₆)", kk: "Бензол (C₆H₆)", en: "Benzene (C₆H₆)" } },
      { id: "b", text: { ru: "Гексан (C₆H₁₄)", kk: "Гексан (C₆H₁₄)", en: "Hexane (C₆H₁₄)" } },
      { id: "c", text: { ru: "Толуол (C₇H₈)", kk: "Толуол (C₇H₈)", en: "Toluene (C₇H₈)" } },
      { id: "d", text: { ru: "Этилен (C₂H₄)", kk: "Этилен (C₂H₄)", en: "Ethylene (C₂H₄)" } }
    ],
    correctOptionId: "a",
    explanation: {
      ru: "Реакция Зелинского-Казанского: 3 C₂H₂ → C₆H₆ (бензол) — классический путь перехода от ациклических углеводородов к ароматическим.",
      kk: "Зелинский реакциясы: 3 моль ацетиленнен ароматты бензол сақинасы (C₆H₆) түзіледі.",
      en: "Zelinsky trimerization converts 3 molecules of ethyne into the planar aromatic ring of benzene (C₆H₆)."
    },
    hint: {
      ru: "Это шестичленное ароматическое кольцо Кекуле.",
      kk: "Ол алты көміртекті Кекуле ароматты сақинасы.",
      en: "Famous 6-carbon aromatic ring with delocalized pi electrons."
    },
    xpReward: 50
  },

  // --- 4. ACIDS, BASES & pH ---
  {
    id: "ph-1",
    category: "acids_bases_ph",
    difficulty: "easy",
    question: {
      ru: "Какое значение pH имеет абсолютно чистая дистиллированная вода при температуре 25°C?",
      kk: "25°C температурадағы таза дистилденген судың pH мәні қандай?",
      en: "What is the pH of pure distilled water at 25°C?"
    },
    options: [
      { id: "a", text: { ru: "0", kk: "0", en: "0" } },
      { id: "b", text: { ru: "14", kk: "14", en: "14" } },
      { id: "c", text: { ru: "7", kk: "7", en: "7" } },
      { id: "d", text: { ru: "1", kk: "1", en: "1" } }
    ],
    correctOptionId: "c",
    explanation: {
      ru: "При 25°C концентрации [H⁺] и [OH⁻] в воде равны 10⁻⁷ моль/л, поэтому pH = -lg(10⁻⁷) = 7.0 (нейтральная среда).",
      kk: "25°C-та [H⁺] және [OH⁻] концентрациялары 10⁻⁷ моль/л болып, pH = 7.0 (бейтарап орта) болады.",
      en: "At 25°C, self-ionization Kw = 10⁻¹⁴, making [H⁺] = 10⁻⁷ M, hence pH = 7.0."
    },
    hint: {
      ru: "Это точная середина шкалы кислотности от 0 до 14.",
      kk: "0 мен 14 аралығындағы шкаланың дәл ортасы.",
      en: "The exact midpoint of the 0 to 14 scale."
    },
    xpReward: 30
  },
  {
    id: "ph-2",
    category: "acids_bases_ph",
    difficulty: "medium",
    question: {
      ru: "В какой цвет окрашивается индикатор фенолфталеин в растворе едкого натра (NaOH, щелочь)?",
      kk: "Күйдіргіш натр (NaOH, сілті) ерітіндісінде фенолфталеин индикаторы қандай түске боялады?",
      en: "What color does phenolphthalein turn in a sodium hydroxide (NaOH) alkaline solution?"
    },
    options: [
      { id: "a", text: { ru: "Желтый", kk: "Сары", en: "Yellow" } },
      { id: "b", text: { ru: "Ярко-малиновый", kk: "Ашық таңқурай", en: "Vibrant Magenta / Pink" } },
      { id: "c", text: { ru: "Синий", kk: "Көк", en: "Blue" } },
      { id: "d", text: { ru: "Бесцветный", kk: "Түссіз", en: "Colorless" } }
    ],
    correctOptionId: "b",
    explanation: {
      ru: "Школьное правило: «Фенолфталеиновый в щелочах — малиновый!». При pH > 8.2 его молекула депротонируется и приобретает хиноидную структуру насыщенного малинового цвета.",
      kk: "«Фенолфталеин сілтіде — таңқурай түсті!». pH > 8.2 болғанда ол ашық таңқурай қызғылт түске өзгереді.",
      en: "Phenolphthalein shifts from colorless to a dazzling quinoid magenta/pink chromophore in alkaline pH (> 8.2)."
    },
    hint: {
      ru: "Цвет спелой лесной ягоды малины.",
      kk: "Піскен таңқурай жидегінің түсі.",
      en: "The vivid shade of ripe summer raspberries."
    },
    xpReward: 40
  },
  {
    id: "ph-3",
    category: "acids_bases_ph",
    difficulty: "hard",
    question: {
      ru: "Если концентрация ионов [H⁺] в растворе соляной кислоты равна 0.001 моль/л (10⁻³ M), чему равен pH этого раствора?",
      kk: "Тұз қышқылы ерітіндісіндегі [H⁺] иондарының концентрациясы 0.001 моль/л (10⁻³ M) болса, осы ерітіндінің pH мәні нешеге тең?",
      en: "If the [H⁺] concentration in a solution is 0.001 mol/L (10⁻³ M), what is its pH?"
    },
    options: [
      { id: "a", text: { ru: "pH = 1", kk: "pH = 1", en: "pH = 1" } },
      { id: "b", text: { ru: "pH = 3", kk: "pH = 3", en: "pH = 3" } },
      { id: "c", text: { ru: "pH = 5", kk: "pH = 5", en: "pH = 5" } },
      { id: "d", text: { ru: "pH = 11", kk: "pH = 11", en: "pH = 11" } }
    ],
    correctOptionId: "b",
    explanation: {
      ru: "pH определяется как отрицательный десятичный логарифм концентрации протонов: pH = -lg[H⁺] = -lg(10⁻³) = 3.",
      kk: "pH мәні сутек иондары концентрациясының теріс ондық логарифмі: pH = -lg[H⁺] = -lg(10⁻³) = 3.",
      en: "pH = -log₁₀[H⁺] = -log₁₀(10⁻³) = 3."
    },
    hint: {
      ru: "Посчитайте количество нулей после запятой: 10⁻³.",
      kk: "Үтірден кейінгі ондық дәрежені ескеріңіз: 10⁻³.",
      en: "Look at the negative exponent of 10⁻³."
    },
    xpReward: 50
  },

  // --- 5. PRECIPITATES & QUALITATIVE TESTS ---
  {
    id: "qual-1",
    category: "qualitative_tests",
    difficulty: "easy",
    question: {
      ru: "Какого цвета творожистый осадок выпадает при качественной реакции хлорид-ионов Cl⁻ с нитратом серебра AgNO₃?",
      kk: "Хлорид иондарына (Cl⁻) күміс нитратын (AgNO₃) қосқанда қандай түсті ірімшік тәрізді тұнба түзіледі?",
      en: "What color is the curdy precipitate formed when silver nitrate (AgNO₃) reacts with chloride ions (Cl⁻)?"
    },
    options: [
      { id: "a", text: { ru: "Белый осадок (AgCl)", kk: "Ақ тұнба (AgCl)", en: "White precipitate (AgCl)" } },
      { id: "b", text: { ru: "Ярко-желтый (AgI)", kk: "Ашық сары (AgI)", en: "Yellow (AgI)" } },
      { id: "c", text: { ru: "Черный (Ag₂S)", kk: "Қара (Ag₂S)", en: "Black (Ag₂S)" } },
      { id: "d", text: { ru: "Синий (Cu(OH)₂)", kk: "Көк (Cu(OH)₂)", en: "Blue (Cu(OH)₂)" } }
    ],
    correctOptionId: "a",
    explanation: {
      ru: "Ag⁺ + Cl⁻ → AgCl↓ — белый творожистый осадок хлорида серебра, нерастворимый в азотной кислоте HNO₃, но темнеющий на свету.",
      kk: "Ag⁺ + Cl⁻ → AgCl↓ — азот қышқылында ерімейтін, жарықта қараятын ақ ірімшік тәрізді тұнба.",
      en: "Ag⁺ + Cl⁻ → AgCl↓ produces an iconic white curdy precipitate, insoluble in HNO₃."
    },
    hint: {
      ru: "Цвет свежего снега или творога.",
      kk: "Таза қар немесе ірімшік түсі.",
      en: "The color of pure milk or fresh snow."
    },
    xpReward: 30
  },
  {
    id: "qual-2",
    category: "qualitative_tests",
    difficulty: "medium",
    question: {
      ru: "Какой реатив используется для качественного обнаружения сульфат-ионов SO₄²⁻ с образованием нерастворимого белого осадка?",
      kk: "Сульфат иондарын (SO₄²⁻) анықтап, ерімейтін ақ тұнба алу үшін қандай катион қолданылады?",
      en: "Which cation reagent is used to detect sulfate ions (SO₄²⁻) by forming a dense white precipitate?"
    },
    options: [
      { id: "a", text: { ru: "Катион бария (Ba²⁺)", kk: "Барий катионы (Ba²⁺)", en: "Barium cation (Ba²⁺)" } },
      { id: "b", text: { ru: "Катион натрия (Na⁺)", kk: "Натрий катионы (Na⁺)", en: "Sodium cation (Na⁺)" } },
      { id: "c", text: { ru: "Катион калия (K⁺)", kk: "Калий катионы (K⁺)", en: "Potassium cation (K⁺)" } },
      { id: "d", text: { ru: "Катион аммония (NH₄⁺)", kk: "Аммоний катионы (NH₄⁺)", en: "Ammonium cation (NH₄⁺)" } }
    ],
    correctOptionId: "a",
    explanation: {
      ru: "Ba²⁺ + SO₄²⁻ → BaSO₄↓ — тяжелый белый осадок сульфата бария, нерастворимый даже в концентрированных кислотах.",
      kk: "Ba²⁺ + SO₄²⁻ → BaSO₄↓ — концентрлі қышқылдарда да ерімейтін барий сульфатының ауыр ақ тұнбасы.",
      en: "Ba²⁺ + SO₄²⁻ → BaSO₄↓ produces barium sulfate, extremely insoluble even in boiling aqua regia."
    },
    hint: {
      ru: "Этот щелочноземельный элемент имеет порядковый номер 56.",
      kk: "Бұл сілтілік-жер элементінің периодтық жүйедегі нөмірі 56.",
      en: "This alkaline earth metal has atomic number 56."
    },
    xpReward: 40
  },
  {
    id: "qual-3",
    category: "qualitative_tests",
    difficulty: "hard",
    question: {
      ru: "Какого цвета студенистый осадок образуется при добавлении щелочи NaOH к соли железа(III), например FeCl₃?",
      kk: "FeCl₃ темір(III) тұзына NaOH сілтісін қосқанда қандай түсті қоймалжың тұнба түзіледі?",
      en: "What color precipitate is produced when NaOH is added to an iron(III) salt like FeCl₃?"
    },
    options: [
      { id: "a", text: { ru: "Серо-зеленый", kk: "Сұр-жасыл", en: "Dirty Green" } },
      { id: "b", text: { ru: "Бурый (красно-коричневый)", kk: "Қоңыр (қызыл-қоңыр)", en: "Rust Red-Brown" } },
      { id: "c", text: { ru: "Ярко-синий", kk: "Ашық көк", en: "Bright Blue" } },
      { id: "d", text: { ru: "Белый", kk: "Ақ", en: "White" } }
    ],
    correctOptionId: "b",
    explanation: {
      ru: "Fe³⁺ + 3OH⁻ → Fe(OH)₃↓ — бурый осадок гидроксида железа(III), цвет напоминает ржавчину.",
      kk: "Fe³⁺ + 3OH⁻ → Fe(OH)₃↓ — тот басқан темірдің түсіндей қоңыр (қызыл-қоңыр) тұнба.",
      en: "Fe³⁺ + 3OH⁻ → Fe(OH)₃↓ forms a classic gelatinous reddish-brown rust precipitate."
    },
    hint: {
      ru: "Цвет ржавчины на старом железе.",
      kk: "Ескі темірдің тот басқан түсі.",
      en: "The signature color of oxidized iron rust."
    },
    xpReward: 50
  },

  // --- 6. SCIENCE IN KAZAKHSTAN & HISTORY ---
  {
    id: "kz-1",
    category: "kz_science",
    difficulty: "easy",
    question: {
      ru: "Кто является основателем Академии наук Казахстана и первооткрывателем крупнейшего Жезказганского медного месторождения?",
      kk: "Қазақстан Ғылым академиясының негізін қалаушы және Жезқазған мыс кен орнын ашқан көрнекті академик кім?",
      en: "Who founded the Academy of Sciences of Kazakhstan and discovered the vast Zhezkazgan copper deposits?"
    },
    options: [
      { id: "a", text: { ru: "Каныш Сатпаев", kk: "Қаныш Сәтбаев", en: "Kanysh Satpayev" } },
      { id: "b", text: { ru: "Дмитрий Менделеев", kk: "Дмитрий Менделеев", en: "Dmitri Mendeleev" } },
      { id: "c", text: { ru: "Аль-Фараби", kk: "Әл-Фараби", en: "Al-Farabi" } },
      { id: "d", text: { ru: "Чокан Валиханов", kk: "Шоқан Уәлиханов", en: "Shoqan Walikhanov" } }
    ],
    correctOptionId: "a",
    explanation: {
      ru: "Каныш Имантаевич Сатпаев — выдающийся казахстанский геолог и химик-минеролог, первый президент Академии наук КазССР, доказавший гигантские запасы меди Жезказгана.",
      kk: "Қаныш Имантайұлы Сәтбаев — Қазақстан ғылымының атасы, Жезқазғанның әлемдегі ең ірі мыс кеніштерін ашқан ғұлама ғалым.",
      en: "Academician Kanysh Satpayev proved Zhezkazgan copper reserves and founded the Kazakh Academy of Sciences."
    },
    hint: {
      ru: "Его имя носит главный технический университет Казахстана (Satbayev University).",
      kk: "Оның есімімен Қазақстанның жетекші техникалық университеті (Satbayev University) аталады.",
      en: "Leading Kazakh National Research Technical University bears his name."
    },
    xpReward: 30
  },
  {
    id: "kz-2",
    category: "kz_science",
    difficulty: "medium",
    question: {
      ru: "По запасам какого ценного радиоактивного химического элемента (Z=92) Казахстан занимает 2-е место в мире, а по добыче — 1-е место?",
      kk: "Қай құнды радиоактивті элементтің (Z=92) қоры бойынша Қазақстан әлемде 2-орында, ал өндіруден 1-орында тұр?",
      en: "For which radioactive element (Z=92) does Kazakhstan hold #2 in global reserves and #1 in global production?"
    },
    options: [
      { id: "a", text: { ru: "Торий (Th)", kk: "Торий (Th)", en: "Thorium (Th)" } },
      { id: "b", text: { ru: "Уран (U)", kk: "Уран (U)", en: "Uranium (U)" } },
      { id: "c", text: { ru: "Плутоний (Pu)", kk: "Плутоний (Pu)", en: "Plutonium (Pu)" } },
      { id: "d", text: { ru: "Радий (Ra)", kk: "Радий (Ra)", en: "Radium (Ra)" } }
    ],
    correctOptionId: "b",
    explanation: {
      ru: "Казахстан — мировой лидер по добыче урана (U, Z=92), обеспечивая более 40% мировых потребностей атомной энергетики благодаря экологичному методу подземного выщелачивания.",
      kk: "Қазақстан — уран (U, Z=92) өндіруден әлемдегі абсолютті көшбасшы (әлемдік сұраныстың 40%-дан астамы).",
      en: "Kazakhstan produces >40% of the world's uranium via clean in-situ recovery mining techniques."
    },
    hint: {
      ru: "Топливо для современных атомных электростанций.",
      kk: "Қазіргі атом электр станцияларының негізгі отыны.",
      en: "Primary fuel for modern nuclear fission reactors."
    },
    xpReward: 40
  },
  {
    id: "kz-3",
    category: "kz_science",
    difficulty: "hard",
    question: {
      ru: "В каком году Дмитрий Иванович Менделеев открыл фундаментальный Периодический закон химических элементов?",
      kk: "Дмитрий Иванович Менделеев химиялық элементтердің периодтық заңын қай жылы ашты?",
      en: "In which year did Dmitri Mendeleev formulate the Periodic Law of Chemical Elements?"
    },
    options: [
      { id: "a", text: { ru: "1869 год", kk: "1869 жыл", en: "1869" } },
      { id: "b", text: { ru: "1905 год", kk: "1905 жыл", en: "1905" } },
      { id: "c", text: { ru: "1812 год", kk: "1812 жыл", en: "1812" } },
      { id: "d", text: { ru: "1789 год", kk: "1789 жыл", en: "1789" } }
    ],
    correctOptionId: "a",
    explanation: {
      ru: "1 марта 1869 года Менделеев завершил работу над «Опытом системы элементов, основанной на их атомном весе и химическом сходстве».",
      kk: "1869 жылы 1 наурызда Д.И. Менделеев элементтердің периодтық жүйесін алғаш рет ғылыми қауымға ұсынды.",
      en: "On March 1, 1869, Mendeleev published his iconic periodic table ordering elements by atomic mass."
    },
    hint: {
      ru: "Конец 60-х годов XIX века (ЮНЕСКО объявило 2019 год юбилеем 150-летия таблицы).",
      kk: "XIX ғасырдың 60-жылдары (2019 жылы 150 жылдық мерейтойы атап өтілді).",
      en: "Celebrated its 150th UNESCO anniversary in 2019."
    },
    xpReward: 50
  }
];

export interface QuizRank {
  minScore: number;
  title: LocalizedString;
  badge: string;
  color: string;
}

export const QUIZ_RANKS: QuizRank[] = [
  {
    minScore: 0,
    title: { ru: "Юный Исследователь", kk: "Жас Зерттеуші", en: "Junior Explorer" },
    badge: "🌱",
    color: "text-slate-500"
  },
  {
    minScore: 120,
    title: { ru: "Лаборант-Практик", kk: "Зертханашы-Практик", en: "Lab Technician" },
    badge: "🧪",
    color: "text-cyan-500"
  },
  {
    minScore: 250,
    title: { ru: "Магистр Молекул", kk: "Молекула Магистрі", en: "Molecular Adept" },
    badge: "⚗️",
    color: "text-indigo-500"
  },
  {
    minScore: 400,
    title: { ru: "Олимпиадный Эксперт", kk: "Олимпиадалық Сарапшы", en: "Olympiad Scholar" },
    badge: "⭐",
    color: "text-amber-500"
  },
  {
    minScore: 600,
    title: { ru: "Академик Химии", kk: "Химия Академигі", en: "Grand Chemist Laureate" },
    badge: "👑",
    color: "text-purple-500"
  }
];

export function getRankByScore(score: number): QuizRank {
  for (let i = QUIZ_RANKS.length - 1; i >= 0; i--) {
    if (score >= QUIZ_RANKS[i].minScore) {
      return QUIZ_RANKS[i];
    }
  }
  return QUIZ_RANKS[0];
}
