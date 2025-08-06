import React from 'react'
import styles from './ComoComprar.module.css';
import { motion, useInView } from 'motion/react';

export const ComoComprarPage = () => {
  
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
        <img src="/assets/clientes/clientes-portada.JPG" alt="img"/>
        <img src="/assets/clientes/comprar-sign.webp" alt="sign"/>
      </motion.div>
      <motion.div 
      className={styles.cardsRow}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }} 
      transition={{
        type: "spring",
        stiffness: 65,
        damping: 10
      }}
      >
        <div className={styles.card}>
          <img src="/assets/clientes/1.webp" alt="Carrito de compras" className={styles.cardImage} />
          <p className={styles.cardTitle}>
            Consumidor final
          </p>
          <p className={styles.cardText}>
            Clientes que realizan compras para su propio consumo.
          </p>
        </div>
        <div className={styles.card}>
          <img src="/assets/clientes/2.webp" alt="img"  className={styles.cardImage}/>
          <p className={styles.cardTitle}>
            Profesionales gastronómicos
          </p>
          <p className={styles.cardText}>
            Restaurantes, hoteles, cafeterias, catering, comedores y más.
          </p>
        </div>
        <div className={styles.card}>
          <img src="/assets/clientes/3.webp" alt="img"  className={styles.cardImage}/>
          <p className={styles.cardTitle}>
            Comerciantes
          </p>
          <p className={styles.cardText}>
            Supermercados minoristas, almacenes, comercios.
          </p>
        </div>
        <div className={styles.card}>
          <img src="/assets/clientes/4.webp" alt="img"  className={styles.cardImage}/>
          <p className={styles.cardTitle}>
            Venta a instituciones
          </p>
          <p className={styles.cardText}>
            Pedidos personalizados para intituciones particulares.
          </p>
        </div>
      </motion.div>
      <motion.div 
      className={styles.clientesRow}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 65,
        damping: 10
      }}
      >
        <img src="/assets/clientes/cliente-final.png" alt="img"  className={styles.rowImg}/>
        <div className={styles.textos}>
          <h3>CONSUMIDOR FINAL:</h3>
          <p><strong>Pensado para vos</strong>. En Santiago trabajamos para que cada visita sea una buena experiencia. Vas a encontrar:</p>

          <ul>
            <li>Local amplio y variado para comprar tranquilo.</li>
            <li>Precios que rinden.</li>
            <li>Atención personalizada.</li>
            <li>Promos y descuentos para ahorrar más.</li>
            <li>Medios de pago variados para tu comodidad.</li>
          </ul>

          <p className={styles.cierre}><strong>¡Te esperamos!</strong></p>
        </div>
      </motion.div>
      <motion.div 
      className={styles.clientesRow}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 65,
        damping: 10
      }}
      >
        <img src="/assets/clientes/profesional-gastronomico.png" alt="img"  className={styles.rowImg}/>
        <div className={styles.textos}>
          <h3>PROFESIONALES GASTRONÓMICOS:</h3>
          <p><strong>Pensado para tu cocina profesional</strong>. Si sos chef, tenés un local o emprendés en gastronomía, en Santiago encontrás todo lo que necesitás para tu día a día:</p>

          <ul>
            <li>Productos en formatos grandes y precios mayoristas.</li>
            <li>Variedad en fiambres, embutidos, lácteos, congelados y más.</li>
            <li>Stock constante y de calidad.</li>
            <li>Promociones exclusivas para clientes.</li>
            {/*  TODO: agregar link a distribuidora */}
            <li>Distribución</li>
          </ul>

          <p className={styles.cierre}><strong>Comprá más, gastá menos y trabajá mejor.</strong></p>
        </div>
      </motion.div>
      <motion.div 
      className={styles.clientesRow}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 65,
        damping: 10
      }}
      >
        <img src="/assets/clientes/cliente-comerciante.png" alt="img"  className={styles.rowImg}/>
        <div className={styles.textos}>
          <h3>COMERCIANTES:</h3>
          <p><strong>Pensado para tu negocio</strong>, almacén o autoservicio, en Santiago somos tu aliado para que nunca te falte stock:</p>

          <ul>
            <li>Productos de primeras marcas y opciones económicas.</li>
            <li>Precios mayoristas.</li>
            <li>Presentaciones grandes y surtido amplio.</li>
            <li>Posibilidad de compras por mayor o unidad.</li>
            <li>Promociones especiales para comerciantes.</li>
            {/* TODO: agregar link whatsapp */}
            <li>Contactate para conocer los beneficios</li>
          </ul>

          <p className={styles.cierre}><strong>Abastecé tu comercio con confianza y al mejor precio.</strong></p>
        </div>
      </motion.div>
      <motion.div 
      className={styles.clientesRow}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 65,
        damping: 10
      }}
      >
        <img src="/assets/clientes/venta-instituciones.png" alt="img"  className={styles.rowImg}/>
        <div className={styles.textos}>
          <h3>VENTA A INSTITUCIONES:</h3>
          <p><strong>Pensado para instituciones</strong> que necesitan abastecimiento confiable y a buen precio:</p>

          <ul>
            <li>Escuelas, comedores, clubes, hospitales, municipios y más.</li>
            <li>Compras en volumen y formatos adecuados para grandes consumos.</li>
            <li>Atención personalizada según tus necesidades.</li>
            <li>Entregas programadas y soporte logístico.</li>
            <li>Precios especiales y entrega coordinada.</li>
            <li>Compromiso con el cumplimiento en tiempo y forma.</li>
          </ul>

          <p className={styles.cierre}><strong>Contá con Santiago para acompañar tu trabajo todos los días.</strong></p>
        </div>
      </motion.div>
    </div>
  )
}
