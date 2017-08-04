import React from 'react'
import { Some } from '@threestup/monads'

import GitHubIssuesComponent from './GitHubIssues.component'

import { assertSnapshots } from '../../TestUtils/snapshot'

jest
  .mock('./Components/Issues.component', () => 'Issues')

describe('GitHubIssues View Snapshots', () => {
  beforeEach(() => {
    this.userDef = {id: ''}
    this.reactionDef = {id: '', content: '', user: this.userDef}
    this.issueDef = {id: '', title: '', url: '', bodyText: '', reactions: {
      nodes: [this.reactionDef]
    }}
  })

  afterEach(() => {
    this.userDef = null
    this.reactionDef = null
    this.issueDef = null

    jest.clearAllMocks()
  })

  const configs = [
    {
      props: GitHubIssuesComponent.defaultProps,
      desc: 'renders correctly'
    },
    {
      props: {
        ...GitHubIssuesComponent.defaultProps,
        issuesLoading: true
      },
      desc: 'renders correctly when `issuesLoading` true'
    },
    {
      props: {
        ...GitHubIssuesComponent.defaultProps,
        me: Some(this.userDef),
        loading: false
      },
      desc: 'renders correctly when issuesLoading `false` and `me` present'
    },
    {
      props: {
        ...GitHubIssuesComponent.defaultProps,
        issues: Some([this.issueDef]),
        loading: false
      },
      desc: 'renders correctly when issuesLoading `false` and `issues` present'
    },
    {
      props: {
        ...GitHubIssuesComponent.defaultProps,
        issues: Some([]),
        loading: false
      },
      desc: 'renders correctly when issuesLoading `false` and `issues` present'
    },
    {
      props: {
        ...GitHubIssuesComponent.defaultProps,
        error: Some('Oops!')
      },
      desc: 'renders correctly when `error` present'
    },
    {
      props: {
        ...GitHubIssuesComponent.defaultProps,
        error: Some('Oops!'),
        me: Some(this.userDef),
        issues: Some([this.issueDef]),
      },
      desc: 'renders correctly when `error` present, regardless of what else is present'
    }
  ]

  assertSnapshots(GitHubIssuesComponent, configs)
})
