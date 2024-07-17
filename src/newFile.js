import { nextButton, track } from '.';

// When I click left, move slides to the left
// When I click right, move slides to the right
nextButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide'); // NOTE: We do not use "document" here, we are accesing a dom element directly and can lookup a child element.
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;
  // move to the next slide
  track.style.transform = 'translateX(' + amountToMove + ')';
});
