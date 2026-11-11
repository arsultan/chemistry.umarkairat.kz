"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Atom, FlaskConical, Beaker, Bot, Trophy, Target, AlertTriangle,
  Sparkles, ChevronLeft, ChevronRight, Maximize, ExternalLink, Globe,
  Table2, Rocket, StickyNote, Layers, BookOpen, TestTube2, Network,
} from "lucide-react";
import { Molecule3DCanvas, MOLECULES } from "./Molecule3DCanvas";

const SITE = "https://chemistry.umarkairat.kz";
const QR = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(SITE)}&bgcolor=ffffff&color=1c1917&margin=10`;

/* palette: warm paper, ink, one copper accent, one sage secondary */
const INK = "text-[#1c1917]";
const ACC = "text-[#b4532a]";

type Slide = { tag: string; title: string; icon: React.ElementType; body: React.ReactNode; notes: string };

const delay = (n: number) => ({ animationDelay: `${120 + n * 90}ms` });
const Rise = ({ n = 0, children, className = "" }: { n?: number; children: React.ReactNode; className?: string }) => (
  <div className={`rise ${className}`} style={delay(n)}>{children}</div>
);

const Card = ({ icon: Icon, title, text, n = 0 }: { icon: React.ElementType; title: string; text: string; n?: number }) => (
  <Rise n={n}>
    <div className="h-full p-5 rounded-xl bg-white border border-stone-300/80 shadow-[0_1px_0_rgba(28,25,23,0.04)] hover:-translate-y-0.5 hover:shadow-md hover:border-[#b4532a]/50 transition-all duration-300">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 bg-[#b4532a]/10 text-[#b4532a]">
        <Icon className="w-[18px] h-[18px]" />
      </div>
      <h3 className={`font-semibold text-base mb-1 ${INK}`}>{title}</h3>
      <p className="text-stone-600 text-sm leading-relaxed">{text}</p>
    </div>
  </Rise>
);

const Stat = ({ value, label, n = 0 }: { value: string; label: string; n?: number }) => (
  <Rise n={n}>
    <div className="text-center p-4 rounded-xl bg-white border border-stone-300/80">
      <div className={`font-serif text-3xl sm:text-4xl font-semibold ${ACC}`}>{value}</div>
      <div className="text-stone-600 text-xs sm:text-sm mt-1">{label}</div>
    </div>
  </Rise>
);

const LiveBtn = ({ label = "Показать вживую" }: { label?: string }) => (
  <a href="/" target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-[#1c1917] text-white hover:bg-[#b4532a] text-sm font-medium transition-colors active:scale-95">
    {label} <ExternalLink className="w-4 h-4" />
  </a>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((t, i) => (
      <li key={t} className="rise flex gap-3 text-stone-800 text-base sm:text-lg leading-snug" style={delay(i)}>
        <span className="w-4 h-px bg-[#b4532a] shrink-0 mt-3" />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

const Chips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((c, i) => (
      <span key={c} className="rise px-3 py-1.5 rounded-full text-xs sm:text-sm bg-white border border-stone-300 text-stone-700" style={delay(i / 2)}>{c}</span>
    ))}
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <div className={`${ACC} font-mono text-[11px] tracking-[0.22em] mb-3`}>{children}</div>
);

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div className="p-5 rounded-xl bg-white border border-stone-300/80 border-l-[3px] border-l-[#b4532a]">{children}</div>
);

const Stage = ({ children, h = "h-[280px] sm:h-[340px]" }: { children: React.ReactNode; h?: string }) => (
  <div className={`relative ${h}`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(180,83,42,0.10),transparent_62%)]" />
    {children}
  </div>
);

const MolViewer = () => {
  const [k, setK] = useState(0);
  const m = MOLECULES[k];
  return (
    <div className="rounded-2xl bg-white border border-stone-300/80 overflow-hidden shadow-sm">
      <div className="relative h-[290px] sm:h-[340px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(180,83,42,0.12),transparent_65%)]" />
        <Molecule3DCanvas molecule={m} className="absolute inset-0 w-full h-full" />
        <div className="absolute top-4 left-5">
          <div className={`font-serif text-2xl font-semibold ${INK}`}>{m.formula}</div>
          <div className="text-sm text-stone-500">{m.name}</div>
        </div>
        <div className="absolute bottom-3 right-4 text-[11px] font-mono text-stone-400">тяни, чтобы вращать</div>
      </div>
      <div className="flex flex-wrap gap-2 p-3 border-t border-stone-200 bg-stone-50">
        {MOLECULES.map((x, idx) => (
          <button key={x.formula} id={`mol-${idx}`} onClick={() => setK(idx)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${idx === k ? "bg-[#1c1917] text-white" : "bg-white border border-stone-300 text-stone-700 hover:border-[#b4532a]"}`}>
            {x.formula}
          </button>
        ))}
      </div>
    </div>
  );
};

