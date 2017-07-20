import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Some } from '@threestup/monads'

import Config from './Login.container.config'
import LoginContainerUI from './Login.container.ui'

import { apiFetch } from './lib/saga'

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
    const LoginContainerUIProps = {...this.props, signIn: this.signIn}
    return LoginContainerUI(LoginContainerUIProps)
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
