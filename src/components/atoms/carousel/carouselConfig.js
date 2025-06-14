import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const carouselConfig = {
  modules: [Autoplay, Pagination, Navigation],
  effect: 'fade',
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 30,
  grabCursor: true,

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    601: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1231: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
};