import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Docs from 'stories/containers/Docs'
import HTMLSample from 'stories/samples/HTMLSample'

import Layout from './Layout'
import LayoutReadme from './README.md'
storiesOf('Displays/Layout', module)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{LayoutReadme}</Docs>)
  .add('Example', () => (
    <Layout>
      <HTMLSample />
    </Layout>
  ))
  .add('Minimal render', () => <Layout />)
