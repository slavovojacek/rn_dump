import { Some, None } from '@threestup/monads'
import React from 'react'
import { Text, View } from 'react-native'

// import styles from './Reaction.component.styles'
import Reaction from './Reaction.component'

import { noop } from '../../../Utils/misc'

const ReactionType = {
  DEFAULT: '_',
  THUMBS_UP: 'THUMBS_UP',
  THUMBS_DOWN: 'THUMBS_DOWN'
}

class Reactions extends React.Component {
  static userDef = {id: ''}
  static reactionDef = {id: '', content: '', user: Reactions.userDef}

  static hasMyReaction = (type = ReactionType.DEFAULT, reactions = [], me = None) => {
    const reaction = Some(reactions.find(({content = null}) => content === type))
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
        {Object
          .keys(ReactionType)
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
  Reactions, ReactionType
}

