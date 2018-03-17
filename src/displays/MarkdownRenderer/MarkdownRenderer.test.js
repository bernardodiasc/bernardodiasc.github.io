import React from 'react'
import { shallow } from 'enzyme'

import MarkdownRenderer from './MarkdownRenderer.js'

it('renders without crashing', () => {
  const component = shallow(<MarkdownRenderer />)
  expect(component).toMatchSnapshot()
})
