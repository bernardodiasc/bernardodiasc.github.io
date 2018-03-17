import React, { PureComponent } from 'react'
import './PostDetails.css'

import PostHeader from 'displays/PostHeader'
import TextBlock from 'displays/TextBlock'
import MarkdownRenderer from 'displays/MarkdownRenderer'

class PostDetails extends PureComponent {
  static defaultProps = {
    post: {
      title: '',
      date: '',
      category: {
        handle: '',
        title: '',
        icon: '',
      },
      body: '',
    },
  }

  render() {
    const {
      title,
      date,
      category,
      body,
    } = this.props.post
    return (
      <div className="PostDetails">
        <PostHeader
          mode="details"
          title={title}
          date={date}
          category={category}
        />
        <TextBlock>
          <MarkdownRenderer text={body} />
        </TextBlock>
      </div>
    )
  }
}

export default PostDetails
