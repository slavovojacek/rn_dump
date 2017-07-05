import React from 'react'

import LoginContainerUI from './Login.container.ui'

import { assertSnapshots } from '../../TestUtils/snapshots'
import { formOnlyStore } from '../../state'

describe('LoginContainerUI Snapshots', () => {
  const config = [
    {
      props: LoginContainerUI.defaultProps,
      desc: 'renders correctly'
    }
  ]

  config
    .forEach(conf => assertSnapshots(LoginContainerUI, conf.props, conf.desc, formOnlyStore))
})
