import React from 'react'

import Login from './Login.main.component'
import { props as testDefaultProps } from './defaults'
import { assertSnapshots } from '../../TestUtils/snapshot'

jest
  .mock('../LoginForm/Login.form', () => 'LoginForm')

describe('Login Snapshots', () => {
  const configs = [
    {
      props: {...testDefaultProps},
      desc: 'renders correctly'
    }
  ]

  assertSnapshots(Login, configs)
})
