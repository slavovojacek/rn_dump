import gql from 'graphql-tag'

const Issues = gql`
  query($repoOwner: String!, $repoName: String!, $limit: Int) {
    repository(owners: $repoOwner, name: $repoName) {
      issues(last: $limit) {
        nodes {
          id, title, url
        }
      }
    }
  }
`

export { Issues }
export default Issues
