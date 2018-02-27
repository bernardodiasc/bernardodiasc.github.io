import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import Disqus from './Disqus'
import DisqusReadme from './README.md'
storiesOf('Displays/Disqus', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{DisqusReadme}</Docs>)
  .add('Example', () => <Disqus />)
  .add('Minimal render', () => <Disqus />)
