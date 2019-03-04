import PropTypes from 'prop-types';
import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { withIntl } from '../i18n';

import TeamMemberOne from '../images/team/markus-loinig-3.jpg';
import TeamMemberTwo from '../images/team/ivan-vican-3.jpg';
import TeamMemberThree from '../images/team/ivan-fabijanovic-2.jpg';

const Team = ({ t }) => (
  <section id="team" className="padd-section text-center wow fadeInUp">
    <div className="container">
      <div className="section-title text-center">
        <h2>{t('Team_Title')}</h2>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="team-block bottom">
            <div className="team-header">
              <span>{t('Team_Person1_Title')}</span>
              <h4>{t('Team_Person1_Name')}</h4>
            </div>
            <img src={TeamMemberOne} className="img-responsive" alt="img" />
            <div className="team-content">
              <div className="team-bio">
                <span>{t('Team_Person1_Bio')}</span>
              </div>
              <ul className="list-unstyled">
                <li>
                  <OutboundLink
                    href="https://linkedin.com/in/markus-w-loinig-b31aa6b5"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Read more on Marcus LinkedIn"
                  >
                    <i className="fa fa-linkedin" />
                  </OutboundLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="team-block bottom">
            <div className="team-header">
              <span>{t('Team_Person2_Title')}</span>
              <h4>{t('Team_Person2_Name')}</h4>
            </div>
            <img src={TeamMemberTwo} className="img-responsive" alt="img" />
            <div className="team-content">
              <div className="team-bio">
                <span>{t('Team_Person2_Bio')}</span>
              </div>
              <ul className="list-unstyled">
                <li>
                  <OutboundLink
                    href="https://www.linkedin.com/in/ivanvican/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Read more on Ivan Vican LinkedIn"
                  >
                    <i className="fa fa-linkedin" />
                  </OutboundLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="team-block bottom">
            <div className="team-header">
              <span>{t('Team_Person3_Title')}</span>
              <h4>{t('Team_Person3_Name')}</h4>
            </div>
            <img src={TeamMemberThree} className="img-responsive" alt="img" />
            <div className="team-content">
              <div className="team-bio">
                <span>{t('Team_Person3_Bio')}</span>
              </div>
              <ul className="list-unstyled">
                <li>
                  <OutboundLink
                    href="https://linkedin.com/in/ifabijanovic"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Read more on Ivan Fabijanovic LinkedIn"
                  >
                    <i className="fa fa-linkedin" />
                  </OutboundLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Team.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withIntl()(Team);
