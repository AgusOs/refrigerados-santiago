import React from 'react'
import styles from './DistribuidoraPage.module.css';
import { motion } from 'motion/react';
import Camion from '../../atoms/camion/Camion.jsx';

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
      <Camion/>
    </div>
  );
}