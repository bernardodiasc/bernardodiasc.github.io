/* global module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Docs from 'stories/containers/Docs'

import DisplaysReadme from 'displays/README.md'
storiesOf('Displays', module)
  .add('About display components', () => <Docs>{DisplaysReadme}</Docs>)

import 'displays/Layout/Layout.story.js'
