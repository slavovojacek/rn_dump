import Issue from './Issue.component'

import { issueDefault, props as testDefaultProps } from './defaults'
import { assertSnapshots } from '../../TestUtils/snapshot'

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
      props: {...testDefaultProps},
      desc: 'renders correctly'
    },
    {
      props: {
        ...testDefaultProps,
        issue: issueDefault({title: 'Some Title', url: 'https://some.url'}),
      },
      desc: 'renders correctly with specific title and url'
    },
  ]

  assertSnapshots(Issue, configs)
})
