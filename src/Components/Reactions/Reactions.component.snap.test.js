import { Some } from '@threestup/monads'

import Reactions from './Reactions.component'

import { props as testDefaultProps } from './defaults'
import { issueDefault } from '../Issue/defaults'
import { reactionDefault, userDefault } from '../Reaction/defaults'
import { ReactionType } from '../../Constants/ReactionType'
import { assertSnapshots } from '../../TestUtils'

jest
  .mock('../Reaction/Reaction.component', () => 'Reaction')

describe('Reactions Snapshots', () => {
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
        issue: issueDefault({
          reactions: {
            nodes: [reactionDefault(), reactionDefault()]
          }
        }),
      },
      desc: 'renders correctly when reactions present',
    },
    {
      props: {
        ...testDefaultProps,
        me: Some(userDefault()),
        issue: issueDefault({
          reactions: {
            nodes: [reactionDefault(), reactionDefault()]
          }
        }),
      },
      desc: 'renders correctly when user present and reactions present',
    },
    {
      props: {
        ...testDefaultProps,
        me: Some(userDefault({id: 'someId'})),
        issue: issueDefault({
          reactions: {
            nodes: [
              reactionDefault({
                content: ReactionType.THUMBS_UP,
                user: userDefault({id: 'someId'})
              }),
              reactionDefault(),
              reactionDefault()
            ]
          }
        }),
      },
      desc: 'renders correctly when user present and reactions present with matching type and userId',
    },
  ]

  assertSnapshots(Reactions, configs)
})
