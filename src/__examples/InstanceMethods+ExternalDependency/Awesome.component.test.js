import React from 'react'

import { AwesomeComponent } from './Awesome.component'

import SomethingExternal from './lib/SomethingExternal'
import SomethingElseExternal from './lib/SomethingElseExternal'

const getInstance = p => new AwesomeComponent(p)

jest
  .mock('./lib/SomethingExternal', () => ({
    awesomeMethod: jest.fn()
  }))
  .mock('./lib/SomethingElseExternal', () => ({
    anotherAwesomeMethod: jest.fn()
  }))

describe('AwesomeComponent', () => {

  beforeEach(() => {
    this.props = {...AwesomeComponent.defaultProps, logIntoConsole: jest.fn()}

    jest.clearAllMocks();
  })

  afterEach(() => {
    this.props = null
  })

  describe('instance', () => {
    test('logIntoConsole gets called upon mount', () => {
      let subject = getInstance(this.props)
      subject.componentDidMount()
      expect(this.props.logIntoConsole).toHaveBeenCalled()
    })

    test('someHandler calls SomethingExternal.awesomeMethod and SomethingElseExternal.awesomeMethod with correct argument', () => {
      let subject = getInstance(this.props)
      subject.someHandler('val')
      expect(SomethingExternal.awesomeMethod).toHaveBeenCalledWith('val')
      expect(SomethingElseExternal.anotherAwesomeMethod).toHaveBeenCalledWith('val')
    })
  })

  // describe('DOM Interaction', () => {
  // })

  // describe('Connect', () => {
  // })
})
