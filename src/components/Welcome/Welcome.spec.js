import React from 'react'

import { shallow } from 'enzyme'

import Welcome from './Welcome'


describe('<Welcome />', () => {
  it('renders an h1 tag with correct text', () => {
    const h1Children = shallow(<Welcome />).find('h1').prop('children')

    expect(h1Children[0]).toEqual('Welcome to ')
    expect(h1Children[1].props.children).toEqual('Potluck Planner')
    expect(h1Children[1].props.className).toEqual('logo')
  })

  it('renders the sign up and log in buttons', () => {
    const buttons = shallow(<Welcome />).find('button')

    console.log(buttons.at(1).prop('children')).toEqual('Log In'))

    expect(buttons.at(0).prop('children')).toEqual('Sign Up')
    expect(buttons.at(1).prop('children')).toEqual('Log In')
  })
})
