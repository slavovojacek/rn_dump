import PropTypes from 'prop-types'

import { issueDef } from '../../../defs'
import { noop } from '../../../../../Utils/misc'

const displayName = 'IssueComponent'

const propTypes = {
  onPress: PropTypes.object.isRequired,
  issue: PropTypes.object.isRequired,
}

// Only used for testing
const testDefaultProps = {
  onPress: noop,
  issue: issueDef(),
}

export default {
  displayName, propTypes, testDefaultProps
}
