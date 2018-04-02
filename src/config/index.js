import pkg from '../../package.json'

const config = {
  PUBLIC_URL: process.env.PUBLIC_URL || '',
  NODE_ENV: process.env.NODE_ENV || '',
  NODE_PATH: process.env.NODE_PATH || 'src',
  sitename: pkg.name,
  homepage: pkg.homepage,
  sourcecode: 'https://github.com/bernardodiasc/bernardodiasc.github.io/tree/develop',
  languages: ['en', 'pt'],
}

export default config
