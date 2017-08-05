// import { None } from '@threestup/monads'
import PropTypes from 'prop-types'

const displayName = 'IssuesComponent'

const propTypes = {
  me: PropTypes.object.isRequired,
  reactions: PropTypes.object.isRequired,
}

// Only used for testing
// const testDefaultProps = {
//   me: None,
//   reactions: None,
// }

export default {
  displayName, propTypes
}
