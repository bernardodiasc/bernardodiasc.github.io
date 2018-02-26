import React from 'react'
import { shallow } from 'enzyme'

import TextBlock from './TextBlock.js'

it('renders without crashing', () => {
  const component = shallow(<TextBlock />)
  expect(component).toMatchSnapshot()
})
