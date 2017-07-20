import { None } from '@threestup/monads'
import PropTypes from 'prop-types'

const displayName = 'ApolloContainer'

import query from './lib/issues.graphql'

const propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  repository: PropTypes.object.isRequired
}

const defaultProps = {
  loading: false,
  repository: None,
  error: None
}

export default {
  displayName, propTypes, defaultProps, query
}
