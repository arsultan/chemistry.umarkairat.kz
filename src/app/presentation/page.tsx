"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Atom, FlaskConical, Beaker, Bot, Trophy, Target, AlertTriangle,
  Sparkles, ChevronLeft, ChevronRight, Maximize, ExternalLink, Globe,
  Table2, Rocket, StickyNote, Layers, BookOpen, TestTube2, Network, Microscope,
} from "lucide-react";
import { Molecule3DCanvas, MOLECULES } from "./Molecule3DCanvas";

const SITE = "https://chemistry.umarkairat.kz";
const QR = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(SITE)}&bgcolor=ffffff&color=1c1917&margin=10`;

/* one calm palette for every slide: warm paper, charcoal ink, a single copper accent */
const INK = "text-[#1c1917]";
const ACC = "text-[#b4532a]";

type Slide = { tag: string; title: string; icon: React.ElementType; body: React.ReactNode; notes: string };

/* Montserrat has no glyphs for unicode sub/superscripts (they rendered as garbage), so draw them as <sub>/<sup> */
const SUB = "₀₁₂₃₄₅₆₇₈₉";
const SUP: Record<string, string> = { "⁺": "+", "⁻": "−" };
const chem = (text: string): React.ReactNode =>
  text.split(/([₀-₉]+|[⁺⁻]+)/).map((part, k) => {
    if (!part) return null;
    if (/^[₀-₉]+$/.test(part)) return <sub key={k} className="text-[0.7em]">{[...part].map((c) => SUB.indexOf(c)).join("")}</sub>;
    if (/^[⁺⁻]+$/.test(part)) return <sup key={k} className="text-[0.7em]">{[...part].map((c) => SUP[c]).join("")}</sup>;
    return <React.Fragment key={k}>{part}</React.Fragment>;
  });

const delay = (n: number) => ({ animationDelay: `${100 + n * 80}ms` });
const Rise = ({ n = 0, children, className = "" }: { n?: number; children: React.ReactNode; className?: string }) => (
  <div className={`rise ${className}`} style={delay(n)}>{children}</div>
);

/* numbers count up when a slide opens */
const CountUp = ({ value }: { value: string }) => {
  const num = parseInt(value, 10);
  const plain = /^\d+$/.test(value);
  const [v, setV] = useState(plain ? 0 : num);
  useEffect(() => {
    if (!plain) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 900);
      setV(Math.round(num * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [num, plain]);
  return <>{plain ? v : value}</>;
};

const box = "bg-white/70 border border-stone-300 rounded-xl";

const Card = ({ icon: Icon, title, text, n = 0 }: { icon: React.ElementType; title: string; text: string; n?: number }) => (
  <Rise n={n} className="h-full">
    <div className={`group h-full p-6 ${box} hover:border-[#b4532a] hover:bg-white transition-colors duration-300`}>
      <Icon className="w-6 h-6 mb-4 text-[#b4532a] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />
      <h3 className={`font-bold text-lg mb-2 ${INK}`}>{title}</h3>
      <p className="text-stone-600 font-medium text-[15px] leading-relaxed">{chem(text)}</p>
    </div>
  </Rise>
);

const Stat = ({ value, label, n = 0 }: { value: string; label: string; n?: number }) => (
  <Rise n={n}>
    <div className="py-3 border-t-2 border-[#1c1917]">
      <div className={`text-5xl sm:text-6xl font-bold tracking-tight tabular-nums ${INK}`}><CountUp value={value} /></div>
      <div className="text-stone-600 font-semibold text-sm mt-1">{chem(label)}</div>
    </div>
  </Rise>
);

const LiveBtn = ({ label = "Показать вживую" }: { label?: string }) => (
  <a href="/" target="_blank" rel="noopener noreferrer"
    className="group inline-flex items-center gap-2 mt-7 px-5 py-2.5 rounded-full border border-[#1c1917] text-[#1c1917] hover:bg-[#1c1917] hover:text-white text-sm font-bold transition-colors active:scale-95">
    {chem(label)} <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
  </a>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-4">
    {items.map((t, i) => (
      <li key={t} className="rise flex gap-4 font-semibold text-base sm:text-lg leading-snug text-stone-800" style={delay(i)}>
        <span className="w-5 h-0.5 shrink-0 mt-3 bg-[#b4532a]" />
        <span>{chem(t)}</span>
      </li>
    ))}
  </ul>
);

