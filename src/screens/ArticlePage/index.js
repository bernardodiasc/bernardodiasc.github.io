import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllArticleDetails } from 'selectors/data'

import ArticlePage from './ArticlePage'

const mapStateToProps = (store, props) => ({
  article: getAllArticleDetails(store, props.article),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticlePage)
