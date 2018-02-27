import React, { PureComponent } from 'react'
import './Layout.css'

import HeaderBar from './HeaderBar'
import Languages from './Languages'

class Layout extends PureComponent {
  static defaultProps = {
    children: null,
    breadcrumbs: [],
    languages: {},
  }

  render() {
    return (
      <main className="Layout">
        <div className="Layout__headerbar">
          <HeaderBar languages={<Languages {...this.props.languages} />} />
        </div>
        <article className="Layout__content">
          {this.props.children}
        </article>
      </main>
    )
  }
}

export default Layout
