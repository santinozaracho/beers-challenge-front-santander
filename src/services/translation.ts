import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { TRANSLATIONS } from "../locale";
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  "es-AR": {
    translation: TRANSLATIONS.esAR,
  },
};

i18n
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "es-AR",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  });

export default i18n;
