import React from 'react';
import { useTranslation } from 'react-i18next';
import AboutBg from './AboutBg';
import Request from './Request';
const About = () => {
  const { t } = useTranslation();

  return (
    <section>
      <AboutBg/>
     <Request/>
    </section>
  );
};

export default About;
