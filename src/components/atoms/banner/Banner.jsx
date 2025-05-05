import React from 'react'
import styles from './Banner.module.css'
import { useInView } from 'react-intersection-observer';
import Slide from '@mui/material/Slide';

export const Banner = ({img}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
    <Slide direction='left' in={inView} timeout={500}>
      <img className={styles.banner} src={img} alt="banner" />
      </Slide>
    </div>
  )
}