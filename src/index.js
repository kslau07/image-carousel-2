// index.js

import './style.css';

const track = document.querySelector('.carousel__track');
const slides = [...track.children];
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlideWidth = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
};
slides.forEach(setSlideWidth);

const nav = document.querySelector('.carousel__nav');
const dots = [...nav.children];

const updateDotColors = function (oldSlideIndex, newSlideIndex) {
  dots[oldSlideIndex].style.background = '#cccccc';
  dots[newSlideIndex].style.background = '#222222';
};

const setCurrentSlide = (newSlideIndex) => {
  track.style.left = `-${slideWidth * newSlideIndex}px`;
  const oldSlide = track.querySelector('[data-current-slide]');
  const oldSlideIndex = slides.indexOf(oldSlide);
  updateDotColors(oldSlideIndex, newSlideIndex);
  slides[newSlideIndex].dataset.currentSlide = 'true';
  delete oldSlide.dataset.currentSlide;
};

const buttonLeft = document.querySelector('.carousel__button--left');
const buttonRight = document.querySelector('.carousel__button--right');

const viewNextSlide = function () {
  const currentSlide = track.querySelector('[data-current-slide]');
  const currentIndex = slides.indexOf(currentSlide);
  const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  setCurrentSlide(prevIndex);
};

buttonLeft.addEventListener('click', viewNextSlide);

const viewPrevSlide = function () {
  const currentSlide = track.querySelector('[data-current-slide]');
  const currentIndex = slides.indexOf(currentSlide);
  const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  setCurrentSlide(nextIndex);
};

buttonRight.addEventListener('click', viewPrevSlide);

const setDot = function (dot) {
  dot.addEventListener('click', () => {
    const idx = dots.indexOf(dot);
    setCurrentSlide(idx);
  });
};

dots.forEach(setDot);

updateDotColors(1, 0);
