import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import PostPage from './PostPage'
import PostPageReadme from './README.md'
storiesOf('Screens/PostPage', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{PostPageReadme}</Docs>)
  .add('Example', () => <PostPage />)
  .add('Minimal render', () => <PostPage />)
