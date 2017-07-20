import { Some } from '@threestup/monads'
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { View, Text, Linking } from 'react-native'

import Config from './Apollo.container.config'
import styles from './Awesome.component.styles'

class ApolloContainer extends Component {
  static Loading = <Text>Loading...</Text>
  static Error = e => <Text style={styles.error}>{e}</Text>
  static Issues = (r, onClick) => r.issues.nodes.map(i =>
    <Text onPress={() => onClick(i.url)} style={styles.repo} key={i.id}>{i.title}</Text>
  )

  _openIssue = url => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err))
  }

  render () {
    console.log(this.props) // @TODO remove after faffing around
    const {loading, error, repository} = this.props

    return (
      <View>
        {loading ? ApolloContainer.Loading : error.match({
          some: _ => ApolloContainer.Error(_),
          none: repository.match({
            some: repo => ApolloContainer.Issues(repo, this._openIssue),
            none: 'N/A'
          })
        })}
      </View>
    )
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