/* ---------- slides: facts come from the site's code; notes sized for a 7-minute talk ---------- */

const slides: Slide[] = [
  {
    tag: "Научный проект", title: "Chemistry Explorer", icon: Atom,
    body: (
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <Rise><p className="font-serif text-xl sm:text-3xl text-stone-800 leading-snug">
            Интерактивная лаборатория химических открытий для школьников
          </p></Rise>
          <Rise n={1}>
            <div className="inline-flex flex-col gap-1 px-6 py-4 rounded-xl bg-white border border-stone-300/80 border-l-[3px] border-l-[#b4532a] text-left">
              <span className={`text-lg font-semibold ${INK}`}>Автор: Кайрат Умар</span>
              <span className="text-stone-600">New Generation School (NGS), г. Астана</span>
            </div>
          </Rise>
          <Rise n={2}><div className={`flex items-center justify-center lg:justify-start gap-2 ${ACC} font-mono text-sm`}>
            <Globe className="w-4 h-4" /> chemistry.umarkairat.kz
          </div></Rise>
        </div>
        <Stage h="h-[300px] sm:h-[400px]">
          <Molecule3DCanvas molecule={MOLECULES[4]} className="absolute inset-0 w-full h-full" />
        </Stage>
      </div>
    ),
    notes: "Здравствуйте, уважаемые члены комиссии! Меня зовут Кайрат Умар, я учусь в New Generation School в Астане. Представляю проект Chemistry Explorer — интерактивную лабораторию химических открытий. Позади вращается молекула бензола: такие модели есть на моём сайте. Сайт работает онлайн, в конце вы сможете открыть его на телефоне.",
  },
  {
    tag: "Актуальность и цель", title: "Зачем нужен проект", icon: AlertTriangle,
    body: (
      <div className="space-y-5">
        <div className="grid sm:grid-cols-3 gap-4">
          <Card n={0} icon={BookOpen} title="Химию нельзя увидеть" text="Атомы и связи остаются абстракцией: ученики заучивают формулы, не понимая строения вещества." />
          <Card n={1} icon={FlaskConical} title="Нет лабораторий" text="Не хватает реактивов и оборудования, а часть опытов опасна: кислоты, щёлочи, токсичные газы." />
          <Card n={2} icon={Target} title="Низкая мотивация" text="Статичный учебник проигрывает телефону. Нужен интерес и обратная связь." />
        </div>
        <Rise n={3}><Panel>
          <Label>ЦЕЛЬ</Label>
          <p className={`font-serif text-lg sm:text-xl leading-relaxed ${INK}`}>Создать онлайн-платформу, которая делает химию наглядной и безопасной, привязана к школьной программе Казахстана и работает на трёх языках.</p>
        </Panel></Rise>
      </div>
    ),
    notes: "Химию нельзя увидеть, поэтому ученики часто просто заучивают формулы. Во многих школах нет хорошей лаборатории, а часть опытов опасна. Поэтому моя цель — сделать онлайн-платформу, где химию можно наглядно и безопасно исследовать, на казахском, русском и английском, в соответствии со школьной программой.",
  },
  {
    tag: "Решение", title: "Платформа целиком", icon: Layers,
    body: (
      <div className="space-y-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Stat n={0} value="118" label="элементов" />
          <Stat n={1} value="151" label="вещество в базе" />
          <Stat n={2} value="241" label="вопрос в квизе" />
          <Stat n={3} value="3" label="языка: RU · KK · EN" />
        </div>
        <Rise n={4}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm text-stone-800">
            {["Таблица Менделеева", "Лаборатория синтеза", "pH-лаборатория", "Растворимость", "Классификация", "Журнал открытий", "Квизы и квесты", "Наука в РК и NGS"].map((m) => (
              <div key={m} className="py-3 rounded-lg bg-white border border-stone-300/80">{m}</div>
            ))}
          </div>
        </Rise>
        <Rise n={5}><div className="text-center text-stone-600">Плюс ИИ-ассистент, светлая и тёмная тема, режим презентации</div></Rise>
      </div>
    ),
    notes: "Вот что получилось: платформа из восьми разделов. В базе 118 элементов, 151 вещество, 241 вопрос для квиза и три языка. Сейчас коротко пройдусь по главным разделам.",
  },
  {
    tag: "Раздел 1", title: "Периодическая таблица", icon: Table2,
    body: (
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <Bullets items={[
            "118 элементов IUPAC и 8-й период с гипотетическими элементами 119 и 120",
            "Карточка элемента: модель Бора, электронная конфигурация, спектр, история открытия",
            "Фильтры: 10 категорий, блоки s, p, d, f, агрегатное состояние",
            "Термометр 0–6000 К: фазовое состояние всех элементов меняется на лету",
          ]} />
          <LiveBtn label="Открыть таблицу" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Stat n={0} value="118" label="элементов IUPAC" />
          <Stat n={1} value="10" label="категорий веществ" />
          <Stat n={2} value="4" label="блока: s, p, d, f" />
          <Stat n={3} value="6000 К" label="предел термометра" />
        </div>
      </div>
    ),
    notes: "Первый раздел — таблица Менделеева. Все 118 элементов и восьмой период. У каждого элемента карточка с анимированной моделью Бора, электронной конфигурацией и историей открытия. Особенно люблю термометр: двигаешь ползунок от нуля до шести тысяч кельвинов, и у всех элементов сразу меняется агрегатное состояние. [Открыть сайт, показать термометр]",
  },
  {
    tag: "Раздел 2", title: "Лаборатория синтеза", icon: FlaskConical,
    body: (
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <Bullets items={[
            "Атомы кладутся в камеру, система считает формулу и молярную массу",
            "151 вещество: газы, кислоты, минералы, топливо, органика",
            "Нагрев до 1200 К и катализатор для барьера активации",
            "Для каждого вещества: геометрия, опасность, применение, научный факт",
          ]} />
          <LiveBtn label="Синтезировать H₂O" />
        </div>
        <MolViewer />
      </div>
    ),
    notes: "Второй раздел — лаборатория синтеза. Выбираешь атомы, кладёшь в камеру, и система считает формулу и молярную массу. Можно нагреть до тысячи двухсот кельвинов или добавить катализатор. Получилось настоящее вещество — открывается окно с формулой, классом опасности и применением. Всего 151 вещество. Справа 3D-модели, их можно вращать мышкой. [Показать вживую: синтез воды]",
  },
  {
    tag: "Раздел 3", title: "pH-лаборатория", icon: Beaker,
    body: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div>
            <Label>13 РАСТВОРОВ · ШКАЛА pH 0–14</Label>
            <Chips items={["HCl 1 M · 0,0", "Желудочный сок · 1,5", "Лимонный сок · 2,4", "Уксус · 2,9", "Томатный сок · 4,2", "Кофе · 5,0", "Молоко · 6,6", "Вода · 7,0", "Морская вода · 8,2", "NaHCO₃ · 8,5", "Мыльный раствор · 10,0", "Аммиак · 11,5", "NaOH 1 M · 14,0"]} />
          </div>
          <div>
            <Label>5 ИНДИКАТОРОВ</Label>
            <Chips items={["Универсальный", "Лакмус", "Фенолфталеин", "Метилоранж", "Краснокочанная капуста"]} />
          </div>
        </div>
        <div>
          <Bullets items={[
            "Анимированная пипетка и виртуальный pH-электрод",
            "Расчёт концентраций [H⁺] и [OH⁻] в моль/л",
            "Спектрофотометрический график поглощения",
          ]} />
          <LiveBtn label="Открыть pH-лабораторию" />
        </div>
      </div>
    ),
    notes: "Третий раздел — pH-лаборатория. Тринадцать реальных растворов: от соляной кислоты с pH ноль до едкого натра с pH четырнадцать, между ними желудочный сок, уксус, кофе, молоко, морская вода. Пять индикаторов, включая сок краснокочанной капусты. Капаешь пипеткой — цвет меняется, а сайт считает концентрации ионов H⁺ и OH⁻.",
  },
  {
    tag: "Раздел 4", title: "Растворимость и пробирка", icon: TestTube2,
    body: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div className="grid grid-cols-3 gap-3">
            <Stat n={0} value="15" label="катионов" />
            <Stat n={1} value="14" label="анионов" />
            <Stat n={2} value="210" label="комбинаций" />
          </div>
          <Rise n={3}><Panel>
            <Label>ОБОЗНАЧЕНИЯ</Label>
            <div className="text-stone-700 text-sm leading-relaxed">
              <b className={INK}>Р</b> растворимо · <b className={INK}>М</b> малорастворимо · <b className={INK}>Н</b> нерастворимо (осадок с цветом) · <b className={INK}>—</b> разлагается водой · <b className={INK}>Г</b> газ
            </div>
          </Panel></Rise>
          <div className="text-stone-600 text-sm">12 качественных реакций с полными ионными уравнениями</div>
        </div>
        <div>
          <Label>ВИРТУАЛЬНАЯ ПРОБИРКА</Label>
          <Bullets items={[
            "Температура 20–100 °C, горелка Бунзена, ледяная баня, встряхивание",
            "«Золотой дождь»: PbI₂ растворяется при 100 °C и кристаллизуется при охлаждении",
            "Cu(OH)₂ выше 75 °C разлагается в чёрный CuO",
            "Fe(OH)₂ на воздухе буреет в Fe(OH)₃, Al(OH)₃ растворяется в избытке щёлочи",
          ]} />
          <LiveBtn label="Открыть пробирку" />
        </div>
      </div>
    ),
    notes: "Четвёртый раздел — таблица растворимости: пятнадцать катионов, четырнадцать анионов, двести десять комбинаций, и двенадцать качественных реакций с ионными уравнениями. В виртуальной пробирке можно греть на горелке Бунзена или охлаждать льдом. Красивый опыт — «золотой дождь»: иодид свинца растворяется при ста градусах и кристаллизуется при охлаждении. [Показать вживую]",
  },
  {
    tag: "Раздел 5", title: "Классификация веществ", icon: Network,
    body: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <Label>5 ВКЛАДОК МОДУЛЯ</Label>
          <Bullets items={[
            "Схема классификации в виде дерева",
            "Каталог веществ с формулами и реакциями",
            "Генетические ряды: кальций (металл) и сера (неметалл) с уравнениями по шагам",
            "Матрица взаимодействия классов и тренажёр",
          ]} />
        </div>
        <div className="space-y-4">
          <Label>ЧТО КЛАССИФИЦИРУЕТСЯ</Label>
          <Chips items={["Простые: металлы, неметаллы, инертные газы", "Оксиды: основные, кислотные, амфотерные, несолеобразующие, пероксиды", "Основания: щёлочи, нерастворимые, амфотерные", "Кислоты: бескислородные и оксокислоты", "Соли: средние, кислые, основные, комплексные", "Бинарные: гидриды, карбиды, нитриды"]} />
          <div className="text-stone-600 text-sm">У каждого соединения кнопка «Синтезировать в лаборатории»</div>
        </div>
      </div>
    ),
    notes: "Пятый раздел — классификация неорганических веществ, то есть школьная программа 8–9 классов: оксиды, основания, кислоты, соли. Есть схема-дерево, каталог, генетические ряды кальция и серы с уравнениями по шагам и матрица взаимодействия классов. Из каждого соединения можно сразу перейти в лабораторию и синтезировать его.",
  },
  {
    tag: "Раздел 6", title: "Квизы, квесты, сертификат", icon: Trophy,
    body: (
      <div className="grid lg:grid-cols-3 gap-5">
        <Rise n={0}><Panel>
          <Label>КВИЗ-АРЕНА</Label>
          <div className="space-y-2 text-stone-800 text-sm leading-relaxed">
            <div><b className={ACC + " font-serif text-2xl"}>241</b> вопрос, 6 категорий, 3 уровня</div>
            <div>Олимпиадный экзамен: 3 жизни, 25 с на вопрос</div>
            <div>Блиц 60 секунд, тематический тренажёр</div>
            <div>Подсказки 50/50 и ИИ, разбор ошибок</div>
          </div>
        </Panel></Rise>
        <Rise n={1}><Panel>
          <Label>8 КВЕСТОВ · 2050 XP</Label>
          <div className="space-y-1 text-stone-800 text-sm">
            {[["Живая вода", "100"], ["Кухонная химия", "150"], ["Дыхание планеты", "200"], ["Энергия и пламя", "250"], ["Кислоты и щёлочи", "300"], ["Сокровища недр", "300"], ["Сладкие углеводы", "350"], ["Ювелир", "400"]].map(([n, xp]) => (
              <div key={n} className="flex justify-between border-b border-stone-200 py-0.5"><span>{n}</span><span className="font-mono text-stone-500 text-xs">{xp} XP</span></div>
            ))}
          </div>
        </Panel></Rise>
        <Rise n={2}><Panel>
          <Label>ЖУРНАЛ И СЕРТИФИКАТ</Label>
          <div className="space-y-2 text-stone-800 text-sm leading-relaxed">
            <div>Журнал открытий: фильтры, поиск, ранги</div>
            <div>8 достижений, среди них «Богатства Казахстана»</div>
            <div>Печатный «Certificate of Chemical Discovery» с логотипом NGS и печатью «NGS Verified Lab»</div>
          </div>
        </Panel></Rise>
      </div>
    ),
    notes: "Шестой раздел — мотивация. Квиз-арена: двести сорок один вопрос, олимпиадный режим с тремя жизнями, блиц на минуту и тренажёр по темам. Восемь квестов на две тысячи пятьдесят очков, например «Живая вода» или «Ювелир». Все открытия идут в журнал, а за прогресс можно распечатать сертификат с печатью NGS Verified Lab.",
  },
  {
    tag: "Главная фишка", title: "ИИ-ассистент", icon: Bot,
    body: (
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <Bullets items={[
          "Работает на Google Gemini и отвечает на трёх языках",
          "Не только пишет текст: открывает элемент, загружает молекулу в лабораторию, запускает пробирку, переключает вкладки",
          "Знает программу 8–9, 10 и 11 классов",
          "Нет сети или нейросеть недоступна: работает встроенный офлайн-движок",
        ]} />
        <Rise n={2}>
          <div className="p-5 rounded-xl bg-white border border-stone-300/80 space-y-3 text-sm shadow-sm">
            <div className="ml-auto w-fit max-w-[85%] px-4 py-2 rounded-2xl rounded-br-sm bg-[#1c1917] text-white">Что такое серная кислота?</div>
            <div className="w-fit max-w-[92%] px-4 py-2 rounded-2xl rounded-bl-sm bg-stone-100 text-stone-800">H₂SO₄ — одна из важнейших кислот в химии, её называют «хлебом промышленности»…</div>
            <div className="w-fit px-3 py-1.5 rounded-lg border border-[#b4532a]/50 text-[#b4532a] text-xs">→ Открыть Серу (S) в таблице</div>
            <div className="w-fit px-3 py-1.5 rounded-lg border border-[#b4532a]/50 text-[#b4532a] text-xs">→ Синтезировать воду (H₂O) в реакторе</div>
          </div>
        </Rise>
      </div>
    ),
    notes: "Главная особенность проекта — ИИ-ассистент на Google Gemini. Он знает школьную программу и отвечает на трёх языках. Но он не только пишет текст: под ответом появляются кнопки — открыть элемент в таблице, загрузить молекулу в лабораторию, запустить пробирку. Если нет интернета, работает встроенный офлайн-движок знаний. [Если есть время — задать вопрос вживую]",
  },
  {
    tag: "Итоги", title: "Результаты и развитие", icon: Rocket,
    body: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <Label>ДОСТИГНУТО</Label>
            <Bullets items={[
              "Работающая платформа в открытом доступе",
              "118 элементов, 151 вещество, 241 вопрос, 8 квестов",
              "Три языка и раздел о науке Казахстана",
              "ИИ, который не только отвечает, но и действует",
            ]} />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <Label>ТЕХНОЛОГИИ</Label>
            <Chips items={["Next.js 16", "React", "TypeScript", "Tailwind CSS", "Google Gemini API", "домен .kz"]} />
          </div>
          <div>
            <Label>ПЛАНЫ</Label>
            <Bullets items={["Кабинет учителя и статистика класса", "Мобильное приложение", "Внедрение в NGS и школах Казахстана"]} />
          </div>
        </div>
      </div>
    ),
    notes: "Итоги: платформа работает онлайн, в ней 118 элементов, 151 вещество, 241 вопрос и восемь квестов. Сделана на современных технологиях — Next.js, React, TypeScript и Google Gemini. Дальше планирую кабинет учителя со статистикой, мобильное приложение и внедрение сначала в NGS, затем в других школах Казахстана.",
  },
  {
    tag: "Спасибо за внимание", title: "Попробуйте сами", icon: Sparkles,
    body: (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
        <Rise><div className="p-4 bg-white rounded-2xl border border-stone-300 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={QR} alt="QR-код сайта" className="w-52 h-52 sm:w-60 sm:h-60" />
        </div></Rise>
        <Rise n={1}><div className="space-y-4 text-center sm:text-left">
          <p className={`font-serif text-2xl font-semibold ${INK}`}>Отсканируйте камерой телефона</p>
          <div className={`flex items-center gap-2 ${ACC} font-mono text-lg justify-center sm:justify-start`}>
            <Globe className="w-5 h-5" /> chemistry.umarkairat.kz
          </div>
          <p className="text-stone-600">Кайрат Умар · NGS, г. Астана</p>
          <p className="text-stone-800 text-lg">Готов ответить на ваши вопросы</p>
        </div></Rise>
      </div>
    ),
    notes: "Спасибо за внимание! Вы можете прямо сейчас отсканировать QR-код и попробовать платформу на телефоне. Буду рад ответить на ваши вопросы.",
  },
];

