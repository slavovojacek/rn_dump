import React from 'react'
import { storiesOf } from '@storybook/react-native'

import GitHubIssues from './GitHubIssues.main.component'
import { props as testDefaultProps } from './defaults'

storiesOf('GitHubIssues Main Component', module)
  .add('default', () => (
    <GitHubIssues {...testDefaultProps} />
  ))
