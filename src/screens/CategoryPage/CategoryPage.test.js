import React from 'react'
import { shallow } from 'enzyme'

import CategoryPage from './CategoryPage.js'

it('renders without crashing', () => {
  const component = shallow(<CategoryPage />)
  expect(component).toMatchSnapshot()
})
