import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getAllPostsCategories,
  getAllPostsTags,
} from 'selectors/data'

import SearchPage from './SearchPage'

const mapStateToProps = store => ({
  allCategories: getAllPostsCategories(store),
  allTags: getAllPostsTags(store),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage)
