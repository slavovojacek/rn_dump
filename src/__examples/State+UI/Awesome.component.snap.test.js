import React from 'react'

import AwesomeComponent from './Awesome.component'

import { assertSnapshots } from '../../TestUtils/snapshot'

describe('AwesomeComponent Snapshots', () => {
  const config = [
    {
      props: AwesomeComponent.defaultProps,
      desc: 'renders correctly'
    },
    {
      props: {...AwesomeComponent.defaultProps, color: 'red'},
      desc: 'renders correctly when color is red'
    },
    {
      props: {...AwesomeComponent.defaultProps, isWarningVisible: true},
      desc: 'renders correctly when isWarningVisible is true'
    }
  ]

  assertSnapshots(AwesomeComponent, config)
})
