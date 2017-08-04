import React from 'react'
import { Text } from 'react-native'

import Config from './Reaction.component.config'
import style from './Reaction.component.styles'

import { ReactionType, AllowedReactionTypes } from '../Reactions/Reactions.component'
import { issueDef } from '../../../defs'
import { noop } from '../../../../../Utils/misc'

const Reaction = (props) => {
  const {
    type = ReactionType.DEFAULT,
    addReactionToIssue = noop,
    removeReactionFromIssue = noop,
    pressed = false,
    issue = issueDef()
  } = props

  let config = {
    text: '',
    style: pressed
      ? style.reactionActive
      : style.reactionInactive,
    onPress: pressed
      ? () => removeReactionFromIssue(issue.id, type)
      : () => addReactionToIssue(issue.id, type)
  }

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
    <Text onPress={config.onPress} style={config.style}>
      {config.text}
    </Text>
  )
}

Reaction.displayName = Config.displayName
Reaction.propTypes = Config.propTypes
// Reaction.defaultProps = Config.defaultProps

export default Reaction
