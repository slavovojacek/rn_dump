import PropTypes from 'prop-types'

import Config from './Apollo.container.config'

const displayName = 'ApolloContainerView'

const propTypes = {
  ...Config.propTypes,
  openIssue: PropTypes.func.isRequired
}

const defaultProps = {
  ...Config.defaultProps,
  openIssue: () => null
}

export default {
  displayName, propTypes, defaultProps
}
