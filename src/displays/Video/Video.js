import React, { PureComponent } from 'react'
import './Video.css'

class Video extends PureComponent {
  static defaultProps = {
    width: '560',
    height: '315',
    id: '',
  }

  render() {
    return this.props.id ? (
      <div className="Video">
        <iframe
          title={this.props.id}
          width={this.props.width}
          height={this.props.height}
          src={`https://www.youtube.com/embed/${this.props.id}?rel=0`}
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    ) : null
  }
}

export default Video
