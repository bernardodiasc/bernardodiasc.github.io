import React, { PureComponent } from 'react'
import './Layout.css'

import HeaderBar from './HeaderBar'

class Layout extends PureComponent {
  static defaultProps = {
    children: null,
    breadcrumbs: [],
    languages: {},
    allTags: [],
    allCategories: [],
  }

  render() {
    return (
      <main className="Layout">
        <div className="Layout__headerbar">
          <HeaderBar
            tags={this.props.allTags}
            categories={this.props.allCategories}
          />
        </div>
        <article className="Layout__content">
          {this.props.children}
        </article>
      </main>
    )
  }
}

export default Layout
