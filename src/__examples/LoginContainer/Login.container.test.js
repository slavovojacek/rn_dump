import React from 'react'

import LoginContainer from './Login.container.mock'

describe('LoginContainer', () => {
  let props
  const getInstance = p => new LoginContainer(p)

  beforeEach(() => {
    props = {...LoginContainer.defaultProps, login: jest.fn()}
  })

  describe('Instance', () => {
    test('signIn calls login if values comply with expected shape', () => {
      let instance = getInstance(props)
      const formValues = {email: 'john@doe.com', somethingElse: 'Unrelated'}
      instance.signIn(formValues)
      expect(props.login).toHaveBeenCalledWith(formValues.email)
    })

    test('signIn throws if values do not comply with expected shape', () => {
      let instance = getInstance(props)
      const formValues = {something: 'Hello, World!'}
      expect(() => instance.signIn(formValues)).toThrow()
    })
  })

  // describe('DOM interaction', () => {
  // })

  // describe('connect', () => {
  // })
})
