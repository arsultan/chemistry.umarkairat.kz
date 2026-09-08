// Built-in Chemistry Intelligence Engine & Comprehensive Knowledge Base for Chemistry Lab AI
import { Language, ElementData } from "@/types/chemistry";
import { ELEMENTS_DATA, ELEMENTS_BY_SYMBOL, ELEMENTS_BY_NUMBER } from "./elements";
import { MOLECULES_DATA } from "./molecules";

export interface AiActionPayload {
  type: "load_molecule" | "open_element" | "test_tube" | "switch_tab";
  id?: string;
  formula?: string;
  atoms?: Record<string, number>;
  symbol?: string;
  elementNumber?: number;
  cation?: string;
  anion?: string;
  tab?: "table" | "lab" | "solubility" | "classification" | "journal" | "quests";
  label: string;
}

export interface AiMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
  actions?: AiActionPayload[];
  isStreaming?: boolean;
}

export interface ChemistryContext {
  currentTab: string;
  chamberAtoms: Record<string, number>;
  discoveredCount: number;
  totalMolecules: number;
  language: Language;
  selectedElement?: string | null;
}

// Extract embedded action payloads from AI response text
export function parseActionsFromContent(text: string): { cleanContent: string; actions: AiActionPayload[] } {
  const actions: AiActionPayload[] = [];
  const actionRegex = /```json:action\s*([\s\S]*?)\s*```/g;
  
  let cleanContent = text.replace(actionRegex, (_, jsonStr) => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && parsed.type) {
        actions.push(parsed);
      }
    } catch {
      // ignore parse error
    }
    return "";
  }).trim();

  return { cleanContent, actions };
}

