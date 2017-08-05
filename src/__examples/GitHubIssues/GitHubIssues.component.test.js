import GitHubIssuesComponent from './GitHubIssues.component'
import Config from './GitHubIssues.component.config'

import { mockSetState } from '../../TestUtils/mocking'

const GitHubIssuesComponentMockedState = mockSetState(GitHubIssuesComponent)
const getInstance = props => new GitHubIssuesComponentMockedState(props)

jest
  .mock('./lib/Components/Issues/Issues.component', () => 'Issues')

describe('GitHubIssuesComponent', () => {
  beforeEach(() => {
    this.props = {
      ...Config.testDefaultProps,
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
