import PropTypes from 'prop-types'

const displayName = 'LoginForm'

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

const defaultProps = {
  onSubmit: args => null,
  handleSubmit: args => null
}

export default {
  displayName, propTypes, defaultProps
}
