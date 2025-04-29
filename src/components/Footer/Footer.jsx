import React from 'react'
import styles from './Footer.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.logocontainer}>
            <img src="\assets\logo-blanco.png" alt="logo" className='logo'/>
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
  )
}
