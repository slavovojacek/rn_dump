import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import configureStore from 'redux-mock-store'

import reducers, { formReducer } from './Redux/reducers'
import sagas from './Redux/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

const formStore = createStore(
  formReducer, // applyMiddleware(sagaMiddleware)
)

const mockStore = configureStore()
const getMockStore = state => mockStore(state)

export { formStore, getMockStore }
export default store
