import React from 'react';
import styles from './Pages.module.css';
import { Banner } from '../atoms/banner/Banner';
import { Ofertas } from '../atoms/ofertas/Ofertas';

export const OfertasPage = () => {
  return (
      <div className={styles.container}>
        <Banner img={'src/assets/images/bannerv2.jpg'}/>
        <Ofertas/>
        <Banner img={'src/assets/images/18.jpg'}/>
      </div>
    )
}
