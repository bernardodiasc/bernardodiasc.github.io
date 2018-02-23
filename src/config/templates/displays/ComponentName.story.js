import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import Docs from 'stories/containers/Docs'

import <%= componentName %> from './<%= componentName %>'
import <%= componentName %>Readme from './README.md'
storiesOf('Displays/<%= componentPath %>', module)
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{<%= componentName %>Readme}</Docs>)
  .add('Example', () => <<%= componentName %> />)
  .add('Minimal render', () => <<%= componentName %> />)
