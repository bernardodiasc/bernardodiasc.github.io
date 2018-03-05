import React, { Component } from 'react'

import Meta from 'components/Meta'
import LayoutContainer from 'containers/LayoutContainer'

class ArticlePage extends Component {
  static defaultProps = {
    article: {
      title: '',
      excerpt: '',
      body: '',
    },
  }

  render() {
    return (
      <LayoutContainer>
        <Meta
          title={this.props.article.title}
          description={this.props.article.excerpt}
        />
        {this.props.article.body}
      </LayoutContainer>
    )
  }
}

export default ArticlePage
