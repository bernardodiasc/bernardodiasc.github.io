import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from 'reducers'
import browserStorage from 'middlewares/browserStorage'

const hasReduxDevtoolsExtension = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
const middlewares = applyMiddleware(
  thunk,
  browserStorage,
)

export const Store = createStore(
  rootReducers,
  hasReduxDevtoolsExtension ?
    compose(
      middlewares,
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    ) : middlewares
)
