import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import ArticlePage from './ArticlePage'
import ArticlePageReadme from './README.md'
storiesOf('Screens/ArticlePage', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{ArticlePageReadme}</Docs>)
  .add('Example', () => <ArticlePage />)
  .add('Minimal render', () => <ArticlePage />)
