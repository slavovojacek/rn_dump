import { throwIfNotObject } from '@openmaths/utils'
import { Some, None, get_in } from '@threestup/monads'
import React from 'react'
import { View } from 'react-native'

import Config from './Reactions.component.config'
import styles from './Reactions.component.styles'

import Reaction from '../Reaction/Reaction.component'
import { ReactionType, AllowedReactionTypes } from '../../Constants/ReactionType'

class Reactions extends React.Component {
  static hasMyReaction = (reactions = None, type = ReactionType.DEFAULT, me = None) => {
    const myUserId = me.map(_ => _.id).unwrap_or('')

    return reactions
      .and_then(_ => Some(_.find(r => r.content === type)))
      .and_then(_ => get_in(_, 'user.id'))
      .match({
        some: _ => (_ === myUserId),
        none: false
      })
  }

  render () {
    const {issue, me = None, ...rest} = this.props

    throwIfNotObject(issue)

    const reactions = get_in(issue, 'reactions.nodes')

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
              pressed={Reactions.hasMyReaction(reactions, type, me)}
              type={type}
              {...rest} />
          ))}
      </View>
    )
  }
}

Reactions.displayName = Config.displayName
Reactions.propTypes = Config.propTypes

export { ReactionType, AllowedReactionTypes }
export default Reactions

