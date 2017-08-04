import { GitHubIssuesContainer } from './GitHubIssues.container'

import { assertGql } from '../../TestUtils/gql'

jest
  .mock('./GitHubIssues.component', () => 'GitHubIssuesComponent')

describe('ApolloContainer GraphQL Config', () => {
  assertGql(GitHubIssuesContainer)
})
