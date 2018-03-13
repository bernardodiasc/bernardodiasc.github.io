import { pathOr, union } from 'ramda'

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

export const getPostCategory = (state, post) =>
  pathOr('', ['data', 'posts', post, 'index.md', 'attr', 'category'], state)

export const getPostTags = (state, post) =>
  pathOr([], ['data', 'posts', post, 'index.md', 'attr', 'tags'], state)

export const getPostBody = (state, post) =>
  pathOr('', ['data', 'posts', post, 'index.md', 'body'], state)

export const getAllPostsForListing = (state) => Object
  .keys(getAllPostData(state))
  .map(post => ({...getAllPostDetails(state, post)}))

export const getAllPostDetails = (state, post) => ({
  handle: post,
  title: getPostTitle(state, post),
  date: getPostDate(state, post),
  excerpt: getPostExcerpt(state, post),
  category: getAllCategoryDetails(state, getPostCategory(state, post)),
  tags: getPostTags(state, post),
  body: getPostBody(state, post),
  files: getPostData(state, post),
})

export const getAllPostsTags = (state) => {
  let tags = []
  Object
    .keys(getAllPostData(state))
    .forEach(post => tags = union(tags, getPostTags(state, post)))
  return tags
}

export const getAllPostsCategories = (state) => {
  let categories = []
  Object
    .keys(getAllPostData(state))
    .forEach(post => categories = union(categories, [getPostCategory(state, post)]))
  return categories
}

export const getArticleData = (state, article) =>
  pathOr({}, ['data', 'articles', article], state)

export const getArticleTitle = (state, article) =>
  pathOr('', ['data', 'articles', article, 'index.md', 'attr', 'title'], state)

export const getArticleExcerpt = (state, article) =>
  pathOr('', ['data', 'articles', article, 'index.md', 'attr', 'excerpt'], state)

export const getArticleBody = (state, article) =>
  pathOr('', ['data', 'articles', article, 'index.md', 'body'], state)

export const getAllArticleDetails = (state, article) => ({
  handle: article,
  title: getArticleTitle(state, article),
  excerpt: getArticleExcerpt(state, article),
  body: getArticleBody(state, article),
  files: getArticleData(state, article),
})

export const getCategoryData = (state, category) =>
  pathOr({}, ['data', 'categories', category], state)

export const getCategoryTitle = (state, category) =>
  pathOr('', ['data', 'categories', category, 'index.md', 'attr', 'title'], state)

export const getCategoryIcon = (state, category) =>
  pathOr('', ['data', 'categories', category, 'index.md', 'attr', 'icon'], state)

export const getCategoryBody = (state, category) =>
  pathOr('', ['data', 'categories', category, 'index.md', 'body'], state)

export const getAllCategoryDetails = (state, category) => ({
  handle: category,
  title: getCategoryTitle(state, category),
  icon: getCategoryIcon(state, category),
  body: getCategoryBody(state, category),
  files: getCategoryData(state, category),
})
