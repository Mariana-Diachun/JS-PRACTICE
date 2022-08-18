import { en } from "./en.js"
import { uk } from "./uk.js"
import { de } from "./de.js"

console.log(window);

const availableLangs = ["uk", "en", "de"];
const locales = {
    uk,
    en,
    de,
}

function getLang() {
    if (availableLangs.includes(window.navigator.language)) {
        return window.navigator.language;
    }
    return "uk";
}
const lang = getLang();
console.log("lang:", lang);

const currentLocales = locales[lang];
console.log("currentLocales", currentLocales);

export function localize(key) {
    return currentLocales[key] || key;
}


