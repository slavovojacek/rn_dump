import { StackNavigator } from 'react-navigation'

import ApolloScreen from '../../__examples/ApolloContainer/Apollo.container'
import GitHubIssues from '../../Components/Smart/GitHubIssues/GitHubIssues.container'
import IssuesAndReactions from '../../Components/Smart/IssuesAndReactions'
import LoginScreen from '../../__examples/LoginContainer/Login.container'

export const Navigation = StackNavigator({
  Login: {screen: LoginScreen},
  Apollo: {screen: ApolloScreen},
  GitHubIssues: {screen: GitHubIssues},
  IssuesAndReactions: {screen: IssuesAndReactions},
})

const initialState = Navigation
  .router
  .getStateForAction(Navigation.router.getActionForPathAndParams('IssuesAndReactions'))

export default (state = initialState, action) => {
  const nextState = Navigation.router.getStateForAction(action, state)
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}
