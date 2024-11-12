import useLocalStorage, { writeStorage } from '@rehooks/local-storage';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PiGlobeSimpleLight } from "react-icons/pi";
import { defaultLangCode, languageCode, languageName } from '../../assets/envVariables';
import { codeToLang } from '../../assets/Utlities';
import styles from "./LangSelections.module.css";


// Define the structure of a language object
interface Language {
	code: string;
	name: string;
}
// Define the props for LangSelections component
interface LangSelectionsProps {
	list: Language[];
}
const LangSelections: FC<LangSelectionsProps> = ({ list }) => {
	// const [chosenLangName] = useLocalStorage(languageName, defaultLangName);
	const [chosenLang] = useLocalStorage(languageCode, defaultLangCode);
	const { i18n } = useTranslation();

	// Choose language for app and i18n
	useEffect(() => {
		if (!chosenLang) {
			writeStorage(languageCode, defaultLangCode);
			writeStorage(languageName, defaultLangCode);
			// changeLanguage(lng ?: string, callback ?: Callback): Promise<TFunction>;
			i18n.changeLanguage(defaultLangCode);
			// setMomentLocale(defaultLang);
		} else {
			i18n.changeLanguage(chosenLang);
			// setMomentLocale(chosenLang);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chosenLang, i18n]);

	// Update app language
	const handleSelectLanguage = (lang: Language) => {
		if (lang.code !== i18n.language) {
			i18n.changeLanguage(codeToLang(lang.code));
			writeStorage(languageCode, codeToLang(lang.code));
			writeStorage(languageName, lang.name);
		}
	};

	return (
		<div className={styles.langOptions}>
			<PiGlobeSimpleLight className={`icons`} />
			<div className={styles.langOptionList} >
				{list?.length > 0 ?
					list.map((lang, index) => <div key={index} className={`${styles.lang} ${chosenLang === lang.code ? styles.selected : ""}`} onClick={() => handleSelectLanguage(lang)}>{lang.name}</div>) :
					<h3>---</h3>}
			</div>
		</div>
	)
}
export default LangSelections;