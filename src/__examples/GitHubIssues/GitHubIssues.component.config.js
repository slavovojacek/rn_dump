import { None } from '@threestup/monads'
import PropTypes from 'prop-types'

const displayName = 'ApolloContainerView'

const propTypes = {
  issuesLoading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  issues: PropTypes.object.isRequired,
}

const defaultProps = {
  issuesLoading: false,
  error: None,
  issues: None,
}

export default {
  displayName, propTypes, defaultProps
}
