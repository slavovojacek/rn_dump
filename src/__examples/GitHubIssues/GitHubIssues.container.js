import { Some } from '@threestup/monads'
import React from 'react'
import { compose, graphql } from 'react-apollo'

import Config from './GitHubIssues.container.config'
import GitHubIssues from './GitHubIssues.component'

const GitHubIssuesContainer = props => <GitHubIssues {...props} />

GitHubIssuesContainer.gql = Config.gql
GitHubIssuesContainer.propTypes = Config.propTypes
GitHubIssuesContainer.defaultProps = Config.defaultProps

const mapPropsToOptions = (p) => {
  // `defaultProps` are not applied at this point, therefore we have to do the following
  const {repoOwner, repoName, limit} = {...Config.defaultProps, ...p}

  return {
    variables: {repoOwner, repoName, limit}
  }
}

const mapResultsToProps = ({data: {loading, error, repository, viewer}}) => {
  return {
    issuesLoading: loading,
    error: Some(error),
    me: Some(viewer),
    issues: Some(repository)
      .map(_ => _.issues.nodes)
  }
}

const mapAddReactionToIssueToProps = ({mutate}) => ({
  addReactionToIssue: (subjectId, content) => mutate({
    variables: {
      subjectId, content
    },
    refetchQueries: [
      'Issues'
    ]
  }).then(console.log).catch(console.error)
})

const mapRemoveReactionFromIssueToProps = ({mutate}) => ({
  removeReactionFromIssue: (subjectId, content) => mutate({
    variables: {
      subjectId, content
    },
    refetchQueries: [
      'Issues'
    ]
  }).then(console.log).catch(console.error)
})

export { GitHubIssuesContainer }

export default compose(
  graphql(Config.gql.Issues, {
    props: mapResultsToProps,
    options: mapPropsToOptions,
  }),
  graphql(Config.gql.AddReactionToIssue, {
    props: mapAddReactionToIssueToProps,
    options: mapPropsToOptions,
  }),
  graphql(Config.gql.RemoveReactionFromIssue, {
    props: mapRemoveReactionFromIssueToProps,
    options: mapPropsToOptions,
  })
)(GitHubIssuesContainer)
