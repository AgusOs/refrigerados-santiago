import React from 'react'
import styles from './Ofertas.module.css'
import { Carousel } from '../carousel/Carousel'
import Zoom from '@mui/material/Zoom';
import { useInView } from 'react-intersection-observer';

export const Ofertas = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={styles.ofertasContainer}>
      <Zoom in={inView} timeout={500}>
        <img className={styles.ofertasSign} src='/assets/images/ofertas-sign.png' alt='ofertas-sign'/>
      </Zoom>
      <Carousel/>
    </div>
  )
}
