import { None } from '@threestup/monads'
import PropTypes from 'prop-types'

import { noop } from '../../Utils/misc'

const displayName = 'ApolloContainerView'

const propTypes = {
  issuesLoading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  me: PropTypes.object.isRequired,
  issues: PropTypes.object.isRequired,
  addReactionToIssue: PropTypes.func.isRequired,
  removeReactionFromIssue: PropTypes.func.isRequired
}

const defaultProps = {
  issuesLoading: false,
  error: None,
  me: None,
  issues: None,
  addReactionToIssue: noop,
  removeReactionFromIssue: noop
}

export default {
  displayName, propTypes, defaultProps
}
