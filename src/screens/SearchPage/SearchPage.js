import React, { Component } from 'react'

import Meta from 'components/Meta'
import LayoutContainer from 'containers/LayoutContainer'
import AppLink from 'displays/AppLink'
import PageContent from 'displays/PageContent'
import TextBlock from 'displays/TextBlock'

class SearchPage extends Component {
  static defaultProps = {
    allCategories: [],
    allTags: [],
  }

  render() {
    const { allCategories, allTags } = this.props
    return (
      <LayoutContainer>
        <Meta
          title="Filter content"
          description=""
        />
        <PageContent>
          <h1>To do:</h1>
          make the stuff below works<br/>
          and also make look better<br/>
          and also include a search input

          <TextBlock>
            <hr/>

            {allCategories.length > 0 && (
              <nav>
                <h3>Categories</h3>
                <ul>
                  {allCategories.map(category => (
                    <li key={category}>
                      <AppLink to={`category/${category}`}>{category}</AppLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {allTags.length > 0 && (
              <nav>
                <h3>Tags</h3>
                <ul>
                  {allTags.map(tag => (
                    <li key={tag}>
                      <AppLink to={`search/?${tag}`}>{tag}</AppLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </TextBlock>
        </PageContent>
      </LayoutContainer>
    )
  }
}

export default SearchPage
