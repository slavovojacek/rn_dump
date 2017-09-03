import React from 'react'
import { storiesOf } from '@storybook/react-native'

import InternalState from './InternalState.component'
import { props as testDefaultProps } from './defaults'

storiesOf('InternalState', module)
  .add('default', () => (
    <InternalState {...testDefaultProps} />
  ))
