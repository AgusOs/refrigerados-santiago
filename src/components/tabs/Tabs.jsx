import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Tabs.module.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Tabs = () => {
  const navigate = useNavigate();
  const [showTabs, setShowTabs] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNavigate = (path) => () => {
    navigate(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowTabs(true);
      } else {
        setShowTabs(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`${styles.tabsbar} ${showTabs ? styles.visible : styles.hidden}`}>
      <div className={styles.logocontainer}>
        <img src="\assets\images\logo-tabs.png" alt="logo"/>
      </div>
      <div className={styles.tabs}>
        <button onClick={handleNavigate('/')}>Ofertas</button>
        <button onClick={handleNavigate('/como-comprar')}>Como comprar</button>
        <button onClick={handleNavigate('/empresa')}>La empresa</button>
        <button onClick={handleNavigate('/sucursales')}>Sucursales</button>
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
  );
};
