/*
    USE AND INTERFACE DOCUMENTATION GOES AT TOP OF FILE
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import styles from './Login.container.styles'
import { apiFetch } from '../../Redux/Login/saga'

export class LoginContainer extends Component {
  componentDidMount() {
    this.props.login('slavomirvojacek')
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props.loginState)}</Text>
      </View>
    )
  }
}

LoginContainer.propTypes = {
}

const mapStateToProps = state => ({
  loginState: state.Login
})

const mapDispatchToProps = dispatch => ({
  login: (username) => dispatch(apiFetch(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
