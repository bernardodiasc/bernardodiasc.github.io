import React, { PureComponent } from 'react'
import fecha from 'fecha'
import marked from 'marked'
import renderHTML from 'react-render-html'
import './PostDetails.css'

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
        <h1 className="PostDetails__title">{title}</h1>
        {date && (
          <p className="PostDetails__meta">
            {fecha.format(
              new Date(`${date.substring(0, 10)}T03:00:00.000Z`),
              'dddd MMMM Do, YYYY'
            )}
          </p>
        )}
        <TextBlock>
          {body && renderHTML(marked(body))}
        </TextBlock>
      </div>
    )
  }
}

export default PostDetails
