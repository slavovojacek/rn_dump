import React from 'react'
import { View, ListView, ScrollView, TextInput } from 'react-native'
import { None, Some, Ok, Err } from 'tsp-monads'

import H2 from '../../Components/H2'
import P from '../../Components/P'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import ViewStyle from '../../GlobalStyles/View'
import FlexStyle from '../../GlobalStyles/Flex'
import TextStyle from '../../GlobalStyles/Text'

class RepositoriesScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.user}’s Repositories`,
  })

  timeout = null

  constructor (props) {
    super(props)

    const {params} = props.navigation.state

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([]),
      fetching: false,
      error: None,
      username: params.user
    }
  }

  componentDidMount () {
    this.fetchRepos(this.state.username)
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
    this.timeout = null
  }

  fetchRepos (username) {
    this.requestRepos(username)

    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response
        .json()
        .then(_ => response.ok ? Ok(_) : Err(_))
      )
      .then(_ => _.is_ok() ? this.receiveReposOk(_.unwrap()) : this.receiveReposErr(_.unwrap_err()))
      .catch(console.error)
  }

  requestRepos (username) {
    this.setState(prevState => ({fetching: true, username}))
  }

  receiveReposOk (repos: []) {
    this.setState(prevState => {
      const dataSource = prevState.dataSource.cloneWithRows(repos)
      return {dataSource, fetching: false, error: None}
    })
  }

  receiveReposErr (err) {
    this.setState(prevState => ({error: Some(err.message).or(Some('Unknown error occurred')), fetching: false}))
  }

  onChangeText (username) {
    clearTimeout(this.timeout)

    if (username.length > 2)
      this.timeout = setTimeout(() => this.fetchRepos(username), 500)
  }

  render () {
    const {dataSource, fetching, error, username} = this.state

    return (
      <View style={[ViewStyle.padded, FlexStyle.column]}>
        <Header>
          <H2 style={TextStyle.alignCenter}>Listing {username}’s repositories</H2>
        </Header>

        <TextInput
          style={{height: 40}}
          placeholder="Type GitHub username here..."
          defaultValue={username}
          onChangeText={text => this.onChangeText(text.toLowerCase())}
        />

        <View style={{flex: 1}}>
          <ScrollView >
            {fetching
              ? <P>Loading...</P> : error.match({
                some: _ => <P>Oops! {_}</P>,
                none: dataSource.getRowCount() === 0
                  ? <P>No repositories for user {username}</P>
                  : <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <P>{rowData.name}</P>}/>
              })}
          </ScrollView>
        </View>

        <Footer>
          <P>Some footer action</P>
        </Footer>
      </View>
    )
  }
}

export default RepositoriesScreen
