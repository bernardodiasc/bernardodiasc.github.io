import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import PostHeader from './PostHeader'
import PostHeaderReadme from './README.md'
storiesOf('Displays/PostHeader', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{PostHeaderReadme}</Docs>)
  .add('Example', () => <PostHeader />)
  .add('Minimal render', () => <PostHeader />)
