import React from 'react';
import PropTypes from 'prop-types';

import withIntl from '../i18n/withIntl';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/hero';
import HowItWorks from '../components/howItWorks';
import Features from '../components/features';
import Video from '../components/video';
import Team from '../components/team';
import Contact from '../components/contact';
import Footer from '../components/footer';

const IndexPage = ({ t, ...context }) => (
  <React.Fragment>
    <SEO
      title={t('Page_Title')}
      description={t('Page_Description')}
      keywords={t('Page_Keywords').split(', ')}
    />
    <Hero />
    <Layout {...context}>
      <HowItWorks />
      <Features />
      <Video url="https://youtu.be/MK2tjt1NXog" />
      <Team />
      <Contact />
    </Layout>
    <Footer siteTitle="Senzoro" />
  </React.Fragment>
);

IndexPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withIntl()(IndexPage);
