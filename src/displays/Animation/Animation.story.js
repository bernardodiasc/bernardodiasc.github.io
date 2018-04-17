import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import Animation from './Animation'
import AnimationReadme from './README.md'
storiesOf('Displays/Animation', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{AnimationReadme}</Docs>)
  .add('Example', () => <Animation />)
  .add('Minimal render', () => <Animation />)
