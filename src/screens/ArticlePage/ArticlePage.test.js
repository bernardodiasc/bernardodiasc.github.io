import React from 'react'
import { shallow } from 'enzyme'

import ArticlePage from './ArticlePage.js'

it('renders without crashing', () => {
  const component = shallow(<ArticlePage />)
  expect(component).toMatchSnapshot()
})
