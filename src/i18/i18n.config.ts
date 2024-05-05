import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { cs, en } from "./locales";

const resources = {
  cs: {
    translation: cs,
  },
  en: {
    translation: en,
  },
};

i18next.use(initReactI18next).init({
  // debug: true,
  // interpolation: { escapeValue: false },
  lng: "cs",
  fallbackLng: "cs",
  compatibilityJSON: "v3",
  resources,
});

export default i18next;
