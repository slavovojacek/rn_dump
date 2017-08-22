const ReactionType = {
  DEFAULT: 'DEFAULT',
  THUMBS_UP: 'THUMBS_UP',
  THUMBS_DOWN: 'THUMBS_DOWN'
}

const AllowedReactionTypes = Object
  .keys(ReactionType)
  .filter(type => type !== ReactionType.DEFAULT)

export {
  ReactionType, AllowedReactionTypes
}
