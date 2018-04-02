import React, { PureComponent } from 'react'
import { DiscussionEmbed } from 'disqus-react'
import './Disqus.css'
import config from 'config'

class Disqus extends PureComponent {
  static defaultProps = {
    identifier: '',
    title: '',
  }

  render() {
    const disqusShortname = 'bernardodiasc'
    const disqusConfig = {
      url: `${config.homepage}${window.location.pathname}`,
      identifier: this.props.identifier,
      title: this.props.title,
    }
    return window.location.hostname !== 'localhost' ? (
      <div className="Disqus">
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    ) : null
  }
}

export default Disqus
