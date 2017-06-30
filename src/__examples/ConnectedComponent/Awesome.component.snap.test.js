import React from 'react'
import { Some, None } from 'tsp-monads'

import { AwesomeComponent } from './Awesome.component'
import { assertSnapshots } from '../../TestUtils/snapshots'

describe('AwesomeComponent Snapshots', () => {
  const config = [
    {
      props: AwesomeComponent.defaultProps,
      desc: 'renders correctly'
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
    }
  ]

  config.forEach(conf => assertSnapshots(AwesomeComponent, conf.props, conf.desc))
})
