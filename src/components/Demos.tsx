import { useId, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useI18n } from '../i18n/I18nProvider';

/* ============================================================ AI */
const AI_SHAPES = [
  { type: 'c', th: 3 }, { type: 's', th: 1 }, { type: 'c', th: 7 }, { type: 's', th: 5 },
  { type: 'c', th: 2 }, { type: 's', th: 9 }, { type: 'c', th: 11 }, { type: 's', th: 4 },
  { type: 'c', th: 6 }, { type: 's', th: 12 }, { type: 'c', th: 8 }, { type: 's', th: 10 },
] as const;

function Shape({ type, tone }: { type: 'c' | 's'; tone: 'em' | 'gold' | 'grey' }) {
  const fill = tone === 'em' ? '#087F5B' : tone === 'gold' ? '#C5A46D' : '#d8d3c6';
  return (
    <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true" focusable="false">
      {type === 'c' ? <circle cx="20" cy="20" r="15" fill={fill} /> : <rect x="5" y="5" width="30" height="30" rx="4" fill={fill} />}
      {tone === 'grey' ? <text x="20" y="26" textAnchor="middle" fontSize="18" fontWeight="700" fill="#6b7a74">?</text> : null}
    </svg>
  );
}

export function AiDemo() {
  const { t } = useI18n();
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);
  const bins = { c: [] as number[], s: [] as number[], u: [] as number[] };
  AI_SHAPES.forEach((s, i) => {
    if (n >= s.th) bins[s.type].push(i);
    else bins.u.push(i);
  });
  const learned = AI_SHAPES.length - bins.u.length;
  const id = useId();
  const bin = (key: 'c' | 's' | 'u', label: string) => (
    <div className={`ai-bin ai-bin-${key}`}>
      <h4>{label}</h4>
      <div className="ai-shapes">
        {bins[key].map((i) => (
          <motion.span key={i} layout={!reduced} transition={{ type: 'spring', stiffness: 260, damping: 26 }}>
            <Shape type={AI_SHAPES[i].type} tone={key === 'u' ? 'grey' : key === 'c' ? 'em' : 'gold'} />
          </motion.span>
        ))}
      </div>
    </div>
  );
  return (
    <div className="demo">
      <h4 className="demo-title">{t('demo_ai_title')}</h4>
      <label htmlFor={id} className="demo-label">
        {t('demo_ai_examples', { n })}
      </label>
      <input id={id} type="range" min={0} max={12} value={n} onChange={(e) => setN(+e.target.value)} />
      <div className="ai-bins">
        {bin('c', t('demo_ai_circle'))}
        {bin('s', t('demo_ai_square'))}
        {bin('u', t('demo_ai_unsure'))}
      </div>
      <p className="demo-status" aria-live="polite">
        {t('demo_ai_learned', { n: learned })}
      </p>
      <p className="muted small">{t('demo_ai_hint')}</p>
    </div>
  );
}

