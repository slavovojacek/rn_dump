import React from 'react'

import { AwesomeComponent } from './Awesome.component'
import SomethingExternal from './lib/SomethingExternal'
import SomethingElseExternal from './lib/SomethingElseExternal'

const getInstance = p => new AwesomeComponent(p)

jest
  .mock('./lib/SomethingElseExternal', () => ({
    anotherAwesomeMethod: jest.fn()
  }))

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

    test('someHandler calls SomethingExternal.awesomeMethod and SomethingElseExternal.awesomeMethod with correct argument', () => {
      let subject = getInstance(props)
      subject.someHandler('val')
      expect(awesomeMethod).toHaveBeenCalledWith('val')
      expect(SomethingElseExternal.anotherAwesomeMethod).toHaveBeenCalledWith('val')
    })
  })

  // describe('DOM Interaction', () => {
  // })

  // describe('Connect', () => {
  // })
})
