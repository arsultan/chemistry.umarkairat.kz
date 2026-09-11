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
  ExternalLink,
  ChevronRight,
  Maximize2,
  X,
  CheckCircle2,
  ShieldCheck,
  Cpu
} from "lucide-react";

interface EducationKzViewProps {
  language: Language;
  onGoToLab?: () => void;
}

export const EducationKzView: React.FC<EducationKzViewProps> = ({
  language,
  onGoToLab
}) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string; tag: string } | null>(null);

  const t = {
    badge: {
      ru: "🇰🇿 Республиканские инновации & NGS (Алматы)",
      kk: "🇰🇿 Республикалық инновациялар & NGS (Алматы)",
      en: "🇰🇿 Kazakhstan Education & NGS Innovation"
    },
    title: {
      ru: "Развитие Химической Науки и Образования в Казахстане и NGS",
      kk: "Қазақстанда және NGS мектебінде Химия Ғылымы мен Білімінің Дамуы",
      en: "Development of Chemistry Science & Education in Kazakhstan and NGS"
    },
    subtitle: {
      ru: "От школьных лабораторий нового поколения до цифровых симуляций, олимпиад РНПЦ «Дарын» и международных стандартов ISEF.",
      kk: "Жаңа буын мектеп зертханаларынан бастап цифрлық модельдеуге, «Дарын» олимпиадаларына және ISEF халықаралық стандарттарына дейін.",
      en: "From new-generation school laboratories to digital simulations, Daryn olympiads, and ISEF international research standards."
    },
    
    // Stats
    stat1Number: "100%",
    stat1Label: {
      ru: "Безопасность экспериментов",
      kk: "Тәжірибелер қауіпсіздігі",
      en: "Experiment Safety"
    },
    stat2Number: "118 / 51",
    stat2Label: {
      ru: "Элементов и Молекул в интерактиве",
      kk: "Интерактивті Элементтер мен Молекулалар",
      en: "Interactive Elements & Molecules"
    },
    stat3Number: "ISEF & Дарын",
    stat3Label: {
      ru: "Олимпийский стандарт исследований",
      kk: "Олимпиадалық зерттеу стандарты",
      en: "Olympiad Research Standard"
    },

    // Section 1
    sec1Tag: { ru: "НАЦИОНАЛЬНЫЙ КОНТЕКСТ", kk: "ҰЛТТЫҚ КОНТЕКСТ", en: "NATIONAL CONTEXT" },
    sec1Title: {
      ru: "Цифровизация и современный подход к химии в Казахстане",
      kk: "Қазақстандағы химияны цифрландыру және заманауи тәсіл",
      en: "Digitalization & Modern Chemistry Education in Kazakhstan"
    },
    sec1Text: {
      ru: `В последние годы школьное химическое образование в Республике Казахстан переживает масштабную трансформацию. Согласно нормативным требованиям Министерств образования и просвещения РК (включая Приказ № 99), особое внимание уделяется безопасности учащихся при проведении практических опытов с токсичными, летучими или высоковольтными реактивами. 

Цифровизация образования и внедрение веб-симуляторов (таких как Chemistry Explorer) позволяют каждому школьнику безопасно моделировать сложные химические реакции, изучать законы термодинамики, растворимости и строения атома в любое время и на любом устройстве.`,
      kk: `Соңғы жылдары Қазақстан Республикасындағы мектептік химиялық білім беру ауқымды трансформациядан өтуде. ҚР Оқу-ағарту министрлігінің нормативтік талаптарына сәйкес (№ 99 бұйрықты қоса алғанда), оқушылардың улы, ұшпа немесе қауіпті реактивтермен жұмыс істеу кезіндегі қауіпсіздігіне ерекше көңіл бөлінеді.

Білім беруді цифрландыру және Chemistry Explorer сияқты веб-симуляторларды енгізу әрбір оқушыға күрделі химиялық реакцияларды қауіпсіз модельдеуге, термодинамика, ерігіштік және атом құрылысы заңдарын кез келген құрылғыда зерттеуге мүмкіндік береді.`,
      en: `In recent years, K-12 chemistry education in the Republic of Kazakhstan has undergone a major digital evolution. Aligned with National Ministry of Education safety regulations (including Order No. 99 regarding high-hazard laboratory substances), digital learning solutions offer safe, accessible laboratory practice.

Platforms like Chemistry Explorer allow students across Kazakhstan to explore high-risk inorganic reactions, thermodynamics, aqueous solubility matrices, and quantum electron structures risk-free.`
    },

    // Section 2
    sec2Tag: { ru: "ЛАБОРАТОРНЫЙ КОМПЛЕКС NGS", kk: "NGS ЗЕРТХАНАЛЫҚ КЕШЕНІ", en: "NGS LAB COMPLEX" },
    sec2Title: {
      ru: "Инновационная научно-исследовательская среда в New Generation School",
      kk: "New Generation School мектебіндегі инновациялық зерттеу ортасы",
      en: "State-of-the-Art Research Environment at New Generation School (NGS)"
    },
    sec2Text: {
      ru: `Школа New Generation School (NGS) в Алматы создала один из самых передовых химико-биологических лабораторных комплексов. Зона практических исследований оснащена высокоточными оптическими микроскопами, цифровыми датчиками, интерактивными дисплеями и наборами для поатомного моделирования.

Учащиеся NGS не просто изучают сухую теорию из учебников — они участвуют в проектной деятельности, исследуют состав экосистем, моделируют биохимические процессы, выставляют свои работы на ежегодной научном фестивале NGS Science Fair и готовят исследовательские работы для РНПЦ «Дарын» и международной выставки Intel ISEF.`,
      kk: `Алматы қаласындағы New Generation School (NGS) мектебі ең заманауи химия-биологиялық зертханалық кешенді құрды. Практикалық зерттеу аймағы жоғары дәлдіктегі оптикалық микроскоптармен, цифрлық сенсорлармен, интерактивті дисплейлермен және атомдық модельдеу жиынтықтарымен жабдықталған.

NGS оқушылары тек оқулықтағы теорияны оқып қана қоймай, жобалық қызметке белсене қатысады, экожүйелер құрамын зерттейді, жыл сайынғы NGS Science Fair ғылыми фестиваліне өз жобаларын ұсынады және «Дарын» РНПЦ мен Intel ISEF халықаралық көрмесіне ғылыми жұмыстар дайындайды.`,
      en: `New Generation School (NGS) in Almaty features a state-of-the-art chemical and biological laboratory hub. Equipped with precision optical microscopes, digital sensor arrays, smart displays, and hands-on molecular construction kits.

Students at NGS actively engage in genuine scientific research—from analyzing environmental micro-samples to presenting research posters at the annual NGS Science Fair and preparing competitive science projects for Daryn and ISEF.`
    },

    galleryTitle: {
      ru: "Фотогалерея: Лабораторная жизнь и проекты NGS",
      kk: "Фотогалерея: NGS зертханалық өмірі мен жобалары",
      en: "Photo Gallery: Laboratory Life & Projects at NGS"
    },
    gallerySubtitle: {
      ru: "Нажмите на любое фото для увеличения и подробного описания",
      kk: "Толығырақ көру үшін кез келген фотоны басыңыз",
      en: "Click any photo to enlarge and read description"
    },

    editableNoticeTitle: {
      ru: "📝 Черновик текста (Вы можете отредактировать эти данные)",
      kk: "📝 Мәтін жобасы (Бұл деректерді өңдеуге болады)",
      en: "📝 Draft Text Notice (You can customize any phrasing below)"
    },
    editableNoticeText: {
      ru: "Представленный выше текст является базовым шаблоном. Мы можем скорректировать любые формулировки, добавить имена преподавателей, название секций или конкретные достижения вашей школы!",
      kk: "Жоғарыда берілген мәтін негізгі үлгі болып табылады. Мұғалімдердің есімдерін, секция атауларын немесе мектептің нақты жетістіктерін қосу арқылы кез келген сөйлемді өзгерте аламыз!",
      en: "The text above serves as a draft outline. You can request any edit, adjust names of teachers, sections, or specific milestones for your school!"
    },

    ctaLabBtn: {
      ru: "Перейти в Лабораторию Реакций 🧪",
      kk: "Реакциялар зертханасына өту 🧪",
      en: "Go to Reaction Lab 🧪"
    }
  };

  const selectedPhotos = [
    {
      id: "lab_group",
      src: "/images/kz_chemistry/school_lab_10.jpg",
      tag: language === 'kk' ? 'Зертханалық кешен' : language === 'en' ? 'Lab Facility' : 'Лабораторный комплекс',
      title: {
        ru: "Учебный химический лабораторный комплекс NGS (г. Алматы)",
        kk: "NGS мектебінің оқу-химиялық зертханалық кешені (Алматы қ.)",
        en: "NGS Science & Chemistry Laboratory Hub (Almaty)"
      },
      desc: {
        ru: "Учащиеся и преподаватели химико-биологического направления в современной учебной аудитории NGS, оснащённой стендами Периодической таблицы и Таблицы растворимости.",
        kk: "NGS заманауи оқу аудиториясындағы химия-биология бағытының оқушылары мен мұғалімдері.",
        en: "Chemistry & Biology students and faculty inside the high-tech NGS laboratory suite."
      }
    },
    {
      id: "interactive_lesson",
      src: "/images/kz_chemistry/school_lab_7.jpg",
      tag: language === 'kk' ? 'Интерактивті сабақ' : language === 'en' ? 'Interactive Lesson' : 'Интерактивный урок',
      title: {
        ru: "Практическая микроскопия и исследование микрообъектов",
        kk: "Тәжірибелік микроскопия және микрообъектілерді зерттеу",
        en: "Hands-on Optical Microscopy & Chemical Analysis"
      },
      desc: {
        ru: "Интерактивный урок химии и биологии с использованием микроскопов, цифровых образцов и интерактивной смарт-панели для наглядного разбора структур.",
        kk: "Құрылымдарды көрнекі түрде талдау үшін микроскоптар мен смарт-панельді пайдалану арқылы химия сабағы.",
        en: "Interactive science lab session employing precision optical microscopes and digital smartboards."
      }
    },
    {
      id: "science_fair",
      src: "/images/kz_chemistry/school_lab_14.jpg",
      tag: language === 'kk' ? 'Ғылыми көрме' : language === 'en' ? 'Science Fair' : 'Научная выставка',
      title: {
        ru: "Фестиваль исследовательских проектов NGS Science Fair",
        kk: "NGS Science Fair ғылыми зерттеу жобаларының фестивалі",
        en: "Annual NGS Science Fair & Project Exhibition"
      },
      desc: {
        ru: "Масштабная презентация школьных научных проектов: биосферные модели, постерные доклады, экологические и химико-технологические разработки.",
        kk: "Мектептік ғылыми жобалардың масштабты презентациясы: биосфералық модельдер, постерлік баяндамалар.",
        en: "Exhibition hall with student scientific demonstrations, environmental chemistry models, and posters."
      }
    },
    {
      id: "models_3d",
      src: "/images/kz_chemistry/school_lab_5.jpg",
      tag: language === 'kk' ? '3D Модельдеу' : language === 'en' ? '3D Modeling' : '3D Моделирование',
      title: {
        ru: "Моделирование биохимических систем и пространственных структур",
        kk: "Биохимиялық жүйелер мен кеңістіктік құрылымдарды модельдеу",
        en: "3D Biochemical & Molecular Structure Modeling"
      },
      desc: {
        ru: "Ученики демонстрируют объёмные наглядные модели биохимических систем, мицелл и процессов набора массы для практического изучения законов природы.",
        kk: "Оқушылар табиғат заңдарын практикалық түрде зерттеу үшін биохимиялық жүйелердің 3D модельдерін көрсетеді.",
        en: "Students highlighting 3D physical models of biochemical structures and organic process displays."
      }
    },
    {
      id: "poster_astro",
      src: "/images/kz_chemistry/school_lab_4.jpg",
      tag: language === 'kk' ? 'Исследовательский постер' : language === 'en' ? 'Research Poster' : 'Исследовательский постер',
      title: {
        ru: "Постерные доклады по междисциплинарной химии и астрохимии",
        kk: "Пәнаралық химия және астрохимия бойынша постерлік баяндамалар",
        en: "Student Poster Defense in Astrochemistry & Chemical Composition"
      },
      desc: {
        ru: "Исследование состава газовых атмосфер планет Солнечной системы, давления и температурных условий — пример широкого кругозора учащихся.",
        kk: "Күн жүйесі ғаламшарларының газдық атмосферасының құрамын, қысымын және температуралық жағдайларын зерттеу.",
        en: "Interdisciplinary research defense analyzing atmospheric chemical compositions of planetary systems."
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8 animate-fadeIn font-sans">
      
      {/* Hero Banner Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-[#151733] to-[#0c0d1a] border border-slate-200/20 dark:border-white/[0.12] p-6 sm:p-10 text-white shadow-2xl">
        {/* Soft violet ambient glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7c6ff6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-[#c4b5fd]">
            <Sparkles className="w-4 h-4 text-[#7c6ff6]" />
            <span>{t.badge[language]}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white font-sans">
            {t.title[language]}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            {t.subtitle[language]}
          </p>

          {/* Quick CTA Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {onGoToLab && (
              <button
                onClick={() => {
                  soundEffects.playAtomAdd();
                  onGoToLab();
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#6366f1] via-[#7c6ff6] to-[#a59bfb] text-white font-mono font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(124,111,246,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>{t.ctaLabBtn[language]}</span>
              </button>
            )}
          </div>
        </div>

        {/* Stats Grid overlay inside Hero */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-extrabold font-mono text-emerald-400">{t.stat1Number}</div>
              <div className="text-xs text-slate-300 font-sans">{t.stat1Label[language]}</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7c6ff6]/20 text-[#a59bfb] flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-extrabold font-mono text-[#a59bfb]">{t.stat2Number}</div>
              <div className="text-xs text-slate-300 font-sans">{t.stat2Label[language]}</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-extrabold font-mono text-amber-400">{t.stat3Number}</div>
              <div className="text-xs text-slate-300 font-sans">{t.stat3Label[language]}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Editable Text Notice Callout */}
      <div className="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-900 dark:text-amber-200 flex items-start gap-3 text-xs sm:text-sm font-sans">
        <Edit3 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-amber-800 dark:text-amber-300 font-mono">
            {t.editableNoticeTitle[language]}
          </h4>
          <p className="leading-relaxed opacity-90">
            {t.editableNoticeText[language]}
          </p>
        </div>
      </div>

      {/* Section 1: National Context */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0e0f1c] border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5" />
          <span>{t.sec1Tag[language]}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          {t.sec1Title[language]}
        </h2>

        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line font-sans">
          {t.sec1Text[language]}
        </div>
      </div>

      {/* Section 2: NGS Laboratory Complex */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0e0f1c] border border-slate-200 dark:border-white/[0.08] shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#7c6ff6]/10 text-[#7c6ff6] dark:text-[#a59bfb] font-mono text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5" />
          <span>{t.sec2Tag[language]}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          {t.sec2Title[language]}
        </h2>

        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line font-sans">
          {t.sec2Text[language]}
        </div>
      </div>

      {/* Section 3: Photo Gallery of Selected School Images */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight font-sans">
              {t.galleryTitle[language]}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
              {t.gallerySubtitle[language]}
            </p>
          </div>
        </div>

        {/* Responsive Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {selectedPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => {
                soundEffects.playAtomAdd();
                setSelectedImage({
                  src: photo.src,
                  caption: photo.desc[language],
                  tag: photo.title[language]
                });
              }}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#131428] border border-slate-200 dark:border-white/[0.08] hover:border-[#7c6ff6] shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={photo.src}
                  alt={photo.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Tag Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold">
                  {photo.tag}
                </div>

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Text Description Below Photo */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white font-sans group-hover:text-[#7c6ff6] dark:group-hover:text-[#a59bfb] transition-colors">
                  {photo.title[language]}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                  {photo.desc[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Image Preview Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.tag}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-5 sm:p-6 bg-slate-900 text-white space-y-2">
              <h3 className="text-base sm:text-lg font-bold font-sans text-indigo-300">
                {selectedImage.tag}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
