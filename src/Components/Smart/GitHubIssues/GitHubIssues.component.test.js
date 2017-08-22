import { None } from '@threestup/monads'

import GitHubIssues from './GitHubIssues.component'

import { mockSetState } from '../../../TestUtils/mocking'

const GitHubIssuesMockedState = mockSetState(GitHubIssues)
const getInstance = props => new GitHubIssuesMockedState(props)

const testDefaultProps = {
  issuesLoading: false,
  error: None,
  issues: None,
}

jest
  .mock('../../Dumb/Issues/Issues.component', () => 'Issues')

describe('GitHubIssuesComponent', () => {
  beforeEach(() => {
    this.props = {
      ...testDefaultProps,
      // Add override properties, usually mock functions
    }
  })

  afterEach(() => {
    this.props = null
    jest.clearAllMocks()
  })

  describe('Instance', () => {
    test('someMethodWhichShouldNotBeHere correctly updates internal state', () => {
      const instance = getInstance(this.props)
      instance.someMethodWhichShouldNotBeHere()
      const {somethingUnexpected} = instance.state
      expect(somethingUnexpected).toEqual('This should not be here!')
    })
  })
})
