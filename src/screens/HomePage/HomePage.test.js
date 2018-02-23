import React from 'react'
import { shallow } from 'enzyme'

import HomePage from './HomePage.js'

it('renders without crashing', () => {
  const component = shallow(<HomePage />)
  expect(component).toMatchSnapshot()
})
