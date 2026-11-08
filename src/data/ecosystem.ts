import type { L } from '../i18n/ui';

export interface EcoNode {
  id: string;
  label: L;
  text: L;
  /** center ids to link to */
  centers: string[];
}

export const ecoNodes: EcoNode[] = [
  {
    id: 'ai',
    label: { en: 'Artificial Intelligence', ar: 'الذكاء الاصطناعي' },
    text: {
      en: 'Computers that learn from examples. MBZUAI is a university for AI, and G42 is a company building AI, both based in Abu Dhabi.',
      ar: 'حواسيب تتعلّم من الأمثلة. جامعة محمد بن زايد للذكاء الاصطناعي جامعة متخصصة في هذا المجال، وجي 42 شركة تبني حلول الذكاء الاصطناعي، وكلتاهما في أبوظبي.',
    },
    centers: ['mbzuai', 'g42'],
  },
  {
    id: 'robotics',
    label: { en: 'Robotics', ar: 'الروبوتات' },
    text: {
      en: 'Machines that sense, think and act. Khalifa University’s KUCARS and TII’s Autonomous Robotics center research them.',
      ar: 'آلات تستشعر وتفكّر وتنفّذ. يبحث فيها مركز KUCARS في جامعة خليفة ومركز الروبوتات ذاتية التشغيل في معهد الابتكار التكنولوجي.',
    },
    centers: ['khalifa', 'tii'],
  },
  {
    id: 'space',
    label: { en: 'Space Technology', ar: 'تقنيات الفضاء' },
    text: {
      en: 'Satellites and exploration. The UAE Space Agency, a federal organization, is headquartered in Abu Dhabi.',
      ar: 'أقمار اصطناعية واستكشاف. مقر وكالة الإمارات للفضاء، وهي جهة اتحادية، في أبوظبي.',
    },
    centers: ['space'],
  },
  {
    id: 'energy',
    label: { en: 'Renewable Energy', ar: 'الطاقة المتجددة' },
    text: {
      en: 'Cleaner power and greener cities. Masdar City is a sustainable community, and TII has a Renewable and Sustainable Energy center.',
      ar: 'طاقة أنظف ومدن أكثر خضرة. مدينة مصدر مجتمع مستدام، ولدى معهد الابتكار التكنولوجي مركز للطاقة المتجددة والمستدامة.',
    },
    centers: ['masdar', 'tii'],
  },
  {
    id: 'research',
    label: { en: 'Scientific Research', ar: 'البحث العلمي' },
    text: {
      en: 'Careful experiments that discover new knowledge. TII’s scientists work in nine research centers.',
      ar: 'تجارب دقيقة تكتشف معرفة جديدة. يعمل علماء معهد الابتكار التكنولوجي في تسعة مراكز بحثية.',
    },
    centers: ['tii', 'khalifa'],
  },
  {
    id: 'startups',
    label: { en: 'Entrepreneurship', ar: 'ريادة الأعمال' },
    text: {
      en: 'Turning ideas into products. Hub71 is an Abu Dhabi ecosystem that supports tech startups.',
      ar: 'تحويل الأفكار إلى منتجات. هب 71 منظومة في أبوظبي تدعم الشركات الناشئة التقنية.',
    },
    centers: ['hub71'],
  },
];

export interface Pillar {
  id: string;
  icon: 'edu' | 'research' | 'company' | 'startup' | 'green' | 'gov';
  title: L;
  text: L;
}

export const pillars: Pillar[] = [
  {
    id: 'edu',
    icon: 'edu',
    title: { en: 'Universities and education', ar: 'الجامعات والتعليم' },
    text: { en: 'MBZUAI and Khalifa University teach and train future experts.', ar: 'تعلّم جامعة محمد بن زايد للذكاء الاصطناعي وجامعة خليفة خبراء المستقبل وتدرّبهم.' },
  },
  {
    id: 'research',
    icon: 'research',
    title: { en: 'Scientific research', ar: 'البحث العلمي' },
    text: { en: 'TII explores new science in nine research centers.', ar: 'يستكشف معهد الابتكار التكنولوجي علومًا جديدة في تسعة مراكز بحثية.' },
  },
  {
    id: 'company',
    icon: 'company',
    title: { en: 'Technology companies', ar: 'شركات التكنولوجيا' },
    text: { en: 'Companies such as G42 turn ideas into services.', ar: 'تحوّل شركات مثل جي 42 الأفكار إلى خدمات.' },
  },
  {
    id: 'startup',
    icon: 'startup',
    title: { en: 'Startups and entrepreneurship', ar: 'الشركات الناشئة وريادة الأعمال' },
    text: { en: 'Hub71 connects founders with partners and mentors.', ar: 'يربط هب 71 المؤسسين بالشركاء والمرشدين.' },
  },
  {
    id: 'green',
    icon: 'green',
    title: { en: 'Sustainability and clean energy', ar: 'الاستدامة والطاقة النظيفة' },
    text: { en: 'Masdar City explores greener ways to live and work.', ar: 'تستكشف مدينة مصدر طرقًا أكثر خضرة للعيش والعمل.' },
  },
  {
    id: 'gov',
    icon: 'gov',
    title: { en: 'Government-supported innovation', ar: 'ابتكار تدعمه الحكومة' },
    text: { en: 'TII is part of ATRC, a council of the Abu Dhabi Government.', ar: 'معهد الابتكار التكنولوجي جزء من مجلس أبحاث التكنولوجيا المتقدمة التابع لحكومة أبوظبي.' },
  },
];
