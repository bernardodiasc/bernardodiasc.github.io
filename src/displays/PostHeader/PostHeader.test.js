import React from 'react'
import { shallow } from 'enzyme'

import PostHeader from './PostHeader.js'

it('renders without crashing', () => {
  const component = shallow(<PostHeader />)
  expect(component).toMatchSnapshot()
})
