import React from 'react'
import styles from './Pages.module.css';
import { Banner } from '../banner/Banner';
import { Mapa } from '../mapa/Mapa';

export const SucursalesPage = () => {
  return (
    <div className={styles.container}>
      <Banner img={'src/assets/images/11.jpg'}/>
      <Mapa/>
    </div>
  )
}