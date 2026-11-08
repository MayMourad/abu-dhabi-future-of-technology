import type { L } from '../i18n/ui';

export type Category = 'ai' | 'robotics' | 'space' | 'sustainability' | 'research' | 'startups';
export type SceneKind = 'neural' | 'lab' | 'network' | 'city' | 'robot' | 'orbit' | 'globe';

export interface Center {
  id: string;
  short: string;
  name: L;
  type: L;
  cats: Category[];
  scene: SceneKind;
  /** hex accent used for card art and 3D scene */
  accent: string;
  accent2: string;
  summary: L;
  about: L;
  examples: L[];
  why: L;
  fact: L;
  source: string;
  /** position on the conceptual map, percent of width/height */
  map: { x: number; y: number };
}

export const centers: Center[] = [
  {
    id: 'mbzuai',
    short: 'MBZUAI',
    name: {
      en: 'Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)',
      ar: 'جامعة محمد بن زايد للذكاء الاصطناعي',
    },
    type: { en: 'AI-focused research university', ar: 'جامعة بحثية متخصصة في الذكاء الاصطناعي' },
    cats: ['ai', 'research'],
    scene: 'neural',
    accent: '#087F5B',
    accent2: '#67B5AD',
    summary: {
      en: 'A university in Abu Dhabi devoted to artificial intelligence, where students and researchers study how computers can learn.',
      ar: 'جامعة في أبوظبي مخصّصة للذكاء الاصطناعي، يدرس فيها الطلبة والباحثون كيف تتعلّم الحواسيب.',
    },
    about: {
      en: 'MBZUAI is a research university focused on artificial intelligence (AI). AI is a way of building computers that learn patterns from examples, like recognising a picture or understanding a sentence. The university was announced in October 2019 and began with graduate programmes: master’s and PhD studies in machine learning, computer vision and natural language processing.',
      ar: 'جامعة محمد بن زايد للذكاء الاصطناعي جامعة بحثية متخصصة في الذكاء الاصطناعي. والذكاء الاصطناعي طريقة لبناء حواسيب تتعلّم الأنماط من الأمثلة، مثل التعرّف على صورة أو فهم جملة. أُعلن عن الجامعة في أكتوبر 2019، وبدأت ببرامج الدراسات العليا: الماجستير والدكتوراه في تعلّم الآلة والرؤية الحاسوبية ومعالجة اللغات الطبيعية.',
    },
    examples: [
      { en: 'Machine learning: computers get better by practising with many examples.', ar: 'تعلّم الآلة: تتحسّن الحواسيب بالتدرّب على أمثلة كثيرة.' },
      { en: 'Computer vision: helping computers understand pictures and video.', ar: 'الرؤية الحاسوبية: مساعدة الحواسيب على فهم الصور ومقاطع الفيديو.' },
      { en: 'Natural language processing: helping computers work with human language.', ar: 'معالجة اللغات الطبيعية: مساعدة الحواسيب على التعامل مع اللغة البشرية.' },
    ],
    why: {
      en: 'AI is used in many fields, from language tools to science. Teaching it at university level helps train the researchers who will build and guide these tools in the future.',
      ar: 'يُستخدم الذكاء الاصطناعي في مجالات كثيرة، من أدوات اللغة إلى العلوم. وتدريسه على مستوى الجامعة يساعد على إعداد الباحثين الذين سيبنون هذه الأدوات ويوجّهونها مستقبلًا.',
    },
    fact: {
      en: 'MBZUAI began with graduate programmes, so its first students were already university graduates.',
      ar: 'بدأت الجامعة ببرامج الدراسات العليا، لذلك كان طلبتها الأوائل من خريجي الجامعات أصلًا.',
    },
    source: 'https://mbzuai.ac.ae/',
    map: { x: 24, y: 58 },
  },
  {
    id: 'tii',
    short: 'TII',
    name: { en: 'Technology Innovation Institute (TII)', ar: 'معهد الابتكار التكنولوجي' },
    type: { en: 'Applied research institute, part of ATRC', ar: 'معهد أبحاث تطبيقية تابع لمجلس أبحاث التكنولوجيا المتقدمة' },
    cats: ['research', 'ai', 'robotics'],
    scene: 'lab',
    accent: '#C5A46D',
    accent2: '#087F5B',
    summary: {
      en: 'A research institute that explores new technologies in nine research centers, from quantum science to autonomous robotics.',
      ar: 'معهد أبحاث يستكشف تقنيات جديدة في تسعة مراكز بحثية، من علوم الكم إلى الروبوتات ذاتية التشغيل.',
    },
    about: {
      en: 'The Technology Innovation Institute is part of the Advanced Technology Research Council (ATRC), which oversees technology research in Abu Dhabi. Its scientists and engineers work in nine research centers. Its website lists Advanced Materials, AI and Digital Science, Autonomous Robotics, Cryptography, Directed Energy, Propulsion and Space, Quantum, Renewable and Sustainable Energy, and Secure Systems.',
      ar: 'معهد الابتكار التكنولوجي جزء من مجلس أبحاث التكنولوجيا المتقدمة (ATRC) الذي يشرف على أبحاث التكنولوجيا في أبوظبي. ويعمل علماؤه ومهندسوه في تسعة مراكز بحثية، يذكر موقعه منها: المواد المتقدمة، والذكاء الاصطناعي والعلوم الرقمية، والروبوتات ذاتية التشغيل، والتشفير، والطاقة الموجّهة، والدفع والفضاء، والكم، والطاقة المتجددة والمستدامة، والأنظمة الآمنة.',
    },
    examples: [
      { en: 'Falcon: AI language models that TII has released as open source since 2023.', ar: 'فالكون: نماذج لغوية للذكاء الاصطناعي أتاحها المعهد مفتوحة المصدر منذ عام 2023.' },
      { en: 'Cryptography and secure systems: ways of protecting digital information.', ar: 'التشفير والأنظمة الآمنة: طرق لحماية المعلومات الرقمية.' },
      { en: 'Autonomous robotics and renewable energy research.', ar: 'أبحاث الروبوتات ذاتية التشغيل والطاقة المتجددة.' },
    ],
    why: {
      en: 'Research centers test brave new ideas long before they become everyday technology.',
      ar: 'تختبر المراكز البحثية أفكارًا جريئة جديدة قبل وقت طويل من أن تصبح تقنيات يومية.',
    },
    fact: {
      en: 'TII’s website says its scientists work across nine different research centers.',
      ar: 'يذكر موقع المعهد أن علماءه يعملون في تسعة مراكز بحثية مختلفة.',
    },
    source: 'https://www.tii.ae/',
    map: { x: 40, y: 38 },
  },
  {
    id: 'hub71',
    short: 'Hub71',
    name: { en: 'Hub71', ar: 'هب 71 (Hub71)' },
    type: { en: 'Startup ecosystem (not a university or lab)', ar: 'منظومة للشركات الناشئة (وليست جامعة أو مختبرًا)' },
    cats: ['startups'],
    scene: 'network',
    accent: '#D64747',
    accent2: '#C5A46D',
    summary: {
      en: 'A community in Abu Dhabi that helps technology startups grow with space, mentors and partners.',
      ar: 'مجتمع في أبوظبي يساعد الشركات الناشئة التقنية على النمو بالمساحات والمرشدين والشركاء.',
    },
    about: {
      en: 'A startup begins with an idea and works to turn that idea into a solution people can use. Hub71 is a tech ecosystem of startups, investors, corporate partners and government entities. Its website says it connects founders with resources, capital, commercial opportunities and mentorship, and it is based within Abu Dhabi Global Market (ADGM). It launched in 2019.',
      ar: 'تبدأ الشركة الناشئة بفكرة، وتعمل على تحويلها إلى حل يستخدمه الناس. وهب 71 منظومة تقنية تضم شركات ناشئة ومستثمرين وشركاء من القطاع الخاص وجهات حكومية. يذكر موقعه أنه يربط المؤسسين بالموارد ورأس المال والفرص التجارية والإرشاد، ومقرّه ضمن سوق أبوظبي العالمي (ADGM). وقد أُطلق عام 2019.',
    },
    examples: [
      { en: 'Programmes for early-stage startups and company building.', ar: 'برامج للشركات الناشئة في مراحلها المبكرة ولبناء الشركات.' },
      { en: 'Sector tracks, for example life sciences, ClimateTech and AI.', ar: 'مسارات قطاعية، مثل علوم الحياة وتقنيات المناخ والذكاء الاصطناعي.' },
      { en: 'A network of partners and investors for founders to meet.', ar: 'شبكة من الشركاء والمستثمرين يلتقي بها المؤسسون.' },
    ],
    why: {
      en: 'Many useful technologies begin as small startups. Support at the start helps good ideas become real products and new opportunities.',
      ar: 'تبدأ تقنيات مفيدة كثيرة شركاتٍ ناشئة صغيرة. والدعم في البداية يساعد الأفكار الجيدة على التحوّل إلى منتجات وفرص جديدة.',
    },
    fact: {
      en: 'Its website says startups can access support such as office space, housing and medical insurance.',
      ar: 'يذكر موقعه أن الشركات الناشئة يمكنها الحصول على دعم مثل مساحات المكاتب والسكن والتأمين الطبي.',
    },
    source: 'https://www.hub71.com/',
    map: { x: 64, y: 32 },
  },
  {
    id: 'masdar',
    short: 'Masdar City',
    name: { en: 'Masdar City', ar: 'مدينة مصدر' },
    type: { en: 'Sustainable urban community and technology hub', ar: 'مجتمع حضري مستدام ومركز تقني' },
    cats: ['sustainability', 'startups'],
    scene: 'city',
    accent: '#67B5AD',
    accent2: '#087F5B',
    summary: {
      en: 'A neighbourhood built to test how greener, smarter cities could work.',
      ar: 'حيّ بُني لاختبار كيف يمكن أن تعمل مدن أكثر خضرة وذكاءً.',
    },
    about: {
      en: 'Masdar City describes itself as a sustainable urban community, a business free zone and a technology hub. Its aim is to help find solutions to climate change and to show how future cities could work. The city’s construction began in 2008.',
      ar: 'تصف مدينة مصدر نفسها بأنها مجتمع حضري مستدام ومنطقة حرة للأعمال ومركز تقني. وهدفها المساهمة في إيجاد حلول لتغيّر المناخ وإظهار كيف يمكن أن تعمل مدن المستقبل. وقد بدأ بناء المدينة عام 2008.',
    },
    examples: [
      { en: 'Buildings made with low-carbon cement and recycled aluminium.', ar: 'مبانٍ تُبنى بإسمنت منخفض الكربون وألمنيوم معاد تدويره.' },
      { en: 'Green parks and sustainable office space for companies.', ar: 'حدائق خضراء ومساحات مكتبية مستدامة للشركات.' },
      { en: 'A technology and innovation hub with a life-sciences cluster.', ar: 'مركز للتقنية والابتكار يضم تجمعًا لعلوم الحياة.' },
    ],
    why: {
      en: 'Cities use a lot of energy and water. Trying greener buildings and technologies in a real community shows what is possible.',
      ar: 'تستهلك المدن كثيرًا من الطاقة والمياه. وتجربة مبانٍ وتقنيات أكثر صداقة للبيئة في مجتمع حقيقي تُظهر ما هو ممكن.',
    },
    fact: {
      en: 'Masdar City’s own website says its buildings use about 40% less energy and water than comparable buildings.',
      ar: 'يذكر موقع مدينة مصدر نفسه أن مبانيها تستهلك طاقة ومياهًا أقل بنحو 40% من المباني المماثلة.',
    },
    source: 'https://masdarcity.ae/',
    map: { x: 50, y: 70 },
  },
  {
    id: 'khalifa',
    short: 'Khalifa University',
    name: {
      en: 'Khalifa University: Robotics and Advanced Technology Research',
      ar: 'جامعة خليفة — أبحاث الروبوتات والتكنولوجيا المتقدمة',
    },
    type: { en: 'University research center (KUCARS)', ar: 'مركز أبحاث جامعي (KUCARS)' },
    cats: ['robotics', 'research'],
    scene: 'robot',
    accent: '#075C48',
    accent2: '#C5A46D',
    summary: {
      en: 'Engineers who build and test robots that can sense, think and act on their own.',
      ar: 'مهندسون يبنون ويختبرون روبوتات قادرة على الاستشعار والتفكير والتنفيذ بشكل مستقل.',
    },
    about: {
      en: 'Khalifa University’s Center for Autonomous Robotic Systems (KUCARS) studies robots that work with little human control. Its researchers connect software with the design, building and testing of real robotic systems, and work with industry, government and academic partners. It began as the university’s Robotics Institute in 2012 and was renamed KUCARS in 2018.',
      ar: 'يدرس مركز جامعة خليفة للأنظمة الروبوتية ذاتية التشغيل (KUCARS) روبوتات تعمل بقدر قليل من التحكّم البشري. ويربط باحثوه بين البرمجيات وتصميم الأنظمة الروبوتية الحقيقية وبنائها واختبارها، ويتعاونون مع شركاء من الصناعة والحكومة والجامعات. بدأ المركز عام 2012 باسم معهد الروبوتات في الجامعة، ثم أُعيدت تسميته KUCARS عام 2018.',
    },
    examples: [
      { en: 'Autonomous systems that sense, compute and move.', ar: 'أنظمة ذاتية التشغيل تستشعر وتحسب وتتحرّك.' },
      { en: 'Testing robots in realistic conditions, not only on a screen.', ar: 'اختبار الروبوتات في ظروف واقعية، وليس على الشاشة فقط.' },
      { en: '“Physical AI”: intelligence that lives inside a machine.', ar: '«الذكاء الاصطناعي المادي»: ذكاء يعيش داخل آلة.' },
    ],
    why: {
      en: 'Robots combine computers with moving machines. Research helps make them reliable enough to work in the real world.',
      ar: 'تجمع الروبوتات بين الحواسيب والآلات المتحركة. ويساعد البحث العلمي على جعلها موثوقة بما يكفي للعمل في العالم الحقيقي.',
    },
    fact: {
      en: 'KUCARS started in 2012 as a Robotics Institute and received its current name in 2018.',
      ar: 'بدأ KUCARS عام 2012 معهدًا للروبوتات، وحصل على اسمه الحالي عام 2018.',
    },
    source: 'https://www.ku.ac.ae/kucars',
    map: { x: 22, y: 30 },
  },
  {
    id: 'space',
    short: 'UAE Space Agency',
    name: { en: 'UAE Space Agency', ar: 'وكالة الإمارات للفضاء' },
    type: { en: 'Federal agency headquartered in Abu Dhabi', ar: 'جهة اتحادية مقرّها أبوظبي' },
    cats: ['space'],
    scene: 'orbit',
    accent: '#3C8D93',
    accent2: '#C5A46D',
    summary: {
      en: 'The UAE’s national space agency, working on satellites, space science and exploration.',
      ar: 'الوكالة الوطنية للفضاء في الإمارات، وتعمل في الأقمار الاصطناعية وعلوم الفضاء والاستكشاف.',
    },
    about: {
      en: 'A space agency organises a country’s activities in space, such as satellites, science and exploration. The UAE Space Agency is a federal organization of the United Arab Emirates, headquartered in Abu Dhabi, so it serves the whole country and not only Abu Dhabi. Its creation was announced in 2014.',
      ar: 'تنظّم وكالة الفضاء أنشطة الدولة في الفضاء، مثل الأقمار الاصطناعية والعلوم والاستكشاف. وكالة الإمارات للفضاء جهة اتحادية تابعة لدولة الإمارات العربية المتحدة ومقرها أبوظبي، فهي تخدم الدولة كلها وليس أبوظبي وحدها. وقد أُعلن عن إنشائها عام 2014.',
    },
    examples: [
      { en: 'Satellites that help with communication, weather and maps.', ar: 'أقمار اصطناعية تساعد في الاتصالات والطقس والخرائط.' },
      { en: 'Space science and exploration missions.', ar: 'علوم الفضاء ومهمات الاستكشاف.' },
      { en: 'Space technology that benefits life on Earth.', ar: 'تقنيات فضائية تفيد الحياة على الأرض.' },
    ],
    why: {
      en: 'Satellites help us see Earth from above and connect people far apart. Space work also inspires young scientists and engineers.',
      ar: 'تساعدنا الأقمار الاصطناعية على رؤية الأرض من الأعلى وعلى ربط الناس على مسافات بعيدة. كما يلهم العمل في الفضاء العلماء والمهندسين الشباب.',
    },
    fact: {
      en: 'In 2021 the UAE’s Hope probe entered orbit around Mars. This was a UAE-wide achievement.',
      ar: 'في عام 2021 دخل «مسبار الأمل» الإماراتي مدار المريخ، وكان إنجازًا على مستوى الدولة كلها.',
    },
    source: 'https://space.gov.ae/',
    map: { x: 78, y: 56 },
  },
  {
    id: 'g42',
    short: 'G42',
    name: { en: 'G42', ar: 'جي 42 (G42)' },
    type: { en: 'Abu Dhabi-born technology company', ar: 'شركة تقنية وُلدت في أبوظبي' },
    cats: ['ai'],
    scene: 'globe',
    accent: '#087F5B',
    accent2: '#D64747',
    summary: {
      en: 'A company that builds AI, cloud and data technology for industries around the world.',
      ar: 'شركة تبني تقنيات الذكاء الاصطناعي والحوسبة السحابية والبيانات لقطاعات حول العالم.',
    },
    about: {
      en: 'G42 is an AI company that describes itself as born in Abu Dhabi and building globally. It is a company, not a university or a government research center. Its website lists cybersecurity, data centers and cloud computing, and AI for areas such as healthcare, energy, governance and security. It says it is active in more than 30 countries.',
      ar: 'جي 42 شركة ذكاء اصطناعي تصف نفسها بأنها وُلدت في أبوظبي وتبني حلولها عالميًا. وهي شركة، وليست جامعة أو مركزًا بحثيًا حكوميًا. يذكر موقعها الأمن السيبراني ومراكز البيانات والحوسبة السحابية، والذكاء الاصطناعي في مجالات مثل الرعاية الصحية والطاقة والحوكمة والأمن. وتقول إنها تعمل في أكثر من 30 دولة.',
    },
    examples: [
      { en: 'Malaffi, a health information exchange, is listed as an example project.', ar: 'مَلَفّي، وهو منصة لتبادل المعلومات الصحية، مذكور مثالًا على مشاريعها.' },
      { en: 'TXAI, autonomous ride-hailing, is another listed example.', ar: 'TXAI، خدمة طلب سيارات ذاتية القيادة، مثال آخر مذكور.' },
      { en: 'Cloud and data-center technology that AI needs to run.', ar: 'تقنيات الحوسبة السحابية ومراكز البيانات التي يحتاجها الذكاء الاصطناعي.' },
    ],
    why: {
      en: 'Companies turn research ideas into tools that hospitals, businesses and governments can use every day.',
      ar: 'تحوّل الشركات الأفكار البحثية إلى أدوات تستخدمها المستشفيات والشركات والحكومات يوميًا.',
    },
    fact: {
      en: 'G42’s website says it has ten companies and employees from more than 75 nationalities.',
      ar: 'يذكر موقع جي 42 أن لديها عشر شركات وموظفين من أكثر من 75 جنسية.',
    },
    source: 'https://www.g42.ai/',
    map: { x: 84, y: 30 },
  },
];

export const categories: Category[] = ['ai', 'robotics', 'space', 'sustainability', 'research', 'startups'];
