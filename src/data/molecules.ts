import { MoleculeData } from '@/types/chemistry';

export const MOLECULES_DATA: MoleculeData[] = [
  {
    "id": "water",
    "formula": "H₂O",
    "formulaAscii": "H2O",
    "atoms": {
      "H": 2,
      "O": 1
    },
    "name": {
      "en": "Water",
      "ru": "Вода",
      "kk": "Су"
    },
    "scientificName": {
      "en": "Dihydrogen Monoxide",
      "ru": "Оксид водорода",
      "kk": "Дигидроген монооксиді"
    },
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
    "atoms": {
      "Na": 1,
      "Cl": 1
    },
    "name": {
      "en": "Table Salt",
      "ru": "Поваренная соль",
      "kk": "Ас тұзы"
    },
    "scientificName": {
      "en": "Sodium Chloride",
      "ru": "Хлорид натрия",
      "kk": "Натрий хлориді"
    },
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
    "atoms": {
      "C": 1,
      "O": 2
    },
    "name": {
      "en": "Carbon Dioxide",
      "ru": "Углекислый газ",
      "kk": "Көмірқышқыл газы"
    },
    "scientificName": {
      "en": "Carbon Dioxide",
      "ru": "Диоксид углерода",
      "kk": "Көміртек диоксиді"
    },
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
    "atoms": {
      "C": 1,
      "H": 4
    },
    "name": {
      "en": "Methane",
      "ru": "Метан",
      "kk": "Метан"
    },
    "scientificName": {
      "en": "Methane",
      "ru": "Метан (болотный газ)",
      "kk": "Метан (батпақ газы)"
    },
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
    "atoms": {
      "N": 1,
      "H": 3
    },
    "name": {
      "en": "Ammonia",
      "ru": "Аммиак",
      "kk": "Аммиак"
    },
    "scientificName": {
      "en": "Hydrogen Nitride",
      "ru": "Нитрид водорода",
      "kk": "Сутегі нитриді"
    },
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
    "atoms": {
      "O": 2
    },
    "name": {
      "en": "Oxygen Gas",
      "ru": "Кислород",
      "kk": "Оттегі газы"
    },
    "scientificName": {
      "en": "Dioxygen",
      "ru": "Дикислород",
      "kk": "Диоттегі"
    },
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
    "atoms": {
      "O": 3
    },
    "name": {
      "en": "Ozone",
      "ru": "Озон",
      "kk": "Озон"
    },
    "scientificName": {
      "en": "Trioxygen",
      "ru": "Триоксиген",
      "kk": "Триоттегі"
    },
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
    "atoms": {
      "H": 2,
      "O": 2
    },
    "name": {
      "en": "Hydrogen Peroxide",
      "ru": "Перекись водорода",
      "kk": "Сутегі асқын тотығы"
    },
    "scientificName": {
      "en": "Dihydrogen Dioxide",
      "ru": "Пероксид водорода",
      "kk": "Сутегі пероксиді"
    },
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
    "atoms": {
      "Fe": 2,
      "O": 3
    },
    "name": {
      "en": "Rust",
      "ru": "Ржавчина",
      "kk": "Тот (Темір оксиді)"
    },
    "scientificName": {
      "en": "Iron(III) Oxide",
      "ru": "Оксид железа(III)",
      "kk": "Темір(III) оксиді"
    },
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
    "atoms": {
      "H": 1,
      "Cl": 1
    },
    "name": {
      "en": "Stomach Acid",
      "ru": "Соляная кислота",
      "kk": "Тұз қышқылы"
    },
    "scientificName": {
      "en": "Hydrogen Chloride (Hydrochloric Acid)",
      "ru": "Хлороводородная кислота",
      "kk": "Хлорсутек қышқылы"
    },
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
    "atoms": {
      "Na": 1,
      "H": 1,
      "C": 1,
      "O": 3
    },
    "name": {
      "en": "Baking Soda",
      "ru": "Пищевая сода",
      "kk": "Ас содасы"
    },
    "scientificName": {
      "en": "Sodium Bicarbonate",
      "ru": "Гидрокарбонат натрия",
      "kk": "Натрий гидрокарбонаты"
    },
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
    "atoms": {
      "C": 1,
      "O": 1
    },
    "name": {
      "en": "Carbon Monoxide",
      "ru": "Угарный газ",
      "kk": "Иіс газы"
    },
    "scientificName": {
      "en": "Carbon Monoxide",
      "ru": "Монооксид углерода",
      "kk": "Көміртек монооксиді"
    },
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
    "atoms": {
      "Ca": 1,
      "C": 1,
      "O": 3
    },
    "name": {
      "en": "Chalk / Limestone",
      "ru": "Мел / Известняк",
      "kk": "Бор / Әктас"
    },
    "scientificName": {
      "en": "Calcium Carbonate",
      "ru": "Карбонат кальция",
      "kk": "Кальций карбонаты"
    },
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
    "atoms": {
      "C": 6,
      "H": 12,
      "O": 6
    },
    "name": {
      "en": "Glucose (Sugar)",
      "ru": "Глюкоза (Сахар)",
      "kk": "Глюкоза (Қант)"
    },
    "scientificName": {
      "en": "D-Glucose",
      "ru": "D-Глюкоза (виноградный сахар)",
      "kk": "D-Глюкоза (жүзім қанты)"
    },
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
    "atoms": {
      "Si": 1,
      "O": 2
    },
    "name": {
      "en": "Quartz / Sand",
      "ru": "Кварц / Песок",
      "kk": "Кварц / Құм"
    },
    "scientificName": {
      "en": "Silicon Dioxide (Silica)",
      "ru": "Диоксид кремния (кремнезём)",
      "kk": "Кремний диоксиді"
    },
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
    "atoms": {
      "C": 2,
      "H": 4,
      "O": 2
    },
    "name": {
      "en": "Vinegar (Acetic Acid)",
      "ru": "Уксусная кислота",
      "kk": "Сірке қышқылы (Уксус)"
    },
    "scientificName": {
      "en": "Ethanoic Acid",
      "ru": "Этановая кислота",
      "kk": "Этан қышқылы"
    },
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
    "atoms": {
      "C": 2,
      "H": 6,
      "O": 1
    },
    "name": {
      "en": "Ethanol (Biofuel)",
      "ru": "Этанол (Биотопливо)",
      "kk": "Этанол (Биоотын)"
    },
    "scientificName": {
      "en": "Ethyl Alcohol",
      "ru": "Этиловый спирт",
      "kk": "Этил спирті"
    },
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
    "atoms": {
      "Na": 1,
      "Cl": 1,
      "O": 1
    },
    "name": {
      "en": "Bleach",
      "ru": "Отбеливатель (Белизна)",
      "kk": "Ағартқыш (Белизна)"
    },
    "scientificName": {
      "en": "Sodium Hypochlorite",
      "ru": "Гипохлорит натрия",
      "kk": "Натрий гипохлориті"
    },
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
    "atoms": {
      "H": 2,
      "S": 1,
      "O": 4
    },
    "name": {
      "en": "Sulfuric Acid",
      "ru": "Серная кислота",
      "kk": "Күкірт қышқылы"
    },
    "scientificName": {
      "en": "Sulfuric Acid",
      "ru": "Серная кислота",
      "kk": "Күкірт қышқылы"
    },
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
    "atoms": {
      "H": 1,
      "N": 1,
      "O": 3
    },
    "name": {
      "en": "Nitric Acid",
      "ru": "Азотная кислота",
      "kk": "Азот қышқылы"
    },
    "scientificName": {
      "en": "Nitric Acid",
      "ru": "Азотная кислота",
      "kk": "Азот қышқылы"
    },
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
    "atoms": {
      "Ca": 1,
      "O": 1
    },
    "name": {
      "en": "Quicklime",
      "ru": "Негашёная известь",
      "kk": "Сөндірілмеген әк"
    },
    "scientificName": {
      "en": "Calcium Oxide",
      "ru": "Оксид кальция",
      "kk": "Кальций оксиді"
    },
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
    "atoms": {
      "Cu": 1,
      "S": 1,
      "O": 4
    },
    "name": {
      "en": "Copper Sulfate (Blue Vitriol)",
      "ru": "Медный купорос",
      "kk": "Мыс купоросы"
    },
    "scientificName": {
      "en": "Copper(II) Sulfate",
      "ru": "Сульфат меди(II)",
      "kk": "Мыс(II) сульфаты"
    },
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
    "atoms": {
      "N": 2,
      "O": 1
    },
    "name": {
      "en": "Laughing Gas",
      "ru": "Веселящий газ",
      "kk": "Күлдіргіш газ"
    },
    "scientificName": {
      "en": "Nitrous Oxide",
      "ru": "Оксид диазота",
      "kk": "Диазот оксиді"
    },
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
    "atoms": {
      "H": 2,
      "S": 1
    },
    "name": {
      "en": "Rotten Egg Gas",
      "ru": "Сероводород",
      "kk": "Күкіртсутек"
    },
    "scientificName": {
      "en": "Hydrogen Sulfide",
      "ru": "Сероводород",
      "kk": "Күкіртсутек"
    },
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
    "atoms": {
      "Si": 1,
      "C": 1
    },
    "name": {
      "en": "Carborundum",
      "ru": "Карбид кремния (Карборунд)",
      "kk": "Кремний карбиді (Карборунд)"
    },
    "scientificName": {
      "en": "Silicon Carbide",
      "ru": "Карбид кремния",
      "kk": "Кремний карбиді"
    },
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
    "atoms": {
      "Fe": 1,
      "S": 1
    },
    "name": {
      "en": "Fool's Gold (Pyrite / Iron Sulfide)",
      "ru": "Пирит / Сульфид железа",
      "kk": "Пирит / Темір сульфиді"
    },
    "scientificName": {
      "en": "Iron(II) Sulfide",
      "ru": "Сульфид железа(II)",
      "kk": "Темір(II) сульфиді"
    },
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
    "atoms": {
      "C": 3,
      "H": 8
    },
    "name": {
      "en": "Propane Gas",
      "ru": "Пропан",
      "kk": "Пропан"
    },
    "scientificName": {
      "en": "Propane",
      "ru": "Пропан",
      "kk": "Пропан"
    },
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
  },
  {
    "id": "nitrogen-gas",
    "formula": "N₂",
    "formulaAscii": "N2",
    "atoms": {
      "N": 2
    },
    "name": {
      "en": "Nitrogen Gas",
      "ru": "Азот",
      "kk": "Азот газы"
    },
    "scientificName": {
      "en": "Dinitrogen",
      "ru": "Диазот",
      "kk": "Диазот"
    },
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
    "atoms": {
      "H": 2
    },
    "name": {
      "en": "Hydrogen Gas",
      "ru": "Газ Водород",
      "kk": "Сутегі газы"
    },
    "scientificName": {
      "en": "Dihydrogen",
      "ru": "Диводород",
      "kk": "Дисутегі"
    },
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
    "atoms": {
      "Cl": 2
    },
    "name": {
      "en": "Chlorine Gas",
      "ru": "Хлор",
      "kk": "Хлор газы"
    },
    "scientificName": {
      "en": "Dichlorine",
      "ru": "Дихлор",
      "kk": "Дихлор"
    },
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
    "atoms": {
      "Ti": 1,
      "O": 2
    },
    "name": {
      "en": "Titanium White",
      "ru": "Диоксид титана (Титан белила)",
      "kk": "Титан диоксиді (Ақ бояу)"
    },
    "scientificName": {
      "en": "Titanium(IV) Oxide",
      "ru": "Оксид титана(IV)",
      "kk": "Титан(IV) оксиді"
    },
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
    "atoms": {
      "Na": 1,
      "O": 1,
      "H": 1
    },
    "name": {
      "en": "Caustic Soda (Lye)",
      "ru": "Едкий натр (Каустическая сода)",
      "kk": "Күйдіргіш натр (Каустик)"
    },
    "scientificName": {
      "en": "Sodium Hydroxide",
      "ru": "Гидроксид натрия",
      "kk": "Натрий гидроксиді"
    },
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
    "atoms": {
      "K": 1,
      "O": 1,
      "H": 1
    },
    "name": {
      "en": "Potash Lye",
      "ru": "Едкое кали",
      "kk": "Калий гидроксиді"
    },
    "scientificName": {
      "en": "Potassium Hydroxide",
      "ru": "Гидроксид калия",
      "kk": "Калий гидроксиді"
    },
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
    "atoms": {
      "Zn": 1,
      "O": 1
    },
    "name": {
      "en": "Zinc White",
      "ru": "Оксид цинка (Цинковые белила)",
      "kk": "Мырыш оксиді (Мырыш ақ бояуы)"
    },
    "scientificName": {
      "en": "Zinc Oxide",
      "ru": "Оксид цинка",
      "kk": "Мырыш оксиді"
    },
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
    "atoms": {
      "K": 1,
      "Cl": 1
    },
    "name": {
      "en": "Sylvite (Potassium Salt)",
      "ru": "Хлорид калия (Сильвин)",
      "kk": "Калий хлориді (Сильвин)"
    },
    "scientificName": {
      "en": "Potassium Chloride",
      "ru": "Хлорид калия",
      "kk": "Калий хлориді"
    },
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
    "atoms": {
      "Mg": 1,
      "O": 1
    },
    "name": {
      "en": "Magnesia",
      "ru": "Магнезия (Оксид магния)",
      "kk": "Магнезия (Магний оксиді)"
    },
    "scientificName": {
      "en": "Magnesium Oxide",
      "ru": "Оксид магния",
      "kk": "Магний оксиді"
    },
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
    "atoms": {
      "Al": 2,
      "O": 3
    },
    "name": {
      "en": "Corundum (Ruby & Sapphire)",
      "ru": "Корунд (Рубин и Сапфир)",
      "kk": "Корунд (Рубин мен Сапфир)"
    },
    "scientificName": {
      "en": "Aluminum Oxide",
      "ru": "Оксид алюминия",
      "kk": "Алюминий оксиді"
    },
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
    "atoms": {
      "Ca": 1,
      "F": 2
    },
    "name": {
      "en": "Fluorite (Fluorspar)",
      "ru": "Флюорит (Плавиковый шпат)",
      "kk": "Флюорит (Балқытқыш шпат)"
    },
    "scientificName": {
      "en": "Calcium Fluoride",
      "ru": "Фторид кальция",
      "kk": "Кальций фториді"
    },
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
    "atoms": {
      "C": 4,
      "H": 10
    },
    "name": {
      "en": "Butane",
      "ru": "Бутан",
      "kk": "Бутан"
    },
    "scientificName": {
      "en": "Butane",
      "ru": "Бутан",
      "kk": "Бутан"
    },
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
    "atoms": {
      "H": 3,
      "P": 1,
      "O": 4
    },
    "name": {
      "en": "Phosphoric Acid",
      "ru": "Фосфорная кислота",
      "kk": "Фосфор қышқылы"
    },
    "scientificName": {
      "en": "Orthophosphoric Acid",
      "ru": "Ортофосфорная кислота",
      "kk": "Ортофосфор қышқылы"
    },
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
    "atoms": {
      "C": 3,
      "H": 6,
      "O": 1
    },
    "name": {
      "en": "Acetone",
      "ru": "Ацетон",
      "kk": "Ацетон"
    },
    "scientificName": {
      "en": "Propan-2-one",
      "ru": "Диметилкетон (Пропанон)",
      "kk": "Диметилкетон (Пропанон)"
    },
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
    "atoms": {
      "Ag": 1,
      "Cl": 1
    },
    "name": {
      "en": "Silver Chloride",
      "ru": "Хлорид серебра",
      "kk": "Күміс хлориді"
    },
    "scientificName": {
      "en": "Silver(I) Chloride",
      "ru": "Хлорид серебра(I)",
      "kk": "Күміс(I) хлориді"
    },
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
    "atoms": {
      "Au": 1
    },
    "name": {
      "en": "Pure Gold Leaf",
      "ru": "Сусальное золото",
      "kk": "Таза алтын (Алтын жалату)"
    },
    "scientificName": {
      "en": "Elemental Gold",
      "ru": "Золото самородное",
      "kk": "Табиғи алтын"
    },
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
  },
  {
    "id": "acetylene",
    "formula": "C₂H₂",
    "formulaAscii": "C2H2",
    "atoms": {
      "C": 2,
      "H": 2
    },
    "name": {
      "en": "Acetylene Gas",
      "ru": "Ацетилен",
      "kk": "Ацетилен"
    },
    "scientificName": {
      "en": "Ethyne",
      "ru": "Этин",
      "kk": "Этин"
    },
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
    "atoms": {
      "Ca": 1,
      "O": 2,
      "H": 2
    },
    "name": {
      "en": "Slaked Lime",
      "ru": "Гашёная известь",
      "kk": "Сөндірілген әк"
    },
    "scientificName": {
      "en": "Calcium Hydroxide",
      "ru": "Гидроксид кальция",
      "kk": "Кальций гидроксиді"
    },
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
    "atoms": {
      "H": 2,
      "C": 1,
      "O": 3
    },
    "name": {
      "en": "Carbonic Acid",
      "ru": "Угольная кислота",
      "kk": "Көмір қышқылы"
    },
    "scientificName": {
      "en": "Carbonic Acid",
      "ru": "Угольная кислота",
      "kk": "Көмір қышқылы"
    },
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
    "atoms": {
      "C": 12,
      "H": 22,
      "O": 11
    },
    "name": {
      "en": "Table Sugar (Sucrose)",
      "ru": "Сахар (Сахароза)",
      "kk": "Ас қанты (Сахароза)"
    },
    "scientificName": {
      "en": "Sucrose",
      "ru": "Сахароза",
      "kk": "Сахароза"
    },
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
    "atoms": {
      "S": 1,
      "O": 2
    },
    "name": {
      "en": "Sulfur Dioxide",
      "ru": "Диоксид серы",
      "kk": "Күкірт диоксиді"
    },
    "scientificName": {
      "en": "Sulfur Dioxide",
      "ru": "Диоксид серы (сернистый газ)",
      "kk": "Күкірт диоксиді (күкіртті газ)"
    },
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
    "atoms": {
      "Li": 1,
      "O": 1,
      "H": 1
    },
    "name": {
      "en": "Lithium Hydroxide",
      "ru": "Гидроксид лития",
      "kk": "Литий гидроксиді"
    },
    "scientificName": {
      "en": "Lithium Hydroxide",
      "ru": "Гидроксид лития",
      "kk": "Литий гидроксиді"
    },
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
    "atoms": {
      "Cu": 1
    },
    "name": {
      "en": "Pure Copper Nugget",
      "ru": "Самородная медь",
      "kk": "Табиғи мыс кесегі"
    },
    "scientificName": {
      "en": "Elemental Copper",
      "ru": "Медь самородная",
      "kk": "Табиғи мыс"
    },
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
    "atoms": {
      "C": 1
    },
    "name": {
      "en": "Diamond / Graphite",
      "ru": "Алмаз / Графит",
      "kk": "Алмас / Графит"
    },
    "scientificName": {
      "en": "Allotropic Carbon",
      "ru": "Аллотропный углерод",
      "kk": "Аллотропиялық көміртек"
    },
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
  },
  {
    "id": "potassium-permanganate",
    "formula": "KMnO₄",
    "formulaAscii": "KMnO4",
    "atoms": {
      "K": 1,
      "Mn": 1,
      "O": 4
    },
    "name": {
      "en": "Potassium Permanganate",
      "ru": "Перманганат калия (Марганцовка)",
      "kk": "Калий перманганаты (Марганцовка)"
    },
    "scientificName": {
      "en": "Potassium Manganate(VII)",
      "ru": "Перманганат калия",
      "kk": "Калий перманганаты"
    },
    "category": "household",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#a855f7",
    "description": {
      "en": "Deep purple crystalline salt and strong oxidizing agent. Known worldwide for antiseptic medical rinses and theatrical 'chemical chameleon' oxidation experiments.",
      "ru": "Темно-фиолетовые кристаллы с металлическим блеском, мощный окислитель. Знаменитая домашняя 'марганцовка' для дезинфекции и опытов 'химический хамелеон'.",
      "kk": "Күшті тотықтырғыш, қара-күлгін кристалды зат. Медицинада антисептик ретінде және химиялық тәжірибелерде кең қолданылатын әйгілі 'марганцовка'."
    },
    "realWorldUse": {
      "en": "Water purification, antiseptic wound treatment, organic synthesis, survival fire starting",
      "ru": "Обеззараживание воды, промывание ран, синтез органики, разведение огня выживальщиками",
      "kk": "Суды залалсыздандыру, жараларды емдеу, органикалық синтез, от жағу"
    },
    "funFact": {
      "en": "When reacted with glycerin, potassium permanganate spontaneously bursts into bright purple flames after a few seconds!",
      "ru": "При смешивании с глицерином марганцовка самовоспламеняется через несколько секунд ярким фиолетовым пламенем!",
      "kk": "Глицеринмен араластырған кезде марганцовка бірнеше секундтан кейін ашық күлгін жалынмен өздігінен тұтанады!"
    }
  },
  {
    "id": "potassium-dichromate",
    "formula": "K₂Cr₂O₇",
    "formulaAscii": "K2Cr2O7",
    "atoms": {
      "K": 2,
      "Cr": 2,
      "O": 7
    },
    "name": {
      "en": "Potassium Dichromate",
      "ru": "Дихромат калия (Хромпик)",
      "kk": "Калий дихроматы (Хромпик)"
    },
    "scientificName": {
      "en": "Potassium Dichromate(VI)",
      "ru": "Дихромат калия",
      "kk": "Калий дихроматы"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#f97316",
    "description": {
      "en": "Bright red-orange crystalline salt used as a benchmark oxidizing agent and classical component of chromic acid cleaning baths.",
      "ru": "Ярко-оранжевые кристаллы, классический хромпик. Сильнейший окислитель, компонент хромовой смеси для мытья химической посуды.",
      "kk": "Ашық қызғылт сары кристалдар, химиялық ыдыстарды жууға арналған хром қоспасының негізгі компоненті және күшті тотықтырғыш."
    },
    "realWorldUse": {
      "en": "Leather tanning, pyrotechnics, screen printing, laboratory glassware cleaning mixtures",
      "ru": "Дубление кожи, пиротехника, фотография, хромовая смесь для идеальной очистки стекла",
      "kk": "Тері илеу, пиротехника, фотография, шыны ыдыстарды тазалауға арналған хром қоспасы"
    },
    "funFact": {
      "en": "In early breathalyzers, orange potassium dichromate turned green when it oxidized alcohol vapors in a driver's breath!",
      "ru": "В первых алкотестерах оранжевый дихромат калия зеленел при контакте с парами спирта в дыхании водителя!",
      "kk": "Алғашқы алкотестерлерде жүргізушінің деміндегі спирт буымен әрекеттескенде оранжевый хромпик жасыл түске боялатын!"
    }
  },
  {
    "id": "potassium-chromate",
    "formula": "K₂CrO₄",
    "formulaAscii": "K2CrO4",
    "atoms": {
      "K": 2,
      "Cr": 1,
      "O": 4
    },
    "name": {
      "en": "Potassium Chromate",
      "ru": "Хромат калия",
      "kk": "Калий хроматы"
    },
    "scientificName": {
      "en": "Potassium Chromate(VI)",
      "ru": "Хромат калия",
      "kk": "Калий хроматы"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#eab308",
    "description": {
      "en": "Canary-yellow crystalline salt. In acidic solutions it converts into orange dichromate, showing a classic reversible equilibrium.",
      "ru": "Ярко-желтые кристаллы. В кислой среде обратимо переходит в оранжевый дихромат, иллюстрируя принцип Ле Шателье.",
      "kk": "Ашық сары кристалдар. Қышқыл ортада Ле Шателье принципі бойынша қайтымды түрде қызғылт сары дихроматқа айналады."
    },
    "realWorldUse": {
      "en": "Indicator in argentometric titration (Mohr method), textile dyeing, rust inhibitor",
      "ru": "Индикатор в методе Мора (титрование серебра), крашение тканей, защита от коррозии",
      "kk": "Күмісті титрлеу индикаторы (Мор әдісі), маталарды бояу, тот басудан қорғау"
    },
    "funFact": {
      "en": "Adding acid turns yellow chromate into orange dichromate; adding base immediately restores the canary yellow color!",
      "ru": "Добавление кислоты превращает желтый раствор в оранжевый, а добавление щелочи мгновенно возвращает желтый цвет!",
      "kk": "Қышқыл қосқанда сары ерітінді қызғылт сарыға, ал сілті қосқанда қайтадан сары түске айналады!"
    }
  },
  {
    "id": "barium-sulfate",
    "formula": "BaSO₄",
    "formulaAscii": "BaSO4",
    "atoms": {
      "Ba": 1,
      "S": 1,
      "O": 4
    },
    "name": {
      "en": "Barium Sulfate",
      "ru": "Сульфат бария",
      "kk": "Барий сульфаты"
    },
    "scientificName": {
      "en": "Barium Sulfate",
      "ru": "Сульфат бария",
      "kk": "Барий сульфаты"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#ffffff",
    "description": {
      "en": "Extremely insoluble white heavy mineral (Barite). Because it does not dissolve in gastric acids, it is safely ingested as an X-ray contrast agent.",
      "ru": "Сверхнерастворимый белый тяжелый осадок (минерал барит). Не растворяется даже в сильных кислотах, поэтому безопасен как контраст для рентгена желудка.",
      "kk": "Өте ерімейтін ақ түсті ауыр тұнба (барит минералы). Асқазан қышқылында да ерімейтіндіктен, асқазанды рентгенге түсіруде қауіпсіз контраст ретінде ішіледі."
    },
    "realWorldUse": {
      "en": "Medical X-ray imaging 'barium meal', drilling fluid weighting agent, premium white paint pigment",
      "ru": "Рентгеноконтрастная 'бариевая каша', утяжелитель буровых растворов на нефтяных вышках, белила",
      "kk": "Медициналық рентгендік контраст, мұнай бұрғылау ерітінділерінің ауырлатқышы, ақ бояу"
    },
    "funFact": {
      "en": "Free barium ions are highly poisonous, but barium sulfate is so insoluble that humans can drink a whole cup of it without absorbing any toxic ions!",
      "ru": "Ионы бария крайне ядовиты, но сульфат бария настолько нерастворим, что человек может выпить целый стакан без вреда!",
      "kk": "Барий иондары өте улы, бірақ барий сульфатының ерімейтіндігі сонша, адам оны бір стақан ішсе де ағзасына бірде-бір улы ион сіңбейді!"
    }
  },
  {
    "id": "silver-nitrate",
    "formula": "AgNO₃",
    "formulaAscii": "AgNO3",
    "atoms": {
      "Ag": 1,
      "N": 1,
      "O": 3
    },
    "name": {
      "en": "Silver Nitrate",
      "ru": "Нитрат серебра (Ляпис)",
      "kk": "Күміс нитраты (Ляпис)"
    },
    "scientificName": {
      "en": "Silver(I) Nitrate",
      "ru": "Нитрат серебра",
      "kk": "Күміс(I) нитраты"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "planar",
    "glowColor": "#cbd5e1",
    "description": {
      "en": "Colorless water-soluble silver salt. The gold standard analytical reagent for detecting halides (Cl⁻, Br⁻, I⁻) and historic cauterizing 'lunar caustic' pencil.",
      "ru": "Растворимая соль серебра, медицинский 'адский камень' (ляпис). Главный реактив аналитической химии для открытия хлоридов, бромидов и йодидов.",
      "kk": "Еритін күміс тұзы, медициналық 'ляпис қарындашы'. Хлорид, бромид және йодид иондарын анықтауға арналған негізгі сапалық реактив."
    },
    "realWorldUse": {
      "en": "Mirror silvering reactions, photographic emulsion, medical cautery, analytical chemistry",
      "ru": "Реакция серебряного зеркала, производство зеркал, фотоэмульсии, прижигание бородавок",
      "kk": "Күміс айна реакциясы, айна жасау, фотоэмульсия, сүйелдерді күйдіру"
    },
    "funFact": {
      "en": "When spilled on skin, silver nitrate leaves indelible black stains because light reduces it into metallic silver nanoparticles!",
      "ru": "Попадая на кожу, оставляет несмываемые черные пятна: свет восстанавливает его до наночастиц металлического серебра!",
      "kk": "Теріге тигенде кетпейтін қара дақ қалдырады, өйткені жарықтың әсерінен ол металл күмістің нанобөлшектеріне дейін тотықсызданады!"
    }
  },
  {
    "id": "lead-iodide",
    "formula": "PbI₂",
    "formulaAscii": "PbI2",
    "atoms": {
      "Pb": 1,
      "I": 2
    },
    "name": {
      "en": "Lead(II) Iodide",
      "ru": "Иодид свинца(II)",
      "kk": "Қорғасын(II) йодиді"
    },
    "scientificName": {
      "en": "Lead Diiodide",
      "ru": "Иодид свинца(II)",
      "kk": "Қорғасын дийодиді"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#facc15",
    "description": {
      "en": "Bright golden-yellow crystalline compound famous for the magical 'Golden Rain' experiment: dissolves in boiling water and crystallizes into shimmering gold flakes upon cooling.",
      "ru": "Золотисто-желтые кристаллы, звезда опыта 'Золотой дождь': растворяется в кипятке и при остывании выпадает мерцающими золотыми чешуйками.",
      "kk": "Ашық алтын түсті кристалдар. Әйгілі 'Алтын жаңбыр' тәжірибесінің жұлдызы: қайнаған суда еріп, суыған кезде жарқыраған алтын қабыршақтар болып тұнады."
    },
    "realWorldUse": {
      "en": "Perovskite high-efficiency solar cells, X-ray and gamma-ray detectors, historic artist pigment",
      "ru": "Перовскитные солнечные батареи нового поколения, детекторы гамма-излучения, золотистый пигмент",
      "kk": "Перовскиттік күн батареялары, гамма-сәулелену детекторы, алтын түстес пигмент"
    },
    "funFact": {
      "en": "Lead iodide crystals reflect light with such brilliance that the swirling solution looks exactly like swirling real 24-karat gold dust!",
      "ru": "Кристаллы иодида свинца отражают свет настолько ярко, что кружащийся раствор выглядит в точности как 24-каратная золотая пыль!",
      "kk": "Қорғасын йодидінің кристалдары жарықты сондай қатты шағылыстырады, оның ерітіндісі нағыз 24-караттық алтын шаңы сияқты жарқырайды!"
    }
  },
  {
    "id": "ammonium-chloride",
    "formula": "NH₄Cl",
    "formulaAscii": "NH4Cl",
    "atoms": {
      "N": 1,
      "H": 4,
      "Cl": 1
    },
    "name": {
      "en": "Ammonium Chloride",
      "ru": "Хлорид аммония (Нашатырь)",
      "kk": "Аммоний хлориді (Нашатырь)"
    },
    "scientificName": {
      "en": "Ammonium Chloride",
      "ru": "Хлорид аммония",
      "kk": "Аммоний хлориді"
    },
    "category": "household",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#93c5fd",
    "description": {
      "en": "White crystalline salt formed by combining ammonia and hydrogen chloride gases. Historic 'Sal Ammoniac' used in soldering fluxes and salty licorice candy.",
      "ru": "Белая кристаллическая соль, исторический нашатырь. Образуется густым белым дымом при встрече паров аммиака и соляной кислоты.",
      "kk": "Ақ кристалды тұз, тарихи нашатырь. Аммиак пен тұз қышқылының булары кездескенде қою ақ түтін болып түзіледі."
    },
    "realWorldUse": {
      "en": "Soldering flux for cleaning metal, Nordic salty licorice (Salmiakki), dry-cell batteries, fertilizer",
      "ru": "Флюс для пайки (очистка жала паяльника), соленая лакрица Салмиакки, сухие батарейки, удобрение",
      "kk": "Дәнекерлеу флюсі, солтүстік халықтарының салмиак кәмпиттері, құрғақ батареялар, тыңайтқыш"
    },
    "funFact": {
      "en": "When heated, ammonium chloride doesn't melt — it sublimes directly into ammonia and HCl vapors, and then deposits back on cold surfaces!",
      "ru": "При нагревании нашатырь не плавится, а возгоняется: распадается на газы NH₃ и HCl, а затем снова оседает кристаллами на холодном стекле!",
      "kk": "Қыздырған кезде нашатырь ерімей бірден буланады: NH₃ пен HCl газдарына ыдырап, салқын бетке тигенде қайтадан кристалға айналады!"
    }
  },
  {
    "id": "ammonium-nitrate",
    "formula": "NH₄NO₃",
    "formulaAscii": "NH4NO3",
    "atoms": {
      "N": 2,
      "H": 4,
      "O": 3
    },
    "name": {
      "en": "Ammonium Nitrate",
      "ru": "Нитрат аммония (Аммиачная селитра)",
      "kk": "Аммоний нитраты (Аммиак селитрасы)"
    },
    "scientificName": {
      "en": "Ammonium Nitrate",
      "ru": "Нитрат аммония",
      "kk": "Аммоний нитраты"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#60a5fa",
    "description": {
      "en": "Major nitrogen-rich agricultural fertilizer. Dissolving it in water causes a dramatic endothermic temperature drop, making it the active ingredient in instant cold packs.",
      "ru": "Главное азотное удобрение планеты. При растворении в воде поглощает огромное количество тепла (эндотермическая реакция), охлаждая воду почти до 0°C.",
      "kk": "Әлемдегі ең басты азотты тыңайтқыш. Суда еріген кезде жылуды қатты жұтып (эндотермиялық реакция), судың температурасын 0°C-қа дейін түсіреді."
    },
    "realWorldUse": {
      "en": "High-yield crop fertilization, instant medical cold packs, mining explosives (ANFO)",
      "ru": "Удобрение пшеницы и кукурузы, мгновенные охлаждающие пакеты первой помощи, взрывчатка ANFO",
      "kk": "Егістіктерді тыңайту, жедел жәрдемнің суытқыш пакеттері, тау-кен өндірісіндегі ANFO жарылғышы"
    },
    "funFact": {
      "en": "When carefully heated to 170°C, ammonium nitrate decomposes cleanly into water vapor and Laughing Gas (N₂O)!",
      "ru": "При осторожном нагревании до 170°C аммиачная селитра разлагается на водяной пар и Веселящий газ (N₂O)!",
      "kk": "170°C дейін абайлап қыздырған кезде аммиак селитрасы су буы мен көңілді газға (N₂O) ыдырайды!"
    }
  },
  {
    "id": "ammonium-sulfate",
    "formula": "(NH₄)₂SO₄",
    "formulaAscii": "N2H8SO4",
    "atoms": {
      "N": 2,
      "H": 8,
      "S": 1,
      "O": 4
    },
    "name": {
      "en": "Ammonium Sulfate",
      "ru": "Сульфат аммония",
      "kk": "Аммоний сульфаты"
    },
    "scientificName": {
      "en": "Diammonium Sulfate",
      "ru": "Сульфат диаммония",
      "kk": "Диаммоний сульфаты"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#818cf8",
    "description": {
      "en": "White inorganic salt providing both nitrogen and sulfur nutrients to alkaline soils. Extensively used in biochemistry for protein precipitation (salting out).",
      "ru": "Важнейшее минеральное удобрение с азотом и серой для щелочных почв. В биохимии используется для 'высаливания' и очистки белков.",
      "kk": "Сілтілі топырақтарға арналған азот пен күкірті бар маңызды тыңайтқыш. Биохимияда ақуыздарды тазарту және тұндыру үшін қолданылады."
    },
    "realWorldUse": {
      "en": "Soil acidification fertilizer, biochemistry protein purification, flame retardant sprays",
      "ru": "Подкормка сельхозкультур, фракционирование ферментов и белков, огнезащитные составы",
      "kk": "Ауыл шаруашылығы дақылдарын қоректендіру, ферменттер мен ақуыздарды бөлу, өртке қарсы құрамдар"
    },
    "funFact": {
      "en": "Ammonium sulfate is added to bread dough in industrial bakeries as yeast food to make bread rise faster!",
      "ru": "На хлебозаводах сульфат аммония добавляют в тесто как питательную среду для дрожжей, чтобы хлеб быстрее поднимался!",
      "kk": "Нан зауыттарында қамыр тезірек көтерілуі үшін ашытқының қорегі ретінде аммоний сульфаты қосылады!"
    }
  },
  {
    "id": "washing-soda",
    "formula": "Na₂CO₃",
    "formulaAscii": "Na2CO3",
    "atoms": {
      "Na": 2,
      "C": 1,
      "O": 3
    },
    "name": {
      "en": "Washing Soda",
      "ru": "Кальцинированная сода",
      "kk": "Кальциленген сода (Жуғыш сода)"
    },
    "scientificName": {
      "en": "Sodium Carbonate",
      "ru": "Карбонат натрия",
      "kk": "Натрий карбонаты"
    },
    "category": "household",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#38bdf8",
    "description": {
      "en": "Water-soluble sodium salt of carbonic acid. A cornerstone chemical of the Solvay process, essential for manufacturing all modern glass, soaps, and detergents.",
      "ru": "Белый порошок, получаемый по методу Сольве. Ключевой промышленный компонент для варки любого стекла, мыла и стиральных порошков.",
      "kk": "Ақ ұнтақ, Сольве әдісімен өндірілетін негізгі химиялық зат. Әйнек қайнатудың, сабын мен кір жуғыш ұнтақтар жасаудың тірегі."
    },
    "realWorldUse": {
      "en": "Window and container glass production, laundry detergents, water softening, swimming pool pH booster",
      "ru": "Производство оконного стекла и бутылок, стиральные порошки, умягчение жесткой воды, регулировка pH",
      "kk": "Терезе әйнегі мен бөтелкелер өндірісі, кір жуғыш ұнтақтар, кермек суды жұмсарту, бассейндердің pH деңгейін реттеу"
    },
    "funFact": {
      "en": "More than half of the world's 50 million tons of sodium carbonate produced each year goes directly into molten furnaces to make glass!",
      "ru": "Более половины из 50 миллионов тонн соды, производимой в мире ежегодно, отправляется в печи для варки стекла!",
      "kk": "Әлемде жыл сайын өндірілетін 50 миллион тонна соданың жартысынан көбі әйнек қайнату пештеріне жіберіледі!"
    }
  },
  {
    "id": "potassium-carbonate",
    "formula": "K₂CO₃",
    "formulaAscii": "K2CO3",
    "atoms": {
      "K": 2,
      "C": 1,
      "O": 3
    },
    "name": {
      "en": "Potash",
      "ru": "Поташ (Карбонат калия)",
      "kk": "Поташ (Калий карбонаты)"
    },
    "scientificName": {
      "en": "Potassium Carbonate",
      "ru": "Карбонат калия",
      "kk": "Калий карбонаты"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#c084fc",
    "description": {
      "en": "White hygroscopic salt historically leached from hardwood ashes in iron pots (giving rise to the name 'pot-ash'). Indispensable for crystal glass and liquid soaps.",
      "ru": "Белая соль, которую веками вымывали из древесной золы в чугунных котлах (отсюда 'пот-аш'). Незаменима для хрусталя и жидкого мыла.",
      "kk": "Ерте заманда ағаш күлін қазандарда қайнату арқылы алынған ақ тұз (осыдан 'пот-аш' атауы шыққан). Хрусталь әйнек пен сұйық сабын өндіруге қажет."
    },
    "realWorldUse": {
      "en": "Fine crystal glassware, optical lenses, soft liquid soaps, cocoa Dutch processing",
      "ru": "Варка оптического стекла и хрусталя, мягкое зеленое мыло, алкализация какао (шоколад)",
      "kk": "Оптикалық шыны мен хрусталь қайнату, жұмсақ сұйық сабын, какао өңдеу (шоколад өндірісі)"
    },
    "funFact": {
      "en": "The chemical symbol for Potassium, 'K', comes from the Neo-Latin word 'Kalium', which itself originated from the Arabic word for calcined ash 'al-qalyah'!",
      "ru": "Символ калия 'K' происходит от арабского слова 'аль-калья' (обожженная зола), от которого произошло и слово 'щелочь' (alkali)!",
      "kk": "Калийдің 'K' таңбасы арабтың күйдірілген күлді білдіретін 'әл-қали' сөзінен шыққан, ал одан бүкіл әлемге 'сілті' (alkali) сөзі тараған!"
    }
  },
  {
    "id": "sodium-sulfate",
    "formula": "Na₂SO₄",
    "formulaAscii": "Na2SO4",
    "atoms": {
      "Na": 2,
      "S": 1,
      "O": 4
    },
    "name": {
      "en": "Glauber's Salt (Sodium Sulfate)",
      "ru": "Сульфат натрия (Глауберова соль)",
      "kk": "Натрий сульфаты (Глаубер тұзы)"
    },
    "scientificName": {
      "en": "Sodium Sulfate",
      "ru": "Сульфат натрия",
      "kk": "Натрий сульфаты"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#67e8f9",
    "description": {
      "en": "White crystalline mineral discovered in 1625 by Johann Glauber (Sal Mirabilis / 'Miraculous Salt'). A primary filler in powdered laundry detergents and Kraft papermaking.",
      "ru": "Знаменитая глауберова соль (мирабилит). Главный наполнитель современных стиральных порошков и реагент для крафт-варки прочной бумаги.",
      "kk": "Атақты глаубер тұзы (мирабилит). Қазіргі кір жуғыш ұнтақтардың негізгі толтырғышы және мықты крафт қағазын жасаудың басты компоненті."
    },
    "realWorldUse": {
      "en": "Powdered detergents filler, Kraft process wood pulping, glass fining agent, thermal energy storage",
      "ru": "Основа стиральных порошков (до 50% массы), варка прочного картона, стеклоделие, теплоаккумуляторы",
      "kk": "Кір жуғыш ұнтақтардың негізі (салмағының 50%-на дейін), мықты картон қайнату, әйнек өндірісі"
    },
    "funFact": {
      "en": "Kazakhstan has one of the world's richest natural deposits of sodium sulfate in the Aral region and shallow salt lakes!",
      "ru": "В Казахстане в районе Приаралья и соленых озер расположены одни из крупнейших в мире природных месторождений мирабилита!",
      "kk": "Қазақстанның Арал маңында және тұзды көлдерінде глаубер тұзының (мирабилиттің) әлемдегі ең ірі табиғи кен орындары орналасқан!"
    }
  },
  {
    "id": "epsom-salt",
    "formula": "MgSO₄",
    "formulaAscii": "MgSO4",
    "atoms": {
      "Mg": 1,
      "S": 1,
      "O": 4
    },
    "name": {
      "en": "Epsom Salt (Magnesium Sulfate)",
      "ru": "Английская соль (Сульфат магния)",
      "kk": "Ағылшын тұзы (Магний сульфаты)"
    },
    "scientificName": {
      "en": "Magnesium Sulfate",
      "ru": "Сульфат магния",
      "kk": "Магний сульфаты"
    },
    "category": "household",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#a7f3d0",
    "description": {
      "en": "Relaxing bath salt and vital medical electrolyte. Named after the natural mineral spring in Epsom, England, where it was first discovered in 1618.",
      "ru": "Знаменитая английская соль для успокаивающих ванн и медицины. Восполняет дефицит магния, снимает мышечные спазмы и судороги.",
      "kk": "Бұлшықеттерді босаңсытатын ванналар мен медицинаға арналған әйгілі ағылшын тұзы. Ағзадағы магний жетіспеушілігін қалпына келтіреді."
    },
    "realWorldUse": {
      "en": "Therapeutic bath soaks, intravenous preeclampsia treatment, agricultural chlorophyll booster for crops",
      "ru": "Восстанавливающие ванны для спортсменов, скорая помощь при гипертонии, удобрение для зелени",
      "kk": "Спортшыларға арналған емдік ванналар, гипертониядағы жедел жәрдем, өсімдіктерді тыңайту"
    },
    "funFact": {
      "en": "Adding Epsom salt to garden roses makes them produce richer colors and larger blooms because magnesium sits at the exact center of every chlorophyll molecule!",
      "ru": "Полив роз английской солью делает бутоны ярче и пышнее, ведь магний находится в самом сердце каждой молекулы хлорофилла!",
      "kk": "Раушангүлдерге ағылшын тұзын себу олардың түсін құлпыртып, гүлін үлкейтеді, өйткені магний әрбір хлорофилл молекуласының қақ ортасында орналасқан!"
    }
  },
  {
    "id": "gypsum-calcium-sulfate",
    "formula": "CaSO₄",
    "formulaAscii": "CaSO4",
    "atoms": {
      "Ca": 1,
      "S": 1,
      "O": 4
    },
    "name": {
      "en": "Gypsum (Calcium Sulfate)",
      "ru": "Гипс / Алебастр (Сульфат кальция)",
      "kk": "Гипс / Алебастр (Кальций сульфаты)"
    },
    "scientificName": {
      "en": "Calcium Sulfate",
      "ru": "Сульфат кальция",
      "kk": "Кальций сульфаты"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#fef08a",
    "description": {
      "en": "Plaster mineral that sets into rock-hard solid when mixed with water. Used since the Pharaohs of Ancient Egypt to construct monuments, casts, and drywall.",
      "ru": "Строительный гипс и алебастр. При смешивании с водой быстро твердеет с выделением тепла. Основа штукатурки, медицинских лангет и гипсокартона.",
      "kk": "Құрылыс гипсі мен алебастр. Сумен араластырғанда жылу бөле тез қатады. Гипсокартон, медициналық гипс және сылақтардың негізі."
    },
    "realWorldUse": {
      "en": "Drywall boards for buildings, medical broken-bone casts, architectural sculpture, tofu coagulant",
      "ru": "Гипсокартон для стен, медицинские гипсовые повязки при переломах, скульптура, сгуститель тофу",
      "kk": "Қабырға гипсокартоны, сүйек сынықтарына арналған медициналық гипс, мүсін өнері, тофу ірімшігі"
    },
    "funFact": {
      "en": "When gypsum is baked at 150°C, it loses 75% of its water into Plaster of Paris. When water is added back, it magically re-grows interlocked needle crystals and hardens!",
      "ru": "При обжиге гипс теряет воду и превращается в алебастр. Добавив воду обратно, вы запускаете мгновенный рост переплетающихся кристаллов-иголок!",
      "kk": "Қыздырған кезде гипс суын жоғалтып, алебастрға айналады. Оған қайта су қосқанда, бір-бірімен өрілген кристалды инелер өсіп, лезде тас болып қатады!"
    }
  },
  {
    "id": "iron-ii-sulfate",
    "formula": "FeSO₄",
    "formulaAscii": "FeSO4",
    "atoms": {
      "Fe": 1,
      "S": 1,
      "O": 4
    },
    "name": {
      "en": "Iron(II) Sulfate (Green Vitriol)",
      "ru": "Железный купорос",
      "kk": "Темір купоросы"
    },
    "scientificName": {
      "en": "Iron(II) Sulfate",
      "ru": "Сульфат железа(II)",
      "kk": "Темір(II) сульфаты"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#86efac",
    "description": {
      "en": "Pale green crystals historically called 'Copperas' or 'Green Vitriol'. The essential chemical in Medieval iron-gall ink used to pen manuscripts and the Magna Carta.",
      "ru": "Бледно-зеленые кристаллы, знаменитый железный купорос. Главный компонент старинных железо-галловых чернил, которыми написаны средневековые манускрипты.",
      "kk": "Бозғылт жасыл кристалдар, атақты темір купоросы. Орта ғасырлық қолжазбалар мен тарихи құжаттар жазылған ескі сияның негізгі құрамдас бөлігі."
    },
    "realWorldUse": {
      "en": "Garden fungicide and moss killer, treatment for iron-deficiency anemia, water treatment flocculant",
      "ru": "Обработка деревьев от мхов и грибка в саду, лечение анемии в таблетках железа, очистка стоков",
      "kk": "Бау-бақшаны мүк пен саңырауқұлақтан тазарту, анемияны емдейтін темір дәрілері, ағынды суларды тазарту"
    },
    "funFact": {
      "en": "Leonardo da Vinci, Shakespeare, and Johann Sebastian Bach all wrote their masterpieces with ink made from green vitriol and oak apples!",
      "ru": "Леонардо да Винчи, Шекспир и Бах писали свои шедевры чернилами из железного купороса и дубовых орешков (галлов)!",
      "kk": "Леонардо да Винчи, Шекспир және Бах өздерінің ұлы туындыларын темір купоросы мен емен галлынан жасалған сиямен жазған!"
    }
  },
  {
    "id": "zinc-sulfate",
    "formula": "ZnSO₄",
    "formulaAscii": "ZnSO4",
    "atoms": {
      "Zn": 1,
      "S": 1,
      "O": 4
    },
    "name": {
      "en": "Zinc Sulfate (White Vitriol)",
      "ru": "Цинковый купорос",
      "kk": "Мырыш купоросы"
    },
    "scientificName": {
      "en": "Zinc Sulfate",
      "ru": "Сульфат цинка",
      "kk": "Мырыш сульфаты"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#e2e8f0",
    "description": {
      "en": "Colorless transparent crystals known as White Vitriol. A crucial dietary trace-element source for the human immune system and agricultural micronutrient.",
      "ru": "Белые прозрачные кристаллы, цинковый купорос. Источник жизненно важного цинка для иммунитета человека, заживления ран и роста растений.",
      "kk": "Түссіз мөлдір кристалдар, мырыш купоросы. Адамның иммундық жүйесіне, жаралардың жазылуына және өсімдіктердің өсуіне қажетті мырыш көзі."
    },
    "realWorldUse": {
      "en": "Dietary zinc supplements, rayonne fiber production, animal feed additive, eye drops",
      "ru": "Капли для глаз, пищевые добавки с цинком для иммунитета, корма для животных, вискозные волокна",
      "kk": "Көз тамшылары, иммунитетке арналған мырыш қоспалары, мал азығы, вискоза талшықтары"
    },
    "funFact": {
      "en": "Zinc sulfate eye drops have been used for over 150 years as a mild soothing astringent and antiseptic for tired eyes!",
      "ru": "Капли с сульфатом цинка используются врачами уже более 150 лет как мягкое антисептическое средство при усталости глаз!",
      "kk": "Мырыш сульфатының тамшылары 150 жылдан астам уақыт бойы көздің шаршауын басатын жұмсақ антисептик ретінде қолданылып келеді!"
    }
  },
  {
    "id": "calcium-chloride",
    "formula": "CaCl₂",
    "formulaAscii": "CaCl2",
    "atoms": {
      "Ca": 1,
      "Cl": 2
    },
    "name": {
      "en": "Calcium Chloride",
      "ru": "Хлорид кальция",
      "kk": "Кальций хлориді"
    },
    "scientificName": {
      "en": "Calcium Dichloride",
      "ru": "Хлорид кальция",
      "kk": "Кальций дихлориді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#38bdf8",
    "description": {
      "en": "Aggressively hygroscopic salt that melts ice down to -30°C by releasing heat as it dissolves. Absorbs so much moisture from air that it turns into liquid brine.",
      "ru": "Белые гранулы, поглощающие влагу из воздуха до превращения в лужу. Выделяет тепло при растворении, плавит лед на дорогах даже в лютый мороз до -30°C.",
      "kk": "Ауадан ылғалды өзіне қарқынды тартып, ерітіндіге айналатын ақ түйіршіктер. Ерігенде жылу бөліп, жолдағы мұзды -30°C аязда да ерітеді."
    },
    "realWorldUse": {
      "en": "Sub-zero highway de-icing, household closet desiccants, cheese making firming agent, emergency medicine",
      "ru": "Борьба с гололедом на автотрассах, осушители воздуха в шкафах, сыроделие (створаживание), медицина",
      "kk": "Күрежолдардағы көктайғақпен күрес, шкафтарға арналған ылғал жұтқыштар, ірімшік қайнату, медицина"
    },
    "funFact": {
      "en": "While regular table salt stops melting ice at -10°C, calcium chloride melts ice down to -30°C because its dissolution is strongly exothermic!",
      "ru": "Обычная соль перестает топить лед уже при -10°C, а хлорид кальция работает до -30°C, так как сам разогревает воду при растворении!",
      "kk": "Кәдімгі ас тұзы -10°C-та мұзды ерітуді тоқтатса, кальций хлориді -30°C-қа дейін жұмыс істейді, өйткені ол ерігенде қатты қызады!"
    }
  },
  {
    "id": "magnesium-chloride",
    "formula": "MgCl₂",
    "formulaAscii": "MgCl2",
    "atoms": {
      "Mg": 1,
      "Cl": 2
    },
    "name": {
      "en": "Magnesium Chloride (Bischofite)",
      "ru": "Хлорид магния (Бишофит)",
      "kk": "Магний хлориді (Бишофит)"
    },
    "scientificName": {
      "en": "Magnesium Dichloride",
      "ru": "Хлорид магния",
      "kk": "Магний дихлориді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#34d399",
    "description": {
      "en": "Mineral extracted from ancient sea beds (Bischofite) and the Dead Sea. The essential coagulant used in Japan (Nigari) to solidify soy milk into Tofu.",
      "ru": "Минерал древних морей (бишофит). Традиционный японский коагулянт 'нигари', превращающий соевое молоко в нежный сыр тофу.",
      "kk": "Ежелгі теңіздердің тұзы (бишофит). Жапонияда соя сүтін мәйекті тофу ірімшігіне айналдыратын дәстүрлі 'нигари' заты."
    },
    "realWorldUse": {
      "en": "Traditional Japanese tofu curdling (Nigari), dust control on dirt roads, magnesium metal production",
      "ru": "Приготовление тофу, подавление пыли на грунтовых дорогах, электролитическое получение магния",
      "kk": "Тофу ірімшігін жасау, қара жолдардағы шаңды басу, металл магнийін электролизбен алу"
    },
    "funFact": {
      "en": "The Dead Sea feels exceptionally oily and buoyant largely because of its extraordinarily high concentration of magnesium chloride!",
      "ru": "Вода Мертвого моря кажется маслянистой на ощупь и так легко держит человека именно из-за огромной концентрации хлорида магния!",
      "kk": "Өлі теңіз суының майлы сияқты сезілуі және адамды батырмай ұстап тұруы дәл осы магний хлоридінің аса жоғары шоғырлануына байланысты!"
    }
  },
  {
    "id": "iron-iii-chloride",
    "formula": "FeCl₃",
    "formulaAscii": "FeCl3",
    "atoms": {
      "Fe": 1,
      "Cl": 3
    },
    "name": {
      "en": "Iron(III) Chloride",
      "ru": "Хлорид железа(III) (Хлорное железо)",
      "kk": "Темір(III) хлориді"
    },
    "scientificName": {
      "en": "Iron Trichloride",
      "ru": "Хлорид железа(III)",
      "kk": "Темір трихлориді"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#d97706",
    "description": {
      "en": "Dark brown-amber crystals widely celebrated by electronics hobbyists and circuit board factories for dissolving unwanted copper to etch printed circuit boards (PCBs).",
      "ru": "Буро-коричневые кристаллы. Легендарное 'хлорное железо', которым радиолюбители и заводы травят медные дорожки на платах для электроники.",
      "kk": "Қоңыр кристалдар. Радиоәуесқойлар мен электроника зауыттары микросхемалар мен компьютерлік тақталардағы мысты ерітіп өрнектеу үшін пайдаланатын атақты тұз."
    },
    "realWorldUse": {
      "en": "Printed circuit board (PCB) copper etching, drinking water coagulation, sewage treatment",
      "ru": "Травление печатных плат электроники, коагулянт для очистки питьевой воды на водоканалах",
      "kk": "Электроника тақталарын химиялық өрнектеу, ауыз суды тазарту станцияларындағы коагулянт"
    },
    "funFact": {
      "en": "Almost every electronic device in your home — from smartphones to laptops — contains printed circuit boards that were etched using iron(III) chloride!",
      "ru": "Почти каждая микросхема в вашем смартфоне и компьютере была создана благодаря вытравливанию меди хлоридом железа(III)!",
      "kk": "Смартфоныңыз бен компьютеріңіздегі барлық дерлік электронды тақталар дәл осы темір(III) хлоридімен мысты еріту арқылы жасалған!"
    }
  },
  {
    "id": "copper-ii-chloride",
    "formula": "CuCl₂",
    "formulaAscii": "CuCl2",
    "atoms": {
      "Cu": 1,
      "Cl": 2
    },
    "name": {
      "en": "Copper(II) Chloride",
      "ru": "Хлорид меди(II)",
      "kk": "Мыс(II) хлориді"
    },
    "scientificName": {
      "en": "Copper Dichloride",
      "ru": "Хлорид меди(II)",
      "kk": "Мыс дихлориді"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#06b6d4",
    "description": {
      "en": "Yellow-brown anhydrous salt that turns brilliant emerald-cyan when hydrated with water. Colors firework flames dazzling blue-green.",
      "ru": "Бурые кристаллы, которые при растворении в воде дают ослепительный изумрудно-голубой цвет. Окрашивает пламя салютов в красивый сине-зеленый цвет.",
      "kk": "Суда ерігенде көз тартарлық ашық көгілдір-жасыл түс беретін қоңыр кристалдар. Отшашулардың жалынын көк-жасыл түске бояйды."
    },
    "realWorldUse": {
      "en": "Blue and green fireworks pyrotechnics, textile dyeing mordant, petroleum catalyst",
      "ru": "Синие и зеленые праздничные салюты, протрава для крашения тканей, катализатор в нефтехимии",
      "kk": "Көк және жасыл түсті мерекелік отшашулар, матаны бояу бекіткіші, мұнай химиясындағы катализатор"
    },
    "funFact": {
      "en": "Dissolving copper(II) chloride in water and adding aluminium foil triggers an energetic boiling reaction with metallic copper precipitation!",
      "ru": "Если бросить в раствор хлорида меди алюминиевую фольгу, начнется бурное кипение и хлопьями выпадет чистое красное металлическое золото меди!",
      "kk": "Мыс хлоридінің ерітіндісіне алюминий фольгасын салсаңыз, ерітінді қайнап, таза қызыл мыс металл күйінде бөлініп шығады!"
    }
  },
  {
    "id": "potassium-nitrate",
    "formula": "KNO₃",
    "formulaAscii": "KNO3",
    "atoms": {
      "K": 1,
      "N": 1,
      "O": 3
    },
    "name": {
      "en": "Potassium Nitrate (Saltpeter)",
      "ru": "Калийная селитра (Индийская селитра)",
      "kk": "Калий селитрасы"
    },
    "scientificName": {
      "en": "Potassium Nitrate",
      "ru": "Нитрат калия",
      "kk": "Калий нитраты"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#a855f7",
    "description": {
      "en": "The historic oxidizer of black gunpowder invented in 9th-century China. Also an essential high-potassium agricultural fertilizer and meat curing salt.",
      "ru": "Главный компонент черного дымного пороха, изменившего историю человечества. Премиальное азотно-калийное удобрение для садов и теплиц.",
      "kk": "Адамзат тарихын өзгерткен қара оқ-дәрінің басты тотықтырғышы. Бау-бақша мен жылыжайларға арналған сапалы азот-калий тыңайтқышы."
    },
    "realWorldUse": {
      "en": "Fireworks oxidizer, model rocket sugar propellant (R-Candy), greenhouse fertilizer, sensitive teeth toothpaste",
      "ru": "Пиротехника и фейерверки, карамельное ракетное топливо, зубная паста для чувствительных зубов",
      "kk": "Отшашулар мен пиротехника, зымырандардың карамель отыны, сезімтал тістерге арналған тіс пастасы"
    },
    "funFact": {
      "en": "Potassium nitrate is added to sensitive teeth toothpastes because potassium ions calm the nerve endings inside your tooth enamel!",
      "ru": "Нитрат калия добавляют в пасты для чувствительных зубов: ионы калия блокируют передачу болевых импульсов в зубных нервах!",
      "kk": "Калий нитраты сезімтал тістерге арналған пасталарға қосылады: калий иондары тіс жүйкесінің ауырсыну импульстерін бұғаттайды!"
    }
  },
  {
    "id": "potassium-chlorate",
    "formula": "KClO₃",
    "formulaAscii": "KClO3",
    "atoms": {
      "K": 1,
      "Cl": 1,
      "O": 3
    },
    "name": {
      "en": "Potassium Chlorate (Berthollet's Salt)",
      "ru": "Бертоллетова соль (Хлорат калия)",
      "kk": "Бертолле тұзы (Калий хлораты)"
    },
    "scientificName": {
      "en": "Potassium Chlorate",
      "ru": "Хлорат калия",
      "kk": "Калий хлораты"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#ec4899",
    "description": {
      "en": "Powerful oxidizing salt discovered in 1786 by Claude Louis Berthollet. The reactive chemical powering safety matches, smoke bombs, and emergency submarine oxygen candles.",
      "ru": "Легендарная бертоллетова соль. Мощнейший окислитель, обеспечивающий вспышку спичечной головки и выработку чистого кислорода на подлодках.",
      "kk": "Аңызға айналған бертолле тұзы. Сіріңке бастиегінің жануын және сүңгуір қайықтарда оттегі бөлуді қамтамасыз ететін аса қуатты тотықтырғыш."
    },
    "realWorldUse": {
      "en": "Safety match heads, colored pyrotechnic smoke bombs, submarine chemical oxygen generators",
      "ru": "Головки спичек, дымовые шашки, химические кислородные шашки на космических станциях и подлодках",
      "kk": "Сіріңке бастары, түтінді шашкалар, ғарыш станциялары мен сүңгуір қайықтардағы оттегі генераторлары"
    },
    "funFact": {
      "en": "Dropping a gummy bear candy into molten potassium chlorate causes an insane roaring, howling purple-violet jet of flame!",
      "ru": "Если бросить мармеладного мишку в расплавленную бертоллетову соль, начнется яростное ревущее фиолетовое пламя!",
      "kk": "Бертолле тұзының балқымасына мармеладты қонжықты тастасаңыз, ол күркіреген ашық күлгін от болып жарқырай жанады!"
    }
  },
  {
    "id": "potassium-iodide",
    "formula": "KI",
    "formulaAscii": "KI",
    "atoms": {
      "K": 1,
      "I": 1
    },
    "name": {
      "en": "Potassium Iodide",
      "ru": "Иодид калия",
      "kk": "Калий йодиді"
    },
    "scientificName": {
      "en": "Potassium Iodide",
      "ru": "Иодид калия",
      "kk": "Калий йодиді"
    },
    "category": "household",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#e0e7ff",
    "description": {
      "en": "White crystalline salt that protects the human thyroid gland against radioactive iodine-131 during nuclear emergencies. Catalyst for Elephant Toothpaste.",
      "ru": "Белые кристаллы, защищающие щитовидную железу человека от радиоактивного йода при авариях на АЭС. Главный катализатор шоу 'Слоновья зубная паста'.",
      "kk": "Атом станцияларындағы апат кезінде адамның қалқанша безін радиоактивті йодтан қорғайтын ақ кристалды тұз. 'Пілдің тіс пастасы' шоуының катализаторы."
    },
    "realWorldUse": {
      "en": "Radiation thyroid blocking tablets, table salt iodization, Elephant Toothpaste science demonstration",
      "ru": "Таблетки от радиации (йодная профилактика), йодирование поваренной соли, химические шоу",
      "kk": "Радиациядан қорғайтын дәрілер, ас тұзын йодтау, ғылыми-химиялық шоулар"
    },
    "funFact": {
      "en": "Just a single pinch of potassium iodide catalytically explodes 100 ml of hydrogen peroxide into a massive tower of steaming foam in half a second!",
      "ru": "Всего одна щепотка иодида калия мгновенно превращает перекись водорода в гигантский фонтан горячей пены высотой до потолка!",
      "kk": "Калий йодидінің бір шымшымы сутегі асқын тотығын жарты секундта төбеге дейін жететін алып ыстық көбік бұрқағына айналдырады!"
    }
  },
  {
    "id": "silver-bromide",
    "formula": "AgBr",
    "formulaAscii": "AgBr",
    "atoms": {
      "Ag": 1,
      "Br": 1
    },
    "name": {
      "en": "Silver Bromide",
      "ru": "Бромид серебра",
      "kk": "Күміс бромиді"
    },
    "scientificName": {
      "en": "Silver(I) Bromide",
      "ru": "Бромид серебра",
      "kk": "Күміс(I) бромиді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#fef9c3",
    "description": {
      "en": "Light-sensitive pale-yellow salt that served as the backbone of all analog photography and cinema film throughout the 19th and 20th centuries.",
      "ru": "Светочувствительная соль, основа всей аналоговой фотографии и мирового кино XX века: под действием фотонов света распадается с выделением металлического серебра.",
      "kk": "Жарыққа аса сезімтал сарғыш тұз. 19-20 ғасырлардағы бүкіл дүниежүзілік фотопленка мен киноиндустрияның негізі."
    },
    "realWorldUse": {
      "en": "Photographic film, cinema roll films, photographic paper, photochromic sunglasses",
      "ru": "Фотопленка, кинопленка, фотобумага, фотохромные очки-хамелеоны",
      "kk": "Фотопленка, кинопленка, фотоқағаз, күнге қараятын хамелеон көзілдіріктері"
    },
    "funFact": {
      "en": "Before digital cameras, Hollywood movies literally consumed hundreds of tons of pure silver each year to manufacture movie film rolls!",
      "ru": "До эпохи цифровых камер Голливуд ежегодно тратил сотни тонн чистого серебра на производство кинопленки для кинотеатров!",
      "kk": "Цифрлық камералар шыққанға дейін Голливуд кинотеатрларға арналған пленка өндіру үшін жыл сайын жүздеген тонна таза күміс жұмсаған!"
    }
  },
  {
    "id": "silver-iodide",
    "formula": "AgI",
    "formulaAscii": "AgI",
    "atoms": {
      "Ag": 1,
      "I": 1
    },
    "name": {
      "en": "Silver Iodide",
      "ru": "Иодид серебра",
      "kk": "Күміс йодиді"
    },
    "scientificName": {
      "en": "Silver(I) Iodide",
      "ru": "Иодид серебра",
      "kk": "Күміс(I) йодиді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#fef08a",
    "description": {
      "en": "Bright yellow insoluble salt with a crystalline structure virtually identical to natural ice, making it the supreme agent for weather modification and cloud seeding.",
      "ru": "Ярко-желтая соль, кристаллическая решетка которой почти идентична структуре льда. Главный инструмент человечества для разгона туч и вызова дождя.",
      "kk": "Кристалдық торы табиғи мұздың құрылымымен бірдей ашық сары тұз. Адамзаттың бұлттарды тарқату және жаңбыр жауғызу үшін қолданатын басты құралы."
    },
    "realWorldUse": {
      "en": "Cloud seeding to provoke rainfall in droughts, dispersing fog at airports, anti-hail rockets",
      "ru": "Засеивание дождевых облаков при засухе, разгон облаков перед праздниками, противоградовые ракеты",
      "kk": "Қуаңшылық кезінде жаңбыр шақыру, мереке алдында бұлтты ыдырату, бұршаққа қарсы зымырандар"
    },
    "funFact": {
      "en": "During major Olympic opening ceremonies and national parades, airplanes spray silver iodide into distant clouds so it rains far away and the city stays sunny!",
      "ru": "Перед открытием Олимпийских игр самолеты распыляют иодид серебра в тучи, вызывая дождь за городом, чтобы на стадионе светило солнце!",
      "kk": "Олимпиада ойындары мен үлкен мерекелер алдында ұшақтар қала үстінде күн ашық болуы үшін бұлттарға күміс йодидін сеуіп, жаңбырды қала сыртына жауғызады!"
    }
  },
  {
    "id": "iron-pyrite",
    "formula": "FeS₂",
    "formulaAscii": "FeS2",
    "atoms": {
      "Fe": 1,
      "S": 2
    },
    "name": {
      "en": "Fool's Gold (Pyrite)",
      "ru": "Пирит (Золото дураков)",
      "kk": "Пирит (Ақымақтар алтыны)"
    },
    "scientificName": {
      "en": "Iron Disulfide",
      "ru": "Дисульфид железа",
      "kk": "Темір дисульфиді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#eab308",
    "description": {
      "en": "Brass-yellow metallic mineral famously mistaken for real gold by novice prospectors during Gold Rushes. Historically struck against steel to spark fires.",
      "ru": "Золотистый блестящий минерал 'золото дураков'. Из-за сходства с золотом обманул тысячи старателей во время Золотой лихорадки. Высекает искры при ударе.",
      "kk": "Алтынға ұқсастығы үшін 'ақымақтар алтыны' аталған сары жылтыр минерал. Соққан кезде ұшқын шығаратындықтан, ежелде от тұтатуға қолданылған."
    },
    "realWorldUse": {
      "en": "Commercial sulfuric acid production by roasting, lithium battery cathodes, jewelry",
      "ru": "Сырье для производства серной кислоты (обжиг пирита), катоды литиевых батареек, украшения",
      "kk": "Күкірт қышқылын өндірудің шикізаты (пиритті күйдіру), литий батареяларының катоды, зергерлік бұйымдар"
    },
    "funFact": {
      "en": "The name Pyrite comes from the ancient Greek word 'pyr' meaning Fire, because striking a lump of pyrite against iron creates showering sparks hot enough to ignite dry tinder!",
      "ru": "Название 'пирит' происходит от греческого 'пир' — огонь, ведь от удара пирита о сталь летят яркие горячие искры!",
      "kk": "Пирит атауы ежелгі гректің 'пир' — от сөзінен шыққан, өйткені оны темірге соққанда құрғақ шөпті тұтататын ыстық ұшқындар шашырайды!"
    }
  },
  {
    "id": "sodium-thiosulfate",
    "formula": "Na₂S₂O₃",
    "formulaAscii": "Na2S2O3",
    "atoms": {
      "Na": 2,
      "S": 2,
      "O": 3
    },
    "name": {
      "en": "Sodium Thiosulfate",
      "ru": "Тиосульфат натрия (Фиксаж)",
      "kk": "Натрий тиосульфаты (Фиксаж)"
    },
    "scientificName": {
      "en": "Sodium Thiosulfate",
      "ru": "Тиосульфат натрия",
      "kk": "Натрий тиосульфаты"
    },
    "category": "household",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#38bdf8",
    "description": {
      "en": "Colorless crystalline salt used as a photographic fixer and medical antidote for life-threatening cyanide and chlorine gas poisoning.",
      "ru": "Кристаллический порошок, знаменитый фотофиксаж. Жизненно важный антидот при тяжелых отравлениях цианидами и ядовитым хлором.",
      "kk": "Атақты фотофиксаж тұзы. Цианидтермен және хлор газымен ауыр уланғанда адам өмірін құтқаратын маңызды медициналық у қайтарғыш (антидот)."
    },
    "realWorldUse": {
      "en": "Medical cyanide antidote, instant chlorine neutralizer in tap water for aquariums, photo fixing",
      "ru": "Антидот против цианидов, нейтрализация хлора в воде для аквариумов, фиксаж для фото",
      "kk": "Цианидке қарсы антидот, аквариум суындағы хлорды бейтараптандыру, фото бекіткіш"
    },
    "funFact": {
      "en": "Sodium thiosulfate instantaneously turns dark brown iodine water completely clear and colorless in a fraction of a second!",
      "ru": "Тиосульфат натрия за доли секунды обесцвечивает темно-коричневый раствор йода, делая его кристально прозрачным!",
      "kk": "Натрий тиосульфаты қою қоңыр йод ерітіндісін секундтың жүзден бір бөлігінде мөп-мөлдір суға айналдырады!"
    }
  },
  {
    "id": "trisodium-phosphate",
    "formula": "Na₃PO₄",
    "formulaAscii": "Na3PO4",
    "atoms": {
      "Na": 3,
      "P": 1,
      "O": 4
    },
    "name": {
      "en": "Trisodium Phosphate (TSP)",
      "ru": "Тринатрийфосфат",
      "kk": "Тринатрийфосфат"
    },
    "scientificName": {
      "en": "Trisodium Phosphate",
      "ru": "Ортофосфат натрия",
      "kk": "Натрий ортофосфаты"
    },
    "category": "household",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#f472b6",
    "description": {
      "en": "Powerful alkaline cleaning salt and degreaser. Saponifies fats and oils, stripping stubborn grime off walls before painting.",
      "ru": "Мощнейший щелочной обезжириватель и моющее средство. Омыляет любые застарелые жиры и масла, подготавливая стены к покраске.",
      "kk": "Майларды сабындандырып тазалайтын аса күшті сілтілік жуғыш зат. Қабырғаларды бояу алдында май мен кірден тазарту үшін қолданылады."
    },
    "realWorldUse": {
      "en": "Industrial heavy-duty degreaser, boiler water descaler, food additive in processed cheeses (E339)",
      "ru": "Обезжиривание перед покраской, удаление накипи в котлах, эмульгатор в плавленых сырах (E339)",
      "kk": "Бояу алдында майсыздандыру, қазандықтардың қағын кетіру, балқытылған ірімшіктердің қоспасы (E339)"
    },
    "funFact": {
      "en": "While industrial TSP strips oil off engines, food-grade TSP is added to breakfast cereals and processed cheese to keep the cheese smooth when melted!",
      "ru": "В то время как технический фосфат моет двигатели, пищевой фосфат натрия добавляют в плавленый сыр, чтобы он аппетитно тянулся!",
      "kk": "Техникалық түрі қозғалтқыштарды майдан жуса, тағамдық түрі балқытылған ірімшіктердің бірқалыпты созылуы үшін қосылады!"
    }
  },
  {
    "id": "copper-ii-hydroxide",
    "formula": "Cu(OH)₂",
    "formulaAscii": "CuH2O2",
    "atoms": {
      "Cu": 1,
      "O": 2,
      "H": 2
    },
    "name": {
      "en": "Copper(II) Hydroxide",
      "ru": "Гидроксид меди(II)",
      "kk": "Мыс(II) гидроксиді"
    },
    "scientificName": {
      "en": "Copper Dihydroxide",
      "ru": "Дигидроксид меди",
      "kk": "Мыс дигидроксиді"
    },
    "category": "acid-base",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#06b6d4",
    "description": {
      "en": "Vibrant light-blue gelatinous precipitate. Key reagent in Trommer's and Fehling's tests for detecting glucose and aldehydes. Decomposes into black CuO when heated.",
      "ru": "Ярко-голубой студенистый осадок. Главный реактив в пробе Троммера на глюкозу и альдегиды. При осторожном нагревании чернеет, превращаясь в оксид меди CuO.",
      "kk": "Ашық көгілдір тұнба. Глюкоза мен альдегидтерді анықтауға арналған Троммер сынамасының басты реактиві. Қыздырған кезде қарайып, CuO оксидіне айналады."
    },
    "realWorldUse": {
      "en": "Qualitative test for sugars and polyols (turns royal blue), Bordeaux mixture vineyard fungicide",
      "ru": "Качественная реакция на многоатомные спирты (ярко-синий раствор), бордосская жидкость для виноградников",
      "kk": "Көп атомды спирттерге сапалық реакция (ашық көк түс), жүзімдіктерді қорғайтын бордо сұйықтығы"
    },
    "funFact": {
      "en": "Adding glucose to light-blue Cu(OH)₂ and warming it produces a rainbow progression from royal blue to yellow and finally bright red brick Cu₂O!",
      "ru": "При добавлении глюкозы к голубому осадку гидроксида меди раствор становится васильковым, а при нагреве выпадает ярко-красный кирпичный осадок Cu₂O!",
      "kk": "Мыс гидроксидіне глюкоза қосып қыздырғанда, ол алдымен сия көкке, содан соң кірпіш қызыл түсті Cu₂O тұнбасына айналып құлпырады!"
    }
  },
  {
    "id": "iron-iii-hydroxide",
    "formula": "Fe(OH)₃",
    "formulaAscii": "FeH3O3",
    "atoms": {
      "Fe": 1,
      "O": 3,
      "H": 3
    },
    "name": {
      "en": "Iron(III) Hydroxide",
      "ru": "Гидроксид железа(III)",
      "kk": "Темір(III) гидроксиді"
    },
    "scientificName": {
      "en": "Iron Trihydroxide",
      "ru": "Тригидроксид железа",
      "kk": "Темір тригидроксиді"
    },
    "category": "acid-base",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#b45309",
    "description": {
      "en": "Red-brown rust-colored gelatinous precipitate. Primary chemical component of common rust that forms when iron oxidizes in moist air.",
      "ru": "Буро-красный аморфный осадок цвета ржавчины. Основная химическая составляющая настоящей ржавчины при коррозии железа во влажном воздухе.",
      "kk": "Тот түсті қоңыр-қызыл тұнба. Ылғал ауада темірдің тот басуы кезінде пайда болатын табиғи тоттың негізгі химиялық құрамы."
    },
    "realWorldUse": {
      "en": "Arsenic poisoning emergency antidote, water municipal filtration flocculant, ochre pigment",
      "ru": "Антидот при тяжелых отравлениях мышьяком, очистка водопроводной воды, природная краска охра",
      "kk": "Күшәнмен (мышьяк) уланғандағы жедел у қайтарғыш, ауыз суды тазарту, табиғи охра бояуы"
    },
    "funFact": {
      "en": "Freshly prepared iron(III) hydroxide binds free arsenic ions so tightly that it saves lives in emergency rooms as the official antidote for arsenic poisoning!",
      "ru": "Свежеосажденный гидроксид железа(III) намертво связывает ионы мышьяка, поэтому в больницах он официально служит спасительным противоядием!",
      "kk": "Жаңа тұндырылған темір(III) гидроксиді улы күшәнді өзіне мықтап байланыстырып алатындықтан, ауруханаларда ресми у қайтарғыш қызметін атқарады!"
    }
  },
  {
    "id": "aluminium-hydroxide",
    "formula": "Al(OH)₃",
    "formulaAscii": "AlH3O3",
    "atoms": {
      "Al": 1,
      "O": 3,
      "H": 3
    },
    "name": {
      "en": "Aluminium Hydroxide",
      "ru": "Гидроксид алюминия",
      "kk": "Алюминий гидроксиді"
    },
    "scientificName": {
      "en": "Aluminium Trihydroxide",
      "ru": "Тригидроксид алюминия",
      "kk": "Алюминий тригидроксиді"
    },
    "category": "acid-base",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#cbd5e1",
    "description": {
      "en": "Classic amphoteric white gelatinous precipitate. Dissolves in both strong acids and strong alkalis, illustrating dual acid-base chemical nature.",
      "ru": "Белый студенистый амфотерный осадок. Растворяется как в кислотах, так и в щелочах, демонстрируя двойственную химическую природу.",
      "kk": "Ақ түсті екідайлы (амфотерлі) тұнба. Қышқылдарда да, сілтілерде де еріп, химиялық екідайлылық қасиетін анық көрсетеді."
    },
    "realWorldUse": {
      "en": "Antacid stomach heartburn medication (Almagel/Maalox), vaccine adjuvant, non-toxic fire retardant",
      "ru": "Антациды от изжоги (Алмагель, Маалокс), адъювант для усиления вакцин, огнезащитные добавки в пластик",
      "kk": "Асқазан қыжылына қарсы дәрілер (Алмагель, Маалокс), вакциналарды күшейткіш, пластикке арналған өртке қарсы қоспа"
    },
    "funFact": {
      "en": "When plastics with aluminium hydroxide are exposed to fire, the compound absorbs heat and releases water vapor, putting the fire out automatically!",
      "ru": "При нагреве в огне гидроксид алюминия в пластике поглощает жар и выделяет воду, автоматически гася пламя без ядовитых газов!",
      "kk": "Өрт кезінде пластиктегі алюминий гидроксиді қызуды жұтып, су буын бөліп шығарады да, жалынды улы түтінсіз өздігінен сөндіреді!"
    }
  },
  {
    "id": "magnesium-hydroxide",
    "formula": "Mg(OH)₂",
    "formulaAscii": "MgH2O2",
    "atoms": {
      "Mg": 1,
      "O": 2,
      "H": 2
    },
    "name": {
      "en": "Milk of Magnesia (Magnesium Hydroxide)",
      "ru": "Гидроксид магния (Магнезия)",
      "kk": "Магний гидроксиді (Магнезия)"
    },
    "scientificName": {
      "en": "Magnesium Dihydroxide",
      "ru": "Дигидроксид магния",
      "kk": "Магний дигидроксиді"
    },
    "category": "household",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#6ee7b7",
    "description": {
      "en": "White sparingly-soluble suspension famously sold as 'Milk of Magnesia'. Safely neutralizes excess stomach hydrochloric acid without burning esophagus tissues.",
      "ru": "Белая суспензия 'Магнезиальное молочко'. Мягко нейтрализует соляную кислоту в желудке, избавляя от изжоги без раздражения слизистой.",
      "kk": "Әйгілі 'Магнезия сүті' ақ суспензиясы. Асқазандағы артық тұз қышқылын шырышты қабықты күйдірмей, қауіпсіз әрі жұмсақ бейтараптандырады."
    },
    "realWorldUse": {
      "en": "Heartburn antacid, natural mineral deodorant, wastewater heavy metal neutralization",
      "ru": "Таблетки и суспензии от изжоги, натуральные дезодоранты, нейтрализация кислых сточных вод",
      "kk": "Асқазан қыжылын басатын дәрілер, табиғи дезодоранттар, қышқыл ағынды суларды бейтараптандыру"
    },
    "funFact": {
      "en": "Because it dissolves only as fast as acid is present, you cannot overdose on its alkalinity — it stops dissolving as soon as the acid is neutralized!",
      "ru": "Им невозможно вызвать щелочной ожог желудка: он перестает растворяться ровно в тот момент, когда кислота полностью нейтрализована!",
      "kk": "Онымен асқазанды күйдіріп алу мүмкін емес: ол қышқыл бейтараптанған сәтте суда еруін бірден тоқтатады!"
    }
  },
  {
    "id": "barium-hydroxide",
    "formula": "Ba(OH)₂",
    "formulaAscii": "BaH2O2",
    "atoms": {
      "Ba": 1,
      "O": 2,
      "H": 2
    },
    "name": {
      "en": "Barium Hydroxide (Baryta Water)",
      "ru": "Гидроксид бария (Баритовая вода)",
      "kk": "Барий гидроксиді (Барит суы)"
    },
    "scientificName": {
      "en": "Barium Dihydroxide",
      "ru": "Дигидроксид бария",
      "kk": "Барий дигидроксиді"
    },
    "category": "acid-base",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#f87171",
    "description": {
      "en": "Strong alkaline base whose aqueous solution (Baryta Water) clouds instantly when exposed to carbon dioxide gas. Used in dramatic endothermic ice-freezing reactions.",
      "ru": "Сильное растворимое основание (баритовая вода). Мгновенно мутнеет от углекислого газа. Знаменито эндотермической реакцией, замораживающей воду до льда!",
      "kk": "Күшті еритін сілті (барит суы). Көмірқышқыл газынан лезде лайланады. Ыдыстың астындағы суды мұзға айналдыратын эндотермиялық тәжірибесімен танымал!"
    },
    "realWorldUse": {
      "en": "Air carbon dioxide detection, organic base catalyst, grease lubricant stabilizer",
      "ru": "Обнаружение углекислого газа, стабилизатор термостойких смазок для подшипников, синтез",
      "kk": "Көмірқышқыл газын анықтау, подшипниктерге арналған ыстыққа төзімді майлардың тұрақтандырғышы"
    },
    "funFact": {
      "en": "Mixing dry barium hydroxide with ammonium thiocyanate absorbs so much heat from the surroundings that the beaker freezes solid to a wet wooden board!",
      "ru": "Смешивание сухого гидроксида бария с роданидом аммония так сильно поглощает тепло, что колба намертво примерзает ко влажной доске льдом!",
      "kk": "Құрғақ барий гидроксиді мен аммоний тиоцианатын араластырғанда қоршаған ортадан жылуды сондай қатты сорып, ыдыс астындағы тақтайға мұз болып қатып қалады!"
    }
  },
  {
    "id": "hydrofluoric-acid",
    "formula": "HF",
    "formulaAscii": "HF",
    "atoms": {
      "H": 1,
      "F": 1
    },
    "name": {
      "en": "Hydrofluoric Acid",
      "ru": "Фтороводородная кислота (Плавиковая)",
      "kk": "Фторсутек қышқылы (Балқытқыш)"
    },
    "scientificName": {
      "en": "Hydrogen Fluoride",
      "ru": "Фторид водорода",
      "kk": "Сутек фториді"
    },
    "category": "acid-base",
    "hazard": "danger",
    "state": "liquid",
    "structureType": "linear",
    "glowColor": "#22c55e",
    "description": {
      "en": "Extremely corrosive chemical that dissolves glass, quartz, and silicon by reacting with SiO₂. Must be stored exclusively in polyethylene or Teflon bottles.",
      "ru": "Знаменитая плавиковая кислота, растворяющая стекло, кварц и кремний! Вступает в реакцию с SiO₂, поэтому ее хранят только в пластиковой или тефлоновой посуде.",
      "kk": "Шыныны, кварцты және кремнийді ерітетін балқытқыш қышқыл! SiO₂-мен әрекеттесетіндіктен, оны тек полиэтилен немесе тефлон ыдыста ғана сақтайды."
    },
    "realWorldUse": {
      "en": "Microchip silicon wafer etching, frosted decorative glass etching, fluoropolymer and Teflon synthesis",
      "ru": "Травление кремниевых кристаллов в микропроцессорах компьютеров, матовые рисунки на стекле, тефлон",
      "kk": "Компьютер процессорларының кремний кристалшыларын химиялық өңдеу, шыныға өрнек салу, тефлон жасау"
    },
    "funFact": {
      "en": "Every silicon computer chip inside modern iPhones, GPUs, and satellites was precision-etched with hydrofluoric acid at the microscopic scale!",
      "ru": "Каждый микропроцессор в современных смартфонах и суперкомпьютерах был вытравлен с нанометровой точностью именно плавиковой кислотой!",
      "kk": "Қазіргі смартфондар мен суперкомпьютерлердің әрбір микропроцессоры нанометрлік дәлдікпен дәл осы балқытқыш қышқыл арқылы жасалған!"
    }
  },
  {
    "id": "boric-acid",
    "formula": "H₃BO₃",
    "formulaAscii": "H3BO3",
    "atoms": {
      "H": 3,
      "B": 1,
      "O": 3
    },
    "name": {
      "en": "Boric Acid",
      "ru": "Борная кислота",
      "kk": "Бор қышқылы"
    },
    "scientificName": {
      "en": "Trihydroboric Acid",
      "ru": "Ортоборная кислота",
      "kk": "Ортобор қышқылы"
    },
    "category": "household",
    "hazard": "safe",
    "state": "solid",
    "structureType": "planar",
    "glowColor": "#4ade80",
    "description": {
      "en": "Gentle antiseptic white powder. When dissolved in alcohol and ignited, it burns with a magnificent bright neon-emerald flame. Essential nuclear reactor coolant neutron absorber.",
      "ru": "Мягкий аптечный антисептик. При растворении в спирте горит сказочным ярко-зеленым пламенем. В ядерных реакторах поглощает нейтроны, предотвращая перегрев.",
      "kk": "Жұмсақ антисептикалық ақ ұнтақ. Спиртте ерітіп жаққан кезде ғажайып ашық-жасыл түспен жанады. Атомдық реакторларда нейтрондарды жұтып, авариядан сақтайды."
    },
    "realWorldUse": {
      "en": "Nuclear power plant safety neutron absorbers, Pyrex heat-resistant borosilicate glass, green stage flame",
      "ru": "Аварийная защита ядерных реакторов на АЭС, жаропрочное стекло Pyrex, зеленый сценический огонь",
      "kk": "Атом электр станцияларының қауіпсіздік жүйесі, ыстыққа төзімді Pyrex шынысы, жасыл от шоулары"
    },
    "funFact": {
      "en": "Pyrex baking dishes withstand sudden 200°C oven temperature shocks specifically because boric acid makes borosilicate glass barely expand at all when heated!",
      "ru": "Жаропрочные формы для запекания Pyrex не лопаются в духовке именно потому, что борная кислота делает стекло устойчивым к температурным шокам!",
      "kk": "Ыстыққа төзімді Pyrex ыдыстарының пеште жарылмайтын себебі — бор қышқылы әйнекті қызған кезде кеңеймейтіндей берік етеді!"
    }
  },
  {
    "id": "hydrogen-cyanide",
    "formula": "HCN",
    "formulaAscii": "HCN",
    "atoms": {
      "H": 1,
      "C": 1,
      "N": 1
    },
    "name": {
      "en": "Hydrogen Cyanide (Prussic Acid)",
      "ru": "Синильная кислота",
      "kk": "Циансутек қышқылы (Көгілдір қышқыл)"
    },
    "scientificName": {
      "en": "Hydrocyanic Acid",
      "ru": "Цианистый водород",
      "kk": "Сутек цианиді"
    },
    "category": "acid-base",
    "hazard": "danger",
    "state": "gas",
    "structureType": "linear",
    "glowColor": "#ef4444",
    "description": {
      "en": "Extremely lethal, fast-acting colorless gas with a faint bitter almond odor. Blocks cellular cellular respiration by binding permanently to mitochondrial cytochrome c oxidase.",
      "ru": "Смертельно ядовитый бесцветный летучий газ с запахом горького миндаля. Намертво блокирует клеточное дыхание, лишая клетки кислорода за секунды.",
      "kk": "Ащы бадам иісі бар, аса қауіпті улы ұшқыш газ. Жасушалық тыныс алуды бірнеше секундта бұғаттап, митохондрияларды оттегіден айырады."
    },
    "realWorldUse": {
      "en": "Gold mining ore extraction (cyanidation), acrylic glass (Plexiglas) polymers, synthetic nylon fibers",
      "ru": "Извлечение золота из золотоносных руд на рудниках Казахстана, оргстекло плексиглас, нейлон",
      "kk": "Қазақстанның кен орындарында алтынды бөліп алу (цианидтеу), плексиглас органикалық шынысы, нейлон"
    },
    "funFact": {
      "en": "Apricot and peach pits naturally contain amygdalin, which releases tiny amounts of hydrogen cyanide when digested — which is why you shouldn't chew lots of fruit seeds!",
      "ru": "Косточки абрикосов и вишни содержат вещество амигдалин, выделяющее синильную кислоту при переваривании — поэтому их нельзя есть в больших количествах!",
      "kk": "Өрік пен шиенің сүйектерінде амигдалин заты бар, ол асқазанда циансутек бөледі — сондықтан өрік сүйегінің дәнін көп жеуге болмайды!"
    }
  },
  {
    "id": "hypochlorous-acid",
    "formula": "HClO",
    "formulaAscii": "HClO",
    "atoms": {
      "H": 1,
      "Cl": 1,
      "O": 1
    },
    "name": {
      "en": "Hypochlorous Acid",
      "ru": "Хлорноватистая кислота",
      "kk": "Гипохлорлы қышқыл"
    },
    "scientificName": {
      "en": "Hypochlorous Acid",
      "ru": "Хлорноватистая кислота",
      "kk": "Гипохлорлы қышқыл"
    },
    "category": "household",
    "hazard": "caution",
    "state": "liquid",
    "structureType": "bent",
    "glowColor": "#a3e635",
    "description": {
      "en": "Powerful, natural disinfectant produced naturally by human white blood cells (neutrophils) to destroy invading bacteria and viruses in seconds.",
      "ru": "Мощнейший природный антисептик, который вырабатывают белые кровяные тельца (нейтрофилы) человека для уничтожения бактерий и вирусов.",
      "kk": "Адамның ақ қан жасушалары (лейкоциттер) ағзаға түскен микробтар мен вирустарды жою үшін өзі табиғи түрде бөліп шығаратын күшті антисептик."
    },
    "realWorldUse": {
      "en": "Hospital wound sanitization, non-toxic eco-friendly surface disinfectants, drinking water purification",
      "ru": "Дезинфекция больниц, безопасная обработка продуктов питания, стерилизация операционных",
      "kk": "Ауруханаларды залалсыздандыру, азық-түлікті қауіпсіз өңдеу, ота жасайтын бөлмелерді зарарсыздандыру"
    },
    "funFact": {
      "en": "Hypochlorous acid is 80 to 100 times more effective at killing pathogens than household bleach, yet completely harmless to human eyes and skin!",
      "ru": "Хлорноватистая кислота в 100 раз эффективнее уничтожает микробы, чем хлорка, но при этом абсолютно безопасна для глаз и кожи человека!",
      "kk": "Гипохлорлы қышқыл микробтарды кәдімгі ағартқыштан 100 есе жылдам өлтіреді, бірақ адамның терісі мен көзіне мүлдем зиян тигізбейді!"
    }
  },
  {
    "id": "metasilicic-acid",
    "formula": "H₂SiO₃",
    "formulaAscii": "H2SiO3",
    "atoms": {
      "H": 2,
      "Si": 1,
      "O": 3
    },
    "name": {
      "en": "Silicic Acid (Silica Gel Precursor)",
      "ru": "Кремниевая кислота (Основа силикагеля)",
      "kk": "Кремний қышқылы (Силикагель негізі)"
    },
    "scientificName": {
      "en": "Metasilicic Acid",
      "ru": "Метакремниевая кислота",
      "kk": "Метакремний қышқылы"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "complex",
    "glowColor": "#7dd3fc",
    "description": {
      "en": "Weak gelatinous mineral acid that condenses into a glassy porous network. Drying it yields Silica Gel packets that keep electronics and shoes dry.",
      "ru": "Белое студенистое нерастворимое вещество. При высушивании образует пористый силикагель — те самые шарики в пакетиках, которые кладут в коробки с обувью и электроникой.",
      "kk": "Ақ түсті желе тәрізді ерімейтін қышқыл. Кептіргенде кеуекті силикагельге айналады — аяқ киім мен электроника қораптарындағы ылғал жұтатын дорбашалар."
    },
    "realWorldUse": {
      "en": "Silica gel desiccants in shoe and gadget boxes, column chromatography purification, catalyst support",
      "ru": "Пакетики силикагеля для защиты техники от влаги, очистка лекарств в хроматографии",
      "kk": "Техниканы ылғалдан қорғайтын силикагель қалташалары, дәрі-дәрмектерді тазарту хроматографиясы"
    },
    "funFact": {
      "en": "Silica gel packets absorb up to 40% of their own weight in water vapor without feeling wet to the touch at all!",
      "ru": "Шарики силикагеля могут впитать до 40% влаги от своего собственного веса, оставаясь при этом абсолютно сухими на ощупь!",
      "kk": "Силикагель түйіршіктері өз салмағының 40%-ына дейін су буын жұта алады және сонда да сыртынан мүлдем құп-құрғақ болып қала береді!"
    }
  },
  {
    "id": "nitrogen-dioxide",
    "formula": "NO₂",
    "formulaAscii": "NO2",
    "atoms": {
      "N": 1,
      "O": 2
    },
    "name": {
      "en": "Nitrogen Dioxide (Fox Tail)",
      "ru": "Диоксид азота (Лисий хвост)",
      "kk": "Азот диоксиді (Түлкі құйрық)"
    },
    "scientificName": {
      "en": "Nitrogen Dioxide",
      "ru": "Диоксид азота",
      "kk": "Азот диоксиді"
    },
    "category": "gas",
    "hazard": "danger",
    "state": "gas",
    "structureType": "bent",
    "glowColor": "#ea580c",
    "description": {
      "en": "Poisonous pungent red-brown gas known as 'Fox Tail'. Formed in lightning strikes, car exhaust, and when concentrated nitric acid dissolves copper metal.",
      "ru": "Ядовитый едкий бурый газ 'Лисий хвост'. Выделяется бурными клубами при растворении меди в концентрированной азотной кислоте и в выхлопах двигателей.",
      "kk": "Улы, өткір иісті қоңыр газ ('Түлкі құйрық'). Мысты концентрлі азот қышқылында еріткенде және автомобиль пайдаланылған газдарында түзіледі."
    },
    "realWorldUse": {
      "en": "Commercial nitric acid synthesis (Ostwald process), rocket propellants oxidizer (dinitrogen tetroxide)",
      "ru": "Производство азотной кислоты на химических заводах, окислитель ракетного топлива",
      "kk": "Химия зауыттарында азот қышқылын өндіру, зымыран отынының тотықтырғышы"
    },
    "funFact": {
      "en": "Cooling brown NO₂ gas turns it into completely clear, colorless liquid N₂O₄ (dinitrogen tetroxide) as two molecules snap together!",
      "ru": "Если охладить бурый газ NO₂ в пробирке льдом, он моментально обесцвечивается, превращаясь в прозрачную жидкость N₂O₄!",
      "kk": "Қоңыр түсті NO₂ газын мұзбен суытсаңыз, екі молекуласы бірігіп, ол лезде мөлдір сұйық N₂O₄-ке айналады!"
    }
  },
  {
    "id": "nitric-oxide",
    "formula": "NO",
    "formulaAscii": "NO",
    "atoms": {
      "N": 1,
      "O": 1
    },
    "name": {
      "en": "Nitric Oxide",
      "ru": "Оксид азота(II)",
      "kk": "Азот монооксиді"
    },
    "scientificName": {
      "en": "Nitrogen Monoxide",
      "ru": "Монооксид азота",
      "kk": "Азот монооксиді"
    },
    "category": "gas",
    "hazard": "caution",
    "state": "gas",
    "structureType": "linear",
    "glowColor": "#38bdf8",
    "description": {
      "en": "Colorless radical gas and vital biological messenger molecule that signals blood vessels to dilate, earning scientists the 1998 Nobel Prize in Medicine.",
      "ru": "Бесцветный газ-радикал и важнейшая сигнальная молекула в организме человека: расширяет кровеносные сосуды и регулирует давление (Нобелевская премия 1998).",
      "kk": "Түссіз газ және адам ағзасындағы аса маңызды сигналдық молекула: қан тамырларын кеңейтіп, қысымды реттейді (1998 жылғы Нобель сыйлығы)."
    },
    "realWorldUse": {
      "en": "Medical cardiovascular treatments, neonatal lung therapy, intermediate in fertilizer synthesis",
      "ru": "Лечение дыхательной недостаточности у новорожденных, сосудорасширяющая терапия, синтез удобрений",
      "kk": "Жаңа туған нәрестелердің тыныс алуын емдеу, қан тамырларын кеңейту терапиясы, тыңайтқыш өндірісі"
    },
    "funFact": {
      "en": "The second colorless NO gas touches open air, it greedily grabs atmospheric oxygen and instantly bursts into thick brown clouds of NO₂!",
      "ru": "Стоит бесцветному газу NO соприкоснуться с воздухом, как он мгновенно окисляется кислородом и вспыхивает густым бурым облаком!",
      "kk": "Түссіз NO газы ауамен жанасқан сәтте ауадағы оттегіні өзіне қосып алып, лезде қою қоңыр бұлтқа айналады!"
    }
  },
  {
    "id": "sulfur-trioxide",
    "formula": "SO₃",
    "formulaAscii": "SO3",
    "atoms": {
      "S": 1,
      "O": 3
    },
    "name": {
      "en": "Sulfur Trioxide",
      "ru": "Триоксид серы (Серный ангидрид)",
      "kk": "Күкірт триоксиді (Күкірт ангидриді)"
    },
    "scientificName": {
      "en": "Sulfur Trioxide",
      "ru": "Триоксид серы",
      "kk": "Күкірт триоксиді"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "liquid",
    "structureType": "planar",
    "glowColor": "#facc15",
    "description": {
      "en": "Primary precursor to sulfuric acid. Reacts explosively with water, hissing and releasing blinding white clouds of corrosive acid mist.",
      "ru": "Серный ангидрид, сердце производства серной кислоты. Бурно реагирует с водой со взрывным шипением и ядовитым кислым туманом.",
      "kk": "Күкірт қышқылын өндірудің басты шикізаты. Сумен жарылыс тәрізді қатты ысылдап әрекеттесіп, күйдіргіш қышқыл тұманын түзеді."
    },
    "realWorldUse": {
      "en": "Massive-scale sulfuric acid production (Contact process), sulfonation of surfactants for shampoos",
      "ru": "Производство серной кислоты контактным способом, синтез ПАВ для шампуней и гелей",
      "kk": "Күкірт қышқылын өндірудің контакт әдісі, сусабындар мен гельдердің беттік белсенді заттарын синтездеу"
    },
    "funFact": {
      "en": "Because SO₃ reacts with water violently enough to boil it into acid mist, chemical plants absorb it into concentrated acid instead to make Oleum!",
      "ru": "Поскольку реакция с водой взрывоопасна, на заводах серный ангидрид растворяют не в воде, а в серной кислоте, получая дымящийся Олеум!",
      "kk": "Сумен реакциясы жарылғыш болғандықтан, зауыттарда оны суға емес, күкірт қышқылына сіңіріп, бұрқыраған олеум алады!"
    }
  },
  {
    "id": "phosphorus-pentoxide",
    "formula": "P₂O₅",
    "formulaAscii": "P2O5",
    "atoms": {
      "P": 2,
      "O": 5
    },
    "name": {
      "en": "Phosphorus Pentoxide",
      "ru": "Оксид фосфора(V)",
      "kk": "Фосфор пентаоксиді"
    },
    "scientificName": {
      "en": "Diphosphorus Pentoxide",
      "ru": "Пентаоксид дифосфора",
      "kk": "Дифосфор пентаоксиді"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "solid",
    "structureType": "tetrahedral",
    "glowColor": "#f472b6",
    "description": {
      "en": "White crystalline powder produced by burning phosphorus. The most aggressive and powerful chemical dehydrating agent known, ripping water molecules out of other acids.",
      "ru": "Снежно-белый порошок от сгорания фосфора. Сильнейший осушитель в мире: отбирает молекулы воды даже у чистых концентрированных кислот!",
      "kk": "Фосфор жанғанда түзілетін аппақ ұнтақ. Әлемдегі ең күшті су тартқыш зат: тіпті концентрлі қышқылдардың өзінен су молекулаларын тартып алады!"
    },
    "realWorldUse": {
      "en": "Ultimate laboratory gas desiccant, superphosphoric acid synthesis, organic dehydration reactions",
      "ru": "Абсолютное осушение газов в лаборатории, производство суперфосфатных удобрений, олеум",
      "kk": "Зертханадағы газдарды түбегейлі құрғату, суперфосфат тыңайтқыштарын жасау"
    },
    "funFact": {
      "en": "Phosphorus pentoxide's thirst for water is so extreme that dropping water onto it hisses like hot grease and releases boiling heat in milliseconds!",
      "ru": "Его жажда воды настолько яростна, что капля воды на порошке мгновенно вскипает со свистом и раскаленным паром!",
      "kk": "Оның суға құштарлығы соншалық, ұнтаққа тамызылған бір тамшы су лезде ысқырып, қайнаған бу болып бұрқ ете қалады!"
    }
  },
  {
    "id": "magnetite-iron-oxide",
    "formula": "Fe₃O₄",
    "formulaAscii": "Fe3O4",
    "atoms": {
      "Fe": 3,
      "O": 4
    },
    "name": {
      "en": "Magnetite (Black Iron Oxide)",
      "ru": "Магнетит (Железная окалина)",
      "kk": "Магнетит (Темір қағы)"
    },
    "scientificName": {
      "en": "Iron(II,III) Oxide",
      "ru": "Оксид железа(II,III)",
      "kk": "Темір(II,III) оксиді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#475569",
    "description": {
      "en": "Naturally magnetic black mineral (Lodestone) containing mixed iron valencies Fe²⁺ and Fe³⁺. Guided ancient seafaring compass navigators across oceans.",
      "ru": "Природный черный магнитный железняк, содержащий сразу Fe²⁺ и Fe³⁺. Куски магнетита служили первыми компасами древних мореплавателей.",
      "kk": "Құрамында Fe²⁺ және Fe³⁺ бірдей бар табиғи магнитті қара минерал. Оның сынықтары ежелгі теңіз саяхатшыларының алғашқы компасы болған."
    },
    "realWorldUse": {
      "en": "Primary iron and steel blast furnace ore, laser printer toner magnetic pigment, magnetic audio tape",
      "ru": "Главная руда для выплавки чугуна и стали на заводах Темиртау, черный тонер лазерных принтеров",
      "kk": "Теміртау зауыттарында шойын мен болат қорытудың негізгі кені, лазерлік принтерлердің қара тонері"
    },
    "funFact": {
      "en": "Homing pigeons have microscopic magnetite crystals in their beaks that act as an organic biological GPS compass tuned to Earth's magnetic field!",
      "ru": "У почтовых голубей в клюве находятся микроскопические кристаллы магнетита, работающие как природный GPS-компас в магнитном поле Земли!",
      "kk": "Пошта көгершіндерінің тұмсығында Жердің магнит өрісін сезетін табиғи GPS компас қызметін атқаратын ұсақ магнетит кристалдары бар!"
    }
  },
  {
    "id": "copper-ii-oxide",
    "formula": "CuO",
    "formulaAscii": "CuO",
    "atoms": {
      "Cu": 1,
      "O": 1
    },
    "name": {
      "en": "Copper(II) Oxide",
      "ru": "Оксид меди(II) (Тенорит)",
      "kk": "Мыс(II) оксиді (Тенорит)"
    },
    "scientificName": {
      "en": "Copper Monoxide",
      "ru": "Монооксид меди",
      "kk": "Мыс монооксиді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#334155",
    "description": {
      "en": "Velvety black mineral powder (Tenorite) formed when copper oxidizes at high temperatures. Imparts a noble turquoise-blue tint to ceramic glazes.",
      "ru": "Черный кристаллический порошок (тенорит). Образуется при прокаливании меди на воздухе или при термическом разложении осадка Cu(OH)₂.",
      "kk": "Қара түсті кристалды ұнтақ (тенорит). Мысты ауада қыздырғанда немесе Cu(OH)₂ тұнбасын қыздырып ыдыратқанда түзіледі."
    },
    "realWorldUse": {
      "en": "Turquoise ceramic glaze pigment, p-type high-temperature semiconductors, welding fluxes",
      "ru": "Бирюзовые глазури для посуды, полупроводники p-типа, катализатор окисления в органической химии",
      "kk": "Ыдыстарға арналған көгілдір жылтырақ бояулар, p-типті жартылай өткізгіштер, катализатор"
    },
    "funFact": {
      "en": "Heating black CuO with a tube of hydrogen gas turns it before your eyes back into shiny pure pink-red metallic copper, forming droplets of water!",
      "ru": "Если пропустить водород над горячим черным CuO, он на глазах превратится обратно в блестящую розово-красную медь с капельками воды!",
      "kk": "Қызған қара мыс оксидінің үстінен сутек газын өткізсеңіз, ол көз алдыңызда жылтыраған қызғылт таза мысқа айналып, су тамшыларын бөледі!"
    }
  },
  {
    "id": "chromium-iii-oxide",
    "formula": "Cr₂O₃",
    "formulaAscii": "Cr2O3",
    "atoms": {
      "Cr": 2,
      "O": 3
    },
    "name": {
      "en": "Chromium(III) Oxide (Chrome Green)",
      "ru": "Оксид хрома(III)",
      "kk": "Хром(III) оксиді"
    },
    "scientificName": {
      "en": "Dichromium Trioxide",
      "ru": "Триоксид дихрома",
      "kk": "Дихром триоксиді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#22c55e",
    "description": {
      "en": "Extremely hard, heat-resistant olive-green powder. The famous 'GOI Polishing Paste' and green ash produced by the theatrical 'Ammonium Dichromate Volcano' demonstration.",
      "ru": "Темно-зеленый твердый порошок. Знаменитая паста ГОИ для полировки оптики и металлов, а также 'пепел' легендарного опыта 'Вулкан Бёттгера'.",
      "kk": "Қою жасыл қатты ұнтақ. Оптика мен металдарды жылтырататын әйгілі ГОИ пастасы және 'Бёттгер жанартауы' тәжірибесінен шығатын күл."
    },
    "realWorldUse": {
      "en": "GOI mirror polishing paste, thermal spray coatings for aerospace turbines, green camouflage paint",
      "ru": "Полировочная паста ГОИ для ювелиров и оптиков, жаростойкие покрытия турбин самолетов",
      "kk": "Зергерлерге арналған ГОИ жылтыратқыш пастасы, ұшақ турбиналарының отқа төзімді қаптамасы"
    },
    "funFact": {
      "en": "Green bank notes and currency bills around the world are printed with chromium oxide pigment because it is completely indestructible by light, heat, or acids!",
      "ru": "Зеленые купюры многих стран мира печатаются краской на основе Cr₂O₃, потому что этот пигмент не выцветает на солнце и не боится кислот!",
      "kk": "Әлемнің көптеген елдерінің жасыл ақша купюралары Cr₂O₃ бояуымен басылады, себебі ол күнге оңбайды және қышқылдарға ерімейді!"
    }
  },
  {
    "id": "manganese-dioxide",
    "formula": "MnO₂",
    "formulaAscii": "MnO2",
    "atoms": {
      "Mn": 1,
      "O": 2
    },
    "name": {
      "en": "Manganese Dioxide (Pyrolusite)",
      "ru": "Диоксид марганца (Пиролюзит)",
      "kk": "Марганец диоксиді (Пиролюзит)"
    },
    "scientificName": {
      "en": "Manganese(IV) Oxide",
      "ru": "Оксид марганца(IV)",
      "kk": "Марганец(IV) оксиді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#64748b",
    "description": {
      "en": "Black mineral powder (Pyrolusite). The workhorse depolarizer cathode inside billions of alkaline and zinc-carbon batteries and catalyst for hydrogen peroxide decomposition.",
      "ru": "Черный минерал пиролюзит. Находится внутри миллиардов пальчиковых батареек (AA/AAA). Главный катализатор разложения перекиси водорода на кислород.",
      "kk": "Қара түсті пиролюзит минералы. Миллиардтаған саусақ батареялардың (AA/AAA) ішіндегі катод заты және сутегі асқын тотығын оттекке ыдырататын катализатор."
    },
    "realWorldUse": {
      "en": "Alkaline AA and AAA battery cathodes, glass decoloring agent, laboratory oxygen preparation catalyst",
      "ru": "Катоды щелочных батареек Duracell/Energizer, обесцвечивание стекла от зеленых примесей железа",
      "kk": "Duracell/Energizer батареяларының катоды, шыныны темір қоспаларының жасыл түсінен тазарту"
    },
    "funFact": {
      "en": "Dropping a single grain of MnO₂ into a bottle of hydrogen peroxide triggers an instant roaring jet of steam and pure hot oxygen gas!",
      "ru": "Всего одна крупинка MnO₂ в растворе перекиси водорода мгновенно запускает бурлящий гейзер из горячего пара и чистого кислорода!",
      "kk": "Сутегі асқын тотығына MnO₂ бір түйірін салсаңыз болғаны, ол ыстық бу мен таза оттектің қайнаған гейзеріне айналады!"
    }
  },
  {
    "id": "red-lead-minium",
    "formula": "Pb₃O₄",
    "formulaAscii": "Pb3O4",
    "atoms": {
      "Pb": 3,
      "O": 4
    },
    "name": {
      "en": "Red Lead (Minium)",
      "ru": "Свинцовый сурик",
      "kk": "Қорғасын суригі"
    },
    "scientificName": {
      "en": "Dilead(II) Lead(IV) Oxide",
      "ru": "Ортоплюмбат свинца(II)",
      "kk": "Қорғасын ортоплюмбаты"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#f97316",
    "description": {
      "en": "Vivid orange-red pigment known since antiquity as Minium. Famous for protective anti-corrosion primer paint on ships, bridges, and the Golden Gate Bridge.",
      "ru": "Ярко-оранжевый сурик. Легендарная грунтовка корабельных корпусов и стальных мостов (включая мост Золотые Ворота), защищающая сталь от морской ржавчины.",
      "kk": "Ашық қызғылт-сары сурик. Кемелер мен темір көпірлерді теңіз тұзы мен тоттан ондаған жылдар бойы сақтайтын атақты қорғаныш бояуы."
    },
    "realWorldUse": {
      "en": "Anti-rust marine primer paint, crystal lead glass manufacturing, match pyrotechnics",
      "ru": "Антикоррозийная покраска морских судов и мостов, оптическое хрустальное стекло, пиротехника",
      "kk": "Теңіз кемелері мен көпірлерді тот басудан қорғап бояу, оптикалық хрусталь шыны, пиротехника"
    },
    "funFact": {
      "en": "The word 'miniature' originally had nothing to do with size — it meant an illuminated manuscript illustration painted with red lead (Minium)!",
      "ru": "Слово 'миниатюра' изначально не означало маленькую вещь — так называли цветные иллюстрации в древних книгах, нарисованные свинцовым суриком (minium)!",
      "kk": "'Миниатюра' сөзі бастапқыда кішкентай затты білдірмеген — осы қорғасын суригімен (minium) салынған ежелгі қолжазба суреттерін солай атаған!"
    }
  },
  {
    "id": "uranium-dioxide",
    "formula": "UO₂",
    "formulaAscii": "UO2",
    "atoms": {
      "U": 1,
      "O": 2
    },
    "name": {
      "en": "Uranium Dioxide (Nuclear Fuel)",
      "ru": "Диоксид урана (Ядерное топливо)",
      "kk": "Уран диоксиді (Ядролық отын)"
    },
    "scientificName": {
      "en": "Uranium(IV) Oxide",
      "ru": "Диоксид урана",
      "kk": "Уран(IV) оксиді"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#10b981",
    "description": {
      "en": "Black ceramic nuclear fuel sintered into cylindrical pellets and loaded into fuel rods inside nuclear power reactors. Kazakhstan is the world's leading producer.",
      "ru": "Черное керамическое ядерное топливо. Прессуется в таблетки для тепловыделяющих сборок (ТВС) на атомных электростанциях. Казахстан — мировой лидер по добыче урана.",
      "kk": "Қара түсті керамикалық ядролық отын. Атом электр станцияларының реакторларына арналған таблетка түрінде жасалады. Қазақстан — уран өндіруден әлем көшбасшысы."
    },
    "realWorldUse": {
      "en": "Commercial nuclear power plant fuel pellets (Ulba Metallurgical Plant, Kazakhstan), marine reactor cores",
      "ru": "Топливные таблетки для АЭС (Ульбинский металлургический завод в Усть-Каменогорске), ледоколы",
      "kk": "АЭС-ке арналған отын таблеткалары (Өскемендегі Үлбі металлургия зауыты), атомдық мұзжарғыштар"
    },
    "funFact": {
      "en": "A single tiny 10-gram uranium dioxide fuel pellet the size of a fingertip generates as much electricity as burning 1 ton of coal or 3 barrels of oil!",
      "ru": "Всего одна 10-граммовая таблетка диоксида урана размером с ноготь вырабатывает столько же энергии, сколько сжигание 1 тонны угля или 3 бочек нефти!",
      "kk": "Саусақтың басындай 10 грамдық уран таблеткасы 1 тонна көмірді немесе 3 бөшке мұнайды жаққанмен бірдей мол электр энергиясын береді!"
    }
  },
  {
    "id": "ethylene",
    "formula": "C₂H₄",
    "formulaAscii": "C2H4",
    "atoms": {
      "C": 2,
      "H": 4
    },
    "name": {
      "en": "Ethylene (Ethene)",
      "ru": "Этилен",
      "kk": "Этилен (Этен)"
    },
    "scientificName": {
      "en": "Ethene",
      "ru": "Этен",
      "kk": "Этен"
    },
    "category": "organic",
    "hazard": "caution",
    "state": "gas",
    "structureType": "planar",
    "glowColor": "#a855f7",
    "description": {
      "en": "The most manufactured organic chemical on Earth. Natural gaseous plant hormone that triggers fruit ripening and polymerizes into ubiquitous Polyethylene plastics.",
      "ru": "Самое производимое органическое вещество на Земле. Природный фитогормон спелости фруктов и мономер для полиэтилена — основы пластиковых пакетов и бутылок.",
      "kk": "Жер бетінде ең көп өндірілетін органикалық зат. Жемістердің пісуін жылдамдататын өсімдік гормоны және полиэтилен пакеттері мен бөтелкелердің бастауы."
    },
    "realWorldUse": {
      "en": "Polyethylene plastic synthesis (bottles, bags, pipes), controlled ripening of bananas in storage",
      "ru": "Синтез полиэтилена (трубы, пакеты, канистры), ускорение дозревания бананов на складах",
      "kk": "Полиэтилен өндірісі (құбырлар, пакеттер), қоймалардағы банан мен қызанақты пісіру"
    },
    "funFact": {
      "en": "Putting a ripe banana in a bag with unripe green avocados or tomatoes ripens them overnight because the banana breathes out ethylene gas!",
      "ru": "Если положить спелый банан в пакет с зелеными авокадо или томатами, они созреют за ночь, ведь банан выдыхает газ этилен!",
      "kk": "Піскен бананды жасыл қызанақпен бір пакетке салсаңыз, олар түнде пісіп шығады, себебі банан ауаға этилен газын бөледі!"
    }
  },
  {
    "id": "benzene",
    "formula": "C₆H₆",
    "formulaAscii": "C6H6",
    "atoms": {
      "C": 6,
      "H": 6
    },
    "name": {
      "en": "Benzene",
      "ru": "Бензол",
      "kk": "Бензол"
    },
    "scientificName": {
      "en": "Cyclohexa-1,3,5-triene",
      "ru": "Бензол",
      "kk": "Бензол"
    },
    "category": "organic",
    "hazard": "danger",
    "state": "liquid",
    "structureType": "planar",
    "glowColor": "#6366f1",
    "description": {
      "en": "The crown jewel of aromatic chemistry. A stable hexagonal ring with delocalized pi-electrons, famously envisioned by August Kekulé in a dream of a snake eating its own tail.",
      "ru": "Король ароматической химии. Идеальное шестиугольное кольцо с делокализованными электронами, структуру которого Кекуле увидел во сне в виде змеи, кусающей свой хвост.",
      "kk": "Ароматты химияның патшасы. Кекуле түсінде өз құйрығын тістеген жылан түрінде көрген алтыбұрышты тұрақты сақина."
    },
    "realWorldUse": {
      "en": "Synthesis of polystyrene, nylon, pharmaceuticals, synthetic rubbers, octane booster in gasoline",
      "ru": "Синтез пенопласта, капрона, лекарств, полимеров, повышение октанового числа бензина",
      "kk": "Пенопласт, капрон, дәрі-дәрмектер, резеңке жасау, бензиннің октан санын арттыру"
    },
    "funFact": {
      "en": "Benzene's ring electrons do not stay between specific carbon atoms; they form a seamless continuous doughnut-shaped quantum cloud above and below the ring!",
      "ru": "Электроны бензольного кольца не принадлежат отдельным атомам, а образуют единое квантовое 'электронное облако-бублик' над и под плоскостью кольца!",
      "kk": "Бензол сақинасының электрондары жеке атомарлық емес, сақинаның үсті мен астында біртұтас кванттық сақиналы бұлт түзеді!"
    }
  },
  {
    "id": "toluene",
    "formula": "C₇H₈",
    "formulaAscii": "C7H8",
    "atoms": {
      "C": 7,
      "H": 8
    },
    "name": {
      "en": "Toluene (Methylbenzene)",
      "ru": "Толуол",
      "kk": "Толуол (Метилбензол)"
    },
    "scientificName": {
      "en": "Methylbenzene",
      "ru": "Метилбензол",
      "kk": "Метилбензол"
    },
    "category": "organic",
    "hazard": "caution",
    "state": "liquid",
    "structureType": "planar",
    "glowColor": "#3b82f6",
    "description": {
      "en": "Clear, water-insoluble liquid with a sweet paint-thinner aroma. A benzene ring attached to a methyl group, used as an industrial solvent and precursor to TNT.",
      "ru": "Прозрачная летучая жидкость с характерным запахом растворителя красок. Основа растворителей 646/647 и сырье для синтеза тротила (TNT).",
      "kk": "Бояу еріткіш иісі бар мөлдір ұшқыш сұйықтық. 646/647 еріткіштерінің негізі және тротил (TNT) жарылғышын алудың шикізаты."
    },
    "realWorldUse": {
      "en": "Paint and lacquer thinner, aviation high-octane gasoline, synthesis of benzoic acid and dyes",
      "ru": "Растворитель автомобильных эмалей и лаков, добавка в авиационный бензин, синтез красителей",
      "kk": "Автокөлік эмалдері мен лактарының еріткіші, авиациялық бензин қоспасы, бояғыштар синтезі"
    },
    "funFact": {
      "en": "Nitrating toluene with a mixture of nitric and sulfuric acids attaches three nitro groups to produce the military explosive TNT (Trinitrotoluene)!",
      "ru": "Нитрование толуола смесью азотной и серной кислот присоединяет три нитрогруппы, превращая его в знаменитый тротил (ТНТ)!",
      "kk": "Толуолды азот және күкірт қышқылдарының қоспасымен нитрлеу оған үш нитротоп қосып, әйгілі тротил (ТНТ) жарылғышына айналдырады!"
    }
  },
  {
    "id": "methanol",
    "formula": "CH₃OH",
    "formulaAscii": "CH4O",
    "atoms": {
      "C": 1,
      "H": 4,
      "O": 1
    },
    "name": {
      "en": "Methanol (Wood Alcohol)",
      "ru": "Метанол (Древесный спирт)",
      "kk": "Метанол (Ағаш спирті)"
    },
    "scientificName": {
      "en": "Methanol",
      "ru": "Метиловый спирт",
      "kk": "Метил спирті"
    },
    "category": "fuel",
    "hazard": "danger",
    "state": "liquid",
    "structureType": "tetrahedral",
    "glowColor": "#ef4444",
    "description": {
      "en": "Simplest alcohol and dangerous poison. Smells and tastes identical to drinking ethanol, but just 10 ml metabolizes into formaldehyde and formic acid, causing blindness.",
      "ru": "Древесный спирт, опаснейший яд. По запаху и вкусу неотличим от пищевого спирта, но всего 10 мл в организме окисляются до муравьиной кислоты, вызывая слепоту.",
      "kk": "Ағаш спирті, қауіпті у. Дәмі мен иісі кәдімгі ішетін спирттен айнымайды, бірақ бар болғаны 10 мл ағзада құмырсқа қышқылына айналып, соқырлыққа әкеледі."
    },
    "realWorldUse": {
      "en": "Formaldehyde and plastics synthesis, high-performance racing fuel (IndyCar), windshield washer fluid",
      "ru": "Производство смол и клеев, топливо для гоночных болидов IndyCar, зимние стеклоомыватели",
      "kk": "Смолалар мен желімдер жасау, IndyCar жарыс көліктерінің отыны, қысқы әйнек жуғыштар"
    },
    "funFact": {
      "en": "Methanol burns with an almost invisible pale-blue flame in daylight, so race-car drivers caught in a methanol fire can only be seen waving frantically!",
      "ru": "Метанол горит при дневном свете абсолютно невидимым пламенем: гонщики на пит-стопе могут гореть в огне, которого зрители даже не видят!",
      "kk": "Метанол күндіз көрінбейтін мөлдір жалынмен жанады: жарыс кезінде метанол тұтанғанда адамның отқа оранғаны сырт көзге байқалмай да қалуы мүмкін!"
    }
  },
  {
    "id": "glycerol",
    "formula": "C₃H₈O₃",
    "formulaAscii": "C3H8O3",
    "atoms": {
      "C": 3,
      "H": 8,
      "O": 3
    },
    "name": {
      "en": "Glycerol (Glycerin)",
      "ru": "Глицерин",
      "kk": "Глицерин"
    },
    "scientificName": {
      "en": "Propane-1,2,3-triol",
      "ru": "Пропан-1,2,3-триол",
      "kk": "Пропан-1,2,3-триол"
    },
    "category": "household",
    "hazard": "safe",
    "state": "liquid",
    "structureType": "complex",
    "glowColor": "#a855f7",
    "description": {
      "en": "Sweet-tasting, non-toxic viscous syrup with three hydroxyl groups (-OH). The molecular backbone of all natural fats, vegetable oils, and moisturizing cosmetics.",
      "ru": "Сладкая вязкая жидкость, трехатомный спирт. Основа всех природных жиров, сливочного и подсолнечного масел, увлажняющих кремов и мыла.",
      "kk": "Тәтті дәмді қою сұйықтық, үш атомды спирт. Барлық табиғи майлардың, өсімдік майларының, кремдер мен сабынның молекулалық негізі."
    },
    "realWorldUse": {
      "en": "Skin moisturizers, cough syrups, bakery moisture preservative (E422), vape liquid base, soap",
      "ru": "Увлажняющие кремы, сиропы от кашля, сохранение свежести выпечки (E422), основа мыла",
      "kk": "Ылғалдандырғыш кремдер, жөтел сироптары, нан өнімдерінің балғындығын сақтау (E422), сабын"
    },
    "funFact": {
      "en": "Reacting thick gentle glycerin with nitric and sulfuric acids produces Nitroglycerin — both the explosive in dynamite and a lifesaving heart attack medicine!",
      "ru": "Обработка мирного глицерина смесью кислот дает нитроглицерин — основу динамита Нобеля и спасительное лекарство при сердечных приступах!",
      "kk": "Глицеринді қышқылдармен өңдеу нитроглицеринді түзеді — ол әрі Нобель динамитінің негізі, әрі жүрек талмасын тоқтататын дәрі!"
    }
  },
  {
    "id": "ethylene-glycol",
    "formula": "C₂H₆O₂",
    "formulaAscii": "C2H6O2",
    "atoms": {
      "C": 2,
      "H": 6,
      "O": 2
    },
    "name": {
      "en": "Ethylene Glycol (Antifreeze)",
      "ru": "Этиленгликоль (Антифриз / Тосол)",
      "kk": "Этиленгликоль (Антифриз / Тосол)"
    },
    "scientificName": {
      "en": "Ethane-1,2-diol",
      "ru": "Этан-1,2-диол",
      "kk": "Этан-1,2-диол"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "liquid",
    "structureType": "complex",
    "glowColor": "#22c55e",
    "description": {
      "en": "Sweet-tasting, toxic diol that drops the freezing point of radiator water to -50°C. Prevents car engine blocks from cracking in freezing Siberian and Kazakh winters.",
      "ru": "Двухатомный спирт, сердце автомобильного антифриза и тосола. Снижает температуру замерзания воды до -50°C, спасая двигатели в суровые зимы Казахстана.",
      "kk": "Автокөлік антифризі мен тосолының негізі. Судың қату температурасын -50°C-қа дейін төмендетіп, қыста қозғалтқыштардың жарылуынан сақтайды."
    },
    "realWorldUse": {
      "en": "Automotive engine coolant antifreeze, aircraft wing de-icing sprays, PET plastic bottle polymer precursor",
      "ru": "Охлаждающая жидкость для автомобилей, антиобледенитель для крыльев самолетов, производство PET-бутылок",
      "kk": "Автокөліктердің салқындатқыш сұйықтығы, ұшақ қанаттарын мұздан қорғау, PET-бөтелкелер шикізаты"
    },
    "funFact": {
      "en": "Ethylene glycol polymerizes with terephthalic acid to create Polyethylene Terephthalate (PET) — the plastic of every soda bottle and polyester fleece jacket on Earth!",
      "ru": "Из этиленгликоля синтезируют полиэтилентерефталат (ПЭТ) — пластик, из которого сделаны все пластиковые бутылки для газировки и флисовая одежда!",
      "kk": "Этиленгликольден барлық пластик бөтелкелер мен флис күртелері жасалатын атақты полиэтилентерефталат (PET) синтезделеді!"
    }
  },
  {
    "id": "formic-acid",
    "formula": "HCOOH",
    "formulaAscii": "CH2O2",
    "atoms": {
      "C": 1,
      "H": 2,
      "O": 2
    },
    "name": {
      "en": "Formic Acid",
      "ru": "Муравьиная кислота",
      "kk": "Құмырсқа қышқылы"
    },
    "scientificName": {
      "en": "Methanoic Acid",
      "ru": "Метановая кислота",
      "kk": "Метан қышқылы"
    },
    "category": "organic",
    "hazard": "caution",
    "state": "liquid",
    "structureType": "planar",
    "glowColor": "#f97316",
    "description": {
      "en": "Simplest carboxylic acid. The natural chemical venom injected by biting ants and stinging nettle leaves, causing intense itching and burning blisters.",
      "ru": "Простейшая карбоновая кислота. Природное химическое оружие муравьев и жгучих волосков крапивы, вызывающее жжение и волдыри.",
      "kk": "Ең қарапайым карбон қышқылы. Құмырсқаның шағуында және қынап (қалақай) жапырақтарының түктерінде болатын, теріні күйдіретін табиғи қышқыл."
    },
    "realWorldUse": {
      "en": "Livestock winter silage antibacterial preservative, leather tanning, rubber tree latex coagulation",
      "ru": "Консервация кормового силоса для скота зимой, дубление кожи, створаживание латекса каучука",
      "kk": "Малдың қысқы жем-шөбін (силос) бұзылудан сақтау, тері өңдеу, каучук латексін ұйыту"
    },
    "funFact": {
      "en": "When a medieval alchemist distilled hundreds of red forest ants in a glass retort in 1671, the acid vapors were so concentrated that they etched the glass!",
      "ru": "В 1671 году английский натуралист Джон Рэй впервые получил эту кислоту, буквально перегнав в колбе тысячи лесных муравьев!",
      "kk": "1671 жылы ағылшын ғалымы Джон Рэй мыңдаған орман құмырсқаларын арнайы ыдыста қайнату арқылы осы қышқылды алғаш рет бөліп алған!"
    }
  },
  {
    "id": "citric-acid",
    "formula": "C₆H₈O₇",
    "formulaAscii": "C6H8O7",
    "atoms": {
      "C": 6,
      "H": 8,
      "O": 7
    },
    "name": {
      "en": "Citric Acid",
      "ru": "Лимонная кислота",
      "kk": "Лимон қышқылы"
    },
    "scientificName": {
      "en": "2-Hydroxypropane-1,2,3-tricarboxylic Acid",
      "ru": "Лимонная кислота",
      "kk": "Лимон қышқылы"
    },
    "category": "household",
    "hazard": "safe",
    "state": "solid",
    "structureType": "complex",
    "glowColor": "#facc15",
    "description": {
      "en": "Tangy organic tricarboxylic acid found in lemons and oranges. Central fuel molecule in the Krebs Cycle, generating 95% of the cellular energy (ATP) in your body.",
      "ru": "Приятная кислая соль цитрусовых фруктов. Центральный участник Цикла Кребса, обеспечивающий выработку 95% энергии (АТФ) в каждой клетке нашего тела.",
      "kk": "Лимон мен апельсинге қышқыл дәм беретін зат. Денеміздегі әрбір жасушаға 95% энергия беретін Кребс циклінің басты отыны."
    },
    "realWorldUse": {
      "en": "Sour candy flavoring, soft drinks acidity regulator (E330), electric kettle eco-friendly descaling",
      "ru": "Кислые мармеладки и газировка (E330), экологичное удаление накипи в чайниках и стиральных машинах",
      "kk": "Қышқыл кәмпиттер мен сусындар (E330), шәйнектің қағын экологиялық таза жолмен кетіру"
    },
    "funFact": {
      "en": "Almost all citric acid today isn't squeezed from lemons — it is bio-fermented on an industrial scale by feeding sugar molasses to the black mold Aspergillus niger!",
      "ru": "Почти вся лимонная кислота в мире делается не из лимонов: ее производят микроскопические черные плесневые грибки, перерабатывая сахарную патоку!",
      "kk": "Әлемдегі лимон қышқылының барлығы дерлік лимоннан сығылмайды: оны арнайы микроскопиялық саңырауқұлақтарға қантты ашыту арқылы алады!"
    }
  },
  {
    "id": "caffeine",
    "formula": "C₈H₁₀N₄O₂",
    "formulaAscii": "C8H10N4O2",
    "atoms": {
      "C": 8,
      "H": 10,
      "N": 4,
      "O": 2
    },
    "name": {
      "en": "Caffeine",
      "ru": "Кофеин",
      "kk": "Кофеин"
    },
    "scientificName": {
      "en": "1,3,7-Trimethylxanthine",
      "ru": "1,3,7-Триметилксантин",
      "kk": "1,3,7-Триметилксантин"
    },
    "category": "organic",
    "hazard": "safe",
    "state": "solid",
    "structureType": "complex",
    "glowColor": "#854d0e",
    "description": {
      "en": "World's most popular psychoactive central nervous system stimulant. Blocks brain adenosine sleepiness receptors, restoring alertness and fighting mental fatigue.",
      "ru": "Самый популярный в мире природный стимулятор бодрости. Блокирует аденозиновые рецепторы усталости в мозге, прогоняя сонливость и повышая концентрацию.",
      "kk": "Әлемдегі ең танымал табиғи сергіткіш зат. Мидағы шаршауды сездіретін аденозин рецепторларын бұғаттап, ұйқыны ашады және зейінді күшейтеді."
    },
    "realWorldUse": {
      "en": "Morning coffee and tea alertness, energy drinks, migraine pain relievers, athletic pre-workout",
      "ru": "Утренний кофе и чай, энергетические напитки, таблетки от головной боли (Цитрамон), спортпит",
      "kk": "Таңертеңгі кофе мен шай, энергетикалық сусындар, бас ауруына қарсы дәрілер (Цитрамон)"
    },
    "funFact": {
      "en": "In coffee plants, caffeine evolved not to wake humans up, but as a natural neurotoxin pesticide that paralyzes and kills insects trying to eat the leaves!",
      "ru": "Кофейное дерево придумало кофеин не для людей, а как природный паралитический яд против жуков-вредителей, пытающихся съесть его листья!",
      "kk": "Кофе ағашы кофеинді адамдар үшін емес, оның жапырағын жегісі келген зиянкес жәндіктерді сал қылып өлтіретін табиғи у ретінде ойлап тапқан!"
    }
  },
  {
    "id": "aspirin",
    "formula": "C₉H₈O₄",
    "formulaAscii": "C9H8O4",
    "atoms": {
      "C": 9,
      "H": 8,
      "O": 4
    },
    "name": {
      "en": "Aspirin (Acetylsalicylic Acid)",
      "ru": "Аспирин (Ацетилсалициловая кислота)",
      "kk": "Аспирин (Ацетилсалицил қышқылы)"
    },
    "scientificName": {
      "en": "2-Acetoxybenzoic Acid",
      "ru": "2-Ацетоксибензойная кислота",
      "kk": "2-Ацетоксибензой қышқылы"
    },
    "category": "household",
    "hazard": "safe",
    "state": "solid",
    "structureType": "complex",
    "glowColor": "#ec4899",
    "description": {
      "en": "The iconic wonder drug synthesized in 1897 by Felix Hoffmann. Inhibits COX enzymes to silence prostaglandins, vanquishing fever, pain, and blood clots.",
      "ru": "Легендарное лекарство, синтезированное в 1897 году. Блокирует фермент ЦОГ, останавливая синтез простагландинов — устраняет жар, боль и снижает риск тромбов.",
      "kk": "1897 жылы синтезделген ғасырлық ғажайып дәрі. Қызуды түсіреді, ауырсынуды басады және қанның ұюын азайтып, тромб түзілуден сақтайды."
    },
    "realWorldUse": {
      "en": "Fever reduction, headache relief, daily low-dose heart attack and ischemic stroke prevention",
      "ru": "Снятие жара при простуде, головная боль, профилактика инфарктов и инсультов (разжижение крови)",
      "kk": "Тұмау кезінде қызу түсіру, бас ауруын басу, инфаркт пен инсульттің алдын алу"
    },
    "funFact": {
      "en": "Hippocrates in 400 BC prescribed willow tree bark tea for childbirth pains; 2,300 years later scientists discovered that willow bark contains salicin, the parent of aspirin!",
      "ru": "Еще Гиппократ 2400 лет назад лечил лихорадку отваром коры ивы: спустя века ученые поняли, что кора ивы содержит салицин — природную основу аспирина!",
      "kk": "Осыдан 2400 жыл бұрын Гиппократ қызуды тал ағашының қабығымен емдеген: ғасырлар өткен соң ғалымдар тал қабығында аспириннің негізі салицин бар екенін дәлелдеді!"
    }
  },
  {
    "id": "paracetamol",
    "formula": "C₈H₉NO₂",
    "formulaAscii": "C8H9NO2",
    "atoms": {
      "C": 8,
      "H": 9,
      "N": 1,
      "O": 2
    },
    "name": {
      "en": "Paracetamol (Acetaminophen)",
      "ru": "Парацетамол",
      "kk": "Парацетамол"
    },
    "scientificName": {
      "en": "N-(4-Hydroxyphenyl)acetamide",
      "ru": "N-(4-Гидроксифенил)ацетамид",
      "kk": "N-(4-Гидроксифенил)ацетамид"
    },
    "category": "household",
    "hazard": "safe",
    "state": "solid",
    "structureType": "complex",
    "glowColor": "#60a5fa",
    "description": {
      "en": "The world's foremost fever reducer and painkiller on the WHO Essential Medicines list. Gently modulates central nervous system pain receptors without irritating stomach lining.",
      "ru": "Главное жаропонижающее и обезболивающее планеты из списка ВОЗ. Действует на болевые центры в мозге, не повреждая слизистую оболочку желудка.",
      "kk": "Дүниежүзілік денсаулық сақтау ұйымының тізіміндегі басты қызу түсіргіш дәрі. Асқазанды тітіркендірмей, мидағы ауырсыну орталығына жұмсақ әсер етеді."
    },
    "realWorldUse": {
      "en": "High fever reduction in children and adults, toothache relief, influenza symptom treatment",
      "ru": "Сбивание высокой температуры при гриппе, зубная боль, компонент порошков Терафлю/Фервекс",
      "kk": "Тұмау кезіндегі жоғары температураны түсіру, тіс ауруын басу, Терафлю/Фервекс негізі"
    },
    "funFact": {
      "en": "Paracetamol is unique because unlike Ibuprofen and Aspirin, it has almost no anti-inflammatory action — it acts almost exclusively on temperature and pain signals in the brain!",
      "ru": "В отличие от ибупрофена, парацетамол почти не снимает воспаление в мышцах — он работает адресно в головном мозге, перенастраивая внутренний 'термостат' тела!",
      "kk": "Ибупрофеннен айырмашылығы, парацетамол қабынуды емес, тікелей мидағы дененің ішкі 'термостатын' реттеп, қызу мен ауырсынуды ғана басады!"
    }
  },
  {
    "id": "urea",
    "formula": "CO(NH₂)₂",
    "formulaAscii": "CH4N2O",
    "atoms": {
      "C": 1,
      "H": 4,
      "N": 2,
      "O": 1
    },
    "name": {
      "en": "Urea (Carbamide)",
      "ru": "Мочевина (Карбамид)",
      "kk": "Карбамид (Несепнәр)"
    },
    "scientificName": {
      "en": "Carbonyl Diamide",
      "ru": "Диамид угольной кислоты",
      "kk": "Карбамид"
    },
    "category": "organic",
    "hazard": "safe",
    "state": "solid",
    "structureType": "planar",
    "glowColor": "#38bdf8",
    "description": {
      "en": "In 1828 Friedrich Wöhler synthesized urea from inorganic cyanate, demolishing the ancient 'Vital Force' doctrine and single-handedly giving birth to Organic Chemistry.",
      "ru": "В 1828 году Фридрих Вёлер синтезировал ее из неживых минералов, доказав, что органические молекулы не требуют мистической 'жизненной силы'. Рождение органической химии!",
      "kk": "1828 жылы Фридрих Вёлер оны бейорганикалық тұздан синтездеп, 'тіршілік күші' туралы мифті жойды және тұтас Органикалық химия ғылымына бастау берді!"
    },
    "realWorldUse": {
      "en": "Concentrated 46% nitrogen fertilizer, diesel exhaust fluid (AdBlue) reducing smog, moisturizing skin creams",
      "ru": "Самое концентрированное азотное удобрение (46% азота), добавка AdBlue для очистки выхлопа дизелей",
      "kk": "Ең бай азотты тыңайтқыш (46% азот), дизельді көліктердің түтінін тазартатын AdBlue сұйықтығы"
    },
    "funFact": {
      "en": "Every modern diesel truck driving on city highways squirts a solution of urea (AdBlue) directly into its scorching exhaust pipe to transform toxic smog into harmless nitrogen and water!",
      "ru": "Каждый современный грузовик впрыскивает раствор карбамида (AdBlue) в раскаленный глушитель, превращая ядовитый смог в чистейший безвредный азот и воду!",
      "kk": "Кез келген заманауи жүк көлігі улы түтінді залалсыздандыру үшін қызған глушительге несепнәр ерітіндісін (AdBlue) бүркіп, оны таза азот пен суға айналдырады!"
    }
  },
  {
    "id": "glycine",
    "formula": "C₂H₅NO₂",
    "formulaAscii": "C2H5NO2",
    "atoms": {
      "C": 2,
      "H": 5,
      "N": 1,
      "O": 2
    },
    "name": {
      "en": "Glycine (Simplest Amino Acid)",
      "ru": "Глицин",
      "kk": "Глицин"
    },
    "scientificName": {
      "en": "2-Aminoethanoic Acid",
      "ru": "2-Аминоэтановая кислота",
      "kk": "2-Аминоэтан қышқылы"
    },
    "category": "organic",
    "hazard": "safe",
    "state": "solid",
    "structureType": "complex",
    "glowColor": "#818cf8",
    "description": {
      "en": "The smallest and simplest of the 20 genetic code amino acids. A primary inhibitory neurotransmitter in the human central nervous system and key component of collagen protein.",
      "ru": "Самая простая аминокислота жизни. Главный тормозной нейромедиатор головного мозга, снимающий стресс и тревожность, а также основа коллагена кожи и связок.",
      "kk": "Өмірдің ең қарапайым аминқышқылы. Мидағы күйзелісті басып, сабырлық сыйлайтын тежегіш нейромедиатор және тері мен буындар коллагенінің негізі."
    },
    "realWorldUse": {
      "en": "Nootropic brain and sleep supplement, collagen synthesis for joints and skin, animal feed additive",
      "ru": "Аптечные таблетки для концентрации внимания и сна, пептиды коллагена для суставов и молодости кожи",
      "kk": "Ұйқы мен есте сақтауды жақсартатын дәріханалық дәрілер, тері мен буындарға арналған коллаген"
    },
    "funFact": {
      "en": "NASA's Stardust space probe collected glycine molecules directly from the tail of Comet Wild 2, proving that the building blocks of life formed in deep space!",
      "ru": "Космический зонд NASA Stardust поймал молекулы глицина прямо из ледяного хвоста кометы Вильда 2, доказав, что кирпичики жизни рождаются в глубоком космосе!",
      "kk": "NASA ғарыш зонды Wild 2 кометасының құйрығынан глицин молекулаларын тапты, бұл тіршіліктің алғашқы кірпіштері ғарыш түкпірінде пайда болатынын дәлелдеді!"
    }
  },
  {
    "id": "trinitrotoluene-tnt",
    "formula": "C₇H₅N₃O₆",
    "formulaAscii": "C7H5N3O6",
    "atoms": {
      "C": 7,
      "H": 5,
      "N": 3,
      "O": 6
    },
    "name": {
      "en": "TNT (Trinitrotoluene)",
      "ru": "Тротил (Тринитротолуол)",
      "kk": "Тротил (Тринитротолуол)"
    },
    "scientificName": {
      "en": "2,4,6-Trinitrotoluene",
      "ru": "2,4,6-Тринитротолуол",
      "kk": "2,4,6-Тринитротолуол"
    },
    "category": "fuel",
    "hazard": "danger",
    "state": "solid",
    "structureType": "planar",
    "glowColor": "#ef4444",
    "description": {
      "en": "The universal standard benchmark for explosive power. Remarkable for being so chemically stable that it can be safely melted and poured into artillery shells without exploding.",
      "ru": "Мировой эталон взрывной мощи ('тротиловый эквивалент'). Настолько стабилен, что его можно плавить в кастрюле и заливать в снаряды без риска детонации.",
      "kk": "Жарылыс қуатының әлемдік эталоны ('тротил баламасы'). Тұрақтылығы сонша, оны ерітіп, қауіпсіз түрде снарядтарға құюға болады."
    },
    "realWorldUse": {
      "en": "Civil engineering canal and mountain excavation, military munitions, standard explosive rating benchmark",
      "ru": "Прокладка горных тоннелей и каналов, взрывные работы в карьерах, мерило мощности ядерного оружия",
      "kk": "Таулы туннельдер мен каналдарды қазу, карьерлердегі жару жұмыстары, ядролық қару қуатының өлшемі"
    },
    "funFact": {
      "en": "When first synthesized by German chemist Julius Wilbrand in 1863, TNT was used as a bright yellow dye for wool and silk — nobody knew it could explode for 30 years!",
      "ru": "Когда тротил открыли в 1863 году, его 30 лет использовали просто как безобидный желтый краситель для шерсти, даже не догадываясь, что он может взорваться!",
      "kk": "1863 жылы тротил алғаш ашылғанда, оның жарылатынын 30 жыл бойы ешкім білмеген және оны жүн мен жібекті бояйтын сары бояу ретінде пайдаланған!"
    }
  },
  {
    "id": "calcium-carbide",
    "formula": "CaC₂",
    "formulaAscii": "CaC2",
    "atoms": {
      "Ca": 1,
      "C": 2
    },
    "name": {
      "en": "Calcium Carbide",
      "ru": "Карбид кальция",
      "kk": "Кальций карбиді"
    },
    "scientificName": {
      "en": "Calcium Acetylide",
      "ru": "Ацетиленид кальция",
      "kk": "Кальций ацетилениді"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#e2e8f0",
    "description": {
      "en": "Gray-black rocky mineral produced in electric arc furnaces. Dropping it into water reacts violently, producing clouds of combustible Acetylene gas (C₂H₂) for welding.",
      "ru": "Серо-черные камни электропечной плавки. При контакте с водой шипит и бурно выделяет горючий газ ацетилен для газовой сварки металлов.",
      "kk": "Сұр-қара түсті минералды зат. Суға түскенде қатты ысылдап, металдарды дәнекерлеуге арналған жанатын ацетилен газын (C₂H₂) бөліп шығарады."
    },
    "realWorldUse": {
      "en": "Acetylene gas generation for oxy-acetylene welding torches, miner's carbide lamps, steel desulfurization",
      "ru": "Получение ацетилена для сварки и резки рельсов, шахтерские карбидные фонари, обессеривание чугуна",
      "kk": "Рельстерді кесу және дәнекерлеуге арналған ацетилен алу, шахтер шамдары, шойынды тазарту"
    },
    "funFact": {
      "en": "Before battery-powered flashlights were invented, cave explorers and miners illuminated deep pitch-black underground caverns with flaming calcium carbide drip lamps!",
      "ru": "До изобретения электрических фонариков спелеологи и шахтеры освещали подземные пещеры карбидными лампами, где вода по каплям капала на карбид!",
      "kk": "Электр шамдары шыққанға дейін шахтерлер мен үңгір зерттеушілері жерастын карбид шамдарының жалынымен жарықтандырған!"
    }
  },
  {
    "id": "tungsten-carbide",
    "formula": "WC",
    "formulaAscii": "WC",
    "atoms": {
      "W": 1,
      "C": 1
    },
    "name": {
      "en": "Tungsten Carbide (Pobedit)",
      "ru": "Карбид вольфрама (Победит)",
      "kk": "Вольфрам карбиді (Победит)"
    },
    "scientificName": {
      "en": "Tungsten Monocarbide",
      "ru": "Монокарбид вольфрама",
      "kk": "Вольфрам монокарбиді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#94a3b8",
    "description": {
      "en": "Super-hard ceramic alloy known in the USSR as 'Pobedit' (Victory metal). Approaching diamond in hardness, it drills through armor plate and deep subterranean oil wells.",
      "ru": "Сверхтвердый сплав 'Победит'. По твердости уступает лишь алмазу: наконечники из него бурят гранитные скалы, нефтяные скважины и пробивают броню.",
      "kk": "Аса қатты 'Победит' қорытпасы. Қаттылығы жағынан тек алмастан кейін тұрады: гранит жартастар мен мұнай ұңғымаларын бұрғылайтын қашаулардың негізі."
    },
    "realWorldUse": {
      "en": "Oil and gas rotary drill bits, scratch-proof wedding rings, metal cutting lathe tool inserts, ballpoint pen tips",
      "ru": "Буровые коронки для нефтяных скважин Казахстана, резцы станков, нецарапающиеся кольца, шарики ручек",
      "kk": "Қазақстанның мұнай ұңғымаларын бұрғылау қашаулары, станок кескіштері, сызылмайтын жүзіктер"
    },
    "funFact": {
      "en": "The tiny ball at the very tip of your favorite ballpoint pen is made of mirror-polished tungsten carbide so it never deforms over miles of writing!",
      "ru": "Крошечный шарик на кончике вашей шариковой ручки сделан из полированного карбида вольфрама, чтобы он не стирался годами!",
      "kk": "Кез келген сапалы қаламсаптың ұшындағы кішкентай шарик жылдар бойы мүжілмеуі үшін дәл осы вольфрам карбидінен жасалады!"
    }
  },
  {
    "id": "titanium-nitride",
    "formula": "TiN",
    "formulaAscii": "TiN",
    "atoms": {
      "Ti": 1,
      "N": 1
    },
    "name": {
      "en": "Titanium Nitride (Golden Shield)",
      "ru": "Нитрид титана (Золотое напыление)",
      "kk": "Титан нитриді"
    },
    "scientificName": {
      "en": "Titanium Mononitride",
      "ru": "Мононитрид титана",
      "kk": "Титан мононитриді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#fbbf24",
    "description": {
      "en": "Extremely hard ceramic coating that shines with a rich golden luster. Applied by vapor deposition to drill bits, spacecraft surfaces, and architectural cathedral domes.",
      "ru": "Сверхпрочное керамическое покрытие с ослепительным золотым блеском. Напыляется в вакууме на сверла по металлу и на золотые купола соборов и мечетей.",
      "kk": "Көз тартарлық алтын түстес аса қатты керамикалық қаптама. Металл бұрғыларына, ғарыш кемелеріне және мешіттер мен ғибадатханалардың алтын күмбездеріне жағылады."
    },
    "realWorldUse": {
      "en": "Gold-colored high-speed drill bits, mosque and cathedral golden roof domes, artificial hip joints",
      "ru": "Золотистые сверла по металлу, позолота куполов мечетей (не тускнеет веками), титановые протезы",
      "kk": "Алтын түстес металл бұрғылары, мешіт күмбездерінің алтын жалатылған беті (ғасырлар бойы оңбайды)"
    },
    "funFact": {
      "en": "The shimmering golden domes of modern architecture are often coated with titanium nitride instead of real gold because TiN is scratchproof and never tarnishes in acid rain!",
      "ru": "Многие сверкающие купола покрыты не золотом, а нитридом титана: он прочнее стали, не царапается и не тускнеет от кислотных дождей веками!",
      "kk": "Көптеген сәулетті ғимараттардың күмбездері нағыз алтынмен емес, титан нитридімен қапталады: ол болаттан мықты және қышқыл жаңбырдан мүлде бүлінбейді!"
    }
  },
  {
    "id": "sulfur-hexafluoride",
    "formula": "SF₆",
    "formulaAscii": "SF6",
    "atoms": {
      "S": 1,
      "F": 6
    },
    "name": {
      "en": "Sulfur Hexafluoride (Elegas)",
      "ru": "Гексафторид серы (Элегаз)",
      "kk": "Күкірт гексафториді (Элегаз)"
    },
    "scientificName": {
      "en": "Sulfur Hexafluoride",
      "ru": "Гексафторид серы",
      "kk": "Күкірт гексафториді"
    },
    "category": "gas",
    "hazard": "safe",
    "state": "gas",
    "structureType": "complex",
    "glowColor": "#67e8f9",
    "description": {
      "en": "Colorless, odorless gas that is 5 times heavier than air. Renowned as the supreme electrical insulator in high-voltage substations and for making human voices hilarious deep baritone.",
      "ru": "Удивительный тяжелый газ (элегаз), в 5 раз тяжелее воздуха. Лучший в мире изолятор в высоковольтных электросетях. При вдыхании делает голос комично басовитым!",
      "kk": "Ауадан 5 есе ауыр ғажайып газ (элегаз). Жоғары вольтты электр желілеріндегі ең мықты оқшаулағыш. Жұтқан кезде адамның дауысын күлкілі жуан баритонға айналдырады!"
    },
    "realWorldUse": {
      "en": "High-voltage circuit breaker spark quenchers, retinal eye surgery tamponade gas, magnesium casting shield",
      "ru": "Высоковольтные элегазовые выключатели на подстанциях (тушение искры), операции на сетчатке глаза",
      "kk": "Қосалқы станциялардағы жоғары вольтты элегаздық сөндіргіштер, көз торына жасалатын оталар"
    },
    "funFact": {
      "en": "Because SF₆ is so dense, a lightweight tinfoil boat floats on top of an invisible aquarium filled with it as if floating on water!",
      "ru": "Из-за высокой плотности элегаза кораблик из фольги плавает по воздуху в прозрачном аквариуме, словно на невидимой воде!",
      "kk": "Элегаздың тығыздығының жоғарылығы сонша, фольгадан жасалған қайық осы газбен толтырылған бос аквариумның бетінде су бетіндегідей қалқып жүре алады!"
    }
  },
  {
    "id": "chloroform",
    "formula": "CHCl₃",
    "formulaAscii": "CHCl3",
    "atoms": {
      "C": 1,
      "H": 1,
      "Cl": 3
    },
    "name": {
      "en": "Chloroform",
      "ru": "Хлороформ",
      "kk": "Хлороформ"
    },
    "scientificName": {
      "en": "Trichloromethane",
      "ru": "Трихлорметан",
      "kk": "Трихлорметан"
    },
    "category": "organic",
    "hazard": "danger",
    "state": "liquid",
    "structureType": "tetrahedral",
    "glowColor": "#22c55e",
    "description": {
      "en": "Sweet-smelling dense liquid that revolutionized medicine in 1847 when James Young Simpson discovered its surgical anesthetic properties, used by Queen Victoria during childbirth.",
      "ru": "Тяжелая летучая жидкость со сладковатым запахом. Произвела революцию в медицине в 1847 году как первый массовый хирургический наркоз, избавивший людей от боли.",
      "kk": "Тәтті иісті ауыр ұшқыш сұйықтық. 1847 жылы алғашқы хирургиялық наркоз ретінде медицинада төңкеріс жасап, адамдарды ота кезіндегі қиналыстан құтқарған."
    },
    "realWorldUse": {
      "en": "Refrigerant fluoropolymer precursor (PTFE/Teflon), laboratory solvent for waxes and oils",
      "ru": "Сырье для синтеза тефлона (политетрафторэтилена) и хладагентов, органический растворитель",
      "kk": "Тефлон мен хладагенттер синтезінің шикізаты, майлар мен смолалардың органикалық еріткіші"
    },
    "funFact": {
      "en": "Queen Victoria championed the medical use of chloroform in 1853 during the birth of Prince Leopold, breaking centuries of superstition against pain relief during labor!",
      "ru": "В 1853 году королева Великобритании Виктория впервые согласилась на наркоз хлороформом при родах, навсегда сделав обезболивание нормой медицины!",
      "kk": "1853 жылы Ұлыбритания патшайымы Виктория босану кезінде хлороформды қолданып, медицинада ауырсынуды басуды қалыпты жағдайға айналдырды!"
    }
  },
  {
    "id": "hydrazine",
    "formula": "N₂H₄",
    "formulaAscii": "N2H4",
    "atoms": {
      "N": 2,
      "H": 4
    },
    "name": {
      "en": "Hydrazine (Rocket Fuel)",
      "ru": "Гидразин (Ракетное топливо)",
      "kk": "Гидразин (Зымыран отыны)"
    },
    "scientificName": {
      "en": "Diazane",
      "ru": "Диазан",
      "kk": "Диазан"
    },
    "category": "fuel",
    "hazard": "danger",
    "state": "liquid",
    "structureType": "bent",
    "glowColor": "#38bdf8",
    "description": {
      "en": "Hypergolic rocket propellant that ignites spontaneously on contact with dinitrogen tetroxide oxidizer. Powers deep-space probe steering thrusters and satellite attitude control.",
      "ru": "Высокоэнергетическое ракетное топливо. Самовоспламеняется при контакте с окислителем без искры, управляя маневрами спутников и межпланетных зондов в открытом космосе.",
      "kk": "Жоғары энергиялы зымыран отыны. Тотықтырғышпен жанасқан сәтте ұшқынсыз өздігінен тұтанып, ғарыш кемелері мен жерсеріктердің қозғалтқыштарын басқарады."
    },
    "realWorldUse": {
      "en": "Spacecraft orbital maneuvering thruster propellant (Voyager, Mars rovers, ISS), aircraft EPU fuel",
      "ru": "Маневровые двигатели космических аппаратов Вояджер и марсоходов, аварийные турбины истребителей F-16",
      "kk": "Вояджер ғарыш кемелері мен марсоходтардың маневрлік қозғалтқыштары, авиацияның апаттық отыны"
    },
    "funFact": {
      "en": "The Voyager 1 space probe launched in 1977 still uses its hydrazine thrusters to point its antenna toward Earth from 24 billion kilometers away in interstellar space!",
      "ru": "Космический зонд Вояджер-1, запущенный в 1977 году, до сих пор использует двигатели на гидразине для ориентации антенны на Землю из межзвездного пространства!",
      "kk": "1977 жылы ұшырылған Вояджер-1 ғарыш кемесі жұлдызаралық кеңістіктен антеннасын Жерге бағыттау үшін әлі күнге дейін гидразин қозғалтқыштарын қолданады!"
    }
  },
  {
    "id": "gallium-nitride",
    "formula": "GaN",
    "formulaAscii": "GaN",
    "atoms": {
      "Ga": 1,
      "N": 1
    },
    "name": {
      "en": "Gallium Nitride (GaN)",
      "ru": "Нитрид галлия (GaN)",
      "kk": "Галлий нитриді (GaN)"
    },
    "scientificName": {
      "en": "Gallium Mononitride",
      "ru": "Мононитрид галлия",
      "kk": "Галлий мононитриді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#3b82f6",
    "description": {
      "en": "Revolutionary wide-bandgap semiconductor. Enabled the invention of bright blue LEDs (2014 Nobel Prize in Physics) and powers ultra-compact fast chargers for laptops and phones.",
      "ru": "Революционный полупроводник XXI века. Позволил создать яркие синие светодиоды (Нобелевская премия 2014) и сверхкомпактные скоростные зарядки для ноутбуков и смартфонов.",
      "kk": "XXI ғасырдың революциялық жартылай өткізгіші. Ашық көк жарықдиодтарын (2014 жылғы Нобель сыйлығы) және ноутбуктердің шағын әрі жылдам қуаттағыштарын жасауға мүмкіндік берді."
    },
    "realWorldUse": {
      "en": "Compact 65W/100W GaN fast chargers, blue and violet Blu-ray laser diodes, 5G cellular base stations",
      "ru": "Миниатюрные скоростные GaN-зарядки для гаджетов, синие лазеры Blu-ray, вышки связи 5G",
      "kk": "Шағын 65W/100W GaN жылдам қуаттағыш құрылғылары, Blu-ray көк лазерлері, 5G байланыс станциялары"
    },
    "funFact": {
      "en": "GaN fast chargers are half the size of old silicon chargers and barely get warm because electrons move through gallium nitride at blazing speeds with near-zero heat loss!",
      "ru": "GaN-зарядки вдвое меньше старых кремниевых и почти не нагреваются, потому что электроны несутся сквозь нитрид галлия почти без тепловых потерь!",
      "kk": "GaN қуаттағыштары ескі кремнийлілерге қарағанда екі есе кішкентай және қызбайды, өйткені электрондар оның ішінде жылу жоғалтпай аса жоғары жылдамдықпен қозғалады!"
    }
  },
  {
    "id": "elemental-fluorine",
    "formula": "F₂",
    "formulaAscii": "F2",
    "atoms": {
      "F": 2
    },
    "name": {
      "en": "Fluorine Gas",
      "ru": "Газ фтор",
      "kk": "Фтор газы"
    },
    "scientificName": {
      "en": "Difluorine",
      "ru": "Дифтор",
      "kk": "Дифтор"
    },
    "category": "gas",
    "hazard": "danger",
    "state": "gas",
    "structureType": "linear",
    "glowColor": "#86efac",
    "description": {
      "en": "The most chemically reactive and electronegative element in the entire universe. A pale yellow corrosive halogen gas that sets water, glass, asbestos, and metals on fire.",
      "ru": "Самый электроотрицательный и химически свирепый элемент Вселенной. Бледно-желтый газ, который поджигает воду, стекло, кирпич и металлы при комнатной температуре!",
      "kk": "Әлемдегі ең белсенді және ең электртерістігі жоғары элемент. Қалыпты бөлме температурасында суды, шыныны, кірпішті және металдарды өртеп жіберетін сарғыш газ!"
    },
    "realWorldUse": {
      "en": "Uranium enrichment in centrifuges (UF₆), Teflon non-stick coating synthesis, toothpaste fluoride precursor",
      "ru": "Обогащение ядерного урана в центрифугах (UF₆), синтез тефлона, фториды для зубной пасты",
      "kk": "Ядролық уранды байыту (UF₆), тефлон өндірісі, тіс пасталарының фторидтерін алу"
    },
    "funFact": {
      "en": "Fluorine is so aggressive that simply squirted onto a stream of cold water, it sets water on fire, producing oxygen gas and hydrofluoric acid!",
      "ru": "Фтор настолько агрессивен, что при контакте со струей холодной воды поджигает воду: вода горит в атмосфере фтора фиолетовым пламенем!",
      "kk": "Фтордың белсенділігі соншалық, ол кәдімгі суық сумен жанасқанда суды от болып күлгін жалынмен жандырып жібереді!"
    }
  },
  {
    "id": "elemental-bromine",
    "formula": "Br₂",
    "formulaAscii": "Br2",
    "atoms": {
      "Br": 2
    },
    "name": {
      "en": "Liquid Bromine",
      "ru": "Жидкий бром",
      "kk": "Сұйық бром"
    },
    "scientificName": {
      "en": "Dibromine",
      "ru": "Дибром",
      "kk": "Дибром"
    },
    "category": "gas",
    "hazard": "danger",
    "state": "liquid",
    "structureType": "linear",
    "glowColor": "#b91c1c",
    "description": {
      "en": "Heavy, fuming reddish-brown liquid — one of only two liquid elements on the periodic table at room temperature. Its heavy toxic vapor suffocates organic tissue.",
      "ru": "Единственный жидкий неметалл таблицы Менделеева: тяжелая дымящая бурая жидкость. Тяжелые бурые пары вызывают мгновенные ожоги слизистых и кожи.",
      "kk": "Периодтық кестенің бөлме температурасындағы жалғыз сұйық бейметалы: ауыр қызыл-қоңыр сұйықтық. Оның ауыр буы теріні және тыныс алу жолдарын күйдіреді."
    },
    "realWorldUse": {
      "en": "Flame retardants in electronics and textiles, pharmaceutical synthesis, oil well completion fluids",
      "ru": "Антипирены (защита компьютеров от возгорания), синтез лекарств, тяжелые рассолы для бурения скважин",
      "kk": "Компьютер платаларын өрттен сақтайтын антипирендер, дәрі-дәрмек синтезі, бұрғылау ерітінділері"
    },
    "funFact": {
      "en": "The name Bromine comes from the Greek word 'bromos', meaning Stench, referring to its suffocating, piercing, intolerable odor!",
      "ru": "Название 'бром' происходит от древнегреческого 'бромос' — зловоние, из-за его удушливого и едкого запаха!",
      "kk": "Бром атауы ежелгі гректің 'бромос' — сасық иіс деген сөзінен шыққан, өйткені оның буы аса өткір және қолқаны қабатын жағымсыз иісті келеді!"
    }
  },
  {
    "id": "elemental-iodine",
    "formula": "I₂",
    "formulaAscii": "I2",
    "atoms": {
      "I": 2
    },
    "name": {
      "en": "Crystalline Iodine",
      "ru": "Кристаллический иод",
      "kk": "Кристалды йод"
    },
    "scientificName": {
      "en": "Diiodine",
      "ru": "Дииод",
      "kk": "Дийод"
    },
    "category": "household",
    "hazard": "caution",
    "state": "solid",
    "structureType": "linear",
    "glowColor": "#a855f7",
    "description": {
      "en": "Lustrous purple-black crystals with a metallic sheen. Sublimes when gently heated into magnificent dense violet vapor without ever melting into liquid.",
      "ru": "Темно-серые кристаллы с металлическим блеском. При легком нагревании возгоняется, превращаясь в роскошный густой фиолетовый пар без жидкой фазы!",
      "kk": "Металдық жылтыры бар қара-сұр кристалдар. Аздап қыздырған кезде сұйыққа айналмай, бірден ғажайып қою күлгін бу болып ұшып кетеді (возгонка)!"
    },
    "realWorldUse": {
      "en": "Medical antiseptic tincture, human thyroid hormone synthesis (thyroxine), polarizing sunglasses filters",
      "ru": "Спиртовой раствор йода для обработки ран, гормоны щитовидной железы, поляризационные фильтры экранов",
      "kk": "Жараны емдейтін йод тұнбасы, қалқанша без гормондары (тироксин), экрандардың поляризациялық сүзгілері"
    },
    "funFact": {
      "en": "Iodine was accidentally discovered in 1811 by Bernard Courtois when he dumped too much sulfuric acid on burnt seaweed ash and a purple cloud filled his workshop!",
      "ru": "Йод случайно открыл в 1811 году Бернар Куртуа, когда пролил серную кислоту на золу морских водорослей — над чаном внезапно поднялось облако фиолетового пара!",
      "kk": "1811 жылы Бернар Куртуа теңіз балдырының күліне абайсызда күкірт қышқылын төгіп алғанда, шеберхананы күлгін бу қаптап, йод кездейсоқ ашылған!"
    }
  },
  {
    "id": "white-phosphorus",
    "formula": "P₄",
    "formulaAscii": "P4",
    "atoms": {
      "P": 4
    },
    "name": {
      "en": "White Phosphorus",
      "ru": "Белый фосфор",
      "kk": "Ақ фосфор"
    },
    "scientificName": {
      "en": "Tetraphosphorus",
      "ru": "Тетрафосфор",
      "kk": "Тетрафосфор"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "solid",
    "structureType": "tetrahedral",
    "glowColor": "#84cc16",
    "description": {
      "en": "Waxy allotropic form of phosphorus consisting of strained tetrahedral P₄ molecules. Glows with eerie green chemiluminescence in the dark and spontaneously ignites in air at 30°C.",
      "ru": "Восковидное аллотропное видоизменение фосфора из молекул P₄. Зловеще светится зеленоватым светом в темноте и самовоспламеняется на воздухе при 30°C!",
      "kk": "P₄ молекулаларынан тұратын фосфордың аллотропиялық түрі. Қараңғыда жасыл түспен жұмбақ жарқырайды және ауада 30°C жылылықта өздігінен тұтанады!"
    },
    "realWorldUse": {
      "en": "Industrial pure phosphoric acid production, pyrotechnic military smoke screens, organophosphorus synthesis",
      "ru": "Сырье для чистейшей термической фосфорной кислоты, дымовые завесы, синтез инсектицидов",
      "kk": "Термиялық таза фосфор қышқылының шикізаты, түтінді бүркемелер, инсектицидтер өндірісі"
    },
    "funFact": {
      "en": "In 1669, alchemist Hennig Brand discovered white phosphorus while boiling down hundreds of liters of human urine, searching for the fabled Philosopher's Stone!",
      "ru": "В 1669 году алхимик Хенниг Бранд открыл белый фосфор, пытаясь получить Философский камень из сотен литров выпаренной жидкости!",
      "kk": "1669 жылы алхимик Хенниг Бранд Философиялық тасты іздеу барысында кездейсоқ қараңғыда жарқырайтын ақ фосфорды ашты!"
    }
  },
  {
    "id": "aluminium-chloride",
    "formula": "AlCl₃",
    "formulaAscii": "AlCl3",
    "atoms": {
      "Al": 1,
      "Cl": 3
    },
    "name": {
      "en": "Aluminium Chloride",
      "ru": "Хлорид алюминия",
      "kk": "Алюминий хлориді"
    },
    "scientificName": {
      "en": "Aluminium Trichloride",
      "ru": "Трихлорид алюминия",
      "kk": "Алюминий трихлориді"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#cbd5e1",
    "description": {
      "en": "Strong Lewis acid catalyst. Famous for catalyzing Friedel-Crafts alkylation in organic synthesis, and active antiperspirant ingredient.",
      "ru": "Сильнейшая кислота Льюиса. Классический катализатор реакции Фриделя-Крафтса и действующее вещество антиперспирантов.",
      "kk": "Льюис қышқылының күшті катализаторы. Органикалық синтездегі Фридель-Крафтс реакциясының және дезодоранттардың негізі."
    },
    "realWorldUse": {
      "en": "Friedel-Crafts synthesis, antiperspirants, petroleum cracking",
      "ru": "Органический синтез, дезодоранты-антиперспиранты, крекинг нефти",
      "kk": "Органикалық синтез, антиперспиранттар, мұнай крекингі"
    },
    "funFact": {
      "en": "Fumes dramatically in moist air, producing white hydrogen chloride fog!",
      "ru": "Дымит на влажном воздухе, выделяя белый туман соляной кислоты!",
      "kk": "Ылғал ауада түтіндеп, тұз қышқылының ақ тұманын түзеді!"
    }
  },
  {
    "id": "iron-ii-chloride",
    "formula": "FeCl₂",
    "formulaAscii": "FeCl2",
    "atoms": {
      "Fe": 1,
      "Cl": 2
    },
    "name": {
      "en": "Iron(II) Chloride",
      "ru": "Хлорид железа(II)",
      "kk": "Темір(II) хлориді"
    },
    "scientificName": {
      "en": "Iron Dichloride",
      "ru": "Дихлорид железа",
      "kk": "Темір дихлориді"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#86efac",
    "description": {
      "en": "Greenish-white water-soluble salt. Key flocculant in industrial wastewater treatment and dye manufacturing.",
      "ru": "Зеленовато-белая соль. Применяется для очистки промышленных сточных вод и в производстве красителей.",
      "kk": "Жасылдау ақ түсті тұз. Өндірістік ағынды суларды тазартуда және бояғыштар өндірісінде қолданылады."
    },
    "realWorldUse": {
      "en": "Sewage odor control, magnetic pigment synthesis",
      "ru": "Очистка сточных вод, синтез магнитных пигментов",
      "kk": "Ағынды суларды тазарту, магнитті пигменттер жасау"
    },
    "funFact": {
      "en": "Rapidly oxidizes in air to rusty brown iron(III) chloride!",
      "ru": "На воздухе быстро окисляется до бурого хлорида железа(III)!",
      "kk": "Ауада тез тотығып, қоңыр түсті темір(III) хлоридіне айналады!"
    }
  },
  {
    "id": "zinc-chloride",
    "formula": "ZnCl₂",
    "formulaAscii": "ZnCl2",
    "atoms": {
      "Zn": 1,
      "Cl": 2
    },
    "name": {
      "en": "Zinc Chloride (Soldering Acid)",
      "ru": "Хлорид цинка (Паяльная кислота)",
      "kk": "Мырыш хлориді (Дәнекерлеу қышқылы)"
    },
    "scientificName": {
      "en": "Zinc Dichloride",
      "ru": "Дихлорид цинка",
      "kk": "Мырыш дихлориді"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#93c5fd",
    "description": {
      "en": "Hygroscopic salt known as 'Soldering Acid' that removes metal oxide layers to enable clean tin soldering.",
      "ru": "Гигроскопичная соль, знаменитая 'паяльная кислота'. Растворяет оксидную пленку на металле при пайке оловом.",
      "kk": "Атақты 'дәнекерлеу қышқылы'. Металдарды қалайымен дәнекерлеу кезінде олардың бетіндегі оксид қабыршағын ерітеді."
    },
    "realWorldUse": {
      "en": "Metal soldering flux, wood preservation, smoke screens",
      "ru": "Флюс для пайки радиодеталей, пропитка древесины от гниения",
      "kk": "Дәнекерлеу флюсі, ағашты шіруден сақтайтын сіңдірме"
    },
    "funFact": {
      "en": "Dissolves starch, cellulose, and silk, dissolving paper into a thick gel!",
      "ru": "Растворяет шелк и целлюлозу, превращая бумагу в густой гель!",
      "kk": "Жібек пен целлюлозаны ерітіп, қағазды қою гельге айналдыра алады!"
    }
  },
  {
    "id": "barium-chloride",
    "formula": "BaCl₂",
    "formulaAscii": "BaCl2",
    "atoms": {
      "Ba": 1,
      "Cl": 2
    },
    "name": {
      "en": "Barium Chloride",
      "ru": "Хлорид бария",
      "kk": "Барий хлориді"
    },
    "scientificName": {
      "en": "Barium Dichloride",
      "ru": "Дихлорид бария",
      "kk": "Барий дихлориді"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#22c55e",
    "description": {
      "en": "White crystalline salt, the classical qualitative test reagent for detecting sulfate ions (SO₄²⁻) in chemistry.",
      "ru": "Белые кристаллы, золотой стандарт аналитической химии для обнаружения сульфат-ионов (SO₄²⁻). Окрашивает пламя в зеленый цвет.",
      "kk": "Ақ кристалдар, химиядағы сульфат-иондарын (SO₄²⁻) анықтауға арналған басты реактив. Жалынды ашық жасыл түске бояйды."
    },
    "realWorldUse": {
      "en": "Green pyrotechnics, sulfate qualitative analysis, steel hardening",
      "ru": "Зеленый цвет праздничных салютов, определение сульфатов, закалка стали",
      "kk": "Жасыл отшашулар, сульфаттарды анықтау, болатты шынықтыру"
    },
    "funFact": {
      "en": "Detects even microscopic traces of sulfates in water by forming a milky BaSO₄ cloud instantly!",
      "ru": "Находит даже следы серной кислоты в воде, мгновенно давая белый осадок BaSO₄!",
      "kk": "Судағы күкірт қышқылының ең аз мөлшерін де лезде ақ BaSO₄ тұнбасымен табады!"
    }
  },
  {
    "id": "lead-ii-chloride",
    "formula": "PbCl₂",
    "formulaAscii": "PbCl2",
    "atoms": {
      "Pb": 1,
      "Cl": 2
    },
    "name": {
      "en": "Lead(II) Chloride",
      "ru": "Хлорид свинца(II)",
      "kk": "Қорғасын(II) хлориді"
    },
    "scientificName": {
      "en": "Lead Dichloride",
      "ru": "Дихлорид свинца",
      "kk": "Қорғасын дихлориді"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#e2e8f0",
    "description": {
      "en": "White crystalline precipitate that dissolves in boiling water and crystallizes into glistening needle-like prisms when cooled.",
      "ru": "Белый осадок, растворимый в кипятке. При охлаждении раствора выпадает красивыми игольчатыми кристаллами.",
      "kk": "Қайнаған суда еритін ақ тұнба. Суыған кезде әдемі жылтыраған ине тәрізді кристалдар болып тұнады."
    },
    "realWorldUse": {
      "en": "Infrared optical glasses, solder flux, lead pigments",
      "ru": "Оптические инфракрасные стекла, припои, свинцовые пигменты",
      "kk": "Инфрақызыл оптикалық әйнектер, дәнекерлер, пигменттер"
    },
    "funFact": {
      "en": "Historically called 'plumbum album' and used by Renaissance painters in white glazes!",
      "ru": "В эпоху Возрождения художники использовали его в белых глазурях!",
      "kk": "Қайта өрлеу дәуірінде суретшілер оны ақ глазурь жасауға пайдаланған!"
    }
  },
  {
    "id": "calcium-nitrate",
    "formula": "Ca(NO₃)₂",
    "formulaAscii": "CaN2O6",
    "atoms": {
      "Ca": 1,
      "N": 2,
      "O": 6
    },
    "name": {
      "en": "Calcium Nitrate (Norwegian Saltpeter)",
      "ru": "Нитрат кальция (Кальциевая селитра)",
      "kk": "Кальций нитраты (Норвег селитрасы)"
    },
    "scientificName": {
      "en": "Calcium Dinitrate",
      "ru": "Динитрат кальция",
      "kk": "Кальций динитраты"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#fb923c",
    "description": {
      "en": "First synthetic nitrogen fertilizer manufactured from air by the Birkeland-Eyde process in Norway. Strengthens plant cell walls.",
      "ru": "Норвежская селитра. Первое в мире азотное удобрение, полученное напрямую из воздуха! Укрепляет клеточные стенки плодов.",
      "kk": "Норвег селитрасы. Ауадан тікелей өндірілген әлемдегі алғашқы азотты тыңайтқыш! Жемістердің жасуша қабырғасын қатайтады."
    },
    "realWorldUse": {
      "en": "Greenhouse tomato fertilizer, concrete set accelerator, waste odor control",
      "ru": "Подкормка томатов в теплицах, ускорение твердения бетона на морозе",
      "kk": "Жылыжайдағы қызанақ тыңайтқышы, аязда бетонның қатуын тездеткіш"
    },
    "funFact": {
      "en": "Adding calcium nitrate to wet concrete makes it set twice as fast in winter sub-zero temperatures!",
      "ru": "Добавка нитрата кальция в бетон позволяет заливать фундаменты даже в зимние морозы!",
      "kk": "Кальций нитратын қосқанда бетон тіпті қысқы аязда екі есе тез қатады!"
    }
  },
  {
    "id": "barium-nitrate",
    "formula": "Ba(NO₃)₂",
    "formulaAscii": "BaN2O6",
    "atoms": {
      "Ba": 1,
      "N": 2,
      "O": 6
    },
    "name": {
      "en": "Barium Nitrate",
      "ru": "Нитрат бария",
      "kk": "Барий нитраты"
    },
    "scientificName": {
      "en": "Barium Dinitrate",
      "ru": "Динитрат бария",
      "kk": "Барий динитраты"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#22c55e",
    "description": {
      "en": "Inorganic salt that colors fireworks and flare torches a stunning neon-green. Active oxidizer in military green signal flares.",
      "ru": "Соль, окрашивающая фейерверки и сигнальные ракеты в изумрудно-зеленый цвет. Главный компонент зеленых салютов.",
      "kk": "Отшашулар мен сигналдық зымырандарды ашық изумруд жасыл түске бояйтын тұз. Жасыл салюттердің негізі."
    },
    "realWorldUse": {
      "en": "Green fireworks, emergency maritime flare cartridges, optical glass",
      "ru": "Зеленые салюты на праздниках, морские сигнальные фальшфейеры",
      "kk": "Мерекелік жасыл отшашулар, теңіз сигналдық факелдері"
    },
    "funFact": {
      "en": "Every bright green star exploding in New Year's Eve skies gets its green brilliance from vaporized barium atoms!",
      "ru": "Каждая зеленая вспышка в новогоднем салюте обязана своим цветом раскаленным атомам бария!",
      "kk": "Жаңа жылдық салюттегі әрбір ашық жасыл жарық барий атомдарының сәуле шашуынан пайда болады!"
    }
  },
  {
    "id": "copper-ii-nitrate",
    "formula": "Cu(NO₃)₂",
    "formulaAscii": "CuN2O6",
    "atoms": {
      "Cu": 1,
      "N": 2,
      "O": 6
    },
    "name": {
      "en": "Copper(II) Nitrate",
      "ru": "Нитрат меди(II)",
      "kk": "Мыс(II) нитраты"
    },
    "scientificName": {
      "en": "Copper Dinitrate",
      "ru": "Динитрат меди",
      "kk": "Мыс динитраты"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#0ea5e9",
    "description": {
      "en": "Deep royal-blue hydrated crystals. Decomposes upon heating with toxic brown NO₂ gas, leaving black copper oxide behind.",
      "ru": "Ярко-синие кристаллы. При нагревании разлагается с бурным выделением бурого газа NO₂ и превращается в черный оксид CuO.",
      "kk": "Ашық көк кристалдар. Қыздырған кезде қоңыр NO₂ газын бөле ыдырап, қара мыс оксидіне айналады."
    },
    "realWorldUse": {
      "en": "Textile dyeing mordant, antique bronze patina creation, organic oxidation catalyst",
      "ru": "Нанесение благородной патины на бронзовые статуи, катализатор в органике",
      "kk": "Қола мүсіндерге патина жасыл қабатын түсіру, органикалық катализатор"
    },
    "funFact": {
      "en": "Sculptors spray copper nitrate onto bronze monuments to give them that prestigious aged museum patina in hours instead of centuries!",
      "ru": "Скульпторы опрыскивают бронзовые памятники раствором нитрата меди, чтобы за пару часов придать им вековой музейный оттенок!",
      "kk": "Мүсіншілер қола ескерткіштерге жүз жылдық көне музейлік рең беру үшін оған мыс нитратын себеді!"
    }
  },
  {
    "id": "lead-ii-nitrate",
    "formula": "Pb(NO₃)₂",
    "formulaAscii": "PbN2O6",
    "atoms": {
      "Pb": 1,
      "N": 2,
      "O": 6
    },
    "name": {
      "en": "Lead(II) Nitrate",
      "ru": "Нитрат свинца(II)",
      "kk": "Қорғасын(II) нитраты"
    },
    "scientificName": {
      "en": "Lead Dinitrate",
      "ru": "Динитрат свинца",
      "kk": "Қорғасын динитраты"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#f87171",
    "description": {
      "en": "Water-soluble lead salt used as the starting reagent for Golden Rain (reacting with KI to precipitate PbI₂). Crackles violently when heated (decrepitation).",
      "ru": "Растворимая соль свинца, партнер по опыту 'Золотой дождь' (при реакции с KI дает кристаллы PbI₂). При нагревании кристаллы с треском взрываются.",
      "kk": "'Алтын жаңбыр' тәжірибесінің серіктесі (KI-мен қосылып, PbI₂ түзеді). Қыздырған кезде кристалдары қарқылдап жарылады."
    },
    "realWorldUse": {
      "en": "Gold cyanidation leach promoter, pyrotechnic oxidizer, Golden Rain demonstrations",
      "ru": "Ускоритель извлечения золота на рудниках, пиротехника, школьные химические шоу",
      "kk": "Алтын кен орындарында алтынды шаймалауды тездеткіш, пиротехника"
    },
    "funFact": {
      "en": "Heating dry crystals of lead nitrate makes them audibly crackle and snap like popping corn as gas pressure fractures the crystals!",
      "ru": "При нагревании сухие кристаллы нитрата свинца трещат и подпрыгивают, словно попкорн на сковородке!",
      "kk": "Құрғақ қорғасын нитратының кристалдары қызған кезде табадағы попкорн сияқты сатырлап секіреді!"
    }
  },
  {
    "id": "tripotassium-phosphate",
    "formula": "K₃PO₄",
    "formulaAscii": "K3PO4",
    "atoms": {
      "K": 3,
      "P": 1,
      "O": 4
    },
    "name": {
      "en": "Tripotassium Phosphate",
      "ru": "Ортофосфат калия",
      "kk": "Калий ортофосфаты"
    },
    "scientificName": {
      "en": "Tripotassium Phosphate",
      "ru": "Фосфат калия",
      "kk": "Калий фосфаты"
    },
    "category": "household",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#c084fc",
    "description": {
      "en": "Strongly alkaline, highly soluble food additive and premium electrolyte fertilizer delivering both potassium and phosphorus nutrients.",
      "ru": "Отлично растворимое калийно-фосфорное удобрение и пищевой регулятор кислотности.",
      "kk": "Суда жақсы еритін калий-фосфорлы тыңайтқыш және тағамдық қышқылдықты реттегіш."
    },
    "realWorldUse": {
      "en": "Liquid hydroponic nutrient solutions, food emulsifier (E340), industrial cleaning",
      "ru": "Гидропоника для тепличных овощей, пищевой эмульгатор E340",
      "kk": "Жылыжай көкөністеріне арналған гидропоника, тағамдық эмульгатор E340"
    },
    "funFact": {
      "en": "Supplies two of the big three N-P-K plant nutrients in a single easy-dissolving molecule!",
      "ru": "Содержит сразу два важнейших элемента питания растений (фосфор и калий) в одной молекуле!",
      "kk": "Өсімдікке ең қажетті екі элементті (фосфор мен калийді) бір ғана молекулада береді!"
    }
  },
  {
    "id": "calcium-phosphate",
    "formula": "Ca₃(PO₄)₂",
    "formulaAscii": "Ca3P2O8",
    "atoms": {
      "Ca": 3,
      "P": 2,
      "O": 8
    },
    "name": {
      "en": "Bone Phosphate (Calcium Phosphate)",
      "ru": "Фосфат кальция (Основа костей)",
      "kk": "Кальций фосфаты (Сүйек негізі)"
    },
    "scientificName": {
      "en": "Tricalcium Diphosphate",
      "ru": "Ортофосфат кальция",
      "kk": "Кальций ортофосфаты"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#fde047",
    "description": {
      "en": "The mineral scaffold of your skeleton. Comprises 60% of human bone mass and 90% of dental enamel in the form of hydroxyapatite.",
      "ru": "Основа скелета человека: 60% массы костей и 90% зубной эмали состоят именно из этой нерастворимой соли (в форме гидроксиапатита).",
      "kk": "Адам қаңқасының негізі: сүйектердің 60%-ы және тіс кіреукесінің (эмалінің) 90%-ы осы тұздан (гидроксиапатит) тұрады."
    },
    "realWorldUse": {
      "en": "Phosphorus fertilizer raw rock (Phosphorite), dietary calcium supplements, bone graft surgery",
      "ru": "Производство фосфорных удобрений (фосфориты Каратау), костные импланты, БАДы",
      "kk": "Қаратау фосфориттерінен тыңайтқыш өндіру, сүйек импланттары, дәрумендер"
    },
    "funFact": {
      "en": "Kazakhstan's Karatau mountains contain one of the planet's largest deposits of ancient phosphorite rock formed on ancient prehistoric ocean beds!",
      "ru": "В горах Каратау в Казахстане находится одно из крупнейших в мире месторождений фосфоритов, сформировавшихся на дне древнего океана!",
      "kk": "Қазақстанның Қаратау тауларында ежелгі мұхит түбінде түзілген әлемдегі ең ірі фосфорит кен орындарының бірі орналасқан!"
    }
  },
  {
    "id": "sodium-silicate",
    "formula": "Na₂SiO₃",
    "formulaAscii": "Na2SiO3",
    "atoms": {
      "Na": 2,
      "Si": 1,
      "O": 3
    },
    "name": {
      "en": "Water Glass (Liquid Glass)",
      "ru": "Жидкое стекло (Силикатный клей)",
      "kk": "Сұйық әйнек (Силикатты желім)"
    },
    "scientificName": {
      "en": "Sodium Metasilicate",
      "ru": "Метасиликат натрия",
      "kk": "Натрий метасиликаты"
    },
    "category": "household",
    "hazard": "safe",
    "state": "liquid",
    "structureType": "lattice",
    "glowColor": "#0ea5e9",
    "description": {
      "en": "Thick water-soluble silica liquid known as 'Liquid Glass'. Reacts with colored metal salts to grow breathtaking stalagmites in the 'Chemical Garden' experiment.",
      "ru": "Знаменитое 'жидкое стекло' и канцелярский клей. Основа опыта 'Химический сад' (Силикатные водоросли), где разноцветные кристаллы солей прорастают подводными ветвями.",
      "kk": "Әйгілі 'сұйық әйнек' және силикат желімі. Әртүрлі тұздарды салғанда су астында түрлі-түсті өсімдіктер сияқты өсіп шығатын 'Химиялық бақ' тәжірибесінің негізі."
    },
    "realWorldUse": {
      "en": "Fireproof concrete sealant, stationery paper glue, egg preservation, foundry sand binding",
      "ru": "Огнезащитная пропитка дерева и бетона, силикатный клей, литейные песчаные формы",
      "kk": "Ағаш пен бетонды өрттен қорғау, кеңсе желімі, металл құю қалыптары"
    },
    "funFact": {
      "en": "Dropping crystals of cobalt, copper, and iron into liquid glass grows a vibrant underwater forest of colored mineral tubes in minutes!",
      "ru": "Бросив кристаллы солей кобальта, меди и железа в жидкое стекло, вы вырастите ветвистый разноцветный подводный лес за пару минут!",
      "kk": "Сұйық әйнекке мыс, кобальт және темір тұздарын салсаңыз, бірнеше минутта көз тартарлық түрлі-түсті суасты орманы өсіп шығады!"
    }
  },
  {
    "id": "copper-ii-sulfide",
    "formula": "CuS",
    "formulaAscii": "CuS",
    "atoms": {
      "Cu": 1,
      "S": 1
    },
    "name": {
      "en": "Copper(II) Sulfide (Covellite)",
      "ru": "Сульфид меди(II) (Ковеллин)",
      "kk": "Мыс(II) сульфиді (Ковеллин)"
    },
    "scientificName": {
      "en": "Copper Monosulfide",
      "ru": "Моносульфид меди",
      "kk": "Мыс моносульфиді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#0284c7",
    "description": {
      "en": "Jet-black insoluble precipitate that drops instantly when H₂S contacts copper salts. Naturally found as indigo-blue mineral Covellite.",
      "ru": "Угольно-черный осадок, не растворимый даже в разбавленных кислотах. В природе образует индиго-синий минерал ковеллин.",
      "kk": "Сұйылтылған қышқылдарда да ерімейтін қап-қара тұнба. Табиғатта ковеллин атты қанық көк минерал түрінде кездеседі."
    },
    "realWorldUse": {
      "en": "Solar cell thin films, high-efficiency lubricants, copper metallurgy",
      "ru": "Тонкопленочные солнечные панели, металлургия меди на месторождениях Жезказгана",
      "kk": "Күн панельдері, Жезқазған кен орындарындағы мыс металлургиясы"
    },
    "funFact": {
      "en": "Covellite is a rare natural mineral that displays intrinsic high-temperature metallic superconductivity below 1.6 Kelvin!",
      "ru": "Минерал ковеллин — один из редчайших природных минералов со сверхпроводимостью при температуре жидкого гелия!",
      "kk": "Ковеллин — сұйық гелий температурасында табиғи асқын өткізгіштік қасиет көрсететін сирек минерал!"
    }
  },
  {
    "id": "zinc-sulfide",
    "formula": "ZnS",
    "formulaAscii": "ZnS",
    "atoms": {
      "Zn": 1,
      "S": 1
    },
    "name": {
      "en": "Zinc Sulfide (Sphalerite)",
      "ru": "Сульфид цинка (Сфалерит)",
      "kk": "Мырыш сульфиді (Сфалерит)"
    },
    "scientificName": {
      "en": "Zinc Monosulfide",
      "ru": "Моносульфид цинка",
      "kk": "Мырыш моносульфиді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#a3e635",
    "description": {
      "en": "White crystalline mineral and premier phosphor. Glowing watch hands, oscilloscope screens, and radioactive scintillator detectors glow using doped ZnS.",
      "ru": "Белый порошок, минерал сфалерит. Главный люминофор мира: именно он светится зеленым на стрелках часов в темноте и в экранах старых осциллографов.",
      "kk": "Әлемдегі ең басты люминофор (жарық шашатын зат): сағат тілдерінің қараңғыда жасыл болып жануы және ескі рентген экрандары осы сфалериттен жасалған."
    },
    "realWorldUse": {
      "en": "Glow-in-the-dark watch dials, night-vision infrared windows, X-ray screens, zinc mining ore",
      "ru": "Люминесцентные стрелки часов, инфракрасные окна ночного видения, цинковая руда",
      "kk": "Қараңғыда жанатын сағат тілдері, түнгі көру құралдарының оптикасы, мырыш кені"
    },
    "funFact": {
      "en": "Ernest Rutherford used a zinc sulfide screen to discover the atomic nucleus in 1911 by counting microscopic green flashes from bouncing alpha particles!",
      "ru": "Эрнест Резерфорд открыл атомное ядро в 1911 году, считая глазом крошечные зеленые вспышки на экране из сульфида цинка!",
      "kk": "Эрнест Резерфорд 1911 жылы атом ядросын дәл осы мырыш сульфиді экранындағы ұсақ жасыл жарқылдарды санау арқылы ашқан!"
    }
  },
  {
    "id": "lead-ii-sulfide",
    "formula": "PbS",
    "formulaAscii": "PbS",
    "atoms": {
      "Pb": 1,
      "S": 1
    },
    "name": {
      "en": "Galena (Lead Sulfide)",
      "ru": "Галенит (Свинцовый блеск)",
      "kk": "Галенит (Қорғасын жылтыры)"
    },
    "scientificName": {
      "en": "Lead(II) Sulfide",
      "ru": "Моносульфид свинца",
      "kk": "Қорғасын(II) сульфиді"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#64748b",
    "description": {
      "en": "Metallic cubic lead ore (Galena). The world's primary source of lead and the crystal diode that powered the very first crystal radio receivers in the 1900s.",
      "ru": "Тяжелый серебристо-серый минерал кубической формы (галенит). Главная руда свинца и первый кристаллический детектор первых радиоприемников XX века.",
      "kk": "Ауыр күміс-сұр куб пішінді минерал (галенит). Қорғасынның басты кені және XX ғасырдың басындағы алғашқы радиоқабылдағыштардың детектор кристалы."
    },
    "realWorldUse": {
      "en": "Primary lead metal extraction, infrared infrared heat sensors, vintage crystal radios",
      "ru": "Выплавка свинца, инфракрасные датчики самонаведения ракет, старинные радиоприемники",
      "kk": "Қорғасын қорыту, зымырандардың инфрақызыл бағыттау датчиктері, көне радиолар"
    },
    "funFact": {
      "en": "In Ancient Egypt, queen Cleopatra wore dark eyeliner (Kohl) ground from natural galena crystals, which also protected eyes from desert sun glare!",
      "ru": "В Древнем Египте Клеопатра красила веки черной подводкой (кохль) из растертого галенита, что защищало глаза от яркого солнца пустыни!",
      "kk": "Ежелгі Египетте Клеопатра көзін галенитен жасалған қара сүрмемен бояған, ол көзді шөл даланың аптап күнінен сақтаған!"
    }
  },
  {
    "id": "mercury-ii-sulfide",
    "formula": "HgS",
    "formulaAscii": "HgS",
    "atoms": {
      "Hg": 1,
      "S": 1
    },
    "name": {
      "en": "Cinnabar (Vermilion)",
      "ru": "Киноварь",
      "kk": "Киноварь"
    },
    "scientificName": {
      "en": "Mercury(II) Sulfide",
      "ru": "Сульфид ртути(II)",
      "kk": "Сынап(II) сульфиді"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#dc2626",
    "description": {
      "en": "Scarlet-red mineral ore of mercury known as Cinnabar (Vermilion). Prized by Roman Emperors and Chinese dynasties for centuries as the royal red pigment.",
      "ru": "Ярко-красный минерал, главная руда ртути (киноварь, пигмент вермильон). Императорская красная краска древнего Рима и китайских династий.",
      "kk": "Ашық қызыл минерал, сынаптың басты кені (вермильон бояуы). Ежелгі Рим императорлары мен қытай патшаларының корольдік қызыл бояуы."
    },
    "realWorldUse": {
      "en": "Primary elemental mercury metal ore, historic vermilion oil paintings, red lacquerware",
      "ru": "Добыча металлической ртути, старинные картины великих мастеров, красные китайские шкатулки",
      "kk": "Сұйық сынап өндіру, классикалық өнер туындыларындағы қызыл бояу"
    },
    "funFact": {
      "en": "When gently roasted in air, red cinnabar vaporizes into silver liquid mercury metal and sulfur dioxide gas!",
      "ru": "При обжиге на воздухе красная киноварь превращается в капли жидкого серебристого металла ртути!",
      "kk": "Ауада қыздырған кезде қызыл киноварь буланып, сұйық күміс түсті металл сынап тамшыларына айналады!"
    }
  },
  {
    "id": "magnesium-carbonate",
    "formula": "MgCO₃",
    "formulaAscii": "MgCO3",
    "atoms": {
      "Mg": 1,
      "C": 1,
      "O": 3
    },
    "name": {
      "en": "Gymnasts' Chalk (Magnesium Carbonate)",
      "ru": "Спортивная магнезия (Карбонат магния)",
      "kk": "Спорттық магнезия (Магний карбонаты)"
    },
    "scientificName": {
      "en": "Magnesium Carbonate",
      "ru": "Карбонат магния",
      "kk": "Магний карбонаты"
    },
    "category": "household",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#f8fafc",
    "description": {
      "en": "Super-light fluffy white powder known to athletes as 'Chalk'. Absorbs hand sweat instantly, giving rock climbers and Olympic weightlifters iron grip.",
      "ru": "Белый рассыпчатый порошок скалолазов и гимнастов. Мгновенно впитывает пот с ладоней, предотвращая соскальзывание со штанги и скал.",
      "kk": "Спортшылар мен альпинистердің қолына жағатын ақ ұнтағы. Алақандағы терді лезде жұтып, штанга мен жартастардан сырғып кетуден сақтайды."
    },
    "realWorldUse": {
      "en": "Olympic weightlifting and climbing grip chalk, fireproofing materials, toothpaste polishing agent",
      "ru": "Спортивная магнезия для рук, мягкий абразив в зубных пастах, огнеупорный кирпич",
      "kk": "Ауыр атлетика мен жартасқа өрмелеу ұнтағы, тіс пастасының жұмсақ тазартқышы"
    },
    "funFact": {
      "en": "Though athletes call it 'chalk', real chalkboard chalk is calcium sulfate (gypsum) — gymnasts' chalk is magnesium carbonate!",
      "ru": "Спортсмены называют его 'мелом', но школьный мел — это сульфат кальция, а спортивная магнезия — это карбонат магния!",
      "kk": "Спортшылар оны 'бор' десе де, мектептің боры кальций сульфатынан, ал спорттық магнезия магний карбонатынан тұрады!"
    }
  },
  {
    "id": "octane",
    "formula": "C₈H₁₈",
    "formulaAscii": "C8H18",
    "atoms": {
      "C": 8,
      "H": 18
    },
    "name": {
      "en": "Octane",
      "ru": "Октан (Октановое число)",
      "kk": "Октан (Октан саны)"
    },
    "scientificName": {
      "en": "n-Octane",
      "ru": "Октан",
      "kk": "Октан"
    },
    "category": "fuel",
    "hazard": "caution",
    "state": "liquid",
    "structureType": "linear",
    "glowColor": "#f59e0b",
    "description": {
      "en": "Eight-carbon saturated alkane. The benchmark standard for gasoline anti-knock engine performance ratings (e.g. AI-95 and AI-98 fuel).",
      "ru": "Предельный углеводород с 8 атомами углерода. Эталон стойкости бензина к детонации в двигателях автомобилей (АИ-92, АИ-95, АИ-98).",
      "kk": "8 көміртек атомы бар қаныққан көмірсутек. Автокөлік қозғалтқыштарындағы бензиннің жарылысқа төзімділігінің эталоны (АИ-92, АИ-95, АИ-98)."
    },
    "realWorldUse": {
      "en": "Automotive gasoline standard rating, organic solvent, internal combustion engine fuel",
      "ru": "Бензин для автомобилей, химический эталон на АЗС, растворитель масел",
      "kk": "Автокөліктердің бензині, жанармай құю бекеттеріндегі октан эталоны"
    },
    "funFact": {
      "en": "Iso-octane (2,2,4-trimethylpentane) burns so smoothly inside car cylinders that it was arbitrarily given the perfect score of 100 on the octane scale!",
      "ru": "Изооктан сгорает в цилиндре двигателя настолько плавно без детонации, что ему присвоили ровно 100 баллов по октановой шкале!",
      "kk": "Изооктан қозғалтқышта сондай біркелкі әрі таза жанатындықтан, оған октандық шкалада дәл 100 балл берілген!"
    }
  },
  {
    "id": "naphthalene",
    "formula": "C₁₀H₈",
    "formulaAscii": "C10H8",
    "atoms": {
      "C": 10,
      "H": 8
    },
    "name": {
      "en": "Naphthalene (Mothballs)",
      "ru": "Нафталин",
      "kk": "Нафталин"
    },
    "scientificName": {
      "en": "Bicyclo[4.4.0]deca-1,3,5,7,9-pentaene",
      "ru": "Нафталин",
      "kk": "Нафталин"
    },
    "category": "organic",
    "hazard": "caution",
    "state": "solid",
    "structureType": "planar",
    "glowColor": "#e2e8f0",
    "description": {
      "en": "Classic white crystalline aromatic compound with two fused benzene rings. Iconic pungent mothball scent that repels fabric-destroying clothes moths.",
      "ru": "Белые чешуйчатые кристаллы из двух сросшихся бензольных колец с характерным резким запахом. Классические шарики против моли в гардеробах.",
      "kk": "Бір-біріне жалғанған екі бензол сақинасынан тұратын өткір иісті ақ кристалдар. Шкафтардағы киімді күйе көбелектерден сақтайтын әйгілі зат."
    },
    "realWorldUse": {
      "en": "Closet moth repellent balls, phthalic anhydride dye synthesis, concrete superplasticizers",
      "ru": "Защита шерстяных вещей от моли, сырье для синтеза красителей, пластификаторы для бетона",
      "kk": "Жүн киімдерді күйеден қорғау, бояғыштар синтезі, бетон пластификаторлары"
    },
    "funFact": {
      "en": "Naphthalene sublimes directly into gas at room temperature, which is why mothballs placed in wool coats slowly vanish into thin air without ever leaving a puddle!",
      "ru": "Нафталин возгоняется прямо в шкафу при комнатной температуре, поэтому шарики от моли со временем исчезают без следа!",
      "kk": "Нафталин бөлме температурасында бірден буға айналады, сондықтан шкафқа салынған шарлар уақыт өте келе із-түзсіз ұшып кетеді!"
    }
  },
  {
    "id": "phenol",
    "formula": "C₆H₆O",
    "formulaAscii": "C6H6O",
    "atoms": {
      "C": 6,
      "H": 6,
      "O": 1
    },
    "name": {
      "en": "Phenol (Carbolic Acid)",
      "ru": "Фенол (Карболка)",
      "kk": "Фенол (Карбол қышқылы)"
    },
    "scientificName": {
      "en": "Hydroxybenzene",
      "ru": "Гидроксибензол",
      "kk": "Гидроксибензол"
    },
    "category": "organic",
    "hazard": "danger",
    "state": "solid",
    "structureType": "planar",
    "glowColor": "#f43f5e",
    "description": {
      "en": "Aromatic alcohol where a hydroxyl group is attached to a benzene ring. In 1865, Joseph Lister sprayed carbolic acid in operating rooms, inventing antiseptic surgery.",
      "ru": "Ароматический гидроксил (карболка). В 1865 году Джозеф Листер впервые распылил его в операционной, победив госпитальные инфекции и создав современную хирургию.",
      "kk": "Бензол сақинасына қосылған спирт тобы бар зат (карболка). 1865 жылы Джозеф Листер оны ота жасау кезінде сеуіп, заманауи антисептикалық хирургияны дүниеге әкелді."
    },
    "realWorldUse": {
      "en": "Bakelite plastic polymers, epoxy resins, nylon synthesis, aspirin pharmaceutical precursor",
      "ru": "Первый в мире пластик бакелит, эпоксидные смолы, капрон, сырье для производства аспирина",
      "kk": "Әлемдегі алғашқы бакелит пластигі, эпоксидті шайырлар, капрон, аспирин синтезі"
    },
    "funFact": {
      "en": "Phenol reacted with formaldehyde produces Bakelite — the legendary dark retro plastic that every 1930s telephone and radio was made from!",
      "ru": "Из фенола и формальдегида создали бакелит — первый в истории синтетический темный пластик, из которого делали все ретро-телефоны и радиоприемники!",
      "kk": "Фенол мен формальдегидтен бакелит жасалды — 1930 жылдардағы барлық ретро телефондар мен радиоқабылдағыштар жасалған алғашқы синтетикалық пластик!"
    }
  },
  {
    "id": "aniline",
    "formula": "C₆H₇N",
    "formulaAscii": "C6H7N",
    "atoms": {
      "C": 6,
      "H": 7,
      "N": 1
    },
    "name": {
      "en": "Aniline",
      "ru": "Анилин",
      "kk": "Анилин"
    },
    "scientificName": {
      "en": "Benzenamine",
      "ru": "Аминобензол",
      "kk": "Аминобензол"
    },
    "category": "organic",
    "hazard": "danger",
    "state": "liquid",
    "structureType": "planar",
    "glowColor": "#818cf8",
    "description": {
      "en": "The foundation of the synthetic color revolution. When William Henry Perkin accidentally oxidized aniline in 1856, he created Mauveine, painting the Victorian world purple.",
      "ru": "Родоначальник цветной революции. В 1856 году юный Перкин случайно получил из него мовеин — первый синтетический фиолетовый краситель, изменивший мировую моду.",
      "kk": "Түрлі-түсті бояулар төңкерісінің атасы. 1856 жылы жас Перкин одан кездейсоқ әлемдік сәнді өзгерткен алғашқы синтетикалық күлгін бояу мовеинді алды."
    },
    "realWorldUse": {
      "en": "Aniline textile dyes for blue jeans (Indigo), polyurethane foams, paracetamol synthesis",
      "ru": "Красители для синих джинсов (индиго), поролон для мебели, производство парацетамола",
      "kk": "Көк джинсы шалбарларының бояуы (индиго), жиһазға арналған поролон, парацетамол өндірісі"
    },
    "funFact": {
      "en": "The iconic rich indigo blue color of your favorite pair of denim jeans is synthesized using aniline!",
      "ru": "Тот самый глубокий темно-синий цвет индиго ваших любимых джинсов синтезируют именно из анилина!",
      "kk": "Сіздің сүйікті джинсы шалбарыңыздың қанық көк түсі дәл осы анилиннен синтезделеді!"
    }
  },
  {
    "id": "diethyl-ether",
    "formula": "C₄H₁₀O",
    "formulaAscii": "C4H10O",
    "atoms": {
      "C": 4,
      "H": 10,
      "O": 1
    },
    "name": {
      "en": "Diethyl Ether (Medical Ether)",
      "ru": "Диэтиловый эфир (Медицинский эфир)",
      "kk": "Диэтил эфирі (Медициналық эфир)"
    },
    "scientificName": {
      "en": "Ethoxyethane",
      "ru": "Этоксиэтан",
      "kk": "Этоксиэтан"
    },
    "category": "organic",
    "hazard": "caution",
    "state": "liquid",
    "structureType": "bent",
    "glowColor": "#38bdf8",
    "description": {
      "en": "Highly volatile, flammable liquid with a sweet odor. On October 16, 1846 ('Ether Day'), William Morton performed the first successful public painless surgery with it.",
      "ru": "Летучая горючая жидкость со сладковатым запахом. 16 октября 1846 года ('День Эфира') с его помощью впервые в мире провели безболезненную операцию.",
      "kk": "Тәтті иісті тез ұшатын тұтанғыш сұйықтық. 1846 жылдың 16 қазанында ('Эфир күні') оның көмегімен адамзат тарихында тұңғыш рет ауыртпай ота жасалды."
    },
    "realWorldUse": {
      "en": "Laboratory organic extraction solvent, engine cold-start spray (quick start), historical anesthesia",
      "ru": "Растворитель для экстракции масел, баллончики 'Быстрый старт' для запуска авто в мороз",
      "kk": "Майларды бөліп алу еріткіші, қыста көлік қозғалтқышын тез оталдыратын 'жылдам старт' аэрозолі"
    },
    "funFact": {
      "en": "Drivers spray diethyl ether into car carburetors in -40°C winter cold because ether vapors ignite at freezing temperatures where gasoline won't even evaporate!",
      "ru": "В лютые морозы -40°C автомобилисты брызгают эфир в двигатель, ведь пары эфира вспыхивают мгновенно даже тогда, когда бензин не испаряется!",
      "kk": "-40°C аязда жүргізушілер эфирді көліктің ауа сүзгісіне шашады, өйткені бензин булана алмайтын суықта эфир буы лезде тұтанады!"
    }
  },
  {
    "id": "phosphine",
    "formula": "PH₃",
    "formulaAscii": "PH3",
    "atoms": {
      "P": 1,
      "H": 3
    },
    "name": {
      "en": "Phosphine (Will-o'-the-Wisp)",
      "ru": "Фосфин (Блуждающие огни)",
      "kk": "Фосфин (Жалған оттар)"
    },
    "scientificName": {
      "en": "Phosphane",
      "ru": "Фосфан",
      "kk": "Фосфан"
    },
    "category": "gas",
    "hazard": "danger",
    "state": "gas",
    "structureType": "tetrahedral",
    "glowColor": "#4ade80",
    "description": {
      "en": "Colorless, fishy-smelling toxic gas that ignites spontaneously in air due to traces of diphosphane. The scientific source behind spooky swamp 'Will-o'-the-Wisp' lights.",
      "ru": "Ядовитый газ с запахом гнилой рыбы. Самовозгорается на воздухе при выходе из болот, породив древние легенды о мистических 'блуждающих огнях'.",
      "kk": "Шіріген балық иісі бар улы газ. Батпақтан шыққанда ауада өздігінен жанып, ертегілердегі жұмбақ 'адастырушы оттар' аңызының ғылыми себебіне айналған."
    },
    "realWorldUse": {
      "en": "Semiconductor phosphorus doping, grain silo fumigation against pests, Venus biosignature candidate",
      "ru": "Легирование полупроводников кремния, фумигация зернохранилищ от жуков, биомаркер на Венере",
      "kk": "Кремний жартылай өткізгіштерін легирлеу, астық қоймаларын зиянкестерден тазарту"
    },
    "funFact": {
      "en": "In 2020, astronomers detected phosphine in the thick sulfuric clouds of planet Venus, sparking thrilling global debates about alien microbial life!",
      "ru": "В 2020 году астрономы обнаружили следы фосфина в облаках Венеры, что вызвало мировую сенсацию о возможном существовании инопланетных микробов!",
      "kk": "2020 жылы астрономдар Шолпан (Венера) планетасының бұлттарынан фосфин тауып, жатпланеталық микробтардың тіршілігі туралы әлемдік пікірталас туғызды!"
    }
  },
  {
    "id": "silane",
    "formula": "SiH₄",
    "formulaAscii": "SiH4",
    "atoms": {
      "Si": 1,
      "H": 4
    },
    "name": {
      "en": "Silane (Silicon Hydride)",
      "ru": "Моносилан",
      "kk": "Моносилан"
    },
    "scientificName": {
      "en": "Silane",
      "ru": "Силан",
      "kk": "Силан"
    },
    "category": "gas",
    "hazard": "danger",
    "state": "gas",
    "structureType": "tetrahedral",
    "glowColor": "#38bdf8",
    "description": {
      "en": "Silicon analogue of methane. Pyrophoric gas that bursts into brilliant white flames and quartz dust the instant it contacts atmospheric air.",
      "ru": "Кремниевый аналог метана. Самовоспламеняется на воздухе с ослепительным пламенем, оставляя облако белоснежного кварцевого пепла.",
      "kk": "Метанның кремнийлі баламасы. Ауамен жанасқанда жарқыраған ақ жалынмен өздігінен тұтанып, артында ақ кварц құмының тозаңын қалдырады."
    },
    "realWorldUse": {
      "en": "Ultra-pure semiconductor polysilicon deposition, solar panel photovoltaic coatings",
      "ru": "Напыление ультрачистого кремния на полупроводники процессоров и солнечных панелей",
      "kk": "Процессорлар мен күн панельдеріне аса таза кремнийді шашыратып қондыру"
    },
    "funFact": {
      "en": "While methane (CH₄) requires a spark to burn, silane (SiH₄) explodes the instant its valve is cracked open into open room air!",
      "ru": "В то время как метан требует искры, силан взрывается пламенем в ту же миллисекунду, как только покидает баллон!",
      "kk": "Метанды жағу үшін ұшқын керек болса, силан баллоннан бөлме ауасына шыққан сол миллисекундта-ақ бірден жалындап жанады!"
    }
  },
  {
    "id": "boron-nitride",
    "formula": "BN",
    "formulaAscii": "BN",
    "atoms": {
      "B": 1,
      "N": 1
    },
    "name": {
      "en": "Boron Nitride (White Graphene)",
      "ru": "Нитрид бора (Белый графен)",
      "kk": "Бор нитриді (Ақ графен)"
    },
    "scientificName": {
      "en": "Boron Mononitride",
      "ru": "Мононитрид бора",
      "kk": "Бор мононитриді"
    },
    "category": "mineral",
    "hazard": "safe",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#f8fafc",
    "description": {
      "en": "Isoelectronic to carbon. In hexagonal form (h-BN) it is slippery 'White Graphite'; in cubic form (c-BN, Borazon) it is nearly as hard as diamond and resists 1,500°C heat.",
      "ru": "Белый графит и боразон. Шестиугольная форма скользкая как тальк, а кубическая форма (боразон) твердостью почти равна алмазу и не горит даже при 1500°C!",
      "kk": "Ақ графит және боразон. Алтыбұрышты түрі тальк сияқты тайғақ майлағыш, ал кубтық түрі (боразон) қаттылығы жағынан алмастан кем түспейді және 1500°C ыстыққа төзеді!"
    },
    "realWorldUse": {
      "en": "Spacecraft heat shields, ceramic crucible for molten titanium, cosmetic powders (gives silk finish)",
      "ru": "Тепловые экраны космических шаттлов, тигли для плавления титана, шелковистая пудра в косметике",
      "kk": "Ғарыш кемелерінің жылу қалқандары, титан балқытатын тигельдер, косметикалық пудралар"
    },
    "funFact": {
      "en": "Unlike real diamond which burns into CO₂ in air at 800°C, cubic boron nitride happily survives high-speed machining friction up to 1,400°C!",
      "ru": "В то время как алмаз сгорает в печи при 800°C, боразон выдерживает трение резцов токарных станков до 1400°C без признаков разрушения!",
      "kk": "Алмаз 800°C-та көмірқышқыл газына айналып жанып кетсе, боразон станоктардың 1400°C үйкелісіне де еш мызғымай шыдайды!"
    }
  },
  {
    "id": "gallium-arsenide",
    "formula": "GaAs",
    "formulaAscii": "GaAs",
    "atoms": {
      "Ga": 1,
      "As": 1
    },
    "name": {
      "en": "Gallium Arsenide",
      "ru": "Арсенид галлия",
      "kk": "Галлий арсениді"
    },
    "scientificName": {
      "en": "Gallium Monoarsenide",
      "ru": "Моноарсенид галлия",
      "kk": "Галлий моноарсениді"
    },
    "category": "mineral",
    "hazard": "caution",
    "state": "solid",
    "structureType": "lattice",
    "glowColor": "#818cf8",
    "description": {
      "en": "Supreme III-V semiconductor. Electrons move through GaAs six times faster than through silicon, making it indispensable for satellite solar arrays and smartphone 5G radios.",
      "ru": "Королевский полупроводник. Электроны движутся сквозь него в 6 раз быстрее, чем сквозь кремний! Незаменим для космических спутников и радиочипов 5G в смартфонах.",
      "kk": "Жоғары деңгейлі жартылай өткізгіш. Электрондар оның бойымен кремнийге қарағанда 6 есе жылдам қозғалады! Ғарыштық жерсеріктер мен 5G чиптерінің жүрегі."
    },
    "realWorldUse": {
      "en": "Space satellite high-efficiency solar cells, 5G phone power amplifiers, infrared laser diodes",
      "ru": "Солнечные батареи марсоходов и спутников, радиомодули 5G в телефонах, лазерные диоды",
      "kk": "Марсоходтар мен спутниктердің күн батареялары, телефондардың 5G байланыс модульдері"
    },
    "funFact": {
      "en": "The solar panels on NASA's Mars Exploration Rovers were crafted from Gallium Arsenide to squeeze maximum wattage from weak Martian sunlight!",
      "ru": "Солнечные крылья марсоходов NASA Spirit и Opportunity сделаны из арсенида галлия, чтобы улавливать даже слабый марсианский свет!",
      "kk": "NASA-ның Spirit және Opportunity марсоходтарының күн қанаттары Марстың әлсіз сәулесінен барынша көп қуат алу үшін дәл осы галлий арсенидінен жасалған!"
    }
  },
  {
    "id": "uranium-hexafluoride",
    "formula": "UF₆",
    "formulaAscii": "UF6",
    "atoms": {
      "U": 1,
      "F": 6
    },
    "name": {
      "en": "Uranium Hexafluoride (Hex)",
      "ru": "Гексафторид урана",
      "kk": "Уран гексафториді"
    },
    "scientificName": {
      "en": "Uranium Hexafluoride",
      "ru": "Гексафторид урана",
      "kk": "Уран гексафториді"
    },
    "category": "mineral",
    "hazard": "danger",
    "state": "solid",
    "structureType": "complex",
    "glowColor": "#10b981",
    "description": {
      "en": "White crystalline compound that sublimes into dense gas at 56°C. The sole chemical medium used in gas centrifuges to enrich fissionable Uranium-235 for nuclear power.",
      "ru": "Белое вещество, возгоняющееся в газ при 56°C. Единственное в мире соединение, на котором работают газовые центрифуги для обогащения урана на АЭС.",
      "kk": "56°C-та буға айналатын ақ зат. Атом электр станцияларына қажетті уран-235 изотопын газ центрифугаларында байытуға арналған әлемдегі жалғыз қосылыс."
    },
    "realWorldUse": {
      "en": "Gas centrifuge isotope enrichment for nuclear energy, nuclear fuel cycle",
      "ru": "Обогащение урана-235 в центрифугах для атомных электростанций мира",
      "kk": "Атом энергетикасы үшін центрифугаларда уран-235 изотопын байыту"
    },
    "funFact": {
      "en": "Fluorine has only one natural stable isotope (F-19), which means every variation in UF₆ gas weight is 100% caused by the uranium isotope itself!",
      "ru": "У фтора в природе есть лишь один изотоп (F-19), поэтому разница в весе молекул газа зависит исключительно от массы атома урана (U-235 или U-238)!",
      "kk": "Фтордың табиғатта жалғыз ғана изотопы (F-19) бар, сондықтан UF₆ молекулаларының салмағының айырмашылығы тек уранның массасына (U-235 немесе U-238) ғана байланысты!"
    }
  }
];

export const MOLECULES_BY_ID = new Map<string, MoleculeData>(
  MOLECULES_DATA.map((m) => [m.id, m])
);
