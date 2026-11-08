import { BadgeCheck, Car, Earth, ExternalLink, FlaskConical, GraduationCap, HeartPulse, Leaf, Sparkles, type LucideIcon } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { futureTopics, type FutureTopic } from '../data/future';
import { SectionHead } from '../components/SectionHead';
import { Reveal, TiltCard } from '../components/Reveal';
import { CityArt } from '../components/CityArt';
import { StarPattern } from '../components/Pattern';

const icons: Record<FutureTopic['icon'], LucideIcon> = {
  health: HeartPulse,
  transport: Car,
  city: Leaf,
  science: FlaskConical,
  edu: GraduationCap,
  earth: Earth,
};

export function Future() {
  const { t, l } = useI18n();
  return (
    <section id="future" className="section future" aria-labelledby="future-title">
      <div className="future-glow" aria-hidden="true" />
      <div className="container">
        <div className="future-top">
          <div>
            <SectionHead id="future-title" kicker={t('fut_kicker')} title={t('fut_title')} intro={t('fut_intro')} />
            <p className="note-pill">
              <Sparkles size={16} aria-hidden="true" /> {t('fut_note')}
            </p>
          </div>
          <Reveal className="future-art-wrap" y={0}>
            <CityArt glow label={t('fut_art_alt')} className="future-art" />
          </Reveal>
        </div>

        <div className="future-grid">
          {futureTopics.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <Reveal key={f.id} delay={(i % 3) * 0.08}>
                <TiltCard className="future-card" max={4}>
                  <div className="future-card-head">
                    <span className="future-icon"><Icon size={24} aria-hidden="true" /></span>
                    <h3>{l(f.title)}</h3>
                  </div>
                  <div className="future-now">
                    <span className="tag-now"><BadgeCheck size={14} aria-hidden="true" /> {t('fut_today')}</span>
                    <p>{l(f.today)}</p>
                    <a className="src-link" href={f.source} target="_blank" rel="noopener noreferrer">
                      {t('tl_source')}
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </div>
                  <div className="future-next">
                    <span className="tag-next"><Sparkles size={14} aria-hidden="true" /> {t('fut_tomorrow')}</span>
                    <p>{l(f.tomorrow)}</p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <figure className="quote">
            <StarPattern className="quote-pattern" color="#C5A46D" size={64} opacity={0.25} />
            <blockquote>{t('fut_quote')}</blockquote>
            <figcaption>{t('fut_quote_by')}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
