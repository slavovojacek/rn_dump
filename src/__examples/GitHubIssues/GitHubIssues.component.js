import React from 'react'
import { View, Text } from 'react-native'

import Config from './GitHubIssues.component.config'
import styles from './GitHubIssues.component.styles'

import Issues from './lib/Components/Issues/Issues.component'

const IssuesLoading = () => <Text>Issues are currently loading...</Text>
const Error = ({text = 'Error'}) => <Text style={styles.error}>{text}</Text>

class GitHubIssues extends React.Component {
  someMethodWhichShouldNotBeHere = () => {
    // Whatever you want to do here can be done inside
    // the child components, e.g. <IssuesLoading />, <Error />, etc.
  }

  render () {
    const {issuesLoading, error, issues, ...rest} = this.props

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

GitHubIssues.displayName = Config.displayName
GitHubIssues.propTypes = Config.propTypes
GitHubIssues.defaultProps = Config.defaultProps

export { GitHubIssues }
export default GitHubIssues
