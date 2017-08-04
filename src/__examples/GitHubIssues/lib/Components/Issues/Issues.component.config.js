import PropTypes from 'prop-types'

const displayName = 'IssuesComponent'

const propTypes = {
  issues: PropTypes.array.isRequired,
}

const defaultProps = {
  issues: [],
}

export default {
  displayName, propTypes, defaultProps
}
