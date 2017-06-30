import React from 'react'
import { storiesOf } from '@storybook/react-native'

import AwesomeComponent from './Awesome.component'

storiesOf('AwesomeComponent', module)
  .add('default', () => (
    <AwesomeComponent {...AwesomeComponent.defaultProps} />
  ))
