import myReferences from "./references.js";
// console.log('my refs:', myReferences);
const { gallery } = myReferences;
// console.log('gallery', gallery);
import { galleryItems } from "../database/data.js";
console.log('galleryItems', galleryItems);

function createImgGallery (galleryItems) {
    return galleryItems.map(({ url, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${url}">
            <img
                class="gallery__image"
                src="${url}"
                alt="${description}"
            />
        </a>
    </div>`
    }).join('');
};

const imgMarkup = createImgGallery(galleryItems);

gallery.insertAdjacentHTML('afterbegin', imgMarkup);

