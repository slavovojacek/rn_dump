import React from 'react'
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import ChatScreen from './ChatScreen'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: {screen: HomeScreen},
  Chat: {screen: ChatScreen},
})

AppRegistry.registerComponent('AwesomeProject', () => SimpleApp)