import gqlToAST from 'graphql-tag'

const Issues = gqlToAST`
  query Issues ($repoOwner: String!, $repoName: String!, $limit: Int) {
    viewer {
      id
    }
    repository(owner: $repoOwner, name: $repoName) {
      issues(last: $limit) {
        nodes {
          id
          title
          url
          bodyText
          reactions(last: $limit) {
            nodes {
              content
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

const AddReactionToIssue = gqlToAST`
  mutation AddReactionToIssue ($subjectId: ID!, $content: ReactionContent!) {
    addReaction (input: { subjectId: $subjectId, content: $content }) {
      reaction {
        content
      }
      subject {
        id
      }
    }
  }
`

const RemoveReactionFromIssue = gqlToAST`
  mutation RemoveReactionFromIssue ($subjectId: ID!, $content: ReactionContent!) {
    removeReaction (input: { subjectId: $subjectId, content: $content }) {
      reaction {
        content
      }
      subject {
        id
      }
    }
  }
`

export default {
  Issues, AddReactionToIssue, RemoveReactionFromIssue
}
