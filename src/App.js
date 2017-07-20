import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import { store, client } from './state'
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

class Root extends React.Component {
  render () {
    return (
      <ApolloProvider store={store} client={client}>
        <AppWithNavigationState />
      </ApolloProvider>
    )
  }
}

export default Root
