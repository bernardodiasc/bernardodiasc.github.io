import { pathOr } from 'ramda'

export const getAllPostData = (state) =>
  pathOr({}, ['data', 'posts'], state)

export const getPostData = (state, post) =>
  pathOr({}, ['data', 'posts', post], state)

export const getPostTitle = (state, post) =>
  pathOr('', ['data', 'posts', post, 'index.md', 'attr', 'title'], state)

export const getPostDate = (state, post) =>
  pathOr('', ['data', 'posts', post, 'index.md', 'attr', 'date'], state)

export const getPostExcerpt = (state, post) =>
  pathOr('', ['data', 'posts', post, 'index.md', 'attr', 'excerpt'], state)

export const getPostBody = (state, post) =>
  pathOr('', ['data', 'posts', post, 'index.md', 'body'], state)

export const getAllPostsForListing = (state) => Object
  .keys(getAllPostData(state))
  .map(post => ({
    handle: post,
    title: getPostTitle(state, post),
    date: getPostDate(state, post),
    excerpt: getPostExcerpt(state, post),
  }))

export const getAllPostDetails = (state, post) => ({
  handle: post,
  title: getPostTitle(state, post),
  date: getPostDate(state, post),
  excerpt: getPostExcerpt(state, post),
  body: getPostBody(state, post),
  files: getPostData(state, post),
})
