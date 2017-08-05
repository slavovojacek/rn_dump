import { get_in } from '@threestup/monads'
import React from 'react'
import { View, Text } from 'react-native'

import Config from './Issue.component.config'
import styles from './Issues.component.styles'

import { Reactions } from '../Reactions/Reactions.component'
import { noop } from '../../../../../Utils/misc'
import { assertObject } from '../../../../../Utils/type'

const Issue = ({onPress = noop, issue, ...rest}) => {
  // @TODO abstract away, call throwIfNotObject
  if (assertObject(issue))
    throw new Error(`issue has to be an object, instead got`)

  const reactions = get_in(issue, 'reactions.nodes')
  const reactionsProps = {reactions, issue, ...rest}

  return (
    <View>
      <Text onPress={onPress} style={styles.issueLink}>{issue.title}</Text>
      <Reactions {...reactionsProps} />
    </View>
  )
}

Issue.displayName = Config.displayName
Issue.propTypes = Config.propTypes

export default Issue
