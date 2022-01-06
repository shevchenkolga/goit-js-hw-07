import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);


function createGalleryMarkup(galleryItems) {
   
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>
`;
    }).join(" ");
}

const captionOptions = {
    captions: true,
    captionSelector: "img",
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
}
let gallery = new SimpleLightbox('.gallery a', captionOptions);
gallery.on('show.simplelightbox', function () {
});
