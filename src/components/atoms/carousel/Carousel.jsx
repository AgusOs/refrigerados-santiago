import { Swiper, SwiperSlide } from 'swiper/react';
import { carouselConfig } from './carouselConfig';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from './Carousel.module.css';
import { useMediaQuery } from '@mui/material';

export const Carousel = () => {
  const isDesktop = useMediaQuery('(min-width: 769px)');

  const config = {
    ...carouselConfig,
    pagination: isDesktop? {clickable:true, dynamicBullets:true} : false,
    navigation: isDesktop? {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'} : false,
    
  };
  
  return (
    <Swiper {...config} className={style.swiper}>
      <SwiperSlide className={style.swiperSlide}>
        <div className={style.title}>
          <p>JABON PARA ROPA HEROE 800ml</p>
        </div>
        <img src="/assets/ofertas/1.png" alt="oferta1" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <div className={style.title}>
          <p>YOGURT BEBIBLE MILKAUT</p>
        </div>
        <img src="/assets/ofertas/2.png" alt="oferta2" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <div className={style.title}>
          <p>LECHE LARGA VIDA FRANSAFE</p>
        </div>
        <img src="/assets/ofertas/3.png" alt="oferta3" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <div className={style.title}>
          <p>FIAMBRE DE POLLO DON ALEJANDRO</p>
        </div>
        <img src="/assets/ofertas/4.png" alt="oferta4" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <div className={style.title}>
          <p>QUESO UNTABLE MILKAUAT 285gr</p>
        </div>
        <img src="/assets/ofertas/5.png" alt="oferta5" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <div className={style.title}>
          <p>AZÚCAR LEDESMA 1Kg</p>
        </div>
        <img src="/assets/ofertas/7.webp" alt="oferta7" />
      </SwiperSlide>
      {isDesktop && (
        <>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </>
      )}
    </Swiper>
  );
}
