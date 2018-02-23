import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import HomePage from './HomePage'
import HomePageReadme from './README.md'
storiesOf('Screens/HomePage', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{HomePageReadme}</Docs>)
  .add('Example', () => <HomePage />)
  .add('Minimal render', () => <HomePage />)
