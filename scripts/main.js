import { slidesData } from "../data/slidesData.js";

const SLIDES_CONTAINER_SELECTOR = '[data-slides-role="container"]';
const DETAIL_IMAGE_ATTRIBUTE = "detail-image";
const DETAIL_IMAGE_SELECTOR = `[${DETAIL_IMAGE_ATTRIBUTE}="true"]`;

const slidesContainer = document.querySelector(SLIDES_CONTAINER_SELECTOR);

function onSlideClick(e) {
  const imgContainer = e.target;
  if (imgContainer.getAttribute(DETAIL_IMAGE_ATTRIBUTE) != "true") {
    const oldDetail = document.querySelector(DETAIL_IMAGE_SELECTOR);
    oldDetail.setAttribute(DETAIL_IMAGE_ATTRIBUTE, "false");
    imgContainer.classList.add("detail");
    imgContainer.setAttribute(DETAIL_IMAGE_ATTRIBUTE, "true");
  }
}

function populateSlidesContainer() {
  for (slide of slidesData) {
    const img = document.createElement("img");
    img.classList.add("slide-image");
    img.setAttribute("data-slides-role", "image");
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("slide-image-container");
    imgContainer.setAttribute("data-slides-role", "image-container");
    imgContainer.addEventListener("click", onSlideClick);
    imgContainer.appendChild(img);
    slidesContainer.appendChild(imgContainer);
  }
}

populateSlidesContainer();
