import React from 'react'
import { shallow } from 'enzyme'

import Codepen from './Codepen.js'

it('renders without crashing', () => {
  const component = shallow(<Codepen />)
  expect(component).toMatchSnapshot()
})
