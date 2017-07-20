import { StackNavigator } from 'react-navigation'

import LoginScreen from '../../__examples/LoginContainer/Login.container'
import ApolloScreen from '../../__examples/ApolloContainer/Apollo.container'

export const Navigation = StackNavigator({
  Login: {screen: LoginScreen},
  Apollo: {screen: ApolloScreen},
})

const initialState = Navigation
  .router
  .getStateForAction(Navigation.router.getActionForPathAndParams('Apollo'))

export default (state = initialState, action) => {
  const nextState = Navigation.router.getStateForAction(action, state)
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}
