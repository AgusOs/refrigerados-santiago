import React from 'react'
import styles from './Pages.module.css';
import { Banner } from '../atoms/banner/Banner';

export const ComoComprarPage = () => {
  return (
    <div className={styles.container}>
      <Banner img={'/assets/images/6.jpg'} variant={"blp"}/>
      <Banner img={'/assets/images/comprar-1.jpg'}/>
      <Banner img={'/assets/images/comprar-2.jpg'}/>
      <Banner img={'/assets/images/comprar-3.jpg'}/>
    </div>
  )
}
