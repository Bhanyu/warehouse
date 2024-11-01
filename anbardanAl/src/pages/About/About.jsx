import React from 'react';
import { useTranslation } from 'react-i18next';
import Request from './Request';
const About = () => {
  const { t } = useTranslation();

  return (
    <section>
     <Request/>
    </section>
  );
};

export default About;
