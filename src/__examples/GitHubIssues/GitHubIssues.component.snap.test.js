import React from 'react'
import { Some } from '@threestup/monads'

import { issueDef } from './defs'
import GitHubIssuesComponent from './GitHubIssues.component'
import Config from './GitHubIssues.component.config'

import { assertSnapshots } from '../../TestUtils/snapshot'

jest
  .mock('./lib/Components/Issues/Issues.component', () => 'Issues')

describe('GitHubIssues View Snapshots', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const configs = [
    {
      props: Config.defaultProps,
      desc: 'renders correctly'
    },
    {
      props: {
        ...Config.defaultProps,
        issuesLoading: true,
        issues: Some([issueDef()]),
        error: Some('Oops!')
      },
      desc: 'renders correctly when issuesLoading `true`, regardless of what else is present'
    },
    {
      props: {
        ...Config.defaultProps,
        issuesLoading: false,
        issues: Some([issueDef()]),
      },
      desc: 'renders correctly when issuesLoading `false` and issues present'
    },
    {
      props: {
        ...Config.defaultProps,
        issuesLoading: false,
        issues: Some([]),
      },
      desc: 'renders correctly when issuesLoading `false` and issues are empty array'
    },
    {
      props: {
        ...Config.defaultProps,
        issuesLoading: false,
        error: Some('Oops!'),
      },
      desc: 'renders correctly when issuesLoading `false` and error present'
    },
    {
      props: {
        ...Config.defaultProps,
        issuesLoading: false,
        error: Some('Oops!'),
        issues: Some([this.issueDef]),
      },
      desc: 'renders correctly when error present, regardless of whether issues are present'
    }
  ]

  assertSnapshots(GitHubIssuesComponent, configs)
})
