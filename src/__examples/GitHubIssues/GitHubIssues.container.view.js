import { None } from '@threestup/monads'
import React from 'react'
import { View, Text, Linking } from 'react-native'

import Config from './GitHubIssues.container.view.config'
import styles from './GitHubIssues.container.styles'

import { Reactions } from './Components/Reactions.component'

const RenderIssuesLoading = <Text>Issues are currently loading...</Text>
const RenderError = e => <Text style={styles.error}>{e}</Text>

class GitHubIssuesView extends React.Component {
  openIssue = url => {
    Linking
      .openURL(url)
      .catch(err => console.error('An error occurred', err))
  }

  renderIssues = () => {
    const {issues = None, ...rest} = this.props

    return issues
      .unwrap_or([])
      .map(issue => {
        const openIssue = () => this.openIssue(issue.url)
        const reactions = issue.reactions.nodes
        const reactionsProps = { reactions, issue, ...rest }

        return (
          <View key={issue.id}>
            <Text onPress={openIssue} style={styles.issueLink}>{issue.title}</Text>
            <Reactions {...reactionsProps} />
          </View>
        )
      })
  }

  render () {
    const {issuesLoading, error, issues} = this.props

    return (
      <View>
        {issuesLoading ? RenderIssuesLoading : error.match({
          some: e => RenderError,
          none: issues.match({
            some: issues => this.renderIssues(),
            none: <Text>Cannot get Issues for some reason</Text>
          })
        })}
      </View>
    )
  }
}

GitHubIssuesView.displayName = Config.displayName
GitHubIssuesView.propTypes = Config.propTypes
GitHubIssuesView.defaultProps = Config.defaultProps

export default GitHubIssuesView
