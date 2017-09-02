import { connect } from 'react-redux'

import { apiFetch } from './lib/saga'
import Login from './Login.main.component'

export const mapStateToProps = ({Login}) => ({
  loginState: Login
})

const mapDispatchToProps = dispatch => ({
  login: username => dispatch(apiFetch(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
