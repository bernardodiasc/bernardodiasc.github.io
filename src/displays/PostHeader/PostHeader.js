import React, { PureComponent } from 'react'
import fecha from 'fecha'
import './PostHeader.css'

class PostHeader extends PureComponent {
  static defaultProps = {
    title: '',
    date: '',
    excerpt: '',
  }

  render() {
    const { title, date, excerpt } = this.props
    return title ? (
      <div className="PostHeader">
        <h1 className="PostHeader__title">{title}</h1>
        {date && (
          <p className="PostHeader__meta">
            {fecha.format(
              new Date(`${date.substring(0, 10)}T03:00:00.000Z`),
              'dddd MMMM Do, YYYY'
            )}
          </p>
        )}
        {excerpt && <p className="PostHeader__excerpt">{excerpt}</p>}
      </div>
    ) : null
  }
}

export default PostHeader
