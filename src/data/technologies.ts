import type { L } from '../i18n/ui';

export type TechId = 'ai' | 'robotics' | 'space' | 'energy' | 'cyber' | 'city';

export interface Tech {
  id: TechId;
  name: L;
  def: L;
  example: L;
  apply: L;
  fact: L;
  link: { url: string; label: L };
}

export const technologies: Tech[] = [
  {
    id: 'ai',
    name: { en: 'Artificial Intelligence', ar: 'الذكاء الاصطناعي' },
    def: {
      en: 'Artificial intelligence (AI) is computer software that learns patterns from many examples and uses them to help solve problems, like recognising a picture or answering a question.',
      ar: 'الذكاء الاصطناعي برمجيات حاسوبية تتعلّم الأنماط من أمثلة كثيرة وتستخدمها للمساعدة في حل المشكلات، مثل التعرّف على صورة أو الإجابة عن سؤال.',
    },
    example: {
      en: 'MBZUAI is a university devoted to AI, and TII has released AI language models called Falcon.',
      ar: 'جامعة محمد بن زايد للذكاء الاصطناعي مخصّصة لهذا المجال، وقد أتاح معهد الابتكار التكنولوجي نماذج لغوية للذكاء الاصطناعي باسم «فالكون».',
    },
    apply: {
      en: 'Translation apps, photo tools and helpers that suggest the next word all use AI ideas.',
      ar: 'تستخدم تطبيقات الترجمة وأدوات الصور ومساعدات اقتراح الكلمة التالية أفكار الذكاء الاصطناعي.',
    },
    fact: {
      en: 'The first Falcon model from TII was trained on one trillion tokens, which are small pieces of text.',
      ar: 'تدرّب أول نموذج «فالكون» من المعهد على تريليون وحدة نصية، وهي قطع صغيرة من النص.',
    },
    link: { url: 'https://mbzuai.ac.ae/', label: { en: 'Visit MBZUAI', ar: 'زُر موقع الجامعة' } },
  },
  {
    id: 'robotics',
    name: { en: 'Robotics', ar: 'الروبوتات' },
    def: {
      en: 'A robot is a machine that uses sensors to notice the world, a computer to decide what to do, and motors to move.',
      ar: 'الروبوت آلة تستخدم المستشعرات لتلاحظ العالم من حولها، وحاسوبًا ليقرّر ما يفعل، ومحركات لتتحرّك.',
    },
    example: {
      en: 'Khalifa University’s KUCARS center studies autonomous robotic systems.',
      ar: 'يدرس مركز KUCARS في جامعة خليفة الأنظمة الروبوتية ذاتية التشغيل.',
    },
    apply: {
      en: 'Robots can help with tasks that are repetitive, precise or hard for people to reach.',
      ar: 'يمكن للروبوتات المساعدة في مهام متكررة أو دقيقة أو يصعب على الناس الوصول إليها.',
    },
    fact: {
      en: 'KUCARS says its robotic systems are evaluated in realistic conditions, not only on a screen.',
      ar: 'يذكر المركز أن أنظمته الروبوتية تُختبر في ظروف واقعية، وليس على الشاشة فقط.',
    },
    link: { url: 'https://www.ku.ac.ae/kucars', label: { en: 'Visit KUCARS', ar: 'زُر موقع المركز' } },
  },
  {
    id: 'space',
    name: { en: 'Space Exploration', ar: 'استكشاف الفضاء' },
    def: {
      en: 'Space exploration uses rockets, satellites and probes to learn about Earth, the planets and the universe.',
      ar: 'يستخدم استكشاف الفضاء الصواريخ والأقمار الاصطناعية والمسابير لمعرفة المزيد عن الأرض والكواكب والكون.',
    },
    example: {
      en: 'The UAE Space Agency is headquartered in Abu Dhabi. The UAE’s Hope probe reached Mars orbit in 2021.',
      ar: 'يقع مقر وكالة الإمارات للفضاء في أبوظبي. ووصل «مسبار الأمل» الإماراتي إلى مدار المريخ عام 2021.',
    },
    apply: {
      en: 'Satellites help with communication, weather pictures and navigation.',
      ar: 'تساعد الأقمار الاصطناعية في الاتصالات وصور الطقس والملاحة.',
    },
    fact: {
      en: 'Hope was launched in July 2020 and entered orbit around Mars on 9 February 2021.',
      ar: 'أُطلق «مسبار الأمل» في يوليو 2020 ودخل مدار المريخ في 9 فبراير 2021.',
    },
    link: { url: 'https://space.gov.ae/', label: { en: 'Visit the UAE Space Agency', ar: 'زُر موقع وكالة الإمارات للفضاء' } },
  },
  {
    id: 'energy',
    name: { en: 'Sustainable Energy', ar: 'الطاقة المستدامة' },
    def: {
      en: 'Sustainable energy comes from sources that can be used without running out, such as sunlight, and aims to protect the environment.',
      ar: 'الطاقة المستدامة تأتي من مصادر يمكن استخدامها دون أن تنفد، مثل ضوء الشمس، وتهدف إلى حماية البيئة.',
    },
    example: {
      en: 'Masdar City is a community built to explore sustainable living, and TII has a Renewable and Sustainable Energy research center.',
      ar: 'مدينة مصدر مجتمع بُني لاستكشاف العيش المستدام، ولدى معهد الابتكار التكنولوجي مركز أبحاث للطاقة المتجددة والمستدامة.',
    },
    apply: {
      en: 'Solar panels on roofs and in solar farms turn sunlight into electricity.',
      ar: 'تحوّل الألواح الشمسية على الأسطح وفي المزارع الشمسية ضوء الشمس إلى كهرباء.',
    },
    fact: {
      en: '“Masdar” means “source” in Arabic.',
      ar: 'كلمة «مصدر» تعني «المنبع أو الأصل» في العربية، وهي اسم المدينة نفسه.',
    },
    link: { url: 'https://masdarcity.ae/', label: { en: 'Visit Masdar City', ar: 'زُر موقع مدينة مصدر' } },
  },
  {
    id: 'cyber',
    name: { en: 'Cybersecurity', ar: 'الأمن السيبراني' },
    def: {
      en: 'Cybersecurity means protecting computers, networks and information from people who should not have access to them.',
      ar: 'الأمن السيبراني هو حماية الحواسيب والشبكات والمعلومات ممن لا ينبغي أن يصلوا إليها.',
    },
    example: {
      en: 'TII has research centers for Cryptography and for Secure Systems.',
      ar: 'لدى معهد الابتكار التكنولوجي مركزان للبحث في التشفير والأنظمة الآمنة.',
    },
    apply: {
      en: 'Strong passwords, two-step checks and updates help keep accounts and devices safe.',
      ar: 'تساعد كلمات المرور القوية والتحقق بخطوتين والتحديثات على حماية الحسابات والأجهزة.',
    },
    fact: {
      en: 'Cryptography is the science of scrambling information so that only the right person can read it.',
      ar: 'التشفير علم يخلط المعلومات بحيث لا يستطيع قراءتها إلا الشخص المقصود.',
    },
    link: { url: 'https://www.tii.ae/tii-research-centers', label: { en: 'See TII research centers', ar: 'اطّلع على مراكز أبحاث المعهد' } },
  },
  {
    id: 'city',
    name: { en: 'Smart Cities', ar: 'المدن الذكية' },
    def: {
      en: 'A smart city uses technology and information to make transport, energy and city services work better for the people who live there.',
      ar: 'المدينة الذكية تستخدم التقنية والمعلومات لتجعل النقل والطاقة والخدمات تعمل بشكل أفضل لسكانها.',
    },
    example: {
      en: 'Masdar City presents itself as a testing ground for future city ideas.',
      ar: 'تقدّم مدينة مصدر نفسها ميدانًا لتجربة أفكار مدن المستقبل.',
    },
    apply: {
      en: 'Sensors can help traffic lights, street lights and buildings adjust to what is happening.',
      ar: 'يمكن للمستشعرات أن تساعد إشارات المرور وأضواء الشوارع والمباني على التكيّف مع ما يجري حولها.',
    },
    fact: {
      en: 'Masdar City’s website highlights green parks as well as technology, because people’s well-being matters too.',
      ar: 'يبرز موقع مدينة مصدر الحدائق الخضراء إلى جانب التقنية، لأن راحة الناس مهمة أيضًا.',
    },
    link: { url: 'https://masdarcity.ae/', label: { en: 'Visit Masdar City', ar: 'زُر موقع مدينة مصدر' } },
  },
];
