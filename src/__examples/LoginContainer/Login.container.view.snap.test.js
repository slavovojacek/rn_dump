import React from 'react'

import LoginContainerView from './Login.container.view'

import { assertSnapshots } from '../../TestUtils/snapshot'

jest
  .mock('../LoginForm/Login.form', () => 'View')

describe('LoginContainer View Snapshots', () => {
  const config = [
    {
      props: LoginContainerView.defaultProps,
      desc: 'renders correctly'
    }
  ]

  assertSnapshots(LoginContainerView, config)
})
