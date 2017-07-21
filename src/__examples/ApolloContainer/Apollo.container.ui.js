import React from 'react'
import { View, Text } from 'react-native'

import styles from './Awesome.component.styles'

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
        none: 'N/A'
      })
    })}
  </View>
)

export default UI
