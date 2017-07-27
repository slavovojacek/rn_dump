// Sometimes, we might want to test internal state changes without having to render.
// This overrides the setState method to only update the state, without interacting with
// React's internals such as the scheduler.
const mockSetState = (Component) => {
  return class extends Component {
    setState (f) {
      if (typeof f === 'function') {
        this.state = {...this.state, ...f(this.state)}
      } else {
        this.state = {...this.state, ...f}
      }
    }
  }
}

export { mockSetState }
