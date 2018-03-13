import React, { Component } from 'react'

import Meta from 'components/Meta'
import LayoutContainer from 'containers/LayoutContainer'
import PageContent from 'displays/PageContent'
import CategoryDetails from 'displays/CategoryDetails'
import PostsListing from 'displays/PostsListing'

class CategoryPage extends Component {
  static defaultProps = {
    category: {},
    posts: [],
  }

  render() {
    return (
      <LayoutContainer>
        <Meta
          title={`Category: ${this.props.category.title}`}
          description={this.props.category.body}
        />
        <PageContent>
          <CategoryDetails category={this.props.category} />
          <PostsListing items={this.props.posts} />
        </PageContent>
      </LayoutContainer>
    )
  }
}

export default CategoryPage
