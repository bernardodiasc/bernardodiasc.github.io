import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllPostDetails } from 'selectors/data'

import PostPage from './PostPage'

const mapStateToProps = (store, props) => ({
  post: getAllPostDetails(store, props.post),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostPage)
