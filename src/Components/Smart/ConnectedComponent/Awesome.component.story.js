import { Some } from '@threestup/monads'
import React from 'react'
import { storiesOf } from '@storybook/react-native'

import AwesomeComponent from './Awesome.component'

storiesOf('AwesomeComponent', module)
  .add('default', () => (
    <AwesomeComponent {...AwesomeComponent.defaultProps} />
  ))
  .add('loading', () => {
    const props = {
      ...AwesomeComponent.defaultProps,
      showLoading: true
    }
    return <AwesomeComponent {...props} />
  })
  .add('error', () => {
    const props = {
      ...AwesomeComponent.defaultProps,
      error: Some('Err!')
    }
    return <AwesomeComponent {...props} />
  })
  .add('data present', () => {
    const props = {
      ...AwesomeComponent.defaultProps,
      username: Some('Some User')
    }
    return <AwesomeComponent {...props} />
  })
