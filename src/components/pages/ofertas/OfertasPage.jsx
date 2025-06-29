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
            <div className={style.portada}>
              <img src="\assets\images\empresa-portada1.webp" alt="portada1" />
              <img src="\assets\images\empresa-portada2.webp" alt="portada2" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>            
            <div className={style.portada}>
              <img src="\assets\images\torta-portada.png" alt="sign" />
              <div className={style.ledesma}>
                <img src="\assets\ofertas\5.webp" alt="sign"/>
                <img src="\assets\images\32.png" alt="sign"/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>            
            <div className={style.portada}>
              <img src="\assets\images\villamanaos.webp" alt="sign" />
              <img src="\assets\images\agua-natural.webp" alt="portada2" />
            </div>
          </SwiperSlide>
        </Swiper>
        <Ofertas/>
        <Banner img={'/assets/images/horarios.png'} variant={"blp"}/>
        <Banner img={'/assets/images/banner-blp.png'} variant={"blp"}/>
      </div>
    )
}
