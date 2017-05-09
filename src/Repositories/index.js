import React from 'react'
import { Text, View, ListView } from 'react-native'

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
      <View>
        <Text>All {params.user}'s repositories</Text>

        {fetching
          ? <Text>Loading...</Text> : (dataSource.getRowCount() === 0
            ? <Text>No repositories</Text> : (
              <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData.name}</Text>}/>
            ))}

      </View>
    )
  }
}

export default RepositoriesScreen
