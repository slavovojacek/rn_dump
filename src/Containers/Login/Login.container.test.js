import React from 'react'
import { Text } from 'react-native'
import { shallow } from 'enzyme'
import { Some } from 'tsp-monads'

import { mapStateToProps } from './Login.container'
import LoginContainerMock from './Login.container.mock'
import { initialState as LoginState } from '../../Redux/Login/reducer'
import SomethingExternal from './SomethingExternal'

describe('LoginContainer', () => {
  let props
  const getInstance = p => new LoginContainerMock(p)

  beforeEach(() => {
    props = {...LoginContainerMock.defaultProps, login: jest.fn()}
  })

  // describe('Instance', () => {
  // })

  // describe('DOM interaction', () => {
  // })

  // describe('connect', () => {
  // })
})
