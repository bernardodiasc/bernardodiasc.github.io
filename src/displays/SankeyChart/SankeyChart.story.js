import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import StoryRouter from 'storybook-router'
import Provider from 'stories/containers/Provider'
import Docs from 'stories/containers/Docs'

import SankeyChart from './SankeyChart'
import SankeyChartReadme from './README.md'
storiesOf('Displays/SankeyChart', module)
  .addDecorator(story => <Provider story={story()} />)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Info', () => <Docs>{SankeyChartReadme}</Docs>)
  .add('Example', () => <SankeyChart />)
  .add('Minimal render', () => <SankeyChart />)
