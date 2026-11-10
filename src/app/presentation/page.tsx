"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Atom, FlaskConical, Beaker, Bot, Trophy, Cpu, Target, AlertTriangle,
  Sparkles, ChevronLeft, ChevronRight, Maximize, ExternalLink, Globe,
  Table2, Droplets, Rocket, StickyNote, Layers, BookOpen, TestTube2,
  Network, Gamepad2, Award, Flag, Thermometer, Mountain,
} from "lucide-react";
import { Molecule3DCanvas, MOLECULES } from "./Molecule3DCanvas";

const SITE = "https://chemistry.umarkairat.kz";
const QR = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(SITE)}&bgcolor=ffffff&color=0f172a&margin=10`;

type Slide = {
  tag: string;
  title: string;
  icon: React.ElementType;
  body: React.ReactNode;
  notes: string;
};

/* ---------- building blocks ---------- */

const Card = ({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) => (
  <div className="group p-5 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-white/15 hover:border-[#a5b4fc]/60 hover:-translate-y-0.5 transition-all duration-300">
    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-[#a5b4fc]/15 border border-[#a5b4fc]/30 text-[#c7d2fe]">
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="font-bold text-white text-base mb-1">{title}</h3>
    <p className="text-zinc-300 text-sm leading-relaxed">{text}</p>
  </div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center p-4 rounded-2xl bg-gradient-to-b from-[#a5b4fc]/15 to-white/[0.03] border border-[#a5b4fc]/25">
    <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{value}</div>
    <div className="text-zinc-300 text-xs sm:text-sm mt-1">{label}</div>
  </div>
);

const LiveBtn = ({ label = "Показать вживую" }: { label?: string }) => (
  <a href="/" target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-white text-zinc-900 hover:bg-zinc-200 text-sm font-medium transition active:scale-95">
    {label} <ExternalLink className="w-4 h-4" />
  </a>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2.5">
    {items.map((i) => (
      <li key={i} className="flex gap-3 text-zinc-100 text-base sm:text-lg leading-snug">
        <span className="w-1.5 h-1.5 rounded-full bg-[#a5b4fc] shrink-0 mt-2.5" />
        <span>{i}</span>
      </li>
    ))}
  </ul>
);

const Chips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((c) => (
      <span key={c} className="px-3 py-1.5 rounded-full text-xs sm:text-sm bg-white/[0.07] border border-white/15 text-zinc-200">{c}</span>
    ))}
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[#a5b4fc] font-mono text-xs tracking-widest mb-3">{children}</div>
);

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15">{children}</div>
);

const Stage = ({ children, h = "h-[280px] sm:h-[340px]" }: { children: React.ReactNode; h?: string }) => (
  <div className={`relative ${h}`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(165,180,252,0.26),transparent_65%)]" />
    {children}
  </div>
);

const MolViewer = ({ start = 0 }: { start?: number }) => {
  const [k, setK] = useState(start);
  const m = MOLECULES[k];
  return (
    <div className="rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/15 overflow-hidden">
      <div className="relative h-[290px] sm:h-[350px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(165,180,252,0.24),transparent_65%)]" />
        <Molecule3DCanvas molecule={m} className="absolute inset-0 w-full h-full" />
        <div className="absolute top-4 left-5">
          <div className="text-2xl font-bold text-white">{m.formula}</div>
          <div className="text-sm text-zinc-300">{m.name}</div>
        </div>
        <div className="absolute bottom-3 right-4 text-[11px] font-mono text-zinc-500">тяни, чтобы вращать</div>
      </div>
      <div className="flex flex-wrap gap-2 p-3 border-t border-white/10">
        {MOLECULES.map((x, idx) => (
          <button key={x.formula} id={`mol-${idx}`} onClick={() => setK(idx)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${idx === k ? "bg-white text-zinc-900" : "bg-white/[0.07] text-zinc-200 hover:bg-white/15"}`}>
            {x.formula}
          </button>
        ))}
      </div>
    </div>
  );
};

const ElementFacts = () => (
  <div className="grid grid-cols-2 gap-4">
    <Stat value="118" label="элементов IUPAC" />
    <Stat value="10" label="категорий веществ" />
    <Stat value="4" label="блока: s, p, d, f" />
    <Stat value="6000 К" label="предел термометра" />
  </div>
);

