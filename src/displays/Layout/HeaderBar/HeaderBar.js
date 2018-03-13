import React, { PureComponent } from 'react'
import './HeaderBar.css'

import AppLink from 'displays/AppLink'

class HeaderBar extends PureComponent {
  static defaultProps = {
    languages: null,
    tags: [],
    categories: [],
  }

  render() {
    return (
      <div className="Layout-HeaderBar">
        <h1 className="Layout-HeaderBar__title">
          <AppLink>Random Thoughts</AppLink>
        </h1>

        {this.props.languages && (
          <div className="Layout-HeaderBar__languages">
            {this.props.languages}
          </div>
        )}

        <div className="Layout-HeaderBar__about">
          <img
            className="Layout-HeaderBar__about-picture"
            src="/images/me.jpg"
            alt="Bernardo Dias da Cruz"
          />
          <p>I&apos;m <strong>Bernardo Dias da Cruz</strong>,<br/>a senior web developer.</p>
          <p><AppLink to="about-me">Click here to know more about me.</AppLink></p>
          <p className="Layout-HeaderBar__social">
            <span>Follow me on </span>
            <a
              href="https://github.com/bernardodiasc"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span> and </span>
            <a
              href="https://twitter.com/bernardodiasc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
        </div>

        <nav className="Layout-HeaderBar__further">
          <h2>Looking further?</h2>
          <ul className="Layout-HeaderBar__further-list">
            <li className="Layout-HeaderBar__further-item">
              <AppLink to={'archive'}>Archive</AppLink>
            </li>
            <li className="Layout-HeaderBar__further-item">
              <AppLink to={'search'}>Search for content</AppLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default HeaderBar
