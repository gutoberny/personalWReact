import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en/translation.json";
import translationBR from "./br/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  br: {
    translation: translationBR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Idioma padrão
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React já protege contra XSS
  },
});

export default i18n;
