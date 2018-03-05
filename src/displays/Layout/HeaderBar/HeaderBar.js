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
      <header className="Layout-HeaderBar">
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
          <p>I&apos;m <strong>Bernardo Dias da Cruz</strong>,<br/>a web developer and thinker.</p>
          <p><AppLink to="about-me">More about me.</AppLink></p>
          <p className="Layout-HeaderBar__social">
            <span>Follow me on </span>
            <a
              href="https://twitter.com/bernardodiasc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <span> and </span>
            <a
              href="https://github.com/bernardodiasc"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>.
          </p>
        </div>

        <div style={{display: 'none'}}>
          <h2>Filter posts</h2>
          <AppLink to={'archive'}>Archive</AppLink>

          {this.props.categories.length > 0 && (
            <nav>
              <h3>Categories</h3>
              <ul>
                {this.props.categories.map(category => (
                  <li key={category}>
                    <AppLink to={`category/${category}`}>{category}</AppLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {this.props.tags.length > 0 && (
            <nav>
              <h3>Tags</h3>
              <ul>
                {this.props.tags.map(tag => (
                  <li key={tag}>
                    <AppLink to={`search/?${tag}`}>{tag}</AppLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
    )
  }
}

export default HeaderBar
