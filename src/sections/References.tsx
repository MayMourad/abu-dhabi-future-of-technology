import { ExternalLink, ShieldAlert } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { SectionHead } from '../components/SectionHead';
import { Reveal } from '../components/Reveal';
import { newsSources, officialSources, type Source } from '../data/sources';

function List({ items, start = 1 }: { items: Source[]; start?: number }) {
  const { t, l } = useI18n();
  return (
    <ol className="ref-list" start={start}>
      {items.map((s) => (
        <li key={s.url}>
          <div>
            <strong>
              <bdi>{l(s.title)}</bdi>
            </strong>
            <span className="ref-pub">
              <bdi>{s.publisher}</bdi>
            </span>
          </div>
          <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${t('refs_open')}: ${l(s.title)}`}>
            {t('refs_open')}
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ol>
  );
}

export function References() {
  const { t } = useI18n();
  return (
    <section id="refs" className="section refs" aria-labelledby="refs-title">
      <div className="container">
        <SectionHead id="refs-title" kicker={t('refs_kicker')} title={t('refs_title')} intro={t('refs_intro')} />
        <div className="refs-grid">
          <Reveal>
            <div className="ref-card">
              <h3>{t('refs_official')}</h3>
              <List items={officialSources} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="ref-card">
              <h3>{t('refs_news')}</h3>
              <List items={newsSources} start={officialSources.length + 1} />
            </div>
          </Reveal>
        </div>
        <p className="disclaimer">
          <ShieldAlert size={18} aria-hidden="true" />
          <span>
            {t('refs_disclaimer')} <em>{t('refs_checked')}</em>
          </span>
        </p>
      </div>
    </section>
  );
}
