import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import Layout from './Layout'
import LayoutReadme from './README.md'
storiesOf('Displays/Layout', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{LayoutReadme}</Docs>)
  .add('Example', () => <Layout />)
  .add('Minimal render', () => <Layout />)
