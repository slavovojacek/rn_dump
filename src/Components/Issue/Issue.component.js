import { throwIfNotObject } from '@openmaths/utils'
import { get_in } from '@threestup/monads'
import React from 'react'
import { View, Text } from 'react-native'

import styles from './Issue.component.styles'

import Reactions from '../Reactions/Reactions.component'
import { openUrl } from '../../Utils/misc'

const Issue = ({issue = issueDefault(), ...rest}) => {
  throwIfNotObject(issue)

  const onPress = () => openUrl(issue.url)
  const reactions = get_in(issue, 'reactions.nodes')
  const reactionsProps = {reactions, issue, ...rest}

  return (
    <View>
      <Text onPress={onPress} style={styles.issueLink}>{issue.title}</Text>
      <Reactions {...reactionsProps} />
    </View>
  )
}

Issue.displayName = 'Issue'

export default Issue
