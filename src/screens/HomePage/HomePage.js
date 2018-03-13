import React, { Component } from 'react'

import Meta from 'components/Meta'
import LayoutContainer from 'containers/LayoutContainer'
import PageContent from 'displays/PageContent'
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
        <PageContent>
          <PostsListing items={this.props.posts} />
        </PageContent>
      </LayoutContainer>
    )
  }
}

export default HomePage
