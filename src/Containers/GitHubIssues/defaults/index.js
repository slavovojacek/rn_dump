import { None } from '@threestup/monads'

const userDefault = (id = '') => ({id})

const reactionDefault = (override = {}) => {
  const def = {
    id: '',
    content: '',
    user: userDefault()
  }

  return {...def, ...override}
}

const issueDefault = (override = {}) => {
  const def = {
    id: '',
    title: '',
    url: '',
    bodyText: '',
    reactions: []
  }

  return {...def, ...override}
}

const props = {
  issuesLoading: false,
  issues: None,
  error: None,
}

export {
  userDefault, reactionDefault, issueDefault, props
}
