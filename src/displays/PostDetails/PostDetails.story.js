import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import PostDetails from './PostDetails'
import PostDetailsReadme from './README.md'
storiesOf('Displays/PostDetails', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{PostDetailsReadme}</Docs>)
  .add('Example', () => <PostDetails />)
  .add('Minimal render', () => <PostDetails />)
