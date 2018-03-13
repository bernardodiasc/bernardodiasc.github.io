import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import PageContent from './PageContent'
import PageContentReadme from './README.md'
storiesOf('Displays/PageContent', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{PageContentReadme}</Docs>)
  .add('Example', () => <PageContent />)
  .add('Minimal render', () => <PageContent />)
