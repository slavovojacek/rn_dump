import * as React from 'react'
import { View, ScrollView, Button } from 'react-native'
import { None } from 'tsp-monads'

import H1 from '../../Components/H1'
import P from '../../Components/P'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
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
        <Header>
          <H1 style={TextStyle.alignCenter}>Hello, World!</H1>
        </Header>

        <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
          <P style={TextStyle.alignCenter}>
            By clicking the button below you will be able to list GitHub repositories by user.
          </P>
        </ScrollView>

        <Footer>
          <Button
            onPress={() => navigate('Repositories', {defaultUserName})}
            title={`List someone’s repositories`}
          />
        </Footer>
      </View>
    )
  }
}

export default HomeScreen
