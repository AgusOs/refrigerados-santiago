import React from 'react'
import styles from './Pages.module.css';
import { Banner } from '../atoms/banner/Banner';
import { Slide } from '@mui/material';

export const ComoComprarPage = () => {
  return (
    <div className={styles.container}>
      <Banner img={'/assets/images/6.jpg'} variant={"blp"}/>
      <Slide direction="up" in={true} timeout={500}>
        <div className={styles.cardsRow}>
          <div className={styles.card}>
            <img src="/assets/images/1.png" alt="img" />
          </div>
          <div className={styles.card}>
            <img src="/assets/images/2.png" alt="img" />
          </div>
          <div className={styles.card}>
            <img src="/assets/images/3.png" alt="img" />
          </div>
          <div className={styles.card}>
            <img src="/assets/images/4.png" alt="img" />
          </div>
        </div>
      </Slide>
      <Banner img={'/assets/images/comprar-1.jpg'} variant={"como-comprar"}/>
      <Banner img={'/assets/images/comprar-2.jpg'} variant={"como-comprar"}/>
      <Banner img={'/assets/images/comprar-3.jpg'} variant={"como-comprar"}/>
    </div>
  )
}
