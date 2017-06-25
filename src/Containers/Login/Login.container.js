/*
 USE AND INTERFACE DOCUMENTATION GOES AT TOP OF FILE
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import styles from './Login.container.styles'
import { apiFetch } from '../../Redux/Login/saga'
import LoginForm from '../../Forms/Login/Login.form'

export class LoginContainer extends Component {
  componentDidMount () {
    this.props.login('slavomirvojacek')
  }

  onSignIn = (values) => {
    console.log(values)
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <LoginForm style={{flex: 1}} onSubmit={this.onSignIn}/>
        <Text style={{flex: 1}}>{JSON.stringify(this.props.loginState)}</Text>
      </View>
    )
  }
}

LoginContainer.propTypes = {}

const mapStateToProps = state => ({
  loginState: state.Login
})

const mapDispatchToProps = dispatch => ({
  login: (username) => dispatch(apiFetch(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
