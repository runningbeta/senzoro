import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { withIntl } from '../i18n';

const Video = ({ t, url }) => (
  <div className="container">
    <div className="section-title text-center">
      <h2>{t('Video_Title')}</h2>
      <p className="separator" />
    </div>
    <section className="text-center wow fadeInUp">
      <div className="overlay">
        <div className="container-fluid container-full">
          <div className="row" style={{ justifyContent: 'center' }}>
            <ReactPlayer url={url} width="100%" height="500px" controls />
          </div>
        </div>
      </div>
    </section>
  </div>
);

Video.propTypes = {
  url: PropTypes.string,
  t: PropTypes.func.isRequired,
};

Video.defaultProps = {
  url: 'https://www.youtube.com/watch?v=WOIFQCOeso4',
};

export default withIntl()(Video);
