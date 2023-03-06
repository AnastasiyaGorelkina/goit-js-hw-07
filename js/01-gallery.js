import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryCardMarkup = createGalleryCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCardMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryCardMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>`;
    }).join('');

};

function onGalleryContainerClick(evt) {
evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    const bigImageUrl = evt.target.dataset.source;
    console.log(bigImageUrl);

    const instance = basicLightbox.create(`
    <img src="${bigImageUrl}" width="1400" height="900">
`);

    instance.show();

    window.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        };
    });
};


