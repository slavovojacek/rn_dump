import PropTypes from 'prop-types'

import gql from './IssuesAndReactions.graphql'

const propTypes = {
  repoName: PropTypes.string.isRequired,
  repoOwner: PropTypes.string.isRequired,
}

const defaultProps = {
  repoName: 'monads',
  repoOwner: 'Threestup',
}

const displayName = 'IssuesAndReactions'

export default {
  propTypes, defaultProps, displayName, gql
}
