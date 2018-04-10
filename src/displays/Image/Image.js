import React, { PureComponent } from 'react'
import './Image.css'

class Image extends PureComponent {
  static defaultProps = {
    alt: '',
    src: '',
    caption: '',
  }

  render() {
    const { alt, src, captions } = this.props
    return (
      <figure className="Image">
        <img alt={alt} src={src} />
        {captions && <figcaption>{captions}</figcaption>}
      </figure>
    )
  }
}

export default Image
