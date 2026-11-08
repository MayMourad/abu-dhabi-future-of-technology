import { lazy, Suspense } from 'react';
import { ArrowDown, Compass, Cpu, Satellite, Sparkles } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { Magnetic, Reveal, SplitWords } from '../components/Reveal';
import { StarPattern } from '../components/Pattern';
import { CityArt } from '../components/CityArt';

const HeroCanvas = lazy(() => import('../three/HeroCanvas'));

export function Hero() {
  const { t, lang } = useI18n();
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <StarPattern className="hero-pattern" color="#087F5B" size={84} opacity={0.12} />
        <svg className="hero-wave" viewBox="0 0 1440 220" preserveAspectRatio="none" focusable="false">
          <path d="M0 120 C240 40 420 190 720 120 S1200 30 1440 110 V220 H0Z" fill="#E8D9BE" opacity="0.55" />
          <path d="M0 160 C300 100 520 210 820 150 S1250 90 1440 150 V220 H0Z" fill="#FBF8F2" />
        </svg>
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal y={12}>
            <p className="hero-attribution">
              <Sparkles size={16} aria-hidden="true" />
              {t('hero_attribution')}
            </p>
          </Reveal>
          <p className="hero-kicker">{t('hero_kicker')}</p>
          <h1 id="hero-title">
            <SplitWords key={lang} text={t('hero_headline')} delay={0.1} />
          </h1>
          <Reveal delay={0.35}>
            <p className="hero-sub">{t('hero_sub')}</p>
          </Reveal>
          <Reveal delay={0.5} className="hero-ctas">
            <Magnetic>
              <a className="btn btn-primary btn-lg" href="#why">
                <Compass size={20} aria-hidden="true" />
                {t('cta_explore')}
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost btn-lg" href="#centers">
                <Cpu size={20} aria-hidden="true" />
                {t('cta_centers')}
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <div className="hero-stage">
          <Suspense fallback={<CityArt label={t('hero_art_alt')} className="hero-fallback" />}>
            <HeroCanvas />
          </Suspense>
          <div className="hero-tags" aria-hidden="true">
            <span className="hero-tag tag-ai">
              <Cpu size={14} /> {t('hero_tag_ai')}
            </span>
            <span className="hero-tag tag-space">
              <Satellite size={14} /> {t('hero_tag_space')}
            </span>
            <span className="hero-tag tag-city">
              <Sparkles size={14} /> {t('hero_tag_city')}
            </span>
          </div>
          <p className="hero-hint">{t('hero_scene_hint')}</p>
        </div>
      </div>

      <a className="scroll-cue" href="#why" aria-label={t('hero_scroll')}>
        <span>{t('hero_scroll')}</span>
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
