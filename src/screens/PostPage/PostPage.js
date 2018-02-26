import React, { Component } from 'react'

import Meta from 'components/Meta'
import Layout from 'displays/Layout'
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
      <Layout breadcrumbs={[this.props.post]}>
        <Meta
          title={this.props.post.title}
          description={this.props.post.excerpt}
        />
        <PostDetails post={this.props.post} />
      </Layout>
    )
  }
}

export default PostPage
