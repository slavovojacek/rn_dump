import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { LoginContainer } from './Login.container'
import { initialState as LoginState } from '../../Redux/Login/reducer'
import ReduxFormState from '../../../storybook/Decorators/ReduxFormState'

const initialState = {
  Login: LoginState
}

storiesOf('Login', module)
  .addDecorator(ReduxFormState)
  .add('screen', () => (
    <LoginContainer
      loginState={initialState.Login}
      somethingComplicated={initialState.Login.data.unwrap_or('N/A')}
      login={action('login called')}/>
  ))
