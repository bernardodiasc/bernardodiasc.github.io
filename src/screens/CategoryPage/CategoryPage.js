import React, { Component } from 'react'

import Meta from 'components/Meta'
import LayoutContainer from 'containers/LayoutContainer'
import PageContent from 'displays/PageContent'

class CategoryPage extends Component {
  static defaultProps = {}

  render() {
    return (
      <LayoutContainer>
        <Meta
          title="Archive of content"
          description=""
        />
        <PageContent>
          <h1>To do:</h1>
          display category title, descirption and poster<br/>
          and show available posts on PostsListing below<br/>
        </PageContent>
      </LayoutContainer>
    )
  }
}

export default CategoryPage
