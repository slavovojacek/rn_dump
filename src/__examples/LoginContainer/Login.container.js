import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Some } from 'tsp-monads'

import Config from './Login.container.config'
import styles from './Login.container.styles'
import { apiFetch } from './lib/saga'

import LoginForm from '../LoginForm/Login.form'

class LoginContainer extends Component {
  signIn = values => {
    Some(values)
      .and_then(_ => Some(_.email))
      .match({
        some: _ => this.props.login(_),
        none: () => { throw new Error('Developer mistake – cannot call login with no email!') }
      })
  }

  render () {
    return (
      <View style={styles.container}>
        <LoginForm style={styles.container} onSubmit={this.signIn}/>

        <Text style={styles.container}>
          {JSON.stringify(this.props.loginState)}
        </Text>
      </View>
    )
  }
}

LoginContainer.displayName = Config.displayName
LoginContainer.propTypes = Config.propTypes
LoginContainer.defaultProps = Config.defaultProps

export const mapStateToProps = ({Login}) => ({
  loginState: Login
})

const mapDispatchToProps = dispatch => ({
  login: username => dispatch(apiFetch(username))
})

export { LoginContainer }
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