/* ---------- slides (all facts taken from the site's source code) ---------- */

const slides: Slide[] = [
  {
    tag: "Научный проект", title: "Chemistry Explorer", icon: Atom,
    body: (
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-xl sm:text-2xl text-zinc-200 leading-snug">
            Интерактивная лаборатория химических открытий: 118 элементов, 151 вещество и ИИ-ассистент
          </p>
          <div className="inline-flex flex-col gap-1 px-6 py-4 rounded-2xl bg-white/[0.07] border border-white/15">
            <span className="text-white text-lg font-bold">Автор: Кайрат Умар</span>
            <span className="text-zinc-300">New Generation School (NGS), г. Астана</span>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2 text-[#a5b4fc] font-mono">
            <Globe className="w-4 h-4" /> chemistry.umarkairat.kz
          </div>
        </div>
        <Stage h="h-[320px] sm:h-[420px]">
          <Molecule3DCanvas molecule={MOLECULES[4]} className="absolute inset-0 w-full h-full" />
        </Stage>
      </div>
    ),
    notes: "Здравствуйте, уважаемые члены жюри! Меня зовут Кайрат Умар, я учусь в New Generation School в Астане. Мой проект называется Chemistry Explorer — это интерактивная лаборатория химических открытий. Сзади вращается 3D-молекула бензола: все такие модели живут на моём сайте. Сайт работает онлайн, и в конце вы сможете открыть его со своего телефона.",
  },
  {
    tag: "Актуальность", title: "Проблема", icon: AlertTriangle,
    body: (
      <div className="space-y-5">
        <div className="grid sm:grid-cols-3 gap-4">
          <Card icon={BookOpen} title="Абстрактность" text="Атомы, связи и реакции нельзя увидеть: ученики заучивают формулы, не понимая, как устроено вещество." />
          <Card icon={FlaskConical} title="Нет лабораторий" text="Многим школам не хватает реактивов и оборудования, а часть опытов опасна: кислоты, щёлочи, токсичные газы." />
          <Card icon={Target} title="Низкая мотивация" text="Учебник со статичными таблицами проигрывает телефону и играм, внимание уходит." />
        </div>
        <Panel>
          <span className="text-[#a5b4fc] font-semibold">Вывод: </span>
          <span className="text-zinc-200 text-lg">нужен инструмент, который показывает химию, а не рассказывает о ней. Он должен работать на любом телефоне и не требовать оборудования.</span>
        </Panel>
      </div>
    ),
    notes: "Почему это важно? Химию нельзя увидеть: атомы и реакции остаются абстракцией, и ученики просто заучивают формулы. Во многих школах нет хорошей лаборатории, а некоторые опыты опасны — кислоты, щёлочи, токсичные газы. Мне захотелось сделать инструмент, который показывает химию.",
  },
  {
    tag: "Цель и задачи", title: "Что я хотел сделать", icon: Target,
    body: (
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="p-6 rounded-2xl bg-white/[0.06] border-l-2 border-[#a5b4fc]">
          <Label>ЦЕЛЬ</Label>
          <p className="text-white text-xl leading-relaxed">Создать онлайн-платформу, которая делает химию наглядной, интерактивной и интересной и привязана к школьной программе Казахстана.</p>
        </div>
        <Bullets items={[
          "Оцифровать все 118 элементов с карточками и моделью Бора",
          "Дать безопасно синтезировать вещества и проводить опыты",
          "Показать pH, растворимость и классификацию на практике",
          "Добавить квизы, квесты и достижения для мотивации",
          "Подключить ИИ-ассистента на трёх языках: қазақша, русский, English",
        ]} />
      </div>
    ),
    notes: "Цель — создать платформу, которая делает химию наглядной и связана со школьной программой Казахстана. Для этого я поставил пять задач: оцифровать таблицу Менделеева, сделать безопасную лабораторию, показать pH, растворимость и классификацию, добавить игровые элементы и подключить ИИ на трёх языках.",
  },
  {
    tag: "Решение", title: "Платформа целиком", icon: Layers,
    body: (
      <div className="space-y-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Stat value="118" label="элементов" />
          <Stat value="151" label="вещество в базе" />
          <Stat value="241" label="вопрос в квизе" />
          <Stat value="3" label="языка: RU · KK · EN" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm text-zinc-100">
          {["Таблица Менделеева", "Лаборатория синтеза", "pH-лаборатория", "Растворимость", "Классификация", "Журнал открытий", "Квиз и квесты", "Наука в РК и NGS"].map((m) => (
            <div key={m} className="py-3 rounded-xl bg-white/[0.07] border border-white/15">{m}</div>
          ))}
        </div>
        <div className="text-center text-zinc-300">+ ИИ-ассистент, светлая и тёмная тема, звуки, режим презентации и QR-код для жюри</div>
      </div>
    ),
    notes: "Вот что получилось. Платформа состоит из восьми разделов: таблица Менделеева, лаборатория синтеза, pH-лаборатория, растворимость, классификация, журнал открытий, квизы и квесты и раздел о науке Казахстана. В базе 118 элементов, 151 вещество, 241 вопрос для квиза и три языка. Дальше коротко покажу каждый раздел.",
  },
  {
    tag: "Раздел 1", title: "Периодическая таблица", icon: Table2,
    body: (
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <Bullets items={[
            "118 элементов IUPAC и 8-й период с гипотетическими элементами 119 и 120",
            "Карточка элемента: орбитальная модель Бора, уровни K–Q, электронная конфигурация, спектр излучения, история открытия",
            "Фильтры: 10 категорий, электронные блоки s, p, d, f, агрегатное состояние, «Богатства Казахстана»",
            "Термометр от 0 до 6000 К: фазовое состояние всех элементов пересчитывается на лету",
          ]} />
          <LiveBtn label="Открыть таблицу" />
        </div>
        <ElementFacts />
      </div>
    ),
    notes: "Первый раздел — таблица Менделеева. Все 118 элементов, а ещё восьмой период с гипотетическими элементами. У каждого элемента карточка с анимированной моделью Бора, электронной конфигурацией, спектром и историей открытия. Можно фильтровать элементы по десяти категориям и по блокам s, p, d, f. Отдельная фишка — термометр от нуля до шести тысяч кельвинов: двигаешь ползунок, и у всех элементов сразу меняется агрегатное состояние. [Открыть сайт и показать термометр]",
  },
  {
    tag: "Раздел 1", title: "Остров стабильности", icon: Mountain,
    body: (
      <div className="grid lg:grid-cols-2 gap-6">
        <Card icon={Mountain} title="Остров стабильности" text="Область долгоживущих сверхтяжёлых ядер по концепции Гленна Сиборга. Магические числа: Z = 114, 120, 126 и N = 184." />
        <Card icon={Atom} title="Квазистабильные изотопы" text="Флёровий-298 и хассий-270 на сайте показаны как примеры ядер, приближающихся к острову." />
        <Card icon={FlaskConical} title="Фабрика сверхтяжёлых элементов" text="Ускоритель ДЦ-280 в Лаборатории ядерных реакций ОИЯИ (Дубна) — один из источников синтеза новых элементов." />
        <Card icon={Thermometer} title="8-й период" text="Элементы 119 унуннений (Uue) и 120 унбинилий (Ubn): окно в химию будущего прямо в таблице." />
      </div>
    ),
    notes: "Это отдельное окно «Остров стабильности». Оно рассказывает, как учёные ищут новые сверхтяжёлые элементы. По концепции Сиборга ядра с определёнными числами протонов и нейтронов — например, 114, 120, 126 и 184 — должны жить намного дольше. На сайте показаны флёровий-298 и хассий-270 и ускоритель ДЦ-280 в Дубне. Это та часть, которой нет в школьном учебнике, но она очень цепляет.",
  },
  {
    tag: "Раздел 2", title: "Лаборатория синтеза", icon: FlaskConical,
    body: (
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <Bullets items={[
            "Кладёшь атомы в магнитную камеру, а система считает формулу и молярную массу",
            "151 вещество: газы, кислоты, минералы, топливо, органика и бытовые вещества",
            "Режимы энергии: нагрев до 1200 К и катализатор для барьера активации",
            "У каждого вещества: геометрия, класс опасности, применение и научный факт",
          ]} />
          <LiveBtn label="Синтезировать H₂O" />
        </div>
        <MolViewer />
      </div>
    ),
    notes: "Второй раздел — лаборатория синтеза. Выбираешь атомы, кладёшь в камеру, и система сама считает формулу и молярную массу. Можно нагреть реакцию до тысячи двухсот кельвинов или добавить катализатор. Если получилось настоящее вещество, открывается окно открытия: формула, класс опасности, применение и научный факт. В базе 151 вещество. Справа — 3D-галерея: вода, метан, аммиак, углекислый газ, бензол и этанол. Можно вращать мышкой.",
  },
  {
    tag: "Раздел 3", title: "pH-лаборатория", icon: Beaker,
    body: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div>
            <Label>13 РАСТВОРОВ: ШКАЛА pH 0–14</Label>
            <Chips items={["HCl 1 M · 0,0", "Желудочный сок · 1,5", "Лимонный сок · 2,4", "Уксус · 2,9", "Томатный сок · 4,2", "Кофе · 5,0", "Молоко · 6,6", "Вода · 7,0", "Морская вода · 8,2", "NaHCO₃ · 8,5", "Мыльный раствор · 10,0", "Аммиак · 11,5", "NaOH 1 M · 14,0"]} />
          </div>
          <div>
            <Label>5 ИНДИКАТОРОВ</Label>
            <Chips items={["Универсальный", "Лакмус", "Фенолфталеин", "Метилоранж", "Краснокочанная капуста"]} />
          </div>
        </div>
        <div className="space-y-5">
          <Bullets items={[
            "Анимированная пипетка и виртуальный pH-электрод",
            "Расчёт концентраций [H⁺] и [OH⁻] в моль/л",
            "Спектрофотометрический график кривой поглощения",
          ]} />
          <LiveBtn label="Открыть pH-лабораторию" />
        </div>
      </div>
    ),
    notes: "Третий раздел — pH-лаборатория. Тринадцать реальных растворов: от соляной кислоты с pH ноль до едкого натра с pH четырнадцать. Между ними желудочный сок, лимонный сок, уксус, кофе, молоко, вода, морская вода, мыльный раствор. Пять индикаторов: универсальный, лакмус, фенолфталеин, метилоранж и даже сок краснокочанной капусты. Капаешь пипеткой, и цвет меняется как в настоящей лаборатории, а сайт сразу считает концентрацию ионов водорода и гидроксида.",
  },
  {
    tag: "Раздел 4", title: "Растворимость и пробирка", icon: TestTube2,
    body: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div className="grid grid-cols-3 gap-3">
            <Stat value="15" label="катионов" />
            <Stat value="14" label="анионов" />
            <Stat value="210" label="комбинаций" />
          </div>
          <Panel>
            <Label>ОБОЗНАЧЕНИЯ В ТАБЛИЦЕ</Label>
            <div className="text-zinc-200 text-sm leading-relaxed">
              <b className="text-white">Р</b> растворимо · <b className="text-white">М</b> малорастворимо · <b className="text-white">Н</b> нерастворимо (осадок с цветом) · <b className="text-white">—</b> разлагается водой · <b className="text-white">Г</b> газ
            </div>
          </Panel>
          <div className="text-zinc-300 text-sm">12 качественных реакций с полными ионными уравнениями и признаками</div>
        </div>
        <div className="space-y-4">
          <Label>ВИРТУАЛЬНАЯ ПРОБИРКА</Label>
          <Bullets items={[
            "Температура 20–100 °C, горелка Бунзена, ледяная баня, встряхивание",
            "«Золотой дождь»: PbI₂ растворяется при 100 °C и кристаллизуется при охлаждении",
            "Cu(OH)₂ при нагреве выше 75 °C разлагается в чёрный CuO",
            "Fe(OH)₂ на воздухе буреет в Fe(OH)₃, а Al(OH)₃ растворяется в избытке щёлочи",
          ]} />
          <LiveBtn label="Открыть пробирку" />
        </div>
      </div>
    ),
    notes: "Четвёртый раздел — таблица растворимости и виртуальная пробирка. В таблице пятнадцать катионов и четырнадцать анионов, то есть двести десять комбинаций. Буквы Р, М, Н означают растворимо, малорастворимо и нерастворимо. Есть двенадцать качественных реакций с ионными уравнениями. В виртуальной пробирке можно греть смесь на горелке Бунзена или охлаждать во льду. Самый красивый опыт — «золотой дождь»: иодид свинца растворяется при ста градусах и красиво кристаллизуется при охлаждении. [Показать вживую]",
  },
  {
    tag: "Раздел 5", title: "Классификация веществ", icon: Network,
    body: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Label>5 РАЗДЕЛОВ МОДУЛЯ</Label>
          <Bullets items={[
            "Схема классификации в виде дерева",
            "Каталог веществ с формулами, свойствами и реакциями",
            "Генетическая связь: ряд кальция (металл) и ряд серы (неметалл) с уравнениями по шагам",
            "Матрица взаимодействия классов и тренажёр-квиз",
          ]} />
        </div>
        <div className="space-y-4">
          <Label>ЧТО КЛАССИФИЦИРУЕТСЯ</Label>
          <Chips items={["Простые: металлы, неметаллы, инертные газы", "Оксиды: основные, кислотные, амфотерные, несолеобразующие, пероксиды", "Основания: щёлочи, нерастворимые, амфотерные", "Кислоты: бескислородные и оксокислоты", "Соли: средние, кислые, основные, комплексные", "Бинарные: гидриды, карбиды, нитриды"]} />
          <div className="text-zinc-300 text-sm">У каждого соединения есть кнопка «Синтезировать в лаборатории»</div>
        </div>
      </div>
    ),
    notes: "Пятый раздел — классификация неорганических веществ. Это ровно то, что проходят в восьмом–девятом классе: простые вещества, оксиды, основания, кислоты и соли. Есть схема-дерево, каталог, генетические ряды — например, кальций, оксид кальция, гидроксид, соль — и матрица, которая показывает, какие классы реагируют друг с другом. Для проверки знаний встроен тренажёр. А у каждого соединения есть кнопка «Синтезировать в лаборатории», так что теория сразу связана с практикой.",
  },
  {
    tag: "Раздел 6", title: "Квиз-арена", icon: Gamepad2,
    body: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div className="grid grid-cols-3 gap-3">
            <Stat value="241" label="вопрос" />
            <Stat value="6" label="категорий" />
            <Stat value="3" label="уровня сложности" />
          </div>
          <Chips items={["Таблица Менделеева", "Реакции и уравнения", "Органическая химия", "Кислоты, щёлочи и pH", "Качественные реакции", "Наука Казахстана"]} />
        </div>
        <div className="space-y-4">
          <Label>3 РЕЖИМА ИГРЫ</Label>
          <Bullets items={[
            "Олимпиадный экзамен: 3 жизни и 25 секунд на вопрос",
            "Блиц 60 секунд с множителями комбо",
            "Тематический тренажёр по выбранной категории",
            "Подсказки 50/50 и ИИ-подсказка, горячие клавиши 1–4, разбор ошибок",
          ]} />
        </div>
      </div>
    ),
    notes: "Шестой раздел — квиз-арена. Двести сорок один вопрос в шести категориях и трёх уровнях сложности. Есть три режима: олимпиадный экзамен с тремя жизнями и двадцатью пятью секундами на вопрос, блиц на шестьдесят секунд с множителями комбо и тематический тренажёр. Можно взять подсказку пятьдесят на пятьдесят или попросить подсказку у ИИ. После ответа сайт объясняет, почему именно так. Одна из категорий посвящена науке Казахстана.",
  },
  {
    tag: "Раздел 6", title: "Квесты и достижения", icon: Trophy,
    body: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <Label>8 КВЕСТОВ · 2050 XP</Label>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[["💧 Живая вода", "100"], ["🧂 Кухонная химия", "150"], ["🌍 Дыхание планеты", "200"], ["🔥 Энергия и пламя", "250"], ["⚗️ Кислоты и щёлочи", "300"], ["💎 Сокровища недр", "300"], ["🍬 Сладкие углеводы", "350"], ["👑 Ювелир", "400"]].map(([n, xp]) => (
              <div key={n} className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/[0.07] border border-white/15">
                <span className="text-zinc-100">{n}</span><span className="font-mono text-[#a5b4fc] text-xs">{xp} XP</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Label>8 ДОСТИЖЕНИЙ</Label>
          <Chips items={["🔬 Первая химическая связь", "💧 Источник жизни", "🧪 Юный химик", "⭐ Исследователь лаборатории", "🔮 Магистр алхимии", "📜 Знаток таблицы", "⚡ Смелый экспериментатор", "🇰🇿 Богатства Казахстана"]} />
        </div>
      </div>
    ),
    notes: "Квесты и достижения. Восемь квестов, в сумме две тысячи пятьдесят очков опыта: от «Живой воды», где нужно синтезировать H₂O, до «Ювелира» — найти золото, алмаз и корунд. А ещё восемь достижений. Например, «Богатства Казахстана» получают, изучив уран или медь в таблице. Всё это держит интерес: хочется пройти ещё один уровень.",
  },
  {
    tag: "Раздел 7", title: "Журнал и сертификат", icon: Award,
    body: (
      <div className="grid sm:grid-cols-3 gap-4">
        <Card icon={BookOpen} title="Журнал открытий" text="Реестр всех синтезированных веществ: фильтры по категориям, поиск, статистика прогресса и ранги исследователя." />
        <Card icon={Award} title="Сертификат" text="Официальный «Certificate of Chemical Discovery» с логотипом NGS, именем автора и печатью «NGS Verified Lab» — его можно распечатать." />
        <Card icon={Sparkles} title="Центр управления" text="Тема тёмная и светлая, звуки, режим презентации, видео-интро, научный паспорт проекта, QR-код для жюри и сброс прогресса." />
      </div>
    ),
    notes: "Все открытия записываются в журнал. В нём есть фильтры по категориям, поиск и ранги — от ученика до гроссмейстера химии. А когда ученик набрал прогресс, он может распечатать сертификат «Certificate of Chemical Discovery» с логотипом нашей школы и печатью «NGS Verified Lab». В центре управления есть тёмная и светлая тема, звук, режим презентации и QR-код, который я покажу в конце.",
  },
  {
    tag: "Раздел 8", title: "Наука в РК и NGS", icon: Flag,
    body: (
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label>КАЗАХСТАН В ЦИФРАХ (ИЗ РАЗДЕЛА САЙТА)</Label>
          {[
            ["1 место", "в мире по добыче урана, около 40–43% мировой добычи"],
            ["1 место", "в мире по запасам вольфрама"],
            ["2 место", "в мире по запасам хрома, свинца и цинка"],
            ["топ-10", "в мире по меди; сера из попутного H₂S Тенгиза и Кашагана"],
          ].map(([a, b]) => (
            <div key={b} className="flex gap-3 items-center p-3 rounded-xl bg-white/[0.07] border border-white/15">
              <span className="font-bold text-[#c7d2fe] w-20 shrink-0 text-sm">{a}</span>
              <span className="text-zinc-100 text-sm">{b}</span>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div>
            <Label>ФЛАГМАНЫ ИНДУСТРИИ</Label>
            <Chips items={["Казфосфат", "Казцинк", "KAZ Minerals", "УМЗ Казатомпрома", "KPI (полипропилен)", "АЗХС"]} />
          </div>
          <div>
            <Label>ВЕЛИКИЕ УЧЁНЫЕ РК</Label>
            <Chips items={["К. Сатпаев", "А. Бектуров", "Е. Азербаев", "М. Усанович", "Б. Беремжанов", "Д. Садыков"]} />
          </div>
          <div className="text-zinc-300 text-sm">Плюс подраздел «Проект в NGS» о связи с программой школы и стандартами «Жасыл Қазақстан»</div>
        </div>
      </div>
    ),
    notes: "Восьмой раздел — «Наука в РК и NGS». Я хотел, чтобы проект был не просто про химию вообще, а про химию Казахстана. Здесь рассказано, что Казахстан — первый в мире по добыче урана и по запасам вольфрама, второй по хрому, свинцу и цинку. Есть флагманы индустрии — Казфосфат, Казцинк, Казатомпром — и шесть великих казахстанских учёных, например Сатпаев, Бектуров и Усанович. А последний подраздел связывает проект с нашей школой NGS.",
  },
  {
    tag: "Главная фишка", title: "ИИ-ассистент", icon: Bot,
    body: (
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <Bullets items={[
          "Работает на Google Gemini и отвечает на вопросы по химии на трёх языках",
          "Не только текст: сам открывает элемент, загружает молекулу в лабораторию, запускает пробирку или переключает вкладку",
          "Знает программу 8–9, 10 и 11 классов",
          "Если нейросеть недоступна, включается встроенный офлайн-движок знаний",
        ]} />
        <div className="p-5 rounded-2xl bg-white/[0.07] border border-white/15 space-y-3 text-sm">
          <div className="ml-auto w-fit max-w-[85%] px-4 py-2 rounded-2xl rounded-br-sm bg-white text-zinc-900">Что такое серная кислота?</div>
          <div className="w-fit max-w-[92%] px-4 py-2 rounded-2xl rounded-bl-sm bg-white/[0.1] text-zinc-100">H₂SO₄ — одна из важнейших кислот в химии, её называют «хлебом промышленности»…</div>
          <div className="w-fit px-3 py-1.5 rounded-lg border border-[#a5b4fc]/50 text-[#c7d2fe] text-xs">→ Открыть Серу (S) в таблице</div>
          <div className="w-fit px-3 py-1.5 rounded-lg border border-[#a5b4fc]/50 text-[#c7d2fe] text-xs">→ Синтезировать воду (H₂O) в реакторе</div>
        </div>
      </div>
    ),
    notes: "Главная особенность — ИИ-ассистент на Google Gemini. Он отвечает на казахском, русском и английском и знает программу восьмого–одиннадцатого классов. Но главное — он не просто пишет текст. Под ответом появляются кнопки действий: открыть элемент в таблице, загрузить молекулу в лабораторию, запустить пробирку или переключить вкладку. Если интернет или нейросеть недоступны, срабатывает встроенный офлайн-движок, поэтому ассистент не молчит. [Если есть время — задать вопрос вживую]",
  },
  {
    tag: "Технологии", title: "Как это сделано", icon: Cpu,
    body: (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          ["Next.js 16", "веб-фреймворк, Turbopack"],
          ["TypeScript", "типизированные данные веществ и элементов"],
          ["React", "интерактивные модули"],
          ["Google Gemini API", "ИИ-ассистент с действиями"],
          ["Tailwind CSS", "адаптивный интерфейс, тёмная и светлая тема"],
          ["Домен .kz", "chemistry.umarkairat.kz"],
        ].map(([t, d]) => (
          <div key={t} className="p-5 rounded-2xl bg-white/[0.07] border border-white/15">
            <div className="text-white font-bold text-lg">{t}</div>
            <div className="text-zinc-300 text-sm">{d}</div>
          </div>
        ))}
      </div>
    ),
    notes: "Технически проект сделан на Next.js 16, React и TypeScript — это современные технологии, которые используют крупные компании. Искусственный интеллект подключён через Google Gemini API. Интерфейс адаптивный, с тёмной и светлой темой, работает и на компьютере, и на телефоне, и размещён на собственном домене chemistry.umarkairat.kz.",
  },
  {
    tag: "Итоги", title: "Результаты и развитие", icon: Rocket,
    body: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <Label>ДОСТИГНУТО</Label>
          <Bullets items={[
            "Работающая платформа в открытом доступе",
            "118 элементов, 151 вещество, 241 вопрос, 8 квестов",
            "Три языка и привязка к науке Казахстана",
            "ИИ, который не только говорит, но и действует",
          ]} />
        </div>
        <div>
          <Label>ПЛАНЫ</Label>
          <Bullets items={[
            "Кабинет учителя и статистика класса",
            "Мобильное приложение",
            "Внедрение в школах NGS и по всему Казахстану",
          ]} />
        </div>
      </div>
    ),
    notes: "Итоги. Платформа работает и доступна онлайн: сто восемнадцать элементов, сто пятьдесят одно вещество, двести сорок один вопрос, восемь квестов, три языка и ИИ, который умеет действовать. Дальше я планирую кабинет учителя со статистикой класса, мобильное приложение и внедрение сначала в NGS, а потом в других школах Казахстана.",
  },
  {
    tag: "Спасибо за внимание", title: "Попробуйте сами!", icon: Sparkles,
    body: (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
        <div className="p-4 bg-white rounded-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={QR} alt="QR-код сайта" className="w-52 h-52 sm:w-60 sm:h-60" />
        </div>
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-2xl text-white font-bold">Отсканируйте камерой телефона</p>
          <div className="flex items-center gap-2 text-zinc-200 font-mono text-lg justify-center sm:justify-start">
            <Globe className="w-5 h-5" /> chemistry.umarkairat.kz
          </div>
          <p className="text-zinc-300">Кайрат Умар • NGS, г. Астана</p>
          <p className="text-zinc-200 text-lg">Готов ответить на ваши вопросы!</p>
        </div>
      </div>
    ),
    notes: "Спасибо за внимание! Вы можете прямо сейчас отсканировать QR-код и попробовать платформу на своём телефоне. Буду рад ответить на ваши вопросы.",
  },
];

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
    <main className="fixed inset-0 overflow-hidden bg-[#0a0a0b] text-zinc-100 select-none" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[1000px] h-[560px] rounded-full blur-[140px] opacity-[0.2] bg-[#a5b4fc]" />
        <div className="absolute -bottom-72 -right-40 w-[700px] h-[500px] rounded-full blur-[150px] opacity-[0.12] bg-[#5eead4]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>

      <section key={i} className="relative z-10 h-full overflow-y-auto px-16 sm:px-28 lg:px-36 pt-10 pb-24 animate-[slideIn_0.5s_ease-out]">
        <div className="min-h-full flex flex-col justify-center">
          <div className={`flex items-center gap-3 mb-3 ${centered ? "justify-center" : ""}`}>
            <Icon className="w-4 h-4 text-[#a5b4fc]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">{String(i + 1).padStart(2, "0")} — {s.tag}</span>
          </div>
          <h1 className={`text-3xl sm:text-5xl font-bold tracking-tight mb-8 text-white ${centered ? "text-center sm:text-6xl" : ""}`}>
            {s.title}
          </h1>
          <div className="max-w-6xl w-full mx-auto">{s.body}</div>
        </div>
      </section>

      <button id="prev-slide" onClick={() => go(-1)} disabled={i === 0} aria-label="Назад"
        className="absolute z-20 left-3 sm:left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center border border-white/15 bg-white/[0.05] text-zinc-200 hover:bg-white hover:text-zinc-900 hover:scale-105 disabled:opacity-0 disabled:pointer-events-none transition-all duration-200">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button id="next-slide" onClick={() => go(1)} disabled={i === total - 1} aria-label="Вперёд"
        className="absolute z-20 right-3 sm:right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center border border-white/15 bg-white/[0.05] text-zinc-200 hover:bg-white hover:text-zinc-900 hover:scale-105 disabled:opacity-0 disabled:pointer-events-none transition-all duration-200">
        <ChevronRight className="w-6 h-6" />
      </button>

      {notes && (
        <div className="absolute z-30 left-4 right-4 bottom-20 sm:left-auto sm:right-6 sm:w-[480px] max-h-[55vh] overflow-y-auto p-5 rounded-2xl bg-zinc-900/95 border border-white/15 backdrop-blur-xl text-sm text-zinc-100 leading-relaxed shadow-2xl">
          <div className="text-zinc-400 font-mono text-xs mb-2 tracking-widest">ЧТО ГОВОРИТЬ · N</div>
          {s.notes}
        </div>
      )}

      <div className="absolute z-20 bottom-0 inset-x-0 px-6 py-5 flex items-center justify-between bg-gradient-to-t from-[#0a0a0b] to-transparent">
        <span className="font-mono text-xs text-zinc-400 w-24">{String(i + 1).padStart(2, "0")} / {total}</span>
        <div className="flex items-center gap-1.5">
          {slides.map((_, k) => (
            <button key={k} id={`dot-${k + 1}`} onClick={() => setI(k)} aria-label={`Слайд ${k + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${k === i ? "w-7 bg-white" : "w-1.5 bg-white/25 hover:bg-white/60"}`} />
          ))}
        </div>
        <div className="flex items-center gap-2 w-24 justify-end">
          <button id="toggle-notes" onClick={() => setNotes((n) => !n)} title="Подсказки (N)" className={`p-2 rounded-lg transition ${notes ? "bg-white text-zinc-900" : "text-zinc-400 hover:text-white"}`}><StickyNote className="w-4 h-4" /></button>
          <button id="toggle-fullscreen" onClick={fullscreen} title="Полный экран (F)" className="p-2 rounded-lg text-zinc-400 hover:text-white transition"><Maximize className="w-4 h-4" /></button>
        </div>
      </div>

      <style>{`@keyframes slideIn{from{opacity:0;transform:translateY(24px) scale(.98)}to{opacity:1;transform:none}}`}</style>
    </main>
  );
}
