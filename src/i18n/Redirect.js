// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';
import browserLang from 'browser-lang';
import { languages } from './index';

const Redirect = ({ location }) => {
  const langKeys = Object.keys(languages);
  const { pathname } = location;

  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    const detected =
      window.localStorage.getItem('language') ||
      browserLang({
        languages: langKeys,
        fallback: 'en',
      });

    const newPath = withPrefix(`/${detected}${pathname}`);
    window.localStorage.setItem('language', detected);

    if (newPath !== location.pathname) {
      window.location.replace(newPath);
    }
  }

  return <div />;
};

Redirect.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default Redirect;
