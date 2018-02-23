import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from 'reducers'

export const Store = createStore(
  rootReducers,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    : applyMiddleware(thunk)
)
