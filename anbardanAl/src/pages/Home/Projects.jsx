import React from 'react';
import styles from "./_home.module.scss"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';
function Projects() {
    const { t, i18n } = useTranslation(); // useTranslation hook-dan istifadə

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Dil dəyişdirmək funksiyası
    };
    const projectPosts = [
        {
            id:1,
            img:"https://www.anbardanal.az/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject4.2b99e67a.png&w=384&q=75",


        },
        {
            id:2,
            img:"https://www.anbardanal.az/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject5.8161398a.png&w=384&q=75"
        },
        {
            id:3,
            img:"https://www.anbardanal.az/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject2.49799624.png&w=384&q=75"
        },
        {
            id:4,
            img:"https://www.anbardanal.az/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject1.a7f9218c.png&w=384&q=75"
        },
        {
            id:5,
            img:"https://www.anbardanal.az/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject3.347276fe.png&w=384&q=75"
        }
    ]
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        responsive: [
            {
                breakpoint: 992, // For screens up to 768px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 568, // For screens up to 568px
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1,
                }
            }
        ]
    };
  return (
  <section id={styles.mainProjects}>
    <div className={styles.container}>
        <h2 className={styles.title}>{t('project')}</h2>
        <p>{t('text2')}</p>
        <Slider {...settings}>
            {
                projectPosts.map((projectPost) => (
                    <div key={projectPost.id} className={styles.slide}>
                        <img src={projectPost.img} alt={projectPost.id} />
                    </div>
                ))
            }
        </Slider>
        <h2 className={styles.articles}>
       {t('project2')}
        </h2>
        <p className={styles.articlesText}>
       {t('text3')}
        </p>
    </div>
  </section>
  )
}

export default Projects
