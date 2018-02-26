import config from 'config'
import {
  SELECT_LANGUAGE,
} from 'actions'

const browserStorage = store => next => action => {
  const result = next(action)

  if (action.type === SELECT_LANGUAGE) {
    window.localStorage.setItem(
      `${config.sitename}.language`,
      store.getState().i18n.language,
    )
  }

  return result
}

export default browserStorage
