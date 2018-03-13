import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import Tabs from './Tabs'
import TabsReadme from './README.md'
storiesOf('Displays/Layout/Tabs', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{TabsReadme}</Docs>)
  .add('Example', () => <Tabs />)
  .add('Minimal render', () => <Tabs />)
