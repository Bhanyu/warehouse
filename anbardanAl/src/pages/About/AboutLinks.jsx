import React from 'react'
import styles from "../About/_about.module.scss"
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
function AboutLinks({scrollToSection, sections}) {
    const { t, i18n } = useTranslation(); // useTranslation hook-dan istifadə

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Dil dəyişdirmək funksiyası
    };
  
  return (
    <section id={styles.links}>
        <div className={styles.container}>
<button onClick={()=> scrollToSection(sections.section1)}></button>
<button onClick={()=> scrollToSection(sections.section2)}></button>

<button onClick={()=> scrollToSection(sections.section3)}></button>

<button onClick={()=> scrollToSection(sections.section4)}></button>

        </div>
    </section>
  )
}

export default AboutLinks
