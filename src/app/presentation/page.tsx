"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Atom, FlaskConical, Beaker, Bot, Trophy, Cpu, Target, AlertTriangle,
  Sparkles, ChevronLeft, ChevronRight, Maximize, ExternalLink, Globe,
  Table2, Droplets, Rocket, StickyNote, Layers, BookOpen,
} from "lucide-react";

const SITE = "https://chemistry.umarkairat.kz";
const QR = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(SITE)}&bgcolor=ffffff&color=0f172a&margin=10`;

type Slide = {
  tag: string;
  title: string;
  icon: React.ElementType;
  accent: string;
  body: React.ReactNode;
  notes: string;
};

const Card = ({ icon: Icon, title, text, color }: { icon: React.ElementType; title: string; text: string; color: string }) => (
  <div className="group p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300">
    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${color}`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
    <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
    <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
  </div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center p-5 rounded-2xl bg-white/[0.04] border border-white/10">
    <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">{value}</div>
    <div className="text-slate-400 text-sm mt-1">{label}</div>
  </div>
);

const LiveBtn = ({ label = "Показать вживую" }: { label?: string }) => (
  <a href="/" target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 transition active:scale-95">
    {label} <ExternalLink className="w-4 h-4" />
  </a>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((i) => (
      <li key={i} className="flex gap-3 text-slate-200 text-lg">
        <Sparkles className="w-5 h-5 text-fuchsia-300 shrink-0 mt-1" />
        <span>{i}</span>
      </li>
    ))}
  </ul>
);

