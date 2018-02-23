import { getPostData } from 'selectors/data'

export const SELECT_POST = 'SELECT_POST'

export const selectPost = (post) =>
  (dispatch, getState) => {
    dispatch({
      type: SELECT_POST,
      payload: {
        [post]: getPostData(getState(), post)
      },
    })
  }
