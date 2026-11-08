import { useId } from 'react';
import type { SceneKind } from '../data/centers';
import { StarPattern } from './Pattern';

/** Original illustration for each center card. Decorative (aria-hidden); the card text carries the meaning. */
export function CenterArt({ kind, accent, accent2 }: { kind: SceneKind; accent: string; accent2: string }) {
  const id = useId().replace(/:/g, '');
  return (
    <div className="center-art" style={{ ['--a' as string]: accent, ['--b' as string]: accent2 }} aria-hidden="true">
      <div className="center-art-bg" />
      <StarPattern className="center-art-pattern" color="#fff" size={56} opacity={0.35} />
      <svg viewBox="0 0 320 180" className="center-art-svg" focusable="false">
        <defs>
          <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#FBF8F2" />
          </linearGradient>
        </defs>
        {kind === 'neural' && (
          <g>
            {[0, 1, 2, 3].map((c) =>
              [0, 1, 2, 3, 4].map((r) => (
                <g key={`${c}${r}`}>
                  {c < 3 && [0, 1, 2, 3, 4].map((r2) => <line key={r2} x1={70 + c * 62} y1={30 + r * 30} x2={70 + (c + 1) * 62} y2={30 + r2 * 30} stroke="#fff" strokeOpacity="0.28" />)}
                  <circle cx={70 + c * 62} cy={30 + r * 30} r="6" fill={(c + r) % 3 === 0 ? '#C5A46D' : '#fff'} />
                </g>
              )),
            )}
          </g>
        )}
        {kind === 'lab' && (
          <g>
            <path d="M140 40h40v38l34 62a10 10 0 0 1-9 14h-90a10 10 0 0 1-9-14l34-62z" fill={`url(#${id}g)`} />
            <path d="M126 122h68l12 20a6 6 0 0 1-5 9h-82a6 6 0 0 1-5-9z" fill="#C5A46D" opacity="0.9" />
            <circle cx="248" cy="62" r="7" fill="#fff" />
            <ellipse cx="248" cy="62" rx="26" ry="10" fill="none" stroke="#fff" strokeWidth="2" />
            <ellipse cx="248" cy="62" rx="26" ry="10" fill="none" stroke="#fff" strokeWidth="2" transform="rotate(60 248 62)" />
            <ellipse cx="248" cy="62" rx="26" ry="10" fill="none" stroke="#fff" strokeWidth="2" transform="rotate(120 248 62)" />
            <circle cx="70" cy="62" r="8" fill="#fff" /><circle cx="90" cy="86" r="8" fill="#C5A46D" /><circle cx="52" cy="90" r="8" fill="#fff" />
          </g>
        )}
        {kind === 'network' && (
          <g>
            <path d="M60 90 C100 40 130 40 160 70 S220 130 260 90" stroke="#fff" strokeWidth="3" fill="none" strokeDasharray="2 8" strokeLinecap="round" />
            <path d="M60 90 C100 140 130 140 160 110 S220 50 260 90" stroke="#fff" strokeOpacity="0.5" strokeWidth="3" fill="none" />
            {[[60, 90], [110, 52], [110, 128], [160, 90], [215, 70], [260, 90]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i === 5 ? 14 : 10} fill={i === 5 ? '#C5A46D' : '#fff'} />
            ))}
          </g>
        )}
        {kind === 'city' && (
          <g>
            <rect x="40" y="130" width="240" height="8" rx="4" fill="#fff" opacity="0.5" />
            {[[55, 80, 36], [100, 50, 40], [150, 70, 34], [196, 40, 44], [244, 92, 30]].map(([x, y, w], i) => (
              <g key={i}>
                <rect x={x} y={y} width={w} height={130 - y} rx="4" fill={`url(#${id}g)`} />
                <rect x={x - 2} y={y - 6} width={w + 4} height="8" rx="3" fill="#C5A46D" opacity={i % 2 ? 0.0 : 0.95} />
                <rect x={x + 4} y={y - 4} width={w - 8} height="6" fill={i % 2 ? '#7BE0B2' : '#67B5AD'} />
              </g>
            ))}
            <circle cx="270" cy="38" r="16" fill="#FFE9B0" />
          </g>
        )}
        {kind === 'robot' && (
          <g>
            <rect x="80" y="140" width="160" height="12" rx="6" fill="#fff" opacity="0.7" />
            <rect x="130" y="126" width="60" height="16" rx="6" fill="#fff" />
            <rect x="150" y="70" width="14" height="60" rx="7" fill="#fff" transform="rotate(-14 157 126)" />
            <circle cx="140" cy="68" r="10" fill="#C5A46D" />
            <rect x="136" y="60" width="74" height="14" rx="7" fill="#fff" transform="rotate(22 140 66)" />
            <circle cx="205" cy="90" r="9" fill="#C5A46D" />
            <rect x="206" y="92" width="10" height="26" rx="3" fill="#fff" />
            <rect x="244" y="120" width="22" height="22" rx="3" fill="#D64747" />
          </g>
        )}
        {kind === 'orbit' && (
          <g>
            <circle cx="160" cy="95" r="46" fill="#fff" opacity="0.95" />
            <path d="M130 80c10-12 28-10 34 2s-6 20-16 22-24-6-18-24z" fill="var(--a)" opacity="0.85" />
            <path d="M170 104c8-4 18 0 18 8s-10 14-18 8-8-12 0-16z" fill="#C5A46D" />
            <ellipse cx="160" cy="95" rx="100" ry="30" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="3 7" transform="rotate(-18 160 95)" />
            <g transform="translate(246 62) rotate(-18)"><rect x="-8" y="-6" width="16" height="12" rx="2" fill="#C5A46D" /><rect x="-28" y="-3" width="18" height="6" fill="#fff" /><rect x="10" y="-3" width="18" height="6" fill="#fff" /></g>
          </g>
        )}
        {kind === 'globe' && (
          <g>
            <circle cx="160" cy="92" r="58" fill="#fff" opacity="0.95" />
            <ellipse cx="160" cy="92" rx="58" ry="22" fill="none" stroke="var(--a)" strokeOpacity="0.5" />
            <ellipse cx="160" cy="92" rx="24" ry="58" fill="none" stroke="var(--a)" strokeOpacity="0.5" />
            <path d="M160 34v116M102 92h116" stroke="var(--a)" strokeOpacity="0.35" />
            <path d="M178 66 C210 20 260 24 262 52" stroke="#C5A46D" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M178 66 C150 20 100 24 90 54" stroke="#C5A46D" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="178" cy="66" r="7" fill="#D64747" />
            <circle cx="262" cy="52" r="5" fill="#C5A46D" /><circle cx="90" cy="54" r="5" fill="#C5A46D" />
          </g>
        )}
      </svg>
    </div>
  );
}
