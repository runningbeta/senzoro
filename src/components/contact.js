import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby';
import Recaptcha from 'react-google-recaptcha';
import classNames from 'classnames';
import validate from 'validate.js';
import { isEmpty } from 'lodash';

import { withIntl } from '../i18n';

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      errors: {},
      visited: {},
      showValidation: false,
    };

    const { t } = this.props;

    this.constraints = {
      name: {
        presence: {
          message: () => t('Contact_Form_RequiredField'),
        },
      },
      email: {
        email: {
          message: () => t('Contact_Form_PleaseEnterValidEmail'),
        },
        presence: {
          message: () => t('Contact_Form_RequiredField'),
        },
      },
      subject: {
        presence: {
          message: () => t('Contact_Form_RequiredField'),
        },
      },
      message: {
        presence: {
          message: () => t('Contact_Form_RequiredField'),
        },
      },
    };
  }

  componentDidMount() {
    const { language } = this.props;
    window.recaptchaOptions = {
      lang: language,
    };
  }

  handleChange = e => {
    const state = { ...this.state, [e.target.name]: e.target.value };
    const errors = validate(state, this.constraints);
    this.setState({ ...state, errors, isValid: isEmpty(errors) });
  };

  handleBlur = e => {
    const { visited } = this.state;

    const state = {
      ...this.state,
      visited: {
        ...visited,
        [e.target.name]: true,
      },
    };
    const errors = validate(state, this.constraints);
    this.setState({ ...state, errors, isValid: isEmpty(errors) });
  };

  handleRecaptcha = value => {
    const state = { ...this.state };
    this.setState({ ...state, gRecaptchaResponse: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { state } = this;
    const errors = validate(state, this.constraints);
    this.setState({
      ...state,
      errors,
      isValid: isEmpty(errors),
      showValidation: true,
    });
    if (!isEmpty(errors)) return;

    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => {
        const { language } = this.props;
        const to = `/${language}${form.getAttribute('action')}`;
        navigateTo(to);
      })
      .catch(alert);
  };

  render() {
    const { t, language = 'en' } = this.props;
    const {
      gRecaptchaResponse,
      errors,
      visited,
      showValidation,
      isValid,
    } = this.state;
    // TODO: Check and verify gRecaptchaResponse with Google servers
    // https://developers.google.com/recaptcha/docs/verify
    const gRecaptchaSuccess = !!gRecaptchaResponse;

    return (
      <section id="contact" className="padd-section wow fadeInUp">
        <div className="container">
          <div className="section-title text-center">
            <h2>{t('Contact_Title')}</h2>
            <p className="separator">{t('Contact_Subtitle')}</p>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4">
              <div className="info">
                <div>
                  <i className="fa fa-map-marker" />
                  <p>
                    Markhofgasse 19
                    <br />
                    1030 Wien
                  </p>
                </div>

                {/* <div className="email">
                  <i className="fa fa-envelope" />
                  <p>info@senzoro.com</p>
                </div> */}

                <div>
                  <i className="fa fa-phone" />
                  <p>+43 660 725 1695</p>
                </div>
              </div>

              {/* <div className="social-links">
                  <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                  <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                  <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                  <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div> */}
            </div>

            <div className="col-lg-5 col-md-8">
              <div className="form">
                <div id="sendmessage">
                  Your message has been sent. Thank you!
                </div>
                <div id="errormessage" />
                <form
                  action="/thanks"
                  className="contactForm"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-recaptcha="true"
                  netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  <noscript>
                    <p>This form won’t work with Javascript disabled</p>
                  </noscript>
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="d-none">
                    <label htmlFor="contact">
                      {`Don’t fill this out if you're human: `}
                      <input name="bot-field" />
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder={t('Contact_Form_YourName')}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    <div className="validation">
                      {(visited.name || showValidation) &&
                        errors &&
                        errors.name &&
                        errors.name[0]}
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder={t('Contact_Form_YourEmail')}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    <div className="validation">
                      {(visited.email || showValidation) &&
                        errors &&
                        errors.email &&
                        errors.email[0]}
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder={t('Contact_Form_Subject')}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    <div className="validation">
                      {(visited.subject || showValidation) &&
                        errors &&
                        errors.subject &&
                        errors.subject[0]}
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder={t('Contact_Form_Message')}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    <div className="validation">
                      {(visited.message || showValidation) &&
                        errors &&
                        errors.message &&
                        errors.message[0]}
                    </div>
                  </div>
                  <Recaptcha
                    ref="recaptcha"
                    className="form-group"
                    hl={language}
                    sitekey={RECAPTCHA_KEY}
                    onChange={this.handleRecaptcha}
                  />
                  <div className="text-center">
                    <button
                      className={classNames('btn', 'btn-primary', 'btn-lg')}
                      type="submit"
                      disabled={!gRecaptchaSuccess || !isValid}
                    >
                      {t('Contact_Form_Button')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {
  language: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withIntl()(Contact);
