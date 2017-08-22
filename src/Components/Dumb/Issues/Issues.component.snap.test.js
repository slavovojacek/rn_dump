import Issues from './Issues.component'

import { issueDef } from '../../Smart/GitHubIssues/defs'
import { assertSnapshots } from '../../../TestUtils/snapshot'

const testDefaultProps = {
  issues: [],
}

jest
  .mock('../Issue/Issue.component', () => 'Issue')

describe('Issues Component Snapshots', () => {
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
        issues: [issueDef()],
      },
      desc: 'renders correctly when issues present'
    },
  ]

  assertSnapshots(Issues, configs)
})
