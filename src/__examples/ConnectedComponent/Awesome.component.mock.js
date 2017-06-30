import { AwesomeComponent } from './Awesome.component'

class AwesomeComponentMock extends AwesomeComponent {
  setState (f) {
    if (typeof f === 'function') {
      this.state = {...this.state, ...f(this.state)}
    } else {
      this.state = {...this.state, ...f}
    }
  }
}

export { AwesomeComponentMock }
export default AwesomeComponentMock
