import json

with open("scripts/periodic_table.json", "r", encoding="utf-8") as f:
    pt_data = json.load(f)

elements = [e for e in pt_data["elements"] if e["number"] <= 118]

# Russian & Kazakh element names (1 to 118)
RU_NAMES = {
    1: "Водород", 2: "Гелий", 3: "Литий", 4: "Бериллий", 5: "Бор", 6: "Углерод",
    7: "Азот", 8: "Кислород", 9: "Фтор", 10: "Неон", 11: "Натрий", 12: "Магний",
    13: "Алюминий", 14: "Кремний", 15: "Фосфор", 16: "Сера", 17: "Хлор", 18: "Аргон",
    19: "Калий", 20: "Кальций", 21: "Скандий", 22: "Титан", 23: "Ванадий", 24: "Хром",
    25: "Марганец", 26: "Железо", 27: "Кобальт", 28: "Никель", 29: "Медь", 30: "Цинк",
    31: "Галлий", 32: "Германий", 33: "Мышьяк", 34: "Селен", 35: "Бром", 36: "Криптон",
    37: "Рубидий", 38: "Стронций", 39: "Иттрий", 40: "Цирконий", 41: "Ниобий", 42: "Молибден",
    43: "Технеций", 44: "Рутений", 45: "Родий", 46: "Палладий", 47: "Серебро", 48: "Кадмий",
    49: "Индий", 50: "Олово", 51: "Сурьма", 52: "Теллур", 53: "Иод", 54: "Ксенон",
    55: "Цезий", 56: "Барий", 57: "Лантан", 58: "Церий", 59: "Празеодим", 60: "Неодим",
    61: "Прометий", 62: "Самарий", 63: "Европий", 64: "Гадолиний", 65: "Тербий", 66: "Диспрозий",
    67: "Гольмий", 68: "Эрбий", 69: "Тулий", 70: "Иттербий", 71: "Лютеций", 72: "Гафний",
    73: "Тантал", 74: "Вольфрам", 75: "Рений", 76: "Осмий", 77: "Иридий", 78: "Платина",
    79: "Золото", 80: "Ртуть", 81: "Таллий", 82: "Свинец", 83: "Висмут", 84: "Полоний",
    85: "Астат", 86: "Радон", 87: "Франций", 88: "Радий", 89: "Актиний", 90: "Торий",
    91: "Протактиний", 92: "Уран", 93: "Нептуний", 94: "Плутоний", 95: "Америций", 96: "Кюрий",
    97: "Берклий", 98: "Калифорний", 99: "Эйнштейний", 100: "Фермий", 101: "Менделевий", 102: "Нобелий",
    103: "Лоуренсий", 104: "Резерфордий", 105: "Дубний", 106: "Сиборгий", 107: "Борий", 108: "Хассий",
    109: "Мейтнерий", 110: "Дармштадтий", 111: "Рентгений", 112: "Коперниций", 113: "Нихоний", 114: "Флеровий",
    115: "Московий", 116: "Ливерморий", 117: "Теннессин", 118: "Оганесон"
}

