import { useState } from "react";
import { useTranslation } from 'react-i18next';
import styles from "./_burgermenu.module.scss";
import { Link } from 'react-router-dom';
import { AiOutlineGlobal } from "react-icons/ai";

import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
const BurgerMenu = () => {
const [isLangVisible, setIsLangVisible] = useState(false);
const switchLangs = ()=>{
    setIsLangVisible(!isLangVisible)
}
    const { t, i18n } = useTranslation(); // useTranslation hook-dan istifadə

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Dil dəyişdirmək funksiyası
    };
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <div
        className={styles.burgerMenu__logo}
onClick={toggleMenu}
        
      >
        {isOpen ? <IoMdClose /> : <IoMenu />}
      </div>
<div className={`${styles.burgerMenuInner} ${isOpen ? styles.show : ""}`}>
<div className={styles.languages}>
    <div className={styles.langIcon} onClick={switchLangs}>
    <AiOutlineGlobal className={styles.lang}/>

    </div>
  {
    isLangVisible && (
        <div className={styles.langsInner}>
   
        <button onClick={() => changeLanguage('en')}>EN</button>
                  <button onClick={() => changeLanguage('az')}>AZ</button>
        </div>
    )
  }
             
            </div>
            <ul className={styles.burgerMenuNav}>
        <li>
          <Link className={styles.navLink} to={`/about`}>
            {t("about")}
          </Link>
        </li>
        <li className={styles.productsLink}>
          <Link className={styles.navLink} to={`/products`}>
            {t("products")}
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to={`/portfolio`}>
            {t("portfolio")}
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to={`/catalog`}>
            {t("catalog")}
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to={`/contact`}>
            {t("contact")}
          </Link>
        </li>
      </ul>
</div>
    
    </div>
  );
};
export default BurgerMenu;
