import PropTypes from 'prop-types'

// import { ReactionType } from '../../Constants/ReactionType'
// import { issueDef } from '../../../defs'
// import { noop } from '../../../../../Utils/misc'

const displayName = 'ReactionComponent'

const propTypes = {
  type: PropTypes.string.isRequired,
  addReactionToIssue: PropTypes.func.isRequired,
  removeReactionFromIssue: PropTypes.func.isRequired,
  pressed: PropTypes.bool.isRequired,
  issue: PropTypes.object.isRequired,
}

// Only used for testing
// const testDefaultProps = {
//   type: ReactionType.DEFAULT,
//   addReactionToIssue: noop,
//   removeReactionFromIssue: noop,
//   pressed: false,
//   issue: issueDef(),
// }

export default {
  displayName, propTypes
}
