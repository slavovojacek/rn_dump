import React from 'react'
import { View } from 'react-native'
import { graphql } from 'react-apollo'

import Config from './index.config'

const Component = props => {
  console.log(props)
  return <View {...props} />
}

Component.propTypes = Config.propTypes
Component.defaultProps = Config.defaultProps
Component.displayName = Config.displayName
Component.gql = Config.gql

const mapPropsToOptions = (p) => {
  const {repoName, repoOwner} = {...Config.defaultProps, p}
  return {variables: {repoName, repoOwner}}
}

export default graphql(
  Config.gql.IssuesWithReactions, {options: mapPropsToOptions}
)(Component)
