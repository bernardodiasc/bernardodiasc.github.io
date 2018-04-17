import React from 'react'
import { shallow } from 'enzyme'

import Video from './Video.js'

it('renders without crashing', () => {
  const component = shallow(<Video />)
  expect(component).toMatchSnapshot()
})