/* ======================================================= Robotics */
export function RobotDemo() {
  const { t } = useI18n();
  const id = useId();
  const [d, setD] = useState(80);
  const state = d > 55 ? 'far' : d > 25 ? 'near' : 'stop';
  const speed = state === 'far' ? 0.5 : state === 'near' ? 1.6 : 0;
  const wallX = 120 + d * 3.2;
  const keys = {
    far: ['demo_robot_s_far', 'demo_robot_t_far', 'demo_robot_a_far', 'demo_robot_far'],
    near: ['demo_robot_s_near', 'demo_robot_t_near', 'demo_robot_a_near', 'demo_robot_near'],
    stop: ['demo_robot_s_stop', 'demo_robot_t_stop', 'demo_robot_a_stop', 'demo_robot_stop'],
  } as const;
  const k = keys[state];
  const wheel = (cx: number) => (
    <g transform={`translate(${cx} 120)`}>
      <circle r="13" fill="#26332F" />
      <g className="wheel" style={{ animationDuration: speed ? `${speed}s` : '0s', animationPlayState: speed ? 'running' : 'paused' }}>
        <circle r="9" fill="#E8D9BE" />
        <rect x="-1.5" y="-9" width="3" height="18" fill="#26332F" />
        <rect x="-9" y="-1.5" width="18" height="3" fill="#26332F" />
      </g>
    </g>
  );
  return (
    <div className="demo">
      <h4 className="demo-title">{t('demo_robot_title')}</h4>
      <svg viewBox="0 0 480 170" className="demo-svg" role="img" aria-label={t('demo_robot_title')}>
        <rect x="0" y="133" width="480" height="10" fill="#E8D9BE" />
        <rect x={wallX} y="40" width="16" height="103" rx="3" fill="#C5A46D" style={{ transition: 'x .15s' }} />
        <path d={`M ${150} 92 L ${wallX} 92`} stroke={state === 'stop' ? '#D64747' : '#087F5B'} strokeWidth="2" strokeDasharray="5 5" />
        <path d={`M ${150} 92 L ${wallX} 70 M 150 92 L ${wallX} 114`} stroke={state === 'stop' ? '#D64747' : '#67B5AD'} strokeWidth="1" opacity="0.5" />
        <g>
          <rect x="60" y="62" width="90" height="56" rx="12" fill="#FFFFFF" stroke="#087F5B" strokeWidth="3" />
          <rect x="72" y="72" width="40" height="22" rx="6" fill="#087F5B" />
          <circle cx="86" cy="83" r="4" fill="#FBF8F2" />
          <circle cx="100" cy="83" r="4" fill="#FBF8F2" />
          <rect x="140" y="82" width="14" height="20" rx="4" fill="#67B5AD" />
          <line x1="105" y1="62" x2="105" y2="46" stroke="#087F5B" strokeWidth="3" />
          <circle cx="105" cy="42" r="5" fill={state === 'stop' ? '#D64747' : '#C5A46D'} />
          {wheel(82)}
          {wheel(128)}
        </g>
      </svg>
      <label htmlFor={id} className="demo-label">
        {t('demo_robot_distance')}
      </label>
      <input id={id} type="range" min={8} max={100} value={d} onChange={(e) => setD(+e.target.value)} />
      <div className="steps3" aria-live="polite">
        <div className="step3">
          <span>{t('demo_robot_sense')}</span>
          <strong>{t(k[0])}</strong>
        </div>
        <div className="step3">
          <span>{t('demo_robot_think')}</span>
          <strong>{t(k[1])}</strong>
        </div>
        <div className="step3">
          <span>{t('demo_robot_act')}</span>
          <strong>{t(k[2])}</strong>
        </div>
      </div>
      <p className="demo-status">{t(k[3])}</p>
    </div>
  );
}

/* ========================================================== Space */
export function SpaceDemo() {
  const { t } = useI18n();
  const [job, setJob] = useState<'comm' | 'obs' | 'nav'>('comm');
  const jobs = [
    { id: 'comm', label: 'demo_space_comm', desc: 'demo_space_comm_d' },
    { id: 'obs', label: 'demo_space_obs', desc: 'demo_space_obs_d' },
    { id: 'nav', label: 'demo_space_nav', desc: 'demo_space_nav_d' },
  ] as const;
  const cur = jobs.find((j) => j.id === job)!;
  return (
    <div className="demo">
      <h4 className="demo-title">{t('demo_space_title')}</h4>
      <svg viewBox="0 0 360 240" className="demo-svg" role="img" aria-label={t('demo_space_title')}>
        <ellipse cx="180" cy="130" rx="150" ry="40" fill="none" stroke="#C5A46D" strokeDasharray="3 6" transform="rotate(-12 180 130)" />
        <circle cx="180" cy="130" r="62" fill="#67B5AD" />
        <path d="M140 110c10-14 30-12 36 2s-6 22-18 22-26-8-18-24z" fill="#087F5B" />
        <path d="M190 148c10-5 22 0 22 10s-12 16-20 10-8-14-2-20z" fill="#E8D9BE" />
        <path d="M205 100c6-6 16-4 18 4s-8 12-14 10-8-8-4-14z" fill="#087F5B" opacity="0.8" />
        <g className="sat-orbit">
          <g transform="translate(180 52)">
            <rect x="-9" y="-7" width="18" height="14" rx="3" fill="#C5A46D" />
            <rect x="-30" y="-3" width="19" height="6" fill="#087F5B" />
            <rect x="11" y="-3" width="19" height="6" fill="#087F5B" />
            {job === 'obs' && <path d="M-3 7 L-34 66 Q0 80 34 66 L3 7z" fill="#D64747" opacity="0.28" />}
            {job === 'nav' && [-40, 0, 40].map((x) => <line key={x} x1="0" y1="7" x2={x} y2="68" stroke="#087F5B" strokeWidth="1.5" strokeDasharray="3 3" />)}
            {job === 'comm' && (
              <g stroke="#087F5B" strokeWidth="2" fill="none" strokeDasharray="4 4">
                <path d="M-6 8 Q-56 30 -50 66" />
                <path d="M6 8 Q56 30 50 66" />
              </g>
            )}
          </g>
          {job === 'comm' && [-50, 50].map((x) => <circle key={x} cx={180 + x} cy="118" r="5" fill="#D64747" />)}
        </g>
      </svg>
      <div className="seg" role="group" aria-label={t('demo_space_pick')}>
        {jobs.map((j) => (
          <button key={j.id} type="button" className={job === j.id ? 'is-on' : ''} aria-pressed={job === j.id} onClick={() => setJob(j.id)}>
            {t(j.label)}
          </button>
        ))}
      </div>
      <p className="demo-status" aria-live="polite">
        {t(cur.desc)}
      </p>
    </div>
  );
}

