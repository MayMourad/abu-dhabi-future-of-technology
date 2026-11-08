import type { L } from '../i18n/ui';

export type Field = 'ai' | 'robotics' | 'space' | 'energy' | 'cyber' | 'startup';

export interface InterestQuestion {
  q: L;
  options: { label: L; field: Field }[];
}

export const interestQuestions: InterestQuestion[] = [
  {
    q: { en: 'Which problem would you most enjoy solving?', ar: 'أي مشكلة ستستمتع أكثر بحلّها؟' },
    options: [
      { label: { en: 'Helping doctors understand health information', ar: 'مساعدة الأطباء على فهم المعلومات الصحية' }, field: 'ai' },
      { label: { en: 'Building robots that help people', ar: 'بناء روبوتات تساعد الناس' }, field: 'robotics' },
      { label: { en: 'Exploring space', ar: 'استكشاف الفضاء' }, field: 'space' },
      { label: { en: 'Protecting the environment', ar: 'حماية البيئة' }, field: 'energy' },
      { label: { en: 'Keeping computers safe', ar: 'حماية الحواسيب' }, field: 'cyber' },
      { label: { en: 'Creating a business', ar: 'تأسيس مشروع تجاري' }, field: 'startup' },
    ],
  },
  {
    q: { en: 'Which activity sounds the most fun?', ar: 'أي نشاط يبدو الأكثر متعة؟' },
    options: [
      { label: { en: 'Teaching a computer to recognise patterns', ar: 'تعليم الحاسوب التعرّف على الأنماط' }, field: 'ai' },
      { label: { en: 'Putting together motors and sensors', ar: 'تركيب المحركات والمستشعرات' }, field: 'robotics' },
      { label: { en: 'Looking at the stars and planets', ar: 'مراقبة النجوم والكواكب' }, field: 'space' },
      { label: { en: 'Designing a city full of parks and solar power', ar: 'تصميم مدينة مليئة بالحدائق والطاقة الشمسية' }, field: 'energy' },
      { label: { en: 'Solving secret-code puzzles', ar: 'حل ألغاز الرموز السرية' }, field: 'cyber' },
      { label: { en: 'Pitching a new idea to an audience', ar: 'عرض فكرة جديدة أمام الجمهور' }, field: 'startup' },
    ],
  },
  {
    q: { en: 'Which invention would you like to create one day?', ar: 'أي اختراع تتمنى أن تصنعه يومًا ما؟' },
    options: [
      { label: { en: 'A smart assistant that speaks many languages', ar: 'مساعد ذكي يتحدث لغات كثيرة' }, field: 'ai' },
      { label: { en: 'A helper robot for dangerous jobs', ar: 'روبوت مساعد للأعمال الخطرة' }, field: 'robotics' },
      { label: { en: 'A satellite that watches over the Earth', ar: 'قمر اصطناعي يراقب الأرض' }, field: 'space' },
      { label: { en: 'A machine that makes clean energy', ar: 'آلة تنتج طاقة نظيفة' }, field: 'energy' },
      { label: { en: 'A strong lock for protecting digital information', ar: 'قفل قوي لحماية المعلومات الرقمية' }, field: 'cyber' },
      { label: { en: 'An app that thousands of people use', ar: 'تطبيق يستخدمه آلاف الناس' }, field: 'startup' },
    ],
  },
];

export const interestResults: Record<Field, { title: L; text: L; center: string }> = {
  ai: {
    title: { en: 'Artificial Intelligence', ar: 'الذكاء الاصطناعي' },
    text: {
      en: 'You like patterns and helping others with clever tools. AI researchers teach computers to learn from examples. You could start by practising maths and coding, and by asking good questions.',
      ar: 'أنت تحب الأنماط ومساعدة الآخرين بأدوات ذكية. يعلّم باحثو الذكاء الاصطناعي الحواسيب أن تتعلّم من الأمثلة. يمكنك أن تبدأ بالتدرّب على الرياضيات والبرمجة وبطرح أسئلة جيدة.',
    },
    center: 'mbzuai',
  },
  robotics: {
    title: { en: 'Robotics', ar: 'الروبوتات' },
    text: {
      en: 'You enjoy building and making things move. Robotics engineers join sensors, computers and motors. Try a simple kit or build a moving model from cardboard and a small motor.',
      ar: 'تستمتع بالبناء وجعل الأشياء تتحرّك. يجمع مهندسو الروبوتات بين المستشعرات والحواسيب والمحركات. جرّب مجموعة بناء بسيطة أو اصنع نموذجًا متحركًا من الكرتون ومحرك صغير.',
    },
    center: 'khalifa',
  },
  space: {
    title: { en: 'Space Technology', ar: 'تقنيات الفضاء' },
    text: {
      en: 'You look up and wonder. Space scientists and engineers design satellites and missions. Start with stargazing, and learn how gravity and orbits work.',
      ar: 'أنت تنظر إلى السماء وتتساءل. يصمم علماء الفضاء ومهندسوه الأقمار الاصطناعية والمهمات. ابدأ بمراقبة النجوم، وتعرّف على كيفية عمل الجاذبية والمدارات.',
    },
    center: 'space',
  },
  energy: {
    title: { en: 'Sustainable Energy and Cities', ar: 'الطاقة والمدن المستدامة' },
    text: {
      en: 'You care about nature and the future of our cities. Engineers in this field design cleaner power and greener buildings. Try measuring sunlight with a simple solar cell.',
      ar: 'أنت تهتم بالطبيعة ومستقبل مدننا. يصمم المهندسون في هذا المجال طاقة أنظف ومباني أكثر خضرة. جرّب قياس ضوء الشمس بخلية شمسية بسيطة.',
    },
    center: 'masdar',
  },
  cyber: {
    title: { en: 'Cybersecurity', ar: 'الأمن السيبراني' },
    text: {
      en: 'You love puzzles and keeping things safe. Cybersecurity experts protect information and study codes. Practise with logic puzzles and learn how encryption hides messages.',
      ar: 'أنت تحب الألغاز وحماية الأشياء. يحمي خبراء الأمن السيبراني المعلومات ويدرسون الرموز. تدرّب على ألغاز المنطق وتعرّف على كيفية إخفاء التشفير للرسائل.',
    },
    center: 'tii',
  },
  startup: {
    title: { en: 'Technology Entrepreneurship', ar: 'ريادة الأعمال التقنية' },
    text: {
      en: 'You turn ideas into plans. Entrepreneurs find a problem, build a solution, and share it with others. Try designing a poster for your idea and explaining it to friends.',
      ar: 'أنت تحوّل الأفكار إلى خطط. يكتشف رواد الأعمال مشكلة، ويبنون حلًا، ويشاركونه مع الآخرين. جرّب تصميم ملصق لفكرتك وشرحها لأصدقائك.',
    },
    center: 'hub71',
  },
};
