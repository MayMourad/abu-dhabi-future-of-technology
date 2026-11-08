import type { L } from '../i18n/ui';

export interface Milestone {
  year: number;
  /** true if the event happened in Abu Dhabi specifically; false if UAE-wide */
  abuDhabi: boolean;
  icon: 'city' | 'robot' | 'space' | 'startup' | 'ai' | 'astronaut' | 'mars' | 'falcon';
  title: L;
  text: L;
  source: { url: string; label: string };
}

export const milestones: Milestone[] = [
  {
    year: 2008,
    abuDhabi: true,
    icon: 'city',
    title: { en: 'Masdar City begins to take shape', ar: 'مدينة مصدر تبدأ بالتشكّل' },
    text: {
      en: 'Masdar was set up in 2006, and the groundbreaking of Masdar City, a community for testing sustainable living, followed in 2008.',
      ar: 'تأسست «مصدر» عام 2006، وتلا ذلك في عام 2008 وضع حجر الأساس لمدينة مصدر، وهي مجتمع لتجربة العيش المستدام.',
    },
    source: { url: 'https://masdar.ae/en/news/newsroom/10-things-you-didnt-know-about-masdar-city', label: 'Masdar' },
  },
  {
    year: 2012,
    abuDhabi: true,
    icon: 'robot',
    title: { en: 'Khalifa University’s Robotics Institute starts', ar: 'انطلاق معهد الروبوتات في جامعة خليفة' },
    text: {
      en: 'The university founded its Robotics Institute, which was renamed the Center for Autonomous Robotic Systems (KUCARS) in 2018.',
      ar: 'أسست الجامعة معهد الروبوتات، الذي أُعيدت تسميته مركز الأنظمة الروبوتية ذاتية التشغيل (KUCARS) عام 2018.',
    },
    source: { url: 'https://www.ku.ac.ae/kucars', label: 'Khalifa University' },
  },
  {
    year: 2014,
    abuDhabi: false,
    icon: 'space',
    title: { en: 'The UAE Space Agency is announced', ar: 'الإعلان عن وكالة الإمارات للفضاء' },
    text: {
      en: 'The creation of the UAE’s national space agency was announced in July 2014. It is a federal organization with its headquarters in Abu Dhabi.',
      ar: 'أُعلن عن إنشاء الوكالة الوطنية للفضاء في الإمارات في يوليو 2014. وهي جهة اتحادية يقع مقرها في أبوظبي.',
    },
    source: { url: 'https://thenationalnews.com/weekend/2022/07/08/timeframe-eight-years-since-uaes-mars-mission-was-announced', label: 'The National' },
  },
  {
    year: 2019,
    abuDhabi: true,
    icon: 'startup',
    title: { en: 'Hub71 is launched', ar: 'إطلاق هب 71' },
    text: {
      en: 'Hub71 was launched in March 2019 to bring startups, investors and partners together in Abu Dhabi.',
      ar: 'أُطلق هب 71 في مارس 2019 ليجمع الشركات الناشئة والمستثمرين والشركاء في أبوظبي.',
    },
    source: { url: 'https://www.wam.ae/en/article/hszr8cjv-abu-dhabi-launches-aed520-million-hub71', label: 'WAM' },
  },
  {
    year: 2019,
    abuDhabi: true,
    icon: 'ai',
    title: { en: 'MBZUAI is announced', ar: 'الإعلان عن جامعة محمد بن زايد للذكاء الاصطناعي' },
    text: {
      en: 'In October 2019 Abu Dhabi announced a graduate-level, research-based university dedicated to artificial intelligence.',
      ar: 'في أكتوبر 2019 أعلنت أبوظبي عن إنشاء جامعة بحثية للدراسات العليا مخصّصة للذكاء الاصطناعي.',
    },
    source: { url: 'https://prnewswire.com/news-releases/abu-dhabi-announces-the-establishment-of-the-worlds-first-graduate-level-ai-university-300939660.html', label: 'PR Newswire' },
  },
  {
    year: 2019,
    abuDhabi: false,
    icon: 'astronaut',
    title: { en: 'First Emirati astronaut reaches the ISS', ar: 'أول رائد فضاء إماراتي يصل إلى المحطة الدولية' },
    text: {
      en: 'Hazza Al Mansoori launched to the International Space Station on 25 September 2019. This was a milestone for the whole UAE.',
      ar: 'انطلق هزاع المنصوري إلى محطة الفضاء الدولية في 25 سبتمبر 2019. وكان ذلك محطة مهمة للإمارات كلها.',
    },
    source: { url: 'https://english.alarabiya.net/News/gulf/2019/09/25/First-astronaut-from-UAE-blasts-off-for-ISS-alongside-astronauts-from-US-Russia', label: 'Al Arabiya' },
  },
  {
    year: 2021,
    abuDhabi: false,
    icon: 'mars',
    title: { en: 'Hope probe enters Mars orbit', ar: 'مسبار الأمل يدخل مدار المريخ' },
    text: {
      en: 'On 9 February 2021 the UAE’s Hope probe entered orbit around Mars, a UAE-wide achievement for science.',
      ar: 'في 9 فبراير 2021 دخل «مسبار الأمل» الإماراتي مدار المريخ، وهو إنجاز علمي على مستوى الإمارات كلها.',
    },
    source: { url: 'https://www.thenationalnews.com/uae/2022/02/08/hope-probe-uae-marks-one-year-since-it-reached-mars-in-historic-feat', label: 'The National' },
  },
  {
    year: 2023,
    abuDhabi: true,
    icon: 'falcon',
    title: { en: 'TII releases Falcon 40B as open source', ar: 'المعهد يتيح «فالكون 40B» مفتوح المصدر' },
    text: {
      en: 'In May 2023 the Technology Innovation Institute announced that its Falcon 40B AI language model was open source for research and commercial use.',
      ar: 'في مايو 2023 أعلن معهد الابتكار التكنولوجي أن نموذجه اللغوي «فالكون 40B» أصبح مفتوح المصدر للأبحاث والاستخدام التجاري.',
    },
    source: { url: 'https://www.tii.ae/news/uaes-technology-innovation-institute-launches-open-source-falcon-40b-large-language-model', label: 'TII' },
  },
];
