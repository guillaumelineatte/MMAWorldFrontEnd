'use strict';

/**
 * Add event listener
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i =  0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/**
 * Navbar toggle mobile
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * Header
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if(window.scrollY > 100) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
})


/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sliderContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sliderContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

   const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sliderContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sliderContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

  const startSliderAutoPlay = function () {
    setInterval(() => {
        slideNext();
    }, 10000);
  }

  startSliderAutoPlay();

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }

/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }


$.ajax({
  url: "http://195.154.118.169/guillaume/projetMMA/start.php?c=ufc&t=ufcData",
  context: document.body
}).done(function(data) {
  var ufcData = JSON.parse(data);
  var screenWidth = window.innerWidth;
  var delay = 200;
  var delayIncrement = screenWidth < 992 ? 0 : 200;
  ufcData.forEach(function(ufc) {
    var nouveauUfc = `
      <div class="col-md-4" data-aos="fade-left" data-aos-delay="${delay}">
        <div class="ufc p-4 bg-base shadow-effect">
          <div class="iconbox">
            <i class="${ufc.image}"></i>
          </div>
          <h1 class="mt-4 mb-2">${ufc.title}</h1>
          <h4>${ufc.title}</h4>
          <p>${ufc.description}</p>
          <a  class="link-inter link-custom" data-bs-toggle="modal" data-bs-target="#${ufc.title}Modal" style="cursor: pointer;">En savoir plus</a>
        </div>
      </div>
      <div class="modal fade" id="${ufc.title}Modal" tabindex="-1" aria-labelledby="${ufc.title}ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-modal">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">${ufc.title}</h1>
              <button type="button" class="btn-close text-brand" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div class="modal-body">
              ${ufc.description}
            </div>
          </div>
        </div>
      </div>`;
    $(".row.gy-4.ufc-container").append(nouveauUfc);
    delay += delayIncrement;
  });
});
