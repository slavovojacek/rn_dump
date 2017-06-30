import PropTypes from 'prop-types'

const displayName = 'AwesomeComponent'

const propTypes = {
  color: PropTypes.string,
  isWarningVisible: PropTypes.bool
}

const defaultProps = {
  color: 'black',
  isWarningVisible: false
}

export default {
  displayName, propTypes, defaultProps
}
