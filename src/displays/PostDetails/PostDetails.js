import React, { PureComponent } from 'react'
import marked from 'marked'
import renderHTML from 'react-render-html'
import './PostDetails.css'

class PostDetails extends PureComponent {
  static defaultProps = {
    post: {
      title: '',
      date: '',
      body: '',
    },
  }

  render() {
    return (
      <div className="PostDetails">
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.date}</p>
        {renderHTML(marked(this.props.post.body))}
      </div>
    )
  }
}

export default PostDetails
