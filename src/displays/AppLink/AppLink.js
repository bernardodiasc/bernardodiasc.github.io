import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import config from 'config'
import './AppLink.css'

class AppLink extends PureComponent {
  static defaultProps = {
    to: '',
    children: null,
  }

  render() {
    const to = `${config.PUBLIC_URL}/${this.props.to}`
    return this.props.children && (
      <Link
        {...this.props}
        to={to}
        className={`AppLink ${this.props.className}`}
      />
    )
  }
}

export default AppLink
