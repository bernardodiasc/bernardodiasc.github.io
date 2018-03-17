import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class Meta extends Component {
  static defaultProps = {
    title: '',
    description: '',
    image: '',
  }

  render() {
    const siteName = 'Bernardo Dias da Cruz'
    const siteUrl = 'http://bernardodiasdacruz.com'
    const title = this.props.title
      ? `${this.props.title} - ${siteName}`
      : siteName
    const description = this.props.description
    const image = this.props.image
      ? `${siteUrl}${this.props.image}`
      : `${siteUrl}/images/thumbnail.png`
    const href = `${siteUrl}${window.location.pathname}`
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={href} />
        <meta name="twitter:site" content="@bernardodiasc" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@bernardodiasc" />
        <meta name="twitter:image" content={image} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={href} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteName} />
      </Helmet>
    )
  }
}

export default Meta
