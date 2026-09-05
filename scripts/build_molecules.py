import json

MOLECULES_RAW = [
    {
        "id": "water",
        "formula": "H₂O",
        "formulaAscii": "H2O",
        "atoms": { "H": 2, "O": 1 },
        "name": { "en": "Water", "ru": "Вода", "kk": "Су" },
        "scientificName": { "en": "Dihydrogen Monoxide", "ru": "Оксид водорода", "kk": "Дигидроген монооксиді" },
        "category": "essential",
        "hazard": "vital",
        "state": "liquid",
        "structureType": "bent",
        "glowColor": "#00d2ff",
        "description": {
            "en": "The universal solvent and foundation of all known biological life on Earth. Two hydrogen atoms bond to one oxygen atom at a 104.5° angle, creating strong hydrogen bonds.",
            "ru": "Универсальный растворитель и основа всей жизни на Земле. Два атома водорода соединены с кислородом под углом 104.5°, образуя уникальные водородные связи.",
            "kk": "Әмбебап еріткіш және Жердегі бүкіл тіршіліктің тірегі. Екі сутегі атомы бір оттегі атомымен 104.5° бұрыш жасай байланысып, ерекше сутектік байланыстар құрайды."
        },
        "realWorldUse": {
            "en": "Drinking, agriculture, oceans, human bodies (60% water), industry, weather systems",
            "ru": "Питьевая вода, сельское хозяйство, океаны, тело человека (на 60% состоит из воды), гидроэнергетика",
            "kk": "Ауыз су, ауыл шаруашылығы, мұхиттар, адам ағзасы (60% судан тұрады), гидроэнергетика"
        },
        "funFact": {
            "en": "Water is one of the only substances that expands when freezing, which is why ice floats and fish survive winter lakes!",
            "ru": "Вода — одно из редчайших веществ, которое расширяется при замерзании, поэтому лед плавает и спасает рыб зимой!",
            "kk": "Су қатқан кезде кеңейетін санаулы заттардың бірі, сондықтан мұз су бетінде қалқып, қыста балықтарды аман сақтайды!"
        }
    },
    {
        "id": "table-salt",
        "formula": "NaCl",
        "formulaAscii": "NaCl",
        "atoms": { "Na": 1, "Cl": 1 },
        "name": { "en": "Table Salt", "ru": "Поваренная соль", "kk": "Ас тұзы" },
        "scientificName": { "en": "Sodium Chloride", "ru": "Хлорид натрия", "kk": "Натрий хлориді" },
        "category": "household",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#fbbf24",
        "description": {
            "en": "A classic ionic crystal lattice compound formed when explosive sodium metal transfers an electron to poisonous chlorine gas.",
            "ru": "Классический пример ионной кристаллической решетки: взрывной металл натрий отдает электрон ядовитому газу хлору.",
            "kk": "Иондық кристалдық тордың классикалық үлгісі: жарылғыш натрий металы улы хлор газына электронын беріп, қауіпсіз дәмді ас тұзын түзеді."
        },
        "realWorldUse": {
            "en": "Food seasoning, meat preservation, winter road de-icing, electrolyte balance",
            "ru": "Кулинарная приправа, консервация продуктов, посыпание дорог от гололеда зимой, физраствор",
            "kk": "Ас дәмдеуіш, тағамдарды тұздап сақтау, қыста жолдардың көктайғағын еріту, физиологиялық ерітінді"
        },
        "funFact": {
            "en": "In ancient Roman times, soldiers were sometimes paid in salt, which is the origin of the English word 'salary'!",
            "ru": "В древнем Риме легионерам иногда платили солью, откуда произошло английское слово 'salary' (зарплата)!",
            "kk": "Ежелгі Римде жауынгерлерге жалақы орнына тұз берілген, ағылшынның 'salary' (жалақы) сөзі осыдан шыққан!"
        }
    },
    {
        "id": "carbon-dioxide",
        "formula": "CO₂",
        "formulaAscii": "CO2",
        "atoms": { "C": 1, "O": 2 },
        "name": { "en": "Carbon Dioxide", "ru": "Углекислый газ", "kk": "Көмірқышқыл газы" },
        "scientificName": { "en": "Carbon Dioxide", "ru": "Диоксид углерода", "kk": "Көміртек диоксиді" },
        "category": "gas",
        "hazard": "caution",
        "state": "gas",
        "structureType": "linear",
        "glowColor": "#38bdf8",
        "description": {
            "en": "A linear molecule where carbon shares double covalent bonds with two oxygen atoms. Plants inhale it for photosynthesis and humans exhale it with every breath.",
            "ru": "Линейная молекула с двойными ковалентными связями. Растения поглощают ее при фотосинтезе, а люди выдыхают каждую секунду.",
            "kk": "Сызықтық құрылысты молекула. Өсімдіктер оны фотосинтез үшін сіңіреді, ал адамдар әрбір тыныс шығарғанда сыртқа шығарады."
        },
        "realWorldUse": {
            "en": "Soda carbonation bubbles, fire extinguishers, plant greenhouses, solid dry ice cooling",
            "ru": "Газировка и лимонады, углекислотные огнетушители, сухой лед, теплицы для растений",
            "kk": "Газдалған сусындар, өрт сөндіргіштер, құрғақ мұзбен салқындату, жылыжайлар"
        },
        "funFact": {
            "en": "Frozen carbon dioxide is called 'Dry Ice' because it sublimates straight into gas at -78.5°C without ever getting wet!",
            "ru": "Твердый CO₂ называют 'сухим льдом', потому что он при -78.5 °C сразу испаряется в газ, не оставляя влаги!",
            "kk": "Қатты күйдегі CO₂ 'құрғақ мұз' деп аталады, өйткені ол сұйыққа айналмай, бірден -78.5 °C-та буға айналады!"
        }
    },
    {
        "id": "methane",
        "formula": "CH₄",
        "formulaAscii": "CH4",
        "atoms": { "C": 1, "H": 4 },
        "name": { "en": "Methane", "ru": "Метан", "kk": "Метан" },
        "scientificName": { "en": "Methane", "ru": "Метан (болотный газ)", "kk": "Метан (батпақ газы)" },
        "category": "fuel",
        "hazard": "danger",
        "state": "gas",
        "structureType": "tetrahedral",
        "glowColor": "#f97316",
        "description": {
            "en": "The simplest hydrocarbon alkane with a tetrahedral geometry. The main constituent of natural gas fuel used in homes and power plants.",
            "ru": "Простейший углеводород с тетраэдрической структурой. Основной компонент природного газа для отопления и плит.",
            "kk": "Тетраэдрлік құрылымды ең қарапайым көмірсутек. Үйлер мен электр станцияларындағы табиғи газдың негізгі бөлігі."
        },
        "realWorldUse": {
            "en": "Home kitchen stoves, heating, CNG buses, electricity generation",
            "ru": "Газовые плиты на кухне, отопление домов, городские автобусы на метане, ТЭЦ",
            "kk": "Асүйлік газ плиталары, үйлерді жылыту, метанмен жүретін қалалық автобустар, ЖЭО"
        },
        "funFact": {
            "en": "Methane lakes exist on Saturn's moon Titan, where it actually rains liquid hydrocarbons instead of water!",
            "ru": "На спутнике Сатурна Титане плещутся целые моря и озера из жидкого метана, и идут метановые дожди!",
            "kk": "Сатурнның Титан серігінде сұйық метаннан тұратын бүтін көлдер бар және онда су орнына метан жаңбыры жауады!"
        }
    },
    {
        "id": "ammonia",
        "formula": "NH₃",
        "formulaAscii": "NH3",
        "atoms": { "N": 1, "H": 3 },
        "name": { "en": "Ammonia", "ru": "Аммиак", "kk": "Аммиак" },
        "scientificName": { "en": "Hydrogen Nitride", "ru": "Нитрид водорода", "kk": "Сутегі нитриді" },
        "category": "household",
        "hazard": "caution",
        "state": "gas",
        "structureType": "planar",
        "glowColor": "#a855f7",
        "description": {
            "en": "A pungent, sharp-smelling gas with trigonal pyramidal geometry. Essential building block for global food production via fertilizers.",
            "ru": "Газ с резким запахом нашатырного спирта. Основа производства азотных удобрений, которые кормят половину планеты.",
            "kk": "Өткір иісті газ. Жер шары халқының жартысын асырап отырған азот тыңайтқыштарының басты шикізаты."
        },
        "realWorldUse": {
            "en": "Smelling salts, window cleaning glass sprays, farming nitrogen fertilizers, industrial refrigeration",
            "ru": "Нашатырный спирт для приведения в чувство, спреи для мытья окон, удобрения для полей",
            "kk": "Естен танғанда иіскететін мүсәтір спирті, шыны тазалағыш құралдар, тыңайтқыштар"
        },
        "funFact": {
            "en": "The industrial synthesis of ammonia via the Haber-Bosch process feeds roughly half of Earth's human population today!",
            "ru": "Процесс Габера-Боша по синтезу аммиака сегодня позволяет прокормить почти половину населения Земли!",
            "kk": "Габер-Бош әдісімен алынатын аммиак бүгінде бүкіл Жер шары халқының шамамен жартысын азық-түлікпен қамтамасыз етуде!"
        }
    },
    {
        "id": "oxygen-gas",
        "formula": "O₂",
        "formulaAscii": "O2",
        "atoms": { "O": 2 },
        "name": { "en": "Oxygen Gas", "ru": "Кислород", "kk": "Оттегі газы" },
        "scientificName": { "en": "Dioxygen", "ru": "Дикислород", "kk": "Диоттегі" },
        "category": "essential",
        "hazard": "vital",
        "state": "gas",
        "structureType": "linear",
        "glowColor": "#38bdf8",
        "description": {
            "en": "Diatomic oxygen gas that makes up 21% of our atmosphere. Cells burn glucose with O₂ to generate energy.",
            "ru": "Двухатомный газ, составляющий 21% воздуха. Клетки сжигают глюкозу с помощью O₂ для получения энергии жизни.",
            "kk": "Ауамыздың 21%-ын құрайтын екі атомды оттегі газы. Жасушаларымыз осы оттегімен глюкозаны жағып энергия алады."
        },
        "realWorldUse": {
            "en": "Medical breathing oxygen masks, steel blast furnaces, scuba tanks, rocket engines",
            "ru": "Медицинские кислородные маски в больницах, выплавка стали, баллоны дайверов",
            "kk": "Ауруханалардағы оттегі маскалары, болат қорыту, акваланг баллондары"
        },
        "funFact": {
            "en": "About 2.4 billion years ago, photosynthetic cyanobacteria flooded Earth with O₂ in the 'Great Oxidation Event'.",
            "ru": "Около 2.4 миллиарда лет назад первые бактерии наполнили Землю кислородом в ходе 'кислородной катастрофы'.",
            "kk": "Шамамен 2.4 миллиард жыл бұрын алғашқы цианобактериялар фотосинтез арқылы Жерді оттегіге толтырған."
        }
    },
    {
        "id": "ozone",
        "formula": "O₃",
        "formulaAscii": "O3",
        "atoms": { "O": 3 },
        "name": { "en": "Ozone", "ru": "Озон", "kk": "Озон" },
        "scientificName": { "en": "Trioxygen", "ru": "Триоксиген", "kk": "Триоттегі" },
        "category": "gas",
        "hazard": "caution",
        "state": "gas",
        "structureType": "bent",
        "glowColor": "#06b6d4",
        "description": {
            "en": "A triatomic pale blue gas with an invigorating fresh thunderstorm smell. Forms the vital stratosphere shield against solar UV.",
            "ru": "Трёхатомный газ с характерным запахом свежести после грозы. Образует защитный озоновый слой планеты от радиации Солнца.",
            "kk": "Найзағайдан кейінгі таза самал иісті үш атомды газ. Жерді Күннің қауіпті ультракүлгін сәулелерінен қорғайтын қалқан."
        },
        "realWorldUse": {
            "en": "Earth ozone layer shielding, water sterilization, medical disinfection",
            "ru": "Озоновый слой Земли, озонирование питьевой воды, медицинская стерилизация",
            "kk": "Жердің озон қабаты, ауыз суды озондап тазарту, медициналық стерильдеу"
        },
        "funFact": {
            "en": "The clean, crisp scent in the air after a fierce thunderstorm is genuine ozone created by lightning bolts!",
            "ru": "Тот самый запах свежести в воздухе после сильной грозы — это настоящий озон, рожденный ударами молний!",
            "kk": "Күшті найзағайдан кейінгі ауадағы керемет тазалық иісі — найзағай жарқылынан түзілген нағыз озон газы!"
        }
    },
    {
        "id": "hydrogen-peroxide",
        "formula": "H₂O₂",
        "formulaAscii": "H2O2",
        "atoms": { "H": 2, "O": 2 },
        "name": { "en": "Hydrogen Peroxide", "ru": "Перекись водорода", "kk": "Сутегі асқын тотығы" },
        "scientificName": { "en": "Dihydrogen Dioxide", "ru": "Пероксид водорода", "kk": "Сутегі пероксиді" },
        "category": "household",
        "hazard": "caution",
        "state": "liquid",
        "structureType": "complex",
        "glowColor": "#e0f2fe",
        "description": {
            "en": "A pale blue, viscous liquid known for bubbling vigorously on wounds when catalase enzymes decompose it into water and oxygen.",
            "ru": "Бесцветная жидкость, которая бурно пенится и шипит на царапинах, разлагаясь ферментами на воду и кислород.",
            "kk": "Жарақатқа тигенде қызу көпіршіктеніп, ферменттер әсерінен су мен таза оттегіге ыдырайтын антисептикалық сұйықтық."
        },
        "realWorldUse": {
            "en": "Scrape disinfection, teeth whitening, hair bleach, eco-friendly textile bleaching",
            "ru": "Обработка царапин и ссадин, отбеливание зубов, осветление волос, отбеливание бумаги",
            "kk": "Сырылған жерлерді залалсыздандыру, тіс ағарту, шашты ақшылдандыру, қағаз ағарту"
        },
        "funFact": {
            "en": "Bombardier beetles spray boiling-hot hydrogen peroxide and hydroquinone from their abdomens to blast predators!",
            "ru": "Жук-бомбардир выстреливает во врагов кипящей струей перекиси водорода температурой 100 °C!",
            "kk": "Бомбардир қоңызы жауларына қарсы өз денесінен 100 °C қайнап тұрған сутегі асқын тотығын атады!"
        }
    },
    {
        "id": "rust",
        "formula": "Fe₂O₃",
        "formulaAscii": "Fe2O3",
        "atoms": { "Fe": 2, "O": 3 },
        "name": { "en": "Rust", "ru": "Ржавчина", "kk": "Тот (Темір оксиді)" },
        "scientificName": { "en": "Iron(III) Oxide", "ru": "Оксид железа(III)", "kk": "Темір(III) оксиді" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#ef4444",
        "description": {
            "en": "Reddish-brown flaky compound formed when iron reacts with oxygen in the presence of water or moisture. Causes the Red Planet Mars to look red!",
            "ru": "Красно-рыжий налет, образующийся при окислении железа влагой и воздухом. Именно он придает планете Марс ее красный цвет!",
            "kk": "Темір ылғал ауада оттегімен әрекеттескенде пайда болатын қызғылт-қоңыр зат. Қызыл планета Марсқа қызыл түс беретін де осы!"
        },
        "realWorldUse": {
            "en": "Brown ceramic pigments, magnetic recording tapes, thermite welding, iron ore (hematite)",
            "ru": "Красные минеральные краски (охра), магнитные ленты, термитная сварка рельсов, руда гематит",
            "kk": "Минералды қызыл бояулар (охра), магниттік таспалар, рельстерді термитпен дәнекерлеу, темір кені"
        },
        "funFact": {
            "en": "The entire planet Mars is red because its surface dust is rich in rusty iron oxide!",
            "ru": "Планета Марс имеет красный цвет именно потому, что ее поверхность покрыта ржавой железной пылью!",
            "kk": "Марс планетасының қып-қызыл болып көрінетін себебі — оның беткі топырағы тот басқан темір оксидінен тұрады!"
        }
    },
    {
        "id": "hydrochloric-acid",
        "formula": "HCl",
        "formulaAscii": "HCl",
        "atoms": { "H": 1, "Cl": 1 },
        "name": { "en": "Stomach Acid", "ru": "Соляная кислота", "kk": "Тұз қышқылы" },
        "scientificName": { "en": "Hydrogen Chloride (Hydrochloric Acid)", "ru": "Хлороводородная кислота", "kk": "Хлорсутек қышқылы" },
        "category": "acid-base",
        "hazard": "danger",
        "state": "liquid",
        "structureType": "linear",
        "glowColor": "#10b981",
        "description": {
            "en": "A powerful mineral acid found naturally inside the human stomach (pH ~1.5 to 2) to digest proteins and kill incoming pathogens.",
            "ru": "Сильная кислота, вырабатываемая желудком человека (pH ~1.5) для переваривания пищи и уничтожения бактерий.",
            "kk": "Адам асқазанында тағамды қорыту және микробтарды жою үшін табиғи түрде түзілетін күшті қышқыл (pH ~1.5)."
        },
        "realWorldUse": {
            "en": "Digestive stomach fluid, pickling steel rust removal, swimming pool pH balancer, leather tanning",
            "ru": "Желудочный сок, очистка металлов от окалины, регулирование кислотности бассейнов",
            "kk": "Асқазан сөлі, металдарды тазарту, бассейндегі судың қышқылдығын реттеу"
        },
        "funFact": {
            "en": "Your stomach produces a fresh protective layer of mucus every two weeks to keep from digesting itself!",
            "ru": "Желудок вырабатывает новый слой защитной слизи каждые две недели, иначе соляная кислота растворила бы его!",
            "kk": "Асқазанның ішкі қабырғасы осы қышқылдан өзін ерітіп жібермес үшін әр 2 апта сайын жаңа шырышты қабат түзіп отырады!"
        }
    },
    {
        "id": "baking-soda",
        "formula": "NaHCO₃",
        "formulaAscii": "NaHCO3",
        "atoms": { "Na": 1, "H": 1, "C": 1, "O": 3 },
        "name": { "en": "Baking Soda", "ru": "Пищевая сода", "kk": "Ас содасы" },
        "scientificName": { "en": "Sodium Bicarbonate", "ru": "Гидрокарбонат натрия", "kk": "Натрий гидрокарбонаты" },
        "category": "household",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#ec4899",
        "description": {
            "en": "A white crystalline leavening agent that reacts with acids (like vinegar or lemon juice) to release fizzy CO₂ bubbles that make cakes fluffy.",
            "ru": "Белый порошок, который при реакции с уксусом бурно шипит, выделяя пузырьки углекислого газа и делая пироги пышными.",
            "kk": "Ақ ұнтақ. Сірке суымен әрекеттескенде көмірқышқыл газының көпіршіктерін бөліп шығарып, бәліштерді үлпілдек етеді."
        },
        "realWorldUse": {
            "en": "Baking pastries, kitchen odor neutralizer, toothpaste stain removal, volcano school science experiments",
            "ru": "Выпечка пирогов, поглотитель запахов в холодильнике, чистка поверхностей, школьный вулкан",
            "kk": "Тәтті бәліштер пісіру, тоңазытқыштағы жағымсыз иістерді жою, мектептегі 'жасанды жанартау' тәжірибесі"
        },
        "funFact": {
            "en": "The classic school science fair 'foaming volcano' is just baking soda reacting with vinegar to erupt carbon dioxide foam!",
            "ru": "Знаменитый школьный опыт с 'извержением вулкана' — это просто сода, реагирующая с уксусом с выделением пены!",
            "kk": "Мектептегі атақты 'жанартау атқылау' тәжірибесі — ас содасы мен сірке суының әрекеттесуінен шығатын көбік!"
        }
    },
    {
        "id": "carbon-monoxide",
        "formula": "CO",
        "formulaAscii": "CO",
        "atoms": { "C": 1, "O": 1 },
        "name": { "en": "Carbon Monoxide", "ru": "Угарный газ", "kk": "Иіс газы" },
        "scientificName": { "en": "Carbon Monoxide", "ru": "Монооксид углерода", "kk": "Көміртек монооксиді" },
        "category": "gas",
        "hazard": "danger",
        "state": "gas",
        "structureType": "linear",
        "glowColor": "#f43f5e",
        "description": {
            "en": "A silent, colorless, odorless toxic gas produced by incomplete combustion of fuel. Binds to hemoglobin 200x tighter than oxygen.",
            "ru": "Коварный газ без цвета и запаха, образующийся при неполном сгорании топлива. Блокирует гемоглобин крови в 200 раз сильнее кислорода.",
            "kk": "Түссіз және иіссіз өте қауіпті улы газ. Отын толық жанбаған кезде бөлінеді және қандағы гемоглобинді оттектен 200 есе мықты байланыстырады."
        },
        "realWorldUse": {
            "en": "Industrial synthesis gas, smelting iron ore in blast furnaces",
            "ru": "Промышленный синтез-газ, восстановление железа из руды в доменных печах",
            "kk": "Өнеркәсіптік синтез-газ, домна пештерінде темір кенін балқыту"
        },
        "funFact": {
            "en": "Because CO has no smell or color, household carbon monoxide alarms are essential safety guards next to furnaces and fireplaces.",
            "ru": "Из-за отсутствия запаха датчики угарного газа спасают тысячи жизней в домах с печным отоплением.",
            "kk": "Иісі де, түсі де білінбейтіндіктен, пешпен жылытылатын үйлерде иіс газы дабылдатқышы аса қажет."
        }
    },
    {
        "id": "limestone",
        "formula": "CaCO₃",
        "formulaAscii": "CaCO3",
        "atoms": { "Ca": 1, "C": 1, "O": 3 },
        "name": { "en": "Chalk / Limestone", "ru": "Мел / Известняк", "kk": "Бор / Әктас" },
        "scientificName": { "en": "Calcium Carbonate", "ru": "Карбонат кальция", "kk": "Кальций карбонаты" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#e2e8f0",
        "description": {
            "en": "The chief constituent of seashells, eggshells, coral reefs, classroom chalkboard chalk, and grand marble statues.",
            "ru": "Основа ракушек моллюсков, яичной скорлупы, коралловых рифов, школьного мела и мраморных античных статуй.",
            "kk": "Теңіз ұлуларының бақалшақтарының, жұмыртқа қабығының, маржан рифтерінің, мектеп борлары мен мәрмәр мүсіндерінің негізі."
        },
        "realWorldUse": {
            "en": "Classroom chalk, building cement, marble countertops, calcium dietary tablets, antacid tablets",
            "ru": "Школьный мел для доски, строительный цемент, мраморные полы, таблетки кальция",
            "kk": "Сынып тақтасының ақ боры, құрылыс цементі, мәрмәр едендер, кальций таблеткалары"
        },
        "funFact": {
            "en": "The famous White Cliffs of Dover in England are composed almost entirely of microscopic prehistoric plankton seashells of CaCO₃!",
            "ru": "Знаменитые Белые скалы Дувра в Англии целиком состоят из триллионов древнейших ракушек планктона!",
            "kk": "Англиядағы әйгілі ақ құздар триллиондаған көне микроскопиялық планктон қабықшаларынан тұрады!"
        }
    },
    {
        "id": "glucose",
        "formula": "C₆H₁₂O₆",
        "formulaAscii": "C6H12O6",
        "atoms": { "C": 6, "H": 12, "O": 6 },
        "name": { "en": "Glucose (Sugar)", "ru": "Глюкоза (Сахар)", "kk": "Глюкоза (Қант)" },
        "scientificName": { "en": "D-Glucose", "ru": "D-Глюкоза (виноградный сахар)", "kk": "D-Глюкоза (жүзім қанты)" },
        "category": "essential",
        "hazard": "vital",
        "state": "solid",
        "structureType": "complex",
        "glowColor": "#facc15",
        "description": {
            "en": "The primary fuel molecule of biological life on Earth. Synthesized by green plants from sunlight, CO₂, and water via photosynthesis.",
            "ru": "Главное топливо живых клеток Земли. Создается растениями из солнечного света, CO₂ и воды в процессе фотосинтеза.",
            "kk": "Тірі жасушалардың басты жанармайы. Өсімдіктер фотосинтез арқылы күн сәулесінен, судан және CO₂-ден жасайды."
        },
        "realWorldUse": {
            "en": "Brain energy, sports nutrition gels, hospital IV drips, cellular metabolism",
            "ru": "Энергия для работы мозга, спортивные энергетические гели, капельницы в больницах",
            "kk": "Мидың жұмыс істеу энергиясы, спорттық энергетикалық гельдер, аурухана тамыр тамшылатқыштары"
        },
        "funFact": {
            "en": "Your brain weighs only 2% of your body, but consumes over 20% of all the glucose energy your body produces!",
            "ru": "Мозг весит всего 2% от массы тела, но съедает более 20% всей глюкозы в организме!",
            "kk": "Адам миы дене салмағының бар болғаны 2%-ын құрағанымен, бүкіл ағзадағы глюкозаның 20%-дан астамын тұтынады!"
        }
    },
    {
        "id": "quartz-sand",
        "formula": "SiO₂",
        "formulaAscii": "SiO2",
        "atoms": { "Si": 1, "O": 2 },
        "name": { "en": "Quartz / Sand", "ru": "Кварц / Песок", "kk": "Кварц / Құм" },
        "scientificName": { "en": "Silicon Dioxide (Silica)", "ru": "Диоксид кремния (кремнезём)", "kk": "Кремний диоксиді" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#94a3b8",
        "description": {
            "en": "The primary mineral found in beach sand, quartz crystals, and window glass. Forms an immense network covalent lattice of tetrahedral bonds.",
            "ru": "Основной минерал речного и морского песка, кристаллов горного хрусталя и оконного стекла.",
            "kk": "Жағажай құмының, тау хрусталінің және терезе шынысының негізгі минералы. Өте берік коваленттік тор түзеді."
        },
        "realWorldUse": {
            "en": "Window and bottle glass manufacturing, concrete, electronics quartz timing crystals, fiber optics",
            "ru": "Производство оконного стекла и бутылок, бетон, кварцевые резонаторы наручных часов",
            "kk": "Терезе шынылары мен бөтелкелер, бетон құрылысы, қол сағаттарының кварцты резонаторлары"
        },
        "funFact": {
            "en": "Melting ordinary beach sand at 1,700 °C and cooling it quickly creates transparent window glass!",
            "ru": "Если расплавить обычный песок при 1700 °C и быстро остудить, получится прозрачное оконное стекло!",
            "kk": "Кәдімгі жағажай құмын 1700 °C-та балқытып, тез суытса, мөлдір терезе шынысы пайда болады!"
        }
    },
    {
        "id": "vinegar",
        "formula": "C₂H₄O₂",
        "formulaAscii": "C2H4O2",
        "atoms": { "C": 2, "H": 4, "O": 2 },
        "name": { "en": "Vinegar (Acetic Acid)", "ru": "Уксусная кислота", "kk": "Сірке қышқылы (Уксус)" },
        "scientificName": { "en": "Ethanoic Acid", "ru": "Этановая кислота", "kk": "Этан қышқылы" },
        "category": "household",
        "hazard": "safe",
        "state": "liquid",
        "structureType": "planar",
        "glowColor": "#ca8a04",
        "description": {
            "en": "The sour, sharp-smelling compound giving vinegar its distinctive tang. Formed naturally when bacteria ferment ethanol alcohol.",
            "ru": "Органическая кислота, придающая уксусу его характерный кислый вкус и резкий запах.",
            "kk": "Сірке суына өзіне тән қышқыл дәм мен өткір иіс беретін органикалық қышқыл."
        },
        "realWorldUse": {
            "en": "Salad dressing, pickling pickles, eco-cleaning descaling kettles, laboratory chemical synthesis",
            "ru": "Заправка салатов, маринование огурцов, удаление накипи в чайниках, производство ацетатных волокон",
            "kk": "Салаттарға дәм беру, қияр тұздау, шайнектегі қақты тазалау, жібек маталар өндірісі"
        },
        "funFact": {
            "en": "Leftover wine turns into vinegar naturally because wild Acetobacter bacteria consume ethanol and turn it into acetic acid!",
            "ru": "Открытое вино превращается в уксус из-за бактерий, перерабатывающих алкоголь в уксусную кислоту!",
            "kk": "Ашық қалған жүзім шырыны ауадағы арнайы бактериялардың әсерінен сірке қышқылына айналады!"
        }
    },
    {
        "id": "ethanol",
        "formula": "C₂H₆O",
        "formulaAscii": "C2H6O",
        "atoms": { "C": 2, "H": 6, "O": 1 },
        "name": { "en": "Ethanol (Biofuel)", "ru": "Этанол (Биотопливо)", "kk": "Этанол (Биоотын)" },
        "scientificName": { "en": "Ethyl Alcohol", "ru": "Этиловый спирт", "kk": "Этил спирті" },
        "category": "fuel",
        "hazard": "caution",
        "state": "liquid",
        "structureType": "planar",
        "glowColor": "#f59e0b",
        "description": {
            "en": "A volatile, flammable clear liquid produced by yeast fermentation of sugars. Used widely as hand sanitizer and renewable biofuel.",
            "ru": "Летучая горючая жидкость, продукт дрожжевого брожения сахаров. Используется как антисептик и эко-биотопливо для авто.",
            "kk": "Қанттардың ашуынан түзілетін ұшқыш жанғыш сұйықтық. Қолға арналған антисептик және көліктерге экологиялық биоотын ретінде қолданылады."
        },
        "realWorldUse": {
            "en": "Pocket hand sanitizers, E85 flex-fuel cars, perfume solvent, pharmaceutical extraction",
            "ru": "Антисептики для рук, добавки к бензину (E85), растворитель духов, медицина",
            "kk": "Қолға арналған санитайзерлер, автокөлік жанармайына қоспалар, әтір еріткіші, медицина"
        },
        "funFact": {
            "en": "Astronomers discovered a gigantic cosmic cloud of alcohol in deep space spanning 463 billion kilometers!",
            "ru": "Астрономы обнаружили в созвездии Орла гигантское космическое облако этилового спирта диаметром в миллиарды километров!",
            "kk": "Астрономдар ғарыштан ұзындығы 463 миллиард шақырымға созылып жатқан алып спирт бұлтын тапқан!"
        }
    },
    {
        "id": "bleach",
        "formula": "NaClO",
        "formulaAscii": "NaClO",
        "atoms": { "Na": 1, "Cl": 1, "O": 1 },
        "name": { "en": "Bleach", "ru": "Отбеливатель (Белизна)", "kk": "Ағартқыш (Белизна)" },
        "scientificName": { "en": "Sodium Hypochlorite", "ru": "Гипохлорит натрия", "kk": "Натрий гипохлориті" },
        "category": "household",
        "hazard": "caution",
        "state": "liquid",
        "structureType": "linear",
        "glowColor": "#06b6d4",
        "description": {
            "en": "A powerful oxidizer and disinfectant. Destroys colored stain molecules and destroys microbial cell walls on contact.",
            "ru": "Мощный окислитель и дезинфектант. Разрушает цветные молекулы пятен и мгновенно уничтожает микробы.",
            "kk": "Күшті тотықтырғыш және дезинфекциялық зат. Матадағы дақтарды ағартады және бактерияларды бірден жояды."
        },
        "realWorldUse": {
            "en": "Laundry whitening, hospital sanitation, municipal drinking water treatment",
            "ru": "Отбеливание белья, дезинфекция больниц, обеззараживание водопроводной воды",
            "kk": "Киімдерді ағарту, ауруханаларды залалсыздандыру, ауыз суды тазарту"
        },
        "funFact": {
            "en": "Bleach works by breaking the chemical double bonds (chromophores) in dyes so they can no longer reflect visible color!",
            "ru": "Отбеливатель уничтожает пятна, разрывая химические связи красителей, из-за чего они перестают поглощать свет!",
            "kk": "Ағартқыш бояғыш заттардың ішкі байланыстарын үзіп тастайды, соның нәтижесінде олар түссізденіп ағарады!"
        }
    },
    {
        "id": "sulfuric-acid",
        "formula": "H₂SO₄",
        "formulaAscii": "H2SO4",
        "atoms": { "H": 2, "S": 1, "O": 4 },
        "name": { "en": "Sulfuric Acid", "ru": "Серная кислота", "kk": "Күкірт қышқылы" },
        "scientificName": { "en": "Sulfuric Acid", "ru": "Серная кислота", "kk": "Күкірт қышқылы" },
        "category": "acid-base",
        "hazard": "danger",
        "state": "liquid",
        "structureType": "tetrahedral",
        "glowColor": "#dc2626",
        "description": {
            "en": "The 'King of Chemicals'. The single most produced industrial chemical worldwide, used as an economic benchmark of national manufacturing.",
            "ru": "'Царица химии'. Самое производимое химическое вещество в мире, показатель промышленной мощи государства.",
            "kk": "'Химия патшасы'. Әлемдегі ең көп өндірілетін өнеркәсіптік химиялық зат, елдің өндірістік күшінің белгісі."
        },
        "realWorldUse": {
            "en": "Lead-acid car batteries, phosphate fertilizers, metal ore processing, synthetic detergents",
            "ru": "Автомобильные свинцовые аккумуляторы, фосфорные удобрения, выплавка металлов, стиральные порошки",
            "kk": "Автокөлік аккумуляторларының электролиті, тыңайтқыштар өндірісі, металл өңдеу, кір жуғыш ұнтақтар"
        },
        "funFact": {
            "en": "The thick yellow clouds obscuring the surface of Venus are composed of concentrated droplets of sulfuric acid!",
            "ru": "Плотные желтые облака, скрывающие поверхность планеты Венера, состоят из капель концентрированной серной кислоты!",
            "kk": "Шолпан (Венера) планетасының бетін жауып тұрған қалың сары бұлттар концентрлі күкірт қышқылынан тұрады!"
        }
    },
    {
        "id": "nitric-acid",
        "formula": "HNO₃",
        "formulaAscii": "HNO3",
        "atoms": { "H": 1, "N": 1, "O": 3 },
        "name": { "en": "Nitric Acid", "ru": "Азотная кислота", "kk": "Азот қышқылы" },
        "scientificName": { "en": "Nitric Acid", "ru": "Азотная кислота", "kk": "Азот қышқылы" },
        "category": "acid-base",
        "hazard": "danger",
        "state": "liquid",
        "structureType": "planar",
        "glowColor": "#ea580c",
        "description": {
            "en": "A highly corrosive fuming mineral acid. Combined with hydrochloric acid (1:3 ratio) it forms 'Aqua Regia' which dissolves solid gold!",
            "ru": "Едкая дымящая кислота. В смеси с соляной кислотой (1:3) образует 'Царскую водку', растворяющую даже чистое золото!",
            "kk": "Күйдіргіш сұйықтық. Тұз қышқылымен 1:3 қатынасында араласқанда таза алтынды да ерітетін атақты 'Патша арағын' түзеді!"
        },
        "realWorldUse": {
            "en": "Ammonium nitrate crop fertilizers, rocket propellant oxidizers, gold refining assaying",
            "ru": "Селитра для удобрений, окислитель ракетного топлива, аффинаж золота и серебра",
            "kk": "Ауыл шаруашылығы селитрасы, зымыран отынын тотықтырғыш, алтын мен күмісті тазарту"
        },
        "funFact": {
            "en": "During WWII, Hungarian chemist George de Hevesy dissolved Nobel Prize gold medals in aqua regia to hide them from invading Nazis!",
            "ru": "В войну венгерский ученый растворил золотые нобелевские медали в царской водке, спрятав золото прямо на полке лаборатории!",
            "kk": "Екінші дүниежүзілік соғыста ғалым Нобель алтын медальдарын патша арағына ерітіп, банкада жасырып аман алып қалған!"
        }
    },
    {
        "id": "quicklime",
        "formula": "CaO",
        "formulaAscii": "CaO",
        "atoms": { "Ca": 1, "O": 1 },
        "name": { "en": "Quicklime", "ru": "Негашёная известь", "kk": "Сөндірілмеген әк" },
        "scientificName": { "en": "Calcium Oxide", "ru": "Оксид кальция", "kk": "Кальций оксиді" },
        "category": "mineral",
        "hazard": "caution",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#fb923c",
        "description": {
            "en": "A caustic alkaline white solid formed by heating limestone. When mixed with water, it boils violently in a fierce exothermic reaction to make slaked lime.",
            "ru": "Едкое белое вещество. При добавлении воды бурно шипит и нагревается до кипения, превращаясь в гашеную известь.",
            "kk": "Ақ түсті қатты зат. Су құйған кезде өте көп жылу бөліп, қайнап сөндірілген әкке айналады."
        },
        "realWorldUse": {
            "en": "Steelmaking flux, cement mortar production, paper pulp manufacturing, self-heating food cans",
            "ru": "Производство стали, цементные растворы, саморазогревающиеся консервы для туристов",
            "kk": "Болат қорыту, құрылыс цементі, туристерге арналған өздігінен ыситын консервілер"
        },
        "funFact": {
            "en": "Historical 'Limelight' stage lights heated cylinders of quicklime with gas torches until they glowed brilliant incandescence, giving us the phrase 'in the limelight'!",
            "ru": "Старинные театральные прожекторы нагревали кусочки извести до яркого свечения — отсюда выражение 'быть в лучах славы' (in the limelight)!",
            "kk": "Көне театр шамдары әкті қыздырып жарық шығарған, ағылшынның 'in the limelight' (назар аударылған ортада болу) сөзі осыдан шыққан!"
        }
    },
    {
        "id": "copper-sulfate",
        "formula": "CuSO₄",
        "formulaAscii": "CuSO4",
        "atoms": { "Cu": 1, "S": 1, "O": 4 },
        "name": { "en": "Copper Sulfate (Blue Vitriol)", "ru": "Медный купорос", "kk": "Мыс купоросы" },
        "scientificName": { "en": "Copper(II) Sulfate", "ru": "Сульфат меди(II)", "kk": "Мыс(II) сульфаты" },
        "category": "mineral",
        "hazard": "caution",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#0284c7",
        "description": {
            "en": "Famous for growing gorgeous, deep sapphire-blue rhombic crystals. Used in schools worldwide as the favorite crystal growing experiment.",
            "ru": "Знаменит потрясающими сапфирово-синими кристаллами. Любимый реагент для выращивания кристаллов на уроках химии.",
            "kk": "Көз тартатын сапфирдей көк түсті керемет кристалдарымен танымал. Мектепте кристалл өсіру үшін ең көп қолданылатын зат."
        },
        "realWorldUse": {
            "en": "Bordeaux mixture vineyard fungicide, algae control in ponds, electroplating copper, school crystal growing",
            "ru": "Опрыскивание виноградников от грибка (бордоская смесь), защита бассейнов от водорослей, гальваника",
            "kk": "Жүзімдікті саңырауқұлақтан қорғау (бордо сұйықтығы), бассейнді балдырдан тазарту, гальваника"
        },
        "funFact": {
            "en": "Pure anhydrous copper sulfate is actually ghostly white, but immediately turns vibrant royal blue the instant a drop of water touches it!",
            "ru": "Безводный порошок сульфата меди абсолютно белый, но мгновенно становится ярко-синим от единственной капли воды!",
            "kk": "Сусыз таза мыс купоросы әппақ болады, бірақ оған бір тамшы су тисе-ақ, лезде көгілдір түске боялады!"
        }
    },
    {
        "id": "laughing-gas",
        "formula": "N₂O",
        "formulaAscii": "N2O",
        "atoms": { "N": 2, "O": 1 },
        "name": { "en": "Laughing Gas", "ru": "Веселящий газ", "kk": "Күлдіргіш газ" },
        "scientificName": { "en": "Nitrous Oxide", "ru": "Оксид диазота", "kk": "Диазот оксиді" },
        "category": "gas",
        "hazard": "caution",
        "state": "gas",
        "structureType": "linear",
        "glowColor": "#a855f7",
        "description": {
            "en": "A sweet-smelling, colorless gas known for producing euphoric and pain-relieving effects. Injected into race cars to boost engine horsepower dramatically.",
            "ru": "Сладковатый газ с обезболивающим эффектом. Также впрыскивается в двигатели гоночных болидов (NOS) для резкого ускорения.",
            "kk": "Тәтті иісті газ. Тіс емдеуде ауырсынуды басуға, сондай-ақ жарыс көліктерінің жылдамдығын (NOS) арттыруға қолданылады."
        },
        "realWorldUse": {
            "en": "Dental surgery mild sedation, whipped cream aerosol propellant, nitrous oxide racing boosters (NOS)",
            "ru": "Обезболивание в стоматологии, баллончики для взбитых сливок, впрыск закиси азота в двигатели гонок (NOS)",
            "kk": "Стоматологияда ауырсынуды басу, көпіртілген кілегей баллондары, спорттық көліктердің қуатын арттыру"
        },
        "funFact": {
            "en": "In the early 1800s, 'laughing gas parties' were popular upper-class British entertainment before doctors realized its medical value!",
            "ru": "В начале XIX века в Англии устраивали светские 'вечеринки смеха', прежде чем врачи поняли ценность газа для наркоза!",
            "kk": "XIX ғасырдың басында Англияда адамдар оны тек ойын-сауық кештерінде күлу үшін қолданған, кейін ғана медицинадағы пайдасы ашылды!"
        }
    },
    {
        "id": "hydrogen-sulfide",
        "formula": "H₂S",
        "formulaAscii": "H2S",
        "atoms": { "H": 2, "S": 1 },
        "name": { "en": "Rotten Egg Gas", "ru": "Сероводород", "kk": "Күкіртсутек" },
        "scientificName": { "en": "Hydrogen Sulfide", "ru": "Сероводород", "kk": "Күкіртсутек" },
        "category": "gas",
        "hazard": "danger",
        "state": "gas",
        "structureType": "bent",
        "glowColor": "#84cc16",
        "description": {
            "en": "A foul-smelling gas infamous for its putrid stench of decaying rotten eggs. Naturally emitted in volcanic gases and geothermal hot springs.",
            "ru": "Газ с отвратительным запахом тухлых яиц. Выделяется вулканами, горячими гейзерами и при гниении белков.",
            "kk": "Шіріген жұмыртқаның сасық иісі шығатын газ. Жанартау атқылағанда, ыстық гейзерлерде және ақуыз шірігенде бөлінеді."
        },
        "realWorldUse": {
            "en": "Industrial production of elemental sulfur, sulfuric acid feedstock, mineral spa therapy",
            "ru": "Получение чистой серы, производство серной кислоты, лечебные сероводородные ванны",
            "kk": "Таза күкірт алу, күкірт қышқылын өндіру, шипажайлық емдік минералды сулар"
        },
        "funFact": {
            "en": "Human noses can detect hydrogen sulfide at concentrations as tiny as 0.00047 parts per million!",
            "ru": "Нос человека способен уловить запах сероводорода в ничтожной концентрации — менее одной миллиардной доли!",
            "kk": "Адамның мұрны күкіртсутектің иісін ауадағы 0.00047 миллионнан бір бөліктей өте аз мөлшерде де сезе алады!"
        }
    },
    {
        "id": "silicon-carbide",
        "formula": "SiC",
        "formulaAscii": "SiC",
        "atoms": { "Si": 1, "C": 1 },
        "name": { "en": "Carborundum", "ru": "Карбид кремния (Карборунд)", "kk": "Кремний карбиді (Карборунд)" },
        "scientificName": { "en": "Silicon Carbide", "ru": "Карбид кремния", "kk": "Кремний карбиді" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#64748b",
        "description": {
            "en": "An ultra-hard synthetic ceramic material almost as hard as diamond (Mohs hardness 9.5). Used in bulletproof armor and high-power EV inverters.",
            "ru": "Сверхтвердая керамика, уступающая по твердости только алмазу (9.5 по шкале Мооса). Применяется в бронежилетах и чипах электрокаров.",
            "kk": "Қаттылығы бойынша алмасқа ғана жол беретін аса қатты керамикалық зат (Моос шкаласы бойынша 9.5). Бронежилеттер мен электромобильдерде қолданылады."
        },
        "realWorldUse": {
            "en": "Grinding wheels, high-voltage electric car inverters, military bulletproof ceramic plates",
            "ru": "Шлифовальные диски, силовая электроника электромобилей Tesla, бронепластины бронежилетов",
            "kk": "Қайрау дискілері, электромобильдердің қуатты чиптері, әскери сауыт пластиналары"
        },
        "funFact": {
            "en": "Natural silicon carbide (mineral moissanite) was first found inside a meteorite crater in Arizona and shines brighter than diamond!",
            "ru": "В природе минерал муассанит был найден в метеоритном кратере в Аризоне и блестит ярче настоящего бриллианта!",
            "kk": "Табиғи түрі метеорит кратерінен табылған және жарқырауы нағыз гауһар тастан да асып түседі!"
        }
    },
    {
        "id": "iron-sulfide",
        "formula": "FeS",
        "formulaAscii": "FeS",
        "atoms": { "Fe": 1, "S": 1 },
        "name": { "en": "Fool's Gold (Pyrite / Iron Sulfide)", "ru": "Пирит / Сульфид железа", "kk": "Пирит / Темір сульфиді" },
        "scientificName": { "en": "Iron(II) Sulfide", "ru": "Сульфид железа(II)", "kk": "Темір(II) сульфиді" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#eab308",
        "description": {
            "en": "A brass-yellow mineral with a glittering metallic luster that famously tricked countless prospectors into thinking they struck gold!",
            "ru": "Золотистый минерал с металлическим блеском, известный как 'золото дураков', обманувший тысячи золотоискателей!",
            "kk": "'Ақымақтар алтыны' деп аталатын алтындай жарқыраған минерал; тарихта мыңдаған алтын іздеушілерді алдаған!"
        },
        "realWorldUse": {
            "en": "Lithium-iron-sulfide batteries, sulfuric acid production, historical flintlock gun sparks",
            "ru": "Литиевые батарейки, сырье для серной кислоты, кремневые ружья (высекание искр)",
            "kk": "Литий батареялары, күкірт қышқылын алу, мылтыққа от тұтандыратын шақпақтас"
        },
        "funFact": {
            "en": "Striking pyrite with steel produces bright flying sparks, which gave it its Greek name 'pyrites' meaning 'of fire'!",
            "ru": "При ударе о сталь пирит высекает сноп ярких искр, отчего и получил греческое имя 'пиритес' — 'высекающий огонь'!",
            "kk": "Болатпен ұрғанда шашырап от шығарады, сондықтан гректер оны 'от шығарушы' (пиритес) деп атаған!"
        }
    },
    {
        "id": "propane",
        "formula": "C₃H₈",
        "formulaAscii": "C3H8",
        "atoms": { "C": 3, "H": 8 },
        "name": { "en": "Propane Gas", "ru": "Пропан", "kk": "Пропан" },
        "scientificName": { "en": "Propane", "ru": "Пропан", "kk": "Пропан" },
        "category": "fuel",
        "hazard": "danger",
        "state": "gas",
        "structureType": "planar",
        "glowColor": "#f97316",
        "description": {
            "en": "A three-carbon alkane gas easily compressed into a liquid for portable fuel cylinders. Powers backyard BBQ grills and camping stoves.",
            "ru": "Горючий газ, легко сжижаемый под умеренным давлением в баллоны. Топливо для дачных барбекю и туризма.",
            "kk": "Баллондарға оңай сығымдалатын жанар газ. Ауладағы барбекю мен туристік ас пісіруге кеңінен қолданылады."
        },
        "realWorldUse": {
            "en": "Barbecue outdoor grills, hot air balloon burners, forklift fuel, rural home heating",
            "ru": "Грили барбекю, горелки воздушных шаров, вилочные погрузчики, отопление загородных домов",
            "kk": "Барбекю грильдері, ауа шарларының оттықтары, жүк тиегіш көліктер, саяжайларды жылыту"
        },
        "funFact": {
            "en": "Pure propane is completely odorless, so companies deliberately inject ethanethiol (which smells like rotten cabbage) to warn of leaks!",
            "ru": "Чистый пропан вообще не имеет запаха; в него специально добавляют одорант с запахом тухлой капусты для безопасности!",
            "kk": "Таза пропанның иісі мүлдем болмайды; қауіпсіздік үшін оған әдейі өткір сасық иісті зат қосады!"
        }
    }
]

def build_molecules():
    print(f"Total curated molecules: {len(MOLECULES_RAW)}")
    with open("src/data/molecules.ts", "w", encoding="utf-8") as f:
        f.write('import { MoleculeData } from "@/types/chemistry";\n\n')
        f.write('export const MOLECULES_DATA: MoleculeData[] = ' + json.dumps(MOLECULES_RAW, ensure_ascii=False, indent=2) + ';\n\n')
        f.write('export const MOLECULES_BY_ID = new Map<string, MoleculeData>(\n')
        f.write('  MOLECULES_DATA.map(m => [m.id, m])\n')
        f.write(');\n')
    print("Saved src/data/molecules.ts!")

if __name__ == "__main__":
    build_molecules()

MORE_MOLECULES = [
    {
        "id": "nitrogen-gas",
        "formula": "N₂",
        "formulaAscii": "N2",
        "atoms": { "N": 2 },
        "name": { "en": "Nitrogen Gas", "ru": "Азот", "kk": "Азот газы" },
        "scientificName": { "en": "Dinitrogen", "ru": "Диазот", "kk": "Диазот" },
        "category": "gas",
        "hazard": "safe",
        "state": "gas",
        "structureType": "linear",
        "glowColor": "#60a5fa",
        "description": {
            "en": "A super-strong triple covalent bond holds two nitrogen atoms together, making N₂ exceptionally unreactive and making up 78% of air.",
            "ru": "Сверхпрочная тройная связь соединяет два атома азота, делая этот газ инертным. Составляет 78% атмосферного воздуха.",
            "kk": "Өте мықты үштік коваленттік байланыс екі азот атомын біріктіріп тұр. Ауаның 78%-ын құрайды."
        },
        "realWorldUse": {
            "en": "Food packaging (crisps freshness), tire inflation, cryogenic freezing",
            "ru": "Заполнение пачек с чипсами для свежести, накачка гоночных шин, криотерапия",
            "kk": "Чипс пакеттерін үрлеу, жарыс көліктерінің шиналары, криогеника"
        },
        "funFact": {
            "en": "The triple bond in N₂ is so strong it takes a lightning strike or extreme industrial pressure to break it apart!",
            "ru": "Связь в молекуле N₂ настолько прочна, что разорвать ее в природе могут только удары молний!",
            "kk": "N₂ молекуласындағы байланыс соншалықты мықты, табиғатта оны тек найзағай жарқылы ғана бұза алады!"
        }
    },
    {
        "id": "hydrogen-gas",
        "formula": "H₂",
        "formulaAscii": "H2",
        "atoms": { "H": 2 },
        "name": { "en": "Hydrogen Gas", "ru": "Газ Водород", "kk": "Сутегі газы" },
        "scientificName": { "en": "Dihydrogen", "ru": "Диводород", "kk": "Дисутегі" },
        "category": "fuel",
        "hazard": "danger",
        "state": "gas",
        "structureType": "linear",
        "glowColor": "#38bdf8",
        "description": {
            "en": "The lightest molecule in the entire universe. Two shared electrons bind two protons. Clean-burning fuel producing only pure water when burned with oxygen.",
            "ru": "Самая легкая молекула во Вселенной. Чистейшее экологичное топливо будущего: при сгорании с кислородом образуется только вода!",
            "kk": "Ғаламдағы ең жеңіл молекула. Болашақтың ең таза отыны: оттегімен жанғанда тек қана таза су түзіледі!"
        },
        "realWorldUse": {
            "en": "Hydrogen fuel-cell cars, space rocket engines, ammonia synthesis",
            "ru": "Водородные автомобили Toyota Mirai, двигатели космических шаттлов, производство удобрений",
            "kk": "Сутекті көліктер, ғарыштық зымыран қозғалтқыштары, аммиак алу"
        },
        "funFact": {
            "en": "The Sun consumes 600 million tons of hydrogen every single second via nuclear fusion to shine light upon Earth!",
            "ru": "Каждую секунду на Солнце сгорает в термоядерной топке 600 миллионов тонн водорода!",
            "kk": "Күн бізге жарық пен жылу сыйлау үшін әрбір секунд сайын 600 миллион тонна сутегіні термоядролық реакцияда жағады!"
        }
    },
    {
        "id": "chlorine-gas",
        "formula": "Cl₂",
        "formulaAscii": "Cl2",
        "atoms": { "Cl": 2 },
        "name": { "en": "Chlorine Gas", "ru": "Хлор", "kk": "Хлор газы" },
        "scientificName": { "en": "Dichlorine", "ru": "Дихлор", "kk": "Дихлор" },
        "category": "gas",
        "hazard": "danger",
        "state": "gas",
        "structureType": "linear",
        "glowColor": "#84cc16",
        "description": {
            "en": "A heavy greenish-yellow toxic halogen gas with a sharp choking bleach odor.",
            "ru": "Тяжелый удушливый желто-зеленый газ с резким запахом хлорки.",
            "kk": "Өткір иісті, сары-жасыл түсті улы ауыр галогендік газ."
        },
        "realWorldUse": {
            "en": "Water sanitation, disinfectant, plastics manufacture, paper bleaching",
            "ru": "Обеззараживание воды, производство пластиков ПВХ, отбеливание целлюлозы",
            "kk": "Ауыз суды тазарту, ПВХ пластик өндірісі, қағаз ағарту"
        },
        "funFact": {
            "en": "Adding chlorine to city tap water systems in the early 20th century virtually wiped out deadly cholera and typhoid epidemics worldwide!",
            "ru": "Хлорирование водопроводной воды спасло миллионы жизней, победив эпидемии холеры и тифа!",
            "kk": "Қалалық ауыз суды хлорлау XX ғасырдың басында миллиондаған адамды тырысқақ (холера) індетінен құтқарып қалды!"
        }
    },
    {
        "id": "titanium-dioxide",
        "formula": "TiO₂",
        "formulaAscii": "TiO2",
        "atoms": { "Ti": 1, "O": 2 },
        "name": { "en": "Titanium White", "ru": "Диоксид титана (Титан белила)", "kk": "Титан диоксиді (Ақ бояу)" },
        "scientificName": { "en": "Titanium(IV) Oxide", "ru": "Оксид титана(IV)", "kk": "Титан(IV) оксиді" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#f8fafc",
        "description": {
            "en": "The brightest white pigment known to science, with a refractive index even higher than diamond.",
            "ru": "Самый яркий белый пигмент на Земле, преломляющий свет сильнее бриллианта.",
            "kk": "Ғылымға белгілі ең ақ пигмент, жарықты гауһар тастан да күшті сындырады."
        },
        "realWorldUse": {
            "en": "Mineral sunscreen lotions, bright white wall paint, milk-white plastics, toothpaste whitening",
            "ru": "Минеральные кремы от солнца, белая краска для стен, белизна зубной пасты",
            "kk": "Күннен қорғайтын кремдер, ақ қабырға бояуы, тіс пастасының аппақ түсі"
        },
        "funFact": {
            "en": "Two-thirds of all mineral pigments used across modern society contain titanium dioxide!",
            "ru": "Две трети всех пигментов в мире в красках, бумаге и пластике содержат диоксид титана!",
            "kk": "Әлемдегі барлық ақ бояулардың, пластиктер мен қағаздардың үштен екісі титан диоксидінен жасалады!"
        }
    },
    {
        "id": "lye",
        "formula": "NaOH",
        "formulaAscii": "NaOH",
        "atoms": { "Na": 1, "O": 1, "H": 1 },
        "name": { "en": "Caustic Soda (Lye)", "ru": "Едкий натр (Каустическая сода)", "kk": "Күйдіргіш натр (Каустик)" },
        "scientificName": { "en": "Sodium Hydroxide", "ru": "Гидроксид натрия", "kk": "Натрий гидроксиді" },
        "category": "acid-base",
        "hazard": "danger",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#f43f5e",
        "description": {
            "en": "A strongly basic, caustic alkali chemical that reacts with fats to form classic soaps via saponification.",
            "ru": "Сильнейшая щелочь. Вступает в реакцию омыления с жирами, создавая настоящее мыло.",
            "kk": "Күшті сілті. Майлармен сабындану реакциясына түсіп, нағыз сабын түзеді."
        },
        "realWorldUse": {
            "en": "Traditional soap making, drain unblocker chemicals, pretzel dough dipping, paper making",
            "ru": "Варка мыла, средство 'Крот' для прочистки засоров труб, выпечка брецелей, бумага",
            "kk": "Сабын қайнату, құбыр бітелгенде тазалайтын 'Крот' құралы, брецель тоқаштары, қағаз"
        },
        "funFact": {
            "en": "Authentic German bakery pretzels get their glossy brown crust and chewy texture by being briefly dipped in diluted lye before baking!",
            "ru": "Знаменитые хрустящие немецкие крендели-брецели перед выпечкой окунают в раствор щелочи для румяной корочки!",
            "kk": "Атақты неміс брецель тоқаштарын пісірер алдында осы ерітіндіге малып алады, сонда ол жылтыр қытырлақ болып шығады!"
        }
    },
    {
        "id": "potassium-hydroxide",
        "formula": "KOH",
        "formulaAscii": "KOH",
        "atoms": { "K": 1, "O": 1, "H": 1 },
        "name": { "en": "Potash Lye", "ru": "Едкое кали", "kk": "Калий гидроксиді" },
        "scientificName": { "en": "Potassium Hydroxide", "ru": "Гидроксид калия", "kk": "Калий гидроксиді" },
        "category": "acid-base",
        "hazard": "danger",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#c084fc",
        "description": {
            "en": "A powerful alkaline base used to make liquid soft soaps and as the electrolyte in AA alkaline batteries.",
            "ru": "Сильное щелочное основание для производства жидкого мыла и электролит щелочных батареек.",
            "kk": "Сұйық сабын жасайтын және сілтілі батареялардың электролиті болатын күшті негіз."
        },
        "realWorldUse": {
            "en": "AA alkaline batteries electrolyte, liquid shampoos/soaps, biodiesel catalyst",
            "ru": "Электролит пальчиковых батареек, жидкое мыло, шампуни, производство биодизеля",
            "kk": "Батареялар электролиті, сұйық сабындар мен сусабындар, биодизель өндірісі"
        },
        "funFact": {
            "en": "Why are common batteries called 'Alkaline'? Because their core electrolyte is potassium hydroxide alkali!",
            "ru": "Почему батарейки называют 'алкалиновыми'? Потому что их электролит — это щелочь (KOH)!",
            "kk": "Батареялар неге 'алкалинді' деп аталады? Өйткені оның ішінде сілтілі KOH электролиті бар!"
        }
    },
    {
        "id": "zinc-oxide",
        "formula": "ZnO",
        "formulaAscii": "ZnO",
        "atoms": { "Zn": 1, "O": 1 },
        "name": { "en": "Zinc White", "ru": "Оксид цинка (Цинковые белила)", "kk": "Мырыш оксиді (Мырыш ақ бояуы)" },
        "scientificName": { "en": "Zinc Oxide", "ru": "Оксид цинка", "kk": "Мырыш оксиді" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#a7f3d0",
        "description": {
            "en": "A white powder that blocks both UVA and UVB rays completely, making it the gold standard in reef-safe sun protection.",
            "ru": "Белый порошок, полностью отражающий опасные ультрафиолетовые лучи UVA и UVB.",
            "kk": "Ультракүлгін сәулелерді толық кері шағылдыратын қауіпсіз ақ ұнтақ."
        },
        "realWorldUse": {
            "en": "Baby diaper rash creams, lifesaver nose sunblocks, rubber tire vulcanization activator",
            "ru": "Детские защитные мази, солнцезащитные стики для серферов, шинная резина",
            "kk": "Балаларға арналған қорғаныш майлары, сёрферлердің күннен қорғайтын ақ кремі, шиналар"
        },
        "funFact": {
            "en": "Zinc oxide is amphoteric: it can act as both an acid and a base depending on what it is reacting with!",
            "ru": "Оксид цинка амфотерен: он может вести себя и как кислота, и как основание!",
            "kk": "Мырыш оксиді амфотерлі: ол қышқылмен де, сілтімен де бірдей әрекеттесе береді!"
        }
    },
    {
        "id": "potassium-chloride",
        "formula": "KCl",
        "formulaAscii": "KCl",
        "atoms": { "K": 1, "Cl": 1 },
        "name": { "en": "Sylvite (Potassium Salt)", "ru": "Хлорид калия (Сильвин)", "kk": "Калий хлориді (Сильвин)" },
        "scientificName": { "en": "Potassium Chloride", "ru": "Хлорид калия", "kk": "Калий хлориді" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#c084fc",
        "description": {
            "en": "A crystalline ionic salt resembling table salt. Used as an essential agricultural potash fertilizer and low-sodium salt alternative.",
            "ru": "Кристаллическая соль, похожая на поваренную. Главное калийное удобрение для сельского хозяйства.",
            "kk": "Ас тұзына ұқсайтын кристалл. Ауыл шаруашылығының басты калий тыңайтқышы."
        },
        "realWorldUse": {
            "en": "Potash farm fertilizers, heart healthy low-sodium salt substitute, medicine",
            "ru": "Калийные удобрения для урожая, диетическая соль со сниженным содержанием натрия",
            "kk": "Егіс тыңайтқыштары, жүрекке пайдалы натрийсіз диеталық тұз, медицина"
        },
        "funFact": {
            "en": "Under a flame test, potassium chloride glows with a magical lilac-violet color!",
            "ru": "В пламени горелки хлорид калия окрашивает огонь в мистический нежно-сиреневый цвет!",
            "kk": "Жалынға тигізгенде калий хлориді отты ғажайып сирень-күлгін түске бояйды!"
        }
    },
    {
        "id": "magnesium-oxide",
        "formula": "MgO",
        "formulaAscii": "MgO",
        "atoms": { "Mg": 1, "O": 1 },
        "name": { "en": "Magnesia", "ru": "Магнезия (Оксид магния)", "kk": "Магнезия (Магний оксиді)" },
        "scientificName": { "en": "Magnesium Oxide", "ru": "Оксид магния", "kk": "Магний оксиді" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#f59e0b",
        "description": {
            "en": "White ionic mineral with an exceptionally high melting point of 2,852 °C, used in blast furnace heat bricks and gymnastic grip chalk.",
            "ru": "Белый огнеупорный минерал с температурой плавления 2852 °C. Применяется в металлургических печах и спорте.",
            "kk": "Балқу температурасы 2852 °C жететін ақ минерал. Домна пештері мен гимнастикалық спортта қолданылады."
        },
        "realWorldUse": {
            "en": "Gymnastics hand chalk, furnace firebricks, heartburn antacid relief",
            "ru": "Гимнастический мел для рук скалолазов, огнеупорный кирпич, средство от изжоги",
            "kk": "Альпинистер мен гимнастардың қолы тайғанамау үшін жағатын ұнтағы, отқа төзімді кірпіш"
        },
        "funFact": {
            "en": "Rock climbers and Olympic gymnasts dust their palms with magnesia to absorb sweat and prevent slipping!",
            "ru": "Олимпийские гимнасты и скалолазы покрывают руки магнезией, чтобы ладони не потели и не соскальзывали!",
            "kk": "Олимпиада гимнастары мен альпинистер алақандары терлемес үшін қолдарына магнезия ұнтағын жағады!"
        }
    },
    {
        "id": "aluminum-oxide",
        "formula": "Al₂O₃",
        "formulaAscii": "Al2O3",
        "atoms": { "Al": 2, "O": 3 },
        "name": { "en": "Corundum (Ruby & Sapphire)", "ru": "Корунд (Рубин и Сапфир)", "kk": "Корунд (Рубин мен Сапфир)" },
        "scientificName": { "en": "Aluminum Oxide", "ru": "Оксид алюминия", "kk": "Алюминий оксиді" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#e11d48",
        "description": {
            "en": "A super-hard mineral (Mohs 9). With trace chromium it becomes deep red Ruby; with iron and titanium it becomes brilliant blue Sapphire!",
            "ru": "Сверхтвердый минерал (9 по шкале Мооса). С примесью хрома образует красный рубин, а с титаном — синий сапфир!",
            "kk": "Өте қатты минерал (Моос бойынша 9). Хром қосылса қызыл Рубинге, ал титан қосылса көгілдір Сапфирге айналады!"
        },
        "realWorldUse": {
            "en": "Precious gems (rubies, sapphires), sandpaper abrasives, scratch-resistant luxury watch crystals",
            "ru": "Драгоценные камни (рубины, сапфиры), наждачная бумага, нецарапающиеся сапфировые стекла часов",
            "kk": "Асыл тастар (жақұттар), егеуқағаз, қымбат сағаттардың сырылмайтын сапфир әйнегі"
        },
        "funFact": {
            "en": "Rubies and sapphires are chemically the exact same crystal of aluminum oxide, differing only in atomic trace impurities!",
            "ru": "Рубин и сапфир — это химически абсолютно один и тот же кристалл корунда, отличающийся лишь микропримесями!",
            "kk": "Рубин мен сапфир химиялық тұрғыдан бірдей корунд кристалы, тек құрамындағы мардымсыз микроэлементтер ғана түсін өзгертеді!"
        }
    },
    {
        "id": "calcium-fluoride",
        "formula": "CaF₂",
        "formulaAscii": "CaF2",
        "atoms": { "Ca": 1, "F": 2 },
        "name": { "en": "Fluorite (Fluorspar)", "ru": "Флюорит (Плавиковый шпат)", "kk": "Флюорит (Балқытқыш шпат)" },
        "scientificName": { "en": "Calcium Fluoride", "ru": "Фторид кальция", "kk": "Кальций фториді" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#2dd4bf",
        "description": {
            "en": "A colorful mineral famous for glowing brilliantly under ultraviolet blacklight. The scientific phenomenon of 'fluorescence' is named directly after this mineral!",
            "ru": "Красочный минерал, ярко светящийся под ультрафиолетом. Термин 'флуоресценция' назван именно в его честь!",
            "kk": "Ультракүлгін сәуледе көздің жауын алып жарқырайтын минерал. Ғылымдағы 'флуоресценция' құбылысы осы тастың атымен аталған!"
        },
        "realWorldUse": {
            "en": "High-end telescope apochromatic camera lenses, hydrofluoric acid production, steel smelting flux",
            "ru": "Линзы телескопов и премиум-объективов фотоаппаратов, получение фтора, металлургия",
            "kk": "Телескоптар мен кәсіби фотоаппарат линзалары, фтор өндірісі, металлургия"
        },
        "funFact": {
            "en": "Fluorescence was named after fluorite in 1852 by physicist George Gabriel Stokes!",
            "ru": "Явление флуоресценции было названо в честь флюорита физиком Стоксом в 1852 году!",
            "kk": "1852 жылы физик Стокс жарқырау құбылысын флюорит минералының құрметіне флуоресценция деп атаған!"
        }
    },
    {
        "id": "butane",
        "formula": "C₄H₁₀",
        "formulaAscii": "C4H10",
        "atoms": { "C": 4, "H": 10 },
        "name": { "en": "Butane", "ru": "Бутан", "kk": "Бутан" },
        "scientificName": { "en": "Butane", "ru": "Бутан", "kk": "Бутан" },
        "category": "fuel",
        "hazard": "danger",
        "state": "gas",
        "structureType": "planar",
        "glowColor": "#fb923c",
        "description": {
            "en": "A four-carbon alkane gas liquefied under gentle pressure into transparent pocket lighters and camping gas canisters.",
            "ru": "Сжиженный газ, который плещется в прозрачных карманных зажигалках и туристических горелках.",
            "kk": "Мөлдір қалта оттықтары мен саяхатшылардың шағын газ баллончиктеріне құйылатын сұйытылған газ."
        },
        "realWorldUse": {
            "en": "Pocket cigarette lighters, portable camping stoves, aerosol spray propellant",
            "ru": "Карманные зажигалки, портативные походные плитки, газ-вытеснитель в дезодорантах",
            "kk": "Қалта оттықтары, шағын жорық плиталары, дезодорант аэрозольдері"
        },
        "funFact": {
            "en": "If you look closely through a clear plastic lighter, you see liquid butane, but the moment it squirts out, it instantly flashes into gas!",
            "ru": "В зажигалке бутан сжижен, но как только клапан открывается, он мгновенно вырывается наружу газом!",
            "kk": "Мөлдір оттықтың ішінде бутан сұйық болып тұрады, бірақ клапанын басқан сәтте лезде газға айналып ұшады!"
        }
    },
    {
        "id": "phosphoric-acid",
        "formula": "H₃PO₄",
        "formulaAscii": "H3PO4",
        "atoms": { "H": 3, "P": 1, "O": 4 },
        "name": { "en": "Phosphoric Acid", "ru": "Фосфорная кислота", "kk": "Фосфор қышқылы" },
        "scientificName": { "en": "Orthophosphoric Acid", "ru": "Ортофосфорная кислота", "kk": "Ортофосфор қышқылы" },
        "category": "acid-base",
        "hazard": "caution",
        "state": "liquid",
        "structureType": "tetrahedral",
        "glowColor": "#8b5cf6",
        "description": {
            "en": "A mineral acid that gives cola soft drinks their characteristic sour-tangy bite and prevents bacterial growth.",
            "ru": "Кислота, придающая коле и газировкам их характерный терпкий освежающий кислый вкус.",
            "kk": "Кола және газдалған сусындарға өзіне тән қышқылтым сергіткіш дәм беретін қышқыл."
        },
        "realWorldUse": {
            "en": "Cola beverage flavoring, rust converter rust-proofing primer, dental teeth etching gels",
            "ru": "Подкислитель колы и лимонадов, преобразователь ржавчины на авто, протравка зубов перед пломбированием",
            "kk": "Кола сусындарының қышқыл дәмі, көліктегі тотты жоятын құрал, тіс пломбалау гелі"
        },
        "funFact": {
            "en": "Because of phosphoric acid, soaking a rusty iron nail in cola overnight will actually dissolve away the rust!",
            "ru": "Благодаря фосфорной кислоте в коле, ржавый гвоздь за ночь в стакане с напитком полностью очищается от ржавчины!",
            "kk": "Кола сусынында фосфор қышқылы болғандықтан, тот басқан шегені соған салып қойса, таңертең тоттан толық тазарады!"
        }
    },
    {
        "id": "acetone",
        "formula": "C₃H₆O",
        "formulaAscii": "C3H6O",
        "atoms": { "C": 3, "H": 6, "O": 1 },
        "name": { "en": "Acetone", "ru": "Ацетон", "kk": "Ацетон" },
        "scientificName": { "en": "Propan-2-one", "ru": "Диметилкетон (Пропанон)", "kk": "Диметилкетон (Пропанон)" },
        "category": "household",
        "hazard": "caution",
        "state": "liquid",
        "structureType": "planar",
        "glowColor": "#ec4899",
        "description": {
            "en": "The simplest ketone: a colorless, highly volatile liquid that readily dissolves plastic varnishes, nail polishes, and superglue.",
            "ru": "Простейший кетон с характерным запахом. Мгновенно растворяет лак для ногтей, краски и суперклей.",
            "kk": "Ең қарапайым кетон. Тырнақ лагын, бояуларды және суперклейді лезде ерітіп жіберетін ұшқыш сұйықтық."
        },
        "realWorldUse": {
            "en": "Nail polish remover, lab glassware degreasing, dissolving superglue spills, paint thinner",
            "ru": "Жидкость для снятия лака, обезжиривание оптики, смывание суперклея с пальцев",
            "kk": "Тырнақ лагын кетіргіш, лабораториялық шыныларды тазарту, суперклейді еріту"
        },
        "funFact": {
            "en": "Pouring a splash of acetone onto a large styrofoam block melts it into goo in seconds because styrofoam is 98% trapped air!",
            "ru": "Капля ацетона растворяет огромный кусок пенопласта за секунды, превращая его в крошечную каплю смолы!",
            "kk": "Ацетонды пенопластқа тамызсаңыз, ол бірнеше секундта көз алдыңызда еріп кетеді, өйткені пенопласт 98% ауадан тұрады!"
        }
    },
    {
        "id": "silver-chloride",
        "formula": "AgCl",
        "formulaAscii": "AgCl",
        "atoms": { "Ag": 1, "Cl": 1 },
        "name": { "en": "Silver Chloride", "ru": "Хлорид серебра", "kk": "Күміс хлориді" },
        "scientificName": { "en": "Silver(I) Chloride", "ru": "Хлорид серебра(I)", "kk": "Күміс(I) хлориді" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#94a3b8",
        "description": {
            "en": "A light-sensitive white crystal that darkens when struck by sunlight. The chemical foundation that launched the invention of photography.",
            "ru": "Светочувствительный белый осадок, темнеющий на солнце. Основа изобретения черно-белой фотографии.",
            "kk": "Күн сәулесі түскенде қараятын жарыққа сезімтал ақ тұнба. Ақ-қара фотосурет өнерінің негізін қалаған зат."
        },
        "realWorldUse": {
            "en": "Black & white photographic film, photochromic sunglasses that darken in sunlight, reference electrodes",
            "ru": "Черно-белая фотопленка, солнцезащитные очки-'хамелеоны', электроды pH-метров",
            "kk": "Ақ-қара фотопленкалар, күнде қараятын 'хамелеон' көзілдіріктер, рН-метр электродтары"
        },
        "funFact": {
            "en": "When exposed to photons of light, silver ions in AgCl turn into microscopic particles of pure metallic silver, capturing photographs!",
            "ru": "Под действием фотонов света ионы серебра в AgCl превращаются в крупинки чистого темного серебра, рождая фотоснимок!",
            "kk": "Жарық түскен кезде күміс иондары қара түсті таза металл күміс түйіршіктеріне айналып, суретті қалыптастырады!"
        }
    },
    {
        "id": "gold-leaf",
        "formula": "Au",
        "formulaAscii": "Au",
        "atoms": { "Au": 1 },
        "name": { "en": "Pure Gold Leaf", "ru": "Сусальное золото", "kk": "Таза алтын (Алтын жалату)" },
        "scientificName": { "en": "Elemental Gold", "ru": "Золото самородное", "kk": "Табиғи алтын" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#eab308",
        "description": {
            "en": "Pure noble element that never tarnishes, rusts, or corrodes even after thousands of years buried underground or in sunken shipwrecks.",
            "ru": "Благородный металл, который не окисляется и не ржавеет даже спустя тысячи лет на дне океана.",
            "kk": "Мұхит түбінде мыңдаған жыл жатса да тот баспайтын, түсін өзгертпейтін таза асыл металл."
        },
        "realWorldUse": {
            "en": "Space visor infrared reflection, gold bullion monetary reserves, edible gold leaf culinary decoration, computer microchips",
            "ru": "Отражающие экраны шлемов космонавтов, золотые слитки, съедобное золото в десертах, микропроцессоры",
            "kk": "Ғарышкерлер шлемін радиациядан қорғау, мемлекеттік алтын құймалары, тәттілерді алтынмен безендіру, чиптер"
        },
        "funFact": {
            "en": "Gold from King Tutankhamun's tomb is over 3,300 years old and looks just as shiny today as the day it was forged!",
            "ru": "Золотая маска фараона Тутанхамона сияет так же ярко, как и 3300 лет назад при ее создании!",
            "kk": "Тутанхамон перғауынның алтын маскасы 3300 жыл өтсе де, кеше ғана жасалғандай жарқырап тұр!"
        }
    }
]

MOLECULES_RAW.extend(MORE_MOLECULES)
build_molecules()

EVEN_MORE = [
    {
        "id": "acetylene",
        "formula": "C₂H₂",
        "formulaAscii": "C2H2",
        "atoms": { "C": 2, "H": 2 },
        "name": { "en": "Acetylene Gas", "ru": "Ацетилен", "kk": "Ацетилен" },
        "scientificName": { "en": "Ethyne", "ru": "Этин", "kk": "Этин" },
        "category": "fuel",
        "hazard": "danger",
        "state": "gas",
        "structureType": "linear",
        "glowColor": "#ea580c",
        "description": {
            "en": "A hydrocarbon gas containing a carbon-carbon triple bond. Burns with pure oxygen at an astonishing 3,300 °C, hot enough to slice through steel like butter.",
            "ru": "Газ с тройной углеродной связью. В смеси с кислородом горит при 3300 °C, разрезая толстую сталь как масло.",
            "kk": "Үштік байланысы бар газ. Оттегімен араласқанда 3300 °C температурада жанып, қалың болатты майдай кеседі."
        },
        "realWorldUse": {
            "en": "Oxy-acetylene metal cutting torches, underwater salvage welding, synthesis of plastics",
            "ru": "Газосварка и автогенная резка металла, подводная резка стали, химический синтез",
            "kk": "Металдарды газбен дәнекерлеу және кесу, суастында болат кесу, пластиктер алу"
        },
        "funFact": {
            "en": "The flame of burning acetylene in oxygen reaches 3,332 °C — hotter than the surface of some stars!",
            "ru": "Пламя ацетиленовой горелки горячее, чем поверхность многих красных звезд во Вселенной!",
            "kk": "Ацетилен жалынының қызуы 3332 °C-қа жетеді — бұл Ғаламдағы кейбір жұлдыздардың бетінен де ыстық!"
        }
    },
    {
        "id": "slaked-lime",
        "formula": "Ca(OH)₂",
        "formulaAscii": "CaH2O2",
        "atoms": { "Ca": 1, "O": 2, "H": 2 },
        "name": { "en": "Slaked Lime", "ru": "Гашёная известь", "kk": "Сөндірілген әк" },
        "scientificName": { "en": "Calcium Hydroxide", "ru": "Гидроксид кальция", "kk": "Кальций гидроксиді" },
        "category": "household",
        "hazard": "caution",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#f1f5f9",
        "description": {
            "en": "Formed when water is poured onto quicklime. Its saturated aqueous solution is lime water, used in school labs to test for carbon dioxide gas by turning milky cloudy.",
            "ru": "Образуется при гашении извести водой. Известковая вода мутнеет от углекислого газа — знаменитый опыт на уроках!",
            "kk": "Сөндірілмеген әкке су құйғанда түзіледі. Әк суы көмірқышқыл газынан лайланады — химия сабағындағы атақты тәжірибе!"
        },
        "realWorldUse": {
            "en": "Whitewashing fruit tree trunks against pests, mortar cement, sugar refining, water softening",
            "ru": "Побелка стволов садовых деревьев от вредителей, побелка стен, очистка сахара на заводах",
            "kk": "Бау-бақша ағаштарын зиянкестерден қорғау үшін ақтау, үй қабырғаларын ақтау, қант зауыттары"
        },
        "funFact": {
            "en": "Exhaling with a straw into clear lime water turns it milky white within seconds as calcium carbonate chalk precipitates!",
            "ru": "Если подуть через соломинку в прозрачную известковую воду, она моментально станет молочно-белой от выдыхаемого CO₂!",
            "kk": "Түтікшемен мөлдір әк суына үрлесеңіз, деміңіздегі CO₂ әсерінен ол бірнеше секундта сүттей аппақ болып лайланады!"
        }
    },
    {
        "id": "carbonic-acid",
        "formula": "H₂CO₃",
        "formulaAscii": "H2CO3",
        "atoms": { "H": 2, "C": 1, "O": 3 },
        "name": { "en": "Carbonic Acid", "ru": "Угольная кислота", "kk": "Көмір қышқылы" },
        "scientificName": { "en": "Carbonic Acid", "ru": "Угольная кислота", "kk": "Көмір қышқылы" },
        "category": "acid-base",
        "hazard": "safe",
        "state": "liquid",
        "structureType": "planar",
        "glowColor": "#38bdf8",
        "description": {
            "en": "The fizzy weak acid created when carbon dioxide dissolves into water under pressure. Responsible for the refreshing effervescence of sparkling water.",
            "ru": "Слабая кислота, образующаяся при растворении CO₂ в воде под давлением. Именно она шипит в газированной минералке!",
            "kk": "CO₂ қысыммен суда ерігенде пайда болатын қышқыл. Газдалған минералды сусындардың көпіршіктеніп шипуына жауап береді!"
        },
        "realWorldUse": {
            "en": "Sparkling water effervescence, ocean pH regulation, cave stalactite formation",
            "ru": "Шипучая минеральная газированная вода, регулирование кислотности крови, образование сталактитов в пещерах",
            "kk": "Газдалған минералды сулар, қанның қышқылдық тепе-теңдігі, үңгірлердегі сталактиттердің түзілуі"
        },
        "funFact": {
            "en": "Slowly dissolving limestone over millions of years with carbonic acid in rainwater created the giant underground caves of Earth!",
            "ru": "Именно слабая угольная кислота в дождевой воде миллионы лет вымывала гигантские пещеры в известняковых скалах!",
            "kk": "Жаңбыр суындағы көмір қышқылы миллиондаған жылдар бойы тауларды ерітіп, Жер бетіндегі алып үңгірлерді түзіп шыққан!"
        }
    },
    {
        "id": "sugar-sucrose",
        "formula": "C₁₂H₂₂O₁₁",
        "formulaAscii": "C12H22O11",
        "atoms": { "C": 12, "H": 22, "O": 11 },
        "name": { "en": "Table Sugar (Sucrose)", "ru": "Сахар (Сахароза)", "kk": "Ас қанты (Сахароза)" },
        "scientificName": { "en": "Sucrose", "ru": "Сахароза", "kk": "Сахароза" },
        "category": "household",
        "hazard": "safe",
        "state": "solid",
        "structureType": "complex",
        "glowColor": "#fde047",
        "description": {
            "en": "Common granulated table sugar: a disaccharide molecule made of glucose and fructose linked together. Melts and caramelizes into golden-brown treats.",
            "ru": "Обычный кусковой или рассыпной белый сахар. При нагревании плавится и карамелизуется во вкуснейшие десерты.",
            "kk": "Кәдімгі ақ қант. Қыздырған кезде балқып, тәтті алтын түсті карамельге айналады."
        },
        "realWorldUse": {
            "en": "Culinary sweetener, baking, jam preservation, bio-ethanol production",
            "ru": "Подсластитель чая, выпечка тортов, варка варенья для консервации ягод",
            "kk": "Шай мен тағамдарды тәттілеу, торттар пісіру, тосап (варенье) қайнату"
        },
        "funFact": {
            "en": "If you crush sugar cubes with pliers in total darkness, they emit tiny flashes of eerie blue light, a phenomenon called triboluminescence!",
            "ru": "Если раскалывать кусочки сахара в полной темноте, они светятся таинственными голубыми вспышками (триболюминесценция)!",
            "kk": "Түнек қараңғыда қант кесегін қысқышпен сындырсаңыз, ол көгілдір жарық шығарып жарқылдайды (триболюминесценция)!"
        }
    },
    {
        "id": "sulfur-dioxide",
        "formula": "SO₂",
        "formulaAscii": "SO2",
        "atoms": { "S": 1, "O": 2 },
        "name": { "en": "Sulfur Dioxide", "ru": "Диоксид серы", "kk": "Күкірт диоксиді" },
        "scientificName": { "en": "Sulfur Dioxide", "ru": "Диоксид серы (сернистый газ)", "kk": "Күкірт диоксиді (күкіртті газ)" },
        "category": "gas",
        "hazard": "caution",
        "state": "gas",
        "structureType": "bent",
        "glowColor": "#eab308",
        "description": {
            "en": "A choking, suffocating gas with the sharp scent of a freshly struck match. Emitted in huge plumes by active volcanoes.",
            "ru": "Газ с характерным едким запахом только что зажженной спички. Выбрасывается вулканами при извержениях.",
            "kk": "Жаңа жағылған сіріңкенің өткір иісі бар газ. Жанартау атқылағанда орасан зор мөлшерде бөлінеді."
        },
        "realWorldUse": {
            "en": "Dried fruit preservation (keeps dried apricots bright orange), winemaking antimicrobial, sulfuric acid synthesis",
            "ru": "Консервация сухофруктов (курага сохраняет яркий цвет), виноделие, производство серной кислоты",
            "kk": "Кептірілген өріктің (курага) ашық сары түсін сақтау, күкірт қышқылын өндіру"
        },
        "funFact": {
            "en": "Jupiter's volcanic moon Io erupts massive geysers of sulfur dioxide reaching 500 kilometers into space!",
            "ru": "На спутнике Юпитера Ио действуют сотни вулканов, выбрасывающих фонтаны сернистого газа на 500 км в космос!",
            "kk": "Юпитердің Ио серігіндегі жүздеген жанартаулар күкіртті газ фонтандарын ғарышқа 500 шақырым биіктікке дейін атқылайды!"
        }
    },
    {
        "id": "lithium-hydroxide",
        "formula": "LiOH",
        "formulaAscii": "LiOH",
        "atoms": { "Li": 1, "O": 1, "H": 1 },
        "name": { "en": "Lithium Hydroxide", "ru": "Гидроксид лития", "kk": "Литий гидроксиді" },
        "scientificName": { "en": "Lithium Hydroxide", "ru": "Гидроксид лития", "kk": "Литий гидроксиді" },
        "category": "household",
        "hazard": "caution",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#f472b6",
        "description": {
            "en": "A light alkali chemical that scrubs carbon dioxide from air canisters aboard submarines and NASA spacecraft (including Apollo 13!).",
            "ru": "Легкая щелочь, поглощающая выдыхаемый углекислый газ на подводных лодках и космических кораблях (спасла экипаж Аполлон-13!).",
            "kk": "Сүңгуір қайықтар мен ғарыш кемелерінде адамдар демінен шыққан көмірқышқыл газын сіңіріп тазартатын зат (Аполлон-13-ті құтқарған!)."
        },
        "realWorldUse": {
            "en": "International Space Station air revitalization, lithium battery chemical synthesis, scuba rebreathers",
            "ru": "Очистка воздуха на МКС, производство аккумуляторов, дыхательные аппараты водолазов",
            "kk": "Халықаралық ғарыш станциясындағы ауа тазартқыш, литий батареялары, сүңгуір аппараттары"
        },
        "funFact": {
            "en": "Astronauts on Apollo 13 famously rigged round lithium hydroxide canisters into square sockets using duct tape to save their lives!",
            "ru": "Космонавты Аполлона-13 спаслись, соединив скотчем квадратные и круглые фильтры гидроксида лития!",
            "kk": "Аполлон-13 ғарышкерлері скотчпен литий гидроксидінің сүзгілерін жалғап, өз өмірлерін тұншығудан аман сақтап қалған!"
        }
    },
    {
        "id": "pure-copper",
        "formula": "Cu",
        "formulaAscii": "Cu",
        "atoms": { "Cu": 1 },
        "name": { "en": "Pure Copper Nugget", "ru": "Самородная медь", "kk": "Табиғи мыс кесегі" },
        "scientificName": { "en": "Elemental Copper", "ru": "Медь самородная", "kk": "Табиғи мыс" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#f97316",
        "description": {
            "en": "One of the few metals found in nature directly in pure metallic form. Its gleaming reddish-gold luster guided humanity out of the Stone Age into the Bronze Age.",
            "ru": "Один из первых металлов цивилизации. Красновато-золотой металл, который вывел человечество из каменного века.",
            "kk": "Адамзат өркениеті ең алғаш игерген металдардың бірі. Адамдарды тас дәуірінен қола дәуіріне жетелеген қызғылт металл."
        },
        "realWorldUse": {
            "en": "High-speed electrical power grids, computer heatsinks, roofing, brass and bronze alloys",
            "ru": "Электросети, радиаторы охлаждения суперкомпьютеров, медная кровля, сплавы бронзы",
            "kk": "Электр желілері, компьютер радиаторлары, шатыр жабындысы, қола қорытпалары"
        },
        "funFact": {
            "en": "The Statue of Liberty is clad in 31 tons of copper! It was originally shiny brown like a penny, but turned green from 100 years of oxidation!",
            "ru": "Статуя Свободы покрыта 31 тонной меди! Изначально она сияла красновато-рыжим цветом, но позеленела от окисления!",
            "kk": "АҚШ-тағы 'Бостандық' мүсіні 31 тонна таза мыстан жасалған! Басында ол қызғылт мыс түсті болған, уақыт өте келе тотығып жасылға айналған!"
        }
    },
    {
        "id": "pure-diamond",
        "formula": "C",
        "formulaAscii": "C",
        "atoms": { "C": 1 },
        "name": { "en": "Diamond / Graphite", "ru": "Алмаз / Графит", "kk": "Алмас / Графит" },
        "scientificName": { "en": "Allotropic Carbon", "ru": "Аллотропный углерод", "kk": "Аллотропиялық көміртек" },
        "category": "mineral",
        "hazard": "safe",
        "state": "solid",
        "structureType": "lattice",
        "glowColor": "#38bdf8",
        "description": {
            "en": "Pure carbon atoms bonded in a rigid tetrahedral lattice form Diamond, the hardest natural mineral. The same atoms arranged in sheets form slippery Graphite!",
            "ru": "Твердейший минерал планеты: каждый атом углерода намертво связан с четырьмя соседями. В слоистом виде — это мягкий графит!",
            "kk": "Планетадағы ең қатты минерал. Ал қабатты тор түрінде — жұп-жұмсақ қарындаш графиті!"
        },
        "realWorldUse": {
            "en": "Industrial rock drill bits, gemstone rings, pencil leads, lithium battery anodes",
            "ru": "Буровые долота для нефтяных скважин, ювелирные кольца, грифели карандашей",
            "kk": "Мұнай бұрғылары, гауһар тастар, қарындаш өзегі, аккумулятор анодтары"
        },
        "funFact": {
            "en": "Astronomers discovered planet '55 Cancri e', where the interior pressure is so immense that a third of the entire planet is solid diamond!",
            "ru": "Астрономы нашли экзопланету '55 Рака e', где треть всей планеты состоит из чистейшего кристаллического алмаза!",
            "kk": "Астрономдар ғарыштан '55 Рака e' планетасын тапты, оның үштен бір бөлігі тұтастай таза алмастан тұрады!"
        }
    }
]

MOLECULES_RAW.extend(EVEN_MORE)
build_molecules()
