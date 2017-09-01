import { Some, None } from '@threestup/monads'
import React from 'react'

import { issueDefault } from './defaults'
import GitHubIssues from './GitHubIssues.component'

import { assertSnapshots } from '../../TestUtils/snapshot'
import { assertGql } from '../../TestUtils/gql'

jest
  .mock('../../Components/Issues/Issues.component', () => 'Issues')
  .mock('./GitHubIssues.component.styles', () => ({
    error: {}
  }))

describe('GitHubIssues Component Snapshots', () => {
  this.props = {
    issuesLoading: false,
    error: None,
    issues: None,
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  const configs = [
    {
      props: this.props,
      desc: 'renders correctly',
    },
    {
      props: {
        ...this.props,
        issuesLoading: true,
        issues: Some([issueDefault()]),
        error: Some('Oops!'),
      },
      desc: 'renders correctly when issuesLoading `true`, regardless of what else is present',
    },
    {
      props: {
        ...this.props,
        issuesLoading: false,
        issues: Some([issueDefault()]),
      },
      desc: 'renders correctly when issuesLoading `false` and issues present',
    },
    {
      props: {
        ...this.props,
        issuesLoading: false,
        issues: Some([]),
      },
      desc: 'renders correctly when issuesLoading `false` and issues are empty array',
    },
    {
      props: {
        ...this.props,
        issuesLoading: false,
        error: Some('Oops!'),
      },
      desc: 'renders correctly when issuesLoading `false` and error present',
    },
    {
      props: {
        ...this.props,
        issuesLoading: false,
        issues: Some([issueDefault]),
        error: Some('Oops!'),
      },
      desc: 'renders correctly when error present, regardless of whether issues are present',
    },
  ]

  assertSnapshots(GitHubIssues, configs)
  assertGql(GitHubIssues)
})