KK_NAMES = {
    1: "Сутегі", 2: "Гелий", 3: "Литий", 4: "Бериллий", 5: "Бор", 6: "Көміртегі",
    7: "Азот", 8: "Оттегі", 9: "Фтор", 10: "Неон", 11: "Натрий", 12: "Магний",
    13: "Алюминий", 14: "Кремний", 15: "Фосфор", 16: "Күкірт", 17: "Хлор", 18: "Аргон",
    19: "Калий", 20: "Кальций", 21: "Скандий", 22: "Титан", 23: "Ванадий", 24: "Хром",
    25: "Марганец", 26: "Темір", 27: "Кобальт", 28: "Никель", 29: "Мыс", 30: "Мырыш",
    31: "Галлий", 32: "Германий", 33: "Күшән", 34: "Селен", 35: "Бром", 36: "Криптон",
    37: "Рубидий", 38: "Стронций", 39: "Иттрий", 40: "Цирконий", 41: "Ниобий", 42: "Молибден",
    43: "Технеций", 44: "Рутений", 45: "Родий", 46: "Палладий", 47: "Күміс", 48: "Кадмий",
    49: "Индий", 50: "Қалайы", 51: "Сүрме", 52: "Теллур", 53: "Иод", 54: "Ксенон",
    55: "Цезий", 56: "Барий", 57: "Лантан", 58: "Церий", 59: "Празеодим", 60: "Неодим",
    61: "Прометий", 62: "Самарий", 63: "Европий", 64: "Гадолиний", 65: "Тербий", 66: "Диспрозий",
    67: "Гольмий", 68: "Эрбий", 69: "Тулий", 70: "Иттербий", 71: "Лютеций", 72: "Гафний",
    73: "Тантал", 74: "Вольфрам", 75: "Рений", 76: "Осмий", 77: "Иридий", 78: "Платина",
    79: "Алтын", 80: "Сынап", 81: "Таллий", 82: "Қорғасын", 83: "Висмут", 84: "Полоний",
    85: "Астат", 86: "Радон", 87: "Франций", 88: "Радий", 89: "Актиний", 90: "Торий",
    91: "Протактиний", 92: "Уран", 93: "Нептуний", 94: "Плутоний", 95: "Америций", 96: "Кюрий",
    97: "Берклий", 98: "Калифорний", 99: "Эйнштейний", 100: "Фермий", 101: "Менделевий", 102: "Нобелий",
    103: "Лоуренсий", 104: "Резерфордий", 105: "Дубний", 106: "Сиборгий", 107: "Борий", 108: "Хассий",
    109: "Мейтнерий", 110: "Дармштадтий", 111: "Рентгений", 112: "Коперниций", 113: "Нихоний", 114: "Флеровий",
    115: "Московий", 116: "Ливерморий", 117: "Теннессин", 118: "Оганесон"
}

CATEGORY_MAP = {
    "diatomic nonmetal": "nonmetal",
    "polyatomic nonmetal": "nonmetal",
    "noble gas": "noble-gas",
    "alkali metal": "alkali-metal",
    "alkaline earth metal": "alkaline-earth",
    "metalloid": "metalloid",
    "post-transition metal": "post-transition",
    "transition metal": "transition-metal",
    "lanthanide": "lanthanide",
    "actinide": "actinide"
}

CATEGORY_COLORS = {
    'alkali-metal': '#ef4444',
    'alkaline-earth': '#f97316',
    'transition-metal': '#eab308',
    'post-transition': '#818cf8',
    'metalloid': '#10b981',
    'nonmetal': '#06b6d4',
    'halogen': '#14b8a6',
    'noble-gas': '#a855f7',
    'lanthanide': '#ec4899',
    'actinide': '#f43f5e'
}

def map_category(el):
    num = el["number"]
    if num in [9, 17, 35, 53, 85, 117]:
        return "halogen"
    raw_cat = el.get("category", "")
    for k, v in CATEGORY_MAP.items():
        if k in raw_cat:
            return v
    if num in range(57, 72):
        return "lanthanide"
    if num in range(89, 104):
        return "actinide"
    return "transition-metal"

