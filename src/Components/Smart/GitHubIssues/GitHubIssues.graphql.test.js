import { GitHubIssues } from './GitHubIssues.container'

import { assertGql } from '../../../TestUtils/gql'

jest
  .mock('./GitHubIssues.component', () => 'GitHubIssuesComponent')

describe('GitHubIssues GraphQL Config', () => {
  assertGql(GitHubIssues)
})