/* ========================================================= Energy */
export function EnergyDemo() {
  const { t } = useI18n();
  const id = useId();
  const [h, setH] = useState(12);
  const sun = Math.max(0, Math.sin((Math.PI * (h - 6)) / 12));
  const ang = Math.PI * ((h - 6) / 12);
  const sx = 180 - Math.cos(ang) * 140;
  const sy = 150 - Math.sin(ang) * 110;
  const hh = Math.floor(h);
  const label = `${String(hh).padStart(2, '0')}:00`;
  const msg = sun === 0 ? 'demo_energy_night' : sun < 0.55 ? 'demo_energy_low' : 'demo_energy_high';
  const sky = `rgb(${Math.round(190 + sun * 55)}, ${Math.round(205 + sun * 35)}, ${Math.round(220 + sun * 5 - sun * 30)})`;
  return (
    <div className="demo">
      <h4 className="demo-title">{t('demo_energy_title')}</h4>
      <svg viewBox="0 0 360 200" className="demo-svg" role="img" aria-label={t('demo_energy_title')}>
        <rect width="360" height="200" rx="16" fill={sky} style={{ transition: 'fill .2s' }} />
        <path d="M40 150 A140 110 0 0 1 320 150" fill="none" stroke="#C5A46D" strokeDasharray="3 6" />
        <circle cx={sx} cy={sy} r={sun > 0 ? 22 : 0} fill="#FFD77A" opacity={0.35 + sun * 0.5} />
        <circle cx={sx} cy={sy} r={sun > 0 ? 12 : 0} fill="#FFC244" />
        <rect x="0" y="150" width="360" height="50" fill="#E8D9BE" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${110 + i * 50} 140)`}>
            <polygon points="0,0 40,0 34,-22 6,-22" fill="#0b6e57" stroke="#fff" />
            <polygon points="0,0 40,0 34,-22 6,-22" fill="#67B5AD" opacity={0.2 + sun * 0.8} />
            <line x1="20" y1="0" x2="20" y2="12" stroke="#26332F" strokeWidth="3" />
          </g>
        ))}
        <g transform="translate(36 160)">
          <rect width="46" height="22" rx="4" fill="#fff" stroke="#26332F" />
          <rect x="3" y="3" width={40 * sun} height="16" rx="2" fill="#087F5B" style={{ transition: 'width .2s' }} />
          <rect x="46" y="7" width="4" height="8" fill="#26332F" />
        </g>
      </svg>
      <label htmlFor={id} className="demo-label">
        {t('demo_energy_time')}: <bdi>{label}</bdi>
      </label>
      <input id={id} type="range" min={0} max={23} value={h} onChange={(e) => setH(+e.target.value)} />
      <div className="meter" role="img" aria-label={`${t('demo_energy_sun')}`}>
        <span>{t('demo_energy_power')}</span>
        <div className="meter-bar"><i style={{ width: `${Math.round(sun * 100)}%` }} /></div>
      </div>
      <p className="demo-status" aria-live="polite">
        {t(msg)}
      </p>
    </div>
  );
}

/* ====================================================== Cyber */
export function CyberDemo() {
  const { t } = useI18n();
  const [on, setOn] = useState<Record<string, boolean>>({ pass: false, tfa: false, upd: false });
  const items = [
    { id: 'pass', label: 'demo_cyber_pass', desc: 'demo_cyber_pass_d', color: '#087F5B' },
    { id: 'tfa', label: 'demo_cyber_2fa', desc: 'demo_cyber_2fa_d', color: '#C5A46D' },
    { id: 'upd', label: 'demo_cyber_update', desc: 'demo_cyber_update_d', color: '#67B5AD' },
  ] as const;
  const count = Object.values(on).filter(Boolean).length;
  const last = items.filter((i) => on[i.id]).at(-1);
  const nodes = [[60, 50], [300, 50], [60, 170], [300, 170], [180, 20], [180, 200]];
  return (
    <div className="demo">
      <h4 className="demo-title">{t('demo_cyber_title')}</h4>
      <svg viewBox="0 0 360 220" className="demo-svg" role="img" aria-label={t('demo_cyber_title')}>
        {nodes.map(([x, y], i) => (
          <g key={i}>
            <line x1="180" y1="110" x2={x} y2={y} stroke="#67B5AD" strokeDasharray="3 4" />
            <rect x={x - 14} y={y - 10} width="28" height="20" rx="4" fill="#fff" stroke="#087F5B" />
          </g>
        ))}
        {items.map((it, i) => (
          <circle key={it.id} cx="180" cy="110" r={34 + (i + 1) * 17} fill={it.color} opacity={on[it.id] ? 0.16 : 0} stroke={it.color} strokeWidth={on[it.id] ? 3 : 0} style={{ transition: 'all .35s' }} />
        ))}
        <circle cx="180" cy="110" r="32" fill="#fff" stroke="#087F5B" strokeWidth="3" />
        <rect x="165" y="108" width="30" height="24" rx="5" fill={count === 3 ? '#087F5B' : '#C5A46D'} />
        <path d="M170 108 v-8 a10 10 0 0 1 20 0 v8" fill="none" stroke="#26332F" strokeWidth="4" />
        <circle cx="180" cy="119" r="3" fill="#fff" />
      </svg>
      <div className="toggles">
        {items.map((it) => (
          <label key={it.id} className={`toggle ${on[it.id] ? 'is-on' : ''}`}>
            <input type="checkbox" checked={on[it.id]} onChange={() => setOn((p) => ({ ...p, [it.id]: !p[it.id] }))} />
            <span>{t(it.label)}</span>
          </label>
        ))}
      </div>
      <p className="demo-status" aria-live="polite">
        <strong>{t('demo_cyber_status', { n: count })}</strong>
        {last ? <> · {t(last.desc)}</> : null}
      </p>
      <p className="muted small">{t('demo_cyber_safe')}</p>
    </div>
  );
}

/* ===================================================== Smart city */
export function SmartCityDemo() {
  const { t } = useI18n();
  const [smart, setSmart] = useState(true);
  const queue = [0, 1, 2, 3, 4];
  return (
    <div className="demo">
      <h4 className="demo-title">{t('demo_smart_title')}</h4>
      <svg viewBox="0 0 400 190" className="demo-svg" role="img" aria-label={t('demo_smart_title')}>
        <rect width="400" height="190" rx="16" fill="#E9F3EF" />
        <rect x="0" y="86" width="400" height="48" fill="#cfd8d3" />
        <line x1="0" y1="110" x2="400" y2="110" stroke="#fff" strokeDasharray="14 12" strokeWidth="3" />
        {[30, 140, 250, 330].map((x, i) => (
          <g key={x}>
            <rect x={x} y={i % 2 ? 20 : 138} width="46" height={i % 2 ? 56 : 44} rx="6" fill={i % 2 ? '#FFFFFF' : '#67B5AD'} stroke="#087F5B" strokeOpacity=".3" />
          </g>
        ))}
        {/* traffic light */}
        <g transform="translate(300 40)">
          <rect x="-10" y="0" width="20" height="46" rx="6" fill="#26332F" />
          <circle cx="0" cy="12" r="6" fill={smart ? '#555' : '#D64747'} />
          <circle cx="0" cy="34" r="6" fill={smart ? '#34d399' : '#555'} />
        </g>
        {smart && (
          <g fill="#087F5B">
            <circle cx="276" cy="80" r="4"><animate attributeName="r" values="3;7;3" dur="1.6s" repeatCount="indefinite" /></circle>
            <circle cx="276" cy="80" r="11" fill="none" stroke="#087F5B" opacity=".35" />
          </g>
        )}
        {queue.map((i) => (
          <g key={i} className={smart ? 'car car-move' : 'car'} style={{ animationDelay: smart ? `${-i * 1.5}s` : undefined, transform: smart ? undefined : `translateX(${240 - i * 46}px)` }}>
            <rect x="0" y="94" width="34" height="14" rx="5" fill={i % 2 ? '#C5A46D' : '#087F5B'} />
            <rect x="8" y="90" width="16" height="8" rx="3" fill="#fff" opacity=".85" />
            <circle cx="8" cy="109" r="3.5" fill="#26332F" />
            <circle cx="26" cy="109" r="3.5" fill="#26332F" />
          </g>
        ))}
      </svg>
      <label className={`toggle ${smart ? 'is-on' : ''}`}>
        <input type="checkbox" checked={smart} onChange={() => setSmart((v) => !v)} />
        <span>{t('demo_smart_toggle')}</span>
      </label>
      <p className="demo-status" aria-live="polite">
        {t(smart ? 'demo_smart_on' : 'demo_smart_off')}
      </p>
    </div>
  );
}
