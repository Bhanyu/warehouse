


import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from "./_header.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";


import { FaInstagram } from "react-icons/fa";
import BurgerMenu from './BurgerMenu';
const Header = () => {
  const { t, i18n } = useTranslation(); // useTranslation hook-dan istifadə

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Dil dəyişdirmək funksiyası
  };

  return (
    <header id={styles.mainHeader}>
      <div className={styles.container}>
        <div className={styles.headerUpContent}>
          <div className={styles.headerLogo}>
            <Link to={`/`}>
              <img src="https://www.anbardanal.az/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FanbardanLogo.3c13419a.png&w=96&q=75" alt="" />
            </Link>
          </div>
          <nav>
            <div className={styles.navigation}>
              <ul>
                <li><Link className={styles.navLink} to={`/about`}>{t('about')}</Link></li>
                <li className={styles.productsLink}><Link className={styles.navLink} to={`/products`}>{t('products')}</Link>
                <div className={styles.dropdown}>
                    <ul className={styles.dropdownList} >
                        <li><Link className={styles.dropdownLink}>{t('kermogranit')}</Link></li>
                        <li><Link className={styles.dropdownLink}>Metlax</Link></li>
                        <li><Link className={styles.dropdownLink}>{t('fasad')}</Link></li>
                        <li><Link className={styles.dropdownLink}>{t('mermer')}</Link></li>
                        <li><Link className={styles.dropdownLink}>{t('suse')}</Link></li>
                        <li><Link className={styles.dropdownLink}>{t('kerpic')}</Link></li>
                        <li><Link className={styles.dropdownLink}>{t('aksesuar')}</Link></li>

                    </ul>
                </div>
                </li>
                <li><Link className={styles.navLink} to={`/portfolio`}>{t('portfolio')}</Link></li>
                <li><Link className={styles.navLink} to={`/catalog`}>{t('catalog')}</Link></li>
                <li><Link className={styles.navLink} to={`/contact`}>{t('contact')}</Link></li>
              </ul>
            </div>
           
          </nav>
          <div className={styles.language}>
              <button onClick={() => changeLanguage('en')}>EN</button>
              <button onClick={() => changeLanguage('az')}>AZ</button>
            </div>
            <BurgerMenu/>
        </div>
        <div className={styles.headerDownContent}>
        
        
            <div className={styles.contactLink}>
              <ul>
                <li><Link className={styles.comLink}><FaPhoneAlt />+994 55 299 88 33</Link></li>
                <li><Link className={styles.comLink}><MdEmail />email@mail.com
</Link></li>
               
              </ul>
            </div>
           
            <div className={styles.socialMedia}>
              <ul>
                <li><Link className={styles.scmLink}><BiLogoTelegram /></Link></li>
<li><Link className={styles.scmLink}><FaTwitter /></Link></li>
                <li><Link className={styles.scmLink}><FaInstagram /></Link></li>
               
              </ul>
            </div>
        
        </div>
      </div>
    </header>
  );
};

export default Header;


