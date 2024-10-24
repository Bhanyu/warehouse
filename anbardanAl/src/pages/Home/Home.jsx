import styles from "./_home.module.scss"

import { useTranslation } from 'react-i18next';
import Swiper from "./Swiper";
import Services from "./Services";
import Projects from "./Projects";
import Calculator from "./Calculator";
import Contact from "./Contact";

const Home = () => {
  const { t } = useTranslation(); // Tərcümə üçün hook

  return (
    <section id={styles.mainHome}>

     
      <Swiper/>
      <Services/>
      <Projects/>
      <Calculator/>
      <Contact/>
    </section>
  );
};

export default Home;
