import styles from "./_footer.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Footer = () => {
    const { t, i18n } = useTranslation(); // useTranslation hook-dan istifadə

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Dil dəyişdirmək funksiyası
    };
  const footList =  [
    {
        id: 1,
        list: [
            { id: 1, name: "Home Pages" },
            { id: 2, name: "About Us" ,link:"/about" },
            { id: 3, name: "Products",link:"/products"  },
            { id: 4, name: "Portfolio" ,link:"/portfolio" },
            { id: 5, name: "Tile Calculator"  }
        ]
    },
    {
        id: 2,
        list: [
            { id: 6, name: "Company" },
            { id: 7, name: "Team" },
            { id: 8, name: "Our values" },
            { id: 9, name: "Career" },
            { id: 10, name: "Our Address" }
        ]
    },
    {
        id: 3,
        list: [
            { id: 11, name: "Products" },
            { id: 12, name: t('kermogranit'), },
            { id: 13, name: "Metlax" },
            { id: 14, name: t('fasad') },
            { id: 15, name: t('mermer') },
            { id: 16, name: t('suse') },
            { id: 17, name: t('kerpic') },
            { id: 18, name: t('aksesuar') }
        ]
    },
    {
        id: 4,
        list: [
            { id: 19, name: "Contact Us" },
            { id: 20, name: "Baku city, Davud Aslan 2A", icon: <FaLocationDot /> },
            { id: 21, name: t("phone"), icon: <FaPhoneAlt /> },
            { id: 22, name: t("email"), icon: <MdEmail /> }
        ]
    }
];


 
  return (
    <footer id={styles.singleFoot}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footLogo}>
            <Link to={`/`}>
              <img
                src="https://www.anbardanal.az/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FanbardanLogo.3c13419a.png&w=256&q=75"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.sideList}>
          {
            footList.map((item) => {
               return(
                <ul key={item.id}>
                {item.list?.map((listItem) => {
                    return(
                       <li key={listItem.id}>
                        {
                            listItem.icon && <span>{listItem.icon}</span>
                        }
                       {
                        listItem.link ?(
                            <Link className={styles.footLink} to={listItem.link}>{listItem.name}</Link>
                        ) : (
                            listItem.name
                        )
                       }
                       </li>
                    )
                })}
            </ul>
               )
            })
          }
          </div>
        </div>
        <div className={styles.footLeg}>
        © 2024, All rights reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;
