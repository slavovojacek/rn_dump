import { throwIfNotBoolean, throwIfNotOption, throwIfNotFunction } from '@openmaths/utils'
import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './ConnectedComponent.main.component.styles'

const Loading = () => <Text>Loading...</Text>
const Error = e => <Text style={styles.error}>{e}</Text>
const Username = u => <Text style={styles.username}>{u.unwrap_or('N/A')}</Text>

class AwesomeComponent extends Component {
  static displayName = 'ConnectedComponent'

  componentDidMount () {
    const { apiFetch } = this.props

    throwIfNotFunction(apiFetch, '`apiFetch` has to be a Function', TypeError)

    apiFetch('John Doe')
  }

  render () {
    const {error, username, showLoading} = this.props

    throwIfNotBoolean(showLoading)
    throwIfNotOption(username)
    throwIfNotOption(error)

    return (
      <View>
        {showLoading
          ? Loading : error.match({
            some: Error,
            none: Username(username),
          })}
      </View>
    )
  }
}

export default AwesomeComponent
