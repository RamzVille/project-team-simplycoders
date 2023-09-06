var swiper = new Swiper('.mySwiperProducts', {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  //   centeredSlides: true,
  lazyLoading: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
  },
});
