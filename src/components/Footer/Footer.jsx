import React from 'react'
import styles from './Footer.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
          <div className={styles.logocontainer}>
              <img src="\assets\logo-blanco.webp" alt="logo" className='logo'/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div className={styles.socialscontainer}>
              <a href="https://www.facebook.com/refrigeradosantiago" target="_blank" rel="noopener noreferrer">
                <FacebookRoundedIcon sx={{ color: "#ffffff", backgroundColor: '#61a5c2', borderRadius: '50%', padding: '6px', fontSize: 34 }} />
              </a>
              <a href="https://wa.me/5492954273864" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon sx={{ color: "#ffffff", backgroundColor: '#61a5c2', borderRadius: '50%', padding: '6px', fontSize: 34 }} />
              </a>
              <a href="https://www.instagram.com/refrigerados.santiago/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ color: "#ffffff", backgroundColor: '#61a5c2', borderRadius: '50%', padding: '6px', fontSize: 34 }} />
              </a>
            </div>
            <a style={{color: '#ffffff', textDecoration: 'none', fontWeight: '600', textAlign: 'center', padding: '10px', marginRight: '20px'}} href="https://mail.google.com/mail/?view=cm&fs=1&to=cv@refrigeradosantiago.com.ar" target="_blank" rel="noopener noreferrer">
              Búsquedas laborales
            </a>
            <a style={{color: '#ffffff', textDecoration: 'none', fontWeight: '600', textAlign: 'center', padding: '10px', marginRight: '20px'}} href="/empresa" rel="noopener noreferrer">
              Sobre nosotros
            </a>
            <a style={{color: '#ffffff', textDecoration: 'none', fontWeight: '600', textAlign: 'center', padding: '10px', marginRight: '20px'}} href="/sucursales" rel="noopener noreferrer">
              Sucursales
            </a>
          </div>
      </div>
      <div className={styles.footertext}>
        <h2>Más de 60 años acompañando a locales gastronómicos de La Pampa con productos refrigerados y congelados de calidad</h2>
        <h4>Parque Industrial, Calle 2 2850, L6304FXB Santa Rosa, La Pampa </h4>
        {/* <h4> Tel: +54 9 2954 27-3864</h4> */}
        <h6>2025 Santiago – Todos los derechos reservados</h6>
      </div>
    </div>
  )
}
