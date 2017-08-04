import React from 'react'
import { View, Text } from 'react-native'

import Config from './Issues.component.config'
import styles from './Issues.component.styles'

import { Reactions } from '../Reactions/Reactions.component'
import { openUrl } from '../../../../../Utils/misc'

const Issues = ({issues = [], ...rest}) => {
  const Children = issues
    .map(issue => {
      const onPress = () => openUrl(issue.url)
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

Issues.displayName = Config.displayName
Issues.propTypes = Config.propTypes
// Issues.defaultProps = Config.defaultProps

export default Issues
