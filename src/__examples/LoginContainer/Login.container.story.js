import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { LoginContainer } from './Login.container'
import { initialState as LoginState } from './lib/reducer'

import ReduxFormState from '../../../storybook/Decorators/ReduxFormState'

storiesOf('LoginContainer', module)
  .addDecorator(ReduxFormState)
  .add('default', () => (
    <LoginContainer loginState={LoginState} login={action('login called')}/>
  ))
