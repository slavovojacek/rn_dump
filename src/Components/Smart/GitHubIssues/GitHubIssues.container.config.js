import PropTypes from 'prop-types'

import gql from './GitHubIssues.graphql'

const displayName = 'GitHubIssuesContainer'

const propTypes = {
  repoOwner: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired
}

const defaultProps = {
  repoOwner: 'Threestup',
  repoName: 'monads',
  limit: 20
}

export default {
  displayName, propTypes, defaultProps, gql
}
