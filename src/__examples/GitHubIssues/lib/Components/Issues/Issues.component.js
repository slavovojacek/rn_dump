import React from 'react'
import { View } from 'react-native'

import Config from './Issues.component.config'

import Issue from '../Issue/Issue.component'
import { openUrl } from '../../../../../Utils/misc'

const Issues = ({issues = [], ...rest}) => {
  const Children = issues
    .map(issue => {
      const onPress = () => openUrl(issue.url)
      const issueProps = {onPress, issue, ...rest}
      return <Issue key={issue.id} {...issueProps}/>
    })

  return <View>{Children}</View>
}

Issues.displayName = Config.displayName
Issues.propTypes = Config.propTypes

export default Issues
