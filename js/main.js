const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
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