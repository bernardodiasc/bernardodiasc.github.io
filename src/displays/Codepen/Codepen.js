import React, { PureComponent } from 'react'
import './Codepen.css'

class Codepen extends PureComponent {
  static defaultProps = {
    hash: '',
    height: '',
    title: '',
  }

  render() {
    const { hash, height, title } = this.props
    return (
      <iframe
        className="Codepen"
        height={height}
        scrolling="no"
        title={title}
        src={`//codepen.io/bernardodiasc/embed/${hash}/?height=${height}&theme-id=0&default-tab=result&embed-version=2`}
        frameBorder="no"
        allowTransparency="true"
        allowFullScreen="true"
      >
        See the Pen <a href={`https://codepen.io/bernardodiasc/pen/${hash}/`}>{title}</a> by Bernardo Dias (<a href="https://codepen.io/bernardodiasc">@bernardodiasc</a>) on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    )
  }
}

export default Codepen
