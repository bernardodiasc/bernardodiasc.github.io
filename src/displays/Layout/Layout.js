import React, { PureComponent } from 'react'
import './Layout.css'

import AppLink from 'displays/AppLink'
import Tabs from './Tabs'

class Layout extends PureComponent {
  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <main className="Layout">
        <header className="Layout__header">
          <h1 className="Layout__header-title">
            <AppLink>Random Thoughts</AppLink>
          </h1>
          <Tabs />
        </header>
        <article className="Layout__content">
          <div className="Layout__content-inner">
            {this.props.children}
          </div>
        </article>
      </main>
    )
  }
}

export default Layout
