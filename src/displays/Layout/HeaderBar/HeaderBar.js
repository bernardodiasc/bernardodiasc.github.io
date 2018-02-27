import React, { PureComponent } from 'react'
import './HeaderBar.css'

import AppLink from 'displays/AppLink'

class HeaderBar extends PureComponent {
  static defaultProps = {
    languages: null,
  }

  render() {
    return (
      <header className="Layout-HeaderBar">
        <h1 className="Layout-HeaderBar__title">
          <AppLink>Random Thoughts</AppLink>
        </h1>
        {this.props.languages && (
          <div className="Layout-HeaderBar__languages">
            {this.props.languages}
          </div>
        )}
        <a
          className="Layout-HeaderBar__social"
          href="https://twitter.com/bernardodiasc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="Layout-HeaderBar__social"
          href="https://github.com/bernardodiasc"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    )
  }
}

export default HeaderBar
