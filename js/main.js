$(document).ready(function () {
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
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function(){
    console.log("Клик по кнопке меню")
    document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
  })
  var modalButton = $('[data-toggle=modal]');
  var modalClose = $(['data-toggle=modal__close']);

  modalButton.on('click', openModal);
  modalClose.on('click', closeModal);
  function openModal(){
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  };
  function closeModal(){
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };

});