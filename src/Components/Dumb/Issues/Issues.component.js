import React from 'react'
import { View } from 'react-native'

import Config from './Issues.component.config'

import Issue from '../Issue/Issue.component'

const Issues = ({issues = [], ...rest}) => {
  const Children = issues
    .map(issue => {
      const issueProps = {issue, ...rest}
      return <Issue key={issue.id} {...issueProps}/>
    })

  return <View>{Children}</View>
}

Issues.displayName = Config.displayName
Issues.propTypes = Config.propTypes

export default Issues
