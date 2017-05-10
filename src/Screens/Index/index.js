import * as React from 'react'
import { View, Button } from 'react-native'
import { None } from 'tsp-monads'

import H1 from '../../Components/H1'
import P from '../../Components/P'
import ViewStyle from '../../GlobalStyles/View'
import TextStyle from '../../GlobalStyles/Text'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  render () {
    const {navigate} = this.props.navigation

    const defaultUserName = None

    return (
      <View style={ViewStyle.padded}>
        <H1 style={TextStyle.alignCenter}>Hello, World!</H1>

        <P style={TextStyle.alignCenter}>
          By clicking the button below you will be able to list GitHub repositories by user.
        </P>

        <Button
          onPress={() => navigate('Repositories', {defaultUserName})}
          title={`List someone’s repositories`}
        />
      </View>
    )
  }
}

export default HomeScreen
