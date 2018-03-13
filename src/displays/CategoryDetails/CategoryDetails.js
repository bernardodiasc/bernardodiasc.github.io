import React, { PureComponent } from 'react'
import marked from 'marked'
import renderHTML from 'react-render-html'
import './CategoryDetails.css'

import TextBlock from 'displays/TextBlock'

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
          {body && renderHTML(marked(body))}
          <hr />
        </TextBlock>
      </div>
    )
  }
}

export default CategoryDetails
