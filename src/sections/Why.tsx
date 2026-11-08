import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Building2, FlaskConical, GraduationCap, Landmark, Leaf, Lightbulb } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { ecoNodes, pillars } from '../data/ecosystem';
import { centers } from '../data/centers';
import { SectionHead } from '../components/SectionHead';
import { Reveal } from '../components/Reveal';
import { useUi } from '../state/ui';

const pillarIcon = { edu: GraduationCap, research: FlaskConical, company: Building2, startup: Lightbulb, green: Leaf, gov: Landmark };

export function Why() {
  const { t, l } = useI18n();
  const { openCenter } = useUi();
  const reduced = useReducedMotion();
  const [sel, setSel] = useState(ecoNodes[0].id);
  const node = ecoNodes.find((n) => n.id === sel)!;

  const R = 38;
  const pos = ecoNodes.map((_, i) => {
    const a = ((i * 60 - 90) * Math.PI) / 180;
    return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
  });

  return (
    <section id="why" className="section why" aria-labelledby="why-title">
      <div className="container">
        <SectionHead id="why-title" kicker={t('why_kicker')} title={t('why_title')} intro={t('why_intro')} />

        <div className="why-grid">
          <div className="why-side">
            <h3 className="mini-title">{t('eco_pillars')}</h3>
            <ol className="pillar-list">
              {pillars.map((p, i) => {
                const Icon = pillarIcon[p.icon];
                return (
                  <Reveal key={p.id} delay={i * 0.06} y={18}>
                    <li className="pillar">
                      <span className="pillar-icon">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <div>
                        <strong>{l(p.title)}</strong>
                        <p>{l(p.text)}</p>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>

          <div className="eco">
            <div className="eco-diagram" role="group" aria-label={t('eco_aria')}>
              <svg className="eco-lines" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                <circle cx="50" cy="50" r={R} fill="none" stroke="#C5A46D" strokeOpacity="0.5" strokeWidth="0.25" strokeDasharray="1 2" />
                <circle cx="50" cy="50" r={R * 0.55} fill="none" stroke="#087F5B" strokeOpacity="0.15" strokeWidth="0.25" />
                {pos.map((p, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={p.x}
                    y2={p.y}
                    stroke={ecoNodes[i].id === sel ? '#087F5B' : '#67B5AD'}
                    strokeWidth={ecoNodes[i].id === sel ? 0.7 : 0.35}
                    strokeDasharray="1.2 1.2"
                    className={reduced ? '' : 'eco-flow'}
                  />
                ))}
              </svg>
              <div className="eco-core">
                <span>{t('eco_center')}</span>
              </div>
              {ecoNodes.map((n, i) => (
                <button
                  key={n.id}
                  type="button"
                  className={`eco-node ${sel === n.id ? 'is-active' : ''}`}
                  style={{ left: `${pos[i].x}%`, top: `${pos[i].y}%` }}
                  onClick={() => setSel(n.id)}
                  onMouseEnter={() => setSel(n.id)}
                  onFocus={() => setSel(n.id)}
                  aria-pressed={sel === n.id}
                >
                  <span className="eco-dot" aria-hidden="true" />
                  <span className="eco-label">{l(n.label)}</span>
                </button>
              ))}
            </div>

            <div className="eco-panel" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={node.id}
                  initial={reduced ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3>{l(node.label)}</h3>
                  <p>{l(node.text)}</p>
                  <div className="eco-links">
                    {node.centers.map((cid) => {
                      const c = centers.find((x) => x.id === cid)!;
                      return (
                        <button key={cid} type="button" className="chip-btn" onClick={() => openCenter(cid)}>
                          <bdi>{c.short}</bdi>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
              <p className="muted small">{t('eco_hint')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
