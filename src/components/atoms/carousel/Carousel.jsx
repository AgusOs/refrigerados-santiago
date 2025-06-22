import { Swiper, SwiperSlide } from 'swiper/react';
import { carouselConfig } from './carouselConfig';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from './Carousel.module.css';
import { useMediaQuery } from '@mui/material';

export const Carousel = () => {
  const isDesktop = useMediaQuery('(min-width: 801px)');

  const config = {
    ...carouselConfig,
    pagination: isDesktop? {clickable:true, dynamicBullets:true} : false,
    navigation: isDesktop? {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'} : false,
    
  };
  
  return (
    <Swiper {...config} className={style.swiper}>
      <SwiperSlide className={style.swiperSlide}>
        <div className={style.title}>
          <p>MILKAUT CREMA DOBLE 200cc</p>
        </div>
        <img src="/assets/ofertas/1.webp" alt="oferta1" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <div className={style.title}>
          <p>DULCE DE LECHE MILKAUT 400gr</p>
        </div>
        <img src="/assets/ofertas/2.webp" alt="oferta2" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <div className={style.title}>
          <p>SALCHICHAS FELA x6u</p>
        </div>
        <img src="/assets/ofertas/3.webp" alt="oferta3" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <div className={style.title}>
          <p>VINO TORO CLÁSICO</p>
        </div>
        <img src="/assets/ofertas/4.webp" alt="oferta4" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <div className={style.title}>
          <p>AZÚCAR LEDESMA 1Kg</p>
        </div>
        <img src="/assets/ofertas/5.webp" alt="oferta5" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <div className={style.title}>
          <p>GASEOSA MANAOS 2,25Lts</p>
        </div>
        <img src="/assets/ofertas/6.webp" alt="oferta6" />
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <div className={style.title}>
          <p>DETERGENTE HÉROE 750ml</p>
        </div>
        <img src="/assets/ofertas/7.webp" alt="oferta6" />
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
