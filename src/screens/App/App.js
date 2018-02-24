import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import config from 'config'

import HomePage from 'screens/HomePage'
import PostPage from 'screens/PostPage'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact={true}
          path={`${config.PUBLIC_URL}/`}
          component={HomePage}
        />
        <Route
          exact={true}
          path={`${config.PUBLIC_URL}/:year/:month/:day/:title`}
          render={({ match }) => {
            const post = [
              match.params.year,
              match.params.month,
              match.params.day,
              match.params.title,
            ].join('-')
            return (
              <PostPage post={post} />
            )
          }}
        />
        <Route component={HomePage} />
      </Switch>
    )
  }
}

export default App
