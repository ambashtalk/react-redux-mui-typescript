import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import commonsEN from "./locales/en/commons.json";
import translationEN from "./locales/en/translation.json";

export const defaultNS = "main";

export const resources = {
  en: {
    main: translationEN,
    commons: commonsEN,
  },
} as const;

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    ns: ["main", "commons"],
    defaultNS,
    resources,

    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    returnObjects: true,
  });

export default i18n;
