import React, { Component } from 'react'
import marked from 'marked'
import renderHTML from 'react-render-html'

import Meta from 'components/Meta'
import LayoutContainer from 'containers/LayoutContainer'
import TextBlock from 'displays/TextBlock'

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
        <TextBlock>
          {body && renderHTML(marked(body))}
        </TextBlock>
      </LayoutContainer>
    )
  }
}

export default ArticlePage
