import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationNL from './locales/nl/translation.json';
import translationEN from './locales/en/translation.json';

// the translations
const resources = {
	nl: {
		translation: translationNL
	},
	en: {
		translation: translationEN
	}
};

i18n
	.use(reactI18nextModule) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "nl",

		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;
