import React from 'react'
import styles from './Pages.module.css';
import { Banner } from '../atoms/banner/Banner';

export const ComoComprarPage = () => {
  return (
    <div className={styles.container}>
      <Banner img={'src/assets/images/6.jpg'}/>
      <Banner img={'src/assets/images/comprar-1.jpg'}/>
      <Banner img={'src/assets/images/comprar-2.jpg'}/>
      <Banner img={'src/assets/images/comprar-3.jpg'}/>
    </div>
  )
}
