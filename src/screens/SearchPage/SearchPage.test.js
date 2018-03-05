import React from 'react'
import { shallow } from 'enzyme'

import SearchPage from './SearchPage.js'

it('renders without crashing', () => {
  const component = shallow(<SearchPage />)
  expect(component).toMatchSnapshot()
})
