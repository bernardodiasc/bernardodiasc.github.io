import React, { Component } from 'react'

import Meta from 'components/Meta'
import LayoutContainer from 'containers/LayoutContainer'
import PostDetails from 'displays/PostDetails'
import Disqus from 'displays/Disqus'

class PostPage extends Component {
  static defaultProps = {
    post: {},
  }

  render() {
    const { handle, title, excerpt, thumbnail } = this.props.post
    const image = thumbnail ? `content/${thumbnail}` : ''
    return (
      <LayoutContainer>
        <Meta
          title={title}
          description={excerpt}
          image={image}
        />
        <PostDetails post={this.props.post} />
        <Disqus
          identifier={handle}
          title={title}
        />
      </LayoutContainer>
    )
  }
}

export default PostPage
