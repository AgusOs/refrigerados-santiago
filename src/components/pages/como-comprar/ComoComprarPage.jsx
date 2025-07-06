import React from 'react'
import styles from './ComoComprar.module.css';
import { Banner } from '../../atoms/banner/Banner';
import { Slide } from '@mui/material';

export const ComoComprarPage = () => {
  return (
    <div className={styles.container}>
        <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
          <div className={styles.portada}>
            <img src="\assets\images\comprar-img.jpg" alt="img"/>
            <img src="\assets\images\comprar-sign.webp" alt="sign"/>
          </div>
        </Slide>
      <div className={styles.cardsRow}>
        <div className={styles.card}>
          <img src="/assets/images/1.webp" alt="Carrito de compras" className={styles.cardImage} />
          <p className={styles.cardTitle}>
            Consumidor final
          </p>
          <p className={styles.cardText}>
            Clientes que realizan compras para su propio consumo.
          </p>
        </div>
        <div className={styles.card}>
          <img src="/assets/images/2.webp" alt="img"  className={styles.cardImage}/>
          <p className={styles.cardTitle}>
            Profesionales gastronómicos
          </p>
          <p className={styles.cardText}>
            Restaurantes, hoteles, cafeterias, catering, comedores y más.
          </p>
        </div>
        <div className={styles.card}>
          <img src="/assets/images/3.webp" alt="img"  className={styles.cardImage}/>
          <p className={styles.cardTitle}>
            Comerciantes
          </p>
          <p className={styles.cardText}>
            Supermercados minoristas, almacenes, comercios.
          </p>
        </div>
        <div className={styles.card}>
          <img src="/assets/images/4.webp" alt="img"  className={styles.cardImage}/>
          <p className={styles.cardTitle}>
            Venta a instituciones
          </p>
          <p className={styles.cardText}>
            Pedidos personalizados para intituciones particulares.
          </p>
        </div>
      </div>
      <div className={styles.textos}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src="/assets/images/icono1.webp" alt="icon" className={styles.icon} />
          <p className={styles.text}>
            PRODUCTOS FRESCOS Y DE CALIDAD
          </p>
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <p className={styles.text}>
            OFERTAS Y PROMOCIONES
          </p>
          <img src="/assets/images/icono2.webp" alt="icon" className={styles.icon} />
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src="/assets/images/icono3.webp" alt="icon" className={styles.icon} />
          <p className={styles.text}>
            DISTRIBUCION Y LOGISTICA
          </p>
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <p className={styles.text}>
            OPCIONES DE COMPRA FLEXIBLES
          </p>
          <img src="/assets/images/icono4.webp" alt="icon" className={styles.icon} />
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src="/assets/images/icono5.webp" alt="icon" className={styles.icon} />
          <p className={styles.text}>
            PRECIOS COMPETITIVOS
          </p>
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <p className={styles.text}>
            OPCIONES DE PAGO
          </p>
          <img src="/assets/images/icono6.webp" alt="icon" className={styles.icon} />
        </div>
      </div>
    </div>
  )
}
