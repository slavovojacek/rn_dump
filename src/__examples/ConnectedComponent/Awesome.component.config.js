import PropTypes from 'prop-types'
import { None } from 'tsp-monads'

const displayName = 'AwesomeComponent'

const propTypes = {
  username: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  showLoading: PropTypes.bool.isRequired,
  apiFetch: PropTypes.func.isRequired
}

const defaultProps = {
  username: None,
  error: None,
  showLoading: false,
  apiFetch: arg => null
}

export default {
  displayName, propTypes, defaultProps
}
