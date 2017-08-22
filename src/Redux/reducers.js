import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'

import NavigationReducer from './Navigation/reducer'
import ApolloClient from '../GraphQL/client'
import LoginReducer from '../__examples/LoginContainer/lib/reducer'

const reducers = combineReducers({
  navigation: NavigationReducer,
  client: ApolloClient.reducer(),
  form: FormReducer,
  Login: LoginReducer
})

const formReducer = combineReducers({
  form: FormReducer
})

export default reducers
export { formReducer }
