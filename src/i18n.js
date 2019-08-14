import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import English from './locales/en/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: English
            }
        },
        fallbackLng: "en",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;