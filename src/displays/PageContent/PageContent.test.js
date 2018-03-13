import React from 'react'
import { shallow } from 'enzyme'

import PageContent from './PageContent.js'

it('renders without crashing', () => {
  const component = shallow(<PageContent />)
  expect(component).toMatchSnapshot()
})
