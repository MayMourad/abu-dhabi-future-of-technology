import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Atom, Bot, BookOpenText, Building, ExternalLink, Lightbulb, Rocket, ShieldCheck, Sun, type LucideIcon } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { technologies, type TechId } from '../data/technologies';
import { SectionHead } from '../components/SectionHead';
import { AiDemo, CyberDemo, EnergyDemo, RobotDemo, SmartCityDemo, SpaceDemo } from '../components/Demos';
import { StarPattern } from '../components/Pattern';

const icons: Record<TechId, LucideIcon> = { ai: Atom, robotics: Bot, space: Rocket, energy: Sun, cyber: ShieldCheck, city: Building };
const demos: Record<TechId, ReactNode> = {
  ai: <AiDemo />,
  robotics: <RobotDemo />,
  space: <SpaceDemo />,
  energy: <EnergyDemo />,
  cyber: <CyberDemo />,
  city: <SmartCityDemo />,
};

export function Explorer() {
  const { t, l } = useI18n();
  const reduced = useReducedMotion();
  const [cur, setCur] = useState<TechId>('ai');
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const tech = technologies.find((x) => x.id === cur)!;

  const onKey = (e: KeyboardEvent, i: number) => {
    const rtl = document.documentElement.dir === 'rtl';
    let n = i;
    if (e.key === (rtl ? 'ArrowLeft' : 'ArrowRight') || e.key === 'ArrowDown') n = (i + 1) % technologies.length;
    else if (e.key === (rtl ? 'ArrowRight' : 'ArrowLeft') || e.key === 'ArrowUp') n = (i - 1 + technologies.length) % technologies.length;
    else if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = technologies.length - 1;
    else return;
    e.preventDefault();
    setCur(technologies[n].id);
    tabs.current[n]?.focus();
  };

  return (
    <section id="tech" className="section tech" aria-labelledby="tech-title">
      <div className="tech-bg" aria-hidden="true">
        <StarPattern color="#087F5B" size={96} opacity={0.08} />
      </div>
      <div className="container">
        <SectionHead id="tech-title" kicker={t('tech_kicker')} title={t('tech_title')} intro={t('tech_intro')} />

        <div className="tech-tabs" role="tablist" aria-label={t('tech_tabs_aria')}>
          {technologies.map((x, i) => {
            const Icon = icons[x.id];
            return (
              <button
                key={x.id}
                ref={(el) => { tabs.current[i] = el; }}
                role="tab"
                id={`tab-${x.id}`}
                aria-selected={cur === x.id}
                aria-controls={`panel-${x.id}`}
                tabIndex={cur === x.id ? 0 : -1}
                className={`tech-tab ${cur === x.id ? 'is-on' : ''}`}
                onClick={() => setCur(x.id)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <Icon size={22} aria-hidden="true" />
                <span>{l(x.name)}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cur}
            role="tabpanel"
            id={`panel-${cur}`}
            aria-labelledby={`tab-${cur}`}
            className="tech-panel"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="tech-info">
              <h3>{l(tech.name)}</h3>
              <div className="info-row">
                <span className="info-tag">{t('tech_def')}</span>
                <p>{l(tech.def)}</p>
              </div>
              <div className="info-row">
                <span className="info-tag"><Building size={14} aria-hidden="true" /> {t('tech_example')}</span>
                <p>{l(tech.example)}</p>
              </div>
              <div className="info-row">
                <span className="info-tag"><BookOpenText size={14} aria-hidden="true" /> {t('tech_apply')}</span>
                <p>{l(tech.apply)}</p>
              </div>
              <div className="fact-box">
                <strong><Lightbulb size={16} aria-hidden="true" /> {t('tech_fact')}</strong>
                <p>{l(tech.fact)}</p>
              </div>
              <a className="btn btn-ghost" href={tech.link.url} target="_blank" rel="noopener noreferrer">
                {t('tech_more')}: {l(tech.link.label)}
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="tech-demo">
              <span className="info-tag">{t('tech_demo')}</span>
              {demos[cur]}
              <p className="muted small demo-foot">{t('demo_note')}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
