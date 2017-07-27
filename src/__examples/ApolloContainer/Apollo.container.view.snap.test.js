import React from 'react'
import { Some } from '@threestup/monads'

import { ApolloContainer } from './Apollo.container'
import ApolloContainerView from './Apollo.container.view'

import { assertSnapshots } from '../../TestUtils/snapshot'

describe('ApolloContainer View Snapshots', () => {
  const config = [
    {
      props: ApolloContainerView.defaultProps,
      desc: 'renders correctly'
    },
    {
      props: {
        ...ApolloContainerView.defaultProps,
        loading: true
      },
      desc: 'renders correctly when loading'
    },
    {
      props: {
        ...ApolloContainerView.defaultProps,
        repository: Some({issues: {nodes: [{id: 'abc-123', title: 'Sumfin'}]}}),
        loading: false
      },
      desc: 'renders correctly when not loading and repository present'
    },
    {
      props: {
        ...ApolloContainerView.defaultProps,
        error: Some('Oops!')
      },
      desc: 'renders correctly when error present'
    }
  ]

  assertSnapshots(ApolloContainerView, config)
})
