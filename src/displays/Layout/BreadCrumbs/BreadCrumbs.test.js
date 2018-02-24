import React from 'react'
import { shallow } from 'enzyme'

import BreadCrumbs from './BreadCrumbs.js'

it('renders without crashing', () => {
  const component = shallow(<BreadCrumbs />)
  expect(component).toMatchSnapshot()
})
