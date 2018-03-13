import React from 'react'
import { shallow } from 'enzyme'

import Icon from './Icon.js'

it('renders without crashing', () => {
  const component = shallow(<Icon />)
  expect(component).toMatchSnapshot()
})
