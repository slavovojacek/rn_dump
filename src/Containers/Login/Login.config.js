import PropTypes from 'prop-types'

import { initialState } from '../../Redux/Login/reducer'

const displayName = 'LoginContainer'

const propTypes = {
  loginState: PropTypes.shape({
    data: PropTypes.object.isRequired,
    isPending: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired
  }),
  login: PropTypes.func.isRequired
}

const defaultProps = {
  loginState: initialState,
  login: username => null
}

export default {
  displayName, propTypes, defaultProps
}
