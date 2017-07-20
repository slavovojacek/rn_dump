import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import { GH_API_TOKEN } from 'react-native-dotenv'

import NavigationReducer from './Navigation/reducer'
import LoginReducer from '../__examples/LoginContainer/lib/reducer'

let networkInterface = createNetworkInterface({uri: 'https://api.github.com/graphql'})
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) req.options.headers = {}
    const token = GH_API_TOKEN
    req.options.headers.authorization = token ? `Bearer ${token}` : null
    next()
  }
}])

const client = new ApolloClient({networkInterface})

const reducers = combineReducers({
  navigation: NavigationReducer,
  client: client.reducer(),
  form: FormReducer,
  Login: LoginReducer
})

const formReducer = combineReducers({
  form: FormReducer
})

export default reducers
export { client, formReducer }
