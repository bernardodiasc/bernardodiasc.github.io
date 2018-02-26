import { pathOr } from 'ramda'

export const getActiveLanguage = (state) =>
  pathOr({}, ['i18n', 'language'], state)

export const getAvailableLanguages = (state) =>
  pathOr({}, ['i18n', 'languages'], state)
