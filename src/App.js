import React from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './Screens/Index'
import RepositoriesScreen from './Screens/Repositories'

const SimpleApp = StackNavigator({
  Home: {screen: HomeScreen},
  Repositories: {screen: RepositoriesScreen},
})

AppRegistry.registerComponent('AwesomeProject', () => SimpleApp)
