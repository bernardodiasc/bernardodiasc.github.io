import React, { PureComponent } from 'react'
import './BreadCrumbs.css'

import AppLink from 'displays/AppLink'

class BreadCrumbs extends PureComponent {
  static defaultProps = {
    items: [],
  }

  render() {
    return this.props.items.length > 0 && (
      <ul className="Layout-BreadCrumbs">
        <li className="Layout-BreadCrumbs__item">
          <AppLink>
            <span aria-label="home" role="img">🏡</span>
          </AppLink>
        </li>
        {this.props.items.map(item => (
          <li
            key={item.handle}
            className="Layout-BreadCrumbs__item"
          >
            {item.title}
          </li>
        ))}
      </ul>
    )
  }
}

export default BreadCrumbs
