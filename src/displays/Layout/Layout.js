import React, { PureComponent } from 'react'
import './Layout.css'

import HeaderBar from './HeaderBar'
import BreadCrumbs from './BreadCrumbs'
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
        <HeaderBar languages={<Languages {...this.props.languages} />} />
        <BreadCrumbs items={this.props.breadcrumbs} />
        {this.props.children}
      </main>
    )
  }
}

export default Layout
