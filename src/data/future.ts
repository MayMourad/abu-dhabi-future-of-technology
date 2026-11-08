import type { L } from '../i18n/ui';

export interface FutureTopic {
  id: string;
  icon: 'health' | 'transport' | 'city' | 'science' | 'edu' | 'earth';
  title: L;
  today: L;
  tomorrow: L;
  source: string;
}

export const futureTopics: FutureTopic[] = [
  {
    id: 'health',
    icon: 'health',
    title: { en: 'Better healthcare', ar: 'رعاية صحية أفضل' },
    today: {
      en: 'G42’s website lists Malaffi, a health information exchange, as an example project.',
      ar: 'يذكر موقع جي 42 «مَلَفّي»، منصة لتبادل المعلومات الصحية، مثالًا على مشاريعها.',
    },
    tomorrow: {
      en: 'AI might one day help doctors notice illnesses earlier by studying scans and records.',
      ar: 'قد يساعد الذكاء الاصطناعي الأطباء يومًا ما على ملاحظة الأمراض مبكرًا بدراسة الصور والسجلات.',
    },
    source: 'https://www.g42.ai/',
  },
  {
    id: 'transport',
    icon: 'transport',
    title: { en: 'Smarter transportation', ar: 'نقل أكثر ذكاءً' },
    today: {
      en: 'G42’s website lists TXAI, autonomous ride-hailing, as another example.',
      ar: 'يذكر موقع جي 42 «TXAI»، خدمة طلب سيارات ذاتية القيادة، مثالًا آخر.',
    },
    tomorrow: {
      en: 'Cities could use smart signals and electric vehicles to cut waiting time and noise.',
      ar: 'قد تستخدم المدن إشارات ذكية ومركبات كهربائية لتقليل وقت الانتظار والضوضاء.',
    },
    source: 'https://www.g42.ai/',
  },
  {
    id: 'city',
    icon: 'city',
    title: { en: 'Sustainable cities', ar: 'مدن مستدامة' },
    today: {
      en: 'Masdar City describes itself as a sustainable urban community and technology hub.',
      ar: 'تصف مدينة مصدر نفسها بأنها مجتمع حضري مستدام ومركز تقني.',
    },
    tomorrow: {
      en: 'More neighbourhoods could combine solar power, green parks and efficient buildings.',
      ar: 'قد تجمع أحياء أكثر بين الطاقة الشمسية والحدائق الخضراء والمباني عالية الكفاءة.',
    },
    source: 'https://masdarcity.ae/',
  },
  {
    id: 'science',
    icon: 'science',
    title: { en: 'Scientific discoveries', ar: 'اكتشافات علمية' },
    today: {
      en: 'TII’s scientists work in nine research centers, from Quantum to Advanced Materials.',
      ar: 'يعمل علماء معهد الابتكار التكنولوجي في تسعة مراكز بحثية، من الكم إلى المواد المتقدمة.',
    },
    tomorrow: {
      en: 'New materials, quantum tools or space technology could lead to discoveries we cannot predict yet.',
      ar: 'قد تقود مواد جديدة أو أدوات كمّية أو تقنيات فضائية إلى اكتشافات لا نستطيع التنبؤ بها بعد.',
    },
    source: 'https://www.tii.ae/tii-research-centers',
  },
  {
    id: 'edu',
    icon: 'edu',
    title: { en: 'Advanced education', ar: 'تعليم متقدّم' },
    today: {
      en: 'MBZUAI is a university dedicated to teaching and researching artificial intelligence.',
      ar: 'جامعة محمد بن زايد للذكاء الاصطناعي جامعة مخصّصة لتدريس الذكاء الاصطناعي والبحث فيه.',
    },
    tomorrow: {
      en: 'Learning tools could one day adapt to how each student learns best.',
      ar: 'قد تتكيّف أدوات التعلّم يومًا ما مع الطريقة التي يتعلّم بها كل طالب على أفضل وجه.',
    },
    source: 'https://mbzuai.ac.ae/',
  },
  {
    id: 'earth',
    icon: 'earth',
    title: { en: 'Environmental protection', ar: 'حماية البيئة' },
    today: {
      en: 'TII has a Renewable and Sustainable Energy research center.',
      ar: 'لدى معهد الابتكار التكنولوجي مركز أبحاث للطاقة المتجددة والمستدامة.',
    },
    tomorrow: {
      en: 'Satellites and AI might help scientists keep a closer eye on forests, oceans and air.',
      ar: 'قد تساعد الأقمار الاصطناعية والذكاء الاصطناعي العلماء على متابعة الغابات والمحيطات والهواء بدقة أكبر.',
    },
    source: 'https://www.tii.ae/tii-research-centers',
  },
];
