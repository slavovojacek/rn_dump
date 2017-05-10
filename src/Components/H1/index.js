import * as React from 'react'
import { Text } from 'react-native'

import Style from './stylesheet'

const Component = ({style, ...rest}) => <Text style={[Style.h1, style]}>{rest.children}</Text>

export default Component
