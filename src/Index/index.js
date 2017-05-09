import * as React from 'react'
import { View, Text, Button } from 'react-native'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  render () {
    const {navigate} = this.props.navigation

    const user = 'Slavomir'

    return (
      <View>
        <Text>Hello, World!</Text>

        <Text>By clicking the button below you will get a list of {user}'s repositories.</Text>

        <Button
          onPress={() => navigate('Repositories', {user})}
          title={`Load ${user}'s repositories`}
        />
      </View>
    )
  }
}

export default HomeScreen
