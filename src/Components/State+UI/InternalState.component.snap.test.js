import React from 'react'

import InternalState from './InternalState.component'
import { props as testDefaultProps, state as testDefaultState } from './defaults'

import { assertSnapshots } from '../../TestUtils/snapshot'

describe('AwesomeComponent Snapshots', () => {
  const configs = [
    {
      props: {...testDefaultProps},
      desc: 'renders correctly with default props'
    },
    {
      props: {...testDefaultProps},
      state: {...testDefaultState},
      desc: 'renders correctly with initial state'
    },
    {
      props: {...testDefaultProps},
      state: {...testDefaultState, color: 'blue'},
      desc: 'renders correctly when state.color is blue'
    },
    {
      props: {...testDefaultProps},
      state: {...testDefaultState, isWarningVisible: true},
      desc: 'renders correctly when state.isWarningVisible is true'
    },
    {
      props: {...testDefaultProps, color: 'red'},
      desc: 'renders correctly when color is red'
    },
    {
      props: {...testDefaultProps, isWarningVisible: true},
      desc: 'renders correctly when isWarningVisible is true'
    }
  ]

  assertSnapshots(InternalState, configs)
})
