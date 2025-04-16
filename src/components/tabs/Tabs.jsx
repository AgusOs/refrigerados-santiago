import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Tabs.module.css';

export const Tabs = () => {

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    return () => {
      navigate(path);
    };
  };

  return (
    <div className={styles.tabsbar} >
      <div className={styles.logocontainer}>
        <img src="src\assets\id-blanco.png" alt="logo" className={styles.logo}/>
      </div>
      <div className={styles.tabs}>
        <button onClick={handleNavigate('/')}>Ofertas</button>
        <button onClick={handleNavigate('/como-comprar')}>Como comprar</button>
        <button onClick={handleNavigate('/empresa')}>La empresa</button>
        <button onClick={handleNavigate('/sucursales')}>Sucursales</button>
      </div>
      <div></div>
    </div>
  )
}
