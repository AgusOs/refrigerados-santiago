import React from 'react';
import style from './OfertasPage.module.css';
import { Banner } from '../../atoms/banner/Banner';
import { Ofertas } from '../../atoms/ofertas/Ofertas';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const OfertasPage = () => {

  const config = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1200,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    loop: true,
    spaceBetween: 0,
    grabCursor: true,  
    pagination: false,
    navigation: false,
    slidesPerView: 1,
  };

  return (
      <div className={style.container}>
        <Swiper {...config} className={style.swiper}>
          <SwiperSlide className={style.swiperSlide}>
            <div>
              <img src="\assets\images\portada-sign1.png" alt="sign" />
              <img src="\assets\images\carrito-portada.png" alt="sign" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>            
            <div>
              <img src="\assets\images\torta-portada.png" alt="sign" />
              <img src="\assets\images\ledesma-portada.png" alt="sign" />
            </div>
          </SwiperSlide>
        </Swiper>
        <Ofertas/>
        <Banner img={'/assets/images/banner-bdlp.jpg'} variant={"blp"}/>
      </div>
    )
}
