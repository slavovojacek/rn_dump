import { StyleSheet } from 'react-native'

const defaultTextColor = 'black'

export {
  defaultTextColor
}

export default StyleSheet.create({
  colouredText: (color = defaultTextColor) => ({
    color
  })
})
