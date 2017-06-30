import PropTypes from 'prop-types'

const displayName = 'AwesomeComponent'

const propTypes = {
  logIntoConsole: PropTypes.func.isRequired
}

const defaultProps = {
  logIntoConsole: val => console.log(val)
}

export default {
  displayName, propTypes, defaultProps
}
