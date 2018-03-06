import React, { Component } from 'react'

import Meta from 'components/Meta'
import LayoutContainer from 'containers/LayoutContainer'

class CategoryPage extends Component {
  static defaultProps = {}

  render() {
    return (
      <LayoutContainer>
        <Meta
          title="Archive of content"
          description=""
        />
        to do:<br/>
        display category title, descirption and poster<br/>
        and show available posts on PostsListing below<br/>
      </LayoutContainer>
    )
  }
}

export default CategoryPage
