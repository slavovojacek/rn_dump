import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Config from './Awesome.component.config'

class AwesomeComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {color: props.color, isWarningVisible: props.isWarningVisible}
  }

  changeColor = newColor => {
    this.setState({color: newColor})
  }

  toggleIsWarningVisible = () => {
    this.setState(prevState => ({isWarningVisible: !prevState.isWarningVisible}))
  }

  render () {
    const {color, isWarningVisible} = this.state
    const coloredTextStyle = {color}

    return (
      <View>
        <Text style={coloredTextStyle} onPress={() => this.changeColor('blue')}>
          Click to change the color of this text to blue
        </Text>

        <Text onPress={this.toggleIsWarningVisible}>
          {isWarningVisible ? 'Hide this odd warning' : 'Show odd warning'}
        </Text>
      </View>
    )
  }
}

AwesomeComponent.displayName = Config.displayName
AwesomeComponent.propTypes = Config.propTypes
AwesomeComponent.defaultProps = Config.defaultProps

export { AwesomeComponent }
export default AwesomeComponent
