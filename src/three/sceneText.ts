import type { L } from '../i18n/ui';

/** Labels and captions used by the interactive 3D scenes (one place, both languages). */
export const sceneInfo: Record<string, { label: L; desc: L }> = {
  neural: {
    label: { en: 'Signal sent', ar: 'أُرسلت إشارة' },
    desc: {
      en: 'In a neural network, many simple nodes pass numbers forward. The pattern of numbers that comes out at the end is the answer.',
      ar: 'في الشبكة العصبية تمرّر عقد بسيطة كثيرة أرقامًا إلى الأمام، ويكون نمط الأرقام الخارج في النهاية هو الإجابة.',
    },
  },
  idea: {
    label: { en: 'Idea', ar: 'فكرة' },
    desc: { en: 'Every startup begins with a question: what problem could I solve?', ar: 'تبدأ كل شركة ناشئة بسؤال: ما المشكلة التي يمكنني حلّها؟' },
  },
  people: {
    label: { en: 'People', ar: 'أشخاص' },
    desc: { en: 'Founders build a team, and mentors and partners share advice.', ar: 'يبني المؤسسون فريقًا، ويشاركهم المرشدون والشركاء النصائح.' },
  },
  tech: {
    label: { en: 'Technology', ar: 'تقنية' },
    desc: { en: 'The team uses technology, such as software or sensors, to build a working solution.', ar: 'يستخدم الفريق التقنية، مثل البرمجيات أو المستشعرات، لبناء حل يعمل.' },
  },
  product: {
    label: { en: 'Product', ar: 'منتج' },
    desc: { en: 'A first version is tested with real users and improved again and again.', ar: 'تُجرَّب النسخة الأولى مع مستخدمين حقيقيين وتُحسَّن مرة بعد أخرى.' },
  },
  business: {
    label: { en: 'Business', ar: 'عمل تجاري' },
    desc: { en: 'When people find it useful, the idea can grow into a company.', ar: 'حين يجدها الناس مفيدة، يمكن أن تنمو الفكرة لتصبح شركة.' },
  },
  arm: {
    label: { en: 'Robotic arm', ar: 'ذراع روبوتية' },
    desc: {
      en: 'In this model, a computer works out how to bend two joints so the gripper reaches the cube, picks it up and puts it down.',
      ar: 'في هذا النموذج يحسب الحاسوب كيف يثني مفصلين ليصل الماسك إلى المكعب فيلتقطه ثم يضعه.',
    },
  },
  sat_comm: {
    label: { en: 'Communication', ar: 'الاتصالات' },
    desc: { en: 'Some satellites relay signals for television, phone calls and internet links.', ar: 'بعض الأقمار الاصطناعية تنقل الإشارات للتلفزيون والمكالمات والإنترنت.' },
  },
  sat_obs: {
    label: { en: 'Observing Earth', ar: 'رصد الأرض' },
    desc: { en: 'Earth-observation satellites take pictures that help scientists study weather, oceans and land.', ar: 'تلتقط أقمار رصد الأرض صورًا تساعد العلماء على دراسة الطقس والمحيطات واليابسة.' },
  },
  sat_nav: {
    label: { en: 'Navigation', ar: 'الملاحة' },
    desc: { en: 'Navigation satellites send timing signals so devices can work out where they are.', ar: 'ترسل أقمار الملاحة إشارات توقيت تمكّن الأجهزة من معرفة موقعها.' },
  },
  abudhabi: {
    label: { en: 'Abu Dhabi', ar: 'أبوظبي' },
    desc: {
      en: 'G42 describes itself as born in Abu Dhabi and building globally. The glowing links are only an illustration of connection.',
      ar: 'تصف جي 42 نفسها بأنها وُلدت في أبوظبي وتبني حلولها عالميًا. والروابط المضيئة رسم توضيحي للترابط فقط.',
    },
  },
};
