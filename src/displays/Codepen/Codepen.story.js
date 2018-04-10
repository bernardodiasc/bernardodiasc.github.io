import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import Codepen from './Codepen'
import CodepenReadme from './README.md'
storiesOf('Displays/Codepen', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{CodepenReadme}</Docs>)
  .add('Example', () => <Codepen />)
  .add('Minimal render', () => <Codepen />)
