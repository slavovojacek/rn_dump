import React from 'react'
import { Some } from '@threestup/monads'

import { ApolloContainer } from './Apollo.container'

import { assertSnapshots } from '../../TestUtils/snapshots'

describe('ApolloContainer Snapshots', () => {
  const config = [
    {
      props: ApolloContainer.defaultProps,
      desc: 'renders correctly'
    },
    {
      props: {
        ...ApolloContainer.defaultProps,
        loading: true
      },
      desc: 'renders correctly when loading'
    },
    {
      props: {
        ...ApolloContainer.defaultProps,
        repository: Some({issues: {nodes: [{id: 'abc-123', title: 'Sumfin'}]}}),
        loading: false
      },
      desc: 'renders correctly when not loading and repository present'
    },
    {
      props: {
        ...ApolloContainer.defaultProps,
        error: Some('Oops!')
      },
      desc: 'renders correctly when error present'
    }
  ]

  assertSnapshots(ApolloContainer, config)
})
