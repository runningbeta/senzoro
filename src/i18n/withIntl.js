import React from 'react';
import { I18nextProvider, withNamespaces } from 'react-i18next';
import i18next from './config';

export default (ns = 'translations') => WrappedComponent => {
  const WrappedNamespacedComponent = withNamespaces(ns)(WrappedComponent);
  return ({ ...props }) => {
    const { pageContext } = props;

    if (pageContext) {
      const { locale } = pageContext;
      if (locale && locale !== i18next.language) {
        i18next.changeLanguage(locale);
      }
    }

    return (
      <I18nextProvider i18n={i18next}>
        <WrappedNamespacedComponent {...props} language={i18next.language} />
      </I18nextProvider>
    );
  };
};
