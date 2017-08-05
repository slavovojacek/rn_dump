import PropTypes from 'prop-types'

import { issueDef } from '../../../defs'
import { noop } from '../../../../../Utils/misc'

const displayName = 'IssueComponent'

const propTypes = {
  issue: PropTypes.object.isRequired,
}

// Only used for testing
const testDefaultProps = {
  issue: issueDef(),
}

export default {
  displayName, propTypes, testDefaultProps
}
