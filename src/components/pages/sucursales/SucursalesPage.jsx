import React from 'react'
import styles from './Sucursales.module.css';
import { Mapa } from '../../atoms/mapa/Mapa';
import Slide from '@mui/material/Slide';

export const SucursalesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.portada}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <Slide in={true} direction="left" timeout={1000} mountOnEnter unmountOnExit>
            <img src="\assets\images\phone-sign.webp" alt="Portada" style={{width: '100%', borderRadius: '10px'}}/>
          </Slide>
          <Slide in={true} direction="left" timeout={1000} mountOnEnter unmountOnExit>
            <img src="\assets\images\sucursales-guy.png" alt="img" style={{width: '75%', borderRadius: '10px'}}/>
          </Slide>
        </div>
        <Mapa/>
      </div>
    </div>
  )
}