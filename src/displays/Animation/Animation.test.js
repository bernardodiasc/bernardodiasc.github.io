import React from 'react'
import { shallow } from 'enzyme'

import Animation from './Animation.js'

it('renders without crashing', () => {
  const component = shallow(<Animation />)
  expect(component).toMatchSnapshot()
})
