import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick)

function createGalleryMarkup(galleryItems) {
   
    return galleryItems
    .map(({ preview, original, description }) => {
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
</div>
`;
    }).join(" ");
}

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const isGalleryImage = evt.target.classList.contains("gallery__image")
    if (!isGalleryImage) {
        return;
    }
    const selectedImage = evt.target.dataset.source;
    console.log(selectedImage);

    const modal = basicLightbox.create(`
    <div class="modal">
    <img
    class="gallery__image"
     src="${selectedImage}"
     />
     </div>
    `);  
    modal.show()
    window.addEventListener("keydown", onEscPress);
    
    function onEscPress(e) {
        if (e.key === "Escape") {
            modal.close()
        }
    }
}
function onOpenModal() {
    window.addEventListener("keydown", onEscPress); 
    modal.show()
}
function onCloseModal() {
    window.removeEventListener("keydown", onEscPress)
    modal.close()
}
function onEscPress(event) {
    modal.close()
    console.log(event)
    }