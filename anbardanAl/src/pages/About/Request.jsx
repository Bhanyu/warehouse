import styles from "../About/_about.module.scss"
import React from 'react'
import classNames from "classnames";

import { IoLocationSharp } from "react-icons/io5";

import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { useTranslation } from 'react-i18next';
function Request() {
    const { t, i18n } = useTranslation(); // useTranslation hook-dan istifadə

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Dil dəyişdirmək funksiyası
    };
  return (

      <section id={styles.mainContact}>
    <div className={styles.container}>
      
      
          <div className={styles.formContact}>
          <h2>{t('call')}</h2>
            <div className={styles.innerContact}>
            
              <form action="">
                <input type="text" placeholder='Your Name'/>
                <input type="num" placeholder='Your Number'/>
<button type='submit'>{t('send')}</button>
              </form>
            </div>
          </div>
    </div>
</section>

  )
}

export default Request
