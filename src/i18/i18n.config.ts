import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { cs, en } from "./locales";

const resources = {
  cs: {
    translation: cs,
  },
  en: {
    translation: en,
  },
};

const initI18n = async () => {
  const savedLanguage = (await AsyncStorage.getItem("language")) || "cs";
  await i18next.use(initReactI18next).init({
    // debug: true,
    // interpolation: { escapeValue: false },
    lng: savedLanguage,
    fallbackLng: "cs",
    compatibilityJSON: "v3",
    resources,
  });
};

export default initI18n;
