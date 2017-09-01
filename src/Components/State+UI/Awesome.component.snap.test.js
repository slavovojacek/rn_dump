import React from 'react'

import AwesomeComponent from './Awesome.component'

import { assertSnapshots } from '../../TestUtils/snapshot'

const initialState = {
  color: 'green', // has to be a valid colour, otherwise warnings are thrown
  isWarningVisible: false
}

describe('AwesomeComponent Snapshots', () => {
  const config = [
    {
      props: AwesomeComponent.defaultProps,
      desc: 'renders correctly with default props'
    },
    {
      props: AwesomeComponent.defaultProps,
      state: initialState,
      desc: 'renders correctly with initial state'
    },
    {
      props: AwesomeComponent.defaultProps,
      state: {...initialState, color: 'blue'},
      desc: 'renders correctly when state.color is blue'
    },
    {
      props: AwesomeComponent.defaultProps,
      state: {...initialState, isWarningVisible: true},
      desc: 'renders correctly when state.isWarningVisible is true'
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
