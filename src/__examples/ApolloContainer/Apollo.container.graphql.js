import toGQL from 'graphql-tag'

const Issues = toGQL`
  query($repoOwner: String!, $repoName: String!, $limit: Int) {
    repository(owner: $repoOwner, name: $repoName) {
      issues(last: $limit) {
        nodes {
          id, title, url
        }
      }
    }
  }
`

const SomeMutation = toGQL`
    mutation($arg: String!) {
        something(arg: $arg) {
            id
        }
    }
`

export default {
  Issues, SomeMutation
}
