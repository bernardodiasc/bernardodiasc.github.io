import {
  SELECT_POST,
} from 'actions'

import dataJson from 'data.json'

const initialState = {
  ...dataJson,
}

export const data = (state = initialState, action) => {
  switch (action.type) {
  case SELECT_POST:
    return {
      ...state,
      viewing: {
        post: action.payload,
      },
    }
  default:
    return state
  }
}
