import React, { PureComponent } from 'react'
import ReactDOMServer from 'react-dom/server'
import renderHTML from 'react-render-html'
import converter from 'rel-to-abs'
import './Docs.css'
import pkg from '../../../package.json'

const URL = pkg.sourcecode

class Docs extends PureComponent {
  static defaultProps = {
    children: ''
  };

  render() {
    let content = this.props.children
    if (typeof content !== 'string' && !(content instanceof String)) {
      content = ReactDOMServer.renderToStaticMarkup(content)
    }
    content = content.replace(/>\s+</g,'><')
    content = converter.convert(content, URL)
    content = renderHTML(content)
    return (
      <div className="Storybook-Docs">
        <div className="Storybook-Docs__inner">{content}</div>
      </div>
    )
  }
}

export default Docs
