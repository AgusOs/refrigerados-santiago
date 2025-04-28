import { Swiper, SwiperSlide } from 'swiper/react';
import { carouselConfig } from './carouselConfig';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from './Carousel.module.css';

export const Carousel = () => {
  return (
    <Swiper {...carouselConfig} className={style.swiper}>
      <SwiperSlide className={style.swiperSlide}>
        <img src="src\assets\ofertas\3.png" alt="oferta1" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <img src="src\assets\ofertas\4.png" alt="oferta2" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <img src="src\assets\ofertas\5.png" alt="oferta3" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <img src="src\assets\ofertas\6.png" alt="oferta4" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <img src="src\assets\ofertas\7.png" alt="oferta5" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <img src="src\assets\ofertas\8.png" alt="oferta6" />
      </SwiperSlide>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
}
