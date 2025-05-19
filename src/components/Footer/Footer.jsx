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
      </div>
      <div className={styles.footertext}>
        <h3>Oficina central: Cam. Interno Zona Industrial, Santa Rosa, La Pampa, Argentina.</h3>
        <h5>Tel: ‪+54 9 2954 27-3864‬ //  DE LUNES A VIERNES DE 8 A 17 hs , SÁBADOS DE 8 A 13:30 hs</h5>
      </div>
    </div>
  )
}
