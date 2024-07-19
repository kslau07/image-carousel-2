// index.js

import './style.css';

const track = document.querySelector('.carousel__track');
const slides = [...track.children];

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlideWidth = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
};
slides.forEach(setSlideWidth);

const buttonLeft = document.querySelector('.carousel__button--left');
const buttonRight = document.querySelector('.carousel__button--right');

// Move top image left by 100px when we press left

buttonRight.addEventListener('click', () => {
  const currentSlide = track.querySelector('[data-current-slide]');
  const currentIndex = slides.indexOf(currentSlide);
  const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  const nextSlide = slides[nextIndex];

  track.style.left = `-${slideWidth * nextIndex}px`;
  nextSlide.dataset.currentSlide = true;
  delete currentSlide.dataset.currentSlide;
});

// Line up images side by side on the x-axis
// When we press right, shift all images left by x amount
// When we press left, shift all images right by x amount
