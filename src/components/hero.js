import React from 'react';
import PropTypes from 'prop-types';
import { withIntl } from '../i18n';

import heroImg from '../images/hero-img.png';

const Hero = ({ t }) => (
  <section id="hero" className="wow fadeIn">
    <div className="hero-container">
      <h1>{t('Hero_Title')}</h1>
      <h2>{t('Hero_Subtitle')}</h2>
      <div>
        <a href="#contact" className="btn-get-started scrollto">
          {t('Hero_Button_ContactUs')}
        </a>
        <a href="#get-started" className="btn-get-started outline scrollto">
          {t('Hero_Button_HowItWorks')}
        </a>
      </div>
      <img src={heroImg} alt="Hero Imgs" />
    </div>
  </section>
);

Hero.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withIntl()(Hero);
