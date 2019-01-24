import { Image } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Cloud from '../img/svg/cloud.svg'
import Planet from '../img/svg/planet.svg'
import Asteroid from '../img/svg/asteroid.svg'

const ThreeColumn = () => (
    <section id="get-started" class="padd-section text-center wow fadeInUp">
      <div class="container">
        <div class="section-title text-center">
          <h2>simple systeme fordiscount </h2>
          <p class="separator">Integer cursus bibendum augue ac cursus .</p>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="feature-block">
              <img src={Cloud} alt="img" class="img-fluid" />
              <h4>introducing whatsapp</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <a href="#">read more</a>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="feature-block">
              <img src={Planet} alt="img" class="img-fluid" />
              <h4>user friendly interface</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <a href="#">read more</a>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="feature-block">
              <img src={Asteroid} alt="img" class="img-fluid" />
              <h4>build the app everyone love</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <a href="#">read more</a>
            </div>
          </div>
      </div>
    </div>
  </section>
)

ThreeColumn.propTypes = {
  siteTitle: PropTypes.string,
}

ThreeColumn.defaultProps = {
  siteTitle: ``,
}

export default ThreeColumn
