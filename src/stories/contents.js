/* global module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Docs from 'stories/containers/Docs'

import PostsReadme from '../../public/content/posts/README.md'
import ArticlesReadme from '../../public/content/articles/README.md'
storiesOf('Content', module)
  .add('Posts', () => <Docs>{PostsReadme}</Docs>)
  .add('Articles', () => <Docs>{ArticlesReadme}</Docs>)
