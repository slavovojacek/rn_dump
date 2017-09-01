import { throwIfNotBoolean, throwIfNotOption } from '@openmaths/utils'
import React from 'react'
import { View, Text } from 'react-native'

import styles from './GitHubIssues.component.styles'
import gql from './GitHubIssues.graphql'
import Issues from '../../Components/Issues/Issues.component'

const IssuesLoading = () => <Text>Issues are currently loading...</Text>
const Error = ({text = 'Error'}) => <Text style={styles.error}>{text}</Text>

class GitHubIssues extends React.Component {
  static displayName = 'GitHubIssues'
  static gql = gql

  render () {
    const {issuesLoading, error, issues, ...rest} = this.props

    throwIfNotBoolean(issuesLoading)
    throwIfNotOption(issues)
    throwIfNotOption(error)

    return (
      <View>
        {issuesLoading ? <IssuesLoading /> : error.match({
          some: e => <Error text={e}/>,
          none: issues.match({
            some: _ => {
              const issuesProps = {issues: _, ...rest}
              return <Issues {...issuesProps} />
            },
            none: <Text>Cannot get Issues for some reason</Text>
          })
        })}
      </View>
    )
  }
}

export default GitHubIssues
