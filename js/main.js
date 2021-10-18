const flowersSlider = new Swiper(".flowers-slider", {
  loop: true,
  slidesPerView: 6,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // настройки адаптива слайдера
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 6,
      spaceBetween: 35,
    },
  },
});

const reviewsSlider = new Swiper(".reviews-slider", {
  loop: true,
  navigation: {
    nextEl: ".reviews-button-next",
    prevEl: ".reviews-button-prev",
  },
});
