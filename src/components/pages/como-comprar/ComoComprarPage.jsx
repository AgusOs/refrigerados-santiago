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
      <div className={styles.textRowContainer}>
        <div className={styles.textRowRight}>
          <div style={{display: "flex", alignItems: "center"}}>
            <img src="/assets/images/icono1.webp" alt="icon" className={styles.textRowIcon} />
            <p className={styles.textRowTitle}>
              PRODUCTOS FRESCOS Y DE CALIDAD
            </p>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <p className={styles.textRowTitle}>
              OFERTAS Y PROMOCIONES
            </p>
            <img src="/assets/images/icono2.webp" alt="icon" className={styles.textRowIcon} />
          </div>
          {/* <p className={styles.textRowText}>
            Nuestros productos son seleccionados para ofrecerte siempre la mejor calidad.<br/>
            Trabajamos con proveedores de confianza para que cada artículo que recibas <br/>
            cumpla con los estándares más altos.
          </p> */}
        </div>
        {/* <div className={styles.textRowLeft}>
          <div style={{display: "flex", alignItems: "center"}}>
            <p className={styles.textRowTitle}>
              OFERTAS Y PROMOCIONES
            </p>
            <img src="/assets/images/icono2.webp" alt="icon" className={styles.textRowIcon} />
          </div>
          <p className={styles.textRowText}>
            Cada semana te traemos descuentos y beneficios especiales<br/>
             para que aproveches los mejosres precios.
          </p>
        </div> */}
        {/* <div className={styles.textRowRight}>
          <div style={{display: "flex", alignItems: "center"}}>
            <img src="/assets/images/icono3.webp" alt="icon" className={styles.textRowIcon} />
            <p className={styles.textRowTitle}>
              DISTRIBUCION Y LOGISTICA
            </p>
          </div>
          <p className={styles.textRowText}>
            Contamos con logistica propia y servicio de entrega.<br/>
            Se le dan los cuidados necesarios a la mercaderia para que los productos lleguen<br/>
            en optimas condiciones a nuestras sucursales y nuestros clientes.
          </p>
        </div> */}
        <div className={styles.textRowLeft}>
          <div style={{display: "flex", alignItems: "center"}}>
            <img src="/assets/images/icono3.webp" alt="icon" className={styles.textRowIcon} />
            <p className={styles.textRowTitle}>
              DISTRIBUCION Y LOGISTICA
            </p>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <p className={styles.textRowTitle}>
              OPCIONES DE COMPRA FLEXIBLES
            </p>
            <img src="/assets/images/icono4.webp" alt="icon" className={styles.textRowIcon} />
          </div>
          {/* <p className={styles.textRowText}>
            Te ofrecemos opciones de compra flexibles, diseñadas para ajustarse a tus necesidades.<br/>
            Nos adaptamos a la frecuencia y volumen de tus compras<br/>
             para que siempre encuentres lo que buscas.
          </p> */}
        </div>
        <div className={styles.textRowRight}>
          <div style={{display: "flex", alignItems: "center"}}>
            <img src="/assets/images/icono5.webp" alt="icon" className={styles.textRowIcon} />
            <p className={styles.textRowTitle}>
              PRECIOS COMPETITIVOS
            </p>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <p className={styles.textRowTitle}>
              OPCIONES DE PAGO
            </p>
            <img src="/assets/images/icono6.webp" alt="icon" className={styles.textRowIcon} />
          </div>
          {/* <p className={styles.textRowText}>
            Precios accesibles para ofrecer la mejor relacion entre costo y calidad.<br/>
            ¡Te convienen más!
          </p> */}
        </div>
        {/* <div className={styles.textRowLeft}>        
          <div style={{display: "flex", alignItems: "center"}}>
            <p className={styles.textRowTitle}>
              OPCIONES DE PAGO
            </p>
            <img src="/assets/images/icono6.webp" alt="icon" className={styles.textRowIcon} />
          </div>
          <p className={styles.textRowText}>
            Ofrecemos una amplia variedad de opciones de pago<br/>
            para que puedas elegir la que mas te convenga.
          </p>
        </div> */}
      </div>
    </div>
  )
}
