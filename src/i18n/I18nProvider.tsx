import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ui, type L, type Lang, type UIKey } from './ui';

type Vars = Record<string, string | number>;

interface I18n {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  isRtl: boolean;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Interface string by key, with optional {placeholders}. */
  t: (key: UIKey, vars?: Vars) => string;
  /** Pick the current language from a bilingual value. */
  l: (value: L, vars?: Vars) => string;
}

const STORAGE_KEY = 'adft-lang';
const Ctx = createContext<I18n | null>(null);

function fill(text: string, vars?: Vars) {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'ar' || saved === 'en') return saved;
  } catch {
    /* storage may be blocked */
  }
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    document.title = ui.site_title.en + ' | ' + ui.site_title.ar;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((p) => (p === 'en' ? 'ar' : 'en')), []);

  const value = useMemo<I18n>(
    () => ({
      lang,
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      isRtl: lang === 'ar',
      setLang,
      toggle,
      t: (key, vars) => fill(ui[key][lang], vars),
      l: (v, vars) => fill(v[lang], vars),
    }),
    [lang, setLang, toggle],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useI18n must be used inside I18nProvider');
  return v;
}
