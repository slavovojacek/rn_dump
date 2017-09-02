import React from 'react'

import { props as testDefaultProps } from './defaults'
import Login from './Login.main.component'

const getInstance = p => new Login(p)

jest
  .mock('../LoginForm/Login.form', () => 'LoginForm')

describe('Login', () => {

  beforeEach(() => {
    this.props = {...testDefaultProps, login: jest.fn()}
  })

  afterEach(() => {
    this.props = null
    jest.clearAllMocks()
  })

  describe('Instance', () => {
    test('signIn calls login if values comply with expected shape', () => {
      let instance = getInstance(this.props)
      const formValues = {email: 'john@doe.com', password: 'Password1'}
      instance.signIn(formValues)
      expect(this.props.login).toHaveBeenCalledWith({
        e: formValues.email, p: formValues.password
      })
    })

    test('signIn throws if values do not comply with expected shape', () => {
      let instance = getInstance(this.props)
      let formValues = {email: 'Hello, World!'}
      expect(() => instance.signIn(formValues)).toThrow(TypeError)
      formValues = {password: 'Hello, World!'}
      expect(() => instance.signIn(formValues)).toThrow(TypeError)
    })
  })
})
