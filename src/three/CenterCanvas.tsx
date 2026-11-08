import { SceneCanvas } from './SceneCanvas';
import MiniScene from './MiniScenes';
import { CenterArt } from '../components/CenterArt';
import type { Center, SceneKind } from '../data/centers';
import { useI18n } from '../i18n/I18nProvider';

const cams: Record<SceneKind, { position: [number, number, number]; fov: number }> = {
  neural: { position: [0, 0, 6.6], fov: 40 },
  lab: { position: [0, 0.3, 6.6], fov: 42 },
  network: { position: [0, 0, 7.4], fov: 40 },
  city: { position: [6.2, 4.6, 7.6], fov: 40 },
  robot: { position: [0, 2.4, 7.2], fov: 40 },
  orbit: { position: [0, 1.4, 6.8], fov: 40 },
  globe: { position: [0, 0.4, 5], fov: 40 },
};

export default function CenterCanvas({ center, onSelect }: { center: Center; onSelect: (key: string | null) => void }) {
  const { t } = useI18n();
  return (
    <SceneCanvas
      className="scene-canvas"
      label={t('scene_label')}
      camera={cams[center.scene]}
      fallback={
        <div className="scene-fallback">
          <CenterArt kind={center.scene} accent={center.accent} accent2={center.accent2} />
          <p>{t('error_3d')}</p>
        </div>
      }
    >
      <MiniScene kind={center.scene} accent={center.accent} accent2={center.accent2} onSelect={onSelect} />
    </SceneCanvas>
  );
}
