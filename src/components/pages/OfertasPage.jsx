import React from 'react';
import styles from './Pages.module.css';
import { Banner } from '../atoms/banner/Banner';
import { Ofertas } from '../atoms/ofertas/Ofertas';

export const OfertasPage = () => {
  return (
      <div className={styles.container}>
        <Banner img={'/assets/images/bannerv2.jpg'}/>
        <Ofertas/>
        <Banner img={'/assets/images/banner-bdlp.jpg'}/>
      </div>
    )
}
