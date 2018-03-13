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
    return (
      <LayoutContainer>
        <Meta
          title={this.props.post.title}
          description={this.props.post.excerpt}
        />
        <PostDetails post={this.props.post} />
        <Disqus
          identifier={this.props.post.handle}
          title={this.props.post.title}
        />
      </LayoutContainer>
    )
  }
}

export default PostPage
