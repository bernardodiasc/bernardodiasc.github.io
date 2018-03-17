import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class Meta extends Component {
  static defaultProps = {
    title: '',
    description: '',
    image: '',
  }

  render() {
    const title = this.props.title
      ? `${this.props.title} - Bernardo Dias da Cruz`
      : 'Bernardo Dias da Cruz'
    const description = this.props.description
    const image = this.props.image
      || 'http://bernardodiasdacruz.com/images/thumbnail.png'
    const href = window.location.href
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
        <meta property="og:image:width" content="501" />
        <meta property="og:image:height" content="384" />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Bernardo Dias da Cruz" />
      </Helmet>
    )
  }
}

export default Meta
