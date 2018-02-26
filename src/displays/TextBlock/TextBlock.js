import React, { PureComponent } from 'react'
import './TextBlock.css'

class TextBlock extends PureComponent {
  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <div className="TextBlock">
        {this.props.children}
      </div>
    )
  }
}

export default TextBlock
