import React, { Component } from 'react';

import { Link } from 'gatsby';
import { withIntl, languages } from '../i18n';

class LanguageSelector extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (this.dropdownMenu && !this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    const { showMenu } = this.state;
    const { language = 'en', originalPath } = this.props;

    const currentLanguageLabel = Object.entries(languages).find(
      e => e[0] === language
    );

    return (
      <li className="dropdown show">
        <button
          type="button"
          className="btn btn-outline-dark btn-select-language"
          onClick={this.showMenu}
        >
          {currentLanguageLabel && currentLanguageLabel[1]}
        </button>

        {showMenu ? (
          <div
            className="dropdown-menu show"
            aria-labelledby="dropdownMenuLink"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            {Object.entries(languages).map(([code, label]) =>
              code === language ? (
                <Link
                  className="dropdown-item"
                  disabled
                  key={code}
                  to={`${code}${originalPath || ''}`}
                >
                  {label}
                </Link>
              ) : (
                <Link
                  className="dropdown-item"
                  key={code}
                  to={`${code}${originalPath || ''}`}
                >
                  {label}
                </Link>
              )
            )}
          </div>
        ) : null}
        <div />
      </li>
    );
  }
}

export default withIntl()(LanguageSelector);
