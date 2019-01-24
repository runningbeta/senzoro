import { Image } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import TeamMemberOne from '../img/team/markus-loinig.jpg'
import TeamMemberTwo from '../img/team/ivan-vican.jpg'
import TeamMemberThree from '../img/team/3.jpg'

const Team = () => (
  <section id="team" class="padd-section text-center wow fadeInUp">
    <div class="container">
      <div class="section-title text-center">
        <h2>Team Member</h2>
        <p class="separator">Integer cursus bibendum augue ac cursus .</p>
      </div>
    </div>
    <div class="container">
      <div class="row">

        <div class="col-sm-6 col-md-4">
          <div class="team-block bottom">
            <img src={TeamMemberOne} class="img-responsive" alt="img" />
            <div class="team-content">
              <ul class="list-unstyled">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
              </ul>
              <span>Chief Executive Officer</span>
              <h4>Markus Loinig</h4>
            </div>
          </div>
        </div>

       <div class="col-sm-6 col-md-4">
          <div class="team-block bottom">
            <img src={TeamMemberTwo} class="img-responsive" alt="img" />
            <div class="team-content">
              <ul class="list-unstyled">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
              </ul>
              <span>Head of Data Science</span>
              <h4>Ivan Vican</h4>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-md-4">
          <div class="team-block bottom">
            <img src={TeamMemberThree} class="img-responsive" alt="img" />
            <div class="team-content">
              <ul class="list-unstyled">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
              </ul>
              <span>Head of Technology</span>
              <h4>Ivan Fabijanović</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
)

Team.propTypes = {
  siteTitle: PropTypes.string,
}

Team.defaultProps = {
  siteTitle: ``,
}

export default Team
