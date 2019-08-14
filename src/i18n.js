import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import English from './locales/en/translation.json';
import Danish from './locales/dk/translation.json';
import French from './locales/fr/translation.json';
import Arabic from './locales/ar/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: English
            },
            dk: {
                translation: Danish
            },
            fr: {
                translation: French
            },
            ar: {
                translation: Arabic
            }
        },
        fallbackLng: "en",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;