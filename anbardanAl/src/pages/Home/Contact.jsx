

import React from 'react'
import classNames from "classnames";

import { IoLocationSharp } from "react-icons/io5";
import styles from "./_home.module.scss"
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GoClock } from "react-icons/go";

function Contact() {

const contactObjs = [
    {
        id:1,
        icon:<IoLocationSharp />,
        text:"We are very close to you!",
        link:"Baku city, Davud Aslan 2A",
name:'Our Address'

    },
    {
        id:2,
        icon:<FaPhoneAlt />,
        text:"We are very close to you!",
        link:"Baku city, Davud Aslan 2A",
        name:'Our Address'

    },
    {
        id:3,
        icon:<MdOutlineMail />,
        text:"We are very close to you!",
        link:"Baku city, Davud Aslan 2A",
        name:'Our Address'

    },
    {
        id:4,
        icon:<GoClock />,
        text:"We are very close to you!",
        link:"Baku city, Davud Aslan 2A",
        name:'Our Address'

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
    </div>
</section>
  )
}

export default Contact
