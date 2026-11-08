import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { centers } from '../data/centers';
import { sceneInfo } from '../three/sceneText';
import { CenterArt } from './CenterArt';
import { CategoryChips, hintKey } from './centerBits';

const CenterCanvas = lazy(() => import('../three/CenterCanvas'));

export function CenterModal({ id, onClose }: { id: string; onClose: () => void }) {
  const { t, l } = useI18n();
  const ref = useRef<HTMLDialogElement>(null);
  const center = centers.find((c) => c.id === id)!;
  const [picked, setPicked] = useState<string | null>(null);

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
    document.documentElement.classList.add('modal-open');
    return () => document.documentElement.classList.remove('modal-open');
  }, []);

  const info = picked ? sceneInfo[picked] : null;

  return (
    <dialog
      ref={ref}
      className="center-dialog"
      aria-labelledby="dlg-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
      style={{ ['--a' as string]: center.accent, ['--b' as string]: center.accent2 }}
    >
      <div className="dialog-body">
        <button type="button" className="dialog-close" onClick={() => ref.current?.close()} aria-label={t('close')}>
          <X size={22} aria-hidden="true" />
        </button>

        <div className="dialog-scene">
          <Suspense
            fallback={
              <div className="scene-fallback">
                <CenterArt kind={center.scene} accent={center.accent} accent2={center.accent2} />
                <p>{t('loading_3d')}</p>
              </div>
            }
          >
            <CenterCanvas center={center} onSelect={setPicked} />
          </Suspense>
          <p className="scene-hint">{t(hintKey[center.scene])}</p>
          <div className="scene-caption" aria-live="polite">
            {info ? (
              <>
                <strong>{l(info.label)}</strong>
                <span>{l(info.desc)}</span>
              </>
            ) : null}
          </div>
        </div>

        <div className="dialog-text">
          <CategoryChips cats={center.cats} />
          <h3 id="dlg-title">
            <bdi>{l(center.name)}</bdi>
          </h3>
          <p className="dialog-type">{l(center.type)}</p>
          {center.name.en !== center.name.ar ? (
            <p className="dialog-ar">
              <span>{t('lbl_arabic_name')}:</span> <bdi lang="ar" dir="rtl">{center.name.ar}</bdi>
            </p>
          ) : null}

          <h4>{t('lbl_about')}</h4>
          <p>{l(center.about)}</p>

          <h4>{t('lbl_examples')}</h4>
          <ul className="check-list">
            {center.examples.map((e, i) => (
              <li key={i}>{l(e)}</li>
            ))}
          </ul>

          <h4>{t('lbl_why')}</h4>
          <p>{l(center.why)}</p>

          <div className="fact-box">
            <strong>{t('lbl_fact')}</strong>
            <p>{l(center.fact)}</p>
          </div>

          <a className="btn btn-primary" href={center.source} target="_blank" rel="noopener noreferrer">
            {t('lbl_source')}: <bdi>{center.source.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</bdi>
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </dialog>
  );
}
