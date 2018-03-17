import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import MarkdownRenderer from './MarkdownRenderer'
import MarkdownRendererReadme from './README.md'
storiesOf('Displays/MarkdownRenderer', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{MarkdownRendererReadme}</Docs>)
  .add('Example', () => <MarkdownRenderer />)
  .add('Minimal render', () => <MarkdownRenderer />)
