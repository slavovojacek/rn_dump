import { ApolloContainer } from './Apollo.container'

import { assertGql } from '../../TestUtils/gql'

describe('ApolloContainer GraphQL Config', () => {
  assertGql(ApolloContainer)
})
