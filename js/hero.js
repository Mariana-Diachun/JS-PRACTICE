import refs from "./references.js"
console.log(refs);

const { hero } = refs;
console.log(hero);

import { heroData } from "../database/data.js"
console.log(heroData);

const { title, description } = heroData;
console.log(title);

const heroTitle = document.createElement(`h1`)
// console.log(heroTitle);

heroTitle.textContent = title;
heroTitle.classList.add(`hero__title`)
console.log(heroTitle);

const heroText = document.createElement(`p`)

heroText.textContent = description;
heroText.classList.add(`hero__text`)
console.log(heroText);

// hero.insertAdjacentElement(`afterbegin`, heroTitle);
// hero.insertAdjacentElement(`beforeend`, heroText);


hero.append(heroTitle, heroText); // beforeend

// const cloneTitle = heroTitle.cloneNode(true);
