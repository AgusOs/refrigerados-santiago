import React from 'react'
import styles from './Ofertas.module.css'
import { Carousel } from '../carousel/Carousel'

export const Ofertas = () => {
  return (
    <div className={styles.ofertasContainer}>
      <img className={styles.ofertasSign} src='/assets/images/ofertas-sign.webp' alt='ofertas-sign'/>
      <Carousel/>
    </div>
  )
}
