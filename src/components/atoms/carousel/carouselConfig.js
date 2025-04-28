import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const carouselConfig = {
  modules: [Autoplay, Pagination, Navigation],
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 30,
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  pagination: {
    clickable:true,
    dynamicBullets:true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    801: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1231: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};