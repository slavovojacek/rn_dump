import { Some } from '@threestup/monads'
import React from 'react'
import { compose, graphql } from 'react-apollo'

import GitHubIssues from './GitHubIssues.component'

const mapPropsToOptions = (props) => {
  // `defaultProps` are not applied at this point, therefore we have to do an explicit merge
  const {repoOwner = 'Threestup', repoName = 'monads', limit = 20} = props

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
  })
})

const mapRemoveReactionFromIssueToProps = ({mutate}) => ({
  removeReactionFromIssue: (subjectId, content) => mutate({
    variables: {
      subjectId, content
    },
    refetchQueries: [
      'Issues'
    ]
  })
})

export default compose(
  graphql(GitHubIssues.gql.Issues, {
    props: mapResultsToProps,
    options: mapPropsToOptions,
  }),
  graphql(GitHubIssues.gql.AddReactionToIssue, {
    props: mapAddReactionToIssueToProps,
    options: mapPropsToOptions,
  }),
  graphql(GitHubIssues.gql.RemoveReactionFromIssue, {
    props: mapRemoveReactionFromIssueToProps,
    options: mapPropsToOptions,
  })
)(GitHubIssues)
