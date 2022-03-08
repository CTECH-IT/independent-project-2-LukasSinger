import { slidesData } from "../data/slidesData.js";

const SLIDES_CONTAINER_SELECTOR = '[data-slides-role="container"]';
const DETAIL_IMAGE_ATTRIBUTE = "detail-image";
const DETAIL_IMAGE_SELECTOR = `[${DETAIL_IMAGE_ATTRIBUTE}="true"]`;

const slidesContainer = document.querySelector(SLIDES_CONTAINER_SELECTOR);

function setAsDetail(element) {
  // Revert the old detail image (if any) to a regular image
  const oldDetail = document.querySelector(DETAIL_IMAGE_SELECTOR);
  if (oldDetail) {
    oldDetail.classList.remove("detail");
    oldDetail.parentElement.classList.remove("detail-container");
    oldDetail.setAttribute(DETAIL_IMAGE_ATTRIBUTE, "false");
  }
  // Convert the specified element to a detail image
  element.classList.add("detail");
  element.parentElement.classList.add("detail-container");
  element.setAttribute(DETAIL_IMAGE_ATTRIBUTE, "true");
}

function onSlideClick() {
  const imgContainer = this;
  if (imgContainer.getAttribute(DETAIL_IMAGE_ATTRIBUTE) != "true") {
    setAsDetail(imgContainer);
  }
}

function populateSlidesContainer() {
  for (let slide of slidesData) {
    // Create the image
    const img = document.createElement("img");
    img.classList.add("slide-image");
    img.setAttribute("src", slide.url);
    // Create the image container and add the image
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("slide-image-container");
    imgContainer.appendChild(img);
    imgContainer.addEventListener("click", onSlideClick);
    // Create the name, subtitle, and description text blocks
    const name = document.createElement("span");
    name.classList.add("slide-name");
    name.textContent = slide.name;
    const subtitle = document.createElement("span");
    subtitle.classList.add("slide-subtitle");
    subtitle.textContent = slide.subtitle;
    const description = document.createElement("span");
    description.classList.add("slide-description");
    description.textContent = slide.description;
    // Create the text + container and add the text elements
    const textDiv = document.createElement("div");
    textDiv.classList.add("slide-text");
    textDiv.appendChild(name);
    textDiv.appendChild(subtitle);
    textDiv.appendChild(description);
    const textContainer = document.createElement("div");
    textContainer.classList.add("slide-text-container");
    textContainer.appendChild(textDiv);
    // Create the containers for both slide elements
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide-content");
    slideDiv.appendChild(imgContainer);
    slideDiv.appendChild(textContainer);
    const slideContainer = document.createElement("div");
    slideContainer.classList.add("slide-container");
    slideContainer.appendChild(slideDiv);
    // Add all of the elements to the page
    slidesContainer.appendChild(slideContainer);

    // Set first image as detail on load
    if (slide == slidesData[0]) setAsDetail(imgContainer);
  }
}

populateSlidesContainer();
