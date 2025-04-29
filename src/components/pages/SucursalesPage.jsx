import React from 'react'
import styles from './Pages.module.css';
import { Banner } from '../atoms/banner/Banner';
import { Mapa } from '../atoms/mapa/Mapa';
import { sucursales } from '../../sucursales';
import { Grid } from '@mui/material';

export const SucursalesPage = () => {
  return (
    <div className={styles.container}>
      <Banner img={'/assets/images/11.jpg'}/>
      <Mapa/>
      <Grid container spacing={2} className={styles.sucursalesContainer}>
        { sucursales.map((sucursal, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className={styles.sucursalCard}>
            <p>{sucursal.nombre}</p>
            <p>{sucursal.direccion}</p>
            <a href={`https://wa.me/${sucursal.whatsapp}`} target="_blank">{sucursal.telefono}</a>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}