import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Building, Bus, Check, Lightbulb, RotateCcw, Sun, Trees, Trophy, X, type LucideIcon } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import type { UIKey } from '../i18n/ui';
import { SectionHead } from '../components/SectionHead';
import { quiz } from '../data/quiz';
import { interestQuestions, interestResults, type Field } from '../data/interest';
import { centers } from '../data/centers';
import { useUi } from '../state/ui';

type Tab = 'city' | 'interest' | 'quiz';

export function Lab() {
  const { t } = useI18n();
  const [tab, setTab] = useState<Tab>('city');
  const tabs: { id: Tab; key: UIKey }[] = [
    { id: 'city', key: 'lab_tab_city' },
    { id: 'interest', key: 'lab_tab_interest' },
    { id: 'quiz', key: 'lab_tab_quiz' },
  ];
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: React.KeyboardEvent, i: number) => {
    const rtl = document.documentElement.dir === 'rtl';
    let n = i;
    if (e.key === (rtl ? 'ArrowLeft' : 'ArrowRight')) n = (i + 1) % tabs.length;
    else if (e.key === (rtl ? 'ArrowRight' : 'ArrowLeft')) n = (i - 1 + tabs.length) % tabs.length;
    else return;
    e.preventDefault();
    setTab(tabs[n].id);
    refs.current[n]?.focus();
  };
  return (
    <section id="lab" className="section lab" aria-labelledby="lab-title">
      <div className="container">
        <SectionHead id="lab-title" kicker={t('lab_kicker')} title={t('lab_title')} intro={t('lab_intro')} />
        <div className="lab-tabs" role="tablist" aria-label={t('lab_tabs_aria')}>
          {tabs.map((x, i) => (
            <button
              key={x.id}
              ref={(el) => { refs.current[i] = el; }}
              role="tab"
              id={`labtab-${x.id}`}
              aria-selected={tab === x.id}
              aria-controls={`labpanel-${x.id}`}
              tabIndex={tab === x.id ? 0 : -1}
              className={tab === x.id ? 'is-on' : ''}
              onClick={() => setTab(x.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {t(x.key)}
            </button>
          ))}
        </div>
        <div role="tabpanel" id={`labpanel-${tab}`} aria-labelledby={`labtab-${tab}`} className="lab-panel">
          {tab === 'city' && <CityBuilder />}
          {tab === 'interest' && <Interest />}
          {tab === 'quiz' && <Quiz />}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------- A: smart city */
const COMPS: { id: 'solar' | 'ev' | 'lights' | 'green' | 'build'; icon: LucideIcon; label: UIKey; desc: UIKey }[] = [
  { id: 'solar', icon: Sun, label: 'city_solar', desc: 'city_solar_d' },
  { id: 'ev', icon: Bus, label: 'city_ev', desc: 'city_ev_d' },
  { id: 'lights', icon: Lightbulb, label: 'city_lights', desc: 'city_lights_d' },
  { id: 'green', icon: Trees, label: 'city_green', desc: 'city_green_d' },
  { id: 'build', icon: Building, label: 'city_build', desc: 'city_build_d' },
];

function CityBuilder() {
  const { t } = useI18n();
  const [on, setOn] = useState({ solar: false, ev: false, lights: false, green: false, build: false });
  const n = Object.values(on).filter(Boolean).length;
  const flip = (k: keyof typeof on) => setOn((p) => ({ ...p, [k]: !p[k] }));
  const blds = [
    { x: 40, w: 70, h: 120 }, { x: 125, w: 56, h: 170 }, { x: 196, w: 84, h: 100 }, { x: 296, w: 62, h: 190 },
    { x: 372, w: 80, h: 130 }, { x: 466, w: 60, h: 160 }, { x: 540, w: 50, h: 100 },
  ];
  return (
    <div className="builder">
      <div className="builder-stage">
        <svg viewBox="0 0 620 360" role="img" aria-label={t('city_aria')} className="city-svg">
          <defs>
            <linearGradient id="cb-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={on.lights ? '#E5E9F2' : '#FFF3D6'} />
              <stop offset="1" stopColor="#E3F2EE" />
            </linearGradient>
          </defs>
          <rect width="620" height="360" rx="22" fill="url(#cb-sky)" style={{ transition: 'all .6s' }} />
          <circle cx="540" cy="58" r="30" fill={on.lights ? '#F5F0DC' : '#FFD77A'} />
          {on.solar && <circle cx="540" cy="58" r="52" fill="#FFD77A" opacity=".25" />}
          {/* ground + road */}
          <rect y="290" width="620" height="70" fill="#E8D9BE" />
          <rect y="300" width="620" height="38" fill="#cdd6d1" />
          <line x1="0" y1="319" x2="620" y2="319" stroke="#fff" strokeWidth="3" strokeDasharray="16 12" />
          {/* buildings */}
          {blds.map((b, i) => (
            <g key={i}>
              <rect x={b.x} y={290 - b.h} width={b.w} height={b.h} rx="6" fill={on.build ? '#FFFFFF' : '#d9d2c1'} stroke={on.build ? '#087F5B' : '#bfb7a2'} strokeWidth={on.build ? 2.5 : 1} style={{ transition: 'all .5s' }} />
              {Array.from({ length: Math.floor(b.h / 34) }, (_, r) => (
                <rect key={r} x={b.x + 10} y={290 - b.h + 14 + r * 34} width={b.w - 20} height="14" rx="3" fill={on.build ? '#67B5AD' : '#b9b3a3'} opacity=".8" style={{ transition: 'all .5s' }} />
              ))}
              {on.build && <circle cx={b.x + b.w - 10} cy={290 - b.h + 10} r="7" fill="#087F5B" />}
              {on.solar && (
                <g>
                  <polygon points={`${b.x + 6},${290 - b.h} ${b.x + b.w - 6},${290 - b.h} ${b.x + b.w - 14},${290 - b.h - 14} ${b.x + 14},${290 - b.h - 14}`} fill="#1d7f8c" stroke="#fff" />
                </g>
              )}
            </g>
          ))}
          {/* green */}
          {on.green &&
            [20, 112, 288, 362, 456, 530, 596].map((x, i) => (
              <g key={x} transform={`translate(${x} 290)`}>
                <rect x="-2" y="-26" width="4" height="26" fill="#C5A46D" />
                <circle cx="0" cy="-34" r={14 + (i % 2) * 3} fill={i % 2 ? '#087F5B' : '#2fa47f'} />
              </g>
            ))}
          {on.green && <ellipse cx="260" cy="292" rx="22" ry="5" fill="#2fa47f" />}
          {/* street lights */}
          {[80, 240, 420, 560].map((x) => (
            <g key={x} transform={`translate(${x} 290)`}>
              <rect x="-1.5" y="-54" width="3" height="54" fill="#26332F" />
              <circle cy="-58" r="6" fill={on.lights ? '#FFC244' : '#9aa59f'} />
              {on.lights && <circle cy="-58" r="22" fill="#FFC244" opacity=".3" />}
            </g>
          ))}
          {/* vehicle */}
          <g className="city-vehicle">
            {on.ev ? (
              <g>
                <rect x="0" y="288" width="96" height="30" rx="10" fill="#087F5B" />
                <rect x="8" y="294" width="14" height="12" rx="2" fill="#fff" />
                <rect x="28" y="294" width="14" height="12" rx="2" fill="#fff" />
                <rect x="48" y="294" width="14" height="12" rx="2" fill="#fff" />
                <circle cx="20" cy="320" r="7" fill="#26332F" /><circle cx="76" cy="320" r="7" fill="#26332F" />
                <path d="M80 280l-6 10h8l-6 10" stroke="#FFC244" strokeWidth="3" fill="none" strokeLinecap="round" />
              </g>
            ) : (
              <g>
                <rect x="0" y="288" width="96" height="30" rx="10" fill="#a08c67" />
                <rect x="8" y="294" width="14" height="12" rx="2" fill="#fff" opacity=".8" />
                <rect x="28" y="294" width="14" height="12" rx="2" fill="#fff" opacity=".8" />
                <circle cx="20" cy="320" r="7" fill="#26332F" /><circle cx="76" cy="320" r="7" fill="#26332F" />
                <circle cx="-8" cy="312" r="6" fill="#9aa59f" opacity=".6" /><circle cx="-18" cy="306" r="8" fill="#9aa59f" opacity=".4" />
              </g>
            )}
          </g>
        </svg>
        <p className="builder-count" aria-live="polite">
          {t('city_count', { n })}
          {n === 5 ? <strong className="builder-done"> · {t('city_done')}</strong> : null}
        </p>
        <p className="muted small">{t('city_note')}</p>
      </div>

      <div className="builder-controls">
        <p className="lead small">{t('city_intro')}</p>
        {COMPS.map((c) => {
          const Icon = c.icon;
          return (
            <button key={c.id} type="button" className={`comp ${on[c.id] ? 'is-on' : ''}`} aria-pressed={on[c.id]} onClick={() => flip(c.id)}>
              <span className="comp-icon"><Icon size={22} aria-hidden="true" /></span>
              <span className="comp-text">
                <strong>{t(c.label)}</strong>
                <span>{t(c.desc)}</span>
              </span>
              <span className="comp-check" aria-hidden="true">{on[c.id] ? <Check size={18} /> : null}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------- B: interest finder */
function Interest() {
  const { t, l } = useI18n();
  const { openCenter } = useUi();
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Partial<Record<Field, number>>>({});
  const done = step >= interestQuestions.length;
  const order: Field[] = ['ai', 'robotics', 'space', 'energy', 'cyber', 'startup'];
  const top = order.reduce((best, f) => ((scores[f] ?? 0) > (scores[best] ?? 0) ? f : best), order[0]);
  const reduced = useReducedMotion();
  const result = interestResults[top];
  const rc = centers.find((c) => c.id === result.center)!;

  const pick = (f: Field) => {
    setScores((p) => ({ ...p, [f]: (p[f] ?? 0) + 1 }));
    setStep((s) => s + 1);
  };
  const reset = () => {
    setScores({});
    setStep(0);
  };

  return (
    <div className="stepper">
      <p className="lead small">{t('int_intro')}</p>
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div key={step} initial={reduced ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={reduced ? undefined : { opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
            <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={interestQuestions.length} aria-valuenow={step} aria-label={t('int_progress', { n: step + 1, total: interestQuestions.length })}>
              <i style={{ width: `${(step / interestQuestions.length) * 100}%` }} />
            </div>
            <p className="muted small">{t('int_progress', { n: step + 1, total: interestQuestions.length })}</p>
            <h3 className="q-title">{l(interestQuestions[step].q)}</h3>
            <div className="options">
              {interestQuestions[step].options.map((o, i) => (
                <button key={i} type="button" className="option" onClick={() => pick(o.field)}>
                  {l(o.label)}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="res" className="result-card" initial={reduced ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <p className="kicker">{t('int_result')}</p>
            <h3 className="result-title">{l(result.title)}</h3>
            <p>{l(result.text)}</p>
            <p className="muted small">
              {t('int_related')}: <bdi>{l(rc.name)}</bdi>
            </p>
            <div className="panel-actions">
              <button type="button" className="btn btn-primary" onClick={() => openCenter(rc.id)}>
                {t('int_see')}
              </button>
              <button type="button" className="btn btn-ghost" onClick={reset}>
                <RotateCcw size={16} aria-hidden="true" />
                {t('int_restart')}
              </button>
            </div>
            <p className="muted small">{t('int_disclaimer')}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------ C: quiz */
const CONFETTI = ['#087F5B', '#C5A46D', '#D64747', '#67B5AD', '#E8D9BE'];

function Confetti() {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 44 }, (_, i) => {
        const a = (i / 44) * Math.PI * 2;
        const d = 120 + ((i * 37) % 140);
        return (
          <motion.i
            key={i}
            style={{ background: CONFETTI[i % CONFETTI.length], width: 8 + (i % 3) * 3, height: 10 + (i % 4) * 3 }}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
            animate={{ x: Math.cos(a) * d, y: Math.sin(a) * d * 0.8 + 80, opacity: 0, rotate: 260 + i * 11, scale: 0.8 }}
            transition={{ duration: 1.5 + (i % 5) * 0.12, ease: 'easeOut' }}
          />
        );
      })}
    </div>
  );
}

function Quiz() {
  const { t, l } = useI18n();
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const q = quiz[i];
  const answered = chosen !== null;

  const choose = (idx: number) => {
    if (answered) return;
    setChosen(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  };
  const next = () => {
    if (i + 1 >= quiz.length) setFinished(true);
    else {
      setI(i + 1);
      setChosen(null);
    }
  };
  const restart = () => {
    setI(0);
    setChosen(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const msg = score >= 5 ? 'quiz_high' : score >= 3 ? 'quiz_mid' : 'quiz_low';
    return (
      <div className="result-card quiz-result">
        <Confetti />
        <motion.div initial={reduced ? false : { scale: 0.6, rotate: -8 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 14 }}>
          <Trophy size={56} className="trophy" aria-hidden="true" />
        </motion.div>
        <h3 className="result-title" role="status">
          {t('quiz_score', { n: score, total: quiz.length })}
        </h3>
        <p>{t(msg)}</p>
        <button type="button" className="btn btn-primary" onClick={restart}>
          <RotateCcw size={16} aria-hidden="true" />
          {t('quiz_restart')}
        </button>
      </div>
    );
  }

  return (
    <div className="stepper">
      <p className="lead small">{t('quiz_intro')}</p>
      <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={quiz.length} aria-valuenow={i + (answered ? 1 : 0)} aria-label={t('quiz_progress', { n: i + 1, total: quiz.length })}>
        <i style={{ width: `${((i + (answered ? 1 : 0)) / quiz.length) * 100}%` }} />
      </div>
      <p className="muted small">{t('quiz_progress', { n: i + 1, total: quiz.length })}</p>
      <fieldset className="q-fieldset">
        <legend className="q-title">{l(q.q)}</legend>
        <div className="options">
          {q.options.map((o, idx) => {
            const state = !answered ? '' : idx === q.answer ? 'is-right' : idx === chosen ? 'is-wrong' : 'is-dim';
            return (
              <button key={idx} type="button" className={`option ${state}`} onClick={() => choose(idx)} aria-disabled={answered} aria-pressed={chosen === idx}>
                <span className="option-letter" aria-hidden="true">{String.fromCharCode(65 + idx)}</span>
                <span>{l(o)}</span>
                {answered && idx === q.answer ? <Check size={18} aria-hidden="true" /> : null}
                {answered && idx === chosen && idx !== q.answer ? <X size={18} aria-hidden="true" /> : null}
              </button>
            );
          })}
        </div>
      </fieldset>
      <div className="feedback" aria-live="polite" role="status">
        {answered ? (
          <>
            <strong className={chosen === q.answer ? 'ok' : 'no'}>{chosen === q.answer ? t('quiz_correct') : t('quiz_wrong')}</strong>
            {chosen !== q.answer ? (
              <span>
                {' '}{t('quiz_correct_answer')}: <bdi>{l(q.options[q.answer])}</bdi>.
              </span>
            ) : null}
            <p>{l(q.explain)}</p>
            <button type="button" className="btn btn-primary" onClick={next}>
              {i + 1 >= quiz.length ? t('quiz_finish') : t('quiz_next')}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
