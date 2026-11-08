import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Languages, Menu, X } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import type { UIKey } from '../i18n/ui';
import { StarMark } from './Pattern';

const links: { id: string; key: UIKey }[] = [
  { id: 'home', key: 'nav_home' },
  { id: 'why', key: 'nav_why' },
  { id: 'centers', key: 'nav_centers' },
  { id: 'tech', key: 'nav_tech' },
  { id: 'map', key: 'nav_map' },
  { id: 'timeline', key: 'nav_timeline' },
  { id: 'lab', key: 'nav_lab' },
  { id: 'future', key: 'nav_future' },
  { id: 'about', key: 'nav_about' },
  { id: 'refs', key: 'nav_refs' },
];

export function Header() {
  const { t, toggle } = useI18n();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="skip-link" href="#main">
        {t('skip')}
      </a>
      <div className="header-inner">
        <a className="brand" href="#home" aria-label={t('site_title')}>
          <StarMark size={30} />
          <span className="brand-text">
            <strong>{t('site_title')}</strong>
          </span>
        </a>

        <nav className="desktop-nav" aria-label={t('main_nav')}>
          {links.slice(1).map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'is-active' : ''} aria-current={active === l.id ? 'true' : undefined}>
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="lang-toggle" onClick={toggle} aria-label={t('lang_aria')} lang={t('lang_label') === 'English' ? 'en' : 'ar'}>
            <Languages size={18} aria-hidden="true" />
            <span>{t('lang_label')}</span>
          </button>
          <button type="button" className="menu-btn" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? t('menu_close') : t('menu_open')}>
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label={t('main_nav')} hidden={!open}>
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className={active === l.id ? 'is-active' : ''}>
            {t(l.key)}
          </a>
        ))}
      </nav>

      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
    </header>
  );
}
