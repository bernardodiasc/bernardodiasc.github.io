import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import config from 'config'
import './AppLink.css'

class AppLink extends PureComponent {
  static defaultProps = {
    to: '',
    className: '',
    children: null,
  }

  render() {
    const to = `${config.PUBLIC_URL}/${this.props.to !== '/' ? this.props.to : ''}`
    return this.props.children && (
      <NavLink
        exact
        {...this.props}
        to={to}
        className={`AppLink ${this.props.className}`}
      />
    )
  }
}

export default AppLink
