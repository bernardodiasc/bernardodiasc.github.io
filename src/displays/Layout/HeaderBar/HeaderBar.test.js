import React from 'react'
import { shallow } from 'enzyme'

import HeaderBar from './HeaderBar.js'

it('renders without crashing', () => {
  const component = shallow(<HeaderBar />)
  expect(component).toMatchSnapshot()
})
