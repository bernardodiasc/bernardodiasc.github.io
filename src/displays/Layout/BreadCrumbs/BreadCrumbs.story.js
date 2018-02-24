import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import BreadCrumbs from './BreadCrumbs'
import BreadCrumbsReadme from './README.md'
storiesOf('Displays/Layout/BreadCrumbs', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{BreadCrumbsReadme}</Docs>)
  .add('Example', () => <BreadCrumbs />)
  .add('Minimal render', () => <BreadCrumbs />)
