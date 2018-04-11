import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import config from 'config'

import HomePage from 'screens/HomePage'
import PostPage from 'screens/PostPage'
import CategoryPage from 'screens/CategoryPage'
import ArchivePage from 'screens/ArchivePage'
import ArticlePage from 'screens/ArticlePage'
import SearchPage from 'screens/SearchPage'

class App extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  componentWillUpdate({ location, history }) {
    const gtag = window.gtag

    if (location.pathname === this.props.location.pathname) {
      return
    }

    if (history.action === 'PUSH' && typeof(gtag) === 'function') {
      gtag('config', 'UA-10219275-4', {
      //   'page_title': document.title,
        'page_location': window.location.href,
        'page_path': location.pathname,
      })
    }
  }

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
        <Route
          exact={true}
          path={`${config.PUBLIC_URL}/category/:title`}
          render={({ match }) => (
            <CategoryPage category={match.params.title} />
          )}
        />
        <Route
          exact={true}
          path={`${config.PUBLIC_URL}/archive`}
          component={ArchivePage}
        />
        <Route
          exact={true}
          path={`${config.PUBLIC_URL}/about-me`}
          render={() => (
            <ArticlePage article="about-me" />
          )}
        />
        <Route
          exact={true}
          path={`${config.PUBLIC_URL}/search`}
          component={SearchPage}
        />
        <Route component={HomePage} />
      </Switch>
    )
  }
}

export default App
