import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h1>{t('about')}</h1>
      <p>{t('aboutDesc')}</p>
    </section>
  );
};

export default About;
