import React, { PureComponent } from 'react'
import './Centered.css'

class Centered extends PureComponent {
  static defaultProps = {
    children: ''
  };

  render() {
    let children = this.props.children
    return (
      <div className="Storybook-Centered">
        <div className="Storybook-Centered__inner">{children}</div>
      </div>
    )
  }
}

export default Centered
