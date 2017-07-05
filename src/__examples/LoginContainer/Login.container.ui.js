import React from 'react'
import { View, Text } from 'react-native'

import Config from './Login.container.ui.config'
import styles from './Login.container.styles'

import LoginForm from '../LoginForm/Login.form'

const LoginContainerUI = (props) => (
  <View style={styles.container}>
    <LoginForm style={styles.container} onSubmit={props.signIn}/>

    <Text style={styles.container}>
      {JSON.stringify(props.loginState)}
    </Text>
  </View>
)

LoginContainerUI.displayName = Config.displayName
LoginContainerUI.propTypes = Config.propTypes
LoginContainerUI.defaultProps = Config.defaultProps

export default LoginContainerUI
