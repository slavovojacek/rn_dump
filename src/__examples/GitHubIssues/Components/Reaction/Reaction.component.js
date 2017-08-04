import React from 'react'
import { Text } from 'react-native'

import Style from './Reaction.component.styles'
import { ReactionType, AllowedReactionTypes } from '../Reactions/Reactions.component'

import { noop } from '../../../../Utils/misc'

const Reaction = (props) => {
  const {
    type = ReactionType.DEFAULT,
    addReactionToIssue = noop,
    removeReactionFromIssue = noop,
    pressed = false,
    issue = {}
  } = props

  this.displayName = type

  const style = pressed ? Style.reactionActive : Style.reactionInactive
  const onPress = pressed
    ? () => removeReactionFromIssue(issue.id, type)
    : () => addReactionToIssue(issue.id, type)

  let config = {text: ''}

  switch (type) {
    case ReactionType.THUMBS_UP:
      config.text = '👍'
      break
    case ReactionType.THUMBS_DOWN:
      config.text = '👎'
      break
    default:
      throw new Error(`Type of Reaction has to be one of ${AllowedReactionTypes}`)
      break
  }

  return (
    <Text onPress={onPress} style={style}>
      {config.text}
    </Text>
  )
}

export default Reaction
