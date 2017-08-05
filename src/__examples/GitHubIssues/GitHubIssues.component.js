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
    // the child components, e.g.
    // <Issues />, <IssuesLoading />, <Error />, etc.

    // This should NOT be here! Only present for demo purposes
    this.setState(prevState => ({
      somethingUnexpected: 'This should not be here!'
    }))
  }

  render () {
    const {issuesLoading, error, issues, ...rest} = this.props

    // throwIfNotBoolean(issues)
    // throwIfNotOption(issues)
    // throwIfNotOption(error)

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

export { GitHubIssues }
export default GitHubIssues
