

import React from 'react'
import classNames from "classnames";

import { IoLocationSharp } from "react-icons/io5";
import styles from "./_home.module.scss"
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { useTranslation } from 'react-i18next';
function Contact() {
  const { t, i18n } = useTranslation(); // useTranslation hook-dan istifadə

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Dil dəyişdirmək funksiyası
  };
const contactObjs = [
    {
        id:1,
        icon:<IoLocationSharp />,
        text:"We are very close to you!",
        link:"Baku city, Davud Aslan 2A",
name:t('address')

    },
    {
        id:2,
        icon:<FaPhoneAlt />,
        text:"We are very close to you!",
        link:"Baku city, Davud Aslan 2A",
        name:t('phone')

    },
    {
        id:3,
        icon:<MdOutlineMail />,
        text:"We are very close to you!",
        link:"Baku city, Davud Aslan 2A",
        name:t('emial')

    },
    {
        id:4,
        icon:<GoClock />,
        text:"We are very close to you!",
        link:"Baku city, Davud Aslan 2A",
        name:t('oclock')

    },

]


  return (
<section id={styles.mainContact}>
    <div className={styles.container}>
        <h2 className={styles.title}>Contact Us</h2>
        <div className={classNames("row", styles.fullContacts)}>
            {contactObjs &&
              contactObjs.map((contact) => {
                return (
                  <div
                    key={contact.id}
                    className={classNames(
                      "col-12 col-md-6 col-lg-4 ",
                      styles.serviceItem
                    )}
                  >
                    <div className={styles.contactCard}>
                     <button>
                     {contact.icon}
                     </button>
                      <div className={styles.contactDesc}>
                        <h3>{contact.name}</h3>
                        <p>{contact.text}</p>
                        <a href="#">{contact.link}</a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
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

export default Contact
