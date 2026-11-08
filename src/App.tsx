import { useCallback, useMemo, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { I18nProvider, useI18n } from './i18n/I18nProvider';
import { UiContext } from './state/ui';
import { Header } from './components/Header';
import { CenterModal } from './components/CenterModal';
import { StarMark } from './components/Pattern';
import { Hero } from './sections/Hero';
import { Why } from './sections/Why';
import { Centers } from './sections/Centers';
import { Explorer } from './sections/Explorer';
import { MapSection } from './sections/MapSection';
import { Timeline } from './sections/Timeline';
import { Lab } from './sections/Lab';
import { Future } from './sections/Future';
import { Student } from './sections/Student';
import { References } from './sections/References';

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <StarMark size={26} />
        <p>{t('footer_line')}</p>
        <p className="muted small">{t('footer_made')}</p>
        <a href="#home" className="to-top">
          <ArrowUp size={16} aria-hidden="true" /> {t('back_to_top')}
        </a>
      </div>
    </footer>
  );
}

function Shell() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openCenter = useCallback((id: string) => setOpenId(id), []);
  const ctx = useMemo(() => ({ openCenter }), [openCenter]);

  return (
    <UiContext.Provider value={ctx}>
      <Header />
      <main id="main">
        <Hero />
        <Why />
        <Centers />
        <Explorer />
        <MapSection />
        <Timeline />
        <Lab />
        <Future />
        <Student />
        <References />
      </main>
      <Footer />
      {openId ? <CenterModal key={openId} id={openId} onClose={() => setOpenId(null)} /> : null}
    </UiContext.Provider>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Shell />
    </I18nProvider>
  );
}
