import React, { Component } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Store } from 'store'

class Provider extends Component {
  render() {
    return (
      <ReduxProvider store={Store}>
        {this.props.story}
      </ReduxProvider>
    )
  }
}

export default Provider
