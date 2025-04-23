import React from 'react';
import styles from './Pages.module.css';
import { Banner } from '../banner/Banner';
import { Ofertas } from '../ofertas/Ofertas';

export const OfertasPage = () => {
  return (
      <div className={styles.container}>
        <Banner img={'src/assets/images/8.jpg'}/>
        <Ofertas/>
        <Banner img={'src/assets/images/18.jpg'}/>
      </div>
    )
}
