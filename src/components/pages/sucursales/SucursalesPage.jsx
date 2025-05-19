import React from 'react'
import styles from './Sucursales.module.css';
import { Mapa } from '../../atoms/mapa/Mapa';
import Slide from '@mui/material/Slide';

export const SucursalesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.portada}>
        <Slide in={true} direction="left" timeout={1000} mountOnEnter unmountOnExit>
          <img src="\assets\images\phone-sign.webp" alt="Portada"/>
        </Slide>
      </div>
      <Mapa/>
    </div>
  )
}