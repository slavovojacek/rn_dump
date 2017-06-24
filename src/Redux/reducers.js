import { combineReducers } from 'redux'

import NavigationReducer from './Navigation/reducer'
import LoginReducer from './Login/reducer'

export default combineReducers({
  navigation: NavigationReducer,
  Login: LoginReducer
})
