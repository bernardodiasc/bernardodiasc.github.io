import React, { PureComponent } from 'react'
import './PostDetails.css'

import PostHeader from 'displays/PostHeader'
import TextBlock from 'displays/TextBlock'
import MarkdownRenderer from 'displays/MarkdownRenderer'
import Share from 'displays/Share'

class PostDetails extends PureComponent {
  static defaultProps = {
    post: {
      handle: '',
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
      handle,
      title,
      date,
      category,
      body,
    } = this.props.post
    const url = handle ? [
      handle.substring(0, 4),
      handle.substring(5, 7),
      handle.substring(8, 10),
      handle.substring(11),
    ].join('/') : ''

    return (
      <div className="PostDetails">
        <PostHeader
          mode="details"
          title={title}
          date={date}
          category={category}
        />
        {title && url && (
          <Share title={title} url={`${window.location.hostname}/${url}`} />
        )}
        <TextBlock>
          <MarkdownRenderer text={body} />
        </TextBlock>
      </div>
    )
  }
}

export default PostDetails
