import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import AppLink from './AppLink'
import AppLinkReadme from './README.md'
storiesOf('Displays/AppLink', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{AppLinkReadme}</Docs>)
  .add('Example', () => <AppLink />)
  .add('Minimal render', () => <AppLink />)
