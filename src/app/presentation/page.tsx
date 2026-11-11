"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Atom, FlaskConical, Beaker, Bot, Trophy, Target, AlertTriangle,
  Sparkles, ChevronLeft, ChevronRight, Maximize, ExternalLink, Globe,
  Table2, Rocket, StickyNote, Layers, BookOpen, TestTube2, Network, Microscope,
} from "lucide-react";
import { Molecule3DCanvas, MOLECULES } from "./Molecule3DCanvas";

const SITE = "https://chemistry.umarkairat.kz";
const QR = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(SITE)}&bgcolor=ffffff&color=1c1917&margin=10`;

/* palette: warm paper + charcoal ink + one copper accent. Weights: 500 body, 700-800 headings, never thin */
const INK = "text-[#1c1917]";
const ACC = "text-[#b4532a]";

type Slide = { tag: string; title: string; icon: React.ElementType; body: React.ReactNode; notes: string; dark?: boolean };

const delay = (n: number) => ({ animationDelay: `${120 + n * 90}ms` });
const Rise = ({ n = 0, children, className = "" }: { n?: number; children: React.ReactNode; className?: string }) => (
  <div className={`rise ${className}`} style={delay(n)}>{children}</div>
);

/* hard offset shadow + ink border: looks printed, not template-generated */
const Card = ({ icon: Icon, title, text, n = 0 }: { icon: React.ElementType; title: string; text: string; n?: number }) => (
  <Rise n={n} className="h-full">
    <div className="h-full p-6 bg-white border-2 border-[#1c1917] rounded-lg shadow-[5px_5px_0_#1c1917] hover:-translate-y-1 hover:shadow-[5px_9px_0_#b4532a] transition-all duration-300">
      <div className="w-11 h-11 rounded-md flex items-center justify-center mb-4 bg-[#1c1917] text-white">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className={`font-bold text-lg mb-2 ${INK}`}>{title}</h3>
      <p className="text-stone-700 font-medium text-[15px] leading-relaxed">{text}</p>
    </div>
  </Rise>
);

const Stat = ({ value, label, n = 0 }: { value: string; label: string; n?: number }) => (
  <Rise n={n}>
    <div className="p-4 sm:p-5 bg-white border-2 border-[#1c1917] rounded-lg shadow-[4px_4px_0_#1c1917]">
      <div className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${ACC}`}>{value}</div>
      <div className="text-stone-800 font-semibold text-xs sm:text-sm mt-1">{label}</div>
    </div>
  </Rise>
);

