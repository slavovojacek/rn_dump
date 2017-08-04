import { Some, None } from '@threestup/monads'
import React from 'react'
import { View } from 'react-native'

import Config from './Reactions.component.config'
import styles from './Reactions.component.styles'

import Reaction from '../Reaction/Reaction.component'
import { reactionDef } from '../../../defs'

const ReactionType = {
  DEFAULT: 'DEFAULT',
  THUMBS_UP: 'THUMBS_UP',
  THUMBS_DOWN: 'THUMBS_DOWN'
}

const AllowedReactionTypes = Object
  .keys(ReactionType)
  .filter(type => type !== ReactionType.DEFAULT)

class Reactions extends React.Component {
  static hasMyReaction = (type = ReactionType.DEFAULT, reactions = [], me = None) => {
    const reaction = Some(
      reactions.find(reaction => reaction.content === type)
    )

    const {user} = reaction.unwrap_or(reactionDef())

    return me.match({
      some: _ => (user.id === _.id),
      none: false
    })
  }

  render () {
    const {reactions = [], me = None, ...rest} = this.props

    // To make React keys happy
    const uniqueStr = Math
      .random()
      .toString()

    return (
      <View style={styles.wrapper}>
        {AllowedReactionTypes
          .map((type) => (
            <Reaction
              key={`${type}_${uniqueStr}`}
              pressed={Reactions.hasMyReaction(type, reactions, me)}
              type={type}
              {...rest} />
          ))}
      </View>
    )
  }
}

Reactions.displayName = Config.displayName
Reactions.propTypes = Config.propTypes
// Reactions.defaultProps = Config.defaultProps

export {
  Reactions, ReactionType, AllowedReactionTypes
}

