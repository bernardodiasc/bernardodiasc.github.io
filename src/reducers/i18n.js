import config from 'config'
import {
  SELECT_LANGUAGE,
} from 'actions'

const language = window.localStorage[`${config.sitename}.language`]
const initialState = {
  language: language ? language : 'en',
  languages: config.languages,
}

window.localStorage.setItem(
  `${config.sitename}.language`,
  initialState.language,
)

export const i18n = (state = initialState, action) => {
  switch (action.type) {
  case SELECT_LANGUAGE:
    return {
      ...state,
      language: action.payload,
    }
  default:
    return state
  }
}