const LiveBtn = ({ label = "Показать вживую" }: { label?: string }) => (
  <a href="/" target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-md bg-[#b4532a] text-white hover:bg-[#1c1917] text-sm font-bold transition-colors active:scale-95">
    {label} <ExternalLink className="w-4 h-4" />
  </a>
);

const Bullets = ({ items, light = false }: { items: string[]; light?: boolean }) => (
  <ul className="space-y-4">
    {items.map((t, i) => (
      <li key={t} className={`rise flex gap-3 font-semibold text-base sm:text-lg leading-snug ${light ? "text-stone-100" : "text-stone-900"}`} style={delay(i)}>
        <span className={`w-2.5 h-2.5 shrink-0 mt-[7px] rotate-45 ${light ? "bg-[#e0875c]" : "bg-[#b4532a]"}`} />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

const Chips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((c, i) => (
      <span key={c} className="rise px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold bg-white border-2 border-[#1c1917] text-stone-900" style={delay(i / 2)}>{c}</span>
    ))}
  </div>
);

const Label = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className={`${light ? "text-[#e0875c]" : ACC} text-xs font-extrabold tracking-[0.2em] mb-3`}>{children}</div>
);

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 bg-white border-2 border-[#1c1917] border-l-[8px] border-l-[#b4532a] rounded-lg">{children}</div>
);

const Stage = ({ children, h = "h-[280px] sm:h-[340px]", dark = false }: { children: React.ReactNode; h?: string; dark?: boolean }) => (
  <div className={`relative ${h}`}>
    <div className={`absolute inset-0 ${dark ? "bg-[radial-gradient(circle_at_50%_50%,rgba(224,135,92,0.22),transparent_62%)]" : "bg-[radial-gradient(circle_at_50%_50%,rgba(180,83,42,0.10),transparent_62%)]"}`} />
    {children}
  </div>
);

const MolViewer = () => {
  const [k, setK] = useState(0);
  const m = MOLECULES[k];
  return (
    <div className="rounded-lg bg-white border-2 border-[#1c1917] overflow-hidden shadow-[5px_5px_0_#1c1917]">
      <div className="relative h-[290px] sm:h-[340px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(180,83,42,0.12),transparent_65%)]" />
        <Molecule3DCanvas molecule={m} className="absolute inset-0 w-full h-full" />
        <div className="absolute top-4 left-5">
          <div className={`text-3xl font-extrabold ${INK}`}>{m.formula}</div>
          <div className="text-sm font-semibold text-stone-600">{m.name}</div>
        </div>
        <div className="absolute bottom-3 right-4 text-[11px] font-bold text-stone-500">тяни, чтобы вращать</div>
      </div>
      <div className="flex flex-wrap gap-2 p-3 border-t-2 border-[#1c1917] bg-stone-100">
        {MOLECULES.map((x, idx) => (
          <button key={x.formula} id={`mol-${idx}`} onClick={() => setK(idx)}
            className={`px-3 py-1.5 rounded-md text-sm font-bold transition ${idx === k ? "bg-[#1c1917] text-white" : "bg-white border-2 border-[#1c1917]/30 text-stone-800 hover:border-[#b4532a]"}`}>
            {x.formula}
          </button>
        ))}
      </div>
    </div>
  );
};

const Photo = ({ src, caption, className = "" }: { src: string; caption: string; className?: string }) => (
  <figure className={`relative overflow-hidden rounded-lg border-2 border-stone-100/90 ${className}`}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt={caption} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-x-0 bottom-0 p-3 pt-10 bg-gradient-to-t from-black/85 to-transparent">
      <figcaption className="text-white text-xs sm:text-[13px] font-semibold leading-snug">{caption}</figcaption>
    </div>
  </figure>
);

/* ---------- slides: facts come from the site's code; notes sized for a 7-minute talk ---------- */

const slides: Slide[] = [
  {
    tag: "Научный проект", title: "Chemistry Explorer", icon: Atom, dark: true,
    body: (
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-7 text-center lg:text-left">
          <Rise><p className="text-xl sm:text-3xl font-semibold text-stone-100 leading-snug">
            Интерактивная лаборатория химических открытий для школьников
          </p></Rise>
          <Rise n={1}>
            <div className="inline-flex flex-col gap-1 px-6 py-4 rounded-lg bg-white/[0.07] border-2 border-white/80 text-left">
              <span className="text-lg font-bold text-white">Автор: Кайрат Умар</span>
              <span className="text-stone-300 font-medium">New Generation School (NGS), г. Астана</span>
            </div>
          </Rise>
          <Rise n={2}><div className="flex items-center justify-center lg:justify-start gap-2 text-[#e0875c] font-bold text-base">
            <Globe className="w-5 h-5" /> chemistry.umarkairat.kz
          </div></Rise>
        </div>
        <Stage h="h-[300px] sm:h-[400px]" dark>
          <Molecule3DCanvas molecule={MOLECULES[4]} className="absolute inset-0 w-full h-full" />
        </Stage>
      </div>
    ),
    notes: "Здравствуйте, уважаемые члены комиссии! Меня зовут Кайрат Умар, я учусь в New Generation School в Астане. Представляю проект Chemistry Explorer — интерактивную лабораторию химических открытий. Позади вращается молекула бензола: такие модели есть на моём сайте. Сайт работает онлайн, в конце вы сможете открыть его на телефоне.",
  },
  {
    tag: "Актуальность и цель", title: "Зачем нужен проект", icon: AlertTriangle,
    body: (
      <div className="space-y-6">
        <div className="grid sm:grid-cols-3 gap-6">
          <Card n={0} icon={BookOpen} title="Химию нельзя увидеть" text="Атомы и связи остаются абстракцией: ученики заучивают формулы, не понимая строения вещества." />
          <Card n={1} icon={FlaskConical} title="Нет лабораторий" text="Не хватает реактивов и оборудования, а часть опытов опасна: кислоты, щёлочи, токсичные газы." />
          <Card n={2} icon={Target} title="Низкая мотивация" text="Статичный учебник проигрывает телефону. Нужен интерес и обратная связь." />
        </div>
        <Rise n={3}><Panel>
          <Label>ЦЕЛЬ</Label>
          <p className={`text-lg sm:text-xl font-semibold leading-relaxed ${INK}`}>Создать онлайн-платформу, которая делает химию наглядной и безопасной, привязана к школьной программе Казахстана и работает на трёх языках.</p>
        </Panel></Rise>
      </div>
    ),
    notes: "Химию нельзя увидеть, поэтому ученики часто просто заучивают формулы. Во многих школах нет хорошей лаборатории, а часть опытов опасна. Поэтому моя цель — сделать онлайн-платформу, где химию можно наглядно и безопасно исследовать, на казахском, русском и английском, в соответствии со школьной программой.",
  },
  {
    tag: "Решение", title: "Платформа целиком", icon: Layers,
    body: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          <Stat n={0} value="118" label="элементов" />
          <Stat n={1} value="151" label="вещество в базе" />
          <Stat n={2} value="241" label="вопрос в квизе" />
          <Stat n={3} value="3" label="языка: RU · KK · EN" />
        </div>
        <Rise n={4}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm font-bold text-stone-900">
            {["Таблица Менделеева", "Лаборатория синтеза", "pH-лаборатория", "Растворимость", "Классификация", "Журнал открытий", "Квизы и квесты", "Наука в РК и NGS"].map((m, k) => (
              <div key={m} className="py-3 px-2 rounded-md bg-white border-2 border-[#1c1917]/80">
                <span className={`${ACC} mr-1.5`}>{String(k + 1).padStart(2, "0")}</span>{m}
              </div>
            ))}
          </div>
        </Rise>
        <Rise n={5}><div className="text-center font-semibold text-stone-700">Плюс ИИ-ассистент на Google Gemini</div></Rise>
      </div>
    ),
    notes: "Вот что получилось: платформа из восьми разделов. В базе 118 элементов, 151 вещество, 241 вопрос для квиза и три языка. Сейчас коротко пройдусь по главным разделам.",
  },
  {
    tag: "Раздел 1", title: "Периодическая таблица", icon: Table2,
    body: (
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Bullets items={[
            "Все 118 элементов и 8-й период",
            "Карточка элемента: модель Бора, электронная конфигурация, история открытия",
            "10 категорий веществ с цветовой подсветкой",
            "«Остров стабильности»: учёные ищут сверхтяжёлые элементы, одно из ядер — ДЦ-280 (Сиборг)",
          ]} />
          <LiveBtn label="Открыть таблицу" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Stat n={0} value="118" label="элементов" />
          <Stat n={1} value="10" label="категорий веществ" />
          <Stat n={2} value="8" label="периодов в таблице" />
          <Stat n={3} value="3" label="языка интерфейса" />
        </div>
      </div>
    ),
    notes: "Первый раздел — таблица Менделеева. Все 118 элементов и восьмой период. У каждого элемента карточка с анимированной моделью Бора, электронной конфигурацией и историей открытия. Отдельное окно рассказывает об «острове стабильности» сверхтяжёлых элементов. [Открыть сайт, показать таблицу]",
  },
  {
    tag: "Раздел 2", title: "Лаборатория синтеза", icon: FlaskConical,
    body: (
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Bullets items={[
            "Атомы кладутся в камеру, система считает формулу и молярную массу",
            "151 вещество в базе химического движка",
            "Нагрев реакции: 1200 К (927 °C) против 298 К (25 °C)",
            "Для веществ есть 3D-модели, которые можно вращать",
          ]} />
          <LiveBtn label="Синтезировать H₂O" />
        </div>
        <MolViewer />
      </div>
    ),
    notes: "Второй раздел — лаборатория синтеза. Выбираешь атомы, кладёшь в камеру, и система считает формулу и молярную массу. Реакцию можно нагреть до тысячи двухсот кельвинов. Получилось настоящее вещество — открывается окно с описанием. Всего 151 вещество. Справа 3D-модели, их можно вращать мышкой. [Показать вживую: синтез воды]",
  },
  {
    tag: "Раздел 3", title: "pH-лаборатория", icon: Beaker,
    body: (
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div>
            <Label>14 РАСТВОРОВ · ШКАЛА pH 0–14</Label>
            <Chips items={["H₂SO₄ электролит · 0,5", "Желудочный сок · 1,5", "Лимонный сок · 2,2", "Уксус · 2,9", "Чёрный кофе · 5,0", "Молоко · 6,6", "Дист. вода · 7,0", "Кровь · 7,4", "Морская вода · 8,2", "Сода NaHCO₃ · 8,4", "Мыльный раствор · 9,5", "Нашатырный спирт · 11,5", "«Белизна» · 12,5", "Едкий натр · 14,0"]} />
          </div>
          <div>
            <Label>5 ИНДИКАТОРОВ</Label>
            <Chips items={["Универсальная бумага", "Лакмус", "Фенолфталеин", "Метилоранж", "Сок краснокочанной капусты"]} />
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col justify-center">
          <Stat value="0 → 14" label="от кислоты до щёлочи на одной шкале" />
          <LiveBtn label="Открыть pH-лабораторию" />
        </div>
      </div>
    ),
    notes: "Третий раздел — pH-лаборатория. Четырнадцать реальных растворов: от аккумуляторной кислоты с pH ноль целых пять десятых до едкого натра с pH четырнадцать. Между ними желудочный сок, лимонный сок, уксус, кофе, молоко, кровь, морская вода. Пять индикаторов, включая сок краснокочанной капусты — цвет раствора меняется прямо на экране.",
  },
  {
    tag: "Раздел 4", title: "Растворимость и пробирка", icon: TestTube2,
    body: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-5">
          <Label>ТРИ ВКЛАДКИ</Label>
          <Bullets items={[
            "Таблица растворимости: матрица катионов и анионов",
            "Виртуальная пробирка с осадками",
            "Качественные реакции с ионными уравнениями",
          ]} />
          <Rise n={3}><Panel>
            <Label>ОБОЗНАЧЕНИЯ В ТАБЛИЦЕ</Label>
            <div className="text-stone-800 font-medium text-sm leading-relaxed">
              <b className={INK}>Р</b> растворимо · <b className={INK}>М</b> малорастворимо · <b className={INK}>Н</b> нерастворимо · <b className={INK}>—</b> разлагается водой · <b className={INK}>Г</b> газ
            </div>
          </Panel></Rise>
        </div>
        <div>
          <Label>ВИРТУАЛЬНАЯ ПРОБИРКА</Label>
          <Bullets items={[
            "Регулятор температуры, горелка Бунзена, встряхивание",
            "«Золотой дождь»: PbI₂ кристаллизуется при охлаждении",
            "Fe(OH)₂ и Al(OH)₃: особые случаи осаждения",
          ]} />
          <LiveBtn label="Открыть пробирку" />
        </div>
      </div>
    ),
    notes: "Четвёртый раздел — растворимость. Таблица катионов и анионов с условными обозначениями, виртуальная пробирка и качественные реакции с ионными уравнениями. В пробирке можно греть на горелке Бунзена и встряхивать. Красивый опыт — «золотой дождь»: иодид свинца кристаллизуется при охлаждении. [Показать вживую]",
  },
  {
    tag: "Раздел 5", title: "Классификация веществ", icon: Network,
    body: (
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Label>5 ВКЛАДОК МОДУЛЯ</Label>
          <Bullets items={[
            "Схема классификации",
            "Каталог веществ",
            "Генетическая связь",
            "Взаимодействие классов",
            "Тренажёр-квиз",
          ]} />
        </div>
        <Rise n={3}><Panel>
          <Label>СВЯЗЬ С ЛАБОРАТОРИЕЙ</Label>
          <p className={`text-lg font-semibold leading-relaxed ${INK}`}>У каждого соединения есть кнопка «Синтезировать в лаборатории»: теория сразу переходит в опыт.</p>
        </Panel></Rise>
      </div>
    ),
    notes: "Пятый раздел — классификация неорганических веществ. Пять вкладок: схема классификации, каталог веществ, генетическая связь, взаимодействие классов и тренажёр-квиз. Из каждого соединения можно сразу перейти в лабораторию и синтезировать его.",
  },
  {
    tag: "Раздел 6", title: "Квизы, квесты, сертификат", icon: Trophy,
    body: (
      <div className="grid lg:grid-cols-3 gap-6">
        <Rise n={0} className="h-full"><Panel>
          <Label>КВИЗ-АРЕНА</Label>
          <div className="space-y-2 text-stone-800 font-medium text-sm leading-relaxed">
            <div><b className={`${ACC} text-3xl font-extrabold`}>241</b> вопрос, 6 категорий</div>
            <div>Олимпиадный экзамен: 3 жизни, 25 с на вопрос</div>
            <div>Блиц 60 секунд, комбо-множители</div>
            <div>Подсказки 50/50 и ИИ</div>
          </div>
        </Panel></Rise>
        <Rise n={1} className="h-full"><Panel>
          <Label>8 КВЕСТОВ · 2050 XP</Label>
          <div className="space-y-1 text-stone-800 font-semibold text-sm">
            {[["Живая вода", "100"], ["Кухонная химия", "150"], ["Дыхание планеты", "200"], ["Энергия и пламя", "250"], ["Кислоты и щёлочи", "300"], ["Сокровища недр", "300"], ["Сладкие углеводы", "350"], ["Ювелир", "400"]].map(([n, xp]) => (
              <div key={n} className="flex justify-between border-b border-stone-300 py-0.5"><span>{n}</span><span className="text-stone-600 text-xs font-bold">{xp} XP</span></div>
            ))}
          </div>
        </Panel></Rise>
        <Rise n={2} className="h-full"><Panel>
          <Label>ЖУРНАЛ И СЕРТИФИКАТ</Label>
          <div className="space-y-2 text-stone-800 font-medium text-sm leading-relaxed">
            <div>Ранги от «Ученика лаборатории» до «Гроссмейстера химии»</div>
            <div>8 достижений, среди них «Богатства Казахстана»</div>
            <div>«Certificate of Chemical Discovery» с печатью «NGS Verified Lab»</div>
          </div>
        </Panel></Rise>
      </div>
    ),
    notes: "Шестой раздел — мотивация. Квиз-арена: двести сорок один вопрос, олимпиадный режим с тремя жизнями, блиц на минуту и подсказки. Восемь квестов на две тысячи пятьдесят очков, например «Живая вода» или «Ювелир». Все открытия идут в журнал, а за прогресс можно получить сертификат с печатью NGS Verified Lab.",
  },
  {
    tag: "Главная фишка", title: "ИИ-ассистент", icon: Bot,
    body: (
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <Bullets items={[
          "Работает на Google Gemini и отвечает на трёх языках",
          "Не только пишет текст: открывает элемент, загружает молекулу в лабораторию, запускает пробирку, переключает вкладки",
          "Нет сети или нейросеть недоступна: работает встроенный офлайн-движок",
        ]} />
        <Rise n={2}>
          <div className="p-6 rounded-lg bg-white border-2 border-[#1c1917] shadow-[5px_5px_0_#1c1917] space-y-3 text-sm">
            <div className="ml-auto w-fit max-w-[85%] px-4 py-2.5 rounded-lg bg-[#1c1917] text-white font-semibold">Что такое серная кислота?</div>
            <div className="w-fit max-w-[92%] px-4 py-2.5 rounded-lg bg-stone-100 text-stone-900 font-medium">H₂SO₄ — одна из важнейших кислот в химии, её называют «хлебом промышленности»…</div>
            <div className="w-fit px-3 py-1.5 rounded-md border-2 border-[#b4532a] text-[#b4532a] text-xs font-bold">→ Открыть Серу (S) в таблице</div>
            <div className="w-fit px-3 py-1.5 rounded-md border-2 border-[#b4532a] text-[#b4532a] text-xs font-bold">→ Синтезировать воду (H₂O) в реакторе</div>
          </div>
        </Rise>
      </div>
    ),
    notes: "Главная особенность проекта — ИИ-ассистент на Google Gemini. Он отвечает на трёх языках. Но он не только пишет текст: под ответом появляются кнопки — открыть элемент в таблице, загрузить молекулу в лабораторию, запустить пробирку. Если нет интернета, работает встроенный офлайн-движок знаний. [Если есть время — задать вопрос вживую]",
  },
  {
    tag: "Раздел 7", title: "Наука в NGS", icon: Microscope, dark: true,
    body: (
      <div className="grid lg:grid-cols-5 gap-6 items-stretch">
        <div className="lg:col-span-3 grid grid-cols-2 grid-rows-[1fr_auto] gap-3 h-[330px] sm:h-[400px]">
          <Rise className="col-span-2 relative h-full min-h-0">
            <Photo className="absolute inset-0" src="/images/kz_chemistry/school_lab_14.jpg" caption="Общий вид выставочного пространства NGS Science Fair в главном атриуме" />
          </Rise>
          <Rise n={1} className="relative h-[120px] sm:h-[140px]">
            <Photo className="absolute inset-0" src="/images/kz_chemistry/school_lab_11.jpg" caption="Старшеклассники и преподаватели в лаборатории NGS" />
          </Rise>
          <Rise n={2} className="relative h-[120px] sm:h-[140px]">
            <Photo className="absolute inset-0" src="/images/kz_chemistry/school_lab_8.jpg" caption="Защита работы по фитохимии перед комиссией" />
          </Rise>
        </div>
        <div className="lg:col-span-2 space-y-5">
          <div className="grid grid-cols-3 gap-3">
            {[["100%", "Стандарт безопасности (Приказ №99)"], ["NGS LAB", "Высокотехнологичный комплекс"], ["Дарын & ISEF", "Олимпийский стандарт проектов"]].map(([v, l], k) => (
              <Rise key={v} n={k}>
                <div className="h-full p-3 rounded-lg bg-white/[0.07] border-2 border-white/70">
                  <div className="text-base sm:text-lg font-extrabold text-[#e0875c] leading-tight">{v}</div>
                  <div className="text-[11px] sm:text-xs font-semibold text-stone-200 mt-1 leading-snug">{l}</div>
                </div>
              </Rise>
            ))}
          </div>
          <Bullets light items={[
            "Химико-биологическая кафедра и лабораторный комплекс NGS",
            "Открытый мастер-класс «Водород — топливо будущего»",
            "Цифровая микроскопия кристаллов",
            "Ежегодный NGS Science Fair",
            "3D-моделирование молекул 10 класса и астрохимия",
          ]} />
        </div>
      </div>
    ),
    notes: "Отдельный раздел сайта посвящён науке в нашей школе. Это путь исследователя от школьной лаборатории и цифрового микроскопа до республиканских побед в «Дарыне» и участия в Intel ISEF. На фото — ежегодный NGS Science Fair, наша лаборатория и защита проекта по фитохимии перед комиссией. Мы работаем по стандартам безопасности Приказа №99, проводим мастер-классы, например про водород, и делаем 3D-модели молекул в 10 классе.",
  },
  {
    tag: "Итоги", title: "Результаты проекта", icon: Rocket,
    body: (
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Label>ДОСТИГНУТО</Label>
          <Bullets items={[
            "Работающая платформа в открытом доступе",
            "118 элементов, 151 вещество, 241 вопрос, 8 квестов",
            "Три языка и раздел о науке в NGS",
            "ИИ, который не только отвечает, но и действует",
          ]} />
        </div>
        <div>
          <Label>ТЕХНОЛОГИИ</Label>
          <Chips items={["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Google Gemini API", "домен .kz"]} />
        </div>
      </div>
    ),
    notes: "Итоги: платформа работает онлайн, в ней 118 элементов, 151 вещество, 241 вопрос и восемь квестов. Сделана на современных технологиях — Next.js, React, TypeScript и Google Gemini.",
  },
  {
    tag: "Спасибо за внимание", title: "Попробуйте сами", icon: Sparkles, dark: true,
    body: (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
        <Rise><div className="p-4 bg-white rounded-lg border-2 border-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={QR} alt="QR-код сайта" className="w-52 h-52 sm:w-60 sm:h-60" />
        </div></Rise>
        <Rise n={1}><div className="space-y-4 text-center sm:text-left">
          <p className="text-2xl sm:text-3xl font-extrabold text-white">Отсканируйте камерой телефона</p>
          <div className="flex items-center gap-2 text-[#e0875c] font-bold text-lg justify-center sm:justify-start">
            <Globe className="w-5 h-5" /> chemistry.umarkairat.kz
          </div>
          <p className="text-stone-300 font-semibold">Кайрат Умар · NGS, г. Астана</p>
          <p className="text-white font-semibold text-lg">Готов ответить на ваши вопросы</p>
        </div></Rise>
      </div>
    ),
    notes: "Спасибо за внимание! Вы можете прямо сейчас отсканировать QR-код и попробовать платформу на телефоне. Буду рад ответить на ваши вопросы.",
  },
];

