import React from 'react'
import styles from './Banner.module.css'
import { useInView } from 'react-intersection-observer';
import Slide from '@mui/material/Slide';

export const Banner = ({ img, variant }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const bannerClass = `${styles.banner} ${variant === 'blp' ? styles.bannerBlp : ''}`;

  return (
    <div ref={ref}>
      <Slide direction="left" in={inView} timeout={500}>
        <img className={bannerClass} src={img} alt="banner" />
      </Slide>
    </div>
  );
};
