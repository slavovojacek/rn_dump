import React, { Component } from 'react'
import { View, Text } from 'react-native'

import style, { defaultTextColor } from './InternalState.component.styles'

class InternalState extends Component {
  displayName = 'InternalState'

  constructor (props) {
    super(props)
    const {color = defaultTextColor, isWarningVisible = false} = props
    this.state = {color, isWarningVisible}
  }

  changeColor = newColor => {
    this.setState({color: newColor})
  }

  toggleIsWarningVisible = () => {
    this.setState(prevState => ({isWarningVisible: !prevState.isWarningVisible}))
  }

  render () {
    const {color, isWarningVisible} = this.state
    const coloredTextStyle = style.colouredText(color)
    const changeColor = () => this.changeColor('blue')

    return (
      <View>
        <Text style={coloredTextStyle} onPress={changeColor}>
          Click to change the color of this text to blue
        </Text>

        <Text onPress={this.toggleIsWarningVisible}>
          {isWarningVisible ? 'Hide this odd warning' : 'Show odd warning'}
        </Text>
      </View>
    )
  }
}

export default InternalState
