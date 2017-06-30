import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'

import NavigationReducer from './Navigation/reducer'
import LoginReducer from './Login/reducer'

export default combineReducers({
  navigation: NavigationReducer,
  form: FormReducer,
  Login: LoginReducer
})

export const formReducer = combineReducers({
  form: FormReducer
})
