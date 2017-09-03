import { Some } from '@threestup/monads'
import React from 'react'

import { props as testDefaultProps } from './defaults'
import { issueDefault } from '../../Components/Issue/defaults'
import GitHubIssues from './GitHubIssues.main.component'

import { assertSnapshots } from '../../TestUtils/snapshot'
import { assertGql } from '../../TestUtils/gql'

jest
  .mock('../../Components/Issues/Issues.component', () => 'Issues')
  .mock('./GitHubIssues.main.component.styles', () => ({
    error: {}
  }))

describe('GitHubIssues Snapshots', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const configs = [
    {
      props: {...testDefaultProps},
      desc: 'renders correctly',
    },
    {
      props: {
        ...testDefaultProps,
        issuesLoading: true,
        issues: Some([issueDefault()]),
        error: Some('Oops!'),
      },
      desc: 'renders correctly when issuesLoading `true`, regardless of what else is present',
    },
    {
      props: {
        ...testDefaultProps,
        issuesLoading: false,
        issues: Some([issueDefault()]),
      },
      desc: 'renders correctly when issuesLoading `false` and issues present',
    },
    {
      props: {
        ...testDefaultProps,
        issuesLoading: false,
        issues: Some([]),
      },
      desc: 'renders correctly when issuesLoading `false` and issues are empty array',
    },
    {
      props: {
        ...testDefaultProps,
        issuesLoading: false,
        error: Some('Oops!'),
      },
      desc: 'renders correctly when issuesLoading `false` and error present',
    },
    {
      props: {
        ...testDefaultProps,
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
