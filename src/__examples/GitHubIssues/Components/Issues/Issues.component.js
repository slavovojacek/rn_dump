import React from 'react'
import { View, Text } from 'react-native'

import { Reactions } from '../Reactions/Reactions.component'
// @TODO move to its own file here
import styles from './Issues.component.styles'

import { noop } from '../../../../Utils/misc'

const Issues = ({issues = [], openIssue = noop, ...rest}) => {
  const Children = issues
    .map(issue => {
      const onPress = () => openIssue(issue.url)
      const reactions = issue.reactions.nodes
      const reactionsProps = {reactions, issue, ...rest}

      return (
        <View key={issue.id}>
          <Text onPress={onPress} style={styles.issueLink}>{issue.title}</Text>
          <Reactions {...reactionsProps} />
        </View>
      )
    })

  // @TODO figure out whether View is necessary
  return <View style={{backgroundColor: 'red'}}>{Children}</View>
}

export default Issues
