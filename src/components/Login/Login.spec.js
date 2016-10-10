import React from 'react'

import { shallow } from 'enzyme'

import Login from './Login'

describe('<Login />', () => {
  it('renders a form tag', () => {
    const form = shallow(<Login />).find('form')

    expect(form.type()).toEqual('form')
  })
})
