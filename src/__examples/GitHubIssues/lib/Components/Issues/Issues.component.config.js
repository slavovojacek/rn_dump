import PropTypes from 'prop-types'

const displayName = 'IssuesComponent'

const propTypes = {
  issues: PropTypes.array.isRequired,
}

// Only used for testing
const testDefaultProps = {
  issues: [],
}

export default {
  displayName, propTypes, testDefaultProps
}
