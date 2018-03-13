import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import CategoryDetails from './CategoryDetails'
import CategoryDetailsReadme from './README.md'
storiesOf('Displays/CategoryDetails', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{CategoryDetailsReadme}</Docs>)
  .add('Example', () => <CategoryDetails />)
  .add('Minimal render', () => <CategoryDetails />)
