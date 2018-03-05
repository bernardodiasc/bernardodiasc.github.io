import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import CategoryPage from './CategoryPage'
import CategoryPageReadme from './README.md'
storiesOf('Screens/CategoryPage', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{CategoryPageReadme}</Docs>)
  .add('Example', () => <CategoryPage />)
  .add('Minimal render', () => <CategoryPage />)
