import React from 'react';
import PropTypes from 'prop-types';

import { withIntl, Link } from '../i18n';

import SEO from '../components/seo';
import Layout from '../components/layout';

import IconThanks from '../images/icons/message sent_check_202199.svg';

const ThanksPage = ({ t, ...context }) => (
  <React.Fragment>
    <Layout {...context}>
      <SEO title={t('ThankYou_Title')} />
      <div className="container hero text-center" style={{ marginTop: 96 }}>
        <img
          src={IconThanks}
          alt="img"
          style={{ maxHeight: 250, margin: 50 }}
        />
        <h1>{t('ThankYou_Title')}</h1>
        <p>{t('ThankYou_Message')}</p>
        <Link className="btn btn-outline-dark" to="/">
          {t('Navigation_Button_Home')}
        </Link>
      </div>
    </Layout>
  </React.Fragment>
);

ThanksPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withIntl()(ThanksPage);
