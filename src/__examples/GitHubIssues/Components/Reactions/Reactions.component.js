import { Some, None } from '@threestup/monads'
import React from 'react'
import { View } from 'react-native'

import Reaction from '../Reaction/Reaction.component'

const ReactionType = {
  DEFAULT: '_',
  THUMBS_UP: 'THUMBS_UP',
  THUMBS_DOWN: 'THUMBS_DOWN'
}

const AllowedReactionTypes = Object
  .keys(ReactionType)
  .filter(type => type !== ReactionType.DEFAULT)

class Reactions extends React.Component {
  static userDef = {id: ''}
  static reactionDef = {id: '', content: '', user: Reactions.userDef}

  static hasMyReaction = (type = ReactionType.DEFAULT, reactions = [], me = None) => {
    const reaction = Some(reactions.find(reaction => reaction.content === type))
    const {user} = reaction.unwrap_or(Reactions.reactionDef)

    return me.match({
      some: _ => (user.id === _.id),
      none: false
    })
  }

  render () {
    const {reactions = [], me = None, ...rest} = this.props

    const uniqueStr = Math
      .random()
      .toString()

    return (
      <View style={{flexDirection: 'row'}}>
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

export {
  Reactions, ReactionType, AllowedReactionTypes
}

