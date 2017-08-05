import Issue from './Issue.component'
import Config from './Issue.component.config'

import { issueDef } from '../../../defs'
import { assertSnapshots } from '../../../../../TestUtils/snapshot'

jest
  .mock('../Reactions/Reactions.component', () => 'Reactions')
  .mock('../../../../../Utils/misc', () => ({
    openUrl: jest.fn()
  }))

describe('Issue Component Snapshots', () => {
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
        issues: issueDef({title: 'Some Title', url: 'https://some.url'}),
      },
      desc: 'renders correctly with specific title and url'
    },
  ]

  assertSnapshots(Issue, configs)
})
