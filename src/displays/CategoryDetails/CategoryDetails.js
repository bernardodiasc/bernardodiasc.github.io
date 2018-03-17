import React, { PureComponent } from 'react'
import './CategoryDetails.css'

import TextBlock from 'displays/TextBlock'
import MarkdownRenderer from 'displays/MarkdownRenderer'

class CategoryDetails extends PureComponent {
  static defaultProps = {
    category: {
      title: '',
      icon: '',
      body: '',
    },
  }

  render() {
    const { title, body } = this.props.category
    return (
      <div className="CategoryDetails">
        <TextBlock>
          <h1><small>Category:</small><br />{title}</h1>
          <MarkdownRenderer text={body} />
          <hr />
        </TextBlock>
      </div>
    )
  }
}

export default CategoryDetails
