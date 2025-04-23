import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Tabs.module.css';

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
        <img src="src/assets/id-blanco.png" alt="logo" className={styles.logo}/>
      </div>
      <div className={styles.tabs}>
        <button onClick={handleNavigate('/')}>Ofertas</button>
        <button onClick={handleNavigate('/como-comprar')}>Como comprar</button>
        <button onClick={handleNavigate('/empresa')}>La empresa</button>
        <button onClick={handleNavigate('/sucursales')}>Sucursales</button>
      </div>
      <div className={styles.logo}></div>
    </div>
  );
};
