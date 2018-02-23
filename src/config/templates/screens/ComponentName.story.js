import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import <%= componentName %> from './<%= componentName %>'
import <%= componentName %>Readme from './README.md'
storiesOf('Screens/<%= componentPath %>', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{<%= componentName %>Readme}</Docs>)
  .add('Example', () => <<%= componentName %> />)
  .add('Minimal render', () => <<%= componentName %> />)
