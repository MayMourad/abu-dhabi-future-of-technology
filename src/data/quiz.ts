import type { L } from '../i18n/ui';

export interface QuizQuestion {
  id: string;
  q: L;
  options: L[];
  answer: number;
  explain: L;
}

export const quiz: QuizQuestion[] = [
  {
    id: 'org',
    q: {
      en: 'Which Abu Dhabi organization is a university focused on artificial intelligence?',
      ar: 'أي جهة في أبوظبي هي جامعة متخصصة في الذكاء الاصطناعي؟',
    },
    options: [
      { en: 'MBZUAI', ar: 'جامعة محمد بن زايد للذكاء الاصطناعي' },
      { en: 'Hub71', ar: 'هب 71' },
      { en: 'Masdar City', ar: 'مدينة مصدر' },
      { en: 'UAE Space Agency', ar: 'وكالة الإمارات للفضاء' },
    ],
    answer: 0,
    explain: {
      en: 'MBZUAI is a research university devoted to AI. Hub71 supports startups, Masdar City is a sustainable community, and the UAE Space Agency works on space.',
      ar: 'جامعة محمد بن زايد للذكاء الاصطناعي جامعة بحثية مخصّصة لهذا المجال. أما هب 71 فيدعم الشركات الناشئة، ومدينة مصدر مجتمع مستدام، ووكالة الإمارات للفضاء تعمل في الفضاء.',
    },
  },
  {
    id: 'startup',
    q: { en: 'What is a startup?', ar: 'ما الشركة الناشئة؟' },
    options: [
      { en: 'A very old family shop', ar: 'متجر عائلي قديم جدًا' },
      { en: 'A machine that starts cars', ar: 'آلة تشغّل السيارات' },
      { en: 'A young company that turns a new idea into something people can use', ar: 'شركة جديدة تحوّل فكرة جديدة إلى شيء يستخدمه الناس' },
      { en: 'A kind of satellite', ar: 'نوع من الأقمار الاصطناعية' },
    ],
    answer: 2,
    explain: {
      en: 'A startup begins with an idea and works to turn it into a solution. Hub71 helps startups like these grow.',
      ar: 'تبدأ الشركة الناشئة بفكرة وتعمل على تحويلها إلى حل. ويساعد هب 71 شركات من هذا النوع على النمو.',
    },
  },
  {
    id: 'robots',
    q: { en: 'Which three kinds of parts work together in many robots?', ar: 'أي ثلاثة أنواع من الأجزاء تعمل معًا في كثير من الروبوتات؟' },
    options: [
      { en: 'Paint, glue and paper', ar: 'دهان وغراء وورق' },
      { en: 'Sensors, a computer and motors', ar: 'مستشعرات وحاسوب ومحركات' },
      { en: 'Telescopes, tents and flags', ar: 'تلسكوبات وخيام وأعلام' },
      { en: 'Only wheels', ar: 'العجلات فقط' },
    ],
    answer: 1,
    explain: {
      en: 'Sensors notice, the computer decides, and motors move. Researchers at Khalifa University study how to join all three.',
      ar: 'تلاحظ المستشعرات، ويقرّر الحاسوب، وتتحرّك المحركات. ويدرس باحثو جامعة خليفة كيفية الجمع بينها.',
    },
  },
  {
    id: 'sustain',
    q: { en: 'How does Masdar City describe itself?', ar: 'كيف تصف مدينة مصدر نفسها؟' },
    options: [
      { en: 'A rocket launch site', ar: 'موقع لإطلاق الصواريخ' },
      { en: 'A video game studio', ar: 'استوديو لألعاب الفيديو' },
      { en: 'A university only for robots', ar: 'جامعة للروبوتات فقط' },
      { en: 'A sustainable urban community and technology hub', ar: 'مجتمع حضري مستدام ومركز تقني' },
    ],
    answer: 3,
    explain: {
      en: 'Masdar City aims to help find solutions to climate change and to show how future cities could work.',
      ar: 'تهدف مدينة مصدر إلى المساهمة في إيجاد حلول لتغيّر المناخ وإظهار كيف يمكن أن تعمل مدن المستقبل.',
    },
  },
  {
    id: 'space',
    q: { en: 'In 2021, the UAE’s Hope probe entered orbit around which planet?', ar: 'في عام 2021 دخل «مسبار الأمل» الإماراتي مدار أي كوكب؟' },
    options: [
      { en: 'Mars', ar: 'المريخ' },
      { en: 'Venus', ar: 'الزهرة' },
      { en: 'Jupiter', ar: 'المشتري' },
      { en: 'Saturn', ar: 'زحل' },
    ],
    answer: 0,
    explain: {
      en: 'Hope entered Mars orbit on 9 February 2021. It was a UAE-wide achievement.',
      ar: 'دخل المسبار مدار المريخ في 9 فبراير 2021، وكان إنجازًا على مستوى الإمارات كلها.',
    },
  },
  {
    id: 'research',
    q: { en: 'Which of these is one of the research centers listed by the Technology Innovation Institute (TII)?', ar: 'أي مما يلي أحد المراكز البحثية التي يذكرها معهد الابتكار التكنولوجي؟' },
    options: [
      { en: 'Football Coaching', ar: 'تدريب كرة القدم' },
      { en: 'Pottery Design', ar: 'تصميم الفخار' },
      { en: 'Cryptography', ar: 'التشفير' },
      { en: 'Fashion Studies', ar: 'دراسات الأزياء' },
    ],
    answer: 2,
    explain: {
      en: 'Cryptography is one of TII’s nine research centers, along with Quantum, Advanced Materials and more.',
      ar: 'التشفير أحد مراكز المعهد البحثية التسعة، إلى جانب الكم والمواد المتقدمة وغيرها.',
    },
  },
];
