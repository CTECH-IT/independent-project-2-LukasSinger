import { slidesData } from "../data/slidesData.js";

const SLIDES_CONTAINER_SELECTOR = '[data-slides-role="container"]';

const slidesContainer = document.querySelector(SLIDES_CONTAINER_SELECTOR);

function populateSlidesContainer() {
  for (slide of slidesData) {
    const img = document.createElement("img");
    img.classList.add("slide-image");
    img.setAttribute("data-slides-role", "image");
    slide.element = document.createElement("div");
    slide.element.appendChild();
    slidesContainer.appendChild(slide.element);
  }
}
