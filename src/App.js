import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import { store } from './state'
import ApolloClient from './GraphQL/client'
import { Navigation } from './Redux/Navigation/reducer'

class App extends React.Component {
  render () {
    return (
      <Navigation navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      })}/>
    )
  }
}

const AppWithNavigationState = connect((state) => ({navigation: state.navigation}))(App)

const Root = () => (
  <ApolloProvider store={store} client={ApolloClient}>
    <AppWithNavigationState />
  </ApolloProvider>
)

export default Root
