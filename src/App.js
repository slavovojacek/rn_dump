import React from 'react'
import { Provider, connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import store from './state'
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
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default Root
