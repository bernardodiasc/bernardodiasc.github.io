import React, { Component } from 'react'

import Layout from 'displays/Layout'
import PostsListing from 'displays/PostsListing'

class HomePage extends Component {
  static defaultProps = {
    posts: [],
  }

  render() {
    return (
      <Layout>
        <PostsListing items={this.props.posts} />
      </Layout>
    )
  }
}

export default HomePage
