import React from 'react'
import { shallow } from 'enzyme'

import <%= componentName %> from './<%= componentName %>.js'

it('renders without crashing', () => {
  const component = shallow(<<%= componentName %> />)
  expect(component).toMatchSnapshot()
})
