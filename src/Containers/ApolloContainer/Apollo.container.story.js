import React from 'react'
import { storiesOf } from '@storybook/react-native'

import ApolloContainerUI from './Apollo.container.view'

storiesOf('ApolloContainerUI', module)
  .add('default', () => (
    <ApolloContainerUI {...ApolloContainerUI.defaultProps} />
  ))
