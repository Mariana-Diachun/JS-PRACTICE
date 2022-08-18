import refs from "./references.js";
console.log(refs);

const { viewing } = refs;
console.log(viewing);

import { viewingData } from "../database/data.js";
console.log(viewingData);

const { text, video } = viewingData;

const viewingText = document.createElement(`p`);
viewingText.textContent = text;
viewingText.classList.add(`viewing__text`);
console.log(viewingText);

const viewingVideo = document.createElement(`a`);
viewingVideo.video = video;
viewingVideo.classList.add(`viewing__video`);
viewingVideo.href = video;
console.log(viewingVideo);

const viewingBtn = document.createElement(`button`);
viewingBtn.textContent = "Watch video";
viewingBtn.type = "button";
viewingBtn.classList.add(`viewing__button`);
console.log(viewingBtn);

// const viewingList = document.createElement("ul");
// viewingList.classList.add(`viewing__list`);

import { viewingLinks } from "../database/data.js";
// console.log('viewingLinks:', viewingLinks);

const linkMarkup = viewingLinks
  .map(({ label, area }) => `<li>${label} ${area}</li>`)
  .join("");

console.log(linkMarkup);

const viewingList = `<ul class="viewing__list">${linkMarkup}</ul>`;

viewing.append(viewingBtn, viewingVideo, viewingText); // beforeend
viewing.insertAdjacentHTML("beforeend", viewingList);

viewingVideo.addEventListener("click", onClickVideo);
viewingVideo.append(viewingBtn);

function onClickVideo(evt) {
  console.log(evt);
}
