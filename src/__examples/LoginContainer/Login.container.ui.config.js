import PropTypes from 'prop-types'

import Config from './Login.container.config'

const displayName = 'LoginContainerUI'

const propTypes = {
  ...Config.propTypes,
  signIn: PropTypes.func.isRequired
}

const defaultProps = {
  ...Config.defaultProps,
  signIn: values => null
}

export default {
  displayName, propTypes, defaultProps
}
