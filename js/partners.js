import refs from "./references.js"
// console.log(refs);

const { partners } = refs
// console.log(partners);

import { partnersData } from "../database/data.js";
// console.log(partnersData);

const {title, description} = partnersData

const partnersTitle = document.createElement(`h2`)
// console.log(partnersTitle)

partnersTitle.textContent = title
partnersTitle.classList.add(`partners__title`)
// console.log(partnersTitle);

const partnersText = document.createElement(`p`)

partnersText.textContent = description
partnersText.classList.add(`partners__text`)
// console.log(partnersText);

partners.append(partnersTitle, partnersText)

import { partnersLinks } from "../database/data.js";

const partnersLinksMarkup = partnersLinks.map(({ label, path }) =>
 `<li class="partners__item"><a href="${path}" class="partners__link">${label}</a></li>`
).join('')

const partnersList = `<ul class="partners__list">${partnersLinksMarkup}</ul>`
partners.insertAdjacentHTML('beforeend', partnersList)