import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import PostsListing from './PostsListing'
import PostsListingReadme from './README.md'
storiesOf('Displays/PostsListing', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{PostsListingReadme}</Docs>)
  .add('Example', () => <PostsListing />)
  .add('Minimal render', () => <PostsListing />)
