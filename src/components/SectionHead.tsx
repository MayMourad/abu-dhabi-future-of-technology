import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

export function SectionHead({ kicker, title, intro, id, align = 'start' }: { kicker: string; title: string; intro?: ReactNode; id: string; align?: 'start' | 'center' }) {
  return (
    <header className={`section-head align-${align}`}>
      <Reveal>
        <p className="kicker">
          <span className="kicker-dot" aria-hidden="true" />
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 id={id}>{title}</h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.12}>
          <p className="lead">{intro}</p>
        </Reveal>
      ) : null}
    </header>
  );
}
