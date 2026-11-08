import { Bot, Brain, FlaskConical, Globe, Leaf, Lightbulb, Satellite, type LucideIcon } from 'lucide-react';
import type { Category, SceneKind } from '../data/centers';
import type { UIKey } from '../i18n/ui';
import { useI18n } from '../i18n/I18nProvider';

export const catKey: Record<Category, UIKey> = {
  ai: 'filter_ai',
  robotics: 'filter_robotics',
  space: 'filter_space',
  sustainability: 'filter_sustainability',
  research: 'filter_research',
  startups: 'filter_startups',
};

export const hintKey: Record<SceneKind, UIKey> = {
  neural: 'scene_neural_hint',
  lab: 'scene_lab_hint',
  network: 'scene_network_hint',
  city: 'scene_city_hint',
  robot: 'scene_robot_hint',
  orbit: 'scene_orbit_title',
  globe: 'scene_globe_hint',
};

export const sceneIcon: Record<SceneKind, LucideIcon> = {
  neural: Brain,
  lab: FlaskConical,
  network: Lightbulb,
  city: Leaf,
  robot: Bot,
  orbit: Satellite,
  globe: Globe,
};

export function CategoryChips({ cats }: { cats: Category[] }) {
  const { t } = useI18n();
  return (
    <ul className="chips" aria-label={t('lbl_category')}>
      {cats.map((c) => (
        <li key={c} className={`chip chip-${c}`}>
          {t(catKey[c])}
        </li>
      ))}
    </ul>
  );
}