// Generate an expert response using offline intelligence if API is unavailable
export function generateOfflineResponse(
  query: string,
  context: ChemistryContext
): { content: string; actions: AiActionPayload[] } {
  const q = query.toLowerCase().trim();
  const lang = context.language || "ru";

  // -------------------------------------------------------------
  // 1. Grade-Specific School Chemistry Curricula (10 класс, 11 класс, 8-9 класс)
  // -------------------------------------------------------------
  if (q.includes("10 класс") || q.includes("10-класс") || q.includes("10-сынып") || q.includes("10 сынып") || q.includes("десятом классе") || q.includes("10th grade") || (q.includes("10") && q.includes("класс"))) {
    let answer = "";
    if (lang === "kk") {
      answer = `### 📚 **10-сынып Химия бағдарламасының негізгі тақырыптары (Органикалық химия):**\n\n` +
        `10-сыныпта химияның ең қызықты бөлімі — **Органикалық химия** жан-жақты оқытылады:\n\n` +
        `1. **Органикалық қосылыстардың құрылыс теориясы**:\n` +
        `   • А.М. Бутлеров теориясы, көміртектің $sp^3, sp^2, sp$ гибридизациясы.\n` +
        `   • Изомерия түрлері (құрылымдық, геометриялық/цис-транс, оптикалық).\n\n` +
        `2. **Көмірсутектер (Hydrocarbons)**:\n` +
        `   • **Алкандар** (қаныққан): Метан $\\text{CH}_4$, этан, жану және орынбасу реакциялары.\n` +
        `   • **Алкендер** (қос байланыс $\\text{C}=\\text{C}$): Этилен $\\text{C}_2\\text{H}_4$, Марковников ережесі, полимерлену.\n` +
        `   • **Алкиндер** (үш байланыс $\\text{C}\\equiv\\text{C}$): Ацетилен $\\text{C}_2\\text{H}_2$, Кучеров реакциясы.\n` +
        `   • **Арендер** (ароматты): Бензол $\\text{C}_6\\text{H}_6$, толуол, бензол сақинасының ерекшелігі.\n\n` +
        `3. **Оттекті органикалық қосылыстар**:\n` +
        `   • **Спирттер мен фенолдар**: Метанол, этанол $\\text{C}_2\\text{H}_5\\text{OH}$, глицерин.\n` +
        `   • **Альдегидтер мен кетондар**: Формальдегид, сірке альдегиді («күміс айна» реакциясы).\n` +
        `   • **Карбон қышқылдары**: Сірке қышқылы $\\text{CH}_3\\text{COOH}$, май қышқылдары.\n` +
        `   • **Күрделі эфирлер және майлар**: Этерификация реакциясы, сабындану.\n\n` +
        `4. **Биоорганикалық қосылыстар және полимерлер**:\n` +
        `   • **Көмірсулар**: Глюкоза $\\text{C}_6\\text{H}_{12}\\text{O}_6$, сахароза, крахмал, целлюлоза.\n` +
        `   • **Аминдер және аминқышқылдары**: Анилин, ақуыздар (белоктар), пептидтік байланыс.\n` +
        `   • **Жоғары молекулалық қосылыстар**: Полиэтилен, каучук, синтетикалық талшықтар.\n\n` +
        `💡 *Қайсыбір тақырып немесе реакция бойынша толығырақ сұрағыңыз келе ме?*`;
    } else if (lang === "en") {
      answer = `### 📚 **10th Grade Chemistry Curriculum (Organic Chemistry Focus):**\n\n` +
        `In 10th grade, students explore the fascinating realm of **Organic Chemistry & Carbon Compounds**:\n\n` +
        `1. **Structural Theory & Bonding**:\n` +
        `   • Butlerov's structural theory, carbon hybridization ($sp^3, sp^2, sp$).\n` +
        `   • Isomerism: structural (chain, positional, functional) and stereoisomerism (cis/trans).\n\n` +
        `2. **Hydrocarbons**:\n` +
        `   • **Alkanes** (saturated): $\\text{CH}_4$, free-radical halogenation, cracking.\n` +
        `   • **Alkenes** (double bond): Ethene, Markovnikov's addition, polymerization.\n` +
        `   • **Alkynes** (triple bond): Ethyne (acetylene), acidity of terminal alkynes.\n` +
        `   • **Arenes** (aromatics): Benzene $\\text{C}_6\\text{H}_6$, resonance stabilization, electrophilic substitution.\n\n` +
        `3. **Oxygen-Containing Functional Groups**:\n` +
        `   • **Alcohols & Phenols**: Ethanol $\\text{C}_2\\text{H}_5\\text{OH}$, hydrogen bonding, acidity.\n` +
        `   • **Aldehydes & Ketones**: Carbonyl group, Tollens' silver mirror test, Fehling's test.\n` +
        `   • **Carboxylic Acids & Esters**: Acetic acid, esterification, saponification.\n\n` +
        `4. **Biochemistry & Polymers**:\n` +
        `   • **Carbohydrates**: Glucose $\\text{C}_6\\text{H}_{12}\\text{O}_6$, sucrose, starch.\n` +
        `   • **Amines & Amino Acids**: Peptide bonds, protein structures.\n` +
        `   • **Synthetic Polymers**: Plastics, elastomers, polyamides.\n\n` +
        `💡 *Would you like an in-depth breakdown of any specific reaction or mechanism?*`;
    } else {
      answer = `### 📚 **Программа химии за 10 класс (Полный курс Органической химии):**\n\n` +
        `В 10 классе изучается фундаментальный раздел — **Органическая химия (химия соединений углерода)**:\n\n` +
        `1. **Теория строения и химическая связь**:\n` +
        `   • Теория химического строения А.М. Бутлерова.\n` +
        `   • Типы гибридизации атома углерода: $sp^3$ (алканы, тетраэдр $109.5^\\circ$), $sp^2$ (алкены, плоскость $120^\\circ$), $sp$ (алкины, линейная $180^\\circ$).\n` +
        `   • Изомерия: структурная (углеродного скелета, положения связи/группы, межклассовая) и пространственная (цис-/транс-).\n\n` +
        `2. **Углеводороды**:\n` +
        `   • **Алканы** ($C_n H_{2n+2}$): Метан $\\text{CH}_4$, гомологи, реакции радикального замещения ($S_R$), горение.\n` +
        `   • **Алкены** ($C_n H_{2n}$): Этилен $\\text{C}_2\\text{H}_4$, правило Марковникова, качественные реакции (обесцвечивание бромной воды $\\text{Br}_2$ и $\\text{KMnO}_4$).\n` +
        `   • **Алкадиены и Каучуки**: Дивинил, изопрен, вулканизация резины.\n` +
        `   • **Алкины** ($C_n H_{2n-2}$): Ацетилен $\\text{C}_2\\text{H}_2$, реакция Кучерова (гидратация до альдегида).\n` +
        `   • **Арены (Ароматические углеводороды)**: Бензол $\\text{C}_6\\text{H}_6$, ароматический секстет электронов, нитрование и галогенирование.\n\n` +
        `3. **Кислородсодержащие органические вещества**:\n` +
        `   • **Спирты и Фенолы**: Метанол, этанол $\\text{C}_2\\text{H}_5\\text{OH}$, многоатомные спирты (глицерин), фенол $\\text{C}_6\\text{H}_5\\text{OH}$.\n` +
        `   • **Альдегиды и Кетоны**: Формальдегид, ацетальдегид, реакция «серебряного зеркала».\n` +
        `   • **Карбоновые кислоты**: Уксусная $\\text{CH}_3\\text{COOH}$, муравьиная, бензойная, высшие жирные кислоты (стеариновая, олеиновая).\n` +
        `   • **Сложные эфиры и Жиры**: Реакция этерификации, гидролиз жиров, производство мыла.\n\n` +
        `4. **Углеводы, Азотсодержащие соединения и Полимеры**:\n` +
        `   • **Углеводы**: Моносахариды (глюкоза, фруктоза), дисахариды (сахароза), полисахариды (крахмал, целлюлоза).\n` +
        `   • **Амины и Аминокислоты**: Анилин, амфотерность аминокислот, пептидная связь ($-\\text{CO}-\\text{NH}-$).\n` +
        `   • **Белки**: Первичная, вторичная, третичная и четвертичная структуры, денатурация.\n` +
        `   • **ВМС (Полимеры)**: Полиэтилен, полипропилен, капрон, нейлон.\n\n` +
        `💡 *Напишите любую тему, формулу или реакцию, и я подробно разберу её с механизмами!*`;
    }

    const action: AiActionPayload = {
      type: "load_molecule",
      id: "methane",
      formula: "CH4",
      atoms: { C: 1, H: 4 },
      label: lang === "kk" ? "🧪 Метанды (CH₄) зертханаға жүктеу" : lang === "en" ? "🧪 Load Methane (CH₄) to Lab" : "🧪 Загрузить метан CH₄ в Реактор"
    };

    return { content: answer, actions: [action] };
  }

  // 11 класс
  if (q.includes("11 класс") || q.includes("11-класс") || q.includes("11-сынып") || q.includes("11 сынып") || q.includes("11th grade")) {
    let answer = "";
    if (lang === "kk") {
      answer = `### 📚 **11-сынып Химия бағдарламасы (Жалпы химия және тереңдетілген курс):**\n\n` +
        `1. **Зат құрылысы және периодтық жүйе**: Кванттық сандар, электрондық конфигурациялар, кристалдық торлар түрлері.\n` +
        `2. **Химиялық термодинамика**: Энтальпия ($\\Delta H$), энтропия ($\\Delta S$), Гиббс энергиясы ($\\Delta G = \\Delta H - T\\Delta S$), Гесс заңы.\n` +
        `3. **Химиялық кинетика және тепе-теңдік**: Реакция жылдамдығы, әрекеттесуші массалар заңы, Ле Шателье принципі.\n` +
        `4. **Ерітінділер және электролиттік диссоциация**: Тұздар гидролизі, буферлік ерітінділер, pH ортасы ($pH = -\\lg[H^+]$).\n` +
        `5. **Электрохимия және электролиз**: Гальваникалық элементтер, балқымалар мен ерітінділер электролизі, Фарадей заңдары.\n` +
        `6. **Кешенді қосылыстар және сапалық талдау**: Координациялық сан, лигандалар, металдар мен бейметалдар қасиеттерін қорытындылау.`;
    } else {
      answer = `### 📚 **Программа химии за 11 класс (Курс Общей и Физической химии):**\n\n` +
        `1. **Строение атома и вещества**: Квантовые числа ($n, l, m_l, m_s$), принцип Паули, правило Хунда, типы кристаллических решеток (атомная, молекулярная, ионная, металлическая).\n` +
        `2. **Химическая термодинамика**: Закон Гесса, расчет энтальпии $\\Delta H$, энтропии $\\Delta S$ и свободной энергии Гиббса $\\Delta G = \\Delta H - T\\Delta S$.\n` +
        `3. **Химическая кинетика и равновесие**: Скорость реакции, энергия активации, константы равновесия $K_p, K_c$, принцип Ле Шателье.\n` +
        `4. **Растворы и Гидролиз солей**: Расчет водородного показателя $\\text{pH} = -\\lg[\\text{H}^+]$, гидролиз по катиону/аниону, буферные растворы.\n` +
        `5. **Электрохимия и Электролиз**: Стандартные электродные потенциалы, ряд напряжений металлов, уравнение Нернста, электролиз растворов и расплавов солей.\n` +
        `6. **Обобщение неорганической и органической химии, генетические цепочки, подготовка к экзаменам/ЕНТ/ЕГЭ/Олимпиадам.**`;
    }
    return { content: answer, actions: [] };
  }

  // 8-9 классы
  if (q.includes("8 класс") || q.includes("9 класс") || q.includes("8-сынып") || q.includes("9-сынып") || q.includes("8th grade") || q.includes("9th grade")) {
    let answer = "";
    if (lang === "kk") {
      answer = `### 📚 **8–9 сынып Химия бағдарламасы (Бейорганикалық химия негіздері):**\n\n` +
        `• **8-сынып**: Зат мөлшері ($n = m/M$), молярлық масса, валенттілік, химиялық байланыс түрлері, бейорганикалық қосылыстардың негізгі кластары (оксидтер, негіздер, қышқылдар, тұздар), оттек және сутек.\n` +
        `• **9-сынып**: Электролиттік диссоциация, ион алмасу реакциялары (ИАР), Тотығу-тотықсыздану реакциялары (ТТР), Периодтық заң, бейметалдар (галогендер, оттек, күкірт, азот, көміртек) және металдар химиясы (сілтілік, кальций, алюминий, темір).`;
    } else {
      answer = `### 📚 **Программа химии за 8–9 классы (Неорганическая химия):**\n\n` +
        `• **8 класс**: Первоначальные химические понятия, закон сохранения массы, количество вещества ($n = m/M = V/V_m$), молярная масса, валентность, 4 класса неорганических веществ (оксиды, кислоты, основания, соли), периодический закон Менделеева.\n` +
        `• **9 класс**: Теория электролитической диссоциации (ТЭД), реакции ионного обмена (РИО), Окислительно-восстановительные реакции (ОВР), химия неметаллов (галогены, кислород, сера, азот, фосфор, углерод, кремний) и металлов (щелочные металлы, магний, кальций, алюминий, железо, сплавы).`;
    }
    return { content: answer, actions: [] };
  }

  // -------------------------------------------------------------
  // 2. Organic Chemistry Questions (Алканы, Спирты, Кислоты, Бензол, Глюкоза)
  // -------------------------------------------------------------
  if (q.includes("алкан") || q.includes("метан") || q.includes("этан") || q.includes("пропан") || q.includes("бутан")) {
    const action: AiActionPayload = {
      type: "load_molecule",
      id: "methane",
      formula: "CH4",
      atoms: { C: 1, H: 4 },
      label: "🧪 Загрузить Метан (CH₄) в Реактор"
    };
    return {
      content: `### ⛽ **Алканы (Предельные / Насыщенные углеводороды)**\n\n` +
        `**Общая формула:** $C_n H_{2n+2}$\n` +
        `• **Гибридизация:** Все атомы углерода находятся в $sp^3$-гибридизации (валентный угол $109^\\circ 28'$).\n` +
        `• **Химическая связь:** Прочные одинарные $\\sigma$-связи $\\text{C}-\\text{C}$ и $\\text{C}-\\text{H}$.\n` +
        `• **Химические свойства:**\n` +
        `  1. *Горение:* $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O} + Q$\n` +
        `  2. *Радикальное галогенирование ($S_R$):* $\\text{CH}_4 + \\text{Cl}_2 \\xrightarrow{h\\nu} \\text{CH}_3\\text{Cl} + \\text{HCl}$\n` +
        `  3. *Дегидрирование:* $\\text{C}_2\\text{H}_6 \\xrightarrow{t, Ni} \\text{C}_2\\text{H}_4 + \\text{H}_2$\n\n` +
        `Простейший представитель — **Метан $\\text{CH}_4$** (болотный или природный газ).`,
      actions: [action]
    };
  }

  if (q.includes("спирт") || q.includes("этанол") || q.includes("метанол") || q.includes("глицерин") || q.includes("alcohol")) {
    const action: AiActionPayload = {
      type: "load_molecule",
      id: "ethanol",
      formula: "C2H5OH",
      atoms: { C: 2, H: 6, O: 1 },
      label: "🧪 Загрузить Этанол (C₂H₅OH) в Реактор"
    };
    return {
      content: `### 🍷 **Спирты (Алканолы)**\n\n` +
        `**Функциональная группа:** Гидроксильная группа $-\\text{OH}$, общая формула $C_n H_{2n+1}\\text{OH}$.\n\n` +
        `• **Водородная связь:** Из-за высокой электроотрицательности кислорода молекулы спиртов образуют межмолекулярные водородные связи, что объясняет их высокие температуры кипения и хорошую растворимость в воде.\n` +
        `• **Реакции:**\n` +
        `  1. Взаимодействие со щелочными металлами: $2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{Na} \\rightarrow 2\\text{C}_2\\text{H}_5\\text{ONa} + \\text{H}_2 \\uparrow$\n` +
        `  2. Окисление первичных спиртов: $\\text{R}-\\text{CH}_2\\text{OH} + [\\text{O}] \\rightarrow \\text{R}-\\text{CHO}$ (альдегид).\n` +
        `  3. Внутримолекулярная дегидратация: $\\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{t > 140^\\circ\\text{C}, \\text{H}_2\\text{SO}_4} \\text{C}_2\\text{H}_4 + \\text{H}_2\\text{O}$.`,
      actions: [action]
    };
  }

  if (q.includes("глюкоз") || q.includes("сахар") || q.includes("углевод") || q.includes("крахмал") || q.includes("glucose")) {
    const action: AiActionPayload = {
      type: "load_molecule",
      id: "glucose",
      formula: "C6H12O6",
      atoms: { C: 6, H: 12, O: 6 },
      label: "🧪 Загрузить Глюкозу (C₆H₁₂O₆) в Реактор"
    };
    return {
      content: `### 🍬 **Глюкоза (Виноградный сахар, $C_6H_{12}O_6$)**\n\n` +
        `**Строение:** Альдегидоспирт (содержит 5 гидроксильных групп $-\\text{OH}$ и 1 альдегидную группу $-\\text{CH}=\\text{O}$).\n\n` +
        `• **Биологическая роль:** Главный источник энергии для живых организмов. В процессе клеточного дыхания окисляется:\n` +
        `  $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 2800\\text{ кДж}$\n` +
        `• **Качественные реакции:**\n` +
        `  1. Реакция на многоатомный спирт: со свежеосажденным $\\text{Cu(OH)}_2$ дает ярко-синий раствор глюконата меди.\n` +
        `  2. Реакция на альдегид: при нагревании с $\\text{Cu(OH)}_2$ выпадает кирпично-красный осадок $\\text{Cu}_2\\text{O} \\downarrow$.`,
      actions: [action]
    };
  }

  // -------------------------------------------------------------
  // 3. Check if user is asking to synthesize / find a specific molecule
  // -------------------------------------------------------------
  for (const mol of MOLECULES_DATA) {
    const nameRu = mol.name.ru.toLowerCase();
    const nameKk = mol.name.kk.toLowerCase();
    const nameEn = mol.name.en.toLowerCase();
    const formula = mol.formula.toLowerCase();
    const formulaAscii = mol.formulaAscii.toLowerCase();

    if (
      q.includes(nameRu) || 
      q.includes(nameKk) || 
      q.includes(nameEn) || 
      q.includes(formula) || 
      q.includes(formulaAscii) ||
      (q.includes("как получить") && q.includes(nameRu)) ||
      (q.includes("как сделать") && q.includes(nameRu)) ||
      (q.includes("синтез") && q.includes(nameRu))
    ) {
      const atomsDesc = Object.entries(mol.atoms).map(([sym, count]) => `${count}x ${sym}`).join(" + ");
      const action: AiActionPayload = {
        type: "load_molecule",
        id: mol.id,
        formula: mol.formula,
        atoms: mol.atoms,
        label: lang === "kk" ? `🧪 ${mol.formula} синтездеу` : lang === "en" ? `🧪 Synthesize ${mol.formula}` : `🧪 Загрузить ${mol.formula} в Реактор`
      };

      let answer = "";
      if (lang === "kk") {
        answer = `### 🧪 **${mol.name.kk} (${mol.formula})**\n\n` +
          `• **Ғылыми атауы:** ${mol.scientificName.kk}\n` +
          `• **Құрамы:** ${atomsDesc}\n` +
          `• **Молекулалық геометриясы:** ${mol.structureType}\n` +
          `• **Сипаттамасы:** ${mol.description.kk}\n\n` +
          `💡 **Қолданылуы:** ${mol.realWorldUse.kk}\n\n` +
          `Төмендегі батырманы басып, реакторға бірден жүктей аласыз:`;
      } else if (lang === "en") {
        answer = `### 🧪 **${mol.name.en} (${mol.formula})**\n\n` +
          `• **IUPAC Name:** ${mol.scientificName.en}\n` +
          `• **Stoichiometry:** ${atomsDesc}\n` +
          `• **Geometry:** ${mol.structureType}\n` +
          `• **Description:** ${mol.description.en}\n\n` +
          `💡 **Applications:** ${mol.realWorldUse.en}\n\n` +
          `Click the button below to load this molecule into the Quantum Reaction Chamber directly:`;
      } else {
        answer = `### 🧪 **${mol.name.ru} (${mol.formula})**\n\n` +
          `• **Систематическое название:** ${mol.scientificName.ru}\n` +
          `• **Стехиометрический состав:** ${atomsDesc}\n` +
          `• **Геометрия молекулы:** ${mol.structureType}\n` +
          `• **Научные свойства:** ${mol.description.ru}\n\n` +
          `💡 **Применение в реальном мире:** ${mol.realWorldUse.ru}\n\n` +
          `Нажмите кнопку ниже, чтобы автоматически загрузить эти атомы в Квантовый Реактор:`;
      }

      return { content: answer, actions: [action] };
    }
  }

  // -------------------------------------------------------------
  // 4. Check if user is asking about a chemical element (1-118)
  // -------------------------------------------------------------
  for (const el of ELEMENTS_DATA) {
    const sym = el.symbol.toLowerCase();
    const nameRu = el.name.ru.toLowerCase();
    const nameKk = el.name.kk.toLowerCase();
    const nameEn = el.name.en.toLowerCase();

    if (
      q === sym ||
      q.includes(`элемент ${nameRu}`) ||
      q.includes(`элемент ${nameKk}`) ||
      q.includes(`про ${nameRu}`) ||
      q.includes(`про ${nameKk}`) ||
      q.includes(`расскажи о ${nameRu}`) ||
      q.includes(`расскажи про ${nameRu}`) ||
      q.includes(`что такое ${nameRu}`) ||
      (q.includes(nameRu) && (q.includes("свойства") || q.includes("масса") || q.includes("валентность") || q.includes("атом")))
    ) {
      const action: AiActionPayload = {
        type: "open_element",
        symbol: el.symbol,
        elementNumber: el.number,
        label: lang === "kk" ? `⚛️ ${el.symbol} элементін ашу` : lang === "en" ? `⚛️ View ${el.symbol} in Table` : `⚛️ Открыть ${el.name.ru} (${el.symbol}) в Таблице`
      };

      let answer = "";
      if (lang === "kk") {
        answer = `### ⚛️ **${el.name.kk} (${el.symbol}) — №${el.number}**\n\n` +
          `• **Атомдық массасы:** ${el.atomicMass} г/моль\n` +
          `• **Топ / Период:** ${el.group}-топ, ${el.period}-период (${el.category})\n` +
          `• **Электрондық конфигурациясы:** \`${el.electronConfig}\`\n` +
          `• **Валенттілігі:** ${el.valency.join(", ")}\n` +
          `• **Агрегаттық күйі:** ${el.phase}\n\n` +
          `📖 **Сипаттама:** ${el.summary.kk}\n\n` +
          `💡 **Қызықты дерек:** ${el.funFact.kk}`;
      } else if (lang === "en") {
        answer = `### ⚛️ **${el.name.en} (${el.symbol}) — Element #${el.number}**\n\n` +
          `• **Atomic Mass:** ${el.atomicMass} u\n` +
          `• **Group / Period:** Group ${el.group}, Period ${el.period} (${el.category})\n` +
          `• **Electron Configuration:** \`${el.electronConfig}\`\n` +
          `• **Valency:** ${el.valency.join(", ")}\n` +
          `• **State of Matter:** ${el.phase}\n\n` +
          `📖 **Overview:** ${el.summary.en}\n\n` +
          `💡 **Did you know?** ${el.funFact.en}`;
      } else {
        answer = `### ⚛️ **${el.name.ru} (${el.symbol}) — Элемент №${el.number}**\n\n` +
          `• **Атомная масса:** ${el.atomicMass} а.е.м. (г/моль)\n` +
          `• **Положение:** ${el.group} группа, ${el.period} период (${el.category})\n` +
          `• **Электронная конфигурация:** \`${el.electronConfig}\`\n` +
          `• **Валентность:** ${el.valency.join(", ")}\n` +
          `• **Агрегатное состояние:** ${el.phase}\n\n` +
          `📖 **Научное описание:** ${el.summary.ru}\n\n` +
          `💡 **Интересный факт:** ${el.funFact.ru}`;
      }

      return { content: answer, actions: [action] };
    }
  }

  // -------------------------------------------------------------
  // 5. Calculations, Formulas and Stoichiometry
  // -------------------------------------------------------------
  if (q.includes("молярн") || q.includes("массовая доля") || q.includes("концентрация") || q.includes("задач") || q.includes("формул") || q.includes("расчет")) {
    let answer = "";
    if (lang === "kk") {
      answer = `### ⚖️ **Негізгі химиялық формулалар мен есептеулер:**\n\n` +
        `1. **Зат мөлшері ($n$ / $\\nu$ моль)**:\n` +
        `   • $n = \\frac{m}{M}$ *(мұндағы $m$ — масса г, $M$ — молярлық масса г/моль)*\n` +
        `   • $n = \\frac{V}{V_m}$ *(газдар үшін қ.ж. $V_m = 22.4\\text{ л/моль}$)*\n` +
        `   • $n = \\frac{N}{N_A}$ *(мұндағы $N_A = 6.022 \\times 10^{23}\\text{ моль}^{-1}$ — Авогадро тұрақтысы)*\n\n` +
        `2. **Еріген заттың массалық үлесі ($\\omega$)**:\n` +
        `   • $\\omega = \\frac{m_{\\text{зат}}}{m_{\\text{ерітінді}}} \\times 100\\%$\n\n` +
        `3. **Молярлық концентрация ($C_M$)**:\n` +
        `   • $C_M = \\frac{n}{V_{\\text{ерітінді}}} = \\frac{m}{M \\times V}$ (моль/л)`;
    } else {
      answer = `### ⚖️ **Главные формулы для решения задач по химии:**\n\n` +
        `1. **Количество вещества ($n$, моль)**:\n` +
        `   • $n = \\frac{m}{M}$ *(где $m$ — масса в граммах, $M$ — молярная масса в г/моль)*\n` +
        `   • $n = \\frac{V}{V_m}$ *(для газов при н.у. $V_m = 22.4\\text{ л/моль}$)*\n` +
        `   • $n = \\frac{N}{N_A}$ *(где $N_A = 6.022 \\times 10^{23}\\text{ моль}^{-1}$ — число Авогадро)*\n\n` +
        `2. **Массовая доля вещества в растворе ($\\omega$)**:\n` +
        `   • $\\omega = \\frac{m_{\\text{в-ва}}}{m_{\\text{р-ра}}} \\times 100\\%$, где $m_{\\text{р-ра}} = m_{\\text{в-ва}} + m_{\\text{воды}}$\n\n` +
        `3. **Молярная концентрация ($C_M$)**:\n` +
        `   • $C_M = \\frac{n}{V} = \\frac{m}{M \\cdot V}$ $(\\text{моль/л})$\n\n` +
        `4. **Выход продукта реакции ($\\\\eta$)**:\n` +
        `   • $\\eta = \\frac{m_{\\text{практ}}}{m_{\\text{теор}}} \\times 100\\%$`;
    }
    return { content: answer, actions: [] };
  }

  // -------------------------------------------------------------
  // 6. Precipitation & Solubility
  // -------------------------------------------------------------
  if (q.includes("осадок") || q.includes("тұнба") || q.includes("precipitate") || q.includes("растворим") || q.includes("ерігіштік") || q.includes("baso4") || q.includes("agcl") || q.includes("caco3")) {
    const action: AiActionPayload = {
      type: "test_tube",
      cation: "Ba2+",
      anion: "SO42-",
      label: lang === "kk" ? "🧪 Тұнба реакциясын өткізу (Ba²⁺ + SO₄²⁻)" : lang === "en" ? "🧪 Run Precipitation Reaction" : "🧪 Провести опыт в Виртуальной Пробирке"
    };

    let answer = "";
    if (lang === "kk") {
      answer = `### 🌧️ **Тұнба түзілуі және Сапалық реакциялар:**\n\n` +
        `• $\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\rightarrow \\text{BaSO}_4 \\downarrow$ *(Ақ ауыр кристалды тұнба)*\n` +
        `• $\\text{Ag}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl} \\downarrow$ *(Ақ сүзбелі тұнба)*\n` +
        `• $\\text{Cu}^{2+} + 2\\text{OH}^- \\rightarrow \\text{Cu(OH)}_2 \\downarrow$ *(Көк түсті тұнба)*\n` +
        `• $\\text{Fe}^{3+} + 3\\text{OH}^- \\rightarrow \\text{Fe(OH)}_3 \\downarrow$ *(Қоңыр-қызыл тұнба)*\n\n` +
        `Төмендегі батырма арқылы Виртуалды Пробиркада тәжірибе жасап көріңіз:`;
    } else {
      answer = `### 🌧️ **Качественные реакции осаждения и Таблица растворимости:**\n\n` +
        `Осадок образуется, когда произведение концентраций ионов превышает произведение растворимости ($ПР$):\n\n` +
        `1. $\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\rightarrow \\text{BaSO}_4 \\downarrow$ *(Белый мелкокристаллический осадок, нерастворимый в кислотах)*\n` +
        `2. $\\text{Ag}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl} \\downarrow$ *(Белый творожистый осадок, темнеющий на свету)*\n` +
        `3. $\\text{Cu}^{2+} + 2\\text{OH}^- \\rightarrow \\text{Cu(OH)}_2 \\downarrow$ *(Ярко-голубой студенистый осадок)*\n` +
        `4. $\\text{Fe}^{3+} + 3\\text{OH}^- \\rightarrow \\text{Fe(OH)}_3 \\downarrow$ *(Бурый студенистый осадок)*\n\n` +
        `Нажмите кнопку ниже, чтобы провести эту реакцию в интерактивной пробирке:`;
    }
    return { content: answer, actions: [action] };
  }

  // -------------------------------------------------------------
  // 7. General Assistant / Fallback with smart recommendations
  // -------------------------------------------------------------
  let defaultAnswer = "";
  if (lang === "kk") {
    defaultAnswer = `### 🔬 **Chemistry Lab AI — Сіздің химиялық кеңесшіңіз!**\n\n` +
      `Сіздің сұрағыңыз: *«${query}»*\n\n` +
      `Мен химияның кез келген бағыты бойынша көмек бере аламын:\n` +
      `• **Органикалық және бейорганикалық химия** (10-11 сынып бағдарламалары, механизмдер)\n` +
      `• **Молекулалар мен реакциялар синтезі** (реакторға бір батырмамен жүктеу)\n` +
      `• **Есептер шығару және формулалар** ($n = m/M$, $\\omega$, $C_M$, ТТР теңестіру)\n` +
      `• **118 элементтің толық сипаттамасы**\n\n` +
      `💡 *Нақтырақ сұрақ қойыңыз (мысалы: «10-сынып тақырыптары», «H2SO4 қалай алуға болады», «Периодтық заң») немесе төмендегі батырмаларды таңдаңыз!*`;
  } else if (lang === "en") {
    defaultAnswer = `### 🔬 **Chemistry Lab AI — Academic Copilot**\n\n` +
      `Regarding your inquiry: *"${query}"*\n\n` +
      `I have master-level expertise across all fields of chemistry:\n` +
      `• **Curricula & Grades**: 8th–11th grade organic, inorganic, and physical chemistry.\n` +
      `• **Reaction Synthesis**: Direct 1-click loading into the Quantum Reactor.\n` +
      `• **Calculations**: Stoichiometry, redox balancing, equilibrium constants, molar mass.\n` +
      `• **118 Periodic Elements**: Electron configurations, orbitals, and properties.\n\n` +
      `💡 *Feel free to ask any specific formula, concept, or reaction mechanism!*`;
  } else {
    defaultAnswer = `### 🔬 **Chemistry Lab AI — Интеллектуальный научный наставник**\n\n` +
      `По вашему вопросу: *«${query}»*\n\n` +
      `Я готов разобрать любую тему школьной и университетской химии:\n` +
      `• **Школьная программа**: 7–11 классы (Органическая, Неорганическая, Общая химия).\n` +
      `• **Синтез веществ**: объяснение формул и моментальная загрузка атомов в Реактор.\n` +
      `• **Расчетные задачи**: расчет массовой доли $\\omega$, молярности $C_M$, выхода реакции $\\eta$, электронного баланса ОВР.\n` +
      `• **118 элементов Менделеева**: электронные конфигурации, валентности и радиусы.\n\n` +
      `💡 *Задайте вопрос по конкретной теме (например: «10 класс темы», «Как получить H2SO4», «Алканы», «Реакция горения») или выберите быстрый вопрос ниже!*`;
  }

  return { content: defaultAnswer, actions: [] };
}
