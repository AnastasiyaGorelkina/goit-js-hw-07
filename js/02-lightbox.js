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
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join('');

};

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    
    return new SimpleLightbox('.gallery a', { caption: true, captionDelay: 250, captionsData: 'alt' });
 
};



