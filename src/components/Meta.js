import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import config from 'config'

class Meta extends Component {
  render() {
    const title = this.props.title
      ? `${this.props.title} - Bernardo Dias da Cruz`
      : 'Bernardo Dias da Cruz'
    const description = this.props.description || ''
    const image = this.props.image || ''
    const slug = this.props.slug || '/'
    return (
      <Helmet>
        <title>{title}</title>
        {description !== '' && (
          <meta name="description" content={description} />
        )}
        <link rel="canonical" href={`${config.PUBLIC_URL}${slug}`} />

        {description !== '' && (
          <meta name="twitter:card" content={description} />
        )}
        <meta name="twitter:site" content="@bernardodiasc" />
        <meta name="twitter:title" content={title} />
        {description !== '' && (
          <meta name="twitter:description" content={description} />
        )}
        <meta name="twitter:creator" content="@bernardodiasc" />
        {image !== '' && (
          <meta
            name="twitter:image"
            content={`${config.PUBLIC_URL}${image}`}
          />
        )}

        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://bernardodiasc.github.io${slug}`} />
        {image !== '' && (
          <meta
            property="og:image"
            content={`${config.PUBLIC_URL}${image}`}
          />
        )}
        {description !== '' && (
          <meta property="og:description" content={description} />
        )}
        <meta property="og:site_name" content="Bernardo Dias da Cruz" />
      </Helmet>
    )
  }
}

export default Meta
