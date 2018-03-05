import React from 'react'
import { shallow } from 'enzyme'

import ArchivePage from './ArchivePage.js'

it('renders without crashing', () => {
  const component = shallow(<ArchivePage />)
  expect(component).toMatchSnapshot()
})
