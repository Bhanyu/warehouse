// import { useTranslation } from 'react-i18next';
// import LanguageSwitcher from '../../components/LanguageSwitcher';
// const Home = ()=>{
//     const { t } = useTranslation();
//     return(
//        <section>
//         <LanguageSwitcher />
//         EVVVDIRRRRRR
//        </section>
//     )
// }
// export default  Home

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation(); // Tərcümə üçün hook

  return (
    <section>
      {/* Tərcümə edilmiş mətnlər */}
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </section>
  );
};

export default Home;
