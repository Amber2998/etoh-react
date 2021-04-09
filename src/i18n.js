import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import homeNL from './locales/nl/home.json';
import aboutNL from './locales/nl/about.json';
import productsNL from './locales/nl/products.json';
import ordersNL from './locales/nl/orders.json';
import contactNL from './locales/nl/contact.json';
import footerNL from './locales/nl/footer.json';
import navbarNL from './locales/nl/navbar.json';
import orderFormNL from './locales/nl/orderform.json';
import errorMessagesNL from './locales/nl/errorMessages.json';

import homeEN from './locales/en/home.json';
import aboutEN from './locales/en/about.json';
import productsEN from './locales/en/products.json';
import ordersEN from './locales/en/orders.json';
import contactEN from './locales/en/contact.json';
import footerEN from './locales/en/footer.json';
import navbarEN from './locales/en/navbar.json';
import orderFormEN from './locales/en/orderform.json';
import errorMessagesEN from './locales/en/errorMessages.json';

// the translations
const resources = {
	nl: {
		home: homeNL,
		about: aboutNL,
		products: productsNL,
		orders: ordersNL,
		contact: contactNL,
		footer: footerNL,
		navbar: navbarNL,
		orderform: orderFormNL,
		errormessages: errorMessagesNL
	},
	en: {
		home: homeEN,
		about: aboutEN,
		products: productsEN,
		orders: ordersEN,
		contact: contactEN,
		footer: footerEN,
		navbar: navbarEN,
		orderform: orderFormEN,
		errormessages: errorMessagesEN
	}
};

i18n
	.use(detector)
	.use(reactI18nextModule) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "nl",

	nsSeparator: false,	
    keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;
