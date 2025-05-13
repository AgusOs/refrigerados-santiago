import React from 'react'
import styles from './Sucursales.module.css';
import { Banner } from '../../atoms/banner/Banner';
import { Mapa } from '../../atoms/mapa/Mapa';

export const SucursalesPage = () => {
  return (
    <div className={styles.container}>
      <Banner img={'/assets/images/11.jpg'}/>
      <Mapa/>
    </div>
  )
}