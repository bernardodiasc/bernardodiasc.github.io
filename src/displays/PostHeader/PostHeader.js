import React, { PureComponent } from 'react'
import fecha from 'fecha'
import './PostHeader.css'

import AppLink from 'displays/AppLink'
import Icon from 'displays/Icon'

class PostHeader extends PureComponent {
  static defaultProps = {
    mode: '',
    title: '',
    date: '',
    excerpt: '',
    category: {
      handle: '',
      title: '',
      icon: '',
    },
  }

  render() {
    const {
      mode,
      title,
      date,
      excerpt,
      category,
    } = this.props
    return title ? (
      <div className={`PostHeader ${mode ? `PostHeader--${mode}` : ''}`}>
        {mode === 'details' && category.title && (
          <p className="PostHeader__category">
            <AppLink
              to={`category/${category.handle}`}
              className="PostHeader__category-link"
            >
              {category.icon && (
                <span className="PostHeader__icon">
                  <Icon icon={category.icon} />
                </span>
              )}
              {category.title}
            </AppLink>
          </p>
        )}
        <h1 className="PostHeader__title">
          {mode === 'listing' && category.icon && (
            <span className="PostHeader__icon">
              <Icon icon={category.icon} />
            </span>
          )}
          {title}
        </h1>
        {date && (
          <p className="PostHeader__meta">
            {fecha.format(
              new Date(`${date.substring(0, 10)}T03:00:00.000Z`),
              'dddd MMMM Do, YYYY'
            )}
          </p>
        )}
        {excerpt && (
          <p className="PostHeader__excerpt">{excerpt}</p>
        )}
      </div>
    ) : null
  }
}

export default PostHeader