const slides: Slide[] = [
  {
    tag: "Научный проект", title: "Chemistry Explorer", icon: Atom, accent: "from-indigo-500 to-fuchsia-500",
    body: (
      <div className="text-center space-y-6">
        <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto">
          Интерактивная цифровая лаборатория для изучения химии с ИИ-ассистентом
        </p>
        <div className="inline-flex flex-col gap-1 px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/10">
          <span className="text-white text-lg font-bold">Автор: Кайрат Умар</span>
          <span className="text-slate-400">New Generation School (NGS), г. Астана</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-indigo-300 font-mono">
          <Globe className="w-4 h-4" /> chemistry.umarkairat.kz
        </div>
      </div>
    ),
    notes: "Здравствуйте, уважаемые члены жюри! Меня зовут Кайрат Умар, я учусь в New Generation School в Астане. Хочу представить свой проект Chemistry Explorer — интерактивную лабораторию по химии с искусственным интеллектом. Сайт работает онлайн, и в конце вы сможете открыть его со своего телефона.",
  },
  {
    tag: "Актуальность", title: "Проблема", icon: AlertTriangle, accent: "from-rose-500 to-orange-500",
    body: (
      <div className="grid sm:grid-cols-3 gap-4">
        <Card icon={BookOpen} color="bg-rose-500/80" title="Абстрактность" text="Атомы, связи и реакции нельзя увидеть — ученики просто заучивают формулы." />
        <Card icon={FlaskConical} color="bg-orange-500/80" title="Нет лабораторий" text="Многим школам не хватает реактивов и оборудования, а часть опытов просто опасна." />
        <Card icon={Target} color="bg-amber-500/80" title="Низкая мотивация" text="Учебник со статичными таблицами проигрывает телефону и играм." />
      </div>
    ),
    notes: "Почему это важно? Химия — один из самых сложных школьных предметов, потому что её нельзя увидеть. Атомы и реакции остаются абстракцией. Во многих школах нет хорошей лаборатории, а некоторые опыты опасны. И ученикам просто скучно учиться по статичным таблицам.",
  },
  {
    tag: "Цель и задачи", title: "Что я хотел сделать", icon: Target, accent: "from-emerald-500 to-teal-500",
    body: (
      <div className="grid sm:grid-cols-2 gap-8 items-start">
        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-400/20">
          <div className="text-emerald-300 font-mono text-sm mb-2">ЦЕЛЬ</div>
          <p className="text-white text-xl leading-relaxed">Создать бесплатную онлайн-платформу, которая делает химию наглядной, интерактивной и интересной.</p>
        </div>
        <Bullets items={[
          "Оцифровать все 118 элементов с их свойствами",
          "Дать безопасно проводить реакции и собирать молекулы",
          "Подключить ИИ-ассистента, который объясняет и сам показывает",
          "Добавить игровые механики, чтобы повысить мотивацию",
          "Сделать сайт на 3 языках: қазақша, русский, English",
        ]} />
      </div>
    ),
    notes: "Цель проекта — создать бесплатную онлайн-платформу, которая делает химию наглядной. Для этого я поставил пять задач: оцифровать всю таблицу Менделеева, сделать безопасную виртуальную лабораторию, подключить ИИ, добавить игровые элементы и поддержать три языка.",
  },
  {
    tag: "Решение", title: "Платформа целиком", icon: Layers, accent: "from-indigo-500 to-violet-500",
    body: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Stat value="118" label="элементов" />
          <Stat value="51" label="молекула для синтеза" />
          <Stat value="3" label="языка интерфейса" />
          <Stat value="24/7" label="доступ онлайн" />
        </div>
        <div className="grid sm:grid-cols-4 gap-3 text-center text-sm text-slate-300">
          {["Таблица Менделеева", "Лаборатория реакций", "pH-лаборатория", "Растворимость", "Классификация", "3D-молекулы", "ИИ-ассистент", "Квесты и журнал"].map((m) => (
            <div key={m} className="py-3 rounded-xl bg-white/[0.04] border border-white/10">{m}</div>
          ))}
        </div>
      </div>
    ),
    notes: "Вот что получилось: платформа из восьми модулей — 118 элементов, 51 молекула для синтеза, три языка, и всё работает онлайн круглосуточно. Дальше коротко покажу каждый модуль.",
  },
  {
    tag: "Модуль 1", title: "Периодическая таблица", icon: Table2, accent: "from-sky-500 to-indigo-500",
    body: (
      <div>
        <Bullets items={[
          "Все 118 элементов, у каждого есть карточка: масса, электроотрицательность, конфигурация",
          "Цветовая классификация: металлы, неметаллы, благородные газы и т.д.",
          "Отдельный модуль классификации веществ: оксиды, кислоты, основания, соли",
          "Звуковые эффекты и анимации при работе",
        ]} />
        <LiveBtn label="Открыть таблицу" />
      </div>
    ),
    notes: "Первый модуль — интерактивная таблица Менделеева. Нажимаешь на любой элемент и видишь все его свойства. Цвета помогают понять группы. Отдельно есть модуль классификации веществ. Сейчас покажу вживую. [Открыть сайт и кликнуть на элемент, например, Натрий]",
  },
  {
    tag: "Модуль 2", title: "Лаборатория реакций и 3D", icon: FlaskConical, accent: "from-fuchsia-500 to-pink-500",
    body: (
      <div>
        <Bullets items={[
          "Собираешь молекулу из атомов, и система проверяет, правильно ли",
          "51 молекула: от воды H₂O до сложных органических соединений",
          "3D-студия: молекулу можно вращать и рассматривать со всех сторон",
          "Опасные реакции без риска для здоровья",
        ]} />
        <LiveBtn label="Синтезировать H₂O" />
      </div>
    ),
    notes: "Второй модуль — лаборатория. Здесь можно собрать молекулу из атомов, например два водорода и кислород дают воду. В 3D-студии молекулу можно повернуть и рассмотреть. Главное — даже опасные реакции здесь абсолютно безопасны.",
  },
  {
    tag: "Модуль 3", title: "pH и растворимость", icon: Droplets, accent: "from-cyan-500 to-emerald-500",
    body: (
      <div className="grid sm:grid-cols-2 gap-4">
        <Card icon={Beaker} color="bg-cyan-500/80" title="pH-лаборатория" text="Смешиваешь растворы и видишь, как меняется кислотность и цвет индикатора по шкале 0–14." />
        <Card icon={Table2} color="bg-emerald-500/80" title="Таблица растворимости" text="Интерактивная таблица: наводишь на ячейку и получаешь объяснение, выпадет ли осадок." />
      </div>
    ),
    notes: "Третий модуль — pH-лаборатория: смешиваешь растворы и видишь, как меняется кислотность. И интерактивная таблица растворимости, которая сразу говорит, будет ли осадок. Это ровно то, что проходят по школьной программе.",
  },
  {
    tag: "Главная фишка", title: "ИИ-ассистент", icon: Bot, accent: "from-violet-500 to-indigo-500",
    body: (
      <div className="grid sm:grid-cols-2 gap-8 items-center">
        <Bullets items={[
          "Работает на Google Gemini и отвечает на любые вопросы по химии",
          "Не просто текст: сам открывает элемент или запускает синтез на сайте",
          "Объясняет простым языком на казахском, русском и английском",
          "Если основная модель недоступна, сам переключается на резервную",
        ]} />
        <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3 text-sm">
          <div className="ml-auto w-fit max-w-[85%] px-4 py-2 rounded-2xl rounded-br-sm bg-indigo-600 text-white">Что такое серная кислота?</div>
          <div className="w-fit max-w-[90%] px-4 py-2 rounded-2xl rounded-bl-sm bg-white/10 text-slate-200">H₂SO₄ — одна из важнейших кислот в химии, её называют «хлебом промышленности»...</div>
          <div className="w-fit px-3 py-1.5 rounded-lg bg-fuchsia-500/20 border border-fuchsia-400/30 text-fuchsia-200 text-xs">⚡ Открыть Серу (S) в Таблице</div>
        </div>
      </div>
    ),
    notes: "Главная особенность проекта — ИИ-ассистент на Google Gemini. Он не просто отвечает текстом, как обычный чат-бот, а сам выполняет действия на сайте: например, открывает нужный элемент или запускает синтез молекулы. Это как личный репетитор по химии. [Если есть время — задать вопрос вживую]",
  },
  {
    tag: "Геймификация", title: "Квесты и журнал", icon: Trophy, accent: "from-amber-500 to-orange-500",
    body: (
      <div className="grid sm:grid-cols-3 gap-4">
        <Card icon={Trophy} color="bg-amber-500/80" title="Квесты" text="Задания с наградами превращают учёбу в игру." />
        <Card icon={BookOpen} color="bg-orange-500/80" title="Журнал" text="Все открытия и синтезы сохраняются, прогресс видно." />
        <Card icon={Sparkles} color="bg-rose-500/80" title="Мотивация" text="Хочется пройти ещё один уровень, а не закрыть учебник." />
      </div>
    ),
    notes: "Чтобы ученикам было интересно, я добавил квесты и журнал открытий. Ученик проходит задания, получает награды, видит свой прогресс. Учёба становится похожа на игру.",
  },
  {
    tag: "Технологии", title: "Как это сделано", icon: Cpu, accent: "from-slate-400 to-indigo-500",
    body: (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          ["Next.js 16", "современный веб-фреймворк"],
          ["TypeScript", "надёжный типизированный код"],
          ["React", "интерактивный интерфейс"],
          ["Google Gemini API", "искусственный интеллект"],
          ["Tailwind CSS", "адаптивный дизайн"],
          ["Хостинг .kz", "домен chemistry.umarkairat.kz"],
        ].map(([t, d]) => (
          <div key={t} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="text-white font-bold text-lg">{t}</div>
            <div className="text-slate-400 text-sm">{d}</div>
          </div>
        ))}
      </div>
    ),
    notes: "Технически проект сделан на Next.js 16 и TypeScript, это те же технологии, что используют крупные компании. ИИ подключён через Google Gemini API. Сайт адаптивный, работает и на компьютере, и на телефоне, и размещён на собственном домене.",
  },
  {
    tag: "Итоги", title: "Результаты и развитие", icon: Rocket, accent: "from-emerald-500 to-indigo-500",
    body: (
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <div className="text-emerald-300 font-mono text-sm mb-3">ДОСТИГНУТО</div>
          <Bullets items={[
            "Рабочая платформа в открытом доступе",
            "Все поставленные задачи выполнены",
            "Бесплатно для любой школы Казахстана",
          ]} />
        </div>
        <div>
          <div className="text-indigo-300 font-mono text-sm mb-3">ПЛАНЫ</div>
          <Bullets items={[
            "Кабинет учителя и статистика класса",
            "Мобильное приложение",
            "Внедрение в школах NGS и по всему Казахстану",
          ]} />
        </div>
      </div>
    ),
    notes: "Итог: все задачи выполнены, платформа работает и доступна бесплатно любой школе Казахстана. Дальше я планирую сделать кабинет учителя, мобильное приложение и внедрить платформу сначала в NGS, а потом в других школах.",
  },
  {
    tag: "Спасибо за внимание", title: "Попробуйте сами!", icon: Sparkles, accent: "from-indigo-500 to-fuchsia-500",
    body: (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
        <div className="p-4 bg-white rounded-3xl shadow-2xl shadow-indigo-500/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={QR} alt="QR-код сайта" className="w-56 h-56 sm:w-64 sm:h-64" />
        </div>
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-2xl text-white font-bold">Отсканируйте камерой телефона</p>
          <div className="flex items-center gap-2 text-indigo-300 font-mono text-lg justify-center sm:justify-start">
            <Globe className="w-5 h-5" /> chemistry.umarkairat.kz
          </div>
          <p className="text-slate-400">Кайрат Умар • NGS, г. Астана</p>
          <p className="text-slate-300 text-lg">Готов ответить на ваши вопросы!</p>
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

  return (
    <main className="fixed inset-0 overflow-hidden bg-[#070816] text-white select-none" style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 bg-gradient-to-br ${s.accent} transition-all duration-1000`} />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 bg-gradient-to-br from-indigo-600 to-purple-700 animate-pulse" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      </div>

      {/* Slide */}
      <section key={i} className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-16 lg:px-28 py-20 animate-[slideIn_0.6s_ease-out]">
        <div className={`flex items-center gap-3 mb-4 ${i === 0 || i === total - 1 ? "justify-center" : ""}`}>
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center shadow-lg`}>
            <Icon className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">{s.tag}</span>
        </div>
        <h1 className={`text-4xl sm:text-6xl font-black tracking-tight mb-10 bg-gradient-to-r from-white via-indigo-100 to-fuchsia-200 bg-clip-text text-transparent ${i === 0 || i === total - 1 ? "text-center sm:text-7xl" : ""}`}>
          {s.title}
        </h1>
        <div className="max-w-6xl w-full mx-auto">{s.body}</div>
      </section>

      {/* Speaker notes */}
      {notes && (
        <div className="absolute z-20 left-4 right-4 bottom-20 sm:left-auto sm:w-[460px] p-5 rounded-2xl bg-slate-900/95 border border-amber-400/30 backdrop-blur-xl text-sm text-amber-50 leading-relaxed shadow-2xl">
          <div className="text-amber-300 font-mono text-xs mb-2">ЧТО ГОВОРИТЬ (клавиша N)</div>
          {s.notes}
        </div>
      )}

      {/* Controls */}
      <div className="absolute z-20 bottom-0 inset-x-0 p-4 flex items-center gap-3">
        <button id="prev-slide" onClick={() => go(-1)} disabled={i === 0} className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-30 transition"><ChevronLeft className="w-5 h-5" /></button>
        <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className={`h-full bg-gradient-to-r ${s.accent} transition-all duration-500`} style={{ width: `${((i + 1) / total) * 100}%` }} />
        </div>
        <span className="font-mono text-xs text-slate-400 w-14 text-center">{i + 1} / {total}</span>
        <button id="next-slide" onClick={() => go(1)} disabled={i === total - 1} className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-30 transition"><ChevronRight className="w-5 h-5" /></button>
        <button id="toggle-notes" onClick={() => setNotes((n) => !n)} title="Подсказки (N)" className={`p-2.5 rounded-xl border transition ${notes ? "bg-amber-500/20 border-amber-400/40" : "bg-white/5 border-white/10 hover:bg-white/10"}`}><StickyNote className="w-5 h-5" /></button>
        <button id="toggle-fullscreen" onClick={fullscreen} title="Полный экран (F)" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"><Maximize className="w-5 h-5" /></button>
      </div>

      <style>{`@keyframes slideIn{from{opacity:0;transform:translateY(24px) scale(.98)}to{opacity:1;transform:none}}`}</style>
    </main>
  );
}
