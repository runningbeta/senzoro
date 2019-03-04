import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { withIntl } from '../i18n';

import Item1 from '../images/icons/features_fast results_g5276_2349621.svg';
import Item2 from '../images/icons/features_non intrusive_smartphone_1178094.svg';
import Item3 from '../images/icons/features_privacy_11_3874405.svg';
import Item4 from '../images/icons/features_reliable hardware_44_1490745.svg';

function partition(items, size) {
  return _.values(_.groupBy(items, (item, i) => Math.floor(i / size)));
}

const Features = ({ t }) => {
  const features = [
    {
      icon: Item1,
      title: t('Features_Item1_Title'),
      subtitle: t('Features_Item1_Subtitle'),
    },
    {
      icon: Item2,
      title: t('Features_Item2_Title'),
      subtitle: t('Features_Item2_Subtitle'),
    },
    {
      icon: Item3,
      title: t('Features_Item3_Title'),
      subtitle: t('Features_Item3_Subtitle'),
    },
    {
      icon: Item4,
      title: t('Features_Item4_Title'),
      subtitle: t('Features_Item4_Subtitle'),
    },
  ];

  return (
    <section id="features" className="padd-section text-center wow fadeInUp">
      <div className="container">
        <div className="section-title text-center">
          <h2>{t('Features_Title')}</h2>
          <p className="separator">{t('Features_Subtitle')}</p>
        </div>
      </div>

      <div className="container">
        {partition(features, 4).map(chunk => (
          <div key={`${chunk[0].title}chunk`} className="row">
            {chunk.map(f => (
              <div key={f.title} className="col-md-6 col-lg-3">
                <div className="feature-block">
                  <img src={f.icon} alt="img" className="img-fluid" />
                  <h4>{f.title}</h4>
                  <p>{f.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

Features.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withIntl()(Features);
