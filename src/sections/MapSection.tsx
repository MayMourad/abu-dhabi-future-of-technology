import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ExternalLink, MapPin, X } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { centers } from '../data/centers';
import { SectionHead } from '../components/SectionHead';
import { CategoryChips } from '../components/centerBits';
import { useUi } from '../state/ui';

export function MapSection() {
  const { t, l, isRtl } = useI18n();
  const { openCenter } = useUi();
  const reduced = useReducedMotion();
  const [sel, setSel] = useState<string | null>(null);
  const center = centers.find((c) => c.id === sel);
  const sorted = [...centers].sort((a, b) => a.map.x - b.map.x);
  const route = sorted.map((c) => `${c.map.x * 10},${c.map.y * 6}`).join(' ');

  return (
    <section id="map" className="section map" aria-labelledby="map-title">
      <div className="container">
        <SectionHead id="map-title" kicker={t('map_kicker')} title={t('map_title')} intro={t('map_intro')} />

        <div className="map-wrap">
          <div className="map-stage" role="group" aria-label={t('map_aria')}>
            <svg className="map-svg" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#CFEAE5" />
                  <stop offset="1" stopColor="#E3F2EE" />
                </linearGradient>
                <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F4E9D0" />
                  <stop offset="1" stopColor="#E8D9BE" />
                </linearGradient>
                <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="#C5A46D" opacity="0.35" />
                </pattern>
              </defs>
              <rect width="1000" height="600" fill="url(#sea)" />
              {/* coast + land */}
              <path d="M0 150 C80 120 130 170 220 150 S330 110 400 140 S520 175 600 140 S760 100 840 140 S950 160 1000 130 V600 H0Z" fill="url(#land)" stroke="#C5A46D" strokeWidth="2" />
              <path d="M0 150 C80 120 130 170 220 150 S330 110 400 140 S520 175 600 140 S760 100 840 140 S950 160 1000 130 V600 H0Z" fill="url(#dots)" />
              {/* islands */}
              <path d="M300 78 C330 52 392 58 410 86 C420 108 380 118 340 114 C310 110 286 98 300 78Z" fill="url(#land)" stroke="#C5A46D" strokeWidth="2" />
              <path d="M600 60 C625 46 665 52 672 72 C676 88 640 96 612 90 C596 86 592 70 600 60Z" fill="url(#land)" stroke="#C5A46D" strokeWidth="2" />
              <path d="M130 60 C145 52 170 56 172 70 C172 80 150 84 136 80 C126 76 124 66 130 60Z" fill="url(#land)" stroke="#C5A46D" strokeWidth="1.5" />
              <path d="M388 112 C420 126 450 132 470 148" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
              {/* waves */}
              {[[60, 40], [520, 30], [820, 70], [880, 24], [250, 24]].map(([x, y], i) => (
                <path key={i} d={`M${x} ${y} q10 -10 20 0 t20 0 t20 0`} fill="none" stroke="#67B5AD" strokeWidth="2" opacity="0.6" />
              ))}
              {/* connection route */}
              <polyline points={route} fill="none" stroke="#087F5B" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" opacity="0.55" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="map-label map-label-sea">{t('map_gulf')}</span>
            <span className="map-label map-label-island">{t('map_island')}</span>
            <span className="map-badge">
              <MapPin size={14} aria-hidden="true" /> {t('map_badge')}
            </span>

            {centers.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`marker ${sel === c.id ? 'is-active' : ''}`}
                style={{ left: `${c.map.x}%`, top: `${c.map.y}%`, ['--a' as string]: c.accent }}
                onClick={() => setSel(c.id)}
                aria-pressed={sel === c.id}
                aria-label={l(c.name)}
              >
                <span className="marker-pulse" aria-hidden="true" />
                <span className="marker-dot" aria-hidden="true" />
                <span className="marker-name" aria-hidden="true">
                  <bdi>{c.short}</bdi>
                </span>
              </button>
            ))}
          </div>

          <aside className="map-panel" aria-live="polite" aria-label={t('map_aria')}>
            <AnimatePresence mode="wait">
              {center ? (
                <motion.div
                  key={center.id}
                  initial={reduced ? false : { opacity: 0, x: isRtl ? -16 : 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduced ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <button type="button" className="panel-close" onClick={() => setSel(null)} aria-label={t('close')}>
                    <X size={18} aria-hidden="true" />
                  </button>
                  <CategoryChips cats={center.cats} />
                  <h3>
                    <bdi>{l(center.name)}</bdi>
                  </h3>
                  <p className="center-type">{l(center.type)}</p>
                  <p>{l(center.summary)}</p>
                  <div className="panel-actions">
                    <button type="button" className="btn btn-primary" onClick={() => openCenter(center.id)}>
                      {t('map_more')}
                    </button>
                    <a className="btn btn-ghost" href={center.source} target="_blank" rel="noopener noreferrer">
                      {t('lbl_source')}
                      <ExternalLink size={16} aria-hidden="true" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.p key="empty" className="panel-empty" initial={false} animate={{ opacity: 1 }}>
                  <MapPin size={28} aria-hidden="true" />
                  {t('map_empty')}
                </motion.p>
              )}
            </AnimatePresence>
          </aside>
        </div>
      </div>
    </section>
  );
}
