import { Some } from '@threestup/monads'
import React from 'react'
import { compose, graphql } from 'react-apollo'

import Config from './GitHubIssues.container.config'
import GitHubIssuesComponent from './GitHubIssues.component'

const GitHubIssues = props => <GitHubIssuesComponent {...props} />

GitHubIssues.gql = Config.gql
GitHubIssues.propTypes = Config.propTypes
GitHubIssues.defaultProps = Config.defaultProps

const mapPropsToOptions = (p) => {
  // `defaultProps` are not applied at this point, therefore we have to merge explicitly
  const {repoOwner, repoName, limit} = {...Config.defaultProps, ...p}

  return {
    variables: {repoOwner, repoName, limit}
  }
}

const mapResultsToProps = ({data: {loading, error, repository, viewer}}) => ({
  issuesLoading: loading,
  error: Some(error),
  me: Some(viewer),
  issues: Some(repository)
    .map(_ => _.issues.nodes)
})

const mapAddReactionToIssueToProps = ({mutate}) => ({
  addReactionToIssue: (subjectId, content) => mutate({
    variables: {
      subjectId, content
    },
    refetchQueries: [
      'Issues'
    ]
  }).catch(console.error) // Just for demo purposes, debugging. Shouldn't be here.
})

const mapRemoveReactionFromIssueToProps = ({mutate}) => ({
  removeReactionFromIssue: (subjectId, content) => mutate({
    variables: {
      subjectId, content
    },
    refetchQueries: [
      'Issues'
    ]
  }).catch(console.error) // Just for demo purposes, debugging. Shouldn't be here.
})

export { GitHubIssues }

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
)(GitHubIssues)
