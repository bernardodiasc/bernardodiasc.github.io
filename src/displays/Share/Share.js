import React, { PureComponent } from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  GooglePlusShareButton,
  GooglePlusIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share'
import './Share.css'

class Share extends PureComponent {
  static defaultProps = {
    url: window.location.href,
    title: '',
  }

  render() {
    const { url, title } = this.props
    const size = 28
    return title ? (
      <div className="Share">
        <FacebookShareButton
          url={url}
          quote={title}
          className="Share__button"
        >
          <FacebookIcon size={size} round />
        </FacebookShareButton>

        <GooglePlusShareButton
          url={url}
          className="Share__button"
        >
          <GooglePlusIcon size={size} round />
        </GooglePlusShareButton>

        <LinkedinShareButton
          url={url}
          title={title}
          windowWidth={750}
          windowHeight={600}
          className="Share__button"
        >
          <LinkedinIcon size={size} round />
        </LinkedinShareButton>

        <TwitterShareButton
          url={url}
          title={title}
          className="Share__button"
        >
          <TwitterIcon size={size} round />
        </TwitterShareButton>

        <TelegramShareButton
          url={url}
          title={title}
          className="Share__button"
        >
          <TelegramIcon size={size} round />
        </TelegramShareButton>

        <WhatsappShareButton
          url={url}
          title={title}
          className="Share__button"
        >
          <WhatsappIcon size={size} round />
        </WhatsappShareButton>

        <RedditShareButton
          url={url}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="Share__button"
        >
          <RedditIcon size={size} round />
        </RedditShareButton>
      </div>
    ) : null
  }
}

export default Share
