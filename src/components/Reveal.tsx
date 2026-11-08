import { Fragment, useRef, type CSSProperties, type MouseEvent, type PointerEvent, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

/** Fade/slide a block in once as it scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduced ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word headline reveal. Splits on spaces only so Arabic letters stay joined. */
export function SplitWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  const words = text.split(' ');
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="split-word" aria-hidden="true">
            <motion.span
              style={{ display: 'inline-block' }}
              initial={reduced ? false : { y: '110%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </span>
  );
}

/** 3D tilt + soft spotlight following the pointer. Pure CSS variables, no re-renders. */
export function TiltCard({
  children,
  className = '',
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const move = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || reduced || e.pointerType === 'touch') return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--rx', `${((0.5 - py) * max).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${((px - 0.5) * max).toFixed(2)}deg`);
    el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
    el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
  };
  const leave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={move} onPointerLeave={leave}>
      {children}
    </div>
  );
}

/** Button/link that leans slightly toward the cursor. */
export function Magnetic({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const move = (e: MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${dx * 0.12}px, ${dy * 0.18}px)`;
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = '';
  };
  return (
    <span ref={ref} className={`magnetic ${className}`} onMouseMove={move} onMouseLeave={leave}>
      {children}
    </span>
  );
}
