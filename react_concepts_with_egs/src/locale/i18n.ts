import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './langWords/en_US/translation.json';
import translationFR from './langWords/fr_FR/translation.json';
import { defaultLangCode, languageCode } from '../assets/envVariables';

const resources = {
	en_US: { translation: translationEN },
	fr_FR: { translation: translationFR },
};

i18n
	.use(initReactI18next)
	.init({
		resources: resources,
		lng: localStorage.getItem(languageCode) || defaultLangCode,
		interpolation: { escapeValue: false }, // React already does escaping
	});

export default i18n;