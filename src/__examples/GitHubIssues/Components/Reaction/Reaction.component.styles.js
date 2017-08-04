import { StyleSheet } from 'react-native'

const reaction = active => ({
  backgroundColor: active ? 'blue' : 'transparent',
  width: 40,
  height: 40,
  // lineHeight: 40,
  fontSize: 14,
  // fontWeight: 'bold',
  // textDecorationLine: 'underline',
  // textDecorationStyle: 'solid',
  marginRight: 5
})

export default StyleSheet.create({
  reactionActive: reaction(true),
  reactionInactive: reaction(false)
})