/* slow drifting benzene outlines in the background: alive, but quiet */
const Hex = ({ className, size, color }: { className: string; size: number; color: string }) => (
  <svg className={`absolute ${className}`} width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="0.8" opacity="0.2">
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
  const dark = !!s.dark;
  const centered = i === 0 || i === total - 1;

  return (
    <main className={`fixed inset-0 overflow-hidden select-none transition-colors duration-500 ${dark ? "bg-[#1c1917] text-white" : "bg-[#f4f0e6] text-stone-900"}`}
      style={{ fontFamily: "var(--font-montserrat), Montserrat, system-ui, sans-serif", fontWeight: 500 }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Hex color={dark ? "#e0875c" : "#b4532a"} className="drift-a -top-24 -left-20" size={420} />
        <Hex color={dark ? "#e0875c" : "#b4532a"} className="drift-b -bottom-32 -right-16" size={520} />
        <Hex color={dark ? "#e0875c" : "#b4532a"} className="drift-c top-1/3 right-[12%]" size={150} />
        {/* big ghost slide number */}
        <div key={`g${i}`} className={`fadeIn absolute -right-4 -bottom-16 text-[300px] leading-none font-extrabold tracking-tighter ${dark ? "text-white/[0.04]" : "text-[#1c1917]/[0.045]"}`}>
          {String(i + 1).padStart(2, "0")}
        </div>
      </div>

      <div className={`absolute z-20 top-0 inset-x-0 h-[5px] ${dark ? "bg-white/15" : "bg-[#1c1917]/10"}`}>
        <div className="h-full bg-[#b4532a] transition-all duration-500" style={{ width: `${((i + 1) / total) * 100}%` }} />
      </div>

      <section key={i} className="relative z-10 h-full overflow-y-auto px-16 sm:px-28 lg:px-36 pt-10 pb-24 fadeIn">
        <div className="min-h-full flex flex-col justify-center">
          <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#b4532a] text-white text-xs font-extrabold uppercase tracking-[0.16em]">
              <Icon className="w-4 h-4" /> {String(i + 1).padStart(2, "0")} · {s.tag}
            </span>
          </div>
          <h1 className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] ${dark ? "text-white" : INK} ${centered ? "text-center sm:text-7xl" : ""}`}>
            {s.title}
          </h1>
          <div className={`h-1.5 bg-[#b4532a] mt-5 mb-9 grow-line ${centered ? "mx-auto" : ""}`} />
          <div className="max-w-6xl w-full mx-auto">{s.body}</div>
        </div>
      </section>

      <button id="prev-slide" onClick={() => go(-1)} disabled={i === 0} aria-label="Назад"
        className="absolute z-20 left-3 sm:left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center bg-white border-2 border-[#1c1917] text-[#1c1917] shadow-[3px_3px_0_#1c1917] hover:bg-[#b4532a] hover:text-white hover:scale-105 disabled:opacity-0 disabled:pointer-events-none transition-all duration-200">
        <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
      </button>
      <button id="next-slide" onClick={() => go(1)} disabled={i === total - 1} aria-label="Вперёд"
        className="absolute z-20 right-3 sm:right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center bg-white border-2 border-[#1c1917] text-[#1c1917] shadow-[3px_3px_0_#1c1917] hover:bg-[#b4532a] hover:text-white hover:scale-105 disabled:opacity-0 disabled:pointer-events-none transition-all duration-200">
        <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
      </button>

      {notes && (
        <div className="absolute z-30 left-4 right-4 bottom-20 sm:left-auto sm:right-6 sm:w-[480px] max-h-[55vh] overflow-y-auto p-5 rounded-lg bg-white border-2 border-[#1c1917] text-sm font-medium text-stone-900 leading-relaxed shadow-[5px_5px_0_#1c1917]">
          <div className={`${ACC} text-xs font-extrabold mb-2 tracking-[0.2em]`}>ЧТО ГОВОРИТЬ · N</div>
          {s.notes}
        </div>
      )}

      <div className="absolute z-20 bottom-0 inset-x-0 px-6 py-5 flex items-center justify-between">
        <span className={`text-sm font-bold w-24 ${dark ? "text-stone-300" : "text-stone-600"}`}>{String(i + 1).padStart(2, "0")} / {total}</span>
        <div className="flex items-center gap-1.5">
          {slides.map((_, k) => (
            <button key={k} id={`dot-${k + 1}`} onClick={() => setI(k)} aria-label={`Слайд ${k + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${k === i ? "w-8 bg-[#b4532a]" : dark ? "w-2 bg-white/40 hover:bg-white" : "w-2 bg-[#1c1917]/30 hover:bg-[#1c1917]"}`} />
          ))}
        </div>
        <div className="flex items-center gap-2 w-24 justify-end">
          <button id="toggle-notes" onClick={() => setNotes((n) => !n)} title="Подсказки (N)" className={`p-2 rounded-md transition ${notes ? "bg-[#b4532a] text-white" : dark ? "text-stone-300 hover:text-white" : "text-stone-600 hover:text-stone-900"}`}><StickyNote className="w-4 h-4" /></button>
          <button id="toggle-fullscreen" onClick={fullscreen} title="Полный экран (F)" className={`p-2 rounded-md transition ${dark ? "text-stone-300 hover:text-white" : "text-stone-600 hover:text-stone-900"}`}><Maximize className="w-4 h-4" /></button>
        </div>
      </div>

      <style>{`
        .fadeIn{animation:fadeIn .45s ease-out both}
        .rise{opacity:0;animation:rise .6s cubic-bezier(.2,.7,.2,1) forwards}
        .grow-line{width:0;animation:grow .7s .1s ease-out forwards;max-width:110px}
        .drift-a{animation:driftA 40s ease-in-out infinite alternate}
        .drift-b{animation:driftB 55s ease-in-out infinite alternate}
        .drift-c{animation:driftC 30s ease-in-out infinite alternate}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        @keyframes grow{to{width:110px}}
        @keyframes driftA{to{transform:translate(60px,40px) rotate(18deg)}}
        @keyframes driftB{to{transform:translate(-50px,-30px) rotate(-14deg)}}
        @keyframes driftC{to{transform:translate(-30px,40px) rotate(30deg)}}
      `}</style>
    </main>
  );
}
