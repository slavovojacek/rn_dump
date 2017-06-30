import { StackNavigator } from 'react-navigation'

import LoginScreen from '../../Containers/Login/Login.container'

export const Navigation = StackNavigator({
  Login: {screen: LoginScreen}
})

const initialState = Navigation
  .router
  .getStateForAction(Navigation.router.getActionForPathAndParams('Login'))

export default (state = initialState, action) => {
  const nextState = Navigation.router.getStateForAction(action, state)
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}
