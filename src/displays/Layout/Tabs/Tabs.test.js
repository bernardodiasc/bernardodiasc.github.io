import React from 'react'
import { shallow } from 'enzyme'

import Tabs from './Tabs.js'

it('renders without crashing', () => {
  const component = shallow(<Tabs />)
  expect(component).toMatchSnapshot()
})
