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
  {
    "id": "pt-1",
    "category": "periodic_table",
    "difficulty": "easy",
    "question": {
      "ru": "Какой элемент является самым распространенным во Вселенной (~75% всей барионной массы)?",
      "kk": "Әлемдегі ең көп таралған химиялық элемент қандай (барлық массаның ~75%)?",
      "en": "Which chemical element is the most abundant in the universe (~75% of mass)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Кислород (O)",
          "kk": "Оттегі (O)",
          "en": "Oxygen (O)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Водород (H)",
          "kk": "Сутегі (H)",
          "en": "Hydrogen (H)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Гелий (He)",
          "kk": "Гелий (He)",
          "en": "Helium (He)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Углерод (C)",
          "kk": "Көміртек (C)",
          "en": "Carbon (C)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Водород (H, Z=1) — самый легкий и распространенный элемент космоса, главное топливо звезд.",
      "kk": "Сутегі (H, Z=1) — ғаламдағы ең жеңіл әрі көп таралған элемент, жұлдыздардың басты отыны.",
      "en": "Hydrogen (H, Z=1) is the lightest and most abundant element in the cosmos, fueling stellar fusion."
    },
    "hint": {
      "ru": "Его атом состоит всего из 1 протона и 1 электрона.",
      "kk": "Оның атомы небәрі 1 протон мен 1 электроннан тұрады.",
      "en": "Its atom consists of just 1 proton and 1 electron."
    },
    "xpReward": 25
  },
  {
    "id": "pt-2",
    "category": "periodic_table",
    "difficulty": "easy",
    "question": {
      "ru": "Какой единственный жидкий металл существует при нормальных условиях (комнатная температура 20°C)?",
      "kk": "Бөлме температурасында (20°C) сұйық күйде болатын жалғыз металл қандай?",
      "en": "Which is the only liquid metal at standard room temperature (20°C)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Галлий (Ga)",
          "kk": "Галлий (Ga)",
          "en": "Gallium (Ga)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Цезий (Cs)",
          "kk": "Цезий (Cs)",
          "en": "Cesium (Cs)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Ртуть (Hg)",
          "kk": "Сынап (Hg)",
          "en": "Mercury (Hg)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Бром (Br)",
          "kk": "Бром (Br)",
          "en": "Bromine (Br)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Ртуть (Hg, Z=80) плавится при -38.8°C и является единственным жидким металлом при 20°C (бром тоже жидкий, но это неметалл).",
      "kk": "Сынап (Hg, Z=80) -38.8°C-де балқиды, ол бөлме температурасындағы жалғыз сұйық металл.",
      "en": "Mercury (Hg, Z=80) melts at -38.8°C, making it the only metallic element liquid at room temperature."
    },
    "hint": {
      "ru": "Используется в классических медицинских термометрах и барометрах.",
      "kk": "Медициналық термометрлерде бұрын жиі қолданылған.",
      "en": "Historically used in medical thermometers and barometers."
    },
    "xpReward": 25
  },
  {
    "id": "pt-3",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой элемент периодической системы обладает наивысшей электроотрицательностью (3.98 по Полингу)?",
      "kk": "Периодтық жүйедегі электртерістігі ең жоғары элемент қандай (Полинг шкаласы бойынша 3.98)?",
      "en": "Which element has the highest electronegativity on the Pauling scale (3.98)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Фтор (F)",
          "kk": "Фтор (F)",
          "en": "Fluorine (F)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Кислород (O)",
          "kk": "Оттегі (O)",
          "en": "Oxygen (O)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Хлор (Cl)",
          "kk": "Хлор (Cl)",
          "en": "Chlorine (Cl)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Азот (N)",
          "kk": "Азот (N)",
          "en": "Nitrogen (N)"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Фтор (F, Z=9) — самый электроотрицательный неметалл. Он отнимает электроны практически у любых элементов.",
      "kk": "Фтор (F, Z=9) — ең күшті электртеріс бейметалл. Ол басқа элементтерден электрондарды оңай тартады.",
      "en": "Fluorine (F, Z=9) is the most electronegative element, vigorously attracting shared valence electrons."
    },
    "hint": {
      "ru": "Стоит в 17 группе, 2 периоде.",
      "kk": "17-топта, 2-периодта орналасқан.",
      "en": "Located in Group 17, Period 2."
    },
    "xpReward": 35
  },
  {
    "id": "pt-4",
    "category": "periodic_table",
    "difficulty": "easy",
    "question": {
      "ru": "Сколько электронов находится на внешнем электронном уровне у щелочных металлов (Li, Na, K)?",
      "kk": "Сілтілік металдардың (Li, Na, K) сыртқы электрондық қабатында неше электрон бар?",
      "en": "How many valence electrons do alkali metals (Li, Na, K) have?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "2",
          "kk": "2",
          "en": "2"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "7",
          "kk": "7",
          "en": "7"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "1",
          "kk": "1",
          "en": "1"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "8",
          "kk": "8",
          "en": "8"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Щелочные металлы находятся в 1-й группе, поэтому имеют конфигурацию ns¹ с 1 валентным электроном.",
      "kk": "Сілтілік металдар 1-топта орналасқан, сондықтан сыртқы қабатында 1 валенттік электрон болады (ns¹).",
      "en": "Alkali metals belong to Group 1, possessing exactly one valence electron (ns¹)."
    },
    "hint": {
      "ru": "Они легко отдают этот 1 электрон, проявляя степень окисления +1.",
      "kk": "Олар бұл 1 электронды оңай беріп, +1 тотығу дәрежесін көрсетеді.",
      "en": "They easily lose this single electron to form +1 cations."
    },
    "xpReward": 20
  },
  {
    "id": "pt-5",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой химический элемент завершает 7-й период таблицы Менделеева и имеет атомный номер 118?",
      "kk": "Менделеев кестесінің 7-периодын аяқтайтын және атомдық нөмірі 118 болатын элемент қандай?",
      "en": "Which chemical element completes Period 7 of the Periodic Table with atomic number 118?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Теннессин (Ts)",
          "kk": "Теннессин (Ts)",
          "en": "Tennessine (Ts)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Ливерморий (Lv)",
          "kk": "Ливерморий (Lv)",
          "en": "Livermorium (Lv)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Коперниций (Cn)",
          "kk": "Коперниций (Cn)",
          "en": "Copernicium (Cn)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Оганесон (Og)",
          "kk": "Оганесон (Og)",
          "en": "Oganesson (Og)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Оганесон (Og, Z=118) — самый тяжелый утвержденный IUPAC элемент, названный в честь академика Юрия Оганесяна.",
      "kk": "Оганесон (Og, Z=118) — IUPAC бекіткен ең ауыр элемент, академик Юрий Оганесянның құрметіне аталған.",
      "en": "Oganesson (Og, Z=118) concludes Period 7 and is named after nuclear physicist Yuri Oganessian."
    },
    "hint": {
      "ru": "Назван в честь ныне живущего ученого из Дубны.",
      "kk": "Дубна қаласындағы тірі ғалымның құрметіне аталған.",
      "en": "Named after the living leader of Dubna nuclear research."
    },
    "xpReward": 35
  },
  {
    "id": "pt-6",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой металл обладает самой высокой температурой плавления среди всех простых веществ (3422°C)?",
      "kk": "Барлық жай заттардың ішінде ең жоғары балқу температурасына ие металл (3422°C)?",
      "en": "Which metal possesses the highest melting point of all elemental metals (3422°C)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Платина (Pt)",
          "kk": "Платина (Pt)",
          "en": "Platinum (Pt)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Титан (Ti)",
          "kk": "Титан (Ti)",
          "en": "Titanium (Ti)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Осмий (Os)",
          "kk": "Осмий (Os)",
          "en": "Osmium (Os)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Вольфрам (W)",
          "kk": "Вольфрам (W)",
          "en": "Tungsten (W)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Вольфрам (W, Z=74) плавится при 3422°C, поэтому из него изготавливают нити накаливания ламп.",
      "kk": "Вольфрам (W, Z=74) 3422°C температурада балқиды, сондықтан қыздыру шамдарының қылын жасайды.",
      "en": "Tungsten (W, Z=74) boasts the highest melting point at 3422°C, ideal for lamp filaments."
    },
    "hint": {
      "ru": "Его химический символ происходит от немецкого названия Wolfram.",
      "kk": "Оның таңбасы W әрпімен белгіленеді.",
      "en": "Its chemical symbol is W."
    },
    "xpReward": 30
  },
  {
    "id": "pt-7",
    "category": "periodic_table",
    "difficulty": "easy",
    "question": {
      "ru": "Какой самый легкий металл в периодической таблице, плавающий даже на поверхности керосина (плотность 0.534 г/см³)?",
      "kk": "Керосиннің бетінде де қалқып жүретін ең жеңіл металл қандай (тығыздығы 0.534 г/см³)?",
      "en": "Which is the lightest metal in the periodic table, floating even on kerosene (density 0.534 g/cm³)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Алюминий (Al)",
          "kk": "Алюминий (Al)",
          "en": "Aluminum (Al)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Литий (Li)",
          "kk": "Литий (Li)",
          "en": "Lithium (Li)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Натрий (Na)",
          "kk": "Натрий (Na)",
          "en": "Sodium (Na)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Магний (Mg)",
          "kk": "Магний (Mg)",
          "en": "Magnesium (Mg)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Литий (Li, Z=3) — наименее плотный твердый элемент. Широко применяется в современных Li-ion аккумуляторах.",
      "kk": "Литий (Li, Z=3) — тығыздығы ең аз қатты элемент, қазіргі аккумуляторларда кеңінен қолданылады.",
      "en": "Lithium (Li, Z=3) has density 0.534 g/cm³, half that of water, essential for modern batteries."
    },
    "hint": {
      "ru": "Атомный номер 3, щелочной металл.",
      "kk": "Атомдық нөмірі 3, сілтілік металл.",
      "en": "Atomic number 3, an alkali metal."
    },
    "xpReward": 20
  },
  {
    "id": "pt-8",
    "category": "periodic_table",
    "difficulty": "hard",
    "question": {
      "ru": "Сколько всего групп в современной длиннопериодной форме таблицы Менделеева, утвержденной IUPAC?",
      "kk": "IUPAC бекіткен қазіргі ұзын периодты Менделеев кестесінде барлығы неше топ бар?",
      "en": "How many groups are there in the modern standard long-form Periodic Table recommended by IUPAC?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "8",
          "kk": "8",
          "en": "8"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "18",
          "kk": "18",
          "en": "18"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "10",
          "kk": "10",
          "en": "10"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "32",
          "kk": "32",
          "en": "32"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "В современной таблице ровно 18 групп (столбцов): от 1-й (щелочные металлы) до 18-й (благородные газы).",
      "kk": "Қазіргі кестеде дәл 18 топ бар: 1-топтан (сілтілік) 18-топқа дейін (асыл газдар).",
      "en": "The standard IUPAC Periodic Table numbers groups 1 through 18 consecutively."
    },
    "hint": {
      "ru": "Благородные газы образуют последнюю группу под номером 18.",
      "kk": "Асыл газдар 18-топты құрайды.",
      "en": "Noble gases occupy Group 18."
    },
    "xpReward": 30
  },
  {
    "id": "pt-9",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой химический элемент впервые был открыт астрономами на Солнце при помощи спектроскопа раньше, чем на Земле?",
      "kk": "Жерде табылғанға дейін күн сәулесінің спектрін зерттеу арқылы Күннен ашылған элемент қандай?",
      "en": "Which element was discovered in the solar spectrum before ever being isolated on Earth?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Водород (H)",
          "kk": "Сутегі (H)",
          "en": "Hydrogen (H)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Гелий (He)",
          "kk": "Гелий (He)",
          "en": "Helium (He)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Неон (Ne)",
          "kk": "Неон (Ne)",
          "en": "Neon (Ne)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Аргон (Ar)",
          "kk": "Аргон (Ar)",
          "en": "Argon (Ar)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Гелий (He, от греч. Helios — Солнце) был открыт Пьером Жансеном и Норманом Локьером во время солнечного затмения 1868 года.",
      "kk": "Гелий (He, грекше Helios — Күн) 1868 жылғы күн тұтылуы кезінде Күн спектріндегі сары сызықтан ашылды.",
      "en": "Helium (He) was observed as a yellow spectral emission line during the 1868 solar eclipse by Lockyer & Janssen."
    },
    "hint": {
      "ru": "Его название переводится как 'солнечный'.",
      "kk": "Оның атауы 'Күн' сөзінен шыққан.",
      "en": "Its name derives from the Greek sun god Helios."
    },
    "xpReward": 35
  },
  {
    "id": "pt-10",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой металл обладает наивысшей электрической и тепловой проводимостью среди всех химических элементов?",
      "kk": "Барлық химиялық элементтер ішінде электр және жылу өткізгіштігі ең жоғары металл қандай?",
      "en": "Which metal exhibits the highest electrical and thermal conductivity of all chemical elements?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Медь (Cu)",
          "kk": "Мыс (Cu)",
          "en": "Copper (Cu)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Золото (Au)",
          "kk": "Алтын (Au)",
          "en": "Gold (Au)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Серебро (Ag)",
          "kk": "Күміс (Ag)",
          "en": "Silver (Ag)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Алюминий (Al)",
          "kk": "Алюминий (Al)",
          "en": "Aluminum (Al)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Серебро (Ag, Z=47) имеет удельную электропроводность 63×10⁶ См/м — абсолютный рекорд среди металлов.",
      "kk": "Күміс (Ag, Z=47) — электр тогын барлық металдардан жақсы өткізеді.",
      "en": "Silver (Ag, Z=47) has the highest electrical conductivity of any known metal, slightly surpassing copper."
    },
    "hint": {
      "ru": "Благородный металл 11 группы, используется в высокоточных контактах.",
      "kk": "11-топтың асыл металы.",
      "en": "Group 11 precious metal, symbol Ag from Argentum."
    },
    "xpReward": 30
  },
  {
    "id": "pt-11",
    "category": "periodic_table",
    "difficulty": "easy",
    "question": {
      "ru": "Какой полупроводниковый элемент является основой всех процессоров и микросхем современной электроники?",
      "kk": "Қазіргі электроника микрочиптері мен процессорларының негізі болып табылатын жартылай өткізгіш?",
      "en": "Which semiconductor element is the physical foundation of modern microchips and computer processors?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Германий (Ge)",
          "kk": "Германий (Ge)",
          "en": "Germanium (Ge)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Углерод (C)",
          "kk": "Көміртек (C)",
          "en": "Carbon (C)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Олово (Sn)",
          "kk": "Қалайы (Sn)",
          "en": "Tin (Sn)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Кремний (Si)",
          "kk": "Кремний (Si)",
          "en": "Silicon (Si)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Кремний (Si, Z=14) — полупроводник 14-й группы, главный компонент 'Кремниевой долины' и микроэлектроники.",
      "kk": "Кремний (Si, Z=14) — барлық заманауи микросхемалар мен компьютерлік чиптердің негізі.",
      "en": "Silicon (Si, Z=14) is a metalloid semiconductor forming the bedrock of integrated circuits and solar cells."
    },
    "hint": {
      "ru": "В честь него названа Silicon Valley.",
      "kk": "Кремний алқабы осы элемент құрметіне аталған.",
      "en": "Silicon Valley is named after this element."
    },
    "xpReward": 20
  },
  {
    "id": "pt-12",
    "category": "periodic_table",
    "difficulty": "hard",
    "question": {
      "ru": "Какое максимальное число электронов способна вместить d-подоболочка атома?",
      "kk": "Атомның d-деңгейшесі ең көп дегенде неше электронды сыйғыза алады?",
      "en": "What is the maximum number of electrons that a d-subshell can accommodate?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "10",
          "kk": "10",
          "en": "10"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "2",
          "kk": "2",
          "en": "2"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "6",
          "kk": "6",
          "en": "6"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "14",
          "kk": "14",
          "en": "14"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "d-подоболочка состоит из 5 орбиталей, каждая из которых вмещает 2 электрона с противоположными спинами: 5 × 2 = 10.",
      "kk": "d-деңгейшесінде 5 орбиталь бар, әрқайсысына 2 электроннан: 5 × 2 = 10 электрон сияды.",
      "en": "A d-subshell comprises 5 orbitals, each holding up to 2 paired electrons (2l+1 = 5 × 2 = 10)."
    },
    "hint": {
      "ru": "s вмещает 2, p — 6, d — ?",
      "kk": "s — 2, p — 6, ал d неше?",
      "en": "s has 2, p has 6, so d has..."
    },
    "xpReward": 40
  },
  {
    "id": "pt-13",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Как изменяется атомный радиус нейтральных атомов в периодах таблицы Менделеева слева направо?",
      "kk": "Менделеев кестесінің периодтарында солдан оңға қарай атом радиусы қалай өзгереді?",
      "en": "How does the atomic radius of neutral atoms change from left to right across a period?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Увеличивается",
          "kk": "Артады",
          "en": "Increases"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Не изменяется",
          "kk": "Өзгермейді",
          "en": "Remains constant"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Сначала падает, затем растет",
          "kk": "Алдымен кемиді, сосын өседі",
          "en": "Decreases then increases"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Уменьшается",
          "kk": "Кемиді",
          "en": "Decreases"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Слева направо заряд ядра Z растет, сильнее притягивая электроны того же уровня, поэтому радиус атома сжимается.",
      "kk": "Солдан оңға қарай ядро заряды артып, сыртқы электрондарды күштірек тартатындықтан радиус кішірейеді.",
      "en": "Across a period, nuclear charge Z increases while shielding remains similar, pulling electrons closer and shrinking the radius."
    },
    "hint": {
      "ru": "Заряд ядра растет, притягивая электроны сильнее.",
      "kk": "Ядро заряды артып, электрондарды өзіне тартады.",
      "en": "Increasing nuclear charge pulls outer electron shells inward."
    },
    "xpReward": 30
  },
  {
    "id": "pt-14",
    "category": "periodic_table",
    "difficulty": "hard",
    "question": {
      "ru": "Какой металл плавится в теплой ладони человека, имея температуру плавления всего 29.8°C?",
      "kk": "Адамның жылы алақанында балқып кететін, балқу температурасы 29.8°C металл қандай?",
      "en": "Which metal melts in the human hand with a melting point of just 29.8°C?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Натрий (Na)",
          "kk": "Натрий (Na)",
          "en": "Sodium (Na)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Свинец (Pb)",
          "kk": "Қорғасын (Pb)",
          "en": "Lead (Pb)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Галлий (Ga)",
          "kk": "Галлий (Ga)",
          "en": "Gallium (Ga)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Олово (Sn)",
          "kk": "Қалайы (Sn)",
          "en": "Tin (Sn)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Галлий (Ga, Z=31) плавится при 29.76°C. Если положить кусочек галлия на ладонь (температура тела ~36.6°C), он превратится в жидкую каплю!",
      "kk": "Галлий (Ga, Z=31) 29.76°C температурада балқиды. Адам алақанында лезде сұйыққа айналады.",
      "en": "Gallium (Ga, Z=31) melts at 29.8°C, transforming into a silvery liquid from body heat alone."
    },
    "hint": {
      "ru": "Элемент 13 группы, предсказанный Менделеевым как эка-алюминий.",
      "kk": "Менделеев оны эка-алюминий деп болжаған болатын.",
      "en": "Predicted by Mendeleev as eka-aluminum."
    },
    "xpReward": 35
  },
  {
    "id": "pt-15",
    "category": "periodic_table",
    "difficulty": "easy",
    "question": {
      "ru": "Какой элемент является самым распространенным металлом в земной коре (~8% по массе)?",
      "kk": "Жер қыртысында ең көп таралған металл қандай (массасы бойынша ~8%)?",
      "en": "Which is the most abundant metallic element in the Earth's crust (~8% by mass)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Железо (Fe)",
          "kk": "Темір (Fe)",
          "en": "Iron (Fe)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Кальций (Ca)",
          "kk": "Кальций (Ca)",
          "en": "Calcium (Ca)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Алюминий (Al)",
          "kk": "Алюминий (Al)",
          "en": "Aluminum (Al)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Медь (Cu)",
          "kk": "Мыс (Cu)",
          "en": "Copper (Cu)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Алюминий (Al, Z=13) — самый распространенный металл литосферы (железо занимает второе место с ~5%).",
      "kk": "Алюминий (Al, Z=13) — жер қыртысындағы ең мол металл (темір екінші орында).",
      "en": "Aluminum is the third most abundant element and the single most common metal in Earth's crust."
    },
    "hint": {
      "ru": "Из него делают фюзеляжи самолетов и банки для напитков.",
      "kk": "Ұшақтар корпусы мен банкалар осы металдан жасалады.",
      "en": "Lightweight metal used extensively in aerospace."
    },
    "xpReward": 25
  },
  {
    "id": "pt-16",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой благородный газ используется в наружной рекламе и дает классическое оранжево-красное свечение?",
      "kk": "Жарнамалық жарық түтіктерде қолданылатын және қызғылт-сары жарқыл беретін асыл газ?",
      "en": "Which noble gas is famous for producing a brilliant orange-red glow in illuminated signs?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Аргон (Ar)",
          "kk": "Аргон (Ar)",
          "en": "Argon (Ar)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Гелий (He)",
          "kk": "Гелий (He)",
          "en": "Helium (He)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Неон (Ne)",
          "kk": "Неон (Ne)",
          "en": "Neon (Ne)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Криптон (Kr)",
          "kk": "Криптон (Kr)",
          "en": "Krypton (Kr)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Неон (Ne, Z=10) в газоразрядных лампах дает интенсивное огненно-красно-оранжевое свечение.",
      "kk": "Неон (Ne, Z=10) электр разряды кезінде ашық қызғылт-қызыл түспен жарқырайды.",
      "en": "Neon gas in electrical discharge tubes emits distinctive reddish-orange light."
    },
    "hint": {
      "ru": "Элемент 18 группы, период 2.",
      "kk": "18-топ, 2-период элементі.",
      "en": "Atomic number 10, Group 18."
    },
    "xpReward": 25
  },
  {
    "id": "pt-17",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой галоген при комнатной температуре представляет собой темно-фиолетовые кристаллы с металлическим блеском?",
      "kk": "Бөлме температурасында металдық жылтыры бар қою күлгін кристалдар түрінде болатын галоген?",
      "en": "Which halogen forms dark purple-black crystals with a metallic luster at room temperature?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Фтор (F)",
          "kk": "Фтор (F)",
          "en": "Fluorine (F)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Иод (I)",
          "kk": "Йод (I)",
          "en": "Iodine (I)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Хлор (Cl)",
          "kk": "Хлор (Cl)",
          "en": "Chlorine (Cl)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Бром (Br)",
          "kk": "Бром (Br)",
          "en": "Bromine (Br)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Иод (I, Z=53) — твердый галоген, который при нагревании легко сублимируется в фиолетовый пар.",
      "kk": "Йод (I, Z=53) — қатты галоген, қыздырғанда сұйыққа айналмай бірден күлгін буға (сублимация) айналады.",
      "en": "Iodine (I, Z=53) is a solid halogen that readily sublimes into a vivid violet gas upon mild heating."
    },
    "hint": {
      "ru": "Спиртовой раствор этого вещества есть в каждой аптечке.",
      "kk": "Оның спирттік ерітіндісі әрбір дәрі қобдишасында бар.",
      "en": "Its tincture is a household medical antiseptic."
    },
    "xpReward": 30
  },
  {
    "id": "pt-18",
    "category": "periodic_table",
    "difficulty": "easy",
    "question": {
      "ru": "Какое общее групповое название носят элементы 17-й группы таблицы Менделеева (F, Cl, Br, I, At)?",
      "kk": "Менделеев кестесіндегі 17-топ элементтерінің (F, Cl, Br, I, At) жалпы атауы қандай?",
      "en": "What group name is shared by the elements of Group 17 (F, Cl, Br, I, At)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Халькогены",
          "kk": "Халькогендер",
          "en": "Chalcogens"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Галогены",
          "kk": "Галогендер",
          "en": "Halogens"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Щелочноземельные",
          "kk": "Сілтілік-жер",
          "en": "Alkaline earth"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Актиноиды",
          "kk": "Актиноидтар",
          "en": "Actinides"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Слово 'галогены' происходит от греческого 'рождающие соли' (образуют соли вроде NaCl).",
      "kk": "'Галогендер' грек тілінен аударғанда 'тұз тудырушылар' деген мағына береді.",
      "en": "Halogens derives from Greek 'salt-producers', readily forming halide salts with metals."
    },
    "hint": {
      "ru": "Их соли мы добавляем в пищу каждый день.",
      "kk": "Ас тұзы осы топтың элементінен тұрады.",
      "en": "They form table salt with alkali metals."
    },
    "xpReward": 20
  },
  {
    "id": "pt-19",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой химический элемент имеет символ Sn и латинское название Stannum?",
      "kk": "Таңбасы Sn және латынша атауы Stannum болатын химиялық элемент қандай?",
      "en": "Which chemical element has the symbol Sn and historical Latin name Stannum?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Сурьма",
          "kk": "Сүрме",
          "en": "Antimony"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Свинец",
          "kk": "Қорғасын",
          "en": "Lead"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Селен",
          "kk": "Селен",
          "en": "Selenium"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Олово",
          "kk": "Қалайы",
          "en": "Tin"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Олово (Sn, Z=50) — металл 14-й группы. Подвержен явлению 'оловянной чумы' при морозе.",
      "kk": "Қалайы (Sn, Z=50) — 14-топ металы, ежелден қола қорытпасын жасауда қолданылған.",
      "en": "Tin has symbol Sn (Stannum) and atomic number 50, historically combined with copper to create bronze."
    },
    "hint": {
      "ru": "Из его сплава с медью люди выплавляли бронзу.",
      "kk": "Мыспен қосып қола жасаған.",
      "en": "Combined with copper to usher in the Bronze Age."
    },
    "xpReward": 25
  },
  {
    "id": "pt-20",
    "category": "periodic_table",
    "difficulty": "hard",
    "question": {
      "ru": "Какое квантовое число определяет геометрическую форму атомной орбитали (s-сфера, p-гантель, d-лепестки)?",
      "kk": "Атомдық орбитальдың кеңістіктік пішінін (s-сфера, p-гантель, d-көпжапырақ) анықтайтын квант саны?",
      "en": "Which quantum number dictates the spatial geometric shape of an atomic orbital?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Главное (n)",
          "kk": "Бас квант саны (n)",
          "en": "Principal (n)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Магнитное (m)",
          "kk": "Магниттік (m)",
          "en": "Magnetic (m)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Орбитальное / Азимутальное (l)",
          "kk": "Орбиталь / Азимут (l)",
          "en": "Orbital / Azimuthal (l)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Спиновое (s)",
          "kk": "Спиндік (s)",
          "en": "Spin (s)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Орбитальное квантовое число l (0 для s, 1 для p, 2 для d, 3 для f) задает форму электронного облака.",
      "kk": "Орбиталь квант саны l деңгейшенің пішінін анықтайды (l=0 сфера, l=1 гантель).",
      "en": "The azimuthal quantum number l determines angular momentum and subshell orbital shape."
    },
    "hint": {
      "ru": "Оно принимает значения от 0 до n-1.",
      "kk": "Ол 0-ден n-1-ге дейінгі мәндерді қабылдайды.",
      "en": "Takes integer values from 0 up to n-1."
    },
    "xpReward": 40
  },
  {
    "id": "pt-21",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой металл является самым плотным простым веществом во Вселенной (плотность 22.59 г/см³)?",
      "kk": "Ғаламдағы ең жоғары тығыздыққа ие металл (тығыздығы 22.59 г/см³)?",
      "en": "Which metal has the greatest density among all elemental substances (22.59 g/cm³)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Свинец (Pb)",
          "kk": "Қорғасын (Pb)",
          "en": "Lead (Pb)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Золото (Au)",
          "kk": "Алтын (Au)",
          "en": "Gold (Au)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Уран (U)",
          "kk": "Уран (U)",
          "en": "Uranium (U)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Осмий (Os)",
          "kk": "Осмий (Os)",
          "en": "Osmium (Os)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Осмий (Os, Z=76) превосходит даже платину и золото, имея удельную плотность 22.59 г/см³.",
      "kk": "Осмий (Os, Z=76) — табиғаттағы ең ауыр әрі тығыз металл (тығыздығы 22.59 г/см³).",
      "en": "Osmium (Os, Z=76) is the densest naturally occurring element, slightly beating iridium."
    },
    "hint": {
      "ru": "Платиновый металл 8 группы.",
      "kk": "Платина тобының 8-топтағы металы.",
      "en": "A platinum-group metal with symbol Os."
    },
    "xpReward": 35
  },
  {
    "id": "pt-22",
    "category": "periodic_table",
    "difficulty": "easy",
    "question": {
      "ru": "Какой элемент входит в состав гемоглобина крови и связывает молекулы кислорода?",
      "kk": "Қандағы гемоглобиннің құрамына кіретін және оттегіні байланыстыратын металл қандай?",
      "en": "Which metallic element sits at the center of hemoglobin to bind oxygen in human blood?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Кальций (Ca)",
          "kk": "Кальций (Ca)",
          "en": "Calcium (Ca)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Железо (Fe)",
          "kk": "Темір (Fe)",
          "en": "Iron (Fe)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Магний (Mg)",
          "kk": "Магний (Mg)",
          "en": "Magnesium (Mg)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Цинк (Zn)",
          "kk": "Мырыш (Zn)",
          "en": "Zinc (Zn)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Ионы железа Fe²⁺ в составе гема обратимо присоединяют молекулярный кислород O₂.",
      "kk": "Гемоглобиннің құрамындағы темір ионы (Fe²⁺) өкпеден дене мүшелеріне оттегі тасымалдайды.",
      "en": "Iron Fe²⁺ ions in the heme group reversibly bind dioxygen for transport throughout the body."
    },
    "hint": {
      "ru": "Именно этот металл придает крови красный цвет.",
      "kk": "Қанға қызыл түс беретін элемент.",
      "en": "Gives blood its characteristic red color."
    },
    "xpReward": 20
  },
  {
    "id": "pt-23",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какая аллотропная модификация углерода обладает рекордной твердостью (10 по шкале Мооса)?",
      "kk": "Көміртектің Моос шкаласы бойынша ең жоғары қаттылыққа (10) ие аллотропиялық түрі қандай?",
      "en": "Which allotrope of carbon exhibits extreme hardness, rated 10 on the Mohs hardness scale?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Алмаз",
          "kk": "Алмаз",
          "en": "Diamond"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Графит",
          "kk": "Графит",
          "en": "Graphite"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Фуллерен",
          "kk": "Фуллерен",
          "en": "Fullerene"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Карбин",
          "kk": "Карбин",
          "en": "Carbyne"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "В кристаллической решетке алмаза каждый атом углерода находится в sp³-гибридизации и связан с 4 соседями прочнейшими связями.",
      "kk": "Алмаз кристалдық торында әрбір көміртек атомы төрт көршісімен берік ковалентті байланысқан (sp³).",
      "en": "In diamond, rigid sp³ tetrahedral covalent bonding creates the hardest natural mineral known."
    },
    "hint": {
      "ru": "Ограненный алмаз называют бриллиантом.",
      "kk": "Өңделген алмасты бриллиант деп атайды.",
      "en": "Cut and polished diamonds are celebrated gems."
    },
    "xpReward": 25
  },
  {
    "id": "pt-24",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой элемент назван в честь выдающегося польско-французского физика Марии Склодовской-Кюри?",
      "kk": "Көрнекті ғалым Мария Склодовская-Кюридің құрметіне аталған элемент қандай?",
      "en": "Which chemical element was named in honor of Nobel laureate Marie Curie?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Полоний (Po)",
          "kk": "Полоний (Po)",
          "en": "Polonium (Po)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Франций (Fr)",
          "kk": "Франций (Fr)",
          "en": "Francium (Fr)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Кюрий (Cm)",
          "kk": "Кюрий (Cm)",
          "en": "Curium (Cm)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Радий (Ra)",
          "kk": "Радий (Ra)",
          "en": "Radium (Ra)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Кюрий (Cm, Z=96) назван в честь Пьера и Марии Кюри. (Полоний же Мария назвала в честь своей родины Польши).",
      "kk": "Кюрий (Cm, Z=96) Пьер және Мария Кюридің құрметіне аталған актиноидтық радиоактивті элемент.",
      "en": "Curium (Cm, Z=96) honors Pierre and Marie Curie for their pioneering work on radioactivity."
    },
    "hint": {
      "ru": "Синтетический актиноид, атомный номер 96.",
      "kk": "Атомдық нөмірі 96 болатын актиноид.",
      "en": "Synthetic actinide, symbol Cm."
    },
    "xpReward": 30
  },
  {
    "id": "pt-25",
    "category": "periodic_table",
    "difficulty": "hard",
    "question": {
      "ru": "Чему равно число нейтронов в ядре тяжелого изотопа урана-238 (атомный номер 92)?",
      "kk": "Уран-238 ауыр изотопының ядросындағы нейтрондар саны нешеге тең (атомдық нөмірі 92)?",
      "en": "How many neutrons reside in the nucleus of an Uranium-238 atom (atomic number 92)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "146",
          "kk": "146",
          "en": "146"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "92",
          "kk": "92",
          "en": "92"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "238",
          "kk": "238",
          "en": "238"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "119",
          "kk": "119",
          "en": "119"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Число нейтронов N = Массовое число A − Заряд ядра Z: 238 − 92 = 146.",
      "kk": "Нейтрондар саны: N = Массалық сан (238) − Протондар саны (92) = 146.",
      "en": "Neutron count equals mass number minus atomic number: N = 238 − 92 = 146."
    },
    "hint": {
      "ru": "Вычтите 92 из 238.",
      "kk": "238-ден 92-ні азайтыңыз.",
      "en": "Subtract 92 from 238."
    },
    "xpReward": 35
  },
  {
    "id": "pt-26",
    "category": "periodic_table",
    "difficulty": "easy",
    "question": {
      "ru": "К какому классу веществ относятся элементы 18-й группы (He, Ne, Ar, Kr, Xe, Rn)?",
      "kk": "Менделеев кестесінің 18-тобының элементтері (He, Ne, Ar, Kr, Xe, Rn) қай топка жатады?",
      "en": "What family name belongs to the Group 18 elements (He, Ne, Ar, Kr, Xe, Rn)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Щелочные металлы",
          "kk": "Сілтілік металдар",
          "en": "Alkali metals"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Благородные (инертные) газы",
          "kk": "Асыл (инертті) газдар",
          "en": "Noble (inert) gases"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Галогены",
          "kk": "Галогендер",
          "en": "Halogens"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Переходные металлы",
          "kk": "Ауыспалы металдар",
          "en": "Transition metals"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Элементы 18-й группы имеют полностью завершенную внешнюю электронную оболочку (ns²np⁶), поэтому практически инертны.",
      "kk": "18-топ элементтерінің сыртқы қабаты толық (8 электрон), сондықтан олар химиялық жағынан өте енжар.",
      "en": "Noble gases possess stable octet outer electron configurations, making them chemically inert."
    },
    "hint": {
      "ru": "Они практически не вступают в химические реакции.",
      "kk": "Олар басқа заттармен реакцияға түспейді.",
      "en": "Characterized by complete lack of chemical reactivity under standard conditions."
    },
    "xpReward": 20
  },
  {
    "id": "pt-27",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой элемент 8-го периода таблицы Менделеева прямо сейчас пытаются синтезировать в ОИЯИ (Дубна) и RIKEN?",
      "kk": "Қазіргі таңда Дубна мен RIKEN зертханаларында синтезделуге тырысып жатқан 8-периодтың №119 элементі?",
      "en": "Which Period 8 chemical element with atomic number 119 is actively being pursued in Dubna and RIKEN?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Унунэнний (Uue)",
          "kk": "Унунэнний (Uue)",
          "en": "Ununennium (Uue)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Унбинилий (Ubn)",
          "kk": "Унбинилий (Ubn)",
          "en": "Unbinilium (Ubn)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Оганесон (Og)",
          "kk": "Оганесон (Og)",
          "en": "Oganesson (Og)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Московий (Mc)",
          "kk": "Московий (Mc)",
          "en": "Moscovium (Mc)"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Унунэнний (Uue, Z=119) станет первым элементом 8-го периода периодической системы.",
      "kk": "Унунэнний (Uue, Z=119) Менделеев кестесінің 8-периодын ашатын алғашқы элемент болмақ.",
      "en": "Ununennium (Uue, Z=119) will be the inaugural element of Period 8 when officially confirmed."
    },
    "hint": {
      "ru": "Его атомный номер 119, символ Uue.",
      "kk": "Атомдық нөмірі 119, белгісі Uue.",
      "en": "Symbol Uue, element 119."
    },
    "xpReward": 35
  },
  {
    "id": "pt-28",
    "category": "periodic_table",
    "difficulty": "hard",
    "question": {
      "ru": "Какое явление объясняет, почему золото имеет желтый цвет, а ртуть является жидкой?",
      "kk": "Алтынның сары түсін және сынаптың бөлме температурасында сұйық болуын түсіндіретін физикалық құбылыс?",
      "en": "Which physical phenomenon accounts for the yellow color of gold and why mercury is liquid at room temperature?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Закон Архимеда",
          "kk": "Архимед заңы",
          "en": "Archimedes principle"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Радиоактивный распад",
          "kk": "Радиоактивті ыдырау",
          "en": "Radioactive decay"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Релятивистские эффекты электронов",
          "kk": "Электрондардың релятивистік әсерлері",
          "en": "Relativistic electron effects"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Водородная связь",
          "kk": "Сутектік байланыс",
          "en": "Hydrogen bonding"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "У тяжелых ядер 1s и s-электроны движутся с околосветовой скоростью (~0.58c для золота), сжимая s-орбитали и изменяя поглощение синего света.",
      "kk": "Ауыр ядролар маңында электрондар жарық жылдамдығына жуық жылдамдықпен қозғалады, бұл орбитальдардың сығылуына және қасиеттерінің өзгеруіне әкеледі.",
      "en": "Relativistic contraction of s-orbitals due to near-luminal velocities shifts gold absorption into blue, reflecting brilliant yellow."
    },
    "hint": {
      "ru": "Связано с теорией относительности Эйнштейна.",
      "kk": "Эйнштейннің салыстырмалылық теориясымен байланысты.",
      "en": "Derived from Einstein's special relativity at high nuclear charge Z."
    },
    "xpReward": 45
  },
  {
    "id": "pt-29",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой неметалл при нормальных условиях является единственным жидким неметаллом темно-красного цвета?",
      "kk": "Қалыпты жағдайда қою қызыл түсті сұйық күйде болатын жалғыз бейметалл қандай?",
      "en": "Which nonmetal is the only nonmetallic element that exists as a dark red liquid at standard conditions?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Бром (Br)",
          "kk": "Бром (Br)",
          "en": "Bromine (Br)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Хлор (Cl)",
          "kk": "Хлор (Cl)",
          "en": "Chlorine (Cl)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Ртуть (Hg)",
          "kk": "Сынап (Hg)",
          "en": "Mercury (Hg)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Фосфор (P)",
          "kk": "Фосфор (P)",
          "en": "Phosphorus (P)"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Бром (Br, Z=35) — единственный жидкий неметалл. Он испаряется с образованием едких удушливых буро-красных паров.",
      "kk": "Бром (Br, Z=35) — қалыпты жағдайда сұйық жалғыз бейметалл (сынап — металл).",
      "en": "Bromine (Br, Z=35) is the only liquid nonmetallic element at room temperature, releasing pungent reddish fumes."
    },
    "hint": {
      "ru": "Галоген 4-го периода.",
      "kk": "4-периодтағы галоген.",
      "en": "Group 17 halogen, period 4."
    },
    "xpReward": 30
  },
  {
    "id": "pt-30",
    "category": "periodic_table",
    "difficulty": "easy",
    "question": {
      "ru": "Сколько протонов содержит ядро атома углерода (C)?",
      "kk": "Көміртек (C) атомының ядросында неше протон бар?",
      "en": "How many protons reside in the nucleus of a Carbon (C) atom?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "6",
          "kk": "6",
          "en": "6"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "4",
          "kk": "4",
          "en": "4"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "12",
          "kk": "12",
          "en": "12"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "14",
          "kk": "14",
          "en": "14"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Порядковый номер углерода Z = 6, следовательно, в ядре ровно 6 протонов.",
      "kk": "Көміртектің атомдық реттік нөмірі 6-ға тең, демек ядрода дәл 6 протон бар.",
      "en": "Carbon has atomic number Z = 6, meaning its nucleus strictly contains 6 protons."
    },
    "hint": {
      "ru": "Порядковый номер углерода в таблице Менделеева.",
      "kk": "Көміртектің Менделеев кестесіндегі реттік нөмірі.",
      "en": "Atomic number 6 in the periodic table."
    },
    "xpReward": 20
  },
  {
    "id": "pt-31",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой металл называют 'крылатым металлом' благодаря его легкости и прочности сплавов в авиастроении?",
      "kk": "Жеңілдігі мен қорытпаларының беріктігіне байланысты авиацияда 'қанатты металл' деп аталған металл?",
      "en": "Which metal is popularly called the 'winged metal' for its low density and vital role in aviation?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Алюминий (Al)",
          "kk": "Алюминий (Al)",
          "en": "Aluminum (Al)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Титан (Ti)",
          "kk": "Титан (Ti)",
          "en": "Titanium (Ti)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Магний (Mg)",
          "kk": "Магний (Mg)",
          "en": "Magnesium (Mg)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Бериллий (Be)",
          "kk": "Бериллий (Be)",
          "en": "Beryllium (Be)"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Алюминий и его сплав дюралюминий стали основой авиастроения XX века благодаря плотности всего 2.7 г/см³.",
      "kk": "Алюминий (Al) және оның дюралюминий қорытпасы жеңілдігіне байланысты ұшақ жасауда негізгі металл болды.",
      "en": "Aluminum revolutionized aviation as a lightweight structural metal (duralumin)."
    },
    "hint": {
      "ru": "Плотность около 2.7 г/см³, атомный номер 13.",
      "kk": "Атомдық нөмірі 13.",
      "en": "Atomic number 13, Group 13."
    },
    "xpReward": 25
  },
  {
    "id": "pt-32",
    "category": "periodic_table",
    "difficulty": "hard",
    "question": {
      "ru": "Какой химический элемент имеет максимальное сродство к электрону среди всех элементов периодической системы?",
      "kk": "Периодтық жүйедегі электронға ынтықтығы ең жоғары элемент қандай?",
      "en": "Which chemical element possesses the highest electron affinity in the entire periodic table?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Фтор (F)",
          "kk": "Фтор (F)",
          "en": "Fluorine (F)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Кислород (O)",
          "kk": "Оттегі (O)",
          "en": "Oxygen (O)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Сера (S)",
          "kk": "Күкірт (S)",
          "en": "Sulfur (S)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Хлор (Cl)",
          "kk": "Хлор (Cl)",
          "en": "Chlorine (Cl)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Хлор (Cl) имеет максимальное сродство к электрону (-349 кДж/моль), превосходя фтор из-за меньшего межэлектронного отталкивания на 3p-орбитали.",
      "kk": "Хлордың (Cl) электронға ынтықтығы ең жоғары (-349 кДж/моль), өйткені фторда 2p қабаты өте тығыз.",
      "en": "Chlorine has the highest electron affinity (-349 kJ/mol), slightly exceeding fluorine due to lower electron-electron repulsion."
    },
    "hint": {
      "ru": "Не путайте с электроотрицательностью фтора!",
      "kk": "Фтордың электртерістігімен шатастырмаңыз!",
      "en": "Don't confuse with electronegativity — this is electron affinity."
    },
    "xpReward": 40
  },
  {
    "id": "pt-33",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой элемент 4-го периода образует основу всех черных металлов и чугуна со сталью?",
      "kk": "Барлық қара металдардың, шойын мен болаттың негізін құрайтын 4-период элементі?",
      "en": "Which Period 4 element forms the foundation of all ferrous metals, cast iron, and steel?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Никель (Ni)",
          "kk": "Никель (Ni)",
          "en": "Nickel (Ni)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Хром (Cr)",
          "kk": "Хром (Cr)",
          "en": "Chromium (Cr)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Кобальт (Co)",
          "kk": "Кобальт (Co)",
          "en": "Cobalt (Co)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Железо (Fe)",
          "kk": "Темір (Fe)",
          "en": "Iron (Fe)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Железо (Fe, Z=26) — важнейший конструкционный металл цивилизации, выплавляемый в доменных печах.",
      "kk": "Темір (Fe, Z=26) — өркениеттің ең маңызды құрылыс металы, болат пен шойынның негізі.",
      "en": "Iron (Fe, Z=26) is the most utilized industrial metal on Earth, alloyed with carbon to yield steel."
    },
    "hint": {
      "ru": "Имеет символ Fe от латинского Ferrum.",
      "kk": "Латынша атауы Ferrum.",
      "en": "Symbol Fe, atomic number 26."
    },
    "xpReward": 25
  },
  {
    "id": "pt-34",
    "category": "periodic_table",
    "difficulty": "easy",
    "question": {
      "ru": "Какой химический элемент таблицы Менделеева назван в честь создателя периодического закона?",
      "kk": "Менделеев кестесіндегі периодтық заңның авторының құрметіне аталған элемент қандай?",
      "en": "Which chemical element was named in honor of the architect of the Periodic Table?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Эйнштейний",
          "kk": "Эйнштейний",
          "en": "Einsteinium"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Менделевий (Md)",
          "kk": "Менделевий (Md)",
          "en": "Mendelevium (Md)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Нобелий (No)",
          "kk": "Нобелий (No)",
          "en": "Nobelium (No)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Резерфордий (Rf)",
          "kk": "Резерфордий (Rf)",
          "en": "Rutherfordium (Rf)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Менделевий (Md, Z=101) был синтезирован в Беркли группой Гленна Сиборга в 1955 году и назван в честь Д.И. Менделеева.",
      "kk": "Менделевий (Md, Z=101) 1955 жылы АҚШ-та синтезделіп, Д.И. Менделеевтің құрметіне аталды.",
      "en": "Mendelevium (Md, Z=101) was synthesized in 1955 and named to honor Dmitri Mendeleev."
    },
    "hint": {
      "ru": "Атомный номер 101.",
      "kk": "Атомдық нөмірі 101.",
      "en": "Element 101."
    },
    "xpReward": 20
  },
  {
    "id": "pt-35",
    "category": "periodic_table",
    "difficulty": "hard",
    "question": {
      "ru": "Какая электронная конфигурация соответствует атому серы (S, Z=16) в основном состоянии?",
      "kk": "Күкірт (S, Z=16) атомының негізгі күйдегі электрондық конфигурациясы қандай?",
      "en": "Which electron configuration represents sulfur (S, Z=16) in its ground state?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "1s² 2s² 2p⁶ 3s² 3p⁴",
          "kk": "1s² 2s² 2p⁶ 3s² 3p⁴",
          "en": "1s² 2s² 2p⁶ 3s² 3p⁴"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "1s² 2s² 2p⁶ 3s² 3p²",
          "kk": "1s² 2s² 2p⁶ 3s² 3p²",
          "en": "1s² 2s² 2p⁶ 3s² 3p²"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "1s² 2s² 2p⁶ 3s¹ 3p⁵",
          "kk": "1s² 2s² 2p⁶ 3s¹ 3p⁵",
          "en": "1s² 2s² 2p⁶ 3s¹ 3p⁵"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "1s² 2s² 2p⁶ 3s² 3p⁶",
          "kk": "1s² 2s² 2p⁶ 3s² 3p⁶",
          "en": "1s² 2s² 2p⁶ 3s² 3p⁶"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Сера (16 электронов): 2 на первом слое (1s²), 8 на втором (2s²2p⁶) и 6 на внешнем (3s²3p⁴).",
      "kk": "Күкірт: 1s² 2s² 2p⁶ 3s² 3p⁴ (сыртқы қабатында 6 валенттік электрон).",
      "en": "Sulfur has 16 electrons: [Ne] 3s² 3p⁴ with 6 valence electrons."
    },
    "hint": {
      "ru": "Сумма степеней должна равняться 16.",
      "kk": "Дәрежелердің қосындысы 16-ға тең болуы керек.",
      "en": "Sum of all superscripts equals 16."
    },
    "xpReward": 35
  },
  {
    "id": "pt-36",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какое семейство элементов расположено внизу таблицы Менделеева и начинается с элемента лантана (La, Z=57)?",
      "kk": "Менделеев кестесінің төменгі жағында орналасқан және лантаннан (La, Z=57) басталатын 14 элементтер тобы?",
      "en": "Which family of 14 f-block elements follows Lanthanum at the bottom of the table?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Лантаноиды",
          "kk": "Лантаноидтер",
          "en": "Lanthanides"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Актиноиды",
          "kk": "Актиноидтар",
          "en": "Actinides"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Халькогены",
          "kk": "Халькогендер",
          "en": "Chalcogens"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Щелочные",
          "kk": "Сілтілік",
          "en": "Alkali"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Лантаноиды (Z=57–71) заполняют внутреннюю 4f-подоболочку и обладают очень схожими химическими свойствами.",
      "kk": "Лантаноидтар (Z=57–71) 4f деңгейшесін толтыратын сирек кездесетін металдар.",
      "en": "Lanthanides are 15 elements from La to Lu populating the 4f subshell."
    },
    "hint": {
      "ru": "Их часто называют редкоземельными металлами.",
      "kk": "Оларды сирек жер элементтері деп те атайды.",
      "en": "Often termed rare-earth metals."
    },
    "xpReward": 30
  },
  {
    "id": "pt-37",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Какой галоген добавляют в зубную пасту в виде фторидов для укрепления эмали зубов?",
      "kk": "Тіс эмалін қатайту үшін тіс пасталарына қосылатын галогеннің қосылысы қандай?",
      "en": "Which halogen's ions are added to toothpaste to fortify dental enamel against decay?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Хлор (Cl)",
          "kk": "Хлор (Cl)",
          "en": "Chlorine (Cl)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Иод (I)",
          "kk": "Йод (I)",
          "en": "Iodine (I)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Фтор (F)",
          "kk": "Фтор (F)",
          "en": "Fluorine (F)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Бром (Br)",
          "kk": "Бром (Br)",
          "en": "Bromine (Br)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Фторид-ионы замещают гидроксогруппы в эмали, образуя кислотостойкий фторапатит Ca₅(PO₄)₃F.",
      "kk": "Фторид иондары тіс эмаліндегі фторапатит түзілуіне қатысып, кариестен қорғайды.",
      "en": "Fluoride ions convert hydroxyapatite in tooth enamel into acid-resistant fluorapatite."
    },
    "hint": {
      "ru": "Самый электроотрицательный галоген.",
      "kk": "Ең күшті электртеріс галоген.",
      "en": "Smallest and most reactive halogen."
    },
    "xpReward": 25
  },
  {
    "id": "pt-38",
    "category": "periodic_table",
    "difficulty": "hard",
    "question": {
      "ru": "Какой радиоактивный щелочной металл 7-го периода является самым редким из встречающихся в природе?",
      "kk": "Табиғатта ең сирек кездесетін және 7-периодтағы радиоактивті сілтілік металл қандай?",
      "en": "Which intensely radioactive Group 1 element is the rarest naturally occurring alkali metal in Earth's crust?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Цезий (Cs)",
          "kk": "Цезий (Cs)",
          "en": "Cesium (Cs)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Радий (Ra)",
          "kk": "Радий (Ra)",
          "en": "Radium (Ra)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Полоний (Po)",
          "kk": "Полоний (Po)",
          "en": "Polonium (Po)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Франций (Fr)",
          "kk": "Франций (Fr)",
          "en": "Francium (Fr)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Франций (Fr, Z=87) крайне нестабилен (период полураспада 22 мин). Во всей земной коре содержится не более 30 граммов франция!",
      "kk": "Франций (Fr, Z=87) өте тұрақсыз (жартылай ыдырауы 22 минут), бүкіл жер қыртысында бар болғаны 20-30 грамм франций бар.",
      "en": "Francium (Fr, Z=87) is vanishingly rare; at any given moment, barely 20–30 grams exist in the entire Earth crust."
    },
    "hint": {
      "ru": "Назван в честь Франции.",
      "kk": "Франция елінің құрметіне аталған.",
      "en": "Named after France."
    },
    "xpReward": 40
  },
  {
    "id": "pt-39",
    "category": "periodic_table",
    "difficulty": "medium",
    "question": {
      "ru": "Сколько протонов и нейтронов содержится в ядре изотопа дейтерия (тяжелого водорода, ²H)?",
      "kk": "Дейтерий (ауыр сутегі, ²H) изотопының ядросында неше протон және нейтрон бар?",
      "en": "How many protons and neutrons are contained in the nucleus of a Deuterium (²H) atom?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "1 протон, 0 нейтронов",
          "kk": "1 протон, 0 нейтрон",
          "en": "1 proton, 0 neutrons"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "2 протона, 1 нейтрон",
          "kk": "2 протон, 1 нейтрон",
          "en": "2 protons, 1 neutron"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "1 протон, 2 нейтрона",
          "kk": "1 протон, 2 нейтрон",
          "en": "1 proton, 2 neutrons"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "1 протон, 1 нейтрон",
          "kk": "1 протон, 1 нейтрон",
          "en": "1 proton, 1 neutron"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Дейтерий ²H имеет массовое число 2: 1 протон и 1 нейтрон. (В обычном протии ¹H нейтронов нет, а в тритии ³H — 2 нейтрона).",
      "kk": "Дейтерийде 1 протон және 1 нейтрон болады (массасы 2).",
      "en": "Deuterium possesses mass number 2: one proton bound to one neutron."
    },
    "hint": {
      "ru": "Тяжелая вода D₂O содержит дейтерий.",
      "kk": "Ауыр су (D₂O) осы изотоптан тұрады.",
      "en": "Component of heavy water (D₂O)."
    },
    "xpReward": 30
  },
  {
    "id": "pt-40",
    "category": "periodic_table",
    "difficulty": "hard",
    "question": {
      "ru": "Какой теоретический предел таблицы Менделеева предсказал Ричард Фейнман из-за релятивистской скорости электрона v = c?",
      "kk": "Электронның жарық жылдамдығына жетуіне байланысты Ричард Фейнман Менделеев кестесінің қандай теориялық шегін болжаған?",
      "en": "What atomic number did Richard Feynman predict as the relativistic limit of the Periodic Table where v_1s = c?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Z = 118",
          "kk": "Z = 118",
          "en": "Z = 118"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Z = 137",
          "kk": "Z = 137",
          "en": "Z = 137"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Z = 126",
          "kk": "Z = 126",
          "en": "Z = 126"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Z = 173",
          "kk": "Z = 173",
          "en": "Z = 173"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "При Z = 137 скорость электрона на 1s-орбитали по формуле Бора достигает скорости света c (v = Z·α·c, где α ≈ 1/137). Элемент 137 неофициально называют Фейнманием (Fy).",
      "kk": "Z = 137 болғанда 1s-электронының жылдамдығы жарық жылдамдығына жетеді (v=c), бұл кванттық механиканың шегі.",
      "en": "Feynman derived Z=137 from the fine-structure constant α ≈ 1/137, where 1s orbital speed reaches light speed c."
    },
    "hint": {
      "ru": "Связано с постоянной тонкой структуры 1/137.",
      "kk": "Нәзік құрылым тұрақтысымен (1/137) байланысты.",
      "en": "Linked to the fine-structure constant alpha."
    },
    "xpReward": 45
  },
  {
    "id": "re-1",
    "category": "reactions_equations",
    "difficulty": "easy",
    "question": {
      "ru": "Чему равна сумма всех стехиометрических коэффициентов в уравнении реакции горения водорода: 2H₂ + O₂ → 2H₂O?",
      "kk": "Сутектің жану реакциясындағы (2H₂ + O₂ → 2H₂O) барлық коэффициенттердің қосындысы нешеге тең?",
      "en": "What is the sum of all stoichiometric coefficients in: 2H₂ + O₂ → 2H₂O?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "4",
          "kk": "4",
          "en": "4"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "6",
          "kk": "6",
          "en": "6"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "5",
          "kk": "5",
          "en": "5"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "3",
          "kk": "3",
          "en": "3"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Коэффициенты: 2 (H₂) + 1 (O₂) + 2 (H₂O) = 5.",
      "kk": "Коэффициенттер: 2 + 1 + 2 = 5.",
      "en": "Sum of coefficients: 2 (H₂) + 1 (O₂) + 2 (H₂O) = 5."
    },
    "hint": {
      "ru": "Не забудьте коэффициент 1 перед O₂.",
      "kk": "O₂ алдындағы 1 санын ұмытпаңыз.",
      "en": "Remember oxygen has implicit coefficient 1."
    },
    "xpReward": 20
  },
  {
    "id": "re-2",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Какова степень окисления атома марганца в перманганате калия (KMnO₄)?",
      "kk": "Калий перманганатындағы (KMnO₄) марганец атомының тотығу дәрежесі қандай?",
      "en": "What is the oxidation state of manganese in potassium permanganate (KMnO₄)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "+2",
          "kk": "+2",
          "en": "+2"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "+4",
          "kk": "+4",
          "en": "+4"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "+6",
          "kk": "+6",
          "en": "+6"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "+7",
          "kk": "+7",
          "en": "+7"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "В KMnO₄: K имеет +1, четыре атома кислорода дают 4 × (-2) = -8. Для нейтральности Mn = +7.",
      "kk": "KMnO₄ қосылысында: K (+1), төрт оттегі 4 × (-2) = -8. Молекула бейтарап болуы үшін Mn = +7.",
      "en": "In KMnO₄: K(+1) + Mn(x) + 4×O(-2) = 0, so x = +7."
    },
    "hint": {
      "ru": "K = +1, O = -2, сумма зарядов равна 0.",
      "kk": "K = +1, O = -2, қосындысы 0 болуы керек.",
      "en": "K is +1, O is -2; total neutral charge."
    },
    "xpReward": 30
  },
  {
    "id": "re-3",
    "category": "reactions_equations",
    "difficulty": "easy",
    "question": {
      "ru": "Что происходит с восстановителем в окислительно-восстановительной реакции (ОВР)?",
      "kk": "Тотығу-тотықсыздану реакциясында (ТТР) тотықсыздандырғыш не істейді?",
      "en": "What happens to the reducing agent during a redox reaction?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Принимает электроны и восстанавливается",
          "kk": "Электрондарды қосып алады және тотықсызданады",
          "en": "Gains electrons and is reduced"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Отдает электроны и окисляется",
          "kk": "Электрондарды береді және тотығады",
          "en": "Loses electrons and is oxidized"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Его степень окисления не меняется",
          "kk": "Тотығу дәрежесі өзгермейді",
          "en": "Oxidation state does not change"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Распадается на протоны",
          "kk": "Протондарға ыдырайды",
          "en": "Splits into protons"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Восстановитель отдает электроны (его степень окисления повышается) — процесс окисления.",
      "kk": "Тотықсыздандырғыш электрон береді (тотығу дәрежесі артады), яғни өзі тотығады.",
      "en": "A reducing agent donates electrons and becomes oxidized (oxidation state increases)."
    },
    "hint": {
      "ru": "Восстановитель — щедрый, он отдает электроны.",
      "kk": "Тотықсыздандырғыш өз электрондарын береді.",
      "en": "A reducer gives away electrons."
    },
    "xpReward": 20
  },
  {
    "id": "re-4",
    "category": "reactions_equations",
    "difficulty": "easy",
    "question": {
      "ru": "К какому типу химических реакций относится процесс: CaCO₃ → CaO + CO₂?",
      "kk": "CaCO₃ → CaO + CO₂ реакциясы химиялық реакциялардың қай түріне жатады?",
      "en": "Which reaction type describes the thermal decomposition: CaCO₃ → CaO + CO₂?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Реакция соединения",
          "kk": "Қосылу реакциясы",
          "en": "Synthesis / Combination"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Реакция замещения",
          "kk": "Орын басу реакциясы",
          "en": "Single displacement"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Реакция разложения",
          "kk": "Айырылу реакциясы",
          "en": "Decomposition"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Реакция обмена",
          "kk": "Алмасу реакциясы",
          "en": "Double displacement"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Из одного сложного вещества (известняк CaCO₃) при нагревании образуются два новых вещества — это реакция разложения.",
      "kk": "Бір күрделі заттан бірнеше жаңа зат түзілуі айырылу реакциясы деп аталады.",
      "en": "One reactant decomposes into two distinct products under heat."
    },
    "hint": {
      "ru": "Одно исходное вещество распадается на два.",
      "kk": "Бір зат екі жаңа затқа ыдырап жатыр.",
      "en": "One compound breaks down into multiple simpler substances."
    },
    "xpReward": 20
  },
  {
    "id": "re-5",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Чему равен молярный объем любого идеального газа при нормальных условиях (н.у.: 0°C, 1 атм)?",
      "kk": "Қалыпты жағдайда (0°C, 1 атм) кез келген идеал газдың молярлық көлемі нешеге тең?",
      "en": "What is the molar volume of any ideal gas at standard temperature and pressure (STP)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "11.2 л/моль",
          "kk": "11.2 л/моль",
          "en": "11.2 L/mol"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "24.5 л/моль",
          "kk": "24.5 л/моль",
          "en": "24.5 L/mol"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "22.4 л/моль",
          "kk": "22.4 л/моль",
          "en": "22.4 L/mol"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "33.6 л/моль",
          "kk": "33.6 л/моль",
          "en": "33.6 L/mol"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "По закону Авогадро 1 моль любого газа при н.у. занимает объем Vm = 22.4 л/моль.",
      "kk": "Авогадро заңы бойынша қ.ж. 1 моль кез келген газ 22.4 л көлем алады.",
      "en": "Avogadro's law states that 1 mole of any ideal gas occupies 22.4 L at STP."
    },
    "hint": {
      "ru": "Закон Авогадро, постоянная величина Vm.",
      "kk": "Авогадро заңының молярлық көлемі.",
      "en": "Standard molar volume Vm constant."
    },
    "xpReward": 25
  },
  {
    "id": "re-6",
    "category": "reactions_equations",
    "difficulty": "easy",
    "question": {
      "ru": "Какая реакция называется реакцией нейтрализации?",
      "kk": "Қандай реакция бейтараптану реакциясы деп аталады?",
      "en": "Which reaction is defined as a neutralization reaction?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Металл + Неметалл → Соль",
          "kk": "Металл + Бейметалл → Тұз",
          "en": "Metal + Nonmetal → Salt"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Кислота + Основание → Соль + Вода",
          "kk": "Қышқыл + Негіз → Тұз + Су",
          "en": "Acid + Base → Salt + Water"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Оксид + Вода → Кислота",
          "kk": "Оксид + Су → Қышқыл",
          "en": "Oxide + Water → Acid"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Соль + Соль → Осадок",
          "kk": "Тұз + Тұз → Тұнба",
          "en": "Salt + Salt → Precipitate"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Ионы H⁺ кислоты связываются с ионами OH⁻ основания, образуя нейтральную воду H₂O и соль.",
      "kk": "Қышқыл мен негіз әрекеттесіп, тұз бен бейтарап су түзетін реакция.",
      "en": "Protons (H⁺) and hydroxide ions (OH⁻) react to form neutral water alongside a salt."
    },
    "hint": {
      "ru": "В результате кислота и щелочь нейтрализуют друг друга.",
      "kk": "Нәтижесінде тұз бен су түзіледі.",
      "en": "Acid cancels base to produce neutral water."
    },
    "xpReward": 20
  },
  {
    "id": "re-7",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "В реакции Zn + 2HCl → ZnCl₂ + H₂↑ какой ион выступает в роли окислителя?",
      "kk": "Zn + 2HCl → ZnCl₂ + H₂↑ реакциясында қай бөлшек тотықтырғыш болып табылады?",
      "en": "In the reaction Zn + 2HCl → ZnCl₂ + H₂↑, which species acts as the oxidizing agent?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Атом цинка Zn⁰",
          "kk": "Мырыш атомы Zn⁰",
          "en": "Zinc atom Zn⁰"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Хлорид-ион Cl⁻",
          "kk": "Хлорид ионы Cl⁻",
          "en": "Chloride ion Cl⁻"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Молекула H₂",
          "kk": "Сутегі молекуласы H₂",
          "en": "Hydrogen molecule H₂"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Ион водорода H⁺",
          "kk": "Сутегі ионы H⁺",
          "en": "Hydrogen ion H⁺"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Ионы H⁺ принимают электроны от цинка: 2H⁺ + 2e⁻ → H₂⁰ (восстанавливаются, являясь окислителем).",
      "kk": "H⁺ иондары мырыштан электрондарды қосып алып (2H⁺ + 2e⁻ → H₂), тотықтырғыш болады.",
      "en": "Hydrogen ions H⁺ gain electrons to become H₂ gas, thus acting as the oxidizing agent."
    },
    "hint": {
      "ru": "Кто принимает электроны и понижает степень окисления?",
      "kk": "Тотығу дәрежесін төмендеткен бөлшек.",
      "en": "The species whose oxidation state decreases from +1 to 0."
    },
    "xpReward": 30
  },
  {
    "id": "re-8",
    "category": "reactions_equations",
    "difficulty": "easy",
    "question": {
      "ru": "Как называется вещество, ускоряющее химическую реакцию, но не расходующееся в ней?",
      "kk": "Химиялық реакцияның жылдамдығын арттыратын, бірақ өзі жұмсалмайтын зат?",
      "en": "What term describes a substance that accelerates a chemical reaction without being consumed?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Ингибитор",
          "kk": "Ингибитор",
          "en": "Inhibitor"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Катализатор",
          "kk": "Катализатор",
          "en": "Catalyst"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Индикатор",
          "kk": "Индикатор",
          "en": "Indicator"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Растворитель",
          "kk": "Еріткіш",
          "en": "Solvent"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Катализатор снижает энергию активации реакции, ускоряя процесс в миллионы раз.",
      "kk": "Катализатор реакцияның активтену энергиясын төмендетіп, процесті жылдамдатады.",
      "en": "A catalyst provides an alternative pathway with lower activation energy."
    },
    "hint": {
      "ru": "Биологические катализаторы называются ферментами.",
      "kk": "Биологиялық катализаторларды ферменттер деп атайды.",
      "en": "Enzymes are biological examples."
    },
    "xpReward": 20
  },
  {
    "id": "re-9",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "По какому принципу смещается химическое равновесие при внешнем воздействии (температура, давление)?",
      "kk": "Сыртқы әсер (температура, қысым) кезінде химиялық тепе-теңдіктің ығысуын қай қағида сипаттайды?",
      "en": "Which principle describes how a dynamic chemical equilibrium shifts to counteract external changes?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Принцип Ле Шателье-Брауна",
          "kk": "Ле Шателье-Браун қағидасы",
          "en": "Le Chatelier's principle"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Закон Архимеда",
          "kk": "Архимед заңы",
          "en": "Archimedes' law"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Закон Кулона",
          "kk": "Кулон заңы",
          "en": "Coulomb's law"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Правило Марковникова",
          "kk": "Марковников ережесі",
          "en": "Markovnikov's rule"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Принцип Ле Шателье: если на систему в равновесии оказать воздействие, равновесие сместится в сторону ослабления этого воздействия.",
      "kk": "Ле Шателье қағидасы: тепе-теңдіктегі жүйеге сырттан әсер етсе, тепе-теңдік сол әсерді азайтатын бағытқа ығысады.",
      "en": "Le Chatelier's principle states that a system in equilibrium will shift in a direction that opposes the disturbance."
    },
    "hint": {
      "ru": "Французский химик Анри Луи Ле Шателье.",
      "kk": "Француз химигі Ле Шателье ашқан.",
      "en": "Formulated by French chemist Henri Le Chatelier in 1884."
    },
    "xpReward": 30
  },
  {
    "id": "re-10",
    "category": "reactions_equations",
    "difficulty": "easy",
    "question": {
      "ru": "Какой газ бурно выделяется при действии соляной кислоты (HCl) на мел или мрамор (CaCO₃)?",
      "kk": "Тұз қышқылын (HCl) борға немесе мәрмәрға (CaCO₃) құйғанда қандай газ бөлінеді?",
      "en": "Which gas vigorously effervesces when hydrochloric acid reacts with marble or chalk (CaCO₃)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Углекислый газ (CO₂)",
          "kk": "Көмірқышқыл газы (CO₂)",
          "en": "Carbon dioxide (CO₂)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Кислород (O₂)",
          "kk": "Оттегі (O₂)",
          "en": "Oxygen (O₂)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Водород (H₂)",
          "kk": "Сутегі (H₂)",
          "en": "Hydrogen (H₂)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Хлор (Cl₂)",
          "kk": "Хлор (Cl₂)",
          "en": "Chlorine (Cl₂)"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑. Выделяется диоксид углерода (углекислый газ).",
      "kk": "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑ реакциясы жүріп, көмірқышқыл газы көпіршіктеніп бөлінеді.",
      "en": "Calcium carbonate reacts with acid to yield calcium chloride, water, and effervescing CO₂ gas."
    },
    "hint": {
      "ru": "Этот же газ мы выдыхаем при дыхании.",
      "kk": "Біз тыныс алғанда шығаратын газ.",
      "en": "The same gas present in fizzy sodas."
    },
    "xpReward": 20
  },
  {
    "id": "re-11",
    "category": "reactions_equations",
    "difficulty": "hard",
    "question": {
      "ru": "Чему равна степень окисления хлора в хлорной кислоте (HClO₄)?",
      "kk": "Хлор қышқылындағы (HClO₄) хлордың тотығу дәрежесі қандай?",
      "en": "What is the oxidation state of chlorine in perchloric acid (HClO₄)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "+1",
          "kk": "+1",
          "en": "+1"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "+3",
          "kk": "+3",
          "en": "+3"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "+7",
          "kk": "+7",
          "en": "+7"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "+5",
          "kk": "+5",
          "en": "+5"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "В HClO₄: H(+1), четыре атома O(-2 дают -8). Чтобы молекула была нейтральной: +1 + Cl - 8 = 0, значит Cl = +7.",
      "kk": "HClO₄ қышқылында: H(+1), төрт оттегі (-8). Хлордың тотығу дәрежесі: +7.",
      "en": "In perchloric acid HClO₄, chlorine exhibits its maximum group oxidation state of +7."
    },
    "hint": {
      "ru": "Высшая степень окисления хлора в 17 группе.",
      "kk": "Хлордың ең жоғары тотығу дәрежесі.",
      "en": "Maximum positive oxidation state for halogens."
    },
    "xpReward": 35
  },
  {
    "id": "re-12",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Как изменится скорость химической реакции при повышении температуры на каждые 10°C согласно правилу Вант-Гоффа?",
      "kk": "Вант-Гофф ережесі бойынша температураны әрбір 10°C-қа көтергенде реакция жылдамдығы қалай өзгереді?",
      "en": "According to Van 't Hoff's empirical rule, by how much does reaction rate increase per 10°C temperature rise?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "В 2–4 раза",
          "kk": "2–4 есе",
          "en": "By a factor of 2 to 4"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "В 10 раз",
          "kk": "10 есе",
          "en": "By a factor of 10"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Не изменится",
          "kk": "Өзгермейді",
          "en": "Does not change"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Уменьшится в 2 раза",
          "kk": "2 есе кемиді",
          "en": "Decreases by half"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Температурный коэффициент реакции γ обычно составляет от 2 до 4 (v₂ = v₁ · γ^((T₂-T₁)/10)).",
      "kk": "Вант-Гофф ережесі: температураны әрбір 10°C-қа көтергенде жылдамдық 2-ден 4 есеге дейін артады.",
      "en": "The Van 't Hoff temperature coefficient γ typically falls between 2 and 4 for most reactions."
    },
    "hint": {
      "ru": "В 2, 3 или 4 раза.",
      "kk": "2-ден 4 есеге дейін.",
      "en": "Multiplies between twofold and fourfold."
    },
    "xpReward": 30
  },
  {
    "id": "re-13",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Какое вещество является катализатором в реакции лабораторного разложения пероксида водорода (2H₂O₂ → 2H₂O + O₂)?",
      "kk": "Сутегі асқын тотығының (2H₂O₂ → 2H₂O + O₂) зертханалық айырылу реакциясындағы катализатор?",
      "en": "Which compound serves as an effective catalyst in decomposing hydrogen peroxide (2H₂O₂ → 2H₂O + O₂)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Хлорид натрия (NaCl)",
          "kk": "Ас тұзы (NaCl)",
          "en": "Sodium chloride (NaCl)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Сульфат меди (CuSO₄)",
          "kk": "Мыс сульфаты (CuSO₄)",
          "en": "Copper sulfate (CuSO₄)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Оксид марганца(IV) (MnO₂)",
          "kk": "Марганец(IV) оксиді (MnO₂)",
          "en": "Manganese(IV) oxide (MnO₂)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Оксид кальция (CaO)",
          "kk": "Кальций оксиді (CaO)",
          "en": "Calcium oxide (CaO)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Черный порошок диоксида марганца MnO₂ мгновенно вызывает бурное кипение H₂O₂ с выделением кислорода.",
      "kk": "MnO₂ қара ұнтағы сутегі пероксидіне түскенде оттегінің қарқынды бөлінуін тудырады.",
      "en": "Black MnO₂ powder rapidly catalyses H₂O₂ decomposition into water and bubbling oxygen gas."
    },
    "hint": {
      "ru": "Черный оксид четырехвалентного металла.",
      "kk": "Төрт валентті марганец оксиді.",
      "en": "Insoluble black powder of manganese."
    },
    "xpReward": 30
  },
  {
    "id": "re-14",
    "category": "reactions_equations",
    "difficulty": "easy",
    "question": {
      "ru": "Какой знак имеет тепловой эффект (ΔH) экзотермической реакции (выделяющей тепло в окружающую среду)?",
      "kk": "Қоршаған ортаға жылу бөліп жүретін экзотермиялық реакцияның энтальпиясының (ΔH) таңбасы қандай?",
      "en": "What is the sign of the enthalpy change (ΔH) for an exothermic reaction releasing heat?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "ΔH > 0 (положительный)",
          "kk": "ΔH > 0 (оң)",
          "en": "ΔH > 0 (positive)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "ΔH = 0 (нулевой)",
          "kk": "ΔH = 0 (нөл)",
          "en": "ΔH = 0 (zero)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "ΔH = ∞",
          "kk": "ΔH = ∞",
          "en": "ΔH = ∞"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "ΔH < 0 (отрицательный)",
          "kk": "ΔH < 0 (теріс)",
          "en": "ΔH < 0 (negative)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "При экзотермических реакциях система теряет энергию в виде тепла, поэтому энтальпия продуктов меньше энтальпии реагентов: ΔH < 0.",
      "kk": "Экзотермиялық реакцияда жылу бөлінетіндіктен энтальпия өзгерісі теріс таңбалы болады (ΔH < 0).",
      "en": "Exothermic reactions release thermal energy, so final enthalpy is lower than initial: ΔH < 0."
    },
    "hint": {
      "ru": "Энергия уходит из системы.",
      "kk": "Жүйе энергиясын сыртқа береді.",
      "en": "Heat leaves the chemical system."
    },
    "xpReward": 20
  },
  {
    "id": "re-15",
    "category": "reactions_equations",
    "difficulty": "hard",
    "question": {
      "ru": "Чему равна масса 0.5 моль газообразного углекислого газа (CO₂, молярная масса 44 г/моль)?",
      "kk": "0.5 моль көмірқышқыл газының (CO₂, молярлық массасы 44 г/моль) массасы неше грамм болады?",
      "en": "What is the mass in grams of 0.5 moles of carbon dioxide gas (CO₂, M = 44 g/mol)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "88 г",
          "kk": "88 г",
          "en": "88 g"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "22 г",
          "kk": "22 г",
          "en": "22 g"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "44 г",
          "kk": "44 г",
          "en": "44 g"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "11 г",
          "kk": "11 г",
          "en": "11 g"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Формула m = n × M = 0.5 моль × 44 г/моль = 22 грамма.",
      "kk": "Масса формуласы: m = n × M = 0.5 × 44 = 22 грамм.",
      "en": "Mass m = n × M = 0.5 mol × 44 g/mol = 22 grams."
    },
    "hint": {
      "ru": "Умножьте 0.5 на 44.",
      "kk": "44-ті жартысына көбейтіңіз.",
      "en": "Half of 44."
    },
    "xpReward": 25
  },
  {
    "id": "re-16",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "В какой среде перманганат калия (KMnO₄) восстанавливается до бесцветных ионов Mn²⁺?",
      "kk": "Калий перманганаты (KMnO₄) түссіз Mn²⁺ ионына дейін қай ортада тотықсызданады?",
      "en": "In which medium does potassium permanganate (KMnO₄) reduce to colorless Mn²⁺ ions?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Кислая среда (в присутствии H₂SO₄)",
          "kk": "Қышқыл ортада (H₂SO₄ қатысында)",
          "en": "Acidic medium (with H₂SO₄)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Нейтральная среда (вода)",
          "kk": "Бейтарап ортада (суда)",
          "en": "Neutral medium (water)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Щелочная среда (раствор KOH)",
          "kk": "Сілтілік ортада (KOH қатысында)",
          "en": "Alkaline medium (with KOH)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Безводная среда",
          "kk": "Сусыз ортада",
          "en": "Anhydrous medium"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "В кислой среде: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (малиновый раствор становится полностью бесцветным).",
      "kk": "Қышқыл ортада MnO₄⁻ ионы 5 электрон қосып алып, түссіз Mn²⁺ ионына айналады.",
      "en": "In acidic solutions, permanganate gains 5 electrons to form virtually colorless Mn²⁺."
    },
    "hint": {
      "ru": "В щелочной среде получается зеленый K₂MnO₄, а в кислой — бесцветный Mn²⁺.",
      "kk": "Сілтіде жасыл K₂MnO₄, ал қышқылда түссіз Mn²⁺ түзіледі.",
      "en": "Acid accelerates complete reduction to +2."
    },
    "xpReward": 35
  },
  {
    "id": "re-17",
    "category": "reactions_equations",
    "difficulty": "easy",
    "question": {
      "ru": "Какой фундаментальный закон природы сформулировали Ломоносов и Лавуазье: 'Масса веществ, вступивших в реакцию, равна массе продуктов'?",
      "kk": "Ломоносов пен Лавуазье ашқан 'Реакцияға түскен заттардың массасы түзілген заттардың массасына тең' заңы қалай аталады?",
      "en": "Which foundational law states that total mass of reactants equals total mass of products in a closed system?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Закон постоянства состава",
          "kk": "Құрам тұрақтылық заңы",
          "en": "Law of definite proportions"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Периодический закон",
          "kk": "Периодтық заң",
          "en": "Periodic law"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Закон Авогадро",
          "kk": "Авогадро заңы",
          "en": "Avogadro's law"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Закон сохранения массы",
          "kk": "Зат массасының сақталу заңы",
          "en": "Law of conservation of mass"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Закон сохранения массы лежит в основе расстановки стехиометрических коэффициентов во всех химических уравнениях.",
      "kk": "Зат массасының сақталу заңы барлық химиялық теңдеулерді теңестірудің негізі болып табылады.",
      "en": "The Law of Conservation of Mass underpins all chemical stoichiometry and equation balancing."
    },
    "hint": {
      "ru": "Атомы не исчезают и не возникают из ниоткуда.",
      "kk": "Атомдар жойылмайды және жоқтан пайда болмайды.",
      "en": "Matter is neither created nor destroyed in chemical reactions."
    },
    "xpReward": 20
  },
  {
    "id": "re-18",
    "category": "reactions_equations",
    "difficulty": "hard",
    "question": {
      "ru": "Сколько литров водорода (н.у.) выделится при растворении 2.7 г алюминия в избытке соляной кислоты: 2Al + 6HCl → 2AlCl₃ + 3H₂↑?",
      "kk": "2.7 г алюминий тұз қышқылымен әрекеттескенде (2Al + 6HCl → 2AlCl₃ + 3H₂↑) қ.ж. неше литр сутегі бөлінеді?",
      "en": "How many liters of H₂ gas at STP are produced by dissolving 2.7 g of Al in excess HCl: 2Al + 6HCl → 2AlCl₃ + 3H₂↑?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "1.12 л",
          "kk": "1.12 л",
          "en": "1.12 L"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "2.24 л",
          "kk": "2.24 л",
          "en": "2.24 L"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "3.36 л",
          "kk": "3.36 л",
          "en": "3.36 L"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "6.72 л",
          "kk": "6.72 л",
          "en": "6.72 L"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "n(Al) = 2.7 / 27 = 0.1 моль. По уравнению n(H₂) = 0.1 × 3/2 = 0.15 моль. Объем V = 0.15 × 22.4 = 3.36 л.",
      "kk": "n(Al) = 2.7/27 = 0.1 моль. Теңдеу бойынша n(H₂) = 0.15 моль. Көлемі V = 0.15 × 22.4 = 3.36 л.",
      "en": "0.1 mol of Al produces 0.15 mol of H₂; at STP 0.15 × 22.4 L = 3.36 L."
    },
    "hint": {
      "ru": "n(Al) = 0.1 моль, на 2 Al приходится 3 H₂.",
      "kk": "2 моль Al-ден 3 моль H₂ түзіледі.",
      "en": "Ratio of Al to H₂ is 2 : 3."
    },
    "xpReward": 45
  },
  {
    "id": "re-19",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Какое вещество в реакции Cu + 4HNO₃(конц) → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O является восстановителем?",
      "kk": "Cu + 4HNO₃(конц) → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O реакциясында қай зат тотықсыздандырғыш болады?",
      "en": "Which reactant acts as the reducing agent in: Cu + 4HNO₃(conc) → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Азотная кислота HNO₃",
          "kk": "Азот қышқылы HNO₃",
          "en": "Nitric acid HNO₃"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Вода H₂O",
          "kk": "Су H₂O",
          "en": "Water H₂O"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Медь Cu⁰",
          "kk": "Мыс Cu⁰",
          "en": "Copper Cu⁰"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Оксид азота NO₂",
          "kk": "Азот оксиді NO₂",
          "en": "Nitrogen dioxide NO₂"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Медь отдает 2 электрона (Cu⁰ → Cu²⁺ + 2e⁻), повышая степень окисления, то есть является восстановителем.",
      "kk": "Мыс 2 электрон беріп тотығады (Cu⁰ → Cu²⁺), яғни тотықсыздандырғыш болып табылады.",
      "en": "Copper metal loses two electrons to become Cu²⁺, acting as the electron-donating reducing agent."
    },
    "hint": {
      "ru": "Степень окисления этого металла повышается от 0 до +2.",
      "kk": "Мыстың тотығу дәрежесі 0-ден +2-ге артады.",
      "en": "Its oxidation number climbs from 0 to +2."
    },
    "xpReward": 30
  },
  {
    "id": "re-20",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Что происходит с давлением при протекании реакции синтеза аммиака в закрытом сосуде: N₂(г) + 3H₂(г) ⇄ 2NH₃(г)?",
      "kk": "Тұйық ыдыста аммиак синтезі жүргенде (N₂(г) + 3H₂(г) ⇄ 2NH₃(г)) жүйедегі қысым қалай өзгереді?",
      "en": "What happens to total gas pressure inside a rigid vessel during ammonia synthesis: N₂(g) + 3H₂(g) ⇄ 2NH₃(g)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Давление увеличивается",
          "kk": "Қысым артады",
          "en": "Pressure increases"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Давление не меняется",
          "kk": "Қысым өзгермейді",
          "en": "Pressure stays constant"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Давление падает",
          "kk": "Қысым кемиді",
          "en": "Pressure decreases"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Давление падает до абсолютного вакуума",
          "kk": "Қысым нөлге түседі",
          "en": "Pressure drops to zero"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Слева 1 + 3 = 4 объема газа, справа 2 объема газа. Число молекул газа уменьшается вдвое, поэтому давление падает.",
      "kk": "Сол жақта 4 моль газ, оң жақта 2 моль газ. Газ көлемі азайғандықтан қысым төмендейді.",
      "en": "Four moles of reactant gas combine into two moles of product gas, reducing total pressure."
    },
    "hint": {
      "ru": "Сравните сумму коэффициентов газов слева (4) и справа (2).",
      "kk": "Сол жақта 4 молекула, оң жақта 2 молекула.",
      "en": "4 gas molecules yield 2 gas molecules."
    },
    "xpReward": 35
  },
  {
    "id": "re-21",
    "category": "reactions_equations",
    "difficulty": "easy",
    "question": {
      "ru": "Как называется реакция взаимодействия простого вещества с кислородом, сопровождающаяся выделением тепла и света?",
      "kk": "Жай заттың оттегімен жылу және жарық бөле әрекеттесу реакциясы қалай аталады?",
      "en": "What term defines a rapid reaction between a substance and oxygen accompanied by heat and light?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Гидролиз",
          "kk": "Гидролиз",
          "en": "Hydrolysis"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Горение",
          "kk": "Жану",
          "en": "Combustion / Burning"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Гидрирование",
          "kk": "Гидрлену",
          "en": "Hydrogenation"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Нейтрализация",
          "kk": "Бейтараптану",
          "en": "Neutralization"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Горение — это быстрая экзотермическая ОВР, протекающая с образованием пламени и выделением тепла.",
      "kk": "Жану — бұл оттегімен жылу және жарық бөле жүретін жылдам тотығу-тотықсыздану реакциясы.",
      "en": "Combustion is a rapid exothermic reaction with atmospheric oxygen generating visible flames."
    },
    "hint": {
      "ru": "Сопровождается появлением пламени.",
      "kk": "Жалынның пайда болуымен жүреді.",
      "en": "Produces visible fire and heat."
    },
    "xpReward": 20
  },
  {
    "id": "re-22",
    "category": "reactions_equations",
    "difficulty": "hard",
    "question": {
      "ru": "Какая формула связывает количество вещества (n), массу (m) и молярную массу (M)?",
      "kk": "Зат мөлшерін (n), массасын (m) және молярлық массасын (M) байланыстыратын формула қандай?",
      "en": "Which formula correctly relates moles (n), mass (m), and molar mass (M)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "n = m · M",
          "kk": "n = m · M",
          "en": "n = m · M"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "n = M / m",
          "kk": "n = M / m",
          "en": "n = M / m"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "n = m² / M",
          "kk": "n = m² / M",
          "en": "n = m² / M"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "n = m / M",
          "kk": "n = m / M",
          "en": "n = m / M"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Количество вещества n = масса (г) / молярная масса (г/моль). Измеряется в молях.",
      "kk": "Зат мөлшері = масса / молярлық масса: n = m / M.",
      "en": "Amount of substance n = mass m divided by molar mass M."
    },
    "hint": {
      "ru": "Чтобы найти моли, массу делят на молярную массу.",
      "kk": "Массаны молярлық массаға бөледі.",
      "en": "Divide mass by molar mass."
    },
    "xpReward": 20
  },
  {
    "id": "re-23",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Как называется твердый нерастворимый продукт, выпадающий из раствора в результате обменной реакции?",
      "kk": "Алмасу реакциясы нәтижесінде ерітіндіден бөлініп шығатын ерімейтін қатты зат?",
      "en": "What name is given to the insoluble solid that separates from a solution during a precipitation reaction?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Дистиллят",
          "kk": "Дистиллят",
          "en": "Distillate"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Катализатор",
          "kk": "Катализатор",
          "en": "Catalyst"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Суспензия",
          "kk": "Суспензия",
          "en": "Suspension"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Осадок",
          "kk": "Тұнба",
          "en": "Precipitate"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "В химических уравнениях выпадение осадка обозначается стрелкой вниз (↓).",
      "kk": "Химиялық теңдеулерде тұнба түзілуі төмен қараған бағыттауышпен (↓) белгіленеді.",
      "en": "A precipitate is an insoluble solid product that drops out of solution, denoted by (↓)."
    },
    "hint": {
      "ru": "Обозначается стрелкой вниз ↓.",
      "kk": "Теңдеуде ↓ таңбасымен белгіленеді.",
      "en": "Denoted by downwards arrow ↓."
    },
    "xpReward": 20
  },
  {
    "id": "re-24",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Какая соль образуется при взаимодействии гидроксида натрия и серной кислоты в соотношении 1 : 1?",
      "kk": "Натрий гидроксиді мен күкірт қышқылы 1 : 1 қатынасында әрекеттескенде қандай тұз түзіледі?",
      "en": "Which salt is produced when NaOH and H₂SO₄ react in a 1 : 1 stoichiometric ratio?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Гидросульфат натрия (NaHSO₄)",
          "kk": "Натрий гидросульфаты (NaHSO₄)",
          "en": "Sodium hydrogen sulfate (NaHSO₄)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Сульфат натрия (Na₂SO₄)",
          "kk": "Натрий сульфаты (Na₂SO₄)",
          "en": "Sodium sulfate (Na₂SO₄)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Сульфид натрия (Na₂S)",
          "kk": "Натрий сульфиді (Na₂S)",
          "en": "Sodium sulfide (Na₂S)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Сульфит натрия (Na₂SO₃)",
          "kk": "Натрий сульфиті (Na₂SO₃)",
          "en": "Sodium sulfite (Na₂SO₃)"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "При неполной нейтрализации двухосновной кислоты образуется кислая соль: NaOH + H₂SO₄ → NaHSO₄ + H₂O.",
      "kk": "Екі негізді қышқыл толық бейтараптанбағанда қышқыл тұз түзіледі: NaHSO₄.",
      "en": "Partial neutralization of diprotic H₂SO₄ yields an acid salt: sodium bisulfate NaHSO₄."
    },
    "hint": {
      "ru": "Кислая соль с атомом водорода в составе.",
      "kk": "Құрамында сутегі атомы бар қышқыл тұз.",
      "en": "Contains an unreacted acidic proton in the anion."
    },
    "xpReward": 30
  },
  {
    "id": "re-25",
    "category": "reactions_equations",
    "difficulty": "hard",
    "question": {
      "ru": "Чему равно число Авогадро (NA) — количество частиц в одном моле любого вещества?",
      "kk": "Авогадро тұрақтысы (NA) — кез келген заттың 1 моліндегі бөлшектер саны нешеге тең?",
      "en": "What is Avogadro's constant (NA) representing the number of constituent particles in one mole?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "3.14 × 10¹⁰ моль⁻¹",
          "kk": "3.14 × 10¹⁰ моль⁻¹",
          "en": "3.14 × 10¹⁰ mol⁻¹"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "6.02 × 10²³ моль⁻¹",
          "kk": "6.02 × 10²³ моль⁻¹",
          "en": "6.02 × 10²³ mol⁻¹"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "1.66 × 10⁻²⁴ моль⁻¹",
          "kk": "1.66 × 10⁻²⁴ моль⁻¹",
          "en": "1.66 × 10⁻²⁴ mol⁻¹"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "9.81 × 10² моль⁻¹",
          "kk": "9.81 × 10² моль⁻¹",
          "en": "9.81 × 10² mol⁻¹"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "1 моль содержит ровно 6.022 × 10²³ атомов или молекул вещества.",
      "kk": "1 моль кез келген затта дәл 6.02 × 10²³ бөлшек (атом немесе молекула) болады.",
      "en": "Avogadro's number defines one mole as exactly 6.02214076 × 10²³ elementary entities."
    },
    "hint": {
      "ru": "6.02 на 10 в двадцать третьей степени.",
      "kk": "6.02 көбейтілген 10-ның 23 дәрежесі.",
      "en": "Ten raised to the 23rd power."
    },
    "xpReward": 25
  },
  {
    "id": "re-26",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Какое простое вещество выделяется на катоде при электролизе водного раствора хлорида натрия (NaCl)?",
      "kk": "Ас тұзы (NaCl) сулы ерітіндісін электролиздегенде катодта қандай жай зат бөлінеді?",
      "en": "Which elemental gas is evolved at the cathode during electrolysis of aqueous sodium chloride brine?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Хлор (Cl₂)",
          "kk": "Хлор (Cl₂)",
          "en": "Chlorine (Cl₂)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Кислород (O₂)",
          "kk": "Оттегі (O₂)",
          "en": "Oxygen (O₂)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Металлический натрий (Na)",
          "kk": "Металдық натрий (Na)",
          "en": "Metallic sodium (Na)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Водород (H₂)",
          "kk": "Сутегі (H₂)",
          "en": "Hydrogen (H₂)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "На катоде восстанавливаются ионы водорода воды: 2H₂O + 2e⁻ → H₂↑ + 2OH⁻ (хлор выделяется на аноде).",
      "kk": "Катодта сутегі бөлінеді: 2H₂O + 2e⁻ → H₂↑ + 2OH⁻ (хлор анодта бөлінеді).",
      "en": "Water reduction at the cathode generates H₂ gas and OH⁻, while chlorine evolves at the anode."
    },
    "hint": {
      "ru": "На катоде восстанавливается водород, а не активный натрий.",
      "kk": "Катодта белсенді натрий емес, сутегі тотықсызданады.",
      "en": "Hydrogen has a less negative reduction potential than sodium."
    },
    "xpReward": 35
  },
  {
    "id": "re-27",
    "category": "reactions_equations",
    "difficulty": "easy",
    "question": {
      "ru": "Какое вещество образуется при взаимодействии кальция с водой: Ca + 2H₂O → ... + H₂↑?",
      "kk": "Кальций сумен әрекеттескенде (Ca + 2H₂O → ... + H₂↑) қандай негіз түзіледі?",
      "en": "Which compound is formed when calcium reacts with water: Ca + 2H₂O → ... + H₂↑?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Оксид кальция CaO",
          "kk": "Кальций оксиді CaO",
          "en": "Calcium oxide CaO"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Гидроксид кальция Ca(OH)₂",
          "kk": "Кальций гидроксиді Ca(OH)₂",
          "en": "Calcium hydroxide Ca(OH)₂"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Карбонат кальция CaCO₃",
          "kk": "Кальций карбонаты CaCO₃",
          "en": "Calcium carbonate CaCO₃"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Гидрид кальция CaH₂",
          "kk": "Кальций гидриді CaH₂",
          "en": "Calcium hydride CaH₂"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Щелочноземельные металлы реагируют с водой с образованием щелочи и водорода: Ca + 2H₂O → Ca(OH)₂ + H₂↑.",
      "kk": "Сілтілік-жер металдары сумен әрекеттесіп, негіз бен сутегі бөледі: Ca(OH)₂.",
      "en": "Active alkaline earth metals reduce water to form metal hydroxide and hydrogen gas."
    },
    "hint": {
      "ru": "Гашеная известь.",
      "kk": "Сөндірілген әк.",
      "en": "Known as slaked lime."
    },
    "xpReward": 25
  },
  {
    "id": "re-28",
    "category": "reactions_equations",
    "difficulty": "hard",
    "question": {
      "ru": "В какую сторону сместится равновесие эндотермической реакции N₂O₄(г) ⇄ 2NO₂(г) - Q при нагревании?",
      "kk": "Жүйені қыздырғанда эндотермиялық реакцияның (N₂O₄(г) ⇄ 2NO₂(г) - Q) тепе-теңдігі қай бағытқа ығысады?",
      "en": "In which direction does the equilibrium of the endothermic reaction N₂O₄(g) ⇄ 2NO₂(g) (ΔH > 0) shift upon heating?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Влево (в сторону бесцветного N₂O₄)",
          "kk": "Солға (түссіз N₂O₄ жағына)",
          "en": "To the left (favoring colorless N₂O₄)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Равновесие не изменится",
          "kk": "Тепе-теңдік өзгермейді",
          "en": "Equilibrium does not shift"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Реакция полностью прекратится",
          "kk": "Реакция толық тоқтайды",
          "en": "Reaction ceases"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Вправо (в сторону образования бурого NO₂)",
          "kk": "Оңға (қоңыр NO₂ түзілу жағына)",
          "en": "To the right (favoring brown NO₂)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "По принципу Ле Шателье нагревание благоприятствует эндотермическому процессу (поглощающему тепло), то есть реакции вправо.",
      "kk": "Ле Шателье қағидасы бойынша қыздыру жылуды сіңіретін эндотермиялық бағытты (оңға) күшейтеді.",
      "en": "Heating shifts equilibrium in the endothermic forward direction to absorb added thermal energy."
    },
    "hint": {
      "ru": "Эндотермическая реакция поглощает тепло.",
      "kk": "Эндотермиялық реакция жылуды сіңіреді.",
      "en": "Endothermic reactions consume added heat."
    },
    "xpReward": 35
  },
  {
    "id": "re-29",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Какой металл вытесняет медь из водного раствора медного купороса (CuSO₄)?",
      "kk": "Мыс купоросы (CuSO₄) ерітіндісінен мысты қай металл ығыстырып шығара алады?",
      "en": "Which metal can displace copper from an aqueous solution of copper sulfate (CuSO₄)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Серебро (Ag)",
          "kk": "Күміс (Ag)",
          "en": "Silver (Ag)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Золото (Au)",
          "kk": "Алтын (Au)",
          "en": "Gold (Au)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Платина (Pt)",
          "kk": "Платина (Pt)",
          "en": "Platinum (Pt)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Железо (Fe)",
          "kk": "Темір (Fe)",
          "en": "Iron (Fe)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Железо активнее меди в ряду напряжений металлов: Fe + CuSO₄ → FeSO₄ + Cu↓. Гвоздь покрывается слоем меди.",
      "kk": "Темір металдардың белсенділік қатарында мыстан бұрын тұр: Fe + CuSO₄ → FeSO₄ + Cu↓.",
      "en": "Iron is more active than copper in the electrochemical series and readily displaces it."
    },
    "hint": {
      "ru": "Металл должен стоять левее меди в ряду активности Бекетова.",
      "kk": "Бұл металл белсенділік қатарында мыстан солға қарай орналасқан.",
      "en": "Must lie to the left of copper in the activity series."
    },
    "xpReward": 25
  },
  {
    "id": "re-30",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Что образуется при взаимодействии кислотного оксида SO₃ с водой?",
      "kk": "Күкірттің қышқылдық оксиді SO₃ сумен әрекеттескенде не түзіледі?",
      "en": "What compound is synthesized when sulfur trioxide (SO₃) hydrates with water?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Сернистая кислота H₂SO₃",
          "kk": "Күкіртті қышқыл H₂SO₃",
          "en": "Sulfurous acid H₂SO₃"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Серная кислота H₂SO₄",
          "kk": "Күкірт қышқылы H₂SO₄",
          "en": "Sulfuric acid H₂SO₄"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Сероводород H₂S",
          "kk": "Күкіртсутек H₂S",
          "en": "Hydrogen sulfide H₂S"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Гидроксид серы",
          "kk": "Күкірт гидроксиді",
          "en": "Sulfur hydroxide"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "SO₃ — кислотный оксид, ангидрид серной кислоты: SO₃ + H₂O → H₂SO₄.",
      "kk": "SO₃ — күкірт қышқылының ангидриді: SO₃ + H₂O → H₂SO₄.",
      "en": "Sulfur trioxide hydration yields sulfuric acid: SO₃ + H₂O → H₂SO₄."
    },
    "hint": {
      "ru": "Степень окисления серы +6 сохраняется.",
      "kk": "Күкірттің +6 тотығу дәрежесі сақталады.",
      "en": "Sulfur maintains its +6 oxidation state."
    },
    "xpReward": 25
  },
  {
    "id": "re-31",
    "category": "reactions_equations",
    "difficulty": "easy",
    "question": {
      "ru": "Какое вещество выпадает в осадок при смешивании растворов AgNO₃ и NaCl?",
      "kk": "AgNO₃ және NaCl ерітінділерін араластырғанда түзілетін ақ тұнба?",
      "en": "Which insoluble compound precipitates when solutions of AgNO₃ and NaCl are mixed?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Нитрат натрия (NaNO₃)",
          "kk": "Натрий нитраты (NaNO₃)",
          "en": "Sodium nitrate (NaNO₃)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Хлорид серебра (AgCl)",
          "kk": "Күміс хлориді (AgCl)",
          "en": "Silver chloride (AgCl)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Оксид серебра (Ag₂O)",
          "kk": "Күміс оксиді (Ag₂O)",
          "en": "Silver oxide (Ag₂O)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Хлорид натрия (NaCl)",
          "kk": "Ас тұзы (NaCl)",
          "en": "Sodium chloride (NaCl)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Ag⁺ + Cl⁻ → AgCl↓ — белый творожистый осадок, нерастворимый в азотной кислоте.",
      "kk": "Ag⁺ + Cl⁻ → AgCl↓ — азот қышқылында ерімейтін ақ ірімшік тәрізді тұнба.",
      "en": "AgCl forms a classic white curdy precipitate insoluble in nitric acid."
    },
    "hint": {
      "ru": "Белый творожистый осадок.",
      "kk": "Ақ ірімшік тәрізді тұнба.",
      "en": "White curd-like precipitate."
    },
    "xpReward": 20
  },
  {
    "id": "re-32",
    "category": "reactions_equations",
    "difficulty": "hard",
    "question": {
      "ru": "Чему равен объем углекислого газа (н.у.), образующийся при сгорании 11.2 л метана (CH₄ + 2O₂ → CO₂ + 2H₂O)?",
      "kk": "11.2 л метан жанғанда (CH₄ + 2O₂ → CO₂ + 2H₂O) қ.ж. неше литр көмірқышқыл газы түзіледі?",
      "en": "What volume of CO₂ at STP is generated by the complete combustion of 11.2 L of methane: CH₄ + 2O₂ → CO₂ + 2H₂O?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "5.6 л",
          "kk": "5.6 л",
          "en": "5.6 L"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "22.4 л",
          "kk": "22.4 л",
          "en": "22.4 L"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "44.8 л",
          "kk": "44.8 л",
          "en": "44.8 L"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "11.2 л",
          "kk": "11.2 л",
          "en": "11.2 L"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "По закону объемных отношений Гей-Люссака коэффициенты перед CH₄ и CO₂ равны (1:1), значит V(CO₂) = V(CH₄) = 11.2 л.",
      "kk": "Гей-Люссак заңы бойынша газдардың көлемдік қатынасы 1:1, сондықтан 11.2 л метаннан дәл 11.2 л CO₂ түзіледі.",
      "en": "Gay-Lussac's law of combining volumes dictates a 1:1 ratio between CH₄ and CO₂, yielding 11.2 L."
    },
    "hint": {
      "ru": "Коэффициенты перед CH₄ и CO₂ одинаковы (1 и 1).",
      "kk": "Коэффициенттері бірдей (1:1).",
      "en": "Stoichiometric ratio is 1:1."
    },
    "xpReward": 35
  },
  {
    "id": "re-33",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Какая соль образуется при взаимодействии оксида меди(II) с серной кислотой: CuO + H₂SO₄ → ... + H₂O?",
      "kk": "Мыс(II) оксиді күкірт қышқылымен әрекеттескенде қандай көгілдір тұз түзіледі?",
      "en": "Which salt is produced when copper(II) oxide dissolves in sulfuric acid: CuO + H₂SO₄ → ... + H₂O?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Сульфид меди CuS",
          "kk": "Мыс сульфиді CuS",
          "en": "Copper sulfide CuS"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Сульфит меди CuSO₃",
          "kk": "Мыс сульфиті CuSO₃",
          "en": "Copper sulfite CuSO₃"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Сульфат меди(II) CuSO₄",
          "kk": "Мыс(II) сульфаты CuSO₄",
          "en": "Copper(II) sulfate CuSO₄"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Нитрат меди Cu(NO₃)₂",
          "kk": "Мыс нитраты Cu(NO₃)₂",
          "en": "Copper nitrate Cu(NO₃)₂"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Черный оксид меди растворяется в кислоте, образуя ярко-синий раствор сульфата меди(II) CuSO₄.",
      "kk": "Қара түсті мыс оксиді қышқылда еріп, көгілдір түсті мыс сульфаты ерітіндісін түзеді.",
      "en": "Black CuO dissolves in acid to produce an azure-blue solution of copper(II) sulfate."
    },
    "hint": {
      "ru": "Его кристаллогидрат называют медным купоросом.",
      "kk": "Оның кристаллогидраты мыс купоросы деп аталады.",
      "en": "Forms copper vitriol pentahydrate crystals."
    },
    "xpReward": 25
  },
  {
    "id": "re-34",
    "category": "reactions_equations",
    "difficulty": "hard",
    "question": {
      "ru": "Чему равна степень окисления углерода в молекуле глюкозы (C₆H₁₂O₆)?",
      "kk": "Глюкоза (C₆H₁₂O₆) молекуласындағы көміртектің орташа тотығу дәрежесі нешеге тең?",
      "en": "What is the average oxidation state of carbon in a glucose molecule (C₆H₁₂O₆)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "+1",
          "kk": "+1",
          "en": "+1"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "0",
          "kk": "0",
          "en": "0"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "+2",
          "kk": "+2",
          "en": "+2"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "+4",
          "kk": "+4",
          "en": "+4"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "В C₆H₁₂O₆: 12×(+1) + 6×(-2) = 0. Сумма зарядов водорода и кислорода равна 0, значит средняя степень окисления C = 0.",
      "kk": "C₆H₁₂O₆: сутегі +12, оттегі -12, сондықтан көміртектің орташа тотығу дәрежесі 0-ге тең.",
      "en": "In C₆H₁₂O₆: 12(+1) + 6(-2) = 0, meaning the average carbon oxidation number is exactly 0."
    },
    "hint": {
      "ru": "12 плюсов от H и 12 минусов от O компенсируют друг друга.",
      "kk": "12 сутегі мен 6 оттегі бір-бірін теңестіреді.",
      "en": "Total H and O charges cancel completely."
    },
    "xpReward": 40
  },
  {
    "id": "re-35",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Какой металл защищает железо от ржавления методом оцинковки?",
      "kk": "Темірді тот басудан қорғау үшін мырыштау әдісінде қолданылатын металл?",
      "en": "Which sacrificial metal protects iron from galvanic corrosion during galvanization?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Цинк (Zn)",
          "kk": "Мырыш (Zn)",
          "en": "Zinc (Zn)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Свинец (Pb)",
          "kk": "Қорғасын (Pb)",
          "en": "Lead (Pb)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Никель (Ni)",
          "kk": "Никель (Ni)",
          "en": "Nickel (Ni)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Олово (Sn)",
          "kk": "Қалайы (Sn)",
          "en": "Tin (Sn)"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Цинк активнее железа и при повреждении покрытия окисляется первым, защищая железо катодной защитой.",
      "kk": "Мырыш темірге қарағанда белсендірек болғандықтан, өзі тотығып темірді тоттанудан қорғайды.",
      "en": "Zinc acts as a sacrificial anode, corroding preferentially to shield the underlying iron."
    },
    "hint": {
      "ru": "Слово 'оцинковка' говорит само за себя.",
      "kk": "Мырыштау сөзінің өзі айтып тұр.",
      "en": "The process is called galvanizing or zinc plating."
    },
    "xpReward": 25
  },
  {
    "id": "re-36",
    "category": "reactions_equations",
    "difficulty": "easy",
    "question": {
      "ru": "Как называется соединение оксида кальция с водой: CaO + H₂O → Ca(OH)₂?",
      "kk": "CaO + H₂O → Ca(OH)₂ реакциясы қалай аталады?",
      "en": "What is the historical common name for the hydration of calcium oxide: CaO + H₂O → Ca(OH)₂?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Гашение извести",
          "kk": "Әк сөндіру",
          "en": "Slaking of lime"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Обжиг известняка",
          "kk": "Әк күйдіру",
          "en": "Calcination of limestone"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Электролиз",
          "kk": "Электролиз",
          "en": "Electrolysis"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Гидрогенизация",
          "kk": "Гидрогендеу",
          "en": "Hydrogenation"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Реакция идет с сильным выделением тепла ('кипение' извести). Негашеная известь превращается в гашеную.",
      "kk": "Бұл реакция үлкен жылу бөле жүреді, нәтижесінде сөндірілген әк түзіледі.",
      "en": "Vigorously exothermic hydration converting quicklime (CaO) into slaked lime Ca(OH)₂."
    },
    "hint": {
      "ru": "Негашеную известь гасят водой.",
      "kk": "Сөнбеген әкті сумен сөндіреді.",
      "en": "Converts quicklime into slaked lime."
    },
    "xpReward": 20
  },
  {
    "id": "re-37",
    "category": "reactions_equations",
    "difficulty": "hard",
    "question": {
      "ru": "Какое количество теплоты выделится при сгорании 2 моль водорода, если термохимическое уравнение: 2H₂ + O₂ → 2H₂O + 572 кДж?",
      "kk": "2H₂ + O₂ → 2H₂O + 572 кДж термохимиялық теңдеуі бойынша 2 моль сутегі жанғанда неше кДж жылу бөлінеді?",
      "en": "According to 2H₂ + O₂ → 2H₂O + 572 kJ, how much heat is released when exactly 2 moles of H₂ combust?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "572 кДж",
          "kk": "572 кДж",
          "en": "572 kJ"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "286 кДж",
          "kk": "286 кДж",
          "en": "286 kJ"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "1144 кДж",
          "kk": "1144 кДж",
          "en": "1144 kJ"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "143 кДж",
          "kk": "143 кДж",
          "en": "143 kJ"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "По уравнению реакция записана именно для 2 моль H₂, поэтому выделится ровно 572 кДж тепла.",
      "kk": "Теңдеуде 2 моль сутегі үшін дәл 572 кДж көрсетілген, сондықтан 572 кДж бөлінеді.",
      "en": "The thermochemical equation directly specifies 572 kJ for 2 moles of H₂ reactant."
    },
    "hint": {
      "ru": "Коэффициент перед H₂ равен 2.",
      "kk": "H₂ алдындағы коэффициент 2.",
      "en": "Coefficient for H₂ matches the question quantity."
    },
    "xpReward": 30
  },
  {
    "id": "re-38",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Какой газ образуется при неполном сгорании углеводородов при недостатке кислорода?",
      "kk": "Оттегі жетіспеген кезде көмірсутектер толық жанбағанда түзілетін қауіпті улы газ?",
      "en": "Which highly toxic odorless gas forms during incomplete combustion of fuel with insufficient oxygen?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Углекислый газ CO₂",
          "kk": "Көмірқышқыл газы CO₂",
          "en": "Carbon dioxide CO₂"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Сернистый газ SO₂",
          "kk": "Күкіртті газ SO₂",
          "en": "Sulfur dioxide SO₂"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Угарный газ CO",
          "kk": "Иіс газы CO",
          "en": "Carbon monoxide CO"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Азот N₂",
          "kk": "Азот N₂",
          "en": "Nitrogen N₂"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Угарный газ CO необратимо связывается с гемоглобином в карбоксигемоглобин, блокируя перенос кислорода.",
      "kk": "Иіс газы (CO) гемоглобинмен өте берік байланысып, оттегі тасымалдауды бұғаттайды.",
      "en": "Carbon monoxide (CO) binds to hemoglobin with ~200× greater affinity than O₂, causing fatal asphyxiation."
    },
    "hint": {
      "ru": "Не имеет цвета и запаха, крайне ядовит.",
      "kk": "Түссіз, иіссіз өте қауіпті тұншықтырғыш газ.",
      "en": "Silent toxic indoor killer from blocked flues."
    },
    "xpReward": 25
  },
  {
    "id": "re-39",
    "category": "reactions_equations",
    "difficulty": "medium",
    "question": {
      "ru": "Какое вещество является окислителем в реакции фотосинтеза: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂?",
      "kk": "Фотосинтез реакциясында (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂) қай зат тотықтырғыш қызметін атқарады?",
      "en": "Which molecule acts as the electron-accepting oxidant in photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Углекислый газ CO₂",
          "kk": "Көмірқышқыл газы CO₂",
          "en": "Carbon dioxide CO₂"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Вода H₂O",
          "kk": "Су H₂O",
          "en": "Water H₂O"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Кислород O₂",
          "kk": "Оттегі O₂",
          "en": "Oxygen O₂"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Хлорофилл",
          "kk": "Хлорофилл",
          "en": "Chlorophyll"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Углерод понижает степень окисления от +4 в CO₂ до 0 в глюкозе (принимает электроны, являясь окислителем).",
      "kk": "CO₂ құрамындағы көміртек тотығу дәрежесін +4-тен 0-ге түсіріп, тотықтырғыш болады.",
      "en": "Carbon in CO₂ (+4) is reduced to glucose (average 0), acting as the oxidant."
    },
    "hint": {
      "ru": "Углерод восстанавливается из +4 в 0.",
      "kk": "Көміртек тотықсызданады.",
      "en": "Carbon is reduced from +4 to zero."
    },
    "xpReward": 35
  },
  {
    "id": "re-40",
    "category": "reactions_equations",
    "difficulty": "hard",
    "question": {
      "ru": "Чему равна степень окисления железа в железной окалине Fe₃O₄ (магнетите)?",
      "kk": "Темір қағында (Fe₃O₄, магнетит) темірдің тотығу дәрежесі қандай?",
      "en": "What are the formal oxidation states of iron in magnetite / iron scale (Fe₃O₄)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Смешанная: +2 и +3 (FeO · Fe₂O₃)",
          "kk": "Аралас: +2 және +3 (FeO · Fe₂O₃)",
          "en": "Mixed: +2 and +3 (FeO · Fe₂O₃)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "+2",
          "kk": "+2",
          "en": "+2"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "+3",
          "kk": "+3",
          "en": "+3"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "+4",
          "kk": "+4",
          "en": "+4"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Fe₃O₄ представляет собой двойной оксид: один атом железа находится в степени +2 (FeO), а два — в степени +3 (Fe₂O₃).",
      "kk": "Fe₃O₄ — бұл қосарлы оксид FeO · Fe₂O₃: бір темір +2, ал екі темір +3 тотығу дәрежесінде болады.",
      "en": "Magnetite Fe₃O₄ is a mixed-valence spinel composed of FeO (Fe²⁺) and Fe₂O₃ (2 Fe³⁺)."
    },
    "hint": {
      "ru": "Магнетит — смешанный оксид двух степеней окисления.",
      "kk": "Қосарлы аралас оксид.",
      "en": "Combined formula FeO · Fe₂O₃."
    },
    "xpReward": 45
  },
  {
    "id": "org_1",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Каковы тип гибридизации атома углерода и форма молекулы метана (CH₄)?",
      "kk": "Метан (CH₄) молекуласындағы көміртек атомының гибридтену түрі және кеңістіктік пішіні қандай?",
      "en": "What is the hybridization of the carbon atom and the molecular geometry of methane (CH₄)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "sp², треугольная плоская (угол 120°)",
          "kk": "sp², жазық үшбұрыш (бұрышы 120°)",
          "en": "sp², trigonal planar (120° angle)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "sp, линейная (угол 180°)",
          "kk": "sp, сызықтық (бұрышы 180°)",
          "en": "sp, linear (180° angle)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "sp³, тетраэдр (угол 109,5°)",
          "kk": "sp³, тетраэдр (бұрышы 109,5°)",
          "en": "sp³, tetrahedral (109.5° angle)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "sp³d, тригональная бипирамида",
          "kk": "sp³d, тригональды бипирамида",
          "en": "sp³d, trigonal bipyramidal"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "В метане атом углерода находится в sp³-гибридизации, образуя правильный тетраэдр с углами 109°28'.",
      "kk": "Метан молекуласында көміртек sp³-гибридтену күйінде болып, 109°28' бұрышты дұрыс тетраэдр түзеді.",
      "en": "In methane, the central carbon is sp³ hybridized, forming a regular tetrahedron with 109.5° bond angles."
    },
    "hint": {
      "ru": "Вспомните 4 одинарные σ-связи вокруг одного атома углерода.",
      "kk": "Көміртек атомы айналасындағы 4 дара σ-байланысты еске түсіріңіз.",
      "en": "Recall the four single σ-bonds around a single carbon atom."
    },
    "xpReward": 15
  },
  {
    "id": "org_2",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Какова общая формула гомологического ряда предельных углеводородов (алканов)?",
      "kk": "Қаныққан көмірсутектердің (алкандардың) гомологтық қатарының жалпы формуласы қандай?",
      "en": "What is the general molecular formula for alkanes?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "CnH2n",
          "kk": "CnH2n",
          "en": "CnH2n"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "CnH2n-2",
          "kk": "CnH2n-2",
          "en": "CnH2n-2"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "CnH2n-6",
          "kk": "CnH2n-6",
          "en": "CnH2n-6"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "CnH2n+2",
          "kk": "CnH2n+2",
          "en": "CnH2n+2"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Алканы имеют общую формулу CnH2n+2 (например, CH₄, C₂H₆, C₃H₈).",
      "kk": "Алкандардың жалпы формуласы — CnH2n+2 (мысалы, CH₄, C₂H₆, C₃H₈).",
      "en": "Alkanes have the general formula CnH2n+2 (e.g., CH₄, C₂H₆, C₃H₈)."
    },
    "hint": {
      "ru": "У метана n=1, водородов 4.",
      "kk": "Метанда n=1, сутегі саны 4.",
      "en": "For methane n=1, hydrogen count is 4."
    },
    "xpReward": 15
  },
  {
    "id": "org_3",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Какова общая формула непредельных углеводородов ряда этилена (алкенов)?",
      "kk": "Этилен қатарындағы қанықпаған көмірсутектердің (алкендердің) жалпы формуласы қандай?",
      "en": "What is the general formula for alkenes?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "CnH2n+2",
          "kk": "CnH2n+2",
          "en": "CnH2n+2"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "CnH2n",
          "kk": "CnH2n",
          "en": "CnH2n"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "CnH2n-2",
          "kk": "CnH2n-2",
          "en": "CnH2n-2"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "CnH2n-4",
          "kk": "CnH2n-4",
          "en": "CnH2n-4"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Алкены содержат одну двойную связь C=C, что уменьшает число атомов водорода на 2 по сравнению с алканами: CnH2n.",
      "kk": "Алкендерде бір қос байланыс C=C бар, бұл сутек санын алкандарға қарағанда 2-ге азайтады: CnH2n.",
      "en": "Alkenes contain one C=C double bond, giving the general formula CnH2n."
    },
    "hint": {
      "ru": "Этен (этилен) имеет формулу C₂H₄.",
      "kk": "Этеннің (этиленнің) формуласы C₂H₄.",
      "en": "Ethene has the formula C₂H₄."
    },
    "xpReward": 15
  },
  {
    "id": "org_4",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Какова общая формула ацетиленовых углеводородов (алкинов)?",
      "kk": "Ацетилен көмірсутектерінің (алкиндердің) жалпы формуласы қандай?",
      "en": "What is the general formula for alkynes?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "CnH2n",
          "kk": "CnH2n",
          "en": "CnH2n"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "CnH2n+2",
          "kk": "CnH2n+2",
          "en": "CnH2n+2"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "CnH2n-2",
          "kk": "CnH2n-2",
          "en": "CnH2n-2"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "CnH2n-6",
          "kk": "CnH2n-6",
          "en": "CnH2n-6"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Алкины содержат одну тройную связь C≡C и описываются формулой CnH2n-2 (например, ацетилен C₂H₂).",
      "kk": "Алкиндер құрамында бір үштік байланыс C≡C болады және CnH2n-2 формуласымен сипатталады (мысалы, C₂H₂).",
      "en": "Alkynes contain one carbon-carbon triple bond and follow the formula CnH2n-2."
    },
    "hint": {
      "ru": "Ацетилен имеет формулу C₂H₂.",
      "kk": "Ацетилен формуласы — C₂H₂.",
      "en": "Acetylene has formula C₂H₂."
    },
    "xpReward": 15
  },
  {
    "id": "org_5",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Какова общая формула гомологов бензола (аренов)?",
      "kk": "Бензол гомологтарының (арендердің) жалпы формуласы қандай?",
      "en": "What is the general formula for benzene homologs (arenes)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "CnH2n-6 (n ≥ 6)",
          "kk": "CnH2n-6 (n ≥ 6)",
          "en": "CnH2n-6 (n ≥ 6)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "CnH2n-2 (n ≥ 2)",
          "kk": "CnH2n-2 (n ≥ 2)",
          "en": "CnH2n-2 (n ≥ 2)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "CnH2n (n ≥ 2)",
          "kk": "CnH2n (n ≥ 2)",
          "en": "CnH2n (n ≥ 2)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "CnH2n-4 (n ≥ 4)",
          "kk": "CnH2n-4 (n ≥ 4)",
          "en": "CnH2n-4 (n ≥ 4)"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Бензол (C₆H₆) и его гомологи (толуол C₇H₈) описываются общей формулой CnH2n-6 при n ≥ 6.",
      "kk": "Бензол (C₆H₆) және оның гомологтары (толуол C₇H₈) n ≥ 6 болғанда CnH2n-6 формуласына сәйкес келеді.",
      "en": "Benzene (C₆H₆) and its alkyl derivatives share the general formula CnH2n-6 for n ≥ 6."
    },
    "hint": {
      "ru": "У бензола 6 углеродов и 6 водородов.",
      "kk": "Бензолда 6 көміртек және 6 сутек бар.",
      "en": "Benzene has 6 carbons and 6 hydrogens."
    },
    "xpReward": 15
  },
  {
    "id": "org_6",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Какие вещества образуются при полном сгорании любого углеводорода в избытке кислорода?",
      "kk": "Кез келген көмірсутек оттектің артық мөлшерінде толық жанғанда қандай заттар түзіледі?",
      "en": "What are the products of the complete combustion of any hydrocarbon in excess oxygen?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "CO и H₂",
          "kk": "CO және H₂",
          "en": "CO and H₂"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "C (сажа) и H₂O",
          "kk": "C (күйе) және H₂O",
          "en": "C (soot) and H₂O"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "CO₂ и H₂O",
          "kk": "CO₂ және H₂O",
          "en": "CO₂ and H₂O"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "CO₂ и H₂",
          "kk": "CO₂ және H₂",
          "en": "CO₂ and H₂"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Полное сгорание углеводородов окисляет весь углерод до углекислого газа CO₂, а водород — до воды H₂O.",
      "kk": "Көмірсутектердің толық жануы нәтижесінде көміртек көмірқышқыл газына (CO₂), ал сутек суға (H₂O) дейін тотығады.",
      "en": "Complete combustion oxidizes carbon fully to CO₂ and hydrogen to water H₂O."
    },
    "hint": {
      "ru": "Углекислый газ и вода.",
      "kk": "Көмірқышқыл газы және су.",
      "en": "Carbon dioxide and water."
    },
    "xpReward": 15
  },
  {
    "id": "org_7",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "По какому механизму протекает реакция хлорирования метана на свету (CH₄ + Cl₂ → CH₃Cl + HCl)?",
      "kk": "Метанды жарықта хлорлау реакциясы (CH₄ + Cl₂ → CH₃Cl + HCl) қандай механизм бойынша жүреді?",
      "en": "By what mechanism does the photochemical chlorination of methane proceed?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Свободнорадикальное замещение (SR)",
          "kk": "Бос радикалды орынбасу (SR)",
          "en": "Free-radical substitution (SR)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Электрофильное присоединение (AE)",
          "kk": "Электрофильді қосылу (AE)",
          "en": "Electrophilic addition (AE)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Нуклеофильное замещение (SN)",
          "kk": "Нуклеофильді орынбасу (SN)",
          "en": "Nucleophilic substitution (SN)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Электрофильное замещение (SE)",
          "kk": "Электрофильді орынбасу (SE)",
          "en": "Electrophilic substitution (SE)"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Под действием УФ-света молекула Cl₂ распадается на радикалы (гомолиз), инициируя цепную реакцию свободнорадикального замещения (SR).",
      "kk": "УФ-сәуле әсерінен Cl₂ молекуласы радикалдарға ыдырап, тізбекті бос радикалды орынбасу (SR) реакциясы басталады.",
      "en": "UV light homolytically cleaves chlorine into free radicals, driving a radical chain substitution (SR) mechanism."
    },
    "hint": {
      "ru": "Свет расщепляет связь Cl-Cl на радикалы.",
      "kk": "Жарық Cl-Cl байланысын радикалдарға бөледі.",
      "en": "Light cleaves Cl-Cl into radicals."
    },
    "xpReward": 20
  },
  {
    "id": "org_8",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Какой углеводород образуется при взаимодействии 2-бромпропана с металлическим натрием (реакция Вюрца)?",
      "kk": "2-бромпропан металдық натриймен әрекеттескенде (Вюрц реакциясы) қандай көмірсутек түзіледі?",
      "en": "Which hydrocarbon is formed by the reaction of 2-bromopropane with metallic sodium (Wurtz reaction)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Гексан",
          "kk": "Гексан",
          "en": "Hexane"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "2-Метилпентан",
          "kk": "2-Метилпентан",
          "en": "2-Methylpentane"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "2,3-Диметилбутан",
          "kk": "2,3-Диметилбутан",
          "en": "2,3-Dimethylbutane"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Пропан",
          "kk": "Пропан",
          "en": "Propane"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Реакция Вюрца соединяет два изопропильных радикала: (CH₃)₂CH-Br + 2Na + Br-CH(CH₃)₂ → (CH₃)₂CH-CH(CH₃)₂ (2,3-диметилбутан).",
      "kk": "Вюрц реакциясы екі изопропил радикалын қосады: (CH₃)₂CH-CH(CH₃)₂ түзіліп, ол 2,3-диметилбутан деп аталады.",
      "en": "Coupling of two isopropyl radicals via the Wurtz reaction yields (CH₃)₂CH-CH(CH₃)₂, which is 2,3-dimethylbutane."
    },
    "hint": {
      "ru": "Соединяются два изопропильных радикала.",
      "kk": "Екі изопропил радикалы бір-бірімен байланысады.",
      "en": "Two isopropyl fragments link together."
    },
    "xpReward": 25
  },
  {
    "id": "org_9",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Сколько σ- и π-связей содержит молекула этилена (этена, C₂H₄)?",
      "kk": "Этилен (этен, C₂H₄) молекуласында неше σ- және π-байланыс бар?",
      "en": "How many σ- and π-bonds are present in an ethylene (C₂H₄) molecule?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "4 σ-связи и 2 π-связи",
          "kk": "4 σ-байланыс және 2 π-байланыс",
          "en": "4 σ-bonds and 2 π-bonds"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "6 σ-связей и 0 π-связей",
          "kk": "6 σ-байланыс және 0 π-байланыс",
          "en": "6 σ-bonds and 0 π-bonds"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "5 σ-связей и 1 π-связь",
          "kk": "5 σ-байланыс және 1 π-байланыс",
          "en": "5 σ-bonds and 1 π-bond"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "3 σ-связи и 2 π-связи",
          "kk": "3 σ-байланыс және 2 π-байланыс",
          "en": "3 σ-bonds and 2 π-bonds"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "В C₂H₄: четыре связи C-H (4 σ) и двойная связь C=C (1 σ + 1 π). Итого 5 σ и 1 π.",
      "kk": "C₂H₄ құрамында: төрт C-H байланысы (4 σ) және бір қос байланыс C=C (1 σ + 1 π). Барлығы 5 σ және 1 π.",
      "en": "Ethylene has 4 single C-H bonds (4 σ) and one double C=C bond (1 σ + 1 π), giving 5 σ and 1 π."
    },
    "hint": {
      "ru": "Каждая одинарная связь — это σ; в двойной связи 1 σ и 1 π.",
      "kk": "Әр дара байланыс — σ; қос байланыста 1 σ және 1 π болады.",
      "en": "Each single bond is σ; a double bond consists of 1 σ and 1 π."
    },
    "xpReward": 20
  },
  {
    "id": "org_10",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Какова пространственная конфигурация и валентный угол в молекуле ацетилена (C₂H₂)?",
      "kk": "Ацетилен (C₂H₂) молекуласының кеңістіктік пішіні және валенттік бұрышы қандай?",
      "en": "What is the molecular geometry and bond angle in an acetylene (C₂H₂) molecule?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Линейная, 180° (sp-гибридизация)",
          "kk": "Сызықтық, 180° (sp-гибридтену)",
          "en": "Linear, 180° (sp hybridization)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Тетраэдрическая, 109,5°",
          "kk": "Тетраэдрлік, 109,5°",
          "en": "Tetrahedral, 109.5°"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Плоская треугольная, 120°",
          "kk": "Жазық үшбұрыш, 120°",
          "en": "Trigonal planar, 120°"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Угловая, 104,5°",
          "kk": "Бұрыштық, 104,5°",
          "en": "Bent, 104.5°"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Атомы углерода в ацетилене находятся в sp-гибридизации, поэтому молекула H-C≡C-H строго линейна с углом 180°.",
      "kk": "Ацетиленде көміртек атомдары sp-гибридтенуде болғандықтан, H-C≡C-H молекуласы сызықтық (180°).",
      "en": "Acetylene carbons are sp hybridized, resulting in a strictly linear molecule with 180° bond angles."
    },
    "hint": {
      "ru": "Тройная связь C≡C задает прямую линию.",
      "kk": "Үштік C≡C байланысы түзу сызықты құрайды.",
      "en": "Triple bond C≡C creates a straight line."
    },
    "xpReward": 20
  },
  {
    "id": "org_11",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Какой качественный реагент используется для обнаружения кратных связей (алкенов и алкинов)?",
      "kk": "Еселі байланыстарды (алкендер мен алкиндерді) анықтау үшін қандай сапалық реактив қолданылады?",
      "en": "Which reagent is used as a qualitative test to detect unsaturation (double and triple bonds)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Раствор нитрата серебра (AgNO₃)",
          "kk": "Күміс нитраты ерітіндісі (AgNO₃)",
          "en": "Silver nitrate solution (AgNO₃)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Гидроксид натрия (NaOH)",
          "kk": "Натрий гидроксиді (NaOH)",
          "en": "Sodium hydroxide (NaOH)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Индикатор фенолфталеин",
          "kk": "Фенолфталеин индикаторы",
          "en": "Phenolphthalein indicator"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Бромная вода (Br₂ в H₂O) — обесцвечивание",
          "kk": "Бром суы (Br₂ суда) — түссізденуі",
          "en": "Bromine water (Br₂ in H₂O) — decolorization"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Алкены и алкины легко присоединяют бром по кратным связям, приводя к мгновенному обесцвечиванию бурой бромной воды.",
      "kk": "Алкендер мен алкиндер бромды еселі байланыс бойынша оңай қосып алып, қоңыр түсті бром суын түссіздендіреді.",
      "en": "Electrophilic addition of Br₂ across double or triple bonds rapidly discharges the reddish-brown bromine color."
    },
    "hint": {
      "ru": "Обесцвечивание бурого раствора.",
      "kk": "Қоңыр түсті ерітіндінің түссізденуі.",
      "en": "Decolorization of the reddish-brown liquid."
    },
    "xpReward": 15
  },
  {
    "id": "org_12",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Какой главный продукт образуется при гидрогалогенировании пропена бромоводородом: CH₃-CH=CH₂ + HBr?",
      "kk": "Пропенді бромсутекпен гидробромдағанда қандай негізгі өнім түзіледі: CH₃-CH=CH₂ + HBr?",
      "en": "What is the major product formed when propene reacts with hydrogen bromide (CH₃-CH=CH₂ + HBr)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "1-Бромпропан",
          "kk": "1-Бромпропан",
          "en": "1-Bromopropane"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "2-Бромпропан (правило Марковникова)",
          "kk": "2-Бромпропан (Марковников ережесі)",
          "en": "2-Bromopropane (Markovnikov's rule)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "1,2-Дибромпропан",
          "kk": "1,2-Дибромпропан",
          "en": "1,2-Dibromopropane"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Пропан",
          "kk": "Пропан",
          "en": "Propane"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "По правилу Марковникова водород присоединяется к более гидрогенизированному атому углерода (=CH₂), а галоген — к менее гидрогенизированному (=CH-).",
      "kk": "Марковников ережесі бойынша сутек сутегі көп көміртекке (=CH₂), ал бром сутегі аз көміртекке (=CH-) қосылады.",
      "en": "According to Markovnikov's rule, H adds to the carbon with more hydrogens, directing Br to the central carbon to give 2-bromopropane."
    },
    "hint": {
      "ru": "Водород идет туда, где водорода уже больше.",
      "kk": "Сутек өзі секілді сутегі көп көміртекке барады.",
      "en": "Hydrogen goes to the carbon already having more hydrogens."
    },
    "xpReward": 20
  },
  {
    "id": "org_13",
    "category": "organic_chemistry",
    "difficulty": "hard",
    "question": {
      "ru": "Какое вещество является преимущественным продуктом дегидрогалогенирования 2-бромбутана спиртовым раствором KOH?",
      "kk": "2-бромбутанды KOH-тың спирттегі ерітіндісімен дегидрогалогендегенде негізгі өнім қандай болады?",
      "en": "Which alkene is the major product of dehydrohalogenation of 2-bromobutane with alcoholic KOH?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Бутен-1",
          "kk": "Бутен-1",
          "en": "But-1-ene"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Бутен-2 (правило Зайцева)",
          "kk": "Бутен-2 (Зайцев ережесі)",
          "en": "But-2-ene (Zaitsev's rule)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Бутан",
          "kk": "Бутан",
          "en": "Butane"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Бутадиен-1,3",
          "kk": "Бутадиен-1,3",
          "en": "Buta-1,3-diene"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "По правилу Зайцева при элиминировании водород отщепляется от наименее гидрогенизированного соседнего атома углерода, образуя более устойчивый бутен-2.",
      "kk": "Зайцев ережесі бойынша сутек атомы көршілес сутегі аз көміртек атомынан бөлініп, тұрақтырақ бутен-2 түзіледі.",
      "en": "Zaitsev's rule states that elimination removes hydrogen from the adjacent carbon with fewer hydrogens, favoring the more substituted but-2-ene."
    },
    "hint": {
      "ru": "Образуется более замещенный (симметричный) алкен.",
      "kk": "Неғұрлым орынбасушысы көп алкен түзіледі.",
      "en": "The more substituted alkene is favored."
    },
    "xpReward": 25
  },
  {
    "id": "org_14",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Чем объясняется особая ароматическая устойчивость молекулы бензола (C₆H₆)?",
      "kk": "Бензол (C₆H₆) молекуласының ерекше ароматтық тұрақтылығы немен түсіндіріледі?",
      "en": "What explains the unique aromatic stability of the benzene molecule (C₆H₆)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Тремя изолированными двойными связями",
          "kk": "Үш оқшауланған қос байланыспен",
          "en": "Three isolated double bonds"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Наличием ионных связей C-C",
          "kk": "Иондық C-C байланыстарының болуымен",
          "en": "Presence of ionic C-C bonds"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Тетраэдрическим строением цикла",
          "kk": "Циклдің тетраэдрлік құрылысымен",
          "en": "Tetrahedral ring puckering"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Единой делокализованной 6π-электронной системой",
          "kk": "Біртұтас делокализацияланған 6π-электронды жүйемен",
          "en": "A unified delocalized 6π-electron cloud"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Все 6 атомов углерода sp²-гибридны, их негибридные p-орбитали перекрываются над и под плоскостью кольца, образуя стабильный ароматический 6π-секстет.",
      "kk": "Барлық 6 көміртек атомы sp²-гибридтелген, олардың p-орбитальдары сақина бойымен тұрақты 6π-электрондық бұлт түзеді.",
      "en": "Overlapping unhybridized p-orbitals form a cyclic, continuous, delocalized aromatic sextet of 6 π-electrons with high resonance energy."
    },
    "hint": {
      "ru": "Вспомните ароматический секстет электронов.",
      "kk": "Ароматтық 6 электронды секстетті еске түсіріңіз.",
      "en": "Recall the aromatic sextet of electrons."
    },
    "xpReward": 20
  },
  {
    "id": "org_15",
    "category": "organic_chemistry",
    "difficulty": "hard",
    "question": {
      "ru": "Какой электрофил атакует бензольное кольцо в реакции нитрования нитрующей смесью (HNO₃ + H₂SO₄)?",
      "kk": "Нитрлеуші қоспадағы (HNO₃ + H₂SO₄) бензол сақинасына шабуыл жасайтын электрофильді бөлшек қандай?",
      "en": "Which electrophile attacks the benzene ring during nitration with nitrating mixture (HNO₃ + H₂SO₄)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Нитрат-анион (NO₃⁻)",
          "kk": "Нитрат анионы (NO₃⁻)",
          "en": "Nitrate anion (NO₃⁻)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Нитрит-ион (NO₂⁻)",
          "kk": "Нитрит ионы (NO₂⁻)",
          "en": "Nitrite ion (NO₂⁻)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Оксид азота (NO)",
          "kk": "Азот оксиді (NO)",
          "en": "Nitric oxide (NO)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Ион нитрония (NO₂⁺)",
          "kk": "Нитроний ионы (NO₂⁺)",
          "en": "Nitronium ion (NO₂⁺)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Серная кислота протонирует азотную кислоту, образуя активный катион нитрония: HNO₃ + 2H₂SO₄ ⇌ NO₂⁺ + H₃O⁺ + 2HSO₄⁻.",
      "kk": "Күкірт қышқылы азот қышқылын протондап, белсенді нитроний катионын түзеді: NO₂⁺.",
      "en": "Sulfuric acid protonates nitric acid to generate the electrophilic nitronium cation NO₂⁺, which attacks the aromatic ring."
    },
    "hint": {
      "ru": "Катион с зарядом + на атоме азота.",
      "kk": "Азот атомында оң заряды бар катион.",
      "en": "A positive cation with + on nitrogen."
    },
    "xpReward": 25
  },
  {
    "id": "org_16",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Какой продукт образуется при жестком окислении толуола (метилбензола) подкисленным раствором KMnO₄?",
      "kk": "Толуолды (метилбензолды) қышқылданған KMnO₄ ерітіндісімен күшті тотықтырғанда қандай өнім түзіледі?",
      "en": "Which product is formed upon vigorous oxidation of toluene with acidified KMnO₄?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Бензойная кислота (C₆H₅COOH)",
          "kk": "Бензой қышқылы (C₆H₅COOH)",
          "en": "Benzoic acid (C₆H₅COOH)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Бензальдегид",
          "kk": "Бензальдегид",
          "en": "Benzaldehyde"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Фенол",
          "kk": "Фенол",
          "en": "Phenol"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Бензол",
          "kk": "Бензол",
          "en": "Benzene"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Боковая метильная группа аренов легко окисляется перманганатом до карбоксильной группы -COOH, давая бензойную кислоту.",
      "kk": "Арендердің бүйірлік метил тобы перманганат әсерінен карбоксил тобына дейін оңай тотығып, бензой қышқылын береді.",
      "en": "Alkyl side chains on benzene rings are oxidized to carboxylic acids by hot KMnO₄, producing benzoic acid."
    },
    "hint": {
      "ru": "Метильная группа превращается в карбоксильную (-COOH).",
      "kk": "Метил тобы карбоксил тобына (-COOH) айналады.",
      "en": "Methyl group is oxidized to -COOH."
    },
    "xpReward": 20
  },
  {
    "id": "org_17",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "К какому классу спиртов относится 2-метилпропанол-2 ((CH₃)₃C-OH)?",
      "kk": "2-метилпропанол-2 ((CH₃)₃C-OH) спирттердің қандай түріне жатады?",
      "en": "What classification of alcohol is 2-methylpropan-2-ol (tert-butanol)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Первичный спирт",
          "kk": "Біріншілік спирт",
          "en": "Primary alcohol"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Вторичный спирт",
          "kk": "Екіншілік спирт",
          "en": "Secondary alcohol"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Третичный спирт",
          "kk": "Үшіншілік спирт",
          "en": "Tertiary alcohol"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Двухатомный спирт",
          "kk": "Екіатомды спирт",
          "en": "Dihydric alcohol"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Гидроксильная группа -OH связана с третичным атомом углерода, который соединен с тремя другими атомами углерода.",
      "kk": "Гидроксил тобы (-OH) басқа үш көміртек атомымен байланысқан үшіншілік көміртекте орналасқан.",
      "en": "The hydroxyl group (-OH) is attached to a carbon bonded to three other carbons, making it a tertiary alcohol."
    },
    "hint": {
      "ru": "С углеродом при группе OH связаны 3 метильные группы.",
      "kk": "OH тобы бар көміртекке 3 метил тобы жалғанған.",
      "en": "Three methyl groups are attached to the C-OH carbon."
    },
    "xpReward": 20
  },
  {
    "id": "org_18",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Почему метанол (древесный спирт, CH₃OH) является сильнейшим смертельным ядом для человека?",
      "kk": "Неліктен метанол (ағаш спирті, CH₃OH) адам ағзасы үшін өте қауіпті өлімге әкелетін у болып табылады?",
      "en": "Why is methanol (CH₃OH) dangerously toxic and potentially fatal upon ingestion?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Он взрывается при контакте с желудочным соком",
          "kk": "Ол асқазан сөлімен жанасқанда жарылыс береді",
          "en": "It explodes upon contact with gastric juice"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Он связывает гемоглобин прочнее кислорода",
          "kk": "Ол гемоглобинді оттектен күштірек байланыстырады",
          "en": "It binds irreversibly to hemoglobin like CO"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Он полимеризуется в кишечнике в пластик",
          "kk": "Ол ішекте пластикке дейін полимерленеді",
          "en": "It polymerizes into plastic in intestines"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "В печени ферменты окисляют его в формальдегид и муравьиную кислоту",
          "kk": "Бауырда ферменттер оны улы формальдегид пен құмырсқа қышқылына айналдырады",
          "en": "Enzymes in the liver oxidize it into toxic formaldehyde and formic acid"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Алкогольдегидрогеназа окисляет CH₃OH до формальдегида (HCHO) и муравьиной кислоты (HCOOH), которые вызывают разрушение зрительного нерва (слепоту) и тяжелейший ацидоз.",
      "kk": "Бауырдағы ферменттер метанолды аса улы құмырсқа альдегиді мен қышқылына айналдырып, көру жүйкесін жояды және өлімге әкеледі.",
      "en": "Alcohol dehydrogenase metabolizes methanol into formaldehyde and formic acid, causing severe metabolic acidosis and optic nerve destruction."
    },
    "hint": {
      "ru": "Метаболиты окисления метанола поражают сетчатку и нервную систему.",
      "kk": "Метанолдың тотығу өнімдері көру жүйкесін зақымдайды.",
      "en": "Its metabolites damage the optic nerve and cause severe acidosis."
    },
    "xpReward": 15
  },
  {
    "id": "org_19",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Какие вещества являются продуктами спиртового брожения глюкозы под действием дрожжей?",
      "kk": "Ашытқы саңырауқұлақтары әсерінен глюкозаның спирттік ашу өнімдері қандай?",
      "en": "What are the products of the alcoholic fermentation of glucose by yeast?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Этанол (C₂H₅OH) и CO₂",
          "kk": "Этанол (C₂H₅OH) және CO₂",
          "en": "Ethanol (C₂H₅OH) and CO₂"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Метанол и CO",
          "kk": "Метанол және CO",
          "en": "Methanol and CO"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Молочная кислота",
          "kk": "Сүт қышқылы",
          "en": "Lactic acid"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Уксусная кислота и H₂",
          "kk": "Сірке қышқылы және H₂",
          "en": "Acetic acid and H₂"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Уравнение спиртового брожения: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂↑.",
      "kk": "Спирттік ашудың теңдеуі: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂↑.",
      "en": "Yeast enzymes convert glucose anaerobically: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂."
    },
    "hint": {
      "ru": "Образуется винный спирт и углекислый газ.",
      "kk": "Шарап спирті және көмірқышқыл газы түзіледі.",
      "en": "Ethanol and carbon dioxide are produced."
    },
    "xpReward": 15
  },
  {
    "id": "org_20",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Какой газ выделяется при реакции чистого этилового спирта с металлическим натрием?",
      "kk": "Таза этил спирті металдық натриймен әрекеттескенде қандай газ бөлінеді?",
      "en": "Which gas is evolved when absolute ethanol reacts with metallic sodium?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Кислород (O₂)",
          "kk": "Оттек (O₂)",
          "en": "Oxygen (O₂)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Углекислый газ (CO₂)",
          "kk": "Көмірқышқыл газы (CO₂)",
          "en": "Carbon dioxide (CO₂)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Этан (C₂H₆)",
          "kk": "Этан (C₂H₆)",
          "en": "Ethane (C₂H₆)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Водород (H₂)",
          "kk": "Сутек (H₂)",
          "en": "Hydrogen (H₂)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Натрий замещает подвижный атом водорода в группе -OH с образованием этилата натрия и выделением водорода: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑.",
      "kk": "Натрий -OH тобындағы сутекті ығыстырып, натрий этилатын және сутек газын түзеді: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑.",
      "en": "Sodium reduces the hydroxyl proton to liberate molecular hydrogen gas and form sodium ethoxide: 2EtOH + 2Na → 2EtONa + H₂."
    },
    "hint": {
      "ru": "Натрий вытесняет водород из гидроксильной группы.",
      "kk": "Натрий гидроксил тобынан сутекті ығыстырады.",
      "en": "Sodium displaces hydrogen from the hydroxyl group."
    },
    "xpReward": 20
  },
  {
    "id": "org_21",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Какой продукт образуется при внутримолекулярной дегидратации этанола при t > 140°C в присутствии конц. H₂SO₄?",
      "kk": "Концентрлі H₂SO₄ қатысында t > 140°C кезінде этанолдың ішкі молекулалық дегидратациясынан не түзіледі?",
      "en": "What product is formed by intramolecular dehydration of ethanol at t > 140°C with concentrated H₂SO₄?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Диэтиловый эфир",
          "kk": "Диэтил эфирі",
          "en": "Diethyl ether"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Этилен (C₂H₄)",
          "kk": "Этилен (C₂H₄)",
          "en": "Ethylene (ethene, C₂H₄)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Ацетилен",
          "kk": "Ацетилен",
          "en": "Acetylene"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Уксусный альдегид",
          "kk": "Сірке альдегиді",
          "en": "Acetaldehyde"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "При t > 140°C идет внутримолекулярное отщепление воды с образованием алкена: C₂H₅OH → C₂H₄ + H₂O. (При t < 140°C образуется эфир).",
      "kk": "t > 140°C кезінде молекулаішілік су бөліну жүріп, алкен (этилен) түзіледі. Ал 140°C-тан төмен болса диэтил эфирі түзілер еді.",
      "en": "At higher temperatures (>140°C), intramolecular elimination yields ethylene C₂H₄. Intermolecular condensation at lower temperatures yields diethyl ether."
    },
    "hint": {
      "ru": "Высокая температура благоприятствует образованию двойной связи.",
      "kk": "Жоғары температура қос байланыстың түзілуіне ықпал етеді.",
      "en": "Higher temperature favors elimination to form a double bond."
    },
    "xpReward": 20
  },
  {
    "id": "org_22",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "С помощью какого свежеосажденного реагента определяют многоатомные спирты (глицерин, этиленгликоль)?",
      "kk": "Көп атомды спирттерді (глицерин, этиленгликоль) қандай жаңа тұндырылған реактивпен анықтайды?",
      "en": "Which freshly prepared reagent is used as a qualitative test for polyhydric alcohols (glycerol, ethylene glycol)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Cu(OH)₂ — образуется ярко-синий прозрачный раствор хелата",
          "kk": "Cu(OH)₂ — ашық-көк мөлдір хелатты ерітінді түзіледі",
          "en": "Cu(OH)₂ — produces a bright blue soluble chelate complex"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "FeCl₃ — фиолетовое окрашивание",
          "kk": "FeCl₃ — күлгін түске боялу",
          "en": "FeCl₃ — violet coloration"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "AgNO₃ — выпадение осадка",
          "kk": "AgNO₃ — тұнба түзілуі",
          "en": "AgNO₃ — precipitation"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "BaCl₂ — белый осадок",
          "kk": "BaCl₂ — ақ тұнба",
          "en": "BaCl₂ — white precipitate"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Многоатомные спирты с вицинальными ОН-группами растворяют голубой осадок Cu(OH)₂ в щелочной среде с образованием ярко-синего глицерата меди(II).",
      "kk": "Көршілес -OH топтары бар көпатомды спирттер Cu(OH)₂ тұнбасын ерітіп, ашық көк түсті мыс(II) глицераты кешенін түзеді.",
      "en": "Polyols with adjacent -OH groups coordinate with copper(II) ions in basic solution to dissolve Cu(OH)₂ into an intense blue chelate."
    },
    "hint": {
      "ru": "Образуется ярко-синий растворимый комплекс меди.",
      "kk": "Мыстың ашық-көк түсті ерімтал кешені түзіледі.",
      "en": "A bright cornflower-blue soluble complex is formed."
    },
    "xpReward": 15
  },
  {
    "id": "org_23",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Почему фенол (C₆H₅OH) проявляет значительно более сильные кислотные свойства, чем этанол?",
      "kk": "Неліктен фенол (C₆H₅OH) этанолға қарағанда әлдеқайда күшті қышқылдық қасиет көрсетеді?",
      "en": "Why does phenol (C₆H₅OH) exhibit significantly stronger acidic properties than ethanol?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Фенол содержит карбоксильную группу -COOH",
          "kk": "Фенол құрамында карбоксил тобы бар",
          "en": "Phenol contains a carboxylic group"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Бензольное кольцо отдает электроны кислороду",
          "kk": "Бензол сақинасы оттекке электрондар береді",
          "en": "The aromatic ring donates electron density to oxygen"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "В молекуле фенола три гидроксильные группы",
          "kk": "Фенол молекуласында үш гидроксил тобы бар",
          "en": "Phenol has three hydroxyl groups"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Неподеленная пара кислорода делокализована в ароматическое кольцо, стабилизируя фенолят-ион",
          "kk": "Оттектің бөлінбеген электрон жұбы бензол сақинасымен түйіндесіп, фенолят-ионды тұрақтандырады",
          "en": "The oxygen lone pair is delocalized into the benzene ring, stabilizing the phenoxide anion"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Сопряжение p-электронов кислорода с π-системой бензольного кольца ослабляет связь O-H и делокализует отрицательный заряд фенолят-аниона C₆H₅O⁻.",
      "kk": "Оттек атомының p-электрондары мен бензолдың π-жүйесі арасындағы түйіндесу O-H байланысын әлсіретіп, фенолят-ионның тұрақтылығын арттырады.",
      "en": "Resonance delocalization of the negative charge into the aromatic ring stabilizes the conjugate base (phenoxide), boosting acidity."
    },
    "hint": {
      "ru": "Делокализация отрицательного заряда по бензольному кольцу.",
      "kk": "Теріс зарядтың бензол сақинасы бойынша таралуы.",
      "en": "Stabilization of the negative charge across the benzene ring."
    },
    "xpReward": 20
  },
  {
    "id": "org_24",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Какое окрашивание наблюдается при добавлении раствора хлорида железа(III) (FeCl₃) к фенолу?",
      "kk": "Фенолға темір(III) хлоридінің (FeCl₃) ерітіндісін қосқанда қандай түс пайда болады?",
      "en": "What color appears when iron(III) chloride (FeCl₃) solution is added to phenol?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Ярко-красное",
          "kk": "Ашық қызыл",
          "en": "Bright red"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Фиолетовое",
          "kk": "Күлгін",
          "en": "Violet / Purple"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Зеленое",
          "kk": "Жасыл",
          "en": "Green"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Желтое",
          "kk": "Сары",
          "en": "Yellow"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Реакция с FeCl₃ — качественная на фенольный гидроксил: образуется комплексный фенолят железа(III) интенсивного фиолетового цвета.",
      "kk": "FeCl₃ ерітіндісімен фенол қосылыстары қарқынды күлгін түсті темір(III) феноляты кешенін түзеді.",
      "en": "FeCl₃ forms an intensely colored violet coordination complex with the phenolic hydroxyl group."
    },
    "hint": {
      "ru": "Фиолетовый комплекс железа.",
      "kk": "Темірдің күлгін түсті кешені.",
      "en": "Violet iron complex."
    },
    "xpReward": 20
  },
  {
    "id": "org_25",
    "category": "organic_chemistry",
    "difficulty": "hard",
    "question": {
      "ru": "Какой осадок выпадает при пропускании бромной воды через водный раствор фенола?",
      "kk": "Фенолдың сулы ерітіндісіне бром суын қосқанда қандай тұнба түзіледі?",
      "en": "What precipitate is formed when bromine water is added to an aqueous solution of phenol?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Бурый осадок оксида брома",
          "kk": "Бром оксидінің қоңыр тұнбасы",
          "en": "Brown precipitate of bromine oxide"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Желтый осадок бромбензола",
          "kk": "Бромбензолдың сары тұнбасы",
          "en": "Yellow precipitate of bromobenzene"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Красный осадок дибромфенола",
          "kk": "Дибромфенолдың қызыл тұнбасы",
          "en": "Red precipitate of dibromophenol"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Белый осадок 2,4,6-трибромфенола",
          "kk": "2,4,6-трибромфенолдың ақ тұнбасы",
          "en": "White precipitate of 2,4,6-tribromophenol"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Гидроксильная группа фенола сильно активирует орто- и пара-положения кольца, поэтому бромирование идет мгновенно по трем положениям (2, 4, 6) с выпадением белого осадка.",
      "kk": "Фенолдағы -OH тобы сақинаның орто- және пара-орындарын белсендіріп, лезде ақ түсті 2,4,6-трибромфенол тұнбасын түзеді.",
      "en": "The strong activating effect of the -OH group directs bromine into ortho and para positions simultaneously, precipitating white 2,4,6-tribromophenol."
    },
    "hint": {
      "ru": "Сразу три атома брома замещают водород в кольце.",
      "kk": "Сақинада бірден үш бром атомы орын басады.",
      "en": "Three bromine atoms substitute into the ring at once."
    },
    "xpReward": 25
  },
  {
    "id": "org_26",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Какая функциональная группа характерна для альдегидов?",
      "kk": "Альдегидтерге қандай функционалдық топ тән?",
      "en": "Which functional group is characteristic of aldehydes?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "-COOH (карбоксильная)",
          "kk": "-COOH (карбоксил тобы)",
          "en": "-COOH (carboxyl)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "-CH=O (карбонильная, связанная с H)",
          "kk": "-CH=O (сутекпен байланысқан карбонил тобы)",
          "en": "-CH=O (carbonyl bonded to hydrogen)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "-OH (гидроксильная)",
          "kk": "-OH (гидроксил тобы)",
          "en": "-OH (hydroxyl)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "-NH₂ (аминогруппа)",
          "kk": "-NH₂ (амин тобы)",
          "en": "-NH₂ (amino)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Альдегиды содержат формильную (карбонильную) группу -CH=O на конце углеродной цепи.",
      "kk": "Альдегидтердің көміртек тізбегінің ұшында -CH=O карбонил тобы болады.",
      "en": "Aldehydes possess a terminal carbonyl group bonded to at least one hydrogen: -CHO."
    },
    "hint": {
      "ru": "Углерод с двойной связью к кислороду и одинарной к водороду.",
      "kk": "Оттекпен қос байланысқан және сутекпен дара байланысқан көміртек.",
      "en": "Carbon double-bonded to oxygen and single-bonded to hydrogen."
    },
    "xpReward": 15
  },
  {
    "id": "org_27",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Что наблюдается при проведении реакции «серебряного зеркала» с альдегидами (реактив Толленса)?",
      "kk": "Альдегидтермен «күміс айна» реакциясын жүргізгенде (Толленс реактиві) не байқалады?",
      "en": "What is observed during the 'silver mirror' reaction with aldehydes (Tollens' test)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Выделение пузырьков газа хлора",
          "kk": "Хлор газының көпіршіктерінің бөлінуі",
          "en": "Evolution of chlorine gas bubbles"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Осаждение металлического серебра на стенках пробирки",
          "kk": "Пробирка қабырғасында жылтыр металдық күмістің тұнуы",
          "en": "Deposition of a shiny metallic silver coating on glass walls"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Раствор окрашивается в ярко-зеленый цвет",
          "kk": "Ерітінді ашық жасыл түске боялады",
          "en": "Solution turns emerald green"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Образование черного осадка сульфида серебра",
          "kk": "Күміс сульфидінің қара тұнбасының түзілуі",
          "en": "Precipitation of black silver sulfide"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Аммиачный раствор оксида серебра [Ag(NH₃)₂]OH окисляет альдегид в карбоновую кислоту, а серебро восстанавливается до зеркального металлического слоя.",
      "kk": "Күміс оксидінің аммиактағы ерітіндісі альдегидті тотықтырып, металдық күміс пробирка қабырғасына айна тәрізді қонады.",
      "en": "Tollens' reagent [Ag(NH₃)₂]⁺ oxidizes aldehydes while silver ions are reduced to elemental silver, forming a specular mirror."
    },
    "hint": {
      "ru": "Осаждается чистое металлическое серебро.",
      "kk": "Таза металдық күміс қабаты түзіледі.",
      "en": "Pure metallic silver deposits as a mirror."
    },
    "xpReward": 20
  },
  {
    "id": "org_28",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Какой осадок образуется при нагревании альдегида со свежеосажденным Cu(OH)₂ (или реактивом Фелинга)?",
      "kk": "Альдегидті жаңа тұндырылған Cu(OH)₂-мен (немесе Фелинг реактивімен) қыздырғанда қандай тұнба түзіледі?",
      "en": "What precipitate forms when an aldehyde is heated with Cu(OH)₂ (or Fehling's solution)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Черный осадок CuO",
          "kk": "CuO қара тұнбасы",
          "en": "Black precipitate of CuO"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Кирпично-красный осадок оксида меди(I) Cu₂O",
          "kk": "Мыс(I) оксидінің (Cu₂O) кірпіш-қызыл тұнбасы",
          "en": "Brick-red precipitate of copper(I) oxide (Cu₂O)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Белый осадок CuCl",
          "kk": "CuCl ақ тұнбасы",
          "en": "White precipitate of CuCl"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Синий осадок Cu(OH)₂",
          "kk": "Cu(OH)₂ көк тұнбасы",
          "en": "Blue precipitate of Cu(OH)₂"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Альдегид восстанавливает медь(II) до меди(I): R-CHO + 2Cu(OH)₂ → R-COOH + Cu₂O↓ (красный) + 2H₂O.",
      "kk": "Альдегид мыс(II)-ні мыс(I)-ге дейін тотықсыздандырып, кірпіштей қызыл Cu₂O тұнбасын береді.",
      "en": "Aldehydes reduce copper(II) to insoluble red copper(I) oxide Cu₂O upon heating."
    },
    "hint": {
      "ru": "Кирпично-красный оксид меди(I).",
      "kk": "Кірпіш қызыл түсті мыс(I) оксиді.",
      "en": "Brick-red copper(I) oxide."
    },
    "xpReward": 20
  },
  {
    "id": "org_29",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Из каких двух функциональных групп состоит карбоксильная группа -COOH?",
      "kk": "Карбоксил тобы (-COOH) қандай екі топтың бірігуінен тұрады?",
      "en": "Which two functional groups make up the carboxyl group (-COOH)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Карбонильной (>C=O) и гидроксильной (-OH)",
          "kk": "Карбонил (>C=O) және гидроксил (-OH)",
          "en": "Carbonyl (>C=O) and hydroxyl (-OH)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Аминогруппы и гидроксильной",
          "kk": "Амин және гидроксил",
          "en": "Amino and hydroxyl"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Карбонильной и нитрогруппы",
          "kk": "Карбонил және нитро",
          "en": "Carbonyl and nitro"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Эфирной и гидроксильной",
          "kk": "Эфир және гидроксил",
          "en": "Ether and hydroxyl"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Название 'карбоксильная' происходит от слияния слов КАРБОнил (>C=O) и гидроКСИЛ (-OH).",
      "kk": "'Карбоксил' атауы КАРБОнил (>C=O) және гидроКСИЛ (-OH) сөздерінің бірігуінен шыққан.",
      "en": "The name carboxyl is a portmanteau of carbonyl (C=O) and hydroxyl (-OH)."
    },
    "hint": {
      "ru": "С=О и -ОН вместе.",
      "kk": "C=O және -OH бірге.",
      "en": "C=O and -OH together."
    },
    "xpReward": 15
  },
  {
    "id": "org_30",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Почему муравьиная кислота (HCOOH), в отличие от уксусной, дает реакцию «серебряного зеркала»?",
      "kk": "Неліктен құмырсқа қышқылы (HCOOH), сірке қышқылына қарағанда, «күміс айна» реакциясын береді?",
      "en": "Why does formic acid (HCOOH), unlike acetic acid, give a positive Tollens' silver mirror test?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Она является сильнейшей неорганической кислотой",
          "kk": "Ол ең күшті бейорганикалық қышқыл",
          "en": "It is an inorganic strong mineral acid"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Она одновременно содержит и альдегидную (-CHO), и карбоксильную группы",
          "kk": "Оның құрамында бір уақытта әрі альдегидтік (-CHO), әрі карбоксил тобы бар",
          "en": "It simultaneously contains both an aldehyde (-CHO) and carboxyl group motif"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Она содержит тройную связь",
          "kk": "Оның құрамында үштік байланыс бар",
          "en": "It contains a triple bond"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Она содержит ионы серебра",
          "kk": "Оның құрамында күміс иондары бар",
          "en": "It intrinsically contains silver ions"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "В молекуле H-C(=O)OH атом водорода связан непосредственно с карбонильной группой, что придает ей свойства восстановителя-альдегида.",
      "kk": "H-C(=O)OH құрылысында сутек атомы карбонилмен тікелей байланысқан, бұл оған альдегидке тән тотықсыздандырғыш қасиет береді.",
      "en": "The H atom directly attached to the carbonyl carbon gives formic acid the oxidizable character of an aldehyde."
    },
    "hint": {
      "ru": "У нее есть фрагмент H-C=O.",
      "kk": "Онда H-C=O альдегидтік бөлігі бар.",
      "en": "It contains the H-C=O aldehyde moiety."
    },
    "xpReward": 20
  },
  {
    "id": "org_31",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Как называется реакция взаимодействия карбоновой кислоты со спиртом с образованием сложного эфира?",
      "kk": "Карбон қышқылы мен спирттің әрекеттесіп күрделі эфир түзу реакциясы қалай аталады?",
      "en": "What is the reaction between a carboxylic acid and an alcohol to form an ester called?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Реакция гидратации",
          "kk": "Гидратация реакциясы",
          "en": "Hydration reaction"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Реакция полимеризации",
          "kk": "Полимерлену реакциясы",
          "en": "Polymerization reaction"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Реакция этерификации",
          "kk": "Этерификация реакциясы",
          "en": "Esterification reaction"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Реакция дегидрирования",
          "kk": "Дегидрлену реакциясы",
          "en": "Dehydrogenation reaction"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Реакция этерификации (по Фишеру) катализируется сильными кислотами (H₂SO₄) и является обратимой: RCOOH + R'OH ⇌ RCOOR' + H₂O.",
      "kk": "Этерификация реакциясы қышқыл катализатор (H₂SO₄) қатысында жүретін қайтымды процесс: қышқыл + спирт ⇌ күрделі эфир + су.",
      "en": "Fischer esterification is an acid-catalyzed condensation of a carboxylic acid and an alcohol to produce an ester and water."
    },
    "hint": {
      "ru": "Образование сложного эфира.",
      "kk": "Күрделі эфир түзілуі.",
      "en": "Formation of an ester."
    },
    "xpReward": 15
  },
  {
    "id": "org_32",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Химически жиры представляют собой полные сложные эфиры какого трехатомного спирта и высших жирных кислот?",
      "kk": "Химиялық тұрғыдан майлар қай үш атомды спирт пен жоғары май қышқылдарының күрделі эфирлері болып табылады?",
      "en": "Chemically, fats and oils are triesters composed of fatty acids and which trihydric alcohol?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Этиленгликоль",
          "kk": "Этиленгликоль",
          "en": "Ethylene glycol"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Фенол",
          "kk": "Фенол",
          "en": "Phenol"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Глицерин (пропантриол-1,2,3)",
          "kk": "Глицерин (пропантриол-1,2,3)",
          "en": "Glycerol (propane-1,2,3-triol)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Метанол",
          "kk": "Метанол",
          "en": "Methanol"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Жиры (триглицериды) образуются при этерификации глицерина тремя молекулами высших жирных кислот (пальмитиновой, стеариновой, олеиновой).",
      "kk": "Майлар (триглицеридтер) — глицерин мен жоғары май қышқылдарының (пальмитин, стеарин, олеин) күрделі эфирлері.",
      "en": "Triglycerides are triesters derived from glycerol and three fatty acid chains."
    },
    "hint": {
      "ru": "Трехатомный спирт с 3 атомами углерода.",
      "kk": "3 көміртек атомы бар үш атомды спирт.",
      "en": "A 3-carbon triol."
    },
    "xpReward": 20
  },
  {
    "id": "org_33",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Какие вещества образуются при щелочном гидролизе (омылении) жиров гидроксидом натрия (NaOH)?",
      "kk": "Майларды натрий гидроксидімен (NaOH) сілтілік гидролиздегенде (сабындану) қандай өнімдер алынады?",
      "en": "What products are obtained by the alkaline hydrolysis (saponification) of fats using NaOH?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Бензол и вода",
          "kk": "Бензол және су",
          "en": "Benzene and water"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Ацетон и водород",
          "kk": "Ацетон және сутек",
          "en": "Acetone and hydrogen"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Мыло (натриевые соли жирных кислот) и глицерин",
          "kk": "Сабын (май қышқылдарының натрий тұздары) және глицерин",
          "en": "Soap (sodium salts of fatty acids) and glycerol"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Метан и углекислый газ",
          "kk": "Метан және көмірқышқыл газы",
          "en": "Methane and CO₂"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Щелочной гидролиз триглицеридов расщепляет сложноэфирные связи с образованием глицерина и натриевых солей высших карбоновых кислот (мыла).",
      "kk": "Майларға сілті қосқанда күрделі эфирлік байланыс үзіліп, глицерин және май қышқылдарының натрий тұздары (қатты сабын) түзіледі.",
      "en": "Saponification cleaves ester bonds with a strong base to yield glycerol and fatty acid carboxylate salts (soaps)."
    },
    "hint": {
      "ru": "Так варят мыло с древних времен.",
      "kk": "Ежелден сабын қайнату осы реакцияға негізделген.",
      "en": "This is the classic reaction used to make soap."
    },
    "xpReward": 20
  },
  {
    "id": "org_34",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "К каким типам моносахаридов относятся соответственно глюкоза и фруктоза (C₆H₁₂O₆)?",
      "kk": "Глюкоза мен фруктоза (C₆H₁₂O₆) моносахаридтердің сәйкесінше қандай түрлеріне жатады?",
      "en": "How are glucose and fructose classified respectively among monosaccharides?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Глюкоза — альдогексоза, фруктоза — кетогексоза",
          "kk": "Глюкоза — альдогексоза, фруктоза — кетогексоза",
          "en": "Glucose is an aldohexose, fructose is a ketohexose"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Обе являются альдогексозами",
          "kk": "Екеуі де альдогексозалар",
          "en": "Both are aldohexoses"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Обе являются кетогексозами",
          "kk": "Екеуі де кетогексозалар",
          "en": "Both are ketohexoses"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Глюкоза — пентоза, фруктоза — триоза",
          "kk": "Глюкоза — пентоза, фруктоза — триоза",
          "en": "Glucose is a pentose, fructose is a triose"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Глюкоза содержит альдегидную группу -CHO (альдогексоза), а фруктоза — кетогруппу >C=O во 2-м положении (кетогексоза). Они структурные изомеры.",
      "kk": "Глюкозада альдегид тобы (-CHO), ал фруктозада 2-көміртекте кетотоп (>C=O) болады. Олар бір-біріне изомер.",
      "en": "Glucose contains a terminal aldehyde group (aldohexose), whereas fructose bears an internal ketone at C-2 (ketohexose)."
    },
    "hint": {
      "ru": "У глюкозы альдегидная группа, у фруктозы — кетогруппа.",
      "kk": "Глюкозада альдегидтік топ, фруктозада кетотоп бар.",
      "en": "Glucose has an aldehyde group; fructose has a ketone group."
    },
    "xpReward": 20
  },
  {
    "id": "org_35",
    "category": "organic_chemistry",
    "difficulty": "hard",
    "question": {
      "ru": "В чем главное структурное различие между природными биополимерами крахмалом и целлюлозой?",
      "kk": "Крахмал мен целлюлоза табиғи биополимерлерінің арасындағы басты құрылымдық айырмашылық неде?",
      "en": "What is the key structural difference between starch and cellulose polymers?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Крахмал состоит из фруктозы, а целлюлоза — из глюкозы",
          "kk": "Крахмал фруктозадан, ал целлюлоза глюкозадан тұрады",
          "en": "Starch is made of fructose, cellulose of glucose"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Целлюлоза содержит азот, а крахмал — нет",
          "kk": "Целлюлозада азот бар, ал крахмалда жоқ",
          "en": "Cellulose contains nitrogen, starch does not"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Крахмал состоит из звеньев α-глюкозы, а целлюлоза — из звеньев β-глюкозы",
          "kk": "Крахмал α-глюкоза қалдықтарынан, ал целлюлоза β-глюкоза қалдықтарынан тұрады",
          "en": "Starch is built from α-glucose monomers, while cellulose consists of β-glucose"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Крахмал имеет линейное строение, а целлюлоза — строго спиральное",
          "kk": "Крахмал тек сызықты, ал целлюлоза спиральді",
          "en": "Starch is strictly linear, cellulose is spiral"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Оба полимера имеют формулу (C₆H₁₀O₅)n, но крахмал построен из остатков α-D-глюкозы (легко расщепляется амилазой), а целлюлоза — из β-D-глюкозы (образует прочные линейные волокна).",
      "kk": "Екеуінің де формуласы (C₆H₁₀O₅)n, бірақ крахмал α-глюкозадан түзіліп ағзада оңай қорытылады, ал целлюлоза β-глюкозадан тұратын мықты талшық.",
      "en": "Both share formula (C₆H₁₀O₅)n, but starch uses α(1→4) linkages forming helical coils, whereas cellulose uses β(1→4) links creating rigid linear fibrils."
    },
    "hint": {
      "ru": "α-глюкоза против β-глюкозы.",
      "kk": "α-глюкоза және β-глюкоза.",
      "en": "α-glucose versus β-glucose."
    },
    "xpReward": 25
  },
  {
    "id": "org_36",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Почему аминокислоты проявляют амфотерные (двойственные) кислотно-основные свойства?",
      "kk": "Неліктен аминқышқылдары амфотерлі (екіжақты) қышқылдық-негіздік қасиет көрсетеді?",
      "en": "Why do amino acids exhibit amphoteric (dual acid-base) chemical behavior?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Они содержат ионы металлов",
          "kk": "Олар металл иондарын қамтиды",
          "en": "They coordinate transition metal ions"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Они легко распадаются на воду и углекислый газ",
          "kk": "Олар оңай су мен көмірқышқыл газына ыдырайды",
          "en": "They decompose easily into water and CO₂"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Они имеют только нейтральные неполярные связи",
          "kk": "Оларда тек бейтарап байланыстар бар",
          "en": "They only possess nonpolar bonds"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Они содержат основную аминогруппу (-NH₂) и кислотную карбоксильную группу (-COOH)",
          "kk": "Олардың құрамында негіздік амин тобы (-NH₂) және қышқылдық карбоксил тобы (-COOH) бар",
          "en": "They contain both a basic amino group (-NH₂) and an acidic carboxyl group (-COOH)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Основная группа -NH₂ может присоединять протон (H⁺), а кислотная -COOH — отдавать его, образуя биполярные цвиттер-ионы.",
      "kk": "-NH₂ тобы негіз ретінде протон қосып алады, ал -COOH тобы қышқыл ретінде протон береді. Сондықтан олар амфотерлі.",
      "en": "The basic amine acts as a proton acceptor while the acidic carboxyl acts as a proton donor, allowing zwitterion formation."
    },
    "hint": {
      "ru": "В одной молекуле есть и кислотная, и основная группа.",
      "kk": "Бір молекулада әрі қышқылдық, әрі негіздік топ қатар жүреді.",
      "en": "Both an acidic and a basic functional group are present."
    },
    "xpReward": 20
  },
  {
    "id": "org_37",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Какая связь соединяет остатки аминокислот в первичной структуре белковой молекулы?",
      "kk": "Ақуыз молекуласының біріншілік құрылымында аминқышқылдары қалдықтарын қандай байланыс біріктіреді?",
      "en": "Which chemical bond links amino acid residues in the primary backbone of a protein?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Водородная (-H···O-)",
          "kk": "Сутектік (-H···O-)",
          "en": "Hydrogen bond (-H···O-)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Дисульфидная (-S-S-)",
          "kk": "Дисульфидтік (-S-S-)",
          "en": "Disulfide bond (-S-S-)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Гликозидная (-C-O-C-)",
          "kk": "Гликозидтік (-C-O-C-)",
          "en": "Glycosidic bond (-C-O-C-)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Пептидная (-CO-NH-)",
          "kk": "Пептидтік (-CO-NH-)",
          "en": "Peptide bond (-CO-NH-)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Пептидная связь образуется при взаимодействии карбоксильной группы одной аминокислоты с аминогруппой другой с выделением H₂O.",
      "kk": "Пептидтік байланыс бір аминқышқылының карбоксил тобы мен екіншісінің амин тобы әрекеттесіп, су бөлінуінен түзіледі.",
      "en": "The peptide (amide) bond -CO-NH- forms via condensation between the α-carboxyl and α-amino groups of adjacent amino acids."
    },
    "hint": {
      "ru": "Амидная связь между аминокислотами.",
      "kk": "Аминқышқылдар арасындағы амидтік байланыс.",
      "en": "Amide linkage between amino acids."
    },
    "xpReward": 15
  },
  {
    "id": "org_38",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "Как называется процесс разрушения вторичной, третичной и четвертичной структур белка под действием температуры или кислот?",
      "kk": "Температура немесе қышқылдар әсерінен ақуыздың екіншілік, үшіншілік және төртіншілік құрылымдарының бұзылуы қалай аталады?",
      "en": "What is the loss of secondary, tertiary, and quaternary protein structures under heat or pH called?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Гидролиз",
          "kk": "Гидролиз",
          "en": "Hydrolysis"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Денатурация",
          "kk": "Денатурация",
          "en": "Denaturation"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Поликонденсация",
          "kk": "Поликонденсация",
          "en": "Polycondensation"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Изомеризация",
          "kk": "Изомеризация",
          "en": "Isomerization"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Денатурация разрушает пространственную укладку белка без разрыва первичной полипептидной цепи (например, сворачивание яичного белка при варке).",
      "kk": "Денатурация кезінде біріншілік құрылым (пептидтік байланыстар) сақталып, оның жоғары кеңістіктік құрылымдары бұзылады (жұмыртқа пісіргендей).",
      "en": "Denaturation unfolds higher-order conformation (tertiary/quaternary) without cleaving the covalent peptide backbone."
    },
    "hint": {
      "ru": "Свертывание белка при нагревании.",
      "kk": "Қыздырғанда ақуыздың ұюы.",
      "en": "Coagulation of egg whites upon boiling."
    },
    "xpReward": 20
  },
  {
    "id": "org_39",
    "category": "organic_chemistry",
    "difficulty": "medium",
    "question": {
      "ru": "С помощью какой качественной реакции с ионами Cu²⁺ в щелочной среде обнаруживают пептидные связи в белках?",
      "kk": "Сілтілік ортада Cu²⁺ иондарымен жүретін қандай сапалық реакция арқылы ақуыздағы пептидтік байланыстарды табады?",
      "en": "Which qualitative test uses Cu²⁺ ions in basic solution to detect peptide bonds in proteins?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Биуретовая реакция (фиолетовое окрашивание)",
          "kk": "Биурет реакциясы (күлгін боялу)",
          "en": "Biuret test (violet coloration)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Ксантопротеиновая реакция (желтое окрашивание)",
          "kk": "Ксантопротеин реакциясы (сары боялу)",
          "en": "Xanthoproteic test (yellow color)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Проба Бельштейна",
          "kk": "Бельштейн сынамасы",
          "en": "Beilstein flame test"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Серебряное зеркало",
          "kk": "Күміс айна сынамасы",
          "en": "Silver mirror test"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Биуретовая реакция с разбавленным CuSO₄ в щелочи дает фиолетовый хелатный комплекс ионов меди(II) с пептидными группами -CO-NH-.",
      "kk": "Биурет реакциясында сілтілік ортада Cu²⁺ иондары пептидтік топтармен әрекеттесіп, күлгін түсті кешен береді.",
      "en": "The Biuret reagent reacts with two or more peptide bonds to form a characteristic violet-purple coordination complex with copper(II)."
    },
    "hint": {
      "ru": "Фиолетовое окрашивание со щелочью и медью.",
      "kk": "Сілті және мыспен күлгін түс.",
      "en": "Violet color with alkaline copper sulfate."
    },
    "xpReward": 20
  },
  {
    "id": "org_40",
    "category": "organic_chemistry",
    "difficulty": "easy",
    "question": {
      "ru": "Какой мономер подвергается полимеризации для получения упаковочного полиэтилена: n(CH₂=CH₂) → (-CH₂-CH₂-)n?",
      "kk": "Орау полиэтиленін алу үшін қандай мономер полимерлену реакциясына түседі: n(CH₂=CH₂) → (-CH₂-CH₂-)n?",
      "en": "Which monomer undergoes polymerization to produce polyethylene: n(CH₂=CH₂) → (-CH₂-CH₂-)n?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Этилен (этен)",
          "kk": "Этилен (этен)",
          "en": "Ethylene (ethene)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Пропилен (пропен)",
          "kk": "Пропилен (пропен)",
          "en": "Propylene (propene)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Стирол",
          "kk": "Стирол",
          "en": "Styrene"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Ацетилен (этин)",
          "kk": "Ацетилен (этин)",
          "en": "Acetylene (ethyne)"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Полиэтилен — термопластичный полимер, получаемый полимеризацией газообразного этилена (этена) под давлением.",
      "kk": "Полиэтилен — этилен (этен) газының еселі байланысы үзіліп полимерленуі нәтижесінде алынатын полимер.",
      "en": "Polyethylene is produced through the chain-growth addition polymerization of ethylene (ethene) gas."
    },
    "hint": {
      "ru": "Двухуглеродный алкен с двойной связью.",
      "kk": "Қос байланысы бар екі көміртекті алкен.",
      "en": "Two-carbon alkene."
    },
    "xpReward": 15
  },
  {
    "id": "ph_1",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Что представляет собой водородный показатель (pH) математически?",
      "kk": "Сутектік көрсеткіш (pH) математикалық тұрғыдан нені білдіреді?",
      "en": "What is the mathematical definition of the pH value?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Натуральный логарифм гидроксид-ионов: ln[OH⁻]",
          "kk": "Гидроксид-иондардың натурал логарифмі: ln[OH⁻]",
          "en": "Natural logarithm of hydroxide ions: ln[OH⁻]"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Отрицательный десятичный логарифм концентрации ионов водорода: -lg[H⁺]",
          "kk": "Сутек иондары концентрациясының теріс ондық логарифмі: -lg[H⁺]",
          "en": "Negative decimal logarithm of hydrogen ion concentration: -log₁₀[H⁺]"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Произведение концентраций [H⁺] и [OH⁻]",
          "kk": "[H⁺] және [OH⁻] концентрацияларының көбейтіндісі",
          "en": "Product of [H⁺] and [OH⁻] concentrations"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Степень диссоциации кислоты в процентах",
          "kk": "Қышқылдың диссоциациялану дәрежесі пайызбен",
          "en": "Degree of acid dissociation in percent"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "По определению Сёренсена, pH = -lg[H⁺]. Если [H⁺] = 10⁻³ моль/л, то pH = 3.",
      "kk": "Серенсеннің анықтамасы бойынша pH = -lg[H⁺]. Егер [H⁺] = 10⁻³ моль/л болса, онда pH = 3 болады.",
      "en": "By Sørensen's definition, pH = -log₁₀[H⁺]. For example, 0.001 M H⁺ yields pH = 3."
    },
    "hint": {
      "ru": "Формула содержит -lg[H⁺].",
      "kk": "Формулада -lg[H⁺] бар.",
      "en": "The formula involves -log₁₀[H⁺]."
    },
    "xpReward": 15
  },
  {
    "id": "ph_2",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Каково значение pH нейтрального водного раствора при температуре 25 °C?",
      "kk": "25 °C температурада бейтарап сулы ерітіндінің pH мәні қаншаға тең?",
      "en": "What is the pH of a neutral aqueous solution at 25 °C?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "0",
          "kk": "0",
          "en": "0"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "14,0",
          "kk": "14,0",
          "en": "14.0"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "7,0",
          "kk": "7,0",
          "en": "7.0"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "1,0",
          "kk": "1,0",
          "en": "1.0"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "В чистой воде при 25 °C концентрации [H⁺] = [OH⁻] = 10⁻⁷ моль/л, поэтому pH = 7,0.",
      "kk": "25 °C-тағы таза суда [H⁺] = [OH⁻] = 10⁻⁷ моль/л, сондықтан бейтарап ортада pH = 7,0 болады.",
      "en": "In pure water at 25 °C, [H⁺] = [OH⁻] = 10⁻⁷ M, which gives exactly pH = 7.0."
    },
    "hint": {
      "ru": "Золотая середина шкалы от 0 до 14.",
      "kk": "0 мен 14 арасындағы орташа мән.",
      "en": "The midpoint of the 0 to 14 scale."
    },
    "xpReward": 15
  },
  {
    "id": "ph_3",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Какой диапазон значений pH соответствует щелочной (основной) среде раствора?",
      "kk": "Ерітіндінің сілтілік (негіздік) ортасына pH мәндерінің қай диапазоны сәйкес келеді?",
      "en": "Which pH range corresponds to an alkaline (basic) solution at 25 °C?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "pH < 7 (от 0 до 7)",
          "kk": "pH < 7 (0-ден 7-ге дейін)",
          "en": "pH < 7 (from 0 to 7)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "pH строго = 0",
          "kk": "pH тек 0-ге тең",
          "en": "pH strictly = 0"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "pH > 7 (от 7 до 14)",
          "kk": "pH > 7 (7-ден 14-ке дейін)",
          "en": "pH > 7 (from 7 to 14)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "pH строго = 7",
          "kk": "pH тек 7-ге тең",
          "en": "pH strictly = 7"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Кислая среда: pH < 7. Нейтральная: pH = 7. Щелочная: pH > 7.",
      "kk": "Қышқыл орта: pH < 7. Бейтарап орта: pH = 7. Сілтілік орта: pH > 7.",
      "en": "Acidic solutions have pH < 7, neutral is pH = 7, and basic solutions have pH > 7."
    },
    "hint": {
      "ru": "Больше семи.",
      "kk": "Жетіден жоғары.",
      "en": "Greater than seven."
    },
    "xpReward": 15
  },
  {
    "id": "ph_4",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Чему равно ионное произведение воды (Kw = [H⁺]·[OH⁻]) при комнатной температуре (25 °C)?",
      "kk": "Бөлме температурасында (25 °C) судың иондық көбейтіндісі (Kw = [H⁺]·[OH⁻]) нешеге тең?",
      "en": "What is the ion product of water (Kw = [H⁺][OH⁻]) at 25 °C?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "1,0 × 10⁻¹⁴ моль²/л²",
          "kk": "1,0 × 10⁻¹⁴ моль²/л²",
          "en": "1.0 × 10⁻¹⁴ mol²/L²"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "1,0 × 10⁻⁷ моль²/л²",
          "kk": "1,0 × 10⁻⁷ моль²/л²",
          "en": "1.0 × 10⁻⁷ mol²/L²"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "1,0 × 10⁻¹ моль²/л²",
          "kk": "1,0 × 10⁻¹ моль²/л²",
          "en": "1.0 × 10⁻¹ mol²/L²"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "7,0 × 10⁻¹⁴ моль²/л²",
          "kk": "7,0 × 10⁻¹⁴ моль²/л²",
          "en": "7.0 × 10⁻¹⁴ mol²/L²"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "При 25 °C [H⁺][OH⁻] = 10⁻⁷ × 10⁻⁷ = 10⁻¹⁴. Из этого соотношения следует, что pH + pOH = 14.",
      "kk": "25 °C температурада [H⁺][OH⁻] = 10⁻⁷ × 10⁻⁷ = 10⁻¹⁴ болады. Бұдан pH + pOH = 14 шығады.",
      "en": "At 25 °C, autoionization yields [H⁺][OH⁻] = 1.0 × 10⁻¹⁴, ensuring that pH + pOH = 14."
    },
    "hint": {
      "ru": "Десять в минус четырнадцатой степени.",
      "kk": "Онның минус он төртінші дәрежесі.",
      "en": "Ten to the power of negative fourteen."
    },
    "xpReward": 20
  },
  {
    "id": "ph_5",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Какая из следующих кислот относится к СЛАБЫМ электролитам?",
      "kk": "Төмендегі қышқылдардың қайсысы ӘЛСІЗ электролитке жатады?",
      "en": "Which of the following acids is classified as a WEAK acid?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Уксусная кислота (CH₃COOH)",
          "kk": "Сірке қышқылы (CH₃COOH)",
          "en": "Acetic acid (CH₃COOH)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Соляная кислота (HCl)",
          "kk": "Тұз қышқылы (HCl)",
          "en": "Hydrochloric acid (HCl)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Азотная кислота (HNO₃)",
          "kk": "Азот қышқылы (HNO₃)",
          "en": "Nitric acid (HNO₃)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Серная кислота (H₂SO₄)",
          "kk": "Күкірт қышқылы (H₂SO₄)",
          "en": "Sulfuric acid (H₂SO₄)"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "HCl, HNO₃ и H₂SO₄ — сильные минеральные кислоты, диссоциирующие на 100%. Уксусная кислота — слабая органическая кислота (диссоциирует лишь на несколько процентов).",
      "kk": "HCl, HNO₃ және H₂SO₄ — суда 100% диссоциацияланатын күшті қышқылдар. Сірке қышқылы — әлсіз қышқыл.",
      "en": "HCl, HNO₃, and H₂SO₄ are strong mineral acids, while acetic acid (CH₃COOH) dissociates only partially (pKa ≈ 4.76)."
    },
    "hint": {
      "ru": "Органическая кислота в уксусе.",
      "kk": "Асханалық сірке суындағы органикалық қышқыл.",
      "en": "The organic acid in vinegar."
    },
    "xpReward": 15
  },
  {
    "id": "ph_6",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Какая из кислот хлора является самой сильной минеральной кислотой?",
      "kk": "Хлор қышқылдарының ішіндегі ең күшті минералды қышқыл қандай?",
      "en": "Which chlorine oxyacid is the strongest mineral acid?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Хлорноватая кислота (HClO₃)",
          "kk": "Хлорлауат қышқылы (HClO₃)",
          "en": "Chloric acid (HClO₃)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Хлористая кислота (HClO₂)",
          "kk": "Хлорлы қышқыл (HClO₂)",
          "en": "Chlorous acid (HClO₂)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Хлорная кислота (HClO₄)",
          "kk": "Хлор қышқылы (перхлорат қышқылы, HClO₄)",
          "en": "Perchloric acid (HClO₄)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Хлорноватистая кислота (HClO)",
          "kk": "Хлорлылау қышқыл (HClO)",
          "en": "Hypochlorous acid (HClO)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "С увеличением степени окисления хлора (+1 → +3 → +5 → +7) сила кислот резко возрастает. HClO₄ — одна из сильнейших известных кислот.",
      "kk": "Хлордың тотығу дәрежесі (+1-ден +7-ге) өскен сайын қышқылдық күші күрт артады. HClO₄ — ең күшті қышқылдардың бірі.",
      "en": "Acid strength increases with the oxidation state of the central halogen: HClO < HClO₂ < HClO₃ < HClO₄."
    },
    "hint": {
      "ru": "Максимальная степень окисления хлора (+7).",
      "kk": "Хлордың ең жоғары тотығу дәрежесі (+7).",
      "en": "Maximum oxidation state of chlorine (+7)."
    },
    "xpReward": 20
  },
  {
    "id": "ph_7",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Какую окраску приобретает лакмус в сильнокислой и сильнощелочной средах соответственно?",
      "kk": "Лакмус қатты қышқылдық және қатты сілтілік орталарда сәйкесінше қандай түске боялады?",
      "en": "What colors does litmus turn in strongly acidic and strongly alkaline solutions respectively?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Красный в кислой, синий в щелочной",
          "kk": "Қышқылда — қызыл, сілтіде — көк",
          "en": "Red in acid, blue in alkali"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Синий в кислой, красный в щелочной",
          "kk": "Қышқылда — көк, сілтіде — қызыл",
          "en": "Blue in acid, red in alkali"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Желтый в кислой, зеленый в щелочной",
          "kk": "Қышқылда — сары, сілтіде — жасыл",
          "en": "Yellow in acid, green in alkali"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Бесцветный в кислой, малиновый в щелочной",
          "kk": "Қышқылда — түссіз, сілтіде — таңқурай",
          "en": "Colorless in acid, crimson in alkali"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "В кислой среде лакмус становится красным, в нейтральной — фиолетовым, в щелочной — ярко-синим.",
      "kk": "Қышқыл ортада лакмус қызыл түске, бейтарапта күлгінге, сілтіде көк түске енеді.",
      "en": "Litmus indicator turns red below pH 4.5 and blue above pH 8.3."
    },
    "hint": {
      "ru": "Красный цвет — сигнал кислоты.",
      "kk": "Қызыл түс — қышқылдың белгісі.",
      "en": "Red signifies acid, blue signifies base."
    },
    "xpReward": 15
  },
  {
    "id": "ph_8",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Какую окраску имеет фенолфталеин в кислой и щелочной среде?",
      "kk": "Фенолфталеин қышқыл және сілтілік ортада қандай түс көрсетеді?",
      "en": "What color is phenolphthalein in acidic and alkaline solutions?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Бесцветный в кислой, малиновый в щелочной",
          "kk": "Қышқылда — түссіз, сілтіде — таңқурай түсті",
          "en": "Colorless in acid, magenta/crimson in alkali"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Желтый в кислой, красный в щелочной",
          "kk": "Қышқылда — сары, сілтіде — қызыл",
          "en": "Yellow in acid, red in alkali"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Синий в кислой, желтый в щелочной",
          "kk": "Қышқылда — көк, сілтіде — сары",
          "en": "Blue in acid, yellow in alkali"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Красный в кислой, синий в щелочной",
          "kk": "Қышқылда — қызыл, сілтіде — көк",
          "en": "Red in acid, blue in alkali"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Поговорка химиков: 'Фенолфталеиновый в щелочах малиновый!' В кислой и нейтральной средах он остается абсолютно бесцветным.",
      "kk": "Химиялық қағида: фенолфталеин қышқыл мен бейтарап ортада түссіз, ал сілтілік ортада жарқын таңқурай (қызғылт) түске боялады.",
      "en": "Phenolphthalein is completely colorless below pH 8.2 and turns vivid magenta/fuchsia in basic media."
    },
    "hint": {
      "ru": "Вспомните знаменитую поговорку про щелочь и малиновый цвет.",
      "kk": "Сілтідегі таңқурай түсін еске түсіріңіз.",
      "en": "Recall the famous vivid pink-magenta color in basic solution."
    },
    "xpReward": 15
  },
  {
    "id": "ph_9",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Какой цвет приобретает раствор метилового оранжевого (метилоранжа) при добавлении сильной кислоты (pH < 3,1)?",
      "kk": "Метилоранж ерітіндісіне күшті қышқыл қосқанда (pH < 3,1) қандай түске боялады?",
      "en": "What color does methyl orange turn in a strongly acidic solution (pH < 3.1)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Желтый",
          "kk": "Сары",
          "en": "Yellow"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Синий",
          "kk": "Көк",
          "en": "Blue"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Розово-красный",
          "kk": "Қызғылт-қызыл",
          "en": "Red"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Бесцветный",
          "kk": "Түссіз",
          "en": "Colorless"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Метиловый оранжевый в кислой среде (pH < 3,1) красный, в переходной (3,1–4,4) оранжевый, в щелочной и нейтральной (pH > 4,4) желтый.",
      "kk": "Метилоранж қышқылдық ортада (pH < 3,1) қызыл, өтпелі аймақта қызғылт-сары, бейтарап және сілтіде (pH > 4,4) сары болады.",
      "en": "Methyl orange transitions from red (pH < 3.1) through orange to yellow (pH > 4.4)."
    },
    "hint": {
      "ru": "Кислота окрашивает метилоранж в красный цвет.",
      "kk": "Қышқыл орта оны қызыл түске бояйды.",
      "en": "Acids shift methyl orange toward red."
    },
    "xpReward": 20
  },
  {
    "id": "ph_10",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Какой цвет имеет универсальная индикаторная бумага в строго нейтральной среде (pH = 7,0)?",
      "kk": "Әмбебап индикатор қағазы қатаң бейтарап ортада (pH = 7,0) қандай түске боялады?",
      "en": "What color does universal pH indicator paper turn in a neutral solution (pH = 7.0)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Зеленый",
          "kk": "Жасыл",
          "en": "Green"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Красный",
          "kk": "Қызыл",
          "en": "Red"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Фиолетовый",
          "kk": "Күлгін",
          "en": "Violet"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Желтый",
          "kk": "Сары",
          "en": "Yellow"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "По эталонной шкале универсального индикатора: pH 1-3 — красный, pH 4-6 — желто-оранжевый, pH 7 — зеленый, pH 8-11 — синий, pH 12-14 — фиолетовый.",
      "kk": "Әмбебап шкала бойынша: қышқыл — қызыл/сары, бейтарап pH 7 — жасыл, сілті — көк/күлгін.",
      "en": "On the standard universal indicator spectrum, pH 7 is characterized by a distinct grass-green color."
    },
    "hint": {
      "ru": "Цвет свежей травы в центре спектра.",
      "kk": "Спектр ортасындағы жасыл түс.",
      "en": "Grass-green in the center of the rainbow."
    },
    "xpReward": 15
  },
  {
    "id": "ph_11",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Какая неорганическая кислота содержится в желудочном соке человека, создавая pH около 1,5–2,0?",
      "kk": "Адамның асқазан сөлінде қандай бейорганикалық қышқыл болып, 1,5–2,0 шамасындағы pH-ты қамтамасыз етеді?",
      "en": "Which inorganic acid is present in human gastric juice, producing a pH of 1.5–2.0?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Соляная кислота (HCl)",
          "kk": "Тұз қышқылы (HCl)",
          "en": "Hydrochloric acid (HCl)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Серная кислота (H₂SO₄)",
          "kk": "Күкірт қышқылы (H₂SO₄)",
          "en": "Sulfuric acid (H₂SO₄)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Уксусная кислота (CH₃COOH)",
          "kk": "Сірке қышқылы (CH₃COOH)",
          "en": "Acetic acid (CH₃COOH)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Азотная кислота (HNO₃)",
          "kk": "Азот қышқылы (HNO₃)",
          "en": "Nitric acid (HNO₃)"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Обкладочные клетки желудка секретируют соляную кислоту HCl, необходимую для активации пепсина и переваривания белков.",
      "kk": "Асқазанның париетальді жасушалары тұз қышқылын (HCl) бөліп, пепсин ферментін белсендіреді және микробтарды жояды.",
      "en": "Parietal cells secrete gastric hydrochloric acid (HCl) to denature proteins and activate pepsinogen into pepsin."
    },
    "hint": {
      "ru": "Хлороводородная кислота.",
      "kk": "Хлорсутек қышқылы.",
      "en": "Hydrogen chloride aqueous solution."
    },
    "xpReward": 15
  },
  {
    "id": "ph_12",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Какое вещество часто применяют в медицине как антацид (средство от изжоги) благодаря нейтрализации избытка кислоты?",
      "kk": "Асқазандағы қышқылдықты бейтараптандыру үшін медицинада антацид ретінде қандай зат жиі қолданылады?",
      "en": "Which substance is widely used as a medical antacid to relieve heartburn by neutralizing stomach acid?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Едкий натр (NaOH)",
          "kk": "Күйдіргіш натр (NaOH)",
          "en": "Caustic soda (NaOH)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Гидрокарбонат натрия (NaHCO₃) или гидроксид магния (Mg(OH)₂)",
          "kk": "Натрий гидрокарбонаты (NaHCO₃) немесе магний гидроксиді (Mg(OH)₂)",
          "en": "Sodium bicarbonate (NaHCO₃) or magnesium hydroxide (Mg(OH)₂)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Концентрированная серная кислота",
          "kk": "Концентрлі күкірт қышқылы",
          "en": "Concentrated sulfuric acid"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Медный купорос (CuSO₄)",
          "kk": "Мыс купоросы (CuSO₄)",
          "en": "Copper sulfate (CuSO₄)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Слабые основания и основные соли (сода NaHCO₃, антациды с Mg(OH)₂ и Al(OH)₃) безопасно нейтрализуют избыток соляной кислоты.",
      "kk": "Ас содасы (NaHCO₃) мен Mg(OH)₂ асқазандағы артық қышқылмен әрекеттесіп, оны зиянсыз бейтараптайды.",
      "en": "Mild bases such as NaHCO₃ or Mg(OH)₂ gently neutralize stomach HCl without causing severe tissue damage."
    },
    "hint": {
      "ru": "Пищевая сода или маалокс.",
      "kk": "Ас содасы.",
      "en": "Baking soda or milk of magnesia."
    },
    "xpReward": 15
  },
  {
    "id": "ph_13",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "В чем заключается суть реакции нейтрализации в сокращенном ионном виде?",
      "kk": "Бейтараптану реакциясының қысқартылған иондық теңдеуінің мәні неде?",
      "en": "What is the net ionic equation representing an acid-base neutralization reaction?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Na⁺ + Cl⁻ → NaCl",
          "kk": "Na⁺ + Cl⁻ → NaCl",
          "en": "Na⁺ + Cl⁻ → NaCl"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "2H₂ + O₂ → 2H₂O",
          "kk": "2H₂ + O₂ → 2H₂O",
          "en": "2H₂ + O₂ → 2H₂O"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "H⁺ + OH⁻ → H₂O",
          "kk": "H⁺ + OH⁻ → H₂O",
          "en": "H⁺ + OH⁻ → H₂O"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Ca²⁺ + CO₃²⁻ → CaCO₃",
          "kk": "Ca²⁺ + CO₃²⁻ → CaCO₃",
          "en": "Ca²⁺ + CO₃²⁻ → CaCO₃"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "При взаимодействии сильной кислоты и сильного основания катион водорода соединяется с гидроксид-анионом с образованием молекулы воды: H⁺ + OH⁻ → H₂O.",
      "kk": "Күшті қышқыл мен сілті әрекеттескенде сутек катионы мен гидроксид анионы бірігіп, су молекуласын түзеді: H⁺ + OH⁻ → H₂O.",
      "en": "The hallmark of Arrhenius acid-base neutralization is the combination of hydronium/hydrogen ions and hydroxide ions into neutral water."
    },
    "hint": {
      "ru": "Ион водорода соединяется с гидроксид-ионом.",
      "kk": "Сутек ионы мен гидроксид ионы қосылып су түзеді.",
      "en": "Hydrogen ion reacts with hydroxide ion to form water."
    },
    "xpReward": 15
  },
  {
    "id": "ph_14",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Как определяет кислоту и основание протолитическая теория Брёнстеда — Лоури?",
      "kk": "Бренстед — Лоури протолиттік теориясы бойынша қышқыл мен негіз қалай анықталады?",
      "en": "How does the Brønsted-Lowry theory define an acid and a base?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Кислота — акцептор электронов, основание — донор электронов",
          "kk": "Қышқыл — электрон акцепторы, негіз — электрон доноры",
          "en": "Acid is an electron acceptor, base is an electron donor"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Кислота отдает только ионы OH⁻",
          "kk": "Қышқыл тек OH⁻ береді",
          "en": "Acid donates only OH⁻ ions"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Кислота — донор протона (H⁺), основание — акцептор протона",
          "kk": "Қышқыл — протон (H⁺) доноры, негіз — протон акцепторы",
          "en": "Acid is a proton (H⁺) donor, base is a proton acceptor"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Основание всегда является твердым металлом",
          "kk": "Негіз әрқашан қатты металл болады",
          "en": "Base is always a solid metal"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "По Брёнстеду — Лоури, кислота отдает протон H⁺ (донор), а основание способно его присоединить (акцептор).",
      "kk": "Бренстед-Лоури теориясы бойынша қышқыл протон береді (донор), ал негіз оны өзіне қосып алады (акцептор).",
      "en": "Brønsted-Lowry theory defines an acid as any species capable of donating a proton (H⁺) and a base as a proton acceptor."
    },
    "hint": {
      "ru": "Кислота отдает протон, основание принимает.",
      "kk": "Қышқыл протон береді, негіз қабылдайды.",
      "en": "Acid gives a proton, base takes a proton."
    },
    "xpReward": 20
  },
  {
    "id": "ph_15",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Какая частица является кислотой Льюиса?",
      "kk": "Льюис қышқылына қандай бөлшек мысал бола алады?",
      "en": "Which species acts as a classic Lewis acid?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "AlCl₃ или BF₃ (акцептор неподеленной пары электронов)",
          "kk": "AlCl₃ немесе BF₃ (бос электрон жұбының акцепторы)",
          "en": "AlCl₃ or BF₃ (electron pair acceptor)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "NH₃ (донор электронной пары)",
          "kk": "NH₃ (электрон жұбының доноры)",
          "en": "NH₃ (electron pair donor)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "H₂O",
          "kk": "H₂O",
          "en": "H₂O"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Cl⁻",
          "kk": "Cl⁻",
          "en": "Cl⁻"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Кислота Льюиса имеет вакантную орбиталь и способна принимать неподеленную пару электронов (например, BF₃, AlCl₃, Fe³⁺).",
      "kk": "Льюис қышқылының бос орбиталі болады және ол электрон жұбын қабылдай алады (мысалы, AlCl₃, BF₃).",
      "en": "A Lewis acid possesses a vacant orbital capable of accepting an electron pair from a Lewis base."
    },
    "hint": {
      "ru": "Молекулы с вакантной орбиталью на центральном атоме (бор, алюминий).",
      "kk": "Орталық атомында бос орбиталі бар молекулалар.",
      "en": "Species with vacant orbitals like BF₃ or AlCl₃."
    },
    "xpReward": 20
  },
  {
    "id": "ph_16",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Что является сопряженным основанием для аммиака (NH₃), когда он выступает кислотой Брёнстеда?",
      "kk": "Аммиак (NH₃) Бренстед қышқылы болған кезде оның түйіндес негізі қандай болады?",
      "en": "What is the conjugate base of ammonia (NH₃) when it acts as a Brønsted acid (loses a proton)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Ион аммония (NH₄⁺)",
          "kk": "Аммоний ионы (NH₄⁺)",
          "en": "Ammonium ion (NH₄⁺)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Амид-ион (NH₂⁻)",
          "kk": "Амид-ион (NH₂⁻)",
          "en": "Amide ion (NH₂⁻)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Ион гидразиния (N₂H₅⁺)",
          "kk": "Гидразиний ионы (N₂H₅⁺)",
          "en": "Hydrazinium ion (N₂H₅⁺)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Нитрид-ион (N³⁻)",
          "kk": "Нитрид-ионы (N³⁻)",
          "en": "Nitride ion (N³⁻)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Отщепление одного протона H⁺ от нейтральной молекулы NH₃ дает амид-анион: NH₃ → H⁺ + NH₂⁻.",
      "kk": "NH₃ молекуласынан бір протон бөлінгенде NH₂⁻ амид-ионы түзіледі.",
      "en": "Removing a proton H⁺ from NH₃ leaves behind the conjugate base, the amide anion NH₂⁻."
    },
    "hint": {
      "ru": "Отнимите один H⁺ от NH₃.",
      "kk": "NH₃-тен бір H⁺ алып тастаңыз.",
      "en": "Subtract one H⁺ from NH₃."
    },
    "xpReward": 20
  },
  {
    "id": "ph_17",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Какой характер среды (pH) имеет водный раствор поваренной соли (NaCl) при 25 °C?",
      "kk": "25 °C кезінде ас тұзының (NaCl) сулы ерітіндісіндегі орта (pH) қандай болады?",
      "en": "What is the pH nature of an aqueous solution of table salt (NaCl) at 25 °C?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Сильнокислая (pH < 2)",
          "kk": "Күшті қышқылдық (pH < 2)",
          "en": "Strongly acidic (pH < 2)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Сильнощелочная (pH > 12)",
          "kk": "Күшті сілтілік (pH > 12)",
          "en": "Strongly alkaline (pH > 12)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Нейтральная (pH ≈ 7, гидролиз не идет)",
          "kk": "Бейтарап (pH ≈ 7, гидролиз жүрмейді)",
          "en": "Neutral (pH ≈ 7, no hydrolysis occurs)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "pH постоянно колеблется от 1 до 14",
          "kk": "pH үнемі 1 мен 14 арасында ауытқиды",
          "en": "pH fluctuates unpredictably"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "NaCl образован сильным основанием (NaOH) и сильной кислотой (HCl). Ни катион, ни анион не связывают ионы воды, гидролиз не протекает, pH = 7.",
      "kk": "NaCl күшті негіз (NaOH) және күшті қышқылдан (HCl) түзілгендіктен, тұз гидролизге ұшырамайды және pH = 7 болады.",
      "en": "Salts derived from strong acids and strong bases (like NaCl) do not undergo hydrolysis, keeping pH neutral at 7.0."
    },
    "hint": {
      "ru": "Соль сильной кислоты и сильного основания.",
      "kk": "Күшті қышқыл мен күшті негіздің тұзы.",
      "en": "Salt of a strong acid and strong base."
    },
    "xpReward": 15
  },
  {
    "id": "ph_18",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Почему раствор карбоната натрия (кальцинированной соды, Na₂CO₃) имеет щелочную реакцию (pH > 7)?",
      "kk": "Неліктен натрий карбонаты (сода, Na₂CO₃) ерітіндісі сілтілік орта көрсетеді (pH > 7)?",
      "en": "Why does a sodium carbonate (Na₂CO₃) solution have an alkaline pH (pH > 7)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Ионы натрия испаряются в воздух",
          "kk": "Натрий иондары ауаға ұшып кетеді",
          "en": "Sodium ions evaporate into air"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Карбонат-анион связывает H⁺ из воды, накапливая свободные ионы OH⁻: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻",
          "kk": "Карбонат-анион судан H⁺ қосып алып, ерітіндіде OH⁻ иондарын көбейтеді: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻",
          "en": "The carbonate anion hydrolyzes by taking H⁺ from water, releasing OH⁻ ions: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Образуется газообразный хлор",
          "kk": "Хлор газы түзіледі",
          "en": "Chlorine gas is generated"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Карбонат распадается на чистый металлический натрий",
          "kk": "Карбонат таза металдық натрийге ыдырайды",
          "en": "Carbonate decomposes into sodium metal"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Na₂CO₃ гидролизуется по аниону слабой угольной кислоты: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻, создавая избыток гидроксид-ионов.",
      "kk": "Na₂CO₃ әлсіз көмір қышқылының анионы бойынша гидролизденіп, ерітіндіде еркін OH⁻ иондарын түзеді.",
      "en": "Hydrolysis of the weak acid anion (CO₃²⁻) removes protons from water, leaving excess OH⁻ and raising pH above 7."
    },
    "hint": {
      "ru": "Гидролиз по слабому аниону освобождает OH⁻.",
      "kk": "Әлсіз қышқыл анионы гидролизге түсіп OH⁻ бөледі.",
      "en": "Hydrolysis of the weak conjugate anion produces OH⁻."
    },
    "xpReward": 20
  },
  {
    "id": "ph_19",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Какой характер среды имеет раствор хлорида аммония (NH₄Cl) или хлорида железа(III) (FeCl₃)?",
      "kk": "Аммоний хлориді (NH₄Cl) немесе темір(III) хлориді (FeCl₃) ерітіндісінің ортасы қандай болады?",
      "en": "What is the pH nature of an aqueous ammonium chloride (NH₄Cl) or iron(III) chloride (FeCl₃) solution?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Кислый (pH < 7, гидролиз по катиону)",
          "kk": "Қышқылдық (pH < 7, катион бойынша гидролиз)",
          "en": "Acidic (pH < 7, cation hydrolysis)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Щелочной (pH > 7)",
          "kk": "Сілтілік (pH > 7)",
          "en": "Alkaline (pH > 7)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Строго нейтральный (pH = 7)",
          "kk": "Қатаң бейтарап (pH = 7)",
          "en": "Strictly neutral (pH = 7)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Среда меняется каждые 5 минут",
          "kk": "Орта әр 5 минут сайын өзгереді",
          "en": "Environment changes periodically"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Соли слабого основания и сильной кислоты гидролизуются по катиону: NH₄⁺ + H₂O ⇌ NH₃·H₂O + H⁺, создавая кислую среду.",
      "kk": "Әлсіз негіз бен күшті қышқылдың тұзы катион бойынша гидролизденіп еркін H⁺ бөледі, орта қышқыл болады.",
      "en": "Cation hydrolysis of salts of weak bases and strong acids releases H₃O⁺ ions, lowering pH below 7."
    },
    "hint": {
      "ru": "Катион связывает OH⁻, оставляя свободный H⁺.",
      "kk": "Катион OH⁻-пен байланысып, еркін H⁺ қалады.",
      "en": "Cation pulls OH⁻, liberating excess H⁺."
    },
    "xpReward": 20
  },
  {
    "id": "ph_20",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Что такое буферный раствор?",
      "kk": "Буферлік ерітінді дегеніміз не?",
      "en": "What is a buffer solution?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Раствор, в котором pH всегда строго равен 0",
          "kk": "pH мәні тек 0-ге тең болатын ерітінді",
          "en": "A solution with pH permanently fixed at 0"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Раствор, ускоряющий взрывные реакции",
          "kk": "Жарылыс реакциясын жеделдететін ерітінді",
          "en": "A solution that accelerates explosions"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Смесь двух сильных концентрированных кислот",
          "kk": "Екі күшті концентрлі қышқылдың қоспасы",
          "en": "A mixture of two concentrated strong acids"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Раствор, сохраняющий практически постоянное значение pH при разбавлении или добавлении небольших количеств кислот и щелочей",
          "kk": "Қышқылдың немесе сілтінің шағын мөлшерін қосқанда немесе сұйылтқанда pH мәнін тұрақты сақтайтын ерітінді",
          "en": "A solution that resists changes in pH upon addition of small amounts of acid or base or upon dilution"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Буфер состоит обычно из слабой кислоты и её сопряженного основания (например, CH₃COOH + CH₃COONa) и демпфирует скачки pH.",
      "kk": "Буфер әлсіз қышқыл мен оның тұзынан тұрып, ерітіндіге қышқыл не сілті түскенде pH күрт ауытқуына жол бермейді.",
      "en": "A buffer mixture contains a weak conjugate acid-base pair capable of absorbing added hydronium or hydroxide ions."
    },
    "hint": {
      "ru": "Раствор противостоит изменению кислотности.",
      "kk": "Қышқылдықтың өзгеруіне қарсы тұратын ерітінді.",
      "en": "Resists changes in acidity."
    },
    "xpReward": 20
  },
  {
    "id": "ph_21",
    "category": "acids_bases_ph",
    "difficulty": "hard",
    "question": {
      "ru": "Какая буферная система является главной в поддержании постоянства pH плазмы крови человека (7,35–7,45)?",
      "kk": "Адам қаны плазмасының тұрақты pH мәнін (7,35–7,45) сақтаудағы басты буферлік жүйе қандай?",
      "en": "Which is the primary buffer system that maintains human blood plasma pH within the critical 7.35–7.45 range?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Фосфатная буферная система",
          "kk": "Фосфаттық буферлік жүйе",
          "en": "Phosphate buffer system"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Хлоридная буферная система",
          "kk": "Хлоридтік буферлік жүйе",
          "en": "Chloride buffer system"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Гидрокарбонатная буферная система (H₂CO₃ / HCO₃⁻)",
          "kk": "Гидрокарбонаттық буферлік жүйе (H₂CO₃ / HCO₃⁻)",
          "en": "Bicarbonate buffer system (H₂CO₃ / HCO₃⁻)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Аммиачная буферная система",
          "kk": "Аммиактық буферлік жүйе",
          "en": "Ammonia buffer system"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Гидрокарбонатный буфер (угольная кислота и бикарбонат) тесно связан с дыханием (выведение CO₂ легкими) и почками, защищая организм от ацидоза и алкалоза.",
      "kk": "Гидрокарбонат буфері көмір қышқылы мен оның гидрокарбонат анионынан тұрып, өкпе арқылы CO₂ шығарумен бірге қан pH-ын қатаң реттейді.",
      "en": "The carbonic acid / bicarbonate buffer system coupled with respiratory expiration of CO₂ is the chief regulator of arterial blood pH."
    },
    "hint": {
      "ru": "Связана с углекислым газом и гидрокарбонат-ионами.",
      "kk": "Көмірқышқыл газымен және гидрокарбонатпен байланысты.",
      "en": "Coupled with carbon dioxide and bicarbonate."
    },
    "xpReward": 25
  },
  {
    "id": "ph_22",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Каковы правильные действия при попадании концентрированной кислоты на кожу?",
      "kk": "Теріге концентрлі қышқыл тигенде жасалатын алғашқы көмек қандай?",
      "en": "What is the correct immediate first-aid procedure if concentrated acid spills on skin?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Немедленно прижечь концентрированной щелочью NaOH",
          "kk": "Лезде концентрлі NaOH сілтісін құю",
          "en": "Immediately neutralize with concentrated NaOH pellets"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Смазать кожу чистым спиртом и забинтовать",
          "kk": "Таза спирт жағып таңып тастау",
          "en": "Apply pure ethanol and wrap tightly"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Потереть сухой салфеткой и ничего не делать",
          "kk": "Құрғақ майлықпен сүртіп, ештеңе істемеу",
          "en": "Wipe with a dry cloth and wait"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Смыть обильной струей холодной воды в течение 10–15 минут, затем обработать 1–2% раствором питьевой соды (NaHCO₃)",
          "kk": "10–15 минут бойы ағынды мол суық сумен шайып, содан соң 1–2% ас содасы (NaHCO₃) ерітіндісімен сүрту",
          "en": "Rinse immediately with a copious stream of cold running water for 10–15 minutes, then wash with dilute 1–2% NaHCO₃"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Обильное промывание водой смывает и разбавляет кислоту, а слабый раствор соды безопасно нейтрализует ее остатки. Категорически запрещено нейтрализовать сильной щелочью из-за риска тяжелого щелочного и термического ожога!",
      "kk": "Алдымен мол сумен шайып шайып, қышқылдықты әлсіз сода ерітіндісімен бейтараптайды. Күшті сілті құюға қатаң тыйым салынады!",
      "en": "Flushing with large volumes of running water removes the chemical and dissipates heat. Weak base (1-2% bicarbonate) neutralizes remaining acid traces safely."
    },
    "hint": {
      "ru": "Много холодной воды, затем слабый раствор соды.",
      "kk": "Мол суық су, кейін әлсіз ас содасы ерітіндісі.",
      "en": "Copious water first, then dilute baking soda."
    },
    "xpReward": 15
  },
  {
    "id": "ph_23",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Чем обрабатывают кожу после длительного промывания водой при попадании раствора щелочи?",
      "kk": "Теріге сілті тиген жағдайда, оны мол сумен ұзақ шайғаннан кейін қандай затпен өңдейді?",
      "en": "What solution should be applied to the skin after thorough water flushing following an alkali spill?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Концентрированной серной кислотой",
          "kk": "Концентрлі күкірт қышқылымен",
          "en": "Concentrated sulfuric acid"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Слабым 1–2% раствором уксусной или борной кислоты",
          "kk": "Сірке немесе бор қышқылының әлсіз 1–2% ерітіндісімен",
          "en": "Dilute 1–2% acetic or boric acid solution"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Раствором поваренной соли",
          "kk": "Ас тұзының ерітіндісімен",
          "en": "Concentrated brine"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Мыльной пеной",
          "kk": "Сабынды көбікпен",
          "en": "Soap foam"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Щелочь омыляет жиры кожи и глубоко проникает в ткани. После смывания водой остатки нейтрализуют очень слабой кислотой (1-2% борной или уксусной).",
      "kk": "Сілті теріні зақымдап терең енеді. Сумен жуғаннан соң оны әлсіз 1-2% сірке немесе бор қышқылымен бейтараптайды.",
      "en": "Alkali hydrolyzes cutaneous lipids. After extensive water washing, residual base is neutralized with a mild weak acid like 1-2% boric or acetic acid."
    },
    "hint": {
      "ru": "Слабый раствор безопасной кислоты (борной или уксусной).",
      "kk": "Қауіпсіз әлсіз қышқыл (бор немесе сұйылтылған сірке).",
      "en": "A very mild acid like boric acid."
    },
    "xpReward": 15
  },
  {
    "id": "ph_24",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Каково главное золотое правило техники безопасности при разбавлении концентрированной серной кислоты водой?",
      "kk": "Концентрлі күкірт қышқылын сумен сұйылту кезіндегі басты алтын қауіпсіздік ережесі қандай?",
      "en": "What is the golden laboratory safety rule for diluting concentrated sulfuric acid with water?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Заливать воду прямо в колбу с концентрированной кислотой",
          "kk": "Суды концентрлі қышқылы бар сауытқа тікелей құю",
          "en": "Pour water directly into the acid flask"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Смешивать оба вещества мгновенно одним резким движением",
          "kk": "Екеуін де бір сәтте күрт араластыру",
          "en": "Mix both simultaneously in one quick splash"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Нагреть кислоту до кипения перед смешиванием",
          "kk": "Қышқылды араластырмас бұрын қайнату",
          "en": "Boil the acid before adding water"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Лить кислоту в воду тонкой струей при постоянном перемешивании",
          "kk": "Қышқылды суға жіңішке ағынмен үнемі араластыра отырып құю",
          "en": "Pour acid into water slowly with continuous stirring"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Золотое правило: 'Не плюй в кислоту!' Гидратация H₂SO₄ идет с колоссальным выделением тепла. Если лить воду в кислоту, капли воды мгновенно закипают и разбрызгивают кипящую кислоту в лицо!",
      "kk": "Қағида: қышқылды суға құю керек! Суды қышқылға құйса, реакция жылуынан су лезде қайнап, қышқыл жан-жаққа шашырайды.",
      "en": "Always Add Acid (AAA). Adding water to dense acid causes localized flash boiling, violently splattering boiling acid."
    },
    "hint": {
      "ru": "Кислоту льют в воду, а не наоборот.",
      "kk": "Қышқыл суға құйылады, керісінше емес.",
      "en": "Acid into water, never water into acid."
    },
    "xpReward": 15
  },
  {
    "id": "ph_25",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Какую кислоту называют «хлебом химической промышленности» из-за её гигантского масштаба мирового производства?",
      "kk": "Әлемдік өндіріс көлемінің орасан зор болуына байланысты қандай қышқылды «химиялық өнеркәсіптің наны» деп атайды?",
      "en": "Which mineral acid is universally called the 'lifeblood' or 'bread of chemical industry' due to its vast production scale?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Серную кислоту (H₂SO₄)",
          "kk": "Күкірт қышқылын (H₂SO₄)",
          "en": "Sulfuric acid (H₂SO₄)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Уксусную кислоту (CH₃COOH)",
          "kk": "Сірке қышқылын (CH₃COOH)",
          "en": "Acetic acid (CH₃COOH)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Фтороводородную кислоту (HF)",
          "kk": "Балқытқыш қышқылды (HF)",
          "en": "Hydrofluoric acid (HF)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Кремниевую кислоту (H₂SiO₃)",
          "kk": "Кремний қышқылын (H₂SiO₃)",
          "en": "Silicic acid (H₂SiO₃)"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Серная кислота H₂SO₄ производится в объеме свыше 250 млн тонн в год (удобрения, металлургия, аккумуляторы, химсинтез).",
      "kk": "Күкірт қышқылы H₂SO₄ жылына 250 миллион тоннадан астам өндіріледі (тыңайтқыштар, металлургия, батареялар).",
      "en": "Sulfuric acid is the most produced industrial chemical worldwide, central to fertilizers, petroleum refining, and metallurgy."
    },
    "hint": {
      "ru": "Кислота с формулой H₂SO₄.",
      "kk": "H₂SO₄ формуласы бар қышқыл.",
      "en": "Acid with formula H₂SO₄."
    },
    "xpReward": 15
  },
  {
    "id": "ph_26",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Каков состав «царской водки», способной растворять золото и платину?",
      "kk": "Алтын мен платинаны еріте алатын «патша арағының» құрамы қандай?",
      "en": "What is the composition of 'Aqua Regia' (royal water), which can dissolve noble metals like gold and platinum?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Смесь серной кислоты и спирта 1 : 1",
          "kk": "Күкірт қышқылы мен спирттің 1 : 1 қоспасы",
          "en": "A 1 : 1 mixture of sulfuric acid and ethanol"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Смесь азотной и уксусной кислот 5 : 1",
          "kk": "Азот және сірке қышқылдарының 5 : 1 қоспасы",
          "en": "A 5 : 1 mixture of nitric and acetic acids"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Концентрированная чистая вода с солью",
          "kk": "Тұз қосылған концентрлі таза су",
          "en": "Supersaturated salt water"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Смесь концентрированных HCl и HNO₃ в объемном соотношении 3 : 1",
          "kk": "Концентрлі HCl және HNO₃ қышқылдарының 3 : 1 көлемдік қатынастағы қоспасы",
          "en": "A 3 : 1 volume mixture of concentrated HCl and HNO₃"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "3 части конц. соляной кислоты и 1 часть конц. азотной кислоты образуют атомарный хлор и нитрозилхлорид NOCl, растворяя золото: Au + HNO₃ + 4HCl → H[AuCl₄] + NO↑ + 2H₂O.",
      "kk": "3 көлем концентрлі тұз қышқылы мен 1 көлем концентрлі азот қышқылының қоспасы патша арағы деп аталады және алтынды ерітеді.",
      "en": "A 3:1 volumetric blend of conc. HCl and conc. HNO₃ generates nitrosyl chloride and nascent chlorine, dissolving gold as chloroauric acid HAuCl₄."
    },
    "hint": {
      "ru": "3 части соляной кислоты на 1 часть азотной.",
      "kk": "3 бөлік тұз қышқылына 1 бөлік азот қышқылы.",
      "en": "Three parts hydrochloric to one part nitric."
    },
    "xpReward": 20
  },
  {
    "id": "ph_27",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Сколько ступеней ступенчатой диссоциации имеет ортофосфорная кислота (H₃PO₄) в водном растворе?",
      "kk": "Сулы ерітіндіде ортофосфор қышқылының (H₃PO₄) неше сатылы диссоциациясы жүреді?",
      "en": "How many stepwise dissociation equilibria does orthophosphoric acid (H₃PO₄) undergo in aqueous solution?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "1 ступень",
          "kk": "1 саты",
          "en": "1 stage"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "3 ступени (образуются ионы H₂PO₄⁻, HPO₄²⁻, PO₄³⁻)",
          "kk": "3 саты (H₂PO₄⁻, HPO₄²⁻, PO₄³⁻ иондары түзіледі)",
          "en": "3 stages (forming H₂PO₄⁻, HPO₄²⁻, PO₄³⁻ ions)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "2 ступени",
          "kk": "2 саты",
          "en": "2 stages"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "4 ступени",
          "kk": "4 саты",
          "en": "4 stages"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "H₃PO₄ — трехосновная кислота средней силы: H₃PO₄ ⇌ H⁺ + H₂PO₄⁻ (I), H₂PO₄⁻ ⇌ H⁺ + HPO₄²⁻ (II), HPO₄²⁻ ⇌ H⁺ + PO₄³⁻ (III). Причем Ka₁ >> Ka₂ >> Ka₃.",
      "kk": "H₃PO₄ — үш негізді қышқыл, оның диссоциациясы 3 сатыда жүреді және әр саты сайын диссоциация дәрежесі азаяды.",
      "en": "H₃PO₄ has three ionizable protons, dissociating in three successive equilibria with Ka₁ >> Ka₂ >> Ka₃."
    },
    "hint": {
      "ru": "Три атома водорода в молекуле.",
      "kk": "Молекулада үш қышқылдық сутек бар.",
      "en": "Three dissociable hydrogen atoms."
    },
    "xpReward": 20
  },
  {
    "id": "ph_28",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Какое химическое вещество представляет собой известковая вода, мутнеющая от углекислого газа?",
      "kk": "Көмірқышқыл газынан лайланатын әк суы қандай химиялық заттың мөлдір ерітіндісі болып табылады?",
      "en": "What chemical compound makes up clear 'limewater', which turns cloudy when exposed to CO₂?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Раствор хлорида кальция CaCl₂",
          "kk": "Кальций хлориді ерітіндісі CaCl₂",
          "en": "Calcium chloride solution CaCl₂"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Прозрачный водный раствор гидроксида кальция: Ca(OH)₂",
          "kk": "Кальций гидроксидінің (Ca(OH)₂) мөлдір сулы ерітіндісі",
          "en": "Clear aqueous solution of calcium hydroxide: Ca(OH)₂"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Карбонат кальция CaCO₃",
          "kk": "Кальций карбонаты CaCO₃",
          "en": "Calcium carbonate suspension"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Гашеная известь в виде сухого порошка",
          "kk": "Құрғақ сөндірілген әк ұнтағы",
          "en": "Dry slaked lime powder"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Известковая вода — это насыщенный раствор Ca(OH)₂. При пропускании CO₂ выпадает белый нерастворимый осадок карбоната кальция: Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O.",
      "kk": "Әк суы — Ca(OH)₂ ерітіндісі. CO₂ өткізгенде ақ тұнба CaCO₃ түзіліп, ерітінді лайланады.",
      "en": "Limewater is dilute aqueous Ca(OH)₂. Passing CO₂ precipitates white insoluble CaCO₃, creating a milky cloudiness."
    },
    "hint": {
      "ru": "Гидроксид кальция в воде.",
      "kk": "Судағы кальций гидроксиді.",
      "en": "Calcium hydroxide in water."
    },
    "xpReward": 15
  },
  {
    "id": "ph_29",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Какое тривиальное название носит гидроксид натрия (NaOH), способный разъедать бумагу, кожу и органику?",
      "kk": "Қағазды, теріні және органиканы күйдіріп жеп қоятын натрий гидроксиді (NaOH) қандай тривиальді атауға ие?",
      "en": "What common trivial name is given to sodium hydroxide (NaOH), which rapidly attacks organic tissues?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Питьевая сода",
          "kk": "Ас содасы",
          "en": "Baking soda"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Кальцинированная сода",
          "kk": "Кальциленген сода",
          "en": "Washing soda"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Поташ",
          "kk": "Поташ",
          "en": "Potash"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Едкий натр (каустическая сода)",
          "kk": "Күйдіргіш натр (каустикалық сода)",
          "en": "Caustic soda (lye)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "NaOH называют едким натром или каустиком за его способность разъедать ткани, шерсть и кожу с омылением жиров.",
      "kk": "NaOH теріні күйдіретіндіктен «күйдіргіш натр» немесе каустикалық сода деп аталады.",
      "en": "NaOH is universally known as caustic soda or lye due to its strongly alkaline, corrosive, and flesh-destroying nature."
    },
    "hint": {
      "ru": "Каустик.",
      "kk": "Каустик.",
      "en": "Caustic."
    },
    "xpReward": 15
  },
  {
    "id": "ph_30",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Какой газ с резким запахом при растворении в воде образует слабощелочной раствор нашатырного спирта?",
      "kk": "Суда еріген кезде әлсіз сілтілік мүсәтір спиртін түзетін өткір иісті газ қандай?",
      "en": "Which pungent gas dissolves in water to produce the mildly alkaline solution known as household ammonia?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Хлор (Cl₂)",
          "kk": "Хлор (Cl₂)",
          "en": "Chlorine (Cl₂)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Сероводород (H₂S)",
          "kk": "Күкіртсутек (H₂S)",
          "en": "Hydrogen sulfide (H₂S)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Метан (CH₄)",
          "kk": "Метан (CH₄)",
          "en": "Methane (CH₄)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Аммиак (NH₃)",
          "kk": "Аммиак (NH₃)",
          "en": "Ammonia (NH₃)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Газ аммиак NH₃ образует в воде гидрат аммиака: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, создавая щелочную среду (pH ≈ 11).",
      "kk": "Аммиак газы суда ерігенде аммоний және гидроксид иондарын түзіп, сілтілік орта береді: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.",
      "en": "Ammonia gas dissolves reversibly in water to form ammonium and hydroxide ions, acting as a weak base."
    },
    "hint": {
      "ru": "Азотсодержащий газ с запахом нашатыря.",
      "kk": "Мүсәтір иісі бар азотты газ.",
      "en": "The nitrogen gas behind smelling salts."
    },
    "xpReward": 15
  },
  {
    "id": "ph_31",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Какие атмосферные газы техногенного происхождения являются главными виновниками кислотных дождей (pH < 5,6)?",
      "kk": "Қышқыл жаңбырлардың (pH < 5,6) түзілуіне себеп болатын басты антропогендік атмосфералық газдар қандай?",
      "en": "Which anthropogenic atmospheric gases are the primary drivers of acid rain (pH < 5.6)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Чистый азот и кислород",
          "kk": "Таза азот пен оттек",
          "en": "Pure nitrogen and oxygen"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Аргон и неон",
          "kk": "Аргон және неон",
          "en": "Argon and neon"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Гелий и водород",
          "kk": "Гелий және сутек",
          "en": "Helium and hydrogen"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Диоксид серы (SO₂) и оксиды азота (NO, NO₂)",
          "kk": "Күкірт диоксиді (SO₂) және азот оксидтері (NO, NO₂)",
          "en": "Sulfur dioxide (SO₂) and nitrogen oxides (NO, NO₂)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "SO₂ и NO₂ растворяются в каплях облачной воды с образованием сильных кислот — серной (H₂SO₄) и азотной (HNO₃).",
      "kk": "Жанар-жағармай жаққанда бөлінетін SO₂ мен NO₂ ылғалмен әрекеттесіп, күкірт және азот қышқылдарына айналады.",
      "en": "Combustion emissions of SO₂ and NOx oxidize in air to form dilute sulfuric and nitric acids, precipitating as acid rain."
    },
    "hint": {
      "ru": "Оксиды серы и оксиды азота.",
      "kk": "Күкірт және азот оксидтері.",
      "en": "Oxides of sulfur and nitrogen."
    },
    "xpReward": 20
  },
  {
    "id": "ph_32",
    "category": "acids_bases_ph",
    "difficulty": "hard",
    "question": {
      "ru": "Какая система считается классическим примером «суперацида» (кислоты сильнее 100% серной в миллиарды раз)?",
      "kk": "100% күкірт қышқылынан миллиардтаған есе күшті «суперқышқылдардың» классикалық мысалы қандай?",
      "en": "Which chemical mixture represents the classic 'superacid', billions of times stronger than pure 100% H₂SO₄?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Разбавленный раствор соды",
          "kk": "Сұйылтылған сода ерітіндісі",
          "en": "Dilute baking soda solution"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Лимонный сок с сахаром",
          "kk": "Қант қосылған лимон шырыны",
          "en": "Lemon juice with sugar"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Чистый этиловый спирт",
          "kk": "Таза этил спирті",
          "en": "Pure ethyl alcohol"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Фтороантимоновая кислота (HF + SbF₅)",
          "kk": "Фторантимон қышқылы (HF + SbF₅)",
          "en": "Fluoroantimonic acid (HF + SbF₅)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Фтороантимоновая кислота HSbF₆ образуется при смешении HF и SbF₅ и способна протонировать даже устойчивые алканы (метан).",
      "kk": "HF пен SbF₅ қоспасынан тұратын фторантимон қышқылы — ең күшті суперқышқыл, ол тіпті метанды да протондай алады.",
      "en": "Fluoroantimonic acid (HF:SbF₅) has a Hammett acidity function H₀ ≈ -28, easily protonating hydrocarbons."
    },
    "hint": {
      "ru": "Смесь плавиковой кислоты и пентафторида сурьмы.",
      "kk": "Балқытқыш қышқыл мен сүрме пентафториді.",
      "en": "A mixture of HF and antimony pentafluoride."
    },
    "xpReward": 25
  },
  {
    "id": "ph_33",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Как изменится pH раствора соляной кислоты (pH = 2), если разбавить его чистой дистиллированной водой ровно в 10 раз?",
      "kk": "Тұз қышқылы ерітіндісін (pH = 2) таза дистилденген сумен дәл 10 есе сұйылтса, pH қалай өзгереді?",
      "en": "How does the pH of an HCl solution (pH = 2) change when diluted tenfold with pure distilled water?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Уменьшится на 1 единицу (станет pH = 1)",
          "kk": "1 бірлікке азаяды (pH = 1 болады)",
          "en": "Decreases by 1 unit (becomes pH = 1)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Не изменится вообще",
          "kk": "Мүлдем өзгермейді",
          "en": "Does not change at all"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Станет равным pH = 12",
          "kk": "pH = 12-ге тең болады",
          "en": "Instantly jumps to pH = 12"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Увеличится на 1 единицу (станет pH = 3)",
          "kk": "1 бірлікке өседі (pH = 3 болады)",
          "en": "Increases by 1 unit (becomes pH = 3)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "При 10-кратном разбавлении концентрация [H⁺] падает в 10 раз (от 10⁻² до 10⁻³ моль/л), следовательно, pH = -lg(10⁻³) = 3.",
      "kk": "Ерітіндіні 10 есе сұйылтқанда сутек иондарының концентрациясы 10 есе азайып, pH мәні 1 бірлікке өседі (pH = 3).",
      "en": "A tenfold decrease in [H⁺] lowers the concentration from 10⁻² M to 10⁻³ M, which raises the pH by log₁₀(10) = 1 unit."
    },
    "hint": {
      "ru": "Разбавление кислоты уменьшает кислотность, увеличивая pH.",
      "kk": "Қышқылды сұйылтқанда қышқылдық төмендеп, pH көрсеткіші өседі.",
      "en": "Diluting an acid decreases acidity, thus raising pH toward 7."
    },
    "xpReward": 20
  },
  {
    "id": "ph_34",
    "category": "acids_bases_ph",
    "difficulty": "hard",
    "question": {
      "ru": "К какому пределу стремится pH 10⁻⁸ M раствора соляной кислоты при 25 °C с учетом диссоциации самой воды?",
      "kk": "Судың өзіндік диссоциациясын ескере отырып, 10⁻⁸ M HCl ерітіндісінің pH мәні 25 °C-та қандай мәнге жуықтайды?",
      "en": "What is the actual pH of a 10⁻⁸ M HCl solution at 25 °C considering water's autoionization?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Строго 8,0 (раствор станет щелочным)",
          "kk": "Дәл 8,0 (ерітінді сілтілі болып кетеді)",
          "en": "Strictly 8.0 (magically turns basic)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Строго 0,0",
          "kk": "Дәл 0,0",
          "en": "Strictly 0.0"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Примерно 6,98 (чуть меньше 7,0, раствор слабокислый)",
          "kk": "Шамамен 6,98 (7,0-ден сәл төмен, әлсіз қышқыл)",
          "en": "Approximately 6.98 (slightly below 7.0, faintly acidic)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Строго 14,0",
          "kk": "Дәл 14,0",
          "en": "Strictly 14.0"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Кислота не может сделать воду щелочной! Учитывая [H⁺] от диссоциации воды (10⁻⁷) плюс кислоту (10⁻⁸), суммарно [H⁺] ≈ 1,05×10⁻⁷ моль/л, откуда pH ≈ 6,98.",
      "kk": "Қышқыл қосқанда ерітінді ешқашан сілтіге айналмайды! Судың өз сутек иондарымен қосқанда pH шамамен 6,98 болады.",
      "en": "Diluting acid never produces an alkaline solution. Factoring in water autoionization ([H⁺]water + [H⁺]acid) yields pH ≈ 6.98."
    },
    "hint": {
      "ru": "Никакое разбавление кислоты не сделает раствор щелочным (pH не превысит 7).",
      "kk": "Қышқылды қанша сұйылтсаң да pH 7-ден асып кетпейді.",
      "en": "Adding acid cannot raise pH above 7."
    },
    "xpReward": 25
  },
  {
    "id": "ph_35",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Как называется классический метод количественного анализа, основанный на постепенном добавлении титранта из бюретки до точки эквивалентности?",
      "kk": "Бюреткадан титрантты эквиваленттік нүктеге дейін тамшылатып қосуға негізделген сандық талдау әдісі қалай аталады?",
      "en": "What is the classical quantitative analytical method called where a titrant is added from a buret until the equivalence point is reached?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Хроматография",
          "kk": "Хроматография",
          "en": "Chromatography"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Титриметрия (титрование)",
          "kk": "Титриметрия (титchange / титрлеу)",
          "en": "Titrimetry (titration)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Электрофорез",
          "kk": "Электрофорез",
          "en": "Electrophoresis"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Кристаллизация",
          "kk": "Кристалдану",
          "en": "Crystallization"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Титрование (кислотно-основное) позволяет точно измерить концентрацию раствора кислоты или щелочи с помощью бюретки и индикатора.",
      "kk": "Титрлеу әдісі арқылы бюретка мен индикатор көмегімен белгісіз ерітіндінің дәл концентрациясы анықталады.",
      "en": "Titration involves controlled addition of a standardized solution of known concentration to quantify an unknown analyte."
    },
    "hint": {
      "ru": "Капельное добавление из градуированной бюретки.",
      "kk": "Бюреткадан тамшылатып құю әдісі.",
      "en": "Gradual addition from a buret."
    },
    "xpReward": 20
  },
  {
    "id": "ph_36",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Какой гидроксид проявляет амфотерные свойства, растворяясь как в соляной кислоте, так и в избытке едкого натра?",
      "kk": "Тұз қышқылында да, сілтінің артық мөлшерінде де еріп, амфотерлік қасиет көрсететін гидроксид қандай?",
      "en": "Which hydroxide exhibits amphoteric behavior, dissolving in both hydrochloric acid and excess sodium hydroxide?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Гидроксид бария (Ba(OH)₂)",
          "kk": "Барий гидроксиді (Ba(OH)₂)",
          "en": "Barium hydroxide (Ba(OH)₂)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Гидроксид калия (KOH)",
          "kk": "Калий гидроксиді (KOH)",
          "en": "Potassium hydroxide (KOH)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Гидроксид цинка (Zn(OH)₂) или гидроксид алюминия (Al(OH)₃)",
          "kk": "Мырыш гидроксиді (Zn(OH)₂) немесе алюминий гидроксиді (Al(OH)₃)",
          "en": "Zinc hydroxide (Zn(OH)₂) or aluminum hydroxide (Al(OH)₃)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Гидроксид магния (Mg(OH)₂)",
          "kk": "Магний гидроксиді (Mg(OH)₂)",
          "en": "Magnesium hydroxide (Mg(OH)₂)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Zn(OH)₂ и Al(OH)₃ амфотерны: в кислоте дают обычные соли (Zn²⁺, Al³⁺), а в щелочи растворяются с образованием гидроксокомплексов ([Zn(OH)₄]²⁻, [Al(OH)₄]⁻).",
      "kk": "Zn(OH)₂ және Al(OH)₃ амфотерлі болғандықтан, қышқылда да, сілтінің артық мөлшерінде де тез еріп кешенді тұз түзеді.",
      "en": "Amphoteric hydroxides like Al(OH)₃ and Zn(OH)₂ act as bases in acid and as acids in strong base, forming soluble complex hydroxoaluminates/zincates."
    },
    "hint": {
      "ru": "Гидроксиды цинка или алюминия.",
      "kk": "Мырыш немесе алюминий гидроксидтері.",
      "en": "Hydroxides of zinc or aluminum."
    },
    "xpReward": 20
  },
  {
    "id": "ph_37",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Какая кислота способна растворять силикатное стекло и хранится только в пластиковой посуде?",
      "kk": "Силикатты шыныны еріте алатын және тек пластик ыдыста сақталатын қышқыл қандай?",
      "en": "Which acid has the unique property of attacking silicate glass and must be stored in plastic or wax containers?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Серная кислота (H₂SO₄)",
          "kk": "Күкірт қышқылы (H₂SO₄)",
          "en": "Sulfuric acid (H₂SO₄)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Плавиковая кислота (фтороводородная, HF)",
          "kk": "Балқытқыш қышқыл (фторсутек қышқылы, HF)",
          "en": "Hydrofluoric acid (HF)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Азотная кислота (HNO₃)",
          "kk": "Азот қышқылы (HNO₃)",
          "en": "Nitric acid (HNO₃)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Фосфорная кислота (H₃PO₄)",
          "kk": "Фосфор қышқылы (H₃PO₄)",
          "en": "Phosphoric acid (H₃PO₄)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "HF реагирует с диоксидом кремния стекла: SiO₂ + 4HF → SiF₄↑ + 2H₂O (или H₂[SiF₆]), разрушая стекло (травление стекла).",
      "kk": "Балқытқыш қышқыл (HF) шыны құрамындағы кремний диоксидімен әрекеттесіп (SiO₂ + 4HF → SiF₄ + 2H₂O), оны ерітіп жібереді.",
      "en": "Hydrofluoric acid reacts directly with silica: SiO₂ + 4HF → SiF₄ + 2H₂O, etching and dissolving silicate glassware."
    },
    "hint": {
      "ru": "Кислота фтора.",
      "kk": "Фтордың сутекті қышқылы.",
      "en": "Acid of fluorine."
    },
    "xpReward": 20
  },
  {
    "id": "ph_38",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Какой газ с шипением выделяется при действии любой сильной кислоты на карбонат кальция (мел, мрамор, известняк)?",
      "kk": "Кез келген күшті қышқылды кальций карбонатына (бор, мәрмәр) құйғанда қандай газ көпіршіктеніп бөлінеді?",
      "en": "Which gas effervesces vigorously when an acid is poured onto calcium carbonate (chalk, marble, limestone)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Водород (H₂)",
          "kk": "Сутек (H₂)",
          "en": "Hydrogen (H₂)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Кислород (O₂)",
          "kk": "Оттек (O₂)",
          "en": "Oxygen (O₂)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Хлор (Cl₂)",
          "kk": "Хлор (Cl₂)",
          "en": "Chlorine (Cl₂)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Углекислый газ (диоксид углерода, CO₂)",
          "kk": "Көмірқышқыл газы (көміртек диоксиді, CO₂)",
          "en": "Carbon dioxide (CO₂)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Угольная кислота H₂CO₃ нестабильна и мгновенно распадается на воду и углекислый газ: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑.",
      "kk": "Борға қышқыл тигенде тұрақсыз көмір қышқылы су мен көмірқышқыл газына ыдырап қайнағандай көпіреді: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑.",
      "en": "Carbonates react with acids to yield carbonic acid, which rapidly decomposes into water and bubbling carbon dioxide gas (CO₂)."
    },
    "hint": {
      "ru": "Газ, от которого мутнеет известковая вода.",
      "kk": "Әк суын лайландыратын газ.",
      "en": "The gas that turns limewater cloudy."
    },
    "xpReward": 15
  },
  {
    "id": "ph_39",
    "category": "acids_bases_ph",
    "difficulty": "medium",
    "question": {
      "ru": "Чему равен водородный показатель (pH) раствора гидроксида натрия с концентрацией [OH⁻] = 0,01 моль/л при 25 °C?",
      "kk": "25 °C кезіндегі концентрациясы [OH⁻] = 0,01 моль/л болатын натрий гидроксиді ерітіндісінің pH мәні қанша?",
      "en": "What is the pH of an aqueous NaOH solution with [OH⁻] = 0.01 mol/L at 25 °C?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "pH = 2",
          "kk": "pH = 2",
          "en": "pH = 2"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "pH = 12",
          "kk": "pH = 12",
          "en": "pH = 12"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "pH = 7",
          "kk": "pH = 7",
          "en": "pH = 7"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "pH = 14",
          "kk": "pH = 14",
          "en": "pH = 14"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "pOH = -lg[OH⁻] = -lg(10⁻²) = 2. Так как pH + pOH = 14, получаем: pH = 14 - 2 = 12.",
      "kk": "pOH = -lg(10⁻²) = 2. Ал pH + pOH = 14 болғандықтан: pH = 14 - 2 = 12 болады.",
      "en": "pOH = -log₁₀(0.01) = 2. Since pH + pOH = 14, pH = 14 - 2 = 12."
    },
    "hint": {
      "ru": "Сначала найдите pOH, затем вычтите его из 14.",
      "kk": "Алдымен pOH тауып, сосын оны 14-тен шегеріңіз.",
      "en": "Calculate pOH first, then subtract from 14."
    },
    "xpReward": 20
  },
  {
    "id": "ph_40",
    "category": "acids_bases_ph",
    "difficulty": "easy",
    "question": {
      "ru": "Какое органическое соединение в медицине XIX–XX веков называлось «карболовой кислотой» (карболкой)?",
      "kk": "XIX–XX ғасырлардағы медицинада қандай органикалық қосылыс «карбол қышқылы» деп аталған?",
      "en": "Which organic compound was historically called 'carbolic acid' and used as a pioneer surgical antiseptic?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Фенол (гидроксибензол, C₆H₅OH)",
          "kk": "Фенол (гидроксибензол, C₆H₅OH)",
          "en": "Phenol (hydroxybenzene, C₆H₅OH)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Уксусная кислота",
          "kk": "Сірке қышқылы",
          "en": "Acetic acid"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Лимонная кислота",
          "kk": "Лимон қышқылы",
          "en": "Citric acid"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Щавелевая кислота",
          "kk": "Қымыздық қышқылы",
          "en": "Oxalic acid"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Джозеф Листер впервые использовал раствор фенола (карболку) как первый эффективный антисептик для дезинфекции ран и хирургических инструментов.",
      "kk": "Джозеф Листер фенолды («карбол қышқылы») хирургиялық құралдар мен жараларды дезинфекциялау үшін алғашқы антисептик ретінде қолданған.",
      "en": "Joseph Lister revolutionized surgery by utilizing carbolic acid (phenol) as an antiseptic spray to prevent post-operative infections."
    },
    "hint": {
      "ru": "Простейший ароматический спирт (гидроксипроизводное бензола).",
      "kk": "Бензолдың қарапайым гидроксилді туындысы.",
      "en": "The simplest aromatic alcohol (hydroxybenzene)."
    },
    "xpReward": 15
  },
  {
    "id": "qual_1",
    "category": "qualitative_tests",
    "difficulty": "easy",
    "question": {
      "ru": "С помощью какого катиона в качественном анализе определяют сульфат-ионы (SO₄²⁻)?",
      "kk": "Сапалық талдауда сульфат-иондарды (SO₄²⁻) қандай катион көмегімен анықтайды?",
      "en": "Which cation is used in qualitative analysis to identify sulfate ions (SO₄²⁻)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Ион натрия (Na⁺)",
          "kk": "Натрий ионы (Na⁺)",
          "en": "Sodium ion (Na⁺)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Ион меди (Cu²⁺)",
          "kk": "Мыс ионы (Cu²⁺)",
          "en": "Copper ion (Cu²⁺)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Ион бария (Ba²⁺) — выпадение белого нерастворимого в кислотах осадка BaSO₄",
          "kk": "Барий ионы (Ba²⁺) — қышқылдарда ерімейтін ақ BaSO₄ тұнбасының түзілуі",
          "en": "Barium ion (Ba²⁺) — precipitation of acid-insoluble white BaSO₄"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Ион аммония (NH₄⁺)",
          "kk": "Аммоний ионы (NH₄⁺)",
          "en": "Ammonium ion (NH₄⁺)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Ионы Ba²⁺ образуют с SO₄²⁻ кристаллический осадок BaSO₄, который не растворяется даже в кипящих минеральных кислотах (HCl, HNO₃).",
      "kk": "Ba²⁺ иондары SO₄²⁻-пен әрекеттесіп, күшті минералды қышқылдарда да ерімейтін ақ BaSO₄ тұнбасын түзеді.",
      "en": "Barium sulfate (BaSO₄) is a dense white precipitate that resists dissolution in concentrated mineral acids."
    },
    "hint": {
      "ru": "Хлорид бария дает белый осадок.",
      "kk": "Барий хлориді ақ тұнба береді.",
      "en": "Barium chloride gives a heavy white precipitate."
    },
    "xpReward": 15
  },
  {
    "id": "qual_2",
    "category": "qualitative_tests",
    "difficulty": "easy",
    "question": {
      "ru": "Какой осадок образуется при добавлении нитрата серебра (AgNO₃) к раствору, содержащему хлорид-ионы (Cl⁻)?",
      "kk": "Құрамында хлорид-иондары (Cl⁻) бар ерітіндіге күміс нитратын (AgNO₃) қосқанда қандай тұнба түзіледі?",
      "en": "What precipitate forms when silver nitrate (AgNO₃) is added to a chloride-containing solution?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Ярко-желтый осадок",
          "kk": "Ашық сары тұнба",
          "en": "Bright yellow precipitate"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Черный осадок серебра",
          "kk": "Қара күміс тұнбасы",
          "en": "Black metallic silver precipitate"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Белый творожистый осадок AgCl, темнеющий на свету",
          "kk": "Жарықта қараятын ақ ірімшік тәрізді AgCl тұнбасы",
          "en": "White curdy precipitate of AgCl, darkening in light"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Красный кристаллический осадок",
          "kk": "Қызыл кристалды тұнба",
          "en": "Red crystalline precipitate"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Ag⁺ + Cl⁻ → AgCl↓. Осадок хлорида серебра белый, творожистый, нерастворим в азотной кислоте, но легко растворяется в водном аммиаке.",
      "kk": "AgCl тұнбасы ақ, ірімшік тәрізді, азот қышқылында ерімейді, бірақ аммиак ерітіндісінде еріп кетеді.",
      "en": "Silver chloride precipitates as a white curd-like solid, insolubile in HNO₃ but freely soluble in dilute aqueous ammonia."
    },
    "hint": {
      "ru": "Белый творог.",
      "kk": "Ақ ірімшік тәрізді.",
      "en": "White curd-like precipitate."
    },
    "xpReward": 15
  },
  {
    "id": "qual_3",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Каковы цвета осадков галогенидов серебра AgBr и AgI соответственно?",
      "kk": "Күміс галогенидтері AgBr және AgI тұнбаларының түстері сәйкесінше қандай?",
      "en": "What are the characteristic colors of silver bromide (AgBr) and silver iodide (AgI) precipitates?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "AgBr — бледно-желтый (кремовый), AgI — насыщенно-желтый",
          "kk": "AgBr — ақшыл-сары (кілегей), AgI — қанық сары",
          "en": "AgBr — pale yellow (cream), AgI — vibrant yellow"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Оба чисто белые",
          "kk": "Екеуі де мүлдем ақ",
          "en": "Both are purely white"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "AgBr — синий, AgI — зеленый",
          "kk": "AgBr — көк, AgI — жасыл",
          "en": "AgBr — blue, AgI — green"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "AgBr — черный, AgI — красный",
          "kk": "AgBr — қара, AgI — қызыл",
          "en": "AgBr — black, AgI — red"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "AgCl — белый, AgBr — светло-желтоватый (кремовый), AgI — ярко-желтый. В ряду Cl-Br-I растворимость осадков в аммиаке падает.",
      "kk": "Хлордан иодқа қарай күміс тұздарының түсі сарғая түседі: AgCl ақ, AgBr ашық-сары, AgI қанық сары.",
      "en": "Silver halides follow a deepening yellow trend: AgCl is white, AgBr is pale cream, and AgI is bright canary yellow."
    },
    "hint": {
      "ru": "Цвет становится более желтым от брома к иоду.",
      "kk": "Бромнан иодқа қарай түс қою сарыға ауысады.",
      "en": "Yellow tint intensifies from bromide to iodide."
    },
    "xpReward": 20
  },
  {
    "id": "qual_4",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Какое вещество образует красивейшие золотистые кристаллические чешуйки в знаменитой реакции «Золотой дождь»?",
      "kk": "Әйгілі «Алтын жаңбыр» тәжірибесінде қандай заттың жылтыраған алтын түсті кристалды қабыршақтары түзіледі?",
      "en": "Which compound crystallizes as shimmering golden hexagonal platelets in the famous 'Golden Rain' demonstration?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Иодид свинца(II) — PbI₂",
          "kk": "Қорғасын(II) иодиді — PbI₂",
          "en": "Lead(II) iodide — PbI₂"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Сульфид золота — Au₂S₃",
          "kk": "Алтын сульфиді — Au₂S₃",
          "en": "Gold sulfide — Au₂S₃"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Оксид меди(I) — Cu₂O",
          "kk": "Мыс(I) оксиді — Cu₂O",
          "en": "Copper(I) oxide — Cu₂O"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Хлорид ртути — HgCl₂",
          "kk": "Сынап хлориді — HgCl₂",
          "en": "Mercury chloride — HgCl₂"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "При охлаждении горячего водного раствора PbI₂, полученного из Pb(NO₃)₂ и KI, выпадают блестящие золотые кристаллы иодида свинца(II).",
      "kk": "Ыстық судан суытқанда қорғасын иодиді (PbI₂) алтындай жарқыраған қабыршақ кристалдар түрінде бөлінеді.",
      "en": "Cooling a hot saturated solution of lead(II) iodide (PbI₂) causes spectacular golden crystalline flakes to glitter like golden rain."
    },
    "hint": {
      "ru": "Соединение свинца и иода.",
      "kk": "Қорғасын мен иодтың қосылысы.",
      "en": "A compound of lead and iodine."
    },
    "xpReward": 20
  },
  {
    "id": "qual_5",
    "category": "qualitative_tests",
    "difficulty": "easy",
    "question": {
      "ru": "Какое эффектное окрашивание («искусственная кровь») появляется при реакции ионов Fe³⁺ с тиоцианатом (роданидом) калия KSCN?",
      "kk": "Fe³⁺ иондары мен калий тиоцианаты (роданиді, KSCN) әрекеттескенде қандай әсерлі түс («жасанды қан») пайда болады?",
      "en": "What dramatic color ('artificial blood') appears when Fe³⁺ ions react with potassium thiocyanate (KSCN)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Кроваво-красное",
          "kk": "Қан қызыл",
          "en": "Blood-red"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Изумрудно-зеленое",
          "kk": "Зүбаржат жасыл",
          "en": "Emerald green"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Ярко-синее",
          "kk": "Ашық көк",
          "en": "Bright blue"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Фиолетовое",
          "kk": "Күлгін",
          "en": "Violet"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Fe³⁺ образует с роданид-ионами SCN⁻ серию комплексных катионов состава [Fe(SCN)n]³⁻ⁿ интенсивнейшего кроваво-красного цвета.",
      "kk": "Fe³⁺ катионы SCN⁻ роданид иондарымен байланысып, аса қанық қан-қызыл түсті кешенді қосылыс береді.",
      "en": "Fe³⁺ reacts with thiocyanate (SCN⁻) to form intense blood-red iron thiocyanate coordination complexes, used in movie blood effects."
    },
    "hint": {
      "ru": "Цвет свежей артериальной крови.",
      "kk": "Қып-қызыл қанның түсі.",
      "en": "The color of arterial blood."
    },
    "xpReward": 15
  },
  {
    "id": "qual_6",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Какой реагент позволяет обнаружить катионы Fe²⁺ с образованием темно-синего осадка «турнбулевой сини»?",
      "kk": "Fe²⁺ катиондарын анықтап, қара-көк түсті «турнбул көгі» тұнбасын алуға қандай реактив қолданылады?",
      "en": "Which reagent is used to detect Fe²⁺ ions by precipitating the deep blue pigment known as 'Turnbull's blue'?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Красная кровяная соль — K₃[Fe(CN)₆] (гексацианоферрат(III) калия)",
          "kk": "Қызыл қан тұзы — K₃[Fe(CN)₆] (калий гексацианоферраты(III))",
          "en": "Potassium ferricyanide — K₃[Fe(CN)₆] (red prussiate)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Желтая кровяная соль — K₄[Fe(CN)₆]",
          "kk": "Сары қан тұзы — K₄[Fe(CN)₆]",
          "en": "Potassium ferrocyanide — K₄[Fe(CN)₆]"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Роданид калия — KSCN",
          "kk": "Калий роданиді — KSCN",
          "en": "Potassium thiocyanate — KSCN"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Нитрат серебра — AgNO₃",
          "kk": "Күміс нитраты — AgNO₃",
          "en": "Silver nitrate — AgNO₃"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Катион Fe²⁺ с красной кровяной солью K₃[Fe(CN)₆] дает синий осадок гексацианоферрата (турнбулева синь).",
      "kk": "Fe²⁺ иондары қызыл қан тұзымен K₃[Fe(CN)₆] әрекеттесіп, қара-көк түсті турнбул көгі тұнбасын береді.",
      "en": "Reaction of Fe²⁺ with potassium hexacyanoferrate(III) (red prussiate) precipitates deep blue Turnbull's blue."
    },
    "hint": {
      "ru": "«Красная» кровяная соль реагирует с Fe(II).",
      "kk": "«Қызыл» қан тұзы Fe(II)-мен әрекеттеседі.",
      "en": "'Red' blood salt reacts with Fe(II)."
    },
    "xpReward": 20
  },
  {
    "id": "qual_7",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Какой реагент используется для обнаружения катионов железа(III) Fe³⁺ с получением знаменитого синего пигмента «берлинская лазурь»?",
      "kk": "Fe³⁺ иондарын анықтап, әйгілі көк бояу «берлин лазурін» түзу үшін қандай реактив қолданылады?",
      "en": "Which reagent identifies Fe³⁺ ions by forming the historical intense blue pigment 'Prussian blue'?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Красная кровяная соль — K₃[Fe(CN)₆]",
          "kk": "Қызыл қан тұзы — K₃[Fe(CN)₆]",
          "en": "Potassium ferricyanide — K₃[Fe(CN)₆]"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Едкий натр — NaOH",
          "kk": "Күйдіргіш натр — NaOH",
          "en": "Sodium hydroxide — NaOH"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Серная кислота — H₂SO₄",
          "kk": "Күкірт қышқылы — H₂SO₄",
          "en": "Sulfuric acid — H₂SO₄"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Желтая кровяная соль — K₄[Fe(CN)₆] (гексацианоферрат(II) калия)",
          "kk": "Сары қан тұзы — K₄[Fe(CN)₆] (калий гексацианоферраты(II))",
          "en": "Potassium ferrocyanide — K₄[Fe(CN)₆] (yellow prussiate)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "4Fe³⁺ + 3[Fe(CN)₆]⁴⁻ → Fe₄[Fe(CN)₆]₃↓ (берлинская лазурь) — красивейший темно-синий пигмент для красок и чернил.",
      "kk": "Fe³⁺ катионы мен сары қан тұзы әрекеттескенде қанық көк берлин лазурі Fe₄[Fe(CN)₆]₃ тұнбасы түзіледі.",
      "en": "Fe³⁺ reacts with potassium ferrocyanide (yellow prussiate) to yield Prussian blue (Fe₄[Fe(CN)₆]₃), a historic artists' blue pigment."
    },
    "hint": {
      "ru": "«Желтая» соль дает синий осадок с трехвалентным железом.",
      "kk": "«Сары» қан тұзы үш валентті темірмен көк тұнба береді.",
      "en": "'Yellow' prussiate coordinates with Fe³⁺."
    },
    "xpReward": 20
  },
  {
    "id": "qual_8",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Что происходит при добавлении избытка водного аммиака к голубому осадку Cu(OH)₂?",
      "kk": "Cu(OH)₂ ашық-көк тұнбасына артық мөлшерде аммиак суын қосқанда не байқалады?",
      "en": "What occurs when excess aqueous ammonia is added to a pale blue Cu(OH)₂ precipitate?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Выпадает черный металлический осадок",
          "kk": "Қара металл тұнбасы түседі",
          "en": "Black metallic copper precipitates"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Выделяется ядовитый газ хлор",
          "kk": "Улы хлор газы бөлінеді",
          "en": "Poisonous chlorine gas is liberated"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Осадок растворяется с образованием прозрачного ярко-синего (василькового) аммиаката [Cu(NH₃)₄]²⁺",
          "kk": "Тұнба еріп, мөлдір қанық көк түсті [Cu(NH₃)₄]²⁺ аммиакаты түзіледі",
          "en": "Precipitate dissolves forming a deep sapphire-blue soluble tetraammine complex [Cu(NH₃)₄]²⁺"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Раствор обесцвечивается и замерзает",
          "kk": "Ерітінді түссізденіп қатып қалады",
          "en": "Solution turns completely colorless and freezes"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Голубой осадок гидроксида меди(II) растворяется в избытке аммиака благодаря образованию устойчивого комплексного катиона [Cu(NH₃)₄]²⁺ глубокого ультрамаринового цвета.",
      "kk": "Cu(OH)₂ аммиактың артық мөлшерінде еріп, қанық ультрамарин түсті [Cu(NH₃)₄]²⁺ тетрааммин кешенін түзеді.",
      "en": "Cu(OH)₂ dissolves in excess ammonia into the brilliant royal blue tetraamminecopper(II) complex ion [Cu(NH₃)₄]²⁺."
    },
    "hint": {
      "ru": "Растворение с переходом в глубокий сапфирово-синий цвет.",
      "kk": "Тұнба еріп, сапфирдей көк түсті сұйықтыққа айналады.",
      "en": "Dissolution into a vivid royal sapphire-blue solution."
    },
    "xpReward": 20
  },
  {
    "id": "qual_9",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Какого цвета свежеосажденный гидроксид железа(III) Fe(OH)₃?",
      "kk": "Жаңа тұндырылған темір(III) гидроксидінің Fe(OH)₃ түсі қандай?",
      "en": "What is the color of freshly precipitated iron(III) hydroxide Fe(OH)₃?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Серо-зеленый",
          "kk": "Сұр-жасыл",
          "en": "Dirty grayish-green"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Ярко-синий",
          "kk": "Ашық көк",
          "en": "Bright blue"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Белоснежный",
          "kk": "Аппақ ақ",
          "en": "Snow white"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Красно-бурый (цвет ржавчины)",
          "kk": "Қызыл-қоңыр (тат түстес)",
          "en": "Reddish-brown (rust colored)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Fe(OH)₃ выпадает в виде аморфного красно-бурого осадка (ржавчина). Fe(OH)₂ изначально серо-зеленый, но быстро буреет на воздухе из-за окисления кислородом.",
      "kk": "Fe(OH)₃ қызыл-қоңыр түсті аморфты тұнба түрінде түседі. Ал Fe(OH)₂ ақ-жасылдау болып, ауада лезде тотығып қоңыр татқа айналады.",
      "en": "Fe(OH)₃ forms a characteristic gelatinous reddish-brown precipitate identical to natural rust."
    },
    "hint": {
      "ru": "Цвет ржавого железа.",
      "kk": "Тат басқан темірдің түсі.",
      "en": "The color of rusty metal."
    },
    "xpReward": 20
  },
  {
    "id": "qual_10",
    "category": "qualitative_tests",
    "difficulty": "hard",
    "question": {
      "ru": "С помощью какого органического реагента (реактива Чугаева) обнаруживают ионы Ni²⁺ по образованию ало-красного кристаллического осадка?",
      "kk": "Қай органикалық реактив (Чугаев реактиві) Ni²⁺ иондарымен алқызыл-қызыл түсті кристалды тұнба түзіп, оны анықтауға мүмкіндік береді?",
      "en": "Which organic reagent (Chugaev's reagent) selectively precipitates Ni²⁺ as an intense scarlet-red chelate complex?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Фенолфталеин",
          "kk": "Фенолфталеин",
          "en": "Phenolphthalein"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Диметилглиоксим",
          "kk": "Диметилглиоксим",
          "en": "Dimethylglyoxime"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Метиловый оранжевый",
          "kk": "Метилоранж",
          "en": "Methyl orange"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Уксусная кислота",
          "kk": "Сірке қышқылы",
          "en": "Acetic acid"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Открытая Л.А. Чугаевым в 1905 году реакция диметилглиоксима с никелем(II) дает нерастворимый ярко-алый диметилглиоксимат никеля.",
      "kk": "Л.А. Чугаев 1905 жылы ашқан диметилглиоксим реакциясы никельмен(II) ашық-қызыл түсті ерімейтін кешен түзеді.",
      "en": "Dimethylglyoxime reacts specifically with Ni²⁺ in ammoniacal solution to produce a voluminous scarlet bis(dimethylglyoximato)nickel(II) precipitate."
    },
    "hint": {
      "ru": "Органический оксим с двумя метильными группами.",
      "kk": "Екі метил тобы бар оксим.",
      "en": "An oxime with two methyl groups."
    },
    "xpReward": 25
  },
  {
    "id": "qual_11",
    "category": "qualitative_tests",
    "difficulty": "easy",
    "question": {
      "ru": "В какой цвет окрашивают пламя горелки летучие соли натрия (например, поваренная соль NaCl)?",
      "kk": "Натрийдің ұшқыш тұздары (мысалы, ас тұзы NaCl) жалынды қандай түске бояйды?",
      "en": "What distinctive color do volatile sodium salts (e.g. table salt) impart to a burner flame?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Яркий желтый (золотисто-желтый)",
          "kk": "Ашық сары (алтын-сары)",
          "en": "Intense golden yellow"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Фиолетовый",
          "kk": "Күлгін",
          "en": "Lilac violet"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Кирпично-красный",
          "kk": "Кірпіш қызыл",
          "en": "Brick red"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Ярко-зеленый",
          "kk": "Ашық жасыл",
          "en": "Bright green"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Атомы натрия при возбуждении испускают мощный резонансный дублет D-линий (589 нм), окрашивая пламя в интенсивный желтый цвет.",
      "kk": "Натрий атомдары қозу кезінде 589 нм толқын ұзындығындағы сары сәуле шашып, жалынды ашық сарыға бояйды.",
      "en": "Excited sodium atoms emit strongly at the 589 nm D-line, producing an unmistakable persistent yellow flame."
    },
    "hint": {
      "ru": "Цвет уличных натриевых фонарей.",
      "kk": "Сары көше шамдарының түсі.",
      "en": "The color of classic yellow sodium highway lamps."
    },
    "xpReward": 15
  },
  {
    "id": "qual_12",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "В какой цвет окрашивают пламя ионы калия (K⁺), наблюдаемые через синее кобальтовое стекло?",
      "kk": "Көк кобальт шынысы арқылы қарағанда калий (K⁺) иондары жалынды қандай түске бояйды?",
      "en": "What flame color is characteristic of potassium (K⁺) salts, typically viewed through blue cobalt glass?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Ярко-оранжевый",
          "kk": "Қызғылт-сары",
          "en": "Vivid orange"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Изумрудно-зеленый",
          "kk": "Жасыл",
          "en": "Emerald green"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Кроваво-красный",
          "kk": "Қан қызыл",
          "en": "Blood red"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Фиолетовый (светло-сиреневый)",
          "kk": "Күлгін (ақшыл сирень)",
          "en": "Pale violet (lilac)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Калий дает нежное фиолетово-сиреневое пламя. Кобальтовое стекло поглощает мешающее желтое излучение примесей натрия.",
      "kk": "Калий жалынды бозғылт күлгін түске бояйды. Көк кобальт әйнегі натрийдің сары жарығын жұтып, калийді анықтауға көмектеседі.",
      "en": "Potassium burns with a delicate lilac-violet hue, masked by sodium yellow unless filtered through blue cobalt glass."
    },
    "hint": {
      "ru": "Сиреневый или фиолетовый оттенок.",
      "kk": "Күлгін сирень түстес реңк.",
      "en": "Lilac or violet tone."
    },
    "xpReward": 20
  },
  {
    "id": "qual_13",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "В какой цвет окрашивают бесцветное пламя соли кальция (Ca²⁺)?",
      "kk": "Кальций тұздары (Ca²⁺) түссіз жалынды қандай түске бояйды?",
      "en": "Which flame color indicates the presence of calcium (Ca²⁺) ions?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Карминно-красный (малиновый)",
          "kk": "Қанық таңқурай қызыл",
          "en": "Crimson (carmine)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Яблочно-зеленый",
          "kk": "Алма-жасыл",
          "en": "Apple-green"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Голубой",
          "kk": "Көгілдір",
          "en": "Sky blue"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Кирпично-красный",
          "kk": "Кірпіш қызыл",
          "en": "Brick-red (orange-red)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Ионы кальция придают пламени характерный оранжево-кирпично-красный цвет.",
      "kk": "Кальций иондары жалынға тән кірпіш-қызыл (сарғыш-қызыл) түс береді.",
      "en": "Calcium ions produce a distinctive warm brick-red / orange-red flame emission."
    },
    "hint": {
      "ru": "Цвет красного глиняного кирпича.",
      "kk": "Қызыл саз кірпіштің түсі.",
      "en": "The color of red clay brick."
    },
    "xpReward": 20
  },
  {
    "id": "qual_14",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Какое вещество обеспечивает ярко-карминный (малиново-красный) цвет сигнальных ракет и праздничных фейерверков?",
      "kk": "Сигнал ракеталары мен мерекелік отшашулардың ашық кармин-қызыл (таңқурай) түсін қандай металдың тұздары береді?",
      "en": "Which element's salts provide the deep crimson / carmine-red color in emergency flares and fireworks?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Барий (Ba²⁺)",
          "kk": "Барий (Ba²⁺)",
          "en": "Barium (Ba²⁺)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Натрий (Na⁺)",
          "kk": "Натрий (Na⁺)",
          "en": "Sodium (Na⁺)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Стронций (Sr²⁺)",
          "kk": "Стронций (Sr²⁺)",
          "en": "Strontium (Sr²⁺)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Медь (Cu²⁺)",
          "kk": "Мыс (Cu²⁺)",
          "en": "Copper (Cu²⁺)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Соли стронция (Sr(NO₃)₂ и др.) излучают в красной области спектра, создавая чистый карминно-красный цвет салютов.",
      "kk": "Стронций тұздары жалынға қанық таңқурай-қызыл (кармин) түс беріп, отшашуларда қызыл түс үшін қолданылады.",
      "en": "Strontium salts (such as Sr(NO₃)₂) produce an intense, deep crimson-red flame in pyrotechnics."
    },
    "hint": {
      "ru": "Щелочноземельный металл под номером 38.",
      "kk": "38-ші нөмірлі сілтілік-жер металл.",
      "en": "Alkaline earth element atomic number 38."
    },
    "xpReward": 20
  },
  {
    "id": "qual_15",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Какую окраску придает пламени горелки внесение солей бария (Ba²⁺)?",
      "kk": "Барий тұздарын (Ba²⁺) қыздырғанда жалын қандай түске боялады?",
      "en": "What flame coloration is produced by barium (Ba²⁺) salts?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Малиново-красная",
          "kk": "Таңқурай қызыл",
          "en": "Crimson red"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Фиолетовая",
          "kk": "Күлгін",
          "en": "Deep violet"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Золотисто-желтая",
          "kk": "Алтын сары",
          "en": "Golden yellow"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Яблочно-зеленая (желтовато-зеленая)",
          "kk": "Алма-жасыл (сарғыш-жасыл)",
          "en": "Apple-green (yellowish-green)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Летучие соединения бария (BaCl₂) окрашивают пламя в светлый яблочно-зеленый цвет (используется в зеленых фейерверках).",
      "kk": "Барий қосылыстары жалынды әдемі алма-жасыл түске бояйды (отшашулардың жасыл оттары).",
      "en": "Volatile barium compounds impart a characteristic pale apple-green hue to flames."
    },
    "hint": {
      "ru": "Цвет спелого зеленого яблока.",
      "kk": "Піскен жасыл алманың түсі.",
      "en": "Color of a crisp green Granny Smith apple."
    },
    "xpReward": 20
  },
  {
    "id": "qual_16",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Какой цвет приобретает пламя горелки при внесении галогенидов меди (проба Бельштейна)?",
      "kk": "Мыс галогенидтерін жалынға кіргізгенде (Бельштейн сынамасы) ол қандай түске енеді?",
      "en": "What color flame is produced by copper halides during the classic Beilstein test?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Желтый",
          "kk": "Сары",
          "en": "Yellow"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Яркий изумрудно-зеленый или голубовато-зеленый",
          "kk": "Ашық зүбаржат-жасыл немесе көкшіл-жасыл",
          "en": "Intense emerald green or blue-green"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Чисто белый",
          "kk": "Аппақ ақ",
          "en": "Pure white"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Малиновый",
          "kk": "Таңқурай қызыл",
          "en": "Crimson"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Галогениды меди CuCl₂ испускают яркие сине-зеленые и изумрудные полосы в пламени (основа пробы Бельштейна на наличие галогенов в органике).",
      "kk": "Мыс галогенидтері жалынға көркем жасыл-көк түс береді (органикадағы галогенді анықтайтын Бельштейн сынамасы).",
      "en": "Volatile copper halides impart a brilliant green-blue flame, serving as the basis for the Beilstein test for halogens."
    },
    "hint": {
      "ru": "Зелено-голубой цвет соединений меди.",
      "kk": "Мыс қосылыстарының жасыл-көк түсі.",
      "en": "Green-blue glow characteristic of copper."
    },
    "xpReward": 20
  },
  {
    "id": "qual_17",
    "category": "qualitative_tests",
    "difficulty": "easy",
    "question": {
      "ru": "Какое окрашивание возникает при взаимодействии крахмала с каплей спиртового раствора йода?",
      "kk": "Крахмалға йодтың спирттік ерітіндісінің тамшысын тамызғанда қандай түс пайда болады?",
      "en": "What color appears when an iodine solution is added to starch?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Темно-синее",
          "kk": "Қара-көк",
          "en": "Dark blue / Navy"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Ярко-красное",
          "kk": "Ашық қызыл",
          "en": "Bright red"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Лимонно-желтое",
          "kk": "Ашық сары",
          "en": "Lemon yellow"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Снежно-белое",
          "kk": "Аппақ ақ",
          "en": "Pure white"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Молекулы йода I₂ внедряются внутрь спирали амилозы (крахмала), образуя соединение включения (клатрат) интенсивного темно-синего цвета.",
      "kk": "Йод молекулалары амилозаның спираль ішіне кірігіп, қанық қара-көк түсті клатратты кешен түзеді.",
      "en": "Polyiodide ions insert into the helical cavity of amylose coils to form a deep blue-black starch-iodine inclusion complex."
    },
    "hint": {
      "ru": "Синяя окраска, исчезающая при нагревании.",
      "kk": "Қыздырғанда жоғалып, суытқанда қайта шығатын көк түс.",
      "en": "Deep navy blue color."
    },
    "xpReward": 15
  },
  {
    "id": "qual_18",
    "category": "qualitative_tests",
    "difficulty": "easy",
    "question": {
      "ru": "Что наблюдается при действии разбавленной соляной кислоты на твердую соду или мел (тест на карбонат-ион CO₃²⁻)?",
      "kk": "Қатты сода немесе борға сұйылтылған тұз қышқылын қосқанда не байқалады (CO₃²⁻ карбонат ионының сынамасы)?",
      "en": "What is observed when dilute hydrochloric acid is added to solid soda or chalk (test for CO₃²⁻)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Образование едкого коричневого дыма",
          "kk": "Тұншықтырғыш қоңыр түтіннің бөлінуі",
          "en": "Pungent brown choking fumes"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Выпадение ярко-желтого осадка",
          "kk": "Ашық сары тұнбаның түзілуі",
          "en": "Bright yellow precipitation"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Бурное «вскипание» с выделением газа CO₂, вызывающего помутнение известковой воды",
          "kk": "Әк суын лайландыратын CO₂ газының бөлінуімен қатты көпіршу",
          "en": "Vigorous effervescence of CO₂ gas which turns limewater milky"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Жидкость замерзает в лед",
          "kk": "Сұйықтық мұзға айналады",
          "en": "Liquid freezes into ice"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Карбонаты мгновенно разрушаются кислотами: CO₃²⁻ + 2H⁺ → H₂O + CO₂↑. Выделяющийся углекислый газ вызывает бурное шипение.",
      "kk": "Карбонаттар қышқыл әсерінен лезде ыдырап көмірқышқыл газын түзеді: CO₃²⁻ + 2H⁺ → H₂O + CO₂↑.",
      "en": "Acid protonates carbonate to unstable carbonic acid, yielding effervescent bubbling of CO₂ gas that precipitates chalk in limewater."
    },
    "hint": {
      "ru": "Шипение и выделение углекислого газа.",
      "kk": "Көпіршіктену және көмірқышқыл газының шығуы.",
      "en": "Effervescence of carbon dioxide."
    },
    "xpReward": 15
  },
  {
    "id": "qual_19",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Какое аналитическое наблюдение подтверждает наличие сульфид-ионов (S²⁻) с помощью раствора нитрата свинца(II)?",
      "kk": "Қорғасын(II) нитраты ерітіндісінің көмегімен сульфид-иондардың (S²⁻) бар екенін қандай аналитикалық белгі растайды?",
      "en": "What observation confirms sulfide ions (S²⁻) using lead(II) nitrate solution or lead acetate paper?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Выпадение белого осадка",
          "kk": "Ақ тұнбаның түсуі",
          "en": "Formation of a white precipitate"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Выделение синего газа",
          "kk": "Көк газдың бөлінуі",
          "en": "Evolution of blue gas"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Появление запаха ванили",
          "kk": "Ваниль иісінің шығуы",
          "en": "A pleasant vanilla aroma"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Выпадение черного осадка сульфида свинца(II) — PbS",
          "kk": "Қорғасын(II) сульфидінің (PbS) қара тұнбасының түзілуі",
          "en": "Formation of a black lead(II) sulfide (PbS) precipitate"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Pb²⁺ + S²⁻ → PbS↓. Сульфид свинца — нерастворимый черный осадок. Фильтровальная бумага с солью свинца мгновенно чернеет от следов сероводорода H₂S.",
      "kk": "Pb²⁺ + S²⁻ → PbS↓. Қорғасын сульфиді қара түсті ерімейтін тұнба. Свинцовая қағаз күкіртсутектен лезде қараяды.",
      "en": "Lead(II) reacts with sulfide to form insoluble black lead sulfide (PbS), turning lead acetate test paper metallic black."
    },
    "hint": {
      "ru": "Черный осадок или почернение бумажки.",
      "kk": "Қара тұнба немесе қағаздың қараюы.",
      "en": "Black precipitate forming."
    },
    "xpReward": 20
  },
  {
    "id": "qual_20",
    "category": "qualitative_tests",
    "difficulty": "easy",
    "question": {
      "ru": "Как доказать присутствие катионов аммония (NH₄⁺) в растворе соли?",
      "kk": "Тұз ерітіндісінде аммоний катиондарының (NH₄⁺) бар екенін қалай дәлелдейді?",
      "en": "How do you test for the presence of ammonium cations (NH₄⁺) in an unknown salt solution?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Добавить соляную кислоту — выпадает синий осадок",
          "kk": "Тұз қышқылын қосу — көк тұнба түседі",
          "en": "Add HCl — gives blue precipitate"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Нагреть со щелочью (NaOH) — выделяется газ с резким запахом аммиака, окрашивающий влажную лакмусовую бумажку в синий цвет",
          "kk": "Сілтімен (NaOH) қыздыру — өткір аммиак иісті газ бөлініп, ылғал лакмус қағазын көк түске бояйды",
          "en": "Warm with NaOH base — evolves pungent ammonia gas which turns damp red litmus paper blue"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Пропустить через раствор кислород",
          "kk": "Ерітінді арқылы оттек өткізу",
          "en": "Bubble oxygen through solution"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Посветить ультрафиолетовой лампой",
          "kk": "Ультракүлгін шаммен жарық түсіру",
          "en": "Shine UV light on it"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "NH₄⁺ + OH⁻ → NH₃↑ + H₂O. Выделяющийся газообразный аммиак легко узнать по едкому запаху и посинению влажной красной лакмусовой бумажки у горлышка пробирки.",
      "kk": "Аммоний тұздарына сілті қосып қыздырғанда аммиак газы бөлінеді, ол иісімен және ылғал қызыл лакмусты көгертуімен оңай табылады.",
      "en": "Heating ammonium salts with strong base liberates volatile NH₃ gas, recognized by its sharp odor and basic reaction on damp litmus."
    },
    "hint": {
      "ru": "Запах нашатыря при нагревании со щелочью.",
      "kk": "Сілтімен қыздырғандағы мүсәтір иісі.",
      "en": "Smelling salts aroma when heated with base."
    },
    "xpReward": 15
  },
  {
    "id": "qual_21",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Какой осадок образуется при качественной реакции фосфат-ионов (PO₄³⁻) с нитратом серебра AgNO₃?",
      "kk": "Фосфат-иондардың (PO₄³⁻) күміс нитратымен (AgNO₃) сапалық реакциясы нәтижесінде қандай тұнба түзіледі?",
      "en": "What precipitate is formed in the qualitative test for phosphate ions (PO₄³⁻) using silver nitrate?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Ярко-желтый осадок фосфата серебра — Ag₃PO₄",
          "kk": "Күміс фосфатының (Ag₃PO₄) ашық сары тұнбасы",
          "en": "Bright canary-yellow precipitate of silver phosphate — Ag₃PO₄"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Черный осадок",
          "kk": "Қара тұнба",
          "en": "Black precipitate"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Белый творожистый осадок",
          "kk": "Ақ ірімшік тәрізді тұнба",
          "en": "White curdy precipitate"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Зеленый студенистый осадок",
          "kk": "Жасыл қоймалжың тұнба",
          "en": "Green gelatinous precipitate"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "3Ag⁺ + PO₄³⁻ → Ag₃PO₄↓. Осадок имеет насыщенный канареечно-желтый цвет и, в отличие от AgI, легко растворяется в разбавленной азотной кислоте.",
      "kk": "Күміс фосфаты Ag₃PO₄ қанық сары түсті болады және азот қышқылында еріп кетеді (AgI сары тұнбасы қышқылда ерімейді).",
      "en": "Silver phosphate precipitates as a vibrant yellow solid Ag₃PO₄, distinguishable from AgI by dissolving readily in dilute HNO₃."
    },
    "hint": {
      "ru": "Желтый осадок, растворимый в азотной кислоте.",
      "kk": "Азот қышқылында еритін сары тұнба.",
      "en": "Yellow precipitate soluble in nitric acid."
    },
    "xpReward": 20
  },
  {
    "id": "qual_22",
    "category": "qualitative_tests",
    "difficulty": "hard",
    "question": {
      "ru": "В чем заключается знаменитая реакция «бурого кольца» на нитрат-ионы (NO₃⁻)?",
      "kk": "Нитрат-иондарға (NO₃⁻) жүргізілетін әйгілі «қоңыр сақина» реакциясының мәні неде?",
      "en": "What constitutes the famous 'brown ring test' for nitrate ions (NO₃⁻)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Весь раствор мгновенно закипает с выпадением золота",
          "kk": "Барлық ерітінді алтын бөлініп қайнап кетеді",
          "en": "The solution boils instantly depositing gold"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "На границе слоев раствора FeSO₄ и концентрированной H₂SO₄ образуется бурое кольцо нитрозокомплекса [Fe(H₂O)₅(NO)]²⁺",
          "kk": "FeSO₄ және концентрлі H₂SO₄ қабаттарының шекарасында [Fe(H₂O)₅(NO)]²⁺ қоңыр кешенді сақинасы түзіледі",
          "en": "A brown ring of nitrosyl complex [Fe(H₂O)₅(NO)]²⁺ forms at the junction of FeSO₄ solution and conc. H₂SO₄"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Выпадает зеленый осадок карбоната",
          "kk": "Карбонаттың жасыл тұнбасы түседі",
          "en": "Green carbonate precipitates"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Пробирка окрашивается в фиолетовый цвет снаружи",
          "kk": "Пробирка сыртынан күлгін түске боялады",
          "en": "The exterior glass turns purple"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Концентрированная H₂SO₄ восстанавливает нитрат с Fe²⁺ до оксида азота NO, который соединяется с избытком Fe²⁺, образуя бурое кольцо на границе двух фаз.",
      "kk": "Концентрлі H₂SO₄ қатысында Fe²⁺ нитратты NO-ға дейін тотықсыздандырады, ол темірмен қосылып фазалар шекарасында қоңыр сақина түзеді.",
      "en": "Nitrate is reduced by Fe²⁺ in conc. H₂SO₄ to NO, which coordinates to excess Fe²⁺ forming the unstable brown chromophore ring [Fe(H₂O)₅(NO)]²⁺."
    },
    "hint": {
      "ru": "Бурое кольцо на границе двух слоев жидкостей.",
      "kk": "Екі сұйықтық шекарасындағы қоңыр сақина.",
      "en": "A brown boundary ring between two liquid layers."
    },
    "xpReward": 25
  },
  {
    "id": "qual_23",
    "category": "qualitative_tests",
    "difficulty": "hard",
    "question": {
      "ru": "Для сверхчувствительного обнаружения какого вещества в питьевой воде служит щелочной реактив Несслера (K₂[HgI₄])?",
      "kk": "Ауыз суындағы қандай затты өте жоғары сезімталдықпен анықтау үшін сілтілік Несслер реактиві (K₂[HgI₄]) қызмет етеді?",
      "en": "What substance does alkaline Nessler's reagent (K₂[HgI₄]) sensitively detect in drinking water analysis?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Следы аммиака и ионов аммония (NH₄⁺) — красно-бурый осадок/окраска",
          "kk": "Аммиак пен аммоний иондарының (NH₄⁺) іздері — қызыл-қоңыр тұнба/бояу",
          "en": "Traces of ammonia and ammonium ions (NH₄⁺) — reddish-brown precipitate/color"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Ионы свинца",
          "kk": "Қорғасын иондары",
          "en": "Lead ions"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Ионы железа",
          "kk": "Темір иондары",
          "en": "Iron ions"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Молекулярный хлор",
          "kk": "Молекулалық хлор",
          "en": "Molecular chlorine"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Реактив Несслера образует с микроколичествами аммиака оранжево-бурый осадок йодида димеркураммония (очень чувствительный тест на чистоту воды).",
      "kk": "Несслер реактиві тіпті су құрамындағы аммиактың өте аз іздерімен қызыл-қоңыр бояу беріп, судың санитарлық тазалығын анықтайды.",
      "en": "Nessler's reagent reacts with trace NH₃ or NH₄⁺ to yield a distinctive yellow-brown to reddish precipitate (Millon's base iodide)."
    },
    "hint": {
      "ru": "Определение следов аммиака и свежего загрязнения воды.",
      "kk": "Судағы аммиак қоспасын анықтау.",
      "en": "Detecting microscopic traces of ammonia."
    },
    "xpReward": 25
  },
  {
    "id": "qual_24",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Что произойдет при постепенном добавлении раствора NaOH к раствору AlCl₃ до избытка щелочи?",
      "kk": "AlCl₃ ерітіндісіне сілтінің артық мөлшеріне дейін NaOH ерітіндісін біртіндеп қосқанда не байқалады?",
      "en": "What occurs as NaOH solution is gradually added to an AlCl₃ solution until the base is in excess?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Выпадает осадок, который не растворяется ни при каких условиях",
          "kk": "Тұнба түзіліп, ешқандай жағдайда ерімейді",
          "en": "A precipitate forms that permanently resists dissolution"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Сразу выделяется ядовитый зеленый газ",
          "kk": "Бірден улы жасыл газ бөлінеді",
          "en": "Toxic green gas evolves immediately"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Раствор окрашивается в черный цвет",
          "kk": "Ерітінді қара түске боялады",
          "en": "Solution turns jet black"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Сначала выпадает белый студенистый осадок Al(OH)₃, который затем полностью растворяется в избытке щелочи",
          "kk": "Алдымен ақ қоймалжың Al(OH)₃ тұнбасы түседі, кейін ол сілтінің артық мөлшерінде толық еріп кетеді",
          "en": "Initially a white gelatinous Al(OH)₃ precipitate forms, which completely redissolves in excess NaOH"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Al³⁺ + 3OH⁻ → Al(OH)₃↓ (осадок). При дальнейшем добавлении щелочи амфотерный гидроксид растворяется: Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻.",
      "kk": "Амфотерлі Al(OH)₃ ақ тұнбасы алдымен түзіліп, сілтінің көп мөлшерінде тетрагидроксоалюминат түзіп қайта еріп кетеді.",
      "en": "Al(OH)₃ precipitates as an amphoteric gelatinous solid that dissolves in excess hydroxide to form soluble tetrahydroxoaluminate [Al(OH)₄]⁻."
    },
    "hint": {
      "ru": "Выпадение осадка и его последующее растворение в избытке щелочи.",
      "kk": "Тұнбаның түсуі және оның сілтіде қайта еруі.",
      "en": "Precipitation followed by redissolution in excess hydroxide."
    },
    "xpReward": 20
  },
  {
    "id": "qual_25",
    "category": "qualitative_tests",
    "difficulty": "hard",
    "question": {
      "ru": "Какого цвета осадок хромата серебра (Ag₂CrO₄) служит индикатором конца титрования в методе Мора?",
      "kk": "Мор әдісінде титрлеудің аяқталу индикаторы болатын күміс хроматы (Ag₂CrO₄) тұнбасының түсі қандай?",
      "en": "What color is the silver chromate (Ag₂CrO₄) precipitate used as the end-point indicator in Mohr's argentometric titration?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Ярко-зеленый",
          "kk": "Ашық жасыл",
          "en": "Bright green"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Кирпично-красный",
          "kk": "Кірпіш қызыл",
          "en": "Brick-red (red-brown)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Белоснежный",
          "kk": "Аппақ ақ",
          "en": "Snow white"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Черный",
          "kk": "Қара",
          "en": "Jet black"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "После полного осаждения белого AgCl первая лишняя капля Ag⁺ реагирует с K₂CrO₄, давая кирпично-красный осадок Ag₂CrO₄.",
      "kk": "Барлық хлорид AgCl түрінде тұнғаннан кейін күмістің артық тамшысы хроматпен кірпіш-қызыл Ag₂CrO₄ тұнбасын түзеді.",
      "en": "Once all chloride ions precipitate as white AgCl, the first slight excess of silver forms brick-red silver chromate Ag₂CrO₄."
    },
    "hint": {
      "ru": "Красно-коричневый осадок хромата серебра.",
      "kk": "Күміс хроматының қызыл-қоңыр тұнбасы.",
      "en": "Reddish-brown silver chromate precipitate."
    },
    "xpReward": 25
  },
  {
    "id": "qual_26",
    "category": "qualitative_tests",
    "difficulty": "easy",
    "question": {
      "ru": "О чем свидетельствует быстрое обесцвечивание фиолетового подкисленного раствора перманганата калия (KMnO₄)?",
      "kk": "Қышқылданған күлгін түсті калий перманганаты (KMnO₄) ерітіндісінің лезде түссізденуі нені білдіреді?",
      "en": "What does the rapid decolorization of an acidified purple potassium permanganate (KMnO₄) solution indicate?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "О присутствии благородных газов",
          "kk": "Инертті газдардың бар екенін",
          "en": "Presence of noble gases"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "О наличии веществ-восстановителей (например, Fe²⁺, SO₂ или непредельных связей)",
          "kk": "Тотықсыздандырғыш заттардың бар екенін (мысалы, Fe²⁺, SO₂ немесе қос байланыстар)",
          "en": "Presence of reducing agents (e.g. Fe²⁺, SO₂, or unsaturated double/triple bonds)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "О наличии алмазной пыли",
          "kk": "Алмас шаңының бар екенін",
          "en": "Presence of diamond dust"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "О том, что раствор закипел",
          "kk": "Ерітіндінің қайнағанын",
          "en": "That the liquid boiled away"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Фиолетовый ион MnO₄⁻ в кислой среде восстанавливается до практически бесцветного катиона Mn²⁺.",
      "kk": "Күлгін MnO₄⁻ ионы қышқыл ортада тотықсызданып, түссіз дерлік Mn²⁺ катионына айналады.",
      "en": "Intense purple permanganate MnO₄⁻ is reduced by active reductants to nearly colorless Mn²⁺ in acidic conditions."
    },
    "hint": {
      "ru": "Перманганат восстанавливается в бесцветный марганец(II).",
      "kk": "Перманганат түссіз марганец(II)-ге дейін тотықсызданады.",
      "en": "Permanganate is reduced to colorless Mn²⁺."
    },
    "xpReward": 15
  },
  {
    "id": "qual_27",
    "category": "qualitative_tests",
    "difficulty": "easy",
    "question": {
      "ru": "Как в лабораторных условиях проверяют чистоту собранного водорода (H₂)?",
      "kk": "Зертханада жиналған сутек (H₂) газының тазалығын қалай тексереді?",
      "en": "How is the purity of collected hydrogen gas (H₂) verified in the laboratory?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "По запаху сладкой карамели",
          "kk": "Тәтті карамель иісі арқылы",
          "en": "By its sweet caramel fragrance"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "По появлению густого зеленого дыма",
          "kk": "Қою жасыл түтін шығуымен",
          "en": "By generating thick green smoke"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Подносят горящую лучинку к пробирке: чистый водород сгорает с глухим мягким звуком «пах», а в смеси с воздухом — с громким лающим хлопком",
          "kk": "Жанып тұрған шырпыны тақау: таза сутек жай ғана «пах» етіп дыбыссыз жанады, ал ауамен қоспада қатты шәуілдеген жарылыс береді",
          "en": "Bring a lighted splint to the inverted tube: pure H₂ burns with a gentle pop, while explosive mixture with air makes a loud barking pop"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "По изменению цвета стекла пробирки на черный",
          "kk": "Пробирка әйнегінің қара түске боялуымен",
          "en": "By the glass turning black"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Смесь 2H₂ + O₂ (гремучий газ) взрывается с характерным лающим резким хлопком. Чистый водород горит спокойно.",
      "kk": "Сутек пен ауа қоспасы (гүрлеуік газ) қатты шәуілдеген дыбыспен жарылады, ал таза газ жұмсақ жанады.",
      "en": "Impure hydrogen mixed with air detonates with a sharp whistle/barking sound, while pure hydrogen ignites with a quiet gentle pop."
    },
    "hint": {
      "ru": "Характерный хлопок («гремучий газ»).",
      "kk": "Тән шәуілдеген дыбыс немесе «гүрлеуік газ» хлопогы.",
      "en": "Distinctive barking pop of oxyhydrogen gas."
    },
    "xpReward": 15
  },
  {
    "id": "qual_28",
    "category": "qualitative_tests",
    "difficulty": "easy",
    "question": {
      "ru": "Что происходит с тлеющей деревянной лучинкой, внесенной в сосуд с чистым кислородом (O₂)?",
      "kk": "Таза оттекпен (O₂) толтырылған сауытқа шоқтанған ағаш шыбықты салғанда не болады?",
      "en": "What happens to a glowing wooden splint placed into a vessel filled with pure oxygen (O₂)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Она с шипением гаснет",
          "kk": "Ол быжылдап өшіп қалады",
          "en": "It is instantly extinguished"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Она плавится в жидкий углерод",
          "kk": "Ол сұйық көміртекке балқиды",
          "en": "It melts into liquid carbon"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Она взрывается с осколками",
          "kk": "Ол жарылып быт-шыт болады",
          "en": "It shatters violently"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Она мгновенно ярко вспыхивает пламенем",
          "kk": "Ол лезде жарқырап лап етіп жанады",
          "en": "It instantly reignites with a bright flame"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Кислород активно поддерживает горение: концентрация O₂ приближается к 100%, скорость окисления резко возрастает, и уголек вспыхивает ярким пламенем.",
      "kk": "Оттек жануды күшті қолдайды: 100% оттекте тотығу жылдамдығы күрт өсіп, шоқтанған шырпы лаулап жанады.",
      "en": "High oxygen concentration accelerates oxidation dramatically, causing a glowing ember to burst back into an open flame."
    },
    "hint": {
      "ru": "Вспыхивание тлеющей лучинки.",
      "kk": "Шоқтанған шырпының лап етіп жануы.",
      "en": "A glowing splint bursts into flame."
    },
    "xpReward": 15
  },
  {
    "id": "qual_29",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Каким характерным пламенем горит на воздухе угарный газ (монооксид углерода, CO)?",
      "kk": "Ауада иіс газы (көміртек монооксиді, CO) қандай тән жалынмен жанады?",
      "en": "What characteristic flame color is observed during the combustion of carbon monoxide (CO) gas?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Ярко-зеленым пламенем",
          "kk": "Ашық жасыл жалынмен",
          "en": "Bright green flame"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Ослепительно-белым пламенем",
          "kk": "Көз қарықтыратын ақ жалынмен",
          "en": "Blinding white flame"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Коптящим темно-красным пламенем",
          "kk": "Күйелі қою қызыл жалынмен",
          "en": "Sooty dark red flame"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Бледно-голубым (синим) пламенем",
          "kk": "Бозғылт көгілдір (көк) жалынмен",
          "en": "Pale blue flame"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Угарный газ CO сгорает чистым бледно-синим пламенем: 2CO + O₂ → 2CO₂ (часто наблюдается над раскаленными углями в печи).",
      "kk": "Иіс газы пештегі шоқ үстінде көгілдір жалынмен жанып, көмірқышқыл газына айналады: 2CO + O₂ → 2CO₂.",
      "en": "Carbon monoxide burns cleanly with a faint, characteristic blue flame to form carbon dioxide."
    },
    "hint": {
      "ru": "Синее пламя над раскаленными углями.",
      "kk": "Шоқтың үстіндегі көгілдір жалын.",
      "en": "Faint blue flames dancing over glowing coals."
    },
    "xpReward": 20
  },
  {
    "id": "qual_30",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Как качественно обнаружить озон (O₃) в воздухе с помощью фильтровальной бумаги?",
      "kk": "Ауадағы озонды (O₃) сүзгі қағазының көмегімен сапалық тұрғыдан қалай анықтайды?",
      "en": "How is ozone (O₃) detected qualitatively using treated filter paper?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Бумага загорается синим пламенем",
          "kk": "Қағаз көк жалынмен өртенеді",
          "en": "Paper ignites spontaneously"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Бумага растворяется в воздухе",
          "kk": "Қағаз ауада еріп кетеді",
          "en": "Paper dissolves into air"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Бумага становится металлической",
          "kk": "Қағаз металға айналады",
          "en": "Paper turns metallic"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Иодокрахмальная бумага синеет за счет окисления иодида до йода: 2KI + O₃ + H₂O → 2KOH + I₂ + O₂",
          "kk": "Йод-крахмал қағазы көгереді, өйткені иодид йодқа дейін тотығады: 2KI + O₃ + H₂O → 2KOH + I₂ + O₂",
          "en": "Moist starch-iodide paper turns blue because ozone oxidizes iodide to free iodine: 2KI + O₃ + H₂O → 2KOH + I₂ + O₂"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Озон — мощный окислитель. Он окисляет бесцветный иодид-ион I⁻ в свободный йод I₂, который немедленно дает темно-синее окрашивание с крахмалом.",
      "kk": "Озон күшті тотықтырғыш болып, иодидтен бос иодты бөліп шығарады, ал иод крахмалмен қара-көк түс береді.",
      "en": "Ozone rapidly oxidizes I⁻ to elemental I₂, which forms the hallmark blue inclusion complex with starch."
    },
    "hint": {
      "ru": "Иодокрахмальная бумага.",
      "kk": "Йод-крахмал қағазының көгеруі.",
      "en": "Starch-iodide test paper."
    },
    "xpReward": 20
  },
  {
    "id": "qual_31",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Для качественного обнаружения каких элементов в органических веществах служит проба Бельштейна (на прокаленной медной проволоке)?",
      "kk": "Қыздырылған мыс сымда жүргізілетін Бельштейн сынамасы органикалық заттардағы қай элементтерді анықтауға арналған?",
      "en": "Which elements in organic compounds are detected by the Beilstein flame test on a glowing copper wire?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Галогенов (хлор, бром, йод) — появление изумрудно-зеленого пламени",
          "kk": "Галогендерді (хлор, бром, йод) — зүбаржат жасыл жалын пайда болуы",
          "en": "Halogens (chlorine, bromine, iodine) — emergence of an emerald-green flame"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Азота и фосфора",
          "kk": "Азот пен фосфорды",
          "en": "Nitrogen and phosphorus"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Кислорода и серы",
          "kk": "Оттек пен күкіртті",
          "en": "Oxygen and sulfur"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Только кремния",
          "kk": "Тек кремнийді",
          "en": "Only silicon"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Органические галогениды реагируют с оксидом меди на проволоке с образованием летучих галогенидов Cu(II), окрашивающих пламя в изумрудно-зеленый цвет.",
      "kk": "Галогенді органика мыспен әрекеттесіп ұшқыш галогенид береді, ол жалынды жарқын жасыл түске бояйды.",
      "en": "Thermal decomposition on copper oxide forms volatile copper halides, yielding a vibrant green flame indicating halogens."
    },
    "hint": {
      "ru": "Тест на галогены с зеленой вспышкой.",
      "kk": "Галогендерді жасыл жалынмен табу.",
      "en": "Green flame diagnostic for halogens."
    },
    "xpReward": 20
  },
  {
    "id": "qual_32",
    "category": "qualitative_tests",
    "difficulty": "hard",
    "question": {
      "ru": "Почему черный осадок сульфида меди(II) CuS не растворяется даже в кипящей концентрированной соляной кислоте?",
      "kk": "Неліктен мыс(II) сульфидінің (CuS) қара тұнбасы тіпті қайнаған концентрлі тұз қышқылында да ерімейді?",
      "en": "Why does black copper(II) sulfide (CuS) precipitate fail to dissolve even in boiling concentrated hydrochloric acid?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "CuS состоит из чистого золота",
          "kk": "CuS таза алтыннан тұрады",
          "en": "CuS is composed of pure gold"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Произведение растворимости CuS ничтожно мало (ПР ≈ 10⁻³⁶), поэтому концентрации H⁺ недостаточно для смещения равновесия",
          "kk": "CuS ерігіштік көбейтіндісі өте аз (ПР ≈ 10⁻³⁶), сондықтан H⁺ иондары оны ерітуге жеткіліксіз",
          "en": "The solubility product of CuS is exceptionally tiny (Ksp ≈ 10⁻³⁶), making non-oxidizing H⁺ incapable of dissolving it"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Тұз қышқылы мыспен әрекеттеспейді",
          "kk": "HCl мыспен ешқашан қосылмайды",
          "en": "HCl reacts only with nonmetals"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Осадок мгновенно испаряется",
          "kk": "Тұнба лезде ұшып кетеді",
          "en": "The precipitate vaporizes instantly"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Для растворения столь труднорастворимого осадка требуется окисление сульфидной серы, поэтому CuS растворяется только в горячей азотной кислоте (HNO₃).",
      "kk": "CuS тек тотықтырғыш қышқылдарда (ыстық азот қышқылында) күкіртті тотықтыру арқылы ғана ериді.",
      "en": "Only an oxidizing acid like hot concentrated HNO₃ can dissolve CuS by oxidizing the sulfide ion to elemental sulfur or sulfate."
    },
    "hint": {
      "ru": "Астрономически малое произведение растворимости.",
      "kk": "Өте төмен ерігіштік көбейтіндісі.",
      "en": "Extremely low solubility product."
    },
    "xpReward": 25
  },
  {
    "id": "qual_33",
    "category": "qualitative_tests",
    "difficulty": "easy",
    "question": {
      "ru": "Каков органолептический признак выделения сернистого газа (SO₂) при действии кислот на сульфиты (SO₃²⁻)?",
      "kk": "Сульфиттерге (SO₃²⁻) қышқыл қосқанда күкіртті газдың (SO₂) бөлінуі қандай өзіне тән белгімен анықталады?",
      "en": "What organoleptic property identifies sulfur dioxide gas (SO₂) released by acidifying sulfites?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Запах тухлых яиц",
          "kk": "Шіріген жұмыртқа иісі",
          "en": "Rotten eggs odor"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Резкий, удушливый запах загорающейся серной спички",
          "kk": "Тұтанған күкірт сіріңкесінің өткір, тұншықтырғыш иісі",
          "en": "Choking, sharp smell of a burning sulfur match"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Сладкий яблочный аромат",
          "kk": "Тәтті алма хош иісі",
          "en": "Sweet apple scent"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Запах свежескошенной травы",
          "kk": "Жаңа шабылған шөп иісі",
          "en": "Freshly cut grass aroma"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "SO₂ имеет характерный удушливый запах горящей серы (спичек). (Запах тухлых яиц характерен для сероводорода H₂S).",
      "kk": "SO₂ газы жанып жатқан күкіртті сіріңкенің тұншықтырғыш иісімен бірден танылады.",
      "en": "Sulfur dioxide exhibits the unmistakable acrid, choking scent of struck sulfur matches, unlike H₂S which smells of rotten eggs."
    },
    "hint": {
      "ru": "Запах горящей серной головки спички.",
      "kk": "Жанып жатқан күкіртті сіріңке иісі.",
      "en": "Smell of striking a match."
    },
    "xpReward": 15
  },
  {
    "id": "qual_34",
    "category": "qualitative_tests",
    "difficulty": "easy",
    "question": {
      "ru": "Какой газ с крайне отталкивающим запахом «тухлых яиц» выделяется при действии кислот на сульфиды металлов (например, FeS)?",
      "kk": "Металл сульфидтеріне (мысалы, FeS) қышқыл құйғанда «шіріген жұмыртқа» иісті қандай газ бөлінеді?",
      "en": "Which extremely toxic gas with the notorious stench of 'rotten eggs' is liberated by acidifying iron(II) sulfide (FeS)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Аммиак (NH₃)",
          "kk": "Аммиак (NH₃)",
          "en": "Ammonia (NH₃)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Углекислый газ (CO₂)",
          "kk": "Көмірқышқыл газы (CO₂)",
          "en": "Carbon dioxide (CO₂)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Сероводород (H₂S)",
          "kk": "Күкіртсутек (H₂S)",
          "en": "Hydrogen sulfide (H₂S)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Хлороводород (HCl)",
          "kk": "Хлорсутек (HCl)",
          "en": "Hydrogen chloride (HCl)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "FeS + 2HCl → FeCl₂ + H₂S↑. Газ H₂S ядовит и обладает сильнейшим запахом разлагающихся серосодержащих белков (тухлых яиц).",
      "kk": "FeS + 2HCl → FeCl₂ + H₂S↑. H₂S күкіртті ақуыздардың шіруінен түзілетін шіріген жұмыртқа иісті улы газ.",
      "en": "Hydrogen sulfide (H₂S) gas is instantly identifiable by its foul stench of decaying protein/rotten eggs."
    },
    "hint": {
      "ru": "Формула H₂S.",
      "kk": "Формуласы H₂S.",
      "en": "Formula H₂S."
    },
    "xpReward": 15
  },
  {
    "id": "qual_35",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Какое окрашивание дает концентрированная азотная кислота (HNO₃) при попадании на кожу или белки, содержащие ароматические аминокислоты (ксантопротеиновая реакция)?",
      "kk": "Концентрлі азот қышқылы теріге немесе құрамында ароматты аминқышқылдары бар ақуыздарға тигенде қандай түс береді (ксантопротеин реакциясы)?",
      "en": "What coloration is produced when concentrated HNO₃ contacts skin or proteins with aromatic rings (xanthoproteic reaction)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Ярко-синее окрашивание",
          "kk": "Ашық көк түс",
          "en": "Bright blue staining"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Черное обугливание",
          "kk": "Қара көмірлену",
          "en": "Black charring"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Стойкое ярко-желтое окрашивание (переходящее в оранжевое со щелочью)",
          "kk": "Тұрақты ашық сары түс (сілті қосқанда қызғылт-сарыға ауысады)",
          "en": "Persistent bright yellow staining (turning orange with alkali)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Снежно-белое обесцвечивание",
          "kk": "Аппақ түссіздену",
          "en": "Snow white bleaching"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "HNO₃ нитрует бензольные кольца тирозина и триптофана с образованием желтых нитросоединений («ксантос» по-гречески — желтый).",
      "kk": "Азот қышқылы ақуыздардағы ароматты сақиналарды нитрлеп, сары түсті нитроқосылыстар түзеді («ксантос» — грекше сары).",
      "en": "Nitration of aromatic amino acid rings (phenylalanine, tyrosine) forms yellow polynitro adducts, hence 'xanthoproteic'."
    },
    "hint": {
      "ru": "«Ксанто» означает «желтый».",
      "kk": "«Ксанто» грек тілінде «сары» дегенді білдіреді.",
      "en": "'Xantho' translates to yellow in Greek."
    },
    "xpReward": 20
  },
  {
    "id": "qual_36",
    "category": "qualitative_tests",
    "difficulty": "hard",
    "question": {
      "ru": "Какое соединение бора при поджигании спиртового раствора горит красивым изумрудно-зеленым пламенем?",
      "kk": "Спирттік ерітіндіні жаққанда әдемі зүбаржат-жасыл жалынмен жанатын бор қосылысы қандай?",
      "en": "Which volatile boron ester burns with an unmistakable, brilliant emerald-green flame?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Нитрид бора",
          "kk": "Бор нитриді",
          "en": "Boron nitride"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Карбид бора",
          "kk": "Бор карбиді",
          "en": "Boron carbide"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Триметилборат (или триэтилборат) — (CH₃O)₃B",
          "kk": "Триметилборат (немесе триэтилборат) — (CH₃O)₃B",
          "en": "Trimethyl borate (or triethyl borate) — (CH₃O)₃B"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Борогидрид натрия",
          "kk": "Натрий борогидриді",
          "en": "Sodium borohydride"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "При взаимодействии борной кислоты H₃BO₃ со спиртом в присутствии H₂SO₄ образуется эфир (RO)₃B, горящий ярко-зеленым пламенем.",
      "kk": "Бор қышқылы мен спирт әрекеттескенде түзілетін күрделі эфир жасыл жалынмен жанады.",
      "en": "Esterification of boric acid with alcohols generates volatile alkyl borates that burn with a striking emerald-green flame."
    },
    "hint": {
      "ru": "Сложный эфир борной кислоты и спирта.",
      "kk": "Бор қышқылы мен спирттің күрделі эфирі.",
      "en": "Ester of boric acid and alcohol."
    },
    "xpReward": 25
  },
  {
    "id": "qual_37",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Для качественного обнаружения каких соединений (в биохимии и криминалистике при поиске отпечатков пальцев) используется нингидрин?",
      "kk": "Биохимияда және криминалистикада саусақ іздерін табу үшін нингидрин қандай қосылыстарды анықтауға қолданылады?",
      "en": "Which biochemical molecules does ninhydrin sensitively detect, widely utilized in forensic fingerprint visualization?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Насыщенные углеводороды",
          "kk": "Қаныққан көмірсутектер",
          "en": "Saturated alkanes"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Свободные аминокислоты и пептиды (появление пурпурно-синей окраски Руэмана)",
          "kk": "Бос аминқышқылдары мен пептидтер (Руэман күлгін-көк бояуының түзілуі)",
          "en": "Free amino acids and peptides (forming Ruhemann's purple)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Простые эфиры",
          "kk": "Жай эфирлер",
          "en": "Simple ethers"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Минеральные кислоты",
          "kk": "Минералды қышқылдар",
          "en": "Mineral acids"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Нингидрин реагирует с первичными аминогруппами аминокислот с образованием сложного фиолетово-синего красителя — пурпура Руэмана.",
      "kk": "Нингидрин аминқышқылдардың амин тобымен әрекеттесіп, көз тартарлық күлгін-көк Руэман бояуын береді.",
      "en": "Ninhydrin reacts with primary α-amino groups to generate an intense Ruhemann's purple chromophore."
    },
    "hint": {
      "ru": "Аминокислоты и белковые следы пальцев.",
      "kk": "Аминқышқылдары мен саусақ іздері.",
      "en": "Amino acids in fingerprint sweat residue."
    },
    "xpReward": 20
  },
  {
    "id": "qual_38",
    "category": "qualitative_tests",
    "difficulty": "hard",
    "question": {
      "ru": "Какой осадок желтого цвета образуется при добавлении хромата калия K₂CrO₄ к раствору соли бария?",
      "kk": "Барий тұзының ерітіндісіне калий хроматын (K₂CrO₄) қосқанда қандай сары түсті тұнба түзіледі?",
      "en": "What yellow precipitate forms upon adding potassium chromate (K₂CrO₄) to a barium salt solution?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Осадок оксида хрома(III)",
          "kk": "Хром(III) оксидінің тұнбасы",
          "en": "Chromium(III) oxide"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Хромат бария (BaCrO₄), нерастворимый в уксусной кислоте",
          "kk": "Сірке қышқылында ерімейтін барий хроматы (BaCrO₄)",
          "en": "Barium chromate (BaCrO₄), insoluble in dilute acetic acid"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Дихромат бария",
          "kk": "Барий дихроматы",
          "en": "Barium dichromate"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Черный осадок хрома",
          "kk": "Қара хром тұнбасы",
          "en": "Black chromium metal"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Ba²⁺ + CrO₄²⁻ → BaCrO₄↓ (желтый). В отличие от хроматов кальция и стронция, BaCrO₄ не растворяется в уксусной кислоте CH₃COOH.",
      "kk": "BaCrO₄ ашық сары тұнбасы сірке қышқылында ерімейтіндіктен, оны кальций мен стронцийден бөліп алу үшін қолданады.",
      "en": "Barium chromate precipitates as an insoluble yellow solid that resists dilute acetic acid, differentiating Ba²⁺ from Sr²⁺ and Ca²⁺."
    },
    "hint": {
      "ru": "Желтый осадок, не растворяющийся в уксусе.",
      "kk": "Сірке қышқылында ерімейтін сары тұнба.",
      "en": "Yellow precipitate insoluble in vinegar acid."
    },
    "xpReward": 25
  },
  {
    "id": "qual_39",
    "category": "qualitative_tests",
    "difficulty": "easy",
    "question": {
      "ru": "Какое вещество чернеет от малейших следов сероводорода H₂S в воздухе и используется в виде индикаторных полосок?",
      "kk": "Ауадағы күкіртсутектің (H₂S) өте аз мөлшерінен лезде қарайып, сынақ қағазы ретінде қолданылатын зат қандай?",
      "en": "Which test paper darkens instantaneously in the presence of trace H₂S gas in air?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Лакмусовая бумага",
          "kk": "Лакмус қағазы",
          "en": "Litmus paper"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Обычная туалетная бумага",
          "kk": "Кәдімгі қағаз",
          "en": "Plain tissue paper"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Свинцовая бумага (пропитанная ацетатом свинца (CH₃COO)₂Pb)",
          "kk": "Қорғасын ацетатымен ((CH₃COO)₂Pb) сіңдірілген қағаз",
          "en": "Lead acetate paper (impregnated with (CH₃COO)₂Pb)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Медная фольга",
          "kk": "Мыс фольгасы",
          "en": "Copper foil"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Ацетат свинца реагирует с H₂S с мгновенным образованием черного сульфида свинца: Pb²⁺ + H₂S → PbS↓ + 2H⁺.",
      "kk": "Қорғасын ацетаты H₂S газымен жанасқанда лезде қара PbS түзіліп, қағаз қараяды.",
      "en": "Lead acetate reacts with gaseous H₂S to produce a dark metallic sheen of lead(II) sulfide (PbS)."
    },
    "hint": {
      "ru": "Бумага с солью свинца.",
      "kk": "Қорғасын тұзы сіңген қағаз.",
      "en": "Paper coated with a lead salt."
    },
    "xpReward": 15
  },
  {
    "id": "qual_40",
    "category": "qualitative_tests",
    "difficulty": "medium",
    "question": {
      "ru": "Какое комплексное соединение образуется при растворении белого осадка гидроксида цинка Zn(OH)₂ в избытке раствора гидроксида натрия?",
      "kk": "Мырыш гидроксидінің Zn(OH)₂ ақ тұнбасы натрий гидроксидінің артық мөлшерінде ерігенде қандай кешенді қосылыс түзіледі?",
      "en": "Which soluble complex is formed when white amphoteric zinc hydroxide Zn(OH)₂ dissolves in excess NaOH?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Тетрагидроксоцинкат натрия — Na₂[Zn(OH)₄]",
          "kk": "Натрий тетрагидроксоцинкаты — Na₂[Zn(OH)₄]",
          "en": "Sodium tetrahydroxozincate — Na₂[Zn(OH)₄]"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Хлорид цинка — ZnCl₂",
          "kk": "Мырыш хлориді — ZnCl₂",
          "en": "Zinc chloride — ZnCl₂"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Оксид цинка — ZnO",
          "kk": "Мырыш оксиді — ZnO",
          "en": "Zinc oxide — ZnO"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Сульфат цинка — ZnSO₄",
          "kk": "Мырыш сульфаты — ZnSO₄",
          "en": "Zinc sulfate — ZnSO₄"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Zn(OH)₂ амфотерен и растворяется в щелочах с образованием прозрачного раствора гидроксоцинката: Zn(OH)₂ + 2NaOH → Na₂[Zn(OH)₄].",
      "kk": "Zn(OH)₂ амфотерлі болғандықтан сілтіде еріп, мөлдір Na₂[Zn(OH)₄] кешенді тұзын береді.",
      "en": "Amphoteric Zn(OH)₂ dissolves smoothly in excess base via conversion into the soluble hydroxozincate complex Na₂[Zn(OH)₄]."
    },
    "hint": {
      "ru": "Гидроксокомплекс цинка.",
      "kk": "Мырыштың гидроксокешені.",
      "en": "Hydroxo complex of zinc."
    },
    "xpReward": 20
  },
  {
    "id": "kz_1",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "Кто был выдающимся ученым-геологом, первым президентом Академии наук Казахской ССР и первооткрывателем колоссальных медных богатств Жезказгана?",
      "kk": "Қазақ КСР Ғылым академиясының тұңғыш президенті, Жезқазғанның орасан зор мыс кенін ашқан аса көрнекті ғалым кім?",
      "en": "Who was the eminent geologist, first president of the Kazakh Academy of Sciences, and discoverer of the giant Zhezkazgan copper deposits?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Евней Букетов",
          "kk": "Евней Бөкетов",
          "en": "Evney Buketov"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Дмитрий Сокольский",
          "kk": "Дмитрий Сокольский",
          "en": "Dmitry Sokolsky"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Шафик Чокин",
          "kk": "Шапық Шөкин",
          "en": "Shafik Chokin"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Каныш Имантаевич Сатпаев",
          "kk": "Қаныш Имантайұлы Сәтбаев",
          "en": "Kanysh Imantaevich Satpayev"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Каныш Сатпаев обосновал мировое значение Жезказганского медного месторождения и основал Академию наук Казахстана в 1946 году.",
      "kk": "Қаныш Сәтбаев Жезқазған мыс кен орнының әлемдік маңызын дәлелдеп, 1946 жылы Қазақстан Ғылым академиясын құрды.",
      "en": "Kanysh Satpayev proved the immense scale of the Zhezkazgan copper basin and established the Kazakh Academy of Sciences."
    },
    "hint": {
      "ru": "Его имя носит крупнейший технический университет (Satbayev University) и малая планета.",
      "kk": "Оның есімі еліміздің бас техникалық университетіне берілген.",
      "en": "Satbayev University in Almaty is named after him."
    },
    "xpReward": 15
  },
  {
    "id": "kz_2",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "Какое место в мире занимает Казахстан по объемам добычи природного урана (более 40% мирового рынка)?",
      "kk": "Табиғи уран өндіру көлемі бойынша Қазақстан әлемде нешінші орын алады (әлемдік нарықтың 40%-дан астамы)?",
      "en": "What global rank does Kazakhstan hold in the production of natural uranium (over 40% of the world total)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "5-е место",
          "kk": "5-орын",
          "en": "5th place"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "1-е место в мире",
          "kk": "Әлемде 1-орын",
          "en": "1st place globally"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "10-е место",
          "kk": "10-орын",
          "en": "10th place"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "25-е место",
          "kk": "25-орын",
          "en": "25th place"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Казахстан является абсолютным мировым лидером по добыче урана с 2009 года, обеспечивая свыше 40% мировой атомной энергетики.",
      "kk": "Қазақстан 2009 жылдан бері әлемдік уран өндірісінің көшбасшысы болып, әлем нарығының 40%-дан астамын қамтамасыз етеді.",
      "en": "Kazakhstan has been the world's leading uranium producer since 2009, supplying over 40% of global demand."
    },
    "hint": {
      "ru": "Безоговорочный лидер планеты.",
      "kk": "Әлем бойынша көшбасшы.",
      "en": "Uncontested global leader."
    },
    "xpReward": 15
  },
  {
    "id": "kz_3",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какая химическая особенность попутного газа гигантского Тенгизского нефтяного месторождения требует масштабной сероочистки?",
      "kk": "Алып Теңіз мұнай кен орнының ілеспе газындағы қандай химиялық ерекшелік ауқымды күкірт тазартуды талап етеді?",
      "en": "What chemical characteristic of Tengiz oil field associated gas requires massive sulfur recovery facilities?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Высокое содержание высокотоксичного сероводорода (H₂S до 15–18%)",
          "kk": "Аса улы күкіртсутектің (H₂S 15–18%-ға дейін) өте жоғары мөлшері",
          "en": "High content of extremely toxic hydrogen sulfide (H₂S up to 15–18%)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Наличие радиоактивного гелия",
          "kk": "Радиоактивті гелийдің болуы",
          "en": "Presence of radioactive helium"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Высокая концентрация чистого хлора",
          "kk": "Таза хлордың жоғары концентрациясы",
          "en": "High chlorine concentration"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Содержание паров ртути",
          "kk": "Сынап буларының болуы",
          "en": "Mercury vapor saturation"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Нефть Тенгиза залегает на огромной глубине под высоким пластовым давлением и содержит до 16% H₂S, из которого на заводе получают миллионы тонн элементарной серы чистотой 99,99%.",
      "kk": "Теңіз мұнайы терең қабатта жоғары қысымда жатыр және құрамында 16%-ға дейін H₂S бар, одан зауытта таза күкірт өндіріледі.",
      "en": "Tengiz crude contains exceptionally high levels of sour gas (up to 18% H₂S), which is converted via the Claus process into pure elemental sulfur."
    },
    "hint": {
      "ru": "Газ с запахом тухлых яиц, опасный для оборудования и человека.",
      "kk": "Құрамында өте қауіпті күкіртсутек газы көп.",
      "en": "Dangerous sour gas containing sulfur and hydrogen."
    },
    "xpReward": 20
  },
  {
    "id": "kz_4",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какую высокотехнологичную аэрокосмическую продукцию производит Усть-Каменогорский титано-магниевый комбинат (УКТМК)?",
      "kk": "Өскемен титан-магний комбинаты (ӨТМК) қандай жоғары технологиялық аэроғарыштық өнім өндіреді?",
      "en": "What high-tech aerospace material is produced by the Ust-Kamenogorsk Titanium and Magnesium Plant (UKTMP)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Чистое золото высшей пробы",
          "kk": "Ең жоғары сапалы таза алтын",
          "en": "High-carat refined gold"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Титановую губку и слитки для мирового авиастроения (Boeing, Airbus)",
          "kk": "Әлемдік авиақұрылысқа арналған титан кеуегі мен құймаларын (Boeing, Airbus)",
          "en": "Titanium sponge and aerospace ingots for Boeing and Airbus"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Ядерные боеголовки",
          "kk": "Ядролық оқтұмсықтар",
          "en": "Nuclear warheads"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Пластиковые трубы",
          "kk": "Пластик құбырлар",
          "en": "PVC industrial pipes"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "УКТМК — один из крупнейших мировых вертикально-интегрированных производителей сертифицированного титана для мировой авиакосмической промышленности.",
      "kk": "ӨТМК — әлемдік авиация алпауыттарына (Boeing, Airbus) сертификатталған титан өнімдерін жеткізетін ірі халықаралық өндіруші.",
      "en": "UKTMP is a premier global producer of high-grade aerospace titanium sponge, supplying structural titanium for major jetliners."
    },
    "hint": {
      "ru": "Сверхпрочный легкий космический металл номер 22.",
      "kk": "Ғарыштық және авиациялық ең мықты жеңіл металл.",
      "en": "Strong, light aerospace metal with atomic number 22."
    },
    "xpReward": 20
  },
  {
    "id": "kz_5",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "Для производства какого типа минеральных удобрений служат колоссальные залежи Каратауского бассейна в Жамбылской области?",
      "kk": "Жамбыл облысындағы Қаратау алабының мол қоры минералды тыңайтқыштардың қай түрін өндіруге негіз болады?",
      "en": "Which type of mineral fertilizers is produced from the vast Karatau deposits in Zhambyl region?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Азотные удобрения (селитра)",
          "kk": "Азот тыңайтқыштары (селитра)",
          "en": "Nitrogen fertilizers (nitrates)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Фосфорные удобрения (аммофос, суперфосфат)",
          "kk": "Фосфор тыңайтқыштары (аммофос, суперфосфат)",
          "en": "Phosphate fertilizers (ammophos, superphosphate)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Калийные удобрения",
          "kk": "Калий тыңайтқыштары",
          "en": "Potash fertilizers"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Микроэлементные добавки железа",
          "kk": "Темір қоспалары",
          "en": "Iron micronutrient chelates"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Бассейн Каратау содержит крупнейшие в СНГ запасы фосфоритов, на базе которых в Таразе работает завод «Казфосфат», выпуская желтый фосфор и фосфорные удобрения.",
      "kk": "Қаратау бассейні ТМД-дағы ең ірі фосфорит көзі, оның негізінде «Қазфосфат» сары фосфор мен тыңайтқыштар шығарады.",
      "en": "The Karatau basin holds vast phosphorite ore reserves, fueling major industrial production of yellow phosphorus and phosphate fertilizers."
    },
    "hint": {
      "ru": "Элемент с символом P.",
      "kk": "Символы P болатын элемент.",
      "en": "Element with symbol P."
    },
    "xpReward": 15
  },
  {
    "id": "kz_6",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какое научное направление мирового уровня развил академик Дмитрий Владимирович Сокольский в Алматы?",
      "kk": "Академик Дмитрий Владимирович Сокольский Алматыда әлемдік деңгейдегі қандай ғылыми бағытты дамытты?",
      "en": "Which world-renowned scientific field was pioneered by Academician Dmitry Sokolsky in Almaty?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Квантовая гравитация",
          "kk": "Кванттық гравитация",
          "en": "Quantum gravity"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Синтез полиэтилена высокого давления",
          "kk": "Жоғары қысымды полиэтилен синтезі",
          "en": "High-pressure polyethylene synthesis"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Теория и практика гетерогенного жидкофазного органического катализа",
          "kk": "Гетерогенді сұйықфазалық органикалық катализ теориясы мен практикасы",
          "en": "Theory and practice of heterogeneous liquid-phase organic catalysis"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Фармацевтическое производство антибиотиков",
          "kk": "Антибиотиктер өндірісі",
          "en": "Antibiotics fermentation"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Д.В. Сокольский создал всемирно известную научную школу катализа. Созданный им Институт органического катализа и электрохимии носит его имя.",
      "kk": "Д.В. Сокольский Алматыда органикалық катализ мектебін құрды, ҚР ҒА Органикалық катализ және электрохимия институты оның есімімен аталады.",
      "en": "Dmitry Sokolsky established the Almaty School of Catalysis; the Institute of Organic Catalysis and Electrochemistry carries his name."
    },
    "hint": {
      "ru": "Изучение катализаторов и ускорения реакций.",
      "kk": "Катализаторлар мен химиялық жылдамдықтарды зерттеу.",
      "en": "Study of catalysts and accelerated hydrogenation."
    },
    "xpReward": 20
  },
  {
    "id": "kz_7",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какой ученый-химик и металлург разработал гидрохимические методы извлечения селена и теллура из шламов и возглавлял Карагандинский университет?",
      "kk": "Шламдардан селен мен теллурды бөліп алудың гидрохимиялық әдістерін жасаған және Қарағанды университетін басқарған ғалым кім?",
      "en": "Which chemist and metallurgist pioneered hydrochemical methods for extracting selenium and tellurium from smelter slimes?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Алихан Бокейханов",
          "kk": "Әлихан Бөкейханов",
          "en": "Alikhan Bokeikhanov"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Дмитрий Менделеев",
          "kk": "Дмитрий Менделеев",
          "en": "Dmitri Mendeleev"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Мухтар Ауэзов",
          "kk": "Мұхтар Әуезов",
          "en": "Mukhtar Auezov"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Евней Арыстанович Букетов",
          "kk": "Евней Арыстанұлы Бөкетов",
          "en": "Evney Arystanovich Buketov"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Евней Букетов — крупный ученый в области химии и металлургии халькогенов и халькогенидов. Его имя носит Карагандинский исследовательский университет.",
      "kk": "Евней Бөкетов — халькогендер химиясы мен металлургиясының ірі ғалымы, Қарағанды зерттеу университеті оның құрметіне аталған.",
      "en": "Evney Buketov developed cutting-edge hydrochemical technologies for rare chalcogen recovery; Karaganda University is named in his honor."
    },
    "hint": {
      "ru": "Карагандинский университет носит его имя.",
      "kk": "Қарағанды мемлекеттік университеті оның есімімен аталады.",
      "en": "Karaganda State University bears his name."
    },
    "xpReward": 20
  },
  {
    "id": "kz_8",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какой казахстанский академик получил мировое признание как патриарх нефтехимии и исследователь высоковязких нефтей и природных битумов?",
      "kk": "Қай қазақстандық академик мұнай химиясының атасы және тұтқырлығы жоғары мұнай мен табиғи битумдарды зерттеуші ретінде әлемге танылды?",
      "en": "Which Kazakh academician is revered as a patriarch of petroleum chemistry and leader in heavy oil and natural bitumen refining?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Надир Каримович Надиров",
          "kk": "Нәдір Кәрімұлы Нәдіров",
          "en": "Nadir Karimovich Nadirov"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Каныш Сатпаев",
          "kk": "Қаныш Сәтбаев",
          "en": "Kanysh Satpayev"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Кемел Токаев",
          "kk": "Кемел Тоқаев",
          "en": "Kemel Tokayev"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Абылкас Сагинов",
          "kk": "Әбілқас Сағынов",
          "en": "Abylkas Saginov"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Н.К. Надиров — выдающийся химик-нефтяник Казахстана, основатель научной школы каталитической переработки углеводородного сырья и тяжелых нефтей.",
      "kk": "Н.К. Нәдіров — Қазақстан мұнай химиясының негізін қалаушылардың бірі, жоғары тұтқырлы мұнайды қайта өңдеу ғылымының көшбасшысы.",
      "en": "Nadir Nadirov pioneered comprehensive catalytic processing of heavy crudes and bituminous sands in Kazakhstan."
    },
    "hint": {
      "ru": "Автор фундаментальных трудов по химии казахстанской нефти.",
      "kk": "Қазақстанның мұнайы бойынша іргелі еңбектердің авторы.",
      "en": "Author of fundamental monographs on Kazakh petroleum chemistry."
    },
    "xpReward": 20
  },
  {
    "id": "kz_9",
    "category": "kz_science",
    "difficulty": "hard",
    "question": {
      "ru": "Какую фундаментальную теорию создал профессор Казахского государственного университета Михаил Ильич Усанович в 1939 году?",
      "kk": "1939 жылы Қазақ мемлекеттік университетінің профессоры Михаил Ильич Усанович қандай іргелі теорияны тұжырымдады?",
      "en": "Which fundamental theory was developed in 1939 by Professor Mikhail Usanovich at the Kazakh State University in Almaty?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Обобщенная теория кислот и оснований (включающая кислотно-основные и окислительно-восстановительные процессы)",
          "kk": "Қышқылдар мен негіздердің жалпылама теориясы (қышқылдық-негіздік және тотығу-тотықсыздану процестерін біріктіретін)",
          "en": "Generalized Usanovich Acid-Base Theory (encompassing both protonic, Lewis, and redox systems)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Теория цепных разветвленных реакций",
          "kk": "Тармақталған тізбекті реакциялар теориясы",
          "en": "Chain branched reaction theory"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Теория относительности",
          "kk": "Салыстырмалылық теориясы",
          "en": "Theory of relativity"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Теория суперсимметрии",
          "kk": "Суперсимметрия теориясы",
          "en": "Supersymmetry theory"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "По Усановичу, кислота — это вещество, отдающее катионы (включая протон) или принимающее электроны, что объединило химию растворов с окислительно-восстановительными реакциями.",
      "kk": "Усанович қышқылдар мен негіздерге ең кең анықтама беріп, барлық қышқыл-негіз және тотығу-тотықсыздану реакцияларын бірыңғай жүйеге келтірді.",
      "en": "The Usanovich theory defines acids as species that donate cations or accept electrons, unifying acid-base chemistry with redox phenomena."
    },
    "hint": {
      "ru": "Теория кислот и оснований, созданная в Алматы.",
      "kk": "Алматыда жасалған қышқылдар мен негіздер теориясы.",
      "en": "The universal acid-base concept formulated in Almaty."
    },
    "xpReward": 25
  },
  {
    "id": "kz_10",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "По запасам какого ценного сырья для металлургии и производства ферросплавов Актюбинская область (Хромтау) занимает ведущее место в мире?",
      "kk": "Металлургия мен ферроқорытпалар өндірісіне қажетті қандай құнды шикізат қоры бойынша Ақтөбе облысы (Хромтау) әлемде алдыңғы орында?",
      "en": "Which essential metallurgical ore reserves place the Aktobe region (Kromtau) among the world's richest global producers?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Олово",
          "kk": "Қалайы",
          "en": "Tin ore"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Ртуть",
          "kk": "Сынап",
          "en": "Mercury ore"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Хромитовые руды (хром)",
          "kk": "Хромит кендері (хром)",
          "en": "Chromite ores (chromium)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Литий",
          "kk": "Литий",
          "en": "Lithium ore"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Донской ГОК в Хромтау разрабатывает уникальные месторождения хромитов с высочайшим содержанием Cr₂O₃, сырье поставляется на ферросплавные заводы Актобе и Аксу.",
      "kk": "Хромтаудағы Дөң ТКБК ең жоғары сапалы хром кендерін өндіріп, Ақтөбе және Ақсу ферроқорытпа зауыттарын қамтамасыз етеді.",
      "en": "Kromtau holds some of the world's highest-grade chromite deposits, supplying ferrochrome smelting plants in Aktobe and Aksu."
    },
    "hint": {
      "ru": "Название города говорит само за себя — Хромтау.",
      "kk": "Қаланың атының өзі айтып тұрғандай — Хромтау.",
      "en": "The town's name literally means 'Chrome Mountain'."
    },
    "xpReward": 15
  },
  {
    "id": "kz_11",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какой экологически щадящий и экономичный химический метод добычи урана применяется на большинстве месторождений Казахстана?",
      "kk": "Қазақстанның көптеген кен орындарында уран өндіру үшін қандай экологиялық үнемді химиялық әдіс қолданылады?",
      "en": "Which low-cost, environmentally contained chemical extraction method is utilized for uranium mining across Kazakhstan?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Подземное скважинное выщелачивание (ПСВ) раствором серной кислоты",
          "kk": "Күкірт қышқылы ерітіндісімен жерасты ұңғымалық шаймалау (ЖҰШ)",
          "en": "In-situ recovery (ISR) using dilute sulfuric acid leaching solutions"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Открытый карьерный взрывной метод",
          "kk": "Ашық карьерлік жарылыс әдісі",
          "en": "Open-pit dynamite blasting"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Плавление руды в доменных печах",
          "kk": "Кенді домна пештерінде балқыту",
          "en": "Blast furnace ore smelting"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Ручная сортировка породы в шахтах",
          "kk": "Шахталарда қолмен сұрыптау",
          "en": "Manual pickaxe extraction in deep shafts"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "ПСВ закачивает слабый раствор H₂SO₄ через нагнетательные скважины, растворяя уран прямо под землей в пласте без подъема породы на поверхность.",
      "kk": "ЖҰШ әдісі бойынша әлсіз қышқыл ерітіндісі жер астына айдалып, уранды тікелей жер астында ерітіп, сорып алады.",
      "en": "In-situ recovery circulates weak sulfuric acid directly through sandstone aquifers to selectively dissolve uranium without digging open pits."
    },
    "hint": {
      "ru": "Выщелачивание через скважины прямо под землей.",
      "kk": "Жер астында ұңғымалар арқылы ерітіп алу.",
      "en": "Dissolving ore underground via boreholes."
    },
    "xpReward": 20
  },
  {
    "id": "kz_12",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какое химическое соединение является конечным продуктом переработки бокситов на Павлодарском алюминиевом заводе?",
      "kk": "Павлодар алюминий зауытында бокситтерді қайта өңдеудің соңғы химиялық өнімі не болып табылады?",
      "en": "What chemical compound is the primary refined product obtained from bauxite at the Pavlodar Aluminum Smelter?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Чистый металлический натрий",
          "kk": "Таза металдық натрий",
          "en": "Pure metallic sodium"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Глинозем (оксид алюминия — Al₂O₃)",
          "kk": "Глинозем (алюминий оксиді — Al₂O₃)",
          "en": "Alumina (aluminum oxide — Al₂O₃)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Сульфат меди",
          "kk": "Мыс сульфаты",
          "en": "Copper sulfate"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Азотная кислота",
          "kk": "Азот қышқылы",
          "en": "Nitric acid"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Павлодарский завод по способу Байера-спекания перерабатывает бокситы Краснооктябрьского месторождения в глинозем Al₂O₃ — сырье для электролиза алюминия.",
      "kk": "Павлодар алюминий зауыты бокситтерден Байер әдісімен таза алюминий оксидін (глинозем Al₂O₃) алады.",
      "en": "Pavlodar processes domestic bauxites via the Bayer sintering route to yield pure metallurgical alumina (Al₂O₃) for smelting into aluminum."
    },
    "hint": {
      "ru": "Белый порошок оксида алюминия.",
      "kk": "Алюминий оксидінің ақ ұнтағы.",
      "en": "White aluminum oxide powder."
    },
    "xpReward": 20
  },
  {
    "id": "kz_13",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "В каком городе расположен старейший нефтеперерабатывающий завод Казахстана, построенный в годы Великой Отечественной войны (1945 г.)?",
      "kk": "Ұлы Отан соғысы жылдары (1945 ж.) салынған Қазақстандағы ең көне мұнай өңдеу зауыты қай қалада орналасқан?",
      "en": "In which city is Kazakhstan's oldest petroleum refinery, commissioned in 1945, located?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Атырау (АНПЗ)",
          "kk": "Атырау (АМӨЗ)",
          "en": "Atyrau (ANPZ)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Алматы",
          "kk": "Алматы",
          "en": "Almaty"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Костанай",
          "kk": "Қостанай",
          "en": "Kostanay"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Петропавловск",
          "kk": "Петропавл",
          "en": "Petropavlovsk"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Атырауский НПЗ был запущен в сентябре 1945 года и сегодня является крупнейшим центром производства моторных топлив и ароматических углеводородов (бензол, параксилол).",
      "kk": "Атырау мұнай өңдеу зауыты 1945 жылы іске қосылған еліміздегі тұңғыш мұнай өңдеу орталығы.",
      "en": "The Atyrau Refinery, commissioned in 1945 on the Caspian coast, is the historic cradle of Kazakh refining and petrochemicals."
    },
    "hint": {
      "ru": "Нефтяная столица Казахстана на реке Урал.",
      "kk": "Жайық бойындағы еліміздің мұнайлы астанасы.",
      "en": "The oil capital of Kazakhstan on the Ural River."
    },
    "xpReward": 15
  },
  {
    "id": "kz_14",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "В каком году Дмитрий Иванович Менделеев открыл фундаментальный Периодический закон химических элементов?",
      "kk": "Дмитрий Иванович Менделеев химиялық элементтердің іргелі Периодтық заңын қай жылы ашты?",
      "en": "In what year did Dmitri Mendeleev discover the Periodic Law of chemical elements?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "1869 год",
          "kk": "1869 жыл",
          "en": "1869"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "1905 год",
          "kk": "1905 жыл",
          "en": "1905"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "1776 год",
          "kk": "1776 жыл",
          "en": "1776"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "1945 год",
          "kk": "1945 жыл",
          "en": "1945"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "1 марта 1869 года Менделеев завершил рукопись первого варианта таблицы «Опыт системы элементов, основанной на их атомном весе и химическом сходстве».",
      "kk": "1869 жылдың 1 наурызында Менделеев элементтердің периодтық жүйесінің алғашқы нұсқасын жасап шықты.",
      "en": "On March 1, 1869, Mendeleev formulated the Periodic Law, organizing elements by atomic mass and recurring valence trends."
    },
    "hint": {
      "ru": "Конец 60-х годов девятнадцатого века.",
      "kk": "XIX ғасырдың 60-жылдарының соңы.",
      "en": "Late 1860s in St. Petersburg."
    },
    "xpReward": 15
  },
  {
    "id": "kz_15",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какой элемент, названный Менделеевым «экаалюминием», был открыт французским химиком Лекоком де Буабодраном в 1875 году?",
      "kk": "Менделеев «экаалюминий» деп болжаған және 1875 жылы француз химигі Лекок де Буабодран ашқан элемент қандай?",
      "en": "Which element, predicted in advance by Mendeleev as 'eka-aluminum', was discovered in 1875 by Lecoq de Boisbaudran?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Скандий (Sc)",
          "kk": "Скандий (Sc)",
          "en": "Scandium (Sc)"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Галлий (Ga)",
          "kk": "Галлий (Ga)",
          "en": "Gallium (Ga)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Германий (Ge)",
          "kk": "Германий (Ge)",
          "en": "Germanium (Ge)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Технеций (Tc)",
          "kk": "Технеций (Tc)",
          "en": "Technetium (Tc)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Менделеев с поразительной точностью предсказал атомную массу, плотность и свойства экаалюминия, который де Буабодран открыл спектрально и назвал галлием (Ga).",
      "kk": "Менделеев экаалюминийдің қасиеттерін алдын ала дәл болжаған, кейін ол ашылып Франция құрметіне галлий (Ga) деп аталды.",
      "en": "Mendeleev accurately calculated the physical and chemical properties of eka-aluminum, discovered four years later as gallium (Ga)."
    },
    "hint": {
      "ru": "Металл, который плавится прямо на ладони (температура плавления 29,8°C).",
      "kk": "Адам алақанында балқитын металл (балқу температурасы 29,8°C).",
      "en": "A metal that melts in human hands at 29.8°C."
    },
    "xpReward": 20
  },
  {
    "id": "kz_16",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какую теорию сформулировал русский ученый Александр Михайлович Бутлеров в 1861 году, ставшую фундаментом современной органической химии?",
      "kk": "1861 жылы орыс ғалымы Александр Михайлович Бутлеров заманауи органикалық химияның іргетасына айналған қандай теорияны ұсынды?",
      "en": "Which theory did Aleksandr Butlerov formulate in 1861, laying the foundation of modern organic chemistry?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Теорию электролитической диссоциации",
          "kk": "Электролиттік диссоциация теориясы",
          "en": "Electrolytic dissociation theory"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Кислородную теорию горения",
          "kk": "Жанудың оттектік теориясы",
          "en": "Oxygen combustion theory"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Квантовую механику атома",
          "kk": "Атомның кванттық механикасы",
          "en": "Quantum mechanics of atoms"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Теорию химического строения органических соединений",
          "kk": "Органикалық қосылыстардың химиялық құрылыс теориясы",
          "en": "Theory of chemical structure of organic compounds"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Бутлеров постулировал: свойства веществ определяются не только их составом, но и порядком химического связывания атомов (строением) и их взаимным влиянием.",
      "kk": "Бутлеров заттардың қасиеттері тек сапалық құрамға ғана емес, атомдардың байланысу ретіне (құрылысына) тәуелді екенін дәлелдеді.",
      "en": "Butlerov proved that molecular properties stem from the connectivity sequence (structure) of atoms, explaining isomerism."
    },
    "hint": {
      "ru": "Порядок соединения атомов в молекуле определяет ее свойства.",
      "kk": "Молекуладағы атомдардың орналасу реті оның қасиетін анықтайды.",
      "en": "Chemical properties depend on atom-to-atom connectivity."
    },
    "xpReward": 20
  },
  {
    "id": "kz_17",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "Какой фундаментальный закон природы сформулировал Михаил Васильевич Ломоносов в 1748 году («Сколько чего у одного тела отнимется, столько присовокупится к другому»)?",
      "kk": "1748 жылы Михаил Васильевич Ломоносов қандай табиғаттың іргелі заңын тұжырымдады?",
      "en": "Which universal physical-chemical conservation law was formulated by Mikhail Lomonosov in 1748?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Закон сохранения массы веществ при химических реакциях",
          "kk": "Химиялық реакциялар кезіндегі зат массасының сақталу заңы",
          "en": "Law of conservation of mass in chemical reactions"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Закон всемирного тяготения",
          "kk": "Бүкіләлемдік тартылыс заңы",
          "en": "Law of universal gravitation"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Закон постоянства состава",
          "kk": "Құрам тұрақтылық заңы",
          "en": "Law of definite proportions"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Закон объемных отношений газов",
          "kk": "Газдардың көлемдік қатынас заңы",
          "en": "Law of combining gas volumes"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Опытами по прокаливанию металлов в запаянных сосудах Ломоносов (а позже Лавуазье) доказал, что масса реагентов всегда в точности равна массе продуктов реакции.",
      "kk": "Дәнекерленген ыдыста металдарды қыздыру арқылы Ломоносов реакцияға дейінгі заттар массасы реакциядан кейінгі өнімдер массасына тең екенін дәлелдеді.",
      "en": "Sealed retort experiments proved that matter is neither created nor destroyed during chemical transformations: mass is conserved."
    },
    "hint": {
      "ru": "Масса веществ до реакции равна массе после реакции.",
      "kk": "Реакцияға түскен заттардың массасы түзілген заттардың массасына тең.",
      "en": "Total mass entering a reaction equals total mass exiting."
    },
    "xpReward": 15
  },
  {
    "id": "kz_18",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "Какую ошибочную средневековую теорию окончательно опроверг французский химик Антуан Лавуазье, доказав решающую роль кислорода в горении?",
      "kk": "Француз химигі Антуан Лавуазье жану процесінде оттектің шешуші рөлін дәлелдей отырып, қандай қате ортағасырлық теорияны біржола жоққа шығарды?",
      "en": "Which erroneous historical theory did Antoine Lavoisier refute by revealing oxygen's true role in combustion?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Теорию алхимии золота",
          "kk": "Алтын алхимиясы теориясы",
          "en": "Transmutation alchemy"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Теорию эфира",
          "kk": "Эфир теориясы",
          "en": "Luminiferous aether hypothesis"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Теорию флогистона («невесомой огненной материи»)",
          "kk": "Флогистон («отты салмақсыз материя») теориясы",
          "en": "The phlogiston theory"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Теорию четырех стихий Аристотеля",
          "kk": "Аристотельдің 4 стихия теориясы",
          "en": "Aristotelian elements theory"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Лавуазье доказал, что горение — это реакция химического соединения с кислородом воздуха, а не выделение мифического 'флогистона'.",
      "kk": "Лавуазье жану — заттардың оттекпен қосылу реакциясы екенін көрсетіп, флогистон туралы жалған теорияның күлін көкке ұшырды.",
      "en": "Lavoisier showed that combustion represents rapid combination with atmospheric oxygen, overthrowing the phlogiston doctrine."
    },
    "hint": {
      "ru": "Гипотетическая материя огня, якобы улетающая при горении.",
      "kk": "Жанған кезде ұшып кетеді деп саналған ойдан шығарылған от материясы.",
      "en": "The mythical substance formerly thought to be lost during burning."
    },
    "xpReward": 15
  },
  {
    "id": "kz_19",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "Какие два новых радиоактивных химических элемента открыли супруги Пьер и Мария Склодовская-Кюри в 1898 году?",
      "kk": "1898 жылы ерлі-зайыпты Пьер және Мария Кюри уран шайырынан қандай екі жаңа радиоактивті химиялық элементті ашты?",
      "en": "Which two radioactive elements were discovered in 1898 by Marie and Pierre Curie from pitchblende ore?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Уран и Торий",
          "kk": "Уран және Торий",
          "en": "Uranium and Thorium"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Золото и Серебро",
          "kk": "Алтын және Күміс",
          "en": "Gold and Silver"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Полоний (Po) и Радий (Ra)",
          "kk": "Полоний (Po) және Радий (Ra)",
          "en": "Polonium (Po) and Radium (Ra)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Цезий и Франций",
          "kk": "Цезий және Франций",
          "en": "Cesium and Francium"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Мария Кюри назвала полоний в честь своей родины Польши, а радий — от латинского radius («луч»). За эти открытия она была удостоена двух Нобелевских премий.",
      "kk": "Мария Кюри полонийді отаны Польшаның құрметіне, ал радийді латынның «сәуле» сөзінен атады. Ол екі мәрте Нобель сыйлығын алды.",
      "en": "Polonium was named in honor of Marie's native Poland, while Radium was named for its radiant radioactive emission."
    },
    "hint": {
      "ru": "Один назван в честь Польши, второй означает «лучистый».",
      "kk": "Бірі Польша елінің құрметіне, екіншісі «сәулелі» дегенді білдіреді.",
      "en": "One honors Poland; the other means ray or beam."
    },
    "xpReward": 15
  },
  {
    "id": "kz_20",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какое фундаментальное открытие совершил Эрнест Резерфорд в 1911 году, бомбардируя золотую фольгу альфа-частицами?",
      "kk": "1911 жылы Эрнест Резерфорд алтын жұқалтырды альфа-бөлшектермен атқылау арқылы қандай іргелі жаңалық ашты?",
      "en": "What discovery did Ernest Rutherford make in 1911 by bombarding thin gold foil with alpha particles?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Открыл нейтрон",
          "kk": "Нейтронды ашты",
          "en": "Discovered the free neutron"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Открыл атомное ядро и создал планетарную модель атома",
          "kk": "Атом ядросын ашып, атомның планетарлық моделін жасады",
          "en": "Discovered the atomic nucleus and established the planetary atomic model"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Доказал неделимость атома",
          "kk": "Атомның бөлінбейтіндігін дәлелдеді",
          "en": "Proved atoms were indivisible"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Изобрел ядерный реактор",
          "kk": "Ядролық реакторды ойлап тапты",
          "en": "Invented the nuclear fission reactor"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Резерфорд обнаружил, что почти вся масса атома и весь положительный заряд сосредоточены в крошечном ядре, вокруг которого вращаются электроны.",
      "kk": "Резерфорд атомның бүкіл дерлік массасы мен оң заряды ортасындағы кішкентай ядрода шоғырланғанын анықтады.",
      "en": "Alpha scattering at large deflection angles demonstrated that atomic mass and positive charge are concentrated in a tiny central nucleus."
    },
    "hint": {
      "ru": "Крошечный массивный центр атома.",
      "kk": "Атомның ортасындағы кішкентай массивті орталық.",
      "en": "The tiny massive core of the atom."
    },
    "xpReward": 20
  },
  {
    "id": "kz_21",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "За разработку какого промышленного процесса получения аммиака из азота воздуха и водорода Фриц Габер получил Нобелевскую премию?",
      "kk": "Ауа азоты мен сутектен аммиак алудың қандай өндірістік процесін жасағаны үшін Фриц Габер Нобель сыйлығын алды?",
      "en": "For the development of which catalytic synthesis of ammonia from atmospheric N₂ and H₂ did Fritz Haber receive the Nobel Prize?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Крекинг нефти",
          "kk": "Мұнай крекингі",
          "en": "Petroleum catalytic cracking"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Электролиз расплава солей",
          "kk": "Балқымаларды электролиздеу",
          "en": "Molten salt electrolysis"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Окисление метанола",
          "kk": "Метанолды тотықтыру",
          "en": "Methanol vapor oxidation"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Синтез Габера — Боша (N₂ + 3H₂ ⇌ 2NH₃ при высоком P, T и железном катализаторе)",
          "kk": "Габер — Бош процесі (N₂ + 3H₂ ⇌ 2NH₃ жоғары қысым, температура және темір катализаторында)",
          "en": "The Haber-Bosch process (N₂ + 3H₂ ⇌ 2NH₃ under high pressure, temperature, and iron catalyst)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Процесс Габера — Боша позволил связывать атмосферный азот в аммиак, спасая мир от голода за счет массового производства минеральных азотных удобрений.",
      "kk": "Габер-Бош әдісі азот тыңайтқыштарын жаппай өндіруге жол ашып, әлем халықтарын ашаршылықтан құтқарды.",
      "en": "The Haber-Bosch process fixed atmospheric nitrogen into ammonia, forming the basis for worldwide agricultural nitrogen fertilizers."
    },
    "hint": {
      "ru": "Синтез аммиака из простых газов.",
      "kk": "Жай газдардан аммиак синтездеу.",
      "en": "Ammonia synthesis directly from nitrogen and hydrogen gases."
    },
    "xpReward": 20
  },
  {
    "id": "kz_22",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "Какое изобретение принесло Альфреду Нобелю всемирную известность и колоссальное состояние, направленное им на учреждение Нобелевских премий?",
      "kk": "Альфред Нобельге әлемдік даңқ пен Нобель сыйлықтары қорын құруға мүмкіндік берген орасан зор байлық әкелген өнертабыс қандай?",
      "en": "Which invention brought Alfred Nobel worldwide fame and the fortune used to endow the Nobel Prizes?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Открытие пенициллина",
          "kk": "Пенициллинді ашу",
          "en": "Discovery of penicillin"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Изобретение паровой машины",
          "kk": "Бу машинасын жасау",
          "en": "Steam engine design"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Изобретение динамита (безопасной формы нитроглицерина)",
          "kk": "Динамитті (қауіпсіз нитроглицеринді) ойлап табу",
          "en": "Invention of dynamite (stabilized nitroglycerin)"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Синтез искусственного алмаза",
          "kk": "Жасанды алмас синтезі",
          "en": "Synthetic diamond synthesis"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Нобель догадался пропитать капризный жидкий нитроглицерин пористой инфузорной землей (кизельгуром), создав стабильную взрывчатку — динамит.",
      "kk": "Нобель аса сезімтал сұйық нитроглицеринді кизельгурге сіңдіріп, тұрақты жарылғыш зат — динамитті ойлап тапты.",
      "en": "Nobel tamed dangerously sensitive nitroglycerin by absorbing it into kieselguhr clay, producing transportable dynamite sticks."
    },
    "hint": {
      "ru": "Знаменитая взрывчатка в шашках с фитилем.",
      "kk": "Әйгілі шашка түріндегі жарылғыш зат.",
      "en": "The famous stick explosive used in civil engineering."
    },
    "xpReward": 15
  },
  {
    "id": "kz_23",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какой ученый разработал шкалу электроотрицательностей, концепцию гибридизации орбиталей и получил две персональные (неразделенные) Нобелевские премии?",
      "kk": "Электртерістік шкаласын, орбитальдардың гибридтену тұжырымдамасын жасаған және екі дербес Нобель сыйлығын алған ғалым кім?",
      "en": "Which scientist developed the electronegativity scale, orbital hybridization concepts, and won two unshared Nobel Prizes?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Джеймс Уотсон",
          "kk": "Джеймс Уотсон",
          "en": "James Watson"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Роберт Бойль",
          "kk": "Роберт Бойль",
          "en": "Robert Boyle"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Лайнус Полинг (Linus Pauling)",
          "kk": "Лайнус Полинг (Linus Pauling)",
          "en": "Linus Pauling"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Амедео Авогадро",
          "kk": "Амедео Авогадро",
          "en": "Amedeo Avogadro"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Лайнус Полинг написал фундаментальную книгу «Природа химической связи», получил Нобелевскую премию по химии (1954) и Нобелевскую премию мира (1962).",
      "kk": "Лайнус Полинг химиялық байланыс табиғатын ашып химиядан, ал кейін ядролық қаруға қарсы күресі үшін Бейбітшілік Нобель сыйлығын иеленді.",
      "en": "Pauling revolutionized valence bond theory, electronegativity, and protein helical structure, winning the Chemistry and Peace Nobel prizes."
    },
    "hint": {
      "ru": "Шкала электроотрицательности носит его имя.",
      "kk": "Электртерістік шкаласы соның есімімен аталады.",
      "en": "The primary electronegativity scale is named for him."
    },
    "xpReward": 20
  },
  {
    "id": "kz_24",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "Чему равно число Авогадро (NA) — количество формульных единиц в одном моле любого вещества?",
      "kk": "Кез келген заттың бір моліндегі құрылымдық бөлшектер санын көрсететін Авогадро тұрақтысы (NA) нешеге тең?",
      "en": "What is the value of Avogadro's constant (NA) representing particles per mole?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "3,00 × 10⁸ моль⁻¹",
          "kk": "3,00 × 10⁸ моль⁻¹",
          "en": "3.00 × 10⁸ mol⁻¹"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "1,602 × 10⁻¹⁹ моль⁻¹",
          "kk": "1,602 × 10⁻¹⁹ моль⁻¹",
          "en": "1.602 × 10⁻¹⁹ mol⁻¹"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "9,81 моль⁻¹",
          "kk": "9,81 моль⁻¹",
          "en": "9.81 mol⁻¹"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "6,022 × 10²³ моль⁻¹",
          "kk": "6,022 × 10²³ моль⁻¹",
          "en": "6.022 × 10²³ mol⁻¹"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Число Авогадро NA = 6,02214×10²³ моль⁻¹ определяет число атомов или молекул в одном моле любого химического вещества.",
      "kk": "Авогадро саны NA = 6,022×10²³ моль⁻¹ кез келген заттың 1 моліндегі атомдар немесе молекулалар санын білдіреді.",
      "en": "Avogadro's constant establishes that one mole of any substance contains exactly 6.022 × 10²³ constituent particles."
    },
    "hint": {
      "ru": "Шесть на десять в двадцать третьей степени.",
      "kk": "Алтының он жиырма үшінші дәрежесі.",
      "en": "Six times ten to the twenty-third power."
    },
    "xpReward": 15
  },
  {
    "id": "kz_25",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "Кто из ученых предложил современную систему буквенных химических символов элементов (H, C, O, Fe, Cu) на основе их латинских названий?",
      "kk": "Химиялық элементтердің латынша атауларына негізделген қазіргі әріптік таңбаларын (H, C, O, Fe, Cu) енгізген ғалым кім?",
      "en": "Who introduced the modern alphabetical chemical element notation (H, C, O, Fe) based on Latin roots?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Джон Дальтон",
          "kk": "Джон Дальтон",
          "en": "John Dalton"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Роберт Гук",
          "kk": "Роберт Гук",
          "en": "Robert Hooke"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Карл Шееле",
          "kk": "Карл Шееле",
          "en": "Carl Wilhelm Scheele"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Йёнс Якоб Берцелиус",
          "kk": "Йёнс Якоб Берцелиус",
          "en": "Jöns Jacob Berzelius"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "В 1814 году Берцелиус ввел удобные одно- и двухбуквенные символы из первой буквы латинского названия элемента, которыми мы пользуемся по сей день.",
      "kk": "1814 жылы Берцелиус элементтердің латынша атауының алғашқы әріптерінен тұратын ыңғайлы халықаралық химиялық таңбаларды ұсынды.",
      "en": "Berzelius instituted the worldwide Latin initial-letter notation for elements, replacing clumsy alchemical and Daltonian circular symbols."
    },
    "hint": {
      "ru": "Шведский химик, создавший язык химических формул.",
      "kk": "Швед химигі, химиялық формулалар тілін жасаушы.",
      "en": "Swedish chemist who created modern chemical formulas."
    },
    "xpReward": 15
  },
  {
    "id": "kz_26",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какие компоненты образуют высокоэффективную, но крайне токсичную самовоспламеняющуюся ракетную топливную пару (гептил + амил), исторически применявшуюся на космодроме Байконур (ракета Протон-М)?",
      "kk": "Байқоңыр ғарыш айлағында (Протон-М зымыраны) бұрын жиі қолданылған өздігінен тұтанатын жоғары улы зымыран отыны жұбы (гептил + амил) қандай химиялық заттардан тұрады?",
      "en": "Which hypergolic propellants make up the notorious 'heptyl + amyl' rocket fuel historically launched from Baikonur?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Керосин + жидкий кислород",
          "kk": "Керосин + сұйық оттек",
          "en": "Kerosene + liquid oxygen"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Жидкий водород + фтор",
          "kk": "Сұйық сутек + фтор",
          "en": "Liquid hydrogen + fluorine"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Бензин + сжатый воздух",
          "kk": "Бензин + сығылған ауа",
          "en": "Gasoline + compressed air"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Несимметричный диметилгидразин (НДМГ) + тетраоксид диазота (N₂O₄)",
          "kk": "Симметриялы емес диметилгидразин (НДМГ) + диазот тетраоксиді (N₂O₄)",
          "en": "Unsymmetrical dimethylhydrazine (UDMH) + dinitrogen tetroxide (N₂O₄)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Гептил (НДМГ, (CH₃)₂N-NH₂) и окислитель амил (N₂O₄) самовоспламеняются при контакте, но крайне токсичны для экологии, поэтому новые ракеты (Союз-5) переводят на экологичный керосин и кислород.",
      "kk": "Гептил мен азот тетраоксиді жанасқан сәтте өздігінен тұтанады, бірақ өте улы. Сондықтан жаңа зымырандар таза оттек-керосинге көшуде.",
      "en": "UDMH and N₂O₄ ignite spontaneously upon contact without an igniter (hypergolic), but pose severe environmental and toxicological hazards."
    },
    "hint": {
      "ru": "Азотсодержащие гидразин и тетраоксид азота.",
      "kk": "Азотты гидразин мен азот оксиді.",
      "en": "Nitrogenous hydrazine and nitrogen tetroxide."
    },
    "xpReward": 20
  },
  {
    "id": "kz_27",
    "category": "kz_science",
    "difficulty": "hard",
    "question": {
      "ru": "Какое эпохальное превращение открыл Николай Николаевич Зинин в 1842 году, положив начало мировой анилинокрасочной промышленности?",
      "kk": "1842 жылы Николай Николаевич Зинин қандай тарихи реакцияны ашып, әлемдік анилин бояулары өнеркәсібіне жол салды?",
      "en": "Which pivotal synthetic transformation did Nikolay Zinin discover in 1842, launching the global synthetic dye industry?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Синтез аспирина",
          "kk": "Аспирин синтезі",
          "en": "Synthesis of aspirin"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Окисление бензола в фенол",
          "kk": "Бензолды фенолға дейін тотықтыру",
          "en": "Direct oxidation of benzene to phenol"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Полимеризацию стирола",
          "kk": "Стиролдың полимерленуі",
          "en": "Polymerization of styrene"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Восстановление нитробензола в анилин (C₆H₅NO₂ → C₆H₅NH₂)",
          "kk": "Нитробензолды анилинге дейін тотықсыздандыру (C₆H₅NO₂ → C₆H₅NH₂)",
          "en": "Reduction of nitrobenzene to aniline (C₆H₅NO₂ → C₆H₅NH₂)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "«Если бы Зинин не сделал ничего более, кроме превращения нитробензола в анилин, то и тогда его имя осталось бы золотыми буквами в истории химии» (А.В. Гофман).",
      "kk": "Зинин реакциясы арқылы улы нитробензолдан анилин алынып, тоқыма өнеркәсібін түрлі-түсті анилин бояуларымен қамтамасыз ету басталды.",
      "en": "Zinin's reduction of nitrobenzene into aniline opened the floodgates for synthetic coal-tar mauveine and azo dyes."
    },
    "hint": {
      "ru": "Превращение нитрогруппы в аминогруппу.",
      "kk": "Нитротоптың амин тобына айналуы.",
      "en": "Conversion of -NO₂ to -NH₂ on a benzene ring."
    },
    "xpReward": 25
  },
  {
    "id": "kz_28",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Из какого доступного сырья академик Сергей Лебедев в 1928 году впервые в мире разработал промышленный синтез бутадиена для производства синтетического каучука?",
      "kk": "1928 жылы академик Сергей Лебедев синтетикалық каучук өндіру үшін бутадиенді әлемде тұңғыш рет қай қолжетімді шикізаттан синтездеді?",
      "en": "From which feedstock did Sergei Lebedev develop the world's first industrial synthetic butadiene rubber in 1928?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Из каменного угля",
          "kk": "Тас көмірден",
          "en": "From anthracite coal"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Из этилового спирта (этанола)",
          "kk": "Этил спиртінен (этанолдан)",
          "en": "From ethyl alcohol (ethanol)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Из древесной смолы",
          "kk": "Ағаш шайырынан",
          "en": "From pine tree resin"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Из природного алмаза",
          "kk": "Табиғи алмастан",
          "en": "From natural diamond"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Реакция Лебедева (совместное дегидрирование и дегидратация этанола на оксидном катализаторе: 2C₂H₅OH → CH₂=CH-CH=CH₂ + 2H₂O + H₂) позволила наладить первый в мире выпуск шин из СК.",
      "kk": "Лебедев реакциясы спиртті бір мезетте сусыздандырып әрі сутексіздендіріп, автомобиль дөңгелектерін жасайтын бутадиен каучугын алуға мүмкіндік берді.",
      "en": "Lebedev's one-step conversion of bio-ethanol over solid catalyst produced 1,3-butadiene, launching large-scale synthetic tire manufacturing."
    },
    "hint": {
      "ru": "Винный спирт из картофеля или зерна.",
      "kk": "Астықтан алынатын шарап спирті.",
      "en": "Grain alcohol (ethanol)."
    },
    "xpReward": 20
  },
  {
    "id": "kz_29",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "Какая женщина-биофизик и кристаллограф сделала легендарную «Фотографию 51», доказавшую двойную спиральную структуру ДНК?",
      "kk": "ДНҚ молекуласының қос спиральді құрылымын дәлелдеген аты аңызға айналған «№51 фотосуретті» түсірген әйел биофизик және кристаллограф кім?",
      "en": "Which pioneering biophysicist produced 'Photo 51', whose X-ray diffraction pattern proved the double-helix geometry of DNA?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Мария Кюри",
          "kk": "Мария Кюри",
          "en": "Marie Curie"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Ирен Жолио-Кюри",
          "kk": "Ирен Жолио-Кюри",
          "en": "Irène Joliot-Curie"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Розалинд Франклин",
          "kk": "Розалинд Франклин",
          "en": "Rosalind Franklin"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Дороти Ходжкин",
          "kk": "Дороти Ходжкин",
          "en": "Dorothy Hodgkin"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Рентгенограмма Photo 51 высокого разрешения, полученная Розалинд Франклин, имела решающее значение для раскрытия структуры ДНК Уотсоном и Криком.",
      "kk": "Розалинд Франклин түсірген 51-ші рентген суреті ДНҚ қос спиралін ашуда шешуші рөл атқарды.",
      "en": "Franklin's flawless X-ray fiber diffraction Photograph 51 provided the key geometric parameters revealing the DNA double helix."
    },
    "hint": {
      "ru": "Британская ученая-рентгеноструктурщик.",
      "kk": "Британдық рентген-зерттеуші ғалым.",
      "en": "British X-ray crystallographer."
    },
    "xpReward": 15
  },
  {
    "id": "kz_30",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "В честь какого выдающегося физика-ядерщика, основателя Лаборатории ядерных реакций в Дубне, назван 114-й химический элемент (Flerovium, Fl)?",
      "kk": "Дубнадағы Ядролық реакциялар зертханасының негізін қалаушы қай көрнекті ғалымның құрметіне периодтық жүйенің 114-ші элементі флеровий (Fl) аталды?",
      "en": "Which nuclear physicist and founder of the Dubna heavy ion laboratory is honored by element 114, Flerovium (Fl)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Игорь Курчатов",
          "kk": "Игорь Курчатов",
          "en": "Igor Kurchatov"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Андрей Сахаров",
          "kk": "Андрей Сахаров",
          "en": "Andrei Sakharov"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Георгий Николаевич Флёров",
          "kk": "Георгий Николаевич Флёров",
          "en": "Georgy Nikolayevich Flerov"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Лев Ландау",
          "kk": "Лев Ландау",
          "en": "Lev Landau"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Академик Г.Н. Флёров — сооткрыватель спонтанного деления урана и пионер синтеза сверхтяжелых трансурановых элементов.",
      "kk": "Г.Н. Флёров — уранның өздігінен бөлінуін ашқан және аса ауыр трансуран элементтерін синтездеудің көшбасшысы.",
      "en": "Georgy Flerov co-discovered spontaneous fission and pioneered synthesis of superheavy elements at the JINR in Dubna."
    },
    "hint": {
      "ru": "Фамилия созвучна названию элемента флеровий.",
      "kk": "Элементтің аты ғалымның тегімен сәйкес келеді.",
      "en": "His surname directly names element 114."
    },
    "xpReward": 20
  },
  {
    "id": "kz_31",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "На берегу какого крупного озера Казахстана расположен исторический гигант цветной металлургии — Балхашский медеплавильный завод?",
      "kk": "Қазақстанның қай ірі көлінің жағасында түсті металлургияның алып орталығы — Балқаш мыс қорыту зауыты орналасқан?",
      "en": "On the shores of which large Kazakh lake is the historical Balkhash Copper Smelting Complex located?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Каспийское море",
          "kk": "Каспий теңізі",
          "en": "Caspian Sea"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Озеро Зайсан",
          "kk": "Зайсан көлі",
          "en": "Lake Zaysan"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Озеро Балхаш",
          "kk": "Балқаш көлі",
          "en": "Lake Balkhash"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Озеро Алаколь",
          "kk": "Алакөл көлі",
          "en": "Lake Alakol"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Балхашский горно-металлургический комбинат выплавляет чистую катодную медь марки М00к с 1938 года.",
      "kk": "Балқаш мыс зауыты 1938 жылдан бері әлемдік жоғары сапалы катодты таза мыс шығарып келеді.",
      "en": "The Balkhash smelter has been extracting cathode copper on Lake Balkhash since 1938."
    },
    "hint": {
      "ru": "Озеро, полупресное и полусоленое.",
      "kk": "Жартылай тұщы, жартылай ащы атақты көл.",
      "en": "The unique lake that is half fresh, half saline."
    },
    "xpReward": 15
  },
  {
    "id": "kz_32",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какое гигантское шельфовое нефтегазовое месторождение на севере Каспийского моря считается одним из сложнейших инженерных проектов мира из-за льдов, глубин и высокого содержания сероводорода?",
      "kk": "Каспий теңізінің солтүстік қайраңындағы мұз, тереңдік пен күкіртсутектің көптігіне байланысты әлемдегі ең күрделі инженерлік жобалардың бірі саналатын алып мұнай кен орны қандай?",
      "en": "Which colossal offshore oil field in the North Caspian Sea is renowned for its technical complexity due to winter ice pack and extreme H₂S sour gas levels?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Кумколь",
          "kk": "Құмкөл",
          "en": "Kumkol"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Узень",
          "kk": "Өзен",
          "en": "Uzen"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Кашаган",
          "kk": "Қашаған",
          "en": "Kashagan"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Карачаганак",
          "kk": "Қарашығанақ",
          "en": "Karachaganak"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "ru": "Кашаган открыт в 2000 году и является одним из крупнейших нефтяных открытий планеты за последние 40 лет, добыча ведется с искусственных насыпных островов.",
      "kk": "Қашаған 2000 жылы ашылған ең ірі теңіз мұнай кеніші, мұнда мұнай жасанды аралдар арқылы өндіріледі.",
      "en": "Kashagan is one of the largest petroleum discoveries of the past four decades, drilled from artificial offshore islands amid Arctic-like sea ice."
    },
    "hint": {
      "ru": "Названо в честь знаменитого казахского акына-жырау Кашагана.",
      "kk": "Атақты қазақ жырауының есімімен аталған кеніш.",
      "en": "Named after the 19th-century Kazakh poet and akyn Kashagan."
    },
    "xpReward": 20
  },
  {
    "id": "kz_33",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "В каком мегаполисе на юге Казахстана расположен нефтеперерабатывающий завод PetroKazakhstan Oil Products (ПКОП)?",
      "kk": "Қазақстанның оңтүстігіндегі қай мегаполисте PetroKazakhstan Oil Products (ПКОП) мұнай өңдеу зауыты орналасқан?",
      "en": "In which metropolis in southern Kazakhstan is the modern PetroKazakhstan Oil Products refinery situated?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Шымкент",
          "kk": "Шымкент",
          "en": "Shymkent"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Тараз",
          "kk": "Тараз",
          "en": "Taraz"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Кызылорда",
          "kk": "Қызылорда",
          "en": "Kyzylorda"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Туркестан",
          "kk": "Түркістан",
          "en": "Turkistan"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Шымкентский НПЗ обеспечивает высокооктановым бензином и авиакеросином весь южный регион Республики Казахстан.",
      "kk": "Шымкент мұнай өңдеу зауыты еліміздің бүкіл оңтүстік өңірін сапалы жанар-жағармаймен қамтамасыз етеді.",
      "en": "The Shymkent Refinery supplies high-octane gasoline and aviation fuel to southern Kazakhstan."
    },
    "hint": {
      "ru": "Третий город республиканского значения на юге.",
      "kk": "Оңтүстіктегі республикалық маңызы бар үшінші қала.",
      "en": "Third largest city of Kazakhstan in the south."
    },
    "xpReward": 15
  },
  {
    "id": "kz_34",
    "category": "kz_science",
    "difficulty": "hard",
    "question": {
      "ru": "Какое уникальное соляное озеро и карст в Атырауской области Казахстана известно редчайшими месторождениями природных боратов (минералы колеманит, гидроборацит, индерит)?",
      "kk": "Атырау облысындағы қай бірегей тұзды көл табиғи бораттардың сирек кездесетін кен орындарымен (индерит, колеманит минералдары) әлемге әйгілі?",
      "en": "Which unique salt lake in Atyrau region is famous for rare native borate minerals (including inderite named after it)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Озеро Селетытениз",
          "kk": "Сілетітеңіз көлі",
          "en": "Lake Seletyteniz"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Озеро Маркаколь",
          "kk": "Марқакөл көлі",
          "en": "Lake Markakol"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Озеро Тениз",
          "kk": "Теңіз көлі",
          "en": "Lake Teniz"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Озеро Индер (Индерское борное месторождение)",
          "kk": "Индер көлі (Индер бор кен орны)",
          "en": "Lake Inder (Inder Borate Deposit)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Индерский соляной купол содержит колоссальные запасы боратов, брома, калийных солей. В честь месторождения назван минерал индерит.",
      "kk": "Индер тұз күмбезі бор, бром және калий тұздарының бай қоры болып табылады, мұнда индерит минералы алғаш табылды.",
      "en": "Inder is an internationally famous giant salt dome rich in borate minerals, with the hydrous borate mineral inderite named after it."
    },
    "hint": {
      "ru": "Название озера дало имя минералу индериту.",
      "kk": "Бұл көлдің аты индерит минералына берілген.",
      "en": "The lake lends its name to the mineral inderite."
    },
    "xpReward": 25
  },
  {
    "id": "kz_35",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "Какой угольный разрез в Экибастузе вошел в Книгу рекордов Гиннесса как самый мощный в мире угольный карьер единичной добычи?",
      "kk": "Екібастұздағы қай көмір тілігі бір карьерден өндіру қуаты бойынша Гиннестің рекордтар кітабына енген?",
      "en": "Which open-pit coal mine in Ekibastuz entered the Guinness World Records as the largest single open-cast coal mine?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Разрез «Северный»",
          "kk": "«Северный» тілігі",
          "en": "Severny mine"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Разрез «Богатырь»",
          "kk": "«Богатырь» көмір тілігі",
          "en": "Bogatyr open-pit mine"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Разрез «Восточный»",
          "kk": "«Шығыс» тілігі",
          "en": "Vostochny mine"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Шахта имени Костенко",
          "kk": "Костенко шахтасы",
          "en": "Kostenko mine"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Разрез «Богатырь» добывает до 50 млн тонн каменного угля в год, обеспечивая топливом электростанции Казахстана и Урала.",
      "kk": "«Богатырь» тілігі жылына 50 млн тоннаға дейін көмір өндіріп, еліміздің жылу-электр станцияларын отынмен қамтамасыз етеді.",
      "en": "Bogatyr Coal Mine produces sub-bituminous thermal coal with capacity exceeding 50 million tons per year."
    },
    "hint": {
      "ru": "Слово означает могучего древнего воина.",
      "kk": "Батыр, алып деген мағынаны білдіретін сөз.",
      "en": "A legendary warrior titan."
    },
    "xpReward": 15
  },
  {
    "id": "kz_36",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "За какую основополагающую химическую теорию шведский ученый Сванте Аррениус получил Нобелевскую премию по химии 1903 года?",
      "kk": "Швед ғалымы Сванте Аррениус 1903 жылғы химия саласындағы Нобель сыйлығын қандай іргелі теориясы үшін алды?",
      "en": "For which theory did Swedish chemist Svante Arrhenius receive the 1903 Nobel Prize in Chemistry?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Теорию электролитической диссоциации",
          "kk": "Электролиттік диссоциация теориясы",
          "en": "Theory of electrolytic dissociation"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Теорию строения ароматических углеводородов",
          "kk": "Ароматты көмірсутектер құрылысы",
          "en": "Theory of aromatic bonding"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Открытие аргона",
          "kk": "Аргонды ашу",
          "en": "Discovery of argon"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Изобретение спектроскопа",
          "kk": "Спектроскопты ойлап табу",
          "en": "Invention of spectroscope"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Аррениус доказал, что молекулы электролитов при растворении в воде распадаются на положительные и отрицательные ионы.",
      "kk": "Аррениус суда ерігенде электролит молекулаларының оң және теріс иондарға өздігінен ыдырайтынын дәлелдеді.",
      "en": "Arrhenius demonstrated that salts, acids, and bases spontaneously dissociate into charged mobile ions in aqueous solution."
    },
    "hint": {
      "ru": "Распад молекул на ионы в растворе.",
      "kk": "Молекулалардың суда иондарға ыдырауы.",
      "en": "Breakdown into positive and negative ions."
    },
    "xpReward": 20
  },
  {
    "id": "kz_37",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "Какой инженер и изобретатель создал первую в мире промышленную трубчатую установку термического крекинга нефти (патент 1891 года)?",
      "kk": "1891 жылы мұнайды термиялық крекингілеудің әлемдегі тұңғыш өндірістік қондырғысын ойлап тапқан өнертапқыш инженер кім?",
      "en": "Which brilliant polymath engineer patented the world's first industrial tubular thermal cracking unit for petroleum in 1891?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Никола Тесла",
          "kk": "Никола Тесла",
          "en": "Nikola Tesla"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Владимир Григорьевич Шухов",
          "kk": "Владимир Григорьевич Шухов",
          "en": "Vladimir Grigoryevich Shukhov"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Томас Эдисон",
          "kk": "Томас Эдисон",
          "en": "Thomas Edison"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Густав Эйфель",
          "kk": "Густав Эйфель",
          "en": "Gustave Eiffel"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "В.Г. Шухов создал установку непрерывного термического расщепления тяжелых фракций мазута в легкий бензин, определив развитие нефтепереработки XX века.",
      "kk": "В.Г. Шухов ауыр мазут қалдықтарын жеңіл мотор жанармайына айналдыратын үздіксіз термиялық крекинг әдісін алғаш патенттеді.",
      "en": "Shukhov invented continuous thermal cracking, breaking large petroleum hydrocarbons into light gasoline components."
    },
    "hint": {
      "ru": "Создатель знаменитых гиперболоидных башен и крекинг-систем.",
      "kk": "Әйгілі торлы гиперболоидты мұнаралар мен крекингтің авторы.",
      "en": "Inventor of both hyperboloid steel towers and industrial cracking."
    },
    "xpReward": 20
  },
  {
    "id": "kz_38",
    "category": "kz_science",
    "difficulty": "hard",
    "question": {
      "ru": "За расшифровку трехмерного кристаллического строения каких сложнейших биомолекул (пенициллин, витамин B12, инсулин) Дороти Ходжкин получила Нобелевскую премию?",
      "kk": "Дороти Ходжкин қай аса күрделі биомолекулалардың (пенициллин, В12 дәрумені, инсулин) кеңістіктік кристалдық құрылымын ашқаны үшін Нобель сыйлығына ие болды?",
      "en": "For resolving the spatial crystal structures of which crucial biochemical molecules (penicillin, vitamin B12, and insulin) did Dorothy Hodgkin win the Nobel Prize?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "С помощью метода рентгеноструктурного анализа монокристаллов",
          "kk": "Монокристалдардың рентгенқұрылымдық талдауы әдісімен",
          "en": "By pioneering single-crystal X-ray crystallography"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "С помощью ядерного взрыва",
          "kk": "Ядролық жарылыс көмегімен",
          "en": "Using underground nuclear blasts"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "С помощью телескопа Хаббл",
          "kk": "Хаббл телескопы арқылы",
          "en": "Through the Hubble space telescope"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Обычным взвешиванием на аптекарских весах",
          "kk": "Дәріханалық таразыға тарту арқылы",
          "en": "Simple analytical balance weighing"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "ru": "Дороти Ходжкин виртуозно применила дифракцию рентгеновских лучей для установления точной пространственной формы жизненно важных лекарств и гормонов.",
      "kk": "Дороти Ходжкин рентген сәулелерінің дифракциясы арқылы инсулин мен дәрумендердің нақты кеңістіктік пішінін анықтады.",
      "en": "Hodgkin determined the complex 3D architecture of cholesterol, penicillin, vitamin B12, and insulin using X-ray diffraction."
    },
    "hint": {
      "ru": "Метод анализа дифракции рентгеновских лучей на кристалле.",
      "kk": "Кристалдардағы рентген сәулелерінің дифракциясын зерттеу әдісі.",
      "en": "X-ray crystallography method."
    },
    "xpReward": 25
  },
  {
    "id": "kz_39",
    "category": "kz_science",
    "difficulty": "medium",
    "question": {
      "ru": "В какой классической книге 1661 года («Химик-скептик») Роберт Бойль дал первое научное определение химического элемента как неделимой на более простые вещества субстанции?",
      "kk": "1661 жылғы қай кітабында («Күмәнданғыш химик») Роберт Бойль химиялық элементке одан әрі қарапайым бөлшектерге ыдырамайтын зат ретінде алғаш ғылыми анықтама берді?",
      "en": "In which classic 1661 treatise ('The Sceptical Chymist') did Robert Boyle establish the modern scientific definition of a chemical element?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "«Математические начала»",
          "kk": "«Математикалық бастамалар»",
          "en": "'Principia Mathematica'"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "«Происхождение видов»",
          "kk": "«Түрлердің шығу тегі»",
          "en": "'Origin of Species'"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "«Атлас минералов»",
          "kk": "«Минералдар атласы»",
          "en": "'Atlas of Minerals'"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "«Химик-скептик» (The Sceptical Chymist)",
          "kk": "«Күмәнданғыш химик» (The Sceptical Chymist)",
          "en": "'The Sceptical Chymist'"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "ru": "Роберт Бойль похоронил алхимическую мистику, призвав химиков считать элементами только реальные экспериментально неразложимые материальные вещества.",
      "kk": "Роберт Бойль алхимиялық мистиканы тоқтатып, химиялық элементті тәжірибе жүзінде ыдырамайтын қарапайым дене деп атады.",
      "en": "Boyle discarded Aristotelian fire/water and Paracelsian salt/sulfur/mercury triads, defining elements as indivisible primitive material bodies."
    },
    "hint": {
      "ru": "«Скептический» химик.",
      "kk": "«Күмәнданғыш» химик.",
      "en": "The 'Sceptical' chemist."
    },
    "xpReward": 20
  },
  {
    "id": "kz_40",
    "category": "kz_science",
    "difficulty": "easy",
    "question": {
      "ru": "В какой области Казахстана находится уникальное гигантское нефтегазоконденсатное месторождение Карачаганак?",
      "kk": "Қазақстанның қай облысында бірегей алып Қарашығанақ мұнай-газ-конденсат кен орны орналасқан?",
      "en": "In which administrative region of Kazakhstan is the giant Karachaganak gas condensate field situated?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "ru": "Алматинская область",
          "kk": "Алматы облысы",
          "en": "Almaty Region"
        }
      },
      {
        "id": "b",
        "text": {
          "ru": "Западно-Казахстанская область (город Аксай)",
          "kk": "Батыс Қазақстан облысы (Ақсай қаласы)",
          "en": "West Kazakhstan Region (Aksay)"
        }
      },
      {
        "id": "c",
        "text": {
          "ru": "Павлодарская область",
          "kk": "Павлодар облысы",
          "en": "Pavlodar Region"
        }
      },
      {
        "id": "d",
        "text": {
          "ru": "Северо-Казахстанская область",
          "kk": "Солтүстік Қазақстан облысы",
          "en": "North Kazakhstan Region"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "ru": "Карачаганакское месторождение содержит свыше 1,2 млрд тонн нефти и конденсата и 1,35 трлн м³ газа, являясь ключевым газоконденсатным активом страны.",
      "kk": "Қарашығанақ Батыс Қазақстан облысындағы ең ірі газ конденсаты қоры болып табылады.",
      "en": "Karachaganak in West Kazakhstan is one of the premier gas-condensate reservoirs in the world."
    },
    "hint": {
      "ru": "Близ границы с РФ около города Аксай.",
      "kk": "Орал өңірі, Ақсай қаласы маңы.",
      "en": "Near the town of Aksay in western Kazakhstan."
    },
    "xpReward": 15
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
    title: { ru: "Любознательный Ученик", kk: "Ынталы Оқушы", en: "Curious Learner" },
    badge: "🌱",
    color: "text-slate-400"
  },
  {
    minScore: 100,
    title: { ru: "Лаборант-Практик", kk: "Практикант-Лаборант", en: "Lab Practitioner" },
    badge: "🧪",
    color: "text-cyan-500"
  },
  {
    minScore: 250,
    title: { ru: "Мастер Реакций", kk: "Реакциялар Шебері", en: "Reaction Master" },
    badge: "🔥",
    color: "text-emerald-500"
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
