import { throwIfNotFunction } from '@openmaths/utils'
import React, { Component } from 'react'
import { Text } from 'react-native'

import SomethingExternal from './lib/SomethingExternal'
import SomethingElseExternal from './lib/SomethingElseExternal'

class AwesomeComponent extends Component {
  static displayName = 'ExternalDependencies'

  componentDidMount () {
    const { logIntoConsole } = this.props

    throwIfNotFunction(logIntoConsole, '`logIntoConsole` has to be a Function', TypeError)

    logIntoConsole('value')
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

export default AwesomeComponent
