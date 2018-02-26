import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import Languages from './Languages'
import LanguagesReadme from './README.md'
storiesOf('Displays/Layout/Languages', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{LanguagesReadme}</Docs>)
  .add('Example', () => <Languages />)
  .add('Minimal render', () => <Languages />)
