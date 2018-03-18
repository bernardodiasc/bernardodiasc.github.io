const path = require('path')

/**
 * Posts content type translation
 * @param  {Array} content      List of files
 * @param  {String} contentType Content type name
 * @return {Object}             The posts content type data object
 */
function posts(content, contentType) {
  let output = {}
  const allFiles = content.filter(each => each.dir.includes(`/${contentType}`))
  const index = allFiles.filter(each => each.base === 'index.md')[0]
  index.attr.forEach(each => {
    const allFilesForEach = allFiles.filter(file =>
      file.dir.includes(`/${contentType}/${each}`)
    )
    output[each] = {}
    allFilesForEach.forEach(file => {
      if (file.dir.includes(`/${contentType}/${each}`)) {
        output[each][file.base] = file
      }
    })
  })
  return output
}

/**
 * Articles content type translation
 * @param  {Array} content      List of files
 * @param  {String} contentType Content type name
 * @return {Object}             The articles content type data object
 */
function articles(content, contentType) {
  let output = {}
  const allFiles = content.filter(each => each.dir.includes(`/${contentType}`))
  const index = allFiles.filter(each => each.base === 'index.md')[0]
  index.attr.forEach(each => {
    const allFilesForEach = allFiles.filter(file =>
      file.dir.includes(`/${contentType}/${each}`)
    )
    output[each] = {}
    allFilesForEach.forEach(file => {
      if (file.dir.includes(`/${contentType}/${each}`)) {
        output[each][file.base] = file
      }
    })
  })
  return output
}

/**
 * Categories content type translation
 * @param  {Array} content      List of files
 * @param  {String} contentType Content type name
 * @return {Object}             The categories content type data object
 */
function categories(content, contentType) {
  let output = {}
  const allFiles = content.filter(each => each.dir.includes(`/${contentType}`))
  const index = allFiles.filter(each => each.base === 'index.md')[0]
  index.attr.forEach(each => {
    const allFilesForEach = allFiles.filter(file =>
      file.dir.includes(`/${contentType}/${each}`)
    )
    output[each] = {}
    allFilesForEach.forEach(file => {
      if (file.dir.includes(`/${contentType}/${each}`)) {
        output[each][file.base] = file
      }
    })
  })
  return output
}

/**
 * Configuration
 * @type {Object}
 */
const config = {
  content: path.resolve(__dirname, '..', '..', 'public', 'content'),
  output: path.resolve(__dirname, '..', 'data.json'),
  include: ['.md', '.png', '.jpg'],
  exclude: ['README.md'],
  contentTypes: [
    { posts },
    { articles },
    { categories },
  ]
}

module.exports = config
