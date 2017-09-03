import Issues from './Issues.component'

import { props as testDefaultProps } from './defaults'
import { issueDefault } from '../Issue/defaults'
import { assertSnapshots } from '../../TestUtils/snapshot'

jest
  .mock('../Issue/Issue.component', () => 'Issue')

describe('Issues Snapshots', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const configs = [
    {
      props: {...testDefaultProps},
      desc: 'renders correctly',
    },
    {
      props: {
        ...testDefaultProps,
        issues: [issueDefault()],
      },
      desc: 'renders correctly when 1 issue present',
    },
    {
      props: {
        ...testDefaultProps,
        issues: [issueDefault(), issueDefault(), issueDefault()],
      },
      desc: 'renders correctly when 3 issues present',
    },
  ]

  assertSnapshots(Issues, configs)
})
