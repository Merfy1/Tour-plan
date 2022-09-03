const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    effect: 'coverflow',
    keyboard: {
        enabled: true,
        onlyInViewport: false,
        pageUpDown: true,
      },
    // autoplay: {
    //   delay: 2000,
    // },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--prev',
    prevEl: '.reviews-slider__button--next',
  },
  effect: 'coverflow',
  keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
  // autoplay: {
  //   delay: 2000,
  // },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});