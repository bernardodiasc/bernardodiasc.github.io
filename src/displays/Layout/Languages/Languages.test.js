import React from 'react'
import { shallow } from 'enzyme'

import Languages from './Languages.js'

it('renders without crashing', () => {
  const component = shallow(<Languages />)
  expect(component).toMatchSnapshot()
})
