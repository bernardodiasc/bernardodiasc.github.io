import React, { PureComponent } from 'react'
import './PageContent.css'

class PageContent extends PureComponent {
  static defaultProps = {
    children: '',
  }

  render() {
    return (
      <div className="PageContent">
        {this.props.children}
      </div>
    )
  }
}

export default PageContent