def get_uses_and_facts(num, symbol, name):
    # Specialized facts for common school elements
    uses = {
        1: ("Rocket fuel, water synthesis, clean energy", "Ракетное топливо, синтез воды, чистая энергетика", "Зымыран отыны, су түзілуі, таза энергетика"),
        2: ("Party balloons, MRI cooling, deep-sea diving", "Воздушные шары, охлаждение томографов МРТ, дыхательные смеси", "Әуе шарлары, МРТ салқындату, сүңгуірлер қоспасы"),
        3: ("Smartphones & EV batteries, ceramics, mood medicine", "Аккумуляторы смартфонов и электрокаров, керамика", "Смартфондар мен көліктер батареялары, керамика"),
        4: ("James Webb space mirrors, aerospace alloys, X-rays", "Зеркала телескопа James Webb, сплавы для аэрокосмоса", "Джеймс Уэбб айналары, аэроғарыштық қорытпалар"),
        5: ("Pyrex heatproof glass, fiberglass, plant fertilizers", "Жаропрочное стекло Pyrex, удобрения, стекловолокно", "Ыстыққа төзімді Pyrex шынысы, тыңайтқыштар"),
        6: ("Steel production, carbon fiber, pencils, organic life", "Выплавка стали, углепластик, карандаши, основа жизни", "Болат қорыту, көмірпластик, қарындаш, өмір негізі"),
        7: ("Plant fertilizers, food packaging, liquid nitrogen", "Удобрения для полей, упаковка чипсов, жидкий азот", "Егіс тыңайтқыштары, тағамдарды сақтау, сұйық азот"),
        8: ("Respiration, steelmaking, water, rocket oxidizer", "Дыхание, металлургия, вода, окислитель для ракет", "Тыныс алу, металлургия, су, зымыран тотықтырғышы"),
        9: ("Toothpaste cavity protection, Teflon pans, refrigerants", "Зубная паста от кариеса, тефлоновые сковороды", "Тіс пасталары, жабыспайтын тефлон табалары"),
        10: ("Neon signs, lasers, high-voltage indicators", "Неоновые светящиеся вывески, лазеры, индикаторы", "Неонды жарнама шамдары, лазерлер, индикаторлар"),
        11: ("Table salt (NaCl), baking soda, street lighting", "Поваренная соль, пищевая сода, уличные фонари", "Ас тұзы (NaCl), ас содасы, көше шамдары"),
        12: ("Lightweight aircraft alloys, fireworks, chlorophyll", "Легкие сплавы для авиации, фейерверки, хлорофилл", "Ұшақ қорытпалары, отшашулар, өсімдік хлорофилі"),
        13: ("Foil, soda cans, airplane bodies, electrical lines", "Фольга, банки для напитков, самолёты, провода ЛЭП", "Фольга, сусын қалбырлары, ұшақтар, электр желілері"),
        14: ("Computer chips, solar cells, glass, silicones", "Компьютерные микропроцессоры, солнечные панели, стекло", "Микропроцессорлар, күн панельдері, шыны"),
        15: ("Matches, fertilizers, DNA backbone, bone structure", "Спички, удобрения, скелет ДНК, минерал костей и зубов", "Сіріңкелер, тыңайтқыштар, ДНҚ құрылымы, сүйек"),
        16: ("Sulfuric acid, tire vulcanization, gunpowder", "Серная кислота, вулканизация шин, порох", "Күкірт қышқылы, шина вулканизациясы, оқ-дәрі"),
        17: ("Water purification, disinfectant, PVC pipes, bleach", "Очистка питьевой воды, обеззараживание, трубы ПВХ", "Ауыз суды тазарту, бассейн тазалау, ПВХ құбырлар"),
        18: ("Light bulbs fill, welding shielding gas, double glazing", "Заполнение ламп накаливания, сварка, стеклопакеты", "Қыздыру шамдары, дәнекерлеу, шыныпакеттер"),
        19: ("Plant fertilizers, human heart & nerve signals, soaps", "Удобрения, работа сердца и нервные импульсы, мыло", "Тыңайтқыштар, жүрек қызметі, жүйке импульсі, сабын"),
        20: ("Bones, teeth, cement, chalk, limestone, marble", "Кости, зубы, цемент, мел, известняк, мрамор", "Сүйектер, тістер, цемент, бор, әктас, мәрмәр"),
        26: ("Steel structures, cars, bridges, blood hemoglobin", "Строительная сталь, мосты, автомобили, гемоглобин", "Құрылыс болаты, көпірлер, көліктер, қан гемоглобині"),
        29: ("Electrical wiring, computer heat sinks, plumbing, coins", "Электропроводка, радиаторы охлаждения ПК, трубы", "Электр сымдары, компьютер радиаторлары, құбырлар"),
        30: ("Galvanized rust protection, brass, sunscreen, vitamins", "Оцинковка металла, латунь, солнцезащитные кремы", "Мырыштау (тоттан қорғау), жез, күннен қорғайтын крем"),
        47: ("Solar panels, fine jewelry, electronics, mirrors", "Солнечные батареи, ювелирные изделия, зеркала", "Күн батареялары, зергерлік бұйымдар, айналар"),
        53: ("Wound disinfectant, thyroid hormone, polarization filters", "Антисептик для ран, йодированная соль, щитовидка", "Жара антисептигі, йодталған тұз, қалқанша безі"),
        79: ("Gold reserves, jewelry, computer microchip contacts", "Золотой резерв, ювелирные изделия, микрочипы", "Алтын қоры, зергерлік бұйымдар, микрочиптер"),
        80: ("Fluorescent tubes, barometers, switches", "Люминесцентные лампы, старинные термометры", "Люминесцентті үнемді шамдар, термометрлер"),
        92: ("Nuclear fuel (Kazakhstan #1 producer), atomic power", "Топливо для АЭС (Казахстан — №1 добытчик в мире!)", "Атом электр станцияларының отыны (Қазақстан №1)")
    }
    
    if num in uses:
        u_en, u_ru, u_kk = uses[num]
        return u_en, u_ru, u_kk
        
    return (
        f"Scientific research, high-tech industrial alloys and advanced materials ({name})",
        f"Научные исследования, высокотехнологичные сплавы и материалы ({name})",
        f"Ғылыми зерттеулер, жоғары технологиялық қорытпалар мен материалдар ({name})"
    )

