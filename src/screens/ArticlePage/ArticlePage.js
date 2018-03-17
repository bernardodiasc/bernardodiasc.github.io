import React, { Component } from 'react'

import Meta from 'components/Meta'
import LayoutContainer from 'containers/LayoutContainer'
import PageContent from 'displays/PageContent'
import TextBlock from 'displays/TextBlock'
import MarkdownRenderer from 'displays/MarkdownRenderer'

class ArticlePage extends Component {
  static defaultProps = {
    article: {
      title: '',
      excerpt: '',
      body: '',
    },
  }

  render() {
    const { title, excerpt, body } = this.props.article
    return (
      <LayoutContainer>
        <Meta
          title={title}
          description={excerpt}
        />
        <PageContent>
          <TextBlock>
            <MarkdownRenderer text={body} />
          </TextBlock>
        </PageContent>
      </LayoutContainer>
    )
  }
}

export default ArticlePage
