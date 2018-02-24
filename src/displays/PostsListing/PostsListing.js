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
        <ul>
          {this.props.items.map(item => {
            const handle = [
              item.handle.substring(0, 4),
              item.handle.substring(5, 7),
              item.handle.substring(8, 10),
              item.handle.substring(11),
            ].join('/')
            return (
              <li key={item}>
                <AppLink to={handle}>{item.title}</AppLink>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default PostsListing