output_elements = []

for el in elements:
    num = el["number"]
    sym = el["symbol"]
    en_name = el["name"]
    ru_name = RU_NAMES.get(num, en_name)
    kk_name = KK_NAMES.get(num, en_name)
    cat = map_category(el)
    color = CATEGORY_COLORS.get(cat, "#38bdf8")
    
    # Phase
    ph_raw = el.get("phase", "Solid").lower()
    if num >= 95 or ph_raw == "synthetic":
        phase = "synthetic" if num > 94 else ph_raw
    elif ph_raw in ["gas", "liquid", "solid"]:
        phase = ph_raw
    else:
        phase = "solid"
        
    mass = str(el.get("atomic_mass", ""))
    if isinstance(el.get("atomic_mass"), float):
        mass = f"{el['atomic_mass']:.3f}".rstrip('0').rstrip('.')
        
    ec = el.get("electron_configuration_semantic", el.get("electron_configuration", ""))
    
    u_en, u_ru, u_kk = get_uses_and_facts(num, sym, en_name)
    
    fact_en = el.get("summary", "")[:160] + "..." if len(el.get("summary", "")) > 160 else el.get("summary", "")
    fact_ru = f"Элемент с атомным номером {num}. Применяется в современных технологиях и науке."
    fact_kk = f"Атомдық нөмірі {num} болатын химиялық элемент. Заманауи ғылым мен техникада қолданылады."
    
    item = {
        "number": num,
        "symbol": sym,
        "name": { "en": en_name, "ru": ru_name, "kk": kk_name },
        "atomicMass": mass,
        "category": cat,
        "period": el.get("period", 1),
        "group": el.get("group", 1),
        "phase": phase,
        "valency": [1], # default valency
        "electronConfig": ec,
        "summary": {
            "en": f"{en_name} ({sym}) is element #{num}, a {cat.replace('-', ' ')} in period {el.get('period', 1)}.",
            "ru": f"{ru_name} ({sym}) — элемент №{num}, относится к категории: {cat}.",
            "kk": f"{kk_name} ({sym}) — №{num} элемент, санаты: {cat}."
        },
        "funFact": {
            "en": fact_en,
            "ru": fact_ru,
            "kk": fact_kk
        },
        "everydayUse": {
            "en": u_en,
            "ru": u_ru,
            "kk": u_kk
        },
        "color": color
    }
    output_elements.append(item)

print(f"Generated {len(output_elements)} elements successfully!")

with open("src/data/elements.ts", "w", encoding="utf-8") as f:
    f.write('import { ElementData } from "@/types/chemistry";\n\n')
    f.write('export const ELEMENTS_DATA: ElementData[] = ' + json.dumps(output_elements, ensure_ascii=False, indent=2) + ';\n\n')
    f.write('export const ELEMENTS_BY_SYMBOL = new Map<string, ElementData>(\n')
    f.write('  ELEMENTS_DATA.map(el => [el.symbol, el])\n')
    f.write(');\n\n')
    f.write('export const ELEMENTS_BY_NUMBER = new Map<number, ElementData>(\n')
    f.write('  ELEMENTS_DATA.map(el => [el.number, el])\n')
    f.write(');\n')

print("Saved src/data/elements.ts!")
