var swiper = new Swiper('.mySwiperProducts', {
  slidesPerView: 1,
  slidesPerView: 1,
  spaceBetween: 8,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView:3,
      spaceBetween: 8,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});

  var swiper = new Swiper(".reviewSwiper", {
      slidesPerView: 1,
     spaceBetween: 8,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
          

    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
    });