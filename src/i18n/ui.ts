export type Lang = 'en' | 'ar';
export type L = { en: string; ar: string };

/**
 * Centralised interface strings. Every entry has an English and an Arabic version.
 * Educational content (centers, timeline, quiz…) lives in /src/data as `L` objects too.
 * `{n}` style placeholders are filled by `t(key, { n: 3 })`.
 */
export const ui = {
  /* ---------- general ---------- */
  site_title: { en: 'Abu Dhabi: The Future of Technology', ar: 'أبوظبي: مستقبل التكنولوجيا' },
  skip: { en: 'Skip to main content', ar: 'انتقل إلى المحتوى الرئيسي' },
  menu_open: { en: 'Open menu', ar: 'فتح القائمة' },
  menu_close: { en: 'Close menu', ar: 'إغلاق القائمة' },
  lang_aria: { en: 'Switch language to Arabic', ar: 'التبديل إلى اللغة الإنجليزية' },
  lang_label: { en: 'العربية', ar: 'English' },
  main_nav: { en: 'Main navigation', ar: 'التنقل الرئيسي' },
  close: { en: 'Close', ar: 'إغلاق' },
  back_to_top: { en: 'Back to top', ar: 'العودة إلى الأعلى' },
  loading_3d: { en: 'Loading the 3D experience…', ar: 'جارٍ تحميل التجربة ثلاثية الأبعاد…' },
  error_3d: {
    en: 'The 3D view could not start on this device, so here is a simple picture instead. All the information is still available.',
    ar: 'تعذّر تشغيل العرض ثلاثي الأبعاد على هذا الجهاز، لذلك نعرض صورة مبسّطة. وتبقى المعلومات كلها متاحة.',
  },
  drag_hint: { en: 'Drag to rotate · tap the glowing points', ar: 'اسحب للتدوير · المس النقاط المضيئة' },
  scene_label: { en: 'Interactive 3D illustration', ar: 'رسم توضيحي ثلاثي الأبعاد تفاعلي' },

  /* ---------- navigation ---------- */
  nav_home: { en: 'Home', ar: 'الرئيسية' },
  nav_why: { en: 'Why Abu Dhabi', ar: 'لماذا أبوظبي' },
  nav_centers: { en: 'Centers', ar: 'المراكز' },
  nav_tech: { en: 'Technologies', ar: 'التقنيات' },
  nav_map: { en: 'Map', ar: 'الخريطة' },
  nav_timeline: { en: 'Timeline', ar: 'الخط الزمني' },
  nav_lab: { en: 'Innovator Lab', ar: 'المختبر' },
  nav_future: { en: 'Future', ar: 'المستقبل' },
  nav_about: { en: 'About', ar: 'عن الباحثة' },
  nav_refs: { en: 'References', ar: 'المراجع' },

  /* ---------- hero ---------- */
  hero_attribution: {
    en: 'A Student Research Project by Shaden Ahmed Mourad | Grade 6E',
    ar: 'مشروع بحثي من إعداد الطالبة شادن أحمد مراد | الصف السادس (E)',
  },
  hero_kicker: { en: 'ABU DHABI: THE FUTURE OF TECHNOLOGY', ar: 'أبوظبي: مستقبل التكنولوجيا' },
  hero_headline: { en: 'Abu Dhabi: Where Tomorrow Takes Shape', ar: 'أبوظبي: حيث يتشكّل مستقبل الغد' },
  hero_sub: {
    en: 'Discover how Abu Dhabi is transforming ideas into innovations through artificial intelligence, robotics, space exploration, sustainable technology, and scientific research.',
    ar: 'اكتشف كيف تحوّل أبوظبي الأفكار إلى ابتكارات رائدة في الذكاء الاصطناعي والروبوتات واستكشاف الفضاء والتكنولوجيا المستدامة والبحث العلمي.',
  },
  cta_explore: { en: 'Explore Innovation', ar: 'استكشف الابتكار' },
  cta_centers: { en: 'Discover Technology Centers', ar: 'اكتشف المراكز التكنولوجية' },
  hero_scroll: { en: 'Scroll to begin the journey', ar: 'مرّر لبدء الرحلة' },
  hero_scene_hint: { en: 'Move your cursor or finger over the city', ar: 'حرّك المؤشر أو إصبعك فوق المدينة' },
  hero_tag_ai: { en: 'AI chip', ar: 'شريحة ذكاء اصطناعي' },
  hero_tag_space: { en: 'Satellite', ar: 'قمر اصطناعي' },
  hero_tag_city: { en: 'Future skyline', ar: 'أفق المستقبل' },
  hero_art_alt: {
    en: 'Illustration of a stylised, futuristic Abu Dhabi skyline with a floating AI chip and a satellite.',
    ar: 'رسم تخيّلي لأفق أبوظبي المستقبلي مع شريحة ذكاء اصطناعي عائمة وقمر اصطناعي.',
  },

  /* ---------- why ---------- */
  why_kicker: { en: 'Chapter 1', ar: 'الفصل الأول' },
  why_title: { en: 'Why Abu Dhabi?', ar: 'لماذا أبوظبي؟' },
  why_intro: {
    en: 'A technology hub is a place where learning, research, companies and ideas are close enough to help each other grow. Abu Dhabi is building exactly this kind of connected ecosystem.',
    ar: 'مركز التكنولوجيا هو مكان تتقارب فيه المعرفة والبحث والشركات والأفكار لتدعم بعضها بعضًا. وأبوظبي تبني منظومة مترابطة من هذا النوع.',
  },
  eco_aria: { en: 'Abu Dhabi innovation ecosystem diagram', ar: 'مخطط منظومة الابتكار في أبوظبي' },
  eco_hint: { en: 'Select a glowing node to learn more', ar: 'اختر إحدى العُقد المضيئة لتتعرّف أكثر' },
  eco_center: { en: 'ABU DHABI', ar: 'أبوظبي' },
  eco_pillars: { en: 'Six parts of the ecosystem', ar: 'ستة أجزاء في المنظومة' },

  /* ---------- centers ---------- */
  centers_kicker: { en: 'Chapter 2', ar: 'الفصل الثاني' },
  centers_title: { en: "Explore Abu Dhabi's Innovation Centers", ar: 'اكتشف مراكز الابتكار في أبوظبي' },
  centers_intro: {
    en: 'Seven real organizations, each doing a different job. Filter by topic, open a card, and play with its 3D model.',
    ar: 'سبع جهات حقيقية، لكل منها دور مختلف. صفِّ حسب الموضوع، وافتح البطاقة، وجرّب نموذجها ثلاثي الأبعاد.',
  },
  filters_aria: { en: 'Filter centers by topic', ar: 'تصفية المراكز حسب الموضوع' },
  filter_all: { en: 'All', ar: 'الكل' },
  filter_ai: { en: 'AI', ar: 'الذكاء الاصطناعي' },
  filter_robotics: { en: 'Robotics', ar: 'الروبوتات' },
  filter_space: { en: 'Space', ar: 'الفضاء' },
  filter_sustainability: { en: 'Sustainability', ar: 'الاستدامة' },
  filter_research: { en: 'Research', ar: 'البحث العلمي' },
  filter_startups: { en: 'Startups', ar: 'الشركات الناشئة' },
  card_open: { en: 'Explore', ar: 'استكشف' },
  card_count: { en: 'Showing {n} of {total}', ar: 'عرض {n} من {total}' },
  lbl_category: { en: 'Category', ar: 'الفئة' },
  lbl_arabic_name: { en: 'Arabic name', ar: 'الاسم بالعربية' },
  lbl_about: { en: 'What it is', ar: 'ما هو؟' },
  lbl_examples: { en: 'Technologies to know', ar: 'تقنيات تستحق المعرفة' },
  lbl_why: { en: 'Why it matters', ar: 'لماذا هو مهم؟' },
  lbl_fact: { en: 'Interesting fact', ar: 'معلومة مثيرة' },
  lbl_source: { en: 'Official source', ar: 'المصدر الرسمي' },
  lbl_type: { en: 'Type of organization', ar: 'نوع الجهة' },
  scene_orbit_title: { en: 'Tap a point on the globe', ar: 'المس نقطة على الكرة الأرضية' },
  scene_neural_hint: { en: 'Tap a glowing node to send a signal through the network', ar: 'المس عقدة مضيئة لتمرير إشارة عبر الشبكة' },
  scene_network_hint: { en: 'Tap a step to follow how an idea grows', ar: 'المس خطوة لترى كيف تنمو الفكرة' },
  scene_robot_hint: { en: 'Tap the robot arm to make it pick up the cube', ar: 'المس الذراع الروبوتية لتلتقط المكعب' },
  scene_city_hint: { en: 'Drag to look around the miniature sustainable city', ar: 'اسحب لتتجوّل في المدينة المستدامة المصغّرة' },
  scene_lab_hint: { en: 'Drag to turn the floating lab objects', ar: 'اسحب لتدوير أدوات المختبر العائمة' },
  scene_globe_hint: { en: 'Drag the globe. Glowing links are illustrative.', ar: 'اسحب الكرة الأرضية. الروابط المضيئة للتوضيح فقط.' },
  no_results: { en: 'No centers match this filter.', ar: 'لا توجد مراكز مطابقة لهذه التصفية.' },

  /* ---------- technology explorer ---------- */
  tech_kicker: { en: 'Chapter 3', ar: 'الفصل الثالث' },
  tech_title: { en: 'Technologies Shaping Tomorrow', ar: 'تقنيات تصنع المستقبل' },
  tech_intro: {
    en: 'Six big ideas, one tiny experiment each. Pick a field, read the simple definition, then try the demo.',
    ar: 'ست أفكار كبيرة، ولكل منها تجربة صغيرة. اختر مجالًا، واقرأ تعريفه المبسّط، ثم جرّب العرض التفاعلي.',
  },
  tech_tabs_aria: { en: 'Technology fields', ar: 'مجالات التقنية' },
  tech_def: { en: 'What is it?', ar: 'ما هي؟' },
  tech_example: { en: 'In Abu Dhabi', ar: 'في أبوظبي' },
  tech_apply: { en: 'In real life', ar: 'في الحياة الواقعية' },
  tech_demo: { en: 'Try it yourself', ar: 'جرّبها بنفسك' },
  tech_fact: { en: 'Did you know?', ar: 'هل تعلم؟' },
  tech_more: { en: 'Keep reading', ar: 'تابع القراءة' },
  demo_note: { en: 'A simple classroom illustration, not a real engineering model.', ar: 'رسم توضيحي مبسّط للصف، وليس نموذجًا هندسيًا حقيقيًا.' },

  demo_ai_title: { en: 'Teach a tiny AI to sort shapes', ar: 'علّم ذكاءً اصطناعيًا صغيرًا فرز الأشكال' },
  demo_ai_examples: { en: 'Training examples: {n}', ar: 'أمثلة التدريب: {n}' },
  demo_ai_circle: { en: 'Circles', ar: 'دوائر' },
  demo_ai_square: { en: 'Squares', ar: 'مربعات' },
  demo_ai_unsure: { en: 'Not sure yet (?)', ar: 'غير متأكد بعد (؟)' },
  demo_ai_hint: {
    en: 'With few examples the AI is unsure. With more examples it spots the pattern.',
    ar: 'مع أمثلة قليلة يبقى الذكاء الاصطناعي متردّدًا، ومع أمثلة أكثر يلتقط النمط.',
  },
  demo_ai_learned: { en: 'Sorted correctly: {n} of 12', ar: 'فُرز بشكل صحيح: {n} من 12' },

  demo_robot_title: { en: 'Sense → Think → Act', ar: 'استشعار ← تفكير ← تنفيذ' },
  demo_robot_distance: { en: 'Distance to the wall', ar: 'المسافة إلى الجدار' },
  demo_robot_sense: { en: 'Sense', ar: 'استشعار' },
  demo_robot_think: { en: 'Think', ar: 'تفكير' },
  demo_robot_act: { en: 'Act', ar: 'تنفيذ' },
  demo_robot_far: {
    en: 'The sensor sees open space, so the computer tells the motors to keep driving.',
    ar: 'المستشعر يرى مساحة مفتوحة، فيأمر الحاسوب المحركات بمواصلة السير.',
  },
  demo_robot_near: {
    en: 'The wall is getting closer, so the computer slows the motors down.',
    ar: 'الجدار يقترب، فيُبطئ الحاسوب المحركات.',
  },
  demo_robot_stop: {
    en: 'The wall is very close, so the computer stops the robot to stay safe.',
    ar: 'الجدار قريب جدًا، فيوقف الحاسوب الروبوت حفاظًا على السلامة.',
  },
  demo_robot_s_far: { en: 'Open space', ar: 'مساحة مفتوحة' },
  demo_robot_s_near: { en: 'Wall ahead', ar: 'جدار أمامي' },
  demo_robot_s_stop: { en: 'Wall very close', ar: 'جدار قريب جدًا' },
  demo_robot_t_far: { en: 'Keep going', ar: 'واصل السير' },
  demo_robot_t_near: { en: 'Slow down', ar: 'خفّف السرعة' },
  demo_robot_t_stop: { en: 'Stop', ar: 'توقّف' },
  demo_robot_a_far: { en: 'Motors fast', ar: 'محركات سريعة' },
  demo_robot_a_near: { en: 'Motors slow', ar: 'محركات بطيئة' },
  demo_robot_a_stop: { en: 'Motors off', ar: 'المحركات متوقفة' },

  demo_space_title: { en: 'What do satellites do?', ar: 'ماذا تفعل الأقمار الاصطناعية؟' },
  demo_space_pick: { en: 'Choose a job for the satellite', ar: 'اختر مهمة للقمر الاصطناعي' },
  demo_space_comm: { en: 'Communication', ar: 'الاتصالات' },
  demo_space_comm_d: {
    en: 'Some satellites relay signals for television, phone calls and internet links across long distances.',
    ar: 'بعض الأقمار الاصطناعية تنقل الإشارات للتلفزيون والمكالمات والإنترنت عبر مسافات طويلة.',
  },
  demo_space_obs: { en: 'Observing Earth', ar: 'رصد الأرض' },
  demo_space_obs_d: {
    en: 'Earth-observation satellites take pictures that help scientists study weather, oceans, land and cities.',
    ar: 'تلتقط أقمار رصد الأرض صورًا تساعد العلماء على دراسة الطقس والمحيطات واليابسة والمدن.',
  },
  demo_space_nav: { en: 'Navigation', ar: 'الملاحة' },
  demo_space_nav_d: {
    en: 'Navigation satellites send timing signals so devices can work out where they are.',
    ar: 'ترسل أقمار الملاحة إشارات توقيت تمكّن الأجهزة من معرفة موقعها.',
  },

  demo_energy_title: { en: 'Follow the sun', ar: 'تتبّع الشمس' },
  demo_energy_time: { en: 'Time of day', ar: 'وقت اليوم' },
  demo_energy_sun: { en: 'Sunlight', ar: 'ضوء الشمس' },
  demo_energy_power: { en: 'Energy collected by the panels', ar: 'الطاقة التي تجمعها الألواح' },
  demo_energy_night: { en: 'It is night, so the panels rest and stored energy can be used.', ar: 'الوقت ليل، فتستريح الألواح ويمكن استخدام الطاقة المخزّنة.' },
  demo_energy_low: { en: 'The sun is low, so the panels collect a little energy.', ar: 'الشمس منخفضة، فتجمع الألواح قدرًا قليلًا من الطاقة.' },
  demo_energy_high: { en: 'The sun is high, so the panels collect the most energy.', ar: 'الشمس مرتفعة، فتجمع الألواح أكبر قدر من الطاقة.' },

  demo_cyber_title: { en: 'Build shields around the network', ar: 'ابنِ دروعًا حول الشبكة' },
  demo_cyber_pass: { en: 'Long, unique password', ar: 'كلمة مرور طويلة وفريدة' },
  demo_cyber_pass_d: { en: 'A long, different password for each account is much harder to guess.', ar: 'كلمة مرور طويلة ومختلفة لكل حساب يصعب تخمينها كثيرًا.' },
  demo_cyber_2fa: { en: 'Two-step check', ar: 'التحقق بخطوتين' },
  demo_cyber_2fa_d: { en: 'A second proof, like a code, helps even if someone learns your password.', ar: 'إثبات ثانٍ، مثل رمز يصلك، يساعد حتى لو عرف أحدهم كلمة المرور.' },
  demo_cyber_update: { en: 'Software updates', ar: 'تحديث البرامج' },
  demo_cyber_update_d: { en: 'Updates fix weak spots that attackers might try to use.', ar: 'تُصلح التحديثات نقاط الضعف التي قد يحاول المهاجمون استغلالها.' },
  demo_cyber_status: { en: 'Shields on: {n} of 3', ar: 'الدروع المفعّلة: {n} من 3' },
  demo_cyber_safe: { en: 'Never type your real passwords into demos. This one stores nothing.', ar: 'لا تكتب كلمات مرورك الحقيقية في أي عرض تجريبي. هذا العرض لا يحفظ شيئًا.' },

  demo_smart_title: { en: 'Traffic with and without smart signals', ar: 'المرور مع الإشارات الذكية وبدونها' },
  demo_smart_toggle: { en: 'Smart signals', ar: 'الإشارات الذكية' },
  demo_smart_on: {
    en: 'Sensors notice the busy road and keep traffic flowing smoothly.',
    ar: 'تلتقط المستشعرات ازدحام الطريق فتُبقي حركة السير سلسة.',
  },
  demo_smart_off: {
    en: 'Fixed timers cannot see the traffic, so cars may wait in a long line.',
    ar: 'المؤقتات الثابتة لا ترى حركة السير، فقد تقف السيارات في طابور طويل.',
  },

  /* ---------- map ---------- */
  map_kicker: { en: 'Chapter 4', ar: 'الفصل الرابع' },
  map_title: { en: 'An Innovation Journey Across Abu Dhabi', ar: 'رحلة الابتكار في أبوظبي' },
  map_intro: {
    en: 'Tap a marker to meet an organization. This is a conceptual map: it groups the organizations by idea and is not drawn to scale.',
    ar: 'المس إحدى العلامات لتتعرّف على جهة ما. هذه خريطة مفاهيمية تجمع الجهات حسب الفكرة، وهي غير مرسومة بمقياس حقيقي.',
  },
  map_badge: { en: 'Conceptual map · not to scale', ar: 'خريطة مفاهيمية · غير مرسومة بمقياس' },
  map_aria: { en: 'Conceptual innovation map of Abu Dhabi', ar: 'خريطة مفاهيمية للابتكار في أبوظبي' },
  map_gulf: { en: 'Arabian Gulf', ar: 'الخليج العربي' },
  map_island: { en: 'ABU DHABI', ar: 'أبوظبي' },
  map_empty: { en: 'Select a marker on the map', ar: 'اختر علامة على الخريطة' },
  map_more: { en: 'Open full card', ar: 'افتح البطاقة الكاملة' },

  /* ---------- timeline ---------- */
  tl_kicker: { en: 'Chapter 5', ar: 'الفصل الخامس' },
  tl_title: { en: "Abu Dhabi's Journey of Innovation", ar: 'رحلة أبوظبي نحو الابتكار' },
  tl_intro: {
    en: 'A selection of milestones, each tagged to show whether it happened in Abu Dhabi or across the whole UAE. It is a short list, not a complete history.',
    ar: 'مجموعة مختارة من المحطات، وعلى كل منها وسم يوضّح هل وقعت في أبوظبي أم على مستوى دولة الإمارات كلها. وهي قائمة مختصرة وليست التاريخ الكامل.',
  },
  tl_badge_ad: { en: 'Abu Dhabi', ar: 'أبوظبي' },
  tl_badge_uae: { en: 'UAE-wide', ar: 'على مستوى الإمارات' },
  tl_source: { en: 'Source', ar: 'المصدر' },

  /* ---------- lab ---------- */
  lab_kicker: { en: 'Chapter 6', ar: 'الفصل السادس' },
  lab_title: { en: 'Become a Future Innovator', ar: 'كن مبتكر المستقبل' },
  lab_intro: {
    en: 'Welcome to the mini technology laboratory. Build, discover and test yourself.',
    ar: 'مرحبًا بك في مختبر التكنولوجيا المصغّر. ابنِ، واكتشف، واختبر نفسك.',
  },
  lab_tabs_aria: { en: 'Laboratory activities', ar: 'أنشطة المختبر' },
  lab_tab_city: { en: 'Build a Smart City', ar: 'ابنِ مدينة ذكية' },
  lab_tab_interest: { en: 'Find Your Interest', ar: 'اكتشف اهتمامك' },
  lab_tab_quiz: { en: 'Knowledge Quiz', ar: 'اختبار المعرفة' },

  city_intro: { en: 'Switch on ideas one by one and watch your city change.', ar: 'فعّل الأفكار واحدة تلو الأخرى وشاهد مدينتك تتغيّر.' },
  city_count: { en: '{n} of 5 ideas switched on', ar: 'تم تفعيل {n} من 5 أفكار' },
  city_note: {
    en: 'A simplified learning game. It does not calculate real energy or pollution savings.',
    ar: 'لعبة تعليمية مبسّطة، ولا تحسب وفورات الطاقة أو التلوث الحقيقية.',
  },
  city_aria: { en: 'Your smart city illustration', ar: 'رسم مدينتك الذكية' },
  city_solar: { en: 'Solar panels', ar: 'ألواح شمسية' },
  city_solar_d: { en: 'Panels turn sunlight into electricity, a clean source of energy.', ar: 'تحوّل الألواح ضوء الشمس إلى كهرباء، وهي مصدر طاقة نظيف.' },
  city_ev: { en: 'Electric transport', ar: 'نقل كهربائي' },
  city_ev_d: { en: 'Electric buses and cars do not burn fuel on the street, so the air stays cleaner.', ar: 'الحافلات والسيارات الكهربائية لا تحرق الوقود في الشارع، فيبقى الهواء أنقى.' },
  city_lights: { en: 'Smart lighting', ar: 'إضاءة ذكية' },
  city_lights_d: { en: 'Lights can brighten only when someone is near, saving electricity.', ar: 'يمكن للأضواء أن تزداد سطوعًا عند وجود أحد قربها فقط، فتوفّر الكهرباء.' },
  city_green: { en: 'Green spaces', ar: 'مساحات خضراء' },
  city_green_d: { en: 'Parks and trees give shade, homes for wildlife and places to relax.', ar: 'توفّر الحدائق والأشجار الظل وموطنًا للكائنات الحية ومكانًا للاسترخاء.' },
  city_build: { en: 'Efficient buildings', ar: 'مبانٍ عالية الكفاءة' },
  city_build_d: { en: 'Good design and materials help buildings stay comfortable using less energy.', ar: 'يساعد التصميم الجيد والمواد المناسبة المباني على البقاء مريحة مع استهلاك طاقة أقل.' },
  city_done: { en: 'Amazing! Your city uses all five smart ideas.', ar: 'رائع! تستخدم مدينتك الأفكار الذكية الخمس كلها.' },

  int_intro: { en: 'Answer three quick questions to discover a technology field you might enjoy exploring.', ar: 'أجب عن ثلاثة أسئلة سريعة لتكتشف مجالًا تقنيًا قد تستمتع باستكشافه.' },
  int_progress: { en: 'Question {n} of {total}', ar: 'السؤال {n} من {total}' },
  int_result: { en: 'You might enjoy…', ar: 'ربما يعجبك مجال…' },
  int_restart: { en: 'Try again', ar: 'أعد المحاولة' },
  int_disclaimer: { en: 'Just for fun. This is not a scientific personality test.', ar: 'للمتعة فقط. هذا ليس اختبارًا علميًا للشخصية.' },
  int_related: { en: 'Related center', ar: 'مركز ذو صلة' },
  int_see: { en: 'Open this center', ar: 'افتح هذا المركز' },

  quiz_intro: { en: 'Six questions about what you have just explored.', ar: 'ستة أسئلة عمّا استكشفته للتو.' },
  quiz_progress: { en: 'Question {n} of {total}', ar: 'السؤال {n} من {total}' },
  quiz_correct: { en: 'Correct!', ar: 'إجابة صحيحة!' },
  quiz_wrong: { en: 'Not quite.', ar: 'ليست صحيحة تمامًا.' },
  quiz_next: { en: 'Next question', ar: 'السؤال التالي' },
  quiz_finish: { en: 'See my score', ar: 'اعرض نتيجتي' },
  quiz_score: { en: 'You scored {n} out of {total}', ar: 'حصلت على {n} من {total}' },
  quiz_restart: { en: 'Play again', ar: 'العب مجددًا' },
  quiz_high: { en: 'Brilliant! You are ready to be a technology guide.', ar: 'ممتاز! أنت جاهز لتكون دليلًا في التكنولوجيا.' },
  quiz_mid: { en: 'Great job! Explore a few more cards and try again.', ar: 'عمل رائع! استكشف بعض البطاقات أيضًا ثم حاول مجددًا.' },
  quiz_low: { en: 'Good start! Every inventor learns by trying again.', ar: 'بداية جيدة! كل مبتكر يتعلم بإعادة المحاولة.' },
  quiz_correct_answer: { en: 'Correct answer', ar: 'الإجابة الصحيحة' },

  /* ---------- future ---------- */
  fut_kicker: { en: 'Chapter 7', ar: 'الفصل السابع' },
  fut_title: { en: 'The Future Starts Here', ar: 'المستقبل يبدأ من هنا' },
  fut_intro: {
    en: 'Technology may help people in many ways. Each card separates what organizations say they are doing today from ideas that are still possibilities.',
    ar: 'قد تساعد التكنولوجيا الناس بطرق كثيرة. وتفصل كل بطاقة بين ما تقول الجهات إنها تفعله اليوم وبين أفكار ما زالت احتمالات.',
  },
  fut_today: { en: 'Today', ar: 'اليوم' },
  fut_tomorrow: { en: 'A possibility', ar: 'احتمال للمستقبل' },
  fut_note: { en: 'Possibilities are ideas to imagine, not promises or completed achievements.', ar: 'الاحتمالات أفكار للتخيّل، وليست وعودًا أو إنجازات مكتملة.' },
  fut_quote: {
    en: '“The future is not only something we imagine. It is something we can help create.”',
    ar: '«المستقبل ليس مجرد شيء نتخيله، بل هو شيء يمكننا المساهمة في صنعه.»',
  },
  fut_quote_by: { en: 'An original statement by the student researcher', ar: 'عبارة أصلية من إعداد الطالبة الباحثة' },
  fut_art_alt: { en: 'A glowing illustration of a future city with floating technology.', ar: 'رسم مضيء لمدينة مستقبلية تحيط بها عناصر تقنية عائمة.' },

  /* ---------- student ---------- */
  stu_kicker: { en: 'The researcher', ar: 'الباحثة' },
  stu_title: { en: 'About the Student Researcher', ar: 'عن الطالبة الباحثة' },
  stu_name: { en: 'Shaden Ahmed Mourad', ar: 'شادن أحمد مراد' },
  stu_grade: { en: 'Grade 6E', ar: 'الصف السادس (E)' },
  stu_text: {
    en: 'This educational website was created by Shaden Ahmed Mourad, a Grade 6E student, to explore Abu Dhabi’s remarkable progress in technology, scientific research, and innovation. Through this project, Shaden hopes to inspire other students to discover how science and technology can shape a better future.',
    ar: 'أُنشئ هذا الموقع التعليمي بواسطة الطالبة شادن أحمد مراد من الصف السادس (E)، بهدف استكشاف التقدم الذي تحققه أبوظبي في مجالات التكنولوجيا والبحث العلمي والابتكار. ومن خلال هذا المشروع، تأمل شادن في تشجيع الطلبة على اكتشاف دور العلوم والتكنولوجيا في بناء مستقبل أفضل.',
  },
  stu_sig: { en: 'Student Research Project', ar: 'مشروع بحثي طلابي' },
  stu_year: { en: 'Abu Dhabi, United Arab Emirates', ar: 'أبوظبي، الإمارات العربية المتحدة' },

  /* ---------- references ---------- */
  refs_kicker: { en: 'Sources', ar: 'المصادر' },
  refs_title: { en: 'Research & References', ar: 'المصادر والمراجع' },
  refs_intro: {
    en: 'Facts in this project come from the official websites below. Where an official page was not available to read, dates were confirmed with the news or press sources listed in the second group.',
    ar: 'استُمدّت معلومات هذا المشروع من المواقع الرسمية أدناه. وحيث تعذّرت قراءة صفحة رسمية، أُكّدت التواريخ بالاستناد إلى المصادر الإخبارية والصحفية في المجموعة الثانية.',
  },
  refs_official: { en: 'Official websites', ar: 'المواقع الرسمية' },
  refs_news: { en: 'News and press sources used to confirm dates', ar: 'مصادر إخبارية وصحفية لتأكيد التواريخ' },
  refs_open: { en: 'Open source', ar: 'افتح المصدر' },
  refs_disclaimer: {
    en: 'This is an independent student project. None of the organizations featured has reviewed or endorsed it. Illustrations are original and simplified.',
    ar: 'هذا مشروع طلابي مستقل. لم تراجعه أي من الجهات المذكورة ولم تؤيّده. والرسوم أصلية ومبسّطة.',
  },
  refs_checked: { en: 'Facts last checked: November 2026', ar: 'آخر مراجعة للمعلومات: نوفمبر 2026' },

  /* ---------- footer ---------- */
  footer_line: {
    en: 'Abu Dhabi: The Future of Technology · A Grade 6E student research project',
    ar: 'أبوظبي: مستقبل التكنولوجيا · مشروع بحثي لطالبة من الصف السادس (E)',
  },
  footer_made: { en: 'Made with curiosity in the UAE', ar: 'صُنع بشغف الاستكشاف في الإمارات' },
} as const satisfies Record<string, L>;

export type UIKey = keyof typeof ui;
