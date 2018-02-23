import React from 'react'
import { shallow } from 'enzyme'

import PostPage from './PostPage.js'

it('renders without crashing', () => {
  const component = shallow(<PostPage />)
  expect(component).toMatchSnapshot()
})
