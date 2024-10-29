

import React from 'react'
import styles from "./_home.module.scss"
import { useTranslation } from 'react-i18next';
function Calculator() {
    const { t, i18n } = useTranslation(); // useTranslation hook-dan istifadə

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Dil dəyişdirmək funksiyası
    };
  return (
    <section id={styles.calculatorPart}>
        <h2 className={styles.title}>{t('calculator')}</h2>
        <p>
      {t('text4')}

        </p>
        <div className={styles.container}>
        
     
            <div className={styles.calculator}>
            <div className={styles.calculatorRow}>
            <div className={styles.inputLabel}>
            <label htmlFor="length">Length(m)</label>
                <input type="number" />
            </div>
            <div className={styles.inputLabel}>
            <label htmlFor="width">Width(m)</label>
                <input type="number" />
            </div>
              
                </div>
                <div className={styles.calculatorRow}>
          
                <div className={styles.inputLabel}>
            <label htmlFor="length">Area (m2)</label>
                <input type="number" />
            </div>
            <div className={styles.inputLabel}>
            <label htmlFor="length">Tile Size (sm) | ex. 15x30</label>
                <input type="number" />
            </div>
                </div>
                <button type='submit'>Calculate</button>
            </div>
        
        </div>
    </section>
  )
}

export default Calculator
