import * as React from 'react'
import { View } from 'react-native'

import Style from './stylesheet'
import FlexStyle from '../../GlobalStyles/Flex'

const Component = (props) => (
  <View style={[Style.footer, FlexStyle.centerHorizontally, FlexStyle.centerVertically]}>{props.children}</View>
)

export default Component
