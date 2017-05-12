import * as React from 'react'
import { Alert, View, ScrollView, Button, Text } from 'react-native'
import TouchID from 'react-native-touch-id'
import { None } from 'tsp-monads'

import H1 from '../../Components/H1'
import P from '../../Components/P'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import ViewStyle from '../../GlobalStyles/View'
import TextStyle from '../../GlobalStyles/Text'
import FlexStyle from '../../GlobalStyles/Flex'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  constructor (props) {
    super(props)

    this.state = {authenticated: false}
  }

  componentDidMount () {
    this.authenticate()
  }

  authenticate () {
    TouchID.isSupported()
      .then(success => TouchID.authenticate('To run this app')
        .then(success => this.setState(prevState => ({authenticated: true})))
        .catch(error => this.setState(prevState => ({authenticated: false}))))
      .catch(_ => {
        Alert.alert('Security risk detected', _.message, [
          {text: 'Proceed Anyway', onPress: () => this.setState(prevState => ({authenticated: true}))},
          {text: 'Cancel', onPress: () => this.setState(prevState => ({authenticated: false})), style: 'cancel'},
        ])
      })
  }

  render () {
    const {navigate} = this.props.navigation

    const defaultUserName = None

    return this.state.authenticated ? (
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
            title="List someone’s repositories"
          />
        </Footer>
      </View>
    ) : (
      <View style={[FlexStyle.centerVertically, FlexStyle.centerHorizontally, FlexStyle.flex1]}>
        <P style={{width: '70%', marginBottom: 10, textAlign: 'center'}}>
          You need to be authenticated to view this app
        </P>

        <Button
          onPress={() => this.authenticate()}
          title="Authenticate"
        />
      </View>
    )
  }
}

export default HomeScreen
