import React from 'react'
import { shallow } from 'enzyme'
import Welcome from './components/Welcome'
import Login from './components/Login'
import App from './App'

describe('<App />', () => {
  it('renders the components Welcome and Login', () => {
    const comps = shallow(<App />)

    expect(comps.find(Welcome)).toBeDefined()
    expect(comps.find(Login)).toBeDefined()
  })
})
