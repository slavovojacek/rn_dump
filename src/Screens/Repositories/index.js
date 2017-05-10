import React from 'react'
import { View, ListView, ScrollView } from 'react-native'

import H2 from '../../Components/H2'
import P from '../../Components/P'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import ViewStyle from '../../GlobalStyles/View'
import FlexStyle from '../../GlobalStyles/Flex'

class RepositoriesScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.user}'s Repositories`,
  })

  constructor (props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([]),
      fetching: false
    }
  }

  componentDidMount () {
    this.setState(prevState => ({fetching: true}))

    fetch('https://api.github.com/users/slavomirvojacek/repos')
      .then(_ => _.json())
      .then(_ => this.updateDataSource(_))
      .catch(console.error)
  }

  updateDataSource (repos: []) {
    this.setState(prevState => {
      const dataSource = prevState.dataSource.cloneWithRows(repos)
      return {dataSource, fetching: false}
    })
  }

  render () {
    const {params} = this.props.navigation.state
    const {dataSource, fetching} = this.state

    return (
      <View style={[ViewStyle.padded, FlexStyle.column]}>
        <Header>
          <H2>{params.user}'s repositories</H2>
        </Header>

        <View style={{flex: 1}}>
          <ScrollView >
            {fetching
              ? <P>Loading...</P> : (dataSource.getRowCount() === 0
                ? <P>No repositories</P> : (
                  <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <P>{rowData.name}</P>}/>
                ))}
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
