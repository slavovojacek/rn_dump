import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  centerVertically: {
    alignItems: 'center'
  },
  centerHorizontally: {
    justifyContent: 'center'
  },
  left: {
    justifyContent: 'flex-start'
  },
  right: {
    justifyContent: 'flex-start'
  },
  top: {
    alignItems: 'flex-start'
  },
  bottom: {
    alignItems: 'flex-end'
  }
})

export default Style
