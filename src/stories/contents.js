/* global module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Docs from 'stories/containers/Docs'

import PostsReadme from '../../public/content/posts/README.md'
storiesOf('Content', module)
  .add('Posts', () => <Docs>{PostsReadme}</Docs>)
