import PropTypes from 'prop-types';
import React from 'react';
import { Link, withIntl } from '../i18n';

import Feature1Icon from '../images/icons/benefits_real time machine stauts_18_4185806.svg';
import Feature2Icon from '../images/icons/benefits_easy to install_g22002_2085568.svg';
import Feature3Icon from '../images/icons/benefits_simple to scale_rise_bar_1170212.svg';

const HowItWorks = ({ t }) => (
  <section id="get-started" className="padd-section text-center wow fadeInUp">
    <div className="container">
      <div className="section-title text-center">
        <h2>{t('HowItWorks_Title')}</h2>
        <p className="separator">{t('HowItWorks_Subtitle')}</p>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="feature-block">
            <img src={Feature1Icon} alt="img" className="img-fluid" />
            <h4>{t('HowItWorks_Item1_Title')}</h4>
            <p>{t('HowItWorks_Item1_Subtitle')}</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="feature-block">
            <img src={Feature2Icon} alt="img" className="img-fluid" />
            <h4>{t('HowItWorks_Item2_Title')}</h4>
            <p>{t('HowItWorks_Item2_Subtitle')}</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="feature-block">
            <img src={Feature3Icon} alt="img" className="img-fluid" />
            <h4>{t('HowItWorks_Item3_Title')}</h4>
            <p>{t('HowItWorks_Item3_Subtitle')}</p>
          </div>
        </div>
      </div>
      {/* <div className="row justify-content-center">
        <div className="col-md-12" style={{ marginTop: '20px' }}>
          <Link className="btn btn-outline-dark" to="/how-it-works">
            {t('HowItWorks_ReadMode')}
          </Link>
        </div>
      </div> */}
    </div>
  </section>
);

HowItWorks.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withIntl()(HowItWorks);
