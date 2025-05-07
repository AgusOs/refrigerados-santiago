import React from 'react'
import styles from './Banner.module.css'

export const Banner = ({ img, variant }) => {

  const bannerClass = `${styles.banner} ${variant === 'blp' ? styles.bannerBlp : ''} ${variant === 'como-comprar' ? styles.bannerComprar : ''} ${variant === 'inicio-1' ? styles.bannerInicio1 : ''} ${variant === 'inicio-2' ? styles.bannerInicio2 : ''} ${variant === 'inicio-3' ? styles.bannerInicio3 : ''}`;

  return (
      <img className={bannerClass} src={img} alt="banner" />
  );
};
