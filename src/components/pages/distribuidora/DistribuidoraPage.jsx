import React from 'react'
import styles from './DistribuidoraPage.module.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import CamionRecto from '../../atoms/camion/CarreteraRecta.jsx';

export const DistribuidoraPage = () => {
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
        <img src="/assets/distribuidora/camion.png" alt="img"/>
        <img src="/assets/distribuidora/compromiso.png" alt="sign"/>
      </motion.div>
      <motion.div
      className={styles.content}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }} 
      transition={{
        type: "spring",
        stiffness: 65,
        damping: 10
      }}
      >
        <h4>En Santiago Distribuidora trabajamos con un sistema de entrega ágil, versátil y confiable.</h4>
        <h5>Nos especializamos en abastecer a comercios, autoservicios, supermercados y emprendimientos gastronómicos, acercando una amplia variedad de productos: refrigerados, congelados, secos, bebidas, limpieza y más.</h5>
      </motion.div>
      <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }} 
      transition={{
        type: "spring",
        stiffness: 65,
        damping: 10
      }}
      >
        <CamionRecto/>
      </motion.div>
    </div>
  );
}