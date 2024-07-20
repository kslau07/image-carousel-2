// index.js

import './style.css';

const track = document.querySelector('.carousel__track');
const slides = [...track.children];
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlideWidth = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
};
slides.forEach(setSlideWidth);

const updateDotColors = function (newSlide) {
  const currentSlide = track.querySelector('[data-current-slide]');
  const currentIndex = slides.indexOf(currentSlide);
  dots[currentIndex].style.background = '#cccccc';
  const targetIndex = slides.indexOf(newSlide);
  dots[targetIndex].style.background = '#222222';
};

const moveToSlide = (targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  const currentSlide = track.querySelector('[data-current-slide]');
  updateDotColors(targetSlide);
  targetSlide.dataset.currentSlide = 'true';
  delete currentSlide.dataset.currentSlide;
};

const buttonLeft = document.querySelector('.carousel__button--left');
const buttonRight = document.querySelector('.carousel__button--right');

const viewPrevSlide = function () {
  const currentSlide = track.querySelector('[data-current-slide]');
  const currentIndex = slides.indexOf(currentSlide);
  const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  const prevSlide = slides[prevIndex];
  moveToSlide(prevSlide);
};

buttonLeft.addEventListener('click', viewPrevSlide);

const viewNextSlide = function () {
  const currentSlide = track.querySelector('[data-current-slide]');
  const currentIndex = slides.indexOf(currentSlide);
  const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  const nextSlide = slides[nextIndex];
  moveToSlide(nextSlide);
};

buttonRight.addEventListener('click', viewNextSlide);

const nav = document.querySelector('.carousel__nav');
const dots = [...nav.children];

nav.addEventListener('click', (e) => {
  const targetDot = e.target.closest('button');

  if (!targetDot) return;

  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(targetSlide);
});

const currentSlide = document.querySelector('[data-current-slide]');
updateDotColors(currentSlide);
