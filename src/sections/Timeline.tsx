import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Bot, Brain, Building2, ExternalLink, Feather, Lightbulb, Rocket, Orbit, UserRound, type LucideIcon } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { milestones, type Milestone } from '../data/timeline';
import { SectionHead } from '../components/SectionHead';
import { Reveal } from '../components/Reveal';

const icons: Record<Milestone['icon'], LucideIcon> = {
  city: Building2,
  robot: Bot,
  space: Rocket,
  startup: Lightbulb,
  ai: Brain,
  astronaut: UserRound,
  mars: Orbit,
  falcon: Feather,
};

export function Timeline() {
  const { t, l, isRtl } = useI18n();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const grow = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="timeline" className="section timeline" aria-labelledby="tl-title">
      <div className="container">
        <SectionHead id="tl-title" kicker={t('tl_kicker')} title={t('tl_title')} intro={t('tl_intro')} />

        <ol className="tl" ref={ref}>
          <span className="tl-rail" aria-hidden="true">
            <motion.span className="tl-rail-fill" style={{ scaleY: grow }} />
          </span>
          {milestones.map((m, i) => {
            const Icon = icons[m.icon];
            const side = i % 2 === 0 ? 'a' : 'b';
            return (
              <li key={i} className={`tl-item side-${side}`}>
                <span className={`tl-node ${m.abuDhabi ? 'is-ad' : 'is-uae'}`} aria-hidden="true">
                  <Icon size={20} />
                </span>
                <Reveal x={(side === 'a' ? -1 : 1) * (isRtl ? -1 : 1) * 36} y={14} className="tl-card-wrap">
                  <article className="tl-card">
                    <div className="tl-top">
                      <span className="tl-year">{m.year}</span>
                      <span className={`badge ${m.abuDhabi ? 'badge-ad' : 'badge-uae'}`}>{t(m.abuDhabi ? 'tl_badge_ad' : 'tl_badge_uae')}</span>
                    </div>
                    <h3>{l(m.title)}</h3>
                    <p>{l(m.text)}</p>
                    <a className="src-link" href={m.source.url} target="_blank" rel="noopener noreferrer">
                      {t('tl_source')}: <bdi>{m.source.label}</bdi>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
