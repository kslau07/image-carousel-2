// index.js

import './style.css';

const track = document.querySelector('.carousel__track');

// const slides = Array.from(track.children); // Good
const slides = [...track.children]; // Best
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav'); // .carousel__nav is a wrapper for the dots
const dots = [...dotsNav.children]; // This is an array of the dots (the dot buttons)

nextButton.addEventListener('click', () => console.log('next!'));
prevButton.addEventListener('click', () => console.log('prev!'));

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

// When I click left, move slides to the left
// When I click right, move slides to the right
nextButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide'); // NOTE: We do not use "document" here, we are accesing a dom element directly and can lookup a child element.
  console.log(currentSlide);
  // move the slide
});
// When I click the nav indicators, move to the corresponding slide
