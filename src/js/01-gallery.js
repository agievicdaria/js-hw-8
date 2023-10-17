import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems
  .map((element) => {
    return `<li class="gallery__item">
 <a class="gallery__link" href="${element.original}">
    <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
 </a>
</li>`;
  })
  .join("");

galleryRef.insertAdjacentHTML("beforeend", markup);

new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
  });
