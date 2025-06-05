import React from 'react'
import styles from './EmpresaPage.module.css';
import { Slide } from '@mui/material';

export const EmpresaPage = () => {

  return (
    <div className={styles.container}>
      <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
        <div className={styles.portada}>
          <img src="\assets\images\empresa-portada1.webp" alt="portada1" />
          <img src="\assets\images\empresa-portada2.webp" alt="portada2" />
        </div>
      </Slide>
      <div className={styles.misionvisionvalores}>
        <div className={styles.cardTexto}>
          <img src="\assets\images\mision.webp" alt="mision"/>
        </div>
        <div className={styles.cardTexto}>
          <img src="\assets\images\vision.webp" alt="vision"/>
        </div>
        <div className={styles.cardTexto}>
          <img src="\assets\images\valores.webp" alt="valores"/>
        </div>
      </div>
      <div className={styles.content}>
        <h3>Santiago nace hace más de 60 años en La Pampa como un emprendimiento familiar dedicado a la distribución de alimentos refrigerados.</h3>
        <h3>Desde el inicio, el compromiso fue claro: hacer las cosas bien, con responsabilidad, cercanía y respeto por cada cliente.</h3>
        <h4>Hoy somos un autoservicio mayorista consolidado, con estructura de más de 12 sucursales distribuidas a lo largo de La Pampa, tecnología adaptada y un equipo de trabajo excepcional con personas que comparten los mismos valores de siempre. <br />
          Distribuimos a locales gastronómicos de toda la provincia, garantizando calidad, atención personalizada y entregas a tiempo. Nuestro objetivo es ayudar y apoyar al comercio pampeano. <br />
          Sabemos que detrás de cada pedido hay una gran responsabilidad, y por eso trabajamos cada día para acompañar, facilitar y potenciar el crecimiento de quienes nos eligen.  
        </h4>
      </div>
    </div>
  )
}
