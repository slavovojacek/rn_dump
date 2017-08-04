import { None } from '@threestup/monads'
import PropTypes from 'prop-types'

const displayName = 'IssuesComponent'

const propTypes = {
  me: PropTypes.object.isRequired,
  reactions: PropTypes.array.isRequired,
}

const defaultProps = {
  me: None,
  reactions: [],
}

export default {
  displayName, propTypes, defaultProps
}
