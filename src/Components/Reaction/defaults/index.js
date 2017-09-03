import { noop } from '@openmaths/utils'

import { issueDefault } from '../../Issue/defaults'
import { ReactionType } from '../../../Constants/ReactionType'

const userDefault = (override = {}) => {
  const def = {
    id: '',
  }

  return {...def, ...override}
}

const reactionDefault = (override = {}) => {
  const def = {
    id: '',
    content: '',
    user: userDefault()
  }

  return {...def, ...override}
}

const props = {
  type: ReactionType.DEFAULT,
  addReactionToIssue: noop,
  removeReactionFromIssue: noop,
  pressed: false,
  issue: issueDefault()
}

export {
  userDefault, reactionDefault, props
}
