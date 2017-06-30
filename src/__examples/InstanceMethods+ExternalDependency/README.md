# Instance methods and External dependencies

**This example demonstrates how to test component instance methods easily
– without having to use enzyme or any other renderer.**

## Instance methods

Example:
```javascript
class AwesomeComponent extends Component {
  componentDidMount () {
    this.props.logIntoConsole('value')
  }
  
  ...
}
```

Test:
```javascript
test('logIntoConsole gets called upon mount', () => {
  let props = {...AwesomeComponent.defaultProps, logIntoConsole: jest.fn()}
  let subject = new AwesomeComponent(props)
  subject.componentDidMount()
  expect(props.logIntoConsole).toHaveBeenCalled()
})
```

Please note that to assert that `componentDidMount` does indeed call `props.logIntoConsole`
no prior render, or use of enzyme, or React's test renderer, is needed.

## External dependencies

Example:
```javascript
class AwesomeComponent extends Component {
  someHandler = value => {
    SomethingExternal.awesomeMethod(value)
  }
  
  ...
}
```

Test:
```javascript
test('someHandler calls SomethingExternal.awesomeMethod with correct argument', () => {
  let awesomeMethod = jest
    .spyOn(SomethingExternal, 'awesomeMethod')
    .mockImplementation(jest.fn())
  let subject = getInstance(AwesomeComponent.defaultProps)
  subject.someHandler('val')
  expect(awesomeMethod).toHaveBeenCalledWith('val')
})
```

For cases such as the one shown in this example, consider spying on the "external" method
(`SomethingExternal.awesomeMethod`) while also replacing the real implementation of 
the method with a mock function (`jest.fn()`).

Again, no prior render, use of enzyme, or other renderer is necessary.
