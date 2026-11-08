import { useId } from 'react';

/** Original SVG illustration of a stylised future Abu Dhabi skyline. Used as 3D fallback and in the Future section. */
export function CityArt({ label, glow = false, className }: { label: string; glow?: boolean; className?: string }) {
  const id = useId().replace(/:/g, '');
  const g = (n: string) => `url(#${id}-${n})`;
  return (
    <svg className={className} viewBox="0 0 600 520" role="img" aria-label={label}>
      <defs>
        <linearGradient id={`${id}-em`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#12A57A" />
          <stop offset="1" stopColor="#075C48" />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#9ED3CC" />
        </linearGradient>
        <linearGradient id={`${id}-ivory`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E8D9BE" />
        </linearGradient>
        <radialGradient id={`${id}-sun`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#FFE9B0" stopOpacity={glow ? 0.95 : 0.8} />
          <stop offset="1" stopColor="#FFE9B0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-ground`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F2E6CC" />
          <stop offset="1" stopColor="#E0CFA9" />
        </linearGradient>
      </defs>

      <circle cx="310" cy="230" r={glow ? 250 : 210} fill={g('sun')} />
      <ellipse cx="300" cy="330" rx="270" ry="70" fill="none" stroke="#C5A46D" strokeWidth="1.5" strokeDasharray="4 7" transform="rotate(-14 300 330)" />

      {/* platform */}
      <ellipse cx="300" cy="445" rx="250" ry="52" fill="#D9C79F" opacity="0.6" />
      <ellipse cx="300" cy="432" rx="250" ry="52" fill={g('ground')} />
      <ellipse cx="300" cy="432" rx="232" ry="45" fill="none" stroke="#087F5B" strokeWidth="2" />

      {/* blade towers */}
      <g>
        <polygon points="388,420 388,170 418,160 418,420" fill={g('ivory')} />
        <polygon points="418,420 418,160 440,172 440,420" fill="#C9DFD9" />
        <polygon points="440,420 440,200 468,212 468,420" fill={g('ivory')} />
        <rect x="388" y="300" width="80" height="6" fill="#C5A46D" />
      </g>

      {/* leaning tower */}
      <g>
        {Array.from({ length: 9 }, (_, i) => (
          <polygon
            key={i}
            points={`${142 + i * 5},${418 - i * 30} ${222 + i * 5 - i * 2},${418 - i * 30} ${228 + i * 5 - i * 2},${392 - i * 30} ${148 + i * 5},${392 - i * 30}`}
            fill={i % 2 ? g('ivory') : g('glass')}
            stroke="#FFFFFF"
            strokeWidth="1"
          />
        ))}
      </g>

      {/* central spire */}
      <g>
        <polygon points="270,430 330,430 306,110 294,110" fill={g('em')} />
        <polygon points="294,110 306,110 300,70" fill="#C5A46D" />
        <circle cx="300" cy="64" r="7" fill="#67B5AD">
          {glow ? <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" /> : null}
        </circle>
        <ellipse cx="300" cy="190" rx="38" ry="8" fill="none" stroke="#C5A46D" strokeWidth="3" />
        <ellipse cx="300" cy="300" rx="52" ry="10" fill="none" stroke="#C5A46D" strokeWidth="2" />
      </g>

      {/* dome */}
      <g>
        <rect x="236" y="398" width="76" height="30" fill={g('ivory')} />
        <path d="M236 398 a38 34 0 0 1 76 0z" fill={g('glass')} stroke="#67B5AD" />
      </g>

      {/* small buildings */}
      {[
        [96, 380, 28, 48],
        [350, 392, 26, 36],
        [490, 372, 30, 56],
        [66, 402, 24, 26],
        [520, 398, 24, 30],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill={i % 2 ? g('glass') : g('ivory')} stroke="#FFFFFF" />
      ))}

      {/* solar row */}
      {[0, 1, 2, 3].map((i) => (
        <polygon key={i} points={`${96 + i * 30},${440 - 4} ${118 + i * 30},${440 - 4} ${112 + i * 30},${428} ${90 + i * 30},${428}`} fill="#67B5AD" stroke="#fff" />
      ))}

      {/* trees */}
      {[[170, 440], [456, 444], [540, 430], [60, 432]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 1.5} y={y - 14} width="3" height="14" fill="#C5A46D" />
          <circle cx={x} cy={y - 20} r="9" fill={i % 2 ? '#087F5B' : '#67B5AD'} />
        </g>
      ))}

      {/* floating AI chip */}
      <g transform="translate(470 120)">
        <line x1="-170" y1="-10" x2="0" y2="0" stroke="#087F5B" strokeWidth="1.5" strokeDasharray="5 5" />
        <rect x="-34" y="-34" width="68" height="68" rx="10" fill="#FBF8F2" stroke="#C5A46D" strokeWidth="2" transform="rotate(10)" />
        <rect x="-20" y="-20" width="40" height="40" rx="6" fill="#087F5B" transform="rotate(10)" />
        <rect x="-8" y="-8" width="16" height="16" rx="3" fill="#C5A46D" transform="rotate(10)" />
        <animateTransform attributeName="transform" type="translate" values="470 120;470 108;470 120" dur="5s" repeatCount="indefinite" />
      </g>

      {/* satellite */}
      <g transform="translate(110 130) rotate(-20)">
        <rect x="-12" y="-9" width="24" height="18" rx="3" fill="#C5A46D" />
        <rect x="-44" y="-4" width="28" height="8" fill="#087F5B" />
        <rect x="16" y="-4" width="28" height="8" fill="#087F5B" />
      </g>

      {/* sparkles */}
      {[[80, 250], [540, 260], [200, 80], [400, 60], [330, 150]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y - 8} L${x + 2} ${y - 2} L${x + 8} ${y} L${x + 2} ${y + 2} L${x} ${y + 8} L${x - 2} ${y + 2} L${x - 8} ${y} L${x - 2} ${y - 2}Z`} fill={i % 2 ? '#C5A46D' : '#67B5AD'} opacity="0.9" />
      ))}
    </svg>
  );
}
