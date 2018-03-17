/* global module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Docs from 'stories/containers/Docs'

import ScreensReadme from 'screens/README.md'
storiesOf('Screens', module)
  .add('About screen components', () => <Docs>{ScreensReadme}</Docs>)

import 'screens/App/App.story.js'
import 'screens/HomePage/HomePage.story.js'
import 'screens/PostPage/PostPage.story.js'
import 'screens/ArchivePage/ArchivePage.story.js'
import 'screens/ArticlePage/ArticlePage.story.js'
import 'screens/CategoryPage/CategoryPage.story.js'
import 'screens/SearchPage/SearchPage.story.js'
