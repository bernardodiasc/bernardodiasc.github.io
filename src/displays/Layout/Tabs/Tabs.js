import React, { PureComponent } from 'react'
import './Tabs.css'

import AppLink from 'displays/AppLink'
import Icon from 'displays/Icon'

class Tabs extends PureComponent {
  static defaultProps = {}

  render() {
    return (
      <ul className="Layout-Tabs">
        <li className="Layout-Tabs__tab">
          <AppLink
            to="/"
            title="Latest posts"
            className="Layout-Tabs__link"
            activeClassName="Layout-Tabs__link--active"
          >
            <Icon icon="home" />
          </AppLink>
        </li>
        <li className="Layout-Tabs__tab">
          <AppLink
            to="search"
            title="Search for content"
            className="Layout-Tabs__link"
            activeClassName="Layout-Tabs__link--active"
          >
            <Icon icon="explore" />
          </AppLink>
        </li>
        <li className="Layout-Tabs__tab">
          <AppLink
            to="archive"
            title="Content archive"
            className="Layout-Tabs__link"
            activeClassName="Layout-Tabs__link--active"
          >
            <Icon icon="calendar" />
          </AppLink>
        </li>
        <li className="Layout-Tabs__tab">
          <AppLink
            to="about-me"
            title="About me"
            className="Layout-Tabs__link"
            activeClassName="Layout-Tabs__link--active"
          >
            <Icon icon="guy-fawkes-mask" />
          </AppLink>
        </li>
      </ul>
    )
  }
}

export default Tabs
