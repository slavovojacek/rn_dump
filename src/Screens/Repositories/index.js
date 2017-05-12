import React from 'react'
import { View, ListView, ScrollView, TextInput } from 'react-native'
import { None, Some, Ok, Err } from 'tsp-monads'

import H2 from '../../Components/H2'
import P from '../../Components/P'
import Link from '../../Components/Link'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import ViewStyle from '../../GlobalStyles/View'
import FlexStyle from '../../GlobalStyles/Flex'
import TextStyle from '../../GlobalStyles/Text'

class RepositoriesScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'List Repositories',
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
      username: params.defaultUserName
    }
  }

  componentDidMount () {
    this.state.username.match({
      some: _ => this.fetchRepos(this.state.username),
      none: null
    })
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
    this.timeout = null
  }

  fetchRepos (text) {
    const username = text.length === 0 ? None : Some(text)

    username.match({
      some: _ => {
        this.requestRepos(username)

        fetch(`https://api.github.com/users/${_}/repos`)
          .then(response => response
            .json()
            .then(data => response.ok ? Ok(data) : Err(data))
          )
          .then(data => data.is_ok() ? this.receiveReposOk(data.unwrap()) : this.receiveReposErr(data.unwrap_err()))
          .catch(console.error)
      },
      none: () => this.setState(prevState => {
        const dataSource = prevState.dataSource.cloneWithRows([])
        return {dataSource, username, error: None}
      })
    })
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

  onChangeText (text) {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => this.fetchRepos(text), 500)
  }

  render () {
    const {dataSource, fetching, error, username} = this.state

    return (
      <View style={[ViewStyle.padded, FlexStyle.column]}>
        <Header style={{backgroundColor: 'yellow'}}>
          <View style={{width: '100%'}}>
            <H2>{username.match({
              some: _ => `Listing ${_}’s repositories`,
              none: 'List repositories'
            })}</H2>
          </View>
        </Header>

        <TextInput
          style={{height: 40, marginTop: 10}}
          placeholder="Type GitHub username here..."
          defaultValue={username.unwrap_or('')}
          onChangeText={text => this.onChangeText(text.toLowerCase())}
        />

        <ScrollView contentContainerStyle={{flex: 1, paddingVertical: 10}}>
          {fetching
            ? <P>Loading...</P> : error.match({
              some: _ => <P>Oops! {_}</P>,
              none: dataSource.getRowCount() === 0
                ? username.match({
                  some: u => <P>No repositories for user {u}</P>,
                  none: null
                })
                : <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => <Link url={rowData.html_url}>{rowData.name}</Link>}/>
            })}
        </ScrollView>

        <Footer>
          <P>Some footer action</P>
        </Footer>
      </View>
    )
  }
}

export default RepositoriesScreen
