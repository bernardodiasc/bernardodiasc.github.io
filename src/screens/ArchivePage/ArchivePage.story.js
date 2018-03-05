import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import ArchivePage from './ArchivePage'
import ArchivePageReadme from './README.md'
storiesOf('Screens/ArchivePage', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{ArchivePageReadme}</Docs>)
  .add('Example', () => <ArchivePage />)
  .add('Minimal render', () => <ArchivePage />)
