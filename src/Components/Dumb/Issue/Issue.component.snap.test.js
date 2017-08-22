import Issue from './Issue.component'

import { issueDef } from '../../Smart/GitHubIssues/defs/index'
import { assertSnapshots } from '../../../TestUtils/snapshot'

const testDefaultProps = {
  issue: issueDef(),
}

jest
  .mock('../Reactions/Reactions.component', () => 'Reactions')
  .mock('../../../Utils/misc', () => ({
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
        issues: issueDef({title: 'Some Title', url: 'https://some.url'}),
      },
      desc: 'renders correctly with specific title and url'
    },
  ]

  assertSnapshots(Issue, configs)
})
