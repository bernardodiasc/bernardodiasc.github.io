import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectLanguage } from 'actions'
import { getAllPostsTags, getAllPostsCategories } from 'selectors/data'
import { getActiveLanguage, getAvailableLanguages } from 'selectors/i18n'

import Layout from 'displays/Layout'

class LayoutContainer extends Component {
  static defaultProps = {
    children: null,
    activeLanguage: '',
    availableLanguages: [],
    selectLanguage: () => {},
    allTags: [],
    allCategories: [],
  }

  render() {
    const {
      activeLanguage,
      availableLanguages,
      selectLanguage,
    } = this.props
    return (
      <Layout
        languages={{
          activeLanguage,
          availableLanguages,
          selectLanguage,
        }}
        {...this.props}
      >
        {this.props.children}
      </Layout>
    )
  }
}

const mapStateToProps = store => ({
  activeLanguage: getActiveLanguage(store),
  availableLanguages: getAvailableLanguages(store),
  allTags: getAllPostsTags(store),
  allCategories: getAllPostsCategories(store),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectLanguage,
  }, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutContainer)
