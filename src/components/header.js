import React from 'react';
import PropTypes from 'prop-types';
import LanguageSelector from './languageSelector';

import { Link, withIntl } from '../i18n';

const SenzoroLogo = require('../images/identity/vf_Logo_grey text below_transparent.svg');
const SenzoroName = require('../images/identity/vf_Logo_grey text_side by side_white bg.svg');

const Header = ({ t, pageContext }) => (
  <header id="header" className="header header-hide scroll-header">
    <div className="container" style={{ textAlign: 'center' }}>
      <div className="logo pull-left large">
        <h1>
          <Link to="/" className="scrollto">
            <img alt="Senzoro" height={80} src={SenzoroLogo} />
          </Link>
        </h1>
      </div>
      <div className="logo pull-left small">
        <h1>
          <Link to="/" className="scrollto">
            <img alt="Senzoro" height={40} src={SenzoroName} />
          </Link>
        </h1>
      </div>
      <nav id="nav-lang-container" className="nav-menu-container">
        <ul className="nav-menu">
          <LanguageSelector
            originalPath={(pageContext && pageContext.originalPath) || '/'}
          />
        </ul>
      </nav>
      <nav id="nav-menu-container" className="nav-menu-container">
        <ul className="nav-menu">
          <li>
            <Link to="#hero">{t('Header_Link_Home')}</Link>
          </li>
          <li>
            <Link to="#get-started">{t('Header_Link_About')}</Link>
          </li>
          <li>
            <Link to="#features">{t('Header_Link_Features')}</Link>
          </li>
          <li>
            <Link to="#team">{t('Header_Link_Team')}</Link>
          </li>
          <li>
            <Link to="#contact">{t('Header_Link_Contact')}</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withIntl()(Header);
