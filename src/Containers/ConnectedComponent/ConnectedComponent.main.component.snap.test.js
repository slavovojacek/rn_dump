import React from 'react'
import { Some, None } from '@threestup/monads'

import { props as testDefaultProps } from './defaults'
import ConnectedComponent from './ConnectedComponent.main.component'
import { assertSnapshots } from '../../TestUtils/snapshot'

jest
  .mock('./ConnectedComponent.main.component.styles', () => ({
    error: {},
    username: {},
  }))

describe('ConnectedComponent Snapshots', () => {
  const config = [
    {
      props: {...testDefaultProps},
      desc: 'renders correctly'
    },
    {
      props: {
        ...testDefaultProps,
        showLoading: true
      },
      desc: 'renders correctly when loading'
    },
    {
      props: {
        ...testDefaultProps,
        username: Some('John Doe'),
        showLoading: false
      },
      desc: 'renders correctly when not loading and username present'
    },
    {
      props: {
        ...testDefaultProps,
        username: None,
        showLoading: false
      },
      desc: 'renders correctly when not loading and username not present'
    },
    {
      props: {
        ...testDefaultProps,
        error: Some('Err!'),
        showLoading: false
      },
      desc: 'renders correctly when not loading and error present'
    }
  ]

  assertSnapshots(ConnectedComponent, config)
})
