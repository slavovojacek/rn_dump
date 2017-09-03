// import { Some } from '@threestup/monads'

import Reaction from './Reaction.component'

import { props as testDefaultProps } from './defaults'
import { ReactionType } from '../../Constants/ReactionType'
import { assertSnapshots } from '../../TestUtils/snapshot'

describe('Reaction Snapshots', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const configs = [
    {
      props: {...testDefaultProps},
      desc: 'throws if type is not one of `THUMBS_UP`, `THUMBS_DOWN`',
      throws: TypeError
    },
    {
      props: {
        ...testDefaultProps,
        type: ReactionType.THUMBS_UP
      },
      desc: 'renders correctly when type is `THUMBS_UP`',
    },
    {
      props: {
        ...testDefaultProps,
        type: ReactionType.THUMBS_DOWN
      },
      desc: 'renders correctly when type is `THUMBS_DOWN`',
    },
    {
      props: {
        ...testDefaultProps,
        type: ReactionType.THUMBS_UP,
        pressed: true
      },
      desc: 'renders correctly when type is `THUMBS_UP` and pressed is `true`',
    },
    {
      props: {
        ...testDefaultProps,
        type: ReactionType.THUMBS_DOWN,
        pressed: true
      },
      desc: 'renders correctly when type is `THUMBS_DOWN` and pressed is `true`',
    },
  ]

  assertSnapshots(Reaction, configs)
})
