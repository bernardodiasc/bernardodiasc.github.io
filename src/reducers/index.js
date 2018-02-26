import { combineReducers } from 'redux'
import { data } from './data'
import { i18n } from './i18n'

const rootReducers = combineReducers({
  data,
  i18n,
})

export default rootReducers
