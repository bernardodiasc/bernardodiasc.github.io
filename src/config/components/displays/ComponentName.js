import React, { PureComponent } from 'react'
import './<%= componentName %>.css'

class <%= componentName %> extends PureComponent {
  static defaultProps = {}

  render() {
    return (
      <div className="<%= componentClass %>">
        <%= componentName %>
      </div>
    )
  }
}

export default <%= componentName %>
