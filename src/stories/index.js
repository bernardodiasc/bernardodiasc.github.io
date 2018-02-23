/* global module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Docs from 'stories/containers/Docs'

import AppReadme from '../../README.md'
import DevelopmentReadme from '../../documentation/development.md'
import StorybookReadme from '../../documentation/storybook.md'
import ContentReadme from '../../documentation/content.md'
storiesOf('Getting started', module)
  .add('Project instructions', () => <Docs>{AppReadme}</Docs>)
  .add('Development instructions', () => <Docs>{DevelopmentReadme}</Docs>)
  .add('Storybook instructions', () => <Docs>{StorybookReadme}</Docs>)
  .add('Content instructions', () => <Docs>{ContentReadme}</Docs>)
