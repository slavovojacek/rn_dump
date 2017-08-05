import Issues from './Issues.component'
import Config from './Issues.component.config'

import { issueDef } from '../../../defs'
import { assertSnapshots } from '../../../../../TestUtils/snapshot'

jest
  .mock('../Issue/Issue.component', () => 'Issue')

describe('Issues Component Snapshots', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const configs = [
    {
      props: Config.testDefaultProps,
      desc: 'renders correctly'
    },
    {
      props: {
        ...Config.testDefaultProps,
        issues: [issueDef()],
      },
      desc: 'renders correctly when issues present'
    },
  ]

  assertSnapshots(Issues, configs)
})
