import { pathOr } from 'ramda'

export const getPostData = (state, post) =>
  pathOr({}, ['data', 'posts', post], state)

export const getAllPostsForListing = (state) =>
  pathOr({}, ['data', 'posts'], state)
