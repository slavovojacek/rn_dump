import { StackNavigator } from 'react-navigation'

import ApolloScreen from '../../__examples/ApolloContainer/Apollo.container'
import GitHubIssues from '../../__examples/GitHubIssues/GitHubIssues.container'
import LoginScreen from '../../__examples/LoginContainer/Login.container'

export const Navigation = StackNavigator({
  Login: {screen: LoginScreen},
  Apollo: {screen: ApolloScreen},
  GitHubIssues: {screen: GitHubIssues},
})

const initialState = Navigation
  .router
  .getStateForAction(Navigation.router.getActionForPathAndParams('GitHubIssues'))

export default (state = initialState, action) => {
  const nextState = Navigation.router.getStateForAction(action, state)
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}
