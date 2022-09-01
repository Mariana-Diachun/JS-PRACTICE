import { en } from "./en.js"
import { uk } from "./uk.js"
import { de } from "./de.js"
import { pl } from "./pl.js"

const { navigator: { language, languages } } = window;

const locales = { uk, en, de, pl }
const availableLangs = Object.keys(locales);
console.log(availableLangs);

const isBrowserLang = availableLangs.find((lang) => language.includes(lang));
const isLangFromBrowserList = availableLangs.find((lang) =>  languages.includes(lang));

function getLang() {
    if (isBrowserLang) return isBrowserLang;
    if (isLangFromBrowserList) return isLangFromBrowserList;
    return "uk";
}
const lang = getLang();

const currentLocales = locales[lang];

export function localize(key) {
    return currentLocales[key] || key;
}

