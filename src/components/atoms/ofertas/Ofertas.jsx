import React from 'react'
import styles from './Ofertas.module.css'
import { Carousel } from '../carousel/Carousel'
import { Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';

export const Ofertas = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={styles.ofertasContainer}>
      <Slide direction="up" in={inView} timeout={500}>
        <img className={styles.ofertasSign} src='/assets/images/ofertas-sign.png' alt='ofertas-sign'/>
      </Slide>
      <Carousel/>
    </div>
  )
}
