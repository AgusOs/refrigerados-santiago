import React from 'react'
import styles from './ComoComprar.module.css';
import { Banner } from '../../atoms/banner/Banner';
import { Slide } from '@mui/material';

export const ComoComprarPage = () => {
  return (
    <div className={styles.container}>
        <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
          <div className={styles.portada}>
            <img src="\assets\images\comprar-img.png" alt="img" className={styles.portadaimg} />
            <img src="\assets\images\comprar-sign.png" alt="sign" className={styles.portadaimg}/>
          </div>
        </Slide>
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
      <div className={styles.textRowContainer}>
        <div className={styles.textRowRight}>
          <img src="/assets/images/icono1.png" alt="icon" className={styles.textRowIcon} />
          <p className={styles.textRowTitle}>
            <strong>PRODUCTOS FRESCOS Y DE CALIDAD</strong>
          </p>
          <br/>
          <p className={styles.textRowText}>
            Nuestros productos son seleccionados para ofrecerte siempre la mejor calidad.<br/>
            Trabajamos con proveedores de confianza para que cada artículo que recibas cumpla con los estándares más altos.
          </p>
        </div>
        <div className={styles.textRowLeft}>
          <p className={styles.textRowTitle}>
            <strong>OFERTAS Y PROMOCIONES</strong>
          </p>
          <img src="/assets/images/icono2.png" alt="icon" className={styles.textRowIcon} />
          <br/>
          <p className={styles.textRowText}>
            Cada semana te traemos descuentos y beneficios especiales para que aproveches los mejosres precios.
          </p>
        </div>
        <div className={styles.textRowRight}>
          <img src="/assets/images/icono3.png" alt="icon" className={styles.textRowIcon} />
          <p className={styles.textRowTitle}>
            <strong>DISTRIBUCION Y LOGISTICA</strong>
          </p>
          <br/>
          <p className={styles.textRowText}>
            Contamos con logistica propia y servicio de entrega.<br/>
            Se le dan los cuidados necesarios a la mercaderia para que los productos lleguen<br/>
            en optimas condiciones a nuestras sucursales y nuestros clientes.
          </p>
        </div>
        <div className={styles.textRowLeft}>
          <p className={styles.textRowTitle}>
            <strong>OPCIONES DE COMPRA FLEXIBLES</strong>
          </p>
          <img src="/assets/images/icono4.png" alt="icon" className={styles.textRowIcon} />
          <br/>
          <p className={styles.textRowText}>
            Te ofrecemos opciones de compra flexibles, diseñadas para ajustarse a tus necesidades.<br/>
            Nos adaptamos a la frecuencia y volumen de tus compras para que siempre encuentres lo que buscas.
          </p>
        </div>
        <div className={styles.textRowRight}>
          <img src="/assets/images/icono5.png" alt="icon" className={styles.textRowIcon} />
          <p className={styles.textRowTitle}>
            <strong>PRECIOS COMPETITIVOS</strong>
          </p>
          <br/>
          <p className={styles.textRowText}>
            Precios accesibles para ofrecer la mejor relacion entre costo y calidad.<br/>
            ¡Te convienen más!
          </p>
        </div>
        <div className={styles.textRowLeft}>        
          <p className={styles.textRowTitle}>
            <strong>OPCIONES DE PAGO</strong>
          </p>
          <img src="/assets/images/icono6.png" alt="icon" className={styles.textRowIcon} />
          <br/>
          <p className={styles.textRowText}>
            Ofrecemos una amplia variedad de opciones de pagopara que puedas elegir la que mas te convenga.
          </p>
        </div>
      </div>
    </div>
  )
}
