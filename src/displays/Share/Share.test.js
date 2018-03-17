import React from 'react'
import { shallow } from 'enzyme'

import Share from './Share.js'

it('renders without crashing', () => {
  const component = shallow(<Share />)
  expect(component).toMatchSnapshot()
})
