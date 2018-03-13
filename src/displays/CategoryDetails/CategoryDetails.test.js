import React from 'react'
import { shallow } from 'enzyme'

import CategoryDetails from './CategoryDetails.js'

it('renders without crashing', () => {
  const component = shallow(<CategoryDetails />)
  expect(component).toMatchSnapshot()
})
