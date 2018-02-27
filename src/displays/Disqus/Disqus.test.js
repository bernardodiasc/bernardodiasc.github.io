import React from 'react'
import { shallow } from 'enzyme'

import Disqus from './Disqus.js'

it('renders without crashing', () => {
  const component = shallow(<Disqus />)
  expect(component).toMatchSnapshot()
})
