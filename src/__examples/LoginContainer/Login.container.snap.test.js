import React from 'react'

import { LoginContainer } from './Login.container'

import { assertSnapshots } from '../../TestUtils/snapshots'
import { formOnlyStore } from '../../state'

describe('LoginContainer Snapshots', () => {
  const config = [
    {
      props: LoginContainer.defaultProps,
      desc: 'renders correctly'
    }
  ]

  config
    .forEach(conf => assertSnapshots(LoginContainer, conf.props, conf.desc, formOnlyStore))
})
