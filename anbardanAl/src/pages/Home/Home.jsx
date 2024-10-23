import styles from "./_home.module.scss"

import { useTranslation } from 'react-i18next';
import Swiper from "./Swiper";

const Home = () => {
  const { t } = useTranslation(); // Tərcümə üçün hook

  return (
    <section id={styles.mainHome}>

     
      <Swiper/>
    </section>
  );
};

export default Home;
