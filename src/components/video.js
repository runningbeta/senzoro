import { Image } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import heroImg from '../img/hero-img.png'

const Video = () => (
  <section id="video" class="text-center wow fadeInUp">
    <div class="overlay">
      <div class="container-fluid container-full">
        <div class="row">
          <a href="#" class="js-modal-btn play-btn" data-video-id="s22ViV7tBKE"></a>
        </div>
      </div>
    </div>
  </section>
)

Video.propTypes = {
  siteTitle: PropTypes.string,
}

Video.defaultProps = {
  siteTitle: ``,
}

export default Video
