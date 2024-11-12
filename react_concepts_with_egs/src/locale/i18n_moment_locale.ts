// npm install moment i18next react-i18next 
import i18n from 'i18next';
import moment from 'moment';
import 'moment/locale/en-gb';
import 'moment/locale/fr';


// Language code for moment locale keys
const languageCodes: Record<string, string> = {
	en_US: 'en-gb',
	es_FR: 'fr',
};


// Function to set moment locale based on chosenLang
const setMomentLocale = (chosenLang: string = languageCodes.en_US): void => {
	moment.locale(languageCodes[chosenLang]);
};


// Function to format dates using moment
const formatMomentDate = (date: moment.MomentInput, format: string): string => {
	return moment(date).format(format);
};


export { formatMomentDate, i18n, setMomentLocale };

