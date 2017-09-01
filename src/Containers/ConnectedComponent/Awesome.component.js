import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Config from './Awesome.component.config'
import styles from './Awesome.component.styles'

class AwesomeComponent extends Component {
  static Loading = <Text>Loading...</Text>
  static Error = e => <Text style={styles.error}>{e}</Text>
  static Username = u => <Text style={styles.username}>{u.unwrap_or('N/A')}</Text>

  componentDidMount () {
    this.props.apiFetch('John Doe')
  }

  render () {
    const {error, username, showLoading} = this.props

    return (
      <View>
        {showLoading
          ? AwesomeComponent.Loading : error.match({
            some: AwesomeComponent.Error, // @TODO is this actually working?
            none: AwesomeComponent.Username(username)
          })}
      </View>
    )
  }
}

AwesomeComponent.displayName = Config.displayName
AwesomeComponent.propTypes = Config.propTypes
AwesomeComponent.defaultProps = Config.defaultProps

export default AwesomeComponent