const Chips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((c, i) => (
      <span key={c} className="rise px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/70 border border-stone-300 text-stone-800" style={delay(i / 3)}>{chem(c)}</span>
    ))}
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <div className={`${ACC} text-xs font-bold tracking-[0.2em] mb-3`}>{children}</div>
);

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 bg-white/70 border border-stone-300 border-l-[3px] border-l-[#b4532a] rounded-xl">{children}</div>
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
    <div className={`${box} overflow-hidden`}>
      <div className="relative h-[290px] sm:h-[340px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(180,83,42,0.12),transparent_65%)]" />
        <Molecule3DCanvas molecule={m} className="absolute inset-0 w-full h-full" />
        <div className="absolute top-4 left-5">
          <div className={`text-3xl font-bold ${INK}`}>{chem(m.formula)}</div>
          <div className="text-sm font-semibold text-stone-500">{m.name}</div>
        </div>
        <div className="absolute bottom-3 right-4 text-[11px] font-semibold text-stone-400">тяни, чтобы вращать</div>
      </div>
      <div className="flex flex-wrap gap-2 p-3 border-t border-stone-200">
        {MOLECULES.map((x, idx) => (
          <button key={x.formula} id={`mol-${idx}`} onClick={() => setK(idx)}
            className={`px-3 py-1.5 rounded-full text-sm font-bold transition ${idx === k ? "bg-[#1c1917] text-white" : "border border-stone-300 text-stone-700 hover:border-[#b4532a]"}`}>
            {chem(x.formula)}
          </button>
        ))}
      </div>
    </div>
  );
};

