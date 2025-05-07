import React from 'react'
import styles from './Pages.module.css';
import { Banner } from '../atoms/banner/Banner';
import { Typography } from '@mui/material';

export const ComoComprarPage = () => {
  return (
    <div className={styles.container}>
      <Banner img={'/assets/images/6.jpg'} variant={"blp"}/>
      <div className={styles.cardsRow}>
        <div className={styles.card}>
          <img src="/assets/images/1.png" alt="Carrito de compras" className={styles.cardImage} />
          <p className={styles.cardTitle}>
            Consumidor final
          </p>
          <p className={styles.cardText}>
            Clientes que realizan compras para su propio consumo.
          </p>
        </div>
        <div className={styles.card}>
          <img src="/assets/images/2.png" alt="img"  className={styles.cardImage}/>
          <p className={styles.cardTitle}>
            Profesionales gastronómicos
          </p>
          <p className={styles.cardText}>
            Restaurantes, hoteles, cafeterias, catering, comedores y más.
          </p>
        </div>
        <div className={styles.card}>
          <img src="/assets/images/3.png" alt="img"  className={styles.cardImage}/>
          <p className={styles.cardTitle}>
            Comerciantes
          </p>
          <p className={styles.cardText}>
            Supermercados minoristas, almacenes, comercios.
          </p>
        </div>
        <div className={styles.card}>
          <img src="/assets/images/4.png" alt="img"  className={styles.cardImage}/>
          <p className={styles.cardTitle}>
            Venta a instituciones
          </p>
          <p className={styles.cardText}>
            Pedidos personalizados para intituciones particulares.
          </p>
        </div>
      </div>
      <Banner img={'/assets/images/comprar-1.jpg'} variant={"como-comprar"}/>
      <Banner img={'/assets/images/comprar-2.jpg'} variant={"como-comprar"}/>
      <Banner img={'/assets/images/comprar-3.jpg'} variant={"como-comprar"}/>
    </div>
  )
}
