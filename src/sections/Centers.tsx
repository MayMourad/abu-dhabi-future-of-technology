import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { categories, centers, type Category } from '../data/centers';
import { SectionHead } from '../components/SectionHead';
import { TiltCard } from '../components/Reveal';
import { CenterArt } from '../components/CenterArt';
import { CategoryChips, catKey, sceneIcon } from '../components/centerBits';
import { useUi } from '../state/ui';

export function Centers() {
  const { t, l } = useI18n();
  const { openCenter } = useUi();
  const reduced = useReducedMotion();
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const shown = centers.filter((c) => filter === 'all' || c.cats.includes(filter));

  return (
    <section id="centers" className="section centers" aria-labelledby="centers-title">
      <div className="container">
        <SectionHead id="centers-title" kicker={t('centers_kicker')} title={t('centers_title')} intro={t('centers_intro')} />

        <div className="filters" role="group" aria-label={t('filters_aria')}>
          <button type="button" className={`filter ${filter === 'all' ? 'is-on' : ''}`} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
            {t('filter_all')}
          </button>
          {categories.map((c) => (
            <button key={c} type="button" className={`filter ${filter === c ? 'is-on' : ''}`} aria-pressed={filter === c} onClick={() => setFilter(c)}>
              {t(catKey[c])}
            </button>
          ))}
          <span className="filter-count" aria-live="polite">
            {t('card_count', { n: shown.length, total: centers.length })}
          </span>
        </div>

        <motion.div layout={!reduced} className="center-grid">
          <AnimatePresence mode="popLayout">
            {shown.map((c, i) => {
              const Icon = sceneIcon[c.scene];
              return (
                <motion.article
                  key={c.id}
                  layout={!reduced}
                  initial={reduced ? false : { opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className={`center-card-wrap span-${i % 7}`}
                >
                  <TiltCard className="center-card" max={6}>
                    <CenterArt kind={c.scene} accent={c.accent} accent2={c.accent2} />
                    <span className="center-badge" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <div className="center-card-body">
                      <CategoryChips cats={c.cats} />
                      <h3>
                        <bdi>{l(c.name)}</bdi>
                      </h3>
                      <p className="center-type">{l(c.type)}</p>
                      <p>{l(c.summary)}</p>
                      <button type="button" className="card-link" onClick={() => openCenter(c.id)} aria-label={`${t('card_open')}: ${l(c.name)}`}>
                        {t('card_open')}
                        <ArrowUpRight size={18} aria-hidden="true" className="flip-rtl" />
                      </button>
                    </div>
                    <span className="card-spot" aria-hidden="true" />
                  </TiltCard>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
        {shown.length === 0 ? <p className="muted">{t('no_results')}</p> : null}
      </div>
    </section>
  );
}
