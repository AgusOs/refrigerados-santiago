import React from 'react'
import styles from './Ofertas.module.css'

export const Ofertas = () => {
  return (
    <div className={styles.ofertasContainer}>
      <img className={styles.ofertasSign} src='src/assets/images/ofertas-sign.png' alt='ofertas-sign'/>
      <p>Carousel</p>
    </div>
  )
}
