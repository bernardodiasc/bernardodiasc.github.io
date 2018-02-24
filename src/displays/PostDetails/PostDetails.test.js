import React from 'react'
import { shallow } from 'enzyme'

import PostDetails from './PostDetails.js'

it('renders without crashing', () => {
  const component = shallow(<PostDetails />)
  expect(component).toMatchSnapshot()
})
