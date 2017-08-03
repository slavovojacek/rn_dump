import { GitHubIssuesContainer } from './GitHubIssues.container'

import { assertGql } from '../../TestUtils/gql'

jest
  .mock('./GitHubIssues.container.view', () => 'GitHubIssuesView')

describe('ApolloContainer GraphQL Config', () => {
  assertGql(GitHubIssuesContainer)
})
