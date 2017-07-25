import PropTypes from 'prop-types'

import Config from './Apollo.container.config'

const displayName = 'ApolloContainerUI'

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
