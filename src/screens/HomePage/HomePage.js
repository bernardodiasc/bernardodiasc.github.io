import React, { Component } from 'react'

import Meta from 'components/Meta'
import LayoutContainer from 'containers/LayoutContainer'
import PostsListing from 'displays/PostsListing'

class HomePage extends Component {
  static defaultProps = {
    posts: [],
  }

  render() {
    return (
      <LayoutContainer>
        <Meta
          title="Random Thoughts"
          description="A web developer and thinker."
        />
        <PostsListing items={this.props.posts} />
      </LayoutContainer>
    )
  }
}

export default HomePage
