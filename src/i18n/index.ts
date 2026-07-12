import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import hiTranslation from './locales/hi/translation.json';

const resources = {
  en: { translation: enTranslation },
  hi: { translation: hiTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safe from xss
    },
  });

/**
 * Global function that can be used outside of React components with ease.
 * (Note: For React components, it's recommended to use the `useTranslation` hook so they re-render when language changes).
 */
export const t = (key: string, options?: any): string => {
  return i18n.t(key, options);
};

/**
 * Global function to switch the active language.
 */
export const setLanguage = (lang: string) => {
  i18n.changeLanguage(lang);
};

export default i18n;
