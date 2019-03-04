import React from 'react';
import PropTypes from 'prop-types';

import { withIntl, Link } from '../i18n';

import SEO from '../components/seo';
import Layout from '../components/layout';

import Icon404 from '../images/icons/404_problem_195221.svg';

const NotFoundPage = ({ t, ...context }) => (
  <React.Fragment>
    <Layout {...context}>
      <SEO title={t('404_Title')} />
      <div className="container hero text-center" style={{ marginTop: 96 }}>
        <img src={Icon404} alt="img" style={{ maxHeight: 250, margin: 50 }} />
        <h1>{t('404_Title')}</h1>
        <p>{t('404_Message')}</p>
        <Link className="btn btn-outline-dark" to="/">
          {t('Navigation_Button_Home')}
        </Link>
        <br />
        <br />
      </div>
    </Layout>
  </React.Fragment>
);

NotFoundPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withIntl()(NotFoundPage);
