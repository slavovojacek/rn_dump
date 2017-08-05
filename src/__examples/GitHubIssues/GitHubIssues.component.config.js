import PropTypes from 'prop-types'

const displayName = 'GitHubIssuesComponent'

const propTypes = {
  issuesLoading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  issues: PropTypes.object.isRequired,
}

export default {
  displayName, propTypes
}
