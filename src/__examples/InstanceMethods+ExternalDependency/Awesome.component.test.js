import React from 'react'

import { AwesomeComponent } from './Awesome.component'
import SomethingExternal from './lib/SomethingExternal'

const getInstance = p => new AwesomeComponent(p)

describe('AwesomeComponent', () => {
  let props, awesomeMethod

  beforeEach(() => {
    props = {...AwesomeComponent.defaultProps, logIntoConsole: jest.fn()}

    awesomeMethod = jest
      .spyOn(SomethingExternal, 'awesomeMethod')
      .mockImplementation(jest.fn())
  })

  describe('instance', () => {
    test('logIntoConsole gets called upon mount', () => {
      let subject = getInstance(props)
      subject.componentDidMount()
      expect(props.logIntoConsole).toHaveBeenCalled()
    })

    test('someHandler calls SomethingExternal.awesomeMethod with correct argument', () => {
      let subject = getInstance(props)
      subject.someHandler('val')
      expect(awesomeMethod).toHaveBeenCalledWith('val')
    })
  })

  // describe('DOM Interaction', () => {
  // })

  // describe('Connect', () => {
  // })
})
