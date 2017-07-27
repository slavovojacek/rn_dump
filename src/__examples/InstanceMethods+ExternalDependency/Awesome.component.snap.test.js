import React from 'react'

import AwesomeComponent from './Awesome.component'

import { assertSnapshots } from '../../TestUtils/snapshot'

describe('AwesomeComponent Snapshots', () => {
  const config = [
    {
      props: AwesomeComponent.defaultProps,
      desc: 'renders correctly'
    }
  ]

  assertSnapshots(AwesomeComponent, config)
})
