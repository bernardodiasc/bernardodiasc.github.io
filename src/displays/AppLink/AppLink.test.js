import React from 'react'
import { shallow } from 'enzyme'

import AppLink from './AppLink.js'

it('renders without crashing', () => {
  const component = shallow(<AppLink />)
  expect(component).toMatchSnapshot()
})
