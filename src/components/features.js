import { Image } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import PaintPalette from '../img/svg/paint-palette.svg'
import Vector from '../img/svg/vector.svg'
import DesignTool from '../img/svg/design-tool.svg'
import Code from '../img/svg/code.svg'
import Pixel from '../img/svg/pixel.svg'
import Asteroid from '../img/svg/asteroid.svg'
import CloudComputing from '../img/svg/cloud-computing.svg'

const Features = ({ siteTitle }) => (
    <section id="features" class="padd-section text-center wow fadeInUp">

    <div class="container">
      <div class="section-title text-center">
        <h2>Amazing Features.</h2>
        <p class="separator">Integer cursus bibendum augue ac cursus .</p>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-md-6 col-lg-3">
          <div class="feature-block">
            <img src={PaintPalette} alt="img" class="img-fluid" />
            <h4>creative design</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="feature-block">
            <img src={Vector} alt="img" class="img-fluid" />
            <h4>Retina Ready</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="feature-block">
            <img src={DesignTool} alt="img" class="img-fluid" />
            <h4>easy to use</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="feature-block">
            <img src={Asteroid} alt="img" class="img-fluid" />
            <h4>Free Updates</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="feature-block">
            <img src={Asteroid} alt="img" class="img-fluid" />
            <h4>Free Updates</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="feature-block">
            <img src={CloudComputing} alt="img" class="img-fluid" />
            <h4>App store support</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="feature-block">
            <img src={Pixel} alt="img" class="img-fluid" />
            <h4>Perfect Pixel</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="feature-block">
            <img src={Code} alt="img" class="img-fluid" />
            <h4>clean codes</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
        </div>

      </div>
    </div>
  </section>
)

Features.propTypes = {
  siteTitle: PropTypes.string,
}

Features.defaultProps = {
  siteTitle: ``,
}

export default Features
