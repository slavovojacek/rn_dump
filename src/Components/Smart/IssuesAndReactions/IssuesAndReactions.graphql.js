import gqlToAST from 'graphql-tag'

const IssuesWithReactions = gqlToAST`
  query IssuesWithReactions($repoOwner: String!, $repoName: String!) {
    repository(owner: $repoOwner, name: $repoName) {
      id
      issues(first: 20) {
        nodes {
          id
          title
          reactions(first: 10) {
            nodes {
              id
              content
              createdAt
              user {
                id
              }
            }
          }
        }
      }
    }
  }
`

export default {
  IssuesWithReactions
}
