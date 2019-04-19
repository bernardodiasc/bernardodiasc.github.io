import React from 'react'
import { shallow } from 'enzyme'

import SankeyChart from './SankeyChart.js'

it('renders without crashing', () => {
  const component = shallow(<SankeyChart />)
  expect(component).toMatchSnapshot()
})
