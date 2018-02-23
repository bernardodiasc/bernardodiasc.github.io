import React from 'react'
import { shallow } from 'enzyme'

import Layout from './Layout.js'

it('renders without crashing', () => {
  const component = shallow(<Layout />)
  expect(component).toMatchSnapshot()
})
