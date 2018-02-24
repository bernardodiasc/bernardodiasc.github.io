import React, { PureComponent } from 'react'
import './Layout.css'

import HeaderBar from './HeaderBar'
import BreadCrumbs from './BreadCrumbs'

class Layout extends PureComponent {
  static defaultProps = {
    children: null,
    breadcrumbs: [],
  }

  render() {
    return (
      <main className="Layout">
        <HeaderBar />
        <BreadCrumbs items={this.props.breadcrumbs} />
        {this.props.children}
      </main>
    )
  }
}

export default Layout
