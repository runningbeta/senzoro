import { Image } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import heroImg from '../img/hero-img.png'

const Hero = ({ siteTitle }) => (
  <section id="hero" class="wow fadeIn">
    <div class="hero-container">
      <h1>Welcome to eStartups</h1>
      <h2>Elegant Bootstrap Template for Startups, Apps &amp; more...</h2>
      <img src={heroImg} alt="Hero Imgs" />
      <a href="#get-started" class="btn-get-started scrollto">Contact Us</a>
    </div>
  </section>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
