import type { L } from '../i18n/ui';

export interface Source {
  title: L;
  publisher: string;
  url: string;
}

export const officialSources: Source[] = [
  { title: { en: 'Mohamed bin Zayed University of Artificial Intelligence', ar: 'جامعة محمد بن زايد للذكاء الاصطناعي' }, publisher: 'mbzuai.ac.ae', url: 'https://mbzuai.ac.ae/' },
  { title: { en: 'Technology Innovation Institute', ar: 'معهد الابتكار التكنولوجي' }, publisher: 'tii.ae', url: 'https://www.tii.ae/' },
  { title: { en: 'TII research centers', ar: 'مراكز أبحاث معهد الابتكار التكنولوجي' }, publisher: 'tii.ae', url: 'https://www.tii.ae/tii-research-centers' },
  { title: { en: 'TII: Falcon 40B becomes open source', ar: 'المعهد: «فالكون 40B» يصبح مفتوح المصدر' }, publisher: 'tii.ae', url: 'https://www.tii.ae/news/uaes-technology-innovation-institute-launches-open-source-falcon-40b-large-language-model' },
  { title: { en: 'Hub71', ar: 'هب 71' }, publisher: 'hub71.com', url: 'https://www.hub71.com/' },
  { title: { en: 'Masdar City', ar: 'مدينة مصدر' }, publisher: 'masdarcity.ae', url: 'https://masdarcity.ae/' },
  { title: { en: 'Masdar: 10 things you didn’t know about Masdar City', ar: 'مصدر: عشر معلومات لا تعرفها عن مدينة مصدر' }, publisher: 'masdar.ae', url: 'https://masdar.ae/en/news/newsroom/10-things-you-didnt-know-about-masdar-city' },
  { title: { en: 'Khalifa University: research', ar: 'جامعة خليفة: البحث العلمي' }, publisher: 'ku.ac.ae', url: 'https://www.ku.ac.ae/research' },
  { title: { en: 'Khalifa University: KUCARS', ar: 'جامعة خليفة: مركز KUCARS' }, publisher: 'ku.ac.ae', url: 'https://www.ku.ac.ae/kucars' },
  { title: { en: 'UAE Space Agency', ar: 'وكالة الإمارات للفضاء' }, publisher: 'space.gov.ae', url: 'https://space.gov.ae/' },
  { title: { en: 'G42', ar: 'جي 42' }, publisher: 'g42.ai', url: 'https://www.g42.ai/' },
];

export const newsSources: Source[] = [
  { title: { en: 'Abu Dhabi launches AED520 million Hub71 (March 2019)', ar: 'أبوظبي تطلق «هب 71» (مارس 2019)' }, publisher: 'WAM', url: 'https://www.wam.ae/en/article/hszr8cjv-abu-dhabi-launches-aed520-million-hub71' },
  { title: { en: 'Abu Dhabi announces the establishment of a graduate-level AI university (October 2019)', ar: 'أبوظبي تعلن إنشاء جامعة للدراسات العليا في الذكاء الاصطناعي (أكتوبر 2019)' }, publisher: 'PR Newswire', url: 'https://prnewswire.com/news-releases/abu-dhabi-announces-the-establishment-of-the-worlds-first-graduate-level-ai-university-300939660.html' },
  { title: { en: 'Eight years since the UAE’s Mars mission was announced (UAE Space Agency, 2014)', ar: 'ثماني سنوات على الإعلان عن مهمة المريخ الإماراتية (وكالة الإمارات للفضاء، 2014)' }, publisher: 'The National', url: 'https://thenationalnews.com/weekend/2022/07/08/timeframe-eight-years-since-uaes-mars-mission-was-announced' },
  { title: { en: 'First astronaut from the UAE blasts off for the ISS (September 2019)', ar: 'أول رائد فضاء إماراتي ينطلق إلى المحطة الدولية (سبتمبر 2019)' }, publisher: 'Al Arabiya English', url: 'https://english.alarabiya.net/News/gulf/2019/09/25/First-astronaut-from-UAE-blasts-off-for-ISS-alongside-astronauts-from-US-Russia' },
  { title: { en: 'Hope probe marks one year since it reached Mars (February 2021)', ar: 'مسبار الأمل يحتفل بمرور عام على وصوله إلى المريخ (فبراير 2021)' }, publisher: 'The National', url: 'https://www.thenationalnews.com/uae/2022/02/08/hope-probe-uae-marks-one-year-since-it-reached-mars-in-historic-feat' },
  { title: { en: 'Abu Dhabi’s TII makes the Falcon language model open source (May 2023)', ar: 'معهد الابتكار التكنولوجي في أبوظبي يتيح نموذج «فالكون» مفتوح المصدر (مايو 2023)' }, publisher: 'The National', url: 'https://www.thenationalnews.com/business/future/2023/05/25/abu-dhabis-tii-makes-large-language-model-falcon-open-source/' },
];
