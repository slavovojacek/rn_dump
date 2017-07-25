import React from 'react'

import LoginContainerUI from './Login.container.ui'

import { assertSnapshots } from '../../TestUtils/snapshots'

jest
  .mock('../LoginForm/Login.form', () => 'View')

describe('LoginContainerUI Snapshots', () => {
  const config = [
    {
      props: LoginContainerUI.defaultProps,
      desc: 'renders correctly'
    }
  ]

  assertSnapshots(LoginContainerUI, config)
})
