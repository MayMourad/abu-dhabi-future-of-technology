import { useI18n } from '../i18n/I18nProvider';
import { SectionHead } from '../components/SectionHead';
import { Reveal } from '../components/Reveal';
import { StarMark, StarPattern } from '../components/Pattern';

export function Student() {
  const { t } = useI18n();
  return (
    <section id="about" className="section student" aria-labelledby="stu-title">
      <div className="container">
        <SectionHead id="stu-title" kicker={t('stu_kicker')} title={t('stu_title')} align="center" />
        <Reveal>
          <div className="signature">
            <StarPattern className="signature-pattern" color="#087F5B" size={72} opacity={0.1} />
            <div className="signature-emblem" aria-hidden="true">
              <span className="emblem-ring" />
              <StarMark size={64} />
            </div>
            <p className="signature-label">{t('stu_sig')}</p>
            <h3 className="signature-name">{t('stu_name')}</h3>
            <p className="signature-grade">{t('stu_grade')}</p>
            <span className="signature-rule" aria-hidden="true" />
            <p className="signature-text">{t('stu_text')}</p>
            <p className="signature-place">{t('stu_year')}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
