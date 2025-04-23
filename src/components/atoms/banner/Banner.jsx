import React from 'react'
import styles from './Banner.module.css'

export const Banner = ({img}) => {
  return (
    <img className={styles.banner} src={img} alt="banner" />
  )
}