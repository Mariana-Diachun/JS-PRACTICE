console.log(window);

const availableLangs = ["uk", "en", "de"];
const locales = {
    uk: {
        marketplace: "Торгівельний майданчик",
        artists: "Артисти",
        contact: "Контакти",
    },
    en: {
        marketplace: "Marketplace",
        artists: "Artists",
        contact: "Contact",
    },
    de: {
        marketplace: "Marktplatz",
        artists: "Künstler",
        contact: "Kontakte",
    },
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


