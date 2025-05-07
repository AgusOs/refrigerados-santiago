import React from 'react';
import style from './Pages.module.css';
import { Banner } from '../atoms/banner/Banner';
import { Ofertas } from '../atoms/ofertas/Ofertas';
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
      disableOnInteraction: false,
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
            <Banner img={"/assets/images/inicio-1.jpg"} alt="oferta1" variant={"inicio-1"}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <Banner img={"/assets/images/inicio-2.jpg"} alt="oferta2" variant={"inicio-2"}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <Banner img={"/assets/images/inicio-3.jpg"} alt="oferta2" variant={"inicio-3"}/>
          </SwiperSlide>
        </Swiper>
        {/* <Banner img={'/assets/images/bannerv2.jpg'}/> */}
        <Ofertas/>
        <Banner img={'/assets/images/banner-bdlp.jpg'} variant={"blp"}/>
      </div>
    )
}
