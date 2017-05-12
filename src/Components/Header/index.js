import * as React from 'react'
import { View } from 'react-native'

import Style from './stylesheet'
import FlexStyle from '../../GlobalStyles/Flex'

const Component = ({style, ...rest}) => (
  <View style={[Style.header, FlexStyle.centerVertically, FlexStyle.centerHorizontally, style]}>
    {rest.children}
  </View>
)

export default Component
