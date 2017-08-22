import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { GH_API_TOKEN } from 'react-native-dotenv'

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

export default client
