import { throwIfNotString } from '@openmaths/utils'
import React from 'react'
import { View, Text } from 'react-native'

import styles from './Login.main.component.styles'

import LoginForm from '../LoginForm/Login.form'

class Login extends React.Component {
  static displayName = 'LoginContainer'

  signIn = values => {
    const {email, password} = values

    throwIfNotString(email, '`email` needs to be present for signIn', TypeError)
    throwIfNotString(password, '`email` needs to be present for signIn', TypeError)

    this.props.login({
      e: email, p: password
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <LoginForm style={styles.container} onSubmit={this.props.signIn}/>

        <Text style={styles.container}>
          {JSON.stringify(this.props.loginState)}
        </Text>
      </View>
    )
  }
}

export default Login
