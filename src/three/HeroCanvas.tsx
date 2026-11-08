import { SceneCanvas } from './SceneCanvas';
import HeroScene from './HeroScene';
import { CityArt } from '../components/CityArt';
import { useI18n } from '../i18n/I18nProvider';

export default function HeroCanvas() {
  const { t } = useI18n();
  return (
    <SceneCanvas
      className="hero-canvas"
      label={t('hero_art_alt')}
      camera={{ position: [0, 3.6, 12.5], fov: 34 }}
      fallback={<CityArt label={t('hero_art_alt')} className="hero-fallback" />}
    >
      <HeroScene />
    </SceneCanvas>
  );
}
