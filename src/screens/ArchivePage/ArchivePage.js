import React, { Component } from 'react'

import Meta from 'components/Meta'
import LayoutContainer from 'containers/LayoutContainer'

class ArchivePage extends Component {
  static defaultProps = {}

  render() {
    return (
      <LayoutContainer>
        <Meta
          title="Archive of content"
          description=""
        />
        to do:<br/>
        display a timeline/calendar of posts<br/>
        years, months and days are clickable<br/>
        each filter opens on its route<br/>
        and show available posts on PostsListing<br/>
      </LayoutContainer>
    )
  }
}

export default ArchivePage
