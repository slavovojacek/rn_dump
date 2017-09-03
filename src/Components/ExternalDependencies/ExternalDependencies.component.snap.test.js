import React from 'react'

import ExternalDependencies from './ExternalDependencies.component'
import { props as testDefaultProps } from './defaults'

import { assertSnapshots } from '../../TestUtils/snapshot'

describe('ExternalDependencies Snapshots', () => {
  const config = [
    {
      props: {...testDefaultProps},
      desc: 'renders correctly'
    }
  ]

  assertSnapshots(ExternalDependencies, config)
})
