import React from 'react'
import { shallow } from 'enzyme'

import Image from './Image.js'

it('renders without crashing', () => {
  const component = shallow(<Image />)
  expect(component).toMatchSnapshot()
})
