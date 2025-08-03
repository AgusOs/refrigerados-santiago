import React from 'react'
import styles from './EmpresaPage.module.css';
import { motion, useInView } from 'motion/react';

export const EmpresaPage = () => {

  return (
    <div className={styles.container}>
      <motion.div 
      className={styles.portada}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 65,
        damping: 10
      }}
      >
        <img src="\assets\images\local.webp" alt="portada1" />
        <img src="\assets\images\empresa-portada2.webp" alt="portada2" />
      </motion.div>
      <motion.div 
      className={styles.misionvisionvalores}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }} 
      transition={{
        type: "spring",
        stiffness: 65,
        damping: 10
      }}
      >
        <div className={styles.cardTexto}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>MISIÓN</h3>
            <p className={styles.cardText}>
              Somos una empresa mayorista con 60 años de trayectoria dedicada a abastecer 
              comercios locales, panaderías, hoteles, restaurantes y emprendedores 
              gastronómicos en La Pampa.
            </p>
            <p className={styles.cardText}>
              Nuestro propósito es fortalecer el comercio pampeano, brindando productos 
              de calidad con un servicio confiable y una logística eficiente.
            </p>
          </div>
        </div>

        <div className={styles.cardTexto}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>VISIÓN</h3>
            <p className={styles.cardText}>
              Aspiramos a expandirnos en toda la provincia, asegurando que cada región 
              de La Pampa cuente con al menos una sucursal que mantenga nuestra calidad, 
              servicio y logística.
            </p>
            <p className={styles.cardText}>
              Buscamos seguir creciendo y ampliando nuestra oferta de productos para 
              responder a las necesidades de nuestros clientes.
            </p>
          </div>
        </div>

        <div className={styles.cardTexto}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>VALORES</h3>
            <p className={styles.cardText}>
              En Santiago valoramos la <strong>calidad</strong> en todo lo que hacemos, el 
              <strong> compromiso</strong> con nuestro equipo y clientes, y la <strong>confianza </strong> 
              que hemos construido con La Pampa.
            </p>
            <p className={styles.cardText}>
              Nuestra <strong>trayectoria</strong> nos respalda, pero lo que realmente nos 
              define es el espíritu de <strong>familia</strong>.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div 
      className={styles.content}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }} 
      transition={{
        type: "spring",
        stiffness: 65,
        damping: 10
      }}
      >
        <h4>Santiago nace hace más de 60 años en La Pampa como un emprendimiento familiar dedicado a la distribución de alimentos refrigerados.</h4>
        <h4>Desde el inicio, el compromiso fue claro: hacer las cosas bien, con responsabilidad, cercanía y respeto por cada cliente.</h4>
        <h5>Hoy somos una empresa mayorista de alimentos y bebidas consolidada, con una estructura de 13 sucursales distribuidas a lo largo de La Pampa, tecnología adaptada, logística propia y un equipo de trabajo excepcional con personas que comparten los mismos valores de siempre. <br />
          Adiscionalmente, distribuimos a locales gastronómicos y de cercanía en toda la provincia, garantizando calidad, atención personalizada y entregas a tiempo. Nuestro objetivo es ayudar y apoyar al comercio pampeano. <br />
          Sabemos que detrás de cada pedido hay una gran responsabilidad, y por eso trabajamos cada día para acompañar, facilitar y potenciar el crecimiento de quienes nos eligen.  
        </h5>
      </motion.div>
      <div className={styles.imagenes}>
        <img src="\assets\galeria\1.JPG" alt="empresa1" />
        <img src="\assets\galeria\2.JPG" alt="empresa2" />
        <img src="\assets\galeria\13.jpeg" alt="empresa13" />
        <img src="\assets\galeria\11.jpeg" alt="empresa11" />
        <img src="\assets\galeria\9.jpeg" alt="empresa9" />
        <img src="\assets\galeria\3.jpeg" alt="empresa3" />
        <img src="\assets\galeria\4.jpeg" alt="empresa4" />
        <img src="\assets\galeria\6.jpeg" alt="empresa6" />
        <img src="\assets\galeria\5.jpeg" alt="empresa5" />
        <img src="\assets\galeria\7.jpeg" alt="empresa7" />
        <img src="\assets\galeria\8.jpeg" alt="empresa8" />
        <img src="\assets\galeria\10.jpeg" alt="empresa10" />
        <img src="\assets\galeria\12.jpeg" alt="empresa12" />
        <img src="\assets\galeria\14.jpeg" alt="empresa14" />
      </div>
    </div>
  )
}