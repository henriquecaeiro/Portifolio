import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import pt from "./pt";

const STORAGE_KEY = "portfolio_lang";

const storedLanguage =
  typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  lng: storedLanguage || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const persistLanguage = (language) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, language);
  }
};

export default i18n;
