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
  ChevronDown
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
      ru: "Развитие Химической Науки в Казахстане и New Generation School",
      kk: "Қазақстандағы және New Generation School мектебіндегі Химия Ғылымы",
      en: "Chemistry Education & Research in Kazakhstan and NGS"
    },
    subtitle: {
      ru: "Путь от школьных лабораторных открытий до республиканских олимпиад РНПЦ «Дарын» и мировых стандартов Intel ISEF.",
      kk: "Мектептік зертханалық ашылулардан бастап «Дарын» республикалық олимпиадалары мен Intel ISEF халықаралық стандарттарына дейін.",
      en: "From school laboratory discoveries to National Daryn Olympiads and Intel ISEF international scientific standards."
    },
    scrollNotice: {
      ru: "Листайте вниз, чтобы познакомиться с фотоисторией лаборатории",
      kk: "Зертхананың фототарихымен танысу үшін төмен қарай жылжыңыз",
      en: "Scroll down to explore the laboratory photo story"
    },
    stat1Number: "100%",
    stat1Label: {
      ru: "Безопасность исследований (Приказ №99)",
      kk: "Зерттеулер қауіпсіздігі (№99 бұйрық)",
      en: "Safety Standards (Order No. 99)"
    },
    stat2Number: "NGS LAB",
    stat2Label: {
      ru: "Современная цифровая лаборатория",
      kk: "Заманауи цифрлық зертхана",
      en: "Next-Gen Digital Lab Complex"
    },
    stat3Number: "Дарын & ISEF",
    stat3Label: {
      ru: "Олимпийский стандарт проектной деятельности",
      kk: "Жобалық қызметтің олимпиадалық стандарты",
      en: "Competitive Research Standard"
    },
    draftNoticeTitle: {
      ru: "📝 Черновик описания (Готов к вашей корректировке)",
      kk: "📝 Сипаттама жобасы (Өңдеуге дайын)",
      en: "📝 Draft Content (Ready for your customized phrasing)"
    },
    draftNoticeText: {
      ru: "Тексты и подписи ниже подготовлены для демонстрации структуры. Вы можете скорректировать любой абзац, добавить имена научных руководителей или конкретные награды учащихся!",
      kk: "Төмендегі мәтіндер мен сипаттамалар құрылымды көрсету үшін дайындалған. Кез келген сөйлемді өзгертуге немесе ғылыми жетекшілердің есімдерін қосуға болады!",
      en: "The narrative below is a structured draft. You can easily adjust any paragraph, add teacher mentions, or include specific student awards!"
    },
    ctaLabBtn: {
      ru: "Открыть Реактор Синтеза 🧪",
      kk: "Синтез Реакторын ашу 🧪",
      en: "Launch Reaction Lab 🧪"
    }
  };

  // 5 elegant narrative chapters (Alternating Left-Right visual flow)
  const chapters = [
    {
      step: "01",
      icon: Building2,
      tag: {
        ru: "ЛАБОРАТОРНЫЙ КОМПЛЕКС NGS",
        kk: "NGS ЗЕРТХАНАЛЫҚ КЕШЕНІ",
        en: "NGS LABORATORY COMPLEX"
      },
      title: {
        ru: "Передовая химическая аудитория и исследовательская среда",
        kk: "Алдыңғы қатарлы химия аудиториясы мен зерттеу ортасы",
        en: "State-of-the-Art Chemistry Suite & Research Facility"
      },
      lead: {
        ru: "Школа New Generation School (г. Алматы) формирует условия, в которых химия воспринимается не как сухая теория из формул, а как живая созидательная наука.",
        kk: "Алматы қаласындағы New Generation School мектебі химияны жай ғана формулалар жиынтығы ретінде емес, нақты тірі тәжірибелік ғылым ретінде оқытады.",
        en: "New Generation School in Almaty cultivates an academic environment where chemistry is experienced through hands-on experimental inquiry."
      },
      desc: {
        ru: "Аудитория оборудована специализированной химической мебелью, настенными широкоформатными таблицами Менделеева и растворимости солей, системами вентиляции и индивидуальными средствами защиты каждого ученика. Здесь проходят как плановые занятия по углублённой программе, так и индивидуальная подготовка к академическим олимпиадам.",
        kk: "Аудитория арнайы химиялық жиһаздармен, Менделеевтің кең форматты қабырға кестесімен, ерігіштік кестесімен, желдеткіш жүйелерімен және әр оқушының жеке қорғаныс құралдарымен жабдықталған.",
        en: "The room is equipped with chemical-resistant workstations, large-format periodic & solubility charts, advanced fume hoods, and individual safety kits for every student."
      },
      image: "/images/kz_chemistry/school_lab_10.jpg",
      imageCaption: {
        ru: "Ученики и преподаватель химико-биологического цикла в аудитории NGS",
        kk: "NGS аудиториясындағы химия-биология бағытының оқушылары мен оқытушысы",
        en: "Chemistry students and faculty inside the NGS laboratory classroom"
      },
      quote: {
        ru: "«Настоящий ученый рождается не за партой с конспектом, а за лабораторным столом с пробиркой в руках.»",
        kk: "«Нағыз ғалым конспект жазу арқылы емес, зертханалық үстелде сынауық ұстау арқылы қалыптасады.»",
        en: "“True scientific passion is forged not merely at a lecture desk, but at the laboratory bench.”"
      }
    },
    {
      step: "02",
      icon: Microscope,
      tag: {
        ru: "ЦИФРОВАЯ МИКРОСКОПИЯ & БЕЗОПАСНОСТЬ",
        kk: "ЦИФРЛЫҚ МИКРОСКОПИЯ ЖӘНЕ ҚАУІПСІЗДІК",
        en: "DIGITAL MICROSCOPY & SAFETY STANDARDS"
      },
      title: {
        ru: "Изучение микроструктур и соблюдение стандартов Приказа № 99",
        kk: "Микроқұрылымдарды зерттеу және № 99 бұйрық стандарттары",
        en: "Microstructural Analysis & Strict Lab Safety Compliance"
      },
      lead: {
        ru: "Соблюдение регламентов Министерства просвещения РК по работе с химическими реактивами дополняется технологиями цифровой микроскопии высокого разрешения.",
        kk: "ҚР Оқу-ағарту министрлігінің химиялық реактивтермен жұмыс істеу регламенттері жоғары ажыратымдылықтағы цифрлық микроскопиямен ұштасады.",
        en: "Compliance with Kazakhstan Ministry of Education lab safety protocols is enhanced by high-resolution optical and digital microscopy systems."
      },
      desc: {
        ru: "Студенты исследуют кристаллическую структуру осадков, морфологию неорганических кристаллов и биологических препаратов. Благодаря интерактивной смарт-панели данные с микроскопа можно транслировать на всю аудиторию для совместного анализа, обсуждения химических свойств и проверки результатов лабораторной работы.",
        kk: "Оқушылар тұнбалардың кристалдық торын, бейорганикалық қосылыстар мен биологиялық препараттардың морфологиясын зерттейді. Микроскоптан кескін смарт-панельге шығарылып, бүкіл аудиториямен бірге талданады.",
        en: "Learners investigate precipitate lattices, crystal morphology, and solution dynamics. Digital feed from microscope lenses can be projected onto the interactive screen for collaborative classroom analysis."
      },
      image: "/images/kz_chemistry/school_lab_7.jpg",
      imageCaption: {
        ru: "Практическое занятие: детальный оптический анализ образцов под микроскопом",
        kk: "Тәжірибелік сабақ: микроскоп арқылы үлгілерді егжей-тегжейлі оптикалық талдау",
        en: "Hands-on microscopy lesson: observing precipitate crystals and micro-structures"
      },
      quote: {
        ru: "«Сочетание цифровых технологий и физического эксперимента исключает риски и открывает тайны микромира.»",
        kk: "«Цифрлық технологиялар мен физикалық тәжірибенің үйлесімі қауіп-қатерді жояды және микроәлем құпиясын ашады.»",
        en: "“Merging digital instrumentation with physical experimentation unlocks the mysteries of the atomic world.”"
      }
    },
    {
      step: "03",
      icon: Trophy,
      tag: {
        ru: "НАУЧНЫЙ ФЕСТИВАЛЬ • SCIENCE FAIR",
        kk: "ҒЫЛЫМИ ФЕСТИВАЛЬ • SCIENCE FAIR",
        en: "ANNUAL NGS SCIENCE FAIR"
      },
      title: {
        ru: "Масштабная презентация авторских проектов и исследований",
        kk: "Авторлық жобалар мен зерттеулердің ауқымды презентациясы",
        en: "Annual Science Fair: Student Research Exhibitions"
      },
      lead: {
        ru: "Ежегодная научная ярмарка NGS Science Fair собирает десятки амбициозных проектов по химии, экологии, материаловедению и биоинженерии.",
        kk: "Жыл сайынғы NGS Science Fair ғылыми жәрмеңкесі химия, экология, материалтану және биоинженерия бойынша ондаған жобаларды біріктіреді.",
        en: "The annual NGS Science Fair showcases student-driven investigations across green chemistry, sustainable materials, and molecular ecology."
      },
      desc: {
        ru: "Выставочный зал наполнен действующими установками, наглядными плакатами, лабораторными образцами и компьютерными симуляторами. Ученики защищают свои гипотезы перед независимым жюри, преподавателями университетов и родителями, оттачивая навыки академической аргументации и презентации данных.",
        kk: "Көрме залында нақты жұмыс істейтін қондырғылар, көрнекі плакаттар мен компьютерлік симуляторлар қойылған. Оқушылар тәуелсіз қазылар алқасының алдында өз гипотезаларын қорғайды.",
        en: "The exhibition hall hosts working prototypes, academic posters, and computer simulations. Students defend their empirical findings before peer and expert review."
      },
      image: "/images/kz_chemistry/school_lab_14.jpg",
      imageCaption: {
        ru: "Общий вид выставочного пространства NGS Science Fair во время защиты проектов",
        kk: "Жобаларды қорғау кезіндегі NGS Science Fair көрме кеңістігінің көрінісі",
        en: "NGS Science Fair exhibition arena during the student research defense sessions"
      },
      quote: {
        ru: "«Школьный Science Fair — это главный трамплин для побед на республиканских олимпиадах Дарын и Intel ISEF.»",
        kk: "«Мектептік Science Fair — бұл «Дарын» мен Intel ISEF олимпиадаларындағы жеңістердің басты баспалдағы.»",
        en: "“The school science fair is the primary launchpad for national and international research achievements.”"
      }
    },
    {
      step: "04",
      icon: Atom,
      tag: {
        ru: "МОЛЕКУЛЯРНОЕ МОДЕЛИРОВАНИЕ",
        kk: "МОЛЕКУЛАЛЫҚ МОДЕЛЬДЕУ",
        en: "3D STRUCTURAL MODELING"
      },
      title: {
        ru: "Пространственное понимание молекул и биохимических процессов",
        kk: "Молекулалар мен биохимиялық үдерістердің кеңістіктік құрылымы",
        en: "Spatial Comprehension of Molecular & Biochemical Architectures"
      },
      lead: {
        ru: "Для глубокого понимания органической химии (10 класс) и строения полимеров учащиеся конструируют объёмные физические и виртуальные модели.",
        kk: "10-сыныптың органикалық химиясын және полимерлер құрылысын терең меңгеру үшін оқушылар көлемді модельдер құрастырады.",
        en: "To master 10th-grade organic reaction mechanisms and polymer lattices, students construct tangible and computer-assisted 3D molecular models."
      },
      desc: {
        ru: "Физическое моделирование позволяет наглядно понять гибридизацию орбиталей (sp³, sp², sp), углы связей, геометрию мицелл и образование водородных мостиков. Этот навык напрямую перекликается с интерактивным Реактором в нашей платформе Chemistry Explorer, где можно соединять атомы в реальном времени.",
        kk: "Көрнекі модельдеу орбитальдардың гибридизациясын (sp³, sp², sp), байланыс бұрыштарын және сутектік байланыстардың түзілуін оңай түсінуге жол ашады.",
        en: "Hands-on assembly reinforces spatial intuition of orbital hybridization (sp³, sp², sp), bond strain angles, micelle formation, and hydrogen bonding networks."
      },
      image: "/images/kz_chemistry/school_lab_5.jpg",
      imageCaption: {
        ru: "Презентация объемных макетов молекулярных и биохимических структур",
        kk: "Молекулалық және биохимиялық құрылымдардың көлемді макеттерін қорғау",
        en: "Students showcasing assembled molecular structures and biochemical displays"
      },
      quote: {
        ru: "«Когда ученик может взять молекулу в руки или собрать её в симуляторе — химия становится осязаемой.»",
        kk: "«Оқушы молекуланы өз қолымен ұстап немесе симуляторда жинаған кезде — химия нақты түсінікті болады.»",
        en: "“When a student can hold a molecule in their hands or construct it in simulation, chemistry becomes truly intuitive.”"
      }
    },
    {
      step: "05",
      icon: Compass,
      tag: {
        ru: "МЕЖДИСЦИПЛИНАРНЫЕ ИССЛЕДОВАНИЯ",
        kk: "ПӘНАРАЛЫҚ ЗЕРТТЕУЛЕР",
        en: "CROSS-DISCIPLINARY RESEARCH"
      },
      title: {
        ru: "Химия планетных атмосфер и фундаментальные проекты",
        kk: "Ғаламшарлық атмосфералар химиясы және іргелі зерттеулер",
        en: "Planetary Atmospheric Chemistry & Fundamental Inquiries"
      },
      lead: {
        ru: "Проекты учеников выходят далеко за рамки школьного учебника — в область астрохимии, геохимии и физической химии экстремальных состояний.",
        kk: "Оқушылардың ғылыми жобалары оқулық шеңберінен шығып, астрохимия, геохимия және экстремалды күйлер химиясын қамтиды.",
        en: "Student research ventures beyond standard curricula into astrochemistry, planetary gas kinetics, and extreme-condition thermodynamics."
      },
      desc: {
        ru: "На постерах подробно анализируются химические составы газовых оболочек планет-гигантов, термодинамические фазовые переходы метана и водорода при сверхвысоких давлениях, а также условия стабильности органических молекул в космосе. Это академический уровень, высоко оцениваемый на международных конкурсах.",
        kk: "Постерлерде алып ғаламшарлардың газдық құрамы, жоғары қысымдағы метан мен сутектің термодинамикалық фазалық ауысулары жан-жақты талданады.",
        en: "Research posters detail the atmospheric compositions of gas giants, phase transitions under extraterrestrial pressures, and prebiotic molecular stability in interplanetary environments."
      },
      image: "/images/kz_chemistry/school_lab_4.jpg",
      imageCaption: {
        ru: "Защита исследовательского постера: сравнительный анализ химических сред планет",
        kk: "Зерттеу постерін қорғау: ғаламшарлардың химиялық орталарын салыстырмалы талдау",
        en: "Student defending an analytical poster on planetary atmospheric chemical environments"
      },
      quote: {
        ru: "«Широкий научный кругозор и смелость исследовать неизведанное — главное качество молодых учёных Казахстана.»",
        kk: "«Кең ғылыми өріс пен жаңаны зерттеуге деген батылдық — Қазақстанның жас ғалымдарының басты қасиеті.»",
        en: "“Broad intellectual curiosity and the courage to explore the unknown define the next generation of Kazakhstani scientists.”"
      }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-16 animate-fadeIn font-sans">
      
      {/* 1. Grand Hero Showcase */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-[#141630] to-[#090b16] border border-slate-200/20 dark:border-white/[0.12] p-8 sm:p-12 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7c6ff6]/20 rounded-full blur-[100px] pointer-events-none" />
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

      {/* 3. The Visual Narrative Timeline (5 Alternating High-Impact Chapters) */}
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

      {/* 4. Bottom Summary Banner */}
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

      {/* 5. Lightbox Modal Preview on Click */}
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