/* slow drifting benzene outlines in the background: alive, but quiet */
const Hex = ({ className, size }: { className: string; size: number }) => (
  <svg className={`absolute ${className}`} width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="#b4532a" strokeWidth="0.6" opacity="0.14">
    <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" />
    <polygon points="50,20 76,35 76,65 50,80 24,65 24,35" />
  </svg>
);

export default function PresentationPage() {
  const [i, setI] = useState(0);
  const [notes, setNotes] = useState(false);
  const total = slides.length;

  const go = useCallback((d: number) => setI((p) => Math.min(total - 1, Math.max(0, p + d))), [total]);
  const fullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " ", "Enter"].includes(e.key)) { e.preventDefault(); go(1); }
      else if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) { e.preventDefault(); go(-1); }
      else if (e.key.toLowerCase() === "f" || e.key.toLowerCase() === "а") fullscreen();
      else if (e.key.toLowerCase() === "n" || e.key.toLowerCase() === "т") setNotes((n) => !n);
      else if (e.key === "Home") setI(0);
      else if (e.key === "End") setI(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, total]);

  const s = slides[i];
  const Icon = s.icon;
  const centered = i === 0 || i === total - 1;

  return (
    <main className="fixed inset-0 overflow-hidden bg-[#f5f1e8] text-stone-900 select-none" style={{ fontFamily: "var(--font-montserrat), Montserrat, system-ui, sans-serif" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Hex className="drift-a -top-24 -left-20" size={420} />
        <Hex className="drift-b -bottom-32 -right-16" size={520} />
        <Hex className="drift-c top-1/3 right-[12%]" size={150} />
      </div>

      {/* thin progress line */}
      <div className="absolute z-20 top-0 inset-x-0 h-[3px] bg-stone-300/50">
        <div className="h-full bg-[#b4532a] transition-all duration-500" style={{ width: `${((i + 1) / total) * 100}%` }} />
      </div>

      <section key={i} className="relative z-10 h-full overflow-y-auto px-16 sm:px-28 lg:px-36 pt-10 pb-24 fadeIn">
        <div className="min-h-full flex flex-col justify-center">
          <div className={`flex items-center gap-3 mb-3 ${centered ? "justify-center" : ""}`}>
            <Icon className={`w-4 h-4 ${ACC}`} />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-stone-500">{String(i + 1).padStart(2, "0")} — {s.tag}</span>
          </div>
          <h1 className={`font-serif text-3xl sm:text-5xl font-semibold tracking-tight ${INK} ${centered ? "text-center sm:text-6xl" : ""}`}>
            {s.title}
          </h1>
          <div className={`h-[3px] bg-[#b4532a] rounded-full mt-4 mb-8 grow-line ${centered ? "mx-auto" : ""}`} />
          <div className="max-w-6xl w-full mx-auto">{s.body}</div>
        </div>
      </section>

      <button id="prev-slide" onClick={() => go(-1)} disabled={i === 0} aria-label="Назад"
        className="absolute z-20 left-3 sm:left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center bg-white border border-stone-300 text-stone-700 shadow-sm hover:bg-[#1c1917] hover:text-white hover:scale-105 disabled:opacity-0 disabled:pointer-events-none transition-all duration-200">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button id="next-slide" onClick={() => go(1)} disabled={i === total - 1} aria-label="Вперёд"
        className="absolute z-20 right-3 sm:right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center bg-white border border-stone-300 text-stone-700 shadow-sm hover:bg-[#1c1917] hover:text-white hover:scale-105 disabled:opacity-0 disabled:pointer-events-none transition-all duration-200">
        <ChevronRight className="w-6 h-6" />
      </button>

      {notes && (
        <div className="absolute z-30 left-4 right-4 bottom-20 sm:left-auto sm:right-6 sm:w-[480px] max-h-[55vh] overflow-y-auto p-5 rounded-xl bg-white border border-stone-300 text-sm text-stone-800 leading-relaxed shadow-xl">
          <div className={`${ACC} font-mono text-[11px] mb-2 tracking-[0.22em]`}>ЧТО ГОВОРИТЬ · N</div>
          {s.notes}
        </div>
      )}

      <div className="absolute z-20 bottom-0 inset-x-0 px-6 py-5 flex items-center justify-between">
        <span className="font-mono text-xs text-stone-500 w-24">{String(i + 1).padStart(2, "0")} / {total}</span>
        <div className="flex items-center gap-1.5">
          {slides.map((_, k) => (
            <button key={k} id={`dot-${k + 1}`} onClick={() => setI(k)} aria-label={`Слайд ${k + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${k === i ? "w-7 bg-[#b4532a]" : "w-1.5 bg-stone-400/60 hover:bg-stone-600"}`} />
          ))}
        </div>
        <div className="flex items-center gap-2 w-24 justify-end">
          <button id="toggle-notes" onClick={() => setNotes((n) => !n)} title="Подсказки (N)" className={`p-2 rounded-lg transition ${notes ? "bg-[#1c1917] text-white" : "text-stone-500 hover:text-stone-900"}`}><StickyNote className="w-4 h-4" /></button>
          <button id="toggle-fullscreen" onClick={fullscreen} title="Полный экран (F)" className="p-2 rounded-lg text-stone-500 hover:text-stone-900 transition"><Maximize className="w-4 h-4" /></button>
        </div>
      </div>

      <style>{`
        .fadeIn{animation:fadeIn .45s ease-out both}
        .rise{opacity:0;animation:rise .6s cubic-bezier(.2,.7,.2,1) forwards}
        .grow-line{width:0;animation:grow .7s .1s ease-out forwards;max-width:96px}
        .drift-a{animation:driftA 40s ease-in-out infinite alternate}
        .drift-b{animation:driftB 55s ease-in-out infinite alternate}
        .drift-c{animation:driftC 30s ease-in-out infinite alternate}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        @keyframes grow{to{width:96px}}
        @keyframes driftA{to{transform:translate(60px,40px) rotate(18deg)}}
        @keyframes driftB{to{transform:translate(-50px,-30px) rotate(-14deg)}}
        @keyframes driftC{to{transform:translate(-30px,40px) rotate(30deg)}}
      `}</style>
    </main>
  );
}
