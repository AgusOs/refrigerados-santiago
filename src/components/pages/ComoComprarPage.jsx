import React from 'react'
import styles from './Pages.module.css';
import { Banner } from '../banner/Banner';

export const ComoComprarPage = () => {
  return (
    <div className={styles.container}>
      <Banner img={'src/assets/images/6.jpg'}/>
    </div>
  )
}
