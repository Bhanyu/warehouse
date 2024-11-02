import React from 'react'
import styles from "../About/_about.module.scss"

import { useTranslation } from 'react-i18next';

function AboutBg() {
    const { t, i18n } = useTranslation(); // useTranslation hook-dan istifadə

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Dil dəyişdirmək funksiyası
    };
  return (
   <section id={styles.aboutBg}>
    <div className={styles.container}>
        <div className={styles.aboutTitle}>
            <h1>Haqqımızda</h1>
            <p>Ana səhifə / <span> Haqqımızda</span></p>
        </div>
    </div>
   </section>
  )
}

export default AboutBg