/* interactive pH scale: click a solution, the marker slides along the 0–14 bar */
const PH: [string, number][] = [
  ["Аккумуляторный электролит H₂SO₄", 0.5], ["Желудочный сок", 1.5], ["Лимонный сок", 2.2], ["Уксус", 2.9],
  ["Чёрный кофе", 5.0], ["Молоко", 6.6], ["Дистиллированная вода", 7.0], ["Кровь", 7.4],
  ["Морская вода", 8.2], ["Раствор соды NaHCO₃", 8.4], ["Мыльный раствор", 9.5], ["Нашатырный спирт", 11.5],
  ["«Белизна»", 12.5], ["Едкий натр", 14.0],
];
const PhScale = () => {
  const [k, setK] = useState(6);
  const [name, ph] = PH[k];
  return (
    <div className="space-y-6">
      <Rise>
        <div className="flex items-end gap-5">
          <div className={`text-7xl font-bold tracking-tight tabular-nums leading-none ${INK}`}>{ph.toFixed(1).replace(".", ",")}</div>
          <div className="pb-1">
            <div className={`${ACC} text-xs font-bold tracking-[0.2em]`}>pH</div>
            <div className="text-lg font-bold text-stone-800 leading-tight">{chem(name)}</div>
          </div>
        </div>
      </Rise>
      <Rise n={1}>
        <div className="relative pt-2">
          <div className="h-3 rounded-full" style={{ background: "linear-gradient(90deg,#b4532a 0%,#d99a4e 30%,#cfd08a 50%,#7fa89a 70%,#46607a 100%)" }} />
          <div className="absolute top-0 -translate-x-1/2 transition-all duration-500 ease-out" style={{ left: `${(ph / 14) * 100}%` }}>
            <div className="w-1 h-7 bg-[#1c1917] rounded-full mx-auto" />
          </div>
          <div className="flex justify-between text-xs font-semibold text-stone-500 mt-2"><span>0 кислота</span><span>7</span><span>щёлочь 14</span></div>
        </div>
      </Rise>
      <div className="flex flex-wrap gap-2">
        {PH.map(([n, v], idx) => (
          <button key={n} id={`ph-${idx}`} onClick={() => setK(idx)}
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition ${idx === k ? "bg-[#1c1917] text-white" : "bg-white/70 border border-stone-300 text-stone-700 hover:border-[#b4532a]"}`}>
            {chem(n)} · {v.toFixed(1).replace(".", ",")}
          </button>
        ))}
      </div>
    </div>
  );
};

const Photo = ({ src, caption, className = "" }: { src: string; caption: string; className?: string }) => (
  <figure className={`group relative overflow-hidden rounded-xl ${className}`}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt={caption} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
    <div className="absolute inset-x-0 bottom-0 p-3 pt-10 bg-gradient-to-t from-black/75 to-transparent">
      <figcaption className="text-white text-xs sm:text-[13px] font-semibold leading-snug">{caption}</figcaption>
    </div>
  </figure>
);

/* ---------- slides: facts come from the site's code; notes sized for a 7-minute talk ---------- */

const slides: Slide[] = [
  {
    tag: "Научный проект", title: "Chemistry Explorer", icon: Atom,
    body: (
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-7 text-center lg:text-left">
          <Rise><p className="text-xl sm:text-3xl font-semibold text-stone-800 leading-snug">
            Интерактивная лаборатория химических открытий для школьников
          </p></Rise>
          <Rise n={1}>
            <div className="inline-flex flex-col gap-1 pl-5 border-l-[3px] border-[#b4532a] text-left">
              <span className={`text-lg font-bold ${INK}`}>Автор: Кайрат Умар</span>
              <span className="text-stone-600 font-medium">New Generation School (NGS), г. Астана</span>
            </div>
          </Rise>
          <Rise n={2}><div className={`flex items-center justify-center lg:justify-start gap-2 ${ACC} font-bold text-base`}>
            <Globe className="w-5 h-5" /> chemistry.umarkairat.kz
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
      <div className="space-y-6">
        <div className="grid sm:grid-cols-3 gap-5">
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
      <div className="space-y-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <Stat n={0} value="118" label="элементов" />
          <Stat n={1} value="151" label="вещество в базе" />
          <Stat n={2} value="241" label="вопрос в квизе" />
          <Stat n={3} value="3" label="языка: RU · KK · EN" />
        </div>
        <Rise n={4}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm font-bold text-stone-800">
            {["Таблица Менделеева", "Лаборатория синтеза", "pH-лаборатория", "Растворимость", "Классификация", "Журнал открытий", "Квизы и квесты", "Наука в РК и NGS"].map((m, k) => (
              <div key={m} className={`py-3 px-4 ${box} hover:border-[#b4532a] transition-colors`}>
                <span className={`${ACC} mr-2`}>{String(k + 1).padStart(2, "0")}</span>{m}
              </div>
            ))}
          </div>
        </Rise>
        <Rise n={5}><div className="font-semibold text-stone-600">Плюс ИИ-ассистент на Google Gemini</div></Rise>
      </div>
    ),
    notes: "Вот что получилось: платформа из восьми разделов. В базе 118 элементов, 151 вещество, 241 вопрос для квиза и три языка. Сейчас коротко пройдусь по главным разделам.",
  },
  {
    tag: "Раздел 1", title: "Периодическая таблица", icon: Table2,
    body: (
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Bullets items={[
            "Все 118 элементов и 8-й период",
            "Карточка элемента: модель Бора, электронная конфигурация, история открытия",
            "10 категорий веществ с цветовой подсветкой",
            "«Остров стабильности»: учёные ищут сверхтяжёлые элементы, одно из ядер — ДЦ-280 (Сиборг)",
          ]} />
          <LiveBtn label="Открыть таблицу" />
        </div>
        <div className="grid grid-cols-2 gap-6">
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
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3"><PhScale /></div>
        <div className="lg:col-span-2 flex flex-col justify-center">
          <Label>5 ИНДИКАТОРОВ</Label>
          <Bullets items={["Универсальная индикаторная бумага", "Лакмус", "Фенолфталеин", "Метилоранж", "Сок краснокочанной капусты"]} />
          <div><LiveBtn label="Открыть pH-лабораторию" /></div>
        </div>
      </div>
    ),
    notes: "Третий раздел — pH-лаборатория. Четырнадцать реальных растворов: от аккумуляторной кислоты с pH ноль целых пять десятых до едкого натра с pH четырнадцать. Нажмите на любой раствор — маркер покажет его место на шкале. Между ними желудочный сок, лимонный сок, уксус, кофе, молоко, кровь, морская вода. Пять индикаторов, включая сок краснокочанной капусты.",
  },
  {
    tag: "Раздел 4", title: "Растворимость и пробирка", icon: TestTube2,
    body: (
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <Label>ТРИ ВКЛАДКИ</Label>
            <Bullets items={[
              "Таблица растворимости: матрица катионов и анионов",
              "Виртуальная пробирка с осадками",
              "Качественные реакции с ионными уравнениями",
            ]} />
          </div>
          <Rise n={3}><Panel>
            <Label>ОБОЗНАЧЕНИЯ В ТАБЛИЦЕ</Label>
            <div className="text-stone-700 font-medium text-sm leading-relaxed">
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
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Label>5 ВКЛАДОК МОДУЛЯ</Label>
          <Bullets items={["Схема классификации", "Каталог веществ", "Генетическая связь", "Взаимодействие классов", "Тренажёр-квиз"]} />
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
      <div className="grid lg:grid-cols-3 gap-5">
        <Rise n={0} className="h-full"><Panel>
          <Label>КВИЗ-АРЕНА</Label>
          <div className="space-y-2 text-stone-700 font-medium text-sm leading-relaxed">
            <div><b className={`${INK} text-4xl font-bold tabular-nums`}><CountUp value="241" /></b> вопрос, 6 категорий</div>
            <div>Олимпиадный экзамен: 3 жизни, 25 с на вопрос</div>
            <div>Блиц 60 секунд, комбо-множители</div>
            <div>Подсказки 50/50 и ИИ</div>
          </div>
        </Panel></Rise>
        <Rise n={1} className="h-full"><Panel>
          <Label>8 КВЕСТОВ · 2050 XP</Label>
          <div className="text-stone-800 font-semibold text-sm">
            {[["Живая вода", "100"], ["Кухонная химия", "150"], ["Дыхание планеты", "200"], ["Энергия и пламя", "250"], ["Кислоты и щёлочи", "300"], ["Сокровища недр", "300"], ["Сладкие углеводы", "350"], ["Ювелир", "400"]].map(([n, xp]) => (
              <div key={n} className="flex justify-between border-b border-stone-200 py-1"><span>{n}</span><span className="text-stone-500 text-xs font-bold">{xp} XP</span></div>
            ))}
          </div>
        </Panel></Rise>
        <Rise n={2} className="h-full"><Panel>
          <Label>ЖУРНАЛ И СЕРТИФИКАТ</Label>
          <div className="space-y-3 text-stone-700 font-medium text-sm leading-relaxed">
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
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <Bullets items={[
          "Работает на Google Gemini и отвечает на трёх языках",
          "Не только пишет текст: открывает элемент, загружает молекулу в лабораторию, запускает пробирку, переключает вкладки",
          "Нет сети или нейросеть недоступна: работает встроенный офлайн-движок",
        ]} />
        <Rise n={2}>
          <div className={`p-6 ${box} space-y-3 text-sm`}>
            <div className="ml-auto w-fit max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-sm bg-[#1c1917] text-white font-semibold">Что такое серная кислота?</div>
            <div className="w-fit max-w-[92%] px-4 py-2.5 rounded-2xl rounded-bl-sm bg-stone-100 text-stone-800 font-medium">{chem("H₂SO₄ — одна из важнейших кислот в химии, её называют «хлебом промышленности»…")}</div>
            <div className="w-fit px-3 py-1.5 rounded-full border border-[#b4532a] text-[#b4532a] text-xs font-bold">→ Открыть Серу (S) в таблице</div>
            <div className="w-fit px-3 py-1.5 rounded-full border border-[#b4532a] text-[#b4532a] text-xs font-bold">{chem("→ Синтезировать воду (H₂O) в реакторе")}</div>
          </div>
        </Rise>
      </div>
    ),
    notes: "Главная особенность проекта — ИИ-ассистент на Google Gemini. Он отвечает на трёх языках. Но он не только пишет текст: под ответом появляются кнопки — открыть элемент в таблице, загрузить молекулу в лабораторию, запустить пробирку. Если нет интернета, работает встроенный офлайн-движок знаний. [Если есть время — задать вопрос вживую]",
  },
  {
    tag: "Раздел 7", title: "Наука в NGS", icon: Microscope,
    body: (
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3 grid grid-cols-2 gap-3">
          <Rise className="col-span-2 relative h-[210px] sm:h-[260px]">
            <Photo className="absolute inset-0" src="/images/kz_chemistry/school_lab_14.jpg" caption="Общий вид выставочного пространства NGS Science Fair в главном атриуме" />
          </Rise>
          <Rise n={1} className="relative h-[120px] sm:h-[140px]">
            <Photo className="absolute inset-0" src="/images/kz_chemistry/school_lab_11.jpg" caption="Старшеклассники и преподаватели в лаборатории NGS" />
          </Rise>
          <Rise n={2} className="relative h-[120px] sm:h-[140px]">
            <Photo className="absolute inset-0" src="/images/kz_chemistry/school_lab_8.jpg" caption="Защита работы по фитохимии перед комиссией" />
          </Rise>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            {[["100%", "Стандарт безопасности (Приказ №99)"], ["NGS LAB", "Высокотехнологичный комплекс"], ["Дарын & ISEF", "Олимпийский стандарт проектной деятельности"]].map(([v, l], k) => (
              <Rise key={v} n={k}>
                <div className="flex items-baseline gap-4 border-t-2 border-[#1c1917] pt-2">
                  <div className={`text-2xl font-bold tracking-tight shrink-0 ${INK}`}>{v}</div>
                  <div className="text-sm font-semibold text-stone-600 leading-snug">{l}</div>
                </div>
              </Rise>
            ))}
          </div>
          <Bullets items={[
            "Мастер-класс «Водород — топливо будущего»",
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
      <div className="grid lg:grid-cols-2 gap-12">
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
    tag: "Спасибо за внимание", title: "Попробуйте сами", icon: Sparkles,
    body: (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
        <Rise><div className="p-4 bg-white rounded-xl border border-stone-300">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={QR} alt="QR-код сайта" className="w-52 h-52 sm:w-60 sm:h-60" />
        </div></Rise>
        <Rise n={1}><div className="space-y-4 text-center sm:text-left">
          <p className={`text-2xl sm:text-3xl font-bold ${INK}`}>Отсканируйте камерой телефона</p>
          <div className={`flex items-center gap-2 ${ACC} font-bold text-lg justify-center sm:justify-start`}>
            <Globe className="w-5 h-5" /> chemistry.umarkairat.kz
          </div>
          <p className="text-stone-600 font-semibold">Кайрат Умар · NGS, г. Астана</p>
          <p className="text-stone-800 font-semibold text-lg">Готов ответить на ваши вопросы</p>
        </div></Rise>
      </div>
    ),
    notes: "Спасибо за внимание! Вы можете прямо сейчас отсканировать QR-код и попробовать платформу на телефоне. Буду рад ответить на ваши вопросы.",
  },
];

/* slow drifting benzene outlines in the background: alive, but quiet */
const Hex = ({ className, size }: { className: string; size: number }) => (
  <svg className={`absolute ${className}`} width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="#b4532a" strokeWidth="0.6" opacity="0.16">
    <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" />
    <polygon points="50,20 76,35 76,65 50,80 24,65 24,35" />
  </svg>
);

export default function PresentationPage() {
  const [i, setI] = useState(0);
  const [notes, setNotes] = useState(false);
  const dir = useRef(1);
  const total = slides.length;

  const goTo = useCallback((n: number) => {
    setI((p) => { const t = Math.min(total - 1, Math.max(0, n)); dir.current = t >= p ? 1 : -1; return t; });
  }, [total]);
  const go = useCallback((d: number) => {
    setI((p) => { const t = Math.min(total - 1, Math.max(0, p + d)); dir.current = d; return t; });
  }, [total]);
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
      else if (e.key === "Home") goTo(0);
      else if (e.key === "End") goTo(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, goTo, total]);

  const s = slides[i];
  const Icon = s.icon;
  const centered = i === 0 || i === total - 1;
  const arrow = "absolute z-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center bg-white/80 border border-stone-300 text-[#1c1917] hover:bg-[#1c1917] hover:text-white hover:border-[#1c1917] disabled:opacity-0 disabled:pointer-events-none transition-all duration-200 active:scale-95";

  return (
    <main className="fixed inset-0 overflow-hidden select-none bg-[#f4f0e6] text-stone-900"
      style={{ fontFamily: "var(--font-montserrat), Montserrat, system-ui, sans-serif", fontWeight: 500 }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Hex className="drift-a -top-24 -left-20" size={420} />
        <Hex className="drift-b -bottom-32 -right-16" size={520} />
        <Hex className="drift-c top-1/3 right-[12%]" size={150} />
      </div>

      {/* progress: click anywhere on the line to jump */}
      <div className="absolute z-20 top-0 inset-x-0 h-1.5 bg-[#1c1917]/10 cursor-pointer"
        onClick={(e) => goTo(Math.floor(((e.clientX) / window.innerWidth) * total))}>
        <div className="h-full bg-[#b4532a] transition-all duration-500" style={{ width: `${((i + 1) / total) * 100}%` }} />
      </div>

      <section key={i} className={`relative z-10 h-full overflow-y-auto px-16 sm:px-28 lg:px-36 pt-10 pb-24 ${dir.current >= 0 ? "slideNext" : "slidePrev"}`}>
        <div className="min-h-full flex flex-col justify-center">
          <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
            <Icon className={`w-4 h-4 ${ACC}`} />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
              <span className={ACC}>{String(i + 1).padStart(2, "0")}</span> · {s.tag}
            </span>
          </div>
          <h1 className={`text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] ${INK} ${centered ? "text-center sm:text-7xl" : ""}`}>
            {s.title}
          </h1>
          <div className={`h-[3px] bg-[#b4532a] mt-5 mb-9 grow-line ${centered ? "mx-auto" : ""}`} />
          <div className="max-w-6xl w-full mx-auto">{s.body}</div>
        </div>
      </section>

      <button id="prev-slide" onClick={() => go(-1)} disabled={i === 0} aria-label="Назад" className={`${arrow} left-3 sm:left-6`}>
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button id="next-slide" onClick={() => go(1)} disabled={i === total - 1} aria-label="Вперёд" className={`${arrow} right-3 sm:right-6`}>
        <ChevronRight className="w-6 h-6" />
      </button>

      {notes && (
        <div className="absolute z-30 left-4 right-4 bottom-20 sm:left-auto sm:right-6 sm:w-[480px] max-h-[55vh] overflow-y-auto p-5 rounded-xl bg-white border border-stone-300 text-sm font-medium text-stone-800 leading-relaxed shadow-lg">
          <div className={`${ACC} text-xs font-bold mb-2 tracking-[0.2em]`}>ЧТО ГОВОРИТЬ · N</div>
          {chem(s.notes)}
        </div>
      )}

      <div className="absolute z-20 bottom-0 inset-x-0 px-6 py-5 flex items-center justify-between">
        <span className="text-sm font-bold w-24 text-stone-500 tabular-nums">{String(i + 1).padStart(2, "0")} / {total}</span>
        <div className="flex items-center gap-1.5">
          {slides.map((_, k) => (
            <button key={k} id={`dot-${k + 1}`} onClick={() => goTo(k)} aria-label={`Слайд ${k + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${k === i ? "w-8 bg-[#b4532a]" : "w-2 bg-[#1c1917]/25 hover:bg-[#1c1917]"}`} />
          ))}
        </div>
        <div className="flex items-center gap-2 w-24 justify-end">
          <button id="toggle-notes" onClick={() => setNotes((n) => !n)} title="Подсказки (N)" className={`p-2 rounded-md transition ${notes ? "bg-[#1c1917] text-white" : "text-stone-500 hover:text-stone-900"}`}><StickyNote className="w-4 h-4" /></button>
          <button id="toggle-fullscreen" onClick={fullscreen} title="Полный экран (F)" className="p-2 rounded-md text-stone-500 hover:text-stone-900 transition"><Maximize className="w-4 h-4" /></button>
        </div>
      </div>

      <style>{`
        .slideNext{animation:slideNext .5s cubic-bezier(.2,.7,.2,1) both}
        .slidePrev{animation:slidePrev .5s cubic-bezier(.2,.7,.2,1) both}
        .rise{opacity:0;animation:rise .6s cubic-bezier(.2,.7,.2,1) forwards}
        .grow-line{width:0;animation:grow .7s .1s ease-out forwards;max-width:96px}
        .drift-a{animation:driftA 40s ease-in-out infinite alternate}
        .drift-b{animation:driftB 55s ease-in-out infinite alternate}
        .drift-c{animation:driftC 30s ease-in-out infinite alternate}
        @keyframes slideNext{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:none}}
        @keyframes slidePrev{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:none}}
        @keyframes rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        @keyframes grow{to{width:96px}}
        @keyframes driftA{to{transform:translate(60px,40px) rotate(18deg)}}
        @keyframes driftB{to{transform:translate(-50px,-30px) rotate(-14deg)}}
        @keyframes driftC{to{transform:translate(-30px,40px) rotate(30deg)}}
      `}</style>
    </main>
  );
}
