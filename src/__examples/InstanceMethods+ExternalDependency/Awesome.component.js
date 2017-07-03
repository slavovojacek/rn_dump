import React, { Component } from 'react'
import { Text } from 'react-native'

import Config from './Awesome.component.config'
import SomethingExternal from './lib/SomethingExternal'
import SomethingElseExternal from './lib/SomethingElseExternal'

class AwesomeComponent extends Component {
  componentDidMount () {
    this.props.logIntoConsole('value')
  }

  someHandler = value => {
    SomethingExternal.awesomeMethod(value)
    SomethingElseExternal.anotherAwesomeMethod(value)
  }

  render () {
    return (
      <Text>Some Text</Text>
    )
  }
}

AwesomeComponent.displayName = Config.displayName
AwesomeComponent.propTypes = Config.propTypes
AwesomeComponent.defaultProps = Config.defaultProps

export { AwesomeComponent }
export default AwesomeComponent
