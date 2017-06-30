import { LoginContainer } from './Login.container'

class LoginContainerMock extends LoginContainer {
  setState (f) {
    if (typeof f === 'function') {
      this.state = {...this.state, ...f(this.state)}
    } else {
      this.state = {...this.state, ...f}
    }
  }
}

export { LoginContainerMock }
export default LoginContainerMock
