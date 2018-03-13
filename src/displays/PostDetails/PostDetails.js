import React, { PureComponent } from 'react'
import marked from 'marked'
import renderHTML from 'react-render-html'
import './PostDetails.css'

import PostHeader from 'displays/PostHeader'
import TextBlock from 'displays/TextBlock'

class PostDetails extends PureComponent {
  static defaultProps = {
    post: {
      title: '',
      date: '',
      body: '',
    },
  }

  render() {
    const { title, date, body } = this.props.post
    return (
      <div className="PostDetails">
        <PostHeader title={title} date={date} />
        <TextBlock>
          {body && renderHTML(marked(body))}
        </TextBlock>
      </div>
    )
  }
}

export default PostDetails
