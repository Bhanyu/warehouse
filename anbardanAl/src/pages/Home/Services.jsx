import classNames from "classnames";
import styles from "./_home.module.scss"
import { useState,useEffect } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  const [subServices,setSubServices] = useState([])

  useEffect(() => {
    setServices([
      {
        id: 1,
        name: "Product varieties",
        img: "https://www.anbardanal.az/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FserviceCard.d8329276.png&w=384&q=75",
      },
      {
        id: 2,
        name: "Dizayn xidməti",
        img: "https://www.anbardanal.az/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FserviceCard2.6b68895c.png&w=384&q=75",
      },
      {
        id: 3,
        name: "Hovuz tikintisi",
        img: "https://www.anbardanal.az/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FserviceCard3.279c44c6.png&w=384&q=75",
      },
    ]);
    setSubServices([
        {
            id: 1,
            icon:"https://www.anbardanal.az/_next/static/media/icon1.cd2f12a7.svg",
            name:"Our Projects",
            
        },
        {
            id: 2,
            icon:"https://www.anbardanal.az/_next/static/media/icon2.d2d4e461.svg",
            name:"Our Product Range"
        },
        {
            id: 3,
            icon:"https://www.anbardanal.az/_next/static/media/icon3.e5a6a94f.svg",
            name:"Brands"
        },
        {
            id:4,
            icon:"https://www.anbardanal.az/_next/static/media/icon4.23acc6f9.svg",
            name:"Our Team"
        }
    ])
  },[]);
  return (
    <section id={styles.servicesPart}>
      <div className={styles.servicesContainer}>
        <h2 className={styles.servicesTitle}>Our Services</h2>
       
          <div className={classNames("row", styles.fullServices)}>
            {services &&
              services.map((service) => {
                return (
                  <div
                    key={service.id}
                    className={classNames(
                      "col-12 col-lg-4 ",
                      styles.serviceItem
                    )}
                  >
                    <div className={styles.serviceCard}>
                      <img src={service.img} alt="" />
                      <div className={styles.serviceDesc}>
                        <h3>{service.name}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={classNames("row", styles.fullSubServices)}>
            {subServices &&
              subServices.map((subservice) => {
                return (
                  <div
                    key={subservice.id}
                    className={classNames(
                      "col-12 col-lg-3 ",
                      styles.subserviceItem
                    )}
                  >
                    <div className={styles.subserviceCard}>
                      <img src={subservice.icon} alt="" />
                      <div className={styles.subserviceDesc}>
                        <h3>{subservice.name}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
     
      </div>
    </section>
  );
};
export default Services;
