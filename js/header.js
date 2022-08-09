import myRefs from './references.js';
// console.log('myRefs:', myRefs);
const { header, navigation } = myRefs;
// console.log(header);

import { navLinks } from '../database/data.js';
// console.log('navLinks:', navLinks);

const linkMarkup = navLinks.map(({ label, path }) =>
    `<li><a href="${path}">${label}</a></li>`
).join('');

// console.log(linkMarkup);

const navList = `<ul class="nav__list">${linkMarkup}</ul>`;
// console.log(navList);

navigation.insertAdjacentHTML(`afterbegin`, navList);

const headerBtn = document.createElement(`button`);

headerBtn.textContent = "Buy Template";
headerBtn.type = "button";
headerBtn.classList.add("header__button");
// console.log(headerBtn);

const headerContainer = document.querySelector('.header__container');

headerContainer.insertAdjacentElement(`beforeend`, headerBtn);
headerBtn.addEventListener('click', (evt) => {
    console.log('click', evt);
});
navigation.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log('nav', evt);
}
);
