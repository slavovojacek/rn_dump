import React from 'react'

import { LoginContainer } from './Login.container'

const getInstance = p => new LoginContainer(p)

jest
  .mock('./Login.container.view', () => null)

describe('LoginContainer', () => {

  beforeEach(() => {
    this.props = {...LoginContainer.defaultProps, login: jest.fn()}
  })

  afterEach(() => {
    this.props = null
  })

  describe('Instance', () => {
    test('signIn calls login if values comply with expected shape', () => {
      let instance = getInstance(this.props)
      const formValues = {email: 'john@doe.com', somethingElse: 'Unrelated'}
      instance.signIn(formValues)
      expect(this.props.login).toHaveBeenCalledWith(formValues.email)
    })

    test('signIn throws if values do not comply with expected shape', () => {
      let instance = getInstance(this.props)
      const formValues = {something: 'Hello, World!'}
      expect(() => instance.signIn(formValues)).toThrow()
    })
  })

  // describe('DOM interaction', () => {
  // })

  // describe('connect', () => {
  // })
})
