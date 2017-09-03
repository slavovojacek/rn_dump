import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { props as testDefaultProps } from './defaults'
import ExternalDependencies from './ExternalDependencies.component'

storiesOf('ExternalDependencies', module)
  .add('default', () => (
    <ExternalDependencies {...testDefaultProps} />
  ))
