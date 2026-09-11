"use client";

import React, { useState } from "react";
import { Language } from "@/types/chemistry";
import { soundEffects } from "@/lib/soundEffects";
import { 
  Building2, 
  GraduationCap, 
  Sparkles, 
  Award, 
  FlaskConical, 
  Globe, 
  BookOpen, 
  Edit3, 
  Maximize2, 
  X, 
  ShieldCheck, 
  Cpu,
  Microscope,
  Atom,
  Trophy,
  Compass,
  CheckCircle2,
  ChevronDown,
  Leaf,
  Users,
  Lightbulb,
  Layers
} from "lucide-react";

interface EducationKzViewProps {
  language: Language;
  onGoToLab?: () => void;
}

export const EducationKzView: React.FC<EducationKzViewProps> = ({
  language,
  onGoToLab
}) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string; tag: string } | null>(null);

  const t = {
    badge: {
      ru: "🇰🇿 Образование & Наука • NGS (Алматы)",
      kk: "🇰🇿 Білім & Ғылым • NGS (Алматы)",
      en: "🇰🇿 Education & Science • NGS (Almaty)"
    },
    title: {
      ru: "Химическая Наука и Исследования в Казахстане и New Generation School",
      kk: "Қазақстандағы және New Generation School мектебіндегі Химия Ғылымы мен Зерттеулері",
      en: "Chemistry Education & Scientific Inquiries in Kazakhstan & NGS"
    },
    subtitle: {
      ru: "Полный путь развития исследователя: от первых шагов в школьной лаборатории и работы с цифровым микроскопом до республиканских побед в РНПЦ «Дарын» и участия в Intel ISEF.",
      kk: "Зерттеушінің толық даму жолы: мектеп зертханасындағы алғашқы қадамдардан цифрлық микроскоппен жұмыс істеуге дейін, «Дарын» РНПЦ республикалық жеңістері мен Intel ISEF қатысуына дейін.",
      en: "A holistic journey of student researchers: from hands-on laboratory discoveries and high-resolution microscopy to National Daryn Olympiad championships and Intel ISEF."
    },
    scrollNotice: {
      ru: "Листайте вниз — подробная фотохроника и описание школьных проектов",
      kk: "Төмен қарай жылжыңыз — мектеп жобаларының толық фотожылнамасы мен сипаттамасы",
      en: "Scroll down — comprehensive photo story and lab research insights"
    },
    stat1Number: "100%",
    stat1Label: {
      ru: "Стандарт безопасности (Приказ №99)",
      kk: "Қауіпсіздік стандарты (№99 бұйрық)",
      en: "Safety Protocol (Order No. 99)"
    },
    stat2Number: "NGS LAB",
    stat2Label: {
      ru: "Высокотехнологичный комплекс",
      kk: "Жоғары технологиялық кешен",
      en: "Advanced Laboratory Hub"
    },
    stat3Number: "Дарын & ISEF",
    stat3Label: {
      ru: "Олимпийский стандарт проектной деятельности",
      kk: "Ғылыми жобалардың олимпиадалық деңгейі",
      en: "Research Olympiad Standard"
    },
    draftNoticeTitle: {
      ru: "📝 Черновик описания (Готов к вашей корректировке)",
      kk: "📝 Сипаттама жобасы (Өңдеуге дайын)",
      en: "📝 Draft Outline (Ready for your customized edits)"
    },
    draftNoticeText: {
      ru: "Каждый раздел ниже подробно описывает реальные процессы лаборатории NGS. Вы можете скорректировать любые формулировки, добавить имена учителей, темы конкретных дипломов или достижения учеников вашей школы!",
      kk: "Төмендегі әрбір бөлім NGS зертханасының нақты үдерістерін сипаттайды. Кез келген сөйлемді өзгертуге, мұғалімдердің есімдерін немесе нақты дипломдар мен жетістіктерді қосуға болады!",
      en: "Each chapter below details real NGS laboratory practices. You can request any text modification, add names of teachers, or feature specific competition trophies!"
    },
    ctaLabBtn: {
      ru: "Запустить Реактор Синтеза 🧪",
      kk: "Синтез Реакторын іске қосу 🧪",
      en: "Open Reaction Synthesizer 🧪"
    }
  };

  // 8 High-Impact Curated Chapters (Alternating Z-Pattern Visual Flow)
  const chapters = [
    {
      step: "01",
      icon: Users,
      tag: {
        ru: "АКАДЕМИЧЕСКАЯ КОМАНДА & АУДИТОРИЯ",
        kk: "АКАДЕМИЯЛЫҚ ҰЖЫМ ЖӘНЕ АУДИТОРИЯ",
        en: "ACADEMIC FACULTY & LAB SUITE"
      },
      title: {
        ru: "Химико-биологическая кафедра и современный лабораторный комплекс NGS",
        kk: "NGS мектебінің химия-биология кафедрасы және заманауи зертханалық кешені",
        en: "Chemistry & Biology Department and State-of-the-Art NGS Lab Suite"
      },
      lead: {
        ru: "Школа New Generation School (г. Алматы) создала одну из лучших научно-образовательных платформ для углубленного изучения естественных наук в Казахстане.",
        kk: "Алматыдағы New Generation School мектебі Қазақстандағы жаратылыстану ғылымдарын тереңдетіп оқытуға арналған озық ғылыми-білім беру кеңістігін қалыптастырды.",
        en: "New Generation School in Almaty has established one of the premier academic hubs for deep natural science exploration in Kazakhstan."
      },
      desc: {
        ru: "На фотографии — старшеклассники и преподавательский состав химико-биологического направления в специализированной аудитории. Кабинет оборудован мобильными рабочими станциями, центральным демонстрационным столом, настенными широкоформатными таблицами Менделеева и растворимости солей, а также персональными наборами химической посуды и реактивов.",
        kk: "Суретте — жоғары сынып оқушылары мен химия-биология бағытының мұғалімдері арнайы жабдықталған аудиторияда. Кабинет жылжымалы жұмыс станцияларымен, орталық демонстрациялық үстелмен, Менделеев пен ерігіштік кестелерімен және жеке зертханалық ыдыстармен қамтамасыз етілген.",
        en: "Featured are high school scholars alongside science faculty within the custom-built laboratory. The facility incorporates modular workstations, central demonstration benches, large-format periodic & solubility matrices, and personal glassware sets."
      },
      image: "/images/kz_chemistry/school_lab_11.jpg",
      imageCaption: {
        ru: "Старшеклассники и преподаватели естественных наук в лаборатории NGS",
        kk: "NGS зертханасындағы жоғары сынып оқушылары мен жаратылыстану пәндерінің мұғалімдері",
        en: "Senior chemistry students and science mentors inside the NGS laboratory complex"
      },
      quote: {
        ru: "«Сильная кафедра и передовое оснащение — фундамент для уверенных побед на национальных и международных олимпиадах.»",
        kk: "«Мықты ұстаздар мен озық жабдықталу — ұлттық және халықаралық олимпиадалардағы сенімді жеңістердің іргетасы.»",
        en: "“A distinguished faculty paired with cutting-edge infrastructure lays the groundwork for excellence at world-tier science competitions.”"
      }
    },
    {
      step: "02",
      icon: GraduationCap,
      tag: {
        ru: "ПРЕЕМСТВЕННОСТЬ & ЮНЫЕ ИССЛЕДОВАТЕЛИ",
        kk: "САБАҚТАСТЫҚ ЖӘНЕ ЖАС ЗЕРТТЕУШІЛЕР",
        en: "NEXT GENERATION RESEARCHERS"
      },
      title: {
        ru: "Культура научных экспериментов с ранних школьных лет",
        kk: "Ғылыми эксперимент мәдениетін бастауыш сыныптардан бастап қалыптастыру",
        en: "Cultivating Scientific Curiosity from Early Schooling"
      },
      lead: {
        ru: "В NGS исследовательский интерес закладывается задолго до старших классов: дети надевают белые халаты с гербом школы и учатся мыслить как ученые.",
        kk: "NGS мектебінде зерттеуге деген қызығушылық ерте қалыптасады: балалар мектеп елтаңбасы бар ақ халат киіп, ғалымдарша ойлауға үйренеді.",
        en: "At NGS, the spirit of scientific discovery is sparked early: students don official school crest lab coats and practice hypothesis-driven inquiry."
      },
      desc: {
        ru: "На фотографии — юные естествоиспытатели вместе с руководством школы и учителями. Пропедевтический курс химии и естествознания развивает базовые навыки научного метода: формулирование гипотезы, проведение качественных реакций, ведение лабораторного журнала и бережное отношение к экологии.",
        kk: "Суретте — жас зерттеушілер мектеп басшылығымен және ұстаздарымен бірге. Жаратылыстанудың кіріспе бағдарламасы гипотеза құру, сапалық реакциялар жасау, зертханалық күнделік жүргізу дағдыларын дамытады.",
        en: "Shown are junior investigators joined by administrative leadership and teachers. Introductory science courses foster fundamental habits: formulating testable hypotheses, recording observations, and respecting safety principles."
      },
      image: "/images/kz_chemistry/school_lab_2.jpg",
      imageCaption: {
        ru: "Юные исследователи в белых халатах NGS с наставниками и руководством школы",
        kk: "NGS ақ халаттарын киген жас зерттеушілер ұстаздар мен мектеп басшылығымен",
        en: "Junior researchers in official NGS lab coats alongside mentors and administration"
      },
      quote: {
        ru: "«Когда ребенок впервые самостоятельно видит изменение окраски индикатора — рождается будущий Менделеев.»",
        kk: "«Бала индикатор түсінің өзгеруін алғаш рет өз көзімен көрген сәтте — болашақ ғалымның жүрегі оянады.»",
        en: "“The moment a child observes an indicator shift color before their eyes, a lifelong passion for scientific discovery begins.”"
      }
    },
    {
      step: "03",
      icon: Lightbulb,
      tag: {
        ru: "ИННОВАЦИОННЫЕ УРОКИ • ЗЕЛЕНАЯ ХИМИЯ",
        kk: "ИННОВАЦИЯЛЫҚ САБАҚТАР • ЖАСЫЛ ХИМИЯ",
        en: "CLEAN ENERGY & INNOVATIVE LESSONS"
      },
      title: {
        ru: "Открытый мастер-класс: «Водород — топливо будущего»",
        kk: "Ашық шеберлік сыныбы: «Сутек — болашақтың отыны»",
        en: "Masterclass: “Hydrogen — The Fuel of the Future”"
      },
      lead: {
        ru: "На открытых уроках химии учащиеся NGS исследуют передовые проблемы мировой энергетики, электролиза воды и декарбонизации промышленности.",
        kk: "Ашық химия сабақтарында NGS оқушылары әлемдік энергетика, су электролизі және өнеркәсіпті декарбонизациялау мәселелерін зерттейді.",
        en: "During open inquiry lessons, NGS scholars investigate sustainable clean energy frontiers, electrochemical water splitting, and green chemistry."
      },
      desc: {
        ru: "В аудитории проходит интерактивное обсуждение свойств водорода как самого легкого и энергоемкого элемента Вселенной. На стендах представлены схемы топливных элементов, экологические преимущества перед углеводородами и перспективы водородного транспорта в Казахстане. Ученики активно поднимают руки и задают вопросы руководству и экспертам.",
        kk: "Аудиторияда сутектің Ғаламдағы ең жеңіл әрі энергия сыйымды элемент ретіндегі қасиеттері талқылануда. Қабырғада сутектік көлік пен жасыл энергетиканың даму болашағы көрсетілген стендтер орналасқан.",
        en: "Students actively engage in discussions on hydrogen gas thermodynamics, fuel cell efficiency, and hydrogen automotive potential for Kazakhstan's industrial transition."
      },
      image: "/images/kz_chemistry/school_lab_1.jpg",
      imageCaption: {
        ru: "Открытый урок химии с демонстрацией водородных технологий и участием экспертов",
        kk: "Сутек технологияларын көрсету және сарапшылардың қатысуымен өткен ашық химия сабағы",
        en: "Interactive chemistry lesson focused on hydrogen fuel systems attended by school leadership"
      },
      quote: {
        ru: "«Школьная химия обязана отвечать на вызовы XXI века — от чистой энергетики до климатической нейтральности.»",
        kk: "«Мектеп химиясы XXI ғасырдың жаһандық сын-қатерлеріне — жасыл энергетикадан бастап климатты қорғауға дейін жауап беруі тиіс.»",
        en: "“Modern school chemistry must directly address 21st-century challenges—from carbon-neutral fuels to environmental stewardship.”"
      }
    },
    {
      step: "04",
      icon: Microscope,
      tag: {
        ru: "ЦИФРОВАЯ МИКРОСКОПИЯ & БЕЗОПАСНОСТЬ",
        kk: "ЦИФРЛЫҚ МИКРОСКОПИЯ ЖӘНЕ ҚАУІПСІЗДІК",
        en: "DIGITAL MICROSCOPY & SAFETY STANDARDS"
      },
      title: {
        ru: "Изучение микроструктур кристаллов и стандарты Приказа № 99",
        kk: "Кристалдардың микроқұрылымын зерттеу және № 99 бұйрық талаптары",
        en: "Microstructural Crystal Analysis & Strict Safety Regulation Compliance"
      },
      lead: {
        ru: "Требования безопасности Министерства просвещения РК по работе с реактивами дополняются цифровой микроскопией и смарт-панелями.",
        kk: "ҚР Оқу-ағарту министрлігінің реактивтермен қауіпсіз жұмыс істеу талаптары цифрлық микроскопиямен және смарт-панельдермен толықтырылған.",
        en: "Safety regulations mandated by the Ministry of Education of Kazakhstan are harmonized with digital optical sensor arrays and smartboards."
      },
      desc: {
        ru: "Ученики изучают морфологию неорганических осадков, кристаллическую решетку солей и фазовые переходы. Благодаря цифровому подключению микроскопа к интерактивной доске данные выводятся в реальном времени на весь класс, что позволяет коллективно фиксировать форму кристаллов и избегать опасного контакта с летучими веществами.",
        kk: "Оқушылар бейорганикалық тұнбалардың морфологиясын, тұздардың кристалдық торын зерттейді. Микроскоптың смарт-панельге қосылуы арқылы кескін бүкіл сыныпқа тікелей көрсетіледі.",
        en: "Students examine precipitate micro-lattices, salt crystal geometry, and phase transitions. Real-time digital feeds stream directly to interactive displays, ensuring collaborative scrutiny without hazardous direct chemical exposure."
      },
      image: "/images/kz_chemistry/school_lab_7.jpg",
      imageCaption: {
        ru: "Практическое занятие: наблюдение кристаллов под оптическим микроскопом",
        kk: "Тәжірибелік сабақ: оптикалық микроскоп арқылы кристалдарды бақылау",
        en: "Hands-on microscopy session: high-precision observation of salt crystals"
      },
      quote: {
        ru: "«Сочетание цифровых технологий и оптических приборов исключает риски и открывает тайны микромира.»",
        kk: "«Цифрлық технологиялар мен оптикалық құралдардың үйлесімі қауіп-қатерді жояды және микроәлем құпиясын ашады.»",
        en: "“Harmonizing digital optics with structured safety protocols eliminates hazards and illuminates the atomic universe.”"
      }
    },
    {
      step: "05",
      icon: Cpu,
      tag: {
        ru: "МУЛЬТИМЕДИЙНЫЙ УЧЕБНЫЙ ПРОЦЕСС",
        kk: "МУЛЬТИМЕДИАЛЫҚ ОҚУ ҮДЕРІСІ",
        en: "MULTIMEDIA INTERACTIVE PEDAGOGY"
      },
      title: {
        ru: "Интеграция цифровых презентаций и реальных лабораторных сетов",
        kk: "Цифрлық презентациялар мен нақты зертханалық жиынтықтарды кіріктіру",
        en: "Fusing Interactive Digital Media with Physical Laboratory Toolkits"
      },
      lead: {
        ru: "Учителя химии и биологии NGS используют передовые методики смешанного обучения (Blended Learning) с интерактивными панелями.",
        kk: "NGS мұғалімдері интерактивті панельдер мен сандық технологияларды пайдалана отырып, аралас оқыту (Blended Learning) әдісін қолданады.",
        en: "NGS science educators implement modern blended learning pedagogy, orchestrating smart screens alongside hands-on reagent kits."
      },
      desc: {
        ru: "На фотографии показан момент лабораторной сессии: на интерактивном дисплее транслируются протоколы исследования, микропрепараты и техника безопасности, а на столах учащихся развернуты индивидуальные боксы с микроскопами и реактивами. Это исключает ошибки при дозировании и повышает глубину усвоения материала.",
        kk: "Суретте зертханалық сессия сәті көрсетілген: дисплейде зерттеу хаттамалары мен қауіпсіздік ережелері көрсетіліп, оқушылар үстелінде микроскоптар мен реактивтердің жеке жиынтықтары жұмыс істеп тұр.",
        en: "The photograph captures an active laboratory briefing: interactive protocols and microscopic structures are displayed while students execute precise reagent measurements in their personal toolkits."
      },
      image: "/images/kz_chemistry/school_lab_16.jpg",
      imageCaption: {
        ru: "Преподаватель объясняет методику анализа на интерактивном дисплее",
        kk: "Оқытушы интерактивті дисплейде талдау әдістемесін түсіндіруде",
        en: "Science instructor detailing analytical methodology using the smart demonstration board"
      },
      quote: {
        ru: "«Технологии в аудитории должны служить одной цели — делать сложное понятным и увлекательным.»",
        kk: "«Аудиториядағы технологиялар бір ғана мақсатқа — күрделіні түсінікті әрі қызықты етуге қызмет етуі керек.»",
        en: "“Classroom technology serves one supreme objective: transforming intricate science into clear, thrilling discovery.”"
      }
    },
    {
      step: "06",
      icon: Trophy,
      tag: {
        ru: "МАСШТАБ • NGS SCIENCE FAIR",
        kk: "АУҚЫМ • NGS SCIENCE FAIR",
        en: "ANNUAL NGS SCIENCE FAIR EXPO"
      },
      title: {
        ru: "Ежегодный фестиваль исследовательских проектов NGS Science Fair",
        kk: "Жыл сайынғы NGS Science Fair ғылыми зерттеу жобаларының фестивалі",
        en: "Annual Student Research Expo at the NGS Science Fair"
      },
      lead: {
        ru: "Большой атриум школы трансформируется в выставочную арену сотен научных разработок, макетов и действующих приборов.",
        kk: "Мектептің үлкен атриумы жүздеген ғылыми жұмыстар, макеттер мен қондырғылар қойылған ғылыми көрме кеңістігіне айналады.",
        en: "The school grand atrium transforms into an expansive scientific exposition featuring working apparatuses, models, and posters."
      },
      desc: {
        ru: "На фотографиях представлен масштаб фестиваля: ученики всех классов выставляют постеры, биосферные макеты, авторские химические установки. В жюри входят приглашенные ученые и преподаватели ведущих вузов Казахстана. Именно здесь оттачивается уверенность исследователя и умение аргументированно защищать результаты своих экспериментов.",
        kk: "Суреттерде фестивальдің ауқымы көрсетілген: оқушылар постерлерді, биосфералық модельдерді, химиялық қондырғыларды қорғайды. Қазылар алқасында жетекші қазақстандық жоғары оқу орындарының ғалымдары жұмыс істейді.",
        en: "Photographs reflect the vibrant scale of the event: students showcase experimental setups, environmental simulations, and biochemical models to university jurors, developing rigorous defense poise."
      },
      image: "/images/kz_chemistry/school_lab_14.jpg",
      imageCaption: {
        ru: "Общий вид выставочного пространства NGS Science Fair в главном атриуме",
        kk: "Басты атриумдағы NGS Science Fair ғылыми көрмесінің жалпы көрінісі",
        en: "Panoramic perspective of the NGS Science Fair exposition in the school central atrium"
      },
      quote: {
        ru: "«Школьный Science Fair — это главный трамплин для побед на республиканских олимпиадах Дарын и конкурсе Intel ISEF.»",
        kk: "«Мектептік Science Fair — бұл «Дарын» мен Intel ISEF олимпиадаларындағы жеңістердің басты баспалдағы.»",
        en: "“The school science fair is the premier proving ground for national olympiad laureates and ISEF qualifiers.”"
      }
    },
    {
      step: "07",
      icon: Award,
      tag: {
        ru: "ЭКСПЕРТНОЕ ЖЮРИ & БИОХИМИЯ",
        kk: "САРАПШЫ ҚАЗЫЛАР АЛҚАСЫ ЖӘНЕ БИОХИМИЯ",
        en: "JURY DEFENSE & PLANT BIOCHEMISTRY"
      },
      title: {
        ru: "Академическая защита проекта: фитохимия и экосистемные исследования",
        kk: "Жобаны академиялық қорғау: фитохимия және экожүйелік зерттеулер",
        en: "Academic Jury Defense: Phytochemistry & Ecological Research"
      },
      lead: {
        ru: "Ученики защищают экспериментальные выводы перед авторитетным жюри педагогов и научных экспертов.",
        kk: "Оқушылар тәжірибелік қорытындыларын ұстаздар мен ғылыми сарапшылардан құралған қазылар алқасының алдында қорғайды.",
        en: "Students defend empirical conclusions before a dedicated panel of science faculty and research appraisers."
      },
      desc: {
        ru: "На фотографии — защита исследования по влиянию микроэлементов и фитогормонов на развитие комнатных и агрокультурных растений (Kalanchoe, Anthurium). Эксперты оценивают корректность контрольных групп, химический состав питательных сред и практическую применимость работы в городском озеленении и биотехнологиях.",
        kk: "Суретте — өсімдіктердің дамуына микроэлементтердің әсері туралы зерттеуді қорғау сәті (Каланхоэ, Антуриум). Сарапшылар бақылау топтарының дұрыстығын, қоректік ортаның химиялық құрамын және нәтижелерді бағалайды.",
        en: "Captured is the defense of a botanical chemistry project investigating micronutrient efficacy on exotic flora. The jury evaluates control groups, chemical media formulation, and urban biotech applicability."
      },
      image: "/images/kz_chemistry/school_lab_8.jpg",
      imageCaption: {
        ru: "Защита исследовательской работы по фитохимии перед экспертной комиссией",
        kk: "Фитохимия бойынша ғылыми жұмысты сарапшылық комиссия алдында қорғау",
        en: "Student defending a phytochemistry and plant physiology study before the faculty panel"
      },
      quote: {
        ru: "«Умение отвечать на каверзные вопросы жюри превращает школьника в зрелого исследователя.»",
        kk: "«Қазылардың күрделі сұрақтарына жауап беру шеберлігі оқушыны шыңдалған зерттеушіге айналдырады.»",
        en: "“The ability to defend findings under rigorous questioning is what transforms a student into an authentic researcher.”"
      }
    },
    {
      step: "08",
      icon: Atom,
      tag: {
        ru: "ПРОСТРАНСТВЕННОЕ МОДЕЛИРОВАНИЕ & АСТРОХИМИЯ",
        kk: "КЕҢІСТІКТІК МОДЕЛЬДЕУ ЖӘНЕ АСТРОХИМИЯ",
        en: "3D STRUCTURAL MODELING & ASTROCHEMISTRY"
      },
      title: {
        ru: "3D-моделирование молекул 10 класса и химия планетных сред",
        kk: "10-сынып молекулаларын 3D-модельдеу және ғаламшарлық химия",
        en: "10th-Grade 3D Molecular Architecture & Planetary Chemistry"
      },
      lead: {
        ru: "От пространственной геометрии органических молекул до анализа химического состава атмосфер планет Солнечной системы.",
        kk: "Органикалық молекулалардың кеңістіктік құрылымынан Күн жүйесі ғаламшарларының газдық құрамын талдауға дейін.",
        en: "Spanning the stereochemistry of organic polymers to the gas-kinetic atmospheres of outer solar system planets."
      },
      desc: {
        ru: "Учащиеся NGS представляют как физические объемные модели макромолекул (белков, углеводов, мицелл), так и глубокие междисциплинарные постеры по астрохимии. В работах рассчитываются парциальные давления, химическая термодинамика газов при сверхнизких температурах и условия существования органических прекурсоров в космосе.",
        kk: "NGS оқушылары макромолекулалардың (ақуыздар, көмірсулар) көлемді макеттерін де, астрохимия бойынша терең постерлік баяндамаларды да ұсынады. Жұмыстарда термодинамикалық есептер мен химиялық құрамдар жан-жақты талданады.",
        en: "Scholars demonstrate physical 3D models of complex macromolecules alongside analytical astrochemistry posters examining extraterrestrial gas compositions and prebiotic stability conditions."
      },
      image: "/images/kz_chemistry/school_lab_5.jpg",
      imageCaption: {
        ru: "Демонстрация объемных пространственных макетов биохимических структур",
        kk: "Биохимиялық құрылымдардың көлемді кеңістіктік макеттерін көрсету",
        en: "Students showcasing physical 3D models of complex biochemical polymers"
      },
      quote: {
        ru: "«Пространственное воображение в химии — ключ к созданию материалов будущего и нанотехнологий.»",
        kk: "«Химиядағы кеңістіктік қиял — болашақтың жаңа материалдары мен нанотехнологияларды жасаудың кілті.»",
        en: "“Spatial molecular intuition is the foundational key to unlocking advanced nanotechnology and smart materials.”"
      }
    }
  ];

  // Extra photo gallery strip for additional moments
  const extraPhotos = [
    {
      src: "/images/kz_chemistry/school_lab_4.jpg",
      title: { ru: "Астрохимия: Состав атмосфер планет", kk: "Астрохимия: Ғаламшарлар атмосферасы", en: "Astrochemistry: Planetary Atmospheres" },
      desc: { ru: "Постерная защита исследования газовых оболочек планет", kk: "Ғаламшарлық газдық қабықтарды зерттеу постері", en: "Poster analysis of planetary gas compositions" }
    },
    {
      src: "/images/kz_chemistry/school_lab_6.jpg",
      title: { ru: "Зеленые биотехнологии & Микрофермы", kk: "Жасыл биотехнология және микроферма", en: "Green Biotech & Micro-Farming" },
      desc: { ru: "Ученик с прототипом гидропонной экосистемы", kk: "Гидропоникалық экожүйе прототипін көрсету", en: "Young researcher with a self-contained ecological micro-farm" }
    },
    {
      src: "/images/kz_chemistry/school_lab_3.jpg",
      title: { ru: "Атмосфера праздника науки в NGS", kk: "NGS мектебіндегі ғылым мерекесінің көңіл-күйі", en: "Celebration of Science Atmosphere at NGS" },
      desc: { ru: "Сотни гостей, родителей и учеников на выставке", kk: "Көрмедегі жүздеген қонақтар, ата-аналар мен оқушылар", en: "Community of parents, mentors, and students celebrating discovery" }
    },
    {
      src: "/images/kz_chemistry/school_lab_10.jpg",
      title: { ru: "Лабораторная аудитория химии", kk: "Химиялық зертханалық аудитория", en: "Chemistry Laboratory Classroom" },
      desc: { ru: "Панорама современной химической аудитории NGS", kk: "NGS заманауи химия аудиториясының панорамасы", en: "Wide-angle view of the NGS chemistry instructional suite" }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-16 animate-fadeIn font-sans">
      
      {/* 1. Grand Hero Showcase */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-[#141630] to-[#090b16] border border-slate-200/20 dark:border-white/[0.12] p-8 sm:p-12 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#7c6ff6]/20 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-semibold text-[#c4b5fd]">
            <Sparkles className="w-4 h-4 text-[#7c6ff6]" />
            <span>{t.badge[language]}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
            {t.title[language]}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans font-normal">
            {t.subtitle[language]}
          </p>

          {/* Quick stats strip */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="p-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10">
              <div className="text-lg font-black font-mono text-emerald-400">{t.stat1Number}</div>
              <div className="text-xs text-slate-300 mt-0.5">{t.stat1Label[language]}</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10">
              <div className="text-lg font-black font-mono text-[#a59bfb]">{t.stat2Number}</div>
              <div className="text-xs text-slate-300 mt-0.5">{t.stat2Label[language]}</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10">
              <div className="text-lg font-black font-mono text-amber-400">{t.stat3Number}</div>
              <div className="text-xs text-slate-300 mt-0.5">{t.stat3Label[language]}</div>
            </div>
          </div>

          {/* Interactive Lab Link Button */}
          {onGoToLab && (
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => {
                  soundEffects.playAtomAdd();
                  onGoToLab();
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#6366f1] via-[#7c6ff6] to-[#a59bfb] text-white font-mono font-bold text-xs sm:text-sm shadow-[0_0_24px_rgba(124,111,246,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <FlaskConical className="w-4 h-4" />
                <span>{t.ctaLabBtn[language]}</span>
              </button>
            </div>
          )}
        </div>

        {/* Scroll invitation */}
        <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#c4b5fd]/80">
          <ChevronDown className="w-4 h-4 text-[#7c6ff6] animate-bounce" />
          <span>{t.scrollNotice[language]}</span>
        </div>
      </section>

      {/* 2. Draft Notice Callout */}
      <div className="p-5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-900 dark:text-amber-200 flex items-start gap-3.5 text-xs sm:text-sm">
        <Edit3 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-amber-800 dark:text-amber-300 font-mono text-xs uppercase tracking-wider">
            {t.draftNoticeTitle[language]}
          </h4>
          <p className="leading-relaxed opacity-95">
            {t.draftNoticeText[language]}
          </p>
        </div>
      </div>

      {/* 3. The Visual Narrative Timeline (8 Alternating High-Impact Chapters) */}
      <div className="space-y-24 relative">
        
        {/* Subtle center timeline line on desktop */}
        <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#7c6ff6]/30 via-indigo-500/20 to-transparent pointer-events-none" />

        {chapters.map((chap, idx) => {
          const isEven = idx % 2 === 1;
          const Icon = chap.icon;

          return (
            <section 
              key={chap.step}
              className={`relative flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-14 group`}
            >
              {/* Photo Card with Zoom Trigger */}
              <div className="w-full lg:w-1/2 shrink-0">
                <div 
                  onClick={() => {
                    soundEffects.playAtomAdd();
                    setSelectedImage({
                      src: chap.image,
                      title: chap.title[language],
                      desc: chap.desc[language],
                      tag: chap.tag[language]
                    });
                  }}
                  className="relative group/photo rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 dark:border-white/[0.12] shadow-xl hover:shadow-[0_0_30px_rgba(124,111,246,0.3)] transition-all duration-500 cursor-pointer"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={chap.image}
                      alt={chap.title[language]}
                      className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-70 group-hover/photo:opacity-40 transition-opacity" />

                    {/* Step badge on top left */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold shadow-sm">
                      <span className="text-[#a59bfb]">ЧАСТЬ {chap.step}</span>
                    </div>

                    {/* Fullscreen icon top right */}
                    <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover/photo:opacity-100 transition-opacity shadow-sm">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Caption on image bottom */}
                    <div className="absolute bottom-4 left-4 right-4 text-xs font-sans text-slate-200 line-clamp-1 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10">
                      📷 {chap.imageCaption[language]}
                    </div>
                  </div>
                </div>
              </div>

              {/* Narrative Content Block */}
              <div className="w-full lg:w-1/2 space-y-4">
                {/* Chapter Tag Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Icon className="w-3.5 h-3.5 text-[#7c6ff6]" />
                  <span>{chap.tag[language]}</span>
                </div>

                {/* Chapter Title */}
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  {chap.title[language]}
                </h2>

                {/* Lead Text */}
                <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {chap.lead[language]}
                </p>

                {/* Main Paragraph */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {chap.desc[language]}
                </p>

                {/* Featured Quote Callout */}
                <blockquote className="p-3.5 rounded-2xl bg-slate-100/90 dark:bg-[#13152c] border-l-4 border-[#7c6ff6] text-slate-700 dark:text-slate-300 text-xs sm:text-sm italic leading-relaxed">
                  {chap.quote[language]}
                </blockquote>
              </div>
            </section>
          );
        })}
      </div>

      {/* 4. Additional Exhibition Moments (Photo Gallery Strip) */}
      <section className="space-y-6 pt-6">
        <div className="border-t border-slate-200 dark:border-white/[0.1] pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'kk' ? 'Ғылыми фестивальдің қосымша сәттері' : language === 'en' ? 'Additional Moments of Discovery' : 'Атмосфера открытий: дополнительные кадры'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">
              {language === 'kk' ? 'Үлкейтіп көру үшін кез келген фотосуретті басыңыз' : language === 'en' ? 'Click any card to enlarge and examine details' : 'Нажмите на любую карточку для подробного просмотра'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {extraPhotos.map((item, pIdx) => (
            <div
              key={pIdx}
              onClick={() => {
                soundEffects.playAtomAdd();
                setSelectedImage({
                  src: item.src,
                  title: item.title[language],
                  desc: item.desc[language],
                  tag: "NGS MOMENTS"
                });
              }}
              className="group/mini relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-white/[0.1] shadow-md hover:shadow-xl hover:border-[#7c6ff6] transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title[language]}
                  className="w-full h-full object-cover group-hover/mini:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/mini:opacity-30 transition-opacity" />
                <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover/mini:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="p-3 bg-white dark:bg-[#111327] flex-1 flex flex-col justify-between">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1 group-hover/mini:text-[#7c6ff6] transition-colors">
                  {item.title[language]}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                  {item.desc[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom Summary Banner */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-100 via-indigo-50/50 to-slate-100 dark:from-[#0f1124] dark:via-[#151733] dark:to-[#0f1124] border border-slate-200/80 dark:border-white/[0.1] text-center space-y-4 shadow-sm">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#7c6ff6]/15 text-[#7c6ff6] mx-auto">
          <GraduationCap className="w-6 h-6" />
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          {language === 'kk' ? 'Химияны жаңа деңгейде зерттеңіз' : language === 'en' ? 'Explore Chemistry on a New Level' : 'Исследуйте химию на новом уровне'}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          {language === 'kk'
            ? 'Виртуалды реакторда 118 элемент пен 51 молекуланы біріктіріп, нақты тәжірибе жасап көріңіз.'
            : language === 'en'
            ? 'Experiment with 118 periodic elements and discover 51 authentic molecules in our virtual reaction chamber.'
            : 'Попробуйте соединить элементы в виртуальном квантовом реакторе и открыть все 51 молекулу программы 10 класса.'}
        </p>

        {onGoToLab && (
          <div className="pt-2">
            <button
              onClick={() => {
                soundEffects.playAtomAdd();
                onGoToLab();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#7c6ff6] hover:bg-[#6b5ce7] text-white font-mono font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <FlaskConical className="w-4 h-4" />
              <span>{t.ctaLabBtn[language]}</span>
            </button>
          </div>
        )}
      </section>

      {/* 6. Lightbox Modal Preview on Click */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full max-h-[72vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[72vh] object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white space-y-2">
              <div className="text-[11px] font-mono font-bold text-[#a59bfb] uppercase tracking-wider">
                {selectedImage.tag}
              </div>
              <h3 className="text-base sm:text-lg font-bold font-sans text-white">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
