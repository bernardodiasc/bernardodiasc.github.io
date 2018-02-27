import React, { Component } from 'react'

import Meta from 'components/Meta'
import LayoutContainer from 'containers/LayoutContainer'
import PostDetails from 'displays/PostDetails'

class PostPage extends Component {
  static defaultProps = {
    post: {
      title: '',
      excerpt: '',
    },
  }

  render() {
    return (
      <LayoutContainer>
        <Meta
          title={this.props.post.title}
          description={this.props.post.excerpt}
        />
        <PostDetails post={this.props.post} />
      </LayoutContainer>
    )
  }
}

export default PostPage
