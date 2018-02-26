import React, { PureComponent } from 'react'
import './PostsListing.css'

import AppLink from 'displays/AppLink'

class PostsListing extends PureComponent {
  static defaultProps = {
    items: [],
  }

  render() {
    return (
      <div className="PostsListing">
        {this.props.items.map(item => {
          const handle = [
            item.handle.substring(0, 4),
            item.handle.substring(5, 7),
            item.handle.substring(8, 10),
            item.handle.substring(11),
          ].join('/')
          return (
            <section key={item} className="PostsListing__each">
              <AppLink to={handle} className="PostsListing__link">
                <h1 className="PostsListing__title">{item.title}</h1>
                <p className="PostsListing__date">{item.date}</p>
                <p className="PostsListing__excerpt">{item.excerpt}</p>
              </AppLink>
            </section>
          )
        })}
      </div>
    )
  }
}

export default PostsListing
