import React, { Component } from 'react'

import Meta from 'components/Meta'
import Layout from 'displays/Layout'
import PostDetails from 'displays/PostDetails'

class PostPage extends Component {
  static defaultProps = {
    post: {},
  }

  render() {
    return (
      <Layout breadcrumbs={[this.props.post]}>
        <Meta title={this.props.post.title} />
        <PostDetails post={this.props.post} />
      </Layout>
    )
  }
}

export default PostPage
