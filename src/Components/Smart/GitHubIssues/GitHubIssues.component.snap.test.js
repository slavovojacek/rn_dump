import { Some, None } from '@threestup/monads'
import React from 'react'

import { issueDef } from './defs'
import GitHubIssues from './GitHubIssues.component'

import { assertSnapshots } from '../../../TestUtils/snapshot'

const testDefaultProps = {
  issuesLoading: false,
  error: None,
  issues: None,
}

jest
  .mock('../../Dumb/Issues/Issues.component', () => 'Issues')

describe('GitHubIssues Component Snapshots', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const configs = [
    {
      props: testDefaultProps,
      desc: 'renders correctly',
    },
    {
      props: {
        ...testDefaultProps,
        issuesLoading: true,
        issues: Some([issueDef()]),
        error: Some('Oops!'),
      },
      desc: 'renders correctly when issuesLoading `true`, regardless of what else is present',
    },
    {
      props: {
        ...testDefaultProps,
        issuesLoading: false,
        issues: Some([issueDef()]),
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
        error: Some('Oops!'),
        issues: Some([this.issueDef]),
      },
      desc: 'renders correctly when error present, regardless of whether issues are present',
    },
  ]

  assertSnapshots(GitHubIssues, configs)
})
