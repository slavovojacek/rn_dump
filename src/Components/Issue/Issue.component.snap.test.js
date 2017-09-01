import Issue from './Issue.component'

import { issueDefault } from '../../Containers/GitHubIssues/defaults'
import { assertSnapshots } from '../../TestUtils/snapshot'

const testDefaultProps = {
  issue: issueDefault(),
}

jest
  .mock('../Reactions/Reactions.component', () => 'Reactions')
  .mock('../../Utils/misc', () => ({
    openUrl: jest.fn()
  }))

describe('Issue Component Snapshots', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const configs = [
    {
      props: testDefaultProps,
      desc: 'renders correctly'
    },
    {
      props: {
        ...testDefaultProps,
        issues: issueDefault({title: 'Some Title', url: 'https://some.url'}),
      },
      desc: 'renders correctly with specific title and url'
    },
  ]

  assertSnapshots(Issue, configs)
})
