import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getAllCategoryDetails,
  getAllPostsForListingByCategory,
} from 'selectors/data'

import CategoryPage from './CategoryPage'

const mapStateToProps = (store, props) => ({
  category: getAllCategoryDetails(store, props.category),
  posts: getAllPostsForListingByCategory(store, props.category),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryPage)
