import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import Config from './Awesome.component.config'
import styles from './Awesome.component.styles'
import { apiFetch } from './lib/saga'

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
            some: AwesomeComponent.Error,
            none: AwesomeComponent.Username(username)
          })}
      </View>
    )
  }
}

AwesomeComponent.displayName = Config.displayName
AwesomeComponent.propTypes = Config.propTypes
AwesomeComponent.defaultProps = Config.defaultProps

const mapStateToProps = ({AwesomeState}) => ({
  username: AwesomeState.data
    .map(_ => _.user.name),
  error: AwesomeState.error,
  showLoading: AwesomeState.isPending
})

const mapDispatchToProps = dispatch => ({
  apiFetch: user => dispatch(apiFetch(user.name))
})

export { AwesomeComponent, mapStateToProps, mapDispatchToProps }
export default connect(mapStateToProps, mapDispatchToProps)(AwesomeComponent)
