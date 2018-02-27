import React, { PureComponent } from 'react'
import { DiscussionEmbed } from 'disqus-react'
import './Disqus.css'

class Disqus extends PureComponent {
  static defaultProps = {
    url: '',
    identifier: '',
    title: '',
  }

  render() {
    const disqusShortname = 'bernardodiasc'
    const disqusConfig = {
      // url: this.props.url,
      identifier: this.props.identifier,
      title: this.props.title,
    }

    return (
      <div className="Disqus">
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}

export default Disqus
