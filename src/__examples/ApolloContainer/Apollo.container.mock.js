import { ApolloContainer } from './Apollo.container'

class ApolloContainerMock extends ApolloContainer {
  setState (f) {
    if (typeof f === 'function') {
      this.state = {...this.state, ...f(this.state)}
    } else {
      this.state = {...this.state, ...f}
    }
  }
}

export { ApolloContainerMock }
export default ApolloContainerMock
