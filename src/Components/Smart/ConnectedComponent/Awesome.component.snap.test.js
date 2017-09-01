import React from 'react'
import { Some, None } from '@threestup/monads'

import AwesomeComponent from './Awesome.component'
import { assertSnapshots } from '../../../TestUtils/snapshot'

describe('AwesomeComponent Snapshots', () => {
  const config = [
    {
      props: AwesomeComponent.defaultProps,
      desc: 'renders correctly'
    },
    {
      props: {
        ...AwesomeComponent.defaultProps,
        showLoading: true
      },
      desc: 'renders correctly when loading'
    },
    {
      props: {
        ...AwesomeComponent.defaultProps,
        username: Some('John Doe'),
        showLoading: false
      },
      desc: 'renders correctly when not loading and username present'
    },
    {
      props: {
        ...AwesomeComponent.defaultProps,
        username: None,
        showLoading: false
      },
      desc: 'renders correctly when not loading and username not present'
    },
    {
      props: {
        ...AwesomeComponent.defaultProps,
        error: Some('Err!'),
        showLoading: false
      },
      desc: 'renders correctly when not loading and error present'
    }
  ]

  assertSnapshots(AwesomeComponent, config)
})
