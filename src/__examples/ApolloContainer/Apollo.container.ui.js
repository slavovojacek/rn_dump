import React from 'react'
import { View, Text } from 'react-native'

import Config from './Apollo.container.ui.config'
import styles from './Apollo.container.styles'

const Loading = <Text>Loading...</Text>
const Error = e => <Text style={styles.error}>{e}</Text>
const Issues = (r, onClick) => r.issues.nodes.map(i =>
  <Text onPress={() => onClick(i.url)} style={styles.repo} key={i.id}>{i.title}</Text>
)

const UI = ({loading, error, repository, openIssue}) => (
  <View>
    {loading ? Loading : error.match({
      some: _ => Error(_),
      none: repository.match({
        some: repo => Issues(repo, openIssue),
        none: <Text>'N/A'</Text>
      })
    })}
  </View>
)

UI.displayName = Config.displayName
UI.propTypes = Config.propTypes
UI.defaultProps = Config.defaultProps

export default UI
