import { None } from '@threestup/monads'
import PropTypes from 'prop-types'

const displayName = 'GitHubIssuesComponent'

const propTypes = {
  issuesLoading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  issues: PropTypes.object.isRequired,
}

// Only used for testing
const testDefaultProps = {
  issuesLoading: false,
  error: None,
  issues: None,
}

export default {
  displayName, propTypes, testDefaultProps
}
