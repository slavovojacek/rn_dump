import React from 'react'
import { storiesOf } from '@storybook/react-native'

import ApolloContainerUI from './Apollo.container.ui'

storiesOf('ApolloContainerUI', module)
  .add('default', () => (
    <ApolloContainerUI {...ApolloContainerUI.defaultProps} />
  ))
