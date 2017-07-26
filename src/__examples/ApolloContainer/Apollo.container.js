import { Some } from '@threestup/monads'
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Linking } from 'react-native'

import Config from './Apollo.container.config'
import View from './Apollo.container.view'

class ApolloContainer extends Component {
  openIssue = url => {
    Linking
      .openURL(url)
      .catch(err => console.error('An error occurred', err))
  }

  render () {
    const props = {...this.props, openIssue: this.openIssue}
    return View(props)
  }
}

ApolloContainer.query = Config.query
ApolloContainer.displayName = Config.displayName
ApolloContainer.propTypes = Config.propTypes
ApolloContainer.defaultProps = Config.defaultProps

const mapPropsToOptions = ({repoOwner, repoName, limit, shouldPoll}) => ({
  variables: {repoOwner: 'Threestup', repoName: 'monads', limit: 20},
  pollInterval: shouldPoll ? 1000 * 60 : undefined,
})

const mapResultsToProps = ({data: {loading, error, repository}}) => ({
  loading, error: Some(error), repository: Some(repository)
})

export { ApolloContainer, mapPropsToOptions, mapResultsToProps }
export default graphql(Config.query, {
  props: mapResultsToProps,
  options: mapPropsToOptions,
})(ApolloContainer)
