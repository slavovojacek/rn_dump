# Instance methods and External dependencies

**This example demonstrates how component instance methods can be easily tested
– often without having to use enzyme or any kind of renderer.**

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

In our first test, we can see that to assert that `componentDidMount` calls `props.logIntoConsole`
does not require prior render, or use of enzyme, or React's test renderer.

It is as simple as instantiating our class with the props we wish to pass,
and then calling the method (`componentDidMount`) on this instance.

## External dependencies

Example
```javascript
class AwesomeComponent extends Component {
  someHandler = value => {
    SomethingExternal.awesomeMethod(value)
  }
  
  ...
}
```

For cases such as the one shown in this example, consider spying on the "external" method
(`SomethingExternal.awesomeMethod`) while also replacing the real implementation of 
the method with a mock function (`jest.fn()`).
