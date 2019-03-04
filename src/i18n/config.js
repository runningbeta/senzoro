import i18next from 'i18next';
import de from '../../locale/de/messages.json';
import en from '../../locale/en/messages.json';

i18next.init({
  fallbackLng: 'en',
  resources: {
    de: {
      translations: de,
    },
    en: {
      translations: en,
    },
  },
  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  react: {
    wait: true,
  },
});

export default i18next;
