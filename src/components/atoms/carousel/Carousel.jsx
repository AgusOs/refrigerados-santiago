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

  const ofertas = [
    { path: '/assets/ofertas/1.png', title: 'QUESO CREMOSO DON FELIX x Kg'},
    { path: '/assets/ofertas/2.png', title: 'MEDALLONES DE POLLO TRES ARROYOS'},
    { path: '/assets/ofertas/3.png', title: 'YOGURT CON CEREALES MILKAUT'},
    { path: '/assets/ofertas/4.png', title: 'YOGURT BEBIBLE MILKAUT'},
    { path: '/assets/ofertas/5.png', title: 'YERBA AMANDA x 1Kg'},
    { path: '/assets/ofertas/6.png', title: 'BROWNIE CON CHIPS DE CHOCOLATE'},
    { path: '/assets/ofertas/8.png', title: 'LAVANDINA EN GEL HÉROE'},
    { path: '/assets/ofertas/7.webp', title: 'AZÚCAR LEDESMA x 1Kg'},
  ];
  
  return (
    <Swiper {...config} className={style.swiper}>
      {ofertas.map((oferta, index) => (
      <SwiperSlide key={index} className={style.swiperSlide}>
        <div className={style.title}>
          <p>{oferta.title}</p>
        </div>
        <img src={oferta.path} alt={`oferta${index + 1}`} />
      </SwiperSlide>
      ))};
      {isDesktop && (
        <>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </>
      )}
    </Swiper>
  );
}
