import React, { PureComponent } from 'react'
import './PostsListing.css'

import AppLink from 'displays/AppLink'
import PostHeader from 'displays/PostHeader'

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
            <section key={handle} className="PostsListing__each">
              <AppLink to={handle} className="PostsListing__link">
                <PostHeader
                  mode="listing"
                  title={item.title}
                  date={item.date}
                  excerpt={item.excerpt}
                  category={item.category}
                  tags={item.tags}
                />
              </AppLink>
            </section>
          )
        })}
      </div>
    )
  }
}

export default PostsListing
