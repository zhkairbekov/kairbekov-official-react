import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ruCommon from './locales/ru/common.json';

const STORAGE_KEY = 'lang';
const SUPPORTED_LANGS = /** @type {const} */ (['ru', 'kk', 'en']);

function normalizeLang(lang) {
  if (!lang) return null;
  const lower = String(lang).toLowerCase();

  // Common cases: "en-US", "ru-RU", "kk-KZ"
  const base = lower.split('-')[0];
  if (SUPPORTED_LANGS.includes(base)) return base;

  // Sometimes kk is reported as "kz" by users
  if (base === 'kz') return 'kk';

  return null;
}

function getInitialLanguage() {
  const stored = normalizeLang(localStorage.getItem(STORAGE_KEY));
  if (stored) return stored;

  const browser = normalizeLang(navigator.language);
  if (browser) return browser;

  return 'ru';
}

const commonLoaders = {
  ru: async () => ({ default: ruCommon }),
  en: () => import('./locales/en/common.json'),
  kk: () => import('./locales/kk/common.json'),
};

async function ensureCommonLoaded(lang) {
  const normalized = normalizeLang(lang) || 'ru';
  if (i18n.hasResourceBundle(normalized, 'common')) return;

  const loader = commonLoaders[normalized] || commonLoaders.ru;
  const mod = await loader();
  i18n.addResourceBundle(normalized, 'common', mod.default, true, true);
}

function syncDocumentLang(lang) {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lang;
}

i18n.use(initReactI18next).init({
  resources: {
    ru: { common: ruCommon },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'ru',
  supportedLngs: SUPPORTED_LANGS,
  defaultNS: 'common',
  ns: ['common'],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

syncDocumentLang(i18n.resolvedLanguage || i18n.language || 'ru');

i18n.on('languageChanged', (lang) => {
  const normalized = normalizeLang(lang) || 'ru';
  localStorage.setItem(STORAGE_KEY, normalized);
  syncDocumentLang(normalized);
});

export async function changeLanguage(lang) {
  const normalized = normalizeLang(lang) || 'ru';
  await ensureCommonLoaded(normalized);
  await i18n.changeLanguage(normalized);
}

export { i18n };

