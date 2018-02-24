import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import HeaderBar from './HeaderBar'
import HeaderBarReadme from './README.md'
storiesOf('Displays/Layout/HeaderBar', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{HeaderBarReadme}</Docs>)
  .add('Example', () => <HeaderBar />)
  .add('Minimal render', () => <HeaderBar />)
