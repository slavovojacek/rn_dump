import React from 'react'

import ExternalDependencies from './ExternalDependencies.component'

import { props as testDefaultProps } from './defaults'
import SomethingExternal from './lib/SomethingExternal'
import SomethingElseExternal from './lib/SomethingElseExternal'

const getInstance = p => new ExternalDependencies(p)

jest
  .mock('./lib/SomethingExternal', () => ({
    awesomeMethod: jest.fn()
  }))
  .mock('./lib/SomethingElseExternal', () => ({
    anotherAwesomeMethod: jest.fn()
  }))

describe('ExternalDependencies', () => {

  beforeEach(() => {
    this.props = {
      ...testDefaultProps,
      logIntoConsole: jest.fn()
    }
  })

  afterEach(() => {
    this.props = null
    jest.clearAllMocks()
  })

  describe('instance', () => {
    test('componentDidMount throws if logIntoConsole is not of type Function', () => {
      const newProps = {...this.props, logIntoConsole: ''}
      let subject = getInstance(newProps)
      expect(() => subject.componentDidMount()).toThrow(TypeError)
    })

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

})
