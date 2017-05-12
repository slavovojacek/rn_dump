import * as React from 'react'
import { Alert, Text, Linking } from 'react-native'

import Style from './stylesheet'

const Component = ({style, ...rest}) => {
  const openLink = () => Linking.canOpenURL(rest.url).then(supported => {
    if (supported) Linking.openURL(rest.url)
    else Alert.alert('Oops!', `Don't know how to open URI: ${rest.url}`)
  })

  return <Text onPress={openLink} style={[Style.link, style]}>{rest.children}</Text>
}

export default Component
