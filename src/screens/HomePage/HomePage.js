import React, { Component } from 'react'

import Meta from 'components/Meta'
import Layout from 'displays/Layout'
import PostsListing from 'displays/PostsListing'

class HomePage extends Component {
  static defaultProps = {
    posts: [],
  }

  render() {
    return (
      <Layout>
        <Meta />
        <PostsListing items={this.props.posts} />
      </Layout>
    )
  }
}

export default HomePage
