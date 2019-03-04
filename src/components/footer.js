import React from 'react';
import PropTypes from 'prop-types';
import { Link, withIntl } from '../i18n';

const Footer = ({ t }) => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="footer-logo">
            <Link to="/" className="navbar-brand">
              {t('Footer_Title')}
            </Link>
            <p>{t('Footer_Impressum')}</p>
          </div>
        </div>
        <div className="col-md-1" />
        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">
            <h4 />
            <ul className="list-unstyled">
              <li>
                <Link to="/impressum">{t('Footer_Link_Impressum')}</Link>
              </li>
              <li>
                <Link to="/privacy">{t('Footer_Link_PrivacyPolicy')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="copyrights">
      <div className="container">
        <p>&copy; Copyright Senzoro 2019. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withIntl()(Footer);
