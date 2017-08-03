import gqlToAST from 'graphql-tag'

const Issues = gqlToAST`
  query Issues ($repoOwner: String!, $repoName: String!, $limit: Int) {
    repository(owner: $repoOwner, name: $repoName) {
      issues(last: $limit) {
        nodes {
          id, title, url
        }
      }
    }
  }
`

export default {
  Issues
}
