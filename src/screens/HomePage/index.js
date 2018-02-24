import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllPostsForListing } from 'selectors/data'

import HomePage from './HomePage'

const mapStateToProps = store => ({
  posts: getAllPostsForListing(store),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage)
