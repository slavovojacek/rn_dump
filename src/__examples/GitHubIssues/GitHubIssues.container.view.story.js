import React from 'react'
import { storiesOf } from '@storybook/react-native'

import GitHubIssuesView from './GitHubIssues.container.view'

storiesOf('GitHubIssues View', module)
  .add('default', () => (
    <GitHubIssuesView {...GitHubIssuesView.defaultProps} />
  ))
