import React from 'react'
import { View, Text, Linking } from 'react-native'

import Config from './GitHubIssues.component.config'
import styles from './GitHubIssues.component.styles'

import Issues from './Components/Issues/Issues.component'

const RenderIssuesLoading = <Text>Issues are currently loading...</Text>
const RenderError = e => <Text style={styles.error}>{e}</Text>

class GitHubIssues extends React.Component {
  openIssue = url => {
    Linking
      .openURL(url)
      .catch(err => console.error('An error occurred', err))
  }

  sayHi = () => {
    this.setState()
  }

  render () {
    const {issuesLoading, error, issues, ...rest} = this.props

    return (
      <View>
        {issuesLoading ? RenderIssuesLoading : error.match({
          some: e => RenderError,
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
