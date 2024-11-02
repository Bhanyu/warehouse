import React, { forwardRef } from 'react'

const WhyUs =forwardRef ((props,ref) =>{
    const contactObjs = [
        {
            id:1,
            icon:"https://www.anbardanal.az/_next/static/media/team.7a3f9710.svg",
            text:"We are very close to you!",
            link:"Baku city, Davud Aslan 2A",
    name:t('address')
    
        },
        {
            id:2,
            icon:"https://www.anbardanal.az/_next/static/media/experience.53b8d89d.svg",
            text:"We are very close to you!",
            link:"Baku city, Davud Aslan 2A",
            name:t('phone')
    
        },
        {
            id:3,
            icon:"https://www.anbardanal.az/_next/static/media/product.b60d62dc.svg",
            text:"We are very close to you!",
            link:"Baku city, Davud Aslan 2A",
            name:t('emial')
    
        },
      
    
    ]

return(
    <section>
    <div ref={ref} style={{ marginTop: '50px' }}>
   <h2>Birinci Mətin</h2>
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
 
            })

export default WhyUs
