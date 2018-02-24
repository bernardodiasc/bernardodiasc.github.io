import React from 'react'
import { shallow } from 'enzyme'

import PostsListing from './PostsListing.js'

it('renders without crashing', () => {
  const component = shallow(<PostsListing />)
  expect(component).toMatchSnapshot()
})
