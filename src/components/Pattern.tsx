import { useId } from 'react';

/** Eight-pointed-star geometric pattern inspired by Emirati / Islamic architectural tiling. */
export function StarPattern({ className, color = 'currentColor', size = 72, opacity = 1 }: { className?: string; color?: string; size?: number; opacity?: number }) {
  const id = useId().replace(/:/g, '');
  const s = size;
  const c = s / 2;
  const r1 = s * 0.4;
  const r2 = s * 0.2;
  const pts = Array.from({ length: 16 }, (_, i) => {
    const a = (i * Math.PI) / 8 - Math.PI / 2;
    const r = i % 2 ? r2 : r1;
    return `${(c + Math.cos(a) * r).toFixed(2)},${(c + Math.sin(a) * r).toFixed(2)}`;
  }).join(' ');
  return (
    <svg className={className} width="100%" height="100%" aria-hidden="true" focusable="false" style={{ opacity }}>
      <defs>
        <pattern id={id} width={s} height={s} patternUnits="userSpaceOnUse">
          <polygon points={pts} fill="none" stroke={color} strokeWidth="1" />
          <rect x="0" y="0" width={s} height={s} fill="none" stroke={color} strokeWidth="0.4" strokeDasharray="2 6" />
          <circle cx={c} cy={c} r="1.5" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function StarMark({ size = 28, color = '#C5A46D' }: { size?: number; color?: string }) {
  const c = 16;
  const pts = Array.from({ length: 16 }, (_, i) => {
    const a = (i * Math.PI) / 8 - Math.PI / 2;
    const r = i % 2 ? 6 : 14;
    return `${(c + Math.cos(a) * r).toFixed(2)},${(c + Math.sin(a) * r).toFixed(2)}`;
  }).join(' ');
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <polygon points={pts} fill={color} />
      <circle cx="16" cy="16" r="3" fill="#FBF8F2" />
    </svg>
  );
}
