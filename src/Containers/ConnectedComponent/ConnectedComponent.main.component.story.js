import { Some } from '@threestup/monads'
import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { props as testDefaultProps } from './defaults'
import AwesomeComponent from './ConnectedComponent.main.component'

storiesOf('AwesomeComponent', module)
  .add('default', () => (
    <AwesomeComponent {...testDefaultProps} />
  ))
  .add('loading', () => {
    const props = {
      ...testDefaultProps,
      showLoading: true
    }
    return <AwesomeComponent {...props} />
  })
  .add('error', () => {
    const props = {
      ...testDefaultProps,
      error: Some('Err!')
    }
    return <AwesomeComponent {...props} />
  })
  .add('data present', () => {
    const props = {
      ...testDefaultProps,
      username: Some('Some User')
    }
    return <AwesomeComponent {...props} />
  })
